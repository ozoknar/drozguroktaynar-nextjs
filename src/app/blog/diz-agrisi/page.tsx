import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diz Ağrısı Nedenleri ve Tedavisi | Op. Dr. Özgür Oktay Nar",
  description: "Diz ağrısı nedenleri, tanı yöntemleri ve tedavi seçenekleri. Kireçlenme, menisküs yırtığı, bağ yaralanmaları tedavisi. Bursa ortopedi uzmanı.",
  keywords: ["diz ağrısı", "diz ağrısı nedenleri", "menisküs yırtığı", "diz tedavisi", "bağ yaralanması", "bursa ortopedi"],
  openGraph: {
    title: "Diz Ağrısı Nedenleri ve Tedavisi",
    description: "Diz ağrısı tedavisi hakkında uzman bilgisi. Op. Dr. Özgür Oktay Nar - Bursa Ortopedi Uzmanı",
    type: "article",
    url: "https://www.ozguroktaynar.com/blog/diz-agrisi",
    images: [
      {
        url: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/01/diz_agrisi.jpg",
        width: 1200,
        height: 800,
        alt: "Diz Ağrısı Tedavisi",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Diz Ağrısı Nedenleri ve Tedavisi",
  "description": "Diz ağrısı, farklı yaş gruplarından bireyleri etkileyen yaygın bir durumdur. Sadece hareketi değil, aynı zamanda bireyin yaşam kalitesini de etkiler.",
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
  "mainEntityOfPage": "https://www.ozguroktaynar.com/blog/diz-agrisi",
  "image": "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/01/diz_agrisi.jpg"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Diz ağrısı nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Diz ağrısı, farklı yaş gruplarını etkileyen yaygın bir durumdur. Diz eklemi yaralanması, hastalığı veya çevresindeki yapılarda sorun ağrıya neden olabilir."
      }
    },
    {
      "@type": "Question",
      "name": "Diz ağrısının en sık nedenleri nelerdir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kireçlenme, bağ yaralanmaları, menisküs yırtığı, patellar tendinit, kondromalazi patella, diz çıkığı, bursit, plica sendromu ve osteokondrit dissekans en sık nedenlerdir."
      }
    },
    {
      "@type": "Question",
      "name": "Diz ağrısı nasıl tedavi edilir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dinlenme, buz uygulaması, antienflamatuar ilaçlar, germe, fizik tedavi ve kortizon enjeksiyonları uygulanır. Bazı durumlarda diz artroskopisi gerekebilir."
      }
    }
  ]
};

export default function DizAgrisiPage() {
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
      <section className="relative bg-gradient-to-r from-emerald-900 to-emerald-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-emerald-500 text-sm px-3 py-1 rounded-full mb-4">
                Diz Sağlığı
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Diz Ağrısı Nedenleri
              </h1>
              <p className="text-xl text-emerald-100 mb-6">
                Diz ağrısı nedenleri, tanı yöntemleri ve tedavi seçenekleri
              </p>
              <a
                href="tel:+905398416801"
                className="inline-block bg-white text-emerald-900 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition"
              >
                Randevu Al: 0539 841 68 01
              </a>
            </div>
            <div className="hidden md:block">
              <img
                src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/01/diz_agrisi.jpg"
                alt="Diz Ağrısı Tedavisi"
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
              <strong>Diz ağrısı</strong>, farklı yaş gruplarından bireyleri etkileyen yaygın bir durumdur. 
              Sadece hareketi değil, aynı zamanda bireyin yaşam kalitesini de etkiler. Diz eklemi yaralanması 
              veya hastalığı veya diz çevresindeki herhangi bir yapı diz ağrısıyla sonuçlanabilir.
            </p>
            <p className="text-gray-600">
              Altta yatan nedenin kesin bir teşhisi, uygun bir tedavi planı geliştirmek için önemlidir.
            </p>
          </section>

          {/* Anatomy Section */}
          <section className="mb-12 bg-emerald-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Diz Eklemi Anatomisi
            </h2>
            <p className="text-gray-700">
              Diz, femurun (uyluk kemiği) alt ucu, tibia (kaval kemiği) üst ucu ve patella (diz kapağı)dan oluşan, 
              vücuttaki <strong>en büyük eklemlerden biridir</strong>. Birkaç ligament ve kas, eklemin normal hareketini 
              sağlamak için diz ekleminin kemiklerine bağlanır. Menisci olarak bilinen özel kıkırdak dokuları eklemin 
              iki eklem ucu arasına yerleştirilir. Bunlar, eklem yüzeyleri arasında bir tampon görevi görür ve hareket 
              sırasındaki şoku emer.
            </p>
          </section>

          {/* Causes Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Diz Ağrısının Yaygın Nedenleri
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: "🔴", title: "Kireçlenme (Artrit)", desc: "Eklem iltihabı ile ilişkili durum" },
                { icon: "🟠", title: "Diz Bağ Yaralanmaları", desc: "ACL, PCL, MCL, LCL yırtıkları" },
                { icon: "🟡", title: "Yırtık Menisküs", desc: "Diz kıkırdağının yırtılması" },
                { icon: "🟢", title: "Patellar Tendinit", desc: "Patella tendonunun iltihabı" },
                { icon: "🔵", title: "Kondromalazi Patella", desc: "Diz kapağı altı kıkırdak yumuşaması" },
                { icon: "🟣", title: "Çıkık Diz Kapağı", desc: "Patella lüksasyonu" },
                { icon: "🟤", title: "Fırıncı Kisti", desc: "Dizin arkasında sıvı dolu şişlik" },
                { icon: "⚫", title: "Diz Bursit", desc: "Bursa (sıvı kesesi) iltihabı" },
                { icon: "🔴", title: "Plica Sendromu", desc: "Sinovyal dokunun iltihabı" },
                { icon: "🟠", title: "Osgood-Schlatter", desc: "Ergenlerde büyüme plağı tahrişi" },
                { icon: "🟡", title: "Osteokondrit Dissekans", desc: "Kıkırdak ve kemik fragmanı ayrılması" },
                { icon: "🟢", title: "Gut", desc: "Ürik asit kristali birikimi" }
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

          {/* Diagnosis Section */}
          <section className="mb-12 bg-blue-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Diz Ağrısı Tanısı
            </h2>
            <p className="text-gray-700 mb-4">
              Diz hastalıkları uygun bir tanı ve tedavi için doktorunuz tarafından değerlendirilmelidir. 
              Ayrıntılı tıbbi öykü ve diz fizik muayenesi tanı için çok önemlidir.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">📋 Fizik Muayene</h3>
                <p className="text-sm text-gray-600">Hareket testi, stabilite ve hassasiyet değerlendirmesi</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">📷 Röntgen</h3>
                <p className="text-sm text-gray-600">Kemik yapısı ve eklem boşluğu değerlendirmesi</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">🧲 MRI</h3>
                <p className="text-sm text-gray-600">Kıkırdak, bağ, tendon ve menisküs hasarları</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">🖥️ BT & Ultrason</h3>
                <p className="text-sm text-gray-600">Detaylı görüntüleme ve yumuşak doku incelemesi</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">🔬 Kan Testleri</h3>
                <p className="text-sm text-gray-600">Enfeksiyon, gut veya psödogut tanısı</p>
              </div>
            </div>
          </section>

          {/* Treatment Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Diz Ağrısının Tedavisi
            </h2>
            <p className="text-gray-600 mb-6">
              Tedavi seçenekleri diz ağrısından sorumlu altta yatan nedene bağlıdır.
            </p>
            <div className="space-y-4">
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="font-semibold text-green-800 mb-3">🛏️ Dinlenme</h3>
                <p className="text-gray-700">Ağrıyı tetikleyen aktivitelerden kaçınma ve eklem dinlendirme</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-semibold text-blue-800 mb-3">🧊 Buz ve Isı Uygulaması</h3>
                <p className="text-gray-700">Akut ağrıda buz (15dk, 3-4 kez/gün), kronik ağrıda sıcak kompres</p>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="font-semibold text-purple-800 mb-3">💊 İlaç Tedavisi</h3>
                <p className="text-gray-700">Antienflamatuar ilaçlar (ibuprofen, naproksen) ağrı ve iltihabı azaltır</p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="font-semibold text-yellow-800 mb-3">🤸 Germe ve Fizik Tedavi</h3>
                <p className="text-gray-700">Kas güçlendirme, esneklik artırma ve eklem hareketliliğini koruma</p>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="font-semibold text-orange-800 mb-3">💉 Kortizon Enjeksiyonları</h3>
                <p className="text-gray-700">Güçlü anti-enflamatuar etki için eklem içi enjeksiyon</p>
              </div>

              <div className="bg-red-50 p-6 rounded-xl">
                <h3 className="font-semibold text-red-800 mb-3">🏥 Diz Artroskopisi</h3>
                <p className="text-gray-700">Eklem içi yapıların incelenmesi ve onarımı için minimal invaziv cerrahi</p>
              </div>
            </div>
          </section>

          {/* When to See Doctor Section */}
          <section className="mb-12 bg-red-50 border-l-4 border-red-500 p-8 rounded-r-lg">
            <h2 className="text-2xl font-bold text-red-800 mb-4">
              ⚠️ Ne Zaman Doktora Gidilmeli?
            </h2>
            <p className="text-gray-700 mb-4">
              Aşağıdaki durumlardan biri varsa tıbbi müdahale için doktorunuza danışmalısınız:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span className="text-red-500">•</span>
                <span>Yürümekte güçlük veya yetersizlik</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">•</span>
                <span>Eklemin etrafında şekil bozukluğu</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">•</span>
                <span>Dizin tam olarak bükülememesi</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">•</span>
                <span>Geceleri birkaç gün ve daha uzun süren diz ağrısı</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">•</span>
                <span>Şişlik, sıcaklık veya kızarıklık ile ilişkili ağrı</span>
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
                  q: "Diz ağrısı nedir?",
                  a: "Diz ağrısı, farklı yaş gruplarını etkileyen yaygın bir durumdur. Diz eklemi yaralanması, hastalığı veya çevresindeki yapılarda sorun ağrıya neden olabilir."
                },
                {
                  q: "Diz ağrısının en sık nedenleri nelerdir?",
                  a: "Kireçlenme, bağ yaralanmaları, menisküs yırtığı, patellar tendinit, kondromalazi patella, diz çıkığı, bursit, plica sendromu ve osteokondrit dissekans en sık nedenlerdir."
                },
                {
                  q: "Diz ağrısı nasıl tedavi edilir?",
                  a: "Dinlenme, buz uygulaması, antienflamatuar ilaçlar, germe, fizik tedavi ve kortizon enjeksiyonları uygulanır. Bazı durumlarda diz artroskopisi gerekebilir."
                }
              ].map((faq, i) => (
                <details key={i} className="bg-gray-50 rounded-lg p-4 group">
                  <summary className="font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                    {faq.q}
                    <span className="text-emerald-500 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-3 text-gray-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Diz Ağrınız mı Var?
            </h2>
            <p className="text-emerald-100 mb-6">
              Erken tanı ve tedavi için hemen randevu alın. Uzman değerlendirme ile doğru çözüm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+905398416801"
                className="bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition"
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
                <span className="font-medium">1.</span> Nguyen U-S, et al. <em>"Increasing prevalence of knee pain and symptomatic knee osteoarthritis."</em> Ann Intern Med. 2011;155(11):725-32.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=knee+pain+diagnosis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">2.</span> Arden N, Nevitt MC. <em>"Osteoarthritis: epidemiology."</em> Best Pract Res Clin Rheumatol. 2006;20(1):3-25.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=knee+pain+diagnosis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">3.</span> Sharma L, et al. <em>"The role of knee alignment in disease progression and functional decline in knee osteoarthritis."</em> JAMA. 2001;286(2):188-95.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=knee+pain+diagnosis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">4.</span> Englund M, et al. <em>"Incidental meniscal findings on knee MRI in middle-aged and elderly persons."</em> N Engl J Med. 2008;359(11):1108-15.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=knee+pain+diagnosis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">5.</span> Toivanen AT, et al. <em>"Obesity, physically demanding work and traumatic knee injury are major risk factors for knee osteoarthritis."</em> Acta Orthop. 2010;81(4):511-8.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=knee+pain+diagnosis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
            </ol>
            
            <details className="mt-4">
              <summary className="cursor-pointer text-blue-600 font-medium hover:text-blue-800 flex items-center gap-2">
                <span>📖 Daha Fazla Kaynak Göster (5 ek referans)</span>
              </summary>
              <ol start={6} className="space-y-3 text-sm text-gray-700 mt-4 pt-4 border-t">
                <li>
                  <span className="font-medium">6.</span> Felson DT, et al. <em>"Weight loss reduces the risk for symptomatic knee osteoarthritis in women."</em> Ann Intern Med. 1992;116(7):535-9.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=knee+pain+diagnosis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">7.</span> Hochberg MC, et al. <em>"American College of Rheumatology 2012 recommendations for the use of nonpharmacologic and pharmacologic therapies in osteoarthritis."</em> Arthritis Care Res (Hoboken). 2012;64(4):465-74.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=knee+pain+diagnosis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">8.</span> McAlindon TE, et al. <em>"OARSI guidelines for the non-surgical management of knee osteoarthritis."</em> Osteoarthritis Cartilage. 2014;22(3):363-88.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=knee+pain+diagnosis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">9.</span> Zhang W, et al. <em>"OARSI recommendations for the management of hip and knee osteoarthritis, Part II: OARSI evidence-based, expert consensus guidelines."</em> Osteoarthritis Cartilage. 2008;16(2):137-62.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=knee+pain+diagnosis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">10.</span> Silverwood V, et al. <em>"Current evidence on risk factors for knee osteoarthritis in older adults: a systematic review and meta-analysis."</em> Osteoarthritis Cartilage. 2015;23(4):507-15.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=knee+pain+diagnosis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
              </ol>
            </details>
          </section>

          {/* Related Links */}
          <section className="mt-12">
            <h3 className="text-xl font-bold text-gray-800 mb-4">İlgili Konular</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Diz Protezi", href: "/blog/diz-protezi" },
                { title: "Kondromalazi Patella", href: "/blog/kondromalazi" },
                { title: "Ameliyatsız Çözümler", href: "/ameliyatsiz-cozumler" }
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <span className="text-emerald-600 font-medium">{link.title} →</span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
