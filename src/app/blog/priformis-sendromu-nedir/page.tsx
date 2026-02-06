import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Piriformis Sendromu Nedir? Belirtileri ve Tedavisi | Op. Dr. Özgür Oktay Nar",
  description: "Piriformis sendromu nedenleri, belirtileri ve tedavi yöntemleri. Siyatik sinir sıkışması, kalça ağrısı çözümleri. Bursa ortopedi uzmanı.",
  keywords: ["piriformis sendromu", "siyatik ağrısı", "kalça ağrısı", "bacak ağrısı", "piriformis kası", "bursa ortopedi"],
  openGraph: {
    title: "Piriformis Sendromu Nedir? Belirtileri ve Tedavisi",
    description: "Piriformis sendromu tedavisi hakkında uzman bilgisi. Op. Dr. Özgür Oktay Nar - Bursa Ortopedi Uzmanı",
    type: "article",
    url: "https://www.ozguroktaynar.com/blog/priformis-sendromu-nedir",
    images: [
      {
        url: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/01/priformis_sendromu.jpg",
        width: 1200,
        height: 800,
        alt: "Piriformis Sendromu",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Piriformis Sendromu Nedir? Belirtileri ve Tedavisi",
  "description": "Piriformis sendromu, siyatik sinirin piriformis kası tarafından sıkıştırılması sonucu ortaya çıkan kalça ve bacak ağrısı durumudur.",
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
  "mainEntityOfPage": "https://www.ozguroktaynar.com/blog/priformis-sendromu-nedir",
  "image": "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/01/priformis_sendromu.jpg"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Piriformis sendromu nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Piriformis sendromu, kalçada piriformis kasının siyatik siniri sıkıştırması sonucu ortaya çıkan bir nöromüsküler bozukluktur. Kalça, popo ve bacakta ağrı, uyuşma, karıncalanmaya neden olur."
      }
    },
    {
      "@type": "Question",
      "name": "Piriformis sendromu belirtileri nelerdir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Popoda hassasiyet ve ağrı, kalça ve bacakta siyatik benzeri ağrı, uzun süre oturma veya yürüme ile artan ağrı, kalça hareketlerinde kısıtlılık."
      }
    },
    {
      "@type": "Question",
      "name": "Piriformis sendromu nasıl tedavi edilir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fizik tedavi, germe egzersizleri, ilaç tedavisi (NSAİİ, kas gevşetici), enjeksiyonlar (kortikosteroid, botoks), nadiren cerrahi dekompresyon uygulanır."
      }
    }
  ]
};

export default function PiriformisSendromuPage() {
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
      <section className="relative bg-gradient-to-r from-green-900 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-green-500 text-sm px-3 py-1 rounded-full mb-4">
                Kalça & Siyatik
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Piriformis Sendromu
              </h1>
              <p className="text-xl text-green-100 mb-6">
                Nedenleri, belirtileri ve etkili tedavi yöntemleri
              </p>
              <a
                href="tel:+905398416801"
                className="inline-block bg-white text-green-900 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
              >
                Randevu Al: 0539 841 68 01
              </a>
            </div>
            <div className="hidden md:block">
              <img
                src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/01/priformis_sendromu.jpg"
                alt="Piriformis Sendromu"
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
              <strong>Piriformis sendromu</strong>, kalça bölgesinde yer alan <strong>piriformis kasının</strong> 
              spazmı veya şişmesi sonucu <strong>siyatik siniri sıkıştırmasıyla</strong> ortaya çıkan bir durumdur. 
              Bu durum, kalça, popo ve bacakta siyatik sinir ağrısına benzer belirtilere neden olur.
            </p>
            <p className="text-gray-600">
              Genellikle bel fıtığı ile karıştırılır, ancak piriformis sendromu belde değil, 
              kalça kasındaki problemden kaynaklanır. Doğru tanı ve tedavi ile semptomlar kontrol altına alınabilir.
            </p>
          </section>

          {/* Anatomy Section */}
          <section className="mb-12 bg-green-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Piriformis Kası ve Siyatik Sinir Anatomisi
            </h2>
            <p className="text-gray-700 mb-4">
              <strong>Piriformis kası</strong>, kalçanın derinliklerinde, sakrum (kuyruk sokumu kemiği) ile 
              femur (uyluk kemiği) arasında yer alan küçük, üçgen şeklinde bir kastır.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">📍 Piriformis Kası</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Fonksiyon:</strong> Kalça dış rotasyonu, abduksiyon (bacağı yana açma)</li>
                  <li>• <strong>Konum:</strong> Siyatik sinirin hemen üzerinde veya içinden geçer</li>
                  <li>• <strong>Önem:</strong> Siyatik sinirle yakın komşuluk nedeniyle sıkışmaya neden olabilir</li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">⚡ Siyatik Sinir</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Vücudun en kalın siniri.</strong> Belden başlar, kalçadan geçerek bacağa iner.</li>
                  <li>• <strong>Seyir:</strong> Piriformis kasının altından geçer (%85-90), içinden geçebilir (%10-15)</li>
                  <li>• <strong>Sıkışma:</strong> Piriformis kası spazmı siniri tahriş edebilir</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Causes Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Nedenler ve Risk Faktörleri
            </h2>
            <p className="text-gray-700 mb-6">
              Piriformis sendromu, piriformis kasındaki anormal durumlar veya çevresel faktörler sonucu oluşabilir.
            </p>
            <div className="space-y-4">
              <div className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="font-semibold text-yellow-800 mb-3">💪 Kas Spazmı ve Gerginlik</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Aşırı kullanım:</strong> Koşucular, bisikletçiler, dansçılar (tekrar eden kalça rotasyonu)</li>
                  <li>• <strong>Travma:</strong> Kalçaya direkt darbe, düşme</li>
                  <li>• <strong>Uzun süreli oturma:</strong> Özellikle sert zeminde, cüzdan cebinde oturma</li>
                  <li>• <strong>Kas dengesizliği:</strong> Kalça dış rotatörlerinin zayıflığı</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-xl">
                <h3 className="font-semibold text-red-800 mb-3">🦴 Anatomik Varyasyonlar</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Siyatik sinirin piriformis kasının içinden geçmesi (%10-15 vakada)</li>
                  <li>• Piriformis kasının anomalileri (bifid, aksesuar kas)</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-semibold text-blue-800 mb-3">💧 Enflamasyon ve Şişlik</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Kas yırtığı veya kontüzyon sonrası ödem</li>
                  <li>• Bursit (kalça bursalarının iltihabı)</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="font-semibold text-purple-800 mb-3">📈 Biyomekanik Faktörler</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Düz tabanlık (aşırı pronasyon)</li>
                  <li>• Bacak uzunluk farkı</li>
                  <li>• Yanlış yürüme veya koşu paterni</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Symptoms Section */}
          <section className="mb-12 bg-red-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Belirtiler
            </h2>
            <p className="text-gray-700 mb-6">
              Piriformis sendromunun belirtileri genellikle <strong>tek taraflı</strong> olup, 
              bel fıtığı semptomlarına çok benzer, bu nedenle ayırıcı tanı önemlidir.
            </p>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                  <span>🔴</span> Popo ve Kalça Ağrısı
                </h3>
                <p className="text-gray-700 text-sm">
                  Derin, künt ağrı veya yanma hissi. Genellikle sakroiliak eklem çevresinde başlar, 
                  popoya (gluteal bölgeye) yayılır.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                  <span>⚡</span> Siyatik Benzeri Ağrı
                </h3>
                <p className="text-gray-700 text-sm">
                  Kalçadan başlayıp bacağın arkasından dize veya baldırın üst kısmına yayılan ağrı, 
                  uyuşma, karıncalanma. Ayak parmaklarına kadar nadiren iner (bel fıtığının aksine).
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                  <span>📈</span> Ağrıyı Artıran Durumlar
                </h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Uzun süre oturma (özellikle sert zeminde, araba kullanırken)</li>
                  <li>• Yürüme veya koşma</li>
                  <li>• Merdiven çıkma</li>
                  <li>• Kalçayı içe döndürme (rotasyon) hareketleri</li>
                  <li>• Ayakta bacak bacak üstüne atma</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                  <span>📉</span> Hareket Kısıtlılığı
                </h3>
                <p className="text-gray-700 text-sm">
                  Kalça eklemi dış rotasyonunda ağrı ve kısıtlılık. Ayakkabı bağlama, bacak bacak üstüne atma zorlaşır.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                  <span>🖐️</span> Palpasyon Hassasiyeti
                </h3>
                <p className="text-gray-700 text-sm">
                  Piriformis kası üzerinde (popo bölgesinde, büyük trokanterin hemen üst iç kısmı) derin basmakla hassasiyet ve ağrı.
                </p>
              </div>
            </div>
          </section>

          {/* Diagnosis Section */}
          <section className="mb-12 bg-blue-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Tanı Yöntemleri
            </h2>
            <p className="text-gray-700 mb-4">
              Piriformis sendromu tanısı <strong>klinik muayene</strong> ve <strong>bel fıtığından ayırt etmekle</strong> konulur. 
              Spesifik bir laboratuvar veya görüntüleme testi yoktur.
            </p>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-3">📋 Fizik Muayene</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>1. Freiberg Testi:</strong> Pasif kalça iç rotasyonu sırasında ağrı → pozitif.</p>
                  <p><strong>2. Pace Testi:</strong> Dirençli kalça abduksiyon ve dış rotasyon sırasında ağrı → pozitif.</p>
                  <p><strong>3. Beatty Testi:</strong> Yan yatış pozisyonunda bacak kaldırma sırasında ağrı → pozitif.</p>
                  <p><strong>4. FAIR Testi:</strong> Fleksiyon, Adduksiyon, İç Rotasyon sırasında ağrı → pozitif (siyatik sıkışma).</p>
                  <p><strong>5. Palpasyon:</strong> Piriformis kası üzerinde hassasiyet.</p>
                  <p><strong>6. Nörolojik muayene:</strong> Duyu ve motor defisit yok (bel fıtığından farkı).</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-3">📷 Görüntüleme Yöntemleri</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Görüntüleme yöntemleri genellikle <strong>diğer nedenleri (bel fıtığı, kalça patolojileri) dışlamak</strong> için kullanılır.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Direkt Röntgen (Pelvis):</strong> Kemik anormalliklerini, kalça eklem kireçlenmesini dışlar.</li>
                  <li>• <strong>MRI (Lomber):</strong> Bel fıtığını, spinal stenozu dışlar. Siyatik sinir sıkışmasını gösterebilir.</li>
                  <li>• <strong>MRI (Kalça):</strong> Piriformis kası ödemi, atrofi veya anatomik varyasyonları gösterebilir.</li>
                  <li>• <strong>Ultrason:</strong> Piriformis kasını dinamik olarak değerlendirilebilir.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-3">⚡ EMG (Elektromiyografi) / Sinir İletim Çalışması</h3>
                <p className="text-sm text-gray-700">
                  Siyatik sinirde kronik bası varsa EMG anormallik gösterebilir. Ancak tanı için 
                  spesifik değildir, bel fıtığı ile ayrımına yardımcı olur.
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
              Piriformis sendromu tedavisinde <strong>konservatif yöntemler</strong> genellikle başarılıdır. 
              Cerrahiye nadiren ihtiyaç duyulur.
            </p>

            <div className="mb-8 bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="font-semibold text-green-800 mb-4">✅ Konservatif Tedavi (İlk Seçenek)</h3>
              
              <div className="space-y-5">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">1️⃣ Aktivite Modifikasyonu</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Ağrıyı tetikleyen aktivitelerden kaçının (uzun oturma, derin çömelme)</li>
                    <li>• Sert zeminlerde oturmaktan kaçının</li>
                    <li>• Yastık kullanın (özellikle uzun yolculuklarda)</li>
                    <li>• Cüzdanı arka cepten çıkarın</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">2️⃣ Fizik Tedavi ve Germe Egzersizleri (KRİTİK!)</h4>
                  <div className="bg-white p-4 rounded-lg mt-2">
                    <h5 className="font-semibold text-green-700 mb-2">Piriformis Germe Egzersizleri</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Sırtüstü Piriformis Germe:</strong> Sırtüstü yat, diz bükük, ayak diğer diz üzerinde. Dizden iterek kalçayı gerin (30 sn x 3).</li>
                      <li>• <strong>Oturarak Piriformis Germe:</strong> Sandalyede otur, ayak diğer diz üzerinde. Gövdeyi öne eğ (30 sn x 3).</li>
                      <li>• <strong>Ayakta Piriformis Germe:</strong> Duvara tutun, bacak çapraz. Kalçayı geriye it (30 sn x 3).</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg mt-2">
                    <h5 className="font-semibold text-green-700 mb-2">Kalça ve Kor Güçlendirme</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Gluteus medius/minimus güçlendirme (yan yatış bacak kaldırma)</li>
                      <li>• Karın ve sırt kasları (core stabilizasyon)</li>
                      <li>• Hamstring ve quadriceps esnekliği</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">3️⃣ İlaç Tedavisi</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>NSAİİ:</strong> İbuprofen, naproksen (ağrı ve iltihap kontrolü)</li>
                    <li>• <strong>Kas gevşeticiler:</strong> Diazepam, tizanidin (kas spazmını azaltır)</li>
                    <li>• <strong>Nöropatik ağrı ilaçları:</strong> Gabapentin, pregabalin (uzun süreli siyatik benzeri ağrıda)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">4️⃣ Enjeksiyonlar</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Kortikosteroid enjeksiyonu:</strong> Piriformis kası içine (ultrason veya floroskopi eşliğinde) → iltihabı azaltır.</li>
                    <li>• <strong>Botoks enjeksiyonu:</strong> Piriformis kasına → kas spazmını çözer, sinir basısını azaltır (etki 3-6 ay).</li>
                    <li>• <strong>Lokal anestezik enjeksiyonu:</strong> Kısa süreli rahatlama, tanısal amaçlı.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">5️⃣ Fiziksel Modaliteler</h4>
                  <p className="text-sm text-gray-700">
                    Sıcak/soğuk uygulama, TENS, ultrason, derin doku masajı (piriformis kasına).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="font-semibold text-red-800 mb-4">🏥 Cerrahi Tedavi (Nadir)</h3>
              <p className="text-gray-700 mb-4">
                <strong>İndikasyonlar:</strong> En az 6-12 ay konservatif tedaviye rağmen devam eden ciddi ağrı, 
                yaşam kalitesini etkileyen semptomlar ve objektif sinir sıkışması kanıtı.
              </p>

              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2 text-sm">1. Piriformis Tenotomisi (Gevşetme)</h4>
                  <p className="text-sm text-gray-700">
                    Piriformis kasının siyatik sinir üzerindeki basıyı kaldırmak için kasın bir kısmı veya tamamı kesilir.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2 text-sm">2. Siyatik Sinir Dekompresyonu</h4>
                  <p className="text-sm text-gray-700">
                    Siyatik sinir üzerindeki diğer sıkışma nedenleri (bantlar, fibröz dokular) temizlenir.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2 text-sm">Ameliyat Sonrası Rehabilitasyon</h4>
                  <p className="text-sm text-gray-700">
                    Cerrahi sonrası 6-12 hafta süren yoğun fizik tedavi ve germe egzersizleri.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* When to See Doctor Section */}
          <section className="mb-12 bg-yellow-50 border-l-4 border-yellow-500 p-8 rounded-r-lg">
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">
              🚨 Ne Zaman Doktora Gidilmeli?
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span className="text-red-500">•</span>
                <span>Popo ve bacakta inatçı veya kötüleşen ağrı</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">•</span>
                <span>Ağrıya eşlik eden güç kaybı veya ilerleyici uyuşma</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">•</span>
                <span>Mesane veya bağırsak kontrolünde değişiklik (acil durum)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">•</span>
                <span>Aktivite modifikasyonu ve ev egzersizlerine rağmen rahatlama olmaması</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">•</span>
                <span>Bel fıtığı veya diğer ciddi durumların dışlanması gerektiğinde</span>
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
                  q: "Piriformis sendromu nedir?",
                  a: "Piriformis sendromu, kalçada piriformis kasının siyatik siniri sıkıştırması sonucu ortaya çıkan bir nöromüsküler bozukluktur. Kalça, popo ve bacakta ağrı, uyuşma, karıncalanmaya neden olur."
                },
                {
                  q: "Piriformis sendromu belirtileri nelerdir?",
                  a: "Popoda hassasiyet ve ağrı, kalça ve bacakta siyatik benzeri ağrı, uzun süre oturma veya yürüme ile artan ağrı, kalça hareketlerinde kısıtlılık."
                },
                {
                  q: "Piriformis sendromu nasıl tedavi edilir?",
                  a: "Fizik tedavi, germe egzersizleri, ilaç tedavisi (NSAİİ, kas gevşetici), enjeksiyonlar (kortikosteroid, botoks), nadiren cerrahi dekompresyon uygulanır."
                },
                {
                  q: "Piriformis sendromu ile bel fıtığı arasındaki fark nedir?",
                  a: "Bel fıtığında ağrı genellikle belden başlar, uyuşma ve güç kaybı daha yaygındır. Piriformis sendromunda ağrı kalçadan başlar, bel ağrısı veya nörolojik defisitler (güç kaybı) genellikle yoktur."
                }
              ].map((faq, i) => (
                <details key={i} className="bg-gray-50 rounded-lg p-4 group">
                  <summary className="font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                    {faq.q}
                    <span className="text-green-500 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-3 text-gray-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-green-600 to-green-800 text-white p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Piriformis Sendromunuz mu Var?
            </h2>
            <p className="text-green-100 mb-6">
              Uzman değerlendirme ve doğru tanı için randevu alın. Etkili tedavi ile ağrıdan kurtulun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+905398416801"
                className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
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
                <span className="font-medium">1.</span> Boyajian-O'Neill LA, et al. <em>"Diagnosis and management of piriformis syndrome: an osteopathic approach."</em> J Am Osteopath Assoc. 2008;108(11):657-64.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=piriformis+syndrome+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">2.</span> Pecina M, et al. <em>"Piriformis syndrome: a neuropathic entrapment syndrome."</em> Adv Clin Neurosci Rehabil. 2008;8(5):20-2.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=piriformis+syndrome+diagnosis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">3.</span> Han SK, et al. <em>"Piriformis syndrome: current update on an old problem."</em> Asian Spine J. 2021;15(4):460-72.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=piriformis+syndrome+etiology" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">4.</span> Kirschner JS, et al. <em>"Piriformis syndrome diagnosis and treatment."</em> Muscle Nerve. 2009;40(1):10-5.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=piriformis+syndrome+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">5.</span> Tonley JC, et al. <em>"Treatment of piriformis syndrome with ultrasound-guided injection of corticosteroid and local anesthetic."</em> J Manipulative Physiol Ther. 2010;33(1):1-7.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=piriformis+syndrome+injection" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
            </ol>
            
            <details className="mt-4">
              <summary className="cursor-pointer text-blue-600 font-medium hover:text-blue-800 flex items-center gap-2">
                <span>📖 Daha Fazla Kaynak Göster (5 ek referans)</span>
              </summary>
              <ol start={6} className="space-y-3 text-sm text-gray-700 mt-4 pt-4 border-t">
                <li>
                  <span className="font-medium">6.</span> Bernard TN Jr, Haddad RJ Jr. <em>"Piriformis syndrome: pathophysiology, diagnosis, and treatment."</em> Instr Course Lect. 1990;39:395-403.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=piriformis+syndrome" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">7.</span> Fishman LM, et al. <em>"Piriformis syndrome: a diagnosis with many challenges."</em> Phys Med Rehabil Clin N Am. 2011;22(2):339-56.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=piriformis+syndrome" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">8.</span> Miller TA, et al. <em>"Sciatica caused by piriformis syndrome: diagnosis and management."</em> Curr Rev Musculoskelet Med. 2012;5(3):203-12.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=piriformis+syndrome" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">9.</span> Probst D, et al. <em>"Piriformis syndrome: an often forgotten cause of buttock pain."</em> J Am Osteopath Assoc. 2007;107(7):299-303.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=piriformis+syndrome" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">10.</span> Lee S, et al. <em>"Efficacy of botulinum toxin type A for piriformis syndrome: a systematic review and meta-analysis."</em> Pain Physician. 2018;21(3):273-83.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=piriformis+syndrome+botox" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
              </ol>
            </details>
          </section>

          {/* Related Links */}
          <section className="mt-12">
            <h3 className="text-xl font-bold text-gray-800 mb-4">İlgili Konular</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Kalça Ağrısı", href: "/blog/kalca-agrisi" },
                { title: "Siyatik", href: "/tedaviler/siyatik" },
                { title: "Bel Fıtığı", href: "/blog/bel-fitigi" }
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <span className="text-green-600 font-medium">{link.title} →</span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
