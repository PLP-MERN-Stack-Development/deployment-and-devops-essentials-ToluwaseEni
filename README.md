🌍 MERN App Deployment and DevOps Essentials

Author: Toluwase Eniola Olanipekun
Course: PLP MERN Stack Development — Week 7
Project: Deployment and DevOps Essentials

📘 Overview

This project demonstrates a full MERN stack deployment workflow — from local development to cloud deployment using Render for the backend and Netlify for the frontend.

It includes:

Secure environment variable management

MongoDB Atlas cloud database integration

End-to-end connection between frontend and backend

Health checks, error handling, and logging

🧩 Project Structure
deployment-and-devops-essentials-ToluwaseEni/
│
├── Backend/               # Express + MongoDB server
│   ├── index.js
│   ├── package.json
│   └── .env
│
├── client/                # React frontend
│   ├── src/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── .env
│
└── README.md

⚙️ Local Setup
1️⃣ Prerequisites

Ensure you have installed:

Node.js ≥ 18

npm ≥ 8

MongoDB Atlas account

Git

2️⃣ Clone Repository
git clone https://github.com/PLP-MERN-Stack-Development/deployment-and-devops-essentials-ToluwaseEni.git
cd deployment-and-devops-essentials-ToluwaseEni

3️⃣ Backend Setup
cd Backend
npm install


Create a .env file inside the Backend directory:

PORT=5000
MONGO_URI=your_mongo_atlas_connection_string
CLIENT_ORIGIN=http://localhost:3000


Run the backend locally:

npm run dev

4️⃣ Frontend Setup
cd ../client
npm install
npm start


Create .env in the client folder:

REACT_APP_API_URL=http://localhost:5000

🌐 Deployment Workflow
⚙️ Step 1: Backend Deployment (Render)

Platform: Render.com

Configuration

Root Directory: Backend

Build Command: npm install

Start Command: node index.js

Environment Variables on Render
Name	Value
PORT	5000
MONGO_URI	Your MongoDB Atlas URI
CLIENT_ORIGIN	https://your-netlify-app.netlify.app (no trailing slash)
Result

Backend successfully deployed

Verified at:
👉 https://deployment-and-devops-essentials-51yf.onrender.com

Browser output:

Backend is running ✅


📸 Suggested Screenshots

Render Dashboard showing “Live”

Environment Variables page

Browser showing backend success message

🌍 Step 2: Frontend Deployment (Netlify)

Platform: Netlify.com

Configuration

Build Command: npm run build

Publish Directory: client/build

Environment Variables on Netlify
Name	Value
REACT_APP_API_URL	https://deployment-and-devops-essentials-51yf.onrender.com
Result

Frontend successfully deployed and connected to backend.

Final Output:

🌍 MERN App Deployment Test
Backend is running ✅


📸 Suggested Screenshots

Netlify Dashboard showing deploy success

Environment Variables screen

Browser showing final working page

🧠 Lessons Learned

Directory names are case-sensitive on Render (Backend ≠ backend).

Avoid trailing slashes in environment variable URLs.

Always whitelist Render IPs or use 0.0.0.0/0 in MongoDB Atlas Network Access.

Use environment variables to safely store secrets instead of pushing them to GitHub.

💡 Reflection

This week’s deployment exercise provided hands-on understanding of how to manage full-stack applications in a production environment. It reinforced best practices for separating frontend and backend deployment pipelines, handling environment variables securely, and troubleshooting CORS or build errors. By the end, both the backend and frontend were successfully deployed and fully functional.

✅ Live URLs

Backend (Render): https://deployment-and-devops-essentials-51yf.onrender.com

Frontend (Netlify): https://week7tolu.netlify.app