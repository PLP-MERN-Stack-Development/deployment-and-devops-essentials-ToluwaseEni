# Deployment and DevOps Essentials – Week 7 (MERN Stack)

## 🚀 Project Overview
A full MERN stack application deployed with CI/CD, environment configs, and monitoring.

## 🌐 Deployed URLs
- **Frontend:** https://your-frontend.vercel.app
- **Backend API:** https://your-backend.herokuapp.com

## 🧱 Technologies
- MongoDB Atlas (Database)
- Express.js (Backend)
- React (Frontend)
- Node.js
- GitHub Actions (CI/CD)
- Heroku / Render (Backend Deployment)
- Vercel / Netlify (Frontend Deployment)
- Sentry (Error Monitoring)

## ⚙️ Environment Variables
See `.env.example` in both `client/` and `backend/`.

## 🧪 CI/CD Pipelines
GitHub Actions automatically builds the project and runs tests on every push.
Include screenshots here:


## 🩺 Monitoring
- Health endpoint: `/health`
- Uptime check: configured via UptimeRobot
- Error tracking: Sentry DSN

## 🔁 Rollback Plan
- For Heroku: `heroku releases:rollback v123`
- For Vercel: Redeploy previous build from dashboard.

## 📆 Maintenance Plan
- Weekly dependency updates
- Monthly log review
- Regular backups (MongoDB Atlas snapshots)

---
**Author:** Toluwase Eniola  
**Repository:** https://github.com/PLP-MERN-Stack-Development/deployment-and-devops-essentials-ToluwaseEni
