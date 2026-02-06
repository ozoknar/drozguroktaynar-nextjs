
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Çapraz Bağ Kopması: Belirtileri ve Etkili Tedavi Yöntemleri | Dr. Özgür Oktay Nar',
  description: 'Diz çapraz bağ kopması nedenleri, ön, arka ve yan çapraz bağ kopması belirtileri, tanı ve cerrahi ile rehabilitasyon dahil olmak üzere etkili tedavi yöntemleri hakkında detaylı bilgi.',
  keywords: 'çapraz bağ kopması, ön çapraz bağ, arka çapraz bağ, yan çapraz bağ, diz sakatlığı, ACL kopması, diz ameliyatı, fizik tedavi',
  authors: [{ name: 'Dr. Özgür Oktay Nar' }],
  openGraph: {
    title: 'Çapraz Bağ Kopması: Belirtileri ve Etkili Tedavi Yöntemleri',
    description: 'Diz çapraz bağ kopması nedenleri, ön, arka ve yan çapraz bağ kopması belirtileri, tanı ve etkili tedavi yöntemleri hakkında detaylı bilgi.',
    type: 'article',
    locale: 'tr_TR',
    url: 'https://www.drozguroktaynar.com/blog/capraz-bag-acl-kopmasi',
    siteName: 'Dr. Özgür Oktay Nar',
    images: [
      {
        url: 'https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/man-bent-her-head-grabbed-him-her-after-exercise_1150-22887-1.webp',
        width: 800,
        height: 450,
        alt: 'Çapraz Bağ Kopması',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Çapraz Bağ Kopması: Belirtileri ve Etkili Tedavi Yöntemleri',
    description: 'Diz çapraz bağ kopması belirtileri, tedavi ve rehabilitasyon hakkında detaylı bilgi.',
    images: ['https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/man-bent-her-head-grabbed-him-her-after-exercise_1150-22887-1.webp'],
  },
  alternates: {
    canonical: 'https://www.drozguroktaynar.com/blog/capraz-bag-acl-kopmasi',
  },
};

export default function CaprazBagAclKopmasiPage() {

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': 'https://www.drozguroktaynar.com/blog/capraz-bag-acl-kopmasi#webpage',
        url: 'https://www.drozguroktaynar.com/blog/capraz-bag-acl-kopmasi',
        name: 'Çapraz Bağ Kopması: Belirtileri ve Etkili Tedavi Yöntemleri',
        description: 'Diz çapraz bağ kopması nedenleri, ön, arka ve yan çapraz bağ kopması belirtileri, tanı ve cerrahi ile rehabilitasyon dahil olmak üzere etkili tedavi yöntemleri hakkında detaylı bilgi.',
        datePublished: '2025-05-21T12:37:01+00:00',
        dateModified: '2026-01-13T08:16:38+00:00',
        inLanguage: 'tr-TR',
        about: {
          '@type': 'MedicalCondition',
          name: 'Çapraz Bağ Kopması',
        },
        audience: {
          '@type': 'Patient',
        },
        author: {
          '@type': 'Physician',
          name: 'Dr. Özgür Oktay Nar',
          url: 'https://www.drozguroktaynar.com',
          specialty: 'Ortopedi ve Travmatoloji',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Dr. Özgür Oktay Nar',
          url: 'https://www.drozguroktaynar.com',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.drozguroktaynar.com/blog/capraz-bag-acl-kopmasi#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Ön çapraz bağ kopması ne kadar sürede iyileşir?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Cerrahi sonrası 6-9 ayda tam iyileşme sağlanabilir. Fizik tedavi süreci buna katkı sağlar.',
            },
          },
          {
            '@type': 'Question',
            name: 'Çapraz bağ kopması ameliyatsız geçer mi?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Hafif yaralanmalarda fizik tedavi yeterli olabilmektedir. Ancak ciddi kopmalarda ameliyat önerilmektedir.',
            },
          },
          {
            '@type': 'Question',
            name: 'Çapraz bağ ameliyatı sonrası tekrar spor yapılabilir mi?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Evet. Ancak doktorun belirlediği programla kontrollü dönüş yapılmalıdır.',
            },
          },
          {
            '@type': 'Question',
            name: 'Çapraz bağ kopması sadece sporcularda mı olur?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Hayır. Günlük yaşamda da düşme veya travmalar sonucu herkesin başına gelebilmektedir.',
            },
          },
          {
            '@type': 'Question',
            name: 'MR görüntüsünde çapraz bağ kopması net olarak görülür mü?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Evet. MR, en güvenilir görüntüleme yöntemlerinden biridir.',
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Çapraz Bağ Kopması: Belirtileri ve Etkili Tedavi Yöntemleri
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Çapraz bağ kopması, diz sağlığını tehdit eden en yaygın ve ciddi yaralanmalardan biridir. Erken tanı ve doğru tedavi yöntemiyle diz fonksiyonları geri kazanılır.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="tel:+905525627769"
                className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Hemen Ara
              </Link>
              <Link
                href="https://wa.me/905525627769"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Table of Contents */}
            <div className="bg-blue-50 border-l-4 border-blue-700 p-6 mb-8 rounded-r-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">İçindekiler</h2>
              <ul className="space-y-2">
                <li><a href="#capraz-bag-nedir" className="text-blue-700 hover:text-blue-900 hover:underline">Çapraz Bağ Kopması Nedir?</a></li>
                <li><a href="#on-capraz-bag-belirtileri" className="text-blue-700 hover:text-blue-900 hover:underline">Ön Çapraz Bağ Kopması Belirtileri</a></li>
                <li><a href="#arka-capraz-bag-belirtileri" className="text-blue-700 hover:text-blue-900 hover:underline">Arka Çapraz Bağ Kopması Belirtileri</a></li>
                <li><a href="#yan-capraz-bag-belirtileri" className="text-blue-700 hover:text-blue-900 hover:underline">Yan Çapraz Bağ Kopması Belirtileri</a></li>
                <li><a href="#nedenleri" className="text-blue-700 hover:text-blue-900 hover:underline">Çapraz Bağ Kopmasının Nedenleri</a></li>
                <li><a href="#tedavi" className="text-blue-700 hover:text-blue-900 hover:underline">Çapraz Bağ Kopması Tedavisi</a></li>
                <li><a href="#rehabilitasyon" className="text-blue-700 hover:text-blue-900 hover:underline">Cerrahi Müdahale ve Sonrası Rehabilitasyon</a></li>
                <li><a href="#sss" className="text-blue-700 hover:text-blue-900 hover:underline">Sıkça Sorulan Sorular</a></li>
              </ul>
            </div>

            {/* Section 1 */}
            <section id="capraz-bag-nedir" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Çapraz Bağ Kopması Nedir?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Çapraz bağ kopması, diz ekleminde sık karşılaşılan ve hareket kabiliyetini ciddi şekilde etkileyen bir yumuşak doku yaralanmasıdır. Bu bağlar, uyluk kemiği ile kaval kemiği arasındaki bağlantıyı sağlayarak dizin doğru eksende hareket etmesini mümkün kılar. Diz ekleminin stabilitesini sağlayan bu bağlar, özellikle ani yön değiştirme, zıplama veya ani durma gibi hareketlerde önemli bir görev üstlenir.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ön çapraz bağ (ÖÇB), arka çapraz bağ (AÇB) ve yan çapraz bağlar olmak üzere farklı gruplara ayrılır. Bu bağlardan herhangi birinin kopması durumunda dizin kararlılığı bozulur. Tedavi edilmediğinde dizde kayma hissi, ağrı, şişlik ve güven kaybı gibi problemler görülebilir.
                </p>
                <div className="my-8">
                  <img
                    src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/man-bent-her-head-grabbed-him-her-after-exercise_1150-22887-1.webp"
                    alt="Diz Ağrısı - Sporcu"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section id="on-capraz-bag-belirtileri" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ön Çapraz Bağ Kopması Belirtileri</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ön çapraz bağ kopması, özellikle futbol, basketbol, kayak gibi ani yön değiştirme gerektiren sporlarda sık görülen ciddi bir diz yaralanmasıdır. Bu yaralanma, dizin stabilitesini büyük ölçüde etkiler ve bireyin günlük hareket kabiliyetini sınırlar.
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li className="text-gray-700">Travma anında dizde ani ve şiddetli ağrı</li>
                  <li className="text-gray-700">Diz içinde yırtılma veya kopma sesi ('pop' sesi)</li>
                  <li className="text-gray-700">Kısa süre içinde belirgin diz şişliği</li>
                  <li className="text-gray-700">Dizde boşalma veya güvensizlik hissi</li>
                  <li className="text-gray-700">Yürüme sırasında ağrı ve tam basmada zorluk</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section id="arka-capraz-bag-belirtileri" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Arka Çapraz Bağ Kopması Belirtileri</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Arka çapraz bağ (AÇB) kopması, ön çapraz bağ yaralanmalarına göre daha az görülse de özellikle yüksek enerjili travmalar sonrasında ortaya çıkabilir. Bu bağın zedelenmesi, dizin arka kısmındaki yük taşıma ve denge kabiliyetini olumsuz etkiler.
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li className="text-gray-700">Denge kaybı ve güvensizlik hissi</li>
                  <li className="text-gray-700">Hafif ağrı ve şişlik (dizin arka kısmında)</li>
                  <li className="text-gray-700">Dizde stabilite kaybı (gevşeklik hissi)</li>
                  <li className="text-gray-700">Merdiven çıkarken zorlanma</li>
                  <li className="text-gray-700">Arka diz boşluğunda ağrı</li>
                </ul>
                <div className="my-8">
                  <img
                    src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/anterior-cruciate-ligament-acl-injury_1308-170239.webp"
                    alt="Diz Bağ Yaralanması - Ön Çapraz Bağ"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="yan-capraz-bag-belirtileri" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Yan Çapraz Bağ Kopması Belirtileri</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Yan çapraz bağlar, dizin iç (medial) ve dış (lateral) kısımlarında yer alır ve dizin yana doğru stabilitesini sağlayan temel yapılardandır. Bu bağların kopması, genellikle burkulma, ani yön değiştirme veya doğrudan darbe alma gibi durumlar sonucunda meydana gelir.
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li className="text-gray-700">Diz yan taraflarında ağrı</li>
                  <li className="text-gray-700">Ayakta dik durmada zorlanma</li>
                  <li className="text-gray-700">Dizin yana doğru kayması veya 'kaçması' hissi</li>
                  <li className="text-gray-700">Egzersizlerde dengesizlik</li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section id="nedenleri" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Çapraz Bağ Kopmasının Nedenleri</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Çapraz bağlar, diz eklemini sabit tutan ve hareket sırasında dizin doğru eksende çalışmasını sağlayan temel yapılardır. Bu bağlar, belirli travmalar ya da aşırı zorlanmalar sonucunda kopar. Yaralanmalar genellikle ani ve kontrolsüz hareketler sonucunda meydana gelir.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded-r-lg mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Yaygın Nedenler:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li className="text-gray-700">Ani yön değiştirme hareketleri</li>
                    <li className="text-gray-700">Yanlış düşme veya zıplama teknikleri</li>
                    <li className="text-gray-700">Dize doğrudan darbe alma</li>
                    <li className="text-gray-700">Motorlu araç kazaları (özellikle diz bükülü pozisyonda darbe)</li>
                    <li className="text-gray-700">Futbol, basketbol gibi temaslı sporlarda diz zorlanmaları</li>
                  </ul>
                </div>
                <div className="my-8">
                  <img
                    src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/asian-senior-or-elderly-old-lady-woman-patient-sho-2025-02-25-05-03-20-utc.webp"
                    alt="Diz Kontrolü - Hasta ve Doktor"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="tedavi" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Çapraz Bağ Kopması Tedavisi</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tedavi, hastanın yaşı, günlük yaşamındaki fiziksel aktivite düzeyi ve yaralanmanın ciddiyetine göre kişiye özel olarak planlanmaktadır. Uygun tedavi yöntemiyle hem dizin stabilitesi korunmaktadır hem de hastanın yaşam kalitesi artırılmaktadır.
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li className="text-gray-700">Hafif vakalarda fizik tedavi ve kas güçlendirme yeterli olur.</li>
                  <li className="text-gray-700">Orta düzey yaralanmalarda dizlik ve koruyucu ekipman kullanılmalıdır.</li>
                  <li className="text-gray-700">İleri düzey kopmalarda cerrahi müdahale (artroskopik çapraz bağ rekonstrüksiyonu) gerekir.</li>
                </ul>
              </div>
            </section>

            {/* Section 7 - Rehabilitation */}
            <section id="rehabilitasyon" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Cerrahi Müdahale ve Sonrası Rehabilitasyon</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Çapraz bağ kopmalarında cerrahi müdahale, özellikle tam yırtıkların varlığında veya dizde belirgin instabilite olduğunda tercih edilmektedir. Cerrahi tedavide, kopan bağ özel bir greft kullanılarak yeniden yapılandırılır. Operasyon sonrası iyileşme süreci kadar, rehabilitasyon dönemi de tedavinin başarısı açısından son derece kritiktir.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded-r-lg mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Rehabilitasyon Aşamaları:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li className="text-gray-700">İlk haftalarda istirahat ve buz uygulaması (ödem ve ağrı kontrolü)</li>
                    <li className="text-gray-700">Kontrollü fizik tedavi programları (eklem çevresi kasları aktif tutma)</li>
                    <li className="text-gray-700">Kas kuvvetini artıran egzersizler (kuadriseps ve hamstring güçlendirme)</li>
                    <li className="text-gray-700">Diz hareket kabiliyetini geri kazandıracak terapi seansları</li>
                  </ul>
                </div>
                <div className="my-8">
                  <img
                    src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/E104MN4G.webp"
                    alt="Diz Rehabilitasyonu - Fizyoterapist Eşliğinde Egzersiz"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="sss" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Sıkça Sorulan Sorular</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Ön çapraz bağ kopması ne kadar sürede iyileşir?</h3>
                  <p className="text-gray-700">Cerrahi sonrası 6-9 ayda tam iyileşme sağlanabilir. Fizik tedavi süreci buna katkı sağlar.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Çapraz bağ kopması ameliyatsız geçer mi?</h3>
                  <p className="text-gray-700">Hafif yaralanmalarda fizik tedavi yeterli olabilmektedir. Ancak ciddi kopmalarda ameliyat önerilmektedir.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Çapraz bağ ameliyatı sonrası tekrar spor yapılabilir mi?</h3>
                  <p className="text-gray-700">Evet. Ancak doktorun belirlediği programla kontrollü dönüş yapılmalıdır.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Çapraz bağ kopması sadece sporcularda mı olur?</h3>
                  <p className="text-gray-700">Hayır. Günlük yaşamda da düşme veya travmalar sonucu herkesin başına gelebilmektedir.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">MR görüntüsünde çapraz bağ kopması net olarak görülür mü?</h3>
                  <p className="text-gray-700">Evet. MR, en güvenilir görüntüleme yöntemlerinden biridir.</p>
                </div>
              </div>
            </section>

            {/* References Section */}
            <section className="mb-12 bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Kaynaklar</h2>
              <ol className="list-decimal pl-6 space-y-3 text-sm text-gray-700">
                <li>
                  Prodromos CC, et al. "A meta-analysis of anterior cruciate ligament reconstruction" American Journal of Sports Medicine. 2007. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=ACL+reconstruction+meta-analysis" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  Frank C, et al. "Anterior cruciate ligament injury: diagnosis and treatment" Journal of Orthopaedic & Sports Physical Therapy. 2004. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=ACL+injury+diagnosis+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  Myer GD, et al. "The effect of plyometric versus traditional anterior cruciate ligament injury prevention training on performance and neuromuscular control" American Journal of Sports Medicine. 2009. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=ACL+injury+prevention+training" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  Renström P, et al. "Posterior cruciate ligament injury: treatment and rehabilitation" Sports Medicine. 2003. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=PCL+injury+treatment+rehabilitation" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  Hewett TE, et al. "Decrease in neuromuscular control and increase in knee abduction moments in females with ACL injury" American Journal of Sports Medicine. 2004. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=ACL+injury+neuromuscular+control+females" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">[PubMed Ara]</a>
                </li>
                
                <li>
                      Shelbourne KD, et al. "Outcomes of anterior cruciate ligament reconstruction with patellar tendon autograft" American Journal of Sports Medicine. 2002. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=ACL+reconstruction+patellar+tendon" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">[PubMed Ara]</a>
                    </li>
                    <li>
                      Webster KE, et al. "Return to sport after anterior cruciate ligament reconstruction" Sports Medicine. 2011. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=return+to+sport+ACL+reconstruction" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">[PubMed Ara]</a>
                    </li>
                    <li>
                      Kaeding CC, et al. "Anterior cruciate ligament reconstruction in skeletally immature patients" American Journal of Sports Medicine. 2013. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=ACL+reconstruction+immature+patients" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">[PubMed Ara]</a>
                    </li>
                    <li>
                      Kamath GV, et al. "Revision anterior cruciate ligament reconstruction" American Journal of Sports Medicine. 2011. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=revision+ACL+reconstruction" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">[PubMed Ara]</a>
                    </li>
                    <li>
                      Frobell RB, et al. "Treatment for acute anterior cruciate ligament tear: a randomized trial" New England Journal of Medicine. 2010. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=acute+ACL+tear+randomized+trial" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">[PubMed Ara]</a>
                    </li>
              </ol>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sonuç</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Çapraz bağ kopması, özellikle aktif yaşam süren bireylerde sık görülen bir yaralanmadır. Bu durum, dizin hareket kabiliyetini ve günlük yaşamdaki işlevselliğini ciddi şekilde etkiler. Erken dönemde fark edilip doğru şekilde tedavi edildiğinde tamamen kontrol altına alınabilmektedir.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ağrı, şişlik, dizde boşluk hissi ya da güvensizlik gibi belirtiler görüldüğünde zaman kaybetmeden bir ortopedi uzmanına başvurmak son derece önemlidir. Gecikmeden başlatılan tedavi süreci, daha hızlı bir iyileşme sağlar ve uzun vadeli komplikasyonların önüne geçilmesine yardımcı olur.
                </p>
              </div>
            </section>

            {/* Internal Link */}
            <div className="bg-blue-50 border-l-4 border-blue-700 p-6 mb-8 rounded-r-lg">
              <p className="text-gray-700 mb-2">
                <strong>İlgili İçerik:</strong> Ameliyatsız tedavi seçenekleri hakkında daha fazla bilgi için{' '}
                <Link href="/ameliyatsiz-cozumler" className="text-blue-700 hover:text-blue-900 font-semibold hover:underline">
                  ameliyatsız çözümler sayfamızı
                </Link>{' '}
                ziyaret edebilirsiniz.
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-lg p-8 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Çapraz Bağ Kopması Tedavisi İçin Uzman Desteği Alın</h2>
              <p className="text-xl mb-6 text-blue-100">
                Diz ağrısı ve instabilite yaşıyorsanız, doğru teşhis ve kişiye özel tedavi planı için bizimle iletişime geçin.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="tel:+905525627769"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  0552 562 77 69
                </Link>
                <Link
                  href="https://wa.me/905525627769"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-colors"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp ile Yaz
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
