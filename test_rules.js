// --- TEST 1: Okuma Testi ---
(async () => {
    console.log("🔍 TEST BAŞLIYOR...");

    // Test 1: Giriş Durumu
    const user = window.firebaseAuth.auth.currentUser;
    console.log("👤 Giriş yapan kullanıcı:", user ? user.email : "YOK");

    if (!user) {
        console.warn("⚠️ Dikkat: Giriş yapmadığınız için tüm okumalar reddedilmeli!");
    } else {
        const isAdmin = ["berkay.yilmaz.edu@gmail.com"].includes(user.email);
        console.log("🛡️ Admin misiniz?:", isAdmin ? "EVET" : "HAYIR");
    }

    // Test 2: 'posts' (Herkes okuyabilmeli - eğer giriş yaptıysa)
    console.log("\n--- TEST: 'posts' Koleksiyonu Okuma ---");
    try {
        const postsRef = window.firebaseDb.collection(window.firebaseDb.db, 'posts');
        const snap = await window.firebaseDb.getDocs(postsRef);
        console.log("✅ BAŞARILI: 'posts' okundu. Adet:", snap.size);
    } catch (e) {
        console.error("❌ ERİŞİM REDDEDİLDİ: 'posts' okunamadı.", e.message);
    }

    // Test 3: 'expert_applications' (SADECE Admin okuyabilmeli)
    console.log("\n--- TEST: 'expert_applications' Koleksiyonu Okuma ---");
    try {
        const expertsRef = window.firebaseDb.collection(window.firebaseDb.db, 'expert_applications');
        const snap = await window.firebaseDb.getDocs(expertsRef);
        console.log("⚠️ UYARI: 'expert_applications' okundu! (Admin değilseniz bu bir hatadır!) Adet:", snap.size);
    } catch (e) {
        console.log("✅ BAŞARILI ENGELLEME: 'expert_applications' okunamadı (Beklenen durum).", e.message);
    }
})();
