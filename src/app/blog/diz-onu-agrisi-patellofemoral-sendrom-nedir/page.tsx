import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patellofemoral Sendrom (Diz Önü Ağrısı) | Op. Dr. Özgür Oktay Nar",
  description: "Patellofemoral ağrı sendromu (runner's knee) nedenleri, belirtileri ve tedavisi. Diz önü ağrısı çözümleri. Bursa ortopedi uzmanı.",
  keywords: ["patellofemoral sendrom", "diz önü ağrısı", "runner's knee", "patellofemoral ağrı", "diz kapağı ağrısı", "bursa ortopedi"],
  openGraph: {
    title: "Patellofemoral Sendrom (Diz Önü Ağrısı)",
    description: "Patellofemoral ağrı sendromu tedavisi. Op. Dr. Özgür Oktay Nar - Bursa Ortopedi Uzmanı",
    type: "article",
    url: "https://www.ozguroktaynar.com/blog/diz-onu-agrisi-patellofemoral-sendrom-nedir",
    images: [
      {
        url: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/01/patellofemoral_sendrom.jpg",
        width: 1200,
        height: 800,
        alt: "Patellofemoral Sendrom",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Patellofemoral Sendrom (Diz Önü Ağrısı)",
  "description": "Patellofemoral ağrı sendromu, diz kapağı (patella) ile uyluk kemiği (femur) arasındaki eklemde oluşan ağrıdır. Genç aktif bireylerde yaygındır.",
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
  "mainEntityOfPage": "https://www.ozguroktaynar.com/blog/diz-onu-agrisi-patellofemoral-sendrom-nedir",
  "image": "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/01/patellofemoral_sendrom.jpg"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Patellofemoral sendrom nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Patellofemoral sendrom, diz kapağı (patella) ile uyluk kemiği (femur) arasındaki eklemde oluşan ağrı sendromudur. Runner's knee olarak da bilinir."
      }
    },
    {
      "@type": "Question",
      "name": "Patellofemoral sendrom belirtileri nelerdir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Diz önünde ağrı (özellikle merdiven çıkma/inme, çömelme, uzun süreli oturma sonrası), krepitasyon (çıtırtı sesi), şişlik ve instabilite hissi."
      }
    },
    {
      "@type": "Question",
      "name": "Patellofemoral sendrom nasıl tedavi edilir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Konservatif tedavi (fizik tedavi, VMO güçlendirme, RICE protokolü) ilk tercitir. %90 hasta konservatif tedavi ile iyileşir. Dirençli vakalarda cerrahi (lateral release) düşünülebilir."
      }
    }
  ]
};

export default function PatellofemoralSendromPage() {
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
      <section className="relative bg-gradient-to-r from-pink-900 to-pink-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-pink-500 text-sm px-3 py-1 rounded-full mb-4">
                Diz Önü Ağrısı
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Patellofemoral Sendrom
              </h1>
              <p className="text-xl text-pink-100 mb-6">
                Diz kapağı ağrısı (Runner's Knee) nedenleri ve tedavisi
              </p>
              <a
                href="tel:+905398416801"
                className="inline-block bg-white text-pink-900 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition"
              >
                Randevu Al: 0539 841 68 01
              </a>
            </div>
            <div className="hidden md:block">
              <img
                src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/01/patellofemoral_sendrom.jpg"
                alt="Patellofemoral Sendrom"
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
              <strong>Patellofemoral ağrı sendromu (PFPS)</strong>, diz kapağı (patella) ile uyluk kemiği (femur) 
              arasındaki eklemde oluşan <strong>ağrı ve rahatsızlıktır</strong>. "Runner's knee" veya "koşucu dizesi" 
              olarak da bilinir. <strong>Genç, aktif bireylerde</strong> en yaygın diz ağrısı nedenidir.
            </p>
            <p className="text-gray-600">
              İyi haber: Çoğu hasta <strong>konservatif tedavi ile iyileşir</strong> (%90). 
              Fizik tedavi, egzersiz ve yaşam tarzı değişiklikleri kritik öneme sahiptir.
            </p>
          </section>

          {/* Definition Section */}
          <section className="mb-12 bg-pink-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Patellofemoral Sendrom Nedir?
            </h2>
            <p className="text-gray-700 mb-4">
              Patella (diz kapağı), dizin bükülüp açılması sırasında femur üzerindeki trochlear oluğa (V-şeklinde oluk) 
              kayarak hareket eder. PFPS'de bu hareket düzgün olmaz:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span className="text-pink-600">•</span>
                <span><strong>Malalignment (Hizalama Bozukluğu):</strong> Patella dışa (lateral) kayma eğilimindedir</span>
              </li>
              <li className="flex gap-2">
                <span className="text-pink-600">•</span>
                <span><strong>Artan Basınç:</strong> Eklem yüzeyinde anormal yük dağılımı</span>
              </li>
              <li className="flex gap-2">
                <span className="text-pink-600">•</span>
                <span><strong>Kıkırdak İrritasyonu:</strong> Patella altındaki kıkırdağın iltihaplanması</span>
              </li>
              <li className="flex gap-2">
                <span className="text-pink-600">•</span>
                <span><strong>Kronik Ağrı:</strong> Aktivite ile artan, dinlenmede azalan</span>
              </li>
            </ul>
          </section>

          {/* Causes Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Nedenler ve Risk Faktörleri
            </h2>
            <p className="text-gray-700 mb-6">
              PFPS <strong>multifaktöriyel</strong> bir durumdur (tek neden yok, birçok etken bir araya gelir).
            </p>

            <div className="space-y-4">
              <div className="bg-red-50 p-6 rounded-xl">
                <h3 className="font-semibold text-red-800 mb-3">🏃 Aşırı Kullanım</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Ani aktivite artışı:</strong> Koşu mesafesi/yoğunluğu çok hızlı artırma</li>
                  <li>• <strong>Tekrarlayan hareketler:</strong> Çömelme, merdiven, zıplama</li>
                  <li>• <strong>Yüksek etkili sporlar:</strong> Basketbol, voleybol, futbol</li>
                  <li>• <strong>Yetersiz dinlenme:</strong> Kas yorgunluğu patella yükünü artırır</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-semibold text-blue-800 mb-3">💪 Kas Dengesizliği</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>VMO Zayıflığı:</strong> Vastus Medialis Obliquus (iç quadriceps) zayıfsa patella dışa kayar</li>
                  <li>• <strong>Vastus Lateralis Dominansı:</strong> Dış quadriceps daha güçlü → lateral çekme</li>
                  <li>• <strong>Hamstring Gerginliği:</strong> Esneklik azlığı diz yükünü artırır</li>
                  <li>• <strong>Gluteus Medius Zayıflığı:</strong> Kalça abduksiyon zayıfsa bacak içe dönüyor (valgus)</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="font-semibold text-yellow-800 mb-3">🦴 Anatomik Faktörler</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Genu Valgum (X-bacak):</strong> Dizler içe yakın, patellaya dış çekme</li>
                  <li>• <strong>Femoral Anteversiyon:</strong> Kalça içe rotasyon artışı</li>
                  <li>• <strong>Yüksek Patella (Patella Alta):</strong> Diz kapağı normalden yukarıda → instabilite</li>
                  <li>• <strong>Q-Açısı Artışı:</strong> Quadriceps vektörü ile patellar tendon açısı >20° (kadınlarda daha sık)</li>
                  <li>• <strong>Yassı Ayak (Pes Planus):</strong> Pronasyon artışı → tibia iç rotasyonu</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="font-semibold text-purple-800 mb-3">👟 Dış Etkenler</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Kötü ayakkabı:</strong> Yetersiz destek, aşırı eskimiş taban</li>
                  <li>• <strong>Sert zemin:</strong> Asfalt/beton üzerinde koşma (şok emilimi az)</li>
                  <li>• <strong>Merdiven egzersizi:</strong> Patellaya yük 3-4 kat artar</li>
                  <li>• <strong>Travma:</strong> Direkt darbe (nadiren)</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="font-semibold text-green-800 mb-3">🎯 Yüksek Riskli Gruplar</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Kadınlar:</strong> Q-açısı fazla, genu valgum, estrogen etkisi</li>
                  <li>• <strong>Ergenler:</strong> Büyüme sırasında kas-tendon oranı dengesizliği</li>
                  <li>• <strong>Atletler:</strong> Koşucular, basketbolcular, voleybolcular</li>
                  <li>• <strong>Obezler:</strong> Artan eklem yükü</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Symptoms Section */}
          <section className="mb-12 bg-orange-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Belirtiler
            </h2>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-orange-800 mb-2 flex items-center gap-2">
                  <span>🔴</span> Diz Önü Ağrısı
                </h3>
                <p className="text-gray-700 text-sm">
                  <strong>Lokalizasyon:</strong> Patella çevresinde veya altında (retropatellar ağrı). 
                  Hastalar "patella arkasında" veya "dizin içinde" tarif eder.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-orange-800 mb-2 flex items-center gap-2">
                  <span>📈</span> Ağrıyı Artıran Aktiviteler
                </h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Merdiven çıkma/inme (özellikle inme)</li>
                  <li>• Çömelme (squat)</li>
                  <li>• Uzun süre oturma sonrası kalkma ("sinema belirtisi")</li>
                  <li>• Koşma (özellikle yokuş aşağı)</li>
                  <li>• Zıplama</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-orange-800 mb-2 flex items-center gap-2">
                  <span>🔊</span> Krepitasyon (Çıtırtı/Kırıkırtı)
                </h3>
                <p className="text-gray-700 text-sm">
                  Diz bükülüp açılırken patella altından gelen gıcırtı sesi. Genellikle ağrısızdır 
                  (sadece ses korkutucu ama zararsızdır).
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-orange-800 mb-2 flex items-center gap-2">
                  <span>💧</span> Şişlik (Hafif)
                </h3>
                <p className="text-gray-700 text-sm">
                  Belirgin efüzyon (eklem sıvısı) nadirdir. Varsa başka patolojiyi düşün (menisküs, bağ).
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-orange-800 mb-2 flex items-center gap-2">
                  <span>⚠️</span> Pseudo-Instabilite
                </h3>
                <p className="text-gray-700 text-sm">
                  "Dizim kayıyor" hissi. Gerçek instabilite değil, ağrıya sekonder kas inhibisyonu (quadriceps "çalışmıyor").
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
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-800 text-sm mb-1">1. Patellar Apprehension Test (Korku Testi)</h4>
                    <p className="text-sm text-gray-700">
                      Patella dışa doğru itilir. Hasta korkar/gerilir → pozitif test (lateral instabilite).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 text-sm mb-1">2. Patellar Grind Test (Clarke's Sign)</h4>
                    <p className="text-sm text-gray-700">
                      Patella aşağı itilir, hasta quadriceps kasarken ağrı olur → pozitif (patellofemoral ağrı).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 text-sm mb-1">3. Q-Açısı Ölçümü</h4>
                    <p className="text-sm text-gray-700">
                      Normal: Erkek 10-15°, Kadın 15-20°. Yüksekse lateral çekme artışı.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 text-sm mb-1">4. VMO Değerlendirmesi</h4>
                    <p className="text-sm text-gray-700">
                      Vastus Medialis Obliquus atrofisi gözle görülür (iç quadriceps çukur).
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-semibold text-blue-800 mb-3">📷 Görüntüleme</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Direkt Röntgen:</strong> Lateral ve Merchant (skyline) görünümü. Patella pozisyonu ve evresi değerlendirilir.</li>
                  <li>• <strong>MRI:</strong> Genellikle gereksiz. Kondromalazi, plika sendromu, menisküs şüphesinde.</li>
                  <li>• <strong>BT (Bilgisayarlı Tomografi):</strong> Cerrahi planlama (tibial tubercle osteotomy) için.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Treatment Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Tedavi Seçenekleri
            </h2>
            <p className="text-gray-700 mb-6">
              <strong>%90 hasta konservatif tedavi ile 6-12 haftada iyileşir.</strong> Cerrahi nadiren gerekir.
            </p>

            <div className="mb-8 bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="font-semibold text-green-800 mb-4">✅ Konservatif Tedavi (İlk Seçenek)</h3>
              
              <div className="space-y-5">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">1️⃣ RICE Protokolü (İlk 48 Saat)</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Rest:</strong> Ağrılı aktivitelerden kaçının (koşma, çömelme)</li>
                    <li>• <strong>Ice:</strong> 15-20 dk, günde 3-4 kez</li>
                    <li>• <strong>Compression:</strong> Patella bandı (strap) veya elastik bandaj</li>
                    <li>• <strong>Elevation:</strong> Bacağı yükseğe kaldırma</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">2️⃣ Aktivite Modifikasyonu</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Kaçının:</strong> Derin squat, merdiven inme, koşu (geçici)</li>
                    <li>• <strong>Alternatif:</strong> Yüzme, bisiklet (düşük dirençte), eliptik</li>
                    <li>• <strong>Kademeli Dönüş:</strong> Ağrı yoksa yavaşça aktiviteyi artırın (10% kural)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">3️⃣ Fizik Tedavi ve Egzersizler (KRİTİK!)</h4>
                  <div className="bg-white p-4 rounded-lg mt-2">
                    <h5 className="font-semibold text-green-700 mb-2">VMO Güçlendirme (En Önemli)</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Terminal Knee Extension:</strong> Son 30° açma (elastic band ile)</li>
                      <li>• <strong>Short Arc Quad:</strong> Rulo altında mini kaldırma</li>
                      <li>• <strong>Straight Leg Raise:</strong> Düz bacak kaldırma</li>
                      <li>• <strong>Wall Sit (Shallow):</strong> 30-60° açıda duvar squat</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg mt-2">
                    <h5 className="font-semibold text-green-700 mb-2">Esneklik Egzersizleri</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Hamstring germe (30 sn x 3, günde 2 kez)</li>
                      <li>• Quadriceps germe</li>
                      <li>• ITB (iliotibial band) germe (foam roller)</li>
                      <li>• Calf germe</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg mt-2">
                    <h5 className="font-semibold text-green-700 mb-2">Kalça Güçlendirme</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Clamshell:</strong> Gluteus medius (yan yatış, diz bükük, üst dizi aç)</li>
                      <li>• <strong>Side-lying Hip Abduction:</strong> Yan yatış bacak kaldırma</li>
                      <li>• <strong>Single-leg Bridge:</strong> Tek bacak köprü</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">4️⃣ Patellar Taping (McConnell Taping)</h4>
                  <p className="text-sm text-gray-700">
                    Patella mediyal (içe) doğru bantlanır. Kısa dönemde ağrı azaltır, VMO aktivasyonunu artırır.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">5️⃣ Ortezler</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Patella strap (band):</strong> Patellar tendona bası yapar, yükü azaltır</li>
                    <li>• <strong>Patella brace:</strong> Lateralizasyonu önler</li>
                    <li>• <strong>Ortopedik tabanlık:</strong> Pronasyonu düzeltir (yassı ayakta)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">6️⃣ İlaç Tedavisi</h4>
                  <p className="text-sm text-gray-700">
                    NSAİİ (ibuprofen, naproksen) - Kısa süreli (3-7 gün). Egzersiz + fizik tedavi asıldır.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="font-semibold text-red-800 mb-3">🏥 Cerrahi Tedavi (Dirençli Vakalar)</h3>
              <p className="text-gray-700 mb-4">
                <strong>İndikasyon:</strong> 6-12 ay konservatif tedaviye yanıtsızlık, günlük yaşam etkileniyor. 
                Genç hastalarda nadiren uygulanır.
              </p>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2 text-sm">1. Lateral Release</h4>
                  <p className="text-sm text-gray-700">
                    Lateral retinakulumun (dış bağlar) kesilmesi. Patella mediyal hareket eder. 
                    <strong> Başarı oranı tartışmalı (%50-70).</strong>
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2 text-sm">2. Tibial Tubercle Osteotomy</h4>
                  <p className="text-sm text-gray-700">
                    Patellar tendonun yapıştığı kemik parçası (tibial tubercle) mediyal ve/veya anteriye kaydırılır. 
                    <strong> Yüksek başarı (%80-90),</strong> ama invaziv.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2 text-sm">3. Artroskopi (Tanısal + Tedavi)</h4>
                  <p className="text-sm text-gray-700">
                    Plika eksizyonu, loose body (gevşek cisim) temizliği, kondromalazi tedavisi (mikrofraktür).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Prevention Section */}
          <section className="mb-12 bg-yellow-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Önleme Stratejileri
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-2">
                <span className="text-green-500">✓</span>
                <span><strong>Kademeli Aktivite Artışı:</strong> Koşu mesafesi/yoğunluğunu haftada %10'dan fazla artırmayın</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-500">✓</span>
                <span><strong>Düzenli Güçlendirme:</strong> Quadriceps (özellikle VMO) ve kalça egzersizleri haftada 2-3 gün</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-500">✓</span>
                <span><strong>Esneklik:</strong> Hamstring, quadriceps, ITB germe her gün</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-500">✓</span>
                <span><strong>Uygun Ayakkabı:</strong> İyi amortisman, 500-800 km'de değiştirme</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-500">✓</span>
                <span><strong>Yumuşak Zemin:</strong> Toprak/çim tercih edin (asfalt yerine)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-500">✓</span>
                <span><strong>Kilo Yönetimi:</strong> Sağlıklı BMI (18.5-24.9)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-500">✓</span>
                <span><strong>Çapraz Antrenman:</strong> Tek tip aktiviteden kaçının (koşu + yüzme + bisiklet)</span>
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
                  q: "Patellofemoral sendrom nedir?",
                  a: "Patellofemoral sendrom, diz kapağı (patella) ile uyluk kemiği (femur) arasındaki eklemde oluşan ağrı sendromudur. Runner's knee olarak da bilinir."
                },
                {
                  q: "Patellofemoral sendrom belirtileri nelerdir?",
                  a: "Diz önünde ağrı (özellikle merdiven çıkma/inme, çömelme, uzun süreli oturma sonrası), krepitasyon (çıtırtı sesi), şişlik ve instabilite hissi."
                },
                {
                  q: "Patellofemoral sendrom nasıl tedavi edilir?",
                  a: "Konservatif tedavi (fizik tedavi, VMO güçlendirme, RICE protokolü) ilk tercitir. %90 hasta konservatif tedavi ile iyileşir. Dirençli vakalarda cerrahi (lateral release) düşünülebilir."
                },
                {
                  q: "Patellofemoral sendrom ne kadar sürede iyileşir?",
                  a: "Çoğu hasta fizik tedavi ve egzersiz ile 6-12 haftada iyileşir. Kronik vakalarda 3-6 ay sürebilir. Spora dönüş 8-12 hafta sonra mümkündür."
                }
              ].map((faq, i) => (
                <details key={i} className="bg-gray-50 rounded-lg p-4 group">
                  <summary className="font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                    {faq.q}
                    <span className="text-pink-500 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-3 text-gray-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-pink-600 to-pink-800 text-white p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Diz Önünüz Ağrıyor mu?
            </h2>
            <p className="text-pink-100 mb-6">
              Uzman değerlendirme ve bireysel fizik tedavi programı için randevu alın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+905398416801"
                className="bg-white text-pink-700 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition"
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
                <span className="font-medium">1.</span> Crossley KM, et al. <em>"2016 Patellofemoral pain consensus statement from the 4th International Patellofemoral Pain Research Retreat, Manchester. Part 1: Terminology, definitions, clinical examination, natural history, patellofemoral osteoarthritis and patient-reported outcome measures."</em> Br J Sports Med. 2016;50(14):839-43.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=patellofemoral+pain+syndrome" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">2.</span> Willy RW, et al. <em>"Patellofemoral pain."</em> J Orthop Sports Phys Ther. 2019;49(9):CPG1-CPG95.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=patellofemoral+pain+syndrome" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">3.</span> Collins NJ, et al. <em>"Prognostic factors for patellofemoral pain: a multicentre observational analysis."</em> Br J Sports Med. 2013;47(4):227-33.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=patellofemoral+pain+syndrome" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">4.</span> Lack S, et al. <em>"Proximal muscle rehabilitation is effective for patellofemoral pain: a systematic review with meta-analysis."</em> Br J Sports Med. 2015;49(21):1365-76.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=patellofemoral+pain+syndrome" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">5.</span> Rathleff MS, et al. <em>"Patellofemoral pain in adolescence and adulthood: same same, but different?"</em> Sports Med. 2015;45(11):1545-57.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=patellofemoral+pain+syndrome" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
            </ol>
            
            <details className="mt-4">
              <summary className="cursor-pointer text-blue-600 font-medium hover:text-blue-800 flex items-center gap-2">
                <span>📖 Daha Fazla Kaynak Göster (5 ek referans)</span>
              </summary>
              <ol start={6} className="space-y-3 text-sm text-gray-700 mt-4 pt-4 border-t">
                <li>
                  <span className="font-medium">6.</span> Earl JE, Hoch AZ. <em>"A proximal strengthening program improves pain, function, and biomechanics in women with patellofemoral pain syndrome."</em> Am J Sports Med. 2011;39(1):154-63.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=patellofemoral+pain+syndrome" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">7.</span> Van der Heijden RA, et al. <em>"Biomechanics, symptoms and risk factors of patellofemoral pain: an individual participant data meta-analysis."</em> Br J Sports Med. 2019;53(18):1142-9.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=patellofemoral+pain+syndrome" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">8.</span> Callaghan MJ, Selfe J. <em>"Patellar taping for patellofemoral pain syndrome in adults."</em> Cochrane Database Syst Rev. 2012;(4):CD006717.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=patellofemoral+pain+syndrome" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">9.</span> Lankhorst NE, et al. <em>"Factors associated with patellofemoral pain and functional disability in young adult patients with long-term anterior knee pain: a case control study."</em> Phys Ther Sport. 2016;20:46-53.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=patellofemoral+pain+syndrome" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">10.</span> Barton CJ, et al. <em>"The 'Best Practice Guide to Conservative Management of Patellofemoral Pain': incorporating level 1 evidence with expert clinical reasoning."</em> Br J Sports Med. 2015;49(14):923-34.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=patellofemoral+pain+syndrome" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
              </ol>
            </details>
          </section>

          {/* Related Links */}
          <section className="mt-12">
            <h3 className="text-xl font-bold text-gray-800 mb-4">İlgili Konular</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Kondromalazi Patella", href: "/blog/kondromalazi" },
                { title: "Diz Ağrısı", href: "/blog/diz-agrisi" },
                { title: "Spor Yaralanmaları", href: "/spor-yaralanmalari" }
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <span className="text-pink-600 font-medium">{link.title} →</span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
