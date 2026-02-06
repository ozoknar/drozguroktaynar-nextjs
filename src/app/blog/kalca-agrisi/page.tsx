import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kalça Ağrısı Nedir? Nedenleri ve Tedavisi | Op. Dr. Özgür Oktay Nar",
  description: "Kalça ağrısı nedenleri, belirtileri ve tedavi yöntemleri hakkında detaylı bilgi. Kalça kireçlenmesi, bursit ve travma tedavisi. Bursa ortopedi uzmanı.",
  keywords: ["kalça ağrısı", "kalça ağrısı nedenleri", "kalça kireçlenmesi", "bursit", "kasık ağrısı", "bursa ortopedi"],
  openGraph: {
    title: "Kalça Ağrısı Nedir? Nedenleri ve Tedavisi",
    description: "Kalça ağrısı tedavisi hakkında uzman bilgisi. Op. Dr. Özgür Oktay Nar - Bursa Ortopedi Uzmanı",
    type: "article",
    url: "https://www.ozguroktaynar.com/blog/kalca-agrisi",
    images: [
      {
        url: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/09/kalca_agrisi.jpg",
        width: 1200,
        height: 800,
        alt: "Kalça Ağrısı Tedavisi",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Kalça Ağrısı Nedir? Nedenleri ve Tedavisi",
  "description": "Kalça ağrısı, günlük yaşamı doğrudan etkileyen ve pek çok farklı sebeple ortaya çıkabilen yaygın bir ortopedik sorundur.",
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
  "mainEntityOfPage": "https://www.ozguroktaynar.com/blog/kalca-agrisi",
  "image": "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/09/kalca_agrisi.jpg"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Kalça ağrısı nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kalça ağrısı, kalça eklemi, kas, sinir veya kemik yapısında oluşan problemlerden kaynaklanan ve günlük yaşamı etkileyen ortopedik bir sorundur. Ağrı kasık, kalça dışı veya uyluk bölgesinde hissedilebilir."
      }
    },
    {
      "@type": "Question",
      "name": "Kalça ağrısının en sık nedenleri nelerdir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En sık nedenler arasında kireçlenme (osteoartrit), bursit, tendinit, kalça kırığı, osteonekroz, enfeksiyonlar ve bel fıtığı yer alır."
      }
    },
    {
      "@type": "Question",
      "name": "Kalça ağrısı nasıl tedavi edilir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tedavi nedene göre değişir. İlaç tedavisi, fizik tedavi, egzersiz, yaşam tarzı değişiklikleri ve gerekirse cerrahi müdahale uygulanabilir."
      }
    }
  ]
};

export default function KalcaAgrisiPage() {
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
                Kalça Sağlığı
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Kalça Ağrısı Nedir?
              </h1>
              <p className="text-xl text-red-100 mb-6">
                Kalça ağrısı nedenleri, belirtileri ve tedavi yöntemleri hakkında uzman bilgisi
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
                src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/09/kalca_agrisi.jpg"
                alt="Kalça Ağrısı Tedavisi"
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
              <strong>Kalça ağrısı</strong>, günlük yaşamı doğrudan etkileyen ve pek çok farklı sebeple ortaya 
              çıkabilen yaygın bir ortopedik sorundur. Kalça eklemi, vücudun ağırlığını taşıyan en önemli 
              eklemlerden biridir ve yürüme, oturma, koşma veya eğilme gibi hareketlerde aktif rol oynar.
            </p>
            <p className="text-gray-600">
              Kalça ağrısı her zaman tam olarak eklem üzerinde hissedilmez. Ağrı, kasık bölgesinde, kalçanın 
              dış kısmında, uylukta veya belden kalçaya yayılan şekilde hissedilebilir.
            </p>
          </section>

          {/* Pain Localization Section */}
          <section className="mb-12 bg-blue-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Ağrı Nerede Hissedilir?
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">🔹 Kasık Bölgesi</h3>
                <p className="text-sm text-gray-600">Genellikle kalça eklemi içindeki bir problemden kaynaklanır</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">🔹 Kalça Dışı</h3>
                <p className="text-sm text-gray-600">Kas, bağ veya tendon hasarı ile ilgilidir</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">🔹 Bel-Kalça</h3>
                <p className="text-sm text-gray-600">Bel fıtığı gibi omurga kaynaklı rahatsızlıklar</p>
              </div>
            </div>
          </section>

          {/* Causes Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Kalça Ağrısının Nedenleri
            </h2>
            <p className="text-gray-600 mb-4">
              Kalça ağrısı tek bir nedene bağlı değildir; yaş, yaşam tarzı, travmalar ve bazı sistemik hastalıklar 
              bu durumu tetikleyebilir.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: "🔴", title: "Kalça Kırığı", desc: "Özellikle yaşlılarda düşme sonucu" },
                { icon: "🟠", title: "Kireçlenme", desc: "Kıkırdak aşınması, osteoartrit" },
                { icon: "🟡", title: "Bursit", desc: "Sıvı keseciklerinin iltihaplanması" },
                { icon: "🟢", title: "Tendinit", desc: "Tekrarlayıcı hareketlerle tendon iltihabı" },
                { icon: "🔵", title: "Osteonekroz", desc: "Kan akışı azalması, kemik ölümü" },
                { icon: "🟣", title: "Enfeksiyonlar", desc: "Eklem veya çevresinde enfeksiyon" },
                { icon: "⚫", title: "Bel Fıtığı", desc: "Sinir sıkışması, siyatik ağrısı" },
                { icon: "🟤", title: "Yansıyan Ağrı", desc: "Başka bölgeden gelen ağrı" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
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
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Kalça Ağrısının Belirtileri
            </h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <p className="text-gray-700 mb-4">
                Ağrının türü ve şiddeti, nedenine göre değişir. En sık görülen belirtiler:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠</span>
                  <span>Kalça, kasık veya uyluk bölgesinde batma veya sızlama hissi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠</span>
                  <span>Otururken veya yürürken artan hareketle ilişkili ağrı</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠</span>
                  <span>Uzun süre hareketsiz kalınca hissedilen sertlik ve tutukluk</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠</span>
                  <span>Kalçada veya uylukta şişlik veya hassasiyet</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠</span>
                  <span>Yürüyüş bozukluğu veya topallama</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠</span>
                  <span>Belden kalçaya doğru yayılan sinir ağrısı</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Diagnosis Section */}
          <section className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Tanı Süreci
            </h2>
            <p className="text-gray-600 mb-4">
              Kalça ağrısının kaynağını belirlemek için ortopedi uzmanı, öncelikle hastanın tıbbi geçmişini 
              ve şikayetlerini dinler.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">📷 Röntgen</h3>
                <p className="text-sm text-gray-600">Kemik yapısındaki deformasyon veya kırıklar</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">🧲 MR</h3>
                <p className="text-sm text-gray-600">Kas, bağ, tendon ve sinir dokularındaki sorunlar</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">🔬 Kan Testleri</h3>
                <p className="text-sm text-gray-600">Enfeksiyon veya iltihap varlığı</p>
              </div>
            </div>
          </section>

          {/* Treatment Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Tedavi Yöntemleri
            </h2>
            <div className="space-y-4">
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <span>💊</span> 1. İlaç Tedavisi
                </h3>
                <p className="text-gray-700">
                  Antiinflamatuar ilaçlar (ibuprofen, naproksen) ağrıyı ve iltihabı azaltır. 
                  Kas gevşeticiler eklem çevresindeki kas spazmlarını hafifletir.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                  <span>🏃</span> 2. Fizik Tedavi ve Egzersiz
                </h3>
                <p className="text-gray-700">
                  Fizyoterapi, kasları güçlendirmek ve eklem hareketliliğini korumak açısından oldukça önemlidir. 
                  Hafif esneme ve denge egzersizleri kalça eklemini destekler.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                  <span>🧊</span> 3. Soğuk ve Sıcak Uygulama
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Buz:</strong> Akut ağrılarda günde 3-4 kez, 15'er dakika</li>
                  <li>• <strong>Sıcak Kompres:</strong> Kronik ağrılarda kasları gevşetmek için</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="font-semibold text-yellow-800 mb-3 flex items-center gap-2">
                  <span>🚶</span> 4. Yaşam Tarzı Değişiklikleri
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Fazla kilolardan kurtulmak eklem üzerindeki baskıyı azaltır</li>
                  <li>• Uzun süre oturmak, ağır kaldırmak ve ani hareketlerden kaçının</li>
                  <li>• Düzenli yürüyüş veya yüzme gibi düşük etkili egzersizler</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-xl">
                <h3 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                  <span>🏥</span> 5. Cerrahi Müdahale
                </h3>
                <p className="text-gray-700">
                  Ağrı şiddetli ve kalıcıysa, kırık, ciddi kireçlenme veya osteonekroz durumlarında 
                  kalça protezi ameliyatı gibi cerrahi yöntemler önerilebilir.
                </p>
              </div>
            </div>
          </section>

          {/* When to See Doctor Section */}
          <section className="mb-12 bg-red-100 border-l-4 border-red-600 p-6 rounded-r-lg">
            <h2 className="text-2xl font-bold text-red-800 mb-4">
              ⚠️ Ne Zaman Ciddiye Alınmalı?
            </h2>
            <p className="text-gray-700 mb-4">
              Aşağıdaki durumlarda zaman kaybetmeden bir ortopedi uzmanına başvurulması gerekir:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Ani ve şiddetli kalça ağrısı</li>
              <li>• Kalça bölgesinde şekil bozukluğu veya şişlik</li>
              <li>• Ağrının bacaklara yayılması</li>
              <li>• Yürürken veya ayakta dururken dengenin bozulması</li>
              <li>• İdrar veya dışkı kontrolünde güçlük</li>
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
                  q: "Kalça ağrısı nedir?",
                  a: "Kalça ağrısı, kalça eklemi, kas, sinir veya kemik yapısında oluşan problemlerden kaynaklanan ve günlük yaşamı etkileyen ortopedik bir sorundur. Ağrı kasık, kalça dışı veya uyluk bölgesinde hissedilebilir."
                },
                {
                  q: "Kalça ağrısının en sık nedenleri nelerdir?",
                  a: "En sık nedenler arasında kireçlenme (osteoartrit), bursit, tendinit, kalça kırığı, osteonekroz, enfeksiyonlar ve bel fıtığı yer alır."
                },
                {
                  q: "Kalça ağrısı nasıl tedavi edilir?",
                  a: "Tedavi nedene göre değişir. İlaç tedavisi, fizik tedavi, egzersiz, yaşam tarzı değişiklikleri ve gerekirse cerrahi müdahale uygulanabilir."
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

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-red-600 to-red-800 text-white p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Kalça Ağrınız mı Var?
            </h2>
            <p className="text-red-100 mb-6">
              Erken tanı ve tedavi için hemen randevu alın. Uzman değerlendirme ile doğru çözüm.
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
                <span className="font-medium">1.</span> Lespasio MJ, et al. <em>"Hip Osteoarthritis: A Primer."</em> Perm J. 2018;22:17-084.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/29035179/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 29035179</a>
              </li>
              <li>
                <span className="font-medium">2.</span> Wilson JJ, Furukawa M. <em>"Evaluation of the patient with hip pain."</em> Am Fam Physician. 2014;89(1):27-34.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/24444505/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 24444505</a>
              </li>
              <li>
                <span className="font-medium">3.</span> Schmitt B, et al. <em>"Trochanteric bursitis and tendinitis."</em> BMJ. 2012;344:e3144.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/22611174/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 22611174</a>
              </li>
              <li>
                <span className="font-medium">4.</span> Kahlenberg CA, et al. <em>"Hip arthroscopy for acute traumatic posterior hip dislocation."</em> J Bone Joint Surg Am. 2014;96(19):e166.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/25274797/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 25274797</a>
              </li>
              <li>
                <span className="font-medium">5.</span> Mont MA, et al. <em>"Non-traumatic avascular necrosis of the femoral head."</em> J Bone Joint Surg Am. 1995;77(3):459-74.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/7890797/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 7890797</a>
              </li>
            </ol>
            
            <details className="mt-4">
              <summary className="cursor-pointer text-blue-600 font-medium hover:text-blue-800 flex items-center gap-2">
                <span>📖 Daha Fazla Kaynak Göster (5 ek referans)</span>
              </summary>
              <ol start={6} className="space-y-3 text-sm text-gray-700 mt-4 pt-4 border-t">
                <li>
                  <span className="font-medium">6.</span> Tibor LM, Sekiya JK. <em>"Differential diagnosis of pain around the hip joint."</em> Arthroscopy. 2008;24(12):1407-21.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/19038713/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 19038713</a>
                </li>
                <li>
                  <span className="font-medium">7.</span> Byrd JWT, Jones KS. <em>"Diagnostic accuracy of clinical assessment, magnetic resonance imaging, magnetic resonance arthrography, and intra-articular injection in hip arthroscopy patients."</em> Am J Sports Med. 2004;32(7):1668-74.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/15494331/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 15494331</a>
                </li>
                <li>
                  <span className="font-medium">8.</span> Strauss EJ, et al. <em>"The evaluation and management of muscle injuries."</em> Am J Sports Med. 2011;39(8):1813-26.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/21737834/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 21737834</a>
                </li>
                <li>
                  <span className="font-medium">9.</span> Seidman AJ, et al. <em>"Femoroacetabular impingement and the effect of aging on cartilage health in the hip joint: a review."</em> PM R. 2017;9(9S2):S79-S89.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/28942908/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 28942908</a>
                </li>
                <li>
                  <span className="font-medium">10.</span> Harris WH. <em>"Etiology of osteoarthritis of the hip."</em> Clin Orthop Relat Res. 1986;(213):20-33.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/3780093/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 3780093</a>
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
                { title: "Kalça Artroskopisi", href: "/blog/kalca-artroskopisi" },
                { title: "Ameliyatsız Çözümler", href: "/ameliyatsiz-cozumler" }
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
