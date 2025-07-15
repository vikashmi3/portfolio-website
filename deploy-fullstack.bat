@echo off
echo Building full stack portfolio for deployment...

echo Installing dependencies...
call npm run install-all

echo Building frontend...
call npm run build

echo Build completed successfully!
echo.
echo To deploy to Heroku:
echo 1. Login to Heroku: heroku login
echo 2. Create a new app: heroku create your-portfolio-name
echo 3. Push to Heroku: git push heroku main
echo.
echo To deploy to Render:
echo 1. Create a new Web Service on render.com
echo 2. Connect your GitHub repository
echo 3. Configure build settings:
echo    - Build Command: npm run install-all ^&^& npm run build
echo    - Start Command: npm start
echo.

pause