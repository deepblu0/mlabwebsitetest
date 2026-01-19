# Ufuk Avrupa (Horizon Europe) Veri Güncelleme Rehberi

Bu rehber, `m-lab-landing` projesindeki Ufuk Hibeleri sayfasının verilerini haftalık olarak nasıl güncelleyeceğinizi açıklar.

## 1. Hazırlık
Haftalık raporu (`horizon_rapor_YYYY-AA-GG.xlsx`) elinize aldığınızda, bu dosyanın aşağıdaki 3 sayfayı içerdiğinden emin olun:
1.  **Yeni Açılan Çağrılar** (Haftalık yeni çağrılar)
2.  **Tüm Misyon Çağrıları** (Sadece misyon çağrıları)
3.  **Tüm Açık Çağrılar** (Sistemdeki tüm aktif çağrılar - Genellikle 700+ satır)

## 2. Dosya Değişimi
Yeni gelen Excel dosyasını projenin `horizon-reports` klasörüne kopyalayın ve adını **mutlaka** aşağıdaki gibi değiştirin (eski dosyanın üzerine yazın):

`c:\Users\berka\Antigravity\m-lab-landing\horizon-reports\horizon_rapor_latest.xlsx`

> **Not:** Web sitesindeki "Excel İndir" butonu direkt bu dosyayı indirtir. Bu yüzden dosya adını değiştirmek veya farklı bir isimle kaydetmek linki bozar.

## 3. Web Verisinin (JSON) Güncellenmesi
Excel dosyasını klasöre koyduktan sonra, bu Excel'deki verileri web sitesinin okuyabileceği `horizon-data.js` formatına çevirmemiz gerekir.

Bunun için proje ana dizinindeki (`m-lab-landing`) `excel_to_json.py` scriptini çalıştırın:

```bash
cd c:\Users\berka\Antigravity\m-lab-landing
python excel_to_json.py
```

Bu işlem sonucunda:
- `horizon-reports/horizon_rapor_latest.xlsx` dosyasını okur.
- 3 sayfadaki tüm verileri ayrıştırır.
- `horizon-data.js` dosyasını günceller.
- Ekrana "Successfully updated horizon-data.js" mesajı yazar.

## 4. GitHub'a Gönderme (Deploy)
Değişikliklerin canlıya alınması için güncellenen dosyaları GitHub'a göndermelisiniz:

```bash
git add horizon-data.js horizon-reports/horizon_rapor_latest.xlsx
git commit -m "chore: haftalik horizon veri guncellemesi"
git push origin main
```

Vercel otomatik olarak yeni verilerle siteyi güncelleyecektir.
