import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Flexor Tendon Yaralanmaları | Tanı, Tedavi ve Cerrahi',
  description: 'Flexor tendon yırtılması nedenleri, belirtileri ve tedavi yöntemleri. El ve parmak tendon yaralanmalarında cerrahi müdahale ve iyileşme süreci.',
  keywords: ['flexor tendon', 'tendon yırtılması', 'el yaralanması', 'parmak tendonu', 'tendon ameliyatı'],
  openGraph: {
    title: 'Flexor Tendon Yaralanmaları | Dr. Özgür Oktay Nar',
    description: 'El ve parmak flexor tendon yaralanmaları, tedavi seçenekleri ve ameliyat sonrası rehabilitasyon',
    type: 'article',
    locale: 'tr_TR',
    url: 'https://www.drozguroktaynar.com/blog/flexor-tendon-yaralanmalari',
    siteName: 'Dr. Özgür Oktay Nar',
    images: [{
      url: 'https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/flexor-tendon-injury.jpg',
      width: 1200,
      height: 630,
      alt: 'Flexor Tendon Yaralanmaları'
    }]
  }
};

export default function FlexorTendonYaralanmalariPage() {
  const jsonLdMedical = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "headline": "Flexor Tendon Yaralanmaları",
    "description": "El ve parmak flexor tendon yaralanmaları, nedenleri, belirtileri ve tedavi yöntemleri",
    "datePublished": "2026-02-02T23:48:58+00:00",
    "dateModified": "2026-02-02T23:49:04+00:00",
    "author": {
      "@type": "Physician",
      "name": "Dr. Özgür Oktay Nar",
      "medicalSpecialty": "Ortopedi ve Travmatoloji"
    },
    "about": {
      "@type": "MedicalCondition",
      "name": "Flexor Tendon Yaralanması",
      "alternateName": "Fleksör Tendon Yırtılması"
    }
  };

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Flexor tendon nedir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Flexor tendonlar, elin avuç içi tarafında yer alan ve parmakların bükülmesine yardımcı olan pürüzsüz, esnek, kalın doku şeritleridir. Kasları kemiğe bağlayan fibröz bağ dokusu bantlarıdır."
        }
      },
      {
        "@type": "Question",
        "name": "Flexor tendon yırtılması nedenleri nelerdir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kol, el veya parmaklarda kesik veya yırtılma, spor yaralanmaları (futbol, rugby, güreş), forma parmağı, romatoid artrit ve kaya tırmanışı gibi aktiviteler flexor tendon yaralanmasına neden olabilir."
        }
      },
      {
        "@type": "Question",
        "name": "Flexor tendon yırtılması ameliyatsız iyileşir mi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hayır, yırtılmış bir tendon ameliyat olmadan iyileşemez, çünkü kesilen uçlar genellikle bir yaralanmadan sonra çekilir. Cerrahi onarım gereklidir."
        }
      },
      {
        "@type": "Question",
        "name": "Flexor tendon ameliyatı sonrası iyileşme süresi ne kadardır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ameliyattan birkaç hafta sonra el terapisine başlanır. Parmak hareketinin tam olarak iyileşmesi ve fonksiyonların geri kazanılması hastanın durumuna göre değişir."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdMedical) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="mb-12">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Flexor Tendon Yaralanmaları
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              El ve parmak flexor tendon yaralanmaları: Tanı, cerrahi tedavi ve rehabilitasyon süreçleri hakkında kapsamlı bilgi.
            </p>
          </div>
        </header>

        {/* 1. Problem Definition */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Flexor Tendon Nedir?</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Tendonlar, kasları kemiğe bağlayan fibröz bağ dokusu bantlarıdır. Tendonlar parmakların, elin ve diğer tüm vücut parçalarının hareketine yardımcı olur.
            </p>
            <div className="bg-blue-50 rounded-lg p-6 mb-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">El Tendonları</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Ekstansör Tendonlar</h4>
                  <p className="text-gray-700 text-sm">Elin üstünde bulunan, parmakların düzeltilmesine yardımcı olan tendonlar</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Flexor Tendonlar</h4>
                  <p className="text-gray-700 text-sm">Elin avuç içi tarafında yer alan, parmakların bükülmesine yardımcı olan tendonlar</p>
                </div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Fleksör tendonları</strong> parmakları büken pürüzsüz, esnek, kalın doku şeritleridir. Bileğin, elin veya parmakların altındaki derin kesikler, tendonu kesebilir ve yaralayabilir ve bir veya daha fazla eklemin bir parmağında bükülmemesini sağlayabilir.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Bir tendon kesildiğinde, kesik uçların birbirlerinden uzağa çekildiği bir lastik bant gibi davranır. Fleksör tendon yırtılması kısmi veya tam olabilir. Tendonlar tamamen kesilirse, parmak eklemleri kendi başlarına bükülmez.
            </p>
          </div>
        </section>

        {/* 2. Causes & Risk Factors */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Flexor Tendon Yırtılması Nedenleri</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Kol, el veya parmaklarda herhangi bir kesik veya yırtılma fleksör tendon yaralanmasına neden olabilir. Diğer olası nedenler şunlardır:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <svg className="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Travmatik Nedenler
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Derin kesikler ve yırtılmalar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Spor yaralanmaları (futbol, rugby, güreş)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Forma parmağı (oyuncunun parmağı başka bir oyuncunun formayı yakaladığında)</span>
                  </li>
                </ul>
              </div>
              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <svg className="w-6 h-6 text-orange-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Diğer Nedenler
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Tendonun kemikten çekilmesi (gerilme)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Romatoid artrit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Kaya tırmanışı gibi maceracı etkinlikler</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Symptoms */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Flexor Tendon Yırtılması Belirtileri</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Aşağıdaki belirtilerden herhangi birine sahipseniz doktorunuzu bilgilendirin:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ağrı</h4>
                    <p className="text-sm text-gray-600">El ve parmakta şiddetli ağrı</p>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Şişme</h4>
                    <p className="text-sm text-gray-600">Yaralanma bölgesinde ödem</p>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Parmağı Bükme Kabiliyeti Kaybı</h4>
                    <p className="text-sm text-gray-600">Parmak eklemlerini kendi başına bükmede zorluk</p>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Uyuşukluk</h4>
                    <p className="text-sm text-gray-600">Duyu kaybı ve hissizlik</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Diagnosis */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Flexor Tendon Yırtılması Teşhisi</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Parmaklarınızın bükülmesini ve açılmasını etkileyen bir parmak yaralanması olduğunda doktora göründüğünüzden emin olun.
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <svg className="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                İlk Yardım
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">1.</span>
                  <span>Yaralanan parmağa hemen buz uygulayın</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">2.</span>
                  <span>Yaralanmanın etrafına steril bir bez veya bandaj sarın</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">3.</span>
                  <span>Kanamayı azaltmak için parmağınızı kalp seviyenizin üstünde tutun</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">4.</span>
                  <span>Tetanoz enjeksiyonu uygulanması gerekebilir</span>
                </li>
              </ul>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Tıbbi Değerlendirme</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Doktorunuz semptomlarınızı ve tıbbi geçmişinizi gözden geçirecektir. Her iki elin de tam bir muayenesini içeren bir fizik muayene yapılacaktır.
            </p>
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Muayene Aşamaları</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Parmaklarınızı bükmeniz ve düzeltmeniz istenecektir</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>His, kan akışı ve kuvvet kontrol edilecektir</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Çevreleyen kemiğe zarar gelip gelmediğini kontrol etmek için röntgen çekilebilir</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. Treatment */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Flexor Tendon Yırtılması Tedavisi</h2>
          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6 mb-6">
              <p className="text-lg font-semibold text-gray-900 mb-2">⚠️ Önemli Not:</p>
              <p className="text-gray-700">
                Yırtılmış bir tendon ameliyat olmadan iyileşemez, çünkü kesilen uçlar genellikle bir yaralanmadan sonra çekilir.
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              Bir kesim tendonunu onarmak için birçok seçenek vardır; onarım şekli kesim tipine bağlıdır. İşlemin amacı, tendon laserasyonunu takiben eklemlerin ve çevresindeki dokuların normal fonksiyonunu eski haline getirmektir.
            </p>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cerrahi Prosedür</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Fleksör tendon onarımı genellikle ayakta tedavi prosedürüdür ve lokal veya genel anestezi altında yapılabilir.
            </p>
            <div className="bg-purple-50 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Ameliyat Adımları</h4>
              <ol className="space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-2">1.</span>
                  <span>Cerrah yaralı tendonun üzerine ciltte bir kesi yapar</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-2">2.</span>
                  <span>Tendonun hasarlı uçları, güvenli bir onarım için dikişlerle birlikte getirilir</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-2">3.</span>
                  <span>Tendon yaralanması ağırsa, greft gerekebilir (vücudun diğer kısımlarından alınan tendon parçası)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-2">4.</span>
                  <span>İnsizyonlar dikişlerle kapatılır ve pansuman uygulanır</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-2">5.</span>
                  <span>El koruyucu bir atele yerleştirilir</span>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* 6. Recovery & Rehabilitation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">İyileşme ve Rehabilitasyon</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Yaralanmaya bağlı olarak, ameliyattan birkaç hafta sonra el tedavisine başlamanız önerilecektir. Bu parmağın hareketini iyileştirmektir. Başarılı bir iyileşme için cerrahınızın özel talimatlarını takip edin.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Fizik Tedavi</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Erken mobilizasyon egzersizleri</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Aşamalı kuvvetlendirme</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Eklem hareket açıklığı çalışmaları</span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Takip Süreci</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Düzenli doktor kontrolü</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Atel kullanımı talimatları</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Fonksiyon değerlendirmesi</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mt-6">
              <h4 className="font-semibold text-gray-900 mb-3">Olası Komplikasyonlar</h4>
              <p className="text-gray-700 mb-3">
                Ameliyatın olası komplikasyonları arasında şunlar vardır:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Ağrı ve kanama</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Enfeksiyon riski</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Sertlik ve hareket kısıtlılığı</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Onarımın rüptürü</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Çevresindeki sinir veya kan damarı hasarı</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Skar dokusu oluşumu (ikinci ameliyat gerekebilir)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 7. Expert Opinion & CTA */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Uzman Görüşü</h2>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-8">
            <p className="text-lg leading-relaxed mb-6">
              "Flexor tendon yaralanmaları acil müdahale gerektiren durumlardır. Erken tanı ve zamanında cerrahi onarım, elin fonksiyonlarının geri kazanılmasında kritik önem taşır. Modern mikrocerrahideğer teknikler ve erken rehabilitasyon protokolleri sayesinde hastaların büyük çoğunluğu elin tam fonksiyonlarını geri kazanmaktadır."
            </p>
            <p className="font-semibold text-xl">— Dr. Özgür Oktay Nar</p>
            <p className="text-blue-100">Ortopedi ve Travmatoloji Uzmanı</p>
          </div>

          {/* CTA Buttons */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <a
              href="tel:+905321741490"
              className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Hemen Ara: 0532 174 14 90
            </a>
            <a
              href="https://wa.me/905321741490"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp ile İletişim
            </a>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              <Link href="/ameliyatsiz-cozumler" className="text-blue-600 hover:text-blue-800 font-semibold underline">
                Ameliyatsız tedavi seçenekleri
              </Link>
              {' '}hakkında detaylı bilgi almak için sayfamızı ziyaret edebilirsiniz.
            </p>
          </div>
        </section>

        {/* References Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Bilimsel Kaynaklar ve Referanslar</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <ol className="space-y-3 text-sm text-gray-700">
              <li>
                1. Strickland JW. "Development of flexor tendon surgery: twenty-five years of progress." J Hand Surg Am. 2000. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=flexor+tendon+surgery" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">&#91;PubMed Ara&#93;</a>
              </li>
              <li>
                2. Tang JB. "Clinical outcomes associated with flexor tendon repair." Hand Clin. 2005. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=flexor+tendon+repair+outcomes" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">&#91;PubMed Ara&#93;</a>
              </li>
              <li>
                3. Dy CJ, et al. "Flexor tendon repair: a simplified model for evaluation of grip and pinch strength." J Hand Surg Am. 2012. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=flexor+tendon+grip+strength" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">&#91;PubMed Ara&#93;</a>
              </li>
              <li>
                4. Walbeehm ET, et al. "Flexor tendon injuries of the hand in adults." Hand Surg. 2003. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=flexor+tendon+injuries+hand" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">&#91;PubMed Ara&#93;</a>
              </li>
              <li>
                5. Pettengill KM. "The evolution of early mobilization of the repaired flexor tendon." J Hand Ther. 2005. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=early+mobilization+flexor+tendon" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">&#91;PubMed Ara&#93;</a>
              </li>
            </ol>
            
            <details className="mt-6">
              <summary className="cursor-pointer font-semibold text-gray-900 hover:text-blue-600">
                Ek Kaynaklar (5 Referans Daha)
              </summary>
              <ol start={6} className="space-y-3 text-sm text-gray-700 mt-4">
                <li>
                  6. Savage R, Risitano G. "Flexor tendon repair using a six-strand method of repair and early active mobilization." J Hand Surg Br. 1989. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=six-strand+flexor+tendon+repair" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">&#91;PubMed Ara&#93;</a>
                </li>
                <li>
                  7. Amadio PC. "Friction of the gliding surface: implications for tendon surgery and rehabilitation." J Hand Ther. 2005. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=tendon+gliding+friction" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">&#91;PubMed Ara&#93;</a>
                </li>
                <li>
                  8. Zhao C, et al. "The A2 pulley system: a biomechanical study." J Hand Surg Am. 2006. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=A2+pulley+biomechanics" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">&#91;PubMed Ara&#93;</a>
                </li>
                <li>
                  9. Kleinert HE, Verdan C. "Report of the Committee on Tendon Injuries." J Hand Surg Am. 1983. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=tendon+injuries+classification" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">&#91;PubMed Ara&#93;</a>
                </li>
                <li>
                  10. Elliot D, et al. "The rupture rate of acute flexor tendon repairs mobilized by the controlled active motion regimen." J Hand Surg Br. 1994. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=flexor+tendon+controlled+active+motion" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">&#91;PubMed Ara&#93;</a>
                </li>
              </ol>
            </details>
          </div>
        </section>

        {/* Medical Disclaimer */}
        <aside className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
          <p className="text-sm text-gray-700">
            <strong>Tıbbi Uyarı:</strong> Bu sayfa yalnızca bilgilendirme amaçlıdır ve profesyonel tıbbi tavsiye, teşhis veya tedavinin yerini tutmaz. Sağlık sorunlarınız için mutlaka bir sağlık profesyoneline danışın.
          </p>
        </aside>
      </article>
    </>
  );
}
