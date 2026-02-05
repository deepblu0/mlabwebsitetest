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

    // Horizon Grants Page
    'grants.hero.title': {
        tr: 'Avrupa Ufuk Hibeleri',
        en: 'Horizon Europe Grants'
    },
    'grants.hero.subtitle': {
        tr: 'Avrupa Birliği Horizon Europe programı kapsamındaki açık çağrıları takip edin.',
        en: 'Follow open calls under the European Union Horizon Europe program.'
    },
    'grants.hero.portalBtn': {
        tr: 'Portal\'da Proje Paydaşları Bul!',
        en: 'Find Project Partners on Portal!'
    },
    'grants.lastUpdated': {
        tr: 'Son Güncelleme',
        en: 'Last Updated'
    },
    'grants.tabs.new': {
        tr: 'Yeni Yayınlanan Çağrılar',
        en: 'Newly Published Calls'
    },
    'grants.tabs.mission': {
        tr: 'Tüm Misyon Çağrıları',
        en: 'All Mission Calls'
    },
    'grants.tabs.all': {
        tr: 'Tüm Açık Çağrılar',
        en: 'All Open Calls'
    },
    'grants.download': {
        tr: 'Excel İndir',
        en: 'Download Excel'
    },
    'grants.table.name': {
        tr: 'Çağrı Adı',
        en: 'Call Name'
    },
    'grants.table.code': {
        tr: 'Çağrı Kodu',
        en: 'Call Code'
    },
    'grants.table.open': {
        tr: 'Açılış',
        en: 'Opening'
    },
    'grants.table.close': {
        tr: 'Kapanış',
        en: 'Closing'
    },
    'grants.table.budget': {
        tr: 'Bütçe',
        en: 'Budget'
    },
    'grants.empty': {
        tr: 'Gösterilecek çağrı bulunmuyor.',
        en: 'No calls to display.'
    },
    'grants.noNew': {
        tr: 'Bu hafta yeni açılan çağrı bulunmamaktadır.',
        en: 'There are no new calls opened this week.'
    },
    'grants.callsShowing': {
        tr: 'çağrı gösteriliyor',
        en: 'calls showing'
    },
    'grants.prev': {
        tr: 'Önceki',
        en: 'Previous'
    },
    'grants.next': {
        tr: 'Sonraki',
        en: 'Next'
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
    'portal.nav.home': {
        tr: 'Portal Ana Sayfa',
        en: 'Portal Home'
    },
    'portal.nav.profile': {
        tr: 'Profil Ayarları',
        en: 'Profile Settings'
    },
    'portal.nav.logout': {
        tr: 'Çıkış Yap',
        en: 'Logout'
    },
    'portal.dashboard.title': {
        tr: 'Panel | M-LAB Portal',
        en: 'Dashboard | M-LAB Portal'
    },
    'portal.filters.title': {
        tr: 'Filtreler',
        en: 'Filters'
    },
    'portal.filters.type': {
        tr: 'Post Türü',
        en: 'Post Type'
    },
    'portal.filters.all': {
        tr: 'Tümü',
        en: 'All'
    },
    'portal.filters.support': {
        tr: 'Destek Talepleri',
        en: 'Support Requests'
    },
    'portal.filters.expert': {
        tr: 'Uzmanlık Bildirileri',
        en: 'Expertise Declarations'
    },
    'portal.filters.partner': {
        tr: 'Partner Çağrıları',
        en: 'Partner Calls'
    },
    'portal.filters.org_type': {
        tr: 'Kurum Türü',
        en: 'Organization Type'
    },
    'portal.filters.municipality': {
        tr: 'Belediye',
        en: 'Municipality'
    },
    'portal.filters.private': {
        tr: 'Özel Sektör',
        en: 'Private Sector'
    },
    'portal.filters.challenge': {
        tr: 'Büyük Zorluk',
        en: 'Grand Challenge'
    },
    'portal.filters.apply': {
        tr: 'Filtrele',
        en: 'Filter'
    },
    'portal.actions.mobile_new': {
        tr: 'Yeni Çağrıda Bulun',
        en: 'Create New Call'
    },
    'portal.actions.new_call': {
        tr: 'Yeni Çağrı',
        en: 'New Call'
    },
    'portal.actions.expert_pool': {
        tr: 'Uzman Havuzuna Katıl!',
        en: 'Join Expert Pool!'
    },
    'portal.actions.partner_search': {
        tr: 'Partner Ara',
        en: 'Search Partner'
    },
    'portal.expert.are_you': {
        tr: 'Uzman mısınız?',
        en: 'Are you an expert?'
    },
    'portal.expert.join_network': {
        tr: 'Çözüm ağımıza katılın',
        en: 'Join our solution network'
    },
    'portal.expert.include_me': {
        tr: 'Beni Uzman Havuzuna Dahil Et!',
        en: 'Include Me in Expert Pool!'
    },
    'portal.login.title': {
        tr: 'Portal\'a Giriş',
        en: 'Login to Portal'
    },
    'portal.login.subtitle': {
        tr: 'Hesabınıza giriş yapın',
        en: 'Sign in to your account'
    },
    'portal.login.email_auth': {
        tr: 'E-posta Adresi',
        en: 'Email Address'
    },
    'portal.login.password_auth': {
        tr: 'Şifre',
        en: 'Password'
    },
    'portal.login.remember_me': {
        tr: 'Beni hatırla',
        en: 'Remember me'
    },
    'portal.login.forgot_password': {
        tr: 'Şifremi unuttum',
        en: 'Forgot password'
    },
    'portal.login.no_account': {
        tr: 'Hesabınız yok mu?',
        en: 'Don\'t have an account?'
    },
    'portal.login.back_to_portal': {
        tr: 'Portal\'a Dön',
        en: 'Back to Portal'
    },
    'portal.register.title': {
        tr: 'Platforma Kayıt Ol',
        en: 'Register to Platform'
    },
    'portal.register.subtitle': {
        tr: 'Bilgilerinizi doldurun ve onay sürecini başlatın.',
        en: 'Fill in your details and start the approval process.'
    },
    'portal.register.category': {
        tr: 'Kurum Kategorisi *',
        en: 'Organization Category *'
    },
    'portal.register.org_info': {
        tr: 'Kurum Bilgileri',
        en: 'Organization Info'
    },
    'portal.register.org_name': {
        tr: 'Kurum Adı *',
        en: 'Organization Name *'
    },
    'portal.register.website': {
        tr: 'Web Sitesi',
        en: 'Website'
    },
    'portal.register.org_desc': {
        tr: 'Kurum Açıklaması',
        en: 'Organization Description'
    },
    'portal.register.challenges_label': {
        tr: 'Kurumunuz hangi Büyük Zorluklar kapsamında katkı sunabilir? *',
        en: 'Which Grand Challenges can your organization contribute to? *'
    },
    'portal.register.contact_person': {
        tr: 'İletişim Kişisi',
        en: 'Contact Person'
    },
    'portal.register.contact_name': {
        tr: 'Ad Soyad *',
        en: 'Full Name *'
    },
    'portal.register.contact_title': {
        tr: 'Unvan / Pozisyon *',
        en: 'Title / Position *'
    },
    'portal.register.phone': {
        tr: 'Telefon',
        en: 'Phone'
    },
    'portal.register.create_password': {
        tr: 'Şifre Oluştur',
        en: 'Create Password'
    },
    'portal.register.password': {
        tr: 'Şifre *',
        en: 'Password *'
    },
    'portal.register.password_confirm': {
        tr: 'Şifre Tekrar *',
        en: 'Confirm Password *'
    },
    'portal.register.kvkk_text': {
        tr: 'okudum ve kişisel verilerimin işlenmesini kabul ediyorum.',
        en: 'I have read and agree to the processing of my personal data.'
    },
    'portal.register.submit': {
        tr: 'Başvuruyu Gönder',
        en: 'Submit Application'
    },
    'portal.register.already_account': {
        tr: 'Zaten hesabınız var mı?',
        en: 'Already have an account?'
    },
    'portal.register.success_title': {
        tr: 'Başvurunuz Alındı!',
        en: 'Application Received!'
    },
    'portal.register.success_message': {
        tr: 'Başvurunuz M-LAB ekibi tarafından incelenecektir. Onay sonrası e-posta ile bilgilendirileceksiniz. Bu işlem genellikle 1-2 iş günü sürmektedir.',
        en: 'Your application will be reviewed by the M-LAB team. You will be informed via email after approval. This process usually takes 1-2 business days.'
    },
    'portal.error.title': {
        tr: 'Hata Oluştu!',
        en: 'Error Occurred!'
    },
    'portal.error.default': {
        tr: 'Bir hata meydana geldi.',
        en: 'An error occurred.'
    },
    'portal.common.ok': {
        tr: 'Tamam',
        en: 'OK'
    },
    'portal.profile.subtitle': {
        tr: 'Kurum ve iletişim bilgilerinizi güncelleyin.',
        en: 'Update your organization and contact information.'
    },
    'portal.common.cancel': {
        tr: 'Vazgeç',
        en: 'Cancel'
    },
    'portal.profile.save': {
        tr: 'Değişiklikleri Kaydet',
        en: 'Save Changes'
    },
    'portal.profile.success': {
        tr: 'Profil başarıyla güncellendi!',
        en: 'Profile updated successfully!'
    },
    'portal.common.saving': {
        tr: 'Kaydediliyor...',
        en: 'Saving...'
    },
    'portal.profile.email_fixed': {
        tr: 'E-posta değiştirilemez',
        en: 'Email cannot be changed'
    },
    'portal.admin.title': {
        tr: 'Admin Panel | M-LAB Portal',
        en: 'Admin Panel | M-LAB Portal'
    },
    'portal.admin.panel': {
        tr: 'Admin Panel',
        en: 'Admin Panel'
    },
    'portal.admin.pending': {
        tr: 'Onay Bekleyenler',
        en: 'Pending Approval'
    },
    'portal.admin.approved': {
        tr: 'Onaylı Üyeler',
        en: 'Approved Members'
    },
    'portal.admin.rejected': {
        tr: 'Reddedilenler',
        en: 'Rejected'
    },
    'portal.admin.experts': {
        tr: 'Uzman Başvuruları',
        en: 'Expert Applications'
    },
    'portal.admin.empty': {
        tr: 'Bu kategoride kullanıcı bulunmuyor.',
        en: 'No users found in this category.'
    },
    'portal.admin.user_details': {
        tr: 'Üyelik Detayları',
        en: 'Membership Details'
    },
    'portal.admin.approve': {
        tr: 'Onayla',
        en: 'Approve'
    },
    'portal.admin.reject': {
        tr: 'Reddet',
        en: 'Reject'
    },
    'portal.form.call_type': {
        tr: 'Çağrı Türü *',
        en: 'Call Type *'
    },
    'portal.form.support_request': {
        tr: 'Destek Talebi',
        en: 'Support Request'
    },
    'portal.form.partner_call': {
        tr: 'Ufuk Avrupa Partner Çağrısı',
        en: 'Horizon Europe Partner Call'
    },
    'portal.form.subject': {
        tr: 'Konu Başlığı *',
        en: 'Subject *'
    },
    'portal.form.grand_challenge': {
        tr: 'Büyük Zorluk *',
        en: 'Grand Challenge *'
    },
    'portal.form.description': {
        tr: 'Açıklama *',
        en: 'Description *'
    },
    'portal.form.publish': {
        tr: 'Yayınla',
        en: 'Publish'
    },
    'portal.empty.title': {
        tr: 'Henüz çağrı yok',
        en: 'No calls yet'
    },
    'portal.empty.subtitle': {
        tr: 'İlk çağrıyı siz oluşturun!',
        en: 'Create the first call!'
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

// Update language toggle button states
// Apply translations to the page
function applyTranslations() {
    const currentLang = getCurrentLang();
    document.documentElement.lang = currentLang;

    // Translate text content
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = t(key);
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        element.placeholder = t(key);
    });

    // Translate meta titles (optional, if we have data-i18n-title on body or head)
    const titleKey = document.body.getAttribute('data-i18n-title');
    if (titleKey) {
        document.title = t(titleKey);
    }
}

// Update language toggle button states (Managed in DOMContentLoaded)

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
    updateLangButtons(); // Moved here to ensure DOM is ready
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { getCurrentLang, setLang, t, translations };
}
