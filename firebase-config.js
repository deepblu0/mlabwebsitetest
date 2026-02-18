// Firebase Configuration
// M-LAB Portal Firebase Projesi

const firebaseConfig = {
    apiKey: "AIzaSyBwusBNSu5WXyjUDDb69VDGfg8NKfSfOXc",
    authDomain: "mlab-57ccc.firebaseapp.com",
    projectId: "mlab-57ccc",
    storageBucket: "mlab-57ccc.firebasestorage.app",
    messagingSenderId: "636480644814",
    appId: "1:636480644814:web:45957e4de027ebf5b5129f",
    measurementId: "G-8H1YB9R85D"
};

// Admin e-posta adresleri (bu adreslere sahip kullanıcılar admin paneline erişebilir)
const ADMIN_EMAILS = [
    'berkay.yilmaz.edu@gmail.com'
];

// Firebase başlatma ve dışa aktarma
let app, auth, db;

// Firebase modüllerini yükle
async function initializeFirebase() {
    try {
        // Firebase SDK'larını dinamik olarak yükle
        const { initializeApp } = await import('https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js');
        const { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendEmailVerification, setPersistence, browserLocalPersistence, browserSessionPersistence } = await import('https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js');
        const { getFirestore, collection, doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc, query, where, orderBy, onSnapshot, serverTimestamp, Timestamp, increment } = await import('https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js');
        const { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } = await import('https://www.gstatic.com/firebasejs/10.7.0/firebase-storage.js');

        // Firebase'i başlat
        app = initializeApp(firebaseConfig);
        auth = getAuth(app);
        db = getFirestore(app);
        const storage = getStorage(app);

        // Modülleri global yap
        window.firebaseAuth = {
            auth,
            onAuthStateChanged,
            signInWithEmailAndPassword,
            createUserWithEmailAndPassword,
            signOut,
            sendEmailVerification,
            setPersistence,
            browserLocalPersistence,
            browserSessionPersistence
        };

        window.firebaseDb = {
            db,
            collection,
            doc,
            getDoc,
            getDocs,
            setDoc,
            updateDoc,
            deleteDoc,
            query,
            where,
            orderBy,
            onSnapshot,
            serverTimestamp,
            Timestamp,
            increment
        };

        window.firebaseStorage = {
            storage,
            ref,
            uploadBytes,
            getDownloadURL,
            deleteObject
        };

        window.ADMIN_EMAILS = ADMIN_EMAILS;

        console.log('Firebase başarıyla başlatıldı');
        return true;
    } catch (error) {
        console.error('Firebase başlatma hatası:', error);
        return false;
    }
}

// Kullanıcının admin olup olmadığını kontrol et
function isAdmin(email) {
    return ADMIN_EMAILS.includes(email?.toLowerCase());
}

// Kullanıcı durumunu kontrol et
async function checkUserStatus(userId) {
    try {
        const { db, doc, getDoc } = window.firebaseDb;
        const userDoc = await getDoc(doc(db, 'users', userId));
        if (userDoc.exists()) {
            return userDoc.data().status;
        }
        return null;
    } catch (error) {
        console.error('Kullanıcı durumu kontrol hatası:', error);
        return null;
    }
}

// Kullanıcı profilini getir
async function getUserProfile(userId) {
    try {
        const { db, doc, getDoc } = window.firebaseDb;
        const userDoc = await getDoc(doc(db, 'users', userId));
        if (userDoc.exists()) {
            return { id: userDoc.id, ...userDoc.data() };
        }
        return null;
    } catch (error) {
        console.error('Profil getirme hatası:', error);
        return null;
    }
}

// Dışa aktarımlar
window.firebaseHelpers = {
    initializeFirebase,
    isAdmin,
    checkUserStatus,
    getUserProfile,
    ADMIN_EMAILS
};
