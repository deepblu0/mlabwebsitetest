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
            title: { tr: "İzmir'de Su Tutma Peyzajlarının Geliştirilmesi Projesi", en: "Development of Water Retention Landscapes in Izmir" },
            description: {
                tr: "İzmir'deki kentsel çevrenin sürdürülebilirliğini ve dirençliliğini artırmak amacıyla, su yönetimi kapasitesini güçlendirerek, iklim değişikliğine uyum sağlamasını ve biyoçeşitliliğin desteklenmesini sağlamaktır.",
                en: "Aiming to increase the sustainability and resilience of the urban environment in Izmir by strengthening water management capacity, ensuring adaptation to climate change, and supporting biodiversity."
            },
            duration: { tr: "24 Ay", en: "24 Months" },
            startDate: null,
            status: { tr: "Devam Ediyor", en: "In Progress" },
            partners: "İzmir Büyükşehir Belediyesi, Karşıyaka Belediyesi",
            bigChallengeId: 3,
            image: "https://picsum.photos/seed/su-tutma/800/400"
        },
        {
            id: 2,
            title: { tr: "CITIES@HEART - Kardiyovasküler Sağlık için Şehir Stratejileri", en: "CITIES@HEART - City Strategies for Cardiovascular Health" },
            description: {
                tr: "Proje, kent ölçeğinde kardiyovasküler hastalıkların (KVH) farkındalık, erken tanı, önleme ve yönetimine odaklanmaktadır.",
                en: "The project focuses on awareness, early diagnosis, prevention, and management of cardiovascular diseases (CVD) at the urban scale."
            },
            duration: { tr: "60 Ay", en: "60 Months" },
            startDate: null,
            status: { tr: "Devam Ediyor", en: "In Progress" },
            partners: "Utrecht Üniversitesi Tıp Merkezi, Ege Üniversitesi, İZBB",
            bigChallengeId: 5,
            image: "https://picsum.photos/seed/cities-heart/800/400"
        },
        {
            id: 3,
            title: { tr: "SHIFT2SUSTAIN - Mobilitede Sürdürülebilirlik", en: "SHIFT2SUSTAIN - Sustainability in Mobility" },
            description: {
                tr: "Proje, dört ana hedef çerçevesinde kentsel hareketlilik sorunlarına çözüm üretmeyi amaçlamaktadır.",
                en: "The project aims to generate solutions to urban mobility problems within the framework of four main objectives."
            },
            duration: { tr: "36 Ay", en: "36 Months" },
            startDate: null,
            status: { tr: "Devam Ediyor", en: "In Progress" },
            partners: "TIS PT, İZBB",
            bigChallengeId: 2,
            image: "https://picsum.photos/seed/shift2sustain/800/400"
        },
        {
            id: 4,
            title: { tr: "SUN4Ukraine - Ukrayna için Sürdürülebilir Kentsel Net Sıfır Ağı", en: "SUN4Ukraine - Sustainable Urban Net Zero Network for Ukraine" },
            description: {
                tr: "Program, Ukrayna kentlerinin iklim nötr hedefler doğrultusunda yeniden yapılanma süreçlerine destek olmayı amaçlamaktadır.",
                en: "The program aims to support the reconstruction processes of Ukrainian cities in line with climate-neutral goals."
            },
            duration: { tr: "18 Ay", en: "18 Months" },
            startDate: null,
            status: { tr: "Devam Ediyor", en: "In Progress" },
            partners: "İZBB, Harkov (Kharkiv) Belediyesi",
            bigChallengeId: 10,
            image: "https://picsum.photos/seed/sun4ukraine/800/400"
        },
        {
            id: 5,
            title: { tr: "NBS4MED - Doğa Temelli Çözümler Projesi", en: "NBS4MED - Nature Based Solutions Project" },
            description: {
                tr: "Proje, Akdeniz bölgesinde iklim değişikliğine uyumu güçlendirmek amacıyla doğa esaslı çözümler yoluyla risk azaltmayı hedeflemektedir.",
                en: "The project aims to reduce risk through nature-based solutions to strengthen adaptation to climate change in the Mediterranean region."
            },
            duration: { tr: "36 Ay", en: "36 Months" },
            startDate: null,
            status: { tr: "Devam Ediyor", en: "In Progress" },
            partners: "PROMEA, İZBB",
            bigChallengeId: 3,
            image: "https://picsum.photos/seed/nbs4med/800/400"
        },
        {
            id: 6,
            title: { tr: "RESWATER - Geleneksel Olmayan Su Kaynakları", en: "RESWATER - Non-Conventional Water Resources" },
            description: {
                tr: "Kentsel kıyı havzalarında artan su talebinin doğal tatlı su kaynaklarına bağımlılığı artırmadan karşılanması amaçlanmaktadır.",
                en: "Aiming to meet increasing water demand in urban coastal basins without increasing dependency on natural freshwater resources."
            },
            duration: { tr: "36 Ay", en: "36 Months" },
            startDate: null,
            status: { tr: "Devam Ediyor", en: "In Progress" },
            partners: "Malta Enerji ve Su Ajansı, İZBB",
            bigChallengeId: 10,
            image: "https://picsum.photos/seed/reswater/800/400"
        },
        {
            id: 7,
            title: { tr: "CLI-MET - İklim Gündeminin Uygulanması", en: "CLI-MET - Implementation of Climate Agenda" },
            description: {
                tr: "Avrupa metropol bölgelerinde iklim değişikliğiyle mücadeleye yönelik stratejik farkındalığı artırmayı hedefleyen kapasite geliştirme girişimidir.",
                en: "A capacity-building initiative aiming to increase strategic awareness for combating climate change in European metropolitan regions."
            },
            duration: { tr: "36 Ay", en: "36 Months" },
            startDate: null,
            status: { tr: "Devam Ediyor", en: "In Progress" },
            partners: "Palermo Üniversitesi, İZBB, Dortmund Teknik Üni.",
            bigChallengeId: 3,
            image: "https://picsum.photos/seed/cli-met/800/400"
        },
        {
            id: 8,
            title: { tr: "Biyomücadele Yoluyla Kirliliğin Azaltılması", en: "Pollution Reduction via Biocontrol" },
            description: {
                tr: "İzmir Körfezi'nde su kirliliğini azaltmaya yönelik ekolojik temelli, sürdürülebilir bir model geliştirmek hedeflenmektedir.",
                en: "Aiming to develop an ecological-based, sustainable model to reduce water pollution in Izmir Bay."
            },
            duration: { tr: "18 Ay", en: "18 Months" },
            startDate: null,
            status: { tr: "Devam Ediyor", en: "In Progress" },
            partners: "İZBB, Mavişehir Su Ürünleri Koop., İZSU",
            bigChallengeId: 10,
            image: "https://picsum.photos/seed/biyomucadele/800/400"
        },
        {
            id: 9,
            title: { tr: "GCC-Synergy - Dijital Çözümler Projesi", en: "GCC-Synergy - Digital Solutions Project" },
            description: {
                tr: "Karbon emisyonlarının önemli bir kısmını oluşturan binalar ve tesislerdeki elektrik tüketimi sorununu ele almaktadır.",
                en: "Addressing the issue of electricity consumption in buildings and facilities, which constitute a significant part of carbon emissions."
            },
            duration: { tr: "24 Ay", en: "24 Months" },
            startDate: null,
            status: { tr: "Devam Ediyor", en: "In Progress" },
            partners: "İZBB, Ege Üniversitesi, İZENERJİ",
            bigChallengeId: 8,
            image: "https://picsum.photos/seed/gcc-synergy/800/400"
        },
        {
            id: 10,
            title: { tr: "CRIZ-ERS - Dirençlilik Stratejileri", en: "CRIZ-ERS - Resilience Strategies" },
            description: {
                tr: "İklim değişikliğinin İzmir kentinde oluşturduğu etkileri analiz etmeyi ve kırılgan bölgeleri belirlemeyi amaçlamaktadır.",
                en: "Aiming to analyze the effects of climate change in Izmir and identify vulnerable regions."
            },
            duration: { tr: "22 Ay", en: "22 Months" },
            startDate: null,
            status: { tr: "Devam Ediyor", en: "In Progress" },
            partners: "İZBB, Bölgesel Ajanslar",
            bigChallengeId: 3,
            image: "https://picsum.photos/seed/criz-ers/800/400"
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
            image: "https://picsum.photos/seed/dikili-sera/800/400"
        },
        {
            id: 11,
            title: { tr: "İzmir İklim İçin Yurttaş Meclisi", en: "Izmir Citizens' Assembly for Climate" },
            description: {
                tr: "İzmir'de iklim değişikliğine karşı toplumsal direnç geliştirmek için \"İklim Meclisi\" modelinin uygulanmasını hedeflemektedir.",
                en: "Aiming to implement the \"Climate Assembly\" model to develop social resilience against climate change in Izmir."
            },
            duration: { tr: "15 Ay", en: "15 Months" },
            startDate: null,
            status: { tr: "Devam Ediyor", en: "In Progress" },
            partners: "Yuva Derneği, UNDP, HUDOTO, İZBB",
            bigChallengeId: 9,
            image: "https://picsum.photos/seed/iklim-meclisi/800/400"
        },
        {
            id: 12,
            title: { tr: "Territoires cultivés (Cultivated Territories)", en: "Territoires cultivés (Cultivated Territories)" },
            description: {
                tr: "Bölgenin ekolojik dönüşümünü, kentsel planlamayı ve kültürel politikaları birleştiren projeler geliştirmeyi amaçlamaktadır.",
                en: "Aiming to develop projects combining the ecological transformation of the region, urban planning, and cultural policies."
            },
            duration: { tr: "24 Ay", en: "24 Months" },
            startDate: null,
            status: { tr: "Devam Ediyor", en: "In Progress" },
            partners: "AVITEM, Vitrolles, Nice, İZBB",
            bigChallengeId: 9,
            image: "https://picsum.photos/seed/cultivated/800/400"
        },
        {
            id: 13,
            title: { tr: "INHERIT - Kültürel Miras için Çözümler", en: "INHERIT - Solutions for Cultural Heritage" },
            description: {
                tr: "Kültürel miras çözümlerine yönelik IoT, Yapay Zeka ve veri analitiği eşliğinde sistematik bir metodoloji oluşturmaktır.",
                en: "To create a systematic methodology for cultural heritage solutions accompanied by IoT, AI, and data analytics."
            },
            duration: null,
            startDate: null,
            status: { tr: "Devam Ediyor", en: "In Progress" },
            partners: "Singularlogic, İZBB",
            bigChallengeId: 9,
            image: "https://picsum.photos/seed/inherit/800/400"
        },
        {
            id: 14,
            title: { tr: "Cool Noons", en: "Cool Noons" },
            description: {
                tr: "Akdeniz şehirlerinde yenilikçi çözümleri test etmek, turizmde iklim değişikliği riskleriyle mücadele etmek amaçlanmaktadır.",
                en: "Aiming to test innovative solutions in Mediterranean cities and combat climate change risks in tourism."
            },
            duration: null,
            startDate: null,
            status: { tr: "Devam Ediyor", en: "In Progress" },
            partners: "AVITEM, Marsilya, Bolonya, İZBB",
            bigChallengeId: 3,
            image: "https://picsum.photos/seed/cool-noons/800/400"
        },
        {
            id: 15,
            title: { tr: "DIALOGUE4NATURE (D4N)", en: "DIALOGUE4NATURE (D4N)" },
            description: {
                tr: "Akdeniz havzasında yönetişimin güçlendirilmesi ve çözüm üretme kapasitesinin artırılması hedeflenmektedir.",
                en: "Aiming to strengthen governance and increase solution-generation capacity in the Mediterranean basin."
            },
            duration: { tr: "7 Yıl", en: "7 Years" },
            startDate: null,
            status: { tr: "Devam Ediyor", en: "In Progress" },
            partners: "Girit Bölgesi, IUCN, İZBB",
            bigChallengeId: 9,
            image: "https://picsum.photos/seed/d4n/800/400"
        },
        {
            id: 16,
            title: { tr: "Re-Value Projesi", en: "Re-Value Project" },
            description: {
                tr: "Sürdürülebilir miras ve turizm yönetimi ile kentsel gelişim için iklim nötr yatırım yapılmasına katkıda bulunmak amaçlanmaktadır.",
                en: "Aiming to contribute to climate-neutral investment for sustainable heritage, tourism management, and urban development."
            },
            duration: { tr: "48 Ay", en: "48 Months" },
            startDate: null,
            status: { tr: "Devam Ediyor", en: "In Progress" },
            partners: "Norveç Bilim ve Teknoloji Üni., İZBB, İYTE",
            bigChallengeId: 10,
            image: "https://picsum.photos/seed/re-value/800/400"
        },
        {
            id: 17,
            title: { tr: "CARDIMED", en: "CARDIMED" },
            description: {
                tr: "Akdeniz bölgesinde iklim değişikliğinin etkilerine karşı dayanıklılığın artırılmasını amaçlamaktadır.",
                en: "Aiming to increase resilience against the effects of climate change in the Mediterranean region."
            },
            duration: { tr: "54 Ay", en: "54 Months" },
            startDate: null,
            status: { tr: "Devam Ediyor", en: "In Progress" },
            partners: "Athena Ulusal Teknik Üni., İZBB, İzdoğa",
            bigChallengeId: 3,
            image: "https://picsum.photos/seed/cardimed/800/400"
        },
        {
            id: 18,
            title: { tr: "Toplumlar İçin İklim Dayanıklılığı", en: "Climate Resilience for Communities" },
            description: {
                tr: "Mahalle ölçeğinde iklim risklerini belirlemeyi ve toplumun en az düzeyde etkilenmesini sağlayacak çözümler geliştirmeyi amaçlamaktadır.",
                en: "Aiming to identify climate risks at the neighborhood scale and develop solutions to minimize community impact."
            },
            duration: { tr: "3 Yıl", en: "3 Years" },
            startDate: null,
            status: { tr: "Devam Ediyor", en: "In Progress" },
            partners: "İZBB, ICLEI, Zurich Vakfı",
            bigChallengeId: 3,
            image: "https://picsum.photos/seed/iklim-dayniklilik/800/400"
        },
        {
            id: 19,
            title: { tr: "URBAN GreenUP", en: "URBAN GreenUP" },
            description: {
                tr: "Kentlerin iklim değişikliğine uyum sağlaması için \"Doğa Esaslı Çözümler\" (NBS) geliştirmeyi hedeflemiştir.",
                en: "Aimed to develop \"Nature Based Solutions\" (NBS) for cities to adapt to climate change."
            },
            duration: null,
            startDate: { tr: "1 Haziran 2017", en: "1 June 2017" },
            status: { tr: "Tamamlandı", en: "Completed" },
            partners: "İZBB, Ege Üni., İYTE, CARTIF",
            bigChallengeId: 10,
            image: "https://picsum.photos/seed/urban-greenup/800/400"
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
    ]
};
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
        en: 'these policy notes'
    },
    'challenges.hero.desc2': {
        tr: '; kentin karşı karşıya olduğu sistemsel sorunlara yenilikçi, sürdürülebilir ve toplum odaklı çözümler sunmayı amaçlamaktadır. İzmir’in önümüzdeki yıllarda aşması gereken 10 Büyük Zorluk, misyon odaklı bir inovasyon anlayışıyla aşağıda özetlenmiştir.',
        en: 'aim to provide innovative, sustainable, and community-oriented solutions to the systemic problems facing the city. The 10 Grand Challenges that Izmir must overcome in the coming years are summarized below with a mission-oriented innovation approach.'
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
    'projects.hero.desc': {
        tr: 'İzmir 2030 Kent Taahhüdü kapsamında şehri iklim nötr ve akıllı bir geleceğe taşıyan tüm çalışmaları burada bir araya getiriyoruz. Yaşam kalitesini artıran kentsel inovasyon projelerini keşfedin.',
        en: 'We bring together all efforts carrying the city to a climate-neutral and smart future within the scope of the Izmir 2030 City Commitment. Discover urban innovation projects that improve quality of life.'
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

// Mock Browser Environment
global.window = {};
global.document = {
    addEventListener: () => { },
    getElementById: () => ({
        textContent: '',
        innerHTML: '',
        classList: { add: () => { }, remove: () => { } },
        value: ''
    }),
    querySelectorAll: () => []
};
global.localStorage = {
    getItem: (k) => 'tr',
    setItem: () => { }
};
// navigator for i18n.js
global.navigator = { language: 'tr-TR' };

// Initialize i18n keys if they weren't (depends on i18n.js execution)
// We assume i18n.js ran and defined 'translations', 'defaults', 't', 'getCurrentLang'.

console.log("--- DEBUG START ---");

if (typeof mlabData === 'undefined') {
    console.error("CRITICAL: mlabData is undefined!");
    process.exit(1);
}

if (typeof t === 'undefined') {
    console.error("CRITICAL: t() function is undefined!");
    process.exit(1);
}

console.log("Data & i18n loaded.");
console.log(`Projects count: ${mlabData.projects ? mlabData.projects.length : 'N/A'}`);

// Test critical translation keys used in projeler.html
const requiredKeys = [
    'projects.card.duration',
    'projects.card.startDate',
    'projects.card.partners',
    'projects.hero.title',
    'projects.filter.all'
];

requiredKeys.forEach(key => {
    try {
        const val = t(key);
        console.log(`Key '${key}': '${val}'`);
        if (val === key) console.warn(`WARNING: Translation missing for '${key}'`);
    } catch (e) {
        console.error(`ERROR resolving key '${key}':`, e.message);
    }
});

// Simulate Render Loop
try {
    const projects = mlabData.projects;
    const bigChallenges = mlabData.challenges;
    const currentLang = 'tr'; // Force TR

    if (!projects || projects.length === 0) {
        console.error("Simulated Render: No projects found.");
    } else {
        projects.forEach(p => {
            // Logic from projeler.html
            const challenge = bigChallenges.find(c => c.id == p.bigChallengeId);
            const title = p.title[currentLang];

            // Check dynamic properties
            if (!p.status || !p.status[currentLang]) console.error(`Project ${p.id} status issue`);

            // Mimic the lines that caused trouble
            const duration = p.duration ? p.duration[currentLang] : null;
            const startDate = p.startDate ? (typeof p.startDate === 'object' ? p.startDate[currentLang] : p.startDate) : null;

            // This line specifically:
            const timeLabel = duration ? `${t('projects.card.duration')}: ${duration}` : (startDate ? `${t('projects.card.startDate')}: ${startDate}` : 'Belirtilmemiş');

            // Partners label
            const partnerLabel = t('projects.card.partners');

            // console.log(`Project ${p.id} rendered OK.`);
        });
        console.log("Simulated Render: Loop finished successfully.");
    }

} catch (e) {
    console.error("Simulated Render CRASHED:", e);
}

console.log("--- DEBUG END ---");
