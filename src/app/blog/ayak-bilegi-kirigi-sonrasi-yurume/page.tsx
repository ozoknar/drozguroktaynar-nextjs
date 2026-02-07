import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ayak Bileği Kırığı Sonrası Yürüme: Tedavi ve Dikkat Edilenler | Dr. Özgür Oktay Nar',
  description: 'Ayak bileği kırığı sonrası yürüme süreci, alçı ve ameliyat sonrası rehabilitasyon, fizik tedavi programları ve komplikasyonlar hakkında detaylı bilgi.',
  keywords: 'ayak bileği kırığı, yürüme, rehabilitasyon, fizik tedavi, alçı sonrası, ameliyat sonrası, ortopedi',
  authors: [{ name: 'Dr. Özgür Oktay Nar' }],
  openGraph: {
    title: 'Ayak Bileği Kırığı Sonrası Yürüme: Tedavi ve Dikkat Edilenler',
    description: 'Ayak bileği kırığı sonrası yürüme süreci, alçı ve ameliyat sonrası rehabilitasyon, fizik tedavi programları ve komplikasyonlar hakkında detaylı bilgi.',
    type: 'article',
    locale: 'tr_TR',
    url: 'https://www.drozguroktaynar.com/blog/ayak-bilegi-kirigi-sonrasi-yurume',
    siteName: 'Dr. Özgür Oktay Nar',
    images: [
      {
        url: 'https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/close-up-man-s-broken-leg-in-blue-splint-for-treat-2025-03-15-11-44-38-utc-1-1.webp',
        width: 800,
        height: 450,
        alt: 'Ayak Bileği Kırığı',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayak Bileği Kırığı Sonrası Yürüme: Tedavi ve Dikkat Edilenler',
    description: 'Ayak bileği kırığı sonrası yürüme süreci, rehabilitasyon ve fizik tedavi hakkında detaylı bilgi.',
    images: ['https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/close-up-man-s-broken-leg-in-blue-splint-for-treat-2025-03-15-11-44-38-utc-1-1.webp'],
  },
  alternates: {
    canonical: 'https://www.drozguroktaynar.com/blog/ayak-bilegi-kirigi-sonrasi-yurume',
  },
};

export default function AyakBilegiKirigiSonrasiYurumePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': 'https://www.drozguroktaynar.com/blog/ayak-bilegi-kirigi-sonrasi-yurume#webpage',
        url: 'https://www.drozguroktaynar.com/blog/ayak-bilegi-kirigi-sonrasi-yurume',
        name: 'Ayak Bileği Kırığı Sonrası Yürüme: Tedavi ve Dikkat Edilenler',
        description: 'Ayak bileği kırığı sonrası yürüme süreci, alçı ve ameliyat sonrası rehabilitasyon, fizik tedavi programları ve komplikasyonlar hakkında detaylı bilgi.',
        datePublished: '2025-06-13T13:19:31+00:00',
        dateModified: '2025-06-13T13:19:39+00:00',
        inLanguage: 'tr-TR',
        about: {
          '@type': 'MedicalCondition',
          name: 'Ayak Bileği Kırığı',
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
        '@id': 'https://www.drozguroktaynar.com/blog/ayak-bilegi-kirigi-sonrasi-yurume#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Ayak bileği kırığı sonrası yürümek ne kadar sürer?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Kırığın şiddetine bağlı olarak 6 haftadan 6 aya kadar değişir. Doktor kontrolü önemlidir.',
            },
          },
          {
            '@type': 'Question',
            name: 'Alçıdan çıktıktan sonra hemen yürüyebilir miyim?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Hayır. Kas zayıflığı ve eklem sertliği nedeniyle fizyoterapist eşliğinde yürüyüşe başlanmalıdır.',
            },
          },
          {
            '@type': 'Question',
            name: 'Ameliyat sonrası ağrı ne kadar sürer?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'İlk haftalarda ağrı olur. İyileşme ilerledikçe ağrılar azalır.',
            },
          },
          {
            '@type': 'Question',
            name: 'Tam yükle yürüyüş ne zaman başlar?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ortalama 10-12 haftada tam yükle yürüyüş mümkündür. Ancak bireysel farklılıklar olabilmektedir.',
            },
          },
          {
            '@type': 'Question',
            name: 'Ayak bileği kırığı sonrası fizik tedavi şart mıdır?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Evet. Fizik tedavi, normal yürüyüşe dönmek için temel bir süreçtir.',
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
      <section className="relative py-16 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Ayak Bileği Kırığı Sonrası Yürüme: Tedavi ve Dikkat Edilenler
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Ayak bileği kırığı sonrası yürüme süreci, hastaların günlük yaşam kalitesini doğrudan etkileyen önemli bir iyileşme sürecidir. Bilinçli bir şekilde süreci yönetmek, iyileşme döneminin hem fiziksel hem de psikolojik yükünü hafifletir.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="tel:+905525627769"
                className="inline-flex items-center px-6 py-3 bg-[#01CAB8] text-white font-semibold rounded-lg hover:bg-[#01A899] transition-colors"
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
            <div className="bg-[#E6FAF8] border-l-4 border-[#01CAB8] p-6 mb-8 rounded-r-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">İçindekiler</h2>
              <ul className="space-y-2">
                <li><a href="#ayak-bilegi-kirigi-nedir" className="text-[#01CAB8] hover:text-[#01867A] hover:underline">Ayak Bileği Kırığı Nedir?</a></li>
                <li><a href="#iyilesme-sureci" className="text-[#01CAB8] hover:text-[#01867A] hover:underline">Ayak Bileği Kırığı Sonrası İyileşme Süreci</a></li>
                <li><a href="#alci-sonrasi" className="text-[#01CAB8] hover:text-[#01867A] hover:underline">Ayak Bileği Kırığı Alçı Sonrası Yürüme</a></li>
                <li><a href="#ameliyat-sonrasi" className="text-[#01CAB8] hover:text-[#01867A] hover:underline">Ayak Bileği Kırığı Ameliyatı Sonrası Yürüme</a></li>
                <li><a href="#fizik-tedavi" className="text-[#01CAB8] hover:text-[#01867A] hover:underline">Ayak Bileği Kırığı Sonrası Fizik Tedavi ve Egzersizler</a></li>
                <li><a href="#komplikasyonlar" className="text-[#01CAB8] hover:text-[#01867A] hover:underline">Ayak Bileği Kırığı Sonrası Karşılaşılan Komplikasyonlar</a></li>
                <li><a href="#sss" className="text-[#01CAB8] hover:text-[#01867A] hover:underline">Sıkça Sorulan Sorular</a></li>
              </ul>
            </div>

            {/* Section 1 */}
            <section id="ayak-bilegi-kirigi-nedir" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ayak Bileği Kırığı Nedir?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ayak bileği kırığı, ayak bileğini oluşturan kemiklerin çatlaması ya da tam olarak kırılması durumudur. Genellikle ani travmalar sonucunda ortaya çıkar. Düşme, burkulma, spor kazaları, yüksekten atlama ya da trafik kazaları en sık karşılaşılan nedenler arasında yer alır. Kırık sadece kemik bütünlüğünü bozmakla kalmaz. Aynı zamanda çevredeki kas, bağ, tendon ve damar yapıları da bu hasardan etkilenebilir. Bu yüzden, yürüme fonksiyonunda ciddi aksamalar, denge kaybı ve yoğun ağrılar yaşanabilir.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ayak bileği; tibia (kaval kemiği), fibula (kamış kemiği) ve talus (ayak kemiği) isimli üç temel kemikten oluşur. Bu kemikler bir araya gelerek ayak bileğinin stabilitesini ve hareket kabiliyetini sağlar. Bu bölgede oluşan kırıklar, genellikle kırığın tipi, yeri ve şiddetine göre sınıflandırılır. Örneğin; tek kemikte oluşan basit bir çatlak ile birden fazla kemikte oluşan parçalı kırıklar arasında büyük farklar bulunur.
                </p>
                <div className="my-8">
                  <img
                    src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/close-up-man-s-broken-leg-in-blue-splint-for-treat-2025-03-15-11-44-38-utc-1-1.webp"
                    alt="Ayak Bileği Kırığı - Alçılı Bacak"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section id="iyilesme-sureci" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ayak Bileği Kırığı Sonrası İyileşme Süreci</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  İyileşme süreci birçok farklı faktörün etkisiyle kişiden kişiye değişkenlik gösterir. Hastanın yaşı, genel sağlık durumu, kemik yoğunluğu ve kırığın oluştuğu bölge iyileşme sürecini doğrudan etkiler. Ayrıca, kırığın türü ve şiddeti de uygulanacak tedavi yöntemini belirlemede kritik rol oynar. Bazı durumlarda sadece alçı ve istirahat yeterli olurken, daha ciddi kırıklarda cerrahi müdahale kaçınılmaz hale gelir.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tedavi planlaması öncesinde röntgen, bilgisayarlı tomografi (BT) veya manyetik rezonans görüntüleme (MR) gibi ileri görüntüleme teknikleri kullanılır. Bu görüntülemeler sayesinde kırığın yeri, parçalı olup olmadığı ve yumuşak doku hasarının varlığı net bir şekilde değerlendirilir. Hekimler bu verileri analiz ederek, hastaya özel en uygun tedavi protokolünü oluşturur.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="alci-sonrasi" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ayak Bileği Kırığı Alçı Sonrası Yürüme</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Alçı tedavisi, ayak bileği kırıklarında genellikle hafif ve kemiklerin yer değiştirmediği stabil vakalarda tercih edilen bir yöntemdir. Bu tedaviyle amaç, kırılan kemiklerin düzgün bir şekilde kaynamasını sağlamak ve iyileşme sürecini desteklemektir. Alçı genellikle 4 ila 8 hafta boyunca bacakta kalır. Bu süre hastanın kırığın durumuna, yaşına ve kemik iyileşme hızına göre değişebilmektedir.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Alçı çıkarıldıktan sonra iyileşme sürecinin yeni bir aşaması başlar. Çünkü uzun süre hareketsiz kalan kaslar zayıflar, eklemler sertleşir ve denge refleksleri bozulabilmektedir. İlk yürüyüşler genellikle kontrollü ortamda ve fizik tedavi uzmanlarının gözetiminde gerçekleştirilir. Bu aşamada hastanın dikkatli adımlar atması, ani hareketlerden kaçınması ve gerektiğinde yürüme destekleri (baston, walker) kullanması önerilir.
                </p>
                <div className="my-8">
                  <img
                    src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/male-runner-holding-injured-leg-close-up-and-suffe-2024-09-17-05-02-53-utc.webp"
                    alt="Ayak Bileği Ağrısı - Sporcu"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="ameliyat-sonrasi" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ayak Bileği Kırığı Ameliyatı Sonrası Yürüme</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ciddi ve karmaşık ayak bileği kırıklarında cerrahi müdahale kaçınılmaz hale gelebilmektedir. Özellikle kemik uçlarının yer değiştirdiği, parçalı kırıkların oluştuğu ya da yumuşak dokuların zarar gördüğü durumlarda ameliyat tercih edilmektedir. Cerrahi işlem sırasında, kırık kemiklerin doğru hizalanabilmesi için plak, vida, çivi veya tel gibi çeşitli ortopedik materyaller kullanılmaktadır.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ameliyat sonrasında iyileşme süreci aşamalı ve dikkatli bir plan dahilinde yürütülmektedir. İlk birkaç hafta boyunca hastanın ayağına kesinlikle yük vermemesi istenmektedir. Genellikle 6. haftadan itibaren doktorun onayıyla hafif yük verme ve yürüyüş egzersizleri başlatılmaktadır. Tam yük verme sürecine geçiş ise çoğu hastada 10 ila 12. haftalarda mümkün hale gelir.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="fizik-tedavi" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ayak Bileği Kırığı Sonrası Fizik Tedavi ve Egzersizler</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Fizik tedavi, ayak bileği kırığı sonrası iyileşme sürecinin en kritik ve vazgeçilmez aşamalarından biridir. Çünkü uzun süren hareketsizlik döneminde kaslar zayıflar, bağ dokular esnekliğini kaybeder ve eklemlerde sertlik oluşur. Ayrıca denge ve koordinasyon refleksleri de zamanla bozulmaktadır.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Fizik tedavi programında birçok farklı egzersiz ve uygulama yer alır:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li className="text-gray-700">Denge egzersizleri - Ayak bileği üzerinde yeniden kontrol sağlar</li>
                  <li className="text-gray-700">Kas güçlendirme hareketleri - Alt bacak ve ayak bileği çevresindeki kas gruplarını hedef alır</li>
                  <li className="text-gray-700">Eklem hareket açıklığını artıran esneme ve mobilizasyon çalışmaları</li>
                  <li className="text-gray-700">Soğuk ve sıcak uygulamalar - Ağrı ve şişliği azaltır</li>
                  <li className="text-gray-700">Yürüme eğitimi - Doğru basma tekniklerini öğretir</li>
                </ul>
                <div className="my-8">
                  <img
                    src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/x-ray-of-a-foot-fracture-close-up-on-a-consultatio-2025-04-02-22-42-29-utc.webp"
                    alt="Ayak Röntgeni - Kırık Değerlendirmesi"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="komplikasyonlar" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ayak Bileği Kırığı Sonrası Karşılaşılan Komplikasyonlar</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Bazı komplikasyonlar görülebilmektedir. Bu nedenle doktor kontrolü aksatılmamalıdır:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li className="text-gray-700">Eklem sertliği</li>
                  <li className="text-gray-700">Kas zayıflığı</li>
                  <li className="text-gray-700">Denge kaybı</li>
                  <li className="text-gray-700">Kireçlenme (artroz)</li>
                  <li className="text-gray-700">Enfeksiyon (cerrahi sonrası)</li>
                  <li className="text-gray-700">Kan pıhtılaşması (derin ven trombozu)</li>
                </ul>
                <div className="my-8">
                  <img
                    src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/female-doctor-in-a-blue-medical-gown-checking-brok-2025-03-13-05-41-14-utc.webp"
                    alt="Doktor Muayenesi - Ayak Bileği Kontrolü"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </section>

            {/* Section 7 - FAQ */}
            <section id="sss" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Sıkça Sorulan Sorular</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Ayak bileği kırığı sonrası yürümek ne kadar sürer?</h3>
                  <p className="text-gray-700">Kırığın şiddetine bağlı olarak 6 haftadan 6 aya kadar değişir. Doktor kontrolü önemlidir.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Alçıdan çıktıktan sonra hemen yürüyebilir miyim?</h3>
                  <p className="text-gray-700">Hayır. Kas zayıflığı ve eklem sertliği nedeniyle fizyoterapist eşliğinde yürüyüşe başlanmalıdır.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Ameliyat sonrası ağrı ne kadar sürer?</h3>
                  <p className="text-gray-700">İlk haftalarda ağrı olur. İyileşme ilerledikçe ağrılar azalır.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Tam yükle yürüyüş ne zaman başlar?</h3>
                  <p className="text-gray-700">Ortalama 10-12 haftada tam yükle yürüyüş mümkündür. Ancak bireysel farklılıklar olabilmektedir.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Ayak bileği kırığı sonrası fizik tedavi şart mıdır?</h3>
                  <p className="text-gray-700">Evet. Fizik tedavi, normal yürüyüşe dönmek için temel bir süreçtir.</p>
                </div>
              </div>
            </section>

            {/* References Section */}
            <section className="mb-12 bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Kaynaklar</h2>
              <ol className="list-decimal pl-6 space-y-3 text-sm text-gray-700">
                <li>
                  Michelson JD, et al. "Ankle Fractures Resulting from Rotational Injuries" Journal of the American Academy of Orthopaedic Surgeons. 2001. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=ankle+fracture+rotational+injuries" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  SooHoo NF, et al. "Evaluation of the Validity of the AOFAS Clinical Rating Systems" Foot & Ankle International. 2003. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=AOFAS+clinical+rating+ankle" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  Lin CW, et al. "Rehabilitation for ankle fractures in adults" Cochrane Database of Systematic Reviews. 2012. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=rehabilitation+ankle+fractures+adults" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  Moseley AM, et al. "Progressive resistance training after ankle fracture" Clinical Rehabilitation. 2008. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=progressive+resistance+training+ankle+fracture" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  Handoll HH, et al. "Interventions for treating ankle fractures in adults" Cochrane Database of Systematic Reviews. 2012. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=interventions+treating+ankle+fractures" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
                </li>
                
              </ol>
              
              <details className="mt-4">
                <summary className="text-[#01CAB8] hover:text-[#01867A] font-semibold cursor-pointer flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  5 Referans Daha Göster
                </summary>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 mt-4" start={6}>
                  <li>
                    Stufkens SA, et al. "Long-term outcome after 1822 operatively treated ankle fractures" Injury. 2011. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=long+term+outcome+operatively+treated+ankle+fractures" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
                  </li>
                  <li>
                    Petrisor BA, et al. "Management of displaced ankle fractures" Journal of Orthopaedic Trauma. 2006. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=management+displaced+ankle+fractures" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
                  </li>
                  <li>
                    Egol KA, et al. "Functional outcome of surgery for displaced ankle fractures" Journal of Bone and Joint Surgery. 2000. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=functional+outcome+surgery+ankle+fractures" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
                  </li>
                  <li>
                    van der Sluis CK, et al. "Long-term physical, psychological and social consequences of ankle fracture" Injury. 2011. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=long+term+consequences+ankle+fracture" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
                  </li>
                  <li>
                    Shah NH, et al. "Complications of ankle fracture fixation" Foot and Ankle Clinics. 2017. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=complications+ankle+fracture+fixation" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
                  </li>
                </ol>
              </details>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sonuç</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ayak bileği kırığı sonrası yürüme süreci sabır gerektirir. Düzenli takip ve doğru tedavi protokolleriyle süreç başarıyla tamamlanabilmektedir. Bu süreçte hem alçı hem de cerrahi müdahale sonrasında yapılan kontroller ve uygulanan fizik tedavi programları iyileşmenin temelini oluşturur.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Her hastanın iyileşme süreci, kırığın tipi, kişinin yaşı, genel sağlık durumu ve tedaviye verdiği yanıta göre değişkenlik gösterir. Ayak bileği kırığı sonrası yürüme sürecinde atılan her doğru adım, hem kısa vadeli hem de uzun vadeli yaşam kalitesini doğrudan etkiler.
                </p>
              </div>
            </section>

            {/* Internal Link */}
            <div className="bg-[#E6FAF8] border-l-4 border-[#01CAB8] p-6 mb-8 rounded-r-lg">
              <p className="text-gray-700 mb-2">
                <strong>İlgili İçerik:</strong> Ameliyatsız tedavi seçenekleri hakkında daha fazla bilgi için{' '}
                <Link href="/ameliyatsiz-cozumler" className="text-[#01CAB8] hover:text-[#01867A] font-semibold hover:underline">
                  ameliyatsız çözümler sayfamızı
                </Link>{' '}
                ziyaret edebilirsiniz.
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-[#01CAB8] to-[#01867A] rounded-lg p-8 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Uzman Desteği İçin Bizimle İletişime Geçin</h2>
              <p className="text-xl mb-6 text-blue-100">
                Ayak bileği kırığı sonrası iyileşme sürecinde profesyonel destek ve danışmanlık için bize ulaşın.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="tel:+905525627769"
                  className="inline-flex items-center px-8 py-4 bg-white text-[#01CAB8] font-bold rounded-lg hover:bg-[#E6FAF8] transition-colors"
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
