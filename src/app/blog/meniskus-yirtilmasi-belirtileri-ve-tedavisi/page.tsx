import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menisküs Yırtılması Belirtileri ve Tedavisi | Op. Dr. Özgür Oktay Nar",
  description: "Menisküs yırtığı belirtileri, tanı yöntemleri ve tedavi seçenekleri. Konservatif tedavi, artroskopi, menisküs onarımı. Bursa ortopedi uzmanı.",
  keywords: ["menisküs yırtığı", "menisküs yırtılması", "menisküs ameliyatı", "diz artroskopisi", "menisküs onarımı", "bursa ortopedi"],
  openGraph: {
    title: "Menisküs Yırtılması Belirtileri ve Tedavisi",
    description: "Menisküs yırtığı tedavisi hakkında uzman bilgisi. Op. Dr. Özgür Oktay Nar - Bursa ortopedi Uzmanı",
    type: "article",
    url: "https://www.ozguroktaynar.com/blog/meniskus-yirtilmasi-belirtileri-ve-tedavisi",
    images: [
      {
        url: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/01/meniskus_yirtigi.jpg",
        width: 1200,
        height: 800,
        alt: "Menisküs Yırtığı",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Menisküs Yırtılması Belirtileri ve Tedavisi",
  "description": "Menisküs yırtığı, diz eklemindeki amortisör görevi gören kıkırdak yapının yırtılmasıdır. Travma veya dejenerasyon sonucu oluşur.",
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
  "mainEntityOfPage": "https://www.ozguroktaynar.com/blog/meniskus-yirtilmasi-belirtileri-ve-tedavisi",
  "image": "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/01/meniskus_yirtigi.jpg"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Menisküs yırtığı belirtileri nelerdir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Diz ağrısı (özellikle eklem çizgisinde), şişlik, kilitlenme (locking), çıtırtı sesi, eklem hareketinde kısıtlılık, derin çömelme zorluğu."
      }
    },
    {
      "@type": "Question",
      "name": "Menisküs yırtığı nasıl tedavi edilir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Küçük, asemptomatik yırtıklar konservatif tedavi (RICE, fizik tedavi). Semptomatik yırtıklar artroskopik cerrahi ile onarım veya parsiyel menisektomi."
      }
    },
    {
      "@type": "Question",
      "name": "Menisküs ameliyatı sonrası iyileşme süresi ne kadar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Parsiyel menisektomi: 2-4 hafta. Menisküs onarımı: 3-6 ay. Spora dönüş menisektomide 4-6 hafta, onarımda 4-6 ay sürer."
      }
    }
  ]
};

export default function MeniskusYirtilmasiPage() {
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
      <section className="relative bg-gradient-to-r from-cyan-900 to-cyan-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-cyan-500 text-sm px-3 py-1 rounded-full mb-4">
                Menisküs Yaralanması
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Menisküs Yırtılması
              </h1>
              <p className="text-xl text-cyan-100 mb-6">
                Belirtileri, tanı ve tedavi seçenekleri
              </p>
              <a
                href="tel:+905398416801"
                className="inline-block bg-white text-cyan-900 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition"
              >
                Randevu Al: 0539 841 68 01
              </a>
            </div>
            <div className="hidden md:block">
              <img
                src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/01/meniskus_yirtigi.jpg"
                alt="Menisküs Yırtığı"
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
              <strong>Menisküs yırtığı</strong>, diz ekleminde yer alan hilal şeklindeki fibrokartilaj yapının 
              yırtılmasıdır. <strong>En sık diz yaralanmalarından biridir.</strong> Hem genç sporcularda 
              (travmatik) hem de yaşlı bireylerde (dejeneratif) görülür.
            </p>
            <p className="text-gray-600">
              Menisküs, eklemin %50-70'lik yükünü taşır ve şok emici görevi yapar. Yırtık tedavi edilmezse 
              uzun dönemde <strong>erken osteoartrit</strong> riski artar.
            </p>
          </section>

          {/* Anatomy Section */}
          <section className="mb-12 bg-cyan-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Menisküs Anatomisi
            </h2>
            <p className="text-gray-700 mb-4">
              Diz ekleminde <strong>iki menisküs</strong> bulunur: Mediyal (iç) ve Lateral (dış).
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-cyan-800 mb-2">📍 Mediyal Menisküs</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Şekil:</strong> C-şekilli (daha geniş)</li>
                  <li>• <strong>Mobilite:</strong> Az (MCL'e yapışık)</li>
                  <li>• <strong>Yırtık Sıklığı:</strong> %75-80 (daha sık)</li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-cyan-800 mb-2">📍 Lateral Menisküs</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Şekil:</strong> O-şekilli (daha küçük)</li>
                  <li>• <strong>Mobilite:</strong> Daha hareketli</li>
                  <li>• <strong>Yırtık Sıklığı:</strong> %20-25 (daha az)</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 bg-white p-5 rounded-lg">
              <h3 className="font-semibold text-cyan-800 mb-2">🩸 Kan Dolaşımı Zonları</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Red Zone:</strong> Dış %10-25 → İyi kan dolaşımı → <span className="text-green-600">İyileşme mümkün</span></li>
                <li>• <strong>Red-White Zone:</strong> Orta → Sınırlı kan → Kısmi iyileşme</li>
                <li>• <strong>White Zone:</strong> İç %66 → Kan yok → <span className="text-red-600">İyileşme yok</span></li>
              </ul>
            </div>
          </section>

          {/* Types Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Menisküs Yırtığı Tipleri
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { 
                  icon: "🔴", 
                  title: "Longitudinal (Bucket-Handle)", 
                  desc: "Uzunlamasına yırtık. Merkezi parça 'sap' gibi eklemin ortasına kayar. Kilitlenmeye neden olur." 
                },
                { 
                  icon: "🟠", 
                  title: "Radial (Transverse)", 
                  desc: "Menisküs merkezi ciltten dışa doğru yırtık. En sık lateral menisküste." 
                },
                { 
                  icon: "🟡", 
                  title: "Horizontal (Cleavage)", 
                  desc: "Yatay düzlemde yırtık. Üst ve alt katman ayrılır. Dejeneratif yırtıklarda sık." 
                },
                { 
                  icon: "🟢", 
                  title: "Flap (Parrot-Beak)", 
                  desc: "Papağan gagası şeklinde yırtık. Hareket sırasında eklem içinde takılır." 
                },
                { 
                  icon: "🔵", 
                  title: "Complex (Karmaşık)", 
                  desc: "Birden fazla yırtık paterni bir arada. Genellikle dejeneratif." 
                },
                { 
                  icon: "🟣", 
                  title: "Root Tear (Kök Yırtığı)", 
                  desc: "Menisküsün tibiya bağlandığı kök bölgede yırtık. Ciddi, tam rezeksiyon gibi sonuç." 
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

          {/* Causes Section */}
          <section className="mb-12 bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Nedenler
            </h2>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg border-l-4 border-red-500">
                <h3 className="font-semibold text-red-800 mb-2">🏃 Travmatik Yırtık (Genç Hastalar)</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Ani dönme hareketi:</strong> Ayak yere sabitken vücut dönüyor (spor yaralanması)</li>
                  <li>• <strong>Derin çömelme:</strong> Ağır yük kaldırırken</li>
                  <li>• <strong>Direkt travma:</strong> Diz yan tarafına darbe</li>
                  <li>• <strong>ACL yırtığı ile birlikte:</strong> %50 vakada menisküs de yırtılır</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-lg border-l-4 border-yellow-500">
                <h3 className="font-semibold text-yellow-800 mb-2">⏳ Dejeneratif Yırtık (Yaşlı Hastalar)</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Yaşa bağlı yıpranma:</strong> 40+ yaş, menisküs zayıflar</li>
                  <li>• <strong>Osteoartrit:</strong> Kıkırdak kaybı menisküs yükünü artırır</li>
                  <li>• <strong>Minimal travma:</strong> Çömelme, merdiven gibi basit hareketler yırtığa neden olabilir</li>
                  <li>• <strong>Kötü prognoz:</strong> İyileşme yeteneği düşük (vaskülarizasyon azalmış)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Symptoms Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Belirtiler
            </h2>
            <div className="space-y-4">
              <div className="bg-red-50 p-6 rounded-xl">
                <h3 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                  <span>🔴</span> Eklem Çizgisi Ağrısı
                </h3>
                <p className="text-gray-700 text-sm">
                  <strong>Spesifik ağrı:</strong> İç veya dış eklem çizgisinde (mediyal veya lateral). 
                  Parmakla tam lokalize edilebilir. Aktivite ile artar.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                  <span>🔒</span> Kilitlenme (Locking)
                </h3>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>En karakteristik belirti.</strong> Bucket-handle yırtığında menisküs parçası eklem 
                  içine kayar → diz tam açılamaz. Hasta "dizim kilitlendi" der.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Gerçek kilitlenme:</strong> Mekanik blok, diz 15-20° eksik açılır</li>
                  <li>• <strong>Pseudo-locking:</strong> Ağrı nedeniyle tam açamama (mekanik engel yok)</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="font-semibold text-yellow-800 mb-3 flex items-center gap-2">
                  <span>💧</span> Şişlik (Efüzyon)
                </h3>
                <p className="text-gray-700 text-sm">
                  Travma sonrası 24-48 saat içinde diz şişer. Dejeneratif yırtıklarda hafif-orta şişlik.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <span>🔊</span> Çıtırtı/Takılma Hissi
                </h3>
                <p className="text-gray-700 text-sm">
                  Diz bükülüp açılırken "klik" sesi veya eklem içinde bir şeyin takıldığı hissi. 
                  Flap yırtıklarında sık.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                  <span>🚫</span> Hareket Kısıtlılığı
                </h3>
                <p className="text-gray-700 text-sm">
                  Derin çömelme, merdiven inme, çapraz oturma zorlaşır. Gerçek kilitlenme varsa tam ekstansiyon imkansız.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <span>📉</span> Kas Atrofisi
                </h3>
                <p className="text-gray-700 text-sm">
                  Kronik yırtıklarda quadriceps (özellikle VMO) zayıflar, uyluğun iç kısmı incilir.
                </p>
              </div>
            </div>
          </section>

          {/* Diagnosis Section */}
          <section className="mb-12 bg-indigo-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Tanı Yöntemleri
            </h2>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-indigo-800 mb-3">📋 Fizik Muayene</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>1. McMurray Testi:</strong> Diz bükük, tibia iç-dış rotasyonu + ekstansiyon sırasında "klik" → pozitif</p>
                  <p><strong>2. Apley Compression Test:</strong> Yüzüstü, diz 90°, rotasyon + aksiyel bası → ağrı → pozitif</p>
                  <p><strong>3. Thessaly Test:</strong> Tek bacak üzerinde 20° çömelme + iç-dış rotasyon → ağrı → pozitif (en hassas test %89)</p>
                  <p><strong>4. Eklem Çizgisi Hassasiyeti:</strong> Parmakla basıldığında ağrı (sensitivite %76, spesifite %29)</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-indigo-800 mb-3">📷 Direkt Röntgen</h3>
                <p className="text-sm text-gray-700">
                  Menisküs görülmez (radyolojik olarak). Amaç: Kırık, kireçlenme, eklem aralığı daralmasını değerlendirme.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-indigo-800 mb-3">🧲 MRI (Altın Standart)</h3>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Sensitivite %93, Spesifite %88.</strong> Yırtık tipini, lokasyonunu ve diğer yaralanmaları gösterir.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Grade 1-2:</strong> İntrameniskal sinyal artışı (yırtık yok, dejenerasyon)</li>
                  <li>• <strong>Grade 3:</strong> Sinyal menisküs yüzeyine ulaşıyor → yırtık</li>
                  <li>• Eşlik eden yaralanmalar: ACL, kıkırdak, kemik kontüzyonu</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-indigo-800 mb-3">🔬 Artroskopi (Tanısal + Tedavi)</h3>
                <p className="text-sm text-gray-700">
                  MRI şüpheliyse veya tedavi planlanıyorsa. Eklem içi direkt görüntüleme. %100 doğruluk.
                </p>
              </div>
            </div>
          </section>

          {/* Treatment Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Tedavi Seçenekleri
            </h2>

            <div className="mb-8 bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="font-semibold text-green-800 mb-4">✅ Konservatif Tedavi</h3>
              <p className="text-gray-700 mb-4">
                <strong>İndikasyonlar:</strong> Küçük ({'<'}10 mm), stable, asemptomatik yırtıklar. Dejeneratif yırtıklar (yaşlı, düşük aktivite). 
                %20-40 hasta konservatif tedavi ile semptomlardan kurtulur.
              </p>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">🧊 RICE Protokolü (İlk 72 Saat)</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Rest, Ice (15-20 dk, günde 4-6 kez), Compression, Elevation</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">💊 İlaç Tedavisi</h4>
                  <p className="text-sm text-gray-700">NSAİİ (ibuprofen, naproksen) - ağrı ve iltihap kontrolü (7-14 gün)</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">🦵 Fizik Tedavi</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Quadriceps güçlendirme (özellikle VMO)</li>
                    <li>• Hamstring egzersizleri</li>
                    <li>• ROM (range of motion) egzersizleri</li>
                    <li>• Propriosepsiyon (denge) eğitimi</li>
                    <li>• 4-6 hafta program</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">🚶 Aktivite Modifikasyonu</h4>
                  <p className="text-sm text-gray-700">
                    Derin çömelme, merdiven, koşudan kaçının. Düşük etkili egzersizler (yüzme, bisiklet) tercih edin.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="font-semibold text-red-800 mb-4">🏥 Artroskopik Cerrahi</h3>
              <p className="text-gray-700 mb-4">
                <strong>İndikasyonlar:</strong> Semptomatik yırtık (ağrı, kilitlenme, şişlik), konservatif tedaviye yanıtsızlık (6-12 hafta), genç aktif hasta.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-3">1️⃣ Parsiyel Menisektomi (En Sık)</h4>
                  <p className="text-gray-700 mb-3 text-sm">
                    <strong>White zone yırtığı</strong> (iyileşme yok), kompleks yırtık, dejeneratif yırtık. 
                    Sadece yırtık parça çıkarılır, sağlam doku <strong>maksimum korunur.</strong>
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Ameliyat:</strong> 30-60 dk, aynı gün taburcu</li>
                    <li>• <strong>Yük Verme:</strong> Hemen (tolere edebildiğince)</li>
                    <li>• <strong>Fizik Tedavi:</strong> 2-4 hafta</li>
                    <li>• <strong>Spora Dönüş:</strong> 4-6 hafta</li>
                    <li>• <strong>Risk:</strong> Uzun dönemde osteoartrit riski artar (%25 menisküs kaybında %50 kıkırdak kaybı 10 yılda)</li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-3">2️⃣ Menisküs Onarımı (Repair)</h4>
                  <p className="text-gray-700 mb-3 text-sm">
                    <strong>Red zone yırtığı</strong> (kan dolaşımı iyi), longitudinal yırtık, genç hasta ({'<'}40 yaş), akut yırtık.
                    <strong> Altın standart</strong> - menisküs korunur.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Teknik:</strong> All-inside, inside-out, outside-in (dikişler/dart ile)</li>
                    <li>• <strong>Ameliyat:</strong> 60-90 dk</li>
                    <li>• <strong>Yük Verme:</strong> Koltuk değneği ile 4-6 hafta (kısmi yük)</li>
                    <li>• <strong>ROM Kısıtlaması:</strong> İlk 6 hafta 90° üzeri fleksiyon yasak</li>
                    <li>• <strong>Fizik Tedavi:</strong> 3-6 ay</li>
                    <li>• <strong>Spora Dönüş:</strong> 4-6 ay</li>
                    <li>• <strong>Başarı Oranı:</strong> %70-90 (yaşa, yırtık lokasyonuna bağlı)</li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-3">3️⃣ Menisküs Transplantasyonu</h4>
                  <p className="text-gray-700 text-sm">
                    <strong>Total menisektomi sonrası</strong> (kadavra menisküsü). Nadir, genç ({'<'}50 yaş), kıkırdak hasarı az. 
                    Osteoartrit gelişimini yavaşlatır.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-3">4️⃣ Menisküs Kök Onarımı</h4>
                  <p className="text-gray-700 text-sm">
                    Posterior root yırtığı (menisküs fonksiyonunu tamamen kaybeder). Pullout sutür tekniği ile onarım.
                  </p>
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
                  <li>• Kronik ağrı</li>
                  <li>• Kıkırdak hasarı (bucket-handle yırtığı)</li>
                  <li>• Erken osteoartrit (10-15 yıl içinde)</li>
                  <li>• Eklem sertliği</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Cerrahi Sonrası:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Enfeksiyon (%0.5-1)</li>
                  <li>• DVT/PE (tromboz) (%1)</li>
                  <li>• Onarım başarısızlığı (re-tear %10-30)</li>
                  <li>• Sinir/damar hasarı (nadir)</li>
                </ul>
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
                  q: "Menisküs yırtığı belirtileri nelerdir?",
                  a: "Diz ağrısı (özellikle eklem çizgisinde), şişlik, kilitlenme (locking), çıtırtı sesi, eklem hareketinde kısıtlılık, derin çömelme zorluğu."
                },
                {
                  q: "Menisküs yırtığı nasıl tedavi edilir?",
                  a: "Küçük, asemptomatik yırtıklar konservatif tedavi (RICE, fizik tedavi). Semptomatik yırtıklar artroskopik cerrahi ile onarım veya parsiyel menisektomi."
                },
                {
                  q: "Menisküs ameliyatı sonrası iyileşme süresi ne kadar?",
                  a: "Parsiyel menisektomi: 2-4 hafta. Menisküs onarımı: 3-6 ay. Spora dönüş menisektomide 4-6 hafta, onarımda 4-6 ay sürer."
                },
                {
                  q: "Menisküs yırtığı ameliyatsız iyileşir mi?",
                  a: "Red zone (dış) yırtıklar kan dolaşımı olduğu için konservatif tedavi ile iyileşebilir. White zone yırtıklar iyileşmez, genellikle cerrahi gerekir."
                }
              ].map((faq, i) => (
                <details key={i} className="bg-gray-50 rounded-lg p-4 group">
                  <summary className="font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                    {faq.q}
                    <span className="text-cyan-500 group-open:rotate-180 transition-transform">▼</span>
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
          <section className="bg-gradient-to-r from-cyan-600 to-cyan-800 text-white p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Menisküs Sorununuz mu Var?
            </h2>
            <p className="text-cyan-100 mb-6">
              Uzman değerlendirme ve MRI yorumlaması için randevu alın. Erken tanı tedavi başarısını artırır.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+905398416801"
                className="bg-white text-cyan-700 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition"
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
                <span className="font-medium">1.</span> Englund M, et al. <em>"Incidental meniscal findings on knee MRI in middle-aged and elderly persons."</em> N Engl J Med. 2008;359(11):1108-15.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=meniscus+tear" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">2.</span> Beaufils P, et al. <em>"Surgical management of degenerative meniscus lesions: the 2016 ESSKA meniscus consensus."</em> Knee Surg Sports Traumatol Arthrosc. 2017;25(2):335-46.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=meniscus+tear" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">3.</span> Petty CA, Lubowitz JH. <em>"Does arthroscopic partial meniscectomy result in knee osteoarthritis? A systematic review with a minimum of 8 years' follow-up."</em> Arthroscopy. 2011;27(3):419-24.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=meniscus+tear" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">4.</span> Kopf S, et al. <em>"Management of traumatic meniscus tears: the 2019 ESSKA meniscus consensus."</em> Knee Surg Sports Traumatol Arthrosc. 2020;28(4):1177-94.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=meniscus+tear" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">5.</span> Paxton ES, et al. <em>"Meniscal repair versus partial meniscectomy: a systematic review comparing reoperation rates and clinical outcomes."</em> Arthroscopy. 2010;26(9):1275-88.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=meniscus+repair" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
            </ol>
            
            <details className="mt-4">
              <summary className="cursor-pointer text-blue-600 font-medium hover:text-blue-800 flex items-center gap-2">
                <span>📖 Daha Fazla Kaynak Göster (5 ek referans)</span>
              </summary>
              <ol start={6} className="space-y-3 text-sm text-gray-700 mt-4 pt-4 border-t">
                <li>
                  <span className="font-medium">6.</span> Katz JN, et al. <em>"Surgery versus physical therapy for a meniscal tear and osteoarthritis."</em> N Engl J Med. 2013;368(18):1675-84.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=meniscus+tear" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">7.</span> Lohmander LS, et al. <em>"The long-term consequence of anterior cruciate ligament and meniscus injuries: osteoarthritis."</em> Am J Sports Med. 2007;35(10):1756-69.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=meniscus+tear" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">8.</span> Verdonk R, et al. <em>"Meniscus allograft transplantation: long-term follow-up of medial and lateral replacements."</em> Am J Sports Med. 2006;34(9):1404-11.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=meniscus+transplant" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">9.</span> Forkel P, Petersen W. <em>"Posterior root tear fixation of the lateral meniscus combined with arthroscopic ACL double-bundle reconstruction: technical note of a transosseous fixation using the tibial PL tunnel."</em> Arch Orthop Trauma Surg. 2012;132(3):387-91.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=meniscus+root+tear" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">10.</span> Sihvonen R, et al. <em>"Arthroscopic partial meniscectomy versus sham surgery for a degenerative meniscal tear."</em> N Engl J Med. 2013;369(26):2515-24.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=meniscus+tear" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
              </ol>
            </details>
          </section>

          {/* Related Links */}
          <section className="mt-12">
            <h3 className="text-xl font-bold text-gray-800 mb-4">İlgili Konular</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Diz Artroskopisi", href: "/tedaviler/artroskopi" },
                { title: "Diz Burkulmasi", href: "/blog/diz-burkulmasi-belirtisi" },
                { title: "Diz Ağrısı", href: "/blog/diz-agrisi" }
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <span className="text-cyan-600 font-medium">{link.title} →</span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
