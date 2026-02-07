
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Eklem Sağlığı İçin Takviye: Hareket Özgürlüğünüzü Geri Kazanın | Dr. Özgür Oktay Nar',
  description: 'Eklem sağlığı neden önemlidir, eklem sorunlarının nedenleri, glukozamin, kondroitin, MSM, kollajen, omega-3 gibi takviyeler ve yaşam alışkanlıkları hakkında detaylı bilgi.',
  keywords: 'eklem sağlığı takviyesi, glukozamin, kondroitin, MSM, kollajen, omega-3, eklem ağrısı, kıkırdak sağlığı, doğal takviyeler',
  authors: [{ name: 'Dr. Özgür Oktay Nar' }],
  openGraph: {
    title: 'Eklem Sağlığı İçin Takviye: Hareket Özgürlüğünüzü Geri Kazanın',
    description: 'Eklem sağlığı neden önemlidir, eklem sorunlarının nedenleri, glukozamin, kondroitin, MSM, kollajen, omega-3 gibi takviyeler ve yaşam alışkanlıkları hakkında detaylı bilgi.',
    type: 'article',
    locale: 'tr_TR',
    url: 'https://www.drozguroktaynar.com/blog/eklem-sagligi-icin-takviye',
    siteName: 'Dr. Özgür Oktay Nar',
    images: [
      {
        url: 'https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/sportswoman-controlling-her-joints-1.webp',
        width: 800,
        height: 450,
        alt: 'Eklem Sağlığı',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eklem Sağlığı İçin Takviye: Hareket Özgürlüğünüzü Geri Kazanın',
    description: 'Eklem sağlığı takviyeleri, nedenleri ve destekleyici yaşam alışkanlıkları hakkında detaylı bilgi.',
    images: ['https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/sportswoman-controlling-her-joints-1.webp'],
  },
  alternates: {
    canonical: 'https://www.drozguroktaynar.com/blog/eklem-sagligi-icin-takviye',
  },
};

export default function EklemSagligiIcinTakviyePage() {

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': 'https://www.drozguroktaynar.com/blog/eklem-sagligi-icin-takviye#webpage',
        url: 'https://www.drozguroktaynar.com/blog/eklem-sagligi-icin-takviye',
        name: 'Eklem Sağlığı İçin Takviye: Hareket Özgürlüğünüzü Geri Kazanın',
        description: 'Eklem sağlığı neden önemlidir, eklem sorunlarının nedenleri, glukozamin, kondroitin, MSM, kollajen, omega-3 gibi takviyeler ve yaşam alışkanlıkları hakkında detaylı bilgi.',
        datePublished: '2025-05-16T13:46:25+00:00',
        dateModified: '2025-05-16T13:46:35+00:00',
        inLanguage: 'tr-TR',
        about: {
          '@type': 'MedicalCondition',
          name: 'Eklem Ağrısı',
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
        '@id': 'https://www.drozguroktaynar.com/blog/eklem-sagligi-icin-takviye#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Eklem sağlığı için hangi takviye en iyisidir?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Glukozamin ve kondroitin sülfat birlikte alındığında en etkili kombinasyonu oluşturur.',
            },
          },
          {
            '@type': 'Question',
            name: 'Kemik ağrısına iyi gelen ilaç nedir?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'D vitamini, omega-3 ve kollajen bazlı takviyeler kemik ağrısını azaltır. Ancak doktor kontrolünde kullanılmalıdır.',
            },
          },
          {
            '@type': 'Question',
            name: 'Diz ağrısına hangi hap iyi gelir?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Glukozamin içeren haplar, özellikle diz kireçlenmesi şikâyeti olan bireylerde rahatlama sağlar.',
            },
          },
          {
            '@type': 'Question',
            name: 'Diz ağrısı ne iyi gelir?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Egzersiz, kilo kontrolü ve doğal takviyeler diz ağrısını büyük ölçüde azaltır.',
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
      <section className="relative py-16 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Eklem Sağlığı İçin Takviye: Hareket Özgürlüğünüzü Geri Kazanın
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Eklem sağlığını korumak ve hareket özgürlüğünüzü geri kazanmak için doğru takviyeler ve yaşam alışkanlıklarıyla eklemlerinizi destekleyin.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="tel:+905525627769"
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
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
            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 mb-8 rounded-r-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">İçindekiler</h2>
              <ul className="space-y-2">
                <li><a href="#neden-onemli" className="text-purple-600 hover:text-purple-800 hover:underline">Eklem Sağlığı Neden Önemlidir?</a></li>
                <li><a href="#sorun-nedenleri" className="text-purple-600 hover:text-purple-800 hover:underline">Eklem Sorunlarının En Sık Görülen Nedenleri</a></li>
                <li><a href="#hangi-takviyeler" className="text-purple-600 hover:text-purple-800 hover:underline">Eklem Sağlığı İçin Hangi Takviyeler Kullanılır?</a></li>
                <li><a href="#dogal-bitkisel" className="text-purple-600 hover:text-purple-800 hover:underline">Doğal ve Bitkisel Takviye Seçenekleri</a></li>
                <li><a href="#yasam-aliskanliklari" className="text-purple-600 hover:text-purple-800 hover:underline">Eklem Sağlığını Destekleyen Yaşam Alışkanlıkları</a></li>
                <li><a href="#sss" className="text-purple-600 hover:text-purple-800 hover:underline">Sıkça Sorulan Sorular</a></li>
              </ul>
            </div>

            {/* Section 1 */}
            <section id="neden-onemli" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Eklem Sağlığı Neden Önemlidir?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Eklemler, iskelet sisteminin hareketli bağlantı noktaları olarak vücudun temel işlevlerini yerine getirir. Bu sayede yürümek, koşmak, merdiven çıkmak, eğilmek, oturup kalkmak, yük taşımak gibi günlük yaşam aktiviteleri mümkün hâle gelir.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Eklem sağlığı bozulduğunda, bu temel işlevler zarar görür. Böylece hareket kabiliyeti kısıtlanır ve yaşam kalitesi olumsuz etkilenir. Özellikle diz, kalça ve omuz gibi sık kullanılan büyük eklemlerde görülen ağrılar; bireylerin sosyal hayattan uzaklaşmasına, fiziksel aktivitelerini sınırlandırmasına yol açar.
                </p>
                <div className="my-8">
                  <img
                    src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/sportswoman-controlling-her-joints-1.webp"
                    alt="Eklem Sağlığı Kontrolü"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section id="sorun-nedenleri" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Eklem Sorunlarının En Sık Görülen Nedenleri</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Eklemde sertlik, şişlik veya hareket kısıtlılığı gibi şikâyetler, günümüzde pek çok kişinin yaşam kalitesini olumsuz etkileyen yaygın sağlık problemleri arasındadır. Bu tür sorunların ardında ise farklı biyolojik ve çevresel nedenler bulunabilir.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-purple-600">
                    <h4 className="font-semibold text-gray-900 mb-2">Yaşlanma</h4>
                    <p className="text-gray-700 text-sm">Kıkırdak dokusunun elastikiyeti azalır, sürtünme artar.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-purple-600">
                    <h4 className="font-semibold text-gray-900 mb-2">Fazla Kilo</h4>
                    <p className="text-gray-700 text-sm">Yük taşıyan eklemler üzerinde yoğun baskı oluşturur, kıkırdak yıpranır.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-purple-600">
                    <h4 className="font-semibold text-gray-900 mb-2">Travmalar ve Yaralanmalar</h4>
                    <p className="text-gray-700 text-sm">Spor kazaları, düşmeler, darbeler kalıcı hasara neden olabilir.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-purple-600">
                    <h4 className="font-semibold text-gray-900 mb-2">Hareketsiz Yaşam Tarzı</h4>
                    <p className="text-gray-700 text-sm">Eklem çevresindeki kasları zayıflatır, desteklenmeyi zorlaştırır.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="hangi-takviyeler" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Eklem Sağlığı İçin Hangi Takviyeler Kullanılır?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Eklem sağlığı için takviye</strong> kullanımı, özellikle yaşla birlikte artan ağrı ve sertlik şikâyetlerini hafifletmek adına oldukça etkilidir. Bu takviyeler genellikle kıkırdak dokuyu besleyen, iltihabı azaltan ve eklem sıvısını koruyan içeriklere sahiptir.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="border-l-4 border-[#01CAB8] pl-4 bg-[#E6FAF8] p-4 rounded-r-lg">
                    <h4 className="font-semibold text-gray-900 mb-1">Glukozamin Sülfat & Kondroitin Sülfat</h4>
                    <p className="text-gray-700 text-sm">Kıkırdak yapı taşlarıdır, kıkırdak yıkımını azaltır ve yeniden yapılanmasına katkı sağlar.</p>
                  </div>
                  <div className="border-l-4 border-[#01CAB8] pl-4 bg-[#E6FAF8] p-4 rounded-r-lg">
                    <h4 className="font-semibold text-gray-900 mb-1">MSM (Metilsülfonilmetan)</h4>
                    <p className="text-gray-700 text-sm">Anti-enflamatuvar etkisiyle ağrıyı azaltır, bağ dokularını destekler.</p>
                  </div>
                  <div className="border-l-4 border-[#01CAB8] pl-4 bg-[#E6FAF8] p-4 rounded-r-lg">
                    <h4 className="font-semibold text-gray-900 mb-1">Kollajen Tip II</h4>
                    <p className="text-gray-700 text-sm">Eklem kıkırdağının temel bileşenidir, sertlik ve ağrıyı azaltır.</p>
                  </div>
                  <div className="border-l-4 border-[#01CAB8] pl-4 bg-[#E6FAF8] p-4 rounded-r-lg">
                    <h4 className="font-semibold text-gray-900 mb-1">Omega-3 Yağ Asitleri</h4>
                    <p className="text-gray-700 text-sm">Eklem iltihabını baskılar, hareket kabiliyetini artırır.</p>
                  </div>
                  <div className="border-l-4 border-[#01CAB8] pl-4 bg-[#E6FAF8] p-4 rounded-r-lg">
                    <h4 className="font-semibold text-gray-900 mb-1">Vitamin D3 ve K2</h4>
                    <p className="text-gray-700 text-sm">Kemik ve eklem bütünlüğü için vazgeçilmezdir, kalsiyumun doğru yönlenmesini sağlar.</p>
                  </div>
                </div>
                <div className="my-8">
                  <img
                    src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/curing-himself-1.webp"
                    alt="Takviye Kullanımı - Eklem Sağlığı"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="dogal-bitkisel" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Doğal ve Bitkisel Takviye Seçenekleri</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Eczane takviyelerinin yanı sıra doğanın sunduğu bazı besinler de eklem sağlığını destekleyici etkiler sunar. Bitkisel kaynaklı bu besinler, hem kolay ulaşılabilir olmaları hem de yan etki risklerinin düşüklüğü nedeniyle günlük yaşamda güvenle tercih edilebilir.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Zerdeçal (Kurkumin)</h4>
                    <p className="text-gray-700 text-sm">Güçlü antioksidan ve anti-inflamatuvar etki gösterir, iltihabı azaltır.</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Zencefil</h4>
                    <p className="text-gray-700 text-sm">Doğal ağrı kesici özelliği vardır, iltihapla savaşır, sertliği azaltır.</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Yeşil Çay</h4>
                    <p className="text-gray-700 text-sm">Yüksek antioksidan kapasitesiyle kıkırdak sağlığını korur.</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Kemik Suyu</h4>
                    <p className="text-gray-700 text-sm">Doğal kollajen kaynağıdır, eklem ve bağ dokularının onarımına yardımcı olur.</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Yağlı Balıklar (Omega-3)</h4>
                    <p className="text-gray-700 text-sm">Enflamasyonu azaltır ve eklem sıvısının kalitesini artırır.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="yasam-aliskanliklari" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Eklem Sağlığını Destekleyen Yaşam Alışkanlıkları</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Eklem sağlığı için takviye</strong> kullanımı tek başına yeterli değildir. Kalıcı ve etkili sonuçlar elde etmek için yaşam tarzında bazı temel değişiklikler yapmak gerekir.
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li className="text-gray-700">**Düzenli Egzersiz:** Düşük etkili sporlar (yüzme, yürüyüş, yoga) eklemlere zarar vermeden kasları güçlendirir.</li>
                  <li className="text-gray-700">**İdeal Kiloyu Koruyun:** Her fazla kilo, diz eklemlerine ek yük bindirerek kıkırdakların aşınmasına neden olur.</li>
                  <li className="text-gray-700">**Bol Su Tüketin:** Yeterli sıvı alımı eklemlerin kayganlığını ve hareket kabiliyetini artırır.</li>
                  <li className="text-gray-700">**Uzun Süre Aynı Pozisyonda Kalmayın:** Eklemler hareket ettikçe beslenir. Gün içinde molalar vererek pozisyon değiştirin.</li>
                  <li className="text-gray-700">**Anti-enflamatuvar Beslenin:** Şekerli ve işlenmiş gıdalardan uzak durarak sebze, meyve, tam tahıl ağırlıklı beslenin.</li>
                </ul>
                <div className="my-8">
                  <img
                    src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/two-men-shaking-hands-in-a-doctor-office-2025-03-09-20-27-25-utc.webp"
                    alt="Doktor Görüşmesi - Sağlıklı Yaşam"
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Eklem sağlığı için hangi takviye en iyisidir?</h3>
                  <p className="text-gray-700">Glukozamin ve kondroitin sülfat birlikte alındığında en etkili kombinasyonu oluşturur.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Kemik ağrısına iyi gelen ilaç nedir?</h3>
                  <p className="text-gray-700">D vitamini, omega-3 ve kollajen bazlı takviyeler kemik ağrısını azaltır. Ancak doktor kontrolünde kullanılmalıdır.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Diz ağrısına hangi hap iyi gelir?</h3>
                  <p className="text-gray-700">Glukozamin içeren haplar, özellikle diz kireçlenmesi şikâyeti olan bireylerde rahatlama sağlar.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Diz ağrısı ne iyi gelir?</h3>
                  <p className="text-gray-700">Egzersiz, kilo kontrolü ve doğal takviyeler diz ağrısını büyük ölçüde azaltır.</p>
                </div>
              </div>
            </section>

            {/* References Section */}
            <section className="mb-12 bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Kaynaklar</h2>
              <ol className="list-decimal pl-6 space-y-3 text-sm text-gray-700">
                <li>
                  McAlindon TE, et al. "Effect of glucosamine and chondroitin sulfate on progression of knee osteoarthritis" New England Journal of Medicine. 2013. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=glucosamine+chondroitin+knee+osteoarthritis" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  Messier SP, et al. "Weight loss reduces knee-joint loading in overweight and obese adults" Arthritis & Rheumatism. 2005. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=weight+loss+knee+joint+loading" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  Clegg DO, et al. "Glucosamine, chondroitin sulfate, and the two in combination for painful knee osteoarthritis" New England Journal of Medicine. 2006. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=glucosamine+chondroitin+painful+knee" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  Kim LS, et al. "Efficacy of methylsulfonylmethane (MSM) in osteoarthritis pain of the knee" Osteoarthritis and Cartilage. 2006. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=MSM+osteoarthritis+pain+knee" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  Clark KL, et al. "24-week study on the use of collagen hydrolysate as a dietary supplement" Current Medical Research and Opinion. 2008. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=collagen+hydrolysate+dietary+supplement" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">[PubMed Ara]</a>
                </li>
                
                <li>
                      Goldberg RJ, et al. "Dietary omega-3 fatty acids for pain in osteoarthritis" Pain. 2007. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=omega-3+fatty+acids+pain+osteoarthritis" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">[PubMed Ara]</a>
                    </li>
                    <li>
                      Bjordal JM, et al. "Non-steroidal anti-inflammatory drugs, glucocorticosteroids, and omega-3 fatty acids for tendinopathy" British Journal of Sports Medicine. 2010. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=tendinopathy+omega-3+fatty+acids" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">[PubMed Ara]</a>
                    </li>
                    <li>
                      Mangels AR, et al. "Vitamin D and musculoskeletal health" American Journal of Clinical Nutrition. 2004. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=vitamin+D+musculoskeletal+health" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">[PubMed Ara]</a>
                    </li>
                    <li>
                      Shea B, et al. "Glucosamine sulfate for osteoarthritis" Cochrane Database of Systematic Reviews. 2004. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=glucosamine+sulfate+osteoarthritis" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">[PubMed Ara]</a>
                    </li>
                    <li>
                      Rayman MP. "The importance of selenium to human health" The Lancet. 2000. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=selenium+human+health" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">[PubMed Ara]</a>
                    </li>
              </ol>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sonuç</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Eklem sağlığını korumak, yaşam kalitesini artırmanın ve uzun vadeli bedensel konforu sürdürmenin temel yollarından biridir. Bu noktada yalnızca tedavi edici değil, önleyici yaklaşım da büyük önem taşır.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Uygun takviyeler, sağlıklı bir yaşam tarzı ve düzenli fiziksel aktiviteyle birlikte uygulandığında, hareket özgürlüğü yeniden kazanılır ve eklem yapısı daha uzun süre sağlıklı kalır. Erken dönemde önlem almak hayati bir adımdır.
                </p>
              </div>
            </section>

            {/* Internal Link */}
            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 mb-8 rounded-r-lg">
              <p className="text-gray-700 mb-2">
                <strong>İlgili İçerik:</strong> Ameliyatsız tedavi seçenekleri hakkında daha fazla bilgi için{' '}
                <Link href="/ameliyatsiz-cozumler" className="text-purple-600 hover:text-purple-800 font-semibold hover:underline">
                  ameliyatsız çözümler sayfamızı
                </Link>{' '}
                ziyaret edebilirsiniz.
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-lg p-8 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Eklem Sağlığınız İçin Uzman Desteği Alın</h2>
              <p className="text-xl mb-6 text-purple-100">
                Eklem ağrıları veya hareket kısıtlılığı yaşıyorsanız, kişiye özel takviye ve tedavi planı için bize ulaşın.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="tel:+905525627769"
                  className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-purple-50 transition-colors"
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
