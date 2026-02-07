import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Aşil Tendonu Yırtığı Nasıl Tedavi Edilir? | Op. Dr. Özgür Oktay Nar',
  description: 'Aşil tendonu yırtığı belirtileri, nedenleri ve tedavi yöntemleri. Ameliyatlı ve ameliyatsız tedavi seçenekleri hakkında detaylı bilgi.',
  keywords: 'aşil tendonu yırtığı, aşil tendonu tedavisi, aşil tendonu ameliyatı, tendon yırtığı, ayak bileği ağrısı, spor yaralanması',
  authors: [{ name: 'Op. Dr. Özgür Oktay Nar' }],
  openGraph: {
    title: 'Aşil Tendonu Yırtığı Nasıl Tedavi Edilir?',
    description: 'Aşil tendonu yırtığı belirtileri, nedenleri ve tedavi yöntemleri. Ameliyatlı ve ameliyatsız tedavi seçenekleri hakkında detaylı bilgi.',
    type: 'article',
    locale: 'tr_TR',
    url: 'https://www.ozguroktaynar.com/blog/asil-tendonu-yirtigi-nasil-tedavi-edilir',
    siteName: 'Op. Dr. Özgür Oktay Nar',
    images: [
      {
        url: 'https://placehold.co/1200x630/e2e8f0/475569?text=Asil+Tendonu+Yirtigi',
        width: 1200,
        height: 630,
        alt: 'Aşil Tendonu Yırtığı Tedavisi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aşil Tendonu Yırtığı Nasıl Tedavi Edilir?',
    description: 'Aşil tendonu yırtığı belirtileri, nedenleri ve tedavi yöntemleri. Ameliyatlı ve ameliyatsız tedavi seçenekleri hakkında detaylı bilgi.',
    images: ['https://placehold.co/1200x630/e2e8f0/475569?text=Asil+Tendonu+Yirtigi'],
  },
  alternates: {
    canonical: 'https://www.ozguroktaynar.com/blog/asil-tendonu-yirtigi-nasil-tedavi-edilir',
  },
};

export default function AsilTendonuYirtigiPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': 'https://www.ozguroktaynar.com/blog/asil-tendonu-yirtigi-nasil-tedavi-edilir#webpage',
        url: 'https://www.ozguroktaynar.com/blog/asil-tendonu-yirtigi-nasil-tedavi-edilir',
        name: 'Aşil Tendonu Yırtığı Nasıl Tedavi Edilir?',
        description: 'Aşil tendonu yırtığı belirtileri, nedenleri ve tedavi yöntemleri. Ameliyatlı ve ameliyatsız tedavi seçenekleri hakkında detaylı bilgi.',
        datePublished: '2025-02-07T05:30:00+03:00',
        dateModified: '2025-02-07T05:30:00+03:00',
        inLanguage: 'tr-TR',
        author: {
          '@type': 'Physician',
          name: 'Op. Dr. Özgür Oktay Nar',
          url: 'https://www.ozguroktaynar.com',
          specialty: 'Ortopedi ve Travmatoloji',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Op. Dr. Özgür Oktay Nar',
          url: 'https://www.ozguroktaynar.com',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">Aşil Tendonu Yırtığı Nasıl Tedavi Edilir?</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Aşil Tendonu Yırtığı Nasıl Tedavi Edilir?</h1>
          <div className="flex items-center text-gray-600 text-sm mb-6">
            <span>Op. Dr. Özgür Oktay Nar</span>
            <span className="mx-2">•</span>
            <time>7 Şubat 2025</time>
          </div>
          <img
            src="https://placehold.co/1200x630/e2e8f0/475569?text=Asil+Tendonu+Yirtigi"
            alt="Aşil Tendonu Yırtığı Tedavisi"
            className="w-full rounded-xl shadow-lg"
          />
        </header>

        {/* Main Content - 7 STEP ARCHITECTURE */}
        <div className="prose prose-lg max-w-none">
          
          {/* Section 1: Giriş */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Giriş</h2>
            <p className="text-gray-700 leading-relaxed">
              Aşil tendonu, baldır kaslarını topuk kemiğine bağlayan ve vücuttaki en güçlü tendonlardan biridir. 
              Günlük aktivitelerimizde yürüme, koşma ve zıplama gibi hareketlerde kritik rol oynar. 
              Ancak aşırı kullanım, ani hareketler veya yaşlanma nedeniyle yırtılma riski taşır. 
              Aşil tendonu yırtığı, özellikle 30-40 yaş arası aktif bireylerde ve sporcular arasında sık görülen ciddi bir yaralanmadır.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Bu yazıda, aşil tendonu yırtığının belirtilerini, nedenlerini ve güncel tedavi yöntemlerini detaylı olarak inceleyeceğiz.
            </p>
          </section>

          {/* Section 2: Nedir / Tanım */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Aşil Tendonu Yırtığı Nedir?</h2>
            <p className="text-gray-700 leading-relaxed">
              Aşil tendonu yırtığı, tendon liflerinin kısmi veya tamamen kopması durumudur. 
              Genellikle tendonun en zayıf olduğu noktada, topuk kemiğinden yaklaşık 2-6 cm yukarıda meydana gelir.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>İki ana tip vardır:</strong>
            </p>
            <ul className="space-y-2 mt-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Tam yırtık (rüptür):</strong> Tendon tamamen kopar, ayak bileği fonksiyonunu büyük ölçüde kaybeder</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Kısmi yırtık:</strong> Tendon liflerinin bir kısmı kopar, kısmi fonksiyon devam eder</span>
              </li>
            </ul>
          </section>

          {/* Section 3: Belirtiler */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Belirtiler</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Aşil tendonu yırtığının karakteristik belirtileri vardır ve genellikle ani bir olayla ortaya çıkar:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Ani "çat" veya "patlama" sesi:</strong> Yaralanma anında duyulur</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Keskin, şiddetli ağrı:</strong> Ayak bileği arkasında hissedilir</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Şişlik ve morarma:</strong> Yaralanma bölgesinde hızla gelişir</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Parmak ucunda yürüyememe:</strong> Baldır kasının gücü kaybolur</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Tendon bölgesinde çökme hissi:</strong> Elle muayenede boşluk fark edilebilir</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Ayak bileğinde güçsüzlük:</strong> Normal yürüme ve merdiven inme zorlaşır</span>
              </li>
            </ul>
          </section>

          {/* Section 4: Tedavi Yöntemleri */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tedavi Yöntemleri</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Konservatif (Ameliyatsız) Tedavi</h3>
            <p className="text-gray-700 leading-relaxed">
              Kısmi yırtıklarda, yaşlı hastalarda veya ameliyat riski yüksek durumlarda tercih edilir:
            </p>
            <ul className="space-y-2 mt-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Alçılama veya bot:</strong> 6-8 hafta ayak parmak ucunda durur pozisyonda tutulur</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Fizik tedavi:</strong> Kas gücü ve esnekliği geri kazanma programı</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Aşamalı yük verme:</strong> Kontrollü olarak ağırlık artırımı</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Dezavantajlar:</strong> Yeniden yırtılma riski %10-40 arasındadır ve iyileşme ameliyata göre daha uzun sürebilir.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-8">Cerrahi Tedavi</h3>
            <p className="text-gray-700 leading-relaxed">
              Tam yırtıklarda, genç ve aktif hastalarda cerrahi genellikle altın standarttır:
            </p>
            <ul className="space-y-2 mt-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Açık onarım:</strong> Tendon uçları dikişlerle birleştirilir, güçlü iyileşme sağlar</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Perkütan (kapalı) onarım:</strong> Küçük kesilerle minimal invaziv yaklaşım</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Tendon transferi:</strong> Kronik veya ihmal edilmiş yırtıklarda diğer tendonlar kullanılır</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Avantajlar:</strong> Yeniden yırtılma riski %5'in altındadır ve daha hızlı fonksiyonel iyileşme sağlar.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-8">Rehabilitasyon</h3>
            <p className="text-gray-700 leading-relaxed">
              Ameliyat sonrası fizik tedavi programı 4-6 ay sürer ve şunları içerir:
            </p>
            <ul className="space-y-2 mt-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Erken dönem: Pasif hareket ve şişlik kontrolü</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Orta dönem: Aktif hareket ve kuvvetlendirme egzersizleri</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>İleri dönem: Spora dönüş programı, pliometrik egzersizler</span>
              </li>
            </ul>
          </section>

          {/* Section 5: Sıkça Sorulan Sorular */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Aşil tendonu yırtığı ameliyatsız iyileşir mi?</h3>
                <p className="text-gray-700">
                  Kısmi yırtıklarda ameliyatsız tedavi mümkündür, ancak tam yırtıklarda cerrahi genellikle önerilir. 
                  Ameliyatsız tedavide yeniden yırtılma riski daha yüksektir (%10-40) ve iyileşme süreci daha uzundur.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ameliyat sonrası ne zaman yürüyebilirim?</h3>
                <p className="text-gray-700">
                  Modern cerrahi tekniklerde erken mobilizasyon önerilir. Koruyucu bot ile 2-3 hafta içinde 
                  kısmi yük vererek yürümeye başlanabilir. Tam yük verme genellikle 6-8 haftada mümkündür.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Spora ne zaman dönebilirim?</h3>
                <p className="text-gray-700">
                  Tam iyileşme 4-6 ay sürer. Hafif sporlar 3-4 ayda başlanabilir, ancak yüksek tempolu sporlar 
                  (basketbol, futbol, tenis) için 6-9 ay beklemek gerekir. Fizik tedaviyi tamamlamak kritik öneme sahiptir.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Aşil tendonu yırtığını nasıl önleyebilirim?</h3>
                <p className="text-gray-700">
                  Düzenli ısınma ve esnetme, aşırı yükten kaçınma, uygun ayakkabı kullanımı, 
                  baldır kaslarını kuvvetlendirme egzersizleri ve tendon ağrısını erken tedavi etmek önemlidir.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Kaynaklar */}
          <section className="mb-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kaynaklar</h2>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-700">
              <li>
                Maffulli N, et al. "Achilles tendon ruptures: current treatment options." World Journal of Orthopedics. 2020.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=achilles+tendon+rupture+treatment" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Willits K, et al. "Operative versus nonoperative treatment of acute Achilles tendon ruptures: a multicenter randomized trial." Journal of Bone and Joint Surgery. 2010.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=achilles+tendon+operative+nonoperative" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Soroceanu A, et al. "Surgical versus nonsurgical treatment of acute Achilles tendon rupture: a meta-analysis." Journal of Bone and Joint Surgery. 2012.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=achilles+rupture+meta+analysis" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
            </ol>
          </section>

          {/* Section 7: Internal Link - ZORUNLU! */}
          <section className="mb-12">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-gray-700">
                <strong>İlgili İçerik:</strong> Ameliyatsız tedavi seçenekleri hakkında daha fazla bilgi için{' '}
                <Link 
                  href="/ameliyatsiz-cozumler" 
                  className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
                >
                  ameliyatsız çözümler sayfamızı
                </Link>{' '}
                ziyaret edebilirsiniz.
              </p>
            </div>
          </section>

          {/* Sonuç */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sonuç</h2>
            <p className="text-gray-700 leading-relaxed">
              Aşil tendonu yırtığı ciddi bir yaralanmadır ancak doğru tedavi ile tam iyileşme mümkündür. 
              Tedavi seçimi hastanın yaşına, aktivite seviyesine, yırtık tipine ve genel sağlık durumuna göre kişiselleştirilmelidir. 
              Erken tanı ve uygun tedavi, yeniden yırtılma riskini azaltır ve daha iyi fonksiyonel sonuçlar sağlar.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Aşil tendonu bölgesinde ani ağrı, şişlik veya fonksiyon kaybı yaşıyorsanız, 
              derhal bir ortopedi uzmanına başvurmanız önemlidir. Uzman değerlendirme ve kişiselleştirilmiş tedavi planı, 
              en iyi sonuçları elde etmenin anahtarıdır.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-center text-white mt-12">
          <h2 className="text-2xl font-bold mb-4">Randevu Almak İster misiniz?</h2>
          <p className="mb-6">Uzman değerlendirmesi için hemen iletişime geçin.</p>
          <Link 
            href="/iletisim" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Randevu Al
          </Link>
        </div>
      </article>
    </>
  );
}
