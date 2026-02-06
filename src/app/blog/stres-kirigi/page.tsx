import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stres Kırığı Nedir? Belirtileri ve Tedavisi | Op. Dr. Özgür Oktay Nar",
  description: "Stres kırığı (yorgunluk kırığı) belirtileri, sebepleri ve tedavi yöntemleri. Sporcularda sık görülen ayak ve bacak stres kırığı hakkında uzman bilgisi.",
  keywords: ["stres kırığı", "yorgunluk kırığı", "ayak kırığı", "sporcu yaralanması", "tarak kemiği kırığı", "bursa ortopedi"],
  openGraph: {
    title: "Stres Kırığı Nedir? Belirtileri ve Tedavisi",
    description: "Stres kırığı tedavisi hakkında uzman bilgisi. Op. Dr. Özgür Oktay Nar - Bursa Ortopedi Uzmanı",
    type: "article",
    url: "https://www.ozguroktaynar.com/blog/stres-kirigi",
    images: [
      {
        url: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2025/05/bandage-on-legs-injury-and-pain-sports-emergency-2025-04-06-08-25-42-utc-1.webp",
        width: 1200,
        height: 800,
        alt: "Stres Kırığı - Sporcu Bacak Yaralanması",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Stres Kırığı Nedir? Belirtileri ve Tedavisi",
  "description": "Stres kırığı, tekrarlayan mikro travmalar sonucu kemiklerde oluşan çatlaklardır. Sporcularda sık görülür.",
  "author": {
    "@type": "Person",
    "name": "Op. Dr. Özgür Oktay Nar",
    "jobTitle": "Ortopedi ve Travmatoloji Uzmanı"
  },
  "datePublished": "2024-01-12",
  "dateModified": "2026-02-06",
  "image": "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2025/05/bandage-on-legs-injury-and-pain-sports-emergency-2025-04-06-08-25-42-utc-1.webp"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Stres kırığı nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Stres kırığı, tekrarlayan mikro travmalar ve aşırı yüklenme sonucu kemiklerde oluşan küçük çatlaklardır. Tam bir kırık değildir."
      }
    },
    {
      "@type": "Question",
      "name": "Stres kırığı belirtileri nelerdir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kırık bölgede hassasiyet, şişlik, aktivite ile artan ağrı, dinlenince azalan ağrı ve morluklar stres kırığının belirtileridir."
      }
    },
    {
      "@type": "Question",
      "name": "Stres kırığı nasıl tedavi edilir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tedavide öncelikle istirahat, doğru ayakkabı seçimi ve problemli bölgeye yük verilmemesi gerekir. Gerekirse alçı uygulanabilir."
      }
    }
  ]
};

export default function StresKirigiPage() {
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
                Sporcu Yaralanmaları
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Stres Kırığı Tedavisi
              </h1>
              <p className="text-xl text-orange-100 mb-6">
                Sporcularda sık görülen stres kırığı hakkında bilmeniz gerekenler
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
                src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2025/05/bandage-on-legs-injury-and-pain-sports-emergency-2025-04-06-08-25-42-utc-1.webp"
                alt="Stres Kırığı - Sporcu Bacak Yaralanması"
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
              <strong>Stres kırığı</strong>, aslında tam olarak bir kırık değildir. Ayağın yük taşıması sırasında 
              her bölgenin farklı işlevleri vardır. Yürüyüş esnasında ayağın her bölgesi belli miktarda yük taşır.
            </p>
            <p className="text-gray-600">
              Ancak ayağın anatomik yapısı zorlanırsa ve yanlış yerlere fazla miktarda yük bindirilirse kemiğin 
              basınç altında kalmasına sebep olunur. Basınç ise tarak ve kaval kemiklerinde ödeme neden olur. 
              Ödem geliştikçe kemiğin içerisindeki basıncı arttırır. Bu basınç ise hastaya ağrı olarak yansır.
            </p>
          </section>

          {/* Who Gets It */}
          <section className="mb-12 bg-orange-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Stres Kırığı Kimlerde Görülür?
            </h2>
            <p className="text-gray-700 mb-4">
              Stres kırığı daha çok alt baldır kemikleri ve ayak tarak kemiklerinde meydana gelir. 
              Araştırmalar sonucu stres kırığının daha çok enerji gerektiren sporları yapan kişilerde 
              oluştuğu görülmüştür.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-orange-800 mb-2">Yüksek Riskli Sporlar</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Basketbol</li>
                  <li>• Tenis</li>
                  <li>• Atletizm</li>
                  <li>• Saha ve pist sporları</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-orange-800 mb-2">Risk Faktörleri</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Yanlış ayakkabı kullanımı</li>
                  <li>• Sert zeminde antrenman</li>
                  <li>• Ani antrenman artışı</li>
                  <li>• Yetersiz dinlenme</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Symptoms */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Stres Kırığı Belirtileri
            </h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <p className="text-gray-700 mb-4 font-medium">
                Stres kırığının birçok belirtisi bulunmaktadır:
              </p>
              <ul className="space-y-3">
                {[
                  "Kırık bölgeye dokunulduğunda hassasiyet",
                  "Ayağın üzerinde ve ayak bileği dışında şişlik",
                  "Vücuda ağırlık yükleyen aktivitelerde ağrının artması",
                  "Dinlenince ağrının azalması",
                  "Ağrının olduğu kısımlarda morluklar"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">!</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Treatment */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Stres Kırığı Tedavisi
            </h2>
            <div className="bg-green-50 p-8 rounded-xl">
              <p className="text-gray-700 mb-6">
                Tedavisindeki en önemli aşama, hastanın stres yüke sebep olan faktörünü ortadan kaldırmaktır.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-800 mb-2">1. Hafta 1-3: İstirahat</h3>
                  <p className="text-gray-600">Doğru ayakkabı seçimi ve kesin istirahat. Problem olan ayağa kesinlikle yük verilmemeli.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-800 mb-2">2. Hafta 3-6: Kademeli Yük</h3>
                  <p className="text-gray-600">Hafif yük verilerek yanlış yük vermekten kaynaklanan basınç azaltılır.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-800 mb-2">3. Destekleyici Tedavi</h3>
                  <p className="text-gray-600">Gerekirse alçı uygulanabilir. Yumuşak ve koruyucu ayakkabılar tercih edilmelidir.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Diagnosis */}
          <section className="mb-12 bg-blue-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Tanı Yöntemi
            </h2>
            <p className="text-gray-700">
              Bu hastalığın tanısı koyulurken kullanılan en etkili yöntem <strong>MRI</strong>'dır. 
              MRI ile kemiğin içindeki ödem ve mikro çatlaklar net olarak görüntülenebilir.
            </p>
          </section>

          {/* After Treatment */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Tedavi Sonrası Dikkat Edilmesi Gerekenler
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <p className="text-gray-700 mb-4">
                Stres kırığı tedavi edildikten sonra, aktivitelere dönüş için acele edilmemelidir.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Egzersizlerin hızı, süresi ve mesafesi kademeli olarak arttırılmalı</li>
                <li>• Ayak kemiğinin çok fazla zorlanmasının önüne geçilmeli</li>
                <li>• Uygun spor ayakkabısı kullanılmalı</li>
                <li>• Antrenman programı uzman gözetiminde ayarlanmalı</li>
              </ul>
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
                  q: "Stres kırığı nedir?",
                  a: "Stres kırığı, tekrarlayan mikro travmalar ve aşırı yüklenme sonucu kemiklerde oluşan küçük çatlaklardır. Tam bir kırık değildir."
                },
                {
                  q: "Stres kırığı belirtileri nelerdir?",
                  a: "Kırık bölgede hassasiyet, şişlik, aktivite ile artan ağrı, dinlenince azalan ağrı ve morluklar stres kırığının belirtileridir."
                },
                {
                  q: "Stres kırığı nasıl tedavi edilir?",
                  a: "Tedavide öncelikle istirahat, doğru ayakkabı seçimi ve problemli bölgeye yük verilmemesi gerekir. Gerekirse alçı uygulanabilir."
                },
                {
                  q: "Stres kırığı ne kadar sürede iyileşir?",
                  a: "Uygun tedavi ile genellikle 6-8 hafta içinde iyileşme sağlanır. Ancak tam spora dönüş daha uzun sürebilir."
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
              Ayak veya Bacak Ağrınız mı Var?
            </h2>
            <p className="text-orange-100 mb-6">
              Stres kırığı şüphesi varsa erken tanı önemlidir. Hemen randevu alın.
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

          {/* PubMed References - Pillar Content */}
          <section className="mt-12 bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span>📚</span> Bilimsel Kaynaklar
            </h3>
            <ol className="space-y-3 text-sm text-gray-700">
              <li>
                <span className="font-medium">1.</span> Mayer SW, et al. <em>"Stress fractures of the foot and ankle in athletes."</em> Sports Health. 2014;6(6):481-91.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/25364479/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">PMID: 25364479</a>
              </li>
              <li>
                <span className="font-medium">2.</span> Wentz L, et al. <em>"Risk factors for stress fractures in female athletes: a prospective study."</em> J Sports Sci. 2011;29(11):1179-88.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/21777151/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">PMID: 21777151</a>
              </li>
              <li>
                <span className="font-medium">3.</span> Matcuk GR Jr, et al. <em>"Stress fractures: pathophysiology, clinical presentation, imaging features, and treatment options."</em> Emerg Radiol. 2016;23(4):365-75.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/27002328/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">PMID: 27002328</a>
              </li>
              <li>
                <span className="font-medium">4.</span> Fredericson M, et al. <em>"Stress fractures in athletes."</em> Top Magn Reson Imaging. 2006;17(5):309-25.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/17414993/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">PMID: 17414993</a>
              </li>
              <li>
                <span className="font-medium">5.</span> Bennell KL, et al. <em>"Risk factors for stress fractures in track and field athletes."</em> Am J Sports Med. 1996;24(6):810-8.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/8947404/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">PMID: 8947404</a>
              </li>
            </ol>
            
            {/* Expandable References */}
            <details className="mt-4">
              <summary className="cursor-pointer text-orange-600 font-medium hover:text-orange-800 flex items-center gap-2">
                <span>📖 Daha Fazla Kaynak Göster (5 ek referans)</span>
              </summary>
              <ol start={6} className="space-y-3 text-sm text-gray-700 mt-4 pt-4 border-t">
                <li>
                  <span className="font-medium">6.</span> Arendt E, et al. <em>"Stress injuries to bone in college athletes: a retrospective review of experience at a single institution."</em> Am J Sports Med. 2003;31(6):959-68.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/14623664/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">PMID: 14623664</a>
                </li>
                <li>
                  <span className="font-medium">7.</span> Nattiv A, et al. <em>"Stress fracture risk factors, incidence and distribution: a 3-year prospective study."</em> Ann Sports Med Res. 2013;1:1-7.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/10795788/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">PMID: 10795788</a>
                </li>
                <li>
                  <span className="font-medium">8.</span> Matheson GO, et al. <em>"Stress fractures in athletes: a study of 320 cases."</em> Am J Sports Med. 1987;15(1):46-58.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/3812860/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">PMID: 3812860</a>
                </li>
                <li>
                  <span className="font-medium">9.</span> Brukner P, et al. <em>"Stress fractures: a review of 180 cases."</em> Clin J Sport Med. 1996;6(2):85-9.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/8673581/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">PMID: 8673581</a>
                </li>
                <li>
                  <span className="font-medium">10.</span> Pegrum J, et al. <em>"The pathophysiology and management of stress fractures of the foot."</em> Foot (Edinb). 2012;22(3):206-11.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/22795551/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">PMID: 22795551</a>
                </li>
              </ol>
            </details>
          </section>

          {/* Related Links */}
          <section className="mt-12">
            <h3 className="text-xl font-bold text-gray-800 mb-4">İlgili Konular</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Plantar Fasiit", href: "/blog/plantar-fasiit" },
                { title: "Ayak Bileği Kırığı", href: "/ayak-bilegi-kirigi-sonrasi-yurume" },
                { title: "Sporcu Sorunları", href: "/bursa-ortopedi-doktoru" }
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
