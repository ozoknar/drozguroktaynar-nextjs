import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Omuz Artroskopisi Nedir? Minimal İnvaziv Tedavi | Op. Dr. Özgür Oktay Nar",
  description: "Omuz artroskopisi minimal invaziv cerrahi tekniği ile omuz hasarlarının tedavisi. Rotator manşet, impingement sendromu tedavisi. Bursa ortopedi uzmanı.",
  keywords: ["omuz artroskopisi", "minimal invaziv", "rotator manşet yırtığı", "omuz cerrahisi", "impingement", "bursa ortopedi"],
  openGraph: {
    title: "Omuz Artroskopisi Nedir? Minimal İnvaziv Tedavi",
    description: "Omuz artroskopisi tedavisi hakkında uzman bilgisi. Op. Dr. Özgür Oktay Nar - Bursa Ortopedi Uzmanı",
    type: "article",
    url: "https://www.ozguroktaynar.com/blog/omuz-artroskopisi",
    images: [
      {
        url: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/04/omuz_artroskopisi.jpg",
        width: 1200,
        height: 800,
        alt: "Omuz Artroskopisi İşlemi",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Omuz Artroskopisi Nedir? Minimal İnvaziv Tedavi",
  "description": "Omuz artroskopisi, omuz ekleminde meydana gelen ağrı, hareket kısıtlılığı veya yaralanmaların tedavisinde kullanılan minimal invaziv bir cerrahi yöntemdir.",
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
  "mainEntityOfPage": "https://www.ozguroktaynar.com/blog/omuz-artroskopisi",
  "image": "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/04/omuz_artroskopisi.jpg"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Omuz artroskopisi nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Omuz artroskopisi, minimal invaziv cerrahi yöntemdir. Artroskop adlı kalem inceliğindeki cihazla omuz eklemi içi görüntülenir ve gerekirse onarım yapılır."
      }
    },
    {
      "@type": "Question",
      "name": "Omuz artroskopisi hangi durumlarda uygulanır?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rotator manşet yırtığı, omuz sıkışma sendromu, donmuş omuz, omuz instabilitesi, kıkırdak hasarları ve bursit tedavisinde uygulanır."
      }
    },
    {
      "@type": "Question",
      "name": "Ameliyat sonrası iyileşme süresi ne kadar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ortalama 4-8 hafta arasında değişir. Fizik tedavi ile desteklenir. Küçük kesiler nedeniyle iyileşme süreci açık cerrahiye göre çok daha hızlıdır."
      }
    }
  ]
};

export default function OmuzArtroskopisiPage() {
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
      <section className="relative bg-gradient-to-r from-indigo-900 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-indigo-500 text-sm px-3 py-1 rounded-full mb-4">
                Minimal İnvaziv Cerrahi
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Omuz Artroskopisi Nedir?
              </h1>
              <p className="text-xl text-indigo-100 mb-6">
                Omuz hasarlarının minimal invaziv cerrahi ile tedavisi
              </p>
              <a
                href="tel:+905398416801"
                className="inline-block bg-white text-indigo-900 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition"
              >
                Randevu Al: 0539 841 68 01
              </a>
            </div>
            <div className="hidden md:block">
              <img
                src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/04/omuz_artroskopisi.jpg"
                alt="Omuz Artroskopisi İşlemi"
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
              <strong>Omuz artroskopisi</strong>, omuz ekleminde meydana gelen ağrı, hareket kısıtlılığı veya 
              yaralanmaların tedavisinde kullanılan minimal invaziv bir cerrahi yöntemdir. Bu işlemde "artroskop" 
              adı verilen kalem inceliğinde bir cihaz kullanılır.
            </p>
            <p className="text-gray-600">
              Artroskop, uç kısmında bulunan ışık ve kamera sistemi sayesinde eklem içindeki yapıları yüksek 
              çözünürlükte görüntüler. Görüntüler bir monitöre yansıtılarak cerrahın eklem içini detaylı şekilde 
              görmesi sağlanır. Açık cerrahiye kıyasla daha küçük kesilerle gerçekleştirilmesi nedeniyle hasta 
              konforu yüksektir ve iyileşme süresi kısadır.
            </p>
          </section>

          {/* Anatomy Section */}
          <section className="mb-12 bg-blue-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Omuz Anatomisi
            </h2>
            <p className="text-gray-700">
              Omuz eklemi, insan vücudundaki <strong>en hareketli eklemlerden</strong> biridir. Üst kol kemiği olan 
              humerus, omuz kemiğinin (skapula) üzerindeki glenoid adlı yuvaya oturarak bir top-soket eklem yapısı 
              oluşturur. Bu yapıyı çevreleyen kıkırdak dokusu, kemiklerin birbiriyle sürtünmesini engelleyerek 
              pürüzsüz bir hareket sağlar.
            </p>
          </section>

          {/* Applications Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Omuz Artroskopisinin Uygulama Alanları
            </h2>
            <p className="text-gray-600 mb-4">
              Omuz artroskopisi genellikle ilaç, fizik tedavi veya enjeksiyon gibi konservatif yöntemlerin 
              yeterli olmadığı durumlarda tercih edilir.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: "🔹", title: "Rotator Manşet Yırtığı", desc: "Omuz kas ve tendon tamiri" },
                { icon: "🔹", title: "Omuz Sıkışma Sendromu", desc: "Impingement sendromu tedavisi" },
                { icon: "🔹", title: "Donmuş Omuz", desc: "Adhesive kapsülit tedavisi" },
                { icon: "🔹", title: "Omuz İnstabilitesi", desc: "Tekrarlayan çıkık tedavisi" },
                { icon: "🔹", title: "Kıkırdak/Bağ Hasarları", desc: "Yumuşak doku onarımı" },
                { icon: "🔹", title: "Kemik Çıkıntıları", desc: "Kemik mahmuzları temizleme" },
                { icon: "🔹", title: "Köprücük Kemiği Artriti", desc: "AC eklem tedavisi" },
                { icon: "🔹", title: "Bursit", desc: "Bursa iltihaplanmaları tedavisi" }
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

          {/* Procedure Section */}
          <section className="mb-12 bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Omuz Artroskopisi Nasıl Yapılır?
            </h2>
            <p className="text-gray-700 mb-4">
              Omuz artroskopisi genellikle genel veya bölgesel anestezi altında uygulanır. İşlem süresi 
              ortalama 1 ila 2 saat arasında değişir.
            </p>
            <div className="space-y-3">
              {[
                "Eklem içine steril sıvı enjekte edilir (eklem boşluğu genişler)",
                "Omuz üzerinde küçük bir kesi açılarak artroskop yerleştirilir",
                "Kamera görüntüleri monitöre aktarılır",
                "Gerekli onarımlar için birkaç küçük kesi daha açılır",
                "Mikro cerrahi aletlerle onarım yapılır",
                "Cerrahi aletler çıkarılır, kesiler kapatılır"
              ].map((step, i) => (
                <div key={i} className="flex gap-3 bg-white p-4 rounded-lg">
                  <span className="font-bold text-indigo-600 min-w-[24px]">{i + 1}.</span>
                  <span className="text-gray-700">{step}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-green-100 rounded-lg">
              <p className="text-sm text-green-800">
                ✓ <strong>Taburcu:</strong> Genellikle aynı gün veya ertesi gün taburcu olunabilir.
              </p>
            </div>
          </section>

          {/* Postoperative Care Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Ameliyat Sonrası Dönem
            </h2>
            <p className="text-gray-600 mb-4">
              İyileşme süreci, yapılan cerrahi onarımın türüne ve hastanın genel sağlık durumuna göre değişir.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="font-semibold text-yellow-800 mb-3">🎽 Omuz Askısı</h3>
                <p className="text-sm text-gray-700">Kolun kısa bir süreliğine sabitlenmesi gerekebilir</p>
              </div>
              <div className="bg-red-50 p-6 rounded-xl">
                <h3 className="font-semibold text-red-800 mb-3">💊 Ağrı Kontrolü</h3>
                <p className="text-sm text-gray-700">Reçeteli ağrı kesiciler düzenli kullanılmalıdır</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-semibold text-blue-800 mb-3">🏃 Fizik Tedavi</h3>
                <p className="text-sm text-gray-700">Birkaç gün sonra başlanır, özel egzersiz programı</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="font-semibold text-green-800 mb-3">⏱️ İyileşme Süresi</h3>
                <p className="text-sm text-gray-700">Ortalama 4-8 hafta, sporcular için daha uzun</p>
              </div>
            </div>
          </section>

          {/* Advantages Section */}
          <section className="mb-12 bg-green-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Omuz Artroskopisinin Avantajları
            </h2>
            <p className="text-gray-700 mb-4">
              Açık cerrahiye göre birçok avantaja sahiptir:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Daha küçük kesiler ve minimal doku hasarı",
                "Ameliyat sonrası daha az ağrı ve şişlik",
                "Kısa hastanede kalış süresi",
                "Enfeksiyon riskinin azalması",
                "Daha hızlı iyileşme ve rehabilitasyon süreci",
                "Günlük aktivitelere erken dönüş"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
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
                  q: "Omuz artroskopisi nedir?",
                  a: "Omuz artroskopisi, minimal invaziv cerrahi yöntemdir. Artroskop adlı kalem inceliğindeki cihazla omuz eklemi içi görüntülenir ve gerekirse onarım yapılır."
                },
                {
                  q: "Omuz artroskopisi hangi durumlarda uygulanır?",
                  a: "Rotator manşet yırtığı, omuz sıkışma sendromu, donmuş omuz, omuz instabilitesi, kıkırdak hasarları ve bursit tedavisinde uygulanır."
                },
                {
                  q: "Ameliyat sonrası iyileşme süresi ne kadar?",
                  a: "Ortalama 4-8 hafta arasında değişir. Fizik tedavi ile desteklenir. Küçük kesiler nedeniyle iyileşme süreci açık cerrahiye göre çok daha hızlıdır."
                }
              ].map((faq, i) => (
                <details key={i} className="bg-gray-50 rounded-lg p-4 group">
                  <summary className="font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                    {faq.q}
                    <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-3 text-gray-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Omuz Artroskopisi İçin Randevu Alın
            </h2>
            <p className="text-indigo-100 mb-6">
              Minimal invaziv tedavi ile omuz sorunlarınıza çözüm. Uzman değerlendirme için hemen iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+905398416801"
                className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition"
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
                <span className="font-medium">1.</span> Papadonikolakis A, et al. <em>"Arthroscopic versus open rotator cuff repair."</em> Am J Orthop (Belle Mead NJ). 2011;40(5):245-54.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=shoulder+arthroscopy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">2.</span> Galatz LM, et al. <em>"The outcome and repair integrity of completely arthroscopically repaired large and massive rotator cuff tears."</em> J Bone Joint Surg Am. 2004;86(2):219-24.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=shoulder+arthroscopy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">3.</span> Wolf EM, et al. <em>"Arthroscopic shoulder arthroscopy: a historical perspective."</em> Arthroscopy. 2005;21(3):331-6.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=shoulder+arthroscopy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">4.</span> Gartsman GM, et al. <em>"Arthroscopic rotator cuff repair."</em> Orthop Clin North Am. 1997;28(2):277-91.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=shoulder+arthroscopy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">5.</span> Burkhart SS, et al. <em>"Arthroscopic rotator cuff repair: analysis of results by tear size and by repair technique."</em> Arthroscopy. 2001;17(9):905-12.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=shoulder+arthroscopy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
            </ol>
            
            <details className="mt-4">
              <summary className="cursor-pointer text-blue-600 font-medium hover:text-blue-800 flex items-center gap-2">
                <span>📖 Daha Fazla Kaynak Göster (5 ek referans)</span>
              </summary>
              <ol start={6} className="space-y-3 text-sm text-gray-700 mt-4 pt-4 border-t">
                <li>
                  <span className="font-medium">6.</span> Tauro JC. <em>"Arthroscopic rotator cuff repair: analysis of technique and results at 2- and 3-year follow-up."</em> Arthroscopy. 1998;14(1):45-51.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=shoulder+arthroscopy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">7.</span> Lo IK, Burkhart SS. <em>"Current concepts in arthroscopic rotator cuff repair."</em> Am J Sports Med. 2003;31(2):308-24.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=shoulder+arthroscopy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">8.</span> Sperling JW, et al. <em>"Complications after arthroscopic shoulder surgery."</em> J Bone Joint Surg Am. 2001;83(7):1072-5.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=shoulder+arthroscopy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">9.</span> Mazzocca AD, et al. <em>"Arthroscopic single-row versus double-row suture anchor rotator cuff repair."</em> Am J Sports Med. 2005;33(12):1861-8.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=shoulder+arthroscopy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">10.</span> Romeo AA, et al. <em>"Shoulder arthroscopy: portal anatomy."</em> Arthroscopy. 2002;18(1):103-6.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=shoulder+arthroscopy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
              </ol>
            </details>
          </section>

          {/* Related Links */}
          <section className="mt-12">
            <h3 className="text-xl font-bold text-gray-800 mb-4">İlgili Konular</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Rotator Manşet Yırtığı", href: "/blog/rotator-manset" },
                { title: "Omuz Sıkışması", href: "/blog/omuz-sikismasi" },
                { title: "Ameliyatsız Çözümler", href: "/ameliyatsiz-cozumler" }
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <span className="text-indigo-600 font-medium">{link.title} →</span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
