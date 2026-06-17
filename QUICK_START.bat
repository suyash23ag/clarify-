@echo off
echo ========================================
echo    CLARIFY AI - Quick Local Setup
echo ========================================
echo.

echo Step 1: Installing basic dependencies...
cd backend
python -m pip install Django==5.1.2 djangorestframework==3.14.0 django-cors-headers==4.3.1
echo.

echo Step 2: Setting up database...
python manage.py migrate
echo.

echo Step 3: Starting Django backend...
echo Backend will start on http://localhost:8000
echo.
start "CLARIFY AI Backend" cmd /k "python manage.py runserver 8000"
echo.

echo Step 4: Starting React frontend...
cd ../frontend
start "CLARIFY AI Frontend" cmd /k "npm start"
echo.

echo ========================================
echo  CLARIFY AI is starting!
echo  
echo  Backend:  http://localhost:8000
echo  Frontend: http://localhost:3000
echo  
echo  Both servers will open in new windows
echo ========================================
echo.
pause