import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Omuz Kireçlenmesi Nedir? Belirtileri ve Tedavisi | Op. Dr. Özgür Oktay Nar",
  description: "Omuz kireçlenmesi (osteoartrit) nedenleri, belirtileri ve tedavi yöntemleri. Fizik tedavi, ilaç ve cerrahi seçenekler. Bursa ortopedi uzmanı.",
  keywords: ["omuz kireçlenmesi", "omuz osteoartrit", "omuz ağrısı", "omuz protezi", "dejeneratif artrit", "bursa ortopedi"],
  openGraph: {
    title: "Omuz Kireçlenmesi Nedir? Belirtileri ve Tedavisi",
    description: "Omuz kireçlenmesi tedavisi hakkında uzman bilgisi. Op. Dr. Özgür Oktay Nar - Bursa Ortopedi Uzmanı",
    type: "article",
    url: "https://www.ozguroktaynar.com/blog/omuz-kireclenmesi",
    images: [
      {
        url: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/05/omuz_kireclenmesi.jpg",
        width: 1200,
        height: 800,
        alt: "Omuz Kireçlenmesi Tedavisi",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Omuz Kireçlenmesi Nedir? Belirtileri ve Tedavisi",
  "description": "Omuz kireçlenmesi, omuz ekleminde yer alan kıkırdak dokusunun zamanla aşınması veya hasar görmesi sonucu ortaya çıkan bir eklem hastalığıdır.",
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
  "mainEntityOfPage": "https://www.ozguroktaynar.com/blog/omuz-kireclenmesi",
  "image": "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/05/omuz_kireclenmesi.jpg"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Omuz kireçlenmesi nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Omuz kireçlenmesi, omuz eklemindeki kıkırdak dokusunun zamanla aşınması veya hasar görmesi sonucu ortaya çıkan eklem hastalığıdır (osteoartrit). Ağrı ve hareket kısıtlılığına neden olur."
      }
    },
    {
      "@type": "Question",
      "name": "Omuz kireçlenmesinin belirtileri nelerdir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Omuzda kalıcı ağrı, eklem sertliği, hareket kısıtlılığı, şişlik, hareket sırasında ses/tıkırtı ve sabahları tutukluk hissi gibi belirtiler görülür."
      }
    },
    {
      "@type": "Question",
      "name": "Omuz kireçlenmesi nasıl tedavi edilir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fizik tedavi, egzersiz, anti-enflamatuar ilaçlar, enjeksiyon tedavileri ve ileri evrelerde omuz protezi (artroplasti) gibi cerrahi yöntemler uygulanır."
      }
    }
  ]
};

export default function OmuzKireclenmesiPage() {
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
      <section className="relative bg-gradient-to-r from-amber-900 to-amber-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-amber-500 text-sm px-3 py-1 rounded-full mb-4">
                Omuz Sağlığı
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Omuz Kireçlenmesi Nedir?
              </h1>
              <p className="text-xl text-amber-100 mb-6">
                Omuz kireçlenmesi (osteoartrit) nedenleri, belirtileri ve tedavi yöntemleri
              </p>
              <a
                href="tel:+905398416801"
                className="inline-block bg-white text-amber-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition"
              >
                Randevu Al: 0539 841 68 01
              </a>
            </div>
            <div className="hidden md:block">
              <img
                src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/05/omuz_kireclenmesi.jpg"
                alt="Omuz Kireçlenmesi Tedavisi"
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
              <strong>Omuz kireçlenmesi</strong>, omuz ekleminde yer alan kıkırdak dokusunun zamanla aşınması 
              veya hasar görmesi sonucu ortaya çıkan bir eklem hastalığıdır. Kıkırdak, eklemdeki kemiklerin 
              birbirine sürtünmesini engelleyen bir yastık görevi görür.
            </p>
            <p className="text-gray-600">
              Bu dokunun yıpranması durumunda, kemikler doğrudan birbirine temas eder ve bu durum ağrı, 
              hareket kısıtlılığı ve iltihaplanmaya neden olur. Kireçlenme genellikle yaşa bağlı gelişse de, 
              omuz bölgesine alınan darbeler, tekrarlayan hareketler veya genetik faktörler de bu süreci hızlandırabilir.
            </p>
          </section>

          {/* Types Section */}
          <section className="mb-12 bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Omuz Kireçlenmesi Çeşitleri
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-800 mb-3">
                  1️⃣ Dejeneratif (Primer) Kireçlenme
                </h3>
                <p className="text-gray-700">
                  Yaşlanma ile birlikte eklem kıkırdağının doğal olarak yıpranması sonucu ortaya çıkar. 
                  Zamanla kıkırdak incelir, kemikler sürtünmeye başlar ve ağrı oluşur.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">
                  2️⃣ Romatoid (Sekonder) Kireçlenme
                </h3>
                <p className="text-gray-700">
                  Bağışıklık sisteminin eklem dokularına saldırdığı otoimmün bir hastalıktır. Sinovyum adı verilen 
                  eklem zarında iltihap gelişir, bu da şişlik, ağrı ve şekil bozukluğuna neden olur.
                </p>
              </div>
            </div>
          </section>

          {/* Symptoms Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Omuz Kireçlenmesinin Belirtileri
            </h2>
            <p className="text-gray-600 mb-4">
              Omuz kireçlenmesi yavaş ilerleyen bir hastalıktır ve belirtiler genellikle zamanla artar.
            </p>
            <div className="space-y-3">
              {[
                { icon: "⚠", title: "Kalıcı Ağrı", desc: "Omuzda kalıcı veya aralıklı ağrı hissi", color: "red" },
                { icon: "⚠", title: "Eklem Sertliği", desc: "Hareket kısıtlılığı ve tutukluk", color: "orange" },
                { icon: "⚠", title: "Şişlik", desc: "Eklemde şişlik ve sıcaklık hissi", color: "yellow" },
                { icon: "⚠", title: "Ses/Tıkırtı", desc: "Omuzu hareket ettirirken ses duyulması", color: "blue" },
                { icon: "⚠", title: "Sabah Tutukluğu", desc: "Sabahları omuzda yoğun tutukluk", color: "purple" }
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

          {/* Diagnosis Section */}
          <section className="mb-12 bg-blue-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Tanı Süreci
            </h2>
            <p className="text-gray-700 mb-4">
              Tanı koymak için öncelikle detaylı bir hasta öyküsü alınır ve fizik muayene yapılır.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">📷 Röntgen</h3>
                <p className="text-sm text-gray-600">Kemik çıkıntıları ve eklem boşluğu</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">🖥️ BT</h3>
                <p className="text-sm text-gray-600">Bilgisayarlı Tomografi ile detay</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">🧲 MRG</h3>
                <p className="text-sm text-gray-600">Kıkırdak incelmesi değerlendirmesi</p>
              </div>
            </div>
            <div className="mt-4 p-4 bg-blue-100 rounded-lg">
              <p className="text-sm text-blue-800">
                💡 Bu görüntüleme yöntemleri sayesinde kıkırdak incelmesi, kemik çıkıntıları ve eklem 
                boşluğundaki daralma net şekilde görülebilir.
              </p>
            </div>
          </section>

          {/* Treatment Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Omuz Kireçlenmesi Tedavisi
            </h2>
            <p className="text-gray-600 mb-6">
              Tedavide amaç, ağrıyı azaltmak, hareket kabiliyetini korumak ve yaşam kalitesini artırmaktır. 
              Erken evrelerde istirahat, fizik tedavi ve anti-enflamatuar ilaçlar etkili olurken, ileri evrelerde 
              cerrahi yöntemler gündeme gelebilir.
            </p>
            <div className="space-y-4">
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <span>🏃</span> 1. Fizik Tedavi ve Egzersiz
                </h3>
                <p className="text-gray-700">
                  Kas gücünü artırır, eklem hareketliliğini korur. Düzenli egzersizler ile omuz kasları 
                  güçlendirilir ve hareket açıklığı artırılır.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                  <span>💊</span> 2. İlaç Tedavisi
                </h3>
                <p className="text-gray-700">
                  Ağrı ve enflamasyonu azaltmak için anti-enflamatuar ilaçlar (ibuprofen, naproksen gibi) 
                  doktor kontrolünde kullanılır.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                  <span>💉</span> 3. Enjeksiyon Tedavileri
                </h3>
                <p className="text-gray-700 mb-2">
                  Kortizon veya hyaluronik asit enjeksiyonları ağrıyı hafifletebilir.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>Kortizon:</strong> Güçlü anti-enflamatuar etki</li>
                  <li>• <strong>Hyaluronik Asit:</strong> Eklem yağlanması ve koruma</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-xl">
                <h3 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                  <span>🏥</span> 4. Cerrahi Tedavi
                </h3>
                <p className="text-gray-700">
                  Kıkırdak hasarının ileri olduğu durumlarda <strong>omuz protezi (artroplasti)</strong> gerekebilir. 
                  Cerrahi ile hasarlı eklem yüzeyleri yapay implantlarla değiştirilir.
                </p>
              </div>
            </div>
          </section>

          {/* Treatment Goals */}
          <section className="mb-12 bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              💡 Tedavi Hedefleri
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: "✓", title: "Ağrı Azaltma", desc: "Kronik ağrının kontrolü" },
                { icon: "✓", title: "Hareket Koruma", desc: "Eklem hareketliliğini sürdürme" },
                { icon: "✓", title: "Yaşam Kalitesi", desc: "Günlük aktivitelere dönüş" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-lg text-center">
                  <span className="text-green-500 text-3xl">{item.icon}</span>
                  <h3 className="font-semibold text-gray-800 mt-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
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
                  q: "Omuz kireçlenmesi nedir?",
                  a: "Omuz kireçlenmesi, omuz eklemindeki kıkırdak dokusunun zamanla aşınması veya hasar görmesi sonucu ortaya çıkan eklem hastalığıdır (osteoartrit). Ağrı ve hareket kısıtlılığına neden olur."
                },
                {
                  q: "Omuz kireçlenmesinin belirtileri nelerdir?",
                  a: "Omuzda kalıcı ağrı, eklem sertliği, hareket kısıtlılığı, şişlik, hareket sırasında ses/tıkırtı ve sabahları tutukluk hissi gibi belirtiler görülür."
                },
                {
                  q: "Omuz kireçlenmesi nasıl tedavi edilir?",
                  a: "Fizik tedavi, egzersiz, anti-enflamatuar ilaçlar, enjeksiyon tedavileri ve ileri evrelerde omuz protezi (artroplasti) gibi cerrahi yöntemler uygulanır."
                }
              ].map((faq, i) => (
                <details key={i} className="bg-gray-50 rounded-lg p-4 group">
                  <summary className="font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                    {faq.q}
                    <span className="text-amber-500 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-3 text-gray-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-amber-600 to-amber-800 text-white p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Omuz Kireçlenmesi Tedavisi
            </h2>
            <p className="text-amber-100 mb-6">
              Erken tanı ve uygun tedavi ile omuz fonksiyonlarınızı koruyun. Uzman değerlendirme için randevu alın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+905398416801"
                className="bg-white text-amber-700 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition"
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
                <span className="font-medium">1.</span> Burbank KM, et al. <em>"Chronic shoulder pain: part I. Evaluation and diagnosis."</em> Am Fam Physician. 2008;77(4):453-60.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=shoulder+osteoarthritis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">2.</span> Hawkins RJ, Angelo RL. <em>"Glenohumeral osteoarthrosis. A late complication of the Putti-Platt repair."</em> J Bone Joint Surg Am. 1990;72(8):1193-7.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=shoulder+osteoarthritis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">3.</span> Wiater JM, Fabing MH. <em>"Shoulder Arthroplasty: Prosthetic Options and Indications."</em> J Am Acad Orthop Surg. 2009;17(7):415-25.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=shoulder+osteoarthritis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">4.</span> Denard PJ, et al. <em>"Management of glenohumeral arthritis in the young adult."</em> J Bone Joint Surg Am. 2011;93(9):885-92.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=shoulder+osteoarthritis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">5.</span> Matsen FA, et al. <em>"Practical evaluation and management of the shoulder."</em> WB Saunders, 1994.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=shoulder+osteoarthritis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
            </ol>
            
            <details className="mt-4">
              <summary className="cursor-pointer text-blue-600 font-medium hover:text-blue-800 flex items-center gap-2">
                <span>📖 Daha Fazla Kaynak Göster (5 ek referans)</span>
              </summary>
              <ol start={6} className="space-y-3 text-sm text-gray-700 mt-4 pt-4 border-t">
                <li>
                  <span className="font-medium">6.</span> Neer CS, et al. <em>"Recent experience in total shoulder replacement."</em> J Bone Joint Surg Am. 1982;64(3):319-37.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=shoulder+osteoarthritis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">7.</span> Franklin JL, et al. <em>"Glenoid loosening in total shoulder arthroplasty. Association with rotator cuff deficiency."</em> J Arthroplasty. 1988;3(1):39-46.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=shoulder+osteoarthritis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">8.</span> Walch G, et al. <em>"Patterns of loosening of polyethylene keeled glenoid components after shoulder arthroplasty for primary osteoarthritis."</em> J Bone Joint Surg Am. 2012;94(2):145-50.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=shoulder+osteoarthritis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">9.</span> Bohsali KI, et al. <em>"Complications of total shoulder arthroplasty."</em> J Bone Joint Surg Am. 2006;88(10):2279-92.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=shoulder+osteoarthritis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">10.</span> Singh JA, et al. <em>"Shoulder arthritis."</em> Arthritis Res Ther. 2011;13(2):229.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=shoulder+osteoarthritis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
              </ol>
            </details>
          </section>

          {/* Related Links */}
          <section className="mt-12">
            <h3 className="text-xl font-bold text-gray-800 mb-4">İlgili Konular</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Omuz Sıkışması", href: "/blog/omuz-sikismasi" },
                { title: "Omuz Artroskopisi", href: "/blog/omuz-artroskopisi" },
                { title: "Ameliyatsız Çözümler", href: "/ameliyatsiz-cozumler" }
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <span className="text-amber-600 font-medium">{link.title} →</span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
