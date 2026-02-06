import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kalça Artroskopisi Nedir? Avantajları ve İyileşme | Op. Dr. Özgür Oktay Nar",
  description: "Kalça artroskopisi minimal invaziv cerrahi tekniği ile kalça eklem hasarlarının tedavisi. Endikasyonlar, avantajlar ve iyileşme süreci. Bursa ortopedi uzmanı.",
  keywords: ["kalça artroskopisi", "kalça cerrahisi", "minimal invaziv", "labrum onarımı", "kalça sıkışması", "bursa ortopedi"],
  openGraph: {
    title: "Kalça Artroskopisi Nedir? Avantajları ve İyileşme",
    description: "Kalça artroskopisi tedavisi hakkında uzman bilgisi. Op. Dr. Özgür Oktay Nar - Bursa Ortopedi Uzmanı",
    type: "article",
    url: "https://www.ozguroktaynar.com/blog/kalca-artroskopisi",
    images: [
      {
        url: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/07/kalca_artroskopisi.jpg",
        width: 1200,
        height: 800,
        alt: "Kalça Artroskopisi İşlemi",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Kalça Artroskopisi Nedir? Avantajları ve İyileşme",
  "description": "Kalça artroskopisi, minimal invaziv cerrahi tekniklerinden biridir ve kalça ekleminde oluşan hasarları hem teşhis etmek hem de onarmak için uygulanır.",
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
  "mainEntityOfPage": "https://www.ozguroktaynar.com/blog/kalca-artroskopisi",
  "image": "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/07/kalca_artroskopisi.jpg"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Kalça artroskopisi nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kalça artroskopisi, minimal invaziv cerrahi tekniğidir. Küçük kesilerden artroskop ve cerrahi aletler girilerek kalça eklemindeki hasarlar teşhis edilir ve onarılır."
      }
    },
    {
      "@type": "Question",
      "name": "Kalça artroskopisi hangi durumlarda uygulanır?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Labrum onarımı, kıkırdak yırtıkları, kalça sıkışması (FAI), kemik çıkıntıları, açıklanamayan kalça ağrıları ve konservatif tedaviye yanıt vermeyen durumlarda uygulanır."
      }
    },
    {
      "@type": "Question",
      "name": "Kalça artroskopisinin avantajları nelerdir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Minimal invaziv, daha az ağrı, düşük enfeksiyon riski, küçük yara izleri, hızlı iyileşme ve erken aktiviteye dönüş sağlar."
      }
    }
  ]
};

export default function KalcaArtroskopisiPage() {
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
      <section className="relative bg-gradient-to-r from-teal-900 to-teal-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-teal-500 text-sm px-3 py-1 rounded-full mb-4">
                Minimal İnvaziv Cerrahi
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Kalça Artroskopisi Nedir?
              </h1>
              <p className="text-xl text-teal-100 mb-6">
                Minimal invaziv teknikle kalça eklem hasarlarının tedavisi
              </p>
              <a
                href="tel:+905398416801"
                className="inline-block bg-white text-teal-900 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition"
              >
                Randevu Al: 0539 841 68 01
              </a>
            </div>
            <div className="hidden md:block">
              <img
                src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/07/kalca_artroskopisi.jpg"
                alt="Kalça Artroskopisi İşlemi"
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
              <strong>Kalça artroskopisi</strong>, minimal invaziv cerrahi tekniklerinden biridir ve kalça ekleminde 
              oluşan hasarları hem teşhis etmek hem de onarmak için uygulanır. Bu işlemde cerrah, kalça ekleminin 
              içine küçük bir cihaz olan artroskopu yerleştirir.
            </p>
            <p className="text-gray-600">
              Artroskop, içinde lens, ışık kaynağı ve video kamera bulunan fiber optik bir alet olup, eklem içini 
              monitör üzerinden detaylı olarak görüntülemeyi sağlar. Böylece cerrah, eklemdeki kıkırdak yırtıkları, 
              labrum hasarları veya kemik çıkıntılarını doğrudan görerek onarabilir.
            </p>
          </section>

          {/* Indications Section */}
          <section className="mb-12 bg-gradient-to-r from-teal-50 to-blue-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Kalça Artroskopisi Endikasyonları
            </h2>
            <p className="text-gray-600 mb-6">
              Kalça artroskopisi, özellikle konservatif tedavilere yanıt vermeyen ağrı ve hareket kısıtlılığı 
              olan hastalarda tercih edilir.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: "🔹", title: "Yırtık Kıkırdak", desc: "Kemik veya kıkırdak parçalarının temizlenmesi" },
                { icon: "🔹", title: "Labrum Onarımı", desc: "Asetabulum etrafındaki kıkırdak halkasının tamiri" },
                { icon: "🔹", title: "Kemik Çıkıntıları", desc: "CAM/PINCER tipi kalça sıkışması tedavisi" },
                { icon: "🔹", title: "Parsiyel Sinovektomi", desc: "İltihaplı sinovyum dokusunun çıkarılması" },
                { icon: "🔹", title: "Kırık Tamiri", desc: "Travmatik kırık ve bağ yaralanmalarının onarımı" },
                { icon: "🔹", title: "Açıklanamayan Ağrı", desc: "Nedeni belirsiz ağrıların değerlendirilmesi" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Procedure Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              İşlem Nasıl Yapılır?
            </h2>
            <p className="text-gray-600 mb-4">
              Kalça artroskopisi, hastanın durumuna ve cerrahın tercihine bağlı olarak genel veya bölgesel 
              anestezi altında uygulanır.
            </p>
            <div className="bg-blue-50 p-6 rounded-xl">
              <ol className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="font-bold text-teal-600 min-w-[24px]">1.</span>
                  <span>Kalça çevresinde yaklaşık 2-3 küçük kesi açılır (her biri ~0,5 cm)</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-teal-600 min-w-[24px]">2.</span>
                  <span>Artroskop yerleştirilir, eklem içine steril sıvı pompalanır</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-teal-600 min-w-[24px]">3.</span>
                  <span>Eklemin iç görüntüsü monitörde izlenerek hasarın boyutu belirlenir</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-teal-600 min-w-[24px]">4.</span>
                  <span>Diğer kesilerden cerrahi aletler girilerek onarım yapılır</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-teal-600 min-w-[24px]">5.</span>
                  <span>İşlem tamamlanınca kesiler kapatılır ve bandaj uygulanır</span>
                </li>
              </ol>
              <div className="mt-4 p-4 bg-teal-100 rounded-lg">
                <p className="text-sm text-teal-800">
                  ⏱️ <strong>İşlem Süresi:</strong> Genellikle 1-2 saat sürer. Hastanın durumuna göre ayaktan 
                  veya kısa süreli hastanede kalış gerektirebilir.
                </p>
              </div>
            </div>
          </section>

          {/* Advantages Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Kalça Artroskopisinin Avantajları
            </h2>
            <p className="text-gray-600 mb-6">
              Geleneksel açık kalça cerrahisine göre birçok avantaja sahiptir:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: "✓", title: "Minimal İnvaziv", desc: "Küçük kesilerle işlem", color: "green" },
                { icon: "✓", title: "Minimal Zarar", desc: "Kas, ligament ve dokulara az etki", color: "green" },
                { icon: "✓", title: "Daha Az Ağrı", desc: "Postoperatif ağrı minimize", color: "blue" },
                { icon: "✓", title: "Düşük Enfeksiyon", desc: "Enfeksiyon riski düşük", color: "blue" },
                { icon: "✓", title: "Az Yara İzi", desc: "Minimal yara izi kalır", color: "purple" },
                { icon: "✓", title: "Hızlı Mobilizasyon", desc: "Erken hareket kabiliyeti", color: "purple" },
                { icon: "✓", title: "Kısa Yatış", desc: "Hastane yatış süresi kısa", color: "teal" },
                { icon: "✓", title: "Erken Dönüş", desc: "Günlük aktivitelere hızlı dönüş", color: "teal" }
              ].map((item, i) => (
                <div key={i} className={`bg-${item.color}-50 p-4 rounded-lg flex items-start gap-3`}>
                  <span className={`text-${item.color}-500 text-2xl`}>{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Postoperative Care Section */}
          <section className="mb-12 bg-yellow-50 border-l-4 border-yellow-500 p-8 rounded-r-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Ameliyat Sonrası Bakım ve İyileşme
            </h2>
            <p className="text-gray-700 mb-4">
              Artroskopi sonrası iyileşme süreci, başarılı bir sonuç için dikkatle takip edilmelidir:
            </p>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">💊 Ağrı Yönetimi</h3>
                <p className="text-sm text-gray-600">Doktorunuzun verdiği reçeteli ağrı kesiciler düzenli kullanılmalıdır</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">🦯 Yüklenme Sınırlaması</h3>
                <p className="text-sm text-gray-600">Ameliyat edilen kalçaya fazla yük bindirmemek için koltuk değneği kullanımı</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">🏃 Fizik Tedavi</h3>
                <p className="text-sm text-gray-600">Kalçanın esnekliğini ve gücünü geri kazanmak için özel egzersizler</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">🍎 Yaşam Tarzı Önlemleri</h3>
                <p className="text-sm text-gray-600">Sigara kullanımından kaçınma, sağlıklı beslenme ve yeterli dinlenme</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">⚠️ Ağır Aktivitelerden Kaçınma</h3>
                <p className="text-sm text-gray-600">İlk haftalarda ağır kaldırma, koşma veya zorlayıcı egzersizlerden uzak durun</p>
              </div>
            </div>
          </section>

          {/* Key Benefits Summary */}
          <section className="mb-12 bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              💡 Önemli Bilgiler
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Kalça artroskopisi, özellikle <strong>genç ve aktif hastalarda</strong> eklem koruyucu ve ağrıyı 
              azaltıcı minimal invaziv bir seçenek olarak öne çıkar. Erken tanı ve uygun cerrahi müdahale ile 
              hastalar <strong>kısa sürede günlük yaşam aktivitelerine geri dönebilir</strong>.
            </p>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Sıkça Sorulan Sorular
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Kalça artroskopisi nedir?",
                  a: "Kalça artroskopisi, minimal invaziv cerrahi tekniğidir. Küçük kesilerden artroskop ve cerrahi aletler girilerek kalça eklemindeki hasarlar teşhis edilir ve onarılır."
                },
                {
                  q: "Kalça artroskopisi hangi durumlarda uygulanır?",
                  a: "Labrum onarımı, kıkırdak yırtıkları, kalça sıkışması (FAI), kemik çıkıntıları, açıklanamayan kalça ağrıları ve konservatif tedaviye yanıt vermeyen durumlarda uygulanır."
                },
                {
                  q: "Kalça artroskopisinin avantajları nelerdir?",
                  a: "Minimal invaziv, daha az ağrı, düşük enfeksiyon riski, küçük yara izleri, hızlı iyileşme ve erken aktiviteye dönüş sağlar."
                }
              ].map((faq, i) => (
                <details key={i} className="bg-gray-50 rounded-lg p-4 group">
                  <summary className="font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                    {faq.q}
                    <span className="text-teal-500 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-3 text-gray-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Kalça Artroskopisi İçin Randevu Alın
            </h2>
            <p className="text-teal-100 mb-6">
              Minimal invaziv tedavi ile kalça sorunlarınıza çözüm. Uzman değerlendirme için hemen iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+905398416801"
                className="bg-white text-teal-700 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition"
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
                <span className="font-medium">1.</span> Nwachukwu BU, et al. <em>"Arthroscopic Versus Open Treatment of Femoroacetabular Impingement."</em> Am J Sports Med. 2016;44(1):209-16.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/26487881/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 26487881</a>
              </li>
              <li>
                <span className="font-medium">2.</span> Griffin DR, et al. <em>"Hip arthroscopy versus best conservative care for the treatment of femoroacetabular impingement syndrome (UK FASHIoN)."</em> Lancet. 2018;391(10136):2225-2235.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/29801455/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 29801455</a>
              </li>
              <li>
                <span className="font-medium">3.</span> Philippon MJ, et al. <em>"Outcomes following hip arthroscopy for femoroacetabular impingement with associated chondrolabral dysfunction."</em> J Bone Joint Surg Br. 2009;91(1):16-23.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/19091999/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 19091999</a>
              </li>
              <li>
                <span className="font-medium">4.</span> Domb BG, et al. <em>"Arthroscopic labral reconstruction: outcomes and complications."</em> Arthroscopy. 2015;31(12):2325-32.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/26321111/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 26321111</a>
              </li>
              <li>
                <span className="font-medium">5.</span> Byrd JWT, Jones KS. <em>"Hip arthroscopy for labral pathology: prospective analysis with 10-year follow-up."</em> Arthroscopy. 2009;25(4):365-8.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/19341922/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 19341922</a>
              </li>
            </ol>
            
            <details className="mt-4">
              <summary className="cursor-pointer text-blue-600 font-medium hover:text-blue-800 flex items-center gap-2">
                <span>📖 Daha Fazla Kaynak Göster (5 ek referans)</span>
              </summary>
              <ol start={6} className="space-y-3 text-sm text-gray-700 mt-4 pt-4 border-t">
                <li>
                  <span className="font-medium">6.</span> Harris JD, et al. <em>"Complications following hip arthroscopy: a systematic review and meta-analysis."</em> J Bone Joint Surg Am. 2013;95(4):e20.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/23426770/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 23426770</a>
                </li>
                <li>
                  <span className="font-medium">7.</span> Enseki KR, et al. <em>"The hip joint: arthroscopic procedures and postoperative rehabilitation."</em> J Orthop Sports Phys Ther. 2006;36(7):516-25.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/16881467/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 16881467</a>
                </li>
                <li>
                  <span className="font-medium">8.</span> Menge TJ, et al. <em>"Hip arthroscopy: indications and outcomes."</em> Instr Course Lect. 2013;62:241-55.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/23395030/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 23395030</a>
                </li>
                <li>
                  <span className="font-medium">9.</span> Matsuda DK, et al. <em>"Arthroscopic hip labral reconstruction with a gracilis autograft versus labral refixation."</em> Am J Sports Med. 2013;41(12):2840-7.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/24086000/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 24086000</a>
                </li>
                <li>
                  <span className="font-medium">10.</span> Larson CM, Giveans MR. <em>"Arthroscopic management of femoroacetabular impingement: early outcomes measures."</em> Arthroscopy. 2008;24(5):540-6.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/18442686/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 18442686</a>
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
                { title: "Kalça Protezi", href: "/blog/kalca-protezi" },
                { title: "Ameliyatsız Çözümler", href: "/ameliyatsiz-cozumler" }
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <span className="text-teal-600 font-medium">{link.title} →</span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
