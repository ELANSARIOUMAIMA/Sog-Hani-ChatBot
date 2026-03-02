# backend/app.py - Simple Flask Backend

import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from rag_system import RAGSystem

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
    port = int(os.getenv('PORT', 5000))
    print("="*60)
    print("🚀 Moroccan Highway Code RAG Server")
    print("="*60)
    print(f"📡 Endpoint: http://localhost:{port}/api/ask")
    print(f"🏥 Health:   http://localhost:{port}/api/health")
    print("="*60)
    print("\nSet in frontend/.env.local:")
    print(f"VITE_API_URL=http://localhost:{port}/api/ask\n")
    print("="*60)
    
    app.run(host='0.0.0.0', port=port, debug=True)