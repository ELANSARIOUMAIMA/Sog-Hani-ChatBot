# 🚦 SOG-HANI — Moroccan Smart Mobility Platform

*Aug 2025 – Present*

SOG-HANI is a Moroccan smart mobility platform designed to assist drivers and tourists by providing real-time traffic information, road law guidance, and a variety of digital services. The platform features a multilingual AI chatbot, alerts, and interactive tools to enhance road awareness and improve the overall user experience.

---

## 🏗️ Architecture

The application is built as **3 independent microservices**:

| Service     | Stack                          | Role                                   |
|-------------|--------------------------------|-----------------------------------------|
| Frontend    | React.js, Tailwind CSS         | User interface, chatbot widget          |
| Backend     | Python, Flask, RAG + Groq LLM  | AI chatbot answering highway code Q&A   |
| Server      | Node.js, Express.js, MongoDB   | Authentication, user accounts           |

---

## ⚙️ Tech Stack

**Frontend:** React.js · Tailwind CSS
**Backend (AI):** Flask · RAG · Groq LLM API · Vector Database
**Server:** Node.js · Express.js · MongoDB · JWT
**DevOps:** Docker · Docker Compose · Kubernetes (Minikube) · Jenkins · SonarQube · Nexus · Trivy
**Cloud:** AWS EC2
**Testing/Tools:** Postman, Git, GitHub

---

## 🚀 My Contributions

- Designed and developed the user interface (UI) using **React** and **Tailwind CSS**
- Implemented user authentication and account management with **Node.js**, **Express**, **MongoDB**, tested with **Postman**
- Connected the frontend with the backend and collaborated on AI model integration
- Designed and implemented a full **CI/CD pipeline** with **Jenkins**, including code quality analysis (**SonarQube**), artifact management (**Nexus**), and security scanning (**Trivy**)
- Containerized all 3 microservices with **Docker** and orchestrated local environments with **Docker Compose**
- Deployed and orchestrated the application on **Kubernetes** (Minikube/AWS EC2) with Deployments, Services and Secrets — 2 replicas per service for high availability
- Automated application delivery and deployment on **AWS EC2**
- Managed project version control and collaboration using **Git** and **GitHub** with a GitFlow branching strategy (feature → develop → staging)

---

## 📦 CI/CD Pipeline

```
Checkout → Install Dependencies (Nexus) → Trivy FS Scan
→ SonarQube Analysis → Quality Gate → Docker Build
→ Trivy Image Scan → Docker Push → Email Notification
```

Repeated for all 3 services (frontend, backend, server) on every push to `develop`.

CD pipeline pulls the latest images and deploys via Docker Compose / Kubernetes on the `staging` branch.

---

## ☸️ Kubernetes Deployment

```
kubectl apply -R -f K8s/
```

- 3 Deployments (frontend, backend, server) — 2 pods each
- Services: LoadBalancer (frontend), NodePort (backend, server)
- Secrets: `app-secrets` (GROQ_API_KEY, JWT_SECRET, MONGODB_URI)

---

## 🛠️ Local Setup

```bash
git clone https://github.com/ELANSARIOUMAIMA/Sog-Hani-ChatBot.git
cd Sog-Hani-ChatBot
docker compose up -d
```

- Frontend → http://localhost:8001
- Backend (chatbot API) → http://localhost:8000/api/ask
- Server (auth API) → http://localhost:8002

---

## 👥 Team

| Member | Role |
|--------|------|
| Oumaima El Ansari | Frontend, Authentication & Backend Integration, DevOps |
| Teammate | AI Model & RAG Integration |

---

## 📌 Status

🚧 Actively in development — AI model integration and chatbot features in progress.
