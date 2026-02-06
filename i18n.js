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
    'mission.hero.title': {
        tr: 'Şehirler Misyonu',
        en: 'Cities Mission'
    },
    'mission.hero.subtitle': {
        tr: 'Avrupa Birliği\'nin en iddialı kentsel dönüşüm girişimi hakkında bilgi edinin.',
        en: 'Learn about the European Union\'s most ambitious urban transformation initiative.'
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
    'mission.description3': {
        tr: 'Misyon yaklaşımı sadece araştırma ve inovasyonu değil aynı zamanda yeni yönetişim modellerini ve yatırım araçlarını da kapsar.',
        en: 'The mission approach covers not only research and innovation but also governance models and investment tools.'
    },
    'mission.description4': {
        tr: 'Temel hedef bilimsel çalışmaları raporlardan çıkarıp vatandaşların günlük yaşamını iyileştiren somut kamu politikalarına ve uygulamalara dönüştürmektir.',
        en: 'The main goal is to translate scientific studies from reports into concrete public policies and practices that improve citizens\' daily lives.'
    },
    'mission.section2.title1': {
        tr: 'İklim Nötr ve Akıllı',
        en: 'Climate Neutral and Smart'
    },
    'mission.section2.title2': {
        tr: 'Şehirler Misyonu',
        en: 'Cities Mission'
    },
    'mission.section2.p1': {
        tr: 'Dünya nüfusunun çoğunluğuna ev sahipliği yapan şehirler küresel karbon emisyonlarının ve enerji tüketiminin ana kaynağıdır. Avrupa Komisyonu bu gerçekten hareketle İklim Nötr ve Akıllı Şehirler Misyonunu hayata geçirmiştir.',
        en: 'Cities, home to the majority of the world\'s population, are the main source of global carbon emissions and energy consumption. Based on this fact, the European Commission launched the Climate Neutral and Smart Cities Mission.'
    },
    'mission.section2.p2': {
        tr: 'Bu misyon 2030 yılına kadar 112 Avrupa kentini iklim nötr hale getirerek dönüştürmeyi ve 2050 yılına kadar tüm şehirlere rehberlik edecek birer inovasyon merkezi yaratmayı hedefler. Misyon klasik hibe programlarının ötesine geçerek şehirlerin finansal ve yasal engellerini aşmasını sağlayan yeni bir sistem sunar.',
        en: 'This mission aims to transform 112 European cities into climate-neutral ones by 2030. The mission goes beyond classic grant programs.'
    },
    'mission.section2.p3': {
        tr: 'İzmir bu iddialı hedefin Türkiye\'deki öncüsü olarak sadece kendi geleceğini değil Avrupa\'nın yeşil mutabakat vizyonunu da şekillendiren lider kentler arasında yerini almıştır.',
        en: 'As the pioneer of this ambitious goal in Turkey, Izmir has taken its place among the leading cities shaping Europe\'s green deal vision.'
    },
    'mission.section2.p4': {
        tr: 'NetZeroCities platformu desteğiyle yürütülen süreçte kentimiz vatandaşlar ve yatırımcılar ile yerel otoriteleri ortak bir amaç etrafında buluşturarak sürdürülebilir bir gelecek inşa etmektedir.',
        en: 'Supported by the NetZeroCities platform, our city brings together citizens, investors, and local authorities to build a sustainable future.'
    },
    'mission.section3.title1': {
        tr: 'Avrupa\'nın Öncü 112 Kenti',
        en: 'Among Europe\'s Leading'
    },
    'mission.section3.title2': {
        tr: 'Arasında İzmir',
        en: '112 Cities: Izmir'
    },
    'mission.section3.p1': {
        tr: 'İzmir Avrupa Komisyonu tarafından titizlikle yürütülen değerlendirme süreci sonunda 377 başvuru arasından seçilerek 112 Misyon Şehri arasına girmiştir. Türkiye\'den seçilen iki kentten biri olan İzmir bu süreçte sadece bir katılımcı olarak kalmamış aynı zamanda küresel bir başarıya imza atmıştır.',
        en: 'Izmir was selected among 112 Mission Cities out of 377 applications. Being one of the two cities selected from Turkey, Izmir achieved global success.'
    },
    'mission.section3.p2': {
        tr: 'Kentimiz İklim Şehri Sözleşmesi sürecini başarıyla tamamlayarak Avrupa Birliği üyesi ülkeler dışında Misyon Etiketi almaya hak kazanan ilk şehir olma unvanını kazanmıştır. Bu tarihi başarı İzmir\'in teknik kapasitesinin ve kararlılığının Avrupa standartlarında tescil edildiğinin en somut kanıtıdır.',
        en: 'Our city became the first city outside the EU to receive the Mission Label by successfully completing the Climate City Contract process.'
    },
    'mission.section3.p3': {
        tr: 'İzmir bu lider konumuyla hem ulusal ölçekte hem de Avrupa genelinde diğer şehirlere ilham veren bir rol model olmayı sürdürmektedir.',
        en: 'With this leading position, Izmir continues to be a role model inspiring other cities.'
    },
    'mission.state.cities.num': {
        tr: '112',
        en: '112'
    },
    'mission.stat.cities.label': {
        tr: 'Seçilen Şehir',
        en: 'Selected Cities'
    },
    'mission.stat.applicants.num': {
        tr: '377',
        en: '377'
    },
    'mission.stat.applicants.label': {
        tr: 'Başvuru',
        en: 'Applications'
    },
    'mission.badge.date': {
        tr: 'Haziran 2025',
        en: 'June 2025'
    },
    'mission.badge.label': {
        tr: 'Kent Taahhüdü İmzalandı',
        en: 'City Commitment Signed'
    },
    'mission.section4.title1': {
        tr: 'İmzalar İzmir 2030',
        en: 'Signatures Signed for'
    },
    'mission.section4.title2': {
        tr: 'Kent Taahhüdü için atıldı',
        en: 'Izmir 2030 City Commitment'
    },
    'mission.section4.p1': {
        tr: 'Başkanımız Dr. Cemil Tugay liderliğinde Haziran 2025 tarihinde imzalanan İzmir 2030 Kent Taahhüdü şehrin tüm dinamiklerini ortak bir eylem planında birleştirmiştir.',
        en: 'The Izmir 2030 City Commitment, signed in June 2025 under the leadership of Mayor Dr. Cemil Tugay, united the city\'s dynamics.'
    },
    'mission.section4.p2': {
        tr: 'İzmir Ekonomik Kalkınma Koordinasyon Kurulu üyelerinin imzalarıyla resmileşen bu taahhüt iklim nötr hedefinin sadece belediyenin değil sanayiden üniversiteye tüm kentin ortak sorumluluğu olduğunu belgeler.',
        en: 'This commitment documents that the climate neutral goal is the common responsibility of the entire city.'
    },
    'mission.section4.p3': {
        tr: 'Bu kapsamda İzQ İnovasyon Merkezi bünyesinde faaliyete geçen Misyon Eylem Laboratuvarı İZPA koordinasyonunda yürütülmektedir.',
        en: 'The Mission Action Lab, operating within the İzQ Innovation Center, is coordinated by İZPA.'
    },
    'mission.section4.p4': {
        tr: 'İzmir bu taahhüt ile kağıt üzerindeki planları sahada somut yatırımlara dönüştürerek katılımcı ve şeffaf bir yönetişim modeliyle 2030 hedefine emin adımlarla yürümektedir.',
        en: 'Izmir transforms plans into concrete investments with a participatory governance model.'
    },
    'mission.cta.title': {
        tr: 'Daha Fazla Bilgi Edinin',
        en: 'Learn More'
    },
    'mission.cta.subtitle': {
        tr: 'İzmir\'in iklim eylem planını ve devam eden projelerimizi keşfedin.',
        en: 'Discover Izmir\'s climate action plan and ongoing projects.'
    },
    'mission.cta.btn1': {
        tr: 'Dokümanları İncele',
        en: 'Review Documents'
    },
    'mission.cta.btn2': {
        tr: 'Projeleri Keşfet',
        en: 'Explore Projects'
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
    'footer.copyright': {
        tr: '© 2025 M-LAB İzmir',
        en: '© 2025 M-LAB Izmir'
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

    // Grand Challenges Hero
    'challenges.hero.title': {
        tr: 'Büyük Zorluklar',
        en: 'Grand Challenges'
    },
    'challenges.hero.desc1': {
        tr: 'Misyon Kent 2030 İzmir vizyonu doğrultusunda tarafından hazırlanan',
        en: 'Prepared in line with the Mission City 2030 Izmir vision,'
    },
    'challenges.hero.link': {
        tr: 'bu politika notları',
        en: 'Urban Policy Notes'
    },
    'challenges.hero.desc2': {
        tr: '; kentin karşı karşıya olduğu sistemsel sorunlara yenilikçi, sürdürülebilir ve toplum odaklı çözümler sunmayı amaçlamaktadır. İzmir’in önümüzdeki yıllarda aşması gereken 10 Büyük Zorluk, misyon odaklı bir inovasyon anlayışıyla aşağıda özetlenmiştir.',
        en: ' aim to provide innovative, sustainable, and community-oriented solutions to the systemic problems facing the city. The 10 Grand Challenges that Izmir must overcome in the coming years are summarized below with a mission-oriented innovation approach.'
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

    // Projects Page
    'projects.hero.title': {
        tr: 'İzmir\'in Projeleri',
        en: 'Projects of Izmir'
    },
    'projects.hero.subtitle': {
        tr: 'İzmir 2030 Kent Taahhüdü kapsamında şehri iklim nötr ve akıllı bir geleceğe taşıyan tüm çalışmaları burada bir araya getiriyoruz. Yaşam kalitesini artıran kentsel inovasyon projelerini keşfedin.',
        en: 'We bring together all efforts carrying the city to a climate-neutral and smart future within the scope of the Izmir 2030 City Commitment. Discover urban innovation projects that improve quality of life.'
    },
    'projects.hero.button': {
        tr: 'Projenizi Yayınlayalım!',
        en: 'Submit Your Project!'
    },
    'projects.search.placeholder': {
        tr: 'Proje ara...',
        en: 'Search projects...'
    },
    'projects.filter.all': {
        tr: 'Tüm Projeler',
        en: 'All Projects'
    },
    'projects.card.duration': {
        tr: 'Süre',
        en: 'Duration'
    },
    'projects.card.status': {
        tr: 'Durum',
        en: 'Status'
    },
    'projects.card.startDate': {
        tr: 'Başlangıç',
        en: 'Start Date'
    },
    'projects.card.partners': {
        tr: 'Ortaklar',
        en: 'Partners'
    },
    'projects.empty': {
        tr: 'Bu kategoride henüz proje bulunmamaktadır.',
        en: 'No projects found in this category.'
    },
    'projects.modal.title': {
        tr: 'Yeni Proje Gönder',
        en: 'Submit New Project'
    },
    'projects.modal.desc': {
        tr: 'Projenizi platformda yayınlamak için bilgileri doldurun.',
        en: 'Fill in the information to publish your project on the platform.'
    },
    'projects.btn.publish': {
        tr: 'Projenizi Yayınlayalım!',
        en: 'Submit Your Project!'
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
    'portal.register.password_placeholder': {
        tr: 'En az 8 karakter',
        en: 'Min 8 characters'
    },
    'portal.register.password_confirm_placeholder': {
        tr: 'Şifrenizi tekrar girin',
        en: 'Re-enter your password'
    },
    'portal.register.kvkk_text': {
        tr: 'okudum ve kişisel verilerimin işlenmesini kabul ediyorum.',
        en: 'I have read and agree to the processing of my personal data.'
    },

    // Dashboard Filters & Forms
    'portal.filters.type_expert': { tr: 'Uzmanlık Bildirileri', en: 'Expertise Declarations' },
    'portal.filters.type_partner': { tr: 'Ufuk Avrupa Partner Çağrıları', en: 'Horizon Europe Partner Calls' },

    'portal.new_post.support_req': { tr: 'Destek Talebi', en: 'Support Request' },
    'portal.new_post.support_desc': {
        tr: 'İnovatif, yaşanabilir ve iklim nötr odaklı projeleriniz için ihtiyaç duyduğunuz partner, finansman veya teknik altyapı desteğini buradan duyurun.',
        en: 'Announce your need for partners, funding, or technical infrastructure for your innovative, livable, and climate-neutral projects.'
    },
    'portal.new_post.expert_decl': { tr: 'Uzmanlık Bildirisi', en: 'Expertise Declaration' },
    'portal.new_post.expert_desc': {
        tr: 'Şehrin dönüşüm hedeflerine değer katacak kurumsal yetkinliklerinizi, akademik birikiminizi veya teknolojik çözüm önerilerinizi çözüm ağına ekleyin.',
        en: 'Add your institutional capabilities, academic background, or technical solutions that add value to the city\'s transformation goals to the solution network.'
    },
    'portal.form.file_upload': { tr: 'Dosya Ekle (opsiyonel)', en: 'Add File (optional)' },
    'portal.form.drop_zone': { tr: 'Dosya seçin veya sürükleyin', en: 'Select or drag file' },
    'portal.form.file_hint': { tr: 'PDF, Word, Excel, Resim (max 10MB)', en: 'PDF, Word, Excel, Image (max 10MB)' },

    // Expert Modal
    'portal.expert_form.title': { tr: 'Uzman Başvuru Formu', en: 'Expert Application Form' },
    'portal.expert_form.subtitle': { tr: 'Tüm alanları eksiksiz doldurunuz.', en: 'Please fill in all fields.' },
    'portal.expert_form.personal_info': { tr: 'Kişisel Bilgiler', en: 'Personal Information' },
    'portal.expert_form.contact_info': { tr: 'İletişim Bilgileri', en: 'Contact Information' },
    'portal.expert_form.expertise_info': { tr: 'Uzmanlık Bilgileri', en: 'Expertise Information' },
    'portal.expert_form.education_info': { tr: 'Eğitim Bilgileri', en: 'Education Information' },
    'portal.expert_form.ethics': { tr: 'Etik Taahhütname', en: 'Code of Ethics' },

    'portal.expert_form.labels.fullname': { tr: 'Ad Soyad *', en: 'Full Name *' },
    'portal.expert_form.labels.profession': { tr: 'Meslek *', en: 'Profession *' },
    'portal.expert_form.labels.organization': { tr: 'Çalıştığı Kurum *', en: 'Organization *' },
    'portal.expert_form.labels.title': { tr: 'Ünvan *', en: 'Title *' },
    'portal.expert_form.labels.email': { tr: 'E-posta Adresi *', en: 'Email Address *' },
    'portal.expert_form.labels.phone': { tr: 'Telefon Numarası *', en: 'Phone Number *' },
    'portal.expert_form.labels.area': { tr: 'Uzmanlık Alanı *', en: 'Area of Expertise *' },
    'portal.expert_form.labels.details': { tr: 'Uzmanlık Detayları *', en: 'Expertise Details *' },
    'portal.expert_form.labels.education': { tr: 'Eğitim Geçmişi *', en: 'Education History *' },

    'portal.coc.read_button': { tr: 'Taahhütnameyi Oku (Zorunlu)', en: 'Read Code of Conduct (Required)' },
    'portal.coc.accept_label': { tr: 'okudum ve kabul ediyorum.', en: 'I have read and agree.' },
    'portal.coc.modal_title': { tr: 'Çıkar Çatışması ve Gizlilik Taahhütnamesi', en: 'Conflict of Interest and Confidentiality Agreement' },
    'portal.coc.modal_subtitle': { tr: 'Lütfen sonuna kadar okuyunuz', en: 'Please read to the end' },
    'portal.coc.decl': { tr: 'Etik Beyan', en: 'Ethical Declaration' },
    'portal.coc.text_intro': { tr: 'İzmir Büyükşehir Belediyesi çalışmalarında bağımsız uzman olarak görev almak üzere başvuruda bulunuyorum. Bu kapsamda aşağıdaki hususları beyan ederim:', en: 'I am applying to serve as an independent expert in Izmir Metropolitan Municipality activities. I hereby declare the following:' },
    'portal.coc.item1': { tr: '1. Çıkar Çatışması: Danışmanlık veya değerlendirme desteği verdiğim konularda ihale, proje veya hibe süreçlerine katılmayacağım. Yakınlarımın dahil olduğu süreçlerden çekileceğim.', en: '1. Conflict of Interest: I will not participate in tender, project, or grant processes where I provide consultancy or evaluation support. I will withdraw from processes involving my relatives.' },
    'portal.coc.item2': { tr: '2. Gizlilik: Görevim sırasında edindiğim bilgileri gizli tutacağım ve üçüncü kişilerle paylaşmayacağım.', en: '2. Confidentiality: I will keep information obtained during my duty confidential and will not share it with third parties.' },
    'portal.coc.item3': { tr: '3. Tarafsızlık: Değerlendirmelerimi objektif kriterlere göre yapacağım.', en: '3. Impartiality: I will make my evaluations based on objective criteria.' },
    'portal.coc.accept_btn': { tr: 'Okudum ve Kabul Ediyorum', en: 'I Read and Accept' },
    'portal.coc.reject_btn': { tr: 'Kabul Etmiyorum', en: 'I Do Not Accept' },

    // Profile
    'portal.profile.subtitle': { tr: 'Kurum ve iletişim bilgilerinizi güncelleyin.', en: 'Update your organization and contact information.' },
    'portal.profile.email_fixed': { tr: 'E-posta değiştirilemez', en: 'Email cannot be changed' },
    'portal.profile.save': { tr: 'Değişiklikleri Kaydet', en: 'Save Changes' },
    'portal.profile.success': { tr: 'Profil başarıyla güncellendi!', en: 'Profile updated successfully!' },

    // Admin Panel
    'portal.admin.panel': { tr: 'Admin Panel', en: 'Admin Panel' },
    'portal.admin.pending': { tr: 'Onay Bekleyenler', en: 'Pending Approval' },
    'portal.admin.approved': { tr: 'Onaylı Üyeler', en: 'Approved Members' },
    'portal.admin.rejected': { tr: 'Reddedilenler', en: 'Rejected' },
    'portal.admin.experts': { tr: 'Uzman Başvuruları', en: 'Expert Applications' },
    'portal.admin.empty': { tr: 'Bu kategoride kullanıcı bulunmuyor.', en: 'No users found in this category.' },
    'portal.admin.user_details': { tr: 'Üyelik Detayları', en: 'Membership Details' },
    'portal.admin.unknown': { tr: 'Bilinmiyor', en: 'Unknown' },
    'portal.admin.municipality': { tr: 'Belediye', en: 'Municipality' },
    'portal.admin.private': { tr: 'Özel Sektör', en: 'Private Sector' },
    'portal.admin.sector': { tr: 'Sektör', en: 'Sector' },
    'portal.admin.website': { tr: 'Web Sitesi', en: 'Website' },
    'portal.admin.desc': { tr: 'Kurum Açıklaması', en: 'Organization Description' },
    'portal.admin.contact_info': { tr: 'İletişim Bilgileri', en: 'Contact Information' },
    'portal.admin.name': { tr: 'Ad Soyad', en: 'Full Name' },
    'portal.admin.title': { tr: 'Unvan', en: 'Title' },
    'portal.admin.email': { tr: 'E-posta', en: 'Email' },
    'portal.admin.phone': { tr: 'Telefon', en: 'Phone' },
    'portal.admin.registered': { tr: 'Kayıt', en: 'Registered' },
    'portal.admin.approved_at': { tr: 'Onay', en: 'Approved' },
    'portal.admin.approve_btn': { tr: 'Onayla', en: 'Approve' },
    'portal.admin.reject_btn': { tr: 'Reddet', en: 'Reject' },
    'portal.admin.expert_app_label': { tr: 'Uzman Başvuru', en: 'Expert Application' },
    'portal.admin.ethics_ok': { tr: 'Etik Beyan Kabul Edildi', en: 'Ethics Accepted' },
    'portal.admin.ethics_no': { tr: 'Etik Beyan Kabul Edilmedi', en: 'Ethics Rejected' },


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
    'portal.register.password_placeholder': {
        tr: 'En az 8 karakter',
        en: 'At least 8 characters'
    },
    'portal.register.password_confirm_placeholder': {
        tr: 'Şifrenizi tekrar girin',
        en: 'Re-enter your password'
    },
    'post.type.expert': {
        tr: 'Uzmanlık',
        en: 'Expertise'
    },
    'post.type.support': {
        tr: 'Destek Talebi',
        en: 'Support Request'
    },
    'post.type.partner': {
        tr: 'Partner Çağrısı',
        en: 'Partner Call'
    },
    'sector.barinma': { tr: 'Uygun Fiyatlı Barınma', en: 'Affordable Housing' },
    'sector.hareketlilik': { tr: 'Sürdürülebilir Hareketlilik', en: 'Sustainable Mobility' },
    'sector.afet': { tr: 'Afetlere Dirençlilik', en: 'Disaster Resilience' },
    'sector.gida': { tr: 'Sağlıklı Gıda', en: 'Healthy Food' },
    'sector.saglik': { tr: 'Sağlık ve Esenlik', en: 'Health and Wellbeing' },
    'sector.egitim': { tr: 'Eğitimli Nesiller', en: 'Educated Generations' },
    'sector.is': { tr: 'İnsana Yakışır İş', en: 'Decent Work' },
    'sector.inovasyon': { tr: 'İnovasyon Üretimi', en: 'Innovation Production' },
    'sector.kultur': { tr: 'Kültür ve Kapsayıcılık', en: 'Culture and Inclusivity' },
    'sector.dongusal': { tr: 'Döngüsel Metabolizma', en: 'Circular Metabolism' },
    'common.reply': { tr: 'Yanıtla', en: 'Reply' },
    'common.author_unknown': { tr: 'Bilinmiyor', en: 'Unknown' },
    'error.general': { tr: 'Bir hata oluştu.', en: 'An error occurred.' },

    // Portal - How It Works
    'portal.how_it_works.title': {
        tr: '3 Adımda Platforma Katılın',
        en: 'Join the Platform in 3 Steps'
    },
    'portal.step1.title': {
        tr: 'Kayıt Olun',
        en: 'Register'
    },
    'portal.step1.desc': {
        tr: 'Kurumunuzun bilgilerini girin ve Belediye veya Özel Sektör kategorisini seçin. Form birkaç dakika içinde tamamlanır.',
        en: 'Enter your organization details and select Municipality or Private Sector category. The form takes just a few minutes.'
    },
    'portal.step2.title': {
        tr: 'Onay Bekleyin',
        en: 'Wait for Approval'
    },
    'portal.step2.desc': {
        tr: 'M-LAB ekibi başvurunuzu inceleyecek. Onay sonrası platforma tam erişim sağlarsınız. Genellikle 1-2 iş günü sürer.',
        en: 'The M-LAB team will review your application. Once approved, you get full access. Usually takes 1-2 business days.'
    },
    'portal.step3.title': {
        tr: 'Etkileşime Geçin',
        en: 'Start Interacting'
    },
    'portal.step3.desc': {
        tr: 'Destek talepleri oluşturun, uzmanlık sunumları yayınlayın ve diğer üyelerle iletişime geçin.',
        en: 'Create support requests, publish expertise presentations, and connect with other members.'
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

    'portal.how_it_works.badge': {
        tr: 'Nasıl Çalışır?',
        en: 'How It Works?'
    },

    // Portal Landing
    'portal.hero.title1': { tr: 'M-LAB', en: 'M-LAB' },
    'portal.hero.title2': { tr: 'Kentsel İnovasyon ve', en: 'Urban Innovation and' },
    'portal.hero.title3': { tr: 'İş Birliği', en: 'Collaboration' },
    'portal.hero.title4': { tr: 'Portalı', en: 'Portal' },
    'portal.hero.desc1': {
        tr: 'Bu platform şehrin karmaşık sorunlarına ortak akılla çözüm üretmek için tasarlanmıştır. Bizler İzmir için ortak bir zaman kumbarası oluşturuyoruz.',
        en: 'This platform is designed to produce solutions to the city\'s complex problems with collective wisdom. We are creating a common time bank for Izmir.'
    },
    'portal.hero.desc2': {
        tr: 'Amacımız bürokratik süreçleri hızlandırmak ve doğru ihtiyacı doğru yetkinlikle en kısa sürede buluşturmaktır. Burada sadece projeler değil şehrin geleceği için ayrılan değerli zamanlar yönetilir.',
        en: 'Our goal is to accelerate bureaucratic processes and meet the right need with the right competence as soon as possible. Here, not only projects but also valuable times allocated for the future of the city are managed.'
    },
    'portal.btn.register': { tr: 'Kayıt Ol', en: 'Register' },
    'portal.btn.login': { tr: 'Giriş Yap', en: 'Login' },

    // Contact Page
    'contact.hero.title': { tr: 'Bize Ulaşın', en: 'Contact Us' },
    'contact.hero.desc': {
        tr: 'Sorularınız, önerileriniz veya işbirliği talepleriniz için bizimle iletişime geçin.',
        en: 'Contact us for your questions, suggestions, or collaboration requests.'
    },
    'contact.form.title': { tr: 'Mesaj Gönderin', en: 'Send a Message' },
    'contact.form.subtitle': { tr: 'Size en kısa sürede dönüş yapacağız.', en: 'We will get back to you as soon as possible.' },
    'contact.form.name': { tr: 'Adınız Soyadınız', en: 'Full Name' },
    'contact.form.email': { tr: 'E-posta Adresiniz', en: 'Email Address' },
    'contact.form.subject': { tr: 'Konu', en: 'Subject' },
    'contact.form.message': { tr: 'Mesajınız', en: 'Your Message' },

    'contact.form.select.default': { tr: 'Konu seçiniz...', en: 'Select a subject...' },
    'contact.form.select.general': { tr: 'Genel Bilgi', en: 'General Information' },
    'contact.form.select.collab': { tr: 'İşbirliği Teklifi', en: 'Collaboration Proposal' },
    'contact.form.select.project': { tr: 'Proje Başvurusu', en: 'Project Application' },
    'contact.form.select.other': { tr: 'Diğer', en: 'Other' },

    'contact.form.consent.text': { tr: 'Kişisel verilerimin', en: 'I agree to the processing of my personal data for the purposes specified in the' },
    'contact.form.consent.link': { tr: 'KVKK Aydınlatma Metni', en: 'PDPL Clarification Text' },
    'contact.form.consent.suffix': { tr: "'nde belirtilen amaçlarla işlenmesini kabul ediyorum.", en: '.' },

    'contact.form.submit': { tr: 'Mesajı Gönder', en: 'Send Message' },
    'contact.form.success': { tr: 'Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.', en: 'Your message has been sent! We will get back to you as soon as possible.' },

    // KVKK Modal
    'contact.kvkk.title': { tr: 'KVKK Aydınlatma Metni', en: 'PDPL Clarification Text' },
    'contact.kvkk.header1': { tr: '1. İşlenen Kişisel Verileriniz', en: '1. Processed Personal Data' },
    'contact.kvkk.text1': {
        tr: 'Web sitemizde yer alan iletişim formu aracılığıyla tarafımıza ilettiğiniz adınız ve soyadınız ile e-posta adresiniz ve mesaj içeriğinde belirttiğiniz diğer bilgileriniz işlenmektedir.',
        en: 'Your name, surname, email address, and other information provided in the message content transmitted to us via the contact form on our website are processed.'
    },
    'contact.kvkk.header2': { tr: '2. Verilerin İşlenme Amacı', en: '2. Purpose of Processing Data' },
    'contact.kvkk.text2': {
        tr: 'Toplanan kişisel verileriniz tarafımıza ilettiğiniz talep veya önerilerin değerlendirilmesi ve konuyla ilgili size geri dönüş sağlanması ile iletişim süreçlerinin yönetilmesi amacıyla işlenmektedir.',
        en: 'Your collected personal data is processed for the purpose of evaluating the requests or suggestions you submit to us, providing feedback to you on the subject, and managing communication processes.'
    },
    'contact.kvkk.header3': { tr: '3. Veri Toplamanın Yöntemi ve Hukuki Sebebi', en: '3. Method and Legal Reason for Data Collection' },
    'contact.kvkk.text3': {
        tr: 'Kişisel verileriniz web sitemizdeki iletişim formunun tarafınızca doldurulması suretiyle elektronik ortamda otomatik yollarla elde edilmektedir.',
        en: 'Your personal data is obtained electronically by automatic means through the filling of the contact form on our website by you.'
    },
    'contact.kvkk.header4': { tr: '4. Verilerin Aktarılması', en: '4. Transfer of Data' },
    'contact.kvkk.text4': {
        tr: 'İletişim formu aracılığıyla toplanan verileriniz üçüncü kişilerle paylaşılmamaktadır. Ancak yasal bir zorunluluk doğması halinde yetkili kamu kurum ve kuruluşları ile paylaşılabilir.',
        en: 'Your data collected via the contact form is not shared with third parties. However, it may be shared with authorized public institutions and organizations if a legal obligation arises.'
    },
    'contact.kvkk.header5': { tr: '5. İlgili Kişinin Hakları', en: '5. Rights of the Data Subject' },
    'contact.kvkk.text5': {
        tr: 'Veri sahibi olarak Kanunun 11. maddesi uyarınca verilerinizin işlenip işlenmediğini öğrenme ve yanlış işlenmişse düzeltilmesini talep etme haklarına sahipsiniz.',
        en: 'As a data subject, you have the right to learn whether your data is processed and to request correction if processed incorrectly in accordance with Article 11 of the Law.'
    },
    'contact.kvkk.intro': {
        tr: 'M-LAB İzmir ve koordinatör kuruluş İzmir Planlama Ajansı olarak veri sorumlusu sıfatıyla kişisel verilerinizi 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında işlemekteyiz.',
        en: 'As M-LAB Izmir and the coordinator organization Izmir Planning Agency, we process your personal data as a data controller within the scope of the Law on Protection of Personal Data No. 6698.'
    },
    'contact.kvkk.intro': {
        tr: 'M-LAB İzmir ve koordinatör kuruluş İzmir Planlama Ajansı olarak veri sorumlusu sıfatıyla kişisel verilerinizi 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında işlemekteyiz.',
        en: 'As M-LAB Izmir and the coordinator organization Izmir Planning Agency, we process your personal data as a data controller within the scope of the Law on Protection of Personal Data No. 6698.'
    },
    'contact.kvkk.close': { tr: 'Anladım, Kapat', en: 'Understood, Close' },

    // Analytics Page
    'analytics.hero.title': { tr: 'Analizler', en: 'Analytics' },
    'analytics.hero.desc': {
        tr: 'İzmir\'in interaktif harita analizlerini keşfedin. Şehrin kentsel verilerini ve farklı temalarda hazırlanan detaylı mekansal çalışmaları bu alandan inceleyebilirsiniz.',
        en: 'Explore interactive map analyses of Izmir. You can examine the city\'s urban data and detailed spatial studies prepared in different themes from this area.'
    },
    'analytics.tab.climate': { tr: 'Kentsel İklim Analizi', en: 'Urban Climate Analysis' },
    'analytics.tab.green': { tr: '3-30-300 Analizi', en: '3-30-300 Analysis' },

    'analytics.map.climate.title': { tr: 'İzmir Kentsel İklim Haritası', en: 'Izmir Urban Climate Map' },
    'analytics.map.green.title': { tr: 'İzmir 3-30-300 Analizi', en: 'Izmir 3-30-300 Analysis' },
    'analytics.map.subtitle': { tr: 'Foursquare Studio ile hazırlanmıştır', en: 'Prepared with Foursquare Studio' },
    'analytics.map.fullscreen': { tr: 'Tam Ekran', en: 'Fullscreen' },

    'analytics.card.heat_islands.title': { tr: 'Sıcaklık Adaları', en: 'Heat Islands' },
    'analytics.card.heat_islands.desc': { tr: 'Kentsel alanlardaki sıcaklık farklılıklarını ve ısı adalarını inceleyebilirsiniz.', en: 'You can examine temperature differences and heat islands in urban areas.' },

    'analytics.card.surface_temp.title': { tr: 'Yüzey Sıcaklığı', en: 'Surface Temperature' },
    'analytics.card.surface_temp.desc': { tr: 'Uydu görüntüleriyle elde edilen yüzey sıcaklığı verilerini keşfedin.', en: 'Explore surface temperature data obtained from satellite imagery.' },

    'analytics.card.climate_change.title': { tr: 'İklim Değişikliği Etkileri', en: 'Climate Change Effects' },
    'analytics.card.climate_change.desc': { tr: 'Kentsel iklim değişikliği etkilerini bölgesel olarak analiz edin.', en: 'Analyze urban climate change effects regionally.' },

    'analytics.card.3_tree.title': { tr: '3 Ağaç Kuralı', en: '3 Trees Rule' },
    'analytics.card.3_tree.desc': { tr: 'Her vatandaşın penceresinden en az 3 ağaç görebilmesi hedefi.', en: 'The goal of every citizen being able to see at least 3 trees from their window.' },

    'analytics.card.30_tree.title': { tr: '%30 Ağaç Örtüsü', en: '30% Tree Canopy' },
    'analytics.card.30_tree.desc': { tr: 'Her mahallede minimum %30 ağaç örtüsü hedefi analizi.', en: 'Analysis of the minimum 30% tree canopy goal in every neighborhood.' },

    'analytics.card.300_distance.title': { tr: '300 Metre Mesafe', en: '300 Meters Distance' },
    'analytics.card.300_distance.desc': { tr: 'Her vatandaşın 300 metre mesafede yeşil alana erişimi.', en: 'Every citizen having access to a green space within 300 meters.' },

    // Documents Page
    'documents.hero.title': { tr: 'Doküman Arşivi', en: 'Document Archive' },
    'documents.hero.desc': {
        tr: 'İzmir Büyükşehir Belediyesi ve Avrupa Komisyonu\'na ait resmi dokümanlar, raporlar ve sunumlar.',
        en: 'Official documents, reports, and presentations belonging to Izmir Metropolitan Municipality and the European Commission.'
    },
    'documents.empty.title': { tr: 'Doküman Bulunamadı', en: 'No Documents Found' },
    'documents.empty.desc': { tr: 'Henüz doküman eklenmemiştir.', en: 'No documents have been added yet.' },

    // Homepage
    'home.mission.badge': { tr: 'İKLİM NÖTR VE AKILLI ŞEHİRLER MİSYONU', en: 'CLIMATE NEUTRAL AND SMART CITIES MISSION' },
    'home.mission.title': { tr: 'Küresel Sorunlara Somut Çözümler:<br> <span class="text-mlab-teal">AB Misyonları</span>', en: 'Concrete Solutions to Global Problems:<br> <span class="text-mlab-teal">EU Missions</span>' },
    'home.mission.desc1': {
        tr: 'AB Misyonları Ufuk Avrupa programı kapsamında toplumun ve gezegenin karşı karşıya olduğu en kritik zorluklara 2030 yılına kadar somut çözümler üretmek amacıyla başlatılmıştır.',
        en: 'EU Missions were launched under the Horizon Europe program to provide concrete solutions to the most critical challenges facing society and the planet by 2030.'
    },
    'home.mission.desc2': {
        tr: 'Bu küresel seferberlik beş temel alana odaklanır. Temel hedef bilimsel çalışmaları raporlardan çıkarıp vatandaşların günlük yaşamını iyileştiren somut kamu politikalarına ve uygulamalara dönüştürmektir.',
        en: 'This global mobilization focuses on five key areas. The main goal is to take scientific studies out of reports and transform them into concrete public policies and practices that improve the daily lives of citizens.'
    },
    'home.mission.btn': { tr: 'Şehirler Misyonu Hakkında', en: 'About Cities Mission' },

    'home.projects.title': { tr: 'Projeler & Çözümler', en: 'Projects & Solutions' },
    'home.projects.viewAll': { tr: 'Tüm Projeleri Gör', en: 'View All Projects' },

    'projects.empty.title': { tr: 'Henüz Proje Yok', en: 'No Projects Yet' },
    'projects.empty.desc': { tr: 'Bu kategori altında henüz listelenen bir proje bulunmuyor.', en: 'There are no projects listed under this category yet.' },

    'home.map.badge': { tr: 'ETKİLEŞİM HARİTASI', en: 'INTERACTION MAP' },
    'home.map.title': { tr: 'Projelerin Coğrafi Dağılımı', en: 'Geographical Distribution of Projects' },
    'home.map.details.placeholder': { tr: 'Harita üzerindeki noktalara gelerek<br />proje detaylarını görüntüleyebilirsiniz.', en: 'You can view project details by hovering over the points on the map.' },
    'home.map.details.view': { tr: 'Detayları İncele', en: 'View Details' },

    'home.partners.title': { tr: 'Paydaşlarımız', en: 'Our Stakeholders' },

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
    },
    'common.notFound': {
        tr: 'Sayfa Bulunamadı',
        en: 'Page Not Found'
    },
    'common.backHome': {
        tr: 'Ana Sayfaya Dön',
        en: 'Back to Home'
    },

    // Footer
    'footer.privacy': { tr: 'Gizlilik Politikası', en: 'Privacy Policy' },
    'footer.cookie': { tr: 'Çerez Politikası', en: 'Cookie Policy' },
    'footer.kvkk': { tr: 'KVKK Aydınlatma Metni', en: 'PDPL Clarification Text' },
    'footer.copyright': { tr: '© 2025 M-LAB İzmir', en: '© 2025 M-LAB Izmir' },
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
        // console.warn(`Missing translation for key: ${key}`);
        return key;
    }
    const lang = getCurrentLang();
    return entry[lang] || entry[DEFAULT_LANG] || key;
}

// Apply translations to the page
function applyTranslations() {
    const currentLang = getCurrentLang();
    document.documentElement.lang = currentLang;

    // Translate text content
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.innerHTML = t(key);
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        element.placeholder = t(key);
    });

    // Translate meta titles
    const titleKey = document.body.getAttribute('data-i18n-title');
    if (titleKey) {
        document.title = t(titleKey);
    }
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

// Initialize everything
function initTranslations() {
    applyTranslations();
    updateLangButtons();
}

// Expose to window for global access (fixes inline handlers and persistence issues)
window.getCurrentLang = getCurrentLang;
window.setLang = setLang;
window.t = t;
window.initTranslations = initTranslations;

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    initTranslations();
});

// Export for module usage (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { getCurrentLang, setLang, t, translations };
}
