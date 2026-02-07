import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Diz Kapağı Çıkığı Belirtileri ve Tedavisi | Op. Dr. Özgür Oktay Nar',
  description: 'Patellar çıkık (diz kapağı çıkığı) belirtileri, nedenleri ve tedavi seçenekleri. Acil müdahale ve uzun vadeli çözümler hakkında uzman rehberi.',
  keywords: 'diz kapağı çıkığı, patellar çıkık, patella dislokasyonu, diz yaralanması, spor yaralanması, diz tedavisi',
  authors: [{ name: 'Op. Dr. Özgür Oktay Nar' }],
  openGraph: {
    title: 'Diz Kapağı Çıkığı Belirtileri ve Tedavisi',
    description: 'Patellar çıkık (diz kapağı çıkığı) belirtileri, nedenleri ve tedavi seçenekleri.',
    type: 'article',
    locale: 'tr_TR',
    url: 'https://www.ozguroktaynar.com/blog/diz-kapagi-cikigi-belirtileri-ve-tedavisi',
    siteName: 'Op. Dr. Özgür Oktay Nar',
    images: [
      {
        url: 'https://placehold.co/1200x630/e2e8f0/475569?text=Diz+Kapagi+Cikigi',
        width: 1200,
        height: 630,
        alt: 'Diz Kapağı Çıkığı Tedavisi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diz Kapağı Çıkığı Belirtileri ve Tedavisi',
    description: 'Patellar çıkık (diz kapağı çıkığı) belirtileri, nedenleri ve tedavi seçenekleri.',
    images: ['https://placehold.co/1200x630/e2e8f0/475569?text=Diz+Kapagi+Cikigi'],
  },
  alternates: {
    canonical: 'https://www.ozguroktaynar.com/blog/diz-kapagi-cikigi-belirtileri-ve-tedavisi',
  },
};

export default function DizKapagiCikigiPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': 'https://www.ozguroktaynar.com/blog/diz-kapagi-cikigi-belirtileri-ve-tedavisi#webpage',
        url: 'https://www.ozguroktaynar.com/blog/diz-kapagi-cikigi-belirtileri-ve-tedavisi',
        name: 'Diz Kapağı Çıkığı Belirtileri ve Tedavisi',
        description: 'Patellar çıkık (diz kapağı çıkığı) belirtileri, nedenleri ve tedavi seçenekleri.',
        datePublished: '2025-02-07T05:45:00+03:00',
        dateModified: '2025-02-07T05:45:00+03:00',
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
          <span className="text-gray-700">Diz Kapağı Çıkığı Belirtileri ve Tedavisi</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Diz Kapağı Çıkığı Belirtileri ve Tedavisi</h1>
          <div className="flex items-center text-gray-600 text-sm mb-6">
            <span>Op. Dr. Özgür Oktay Nar</span>
            <span className="mx-2">•</span>
            <time>7 Şubat 2025</time>
          </div>
          <img
            src="https://placehold.co/1200x630/e2e8f0/475569?text=Diz+Kapagi+Cikigi"
            alt="Diz Kapağı Çıkığı Tedavisi"
            className="w-full rounded-xl shadow-lg"
          />
        </header>

        {/* Main Content - 7 STEP ARCHITECTURE */}
        <div className="prose prose-lg max-w-none">
          
          {/* Section 1: Giriş */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Giriş</h2>
            <p className="text-gray-700 leading-relaxed">
              Diz kapağı çıkığı (patellar dislokasyon), özellikle genç ve aktif bireylerde sık görülen acil bir durumdur. 
              Patella (diz kapağı), uyluk kemiğinin önündeki oluğunda kayarak hareket eder. 
              Ani dönüş, darbe veya anatomik faktörler nedeniyle patella bu oluktan çıkarak yerinden kayabilir.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Bu yaralanma çok ağrılıdır ve dizi hareket ettiremez duruma getirir. 
              Doğru tanı ve tedavi, kalıcı hasarı önlemek ve tekrarlayan çıkık riskini azaltmak için kritik öneme sahiptir.
            </p>
          </section>

          {/* Section 2: Nedir / Tanım */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Diz Kapağı Çıkığı Nedir?</h2>
            <p className="text-gray-700 leading-relaxed">
              Patellar dislokasyon, diz kapağının (patella) femur kemiğindeki oluğundan kayarak 
              genellikle dış tarafa (lateral) çıkmasıdır. Nadir durumlarda iç tarafa (medial) çıkık görülebilir.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Diz kapağı çıkığı tipleri:</strong>
            </p>
            <ul className="space-y-2 mt-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Tam dislokasyon:</strong> Patella tamamen oluktan çıkar, genellikle spontan veya manuel olarak yerine gelir</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Subluksasyon:</strong> Kısmi kayma, patella oluktan çıkar gibi olur ama tam çıkmaz</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Kronik instabilite:</strong> Tekrarlayan çıkık veya çıkık hissi, yapısal problemlerden kaynaklanır</span>
              </li>
            </ul>
          </section>

          {/* Section 3: Belirtiler */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Belirtiler</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Diz kapağı çıkığının karakteristik belirtileri ani ve belirgindir:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Ani, şiddetli ağrı:</strong> Genellikle diz ön kısmında lokalizedir</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Görünür deformasyon:</strong> Diz kapağı normalden daha dışta görülür</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Hareketsizlik:</strong> Dizi bükmek veya düzeltmek imkansız hale gelir</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Hızlı şişlik:</strong> Eklem içi kanama (hemartroz) nedeniyle diz hızla şişer</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>"Çıkma" hissi:</strong> Hastalar dizlerinin "kaydığını" veya "çıktığını" hisseder</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Hassasiyet:</strong> Diz kapağının iç kenarında belirgin hassasiyet</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Diz boşalması (giving way):</strong> Tekrarlayan subluksasyonlarda diz birdenbire güçsüzleşir</span>
              </li>
            </ul>
          </section>

          {/* Section 4: Tedavi Yöntemleri */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tedavi Yöntemleri</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">⚡ Acil Müdahale</h3>
            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg mb-4">
              <p className="text-gray-700">
                <strong>⚠️ DİKKAT:</strong> Diz kapağı çıkığı şüphesi durumunda kendiniz yerine oturtmaya çalışmayın! 
                Acil servise başvurun. Yanlış müdahale ek hasara yol açabilir.
              </p>
            </div>

            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Patellanın yerine yerleştirilmesi (redüksiyon):</strong> Doktor tarafından yapılır, analjezi gerekebilir</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>X-ray ve görüntüleme:</strong> Kırık veya kıkırdak hasarını değerlendirmek için</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Immobilizasyon:</strong> Diz ateli veya alçı, 2-6 hafta süreyle</span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-8">Konservatif (Ameliyatsız) Tedavi</h3>
            <p className="text-gray-700 leading-relaxed">
              İlk kez çıkık yaşayan ve yapısal anormallik olmayan hastalarda tercih edilir:
            </p>
            <ul className="space-y-2 mt-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>İstirahat ve buz uygulaması:</strong> İlk 48 saat şişliği azaltmak için</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Ağrı kontrolü:</strong> NSAİİ ilaçlar (ibuprofen, naproksen)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Fizik tedavi (4-6 hafta sonra):</strong> Kuadriseps kasını güçlendirme, propriyoseptif eğitim</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Dizlik kullanımı:</strong> Patellar bandlar veya dizlikler instabiliteyi azaltır</span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-8">Cerrahi Tedavi</h3>
            <p className="text-gray-700 leading-relaxed">
              Şu durumlarda cerrahi düşünülür:
            </p>
            <ul className="space-y-2 mt-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Tekrarlayan çıkıklar (iki veya daha fazla)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Kıkırdak veya kemik kırığı</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Yapısal anormallikler (oluk derinliği yetersizliği, patella alta/alta)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Konservatif tedaviye yanıtsızlık ve devam eden instabilite</span>
              </li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Cerrahi Seçenekler:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>MPFL rekonstrüksiyonu:</strong> Medial patellofemoral ligament onarımı, en yaygın prosedür</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Tibial tüberkül osteotomisi:</strong> Patellanın hizalanmasını düzeltmek için kemik kesisi ve kaydırma</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Trokleoplasti:</strong> Femur oluğunu derinleştirme (nadir)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Artroskopik onarım:</strong> Kıkırdak veya serbest cisim temizliği</span>
              </li>
            </ul>
          </section>

          {/* Section 5: Sıkça Sorulan Sorular */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Diz kapağı bir kez çıktıysa tekrar çıkar mı?</h3>
                <p className="text-gray-700">
                  İlk dislokasyondan sonra tekrarlama riski %15-50 arasındadır. Risk faktörleri: genç yaş (&lt;20 yaş), 
                  anatomik anormallikler, yetersiz rehabilitasyon. Doğru fizik tedavi ve kas güçlendirme riski azaltır.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ameliyatsız tedavi ile tam iyileşme mümkün mü?</h3>
                <p className="text-gray-700">
                  Evet, ilk kez çıkık yaşayan ve anatomik problemi olmayan hastaların %50-70'i konservatif tedaviyle tam iyileşir. 
                  Başarı, rehabilitasyona uyum ve kas gücüne bağlıdır.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ameliyat sonrası ne zaman spora dönebilirim?</h3>
                <p className="text-gray-700">
                  Tam rehabilitasyon 4-6 ay sürer. Hafif sporlar 3-4 ayda, temas sporları ise 6-9 ayda başlanabilir. 
                  Fizik tedaviyi tamamlamak ve doktor onayı almak kritik öneme sahiptir.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Diz kapağı çıkığını nasıl önleyebilirim?</h3>
                <p className="text-gray-700">
                  Kuadriseps (uyluk ön kas) kuvvetlendirme egzersizleri, denge ve propriyosepsiyon çalışmaları, 
                  uygun sporla ısınma, ani dönüş hareketlerinden kaçınma ve patellar bantlar kullanımı koruyucu önlemlerdir.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Kaynaklar */}
          <section className="mb-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kaynaklar</h2>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-700">
              <li>
                Fithian DC, et al. "Epidemiology and natural history of acute patellar dislocation" American Journal of Sports Medicine. 2004.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=patellar+dislocation+epidemiology" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Smith TO, et al. "Surgical versus non-surgical interventions for treating patellar dislocation" Cochrane Database of Systematic Reviews. 2015.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=patellar+dislocation+surgical+nonsurgical" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Schneider DK, et al. "Outcomes After Isolated Medial Patellofemoral Ligament Reconstruction" Orthopedic Journal of Sports Medicine. 2016.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=MPFL+reconstruction+outcomes" 
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
              Diz kapağı çıkığı ağrılı ve korkutucu bir yaralanmadır, ancak doğru tedavi ve rehabilitasyonla tam iyileşme mümkündür. 
              İlk çıkık sonrası uygun fizik tedavi ve kas güçlendirme, tekrarlama riskini önemli ölçüde azaltır.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Tekrarlayan çıkık veya kronik instabilite durumlarında cerrahi, kalıcı çözüm sağlar. 
              Erken tanı, doğru tedavi seçimi ve sabırlı rehabilitasyon, diz fonksiyonunu tam olarak geri kazanmanın anahtarıdır. 
              Herhangi bir diz kapağı problemi yaşıyorsanız, uzman bir ortopedi cerrahına danışmanız önemlidir.
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
