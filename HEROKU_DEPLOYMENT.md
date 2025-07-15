# Heroku Deployment Guide

This guide will help you deploy your portfolio website to Heroku.

## Prerequisites

1. Install Heroku CLI:
   
   Option A: Using npm:
   ```bash
   npm install -g heroku
   ```
   
   Option B: Using the installer (recommended):
   - Windows: Download and run the installer from [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli)
   - macOS: `brew tap heroku/brew && brew install heroku`
   - Ubuntu/Debian: `curl https://cli-assets.heroku.com/install-ubuntu.sh | sh`

2. Create a Heroku account at [heroku.com](https://www.heroku.com/)

## Deployment Steps

### Option 1: Using the Deployment Script (Recommended)

1. Run the deployment script:
   ```bash
   deploy-heroku.bat
   ```

2. Follow the prompts in the script.

### Option 2: Manual Deployment

1. Login to Heroku:
   ```bash
   heroku login
   ```

2. Create a new Heroku app:
   ```bash
   heroku create your-portfolio-name
   ```

3. Set environment variables:
   ```bash
   heroku config:set NODE_ENV=production
   ```

4. Install dependencies and build:
   ```bash
   npm run install-all
   npm run build
   ```

5. Deploy to Heroku:
   ```bash
   git add .
   git commit -m "Deploy to Heroku"
   git push heroku main
   ```

6. Open your deployed app:
   ```bash
   heroku open
   ```

## Troubleshooting

If you encounter any issues during deployment:

1. Check Heroku logs:
   ```bash
   heroku logs --tail
   ```

2. Make sure all dependencies are installed:
   ```bash
   npm run install-all
   ```

3. Verify your Procfile is correct:
   ```
   web: cd backend && npm start
   ```

4. Ensure your package.json has the correct scripts and dependencies.

## Updating Your Deployed App

To update your app after making changes:

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Update app"
   ```

2. Push to Heroku:
   ```bash
   git push heroku main
   ```