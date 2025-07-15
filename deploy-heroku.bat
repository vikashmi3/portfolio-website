@echo off
echo Setting up Heroku deployment...

REM Check if Git is initialized
if not exist .git (
  echo Initializing Git repository...
  git init
  git add .
  git commit -m "Initial commit for Heroku deployment"
)

REM Check if Heroku CLI is installed
heroku --version > nul 2>&1
if %errorlevel% neq 0 (
  echo Heroku CLI is not installed. Please install it first:
  echo npm install -g heroku
  exit /b 1
)

REM Check if user is logged in to Heroku
heroku whoami > nul 2>&1
if %errorlevel% neq 0 (
  echo Please log in to Heroku:
  heroku login
)

REM Create Heroku app if it doesn't exist
set /p app_name=Enter your Heroku app name (leave blank to create a random name): 
if "%app_name%"=="" (
  echo Creating Heroku app with random name...
  heroku create
) else (
  echo Creating Heroku app %app_name%...
  heroku create %app_name%
)

REM Set environment variables
echo Setting environment variables...
heroku config:set NODE_ENV=production

REM Install dependencies and build
echo Installing dependencies and building project...
call npm run install-all
call npm run build

REM Deploy to Heroku
echo Deploying to Heroku...
git add .
git commit -m "Deploy to Heroku"
git push heroku main

REM Open the app in browser
echo Opening the deployed app...
heroku open

echo Deployment complete!
pause