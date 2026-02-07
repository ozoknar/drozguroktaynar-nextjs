import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Total Diz Protezi Nedir? Tedavisi Nasıl Yapılır? | Op. Dr. Özgür Oktay Nar",
  description: "Total diz protezi (artroplasti) ameliyatı, endikasyonlar, prosedür ve ameliyat sonrası bakım. Diz kireçlenmesi tedavisi. Bursa ortopedi uzmanı.",
  keywords: ["total diz protezi", "diz artroplastisi", "diz ameliyatı", "diz kireçlenmesi", "osteoartrit", "bursa ortopedi"],
  openGraph: {
    title: "Total Diz Protezi Nedir? Tedavisi Nasıl Yapılır?",
    description: "Total diz protezi ameliyatı hakkında uzman bilgisi. Op. Dr. Özgür Oktay Nar - Bursa Ortopedi Uzmanı",
    type: "article",
    url: "https://www.ozguroktaynar.com/blog/diz-protezi",
    images: [
      {
        url: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/02/diz_protezi.jpg",
        width: 1200,
        height: 800,
        alt: "Total Diz Protezi Ameliyatı",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Total Diz Protezi Nedir? Tedavisi Nasıl Yapılır?",
  "description": "Total diz protezi (artroplasti), diz ekleminin aşınmış veya hasar görmüş yüzeylerinin çıkarıldığı ve yapay parçalarla değiştirildiği cerrahi işlemdir.",
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
  "mainEntityOfPage": "https://www.ozguroktaynar.com/blog/diz-protezi",
  "image": "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/02/diz_protezi.jpg"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Total diz protezi nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Total diz protezi (artroplasti), diz ekleminin aşınmış veya hasar görmüş yüzeylerinin çıkarıldığı ve yapay parçalarla değiştirildiği cerrahi bir işlemdir. Şiddetli diz kireçlenmesinde uygulanır."
      }
    },
    {
      "@type": "Question",
      "name": "Diz protezi hangi durumlarda yapılır?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Günlük aktiviteleri sınırlayan şiddetli diz ağrısı, gece ağrıları, kronik iltihap, ilaç ve fizik tedaviye yanıtsızlık ve diz deformitesi durumlarında uygulanır."
      }
    },
    {
      "@type": "Question",
      "name": "Ameliyat sonrası iyileşme süreci nasıldır?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rehabilitasyon ameliyattan hemen sonra başlar. Fizik tedavi, özel egzersizler ve CPM makinesi ile diz hareketi düzeltilir. Ev egzersiz programı ile kaslar güçlendirilir."
      }
    }
  ]
};

export default function DizProteziPage() {
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
                Diz Cerrahisi
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Total Diz Protezi Nedir?
              </h1>
              <p className="text-xl text-cyan-100 mb-6">
                Total diz protezi ameliyatı ile ağrısız ve aktif bir yaşam
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
                src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/02/diz_protezi.jpg"
                alt="Total Diz Protezi Ameliyatı"
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
              <strong>Total diz protezi</strong> (artroplasti), diz ekleminin aşınmış veya hasar görmüş yüzeylerinin 
              çıkarıldığı ve yapay parçalarla değiştirildiği cerrahi bir işlemdir. Diz; femur (uyluk kemiği), tibia 
              (kaval kemiği) ve patelladan (diz kapağı) oluşur.
            </p>
            <p className="text-gray-600">
              Femur ve tibia arasındaki yumuşak kıkırdak olan menisküs, yastık olarak işlev görür ve hareket sırasında 
              şokun emilmesine yardımcı olur. Artrit, yaralanma veya eklemin diğer hastalıkları bu koruyucu kıkırdak 
              tabakasına zarar verebilir ve günlük aktivitelerde aşırı ağrıya neden olabilir.
            </p>
          </section>

          {/* What is Calcification Section */}
          <section className="mb-12 bg-cyan-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Diz Kireçlenmesi Nedir?
            </h2>
            <p className="text-gray-700 mb-4">
              Kireçlenme (osteoartrit), bir artrit türüdür. Eklem kıkırdağının kademeli olarak yıprandığı diz artritinin 
              en yaygın şeklidir. Genellikle yaşlı insanları etkiler.
            </p>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-cyan-800 mb-3">Kireçlenme Nedenleri</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="text-cyan-500">•</span>
                  <span>Eklemde yaralanma veya travma</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-500">•</span>
                  <span>Diz eklemindeki kırıklar</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-500">•</span>
                  <span>Artan vücut ağırlığı</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-500">•</span>
                  <span>Eklem enfeksiyonu</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-500">•</span>
                  <span>Eklem iltihabı</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-500">•</span>
                  <span>Bağ dokusu hastalıkları</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Indications Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Total Diz Protezi Endikasyonları
            </h2>
            <p className="text-gray-600 mb-4">
              Total diz protezi ameliyatı, dizde görülen şiddetli kireçlenmelerde uygulanan cerrahi işlemdir. 
              Aşağıdaki durumlarda doktorunuz total diz protezi önerebilir:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: "⚠", title: "Şiddetli Diz Ağrısı", desc: "Günlük aktiviteleri sınırlayan (yürüme, merdiven)" },
                { icon: "⚠", title: "Gece Ağrıları", desc: "Dinlenme sırasında veya uykuyu bozan ağrı" },
                { icon: "⚠", title: "Kronik İltihap", desc: "Dinlenme/ilaçla rahatlamayan şişme" },
                { icon: "⚠", title: "Tedaviye Yanıtsızlık", desc: "İlaç, enjeksiyon, fizik tedaviden fayda yok" },
                { icon: "⚠", title: "Diz Deformitesi", desc: "Dizde şekil bozukluğu" },
                { icon: "⚠", title: "Hareket Kısıtlılığı", desc: "Dizi tam bükememe/açamama" }
              ].map((item, i) => (
                <div key={i} className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg flex items-start gap-3">
                  <span className="text-red-500 text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Procedure Section */}
          <section className="mb-12 bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Total Diz Protezi Ameliyatı
            </h2>
            <p className="text-gray-700 mb-4">
              Ameliyatın amacı ağrıyı azaltmak ve fonksiyonu geri kazandırmaktır. Spinal veya genel anestezi altında yapılır.
            </p>
            <div className="space-y-3">
              {[
                "Diz eklemini açığa çıkarmak için cilt kesisi yapılır",
                "Femur kemiğinin hasarlı kısımları özel jigler ile kesilir",
                "Femoral komponent kemik çimentosu ile/olmadan tutturulur",
                "Tibia ve kıkırdaktaki hasarlı bölge kesilir/tıraşlanır",
                "Tibial bileşen kemik çimentosu veya vidalarla sabitlenir",
                "İmplantlar arasına plastik eklem yüzeyi yerleştirilir (menisküs yerine)",
                "Patellanın (diz kapağı) arka yüzeyi plastik bileşenle hazırlanır",
                "Eklem hareket açıklığı test edilir",
                "Eklem steril çözelti ile yıkanır",
                "Kesi kapatılır, drenaj kanalları ve steril sargı yerleştirilir"
              ].map((step, i) => (
                <div key={i} className="flex gap-3 bg-white p-4 rounded-lg">
                  <span className="font-bold text-cyan-600 min-w-[32px]">{i + 1}.</span>
                  <span className="text-gray-700">{step}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Postoperative Care Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Ameliyat Sonrası Bakım
            </h2>
            <p className="text-gray-600 mb-4">
              Rehabilitasyon ameliyattan hemen sonra başlar.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="font-semibold text-green-800 mb-3">🏃 Fizik Tedavi</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Bacağı güçlendiren özel egzersizler</li>
                  <li>• Diz hareketini düzelten çalışmalar</li>
                  <li>• Koltuk değneği/yürüteç ile yürüme</li>
                  <li>• Diz immobilizörleri ile stabilizasyon</li>
                </ul>
              </div>
              <div className="bg-[#E6FAF8] p-6 rounded-xl">
                <h3 className="font-semibold text-[#01867A] mb-3">🔄 CPM Makinesi</h3>
                <p className="text-sm text-gray-700">
                  Sürekli Pasif Hareket (CPM) makinesi, hasta rahatlarken eklemi kontrollü bir hareket aralığında 
                  sürekli hareket ettiren tedavi cihazıdır.
                </p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="font-semibold text-yellow-800 mb-3">🏠 Ev Egzersizleri</h3>
                <p className="text-sm text-gray-700">
                  Fiziksel terapist, uyluk ve baldır kaslarını güçlendirmek için bir ev egzersiz programı sağlayacaktır.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="font-semibold text-purple-800 mb-3">📅 İyileşme Süreci</h3>
                <p className="text-sm text-gray-700">
                  Tam iyileşme 3-6 ay sürer. Düzenli kontroller ve fizik tedavi desteği ile normal yaşama dönüş sağlanır.
                </p>
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
                  q: "Total diz protezi nedir?",
                  a: "Total diz protezi (artroplasti), diz ekleminin aşınmış veya hasar görmüş yüzeylerinin çıkarıldığı ve yapay parçalarla değiştirildiği cerrahi bir işlemdir. Şiddetli diz kireçlenmesinde uygulanır."
                },
                {
                  q: "Diz protezi hangi durumlarda yapılır?",
                  a: "Günlük aktiviteleri sınırlayan şiddetli diz ağrısı, gece ağrıları, kronik iltihap, ilaç ve fizik tedaviye yanıtsızlık ve diz deformitesi durumlarında uygulanır."
                },
                {
                  q: "Ameliyat sonrası iyileşme süreci nasıldır?",
                  a: "Rehabilitasyon ameliyattan hemen sonra başlar. Fizik tedavi, özel egzersizler ve CPM makinesi ile diz hareketi düzeltilir. Ev egzersiz programı ile kaslar güçlendirilir."
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

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-cyan-600 to-cyan-800 text-white p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Diz Ağrınız mı Var?
            </h2>
            <p className="text-cyan-100 mb-6">
              Total diz protezi tedavisi için uzman değerlendirme. Ağrısız bir yaşam için doğru adım.
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
                <span className="font-medium">1.</span> Price AJ, et al. <em>"Knee replacement."</em> Lancet. 2018;392(10158):1672-1682.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=total+knee+arthroplasty" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">2.</span> Carr AJ, et al. <em>"Knee replacement."</em> Lancet. 2012;379(9823):1331-40.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=total+knee+arthroplasty" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">3.</span> Kurtz S, et al. <em>"Projections of primary and revision hip and knee arthroplasty in the United States from 2005 to 2030."</em> J Bone Joint Surg Am. 2007;89(4):780-5.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=total+knee+arthroplasty" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">4.</span> Skou ST, et al. <em>"Total knee replacement and non-surgical treatment of knee osteoarthritis."</em> Osteoarthritis Cartilage. 2015;23(8):1276-83.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=total+knee+arthroplasty" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">5.</span> Ethgen O, et al. <em>"Health-related quality of life in total hip and total knee arthroplasty."</em> J Bone Joint Surg Am. 2004;86(5):963-74.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=total+knee+arthroplasty" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
              </li>
            </ol>
            
            <details className="mt-4">
              <summary className="cursor-pointer text-[#01CAB8] font-medium hover:text-[#01867A] flex items-center gap-2">
                <span>📖 Daha Fazla Kaynak Göster (5 ek referans)</span>
              </summary>
              <ol start={6} className="space-y-3 text-sm text-gray-700 mt-4 pt-4 border-t">
                <li>
                  <span className="font-medium">6.</span> Jones CA, et al. <em>"Total joint arthroplasties: current concepts of patient outcomes after surgery."</em> Rheum Dis Clin North Am. 2007;33(1):71-86.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=total+knee+arthroplasty" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">7.</span> Losina E, et al. <em>"Cost-effectiveness of total knee arthroplasty in the United States."</em> Arch Intern Med. 2009;169(12):1113-21.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=total+knee+arthroplasty" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">8.</span> Insall JN, et al. <em>"Total knee arthroplasty."</em> Clin Orthop Relat Res. 1985;(192):13-22.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov">PMID: 3967412</a>
                </li>
                <li>
                  <span className="font-medium">9.</span> Ranawat CS, et al. <em>"Total condylar knee arthroplasty."</em> Clin Orthop Relat Res. 1976;(120):76-82.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=total+knee+arthroplasty" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">10.</span> Maradit Kremers H, et al. <em>"Prevalence of Total Hip and Knee Replacement in the United States."</em> J Bone Joint Surg Am. 2015;97(17):1386-97.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=total+knee+arthroplasty" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
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
                { title: "Kondromalazi Patella", href: "/blog/kondromalazi" },
                { title: "Ameliyatsız Çözümler", href: "/ameliyatsiz-cozumler" }
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
