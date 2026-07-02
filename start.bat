@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

echo.
echo ================================================
echo   🚀 AETHER AI - Автозапуск проекта (Next.js)
echo ================================================
echo.

:: Проверка наличия Node.js
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ ОШИБКА: Node.js не установлен или не найден в PATH.
    echo.
    echo Пожалуйста, установите Node.js с официального сайта:
    echo https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo ✅ Node.js найден:
node --version
echo.

:: Проверка npm
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ ОШИБКА: npm не доступен.
    pause
    exit /b 1
)

:: Переход в директорию проекта (если bat лежит не в корне)
cd /d "%~dp0"

echo 📁 Текущая директория: %cd%
echo.

:: Проверка package.json
if not exist "package.json" (
    echo ❌ ОШИБКА: package.json не найден!
    echo Убедитесь, что этот .bat файл лежит в корне проекта (рядом с package.json).
    pause
    exit /b 1
)

:: Проверка node_modules
echo 🔍 Проверка зависимостей...
if not exist "node_modules" (
    echo.
    echo 📦 node_modules не найдена.
    echo ⏳ Устанавливаю зависимости (npm install)...
    echo Это может занять несколько минут в зависимости от скорости интернета.
    echo.
    call npm install
    if %errorlevel% neq 0 (
        echo.
        echo ❌ ОШИБКА: Не удалось установить зависимости.
        echo Попробуйте запустить вручную: npm install
        pause
        exit /b 1
    )
    echo.
    echo ✅ Зависимости успешно установлены!
) else (
    echo ✅ Зависимости уже установлены (node_modules существует).
)

echo.
echo ================================================
echo   🎨 Запуск dev-сервера...
echo ================================================
echo.
echo 🌐 Сайт откроется по адресу: http://localhost:3000
echo 🛑 Чтобы остановить сервер — нажмите Ctrl + C
echo.

:: Запуск Next.js
call npm run dev

echo.
echo Сервер остановлен.
pause