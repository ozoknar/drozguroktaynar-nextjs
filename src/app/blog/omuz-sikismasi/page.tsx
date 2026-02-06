import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Omuz Sıkışması Nedir? Belirtileri ve Tedavisi | Op. Dr. Özgür Oktay Nar",
  description: "Omuz sıkışması (impingement sendromu) nedenleri, belirtileri ve tedavi yöntemleri. İlaç tedavisi, fizik tedavi ve cerrahi seçenekler. Bursa ortopedi uzmanı.",
  keywords: ["omuz sıkışması", "impingement sendromu", "rotator manşet", "omuz ağrısı", "omuz tedavisi", "bursa ortopedi"],
  openGraph: {
    title: "Omuz Sıkışması Nedir? Belirtileri ve Tedavisi",
    description: "Omuz sıkışması tedavisi hakkında uzman bilgisi. Op. Dr. Özgür Oktay Nar - Bursa Ortopedi Uzmanı",
    type: "article",
    url: "https://www.ozguroktaynar.com/blog/omuz-sikismasi",
    images: [
      {
        url: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/06/omuz_sikismasi.jpg",
        width: 1200,
        height: 800,
        alt: "Omuz Sıkışması Tedavisi",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Omuz Sıkışması Nedir? Belirtileri ve Tedavisi",
  "description": "Omuz sıkışması, omuz ekleminde kolu kaldırmamızı sağlayan kasların tendonlarının, omuz kemikleri arasında sıkışması sonucu ortaya çıkan bir rahatsızlıktır.",
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
  "mainEntityOfPage": "https://www.ozguroktaynar.com/blog/omuz-sikismasi",
  "image": "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/06/omuz_sikismasi.jpg"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Omuz sıkışması nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Omuz sıkışması, omuz ekleminde kolu kaldırmamızı sağlayan kasların tendonlarının (rotator manşet), omuz kemikleri arasında sıkışması sonucu ortaya çıkan rahatsızlıktır. Ağrı ve hareket kısıtlılığına neden olur."
      }
    },
    {
      "@type": "Question",
      "name": "Omuz sıkışmasının belirtileri nelerdir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kolu kaldırmada ağrı, geceleri artan ağrı, omuz kaslarında güçsüzlük, hareket sırasında çıtırtı, günlük aktivitelerde zorlanma gibi belirtiler görülür."
      }
    },
    {
      "@type": "Question",
      "name": "Omuz sıkışması nasıl tedavi edilir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "İlaç tedavisi (anti-inflamatuvar), fizik tedavi, egzersizler ve gerekirse cerrahi müdahale (artroskopi) uygulanır. Erken tedavi tendon yırtıklarını önler."
      }
    }
  ]
};

export default function OmuzSikismasiPage() {
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
      <section className="relative bg-gradient-to-r from-orange-900 to-orange-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-orange-500 text-sm px-3 py-1 rounded-full mb-4">
                Omuz Sağlığı
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Omuz Sıkışması Nedir?
              </h1>
              <p className="text-xl text-orange-100 mb-6">
                Omuz sıkışması (impingement sendromu) nedenleri, belirtileri ve tedavi yöntemleri
              </p>
              <a
                href="tel:+905398416801"
                className="inline-block bg-white text-orange-900 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition"
              >
                Randevu Al: 0539 841 68 01
              </a>
            </div>
            <div className="hidden md:block">
              <img
                src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/06/omuz_sikismasi.jpg"
                alt="Omuz Sıkışması Tedavisi"
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
              <strong>Omuz sıkışması</strong>, omuz ekleminde kolu kaldırmamızı sağlayan kasların tendonlarının, 
              omuz kemikleri arasında sıkışması sonucu ortaya çıkan bir rahatsızlıktır. Bu durum omuz hareketlerinde 
              kısıtlılık, ağrı ve fonksiyon kaybına neden olabilir.
            </p>
            <p className="text-gray-600">
              Özellikle ev kadınlarında, voleybolcular ve yüzücülerde sıkça rastlanır. Omuz sıkışması genellikle 
              omuzun kötü kullanımı, aşırı yüklenme veya tekrarlayan hareketler sonucu meydana gelir.
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mt-4">
              <p className="text-red-800">
                ⚠️ <strong>Önemli:</strong> Eğer erken dönemde tedavi edilmezse tendonlar zedelenebilir veya 
                tamamen yırtılabilir, bu da hareket kaybını kalıcı hale getirebilir.
              </p>
            </div>
          </section>

          {/* What is Section */}
          <section className="mb-12 bg-orange-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Rotator Manşet ve Sıkışma Mekanizması
            </h2>
            <p className="text-gray-700">
              Omuz sıkışması, çoğunlukla <strong>rotator manşet</strong> adı verilen kas grubunun ve omuz eklemini 
              çevreleyen tendonların etkilenmesiyle görülür. Tendonlar, kemiklerin arasında sürtünmeye maruz 
              kaldığında iltihaplanabilir ve ödem gelişebilir; bu da ağrı ve hareket kısıtlılığı ile sonuçlanır.
            </p>
          </section>

          {/* Symptoms Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Omuz Sıkışması Belirtileri
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: "⚠", title: "Kol Kaldırmada Ağrı", desc: "Kolu kaldırmada ve geriye çekmede ağrı hissi", color: "red" },
                { icon: "⚠", title: "Yayılan Ağrı", desc: "Ağrının omuzdan kola ve ellere kadar yayılması", color: "orange" },
                { icon: "⚠", title: "Günlük Zorluk", desc: "Giyinme, soyunma gibi aktivitelerde zorlanma", color: "yellow" },
                { icon: "⚠", title: "Gece Ağrısı", desc: "Özellikle geceleri artan ve uyumayı engelleyen ağrı", color: "purple" },
                { icon: "⚠", title: "Hassasiyet", desc: "Omuzda hassasiyet ve hareket sırasında çıtırtı", color: "blue" },
                { icon: "⚠", title: "Güçsüzlük", desc: "Omuz kaslarında güçsüzlük ve yorgunluk", color: "green" }
              ].map((item, i) => (
                <div key={i} className={`bg-${item.color}-50 border-l-4 border-${item.color}-500 p-4 rounded-r-lg`}>
                  <div className="flex items-start gap-3">
                    <span className={`text-${item.color}-500 text-2xl`}>{item.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-800">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-yellow-100 rounded-lg">
              <p className="text-sm text-yellow-800">
                💡 <strong>Not:</strong> Belirtiler başlangıçta hafif olabilir, ancak tedavi edilmediğinde ağrı 
                sürekli hale gelir ve tendon yırtıklarıyla sonuçlanabilir.
              </p>
            </div>
          </section>

          {/* Treatment Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Omuz Sıkışması Tedavisi
            </h2>

            {/* Drug Treatment */}
            <div className="mb-6 bg-green-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center gap-2">
                <span>💊</span> 1. İlaç Tedavisi
              </h3>
              <p className="text-gray-700 mb-4">
                Anti-inflamatuvar (iltihap kurutucu) ilaçlar sık kullanılır. Aspirin, ibuprofen ve naproksen gibi 
                ilaçlar, eklemdeki iltihabı azaltarak ağrıyı hafifletir.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-green-600">•</span>
                  <span>Genellikle 8 haftalık düzenli kullanım gerekir</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">•</span>
                  <span>Mutlaka bir doktor kontrolünde kullanılmalıdır</span>
                </li>
              </ul>
              <div className="mt-4 p-4 bg-blue-100 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Kortizon Enjeksiyonu:</strong> İlk basamak tedaviye yanıt alınamazsa, doktor 
                  kortizon enjeksiyonu önerebilir. Güçlü iltihap kurutucudur ancak aşırı kullanımda tendon 
                  zayıflamasına yol açabilir.
                </p>
              </div>
            </div>

            {/* Physical Therapy */}
            <div className="mb-6 bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center gap-2">
                <span>🏃</span> 2. Fizik Tedavi ve Egzersizler
              </h3>
              <p className="text-gray-700 mb-4">
                İlaç tedavisinin yanı sıra fizik tedavi oldukça önemlidir. Omuz kasları güçlendirilir, 
                tendonlar esnetilir ve eklem hareket açıklığı artırılır.
              </p>
              <h4 className="font-semibold text-gray-800 mb-2">Evde Uygulanabilecek Egzersizler:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Başparmak ile sırta dokunma hareketleri</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Kol açma ve geriye çekme esneme hareketleri</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Sıcak duş uygulamaları ile tendon ve kaslarda gevşeme</span>
                </li>
              </ul>
              <div className="mt-4 p-4 bg-yellow-100 rounded-lg">
                <p className="text-sm text-yellow-800">
                  ⚠️ <strong>Dikkat:</strong> Omuzu zorlayacak işlerden (araba yıkama, elektrik süpürgesi 
                  kullanma) bir süre uzak durmalısınız.
                </p>
              </div>
            </div>

            {/* Surgery */}
            <div className="bg-purple-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center gap-2">
                <span>🏥</span> 3. Cerrahi Müdahale
              </h3>
              <p className="text-gray-700 mb-4">
                Hastalığın ilerlemesi, tendon yırtıkları veya ciddi kas zayıflığı durumunda cerrahi tedavi gerekebilir.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-purple-600">•</span>
                  <span>Genellikle artroskopik yöntemler kullanılır</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-600">•</span>
                  <span>Eklemdeki sıkışma giderilir</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-600">•</span>
                  <span>Cerrahi sonrası fizik tedavi ile kaslar güçlendirilir</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Prevention Section */}
          <section className="mb-12 bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Önleme Yöntemleri
            </h2>
            <p className="text-gray-700 mb-4">
              Omuz sıkışmasını önlemek için şunlara dikkat edilmelidir:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Tekrarlayan ağır yük kaldırmaktan kaçınmak",
                "Omuz kaslarını düzenli olarak güçlendirmek",
                "Sporda uygun teknik ve ekipman kullanmak",
                "Uzun süre aynı pozisyonda durmamak ve molalar vermek"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 bg-white p-4 rounded-lg">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-teal-100 rounded-lg">
              <p className="text-teal-800">
                💡 <strong>Önemli:</strong> Erken teşhis ve uygun tedavi, omuz sıkışmasının ilerlemesini durdurur 
                ve tendon yırtıklarını önleyerek hastanın yaşam kalitesini artırır.
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
                  q: "Omuz sıkışması nedir?",
                  a: "Omuz sıkışması, omuz ekleminde kolu kaldırmamızı sağlayan kasların tendonlarının (rotator manşet), omuz kemikleri arasında sıkışması sonucu ortaya çıkan rahatsızlıktır. Ağrı ve hareket kısıtlılığına neden olur."
                },
                {
                  q: "Omuz sıkışmasının belirtileri nelerdir?",
                  a: "Kolu kaldırmada ağrı, geceleri artan ağrı, omuz kaslarında güçsüzlük, hareket sırasında çıtırtı, günlük aktivitelerde zorlanma gibi belirtiler görülür."
                },
                {
                  q: "Omuz sıkışması nasıl tedavi edilir?",
                  a: "İlaç tedavisi (anti-inflamatuvar), fizik tedavi, egzersizler ve gerekirse cerrahi müdahale (artroskopi) uygulanır. Erken tedavi tendon yırtıklarını önler."
                }
              ].map((faq, i) => (
                <details key={i} className="bg-gray-50 rounded-lg p-4 group">
                  <summary className="font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                    {faq.q}
                    <span className="text-orange-500 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-3 text-gray-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Omuz Ağrınız mı Var?
            </h2>
            <p className="text-orange-100 mb-6">
              Omuz sıkışması tedavisi için erken tanı önemlidir. Uzman değerlendirme için hemen randevu alın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+905398416801"
                className="bg-white text-orange-700 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition"
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
                <span className="font-medium">1.</span> Neer CS. <em>"Impingement lesions."</em> Clin Orthop Relat Res. 1983;(173):70-7.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=shoulder+impingement+syndrome" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">2.</span> Michener LA, et al. <em>"Anatomical and biomechanical mechanisms of subacromial impingement syndrome."</em> Clin Biomech (Bristol, Avon). 2003;18(5):369-79.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=shoulder+impingement+syndrome" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">3.</span> Diercks R, et al. <em>"Guideline for diagnosis and treatment of subacromial pain syndrome."</em> Acta Orthop. 2014;85(3):314-22.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=shoulder+impingement+syndrome" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">4.</span> Lewis JS. <em>"Rotator cuff tendinopathy/subacromial impingement syndrome: is it time for a new method of assessment?"</em> Br J Sports Med. 2009;43(4):259-64.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=shoulder+impingement+syndrome" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">5.</span> Hermans J, et al. <em>"Does this patient with shoulder pain have rotator cuff disease?: The Rational Clinical Examination systematic review."</em> JAMA. 2013;310(8):837-47.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=shoulder+impingement+syndrome" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
            </ol>
            
            <details className="mt-4">
              <summary className="cursor-pointer text-blue-600 font-medium hover:text-blue-800 flex items-center gap-2">
                <span>📖 Daha Fazla Kaynak Göster (5 ek referans)</span>
              </summary>
              <ol start={6} className="space-y-3 text-sm text-gray-700 mt-4 pt-4 border-t">
                <li>
                  <span className="font-medium">6.</span> Steuri R, et al. <em>"Effectiveness of conservative interventions including exercise, manual therapy and medical management in adults with shoulder impingement."</em> Br J Sports Med. 2017;51(18):1340-1347.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=shoulder+impingement+syndrome" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">7.</span> Ketola S, et al. <em>"No evidence of long-term benefits of arthroscopic acromioplasty in the treatment of shoulder impingement syndrome."</em> Bone Joint Res. 2013;2(7):132-9.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=shoulder+impingement+syndrome" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">8.</span> Hanratty CE, et al. <em>"The effectiveness of physiotherapy exercises in subacromial impingement syndrome: a systematic review and meta-analysis."</em> Semin Arthritis Rheum. 2012;42(3):297-316.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=shoulder+impingement+syndrome" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">9.</span> Dong W, et al. <em>"Treatments for shoulder impingement syndrome: a PRISMA systematic review and network meta-analysis."</em> Medicine (Baltimore). 2015;94(10):e510.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=shoulder+impingement+syndrome" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">10.</span> Papadonikolakis A, et al. <em>"Published evidence relevant to the diagnosis of impingement syndrome of the shoulder."</em> J Bone Joint Surg Am. 2011;93(19):1827-32.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=shoulder+impingement+syndrome" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
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
                { title: "Rotator Manşet Yırtığı", href: "/blog/rotator-manset" },
                { title: "Ameliyatsız Çözümler", href: "/ameliyatsiz-cozumler" }
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <span className="text-orange-600 font-medium">{link.title} →</span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
