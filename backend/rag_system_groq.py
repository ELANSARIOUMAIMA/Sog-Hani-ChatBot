import json
import pickle
import faiss
import numpy as np
from sentence_transformers import SentenceTransformer
from groq import Groq
from typing import List, Dict
import os
from dotenv import load_dotenv

load_dotenv()

class RAGSystem:
    def __init__(self, data_dir='./data'):
        self.data_dir = data_dir
        print("  📚 Loading vector database...")
        self._load_vector_database()
        print("  🤖 Connecting to Groq API...")
        self._load_llm()

    def _load_vector_database(self):
        with open(f'{self.data_dir}/vector_db_package.pkl', 'rb') as f:
            vector_db_package = pickle.load(f)

        self.index = faiss.deserialize_index(vector_db_package['index'])
        self.articles = vector_db_package['articles']

        model_name = vector_db_package['model_name']
        self.embedding_model = SentenceTransformer(model_name)

        print(f"     ✓ {len(self.articles)} articles loaded")

    def _load_llm(self):
        api_key = os.getenv("GROQ_API_KEY")
        self.client = Groq(api_key=api_key)
        self.model_name = "llama-3.1-8b-instant"
        print(f"     ✓ Groq model ready: {self.model_name}")

    def retrieve(self, query: str, top_k: int = 3) -> List[Dict]:
        query_embedding = self.embedding_model.encode([query], convert_to_numpy=True)
        distances, indices = self.index.search(query_embedding.astype('float32'), top_k)

        results = []
        for idx in indices[0]:
            article = self.articles[idx]
            results.append({
                'article_number': article['article_number'],
                'content': article['cleaned_content']
            })
        return results

    def generate(self, query: str, retrieved_articles: List[Dict]) -> str:
        context = ""
        for article in retrieved_articles:
            context += f"\nالمادة {article['article_number']}:\n{article['content']}\n"

        system_message = """أنت مساعد قانوني متخصص في مدونة السير على الطرق المغربية.
مهمتك هي الإجابة على أسئلة المواطنين بدقة بناءً فقط على المواد القانونية المقدمة لك.

قواعد مهمة:
1. أجب بناءً فقط على المعلومات الموجودة في المواد المقدمة
2. اذكر دائما أرقام المواد التي استخدمتها في إجابتك
3. إذا لم تجد الإجابة في المواد المقدمة، قل ذلك بوضوح
4. كن دقيقاً ومختصراً
5. استخدم لغة بسيطة يفهمها المواطن العادي"""

        user_message = f"""السؤال: {query}

المواد القانونية ذات الصلة:
{context}

يرجى الإجابة على السؤال بناءً على المواد القانونية المذكورة أعلاه."""

        response = self.client.chat.completions.create(
            model=self.model_name,
            messages=[
                {"role": "system", "content": system_message},
                {"role": "user", "content": user_message}
            ],
            temperature=0.3,
            max_tokens=512
        )

        return response.choices[0].message.content.strip()

    def query(self, question: str, top_k: int = 3) -> Dict:
        retrieved_articles = self.retrieve(question, top_k)
        answer = self.generate(question, retrieved_articles)
        sources = [str(article['article_number']) for article in retrieved_articles]

        return {
            'answer': answer,
            'sources': sources,
            'retrieved_articles': retrieved_articles
        }