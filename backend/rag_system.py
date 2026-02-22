# backend/rag_system.py - Your Colab Code Organized

import json
import pickle
import torch
import faiss
import numpy as np
from sentence_transformers import SentenceTransformer
from transformers import AutoTokenizer, AutoModelForCausalLM, BitsAndBytesConfig
from typing import List, Dict

class RAGSystem:
    def __init__(self, data_dir='./data'):
        self.data_dir = data_dir
        print("  📚 Loading vector database...")
        self._load_vector_database()
        print("  🤖 Loading language model...")
        self._load_llm()
    
    def _load_vector_database(self):
        # Load saved vector DB
        with open(f'{self.data_dir}/vector_db_package.pkl', 'rb') as f:
            vector_db_package = pickle.load(f)
        
        # Reconstruct FAISS index
        self.index = faiss.deserialize_index(vector_db_package['index'])
        self.articles = vector_db_package['articles']
        
        # Load embedding model
        model_name = vector_db_package['model_name']
        self.embedding_model = SentenceTransformer(model_name)
        
        print(f"     ✓ {len(self.articles)} articles loaded")
    
    def _load_llm(self):
        model_name = "Qwen/Qwen2.5-3B-Instruct"
        
        # Load tokenizer
        self.tokenizer = AutoTokenizer.from_pretrained(model_name)
        
        # Check device
        device = "cuda" if torch.cuda.is_available() else "cpu"
        print(f"     ✓ Device: {device}")
        
        # Load model with quantization
        if device == "cuda":
            quantization_config = BitsAndBytesConfig(
                load_in_4bit=True,
                bnb_4bit_compute_dtype=torch.float16
            )
            self.llm = AutoModelForCausalLM.from_pretrained(
                model_name,
                quantization_config=quantization_config,
                device_map="auto",
                trust_remote_code=True
            )
        else:
            self.llm = AutoModelForCausalLM.from_pretrained(
                model_name,
                trust_remote_code=True,
                low_cpu_mem_usage=True
            )
            self.llm = self.llm.to(device)
        
        print(f"     ✓ Model loaded")
    
    def retrieve(self, query: str, top_k: int = 3) -> List[Dict]:
        """Retrieve relevant articles"""
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
        """Generate answer using LLM"""
        # Prepare context
        context = ""
        for article in retrieved_articles:
            context += f"\nالمادة {article['article_number']}:\n{article['content']}\n"
        
        # System message
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

        # Format messages
        messages = [
            {"role": "system", "content": system_message},
            {"role": "user", "content": user_message}
        ]
        
        # Apply chat template
        text = self.tokenizer.apply_chat_template(
            messages,
            tokenize=False,
            add_generation_prompt=True
        )
        
        # Tokenize
        model_inputs = self.tokenizer([text], return_tensors="pt").to(self.llm.device)
        
        # Generate
        with torch.no_grad():
            generated_ids = self.llm.generate(
                **model_inputs,
                max_new_tokens=512,
                temperature=0.3,
                do_sample=True,
                top_p=0.9,
                pad_token_id=self.tokenizer.eos_token_id
            )
        
        # Decode
        generated_ids = [
            output_ids[len(input_ids):] 
            for input_ids, output_ids in zip(model_inputs.input_ids, generated_ids)
        ]
        
        answer = self.tokenizer.batch_decode(generated_ids, skip_special_tokens=True)[0]
        
        return answer.strip()
    
    def query(self, question: str, top_k: int = 3) -> Dict:
        """Complete RAG pipeline"""
        # Retrieve
        retrieved_articles = self.retrieve(question, top_k)
        
        # Generate
        answer = self.generate(question, retrieved_articles)
        
        # Extract sources
        sources = [str(article['article_number']) for article in retrieved_articles]
        
        return {
            'answer': answer,
            'sources': sources,
            'retrieved_articles': retrieved_articles
        }