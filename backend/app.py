# backend/app.py - Simple Flask Backend

from flask import Flask, request, jsonify
from flask_cors import CORS
#from rag_system import RAGSystem
from rag_system_groq import RAGSystem

app = Flask(__name__)
CORS(app)  # Allow frontend to connect

# Initialize RAG system once at startup
print("🔄 Loading RAG system...")
rag = RAGSystem()
print("✅ RAG system ready!\n")

@app.route('/', methods=['GET'])
def home():
    return jsonify({
        'status': 'running',
        'message': 'Moroccan Highway Code RAG API'
    })

@app.route('/api/ask', methods=['POST'])
def ask():
    """
    Simple endpoint for questions
    
    Request:  {"question": "ما هو السن الأدنى؟"}
    Response: {"answer": "...", "sources": ["11", "10"]}
    """
    try:
        data = request.get_json()
        question = data.get('question', '')
        
        if not question:
            return jsonify({'error': 'No question provided'}), 400
        
        print(f"📝 Question: {question}")
        
        # Get answer from RAG
        result = rag.query(question, top_k=3)
        
        print(f"✅ Answer generated\n")
        
        return jsonify({
            'answer': result['answer'],
            'sources': result['sources']
        })
    
    except Exception as e:
        print(f"❌ Error: {str(e)}\n")
        return jsonify({'error': str(e)}), 500

@app.route('/api/health', methods=['GET'])
def health():
    return jsonify({
        'status': 'healthy',
        'total_articles': len(rag.articles)
    })

if __name__ == '__main__':
    print("="*60)
    print("🚀 Moroccan Highway Code RAG Server")
    print("="*60)
    print("📡 Endpoint: http://localhost:5000/api/ask")
    print("🏥 Health:   http://localhost:5000/api/health")
    print("="*60)
    print("\nSet in frontend/.env:")
    print("VITE_API_URL=http://localhost:5000/api/ask\n")
    print("="*60)
    
    #app.run(host='0.0.0.0', port=5000, debug=True)
    app.run(host='0.0.0.0', port=5000, debug=False) 