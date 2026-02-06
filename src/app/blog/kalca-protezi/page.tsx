import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kalça Protezi Nedir? Ameliyatı Nasıl Yapılır? | Op. Dr. Özgür Oktay Nar",
  description: "Total kalça protezi ameliyatı hakkında detaylı bilgi. Endikasyonlar, prosedür, postoperatif bakım ve avantajlar. Bursa ortopedi uzmanı.",
  keywords: ["kalça protezi", "total kalça protezi", "kalça ameliyatı", "kalça kireçlenmesi", "osteoartrit", "bursa ortopedi"],
  openGraph: {
    title: "Kalça Protezi Nedir? Ameliyatı Nasıl Yapılır?",
    description: "Total kalça protezi ameliyatı hakkında uzman bilgisi. Op. Dr. Özgür Oktay Nar - Bursa Ortopedi Uzmanı",
    type: "article",
    url: "https://www.ozguroktaynar.com/blog/kalca-protezi",
    images: [
      {
        url: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/08/kalca_protezi.jpg",
        width: 1200,
        height: 800,
        alt: "Kalça Protezi Ameliyatı",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Kalça Protezi Nedir? Ameliyatı Nasıl Yapılır?",
  "description": "Total kalça protezi ameliyatı, hasarlı kıkırdak ve kemiklerin kalça ekleminden çıkarılarak yerine yapay implantlar yerleştirilmesiyle yapılan cerrahi işlemdir.",
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
  "mainEntityOfPage": "https://www.ozguroktaynar.com/blog/kalca-protezi",
  "image": "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/08/kalca_protezi.jpg"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Kalça protezi nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Total kalça protezi, hasarlı kıkırdak ve kemiklerin kalça ekleminden çıkarılarak yerine yapay implantlar yerleştirilmesiyle yapılan cerrahi bir işlemdir. Özellikle ileri derece kireçlenme ve kalça kırıklarında uygulanır."
      }
    },
    {
      "@type": "Question",
      "name": "Kalça protezi ameliyatı nasıl yapılır?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ameliyat genel anestezi altında yapılır. Hasarlı kemik ve kıkırdak çıkarılır, asetabular ve femoral bileşenler yerleştirilir. Minimal invaziv tekniklerle daha küçük kesilerle yapılabilir."
      }
    },
    {
      "@type": "Question",
      "name": "Kalça protezi sonrası iyileşme süreci nasıldır?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "İlk 6 hafta bacaklar arasında yastık kullanılmalı, kalça 90°'den fazla bükülmemeli, fizik tedavi ve yürüme egzersizleri ile rehabilitasyon süreci desteklenmelidir."
      }
    }
  ]
};

export default function KalcaProteziPage() {
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
      <section className="relative bg-gradient-to-r from-purple-900 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-purple-500 text-sm px-3 py-1 rounded-full mb-4">
                Kalça Cerrahisi
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Kalça Protezi Nedir?
              </h1>
              <p className="text-xl text-purple-100 mb-6">
                Total kalça protezi ameliyatı ile ağrısız ve aktif bir yaşam
              </p>
              <a
                href="tel:+905398416801"
                className="inline-block bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition"
              >
                Randevu Al: 0539 841 68 01
              </a>
            </div>
            <div className="hidden md:block">
              <img
                src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/08/kalca_protezi.jpg"
                alt="Kalça Protezi Ameliyatı"
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
              <strong>Total kalça protezi</strong>, hasarlı kıkırdak ve kemiklerin kalça ekleminden çıkarılarak 
              yerine yapay implantlar yerleştirilmesiyle yapılan cerrahi bir işlemdir. Kalça eklemi, femur başı 
              ve asetabulum arasındaki top ve soket eklemidir ve eklem yüzeyi yumuşak kıkırdak ile kaplıdır.
            </p>
            <p className="text-gray-600">
              Kalça protezi, özellikle ilerlemiş kireçlenme, ağrıya dayanamayan hastalar veya hareket kısıtlılığı 
              yaşayan kişiler için en etkili tedavi seçeneklerinden biridir.
            </p>
          </section>

          {/* What is Calcification Section */}
          <section className="mb-12 bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Kalça Kireçlenmesi Nedir?
            </h2>
            <p className="text-gray-600 mb-4">
              Kireçlenme (osteoartrit), eklem kıkırdağının zamanla aşınması ve bozulması sonucu ortaya çıkan 
              dejeneratif bir eklem hastalığıdır. Kalça eklemi, vücudun en büyük ağırlık taşıyan eklemlerinden 
              biri olduğu için kireçlenme burada sık görülür.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">Osteoartrit</h3>
                <p className="text-sm text-gray-600">Eklem kıkırdağının aşamalı yıpranması</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">Romatoid Artrit</h3>
                <p className="text-sm text-gray-600">Otoimmün hastalık, synovium iltihabı</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">Travmatik Artrit</h3>
                <p className="text-sm text-gray-600">Kalça yaralanmaları sonrası gelişen</p>
              </div>
            </div>
          </section>

          {/* Symptoms Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Kalça Kireçlenmesi Belirtileri
            </h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠</span>
                  <span>Kalça ve uyluk bölgesinde sürekli ağrı</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠</span>
                  <span>Sabah veya uzun süreli hareketsizlik sonrası sertlik</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠</span>
                  <span>Yürürken veya merdiven çıkarken ağrının artması ve topallama</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠</span>
                  <span>Kalçanın üzerine yatarken veya uzun süre otururken rahatsızlık</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Indications Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Kalça Protezi Endikasyonları
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "İleri derece osteoartrit veya romatoid artrit",
                "Kalça kırıkları veya travmatik yaralanmalar",
                "Konservatif tedavi yöntemlerinin yetersiz kaldığı durumlar",
                "Kalçada sürekli ağrı ve günlük aktivitelerin sınırlanması"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 bg-purple-50 p-4 rounded-lg">
                  <span className="text-purple-500 mt-1">✓</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Procedure Section */}
          <section className="mb-12 bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Ameliyat Prosedürü
            </h2>
            <p className="text-gray-600 mb-4">
              Ameliyat genel anestezi altında gerçekleştirilir ve temel adımlar şunlardır:
            </p>
            <ol className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="font-bold text-purple-600">1.</span>
                <span>Kalça üzerinde cerrahi bir kesim yapılır</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-purple-600">2.</span>
                <span>Femur başı ve asetabulumdaki hasarlı kemik ve kıkırdak çıkarılır</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-purple-600">3.</span>
                <span>Asetabular bileşen vidalar veya özel çimento ile sokete yerleştirilir</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-purple-600">4.</span>
                <span>Femur hazırlanır ve yeni metal femoral bileşen yerleştirilir</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-purple-600">5.</span>
                <span>Metal veya seramik femoral baş bileşeni monte edilir</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-purple-600">6.</span>
                <span>Kaslar ve tendonlar onarılır, insizyon kapatılır</span>
              </li>
            </ol>
            <div className="mt-4 p-4 bg-blue-100 rounded-lg">
              <p className="text-sm text-blue-800">
                💡 <strong>Minimal invaziv teknikler</strong> ile yapılan protez ameliyatlarında kesiler 
                daha küçük olup, iyileşme süresi ve ağrı daha azdır.
              </p>
            </div>
          </section>

          {/* Postoperative Care Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Ameliyat Sonrası Bakım
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-4">
              <h3 className="font-semibold text-yellow-800 mb-3">⚠️ Önemli Uyarılar (İlk 6 Hafta)</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Kalçanızı bükmekten ve ayağınızı içeri doğru çevirmekten kaçının</li>
                <li>• Uyurken bacaklarınızın arasında yastık kullanın</li>
                <li>• Kalçaları 90°'den fazla bükmemeye özen gösterin</li>
                <li>• Düşük sandalyelerde oturmaktan kaçının</li>
                <li>• Eşyaları toplamak için eğilmekten kaçının</li>
                <li>• Yükseltilmiş klozet kullanımı önerilir</li>
              </ul>
            </div>
            <p className="text-gray-600">
              Doktorunuz, fizik tedavi ve yürüme egzersizleri ile kasları güçlendirmenizi ve 
              yeni eklemi korumanızı sağlayacaktır.
            </p>
          </section>

          {/* Benefits Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Kalça Protezinin Avantajları
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: "✓", title: "Ağrının Azalması", desc: "Belirgin şekilde ağrı azalması" },
                { icon: "✓", title: "Hareket Kabiliyeti", desc: "Günlük aktivitelerde artış" },
                { icon: "✓", title: "Yaşam Kalitesi", desc: "Uzun süreli iyileşme" },
                { icon: "✓", title: "Hızlı Rehabilitasyon", desc: "Bağımsız hareket" }
              ].map((item, i) => (
                <div key={i} className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-2xl">{item.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-800">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
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
                  q: "Kalça protezi nedir?",
                  a: "Total kalça protezi, hasarlı kıkırdak ve kemiklerin kalça ekleminden çıkarılarak yerine yapay implantlar yerleştirilmesiyle yapılan cerrahi bir işlemdir. Özellikle ileri derece kireçlenme ve kalça kırıklarında uygulanır."
                },
                {
                  q: "Kalça protezi ameliyatı nasıl yapılır?",
                  a: "Ameliyat genel anestezi altında yapılır. Hasarlı kemik ve kıkırdak çıkarılır, asetabular ve femoral bileşenler yerleştirilir. Minimal invaziv tekniklerle daha küçük kesilerle yapılabilir."
                },
                {
                  q: "Kalça protezi sonrası iyileşme süreci nasıldır?",
                  a: "İlk 6 hafta bacaklar arasında yastık kullanılmalı, kalça 90°'den fazla bükülmemeli, fizik tedavi ve yürüme egzersizleri ile rehabilitasyon süreci desteklenmelidir."
                }
              ].map((faq, i) => (
                <details key={i} className="bg-gray-50 rounded-lg p-4 group">
                  <summary className="font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                    {faq.q}
                    <span className="text-purple-500 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-3 text-gray-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Kalça Ağrınız mı Var?
            </h2>
            <p className="text-purple-100 mb-6">
              Kalça protezi tedavisi için hemen randevu alın. Ağrısız bir yaşam için doğru adım.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+905398416801"
                className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition"
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

          {/* PubMed References - Pillar Content */}
          <section className="mt-12 bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span>📚</span> Bilimsel Kaynaklar
            </h3>
            <ol className="space-y-3 text-sm text-gray-700">
              <li>
                <span className="font-medium">1.</span> Ferguson RJ, et al. <em>"Hip replacement."</em> Lancet. 2018;392(10158):1662-1671.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=total+hip+arthroplasty" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">2.</span> Pivec R, et al. <em>"Hip arthroplasty."</em> Lancet. 2012;380(9855):1768-77.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=total+hip+arthroplasty" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">3.</span> Learmonth ID, et al. <em>"The operation of the century: total hip replacement."</em> Lancet. 2007;370(9597):1508-19.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=total+hip+arthroplasty" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">4.</span> Maradit Kremers H, et al. <em>"Prevalence of Total Hip and Knee Replacement in the United States."</em> J Bone Joint Surg Am. 2015;97(17):1386-97.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=total+hip+arthroplasty" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">5.</span> Shichman I, et al. <em>"Projections and Epidemiology of Primary Hip and Knee Arthroplasty in Medicare Patients to 2040-2060."</em> JB JS Open Access. 2023;8(1):e22.00112.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=total+hip+arthroplasty" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
            </ol>
            
            {/* Expandable References */}
            <details className="mt-4">
              <summary className="cursor-pointer text-blue-600 font-medium hover:text-blue-800 flex items-center gap-2">
                <span>📖 Daha Fazla Kaynak Göster (5 ek referans)</span>
              </summary>
              <ol start={6} className="space-y-3 text-sm text-gray-700 mt-4 pt-4 border-t">
                <li>
                  <span className="font-medium">6.</span> Bozic KJ, et al. <em>"The epidemiology of revision total hip arthroplasty in the United States."</em> J Bone Joint Surg Am. 2009;91(1):128-33.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=total+hip+arthroplasty" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">7.</span> Kremers HM, et al. <em>"Comparative Long-Term Survivorship of Uncemented Acetabular Components in Revision Total Hip Arthroplasty."</em> J Bone Joint Surg Am. 2012;94(12):e82.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=total+hip+arthroplasty" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">8.</span> Berry DJ, et al. <em>"Twenty-five-year survivorship of two thousand consecutive primary Charnley total hip replacements."</em> J Bone Joint Surg Am. 2002;84(2):171-7.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=total+hip+arthroplasty" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">9.</span> Wroblewski BM, et al. <em>"28,000 Charnley total hip replacements in 2006: clinical and tribological aspects."</em> Hip Int. 2006;16 Suppl 3:8-14.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=total+hip+arthroplasty" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">10.</span> Kurtz S, et al. <em>"Projections of primary and revision hip and knee arthroplasty in the United States from 2005 to 2030."</em> J Bone Joint Surg Am. 2007;89(4):780-5.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=total+hip+arthroplasty" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
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
                { title: "Kalça Artroskopisi", href: "/blog/kalca-artroskopisi" },
                { title: "Ameliyatsız Çözümler", href: "/ameliyatsiz-cozumler" }
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <span className="text-purple-600 font-medium">{link.title} →</span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
