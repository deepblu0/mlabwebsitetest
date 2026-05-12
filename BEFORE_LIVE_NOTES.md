# Before Live Notes — Portal Dashboard Değişiklikleri

Bu dosya, offline geliştirilen portal-dashboard.html değişikliklerini canlıya almadan önce yapılması gerekenleri belgeler.

---

## 1. AUTH BYPASS — KALDIRILMALI

`portal-dashboard.html` içinde `checkAuth()` fonksiyonunda mock kullanıcı inject ediliyor. Canlıya geçmeden önce bu satır silinmeli:

```js
// BU SATIRI SİL:
if (!currentUser) {
    currentUser = { org_name: 'İZPA', contact_name: 'Berkay Yılmaz', email: 'berkay.yilmaz.edu@gmail.com', org_type: 'belediye', isAdmin: true, uid: 'preview-user' };
}
```

Yerine orijinal redirect mantığı restore edilmeli:
```js
if (!currentUser) {
    window.location.href = 'portal-login.html';
    return false;
}
```

---

## 2. NAVBAR — 3 SEKME EKLENDİ

Logo ile TR/EN arasına "Çağrılar", "Çalışma Grupları", "Projeler" sekmeleri eklendi.

- Tasarım: serbest duran pill'ler, container yok
- Aktif sekme: beyaz arka plan + mlab-navy yazı + gölge
- Pasif sekmeler: beyaz yazı, hover'da hafif aydınlanma
- CSS `.section-tab.active` class'ı ile kontrol ediliyor
- JS `switchSection()` fonksiyonu ile alan değişimi yönetiliyor

**Canlıya alırken:** Tasarım aynen korunacak, herhangi bir değişiklik gerekmez.

---

## 3. ÇAĞRILAR SEKSİYONU

Mevcut dashboard içeriği `#section-cagrilar` div'ine sarmalandı.

### Filtre sidebar yenilendi:
- Eski: radio butonlar + checkbox'lar + select dropdown + "Filtrele" butonu
- Yeni: tıklanabilir pill listesi (Çağrı Türü + Büyük Zorluk), seçim anında otomatik filtre
- **Kurum Türü filtresi kaldırıldı**
- Üstteki boş spacer div kaldırıldı, filtreler yukarı hizalandı
- JS: `setPostTypeFilter()`, `setChallengeFilter()`, `applyFilters()` fonksiyonları — state `activePostType` ve `activeChallengeFilter` değişkenlerinde tutuluyor

**Canlıya alırken:** Değişiklik gerekmez. Filtreler Firestore sorgusu yapılıyorsa `applyFilters()` içindeki client-side filter yerine Firestore query parametrelerine taşınmalı.

---

## 4. ÇALIŞMA GRUPLARI SEKSİYONU — FIREBASE'E BAĞLANMALI

Şu an tamamen mock/statik veriyle çalışıyor. 3 katmanlı yapı:
- Sol sidebar: 10 büyük zorluk (tıklanınca renkli border aktif)
- Orta: konu thread listesi (sadece başlık + yanıt sayısı)
- Sağ/içerik: chat görünümü (kronolojik mesajlar + reply input)

### Firestore koleksiyon yapısı:
```
working_groups/
  {challengeId}/
    topics/
      {topicId}/
        title: string
        author_id: string
        author_name: string
        org: string
        org_type: string
        created_at: timestamp
        reply_count: number

        messages/
          {messageId}/
            author_id: string
            author_name: string
            org: string
            org_type: string
            text: string
            created_at: timestamp
```

### Mock → Firestore geçişi:
- `CG_MOCK_TOPICS` → Firestore `working_groups/{id}/topics`
- `cgMessages` → Firestore `working_groups/{id}/topics/{id}/messages`
- `renderTopics()` → Firestore query
- `renderMessages()` → `onSnapshot` (realtime)
- `sendReply()` → `addDoc`
- `submitNewTopic()` → `addDoc`

### Firestore güvenlik kuralları eklenecek:
```
match /working_groups/{challengeId}/topics/{topicId} {
  allow read: if isSignedIn() && isEmailVerified();
  allow create: if isSignedIn() && isEmailVerified();
  allow update, delete: if isAdmin() || isOwner(resource.data.author_id);
}
match /working_groups/{challengeId}/topics/{topicId}/messages/{messageId} {
  allow read: if isSignedIn() && isEmailVerified();
  allow create: if isSignedIn() && isEmailVerified();
  allow delete: if isAdmin() || isOwner(resource.data.author_id);
}
```

---

## 5. PROJELER SEKSİYONU — FIREBASE'E BAĞLANMALI

Sol sidebar + proje kartı grid + detay görünümü yapısı tamamlandı.

### Özellikler:
- Sol sidebar: 10 büyük zorluk (Çalışma Grupları ile aynı yapı)
- Proje kartları: görsel, zorluk badge, durum etiketi, başlık, açıklama, süre, üye sayısı
- Proje detay: görsel, açıklama, süre/durum bilgi kutuları, paydaşlar, Proje Ekibi bölümü
- **Proje Ekle modalı**: görsel yükleme + ad + açıklama + süre + durum (Planlama/Devam Ediyor/Tamamlandı/Askıya Alındı) + paydaşlar
- **Üye Ekle**: 3+ harf arama → sistemdeki kullanıcılardan seçim → rol atama. Sistemde olmayan kişi eklenemiyor.

### Roller (yöneticiler tanımları güncelleyecek):
- Proje Koordinatörü
- Örnek Rol 1
- Örnek Rol 2
- Örnek Rol 3

### Firestore koleksiyon yapısı:
```
projects/
  {projectId}/
    title: string
    desc: string
    duration: string
    status: string  ("Planlama" | "Devam Ediyor" | "Tamamlandı" | "Askıya Alındı")
    partners: string
    image_url: string  (Storage URL)
    challenge_id: number
    created_by: string  (uid)
    created_at: timestamp

    team/
      {memberId}/
        uid: string
        name: string
        org: string
        role: string
        added_at: timestamp
```

### Mock → Firestore geçişi:
- `PR_MOCK_PROJECTS` → Firestore `projects` koleksiyonu (challenge_id ile filtreli query)
- `PR_PORTAL_USERS` → Firestore `users` koleksiyonu üzerinden search (3+ harf query)
- Görsel yükleme → Firebase Storage'a upload, URL Firestore'a kaydedilecek
- `submitNewProject()` → `addDoc`
- `submitAddMember()` → `addDoc` (team alt koleksiyonu)
- `removeTeamMember()` → `deleteDoc`

### Firestore güvenlik kuralları eklenecek:
```
match /projects/{projectId} {
  allow read: if isSignedIn() && isEmailVerified();
  allow create: if isSignedIn() && isEmailVerified();
  allow update, delete: if isAdmin() || isOwner(resource.data.created_by);
}
match /projects/{projectId}/team/{memberId} {
  allow read: if isSignedIn() && isEmailVerified();
  allow create, delete: if isAdmin() || isOwner(get(/databases/$(database)/documents/projects/$(projectId)).data.created_by);
}
```

---

## 6. KATEGORİ DEĞİŞİKLİĞİ — KAMU / ÖZEL SEKTÖR / STK

Kullanıcı kategorisi 2'den 3'e çıkarıldı. Tüm dosyalarda güncellendi.

### Değer eşlemeleri:
| Eski | Yeni |
|------|------|
| `belediye` | `kamu` |
| `ozel_sektor` | `ozel_sektor` (değişmedi) |
| _(yok)_ | `stk` (yeni) |

### Güncellenen dosyalar:
- **portal-register.html** — 2'li grid → 3'lü grid; Kamu (landmark), Özel Sektör (building-2), STK (heart-handshake)
- **portal-profile.html** — aynı; JS yükleme mantığı `kamu`/`stk`/`ozel_sektor` üçlüsüne güncellendi
- **portal-dashboard.html** — tüm kategori icon/color/label mantığı, ORG_COLORS, mock kullanıcı, stat sayacı

### İkonlar:
- Kamu → `landmark` / navy
- Özel Sektör → `building-2` / orange
- STK → `heart-handshake` / purple

### Canlıya alırken:
- Firestore'da mevcut `category: 'belediye'` olan kullanıcı dokümanları `category: 'kamu'` olarak migrate edilmeli
- i18n.js'e `portal.filters.kamu`, `portal.filters.stk`, `portal.role.kamu`, `portal.role.stk` anahtarları eklenmeli

---

## 7. GENEL KONTROL LİSTESİ

- [ ] Auth bypass kaldırıldı mı?
- [ ] Çalışma Grupları Firestore'a bağlandı mı?
- [ ] Projeler Firestore'a bağlandı mı? (görsel upload dahil)
- [ ] Proje rol tanımları yöneticiler tarafından güncellendi mi?
- [ ] Tüm Firestore güvenlik kuralları `firestore.rules`'a eklendi mi?
- [ ] `PR_PORTAL_USERS` mock listesi kaldırılıp Firestore users sorgusuyla değiştirildi mi?
- [ ] Firestore'daki `category: 'belediye'` kullanıcı verileri `kamu` olarak migrate edildi mi?
- [ ] Mobil görünüm test edildi mi? (3 sekme navbar dar ekranda sığıyor mu?)
- [ ] i18n.js'e yeni alan çevirileri eklendi mi? (Çalışma Grupları, Projeler, Konu Başlığı Yarat, Proje Ekle, Üye Ekle, Kamu, STK vb.)
