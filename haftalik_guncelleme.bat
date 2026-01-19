@echo off
chcp 65001 > nul
cls
color 0f
echo ================================================================
echo   M-LAB UFUK AVRUPA - HAFTALIK OTOMATIK GUNCELLEME SISTEMI
echo ================================================================
echo.

:: 1. ADIM: Horizon Tracker'ı çalıştır
echo [1/5] Horizon Tracker calistiriliyor... (Veriler AB portalindan cekiliyor)
cd /d "c:\Users\berka\Antigravity\hoziron"
python horizon_tracker.py
if %errorlevel% neq 0 (
    color 0c
    echo.
    echo [HATA] Veri cekme islemi sirasinda hata olustu!
    pause
    exit /b %errorlevel%
)

:: 2. ADIM: En son oluşturulan raporu bul
echo.
echo [2/5] Olusturulan en guncel Excel raporu tespit ediliyor...
cd "raporlar"
set "LATEST_FILE="
for /f "delims=" %%I in ('dir "horizon_rapor_*.xlsx" /b /o-d') do set LATEST_FILE=%%I & goto :FoundFile
:FoundFile

if "%LATEST_FILE%"=="" (
    color 0c
    echo.
    echo [HATA] Hicbir Excel raporu bulunamadi!
    pause
    exit /b 1
)
echo    Tespit edilen dosya: %LATEST_FILE%

:: 3. ADIM: Dosyayı Web Projesine Taşı
echo.
echo [3/5] Rapor web projesine kopyalaniyor...
copy /y "%LATEST_FILE%" "c:\Users\berka\Antigravity\m-lab-landing\horizon-reports\horizon_rapor_latest.xlsx"
if %errorlevel% neq 0 (
    color 0c
    echo.
    echo [HATA] Dosya kopyalama basarisiz!
    pause
    exit /b %errorlevel%
)

:: 4. ADIM: Web verilerini (JSON) güncelle
echo.
echo [4/5] excel_to_json.py calistiriliyor... (Web verileri guncelleniyor)
cd /d "c:\Users\berka\Antigravity\m-lab-landing"
python excel_to_json.py
if %errorlevel% neq 0 (
    color 0c
    echo.
    echo [HATA] Excel -> JSON donusumu basarisiz!
    pause
    exit /b %errorlevel%
)

:: 5. ADIM: GitHub'a Gönder
echo.
echo [5/5] Degisiklikler GitHub'a gonderiliyor...
git add horizon-data.js horizon-reports/horizon_rapor_latest.xlsx
git commit -m "chore: haftalik otomatik veri guncellemesi (Auto-Bot)"
git push origin main
if %errorlevel% neq 0 (
    color 0c
    echo.
    echo [HATA] Git Push islemi basarisiz! Internet baglantinizi ve yetkilerinizi kontrol edin.
    pause
    exit /b %errorlevel%
)

echo.
echo ================================================================
echo   ISLEM BASARIYLA TAMAMLANDI! 
echo   Web sitesi kisa sure icinde guncellenecektir.
echo ================================================================
pause
