@echo off
echo Building portfolio for deployment...

cd frontend
call npm install
call npm run build

echo Build completed successfully!
echo.
echo To deploy to Netlify:
echo 1. Install Netlify CLI: npm install -g netlify-cli
echo 2. Login to Netlify: netlify login
echo 3. Deploy: netlify deploy --prod
echo.
echo To deploy to Vercel:
echo 1. Install Vercel CLI: npm install -g vercel
echo 2. Login to Vercel: vercel login
echo 3. Deploy: vercel
echo.

pause