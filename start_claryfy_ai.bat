@echo off
echo Starting CLARIFY AI - Deepfake Detection System...
echo.

echo Starting Django Backend Server...
cd backend
start "CLARIFY AI Backend" cmd /k "c:\Users\suyas\Desktop\hackthonwinner\.venv\Scripts\python.exe manage.py runserver"
cd ..

echo Starting React Frontend Server...
cd frontend
start "CLARIFY AI Frontend" cmd /k "npm start"
cd ..

echo.
echo Both servers are starting...
echo Backend will be available at: http://localhost:8000
echo Frontend will be available at: http://localhost:3000
echo.
echo CLARIFY AI is now running! Open http://localhost:3000 in your browser.
echo.
echo Press any key to exit this script...
pause > nul 