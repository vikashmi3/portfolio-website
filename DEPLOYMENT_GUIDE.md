# Deployment Guide: Backend on Render + Frontend on Netlify

## Prerequisites
- GitHub repository with your code
- Render account ([render.com](https://render.com))
- Netlify account ([netlify.com](https://netlify.com))

## Step 1: Deploy Backend to Render

1. **Push your code to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Deploy to Render**:
   - Go to [render.com](https://render.com) and login
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select your repository: "my second portfolio"
   - Configure the service:
     - **Name**: `portfolio-backend`
     - **Root Directory**: `backend`
     - **Environment**: `Node`
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
   - Add environment variables:
     - `NODE_ENV`: `production`
     - `PORT`: `10000`
   - Click "Create Web Service"

3. **Note your Render URL**: After deployment, you'll get a URL like:
   `https://portfolio-backend-xxxx.onrender.com`

## Step 2: Deploy Frontend to Netlify

1. **Go to Netlify**:
   - Visit [netlify.com](https://netlify.com) and login
   - Click "New site from Git"

2. **Connect Repository**:
   - Connect your GitHub account
   - Select your repository: "my second portfolio"

3. **Configure Build Settings**:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `build`

4. **Add Environment Variable**:
   - Go to Site settings → Environment variables
   - Add new variable:
     - **Key**: `REACT_APP_API_URL`
     - **Value**: `https://your-actual-render-url.onrender.com` (replace with your actual Render URL from Step 1)

5. **Deploy**:
   - Click "Deploy site"
   - Wait for the build to complete

## Step 3: Update Frontend Configuration

After getting your Render backend URL, update the Netlify configuration:

1. **Update netlify.toml**:
   ```toml
   [build.environment]
     REACT_APP_API_URL = "https://your-actual-render-url.onrender.com"
   ```

2. **Redeploy**:
   - Push the changes to GitHub
   - Netlify will automatically redeploy

## Step 4: Test Your Deployment

1. **Test Backend**:
   - Visit your Render URL
   - Test the contact API: `POST https://your-render-url.onrender.com/api/contact`

2. **Test Frontend**:
   - Visit your Netlify URL
   - Test the contact form to ensure it connects to your backend

## Important Notes

- **Render Free Tier**: Your backend may sleep after 15 minutes of inactivity
- **Environment Variables**: Make sure all required environment variables are set in both services
- **CORS**: The backend is configured to accept requests from any origin
- **HTTPS**: Both Render and Netlify provide HTTPS by default

## Troubleshooting

### Backend Issues:
- Check Render logs for errors
- Ensure all environment variables are set
- Verify the build and start commands

### Frontend Issues:
- Check Netlify build logs
- Ensure `REACT_APP_API_URL` is set correctly
- Verify the build directory is correct

### API Connection Issues:
- Check browser console for CORS errors
- Verify the API URL in environment variables
- Test API endpoints directly

## URLs After Deployment

- **Backend (Render)**: `https://your-backend-name.onrender.com`
- **Frontend (Netlify)**: `https://your-site-name.netlify.app`

Remember to replace the placeholder URLs with your actual deployment URLs!