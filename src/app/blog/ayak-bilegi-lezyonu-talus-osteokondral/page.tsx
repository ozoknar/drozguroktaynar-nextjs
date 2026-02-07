import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ayak Bileği Lezyonu Talus Osteokondral | Tanı ve Tedavi',
  description: 'Talus osteokondral lezyonu (OCD) nedir, nedenleri, belirtileri ve tedavi yöntemleri. Ameliyat sonrası iyileşme süreci hakkında detaylı bilgi.',
  keywords: ['talus osteokondral lezyon', 'ayak bileği lezyonu', 'talus OCD', 'ayak bileği ağrısı', 'kıkırdak hasarı'],
  openGraph: {
    title: 'Ayak Bileği Lezyonu Talus Osteokondral | Dr. Özgür Oktay Nar',
    description: 'Talus osteokondral lezyonu (OCD) tanı, tedavi ve ameliyat sonrası iyileşme süreci',
    type: 'article',
    locale: 'tr_TR',
    url: 'https://www.drozguroktaynar.com/blog/ayak-bilegi-lezyonu-talus-osteokondral',
    siteName: 'Dr. Özgür Oktay Nar',
    images: [{
      url: 'https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/talus-osteokondral-lezyon.jpg',
      width: 1200,
      height: 630,
      alt: 'Talus Osteokondral Lezyonu'
    }]
  }
};

export default function TalusOsteokondralLezyonPage() {
  const jsonLdMedical = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "headline": "Ayak Bileği Lezyonu Talus Osteokondral",
    "description": "Talus osteokondral lezyonu (OCD) tanı, tedavi ve ameliyat sonrası iyileşme süreci",
    "datePublished": "2026-02-03T00:06:04+00:00",
    "dateModified": "2026-02-03T00:06:06+00:00",
    "author": {
      "@type": "Physician",
      "name": "Dr. Özgür Oktay Nar",
      "medicalSpecialty": "Ortopedi ve Travmatoloji"
    },
    "about": {
      "@type": "MedicalCondition",
      "name": "Talus Osteokondral Lezyon",
      "alternateName": "Osteochondritis Dissecans"
    }
  };

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Talus osteokondral lezyonu nedir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Talus osteokondral lezyonu, ayak bileğinde talus kemiğinin eklem yüzeyinde meydana gelen kıkırdak ve kemik hasarıdır. Osteochondritis dissecans (OCD) olarak da adlandırılır."
        }
      },
      {
        "@type": "Question",
        "name": "Talus OCD nedenleri nelerdir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Talus OCD çoğunlukla travma sonucu oluşur. Lateral lezyonlarda travma oranı %98, medial lezyonlarda %70'tir. Ayak bileği burkulmaları, mikro travmalar ve dengesiz yüklenmeler de neden olabilir."
        }
      },
      {
        "@type": "Question",
        "name": "Talus OCD tedavisi nasıl yapılır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Çocuklarda konservatif tedavi (alçı) tercih edilir. Yetişkinlerde evre 4 lezyonlarda cerrahi tedavi gerekir. Kök hücre uyarımı, PRP ve kıkırdak çatı ameliyatı güncel tedavi seçenekleridir."
        }
      },
      {
        "@type": "Question",
        "name": "Talus OCD ameliyatı sonrası iyileşme süresi ne kadardır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kemik kıkırdak transferi sonrası 6 hafta ayağa yüklenmemeli, ardından fizik tedavi uygulanmalıdır. Ağrıların tamamen geçmesi 6-12 ay sürebilir."
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
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Ayak Bileği Lezyonu Talus Osteokondral
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Talus osteokondral lezyonu (OCD), ayak bileğinde talus kemiğinin eklem yüzeyinde meydana gelen kıkırdak ve kemik hasarıdır. Tedavide modern yaklaşımlar ve minimal invaziv teknikler.
            </p>
          </div>
        </header>

        {/* 1. Problem Definition */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Talus Osteokondral Lezyonu Nedir?</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Ayak Bileği Lezyonu Talus Osteokondral Lezyonu</strong>, daha çok talusta nadiren de tibia eklem yüzeyinde meydana gelir. Bu lezyonların isimlendirilmesinde hala karmaşa yaşanmaktadır. İlk olarak 19. yüzyılda fark edilen bu lezyonlar "osteokondritis dissekans" olarak adlandırılmıştır.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Bu adlandırma günümüzde de kullanılmaktadır. Ancak son yıllarda gelişen tanı ve tedavi yöntemleri ile bu adlandırmada değişiklik olmuştur. Lezyon, ayak bileği ağrısına, şişliğe ve hareket kısıtlılığına neden olabilir.
            </p>
          </div>
        </section>

        {/* 2. Causes & Risk Factors */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ayak Bileği Lezyonu Talus Osteokondral Nedenleri</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Ayak Bileği Lezyonu Talus Osteokondral</strong> oluşmasının sebebi çoğunlukla bir travmadır. Travma oranları, talusun medial ya da lateralinde olmasına bağlı olarak değişiklik göstermektedir.
            </p>
            <div className="bg-[#E6FAF8] rounded-lg p-6 mb-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Travma Oranları</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#01CAB8] mr-2">•</span>
                  <span><strong>Lateral lezyonlar:</strong> %98 travma oranı</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#01CAB8] mr-2">•</span>
                  <span><strong>Medial lezyonlar:</strong> %70 travma oranı</span>
                </li>
              </ul>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Talus kemiğinde görülen osteokondral lezyonların bir kısmı, sporcu ayak bileği burkulmaları esnasında oluşmaktadır. Bir kısmı da mikro travmalar, basma bozukluklarının ve dengesiz yüklenmelerin sonucu oluşmaktadır.
            </p>
          </div>
        </section>

        {/* 3. Diagnosis */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tanı Yöntemleri</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Talus OCD tanısında fizik muayene, radyolojik görüntüleme ve klinik değerlendirme önemlidir:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Görüntüleme Yöntemleri</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#01CAB8] mr-2">✓</span>
                    <span>Direkt radyografi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#01CAB8] mr-2">✓</span>
                    <span>MR görüntüleme</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#01CAB8] mr-2">✓</span>
                    <span>BT tarama</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Klinik Değerlendirme</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#01CAB8] mr-2">✓</span>
                    <span>Ağrı lokalizasyonu</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#01CAB8] mr-2">✓</span>
                    <span>Hareket kısıtlılığı</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#01CAB8] mr-2">✓</span>
                    <span>Şişlik değerlendirmesi</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Treatment Options */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ayak Bileği Lezyonu Talus Osteokondral Tedavisi</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Talus OCD</strong> yani Talus Osteokondral lezyon tedavisinde konservatif ve cerrahi yöntemler kullanılmaktadır.
            </p>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Çocuklarda Tedavi</h3>
              <p className="text-gray-700 mb-3">
                Çocuklarda görülen lezyonların tedavisinde her zaman alçı uygulaması gerekmektedir. 6 ay kadar süren alçılı tedavilerinde sonuç alınamazsa cerrahi yöntemlere başvurulabilir.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Yetişkinlerde Tedavi</h3>
              <p className="text-gray-700 mb-4">
                Yetişkinlerde lezyonlar, cerrahi müdahale ile tedavi edilmektedir. Bu genellikle evre 4, yani yer değiştirmiş lezyonlarda gerekmektedir. Ancak, evre 2 ve evre 3'te ise lezyonlar tam ayrışmamış ya da ayrışmış ancak yer değiştirmemiştir.
              </p>
              <p className="text-gray-700">
                Bu durumda ise uzun süreli alçı tedavisi uygulanabilir. Fakat lateral lezyonlarda konservatif tedavinin başarılı olma şansı düşük olduğu için evre 3 lateral lezyonlarda erken ameliyat önerenler de vardır.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cerrahi Tedavi Yöntemleri</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cerrahi tedavide amaç ağrının ortadan kaldırılması, kıkırdak yüzeyinin düzeltilmesi ve yaygın kırık hastalığını önlemektir. Kıkırdak hasarlarını vücut kendi başına onaramaz. Bu sebeple kıkırdak dokusunun yeniden şekillendirilmesi gerekir.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white border-2 border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Kök Hücre Uyarımı</h4>
                <p className="text-sm text-gray-600">Doğal iyileşmeyi tetikler</p>
              </div>
              <div className="bg-white border-2 border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">PRP Tedavisi</h4>
                <p className="text-sm text-gray-600">Doku rejenerasyonu sağlar</p>
              </div>
              <div className="bg-white border-2 border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Kıkırdak Çatı Ameliyatı</h4>
                <p className="text-sm text-gray-600">Hasarlı dokuyu onarır</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Recovery & Rehabilitation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ayak Bileği Lezyonu Talus Osteokondral Ameliyatı Sonrası</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Talus OCD</strong> ameliyatı sonrasında iyileşme süresi, kırığın yerine ve boyutuna göre değişir.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">İyileşme Süreci</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold mr-2">1.</span>
                  <span>Ameliyatsız tedavide haftalar boyunca ayağın üzerine basılmamalıdır</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold mr-2">2.</span>
                  <span>Kemik kıkırdak transferi sonrasında 6 hafta kadar ayağın üstüne yüklenmemesi gerekir</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold mr-2">3.</span>
                  <span>Bu süre sonrasında fizik tedavi uygulanmalıdır</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold mr-2">4.</span>
                  <span>Ağrıların tamamen geçmesi 6-12 ay sürebilir</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 6. Prevention */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Korunma Yöntemleri</h2>
          <div className="prose prose-lg max-w-none">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Spor Yaparken</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Uygun ayakkabı kullanımı</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Isınma hareketleri</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Ayak bileği destekleyicileri</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Günlük Hayatta</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>İdeal vücut ağırlığı</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Düzenli egzersiz</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Yürüyüş ve denge çalışmaları</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Expert Opinion & CTA */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Uzman Görüşü</h2>
          <div className="bg-gradient-to-r from-[#01CAB8] to-cyan-600 rounded-2xl p-8 text-white mb-8">
            <p className="text-lg leading-relaxed mb-6">
              "Talus osteokondral lezyonlarında erken tanı ve uygun tedavi seçimi kritik önem taşır. Modern cerrahi teknikler ve biyolojik tedaviler sayesinde hastalarda mükemmel sonuçlar elde ediyoruz. Her hastanın lezyonu kendine özgüdür ve tedavi planı bu doğrultuda kişiselleştirilmelidir."
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
              className="flex items-center justify-center bg-[#01CAB8] hover:bg-[#01A899] text-white font-semibold py-4 px-6 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp ile İletişim
            </a>
          </div>

          <div className="bg-[#E6FAF8] rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              <Link href="/ameliyatsiz-cozumler" className="text-[#01CAB8] hover:text-[#01867A] font-semibold underline">
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
                1. Zengerink M, van Dijk CN. "Osteochondral lesions of the talus." Knee Surg Sports Traumatol Arthrosc. 2010. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=osteochondral+lesion+talus" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:text-[#01867A]">&#91;PubMed Ara&#93;</a>
              </li>
              <li>
                2. Hannon CP, et al. "Osteochondral lesions of the talus: aspects of current management." Bone Joint J. 2014. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=talus+osteochondral+treatment" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:text-[#01867A]">&#91;PubMed Ara&#93;</a>
              </li>
              <li>
                3. Verhagen RA, et al. "Systematic review of treatment strategies for osteochondral defects of the talar dome." Foot Ankle Clin. 2003. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=talar+dome+osteochondral+defect" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:text-[#01867A]">&#91;PubMed Ara&#93;</a>
              </li>
              <li>
                4. Giannini S, et al. "Autologous chondrocyte implantation in osteochondral lesions of the talus." J Bone Joint Surg Am. 2001. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=chondrocyte+implantation+talus" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:text-[#01867A]">&#91;PubMed Ara&#93;</a>
              </li>
              <li>
                5. Savage-Elliott I, et al. "Osteochondral lesions of the talus: a current concepts review and evidence-based treatment paradigm." Foot Ankle Spec. 2014. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=osteochondral+lesion+talus+current+concepts" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:text-[#01867A]">&#91;PubMed Ara&#93;</a>
              </li>
            </ol>
            
            <details className="mt-6">
              <summary className="cursor-pointer font-semibold text-gray-900 hover:text-[#01CAB8]">
                Ek Kaynaklar (5 Referans Daha)
              </summary>
              <ol start={6} className="space-y-3 text-sm text-gray-700 mt-4">
                <li>
                  6. Ferkel RD, et al. "Arthroscopic treatment of chronic osteochondral lesions of the talus." Am J Sports Med. 2008. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=arthroscopic+treatment+talus+osteochondral" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:text-[#01867A]">&#91;PubMed Ara&#93;</a>
                </li>
                <li>
                  7. Becher C, Thermann H. "Results of microfracture in the treatment of articular cartilage defects of the talus." Foot Ankle Int. 2005. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=microfracture+talus+cartilage" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:text-[#01867A]">&#91;PubMed Ara&#93;</a>
                </li>
                <li>
                  8. Lopes R, et al. "Bone marrow aspirate concentrate for the treatment of osteochondral lesions of the talus." Foot Ankle Surg. 2016. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=bone+marrow+aspirate+talus" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:text-[#01867A]">&#91;PubMed Ara&#93;</a>
                </li>
                <li>
                  9. Murawski CD, Kennedy JG. "Operative treatment of osteochondral lesions of the talus." J Bone Joint Surg Am. 2013. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=operative+treatment+osteochondral+talus" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:text-[#01867A]">&#91;PubMed Ara&#93;</a>
                </li>
                <li>
                  10. Kumai T, et al. "Osteochondral defects of the talus in ankle fracture." Foot Ankle Int. 2010. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=osteochondral+defect+talus+ankle+fracture" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:text-[#01867A]">&#91;PubMed Ara&#93;</a>
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
