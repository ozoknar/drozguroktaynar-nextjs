import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plantar Fasiit Nedir? Belirtileri ve Tedavisi | Op. Dr. Özgür Oktay Nar",
  description: "Plantar fasiit (fasciitis) topuk ağrısının en sık nedenidir. Belirtileri, sebepleri ve tedavi yöntemleri hakkında detaylı bilgi. Bursa ortopedi uzmanı.",
  keywords: ["plantar fasiit", "plantar fasciitis", "topuk ağrısı", "topuk dikeni", "ayak ağrısı", "bursa ortopedi"],
  openGraph: {
    title: "Plantar Fasiit Nedir? Belirtileri ve Tedavisi",
    description: "Plantar fasiit tedavisi hakkında uzman bilgisi. Op. Dr. Özgür Oktay Nar - Bursa Ortopedi Uzmanı",
    type: "article",
    url: "https://www.ozguroktaynar.com/blog/plantar-fasiit",
    images: [
      {
        url: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2025/10/ayak_bilegi_tedavisi.jpg",
        width: 1200,
        height: 800,
        alt: "Plantar Fasiit - Ayak ve Topuk Tedavisi",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Plantar Fasiit Nedir? Belirtileri ve Tedavisi",
  "description": "Plantar fasiit (fasciitis) topuk ağrısının en sık nedenidir. Belirtileri, sebepleri ve tedavi yöntemleri.",
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
  "mainEntityOfPage": "https://www.ozguroktaynar.com/blog/plantar-fasiit",
  "image": "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2025/10/ayak_bilegi_tedavisi.jpg"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Plantar fasiit nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Plantar fasiit, topuğun alt kısmındaki plantar fasya adı verilen bağ dokusunun iltihaplanmasıdır. Şiddetli topuk ağrısının en sık nedenidir."
      }
    },
    {
      "@type": "Question",
      "name": "Plantar fasiit nasıl tedavi edilir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tedavide istirahat, uygun ayakkabı seçimi, fizik tedavi, şok dalga tedavisi ve egzersizler uygulanır. Nadir durumlarda cerrahi müdahale gerekebilir."
      }
    },
    {
      "@type": "Question",
      "name": "Plantar fasiit ne kadar sürede geçer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Uygun tedavi ile çoğu hasta 6-12 ay içinde iyileşir. Erken tanı ve tedavi iyileşme süresini kısaltır."
      }
    }
  ]
};

export default function PlantarFasiitPage() {
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
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-blue-500 text-sm px-3 py-1 rounded-full mb-4">
                Ayak ve Ayak Bileği
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Plantar Fasiit Nedir?
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                Topuk ağrısının en sık nedeni olan plantar fasiit hakkında bilmeniz gereken her şey
              </p>
              <a
                href="tel:+905398416801"
                className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                Randevu Al: 0539 841 68 01
              </a>
            </div>
            <div className="hidden md:block">
              <img
                src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2025/10/ayak_bilegi_tedavisi.jpg"
                alt="Plantar Fasiit Tedavisi"
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
              <strong>Plantar fasiit (fasciitis)</strong>, genellikle şiddetli topuk ağrılarının sebebi olan bir rahatsızlıktır. 
              Çoğu zaman topuk dikeni ile karıştırılabilen bu rahatsızlık, aslında "Plantar fasya" diye tabir edilen 
              topuğun alt kısmındaki kasları çevreleyen bir bağ doku yapısının iltihaplanmasıdır.
            </p>
            <p className="text-gray-600">
              Ortopedik olarak en çok görünen problemlerden biridir. Plantar fasiit rahatsızlığı, genellikle işi gereği 
              sürekli ayakta çalışmak zorunda kalan kişilerde meydana gelir. Örnek olarak; öğretmenler, tezgâhtarlar, 
              askerler ve bazı sporcular sayılabilir.
            </p>
          </section>

          {/* Causes Section */}
          <section className="mb-12 bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Plantar Fasiit Sebepleri Nelerdir?
            </h2>
            <p className="text-gray-600 mb-4">
              Rahatsızlık sürekli ayakta durmaktan, obeziteye kadar birçok farklı nedenlerden dolayı gelişebilir. 
              Yanlış ayakkabı kullanımı da bu rahatsızlığın önemli sebeplerinden biridir.
            </p>
            <ul className="grid md:grid-cols-2 gap-3">
              {[
                "Uzun süre ayaklara yük bindirecek şekilde spor yapmak",
                "Sert zeminde koşu yapmak",
                "Uygun olmayan ayakkabı kullanımı",
                "Şişmanlık (Obezite)",
                "Ayak kavisinin çok yüksek olması",
                "Düz tabanlık",
                "Ayağın içe basması",
                "Hamilelik döneminin sonları"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Symptoms Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Plantar Fasiit Belirtileri
            </h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <p className="text-gray-700 mb-4">
                Plantar fasiit, sabahları yataktan kalkınca veya oturulan yerden kalkarken şiddetli ağrılara 
                sebep olabilir. Yürümeye başladıktan kısa bir süre sonra bu ağrılar kaybolur.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Sabah ilk adımda şiddetli topuk ağrısı</li>
                <li>• Merdiven çıkma ve uzun süre ayakta kalmada zorluk</li>
                <li>• Ayağın alt kısmından topuğa doğru yanma hissi</li>
                <li>• Dinlenme sonrası ilk harekette ağrı</li>
              </ul>
            </div>
          </section>

          {/* Treatment Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Plantar Fasiit Tedavisi
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="font-semibold text-green-800 mb-3">Konservatif Tedavi</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• İstirahat ve aktivite modifikasyonu</li>
                  <li>• Uygun ayakkabı seçimi</li>
                  <li>• Ev egzersizleri</li>
                  <li>• Fizik tedavi uygulamaları</li>
                  <li>• İlaç tedavisi</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-semibold text-blue-800 mb-3">İleri Tedavi Yöntemleri</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Şok dalga tedavisi (ESWT)</li>
                  <li>• Gece atelleri</li>
                  <li>• Özel tabanlıklar</li>
                  <li>• Nadir durumlarda cerrahi müdahale</li>
                </ul>
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
                  q: "Plantar fasiit nedir?",
                  a: "Plantar fasiit, topuğun alt kısmındaki plantar fasya adı verilen bağ dokusunun iltihaplanmasıdır. Şiddetli topuk ağrısının en sık nedenidir."
                },
                {
                  q: "Plantar fasiit nasıl tedavi edilir?",
                  a: "Tedavide istirahat, uygun ayakkabı seçimi, fizik tedavi, şok dalga tedavisi ve egzersizler uygulanır. Nadir durumlarda cerrahi müdahale gerekebilir."
                },
                {
                  q: "Plantar fasiit ne kadar sürede geçer?",
                  a: "Uygun tedavi ile çoğu hasta 6-12 ay içinde iyileşir. Erken tanı ve tedavi iyileşme süresini kısaltır."
                }
              ].map((faq, i) => (
                <details key={i} className="bg-gray-50 rounded-lg p-4 group">
                  <summary className="font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                    {faq.q}
                    <span className="text-blue-500 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-3 text-gray-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Topuk Ağrınız mı Var?
            </h2>
            <p className="text-blue-100 mb-6">
              Plantar fasiit tedavisi için hemen randevu alın. Erken tedavi ile hızlı iyileşme mümkün.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+905398416801"
                className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
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
                <span className="font-medium">1.</span> Trojian T, Tucker AK. <em>"Plantar Fasciitis."</em> Am Fam Physician. 2019;99(12):744-750.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=plantar+fasciitis+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">2.</span> Buchanan BK, Kushner D. <em>"Plantar Fasciitis."</em> StatPearls [Internet]. 2023.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=plantar+fasciitis+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">3.</span> Riddle DL, et al. <em>"Risk factors for plantar fasciitis: a matched case-control study."</em> J Bone Joint Surg Am. 2003;85(5):872-7.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=plantar+fasciitis+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">4.</span> Thomas JL, et al. <em>"The diagnosis and treatment of heel pain: a clinical practice guideline."</em> J Foot Ankle Surg. 2010;49(3 Suppl):S1-19.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=plantar+fasciitis+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">5.</span> Rompe JD, et al. <em>"Plantar fascia-specific stretching versus radial shock-wave therapy."</em> J Bone Joint Surg Am. 2010;92(15):2514-22.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=plantar+fasciitis+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
            </ol>
            
            {/* Expandable References */}
            <details className="mt-4">
              <summary className="cursor-pointer text-blue-600 font-medium hover:text-blue-800 flex items-center gap-2">
                <span>📖 Daha Fazla Kaynak Göster (5 ek referans)</span>
              </summary>
              <ol start={6} className="space-y-3 text-sm text-gray-700 mt-4 pt-4 border-t">
                <li>
                  <span className="font-medium">6.</span> Landorf KB, et al. <em>"Effectiveness of foot orthoses to treat plantar fasciitis."</em> Arch Intern Med. 2006;166(12):1305-10.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=plantar+fasciitis+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">7.</span> DiGiovanni BF, et al. <em>"Tissue-specific plantar fascia-stretching exercise enhances outcomes."</em> J Bone Joint Surg Am. 2003;85(7):1270-7.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=plantar+fasciitis+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">8.</span> Goff JD, Crawford R. <em>"Diagnosis and treatment of plantar fasciitis."</em> Am Fam Physician. 2011;84(6):676-82.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=plantar+fasciitis+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">9.</span> Schneider HP, et al. <em>"American College of Foot and Ankle Surgeons clinical consensus statement: diagnosis and treatment of adult acquired infracalcaneal heel pain."</em> J Foot Ankle Surg. 2018;57(2):370-381.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=plantar+fasciitis+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">10.</span> Taunton JE, et al. <em>"Plantar fasciitis: a biomechanical perspective."</em> Clin J Sport Med. 2002;12(1):54-9.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=plantar+fasciitis+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
              </ol>
            </details>
          </section>

          {/* Related Links */}
          <section className="mt-12">
            <h3 className="text-xl font-bold text-gray-800 mb-4">İlgili Konular</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Topuk Dikeni", href: "/blog/topuk-dikeni" },
                { title: "Ayak Bileği Kırığı", href: "/ayak-bilegi-kirigi-sonrasi-yurume" },
                { title: "Ameliyatsız Çözümler", href: "/ameliyatsiz-cozumler" }
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <span className="text-blue-600 font-medium">{link.title} →</span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
