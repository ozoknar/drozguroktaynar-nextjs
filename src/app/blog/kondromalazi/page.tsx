import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kondromalazi Patella (Koşucu Dizi) Nedir? | Op. Dr. Özgür Oktay Nar",
  description: "Kondromalazi patella (koşucu dizi) nedenleri, belirtileri ve tedavisi. Diz kapağı kıkırdak yumuşaması tedavisi. Bursa ortopedi uzmanı.",
  keywords: ["kondromalazi patella", "koşucu dizi", "diz kapağı ağrısı", "kıkırdak yumuşaması", "patellofemoral sendrom", "bursa ortopedi"],
  openGraph: {
    title: "Kondromalazi Patella (Koşucu Dizi) Nedir?",
    description: "Kondromalazi patella tedavisi hakkında uzman bilgisi. Op. Dr. Özgür Oktay Nar - Bursa Ortopedi Uzmanı",
    type: "article",
    url: "https://www.ozguroktaynar.com/blog/kondromalazi",
    images: [
      {
        url: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2023/12/kondromalazi_patella.jpg",
        width: 1200,
        height: 800,
        alt: "Kondromalazi Patella Tedavisi",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Kondromalazi Patella (Koşucu Dizi) Nedir?",
  "description": "Kondromalazi Patella, diz kapağının (patella) altındaki kıkırdak dokusunun yumuşaması, incelmesi veya bozulması sonucu ortaya çıkan bir rahatsızlıktır.",
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
  "mainEntityOfPage": "https://www.ozguroktaynar.com/blog/kondromalazi",
  "image": "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2023/12/kondromalazi_patella.jpg"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Kondromalazi patella nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kondromalazi patella, diz kapağının altındaki kıkırdak dokusunun yumuşaması, incelmesi veya bozulması sonucu ortaya çıkan rahatsızlıktır. 'Koşucu dizi' olarak da bilinir."
      }
    },
    {
      "@type": "Question",
      "name": "Kondromalazi patella belirtileri nelerdir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Diz kapağı önünde/arkasında ağrı, uzun süre oturduktan sonra ağrı artışı, merdiven inip çıkma/çömelme sırasında ağrı, dizden kıtırtı/çıtırtı sesi ve şişlik görülür."
      }
    },
    {
      "@type": "Question",
      "name": "Kondromalazi patella nasıl tedavi edilir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dinlenme, aktivite düzenleme, fizik tedavi, quadriceps güçlendirme egzersizleri, antienflamatuar ilaçlar ve ortez kullanımı ile tedavi edilir. Ameliyatsız iyileşme mümkündür."
      }
    }
  ]
};

export default function KondromelaziPage() {
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
      <section className="relative bg-gradient-to-r from-lime-900 to-lime-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-lime-500 text-sm px-3 py-1 rounded-full mb-4">
                Diz Sağlığı
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Kondromalazi Patella
              </h1>
              <p className="text-xl text-lime-100 mb-6">
                Koşucu dizi: Diz kapağı kıkırdak yumuşaması nedenleri ve tedavisi
              </p>
              <a
                href="tel:+905398416801"
                className="inline-block bg-white text-lime-900 px-8 py-3 rounded-lg font-semibold hover:bg-lime-50 transition"
              >
                Randevu Al: 0539 841 68 01
              </a>
            </div>
            <div className="hidden md:block">
              <img
                src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2023/12/kondromalazi_patella.jpg"
                alt="Kondromalazi Patella Tedavisi"
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
              <strong>Kondromalazi Patella</strong>, diz kapağının (patella) altındaki kıkırdak dokusunun yumuşaması, 
              incelmesi veya bozulması sonucu ortaya çıkan bir rahatsızlıktır. Halk arasında sıklıkla <strong>"koşucu dizi"</strong> olarak bilinir.
            </p>
            <p className="text-gray-600">
              Bu durum, özellikle genç yetişkinlerde, sporcularda ve fiziksel olarak aktif bireylerde sıkça görülür. 
              Diz kapağının arkasındaki kıkırdak, normal şartlarda dizin hareketi sırasında femur kemiğiyle sorunsuz 
              bir şekilde temas eder. Ancak bu kayma hareketi bozulduğunda, kıkırdak yüzeyi tahriş olur ve ağrıya yol açar.
            </p>
          </section>

          {/* Causes Section */}
          <section className="mb-12 bg-gradient-to-r from-lime-50 to-green-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Kondromalazi Patella Neden Olur?
            </h2>
            <p className="text-gray-700 mb-4">
              Kondromalazi patella genellikle diz kapağının normal hizasından sapması sonucu oluşur. Diz kapağı, 
              diz eklemi oluğunda düzgün hareket etmediğinde, kıkırdak doku aşırı sürtünmeye maruz kalır.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              {[
                { icon: "🏃", title: "Tekrarlayan Hareketler", desc: "Koşma, zıplama, merdiven çıkma" },
                { icon: "💪", title: "Kas Dengesizlikleri", desc: "Quadriceps zayıflığı veya asimetri" },
                { icon: "⚠️", title: "Yanlış Teknik", desc: "Aşırı yüklenme ve hatalı egzersiz" },
                { icon: "🦴", title: "Yapısal Bozukluklar", desc: "Patella malalignment, patella alta" },
                { icon: "💥", title: "Travmalar", desc: "Dize direkt darbe veya düşme" },
                { icon: "👟", title: "Ayak Problemleri", desc: "Düz tabanlık, yanlış ayakkabı" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-lg flex items-start gap-3">
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
              Kondromalazi Patella Belirtileri
            </h2>
            <p className="text-gray-600 mb-4">
              Bu rahatsızlığın en belirgin semptomu diz kapağı çevresinde ağrıdır. Ağrı genellikle yavaş yavaş başlar ve zamanla artar.
            </p>
            <div className="space-y-3">
              {[
                { icon: "⚠", title: "Diz Kapağı Ağrısı", desc: "Önde veya arkada künt, sızlayıcı ağrı", color: "red" },
                { icon: "⚠", title: "Oturma Sonrası Ağrı", desc: "Uzun süre oturduktan sonra ayağa kalkarken artış", color: "orange" },
                { icon: "⚠", title: "Merdiven & Çömelme", desc: "İnip çıkarken, çömelirken veya doğrulurken ağrı", color: "yellow" },
                { icon: "⚠", title: "Kıtırtı/Çıtırtı", desc: "Dizden ses gelmesi (crepitus)", color: "blue" },
                { icon: "⚠", title: "Şişlik & Sertlik", desc: "Dizde şişlik, sıcaklık veya sertlik hissi", color: "purple" },
                { icon: "⚠", title: "Boşalma Hissi", desc: "Bazı vakalarda dizin boşalması veya kilitlenme", color: "pink" }
              ].map((item, i) => (
                <div key={i} className={`bg-${item.color}-50 border-l-4 border-${item.color}-500 p-4 rounded-r-lg flex items-start gap-3`}>
                  <span className={`text-${item.color}-500 text-2xl`}>{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Difference from Arthritis Section */}
          <section className="mb-12 bg-blue-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Kondromalazi ile Artrit Arasındaki Fark
            </h2>
            <p className="text-gray-700 mb-4">
              Kondromalazi patella sıklıkla artrit ile karıştırılır. Ancak iki durum farklı süreçleri ifade eder:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-100 p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">🔴 Artrit</h3>
                <p className="text-sm text-gray-700">Eklem yüzeyinde <strong>kalıcı</strong> kıkırdak kaybına yol açan dejeneratif hastalık</p>
              </div>
              <div className="bg-green-100 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">🟢 Kondromalazi</h3>
                <p className="text-sm text-gray-700">Kıkırdağın <strong>erken dönem</strong> yumuşaması ve yüzeysel hasarı. <strong>Geri dönüşümlü!</strong></p>
              </div>
            </div>
          </section>

          {/* Diagnosis Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Nasıl Teşhis Edilir?
            </h2>
            <p className="text-gray-600 mb-4">
              Teşhis için öncelikle ayrıntılı bir hasta öyküsü alınır. Ağrının tipi, süresi ve hangi aktivitelerle 
              tetiklendiği belirlenir.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">📋 Fizik Muayene</h3>
                <p className="text-sm text-gray-600">Diz kapağı hareketleri ve hassasiyet testi</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">📷 Röntgen</h3>
                <p className="text-sm text-gray-600">Kemik hizalamasını değerlendirme</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">🧲 MR</h3>
                <p className="text-sm text-gray-600">Kıkırdak hasarı ve yumuşama derecesi</p>
              </div>
            </div>
          </section>

          {/* Treatment Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Kondromalazi Patella Tedavisi
            </h2>
            <p className="text-gray-600 mb-6">
              Tedavi, genellikle <strong>cerrahi dışı yöntemlerle</strong> başlar. Amaç ağrıyı azaltmak, kıkırdak 
              yüzeyine binen yükü hafifletmek ve diz kapağının doğru hareketini sağlamaktır.
            </p>
            <div className="space-y-4">
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-green-800 mb-3">🛏️ 1. Dinlenme ve Aktivite Düzenleme</h3>
                <p className="text-gray-700">
                  Ağrıyı artıran egzersizlerden kaçınma. Bunun yerine, diz eklemine fazla yük bindirmeyen 
                  <strong> yüzme veya bisiklet</strong> gibi düşük etkili egzersizler önerilir.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">🏃 2. Fizik Tedavi ve Egzersiz</h3>
                <p className="text-gray-700 mb-3">
                  Kondromalazinin en etkili tedavi yöntemlerinden biri. Amaç, uyluk ve kalça kaslarını güçlendirerek 
                  diz kapağının eklem oluğunda düzgün hareket etmesini sağlamaktır.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <strong>Quadriceps kaslarını güçlendirici egzersizler</strong></li>
                  <li>• Kalça abdüktör kaslarını aktive eden çalışmalar</li>
                  <li>• Germe hareketleri (hamstring ve baldır kasları)</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">💊 3. İlaç Tedavisi</h3>
                <p className="text-gray-700">
                  Non-steroid antienflamatuar ilaçlar (NSAID) ağrıyı ve iltihabı azaltır. Bu ilaçlar kortizon içermez 
                  ve kısa süreli rahatlama sağlar.
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-yellow-800 mb-3">🦵 4. Destekleyici Ekipmanlar</h3>
                <p className="text-gray-700">
                  Diz kapağının hizalanmasını düzeltmek amacıyla özel ortezler veya dizlikler kullanılabilir. 
                  Kıkırdağa binen baskıyı azaltarak iyileşmeyi destekler.
                </p>
              </div>

              <div className="bg-teal-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-teal-800 mb-3">🧊 5. Soğuk ve Sıcak Uygulama</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <strong>Buz:</strong> Egzersiz sonrası ağrıyı hafifletmek için</li>
                  <li>• <strong>Sıcak kompres:</strong> Kas sertliğini gidermek için</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Surgery Section */}
          <section className="mb-12 bg-red-50 border-l-4 border-red-500 p-8 rounded-r-lg">
            <h2 className="text-2xl font-bold text-red-800 mb-4">
              Cerrahi Tedavi Gerekir mi?
            </h2>
            <p className="text-gray-700 mb-4">
              Kondromalazi patella genellikle <strong>ameliyatsız iyileşebilen</strong> bir rahatsızlıktır. 
              Cerrahi müdahale yalnızca konservatif yöntemlerden sonuç alınamayan, ileri evre kıkırdak hasarlarında düşünülür.
            </p>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Cerrahi Yöntemler:</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Artroskopik kıkırdak temizleme (debridman)</li>
                <li>• Lateral retinaküler gevşetme</li>
                <li>• Tibial tüberkül transferi (hizalama düzeltici)</li>
              </ul>
            </div>
          </section>

          {/* Prevention Section */}
          <section className="mb-12 bg-gradient-to-r from-green-50 to-lime-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Kondromalaziden Korunma Yolları
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Egzersiz öncesi ısınma ve esneme hareketleri",
                "Quadriceps ve kalça kaslarını düzenli güçlendirme",
                "Fazla kilolardan kaçınma",
                "Düzgün tabanlı ve destekleyici spor ayakkabısı",
                "Spor sonrası diz bölgesine soğuk uygulama",
                "Tekrarlayan zorlayıcı hareketlerden kaçınma"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 bg-white p-4 rounded-lg">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
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
                  q: "Kondromalazi patella nedir?",
                  a: "Kondromalazi patella, diz kapağının altındaki kıkırdak dokusunun yumuşaması, incelmesi veya bozulması sonucu ortaya çıkan rahatsızlıktır. 'Koşucu dizi' olarak da bilinir."
                },
                {
                  q: "Kondromalazi patella belirtileri nelerdir?",
                  a: "Diz kapağı önünde/arkasında ağrı, uzun süre oturduktan sonra ağrı artışı, merdiven inip çıkma/çömelme sırasında ağrı, dizden kıtırtı/çıtırtı sesi ve şişlik görülür."
                },
                {
                  q: "Kondromalazi patella nasıl tedavi edilir?",
                  a: "Dinlenme, aktivite düzenleme, fizik tedavi, quadriceps güçlendirme egzersizleri, antienflamatuar ilaçlar ve ortez kullanımı ile tedavi edilir. Ameliyatsız iyileşme mümkündür."
                }
              ].map((faq, i) => (
                <details key={i} className="bg-gray-50 rounded-lg p-4 group">
                  <summary className="font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                    {faq.q}
                    <span className="text-lime-500 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-3 text-gray-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-lime-600 to-lime-800 text-white p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Diz Kapağı Ağrınız mı Var?
            </h2>
            <p className="text-lime-100 mb-6">
              Kondromalazi patella tedavisi için erken müdahale önemlidir. Uzman değerlendirme için randevu alın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+905398416801"
                className="bg-white text-lime-700 px-8 py-3 rounded-lg font-semibold hover:bg-lime-50 transition"
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
                <span className="font-medium">1.</span> Dye SF. <em>"The pathophysiology of patellofemoral pain: a tissue homeostasis perspective."</em> Clin Orthop Relat Res. 2005;(436):100-10.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=chondromalacia+patella" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">2.</span> Witvrouw E, et al. <em>"Patellofemoral pain: consensus statement from the 3rd International Patellofemoral Pain Research Retreat."</em> Br J Sports Med. 2014;48(6):411-4.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=chondromalacia+patella" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">3.</span> Crossley KM, et al. <em>"2016 Patellofemoral pain consensus statement from the 4th International Patellofemoral Pain Research Retreat."</em> Br J Sports Med. 2016;50(14):839-43.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=chondromalacia+patella" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">4.</span> Boling M, et al. <em>"Gender differences in the incidence and prevalence of patellofemoral pain syndrome."</em> Scand J Med Sci Sports. 2010;20(5):725-30.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=chondromalacia+patella" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">5.</span> Fairbank JC, et al. <em>"Mechanical factors in the incidence of knee pain in adolescents and young adults."</em> J Bone Joint Surg Br. 1984;66(5):685-93.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=chondromalacia+patella" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
            </ol>
            
            <details className="mt-4">
              <summary className="cursor-pointer text-blue-600 font-medium hover:text-blue-800 flex items-center gap-2">
                <span>📖 Daha Fazla Kaynak Göster (5 ek referans)</span>
              </summary>
              <ol start={6} className="space-y-3 text-sm text-gray-700 mt-4 pt-4 border-t">
                <li>
                  <span className="font-medium">6.</span> Nakagawa TH, et al. <em>"The effect of additional strengthening of hip abductor and lateral rotator muscles in patellofemoral pain syndrome."</em> J Orthop Sports Phys Ther. 2008;38(1):12-8.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=chondromalacia+patella" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">7.</span> Fukuda TY, et al. <em>"Hip posterolateral musculature strengthening in sedentary women with patellofemoral pain syndrome."</em> J Orthop Sports Phys Ther. 2010;40(11):736-42.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=chondromalacia+patella" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">8.</span> Collins NJ, et al. <em>"Prognostic factors for patellofemoral pain: a multicentre observational analysis."</em> Br J Sports Med. 2013;47(4):227-33.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=chondromalacia+patella" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">9.</span> Barton CJ, et al. <em>"The 'Best Practice Guide to Conservative Management of Patellofemoral Pain': incorporating level 1 evidence with expert clinical reasoning."</em> Br J Sports Med. 2015;49(14):923-34.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=chondromalacia+patella" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">10.</span> Powers CM, et al. <em>"Patellofemoral pain: proximal, distal, and local factors."</em> J Orthop Sports Phys Ther. 2012;42(6):A1-54.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=chondromalacia+patella" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
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
                { title: "Diz Protezi", href: "/blog/diz-protezi" },
                { title: "Ameliyatsız Çözümler", href: "/ameliyatsiz-cozumler" }
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <span className="text-lime-600 font-medium">{link.title} →</span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
