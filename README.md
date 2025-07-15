# Vikash Mishra - Portfolio Website

A modern, responsive full-stack portfolio website built with React.js frontend and Node.js/Express backend.

## Deployment Instructions

### Full Stack Deployment

#### Deploy to Heroku

1. Create a Heroku account at [heroku.com](https://www.heroku.com/)
2. Install Heroku CLI:
   ```bash
   npm install -g heroku
   ```

3. Login to Heroku:
   ```bash
   heroku login
   ```

4. Create a new Heroku app:
   ```bash
   heroku create your-portfolio-name
   ```

5. Push to Heroku:
   ```bash
   git push heroku main
   ```

6. Open your deployed app:
   ```bash
   heroku open
   ```

#### Deploy to Render

1. Create a Render account at [render.com](https://render.com/)
2. Create a new Web Service
3. Connect your GitHub repository
4. Configure the build settings:
   - Build Command: `npm run install-all && npm run build`
   - Start Command: `npm start`
5. Add environment variables from `.env.example`
6. Click "Create Web Service"

### Frontend-Only Deployment

#### Deploy to Netlify

#### Option 1: Deploy via Netlify UI

1. Create a Netlify account at [netlify.com](https://www.netlify.com/)
2. Click on "New site from Git"
3. Connect your GitHub account and select this repository
4. Configure the build settings:
   - Base directory: `frontend`
   - Build command: `npm run build`
   - Publish directory: `build`
5. Click "Deploy site"

#### Option 2: Deploy via Netlify CLI

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Login to Netlify:
   ```bash
   netlify login
   ```

3. Navigate to the project root and deploy:
   ```bash
   cd "my second portfolio"
   netlify deploy
   ```

4. Follow the prompts and specify:
   - Base directory: `frontend`
   - Build command: `npm run build`
   - Publish directory: `build`

5. Once satisfied with the preview, deploy to production:
   ```bash
   netlify deploy --prod
   ```

### Deploy to Vercel

1. Create a Vercel account at [vercel.com](https://vercel.com/)
2. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

3. Login to Vercel:
   ```bash
   vercel login
   ```

4. Navigate to the frontend directory and deploy:
   ```bash
   cd frontend
   vercel
   ```

5. Follow the prompts to complete the deployment

## Local Development

### Full Stack Development

1. Install dependencies for both frontend and backend:
   ```bash
   npm run install-all
   ```

2. Start both servers in development mode:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) for the frontend
4. The backend API will be available at [http://localhost:5000](http://localhost:5000)

### Frontend Only

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

### Backend Only

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`

4. Start the development server:
   ```bash
   npm run dev
   ```

## Build for Production

### Full Stack Build

```bash
npm run install-all
npm run build
```

The frontend build files will be in the `frontend/build` directory, and the backend will serve these files in production mode.

### Frontend Only

```bash
cd frontend
npm run build
```

The build files will be in the `frontend/build` directory.