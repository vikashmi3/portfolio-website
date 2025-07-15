@echo off
echo Starting Portfolio Development Environment...

echo.
echo Installing Frontend Dependencies...
cd frontend
call npm install

echo.
echo Installing Backend Dependencies...
cd ..\backend
call npm install

echo.
echo Starting Backend Server...
start cmd /k "npm run dev"

echo.
echo Starting Frontend Development Server...
cd ..\frontend
start cmd /k "npm start"

echo.
echo Development servers are starting...
echo Frontend: http://localhost:3000
echo Backend: http://localhost:5000
echo.
pause