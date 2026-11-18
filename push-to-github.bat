@echo off
chcp 65001 > nul
echo ========================================================
echo   กำลังเตรียมนำไฟล์ขึ้น GitHub (ZaiyoSAMA/webport)
echo ========================================================
echo.
cd /d "B:\Users\final\.gemini\antigravity\scratch\portfolio-patthamarat"

echo ตรวจสอบสถานะ Git...
git status
echo.
echo กำลัง Push ไฟล์ขึ้น branch main...
echo (หากมีหน้าต่าง GitHub เด้งขึ้นมา ให้เลือก "Sign in with your browser")
echo.
git push -u origin main

echo.
if %errorlevel% equ 0 (
    echo ========================================================
    echo   [SUCCESS] อัปโหลดไฟล์ขึ้น GitHub สำเร็จเรียบร้อยแล้ว!
    echo   ลิงก์ Repository: https://github.com/ZaiyoSAMA/webport
    echo ========================================================
) else (
    echo ========================================================
    echo   [ERROR] การ Push ไม่สำเร็จ
    echo   โปรดตรวจสอบการเข้าสู่ระบบ GitHub หรือใช้ Personal Access Token
    echo ========================================================
)
echo.
pause
