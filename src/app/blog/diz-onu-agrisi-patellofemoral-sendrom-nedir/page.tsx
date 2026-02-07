import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Diz Önü Ağrısı (Patellofemoral Sendrom) Nedir? | Op. Dr. Özgür Oktay Nar',
  description: 'Patellofemoral sendrom (diz önü ağrısı) nedenleri, belirtileri ve tedavi yöntemleri. Koşucuların dizi hakkında kapsamlı bilgi.',
  keywords: 'patellofemoral sendrom, diz önü ağrısı, koşucuların dizi, patella, diz kapağı ağrısı, sporcu yaralanması',
  authors: [{ name: 'Op. Dr. Özgür Oktay Nar' }],
  openGraph: {
    title: 'Diz Önü Ağrısı (Patellofemoral Sendrom) Nedir?',
    description: 'Patellofemoral sendrom (diz önü ağrısı) nedenleri, belirtileri ve tedavi yöntemleri. Koşucuların dizi hakkında kapsamlı bilgi.',
    type: 'article',
    locale: 'tr_TR',
    url: 'https://www.ozguroktaynar.com/blog/diz-onu-agrisi-patellofemoral-sendrom-nedir',
    siteName: 'Op. Dr. Özgür Oktay Nar',
    images: [
      {
        url: 'https://placehold.co/1200x630/e2e8f0/475569?text=Diz+Onu+Agrisi',
        width: 1200,
        height: 630,
        alt: 'Patellofemoral Sendrom - Diz Önü Ağrısı Anatomisi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diz Önü Ağrısı (Patellofemoral Sendrom) Nedir?',
    description: 'Patellofemoral sendrom (diz önü ağrısı) nedenleri, belirtileri ve tedavi yöntemleri. Koşucuların dizi hakkında kapsamlı bilgi.',
    images: ['https://placehold.co/1200x630/e2e8f0/475569?text=Diz+Onu+Agrisi'],
  },
  alternates: {
    canonical: 'https://www.ozguroktaynar.com/blog/diz-onu-agrisi-patellofemoral-sendrom-nedir',
  },
};

export default function BlogPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': 'https://www.ozguroktaynar.com/blog/diz-onu-agrisi-patellofemoral-sendrom-nedir#webpage',
        url: 'https://www.ozguroktaynar.com/blog/diz-onu-agrisi-patellofemoral-sendrom-nedir',
        name: 'Diz Önü Ağrısı (Patellofemoral Sendrom) Nedir?',
        description: 'Patellofemoral sendrom (diz önü ağrısı) nedenleri, belirtileri ve tedavi yöntemleri. Koşucuların dizi hakkında kapsamlı bilgi.',
        datePublished: '2025-02-07T10:00:00+03:00',
        dateModified: '2025-02-07T10:00:00+03:00',
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
          <Link href="/" className="hover:text-[#01CAB8]">Ana Sayfa</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-[#01CAB8]">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">Diz Önü Ağrısı (Patellofemoral Sendrom)</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Diz Önü Ağrısı (Patellofemoral Sendrom) Nedir?</h1>
          <div className="flex items-center text-gray-600 text-sm mb-6">
            <span>Op. Dr. Özgür Oktay Nar</span>
            <span className="mx-2">•</span>
            <time>7 Şubat 2025</time>
          </div>
          <img
            src="https://www.drozguroktaynar.com/wp-content/uploads/2025/12/Diz-Onu-Agrisi-Patellofemoral-Sendrom-Nedir.webp"
            alt="Patellofemoral Sendrom - Diz Önü Ağrısı Anatomisi"
            className="w-full rounded-xl shadow-lg"
          />
        </header>

        {/* Main Content - 7 STEP ARCHITECTURE */}
        <div className="prose prose-lg max-w-none">
          
          {/* Section 1: Giriş */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Giriş</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Diz önü ağrısı, özellikle genç yetişkinler ve sporcular arasında yaygın bir sorundur. 
              Patellofemoral sendrom, diz kapağı (patella) ile uyluk kemiği (femur) arasındaki eklemin 
              aşırı yüklenmesi sonucu ortaya çıkan ağrılı bir durumdur.
            </p>
            <p className="text-gray-700 leading-relaxed">
              "Koşucuların dizi" olarak da bilinen bu durum, yanlış yürüyüş-koşu tekniği, kas dengesizlikleri 
              veya aşırı kullanım nedeniyle gelişebilir. Erken tanı ve doğru tedavi ile çoğu hasta 
              ameliyatsız yöntemlerle iyileşir.
            </p>
          </section>

          {/* Section 2: Nedir / Tanım */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Patellofemoral Sendrom Nedir?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Patellofemoral sendrom (PFS), diz kapağının (patella) uyluk kemiği üzerindeki oluğunda 
              (femoral oluk) normal hareketinden sapması veya aşırı baskı uygulaması sonucu oluşan 
              kıkırdak irritasyonu ve ağrısıdır.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dizin bükülme-açılma hareketleri sırasında patella, femur üzerindeki olukta yukarı-aşağı 
              kayar. Kas dengesizlikleri, yapısal anomaliler veya tekrarlayan mikrotravmalar bu hareketi 
              bozabilir ve kıkırdak yüzeyde aşınma ile ağrıya neden olabilir.
            </p>
            <div className="bg-[#E6FAF8] p-6 rounded-lg">
              <p className="text-gray-800 font-semibold mb-2">📌 Önemli Not:</p>
              <p className="text-gray-700">
                Patellofemoral sendrom genellikle yapısal bir hasardan ziyade fonksiyonel bir 
                bozukluktur. Bu nedenle ameliyatsız tedavi yöntemleri çoğu vakada başarılıdır.
              </p>
            </div>
          </section>

          {/* Section 3: Belirtiler */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Belirtiler</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Patellofemoral sendromun tipik belirtileri şunlardır:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Diz kapağı çevresinde ağrı:</strong> Özellikle merdiven inme, çömelme, uzun süre oturma (sinema işareti) sırasında artar</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Çıtırdama hissi:</strong> Diz hareketlerinde krepitasyon (kıkırdak sürtünmesi)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Dizde güçsüzlük:</strong> Özellikle yük taşıma veya koşu sırasında</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Uzun süre oturma sonrası sertlik:</strong> "Sinema belirtisi" - ayağa kalkarken diz ağrısı</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Şişlik (nadir):</strong> Bazı vakalarda minimal efüzyon görülebilir</span>
              </li>
            </ul>
          </section>

          {/* Section 4: Tedavi Yöntemleri */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tedavi Yöntemleri</h2>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">Konservatif (Ameliyatsız) Tedavi</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Patellofemoral sendromun %90'ından fazlası ameliyatsız yöntemlerle iyileşir:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Fizik tedavi ve egzersiz:</strong> Kuadriseps (özellikle vastus medialis) ve kalça kas güçlendirme</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Patellar taping:</strong> Diz kapağının düzgün hizalanmasını sağlama</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Ortez kullanımı:</strong> Özel patellar destekler veya ayakkabı tabanı düzeltmeleri</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Aktivite modifikasyonu:</strong> Ağrıyı artıran hareketlerden kaçınma, düşük etkili egzersizlere geçiş</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>İlaç tedavisi:</strong> Antiinflamatuar ilaçlar (NSAİD) ağrı ve inflamasyonu azaltır</span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">Cerrahi Tedavi</h3>
            <p className="text-gray-700 leading-relaxed">
              Konservatif tedaviye 6-12 ay yanıt vermeyen, ciddi yapısal anomalisi olan (patellar tilt, 
              subluksasyon) vakalarda artroskopik lateral retinakulum gevşetme veya nadir olarak 
              tibial tüberkül transferi gibi cerrahi seçenekler değerlendirilebilir.
            </p>
          </section>

          {/* Section 5: Sıkça Sorulan Sorular */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Patellofemoral sendrom ne kadar sürer?</h3>
                <p className="text-gray-700">
                  Doğru tedavi ve egzersizlerle 6-12 hafta içinde belirtiler azalır. Ancak tam iyileşme 
                  ve kasların güçlenmesi 3-6 ay sürebilir. Düzenli egzersiz ve aktivite modifikasyonu kritiktir.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Spor yapmaya devam edebilir miyim?</h3>
                <p className="text-gray-700">
                  Ağrıyı artırmayan düşük etkili egzersizlere (yüzme, bisiklet) devam edilebilir. 
                  Koşu ve sıçrama gibi yüksek etkili aktiviteler geçici olarak azaltılmalıdır. 
                  Fizik tedavi uzmanı veya spor hekimi ile birlikte kademeli dönüş planı yapılmalıdır.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">En etkili egzersizler nelerdir?</h3>
                <p className="text-gray-700">
                  Kuadriseps güçlendirme (özellikle VMO - vastus medialis obliquus), kalça abduktörleri 
                  ve kalça ekstansörleri güçlendirme egzersizleri en etkilidir. Patellar mobilizasyon 
                  ve esneme egzersizleri de tedavinin önemli parçasıdır.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ameliyat gerekli midir?</h3>
                <p className="text-gray-700">
                  Vakaların %90'ından fazlası ameliyatsız tedavi ile iyileşir. Cerrahi genellikle 
                  6-12 aylık konservatif tedaviye rağmen iyileşmeyen, ciddi yapısal anomalisi olan 
                  veya kıkırdak hasarı bulunan hastalarda düşünülür.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Kaynaklar */}
          <section className="mb-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kaynaklar</h2>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-700">
              <li>
                Crossley KM, et al. "Patellofemoral pain: consensus statement from the 4th International Patellofemoral Pain Research Retreat" Br J Sports Med. 2016.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=patellofemoral+pain+consensus+statement" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Willy RW, et al. "Patellofemoral pain: clinical practice guidelines linked to the international classification" J Orthop Sports Phys Ther. 2019.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=patellofemoral+pain+clinical+practice+guidelines" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Lack S, et al. "Outcome predictors for conservative patellofemoral pain management" Br J Sports Med. 2014.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=outcome+predictors+patellofemoral+pain" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
            </ol>
          </section>

          {/* Section 7: Internal Link - ZORUNLU! */}
          <section className="mb-12">
            <div className="bg-[#E6FAF8] border-l-4 border-[#1AD2C4] p-6 rounded-r-lg">
              <p className="text-gray-700">
                <strong>İlgili İçerik:</strong> Ameliyatsız tedavi seçenekleri hakkında daha fazla bilgi için{' '}
                <Link 
                  href="/ameliyatsiz-cozumler" 
                  className="text-[#01CAB8] hover:text-[#01867A] font-semibold hover:underline"
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
            <p className="text-gray-700 leading-relaxed mb-4">
              Patellofemoral sendrom, özellikle aktif bireylerde yaygın görülen ancak doğru tedavi ile 
              yönetilebilir bir durumdur. Erken tanı, uygun fizik tedavi programı ve aktivite modifikasyonu 
              ile vakaların büyük çoğunluğu ameliyatsız yöntemlerle başarılı şekilde tedavi edilir.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Diz önü ağrınız varsa ve aktivitelerinizi kısıtlıyorsa, ortopedi uzmanına başvurarak 
              kişiselleştirilmiş bir tedavi planı oluşturmanız önerilir. Düzenli egzersiz, kas dengesinin 
              korunması ve doğru hareket teknikleri ile tekrarlayan yaralanmaların önüne geçilebilir.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#01CAB8] to-[#01A899] rounded-xl p-8 text-center text-white mt-12">
          <h2 className="text-2xl font-bold mb-4">Randevu Almak İster misiniz?</h2>
          <p className="mb-6">Uzman değerlendirmesi için hemen iletişime geçin.</p>
          <Link 
            href="/iletisim" 
            className="inline-block bg-white text-[#01CAB8] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Randevu Al
          </Link>
        </div>
      </article>
    </>
  );
}
