import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rotator Manşet Yırtığı Nedir? Tedavisi | Op. Dr. Özgür Oktay Nar",
  description: "Rotator manşet yırtığı nedenleri, belirtileri ve tedavi yöntemleri. İlaç, fizik tedavi ve cerrahi seçenekler. Bursa ortopedi uzmanı.",
  keywords: ["rotator manşet yırtığı", "omuz yırtığı", "omuz ağrısı", "omuz tedavisi", "rotator cuff tear", "bursa ortopedi"],
  openGraph: {
    title: "Rotator Manşet Yırtığı Nedir? Tedavisi",
    description: "Rotator manşet yırtığı tedavisi hakkında uzman bilgisi. Op. Dr. Özgür Oktay Nar - Bursa Ortopedi Uzmanı",
    type: "article",
    url: "https://www.ozguroktaynar.com/blog/rotator-manset",
    images: [
      {
        url: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/03/rotator_manset.jpg",
        width: 1200,
        height: 800,
        alt: "Rotator Manşet Yırtığı Tedavisi",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Rotator Manşet Yırtığı Nedir? Tedavisi",
  "description": "Rotator manşet yırtığı, omuz bölgesindeki kas ve tendonların zorlanması, düşme veya yaşa bağlı yıpranma sonucunda ortaya çıkan bir rahatsızlıktır.",
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
  "mainEntityOfPage": "https://www.ozguroktaynar.com/blog/rotator-manset",
  "image": "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/03/rotator_manset.jpg"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Rotator manşet nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rotator manşet, üst kol kemiğinin omuz eklemine bağlandığı noktayı çevreleyen dört adet kastan oluşan yapıdır. Omuz eklemini sabit tutar ve kolun hareketlerini sağlar."
      }
    },
    {
      "@type": "Question",
      "name": "Rotator manşet yırtığının belirtileri nelerdir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Omuzdan kola yayılan ağrı, kolu başın üzerine kaldırmada zorluk, yırtık tarafa yatamama, kolda güç kaybı ve basit hareketlerde (saç tarama, sırt kaşıma) zorluk görülür."
      }
    },
    {
      "@type": "Question",
      "name": "Rotator manşet yırtığı nasıl tedavi edilir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "İlaç, dinlenme, fizik tedavi ve egzersizlerle tedavi edilir. 3 cm'den büyük yırtıklarda veya konservatif tedaviye yanıt yoksa cerrahi müdahale gerekir."
      }
    }
  ]
};

export default function RotatorMansetPage() {
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
      <section className="relative bg-gradient-to-r from-rose-900 to-rose-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-rose-500 text-sm px-3 py-1 rounded-full mb-4">
                Omuz Sağlığı
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Rotator Manşet Yırtığı
              </h1>
              <p className="text-xl text-rose-100 mb-6">
                Rotator manşet yırtığı nedenleri, belirtileri ve tedavi yöntemleri
              </p>
              <a
                href="tel:+905398416801"
                className="inline-block bg-white text-rose-900 px-8 py-3 rounded-lg font-semibold hover:bg-rose-50 transition"
              >
                Randevu Al: 0539 841 68 01
              </a>
            </div>
            <div className="hidden md:block">
              <img
                src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/03/rotator_manset.jpg"
                alt="Rotator Manşet Yırtığı Tedavisi"
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
              <strong>Rotator manşet yırtığı</strong>, omuz bölgesindeki kas ve tendonların zorlanması, düşme veya 
              yaşa bağlı yıpranma sonucunda ortaya çıkan bir rahatsızlıktır. Özellikle 40 yaş üzerindeki kişilerde, 
              kürek kemiği önündeki kemik çıkıntısının altında bulunan tendonların sıkışması bu yırtığın en sık 
              nedenlerinden biridir.
            </p>
            <p className="text-gray-600">
              Bu durumda ağrı omuzdan kola doğru yayılır. Kolu başın üzerine kaldırmak veya yırtığın olduğu tarafa 
              yatmak ağrıyı artırabilir. Ayrıca kolda güç kaybı oluşabilir ve saç tarama, sırt kaşıma gibi basit 
              hareketler dahi zorlaşabilir.
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mt-4">
              <p className="text-red-800">
                ⚠️ <strong>Önemli:</strong> Rotator manşet yırtığı zamanla büyüyebilen bir rahatsızlıktır. 
                Erken dönemde fark edilmesi ve tedaviye başlanması oldukça önemlidir.
              </p>
            </div>
          </section>

          {/* What is Rotator Cuff Section */}
          <section className="mb-12 bg-gradient-to-r from-rose-50 to-pink-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Rotator Manşet Nedir?
            </h2>
            <p className="text-gray-700 mb-4">
              Rotator manşet, üst kol kemiğinin omuz eklemine bağlandığı noktayı çevreleyen <strong>dört adet kastan 
              oluşan yapıdır</strong>. Bu kaslar omuz eklemini sabit tutar ve kolun yukarı, aşağı, içe ve dışa hareket 
              etmesini sağlar.
            </p>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-rose-800 mb-2">4 Ana Kas:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>Supraspinatus:</strong> Kolun yan tarafa kaldırılması</li>
                <li>• <strong>Infraspinatus:</strong> Dış rotasyon</li>
                <li>• <strong>Teres Minor:</strong> Dış rotasyon desteği</li>
                <li>• <strong>Subscapularis:</strong> İç rotasyon</li>
              </ul>
            </div>
          </section>

          {/* How it Occurs Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Rotator Manşet Yırtığı Nasıl Oluşur?
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                <h3 className="font-semibold text-orange-800 mb-3">📈 Dejeneratif (Yaşa Bağlı)</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Zamanla yıpranma</li>
                  <li>• 40 yaş üzeri sık görülür</li>
                  <li>• Tekrarlayan zorlayıcı hareketler</li>
                  <li>• Kireçlenme ve daralma</li>
                </ul>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="font-semibold text-red-800 mb-3">💥 Travmatik (Ani Yaralanma)</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Düşme</li>
                  <li>• Ani yük kaldırma</li>
                  <li>• Spor yaralanması</li>
                  <li>• Omuz çıkığı</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Diagnosis Section */}
          <section className="mb-12 bg-blue-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Tanı Süreci
            </h2>
            <p className="text-gray-700 mb-4">
              Tanı süreci hastanın şikâyetlerinin ayrıntılı olarak değerlendirilmesiyle başlar.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">1️⃣ Fizik Muayene</h3>
                <p className="text-sm text-gray-600">Hareket testleri ve güç değerlendirmesi</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">2️⃣ Röntgen/Ultrason</h3>
                <p className="text-sm text-gray-600">İlk değerlendirme görüntüleme</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">3️⃣ MR Görüntüleme</h3>
                <p className="text-sm text-gray-600">Kesin tanı için en etkili yöntem</p>
              </div>
            </div>
          </section>

          {/* Treatment Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Rotator Manşet Yırtığı Tedavisi
            </h2>
            <p className="text-gray-600 mb-6">
              Tanı konulduktan sonra amaç, ağrının azaltılması ve omuz fonksiyonlarının geri kazandırılmasıdır. 
              Tedavi yöntemi, hastanın yaşı, genel sağlık durumu ve yırtığın büyüklüğüne göre belirlenir.
            </p>
            <div className="space-y-4">
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <span>💊</span> 1. İlaç ve Dinlenme Tedavisi
                </h3>
                <p className="text-gray-700">
                  Doktor tavsiyesiyle omuz hareketleri kısıtlanabilir ve ağrıyı azaltmak için ilaç tedavisine 
                  başlanabilir. Anti-enflamatuar ilaçlar iltihap ve ağrıyı azaltır.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-800 mb-3 flex items-center gap-2">
                  <span>🏃</span> 2. Fizik Tedavi ve Egzersizler
                </h3>
                <p className="text-gray-700 mb-3">
                  Omuz çevresindeki kasların güçlendirilmesi ve hareket açıklığının artırılması için fizik tedavi 
                  oldukça etkilidir.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Hedefler:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Kas gücünü artırma</li>
                    <li>• Hareket açıklığını koruma</li>
                    <li>• Ağrıyı azaltma</li>
                    <li>• Fonksiyon kaybını önleme</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-red-800 mb-3 flex items-center gap-2">
                  <span>🏥</span> 3. Cerrahi Müdahale
                </h3>
                <p className="text-gray-700 mb-3">
                  Aşağıdaki durumlarda cerrahi müdahale önerilir:
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex gap-2">
                    <span className="text-red-500">•</span>
                    <span>Yırtık 3 cm'den büyükse</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500">•</span>
                    <span>Ağrı ilaç veya fizik tedaviyle geçmiyorsa</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500">•</span>
                    <span>Semptomlar 6-12 ay içinde düzelmiyorsa</span>
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-white rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Cerrahi Yöntem:</strong> Artroskopik (kapalı) veya açık cerrahi ile yırtık onarılır, 
                    kas-tendon bütünlüğü yeniden sağlanır ve hastanın yaşam kalitesi artırılır.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Prevention & Care Section */}
          <section className="mb-12 bg-gradient-to-r from-yellow-50 to-amber-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Önleme ve Koruma
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: "✓", title: "Düzenli Egzersiz", desc: "Omuz kaslarını güçlendirin" },
                { icon: "✓", title: "Doğru Teknik", desc: "Spor ve ağır iş yaparken doğru hareket" },
                { icon: "✓", title: "Dinlenme", desc: "Aşırı zorlama sonrası dinlenme" },
                { icon: "✓", title: "Erken Tedavi", desc: "Ağrı başladığında erken müdahale" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-lg flex items-start gap-3">
                  <span className="text-green-500 text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
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
                  q: "Rotator manşet nedir?",
                  a: "Rotator manşet, üst kol kemiğinin omuz eklemine bağlandığı noktayı çevreleyen dört adet kastan oluşan yapıdır. Omuz eklemini sabit tutar ve kolun hareketlerini sağlar."
                },
                {
                  q: "Rotator manşet yırtığının belirtileri nelerdir?",
                  a: "Omuzdan kola yayılan ağrı, kolu başın üzerine kaldırmada zorluk, yırtık tarafa yatamama, kolda güç kaybı ve basit hareketlerde (saç tarama, sırt kaşıma) zorluk görülür."
                },
                {
                  q: "Rotator manşet yırtığı nasıl tedavi edilir?",
                  a: "İlaç, dinlenme, fizik tedavi ve egzersizlerle tedavi edilir. 3 cm'den büyük yırtıklarda veya konservatif tedaviye yanıt yoksa cerrahi müdahale gerekir."
                }
              ].map((faq, i) => (
                <details key={i} className="bg-gray-50 rounded-lg p-4 group">
                  <summary className="font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                    {faq.q}
                    <span className="text-rose-500 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-3 text-gray-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-rose-600 to-rose-800 text-white p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Omuz Ağrınız mı Var?
            </h2>
            <p className="text-rose-100 mb-6">
              Rotator manşet yırtığı tedavisi için erken tanı önemlidir. Uzman değerlendirme için randevu alın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+905398416801"
                className="bg-white text-rose-700 px-8 py-3 rounded-lg font-semibold hover:bg-rose-50 transition"
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
                <span className="font-medium">1.</span> Yamamoto A, et al. <em>"Prevalence and risk factors of a rotator cuff tear in the general population."</em> J Shoulder Elbow Surg. 2010;19(1):116-20.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=rotator+cuff+tear" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">2.</span> Minagawa H, et al. <em>"Prevalence of symptomatic and asymptomatic rotator cuff tears in the general population."</em> J Shoulder Elbow Surg. 2013;22(9):1256-64.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=rotator+cuff+tear" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">3.</span> Tashjian RZ. <em>"Epidemiology, natural history, and indications for treatment of rotator cuff tears."</em> Clin Sports Med. 2012;31(4):589-604.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=rotator+cuff+tear" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">4.</span> Kuhn JE, et al. <em>"Exercise in the treatment of rotator cuff impingement: a systematic review and a synthesized evidence-based rehabilitation protocol."</em> J Shoulder Elbow Surg. 2009;18(1):138-60.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=rotator+cuff+tear" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">5.</span> Seida JC, et al. <em>"Systematic review: nonoperative and operative treatments for rotator cuff tears."</em> Ann Intern Med. 2010;153(4):246-55.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=rotator+cuff+tear" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
            </ol>
            
            <details className="mt-4">
              <summary className="cursor-pointer text-blue-600 font-medium hover:text-blue-800 flex items-center gap-2">
                <span>📖 Daha Fazla Kaynak Göster (5 ek referans)</span>
              </summary>
              <ol start={6} className="space-y-3 text-sm text-gray-700 mt-4 pt-4 border-t">
                <li>
                  <span className="font-medium">6.</span> Colvin AC, et al. <em>"National trends in rotator cuff repair."</em> J Bone Joint Surg Am. 2012;94(3):227-33.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=rotator+cuff+tear" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">7.</span> Dunn WR, et al. <em>"Predictors of activity level 2 years after anterior cruciate ligament reconstruction (ACLR): a Multicenter Orthopaedic Outcomes Network (MOON) ACLR cohort study."</em> Am J Sports Med. 2010;38(10):2040-50.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=rotator+cuff+tear" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">8.</span> Kulund DN, et al. <em>"The injured athlete."</em> JB Lippincott, 1988.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=rotator+cuff+tear" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">9.</span> Matsen FA, et al. <em>"Repair of rotator cuff tears."</em> Orthop Clin North Am. 1989;20(4):619-23.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=rotator+cuff+tear" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">10.</span> Neer CS. <em>"Anterior acromioplasty for the chronic impingement syndrome in the shoulder."</em> J Bone Joint Surg Am. 1972;54(1):41-50.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=rotator+cuff+tear" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
              </ol>
            </details>
          </section>

          {/* Related Links */}
          <section className="mt-12">
            <h3 className="text-xl font-bold text-gray-800 mb-4">İlgili Konular</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Omuz Artroskopisi", href: "/blog/omuz-artroskopisi" },
                { title: "Omuz Sıkışması", href: "/blog/omuz-sikismasi" },
                { title: "Ameliyatsız Çözümler", href: "/ameliyatsiz-cozumler" }
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <span className="text-rose-600 font-medium">{link.title} →</span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
