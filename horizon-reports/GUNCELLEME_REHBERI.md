# Horizon Europe Verisi Güncelleme Rehberi

Bu rehber, `m-lab-landing` projesindeki **Ufuk Hibeleri** sayfasının verilerini manuel olarak güncellemek için hazırlanmıştır.

⚠️ **ÖNEMLİ:** `generate_horizon_data.py` veya `horizon_tracker.py` gibi dışarıdan veri çeken scriptleri ÇALIŞTIRMAYIN. Elinizdeki doğru Excel dosyasını kullanın.

## Adım 1: Doğru Excel Dosyasını Yerleştirin

1. Elinizdeki güncel rapor dosyasının adını `horizon_rapor_latest.xlsx` olarak değiştirin.
2. Bu dosyayı şu konuma kopyalayın (var olanın üzerine yazın):
   `c:\Users\berka\Antigravity\m-lab-landing\horizon-reports\horizon_rapor_latest.xlsx`

   Bu dosya sitedeki "Excel İndir" butonunun kaynağıdır.

## Adım 2: JSON Verisini Güncelleyin

Sitedeki tabloların beslendiği `horizon-data.js` dosyasını güncellemek için hazırlanan yardımcı scripti çalıştırın. Bu script, **sadece Adım 1'de koyduğunuz Excel dosyasını okur** ve JSON'a çevirir.

Terminalde şu komutu çalıştırın:
```bash
python update_horizon_js_from_excel.py
```

## Adım 3: Kontrol ve Deploy

1. `horizon-data.js` dosyasının değiştiğini ve tarihlerin/sayıların güncellendiğini teyit edin.
2. Değişiklikleri GitHub'a gönderin:

```bash
git add horizon-data.js horizon-reports/horizon_rapor_latest.xlsx
git commit -m "chore: update horizon data from excel"
git push origin main
```
