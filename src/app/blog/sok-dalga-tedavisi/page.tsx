
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Şok Dalga Tedavisi: Ağrının Modern Çözümü | Dr. Özgür Oktay Nar',
  description: 'Şok dalga tedavisi (ESWT) nedir, nasıl uygulanır, hangi rahatsızlıklarda etkilidir, avantajları ve hasta deneyimleri hakkında detaylı bilgi.',
  keywords: 'şok dalga tedavisi, ESWT, topuk dikeni tedavisi, tenisçi dirseği, omuz kireçlenmesi, kronik ağrı tedavisi, cerrahi olmayan tedavi',
  authors: [{ name: 'Dr. Özgür Oktay Nar' }],
  openGraph: {
    title: 'Şok Dalga Tedavisi: Ağrının Modern Çözümü',
    description: 'Şok dalga tedavisi (ESWT) nedir, nasıl uygulanır, hangi rahatsızlıklarda etkilidir, avantajları ve hasta deneyimleri hakkında detaylı bilgi.',
    type: 'article',
    locale: 'tr_TR',
    url: 'https://www.drozguroktaynar.com/blog/sok-dalga-tedavisi',
    siteName: 'Dr. Özgür Oktay Nar',
    images: [
      {
        url: 'https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/employing-therapeutic-device-in-professional-setti-2025-03-18-07-40-13-utc-1-1.webp',
        width: 800,
        height: 450,
        alt: 'Şok Dalga Tedavisi Cihazı',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Şok Dalga Tedavisi: Ağrının Modern Çözümü',
    description: 'Şok dalga tedavisi (ESWT) nedir, nasıl uygulanır, avantajları ve hasta deneyimleri.',
    images: ['https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/employing-therapeutic-device-in-professional-setti-2025-03-18-07-40-13-utc-1-1.webp'],
  },
  alternates: {
    canonical: 'https://www.drozguroktaynar.com/blog/sok-dalga-tedavisi',
  },
};

export default function SokDalgaTedaviPage() {

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': 'https://www.drozguroktaynar.com/blog/sok-dalga-tedavisi#webpage',
        url: 'https://www.drozguroktaynar.com/blog/sok-dalga-tedavisi',
        name: 'Şok Dalga Tedavisi: Ağrının Modern Çözümü',
        description: 'Şok dalga tedavisi (ESWT) nedir, nasıl uygulanır, hangi rahatsızlıklarda etkilidir, avantajları ve hasta deneyimleri hakkında detaylı bilgi.',
        datePublished: '2025-06-10T07:26:22+00:00',
        dateModified: '2025-06-10T07:26:34+00:00',
        inLanguage: 'tr-TR',
        about: {
          '@type': 'MedicalTherapy',
          name: 'Şok Dalga Tedavisi (ESWT)',
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
        '@id': 'https://www.drozguroktaynar.com/blog/sok-dalga-tedavisi#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Şok dalga tedavisi ne kadar sürede etkisini gösterir?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Genellikle 2. veya 3. seanstan sonra ağrılarda belirgin bir azalma hissedilmektedir. Ancak bu süre kişisel faktörlere, rahatsızlığın süresine ve uygulama bölgesine göre değişkenlik gösterebilmektedir.',
            },
          },
          {
            '@type': 'Question',
            name: 'Her ağrılı durumda şok dalga tedavisi uygulanabilir mi?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Hayır, her ağrıya uygun bir yöntem değildir. Özellikle enfeksiyona bağlı ağrılar farklı bir yaklaşım gerektirir. Bazı dolaşım bozuklukları ya da ileri seviyedeki yapısal bozukluklarda ise farklı tedavi yöntemleri uygulanmalıdır.',
            },
          },
          {
            '@type': 'Question',
            name: 'Şok dalga tedavisi kimler için uygun değildir?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Hamileler, kanama bozukluğu olanlar, aktif kanser hastaları ve kalp pili taşıyan bireylerde bu tedavi önerilmemektedir. Mutlaka uzman değerlendirmesi gereklidir.',
            },
          },
          {
            '@type': 'Question',
            name: 'Tedavi sırasında ağrı hissedilir mi?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Uygulama sırasında hafif düzeyde rahatsızlık hissedilebilmektedir. Ancak bu genellikle kısa sürelidir ve çoğu hasta tarafından tolere edilebilir düzeydedir.',
            },
          },
          {
            '@type': 'Question',
            name: 'Tedavi sonrası istirahat gerekir mi?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Hayır, genellikle tedavi sonrasında istirahat gerekmez. Hastalar aynı gün içinde işlerine veya spor faaliyetlerine devam ederler.',
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
      <section className="relative py-16 overflow-hidden bg-gradient-to-br from-teal-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Şok Dalga Tedavisi: Ağrının Modern Çözümü
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Şok dalga tedavisi, cerrahi olmayan, modern ve etkili bir yöntemdir. Topuk dikeni, tenisçi dirseği, omuz kireçlenmeleri gibi kronik ağrılarda hızlı sonuç verir. Günlük yaşamınızı kesintiye uğratmadan tedavi olun.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="tel:+905525627769"
                className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
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
            <div className="bg-teal-50 border-l-4 border-teal-600 p-6 mb-8 rounded-r-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">İçindekiler</h2>
              <ul className="space-y-2">
                <li><a href="#nedir" className="text-teal-600 hover:text-teal-800 hover:underline">Şok Dalga Tedavisi Nedir?</a></li>
                <li><a href="#nasil-uygulanir" className="text-teal-600 hover:text-teal-800 hover:underline">ESWT Yöntemi Nasıl Uygulanır?</a></li>
                <li><a href="#hangi-rahatsizliklar" className="text-teal-600 hover:text-teal-800 hover:underline">Hangi Rahatsızlıklarda Etkilidir?</a></li>
                <li><a href="#hasta-yorumlari" className="text-teal-600 hover:text-teal-800 hover:underline">Şok Dalga Tedavisi Yaptıranların Yorumları</a></li>
                <li><a href="#fiyatlar" className="text-teal-600 hover:text-teal-800 hover:underline">Şok Dalga Tedavisi Fiyatları</a></li>
                <li><a href="#avantajlar" className="text-teal-600 hover:text-teal-800 hover:underline">Avantajları ve Dezavantajları</a></li>
                <li><a href="#sss" className="text-teal-600 hover:text-teal-800 hover:underline">Sıkça Sorulan Sorular</a></li>
              </ul>
            </div>

            {/* Section 1 */}
            <section id="nedir" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Şok Dalga Tedavisi Nedir?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Şok dalga tedavisi</strong>, vücudun belirli bölgelerinde doku onarımını ve iyileşmeyi teşvik etmek amacıyla yüksek enerjili ses dalgalarının kullanıldığı, modern ve etkili bir yöntemdir. Tıbbi literatürde <strong>ESWT (Extracorporeal Shock Wave Therapy)</strong> olarak da adlandırılan bu tedavi şekli, özellikle kas-iskelet sistemi kaynaklı ağrıların giderilmesinde yaygın olarak tercih edilmektedir.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Bu yöntemde, vücut dışından uygulanan akustik dalgalar sayesinde hedef dokularda kan akışı artırılır. Aynı zamanda hücre yenilenmesi ve metabolik aktivite desteklenir. Böylece, ağrının temel nedenine yönelik doğal bir iyileşme süreci başlatılmış olur.
                </p>
                <div className="my-8">
                  <img
                    src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/employing-therapeutic-device-in-professional-setti-2025-03-18-07-40-13-utc-1-1.webp"
                    alt="Şok Dalga Tedavisi Cihazı"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section id="nasil-uygulanir" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">ESWT Yöntemi Nasıl Uygulanır?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  ESWT yani şok dalga tedavisi, özel olarak geliştirilmiş bir cihaz aracılığıyla uygulanır. Bu cihazın başlığı, yüksek frekanslı ses dalgalarını doğrudan hedef dokunun üzerine iletir. Böylece, sorunlu bölgede biyolojik onarım süreçleri harekete geçirilmiş olur.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Uygulama genellikle 10 ila 20 dakika arasında sürer. Tedavi, haftada 1 ya da 2 kez planlanmaktadır. Seans sayısı ise hastanın ihtiyacına göre değişmekle birlikte genellikle 3 ila 5 seans arasında tamamlanır.
                </p>
                <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-lg mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Uygulama Süreci:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li className="text-gray-700">Seanslar 10-20 dakika sürer</li>
                    <li className="text-gray-700">Haftada 1-2 kez uygulanır</li>
                    <li className="text-gray-700">Genellikle 3-5 seans yeterlidir</li>
                    <li className="text-gray-700">Anestezi gerektirmez</li>
                    <li className="text-gray-700">Tedavi sonrası istirahat gerekmez</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="hangi-rahatsizliklar" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Hangi Rahatsızlıklarda Etkilidir?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Şok dalga tedavisi, kas-iskelet sistemi kaynaklı birçok rahatsızlıkta etkili sonuçlar veren, cerrahi olmayan bir uygulama olarak öne çıkar. Bu yöntem, özellikle kronikleşmiş ve geleneksel tedavi yöntemlerine yeterince yanıt vermeyen durumlarda tercih edilmektedir.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Topuk Dikeni (Plantar Fasiit)</h4>
                    <p className="text-gray-700 text-sm">Ayak tabanında hissedilen batıcı ağrıların giderilmesinde oldukça başarılıdır.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Tenisçi Dirseği</h4>
                    <p className="text-gray-700 text-sm">Dirsek dış kısmında gelişen ağrıyı azaltır ve tendon iyileşmesini hızlandırır.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Aşil Tendiniti</h4>
                    <p className="text-gray-700 text-sm">Aşil tendonunda oluşan inflamasyon ve gerginliği azaltmaya yardımcı olur.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Omuz Kireçlenmesi</h4>
                    <p className="text-gray-700 text-sm">Omuz bölgesinde hareket kısıtlılığına ve ağrıya yol açan kalsifik yapıları hedef alır.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Kas Yırtıkları</h4>
                    <p className="text-gray-700 text-sm">Hasarlı dokunun daha hızlı toparlanmasına destek sağlar.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Spor Sakatlanmaları</h4>
                    <p className="text-gray-700 text-sm">Profesyonel ve amatör sporcuların sıkça yaşadığı yaralanmalarda iyileşmeyi hızlandırır.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="hasta-yorumlari" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Şok Dalga Tedavisi Yaptıranların Yorumları</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Şok dalga tedavisi uygulanan hastaların büyük çoğunluğu, ilk birkaç seanstan itibaren ağrılarında belirgin bir azalma hissettiklerini dile getirmektedir. Özellikle uzun süredir geçmeyen kas ve tendon kaynaklı şikâyetlerde bu yöntemin etkisinin kısa sürede hissedilmesi, hastalar açısından önemli bir avantaj olarak öne çıkar.
                </p>
                <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-lg mb-6 border-l-4 border-teal-600">
                  <p className="text-gray-800 italic mb-2">
                    "Topuk dikeni nedeniyle ayakta durmakta bile zorlanıyordum. Şok dalga tedavisi sayesinde sadece dört seansta büyük ölçüde rahatladım. Artık ameliyat düşünmeme gerek kalmadı ve normal yaşamıma dönebildim."
                  </p>
                  <p className="text-gray-600 text-sm">— Hasta deneyimi</p>
                </div>
                <div className="my-8">
                  <img
                    src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/cropped-hand-doctor-examining-patient-hospital.webp"
                    alt="Doktor Hasta Muayenesi"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="fiyatlar" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Şok Dalga Tedavisi Fiyatları</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Maliyeti, birçok değişkene bağlı olarak hastadan hastaya farklılık gösterebilir. Uygulama yapılacak vücut bölgesi, tedavi süresi ve seans sayısı fiyatlandırmayı etkiler. Ayrıca, kullanılan cihazın teknolojik düzeyi de bu süreçte belirleyici rol oynar.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Bu tedavi yöntemi, her bireyin ihtiyaçlarına özel olarak planlandığı için sabit bir ücretlendirme sunmak mümkün değildir. Bu nedenle, şok dalga tedavisi düşünen bireylerin öncelikle uzman bir sağlık profesyoneline başvurmaları önerilir.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section id="avantajlar" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Avantajları ve Dezavantajları</h2>
              <div className="prose prose-lg max-w-none">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-green-700 mb-3">Avantajları</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Cerrahi işlem gerektirmez</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Kısa iyileşme süresi</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Yan etkiler minimal ve geçici</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Bilimsel olarak kanıtlanmış etkinlik</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Hastanede yatış gerektirmez</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-amber-700 mb-3">Dezavantajları</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-amber-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Etkisi kişiden kişiye değişebilir</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-amber-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Uygulama sonrası hafif rahatsızlık olabilir</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-amber-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Bazı durumlarda ek seanslara ihtiyaç duyulabilir</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="my-8">
                  <img
                    src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/patient-getting-non-surgical-treatment-with-shock-2025-03-17-12-58-15-utc.webp"
                    alt="Şok Dalga Tedavisi Uygulama"
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Şok dalga tedavisi ne kadar sürede etkisini gösterir?</h3>
                  <p className="text-gray-700">Genellikle 2. veya 3. seanstan sonra ağrılarda belirgin bir azalma hissedilmektedir. Ancak bu süre kişisel faktörlere, rahatsızlığın süresine ve uygulama bölgesine göre değişkenlik gösterebilmektedir.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Her ağrılı durumda şok dalga tedavisi uygulanabilir mi?</h3>
                  <p className="text-gray-700">Hayır, her ağrıya uygun bir yöntem değildir. Özellikle enfeksiyona bağlı ağrılar farklı bir yaklaşım gerektirir. Bazı dolaşım bozuklukları ya da ileri seviyedeki yapısal bozukluklarda ise farklı tedavi yöntemleri uygulanmalıdır.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Şok dalga tedavisi kimler için uygun değildir?</h3>
                  <p className="text-gray-700">Hamileler, kanama bozukluğu olanlar, aktif kanser hastaları ve kalp pili taşıyan bireylerde bu tedavi önerilmemektedir. Mutlaka uzman değerlendirmesi gereklidir.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Tedavi sırasında ağrı hissedilir mi?</h3>
                  <p className="text-gray-700">Uygulama sırasında hafif düzeyde rahatsızlık hissedilebilmektedir. Ancak bu genellikle kısa sürelidir ve çoğu hasta tarafından tolere edilebilir düzeydedir.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Tedavi sonrası istirahat gerekir mi?</h3>
                  <p className="text-gray-700">Hayır, genellikle tedavi sonrasında istirahat gerekmez. Hastalar aynı gün içinde işlerine veya spor faaliyetlerine devam ederler.</p>
                </div>
              </div>
            </section>

            {/* References Section */}
            <section className="mb-12 bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Kaynaklar</h2>
              <ol className="list-decimal pl-6 space-y-3 text-sm text-gray-700">
                <li>
                  Ogden JA, et al. "Principles of shock wave therapy" Clinical Orthopaedics and Related Research. 2001. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=principles+shock+wave+therapy" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  Wang CJ, et al. "Extracorporeal shockwave therapy in treatment of delayed bone-tendon healing" American Journal of Sports Medicine. 2008. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=extracorporeal+shockwave+therapy+bone+tendon" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  Rompe JD, et al. "Shock wave therapy for chronic plantar fasciopathy" British Medical Journal. 2003. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=shock+wave+therapy+plantar+fasciopathy" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  Speed CA, et al. "Extracorporeal shock wave therapy for tendinitis of the rotator cuff" Journal of Bone and Joint Surgery. 2002. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=ESWT+rotator+cuff+tendinitis" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  Gerdesmeyer L, et al. "Radial extracorporeal shock wave therapy is safe and effective" American Journal of Sports Medicine. 2008. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=radial+ESWT+safe+effective" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">[PubMed Ara]</a>
                </li>
                
                <li>
                      Haake M, et al. "Extracorporeal shock wave therapy in the treatment of lateral epicondylitis" Journal of Bone and Joint Surgery. 2002. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=ESWT+lateral+epicondylitis" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">[PubMed Ara]</a>
                    </li>
                    <li>
                      Hsu RW, et al. "Effects of shockwave therapy on patellar tendinopathy in athletes" Knee Surgery Sports Traumatology Arthroscopy. 2008. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=shockwave+therapy+patellar+tendinopathy" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">[PubMed Ara]</a>
                    </li>
                    <li>
                      Notarnicola A, et al. "Extracorporeal shockwaves as regenerative therapy" Journal of Biological Regulators and Homeostatic Agents. 2012. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=ESWT+regenerative+therapy" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">[PubMed Ara]</a>
                    </li>
                    <li>
                      Moya D, et al. "The role of extracorporeal shockwave treatment" Clinical Orthopaedics and Related Research. 2018. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=role+ESWT+musculoskeletal" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">[PubMed Ara]</a>
                    </li>
                    <li>
                      Simplicio CL, et al. "Extracorporeal shock waves therapy mechanisms" Disability and Rehabilitation. 2008. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=ESWT+mechanisms+musculoskeletal" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">[PubMed Ara]</a>
                    </li>
              </ol>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sonuç</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Sonuç olarak, <strong>şok dalga tedavisi</strong> günümüz tıbbının sunduğu, cerrahiye alternatif olarak geliştirilen en etkili ve güvenli yöntemlerden biri olarak öne çıkmaktadır. Cerrahi müdahale istemeyen bireyler için oldukça uygun bir seçenektir.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tedavinin uygulama kolaylığı, kısa sürede sonuç vermesi ve yan etkilerinin minimum düzeyde olması, hastalar açısından konforlu bir süreç sunar. Klinik araştırmalarla desteklenen bu yöntemin başarı oranı, doğru planlama ve bireye özel yaklaşım sayesinde daha da yükselmektedir.
                </p>
              </div>
            </section>

            {/* Internal Link */}
            <div className="bg-teal-50 border-l-4 border-teal-600 p-6 mb-8 rounded-r-lg">
              <p className="text-gray-700 mb-2">
                <strong>İlgili İçerik:</strong> Ameliyatsız tedavi seçenekleri hakkında daha fazla bilgi için{' '}
                <Link href="/ameliyatsiz-cozumler" className="text-teal-600 hover:text-teal-800 font-semibold hover:underline">
                  ameliyatsız çözümler sayfamızı
                </Link>{' '}
                ziyaret edebilirsiniz.
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-teal-600 to-blue-700 rounded-lg p-8 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Şok Dalga Tedavisi Hakkında Bilgi Alın</h2>
              <p className="text-xl mb-6 text-teal-100">
                Kronik ağrılarınız için cerrahi olmayan çözüm: Şok dalga tedavisi. Detaylı bilgi ve randevu için bize ulaşın.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="tel:+905525627769"
                  className="inline-flex items-center px-8 py-4 bg-white text-teal-600 font-bold rounded-lg hover:bg-teal-50 transition-colors"
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
