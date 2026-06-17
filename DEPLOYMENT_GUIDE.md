# 🚀 CLARIFY AI - Deployment Guide

This guide will help you deploy your Deepfake Detection System to the cloud.

## 📋 Prerequisites

1. **Git repository** (GitHub, GitLab, or Bitbucket account)
2. **Vercel account** (for frontend deployment)
3. **Railway account** (for backend deployment)
4. **Domain name** (optional, but recommended)

## 🛠️ Option 1: Vercel + Railway Deployment (Recommended)

### Step 1: Prepare Your Repository

1. **Push your code to GitHub:**
   ```bash
   cd hackthonwinner/Deep-Fake-Face-Detection-main
   git init
   git add .
   git commit -m "Initial commit - CLARIFY AI Deepfake Detection"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/clarify-ai.git
   git push -u origin main
   ```

### Step 2: Deploy Backend to Railway

1. **Go to [Railway.app](https://railway.app)**
2. **Sign up/Login** with your GitHub account
3. **Click "New Project"** → "Deploy from GitHub repo"
4. **Select your repository** and choose the `backend` folder
5. **Set Environment Variables:**
   ```
   SECRET_KEY=your-super-secret-key-here-make-it-long-and-random
   DEBUG=False
   PORT=8000
   ```
6. **Railway will automatically:**
   - Detect it's a Python project
   - Install dependencies from requirements.txt
   - Run the Procfile commands
7. **Note the Railway URL** (e.g., `https://your-app-name.railway.app`)

### Step 3: Deploy Frontend to Vercel

1. **Go to [Vercel.com](https://vercel.com)**
2. **Sign up/Login** with your GitHub account
3. **Click "New Project"** → Import your repository
4. **Configure the build settings:**
   - Framework Preset: Create React App
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `build`
5. **Set Environment Variables:**
   ```
   REACT_APP_API_URL=https://your-railway-backend-url.railway.app
   REACT_APP_NAME=CLARIFY AI
   ```
6. **Deploy** - Vercel will build and deploy your app

### Step 4: Update CORS Settings

1. **Update your Railway backend settings:**
   - Go to your Railway dashboard
   - Add environment variable:
   ```
   FRONTEND_URL=https://your-vercel-app.vercel.app
   ```

2. **Update backend/deepfake_api/settings.py:**
   ```python
   CORS_ALLOWED_ORIGINS = [
       "http://localhost:3000",
       "https://your-vercel-app.vercel.app",  # Your actual Vercel URL
   ]
   ```

## 🛠️ Option 2: Heroku Deployment

### Step 1: Install Heroku CLI
Download from [Heroku.com](https://devcenter.heroku.com/articles/heroku-cli)

### Step 2: Deploy Backend
```bash
cd backend
heroku create clarify-ai-backend
git init
git add .
git commit -m "Deploy backend"
heroku git:remote -a clarify-ai-backend
git push heroku main
```

### Step 3: Deploy Frontend
```bash
cd frontend
npm run build
npm install -g serve
heroku create clarify-ai-frontend
# Follow similar steps for frontend
```

## 🛠️ Option 3: Docker Deployment

### Step 1: Create Docker files

**Backend Dockerfile:**
```dockerfile
FROM python:3.11-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .

EXPOSE 8000
CMD ["gunicorn", "deepfake_api.wsgi:application", "--bind", "0.0.0.0:8000"]
```

**Frontend Dockerfile:**
```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html
EXPOSE 80
```

### Step 2: Docker Compose
```yaml
version: '3.8'
services:
  backend:
    build: ./backend
    ports:
      - "8000:8000"
    environment:
      - DEBUG=False
      - SECRET_KEY=your-secret-key
  
  frontend:
    build: ./frontend
    ports:
      - "80:80"
    depends_on:
      - backend
```

## 🌐 Option 4: AWS/Google Cloud/Azure

For enterprise deployment, consider:
- **AWS**: EC2 + RDS + S3 + CloudFront
- **Google Cloud**: Compute Engine + Cloud SQL + Cloud Storage
- **Azure**: App Service + Azure SQL + Blob Storage

## 🔧 Environment Variables Setup

### Backend Environment Variables
```
SECRET_KEY=your-super-secret-key-here
DEBUG=False
ALLOWED_HOSTS=your-domain.com,your-railway-app.railway.app
FRONTEND_URL=https://your-frontend-domain.vercel.app
DATABASE_URL=sqlite:///db.sqlite3
```

### Frontend Environment Variables
```
REACT_APP_API_URL=https://your-backend-url
REACT_APP_NAME=CLARIFY AI
REACT_APP_VERSION=1.0.0
```

## 🎯 Post-Deployment Checklist

- [ ] Backend is accessible via HTTPS
- [ ] Frontend is accessible via HTTPS
- [ ] API calls work between frontend and backend
- [ ] File uploads work properly
- [ ] CORS is configured correctly
- [ ] Environment variables are set
- [ ] Database migrations ran successfully
- [ ] Static files are served correctly

## 🆘 Troubleshooting

### Common Issues:

1. **CORS Errors**: Update CORS_ALLOWED_ORIGINS in settings.py
2. **Static Files Not Loading**: Check STATIC_ROOT and WhiteNoise setup
3. **API Connection Failed**: Verify REACT_APP_API_URL
4. **Build Fails**: Check Node.js version compatibility

### Logs:
- **Railway**: Check deployment logs in Railway dashboard
- **Vercel**: Check function logs in Vercel dashboard
- **Heroku**: `heroku logs --tail -a your-app-name`

## 🎉 Success!

Your CLARIFY AI Deepfake Detection System should now be live!

- **Frontend**: `https://your-app-name.vercel.app`
- **Backend**: `https://your-app-name.railway.app`

## 🔒 Security Considerations

1. **Change SECRET_KEY** in production
2. **Set DEBUG=False**
3. **Configure proper ALLOWED_HOSTS**
4. **Use HTTPS only**
5. **Set up proper authentication**
6. **Limit file upload sizes**

## 📞 Need Help?

If you encounter any issues during deployment, feel free to ask for assistance!