@echo off
echo Starting Deep Fake Detection Application...
echo.

echo Starting Django Backend Server...
cd backend
start "Django Backend" cmd /k "c:\Users\suyas\Desktop\hackthonwinner\.venv\Scripts\python.exe manage.py runserver"
cd ..

echo Starting React Frontend Server...
cd frontend
start "React Frontend" cmd /k "npm start"
cd ..

echo.
echo Both servers are starting...
echo Backend will be available at: http://localhost:8000
echo Frontend will be available at: http://localhost:3000
echo.
echo Press any key to exit this script...
pause > nul 