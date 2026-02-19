/**
 * M-LAB Portal Data Store
 * Centralized data for dynamic content with i18n support
 */

const mlabData = {
    // --- GRAND CHALLENGES ---
    // Combined data from buyukzorluklar.html and bigChallenges object
    challenges: [
        {
            id: 1,
            title: {
                tr: "Uygun Fiyatlı ve Yeterli Barınma",
                en: "Affordable and Adequate Housing"
            },
            desc: {
                tr: "Herkes için makul, uygun fiyatlı, sürdürülebilir ve güvenli konutlar sağlamak temel bir haktır. Gelişen toplumlar yaratmak; doğal afetler ve iklim değişikliği risklerini azaltan, dayanıklı evlerin ve yerleşimlerin inşasını veya var olanların güçlendirilmesini gerektirir.",
                en: "Providing reasonable, affordable, sustainable, and safe housing for everyone is a fundamental right. Creating thriving societies requires building resilient homes and settlements or strengthening existing ones to reduce risks from natural disasters and climate change."
            },
            zorluk: {
                tr: "Barınma hakkının hem sosyal hem de mekânsal adalet açısından kırılma noktasında olması. Konut arzının piyasa koşullarına endekslenmesi sonucu konutun bir 'yatırım aracı'na dönüşmesi, düşük gelirli grupların ve kırılgan hanelerin güvenli barınma olanaklarının kısıtlanması.",
                en: "Housing rights are at a breaking point regarding social and spatial justice. Housing supply indexed to market conditions turns housing into an 'investment vehicle', restricting safe housing options for low-income groups and fragile households."
            },
            amac: {
                tr: "Barınmayı bir meta değil, bir insan hakkı olarak ele alan; herkes için erişilebilir, nitelikli ve sürdürülebilir konut üretimini mümkün kılacak bütüncül bir sistem kurmak.",
                en: "To establish a holistic system that treats housing not as a commodity but as a human right, enabling accessible, qualified, and sustainable housing production for everyone."
            },
            fayda: {
                tr: "Kısa vadede barınma krizinden etkilenen grupların yaşam koşullarında iyileşme ve konut adaletsizliğine yönelik farkındalık sağlanacaktır.",
                en: "In the short term, improvement in living conditions for groups affected by the housing crisis and awareness regarding housing injustice will be achieved."
            },
            paydaslar: {
                tr: "Yerel yönetimlerin imar ve planlama birimleri, üniversiteler, konut kooperatifleri, mahalle dernekleri, şehir plancıları...",
                en: "Local government zoning and planning units, universities, housing cooperatives, neighborhood associations, urban planners..."
            },
            icon: "buyukzorluklar/header_icon_page_6.png",
            color: "bg-blue-500",
            textColor: "text-blue-600"
        },
        {
            id: 2,
            title: {
                tr: "Sürdürülebilir Hareketlilik",
                en: "Sustainable Mobility"
            },
            desc: {
                tr: "Hareketlilik, kentsel akış içerisinde yerleri ve insanları birbirine bağlayarak sosyal katılımı destekleyen temel haklardan biridir.",
                en: "Mobility is a fundamental right that supports social participation by connecting places and people within the urban flow."
            },
            zorluk: {
                tr: "Ulaşım altyapısının hem çevresel sürdürülebilirliği hem de sosyal kapsayıcılığı destekleyecek bütünleşik bir yapıya kavuşamaması.",
                en: "The failure of transportation infrastructure to achieve an integrated structure that supports both environmental sustainability and social inclusion."
            },
            amac: {
                tr: "Kent içinde erişimi ve hareketliliği yalnızca hız ve verimlilik üzerinden değil; insan hakları, toplumsal adalet ve ekolojik sınırlar çerçevesinde yeniden tanımlamak.",
                en: "To redefine access and mobility within the city not just through speed and efficiency, but within the framework of human rights, social justice, and ecological limits."
            },
            fayda: {
                tr: "Kısa vadede trafik yoğunluğu ve özel araç bağımlılığı azalacak, hava kalitesi iyileşecektir.",
                en: "In the short term, traffic congestion and private vehicle dependency will decrease, and air quality will improve."
            },
            paydaslar: {
                tr: "Ulaşım ve çevre daire başkanlıkları, üniversiteler, mobilite teknolojisi firmaları...",
                en: "Transportation and environment departments, universities, mobility technology firms..."
            },
            icon: "buyukzorluklar/header_icon_page_8.png",
            color: "bg-purple-500",
            textColor: "text-purple-600"
        },
        {
            id: 3,
            title: {
                tr: "Afetlere Dirençlilik",
                en: "Disaster Resilience"
            },
            desc: {
                tr: "Afet direnci, bir afetin yaratabileceği olumsuz etkileri önleyebilme ve etkilere karşı koyabilme kabiliyetini ifade eder.",
                en: "Disaster resilience refers to the ability to prevent negative impacts of a disaster and withstand its effects."
            },
            zorluk: {
                tr: "İzmir’in yüksek doğal afet riski taşıyan coğrafyası ve iklim krizinin artan etkileri (aşırı sıcaklar, sel, kuraklık).",
                en: "Izmir's geography carrying high natural disaster risk and increasing effects of the climate crisis (extreme heat, floods, drought)."
            },
            amac: {
                tr: "İzmir’i afetlere ve iklim krizine karşı önleyici, dayanıklı ve kapsayıcı bir yaklaşımla yeniden tasarlamak.",
                en: "To redesign Izmir with a preventive, resilient, and inclusive approach against disasters and the climate crisis."
            },
            fayda: {
                tr: "Kısa vadede veri odaklı risk haritaları ve erken uyarı sistemleriyle can ve mal kayıpları azalacaktır.",
                en: "In the short term, loss of life and property will be reduced through data-driven risk maps and early warning systems."
            },
            paydaslar: {
                tr: "AFAD, İZSU, İklim Değişikliği ve Sıfır Atık Dairesi...",
                en: "AFAD, IZSU, Department of Climate Change and Zero Waste..."
            },
            icon: "buyukzorluklar/header_icon_page_10.png",
            color: "bg-red-500",
            textColor: "text-red-600"
        },
        {
            id: 4,
            title: {
                tr: "Sağlıklı Gıda ve Tarım",
                en: "Healthy Food and Agriculture"
            },
            desc: {
                tr: "Sağlıklı bir yaşam için günlük temel ihtiyaç olan gıdaya tüm insanların yeterli, uygun fiyatlı, güvenli ve besleyici bir şekilde erişiminin sağlanması temel bir haktır.",
                en: "Access to adequate, affordable, safe, and nutritious food is a fundamental right for a healthy life."
            },
            zorluk: {
                tr: "Küçük üreticilerin ekonomik sürdürülebilirlik sorunları, iklim değişikliği kaynaklı verim kayıpları ve su krizi.",
                en: "Economic sustainability issues of small producers, yield losses due to climate change, and the water crisis."
            },
            amac: {
                tr: "İzmir’in kır-kent ilişkilerini yeniden tanımlayan, yerel üretimi destekleyen, doğayla uyumlu bir gıda sistemi inşa etmek.",
                en: "To build a food system that redefines Izmir's rural-urban relations, supports local production, and is in harmony with nature."
            },
            fayda: {
                tr: "Kısa vadede üreticilerin doğa dostu yöntemlere geçişiyle gıda güvenliği artacak, kooperatifler aracılığıyla yeni erişim kanalları oluşacaktır.",
                en: "In the short term, food security will increase with producers switching to nature-friendly methods, creating new access channels via cooperatives."
            },
            paydaslar: {
                tr: "Yerel üreticiler, tarımsal kalkınma kooperatifleri, Ziraat Odaları...",
                en: "Local producers, agricultural development cooperatives, Chambers of Agriculture..."
            },
            icon: "buyukzorluklar/header_icon_page_12.png",
            color: "bg-green-500",
            textColor: "text-green-600"
        },
        {
            id: 5,
            title: {
                tr: "Sağlık ve Esenlik",
                en: "Health and Well-being"
            },
            desc: {
                tr: "Proaktif esenlik, iyi olma hâlini gösteren reaktif sağlık ve bütüncül bir sağlık durumuna yol açan faaliyetlerin aktif olarak takip edilmesini tanımlar.",
                en: "Proactive well-being defines the active pursuit of activities leading to holistic health and wellness."
            },
            zorluk: {
                tr: "Sosyo-ekonomik eşitsizliklerin sağlık hizmetlerine erişimde yarattığı engeller.",
                en: "Barriers to accessing health services created by socio-economic inequalities."
            },
            amac: {
                tr: "Sağlığı yalnızca hastalığın tedavisi olarak görmeyen; bedensel, ruhsal ve sosyal iyi olma hâlini kapsayan bütüncül bir sistemi inşa etmek.",
                en: "To build a holistic system covering physical, mental, and social well-being, not just disease treatment."
            },
            fayda: {
                tr: "Kısa vadede dezavantajlı bölgelerde sağlık hizmetlerine erişim artacak, toplum ruh sağlığına yönelik farkındalık yükselecektir.",
                en: "In the short term, access to health services in disadvantaged areas will increase, raising awareness for community mental health."
            },
            paydaslar: {
                tr: "Sağlık ve sosyal hizmetler birimleri, Aile Sağlığı Merkezleri...",
                en: "Health and social services units, Family Health Centers..."
            },
            icon: "buyukzorluklar/header_icon_page_14.png",
            color: "bg-cyan-500",
            textColor: "text-cyan-600"
        },
        {
            id: 6,
            title: {
                tr: "Eğitimli Nesiller",
                en: "Educated Generations"
            },
            desc: {
                tr: "Eğitim, her bireyin topluma katılma ve yaşamı boyunca fırsatları değerlendirme becerisinin temelini oluşturur.",
                en: "Education forms the basis of every individual's ability to participate in society and evaluate opportunities throughout life."
            },
            zorluk: {
                tr: "Eğitime erişim ve kalitenin mahalleler ve gelir grupları arasında keskin farklılıklar göstermesi.",
                en: "Sharp differences in access to and quality of education between neighborhoods and income groups."
            },
            amac: {
                tr: "Her yaştan bireyin gelişimini destekleyen, dijital ve yaratıcı becerileri teşvik eden, fırsat eşitliğine dayalı bir eğitim ekosistemi oluşturmak.",
                en: "To create an education ecosystem based on equal opportunity that supports development at all ages and encourages digital and creative skills."
            },
            fayda: {
                tr: "Kısa vadede okul öncesi eğitime erişim artacak, gençlere yönelik mentorluk hizmetleri yaygınlaşacaktır.",
                en: "In the short term, access to pre-school education will increase, and mentorship services for youth will become widespread."
            },
            paydaslar: {
                tr: "Belediyeler, üniversiteler, eğitim odaklı STK’lar...",
                en: "Municipalities, universities, education-focused NGOs..."
            },
            icon: "buyukzorluklar/header_icon_page_16.png",
            color: "bg-indigo-500",
            textColor: "text-indigo-600"
        },
        {
            id: 7,
            title: {
                tr: "İnsana Yakışır Gelir ve Çalışma",
                en: "Decent Work and Income"
            },
            desc: {
                tr: "Herkes için insana yakışır yeterli gelir ve çalışma koşullarının sağlanması temel bir haktır.",
                en: "Ensuring decent income and working conditions for everyone is a fundamental right."
            },
            zorluk: {
                tr: "Gelir eşitsizliği, güvencesiz ve kayıt dışı çalışma koşulları.",
                en: "Income inequality, precarious and informal working conditions."
            },
            amac: {
                tr: "İstihdamın sadece niceliksel değil niteliksel boyutuna da odaklanarak; onurlu, güvenli ve adil çalışma koşullarını yaygınlaştırmak.",
                en: "To generalize dignified, safe, and fair working conditions by focusing on the qualitative dimension of employment."
            },
            fayda: {
                tr: "Kısa vadede gençlere yönelik istihdam destekleri ve alternatif gelir modelleriyle güvencesizlik azalacaktır.",
                en: "In the short term, precariousness will decrease through employment supports and alternative income models for youth."
            },
            paydaslar: {
                tr: "Meslek odaları, sendikalar, gençlik STK’ları...",
                en: "Professional chambers, unions, youth NGOs..."
            },
            icon: "buyukzorluklar/header_icon_page_18.png",
            color: "bg-amber-500",
            textColor: "text-amber-600"
        },
        {
            id: 8,
            title: {
                tr: "Yenilik ve Teknoloji Üretimi",
                en: "Innovation and Technology Production"
            },
            desc: {
                tr: "Yenilik ve teknoloji, çevresel güçlerin üzerinde kontrol sahibi olmaktan üretimin organize edilme biçimine kadar birçok unsuru kapsar.",
                en: "Innovation and technology encompass many elements from controlling environmental forces to organizing production."
            },
            zorluk: {
                tr: "Ar-Ge yatırımlarının yetersizliği ve dağınıklığı, üniversite-sanayi işbirliklerinin zayıflığı.",
                en: "Insufficiency and dispersion of R&D investments, weakness of university-industry collaborations."
            },
            amac: {
                tr: "İzmir’in yerel potansiyeline dayanan, araştırma ve sanayi arasında köprü kuran bir inovasyon sistemi inşa etmek.",
                en: "To build an innovation system bridging research and industry, based on Izmir's local potential."
            },
            fayda: {
                tr: "Kısa vadede kuluçka merkezleri güçlenecek, girişimcilerin fona erişimi kolaylaşacaktır.",
                en: "In the short term, incubation centers will be strengthened, and entrepreneurs' access to funding will be facilitated."
            },
            paydaslar: {
                tr: "Teknoparklar, üniversiteler, İZKA, girişimcilik merkezleri...",
                en: "Technoparks, universities, IZKA, entrepreneurship centers..."
            },
            icon: "buyukzorluklar/header_icon_page_20.png",
            color: "bg-sky-500",
            textColor: "text-sky-600"
        },
        {
            id: 9,
            title: {
                tr: "Kültür, Bağlantılılık ve Kapsayıcılık",
                en: "Culture, Connectivity and Inclusiveness"
            },
            desc: {
                tr: "Kültürün toplum üzerindeki etkisi dikkate alındığında; kültürel yaşama erişimin tüm çeşitliliği kucaklayacak şekilde sağlanması önemlidir.",
                en: "Considering culture's impact on society, ensuring access to cultural life embraces all diversity is important."
            },
            zorluk: {
                tr: "Kültürel faaliyetlerin kent merkezinde yoğunlaşması sonucu oluşan mekânsal eşitsizlikler.",
                en: "Spatial inequalities resulting from the concentration of cultural activities in the city center."
            },
            amac: {
                tr: "Kültürel yaşamı kentin tamamına yaymak, çok dilli ve kapsayıcı bir kültürel ortam inşa etmek.",
                en: "To spread cultural life throughout the city and build a multilingual and inclusive cultural environment."
            },
            fayda: {
                tr: "Kısa vadede kültürel faaliyetler çeşitlenecek ve merkezin dışına yayılacaktır.",
                en: "In the short term, cultural activities will diversify and spread outside the center."
            },
            paydaslar: {
                tr: "Kültür-sanat STK’ları, sanatçılar, kolektifler...",
                en: "Culture and art NGOs, artists, collectives..."
            },
            icon: "buyukzorluklar/header_icon_page_22.png",
            color: "bg-pink-500",
            textColor: "text-pink-600"
        },
        {
            id: 10,
            title: {
                tr: "Döngüsel Kentsel Metabolizma",
                en: "Circular Urban Metabolism"
            },
            desc: {
                tr: "Döngüsel kentsel metabolizma; şehri bir organizma gibi ele alarak su, enerji ve atık akışlarını optimize etmeyi gerektirir.",
                en: "Circular urban metabolism requires optimizing water, energy, and waste flows by treating the city like an organism."
            },
            zorluk: {
                tr: "Plansız kentleşme ve kaynakların verimsiz kullanımı sonucu ekolojik kapasitenin zorlanması.",
                en: "Strain on ecological capacity due to unplanned urbanization and inefficient resource use."
            },
            amac: {
                tr: "Doğal kaynak kullanımını optimize eden, atıkları kaynağında dönüştüren bütüncül bir model geliştirmek.",
                en: "To develop a holistic model optimizing natural resource use and transforming waste at the source."
            },
            fayda: {
                tr: "Kısa vadede pilot bölgelerde döngüsel uygulamalarla kaynak verimliliği artacaktır.",
                en: "In the short term, resource efficiency will increase with circular practices in pilot regions."
            },
            paydaslar: {
                tr: "Altyapı birimleri, çevre mühendisleri, özel sektör...",
                en: "Infrastructure units, environmental engineers, private sector..."
            },
            icon: "buyukzorluklar/header_icon_page_24.png",
            color: "bg-emerald-500",
            textColor: "text-emerald-600"
        }
    ],

    // --- PROJECTS ---
    filters: [
        { id: 'ALL', label: { tr: 'Tüm Projeler', en: 'All Projects' }, color: 'bg-mlab-navy' },
        { id: 1, label: { tr: 'Uygun Fiyatlı Barınma', en: 'Affordable Housing' }, color: 'bg-blue-500' },
        { id: 2, label: { tr: 'Sürdürülebilir Hareketlilik', en: 'Sustainable Mobility' }, color: 'bg-purple-500' },
        { id: 3, label: { tr: 'Afetlere Dirençlilik', en: 'Disaster Resilience' }, color: 'bg-red-500' },
        { id: 4, label: { tr: 'Sağlıklı Gıda ve Tarım', en: 'Healthy Food & Agriculture' }, color: 'bg-green-500' },
        { id: 5, label: { tr: 'Sağlık ve Esenlik', en: 'Health & Well-being' }, color: 'bg-cyan-500' },
        { id: 6, label: { tr: 'Eğitimli Nesiller', en: 'Educated Generations' }, color: 'bg-indigo-500' },
        { id: 7, label: { tr: 'İnsana Yakışır İş', en: 'Decent Work' }, color: 'bg-amber-500' },
        { id: 8, label: { tr: 'Yenilik ve Teknoloji', en: 'Innovation & Tech' }, color: 'bg-sky-500' },
        { id: 9, label: { tr: 'Kültür ve Kapsayıcılık', en: 'Culture & Inclusivity' }, color: 'bg-pink-500' },
        { id: 10, label: { tr: 'Döngüsel Metabolizma', en: 'Circular Metabolism' }, color: 'bg-emerald-500' }
    ],

    projects: [
        {
            id: 1,
            title: { tr: "İzmir’de Su Tutma Peyzajlarının Geliştirilmesi Projesi", en: "Development of Water Retention Landscapes in Izmir" },
            description: {
                tr: "İzmir’deki kentsel çevrenin sürdürülebilirliğini ve dirençliliğini artırmak amacıyla, su yönetimi kapasitesini güçlendirerek, iklim değişikliğine uyum sağlamasını ve biyoçeşitliliğin desteklenmesini sağlamaktır. Proje, Bostanlı'da bir Su Tutma Parkı inşasını, Sadi Hoşses Parkı'nda \"sünger kaplamalar\" gibi geçirgen yüzeylerin uygulanmasını kapsamaktadır.",
                en: "Aiming to increase the sustainability and resilience of the urban environment in Izmir by strengthening water management capacity, ensuring adaptation to climate change, and supporting biodiversity. The project includes the construction of a Water Retention Park in Bostanlı and the application of permeable surfaces such as \"sponge coatings\" in Sadi Hoşses Park."
            },
            duration: { tr: "24 Ay", en: "24 Months" },
            startDate: null,
            status: { tr: "Devam Ediyor", en: "In Progress" },
            partners: "İzmir Büyükşehir Belediyesi, Karşıyaka Belediyesi",
            bigChallengeId: 3,
            image: "images/projects/water-retention.jpeg"
        },
        {
            id: 2,
            title: { tr: "Avrupa’da Kardiyovasküler Sağlığın İyileştirilmesi için Şehir Temelli Stratejiler (CITIES@HEART) Projesi", en: "CITIES@HEART - City Strategies for Cardiovascular Health" },
            description: {
                tr: "Proje, kent ölçeğinde kardiyovasküler hastalıkların (KVH) farkındalık, erken tanı, önleme ve yönetimine odaklanmaktadır. Özellikle obezite, yüksek tansiyon ve diyabet gibi kalp hastalıklarına yol açan risk faktörlerine odaklanan proje, bu hastalıkların erken teşhis ve tedavisi için yeni yöntemler geliştirmektedir. İzmir, proje ortağı olan Ege Üniversitesi ile birlikte yerel sağlık eşitsizliklerinin haritalanması, toplumsal ihtiyaçların tespiti ve uygulanacak stratejilerin kent dinamiklerine uyarlanması süreçlerinde katkı sunmaktadır.",
                en: "The project focuses on awareness, early diagnosis, prevention, and management of cardiovascular diseases (CVD) at the urban scale. Focusing particularly on risk factors leading to heart diseases such as obesity, high blood pressure, and diabetes, the project develops new methods for early diagnosis and treatment of these diseases. Izmir contributes to the processes of mapping local health inequalities, identifying social needs, and adapting strategies to urban dynamics together with project partner Ege University."
            },
            duration: { tr: "60 Ay", en: "60 Months" },
            startDate: null,
            status: { tr: "Devam Ediyor", en: "In Progress" },
            partners: "UTRECHT ÜNİVERSİTESİ TIP MERKEZİ, Ege Üniversitesi, İzmir Büyükşehir Belediyesi",
            bigChallengeId: 5,
            image: "images/projects/cities-heart.jpg"
        },
        {
            id: 3,
            title: { tr: "Mobilitede Sürdürülebilirlik Yönünde Davranış Değişikliği Sağlamak (SHIFT2SUSTAIN)", en: "SHIFT2SUSTAIN - Sustainability in Mobility" },
            description: {
                tr: "Proje, dört ana hedef çerçevesinde kentsel hareketlilik sorunlarına çözüm üretmeyi amaçlamaktadır. Davranış değişikliklerini teşvik etmek amacıyla, oyunlaştırma, farkındalık kampanyaları ve araçtan şebekeye (V2G) çözümler gibi yenilikçi yaklaşımları içeren pilot projeler uygulanacaktır. Belediyemiz, “Hareketlilik Yönetimi Önlemleri\" çerçevesinde trafik sıkışıklığına karşı ücretlendirme, park et-devam et sistemleri, otopark yönetimi ve kargo bisikletleri uygulamalarına odaklanacaktır.",
                en: "The project aims to generate solutions to urban mobility problems within the framework of four main objectives. Pilot projects including innovative approaches such as gamification, awareness campaigns, and vehicle-to-grid (V2G) solutions will be implemented to encourage behavioral changes. Our municipality will focus on congestion pricing, park-and-ride systems, parking management, and cargo bike applications within the framework of \"Mobility Management Measures\"."
            },
            duration: { tr: "36 Ay", en: "36 Months" },
            startDate: null,
            status: { tr: "Devam Ediyor", en: "In Progress" },
            partners: "TIS PT-Ulaşım, İnovasyon ve Sistemler Danışmanlık Şirketi, İzmir Büyükşehir Belediyesi",
            bigChallengeId: 2,
            image: "images/projects/shift2sustain.webp"
        },
        {
            id: 4,
            title: { tr: "SUN4Ukraine – The Sustainable Urban Net Zero Network for Ukraine", en: "SUN4Ukraine – The Sustainable Urban Net Zero Network for Ukraine" },
            description: {
                tr: "Program, Ukrayna kentlerinin iklim nötr hedefler doğrultusunda yeniden yapılanma süreçlerine destek olmayı amaçlamaktadır. İzmir Büyükşehir Belediyesi, ekonomik profili ve enerji konusundaki deneyim benzerliği nedeniyle Ukrayna'nın Harkov (Kharkiv) kenti ile eşleştirilmiştir. Bu çerçevede Harkov kenti ile iklim nötr konularında toplantılar, çalışma ziyaretleri ve etkinlik katılımları planlanmaktadır.",
                en: "The program aims to support the reconstruction processes of Ukrainian cities in line with climate-neutral goals. Izmir Metropolitan Municipality has been paired with Kharkiv, Ukraine, due to similarities in economic profile and energy experience. In this context, meetings, study visits, and event participations on climate-neutral topics are planned with the city of Kharkiv."
            },
            duration: { tr: "18 Ay", en: "18 Months" },
            startDate: null,
            status: { tr: "Devam Ediyor", en: "In Progress" },
            partners: "İzmir Büyükşehir Belediyesi, Harkov (Kharkiv) Belediyesi",
            bigChallengeId: 10,
            image: "images/projects/sun4ukraine.webp"
        },
        {
            id: 5,
            title: { tr: "İklime Dirençli Akdeniz Kentleri için Doğa Temelli Çözümler Projesi - NBS4MED", en: "NBS4MED - Nature Based Solutions Project" },
            description: {
                tr: "Proje, Akdeniz bölgesinde iklim değişikliğine uyumu güçlendirmek amacıyla doğa esaslı çözümler yoluyla risk azaltma, afet direncini artırma ve ortak metodolojik çerçeveler geliştirmeyi hedeflemektedir. Pilot çalışma kapsamında Yeşilyurt Mustafa Necati Kültür Merkezi’nin terası iklime dayanıklı, permakültür prensipleriyle tasarlanmış, yerel bitki türleri, yağmur suyu hasadı ve kompost teknolojileriyle desteklenmiş bir “yeşil çatıya” dönüştürülecektir.",
                en: "The project aims to reduce risk, increase disaster resilience, and develop common methodological frameworks through nature-based solutions to strengthen adaptation to climate change in the Mediterranean region. Within the scope of the pilot study, the terrace of Yeşilyurt Mustafa Necati Cultural Center will be transformed into a \"green roof\" designed with climate-resilient permaculture principles, supported by local plant species, rainwater harvesting, and compost technologies."
            },
            duration: { tr: "36 Ay", en: "36 Months" },
            startDate: null,
            status: { tr: "Devam Ediyor", en: "In Progress" },
            partners: "Hellenik Araştırma ve Geliştirme Metodolojilerini Destekleme Derneği (PROMEA), İzmir Büyükşehir Belediyesi",
            bigChallengeId: 3,
            image: "images/projects/nbs4med.png"
        },
        {
            id: 6,
            title: { tr: "Dirençli Kentsel Su Yönetimi İçin Geleneksel Olmayan Su Kaynakları (RESWATER)", en: "RESWATER - Non-Conventional Water Resources" },
            description: {
                tr: "Proje, kentsel kıyı havzalarında artan su talebinin doğal tatlı su kaynaklarına bağımlılığı artırmadan karşılanması amacıyla konvansiyonel olmayan su kaynaklarının araştırılmasını ve pilot uygulamalarla test edilmesini hedeflemektedir. İzmir’de pilot uygulama belediye hizmet binasında yürütülecek; bir gri su arıtma ve yağmur suyu hasadı sistemi geliştirilecektir.",
                en: "The project aims to research non-conventional water resources and test them with pilot applications in order to meet the increasing water demand in urban coastal basins without increasing dependency on natural freshwater resources. A pilot application in Izmir will be carried out in the municipal service building; a grey water treatment and rainwater harvesting system will be developed."
            },
            duration: { tr: "36 Ay", en: "36 Months" },
            startDate: null,
            status: { tr: "Devam Ediyor", en: "In Progress" },
            partners: "Malta Enerji ve Su Ajansı, İzmir Büyükşehir Belediyesi, Su Araştırmaları ve Teknolojileri Merkezi, Cagliari Üniversitesi, Mısır Su Kaynakları ve Sulama Bakanlığı",
            bigChallengeId: 10,
            image: "https://picsum.photos/seed/reswater/800/400"
        },
        {
            id: 7,
            title: { tr: "İklim Gündeminin Büyükşehirlerde Uygulanması (CLI-MET) Projesi", en: "CLI-MET - Implementation of Climate Agenda" },
            description: {
                tr: "Proje, Avrupa metropol bölgelerinde iklim değişikliğiyle mücadeleye yönelik stratejik farkındalığı artırmayı ve belediyelerin iklim gündemindeki rolünü güçlendirmeyi hedefleyen bütüncül bir kapasite geliştirme girişimidir. İzmir Büyükşehir Belediyesi, ilk paydaş çalıştayına ev sahipliği yaparak yerel paydaşların, akademisyenlerin ve uzmanların katılımıyla sürecin kapsayıcı bir şekilde yürütülmesine katkı sunacaktır.",
                en: "The project is a holistic capacity-building initiative aimed at raising strategic awareness for combating climate change in European metropolitan regions and strengthening the role of municipalities in the climate agenda. Izmir Metropolitan Municipality will contribute to the inclusive execution of the process by hosting the first stakeholder workshop with the participation of local stakeholders, academics, and experts."
            },
            duration: { tr: "36 Ay", en: "36 Months" },
            startDate: null,
            status: { tr: "Devam Ediyor", en: "In Progress" },
            partners: "Palermo Üniversitesi, İzmir Büyükşehir Belediyesi, Dortmund Teknik Üniversitesi, Madrid Teknik Üniversitesi, Milano Büyükşehir Belediyesi, METREX",
            bigChallengeId: 3,
            image: "https://picsum.photos/seed/cli-met/800/400"
        },
        {
            id: 8,
            title: { tr: "İzmir Körfezi'nde Denizel Ekosistemlerin Geliştirilmesi Kapsamında Biyomücadele Yoluyla Kirliliğin Azaltılması", en: "Pollution Reduction via Biocontrol" },
            description: {
                tr: "İzmir Körfezi’nde su kirliliğini azaltmaya yönelik olarak ekolojik temelli, sürdürülebilir ve bütüncül bir model geliştirerek, deniz ekosisteminin restorasyonuna katkı sağlamak hedeflenmektedir. Fitoremediasyon yöntemi kullanılarak biyolojik mücadele yapılacak, makroalg türünün rejeneratif hasadı ile ekonomiye kazandırılması sağlanacaktır.",
                en: "Aiming to contribute to the restoration of the marine ecosystem by developing an ecological-based, sustainable, and holistic model to reduce water pollution in Izmir Bay. Biological control will be carried out using the phytoremediation method, and economic gain will be achieved through the regenerative harvest of macroalgae species."
            },
            duration: { tr: "18 Ay", en: "18 Months" },
            startDate: null,
            status: { tr: "Devam Ediyor", en: "In Progress" },
            partners: "İzmir Büyükşehir Belediyesi, Mavişehir Su Ürünleri Kooperatifi, İZSU",
            bigChallengeId: 10,
            image: "images/projects/biocontrol.png"
        },
        {
            id: 9,
            title: { tr: "İzmir Küresel İklim Topluluğu (KİT) Yoluyla Elektrikte Dekarbonizasyon için Dijital Çözümler Projesi (GCC-Synergy)", en: "GCC-Synergy - Digital Solutions Project" },
            description: {
                tr: "Proje, karbon emisyonlarının önemli bir kısmını oluşturan binalar, tesisler ve altyapıdaki kritik elektrik tüketimi sorununu ele almaktadır. KİT-SİNERJİ (GCC-SYNERGY) dijital platformunun geliştirilmesiyle, gerçek zamanın izleme, analiz ve eyleme dönüştürülebilir bilgiler sağlanarak elektrik tüketiminin yönetiminde devrim yaratmak hedeflenmektedir.",
                en: "The project addresses the critical issue of electricity consumption in buildings, facilities, and infrastructure, which constitute a significant portion of carbon emissions. By developing the KIT-SYNERGY (GCC-SYNERGY) digital platform, it aims to revolutionize the management of electricity consumption by providing real-time monitoring, analysis, and actionable insights."
            },
            duration: { tr: "24 Ay", en: "24 Months" },
            startDate: null,
            status: { tr: "Devam Ediyor", en: "In Progress" },
            partners: "İzmir Büyükşehir Belediyesi, Ege Üniversitesi, İZENERJİ A.Ş., GDZ Elektrik Dağıtım A.Ş, ENSİA, Ege Orman Vakfı",
            bigChallengeId: 8,
            image: "https://picsum.photos/seed/gcc-synergy/800/400"
        },
        {
            id: 10,
            title: { tr: "İklime Hazır İzmir: Dirençlilik Stratejilerinin Geliştirilmesi Projesi (CRIZ-ERS)", en: "CRIZ-ERS - Resilience Strategies" },
            description: {
                tr: "Proje, iklim değişikliğinin İzmir kentinde oluşturduğu etkileri kent ve Konak ilçe ölçeğinde analiz etmeyi ve kırılganlık düzeyi yüksek bölgeleri belirlemeyi amaçlayan kapsamlı bir risk değerlendirme ve uyum çalışmasıdır. CLIMAAX aracı ve sağlanan teknik destekle birlikte mevcut iklim riskleri mahalle ölçeğinde incelenecek ve iklim uyum önerileri oluşturulacaktır.",
                en: "The project is a comprehensive risk assessment and adaptation study aimed at analyzing the effects of climate change in the city of Izmir at the city and Konak district scale and identifying highly vulnerable regions. With the CLIMAAX tool and the technical support provided, existing climate risks will be examined at the neighborhood scale and climate adaptation recommendations will be generated."
            },
            duration: { tr: "22 Ay", en: "22 Months" },
            startDate: null,
            status: { tr: "Devam Ediyor", en: "In Progress" },
            partners: "İzmir Büyükşehir Belediyesi, Bölgesel ve Ulusal Sivil Koruma Ajansları, KOBİ'ler",
            bigChallengeId: 3,
            image: "images/projects/criz-ers.png"
        },
        {
            id: 20,
            title: { tr: "Dikili TDİOSB - Tarıma Dayalı İhtisas Sera OSB", en: "Dikili TDIOSB - Agriculture Based Specialized Greenhouse OIZ" },
            description: {
                tr: "Avrupa'nın en büyük jeotermal ısıtmalı sera bölgesi olma özelliğini taşıyan proje, modern bir üretim merkezidir.",
                en: "The project, featuring Europe's largest geothermal heated greenhouse zone, is a modern production center."
            },
            duration: null,
            startDate: { tr: "7 Kasım 2019", en: "7 November 2019" },
            status: { tr: "Devam Ediyor", en: "In Progress" },
            partners: "İzmir Valiliği, İZTO, EBSO, İTB",
            bigChallengeId: 4,
            image: "proje-img/dikili-tdiosb.jpg"
        },
        {
            id: 11,
            title: { tr: "İzmir İklim İçin Yurttaş Meclisi Projesi", en: "Izmir Citizens' Assembly for Climate" },
            description: {
                tr: "Proje, İzmir’de iklim değişikliğinin etkilerine karşı toplumsal direnç geliştirmek ve yerel halkın karar alma süreçlerinde doğrudan söz sahibi olmasını sağlamak amacıyla “İklim Meclisi” modelinin uygulanmasını hedeflemektedir. Kura yöntemiyle seçilen yurttaşlar, iklim risklerini tartışarak İzmir’in Sürdürülebilir Enerji ve İklim Eylem Planı (SECAP) ve 2030 Karbon Nötr İzmir hedefleriyle uyumlu politika önerileri geliştirecektir.",
                en: "The project aims to implement the \"Climate Assembly\" model in order to develop social resilience against the effects of climate change in Izmir and to ensure that the local people have a direct say in decision-making processes. Citizens selected by lot will discuss climate risks and develop policy recommendations compatible with Izmir's Sustainable Energy and Climate Action Plan (SECAP) and 2030 Carbon Neutral Izmir goals."
            },
            duration: { tr: "15 Ay", en: "15 Months" },
            startDate: null,
            status: { tr: "Devam Ediyor", en: "In Progress" },
            partners: "Yuva Derneği, UNDP, HUDOTO vakfı, İzmir Büyükşehir Belediyesi",
            bigChallengeId: 9,
            image: "images/projects/climate-assembly.png"
        },
        {
            id: 12,
            title: { tr: "Territoires cultivés (Cultivated Territories)", en: "Territoires cultivés (Cultivated Territories)" },
            description: {
                tr: "Proje, bölgenin ekolojik dönüşümünü, kentsel planlamayı ve kültürel politikaları birleştiren projeler yoluyla kültürü kalkınmalarının itici gücü haline getiren Akdeniz metropollerinden oluşan bir ağ kurmayı amaçlamaktadır. İzmir Büyükşehir Belediyesi, İzmir Kültür Sempozyumu düzenleyecek ve ortak Akdeniz Kültür ve Yaratıcılık Kentleri Manifestosu’nu hazırlayacaktır.",
                en: "The project aims to establish a network of Mediterranean metropolises that make culture a driving force for development through projects combining ecological transformation of the region, urban planning, and cultural policies. Izmir Metropolitan Municipality will organize the Izmir Culture Symposium and prepare the joint Mediterranean Culture and Creativity Cities Manifesto."
            },
            duration: { tr: "24 Ay", en: "24 Months" },
            startDate: null,
            status: { tr: "Devam Ediyor", en: "In Progress" },
            partners: "AVITEM, Vitrolles Şehri Belediyesi, Korsika Yerel Yönetimi, Nice Şehri Belediyesi, Nice Condé Sanat Okulu, İzmir Büyükşehir Belediyesi",
            bigChallengeId: 9,
            image: "https://picsum.photos/seed/cultivated/800/400"
        },
        {
            id: 13,
            title: { tr: "INHERIT-Sürdürülebilir, Kapsayıcı, Kaynak Verimli ve Dirençli Kültürel Miras için Yeni Nesil Çözümler", en: "INHERIT - Solutions for Cultural Heritage" },
            description: {
                tr: "Projenin amacı, sürdürülebilir, kapsayıcı ve verimli kültürel miras çözümlerine yönelik olarak IoT, Yapay Zeka ve veri analitiği eşliğinde sistematik bir metodoloji oluşturmaktır. İzmir’de Ahmet Piriştina Kent Arşivi Binası gösterim alanı olarak kullanılacak; binanın kamusal işlevi artırılacak, yenilenebilir enerji çözümleri uygulanacak ve mimari özellikleri korunarak renovasyon yapılacaktır.",
                en: "The aim of the project is to create a systematic methodology accompanied by IoT, Artificial Intelligence, and data analytics for sustainable, inclusive, and efficient cultural heritage solutions. In Izmir, Ahmet Piriştina City Archive Building will be used as a demonstration area; the public function of the building will be increased, renewable energy solutions will be applied, and renovation will be done while preserving its architectural features."
            },
            duration: null,
            startDate: null,
            status: { tr: "Devam Ediyor", en: "In Progress" },
            partners: "Singularlogic Anonymi Etaireia Pliroforiakon Sysel, İzmir Büyükşehir Belediyesi",
            bigChallengeId: 9,
            image: "https://picsum.photos/seed/inherit/800/400"
        },
        {
            id: 14,
            title: { tr: "Cool Noons", en: "Cool Noons" },
            description: {
                tr: "Akdeniz şehirlerinde doğa temelli çözümler de dahil olmak üzere yenilikçi çözümleri test etmek, kentsel turizm sektöründe sürdürülebilirliği engelleyen iklim değişikliği riskleriyle mücadele etmek ve Akdeniz şehirlerinin rekabet gücünü artırmak amaçlanmaktadır. İBB projede son kullanıcı, danışman veya gözlemci olarak yer almaktadır.",
                en: "The aim is to test innovative solutions, including nature-based solutions, in Mediterranean cities, to combat climate change risks hindering sustainability in the urban tourism sector, and to increase the competitiveness of Mediterranean cities. Izmir Metropolitan Municipality is involved in the project as an end-user, consultant, or observer."
            },
            duration: null,
            startDate: null,
            status: { tr: "Devam Ediyor", en: "In Progress" },
            partners: "AVITEM, Marsilya Belediyesi, Coimbra Üniversitesi, Bolonya Belediyesi, Imola Faenza Turizm Şirketi, Dubrovnik Kalkınma Ajansı, Budva Belediyesi, Rebus, İzmir Büyükşehir Belediyesi",
            bigChallengeId: 3,
            image: "images/projects/cool-noons.jpg"
        },
        {
            id: 15,
            title: { tr: "DIALOGUE4NATURE Projesi (D4N)", en: "DIALOGUE4NATURE Projesi (D4N)" },
            description: {
                tr: "Bölgedeki kurumlar arasında kalıcı ve etkili diyalog mekanizmaları kurarak Akdeniz havzasında yönetişimin güçlendirilmesi, ortak sorunlara yönelik çözüm üretme kapasitesinin artırılması hedeflenmektedir. Proje, karar vericiler, yerel yönetimler, uzmanlar ve sivil toplum arasında iş birliğini güçlendirerek kurumların yönetişim kapasitelerini geliştirmeyi amaçlamaktadır.",
                en: "It is aimed to strengthen governance in the Mediterranean basin and to increase the capacity to produce solutions to common problems by establishing permanent and effective dialogue mechanisms between institutions in the region. The project aims to improve the governance capacities of institutions by strengthening cooperation between decision-makers, local governments, experts, and civil society."
            },
            duration: { tr: "7 Yıl", en: "7 Years" },
            startDate: null,
            status: { tr: "Devam Ediyor", en: "In Progress" },
            partners: "Girit Bölgesi, IUCN Akdeniz İşbirliği Merkezi, Plan Bleu, Sardinya Bölgesi, MedCities Ağı, Hırvatistan Deniz Enstitüsü, Karadağ Ekoloji ve Şehir Planlama Bakanlığı, İzmir Büyükşehir Belediyesi",
            bigChallengeId: 9,
            image: "images/projects/d4n.png"
        },
        {
            id: 16,
            title: { tr: "Re-Value (Avrupa Kıyı Şehirlerinde Kentsel Kalite ve İklim Tarafsızlığına Yeniden Değer Vermek) Projesi", en: "Re-Value Project" },
            description: {
                tr: "İzmir ve diğer ortak kentlerde, sürdürülebilir miras ve turizm yönetimi ile kentsel gelişim için iklim nötr yatırım yapılmasına katkıda bulunmak ve kıyı bölgelerinde pilot uygulamalar için yol haritaları hazırlamak amaçlanmaktadır. İzmir, vatandaşların denizle etkileşimini güçlendirecek bütünsel tasarım stratejileri geliştirecek ve kentsel sel riskinin azaltılması için sünger bölge konseptini deneyecektir.",
                en: "It is aimed to contribute to making climate-neutral investments for sustainable heritage and tourism management and urban development in Izmir and other partner cities, and to prepare roadmaps for pilot applications in coastal regions. Izmir will develop holistic design strategies that will strengthen citizens' interaction with the sea and test the sponge zone concept to reduce urban flood risk."
            },
            duration: { tr: "48 Ay", en: "48 Months" },
            startDate: null,
            status: { tr: "Devam Ediyor", en: "In Progress" },
            partners: "Norveç Bilim ve Teknoloji Üniversitesi, İzmir Büyükşehir Belediyesi, İzmir Yüksek Teknoloji Enstitüsü",
            bigChallengeId: 10,
            image: "images/projects/re-value.png"
        },
        {
            id: 17,
            title: { tr: "CARDIMED (Akdeniz Bölgesinde İklim Değişikliğine Uyum ve Direnç Gösterilmesi Projesi)", en: "CARDIMED" },
            description: {
                tr: "Proje, Akdeniz biyocoğrafik bölgesinde iklim değişikliğinin etkilerine karşı dayanıklılığın artırılmasını ve doğa temelli çözümler değer zincirinin desteklenmesini amaçlamaktadır. İzmir Büyükşehir Belediyesi, Gediz Deltası’nda arazi ve biyolojik çeşitliliğin restorasyonu ile iklim değişikliğine karşı korunmasına yönelik doğa temelli çözümleri içeren bir model geliştirmektedir.",
                en: "The project aims to increase resilience to the effects of climate change in the Mediterranean biogeographical region and to support the nature-based solutions value chain. Izmir Metropolitan Municipality is developing a model containing nature-based solutions for the restoration of land and biodiversity in the Gediz Delta and its protection against climate change."
            },
            duration: { tr: "54 Ay", en: "54 Months" },
            startDate: null,
            status: { tr: "Devam Ediyor", en: "In Progress" },
            partners: "Athena Ulusal Teknik Üniversitesi, İzmir Büyükşehir Belediyesi, İzdoğa A.Ş., İzmir Yüksek Teknoloji Enstitüsü, Doğa Derneği, İZSU",
            bigChallengeId: 3,
            image: "images/projects/cardimed.png"
        },
        {
            id: 18,
            title: { tr: "Toplumlar İçin İklim Dayanıklılığı Projesi", en: "Climate Resilience for Communities" },
            description: {
                tr: "Proje, mahalle ölçeğinde iklim krizinin yarattığı etkileri analiz etmeyi, iklim risklerini belirlemeyi ve toplumun iklim kaynaklı tehlikelerden en az düzeyde etkilenmesini sağlayacak çözümler geliştirmeyi amaçlamaktadır. Konak ilçesindeki Agora ve Kadifekale bölgelerinde sel ve sıcak hava dalgası risklerine karşı mahalle bazlı dayanıklılık çalışmaları ve \"beraber yaratma\" yöntemiyle çözüm önerileri uygulanmaktadır.",
                en: "The project aims to analyze the effects of the climate crisis at the neighborhood scale, identify climate risks, and develop solutions to ensure that the community is minimally affected by climate-induced hazards. Neighborhood-based resilience studies against flood and heat wave risks and solution proposals with the \"co-creation\" method are implemented in Agora and Kadifekale regions in Konak district."
            },
            duration: { tr: "3 Yıl", en: "3 Years" },
            startDate: null,
            status: { tr: "Devam Ediyor", en: "In Progress" },
            partners: "İzmir Büyükşehir Belediyesi, ICLEI, Z Zurich Vakfı, Zurich Sigorta",
            bigChallengeId: 3,
            image: "images/projects/climate-resilience.jpg"
        },
        {
            id: 19,
            title: { tr: "URBAN GreenUP: Doğa Esaslı Çözümlerle Şehirlerin Yeniden Doğallaştırılması Projesi", en: "URBAN GreenUP" },
            description: {
                tr: "Avrupa Birliği'nin Ufuk 2020 programı tarafından finanse edilen bu proje, kentlerin iklim değişikliğine uyum sağlaması ve sürdürülebilirliğinin artırılması için \"Doğa Esaslı Çözümler\" (NBS) geliştirmeyi hedeflemiştir. Uygulama kapsamında Peynircioğlu Deresi'nin ekolojik restorasyonu, kent içi yeşil koridorların oluşturulması, akıllı toprak (biyokömür) üretimi, geçirimli yüzeyler ve biyofiltreler gibi yenilikçi yöntemler Karşıyaka ve Çiğli pilot bölgelerinde başarıyla hayata geçirilmiştir.",
                en: "Financed by the European Union's Horizon 2020 program, this project aimed to develop \"Nature Based Solutions\" (NBS) for cities to adapt to climate change and increase their sustainability. Within the scope of the application, innovative methods such as ecological restoration of Peynircioğlu Stream, creation of urban green corridors, smart soil (biochar) production, permeable surfaces, and biofilters were successfully implemented in Karşıyaka and Çiğli pilot regions."
            },
            duration: null,
            startDate: { tr: "1 Haziran 2017", en: "1 June 2017" },
            status: { tr: "Tamamlandı", en: "Completed" },
            partners: "İzmir Büyükşehir Belediyesi, Ege Üniversitesi, İzmir Yüksek Teknoloji Enstitüsü (İYTE), CARTIF (Proje Koordinatörü)",
            bigChallengeId: 10,
            image: "images/projects/urban-greenup.webp"
        }
    ],

    // --- MAP PINS ---
    mapPins: [
        {
            id: 1,
            x: '40%', y: '60%',
            title: { tr: 'Su Tutma Peyzajları', en: 'Water Retention Landscapes' },
            desc: { tr: 'İzmir\'deki kentsel çevrenin sürdürülebilirliğini artırmak için su yönetimi ve iklim uyumu.', en: 'Water management and climate adaptation to improve urban environmental sustainability.' },
            bigChallengeId: 3
        },
        {
            id: 3,
            x: '40%', y: '65%',
            title: { tr: 'SHIFT2SUSTAIN', en: 'SHIFT2SUSTAIN' },
            desc: { tr: 'Kentsel hareketlilikte davranış değişikliği ve sürdürülebilir ulaşım çözümleri.', en: 'Behavioral change in urban mobility and sustainable transport solutions.' },
            bigChallengeId: 2
        },
        {
            id: 8,
            x: '30%', y: '65%',
            title: { tr: 'Biyomücadele ile Kirlilik Azaltma', en: 'Pollution Reduction via Biocontrol' },
            desc: { tr: 'İzmir Körfezi\'nde ekolojik temelli kirlilik azaltma.', en: 'Ecological-based pollution reduction in Izmir Bay.' },
            bigChallengeId: 10
        },
        {
            id: 9,
            x: '25%', y: '70%',
            title: { tr: 'GCC-Synergy', en: 'GCC-Synergy' },
            desc: { tr: 'Dijital çözümlerle elektrik dekarbonizasyonu.', en: 'Electricity decarbonization with digital solutions.' },
            bigChallengeId: 8
        },
    ],

    // --- PARTNERS ---
    partners: [
        'basifed.png', 'ebso.png', 'egiad.png', 'eib.png', 'ensia.png',
        'esiad.png', 'itb.png', 'izbb.png', 'izikad.png', 'izka.png',
        'izpa.png', 'izq.png', 'izto.png', 'tmmob.png', 'valilik.png'
    ],

    // --- DOCUMENTS ---
    documents: [
        {
            id: 1,
            title: { tr: "İklim Şehir Sözleşmesi", en: "Climate City Contract" },
            description: {
                tr: "İzmir'in iklim nötr şehirler misyonuna katılım sözleşmesi ve taahhütleri.",
                en: "Izmir's participation contract and commitments for the climate neutral cities mission."
            },
            pages: 113,
            size: "2.6 MB",
            thumbnail: "Docs-Cover/IKLIM-SEHIR-SOZLESMESI-cover.png",
            url: "Docs/IKLIM-SEHIR-SOZLESMESI.pdf"
        },
        {
            id: 2,
            title: { tr: "SECAP - Sürdürülebilir Enerji ve İklim Eylem Planı", en: "SECAP - Sustainable Energy and Climate Action Plan" },
            description: {
                tr: "İzmir Büyükşehir Belediyesi Sürdürülebilir Enerji ve İklim Eylem Planı dokümanı.",
                en: "Izmir Metropolitan Municipality Sustainable Energy and Climate Action Plan document."
            },
            pages: 200,
            size: "20.2 MB",
            thumbnail: "Docs-Cover/SECAP-cover.png",
            url: "Docs/SECAP.pdf"
        },
        {
            id: 3,
            title: { tr: "3+30+300 İklim Hedefleri", en: "3+30+300 Climate Goals" },
            description: {
                tr: "İzmir'in kısa, orta ve uzun vadeli iklim hedeflerini içeren strateji dokümanı.",
                en: "Strategy document containing Izmir's short, medium, and long-term climate goals."
            },
            pages: 20,
            size: "16.5 MB",
            thumbnail: "Docs-Cover/3+30+300-cover.png",
            url: "Docs/3+30+300.pdf"
        },
        {
            id: 4,
            title: { tr: "Enerji Verimliliği Çalıştayı", en: "Energy Efficiency Workshop" },
            description: {
                tr: "İzmir enerji verimliliği çalıştayı sonuç raporu ve öneriler.",
                en: "Izmir energy efficiency workshop final report and recommendations."
            },
            pages: 93,
            size: "12.2 MB",
            thumbnail: "Docs-Cover/ENERJI-VERIMLILIGI-CALISTAYI-cover.png",
            url: "Docs/ENERJI-VERIMLILIGI-CALISTAYI.pdf"
        },
        {
            id: 5,
            title: { tr: "Kentsel İklim Analizi Raporu", en: "Urban Climate Analysis Report" },
            description: {
                tr: "İzmir kentsel ısı adası ve iklim analizi araştırma raporu.",
                en: "Izmir urban heat island and climate analysis research report."
            },
            pages: 30,
            size: "4.7 MB",
            thumbnail: "Docs-Cover/KENTSEL-IKLIMI-ANALIZI-RAPORU-cover.png",
            url: "Docs/KENTSEL-IKLIMI-ANALIZI-RAPORU.pdf"
        },
        {
            id: 6,
            title: { tr: "İzmir’de Orman Yangını Riskinin Mekânsal Analizi", en: "Spatial Analysis of Forest Fire Risk in Izmir" },
            description: {
                tr: "İzmir genelindeki orman yangını risklerinin mekânsal dağılımı ve analiz raporu.",
                en: "Spatial distribution and analysis report of forest fire risks throughout Izmir."
            },
            pages: 39,
            size: "13.1 MB",
            thumbnail: "Docs-Cover/IZMIRDE-ORMAN-YANGINI-RISKININ-MEKANSAL-ANALIZI-COVER.png",
            url: "Docs/IZMIRDE-ORMAN-YANGINI-RISKININ-MEKANSAL-ANALIZI.pdf"
        },
        {
            id: 7,
            title: { tr: "İzmir'de İklim Değişikliğinin Etkileri", en: "Effects of Climate Change in Izmir" },
            description: {
                tr: "İklim değişikliğinin İzmir özelindeki çevresel ve kentsel etkilerinin değerlendirilmesi.",
                en: "Evaluation of the environmental and urban effects of climate change specific to Izmir."
            },
            pages: 20,
            size: "6.3 MB",
            thumbnail: "Docs-Cover/IZMIRDE-IKLIM-DEGISIKLIGININ-ETKILERI-COVER.png",
            url: "Docs/IZMIRDE-IKLIM-DEGISIKLIGININ-ETKILERI.pdf"
        },
        {
            id: 8,
            title: { tr: "İzmir Kentsel Politika Notları", en: "Izmir Urban Policy Notes" },
            description: {
                tr: "İzmir'in kentsel gelişim ve sürdürülebilirlik politikalarına dair stratejik notlar.",
                en: "Strategic notes on Izmir's urban development and sustainability policies."
            },
            pages: 26,
            size: "7.8 MB",
            thumbnail: "Docs-Cover/Kentsel_Politika_Notlari_Cover.png",
            url: "Docs/Izmir_Kentsel_Politika_Notlari.pdf"
        }
    ]
};
