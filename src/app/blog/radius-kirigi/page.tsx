import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Radius Kırığı Nedir? Belirtileri ve Tedavisi | Op. Dr. Özgür Oktay Nar",
  description: "Radius kırığı nedenleri, belirtileri ve tedavi seçenekleri. El bileği kırıkları, Colles kırığı tedavisi. Bursa ortopedi uzmanı.",
  keywords: ["radius kırığı", "el bileği kırığı", "colles kırığı", "radius tedavisi", "el bileği travması", "bursa ortopedi"],
  openGraph: {
    title: "Radius Kırığı Nedir? Belirtileri ve Tedavisi",
    description: "Radius kırığı tedavisi hakkında uzman bilgisi. Op. Dr. Özgür Oktay Nar - Bursa Ortopedi Uzmanı",
    type: "article",
    url: "https://www.ozguroktaynar.com/blog/radius-kirigi",
    images: [
      {
        url: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/01/el_bilegi_kirigi.jpg",
        width: 1200,
        height: 800,
        alt: "Radius Kırığı Tedavisi",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Radius Kırığı Nedir? Belirtileri ve Tedavisi",
  "description": "Radius kırığı, özellikle düşme sonrası el bileğinde meydana gelen yaygın bir travmadır. Colles kırığı en sık görülen radius kırığı tipidir.",
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
  "mainEntityOfPage": "https://www.ozguroktaynar.com/blog/radius-kirigi",
  "image": "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/01/el_bilegi_kirigi.jpg"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Radius kırığı nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Radius kırığı, ön kolun dış tarafında yer alan radius kemiğinin kırılmasıdır. En sık el bileğine yakın distal uçta (Colles kırığı) meydana gelir."
      }
    },
    {
      "@type": "Question",
      "name": "Radius kırığı nasıl tedavi edilir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Stabil kırıklarda alçı veya atel ile konservatif tedavi yeterlidir. Deplase veya instabil kırıklarda cerrahi ile kapalı redüksiyon-telleme veya açık redüksiyon-plak vida uygulanır."
      }
    },
    {
      "@type": "Question",
      "name": "Radius kırığı iyileşme süresi ne kadar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ortalama 6-8 hafta kemik iyileşmesi için gereklidir. Fizik tedavi ile tam fonksiyonel iyileşme 3-6 ay sürebilir."
      }
    }
  ]
};

export default function RadiusKirigiPage() {
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
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-blue-500 text-sm px-3 py-1 rounded-full mb-4">
                El Bileği Travması
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Radius Kırığı Nedir?
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                El bileği kırıkları, belirtileri ve tedavi yöntemleri
              </p>
              <a
                href="tel:+905398416801"
                className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                Randevu Al: 0539 841 68 01
              </a>
            </div>
            <div className="hidden md:block">
              <img
                src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/01/el_bilegi_kirigi.jpg"
                alt="Radius Kırığı Tedavisi"
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
              <strong>Radius kırığı</strong>, ön kolda bulunan radius kemiğinin kırılmasıdır. 
              En yaygın kırık türlerinden biridir ve genellikle <strong>açık elle yere düşme</strong> sonucu 
              el bileğine yakın distal uçta (Colles kırığı) meydana gelir.
            </p>
            <p className="text-gray-600">
              Özellikle yaşlılarda osteoporoz nedeniyle, gençlerde ise yüksek enerjili travmalar sonucu 
              görülür. Erken tanı ve uygun tedavi ile tam fonksiyonel iyileşme mümkündür.
            </p>
          </section>

          {/* Anatomy Section */}
          <section className="mb-12 bg-blue-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Radius Kemiği Anatomisi
            </h2>
            <p className="text-gray-700 mb-4">
              Radius, ön kolda ulna ile birlikte bulunan iki kemikten biridir. <strong>Baş parmak tarafında</strong> 
              yer alır ve el bileğinin oluşumunda önemli rol oynar.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span className="text-blue-600">•</span>
                <span><strong>Proksimal uç:</strong> Dirsek eklemi ile eklem yapar</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600">•</span>
                <span><strong>Distal uç:</strong> El bileği eklemini oluşturur (Colles kırığı bölgesi)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600">•</span>
                <span><strong>Gövde:</strong> Ulna ile membran ile bağlanır</span>
              </li>
            </ul>
          </section>

          {/* Types Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Radius Kırığı Tipleri
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { 
                  icon: "🔴", 
                  title: "Colles Kırığı", 
                  desc: "En sık tip. Distal radius arkaya deplase olur. Düşme sonrası." 
                },
                { 
                  icon: "🟠", 
                  title: "Smith Kırığı", 
                  desc: "Ters Colles. Distal radius öne deplase olur. Nadir." 
                },
                { 
                  icon: "🟡", 
                  title: "Barton Kırığı", 
                  desc: "Eklem içi kırık-çıkık. Eklem yüzeyi etkilenir." 
                },
                { 
                  icon: "🟢", 
                  title: "Chauffeur Kırığı", 
                  desc: "Radius stiloid çıkıntısının kırığı." 
                },
                { 
                  icon: "🔵", 
                  title: "Galeazzi Kırığı", 
                  desc: "Radius gövdesi kırığı + DRUJ çıkığı." 
                },
                { 
                  icon: "🟣", 
                  title: "Radius Baş Kırığı", 
                  desc: "Dirsek seviyesinde. Düşme veya direkt travma." 
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
              Radius Kırığı Belirtileri
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">🔴 Şiddetli Ağrı</h3>
                <p className="text-sm text-gray-600">El bileğinde ani ve keskin ağrı, hareketle artar</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">💧 Şişlik ve Morarma</h3>
                <p className="text-sm text-gray-600">El bileğinde hızlı şişme, ekimoz (morluk)</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">📐 Deformite</h3>
                <p className="text-sm text-gray-600">"Çatal sırtı deformitesi" - el bileği anormal açı</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">🚫 Hareket Kaybı</h3>
                <p className="text-sm text-gray-600">El bileği hareket ettirememe, tutma güçsüzlüğü</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">⚡ Uyuşma</h3>
                <p className="text-sm text-gray-600">Parmakta karıncalanma (median sinir basısı)</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">🔊 Krepitasyon</h3>
                <p className="text-sm text-gray-600">Hareket sırasında çıtırtı veya kırıkırtı sesi</p>
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
                <p className="text-gray-700">
                  El bileğinde deformite, hassasiyet, şişlik ve hareket kısıtlılığı değerlendirilir. 
                  Sinir ve damar muayenesi yapılır.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-semibold text-blue-800 mb-3">📷 Direkt Röntgen</h3>
                <p className="text-gray-700">
                  AP ve lateral grafiler kırık tipini, deplasmanı ve eklem tutulumunu gösterir. 
                  Tanı için yeterlidir.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="font-semibold text-green-800 mb-3">🖥️ BT (Bilgisayarlı Tomografi)</h3>
                <p className="text-gray-700">
                  Eklem içi kırıklarda, parçalı kırıklarda cerrahi planlama için kullanılır.
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="font-semibold text-yellow-800 mb-3">🧲 MRI</h3>
                <p className="text-gray-700">
                  Ligament yaralanması, TFCC (triangular fibrocartilage complex) yırtığı şüphesinde istenir.
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
              <h3 className="font-semibold text-green-800 mb-3">✅ Konservatif Tedavi</h3>
              <p className="text-gray-700 mb-3">
                <strong>Stabil, deplase olmamış kırıklar</strong> için uygulanır:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2">
                  <span>•</span>
                  <span><strong>Kapalı redüksiyon:</strong> Anestezi altında kırık ucların yerine konması</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span><strong>Alçı/atel:</strong> 4-6 hafta kısa kol veya uzun kol alçı</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span><strong>Kontrol grafileri:</strong> 1., 2., 6. haftalarda redüksiyon kaybı kontrolü</span>
                </li>
              </ul>
            </div>

            <div className="mb-8 bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
              <h3 className="font-semibold text-orange-800 mb-3">🏥 Cerrahi Tedavi</h3>
              <p className="text-gray-700 mb-3">
                <strong>İndikasyonlar:</strong> Deplase kırık, eklem yüzü tutulumu, instabilite, açık kırık
              </p>
              
              <div className="space-y-4 mt-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">1️⃣ Kapalı Redüksiyon + Perkütan Pinning (Telleme)</h4>
                  <p className="text-sm text-gray-600">
                    Cilt altından K-telleri ile kırık sabitleştirilir. Minimal invaziv. 4-6 hafta sonra teller çıkarılır.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">2️⃣ Açık Redüksiyon + İnternal Fiksasyon (ORIF)</h4>
                  <p className="text-sm text-gray-600">
                    Volar plak-vida ile anatomik redüksiyon. Erken hareket mümkün. Altın standart tedavi.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">3️⃣ Eksternal Fiksatör</h4>
                  <p className="text-sm text-gray-600">
                    Yumuşak doku hasarı, açık kırık, parçalı kırıklarda geçici veya kesin tedavi.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="font-semibold text-blue-800 mb-3">🤸 Fizik Tedavi ve Rehabilitasyon</h3>
              <p className="text-gray-700 mb-3">
                Alçı/telleme sonrası el bileği sertliği önlemek için:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2">
                  <span>•</span>
                  <span>El ve parmak hareketleri (alçı içindeyken bile)</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>El bileği fleksiyon-ekstansiyon egzersizleri</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Pronasyon-supinasyon (avuç içi-dışı çevirme)</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Güçlendirme egzersizleri (8. haftadan sonra)</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Tam fonksiyonel iyileşme 3-6 ay sürer</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Complications Section */}
          <section className="mb-12 bg-red-50 border-l-4 border-red-500 p-8 rounded-r-lg">
            <h2 className="text-2xl font-bold text-red-800 mb-4">
              ⚠️ Komplikasyonlar
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Erken Komplikasyonlar:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Median sinir basısı (karpal tünel sendromu)</li>
                  <li>• Kompartman sendromu</li>
                  <li>• Tendon yaralanması</li>
                  <li>• Enfeksiyon (açık kırıklarda)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Geç Komplikasyonlar:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Malünyon (yanlış kaynama)</li>
                  <li>• Eklem sertliği</li>
                  <li>• Post-travmatik artrit</li>
                  <li>• Kompleks bölgesel ağrı sendromu (CRPS)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* When to See Doctor Section */}
          <section className="mb-12 bg-yellow-50 border-l-4 border-yellow-500 p-8 rounded-r-lg">
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">
              🚨 Acil Doktora Gidilmesi Gereken Durumlar
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span className="text-red-500">•</span>
                <span>Düşme sonrası el bileğinde şiddetli ağrı ve şişlik</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">•</span>
                <span>El bileğinde belirgin deformite (çatal sırtı görünümü)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">•</span>
                <span>Parmakta uyuşma veya hareket edememe</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">•</span>
                <span>El soğukluğu veya renk değişikliği (dolaşım sorunu)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">•</span>
                <span>Açık kırık (kemik ciltten görünüyor)</span>
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
                  q: "Radius kırığı nedir?",
                  a: "Radius kırığı, ön kolun dış tarafında yer alan radius kemiğinin kırılmasıdır. En sık el bileğine yakın distal uçta (Colles kırığı) meydana gelir."
                },
                {
                  q: "Radius kırığı nasıl tedavi edilir?",
                  a: "Stabil kırıklarda alçı veya atel ile konservatif tedavi yeterlidir. Deplase veya instabil kırıklarda cerrahi ile kapalı redüksiyon-telleme veya açık redüksiyon-plak vida uygulanır."
                },
                {
                  q: "Radius kırığı iyileşme süresi ne kadar?",
                  a: "Ortalama 6-8 hafta kemik iyileşmesi için gereklidir. Fizik tedavi ile tam fonksiyonel iyileşme 3-6 ay sürebilir."
                },
                {
                  q: "Colles kırığı nedir?",
                  a: "En sık görülen radius kırığı tipidir. Distal radius arkaya deplase olur ve 'çatal sırtı' deformitesine neden olur. Açık elle düşme sonucu oluşur."
                }
              ].map((faq, i) => (
                <details key={i} className="bg-gray-50 rounded-lg p-4 group">
                  <summary className="font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                    {faq.q}
                    <span className="text-blue-500 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-3 text-gray-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              El Bileğiniz mi Kırıldı?
            </h2>
            <p className="text-blue-100 mb-6">
              Acil değerlendirme ve uygun tedavi için hemen randevu alın. Geç tedavi komplikasyon riskini artırır.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+905398416801"
                className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
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
                <span className="font-medium">1.</span> Nellans KW, et al. <em>"The epidemiology of distal radius fractures."</em> Hand Clin. 2012;28(2):113-25.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=distal+radius+fracture+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">2.</span> Chung KC, Spilson SV. <em>"The frequency and epidemiology of hand and forearm fractures in the United States."</em> J Hand Surg Am. 2001;26(5):908-15.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=distal+radius+fracture+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">3.</span> Handoll HH, Madhok R. <em>"Closed reduction methods for treating distal radial fractures in adults."</em> Cochrane Database Syst Rev. 2003;(1):CD003763.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=distal+radius+fracture+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">4.</span> Arora R, et al. <em>"A prospective randomized trial comparing nonoperative treatment with volar locking plate fixation for displaced and unstable distal radial fractures in patients sixty-five years of age and older."</em> J Bone Joint Surg Am. 2011;93(23):2146-53.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=distal+radius+fracture+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">5.</span> Diaz-Garcia RJ, et al. <em>"A systematic review of outcomes and complications of treating unstable distal radius fractures in the elderly."</em> J Hand Surg Am. 2011;36(5):824-35.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=distal+radius+fracture+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
            </ol>
            
            <details className="mt-4">
              <summary className="cursor-pointer text-blue-600 font-medium hover:text-blue-800 flex items-center gap-2">
                <span>📖 Daha Fazla Kaynak Göster (5 ek referans)</span>
              </summary>
              <ol start={6} className="space-y-3 text-sm text-gray-700 mt-4 pt-4 border-t">
                <li>
                  <span className="font-medium">6.</span> Orbay JL, Fernandez DL. <em>"Volar fixation for dorsally displaced fractures of the distal radius: a preliminary report."</em> J Hand Surg Am. 2002;27(2):205-15.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=distal+radius+fracture+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">7.</span> Chung KC, et al. <em>"Variations in the use of internal fixation for distal radial fracture in the United States medicare population."</em> J Bone Joint Surg Am. 2011;93(23):2154-62.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=distal+radius+fracture+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">8.</span> Mellstrand Navarro C, et al. <em>"Treatment of radius or ulna fractures in the elderly: a systematic review covering effectiveness, safety, economic aspects and current practice."</em> PLoS One. 2019;14(3):e0214362.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=distal+radius+fracture+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">9.</span> MacDermid JC, et al. <em>"Patient rating of wrist pain and disability: a reliable and valid measurement tool."</em> J Orthop Trauma. 1998;12(8):577-86.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=distal+radius+fracture+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">10.</span> Costa ML, et al. <em>"UK DRAFFT: a randomised controlled trial of percutaneous fixation with Kirschner wires versus volar locking-plate fixation in the treatment of adult patients with a dorsally displaced fracture of the distal radius."</em> Health Technol Assess. 2015;19(17):1-124.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=distal+radius+fracture+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
              </ol>
            </details>
          </section>

          {/* Related Links */}
          <section className="mt-12">
            <h3 className="text-xl font-bold text-gray-800 mb-4">İlgili Konular</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "El Bileği Kırığı", href: "/blog/el-bilegi-kirigi" },
                { title: "Dirsek Kırığı", href: "/blog/dirsek-kirigi" },
                { title: "Travma Tedavisi", href: "/travma-tedavisi" }
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <span className="text-blue-600 font-medium">{link.title} →</span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
