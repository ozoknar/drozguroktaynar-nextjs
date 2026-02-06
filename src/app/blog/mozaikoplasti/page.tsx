import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mozaikoplasti Nedir? Kıkırdak Onarım Ameliyatı | Op. Dr. Özgür Oktay Nar",
  description: "Mozaikoplasti kıkırdak onarım ameliyatı hakkında detaylı bilgi. Diz ve ayak bileği eklemlerinde kıkırdak hasarı tedavisi. Bursa ortopedi uzmanı.",
  keywords: ["mozaikoplasti", "kıkırdak onarımı", "eklem kıkırdağı", "diz kıkırdağı", "osteokondral greft", "bursa ortopedi"],
  openGraph: {
    title: "Mozaikoplasti Nedir? Kıkırdak Onarım Ameliyatı",
    description: "Mozaikoplasti kıkırdak onarım ameliyatı hakkında uzman bilgisi. Op. Dr. Özgür Oktay Nar",
    type: "article",
    url: "https://www.ozguroktaynar.com/blog/mozaikoplasti",
    images: [
      {
        url: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/03/kemik-rontgeni-min-scaled-1.jpg",
        width: 1200,
        height: 630,
        alt: "Mozaikoplasti - Eklem Kıkırdağı Onarımı",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Mozaikoplasti Nedir? Kıkırdak Onarım Ameliyatı",
  "description": "Mozaikoplasti, eklem kıkırdağı hasarlarında uygulanan cerrahi bir onarım yöntemidir.",
  "author": {
    "@type": "Person",
    "name": "Op. Dr. Özgür Oktay Nar",
    "jobTitle": "Ortopedi ve Travmatoloji Uzmanı"
  },
  "datePublished": "2024-01-10",
  "dateModified": "2026-02-06",
  "image": "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/03/kemik-rontgeni-min-scaled-1.jpg"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Mozaikoplasti nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mozaikoplasti, eklemin yük taşımayan bölgesinden alınan kıkırdak ve kemik parçalarının, hasarlı bölgeye nakledilmesiyle yapılan kıkırdak onarım ameliyatıdır."
      }
    },
    {
      "@type": "Question",
      "name": "Mozaikoplasti hangi durumlarda uygulanır?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Travmaya bağlı kıkırdak kayıpları, spor yaralanmaları, 1-4 cm² arasındaki kıkırdak hasarları ve erken evre eklem kireçlenmelerinde uygulanır."
      }
    },
    {
      "@type": "Question",
      "name": "Mozaikoplasti sonrası iyileşme ne kadar sürer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tam fonksiyonel dönüş genellikle birkaç ayı bulur. İlk dönemde ekleme yük bindirilmez, fizik tedavi ile eklem hareketleri korunur."
      }
    }
  ]
};

export default function MozaikoplastiPage() {
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
                Kıkırdak Cerrahisi
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Mozaikoplasti Nedir?
              </h1>
              <p className="text-xl text-teal-100 mb-6">
                Eklem kıkırdağı hasarlarında uygulanan ileri cerrahi onarım tekniği
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
                src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/03/kemik-rontgeni-min-scaled-1.jpg"
                alt="Mozaikoplasti - Eklem Kıkırdağı Röntgeni"
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
              <strong>Mozaikoplasti</strong>, eklemin yük taşımayan bölgesinden 6-8 mm çapında ve 15 mm boyunda 
              kıkırdak ve kemikten oluşan silindirik parçaların alınıp, bunların yük taşıyan bölgedeki hasarlı 
              bölgeye nakledilmesidir.
            </p>
            <p className="text-gray-600">
              Bu teknik 4cm²'nin altındaki hasarlarda uygulanır. En sık diz ve ayak bileği eklemlerinde uygulanır. 
              Artroskopik veya açık yöntemle yapılabilir. En önemli avantajı, normal kıkırdağın mimari yapısında 
              bir dokunun hasarlı bölgeye nakledilmesidir.
            </p>
          </section>

          {/* How It Works */}
          <section className="mb-12 bg-teal-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Mozaikoplasti Nasıl Çalışır?
            </h2>
            <p className="text-gray-700 mb-4">
              Mozaikoplasti tekniğinde, eklem yüzeyinin yük taşımayan bölgelerinden silindirik şeklinde 
              osteokondral greftler (kemik + kıkırdak birlikteliği) alınır. Bu greftler, kıkırdak kaybının 
              olduğu alana yerleştirilir.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">🔬</div>
                <h3 className="font-semibold">Canlı Kıkırdak</h3>
                <p className="text-sm text-gray-600">Sağlıklı kıkırdak dokusu içerir</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">🦴</div>
                <h3 className="font-semibold">Güçlü Tutunma</h3>
                <p className="text-sm text-gray-600">Kemik kısmı ile alıcı bölgeye tutunur</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">🔄</div>
                <h3 className="font-semibold">Biyolojik Uyum</h3>
                <p className="text-sm text-gray-600">Çevre dokuyla uyum geliştirir</p>
              </div>
            </div>
          </section>

          {/* When Applied */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Hangi Durumlarda Mozaikoplasti Uygulanır?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-semibold text-blue-800 mb-3">Uygun Durumlar</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Travmaya bağlı kıkırdak kayıpları</li>
                  <li>• Spor yaralanmaları sonrası kıkırdak defektleri</li>
                  <li>• Sınırlı alanı etkileyen kıkırdak hasarları</li>
                  <li>• Eklem kireçlenmesinin erken evreleri</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="font-semibold text-green-800 mb-3">Uygun Adaylar</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Genç ve orta yaşlı bireyler</li>
                  <li>• Eklem dizilimi bozuk olmayan hastalar</li>
                  <li>• Kıkırdak hasarı 1–4 cm² arasında olanlar</li>
                  <li>• İleri artroz olmayan hastalar</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-12 bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Mozaikoplasti ile Hedeflenen Kazanımlar
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Eklem yüzeyinde hiyalin kıkırdağa yakın yapı oluşturmak",
                "Ağrıyı azaltmak",
                "Eklem hareket açıklığını korumak veya artırmak",
                "İlerleyici kıkırdak yıkımını yavaşlatmak"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                  <span className="text-teal-500 text-xl">✓</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Recovery */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              İyileşme Süreci Nasıl İlerler?
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <p className="text-gray-700 mb-4">
                Mozaikoplasti sonrası iyileşme süreci kontrollü ve aşamalıdır:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>İlk dönem:</strong> Ekleme yük bindirilmez veya sınırlı yük verilir</li>
                <li>• <strong>Fizik tedavi:</strong> Eklem hareketleri korunur</li>
                <li>• <strong>Kaynama süreci:</strong> Greftlerin kaynaması için zamana ihtiyaç vardır</li>
                <li>• <strong>Tam dönüş:</strong> Genellikle birkaç ayı bulur</li>
              </ul>
              <p className="mt-4 text-gray-600 italic">
                Başarılı bir sonuç için cerrahi teknik kadar, ameliyat sonrası rehabilitasyon da belirleyici rol oynar.
              </p>
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
                  q: "Mozaikoplasti nedir?",
                  a: "Mozaikoplasti, eklemin yük taşımayan bölgesinden alınan kıkırdak ve kemik parçalarının, hasarlı bölgeye nakledilmesiyle yapılan kıkırdak onarım ameliyatıdır."
                },
                {
                  q: "Mozaikoplasti hangi durumlarda uygulanır?",
                  a: "Travmaya bağlı kıkırdak kayıpları, spor yaralanmaları, 1-4 cm² arasındaki kıkırdak hasarları ve erken evre eklem kireçlenmelerinde uygulanır."
                },
                {
                  q: "Mozaikoplasti sonrası iyileşme ne kadar sürer?",
                  a: "Tam fonksiyonel dönüş genellikle birkaç ayı bulur. İlk dönemde ekleme yük bindirilmez, fizik tedavi ile eklem hareketleri korunur."
                },
                {
                  q: "Mozaikoplasti diğer yöntemlerden farkı nedir?",
                  a: "Hazır ve canlı kıkırdak dokusu kullanır, onarılan bölgede daha dayanıklı bir yüzey sağlar ve uzun dönem sonuçları daha stabildir."
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
              Kıkırdak Hasarınız mı Var?
            </h2>
            <p className="text-teal-100 mb-6">
              Mozaikoplasti ve diğer kıkırdak onarım yöntemleri hakkında bilgi almak için randevu alın.
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
            <p className="text-sm text-gray-600 mb-4">
              Bu yazıdaki bilgiler aşağıdaki bilimsel kaynaklardan derlenmiştir:
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-teal-500">•</span>
                <div>
                  <a 
                    href="https://pubmed.ncbi.nlm.nih.gov/16959904/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:underline"
                  >
                    Hangody L, et al. (2008). Mosaicplasty for the treatment of articular cartilage defects.
                  </a>
                  <span className="text-gray-500"> - Clin Orthop Relat Res.</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500">•</span>
                <div>
                  <a 
                    href="https://pubmed.ncbi.nlm.nih.gov/15118039/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:underline"
                  >
                    Hangody L, Füles P. (2003). Autologous osteochondral mosaicplasty for cartilage defects.
                  </a>
                  <span className="text-gray-500"> - J Bone Joint Surg Br.</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500">•</span>
                <div>
                  <a 
                    href="https://pubmed.ncbi.nlm.nih.gov/22585560/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:underline"
                  >
                    Solheim E, et al. (2012). Results at 10-14 years after mosaicplasty.
                  </a>
                  <span className="text-gray-500"> - Knee Surg Sports Traumatol Arthrosc.</span>
                </div>
              </li>
            </ul>
          </section>

          {/* Related Links */}
          <section className="mt-12">
            <h3 className="text-xl font-bold text-gray-800 mb-4">İlgili Konular</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Ameliyatsız Çözümler", href: "/ameliyatsiz-cozumler" },
                { title: "Stres Kırığı", href: "/blog/stres-kirigi" },
                { title: "Uzmanlık Alanlarım", href: "/bursa-ortopedi-doktoru" }
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
