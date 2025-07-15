# Quick Start Guide for Heroku Deployment

## Prerequisites

Install Heroku CLI:
- Windows: Download and run the installer from [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli)
- macOS: `brew tap heroku/brew && brew install heroku`
- Ubuntu/Debian: `curl https://cli-assets.heroku.com/install-ubuntu.sh | sh`
- Using npm: `npm install -g heroku`

## One-Click Deployment

1. Run the deployment script:
   ```
   deploy-heroku.bat
   ```

2. Enter your desired app name when prompted (or leave blank for a random name).

3. Wait for the deployment to complete.

4. Your portfolio will automatically open in your browser when ready!

## What This Does

The script will:
1. Initialize Git if needed
2. Log you into Heroku if needed
3. Create a new Heroku app
4. Install all dependencies
5. Build the frontend
6. Deploy everything to Heroku
7. Open your new site in the browser

## After Deployment

Your portfolio will be available at:
```
https://your-app-name.herokuapp.com
```

To update your site after making changes:
```
git add .
git commit -m "Update site"
git push heroku main
```