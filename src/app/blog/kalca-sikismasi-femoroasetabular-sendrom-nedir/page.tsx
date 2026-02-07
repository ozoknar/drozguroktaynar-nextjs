import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kalça Sıkışması (Femoroasetabular Sendrom) Nedir? | Op. Dr. Özgür Oktay Nar",
  description: "Kalça sıkışması (FAI) nedenleri, belirtileri, tanı yöntemleri ve tedavi seçenekleri. Kalça artroskopisi. Bursa ortopedi uzmanı.",
  keywords: ["kalça sıkışması", "femoroasetabular sendrom", "FAI", "kalça ağrısı", "kalça artroskopisi", "bursa ortopedi"],
  openGraph: {
    title: "Kalça Sıkışması (Femoroasetabular Sendrom) Nedir?",
    description: "Kalça sıkışması tedavisi hakkında uzman bilgisi. Op. Dr. Özgür Oktay Nar - Bursa Ortopedi Uzmanı",
    type: "article",
    url: "https://www.ozguroktaynar.com/blog/kalca-sikismasi-femoroasetabular-sendrom-nedir",
    images: [
      {
        url: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/01/kalca_sikismasi.jpg",
        width: 1200,
        height: 800,
        alt: "Kalça Sıkışması",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Kalça Sıkışması (Femoroasetabular Sendrom) Nedir?",
  "description": "Femoroasetabular sıkışma (FAI), uyluk kemiği başı (femur başı) ile kalça yuvası (asetabulum) arasında anormal temas sonucu oluşan bir durumdur.",
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
  "mainEntityOfPage": "https://www.ozguroktaynar.com/blog/kalca-sikismasi-femoroasetabular-sendrom-nedir",
  "image": "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/01/kalca_sikismasi.jpg"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Kalça sıkışması (FAI) nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kalça sıkışması, femur başı ile asetabulum arasında anormal kemik teması sonucu oluşan bir durumdur. Genellikle genç ve orta yaş aktif bireylerde görülür."
      }
    },
    {
      "@type": "Question",
      "name": "Kalça sıkışması belirtileri nelerdir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kasık ağrısı (özellikle fleksiyon, adduksiyon, iç rotasyon (FADIR) testi ile artar), kalça hareket kısıtlılığı, takılma/kilitlenme hissi, yürüme zorluğu."
      }
    },
    {
      "@type": "Question",
      "name": "Kalça sıkışması nasıl tedavi edilir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Konservatif tedavi (fizik tedavi, aktivite modifikasyonu, ilaç) ilk seçenek. Semptomlar devam ederse kalça artroskopisi (kemik tıraşlama, labrum onarımı) uygulanır."
      }
    }
  ]
};

export default function KalcaSikismasiPage() {
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
      <section className="relative bg-gradient-to-r from-purple-900 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-purple-500 text-sm px-3 py-1 rounded-full mb-4">
                Kalça Sağlığı
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Kalça Sıkışması Sendromu
              </h1>
              <p className="text-xl text-purple-100 mb-6">
                Femoroasetabular Sıkışma (FAI) nedenleri ve tedavisi
              </p>
              <a
                href="tel:+905398416801"
                className="inline-block bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition"
              >
                Randevu Al: 0539 841 68 01
              </a>
            </div>
            <div className="hidden md:block">
              <img
                src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/01/kalca_sikismasi.jpg"
                alt="Kalça Sıkışması"
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
              <strong>Kalça sıkışması (Femoroasetabular Sıkışma - FAI)</strong>, uyluk kemiği başı 
              (femur başı) ile kalça yuvası (asetabulum) arasında <strong>anormal kemik teması</strong> sonucu oluşan 
              bir durumdur. Bu sıkışma, özellikle kalça fleksiyonu (bükme), adduksiyon (yaklaştırma) ve 
              iç rotasyon (içe çevirme) hareketlerinde ağrıya neden olur.
            </p>
            <p className="text-gray-600">
              Genellikle <strong>genç ve orta yaş aktif bireylerde</strong> görülür ve tedavi edilmezse 
              uzun dönemde kalça eklem kıkırdağına ve labruma zarar vererek <strong>erken kireçlenmeye</strong> yol açabilir.
            </p>
          </section>

          {/* Anatomy Section */}
          <section className="mb-12 bg-purple-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Kalça Eklem Anatomisi ve FAI
            </h2>
            <p className="text-gray-700 mb-4">
              Kalça eklemi, <strong>top-yuva (ball-and-socket) tipi</strong> bir eklemdir. Femur başı (top) 
              asetabulum (yuva) içine oturur. Asetabulum çevresinde labrum adı verilen bir kıkırdak yapı bulunur.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">Femur Başı (Top)</h3>
                <p className="text-sm text-gray-600">
                  Uyluk kemiğinin üst ucundaki yuvarlak yapı.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">Asetabulum (Yuva)</h3>
                <p className="text-sm text-gray-600">
                  Leğen kemiğinde (pelvis) yer alan yuvarlak çukur.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">Labrum</h3>
                <p className="text-sm text-gray-600">
                  Asetabulum kenarını saran fibrokartilaj halka. Eklem derinliğini ve stabilitesini artırır.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">Eklem Kıkırdağı</h3>
                <p className="text-sm text-gray-600">
                  Femur başı ve asetabulumu kaplar. Pürüzsüz, kaygan yüzey sağlar.
                </p>
              </div>
            </div>
          </section>

          {/* Types Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Kalça Sıkışması (FAI) Tipleri
            </h2>
            <p className="text-gray-700 mb-6">
              FAI, kemik çıkıntılarının konumuna göre üç ana tipte sınıflandırılır:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { 
                  icon: "🔴", 
                  title: "CAM Tipi Sıkışma", 
                  desc: "Femur başında (top kısmında) oluşan anormal kemik çıkıntısı (bump). Genellikle genç erkek sporcularda görülür." 
                },
                { 
                  icon: "🔵", 
                  title: "Pincer Tipi Sıkışma", 
                  desc: "Asetabulum (yuva) kenarında oluşan kemik çıkıntısı veya aşırı örtünme (over-coverage). Genellikle orta yaş kadınlarda görülür." 
                },
                { 
                  icon: "🟣", 
                  title: "Mixed Tipi Sıkışma", 
                  desc: "En sık görülen tip. Hem CAM hem de Pincer tipi sıkışmanın bir arada olması." 
                }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Symptoms Section */}
          <section className="mb-12 bg-red-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Belirtiler
            </h2>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                  <span>🔴</span> Kasık Ağrısı
                </h3>
                <p className="text-gray-700 text-sm">
                  En yaygın belirti. Özellikle kalçayı bükme (fleksiyon), içe çevirme (iç rotasyon) ve 
                  yaklaştırma (adduksiyon) hareketlerinde (FADIR testi) artar. Yürüme, oturma, 
                  araba sürme, spor yapma ile kötüleşir.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                  <span>🚫</span> Hareket Kısıtlılığı
                </h3>
                <p className="text-gray-700 text-sm">
                  Özellikle kalça fleksiyonu ve iç rotasyonda azalma. Ayakkabı giyme, arabadan inme zorlaşır.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                  <span>🔊</span> Takılma, Kilitlenme, Çıtırtı Hissi
                </h3>
                <p className="text-gray-700 text-sm">
                  Kalça hareketleri sırasında eklem içinde bir şeyin takıldığı, kilitlendiği veya 
                  çıtırtı sesi geldiği hissedilir. Labral yırtık varlığını düşündürür.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                  <span>🦵</span> Topallama
                </h3>
                <p className="text-gray-700 text-sm">
                  Ağrı nedeniyle yürüme paterni değişebilir. Özellikle uzun süre ayakta kalma veya yürüme sonrası.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                  <span>📈</span> Aktivite ile Artan Ağrı
                </h3>
                <p className="text-gray-700 text-sm">
                  Futbol, basketbol, dövüş sporları, yoga gibi aktivitelerde ağrı belirginleşir.
                </p>
              </div>
            </div>
          </section>

          {/* Diagnosis Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Tanı Yöntemleri
            </h2>
            <div className="space-y-4">
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="font-semibold text-purple-800 mb-3">📋 Fizik Muayene</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>FADIR Testi:</strong> Kalça fleksiyon, adduksiyon, iç rotasyon (en hassas test, %95). Ağrı varsa pozitif.</p>
                  <p><strong>FABER Testi:</strong> Fleksiyon, abduksiyon, dış rotasyon (ağrı). Kontralateral tarafta da ağrı varsa Sİ eklem patolojisi.</p>
                  <p><strong>Kalça hareket açıklığı:</strong> Özellikle iç rotasyonda kısıtlılık.</p>
                  <p><strong>Yürüyüş analizi:</strong> Topallama (antalgic gait).</p>
                </div>
              </div>

              <div className="bg-[#E6FAF8] p-6 rounded-xl">
                <h3 className="font-semibold text-[#01867A] mb-3">📷 Görüntüleme Yöntemleri</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Direkt Röntgen (Kalça Grafisi):</strong> AP Pelvis, Cross-table lateral, False profile, Dunn görüntüleri. Kemik çıkıntıları (CAM/Pincer) gösterir.</li>
                  <li>• <strong>MRI (Manyetik Rezonans Görüntüleme):</strong> Labrum yırtığı, kıkırdak hasarı, kemik iliği ödemi. Altın standart.</li>
                  <li>• <strong>MR Artrografi:</strong> Eklem içine kontrast madde verilerek labrum yırtıklarını daha net gösterir.</li>
                  <li>• <strong>BT (Bilgisayarlı Tomografi):</strong> Detaylı kemik morfolojisi, cerrahi planlama.</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="font-semibold text-green-800 mb-3">💉 Lokal Anestezik Enjeksiyon</h3>
                <p className="text-gray-700">
                  Tanısal amaçlı eklem içine lokal anestezik enjeksiyonu. Ağrı azalırsa tanı desteklenir.
                </p>
              </div>
            </div>
          </section>

          {/* Treatment Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Tedavi Seçenekleri
            </h2>
            <p className="text-gray-700 mb-6">
              FAI tedavisinde amaç, sıkışmayı ortadan kaldırmak, labral hasarı onarmak ve kıkırdak hasarını önlemektir.
            </p>

            <div className="mb-8 bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="font-semibold text-green-800 mb-4">✅ Konservatif Tedavi</h3>
              <p className="text-gray-700 mb-4">
                <strong>İndikasyonlar:</strong> Hafif semptomlar, yeni başlangıçlı ağrı, cerrahi adayı olmayan hastalar.
              </p>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">1️⃣ Aktivite Modifikasyonu</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Ağrıyı tetikleyen hareketlerden kaçınma (derin çömelme, uzun süreli oturma)</li>
                    <li>• Yüksek etkili sporları azaltma/durdurma (futbol, basketbol)</li>
                    <li>• Düşük etkili egzersizler (yüzme, bisiklet)</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">2️⃣ Fizik Tedavi ve Rehabilitasyon</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Kalça kası güçlendirme:</strong> Gluteus medius, kalça fleksörleri</li>
                    <li>• <strong>Kor (core) stabilizasyon:</strong> Karın ve sırt kasları</li>
                    <li>• <strong>Esneklik:</strong> Kalça eklemi hareket açıklığı artırma</li>
                    <li>• <strong>Nöromusküler eğitim:</strong> Koordinasyon ve denge</li>
                    <li>• <strong>Manüel terapi:</strong> Eklem mobilizasyonu</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">3️⃣ İlaç Tedavisi</h4>
                  <p className="text-sm text-gray-700">NSAİİ (Nonsteroid Antienflamatuar) - Ağrı ve iltihap kontrolü.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">4️⃣ Enjeksiyonlar</h4>
                  <p className="text-sm text-gray-700">Eklem içi kortikosteroid veya PRP enjeksiyonları (semptomatik rahatlama).</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="font-semibold text-red-800 mb-4">🏥 Cerrahi Tedavi (Kalça Artroskopisi)</h3>
              <p className="text-gray-700 mb-4">
                <strong>İndikasyonlar:</strong> Konservatif tedaviye 3-6 ay yanıt yok, ilerleyici ağrı, labrum yırtığı, kıkırdak hasarı.
                <strong> Minimal invaziv</strong> bir yöntemdir.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-3">1️⃣ Kemik Tıraşlama (Osteoplasty)</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>CAM tipi:</strong> Femur başı-boyun bileşkesindeki kemik çıkıntısı tıraşlanır.</li>
                    <li>• <strong>Pincer tipi:</strong> Asetabulum kenarındaki kemik çıkıntısı tıraşlanır (rim trimming).</li>
                    <li>• Sıkışmayı giderir, normal hareket açıklığı sağlar.</li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-3">2️⃣ Labrum Onarımı (Repair) veya Debridman</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Onarım:</strong> Kanlanması iyi, stabil labrum yırtıkları dikişlerle onarılır (en iyi sonuç).</li>
                    <li>• <strong>Debridman:</strong> Küçük, parçalı, kanlanması olmayan yırtıklar temizlenir (rezeksiyon).</li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-3">3️⃣ Kıkırdak Tedavisi</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Mikrofraktür, kök hücre uygulamaları (kıkırdak hasarı varsa).</li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-3">Ameliyat Sonrası Rehabilitasyon</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Koltuk değneği:</strong> 2-4 hafta (kısmi yük)</li>
                    <li>• <strong>Fizik tedavi:</strong> Ameliyat sonrası hemen başlar, 3-6 ay sürer.</li>
                    <li>• <strong>Spora dönüş:</strong> 4-6 ay (kontrollü ve kademeli).</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Complications Section */}
          <section className="mb-12 bg-yellow-50 border-l-4 border-yellow-500 p-8 rounded-r-lg">
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">
              ⚠️ Komplikasyonlar
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Tedavi Edilmezse:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Labrum yırtığı ilerlemesi</li>
                  <li>• Kıkırdak hasarı ve ilerleyici osteoartrit</li>
                  <li>• Kronik ağrı ve fonksiyon kaybı</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Cerrahi Sonrası:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Sinir hasarı (sciatic, lateral femoral cutaneous)</li>
                  <li>• Enfeksiyon (nadir)</li>
                  <li>• Heterotopik ossifikasyon (eklem dışında kemik oluşumu)</li>
                  <li>• Rezidüel sıkışma/ağrı (yetersiz tıraşlama)</li>
                  <li>• Revizyon cerrahisi</li>
                </ul>
              </div>
            </div>
          </section>

          {/* When to See Doctor Section */}
          <section className="mb-12 bg-orange-50 border-l-4 border-orange-500 p-8 rounded-r-lg">
            <h2 className="text-2xl font-bold text-orange-800 mb-4">
              🚨 Ne Zaman Doktora Gidilmeli?
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span className="text-red-500">•</span>
                <span>Kasık bölgesinde kronik veya tekrarlayan ağrı</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">•</span>
                <span>Kalça hareketlerinde belirgin kısıtlılık (özellikle içe rotasyon)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">•</span>
                <span>Kalçada takılma, kilitlenme veya atlama hissi</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">•</span>
                <span>Konservatif tedaviye (fizik tedavi, ilaç) yanıt vermeyen ağrı</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">•</span>
                <span>Günlük aktiviteleri veya spor performansını etkileyen ağrı</span>
              </li>
            </ul>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Sıkça Sorulan Sorular
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Kalça sıkışması (FAI) nedir?",
                  a: "Kalça sıkışması, femur başı ile asetabulum arasında anormal kemik teması sonucu oluşan bir durumdur. Genellikle genç ve orta yaş aktif bireylerde görülür."
                },
                {
                  q: "Kalça sıkışması belirtileri nelerdir?",
                  a: "Kasık ağrısı (özellikle fleksiyon, adduksiyon, iç rotasyon (FADIR) testi ile artar), kalça hareket kısıtlılığı, takılma/kilitlenme hissi, yürüme zorluğu."
                },
                {
                  q: "Kalça sıkışması nasıl tedavi edilir?",
                  a: "Konservatif tedavi (fizik tedavi, aktivite modifikasyonu, ilaç) ilk seçenek. Semptomlar devam ederse kalça artroskopisi (kemik tıraşlama, labrum onarımı) uygulanır."
                },
                {
                  q: "Kalça artroskopisi sonrası iyileşme süreci ne kadar?",
                  a: "Ameliyat sonrası 2-4 hafta koltuk değneği ile kısmi yük verilir. Fizik tedavi hemen başlar ve 3-6 ay sürer. Spora dönüş 4-6 ay sonra mümkündür."
                }
              ].map((faq, i) => (
                <details key={i} className="bg-gray-50 rounded-lg p-4 group">
                  <summary className="font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                    {faq.q}
                    <span className="text-purple-500 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-3 text-gray-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>
          {/* Ameliyatsız Tedavi Internal Link */}
          <div className="bg-[#E6FAF8] border-l-4 border-blue-700 p-6 my-8 rounded-r-lg">
            <p className="text-gray-700">
              <strong>İlgili İçerik:</strong> Ameliyatsız tedavi seçenekleri hakkında daha fazla bilgi için{' '}
              <a href="/ameliyatsiz-cozumler" className="text-[#01A899] hover:text-blue-900 font-semibold hover:underline">
                ameliyatsız çözümler sayfamızı
              </a>{' '}
              ziyaret edebilirsiniz.
            </p>
          </div>


          {/* CTA Section */}
          <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Kalça Ağrınız mı Var?
            </h2>
            <p className="text-purple-100 mb-6">
              Kalça sıkışması tanısı ve uygun tedavi planı için uzman değerlendirme.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+905398416801"
                className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition"
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
                <span className="font-medium">1.</span> Ganz R, et al. <em>"Femoroacetabular impingement: a cause of osteoarthritis of the hip."</em> Clin Orthop Relat Res. 2003;(417):112-20.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=femoroacetabular+impingement" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">2.</span> Beck M, et al. <em>"Head-neck offset in femoroacetabular impingement. Cam type impingement of the hip."</em> J Bone Joint Surg Br. 2005;87(7):1012-7.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=femoroacetabular+impingement" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">3.</span> Philippon MJ, et al. <em>"Outcomes of hip arthroscopy for femoroacetabular impingement: a minimum 2-year follow-up."</em> Arthroscopy. 2009;25(8):905-11.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=hip+arthroscopy+FAI" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">4.</span> Byrd JW, Jones KS. <em>"Hip arthroscopy for femoroacetabular impingement: a prospective study of 100 consecutive patients with minimum 2-year follow-up."</em> Arthroscopy. 2009;25(4):369-82.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=hip+arthroscopy+FAI" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">5.</span> Nwachukwu BU, et al. <em>"Predictors of clinical outcomes after hip arthroscopy for femoroacetabular impingement: a systematic review."</em> Am J Sports Med. 2016;44(6):1594-602.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=hip+arthroscopy+FAI" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
              </li>
            </ol>
            
            <details className="mt-4">
              <summary className="cursor-pointer text-[#01CAB8] font-medium hover:text-[#01867A] flex items-center gap-2">
                <span>📖 Daha Fazla Kaynak Göster (5 ek referans)</span>
              </summary>
              <ol start={6} className="space-y-3 text-sm text-gray-700 mt-4 pt-4 border-t">
                <li>
                  <span className="font-medium">6.</span> Reiman MP, et al. <em>"Physical therapy for femoroacetabular impingement: a critical review and clinical synthesis."</em> Sports Health. 2012;4(4):348-55.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=FAI+physical+therapy" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">7.</span> Clohisy JC, et al. <em>"Femoroacetabular impingement: current concepts in diagnosis and treatment."</em> Instr Course Lect. 2010;59:151-60.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=femoroacetabular+impingement" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">8.</span> Safran MR, et al. <em>"Arthroscopic treatment of femoroacetabular impingement: indications, technique, and results."</em> J Am Acad Orthop Surg. 2009;17(4):255-65.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=hip+arthroscopy+FAI" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">9.</span> Sutter R, et al. <em>"Diagnostic accuracy of MRI for femoroacetabular impingement."</em> AJR Am J Roentgenol. 2012;198(1):151-8.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=FAI+MRI+diagnosis" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">10.</span> Domb BG, et al. <em>"Effect of labral tears on outcomes of hip arthroscopy for femoroacetabular impingement."</em> Orthop J Sports Med. 2015;3(2):2325967115570081.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=hip+labral+tear" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
                </li>
              </ol>
            </details>
          </section>

          {/* Related Links */}
          <section className="mt-12">
            <h3 className="text-xl font-bold text-gray-800 mb-4">İlgili Konular</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Kalça Artroskopisi", href: "/tedaviler/kalca-artroskopisi" },
                { title: "Kalça Ağrısı", href: "/blog/kalca-agrisi" },
                { title: "Minimal İnvaziv Kalça Protezi", href: "/blog/kalca-anatomisi-ve-minimal-invaziv-kalca-protezi" }
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <span className="text-purple-600 font-medium">{link.title} →</span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
