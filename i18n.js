/**
 * M-LAB i18n (Internationalization) System
 * Handles Turkish/English translations across the website
 */

const LANG_KEY = 'mlab-lang';
const DEFAULT_LANG = 'tr';

// Translation Dictionary
const translations = {
    // Navbar
    'nav.mission': {
        tr: 'Şehirler Misyonu',
        en: 'Cities Mission'
    },
    'nav.challenges': {
        tr: 'Büyük Zorluklar',
        en: 'Grand Challenges'
    },
    'nav.grants': {
        tr: 'Ufuk Hibeleri',
        en: 'Horizon Grants'
    },
    'nav.projects': {
        tr: 'Projeler',
        en: 'Projects'
    },
    'nav.documents': {
        tr: 'Dokümanlar',
        en: 'Documents'
    },
    'nav.analytics': {
        tr: 'Analizler',
        en: 'Analytics'
    },
    'nav.contact': {
        tr: 'İletişim',
        en: 'Contact'
    },
    'nav.portal': {
        tr: 'Portal',
        en: 'Portal'
    },

    // Hero Section
    'hero.title': {
        tr: 'İKLİM NÖTR BİR İZMİR İÇİN',
        en: 'FOR A CLIMATE NEUTRAL IZMIR'
    },
    'hero.subtitle': {
        tr: 'HAREKETE GEÇ',
        en: 'TAKE ACTION'
    },

    // Mission Section
    'mission.badge': {
        tr: 'İKLİM NÖTR VE AKILLI ŞEHİRLER MİSYONU',
        en: 'CLIMATE NEUTRAL AND SMART CITIES MISSION'
    },
    'mission.title1': {
        tr: 'Küresel Sorunlara Somut Çözümler:',
        en: 'Concrete Solutions to Global Problems:'
    },
    'mission.title2': {
        tr: 'AB Misyonları',
        en: 'EU Missions'
    },
    'mission.description1': {
        tr: 'AB Misyonları Ufuk Avrupa programı kapsamında toplumun ve gezegenin karşı karşıya olduğu en kritik zorluklara 2030 yılına kadar somut çözümler üretmek amacıyla başlatılmıştır.',
        en: 'EU Missions were launched under the Horizon Europe program to produce concrete solutions to the most critical challenges facing society and the planet by 2030.'
    },
    'mission.description2': {
        tr: 'Bu küresel seferberlik beş temel alana odaklanır. Temel hedef bilimsel çalışmaları raporlardan çıkarıp vatandaşların günlük yaşamını iyileştiren somut kamu politikalarına ve uygulamalara dönüştürmektir.',
        en: 'This global mobilization focuses on five key areas. The main goal is to translate scientific studies from reports into concrete public policies and practices that improve citizens\' daily lives.'
    },
    'mission.cta': {
        tr: 'Şehirler Misyonu Hakkında',
        en: 'About Cities Mission'
    },

    // Projects Section
    'projects.title': {
        tr: 'Projeler & Çözümler',
        en: 'Projects & Solutions'
    },
    'projects.viewAll': {
        tr: 'Tüm Projeleri Gör',
        en: 'View All Projects'
    },
    'projects.allProjects': {
        tr: 'Tüm Projeler',
        en: 'All Projects'
    },
    'projects.duration': {
        tr: 'Proje Süresi',
        en: 'Project Duration'
    },
    'projects.startDate': {
        tr: 'Başlangıç',
        en: 'Start Date'
    },
    'projects.status': {
        tr: 'Durum',
        en: 'Status'
    },
    'projects.ongoing': {
        tr: 'Devam Ediyor',
        en: 'Ongoing'
    },
    'projects.completed': {
        tr: 'Tamamlandı',
        en: 'Completed'
    },
    'projects.partners': {
        tr: 'PARTNERLER',
        en: 'PARTNERS'
    },
    'projects.notSpecified': {
        tr: 'Belirtilmemiş',
        en: 'Not Specified'
    },

    // Partners Section
    'partners.title': {
        tr: 'Paydaşlarımız',
        en: 'Our Partners'
    },

    // Footer
    'footer.privacy': {
        tr: 'Gizlilik Politikası',
        en: 'Privacy Policy'
    },
    'footer.cookie': {
        tr: 'Çerez Politikası',
        en: 'Cookie Policy'
    },
    'footer.kvkk': {
        tr: 'KVKK Aydınlatma Metni',
        en: 'Data Protection Notice'
    },

    // Grand Challenges
    'challenge.1': {
        tr: 'Uygun Fiyatlı ve Yeterli Barınma',
        en: 'Affordable and Adequate Housing'
    },
    'challenge.2': {
        tr: 'Sürdürülebilir Hareketlilik',
        en: 'Sustainable Mobility'
    },
    'challenge.3': {
        tr: 'Afetlere Dirençlilik',
        en: 'Disaster Resilience'
    },
    'challenge.4': {
        tr: 'Sağlıklı Gıda ve Tarım',
        en: 'Healthy Food and Agriculture'
    },
    'challenge.5': {
        tr: 'Sağlık ve Esenlik',
        en: 'Health and Wellness'
    },
    'challenge.6': {
        tr: 'Eğitimli Nesiller',
        en: 'Educated Generations'
    },
    'challenge.7': {
        tr: 'İnsana Yakışır Gelir ve Çalışma',
        en: 'Decent Income and Work'
    },
    'challenge.8': {
        tr: 'Yenilik ve Teknoloji Üretimi',
        en: 'Innovation and Technology Production'
    },
    'challenge.9': {
        tr: 'Kültür, Bağlantılılık ve Kapsayıcılık',
        en: 'Culture, Connectivity and Community'
    },
    'challenge.10': {
        tr: 'Döngüsel Kentsel Metabolizma',
        en: 'Circular Urban Metabolism'
    },

    // Page Titles
    'page.home': {
        tr: 'M-LAB | İzmir İklim Eylem Laboratuvarı',
        en: 'M-LAB | Izmir Mission City Action Lab'
    },
    'page.projects': {
        tr: 'Projeler | M-LAB',
        en: 'Projects | M-LAB'
    },
    'page.challenges': {
        tr: 'Büyük Zorluklar | M-LAB',
        en: 'Grand Challenges | M-LAB'
    },
    'page.mission': {
        tr: 'Şehirler Misyonu | M-LAB',
        en: 'Cities Mission | M-LAB'
    },
    'page.grants': {
        tr: 'Ufuk Hibeleri | M-LAB',
        en: 'Horizon Grants | M-LAB'
    },
    'page.documents': {
        tr: 'Dokümanlar | M-LAB',
        en: 'Documents | M-LAB'
    },
    'page.analytics': {
        tr: 'Analizler | M-LAB',
        en: 'Analytics | M-LAB'
    },
    'page.contact': {
        tr: 'İletişim | M-LAB',
        en: 'Contact | M-LAB'
    },

    // Documents Page
    'documents.title': {
        tr: 'Dokümanlar',
        en: 'Documents'
    },
    'documents.empty': {
        tr: 'Henüz doküman bulunmamaktadır.',
        en: 'English documents coming soon.'
    },

    // Contact Page
    'contact.title': {
        tr: 'Bizimle İletişime Geçin',
        en: 'Contact Us'
    },
    'contact.subtitle': {
        tr: 'Sorularınız ve önerileriniz için bize ulaşın.',
        en: 'Reach out to us for questions and suggestions.'
    },
    'contact.form.name': {
        tr: 'Ad Soyad',
        en: 'Full Name'
    },
    'contact.form.email': {
        tr: 'E-posta',
        en: 'Email'
    },
    'contact.form.subject': {
        tr: 'Konu',
        en: 'Subject'
    },
    'contact.form.message': {
        tr: 'Mesajınız',
        en: 'Your Message'
    },
    'contact.form.send': {
        tr: 'Gönder',
        en: 'Send'
    },

    // Portal
    'portal.login': {
        tr: 'Giriş Yap',
        en: 'Login'
    },
    'portal.register': {
        tr: 'Kayıt Ol',
        en: 'Register'
    },
    'portal.logout': {
        tr: 'Çıkış Yap',
        en: 'Logout'
    },
    'portal.dashboard': {
        tr: 'Panel',
        en: 'Dashboard'
    },
    'portal.profile': {
        tr: 'Profil',
        en: 'Profile'
    },
    'portal.admin': {
        tr: 'Admin Paneli',
        en: 'Admin Panel'
    },

    // Common
    'common.readMore': {
        tr: 'Devamını Oku',
        en: 'Read More'
    },
    'common.submit': {
        tr: 'Gönder',
        en: 'Submit'
    },
    'common.cancel': {
        tr: 'İptal',
        en: 'Cancel'
    },
    'common.save': {
        tr: 'Kaydet',
        en: 'Save'
    },
    'common.loading': {
        tr: 'Yükleniyor...',
        en: 'Loading...'
    },
    'common.search': {
        tr: 'Ara',
        en: 'Search'
    }
};

// Get current language from localStorage
function getCurrentLang() {
    return localStorage.getItem(LANG_KEY) || DEFAULT_LANG;
}

// Set language and reload page
function setLang(lang) {
    localStorage.setItem(LANG_KEY, lang);
    location.reload();
}

// Get translated string
function t(key) {
    const entry = translations[key];
    if (!entry) {
        console.warn(`Missing translation for key: ${key}`);
        return key;
    }
    const lang = getCurrentLang();
    return entry[lang] || entry[DEFAULT_LANG] || key;
}

// Apply translations to all elements with data-i18n attribute
function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const translated = t(key);

        // Check if it's an input placeholder
        if (el.hasAttribute('placeholder')) {
            el.placeholder = translated;
        } else {
            el.textContent = translated;
        }
    });

    // Update page title if data-i18n-title exists on body
    const titleKey = document.body.dataset.i18nTitle;
    if (titleKey) {
        document.title = t(titleKey);
    }

    // Update language toggle button states
    updateLangButtons();
}

// Update language toggle button active state
function updateLangButtons() {
    const currentLang = getCurrentLang();
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const btnLang = btn.dataset.lang;
        if (btnLang === currentLang) {
            btn.classList.add('bg-mlab-navy', 'text-white', 'shadow-sm');
            btn.classList.remove('text-slate-500', 'hover:text-mlab-navy');
        } else {
            btn.classList.remove('bg-mlab-navy', 'text-white', 'shadow-sm');
            btn.classList.add('text-slate-500', 'hover:text-mlab-navy');
        }
    });
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { getCurrentLang, setLang, t, translations };
}
