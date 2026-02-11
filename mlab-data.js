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
            image: "images/projects/water-retention.jpeg"
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
            image: "images/projects/cities-heart.jpg"
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
            image: "images/projects/shift2sustain.webp"
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
            image: "images/projects/sun4ukraine.webp"
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
            image: "images/projects/nbs4med.png"
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
            image: "images/projects/biocontrol.png"
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
            image: "images/projects/climate-assembly.png"
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
            image: "images/projects/d4n.png"
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
            image: "images/projects/re-value.png"
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
            image: "images/projects/cardimed.png"
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
            image: "images/projects/climate-resilience.jpg"
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
