import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kalça Anatomisi ve Minimal İnvaziv Kalça Protezi | Op. Dr. Özgür Oktay Nar",
  description: "Kalça eklemi anatomisi, kalça kireçlenmesi ve minimal invaziv total kalça protezi ameliyatı. Avantajları, iyileşme süreci. Bursa ortopedi uzmanı.",
  keywords: ["kalça anatomisi", "kalça protezi", "minimal invaziv kalça protezi", "kalça kireçlenmesi", "kalça ağrısı", "bursa ortopedi"],
  openGraph: {
    title: "Kalça Anatomisi ve Minimal İnvaziv Kalça Protezi",
    description: "Kalça eklemi ve modern kalça protezi yöntemleri. Op. Dr. Özgür Oktay Nar - Bursa Ortopedi Uzmanı",
    type: "article",
    url: "https://www.ozguroktaynar.com/blog/kalca-anatomisi-ve-minimal-invaziv-kalca-protezi",
    images: [
      {
        url: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/01/kalca_protezi.jpg",
        width: 1200,
        height: 800,
        alt: "Minimal İnvaziv Kalça Protezi",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Kalça Anatomisi ve Minimal İnvaziv Kalça Protezi",
  "description": "Kalça eklemi vücudun en önemli eklemlerinden biridir. Kalça kireçlenmesi durumunda modern tedavi seçeneği minimal invaziv total kalça protezidir.",
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
  "mainEntityOfPage": "https://www.ozguroktaynar.com/blog/kalca-anatomisi-ve-minimal-invaziv-kalca-protezi",
  "image": "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/01/kalca_protezi.jpg"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Kalça eklemi hangi kemiklerden oluşur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kalça eklemi, leğen kemiğinde yer alan asetabulum (yuva) ile uyluk kemiğinin başı olan femur başından (top) oluşur. Top-yuva tipi bir eklemdir."
      }
    },
    {
      "@type": "Question",
      "name": "Minimal invaziv kalça protezi nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Minimal invaziv kalça protezi, kaslara ve yumuşak dokulara daha az zarar veren küçük bir kesi ile yapılan kalça protezi ameliyatıdır. Hızlı iyileşme, daha az ağrı ve erken mobilizasyon sağlar."
      }
    },
    {
      "@type": "Question",
      "name": "Minimal invaziv kalça protezinin avantajları nelerdir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Daha küçük kesi, daha az kas hasarı, daha az ağrı, daha kısa hastanede kalış, daha hızlı iyileşme ve spora erken dönüş imkanı sunar."
      }
    }
  ]
};

export default function KalcaAnatomisiVeMinimalInvazivKalcaProteziPage() {
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
      <section className="relative bg-gradient-to-r from-red-900 to-red-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-red-500 text-sm px-3 py-1 rounded-full mb-4">
                Kalça Cerrahisi
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Minimal İnvaziv Kalça Protezi
              </h1>
              <p className="text-xl text-red-100 mb-6">
                Kalça anatomisi, kireçlenme ve modern protez teknikleri
              </p>
              <a
                href="tel:+905398416801"
                className="inline-block bg-white text-red-900 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition"
              >
                Randevu Al: 0539 841 68 01
              </a>
            </div>
            <div className="hidden md:block">
              <img
                src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/01/kalca_protezi.jpg"
                alt="Minimal İnvaziv Kalça Protezi"
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
              <strong>Kalça eklemi</strong>, vücudun en büyük ve en önemli eklemlerinden biridir. 
              Ağırlık taşıma ve yürüme gibi temel fonksiyonlar için hayati öneme sahiptir. 
              Yaşlanma, travma veya hastalıklar nedeniyle <strong>kalça kireçlenmesi (osteoartrit)</strong> gelişebilir.
            </p>
            <p className="text-gray-600">
              İleri evre kalça kireçlenmesinde, modern tedavi seçeneği <strong>minimal invaziv total kalça protezi</strong> ameliyatıdır. 
              Bu yöntem, geleneksel yöntemlere göre birçok avantaj sunar.
            </p>
          </section>

          {/* Anatomy Section */}
          <section className="mb-12 bg-red-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Kalça Eklem Anatomisi
            </h2>
            <p className="text-gray-700 mb-4">
              Kalça eklemi, <strong>top-yuva (ball-and-socket)</strong> tipinde bir eklemdir ve yüksek hareket 
              açıklığına sahiptir. Ana bileşenleri:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">🦴 Femur Başı</h3>
                <p className="text-sm text-gray-600">
                  Uyluk kemiğinin (femur) üst ucundaki yuvarlak yapı (top). Kan dolaşımı hassastır.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">🦴 Asetabulum</h3>
                <p className="text-sm text-gray-600">
                  Leğen kemiğinde (pelvis) yer alan çanak şeklindeki yuva. Femur başını karşılar.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">💧 Labrum</h3>
                <p className="text-sm text-gray-600">
                  Asetabulum kenarını saran fibrokartilaj halka. Eklem derinliğini artırır, stabilite sağlar.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">🔷 Eklem Kıkırdağı</h3>
                <p className="text-sm text-gray-600">
                  Eklem yüzeylerini örten pürüzsüz doku. Sürtünmeyi azaltır, hareket kolaylığı sağlar.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">💪 Bağlar ve Kaslar</h3>
                <p className="text-sm text-gray-600">
                  Eklem kapsülü, iliofemoral, pubofemoral, ischiofemoral bağlar ve güçlü kalça kasları 
                  (gluteus, hamstring, quadriceps) eklem stabilitesini ve hareketlerini sağlar.
                </p>
              </div>
            </div>
          </section>

          {/* Hip Osteoarthritis Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Kalça Kireçlenmesi (Koksartroz)
            </h2>
            <p className="text-gray-700 mb-6">
              Kalça kireçlenmesi (osteoartrit), kalça eklemindeki kıkırdağın aşınması ve hasar görmesiyle 
              ortaya çıkan dejeneratif bir hastalıktır. En sık 50 yaş üzeri bireylerde görülür.
            </p>

            <div className="space-y-4">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-semibold text-blue-800 mb-3">⚙️ Nedenleri</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Yaşlanma:</strong> Kıkırdak yıpranması</li>
                  <li>• <strong>Travma:</strong> Geçmiş kırık, çıkıklar</li>
                  <li>• <strong>Biyomekanik faktörler:</strong> FAI, gelişimsel kalça displazisi, Perthes hastalığı</li>
                  <li>• <strong>Enflamatuar artritler:</strong> Romatoid artrit</li>
                  <li>• <strong>Aseptik nekroz:</strong> Femur başında kanlanma kaybı</li>
                  <li>• <strong>Obezite:</strong> Eklem üzerine binen yükü artırır</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="font-semibold text-yellow-800 mb-3">📉 Belirtileri</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Kasık ağrısı:</strong> En sık belirti. Bazen dize veya popoya yayılır.</li>
                  <li>• <strong>Sabah tutukluğu:</strong> Kalkınca veya uzun oturma sonrası</li>
                  <li>• <strong>Hareket kısıtlılığı:</strong> Özellikle iç rotasyon ve fleksiyon</li>
                  <li>• <strong>Topallama:</strong> Ağrı nedeniyle yürüme bozukluğu</li>
                  <li>• <strong>Krepitasyon:</strong> Kalçada çıtırtı sesi</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="font-semibold text-green-800 mb-3">💊 Tedavi Yöntemleri (Konservatif)</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Kilo kontrolü:</strong> Eklem yükünü azaltır</li>
                  <li>• <strong>Fizik tedavi:</strong> Egzersiz, kas güçlendirme, germe</li>
                  <li>• <strong>İlaçlar:</strong> NSAİİ, ağrı kesiciler</li>
                  <li>• <strong>Enjeksiyonlar:</strong> Kortikosteroid, hyaluronik asit, PRP (erken evre)</li>
                  <li>• <strong>Yardımcı cihazlar:</strong> Baston, yürüteç</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Total Hip Arthroplasty Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Total Kalça Protezi (TKP)
            </h2>
            <p className="text-gray-700 mb-6">
              Konservatif tedaviye yanıt vermeyen, günlük yaşam aktivitelerini ciddi şekilde kısıtlayan 
              ileri evre kalça kireçlenmesinde <strong>total kalça protezi (TKP)</strong> ameliyatı altın standart tedavidir.
              Femur başı ve asetabulumdaki hasarlı eklem yüzeyleri metal ve polietilen/seramik implantlarla değiştirilir.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <h3 className="font-semibold text-yellow-800 mb-3">📈 TKP İndikasyonları</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• İleri evre kalça osteoartriti (Grade 3-4)</li>
                <li>• Konservatif tedaviye yanıtsız dinlenmede/gece ağrısı</li>
                <li>• Günlük yaşam aktivitelerinde ciddi kısıtlılık</li>
                <li>• Kalça hareket açıklığında belirgin azalma</li>
                <li>• Femur başı avasküler nekrozu, kalça kırıkları (yaşlılarda)</li>
              </ul>
            </div>
          </section>

          {/* Minimal Invasive THR Section */}
          <section className="mb-12 bg-indigo-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Minimal İnvaziv Kalça Protezi (MI-THR)
            </h2>
            <p className="text-gray-700 mb-4">
              Minimal invaziv kalça protezi ameliyatları, <strong>kaslara ve yumuşak dokulara daha az zarar veren</strong> 
              küçük kesilerle yapılır. Geleneksel yöntemlere göre birçok avantajı vardır.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-indigo-800 mb-3">🎯 Avantajları</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Küçük kesi:</strong> 8-10 cm (geleneksel 15-25 cm)</li>
                  <li>• <strong>Daha az kas hasarı:</strong> Kaslar kesilmez, aralarından geçilir</li>
                  <li>• <strong>Daha az kan kaybı:</strong> Transfüzyon ihtiyacı azalır</li>
                  <li>• <strong>Daha az ameliyat sonrası ağrı:</strong> Hızlı toparlanma</li>
                  <li>• <strong>Daha kısa hastanede kalış süresi:</strong> 1-3 gün</li>
                  <li>• <strong>Daha hızlı iyileşme:</strong> Erken mobilizasyon, koltuk değneği daha kısa süre kullanılır</li>
                  <li>• <strong>Kozmetik sonuç:</strong> Daha küçük yara izi</li>
                  <li>• <strong>Azalmış dislokasyon riski:</strong> Özellikle anterior yaklaşımlarda</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-indigo-800 mb-3">🔪 Yaklaşım Yöntemleri</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Minimal invaziv cerrahide farklı yaklaşımlar mevcuttur. Her birinin kendine 
                  göre avantajları ve dezavantajları vardır.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Anterior Direkt Yaklaşım (DAA - Direct Anterior Approach):</strong> Kaslar kesilmez, aralarından geçilir. En minimal invaziv.</li>
                  <li>• <strong>Anterolateral Yaklaşım:</strong> Modifiye Watson-Jones. Gluteus medius/minimus ayrılır.</li>
                  <li>• <strong>Posterior Yaklaşım:</strong> Geleneksel kesiye göre daha küçük. Dış rotatörler kısmen kesilir.</li>
                  <li>• <strong>Superior Yaklaşım:</strong> Gluteus medius tendonu kesilir (modifiye lateral).</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Recovery Section */}
          <section className="mb-12 bg-red-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Ameliyat Sonrası İyileşme Süreci
            </h2>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">📅 Hastanede Kalış ve Erken Mobilizasyon</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Ameliyat sonrası <strong>aynı gün veya 1. gün</strong> hasta ayağa kalkar ve yürütülür.</li>
                  <li>• Hastanede kalış süresi <strong>1-3 gün</strong> (geleneksel 5-7 gün).</li>
                  <li>• Ağrı kontrolü için epidural veya lokal anestezik bloklar kullanılır.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">🏋️ Fizik Tedavi ve Rehabilitasyon</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Ameliyat sonrası <strong>hemen başlar</strong>. Yürüme, kalça hareket açıklığı egzersizleri.</li>
                  <li>• <strong>Koltuk değneği/destekli yürüme:</strong> Genellikle 2-4 hafta. Hızlıca baston/desteksiz yürüme.</li>
                  <li>• <strong>Kas güçlendirme:</strong> Kalça abduktörleri ve ekstansörleri odaklanır.</li>
                  <li>• Tam iyileşme ve normal aktivitelere dönüş <strong>6-12 hafta</strong> sürer.</li>
                  <li>• Spora dönüş: Düşük etkili sporlar (yüzme, bisiklet) 3. aydan sonra.</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">⚠️ Dikkat Edilmesi Gerekenler</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• İlk 6 hafta kalça bükme (&gt;90°), içe çevirme ve bacak bacak üstüne atmaktan kaçının (dislokasyon riski).</li>
                  <li>• Ameliyat sonrası doktor tavsiyelerine harfiyen uyun.</li>
                  <li>• Düzenli kontroller ve röntgen takibi önemlidir.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Complications Section */}
          <section className="mb-12 bg-yellow-50 border-l-4 border-yellow-500 p-8 rounded-r-lg">
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">
              ⚠️ Olası Komplikasyonlar
            </h2>
            <p className="text-gray-700 mb-4">
              Minimal invaziv cerrahi, geleneksel cerrahiye göre bazı komplikasyon risklerini azaltırken, 
              bazı riskler devam etmektedir.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Genel Komplikasyonlar:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Enfeksiyon (%0.5-1)</li>
                  <li>• Derin ven trombozu (DVT) / Pulmoner emboli (PE)</li>
                  <li>• Sinir hasarı (siyatik, femoral)</li>
                  <li>• Damar hasarı (nadir)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Proteze Özgü Komplikasyonlar:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Protez çıkığı (dislokasyon) (%1-2)</li>
                  <li>• Protez gevşemesi (aseptik veya septik)</li>
                  <li>• Bacak uzunluk farkı (nadiren)</li>
                  <li>• Heterotopik ossifikasyon (eklem dışında kemik oluşumu)</li>
                  <li>• Periprostetik kırık (protez çevresi kırığı)</li>
                  <li>• Revizyon cerrahisi</li>
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
                  q: "Kalça eklemi hangi kemiklerden oluşur?",
                  a: "Kalça eklemi, leğen kemiğinde yer alan asetabulum (yuva) ile uyluk kemiğinin başı olan femur başından (top) oluşur. Top-yuva tipi bir eklemdir."
                },
                {
                  q: "Minimal invaziv kalça protezi nedir?",
                  a: "Minimal invaziv kalça protezi, kaslara ve yumuşak dokulara daha az zarar veren küçük bir kesi ile yapılan kalça protezi ameliyatıdır. Hızlı iyileşme, daha az ağrı ve erken mobilizasyon sağlar."
                },
                {
                  q: "Minimal invaziv kalça protezinin avantajları nelerdir?",
                  a: "Daha küçük kesi, daha az kas hasarı, daha az ağrı, daha kısa hastanede kalış, daha hızlı iyileşme ve spora erken dönüş imkanı sunar."
                },
                {
                  q: "Minimal invaziv kalça protezi sonrası ne zaman yürüyebilirim?",
                  a: "Ameliyat sonrası aynı gün veya 1. gün koltuk değneği desteği ile yürümeye başlanır. Genellikle 2-4 hafta içinde desteksiz yürüyebilir hale gelinir."
                }
              ].map((faq, i) => (
                <details key={i} className="bg-gray-50 rounded-lg p-4 group">
                  <summary className="font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                    {faq.q}
                    <span className="text-red-500 group-open:rotate-180 transition-transform">▼</span>
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
          <section className="bg-gradient-to-r from-red-600 to-red-800 text-white p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Kalça Ağrınızdan Kurtulun!
            </h2>
            <p className="text-red-100 mb-6">
              Minimal invaziv kalça protezi ile daha hızlı iyileşme ve ağrısız bir yaşam.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+905398416801"
                className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition"
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
                <span className="font-medium">1.</span> Goodman SB, et al. <em>"Total hip arthroplasty: state of the art."</em> J Bone Joint Surg Am. 2013;95(7):643-5.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=total+hip+arthroplasty" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">2.</span> Berend KR, et al. <em>"Rapid rehabilitation for total hip arthroplasty."</em> J Arthroplasty. 2008;23(7 Suppl):36-41.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=minimal+invasive+hip+replacement" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">3.</span> Kennon RE, et al. <em>"The anterior approach for total hip arthroplasty: an operative technique and a prospective study of 1000 consecutive cases."</em> J Arthroplasty. 2007;22(7 Suppl 3):2-10.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=direct+anterior+approach+hip" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">4.</span> Meneghini RM. <em>"Minimally invasive total hip arthroplasty: controversies, challenges, and solutions."</em> J Orthop Sci. 22(1):1-10.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=minimal+invasive+hip+replacement" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">5.</span> Mounir el K, et al. <em>"Mini-invasive total hip arthroplasty. Literature review and personal experience."</em> Orthop Traumatol Surg Res. 2014;100(3):327-32.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=minimal+invasive+hip+replacement" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
            </ol>
            
            <details className="mt-4">
              <summary className="cursor-pointer text-blue-600 font-medium hover:text-blue-800 flex items-center gap-2">
                <span>📖 Daha Fazla Kaynak Göster (5 ek referans)</span>
              </summary>
              <ol start={6} className="space-y-3 text-sm text-gray-700 mt-4 pt-4 border-t">
                <li>
                  <span className="font-medium">6.</span> Pincus D, et al. <em>"Does minimally invasive total hip arthroplasty improve length of stay and patient-reported outcomes? A systematic review and meta-analysis."</em> J Arthroplasty. 2018;33(10):3300-9.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=minimal+invasive+hip+replacement+outcomes" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">7.</span> Bozic KJ, et al. <em>"The epidemiology of revision total hip arthroplasty in the United States."</em> J Bone Joint Surg Am. 2009;91(1):128-35.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=hip+replacement+revision" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">8.</span> Parvizi J, et al. <em>"Prevention of surgical site infection in total joint arthroplasty."</em> J Bone Joint Surg Am. 2017;99(4):332-46.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=hip+arthroplasty+infection" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">9.</span> Healy WL, et al. <em>"Complications after total hip arthroplasty: the effect of surgical approach."</em> J Arthroplasty. 2008;23(7 Suppl 3):11-6.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=hip+replacement+complications" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">10.</span> Huddleston JI, et al. <em>"Risk factors for dislocation after primary total hip arthroplasty: a matched case-control study."</em> J Arthroplasty. 2008;23(7 Suppl 3):110-6.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=hip+dislocation+risk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
              </ol>
            </details>
          </section>

          {/* Related Links */}
          <section className="mt-12">
            <h3 className="text-xl font-bold text-gray-800 mb-4">İlgili Konular</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Kalça Protezi", href: "/blog/kalca-protezi" },
                { title: "Kalça Ağrısı", href: "/blog/kalca-agrisi" },
                { title: "Kalça Artroskopisi", href: "/tedaviler/kalca-artroskopisi" }
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <span className="text-red-600 font-medium">{link.title} →</span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
