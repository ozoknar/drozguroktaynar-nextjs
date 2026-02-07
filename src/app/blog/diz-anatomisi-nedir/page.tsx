import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diz Anatomisi Nedir? Diz Eklemi Yapısı | Op. Dr. Özgür Oktay Nar",
  description: "Diz anatomisi, eklem yapısı, bağlar, menisküs, kıkırdak ve kaslar. Diz eklemi nasıl çalışır? Bursa ortopedi uzmanı.",
  keywords: ["diz anatomisi", "diz eklemi", "menisküs", "diz bağları", "patella", "diz kıkırdağı", "bursa ortopedi"],
  openGraph: {
    title: "Diz Anatomisi Nedir? Diz Eklemi Yapısı",
    description: "Diz ekleminin anatomik yapısı. Op. Dr. Özgür Oktay Nar - Bursa Ortopedi Uzmanı",
    type: "article",
    url: "https://www.ozguroktaynar.com/blog/diz-anatomisi-nedir",
    images: [
      {
        url: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/01/diz_anatomisi.jpg",
        width: 1200,
        height: 800,
        alt: "Diz Anatomisi",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Diz Anatomisi Nedir? Diz Eklemi Yapısı",
  "description": "Diz eklemi vücudun en büyük ve en karmaşık eklemlerinden biridir. Femur, tibia, patella kemikleri, bağlar, menisküsler ve kıkırdaktan oluşur.",
  "author": {
    "@type": "Person",
    "name": "Op. Dr. Özgür Oktay Nar",
    "jobTitle": "Ortopedi ve Travmatoloji Uzmanı",
    "url": "https://www.ozguroktaynar.com/hakkimda"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Op. Dr. Özgür Oktay Nar",
    "url": "https://www.ozguroktaynar.com"
  },
  "datePublished": "2024-01-15",
  "dateModified": "2026-02-06",
  "mainEntityOfPage": "https://www.ozguroktaynar.com/blog/diz-anatomisi-nedir",
  "image": "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/01/diz_anatomisi.jpg"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Diz eklemi hangi kemiklerden oluşur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Diz eklemi femur (uyluk kemiği), tibia (kaval kemiği) ve patella (diz kapağı) olmak üzere üç kemikten oluşur."
      }
    },
    {
      "@type": "Question",
      "name": "Diz bağları nelerdir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dört ana bağ vardır: ACL (ön çapraz), PCL (arka çapraz), MCL (iç yan), LCL (dış yan). Bu bağlar eklemin stabilitesini sağlar."
      }
    },
    {
      "@type": "Question",
      "name": "Menisküs nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Menisküs, femur ve tibia arasında yer alan hilal şeklinde fibrokartilaj yapıdır. Şok emici ve yük dağıtıcı görevi yapar. Mediyal ve lateral olmak üzere iki tanedir."
      }
    }
  ]
};

export default function DizAnatonisiNedirPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-900 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-indigo-500 text-sm px-3 py-1 rounded-full mb-4">
                Anatomi
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Diz Anatomisi Nedir?
              </h1>
              <p className="text-xl text-indigo-100 mb-6">
                Diz ekleminin yapısı, bağlar, menisküs ve kaslar
              </p>
              <a
                href="tel:+905398416801"
                className="inline-block bg-white text-indigo-900 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition"
              >
                Randevu Al: 0539 841 68 01
              </a>
            </div>
            <div className="hidden md:block">
              <img
                src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/01/diz_anatomisi.jpg"
                alt="Diz Anatomisi"
                className="rounded-lg shadow-2xl"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Introduction */}
          <section className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 leading-relaxed">
              <strong>Diz eklemi</strong>, vücudun <strong>en büyük ve en karmaşık eklemlerinden</strong> biridir. 
              Hem menteşe (hinge) hem de pivot (döner) eklem özelliği gösterir. Yürüme, koşma, çömelme, 
              merdiven çıkma gibi günlük aktivitelerde kritik rol oynar.
            </p>
            <p className="text-gray-600">
              Diz anatomisini anlamak, yaralanmaları ve hastalıkları daha iyi kavramak için önemlidir. 
              Bu sayfa, diz ekleminin tüm bileşenlerini detaylı olarak açıklamaktadır.
            </p>
          </section>

          {/* Bones Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              1️⃣ Kemik Yapılar
            </h2>
            <div className="space-y-4">
              <div className="bg-red-50 p-6 rounded-xl">
                <h3 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                  <span>🦴</span> Femur (Uyluk Kemiği)
                </h3>
                <p className="text-gray-700 mb-3">
                  Vücudun <strong>en uzun ve en güçlü kemiğidir</strong>. Diz ekleminde iki yapı bulunur:
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Femoral Kondiller:</strong> İki yuvarlak çıkıntı (mediyal ve lateral kondil). Tibia ile eklem yapar.</li>
                  <li>• <strong>Trochlear Oluk:</strong> Patella'nın kayma yüzeyi. V-şekilli oluk.</li>
                  <li>• <strong>Hyaline Kıkırdak:</strong> Eklem yüzeylerini örter, sürtünmeyi azaltır.</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                  <span>🦴</span> Tibia (Kaval Kemiği)
                </h3>
                <p className="text-gray-700 mb-3">
                  Alt bacağın <strong>kalın ve yük taşıyan kemiğidir</strong>. Dizde yer alan yapılar:
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Tibial Plato:</strong> Düz eklem yüzeyi. Menisküsler üzerine oturur.</li>
                  <li>• <strong>Tibial Tubercle:</strong> Patellar tendonun bağlandığı kemik çıkıntısı.</li>
                  <li>• <strong>Eminentia Intercondylaris:</strong> Plato ortasındaki kemik çıkıntı (ACL/PCL tutunma noktası).</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="font-semibold text-yellow-800 mb-3 flex items-center gap-2">
                  <span>🦴</span> Patella (Diz Kapağı)
                </h3>
                <p className="text-gray-700 mb-3">
                  <strong>Sesamoid kemik</strong> (tendon içinde gelişen kemik). Vücudun en büyük sesamoid kemiğidir.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Fonksiyon:</strong> Quadriceps kasının kaldıraç kuvvetini artırır (%30-50 güç artışı).</li>
                  <li>• <strong>Şekil:</strong> Üçgen şeklinde, apex (uç) aşağı bakar.</li>
                  <li>• <strong>Artiküler Yüzey:</strong> Arka yüz trochlear oluk ile eklem yapar.</li>
                  <li>• <strong>Kıkırdak Kalınlığı:</strong> Vücuttaki en kalın kıkırdak (5-7 mm) - yüksek yük nedeniyle.</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>💡 Not:</strong> Fibula (ince kemik) dizin yan tarafındadır ama <strong>eklemin parçası değildir</strong>. 
                  Sadece LCL bağının tutunma noktasıdır.
                </p>
              </div>
            </div>
          </section>

          {/* Ligaments Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              2️⃣ Bağlar (Ligamentler)
            </h2>
            <p className="text-gray-700 mb-6">
              Bağlar, <strong>kemikleri birbirine bağlayan ve eklem stabilitesini sağlayan kollajen liflerdir</strong>. 
              Diz ekleminde dört ana bağ bulunur:
            </p>

            <div className="space-y-4">
              <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                <h3 className="font-semibold text-red-800 mb-3">
                  🔴 ACL (Anterior Cruciate Ligament - Ön Çapraz Bağ)
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Konum:</strong> Eklem içinde (intraartiküler), tibia anteriordan femur posterior laterale uzanır</li>
                  <li>• <strong>Fonksiyon:</strong> Tibia'nın öne kaymasını önler, rotasyonel stabilite sağlar</li>
                  <li>• <strong>Yaralanma Mekanizması:</strong> Ani dönüş (pivot), hiperextension, valgus kuvvet</li>
                  <li>• <strong>Sıklık:</strong> En sık yaralanan diz bağı (yılda 200,000 vaka/ABD)</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
                <h3 className="font-semibold text-orange-800 mb-3">
                  🟠 PCL (Posterior Cruciate Ligament - Arka Çapraz Bağ)
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Konum:</strong> Eklem içinde, tibia posteriordan femur anterior mediale uzanır</li>
                  <li>• <strong>Fonksiyon:</strong> Tibia'nın geriye kaymasını önler</li>
                  <li>• <strong>Yaralanma Mekanizması:</strong> Dashboard injury (diz önüne darbe), hiperfleksiyon</li>
                  <li>• <strong>Güç:</strong> ACL'den %2 kat daha güçlü</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                <h3 className="font-semibold text-green-800 mb-3">
                  🟢 MCL (Medial Collateral Ligament - İç Yan Bağ)
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Konum:</strong> Eklem dışında (ekstraartiküler), femurdan tibia mediale uzanır</li>
                  <li>• <strong>Fonksiyon:</strong> Valgus stresini (dizin içe doğru açılması) önler</li>
                  <li>• <strong>Yaralanma Mekanizması:</strong> Dış taraftan darbe (lateral impact)</li>
                  <li>• <strong>İyileşme:</strong> Kan dolaşımı iyi, konservatif tedavi genellikle yeterli</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-800 mb-3">
                  🔵 LCL (Lateral Collateral Ligament - Dış Yan Bağ)
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Konum:</strong> Eklem dışında, femurdan fibula başına uzanır</li>
                  <li>• <strong>Fonksiyon:</strong> Varus stresini (dizin dışa doğru açılması) önler</li>
                  <li>• <strong>Yaralanma Mekanizması:</strong> İç taraftan darbe (medial impact) - nadir</li>
                  <li>• <strong>Yapı:</strong> Kordon benzeri, MCL'den daha ince</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-800 mb-3">Diğer Bağlar</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Patellar Ligament (Tendon):</strong> Patella'dan tibial tubercle'a uzanır. Quadriceps kuvvetini iletir.</li>
                <li>• <strong>Posterior Kapsül:</strong> Eklemin arka kısmını sarar, PCL ile birlikte çalışır.</li>
                <li>• <strong>Meniscofemoral Ligaments:</strong> Menisküsü femura bağlar (Humphry ve Wrisberg).</li>
              </ul>
            </div>
          </section>

          {/* Meniscus Section */}
          <section className="mb-12 bg-purple-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              3️⃣ Menisküsler
            </h2>
            <p className="text-gray-700 mb-6">
              Menisküsler, <strong>femur ve tibia arasında yer alan hilal (ay) şeklinde fibrokartilaj yapılardır</strong>. 
              İki tanedirler: <strong>Mediyal (iç) ve Lateral (dış) menisküs</strong>.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-3">📍 Mediyal Menisküs</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Şekil:</strong> C-şekilli (daha geniş)</li>
                  <li>• <strong>Mobilite:</strong> Az hareketli (MCL'e yapışık)</li>
                  <li>• <strong>Yırtık Riski:</strong> Yüksek (hareketsizlik nedeniyle)</li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-3">📍 Lateral Menisküs</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Şekil:</strong> O-şekilli (daha küçük, yuvarlak)</li>
                  <li>• <strong>Mobilite:</strong> Daha hareketli</li>
                  <li>• <strong>Yırtık Riski:</strong> Daha az (hareketlilik nedeniyle)</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-3">⚙️ Fonksiyonlar</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Yük Dağıtımı:</strong> Eklem yükünün %50-70'ini taşır (menisküs yoksa kıkırdak yükü %300 artar!)</li>
                  <li>• <strong>Şok Emici:</strong> Yürüme, koşma sırasında darbeleri emer</li>
                  <li>• <strong>Stabilite:</strong> Femur ile tibia arasında uyumu artırır</li>
                  <li>• <strong>Lubrication:</strong> Eklem sıvısını dağıtır, kıkırdak beslenmesine yardımcı olur</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-3">🩸 Kan Dolaşımı</h3>
                <p className="text-gray-700 mb-3 text-sm">
                  Menisküs <strong>üç zona ayrılır:</strong>
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Red Zone (Kırmızı Zon):</strong> Dış %10-25. Kan dolaşımı iyi → iyileşme mümkün</li>
                  <li>• <strong>Red-White Zone:</strong> Orta %33. Sınırlı kan → kısmi iyileşme</li>
                  <li>• <strong>White Zone (Beyaz Zon):</strong> İç %66. Kan yok → iyileşme yok (rezeksiyon gerekli)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cartilage Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              4️⃣ Kıkırdak (Kartilaj)
            </h2>
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="font-semibold text-blue-800 mb-3">🔷 Hyaline (Artiküler) Kıkırdak</h3>
              <p className="text-gray-700 mb-4">
                Eklem yüzeylerini (femoral kondiller, tibial plato, patella arka yüzü) kaplayan 
                <strong> pürüzsüz, beyaz, kaygan</strong> dokudur.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2 text-sm">Özellikler</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Kalınlık: 2-7 mm (patellada en kalın)</li>
                    <li>• Bileşim: %70-80 su, %15-20 kollajen tip II</li>
                    <li>• Kan damarı/sinir YOK (avasküler)</li>
                    <li>• Beslenme: Diffüzyon (eklem sıvısından)</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2 text-sm">Fonksiyonlar</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Sürtünmeyi azaltır (buzdan kaygan!)</li>
                    <li>• Şok emilimi</li>
                    <li>• Yük dağılımı</li>
                    <li>• ⚠️ Hasar görürse YENİLENEMEZ</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Muscles Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              5️⃣ Kaslar ve Tendonlar
            </h2>
            <p className="text-gray-700 mb-6">
              Diz ekleminin hareketi ve stabilitesi için kaslar kritiktir.
            </p>

            <div className="space-y-4">
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="font-semibold text-green-800 mb-3">💪 Quadriceps Femoris (Diz Ekstansörü)</h3>
                <p className="text-gray-700 mb-3">
                  Uyluk ön tarafında yer alan <strong>dört başlı kas grubu</strong>. Dizin açılmasını (ekstansiyonu) sağlar.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Rectus Femoris:</strong> Orta kısım. Hem kalça fleksiyonu hem diz ekstansiyonu.</li>
                  <li>• <strong>Vastus Lateralis:</strong> Dış yan. En güçlüsü.</li>
                  <li>• <strong>Vastus Medialis (VMO):</strong> İç yan. Patella stabilizasyonu (VMO zayıfsa patella dışa kayar).</li>
                  <li>• <strong>Vastus Intermedius:</strong> Derin kısım.</li>
                  <li>• <strong>Tutunma:</strong> Patellar tendon ile tibial tubercle'a yapışır.</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="font-semibold text-yellow-800 mb-3">🦵 Hamstring Kasları (Diz Fleksörü)</h3>
                <p className="text-gray-700 mb-3">
                  Uyluk arka tarafında. Dizin bükülmesini (fleksiyon) sağlar. <strong>ACL'nin yardımcısı</strong> (anterior tibial translation'u önler).
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Biceps Femoris:</strong> Dış yan. Fibula başına yapışır.</li>
                  <li>• <strong>Semitendinosus:</strong> İç yan (yüzeyel). ACL rekonstrüksiyonunda greft kaynağı.</li>
                  <li>• <strong>Semimembranosus:</strong> İç yan (derin). Pes anserinus'a yapışır.</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="font-semibold text-purple-800 mb-3">🏃 Gastrocnemius (Baldır Kası)</h3>
                <p className="text-gray-700 text-sm">
                  İki başlı. Femur distalinden başlar, aşil tendonu ile kalkaneus'a yapışır. 
                  Diz fleksiyonuna yardımcı (minör), ayak bileği plantar fleksiyonu (majör).
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-semibold text-blue-800 mb-3">📌 Pes Anserinus</h3>
                <p className="text-gray-700 text-sm">
                  <strong>Üç tendonun (sartorius, gracilis, semitendinosus)</strong> tibia proksimal mediale yapıştığı bölge. 
                  "Kaz ayağı" şeklinde. <strong>Pes anserinus bursiti</strong> (tendiniti) - iç diz ağrısı nedenidir.
                </p>
              </div>
            </div>
          </section>

          {/* Synovium and Bursa Section */}
          <section className="mb-12 bg-orange-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              6️⃣ Sinoviyal Membran ve Bursalar
            </h2>
            
            <div className="mb-6">
              <h3 className="font-semibold text-orange-800 mb-3">🧪 Sinoviyal Membran</h3>
              <p className="text-gray-700 mb-3">
                Eklem kapsülünün iç yüzeyini kaplayan özel doku. <strong>Sinoviyal sıvı (eklem sıvısı)</strong> üretir.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Sinoviyal Sıvı Fonksiyonları:</strong> Yağlama (lubrication), besin taşıma, şok emilimi</li>
                <li>• <strong>Normal Miktar:</strong> 1-4 ml</li>
                <li>• <strong>Patoloji:</strong> İltihap/travmada artar (efüzyon/şişlik)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-orange-800 mb-3">💧 Bursalar (Sıvı Keseleri)</h3>
              <p className="text-gray-700 mb-3">
                Sürtünme olan bölgelerde bulunan <strong>sıvı dolu kese yapıları</strong>. Diz çevresinde 11+ bursa vardır.
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-white p-3 rounded-lg text-sm">
                  <h4 className="font-medium text-gray-800 mb-1">Prepatellar Bursa</h4>
                  <p className="text-gray-600">Patella önünde. "Housemaid's knee" (çömelme ile travma)</p>
                </div>
                <div className="bg-white p-3 rounded-lg text-sm">
                  <h4 className="font-medium text-gray-800 mb-1">Infrapatellar Bursa</h4>
                  <p className="text-gray-600">Patellar tendon altında. "Clergyman's knee"</p>
                </div>
                <div className="bg-white p-3 rounded-lg text-sm">
                  <h4 className="font-medium text-gray-800 mb-1">Pes Anserinus Bursa</h4>
                  <p className="text-gray-600">Tibia proks. medial. Aşırı kullanım ile iltihaplanır</p>
                </div>
                <div className="bg-white p-3 rounded-lg text-sm">
                  <h4 className="font-medium text-gray-800 mb-1">Baker's Cyst</h4>
                  <p className="text-gray-600">Diz arkasında. Sinoviyal sıvı birikimi (popliteal kist)</p>
                </div>
              </div>
            </div>
          </section>

          {/* Movement Section */}
          <section className="mb-12 bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              7️⃣ Diz Eklemi Hareketleri
            </h2>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">🔼 Fleksiyon (Bükme)</h3>
                <p className="text-sm text-gray-700">
                  <strong>Hareket Açısı:</strong> 0-135° (Normal: 140°) <br />
                  <strong>Kaslar:</strong> Hamstringler, gastrocnemius, gracilis, sartorius
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">🔽 Ekstansiyon (Açma)</h3>
                <p className="text-sm text-gray-700">
                  <strong>Hareket Açısı:</strong> 0-5° (Hiperextension 5-10° normal varyasyon) <br />
                  <strong>Kaslar:</strong> Quadriceps femoris
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">🔄 Rotasyon (Dönme)</h3>
                <p className="text-sm text-gray-700">
                  <strong>İç Rotasyon:</strong> 10° (diz 90° bükükken) <br />
                  <strong>Dış Rotasyon:</strong> 30-40° (diz 90° bükükken) <br />
                  ⚠️ Diz tam açıkken rotasyon kısıtlıdır (bağlar gergin)
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Sıkça Sorulan Sorular
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Diz eklemi hangi kemiklerden oluşur?",
                  a: "Diz eklemi femur (uyluk kemiği), tibia (kaval kemiği) ve patella (diz kapağı) olmak üzere üç kemikten oluşur."
                },
                {
                  q: "Diz bağları nelerdir?",
                  a: "Dört ana bağ vardır: ACL (ön çapraz), PCL (arka çapraz), MCL (iç yan), LCL (dış yan). Bu bağlar eklemin stabilitesini sağlar."
                },
                {
                  q: "Menisküs nedir?",
                  a: "Menisküs, femur ve tibia arasında yer alan hilal şeklinde fibrokartilaj yapıdır. Şok emici ve yük dağıtıcı görevi yapar. Mediyal ve lateral olmak üzere iki tanedir."
                },
                {
                  q: "Patella (diz kapağı) ne işe yarar?",
                  a: "Patella, quadriceps kasının kaldıraç kuvvetini artırır (%30-50 güç artışı). Ayrıca eklem yüzeyini korur ve diz hareketlerini kolaylaştırır."
                }
              ].map((faq, i) => (
                <details key={i} className="bg-gray-50 rounded-lg p-4 group">
                  <summary className="font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                    {faq.q}
                    <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-3 text-gray-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>
          {/* Ameliyatsız Tedavi Internal Link */}
          <div className="bg-blue-50 border-l-4 border-blue-700 p-6 my-8 rounded-r-lg">
            <p className="text-gray-700">
              <strong>İlgili İçerik:</strong> Ameliyatsız tedavi seçenekleri hakkında daha fazla bilgi için{' '}
              <a href="/ameliyatsiz-cozumler" className="text-blue-700 hover:text-blue-900 font-semibold hover:underline">
                ameliyatsız çözümler sayfamızı
              </a>{' '}
              ziyaret edebilirsiniz.
            </p>
          </div>


          {/* CTA Section */}
          <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Diz Sorununuz mu Var?
            </h2>
            <p className="text-indigo-100 mb-6">
              Uzman muayene ve tanı için randevu alın. Anatomik değerlendirme ile doğru tedavi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+905398416801"
                className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition"
              >
                📞 0539 841 68 01
              </a>
              <a
                href="https://wa.me/905398416801"
                className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
              >
                💬 WhatsApp
              </a>
            </div>
          </section>

          {/* PubMed References */}
          <section className="mt-12 bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span>📚</span> Bilimsel Kaynaklar
            </h3>
            <ol className="space-y-3 text-sm text-gray-700">
              <li>
                <span className="font-medium">1.</span> Gray H, Standring S. <em>"Gray's Anatomy: The Anatomical Basis of Clinical Practice."</em> 41st ed. Elsevier; 2016.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=knee+anatomy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">2.</span> Flandry F, Hommel G. <em>"Normal anatomy and biomechanics of the knee."</em> Sports Med Arthrosc Rev. 2011;19(2):82-92.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=knee+anatomy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">3.</span> Fox AJ, et al. <em>"The basic science of the patella: structure, composition, and function."</em> J Knee Surg. 2012;25(2):127-41.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=patella+anatomy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">4.</span> Makris EA, et al. <em>"The knee meniscus: structure-function, pathophysiology, current repair techniques, and prospects for regeneration."</em> Biomaterials. 2011;32(30):7411-31.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=meniscus+anatomy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">5.</span> Petersen W, Tillmann B. <em>"Collagenous fibril texture of the human knee joint menisci."</em> Anat Embryol (Berl). 1998;197(4):317-24.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=meniscus+anatomy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
            </ol>
            
            <details className="mt-4">
              <summary className="cursor-pointer text-blue-600 font-medium hover:text-blue-800 flex items-center gap-2">
                <span>📖 Daha Fazla Kaynak Göster (5 ek referans)</span>
              </summary>
              <ol start={6} className="space-y-3 text-sm text-gray-700 mt-4 pt-4 border-t">
                <li>
                  <span className="font-medium">6.</span> Arnoczky SP, Warren RF. <em>"Microvasculature of the human meniscus."</em> Am J Sports Med. 1982;10(2):90-5.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=meniscus+blood+supply" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">7.</span> Girgis FG, et al. <em>"The cruciate ligaments of the knee joint: anatomical, functional and experimental analysis."</em> Clin Orthop Relat Res. 1975;(106):216-31.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=ACL+anatomy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">8.</span> Mow VC, et al. <em>"Biphasic creep and stress relaxation of articular cartilage in compression: theory and experiments."</em> J Biomech Eng. 1980;102(1):73-84.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=cartilage+biomechanics" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">9.</span> Goodfellow J, et al. <em>"Patellofemoral joint mechanics and pathology. 1. Functional anatomy of the patellofemoral joint."</em> J Bone Joint Surg Br. 1976;58(3):287-90.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=patellofemoral+joint+anatomy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">10.</span> Kennedy JC, et al. <em>"Nerve supply of the human knee and its functional importance."</em> Am J Sports Med. 1982;10(6):329-35.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=knee+nerve+supply" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
              </ol>
            </details>
          </section>

          {/* Related Links */}
          <section className="mt-12">
            <h3 className="text-xl font-bold text-gray-800 mb-4">İlgili Konular</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Diz Ağrısı", href: "/blog/diz-agrisi" },
                { title: "Menisküs Yırtığı", href: "/blog/meniskus-yirtilmasi-belirtileri-ve-tedavisi" },
                { title: "Diz Burkulmasi", href: "/blog/diz-burkulmasi-belirtisi" }
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <span className="text-indigo-600 font-medium">{link.title} →</span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
