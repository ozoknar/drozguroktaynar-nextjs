import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'El-Bilek Artroskopisi Nedir? | Op. Dr. Özgür Oktay Nar',
  description: 'El-bilek artroskopisi, minimal invaziv cerrahi teknikle el bileği içi problemlerin tanı ve tedavisi. İyileşme süresi, avantajları ve endikasyonlar hakkında bilgi.',
  keywords: 'el bilek artroskopisi, el bileği cerrahisi, minimal invaziv, TFCC yırtığı, kıkırdak hasarı, ligament yaralanması',
  authors: [{ name: 'Op. Dr. Özgür Oktay Nar' }],
  openGraph: {
    title: 'El-Bilek Artroskopisi Nedir?',
    description: 'El-bilek artroskopisi, minimal invaziv cerrahi teknikle el bileği içi problemlerin tanı ve tedavisi. İyileşme süresi, avantajları ve endikasyonlar hakkında bilgi.',
    type: 'article',
    locale: 'tr_TR',
    url: 'https://www.ozguroktaynar.com/blog/el-bilegi-artroskopisi',
    siteName: 'Op. Dr. Özgür Oktay Nar',
    images: [
      {
        url: 'https://placehold.co/1200x630/e2e8f0/475569?text=El+Bilek+Artroskopisi',
        width: 1200,
        height: 630,
        alt: 'El-Bilek Artroskopisi Cerrahi Prosedürü',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'El-Bilek Artroskopisi Nedir?',
    description: 'El-bilek artroskopisi, minimal invaziv cerrahi teknikle el bileği içi problemlerin tanı ve tedavisi. İyileşme süresi, avantajları ve endikasyonlar hakkında bilgi.',
    images: ['https://placehold.co/1200x630/e2e8f0/475569?text=El+Bilek+Artroskopisi'],
  },
  alternates: {
    canonical: 'https://www.ozguroktaynar.com/blog/el-bilegi-artroskopisi',
  },
};

export default function BlogPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': 'https://www.ozguroktaynar.com/blog/el-bilegi-artroskopisi#webpage',
        url: 'https://www.ozguroktaynar.com/blog/el-bilegi-artroskopisi',
        name: 'El-Bilek Artroskopisi Nedir?',
        description: 'El-bilek artroskopisi, minimal invaziv cerrahi teknikle el bileği içi problemlerin tanı ve tedavisi. İyileşme süresi, avantajları ve endikasyonlar hakkında bilgi.',
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
          <span className="text-gray-700">El-Bilek Artroskopisi</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">El-Bilek Artroskopisi Nedir?</h1>
          <div className="flex items-center text-gray-600 text-sm mb-6">
            <span>Op. Dr. Özgür Oktay Nar</span>
            <span className="mx-2">•</span>
            <time>7 Şubat 2025</time>
          </div>
          <img
            src="https://placehold.co/1200x630/e2e8f0/475569?text=El+Bilek+Artroskopisi"
            alt="El-Bilek Artroskopisi Cerrahi Prosedürü"
            className="w-full rounded-xl shadow-lg"
          />
        </header>

        {/* Main Content - 7 STEP ARCHITECTURE */}
        <div className="prose prose-lg max-w-none">
          
          {/* Section 1: Giriş */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Giriş</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              El bileği ağrısı ve fonksiyon kaybı, günlük yaşam kalitesini ciddi şekilde etkileyen 
              yaygın bir sorundur. Geleneksel açık cerrahi yöntemler yerine, minimal invaziv teknikler 
              günümüzde tercih edilen yaklaşım haline gelmiştir.
            </p>
            <p className="text-gray-700 leading-relaxed">
              El-bilek artroskopisi, küçük kesiler aracılığıyla kamera ve ince aletlerle el bileği 
              içine girerek tanı koyma ve tedavi etme imkanı sağlayan modern bir cerrahi tekniktir. 
              Bu yöntem daha az doku hasarı, hızlı iyileşme ve daha az ağrı sağlar.
            </p>
          </section>

          {/* Section 2: Nedir / Tanım */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">El-Bilek Artroskopisi Nedir?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              El-bilek artroskopisi, 2-3 mm çapında küçük kesilerle el bileği eklemine minik bir kamera 
              (artroskop) ve özel cerrahi aletlerin yerleştirilmesi suretiyle gerçekleştirilen minimal 
              invaziv bir cerrahi prosedürdür.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Geleneksel açık cerrahiden farklı olarak, artroskopi sırasında eklem yapıları doğrudan 
              görüntülenebilir, kıkırdak yüzeyler, ligamentler, diskler (TFCC) ve kemik yüzeyler 
              incelenebilir. Aynı seansta tanı konulduktan sonra gerekli onarımlar yapılabilir.
            </p>
            <div className="bg-[#E6FAF8] p-6 rounded-lg">
              <p className="text-gray-800 font-semibold mb-2">📌 Önemli Not:</p>
              <p className="text-gray-700">
                El-bilek artroskopisi hem tanısal hem de terapötik bir prosedürdür. MRG ve diğer 
                görüntüleme yöntemlerinin gösteremediği kıkırdak ve ligament patolojilerini 
                doğrudan görüntüleyebilir.
              </p>
            </div>
          </section>

          {/* Section 3: Endikasyonlar (Belirtiler yerine) */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hangi Durumlarda Uygulanır?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              El-bilek artroskopisinin başlıca endikasyonları şunlardır:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>TFCC (Triangular Fibrocartilage Complex) yırtıkları:</strong> El bileğinin dirsek tarafındaki kıkırdak disk hasarı</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Ligament yaralanmaları:</strong> Scapholunate veya lunotriquetral ligament kopmaları</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Kıkırdak hasarları:</strong> Kondromalazi, kıkırdak yüzey düzensizlikleri</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Ganglion kistleri:</strong> Eklem içi kaynaklı kist rezeksiyonu</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Sinovit:</strong> Kronik inflamatuar eklem içi doku temizliği</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Açıklanamayan kronik el bileği ağrısı:</strong> Tanısal amaçlı artroskopi</span>
              </li>
            </ul>
          </section>

          {/* Section 4: Prosedür ve İyileşme */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Prosedür ve İyileşme Süreci</h2>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">Ameliyat Öncesi</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ameliyat öncesi MRG veya BT gibi ileri görüntüleme yöntemleri ile problemin lokalizasyonu 
              ve şiddeti değerlendirilir. Hasta genel veya bölgesel anestezi altında ameliyata alınır.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">Ameliyat Sırasında</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span>2-3 adet küçük (3-4 mm) portal kesisi yapılır</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span>Artroskopik kamera ile eklem içi görüntülenir</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span>Hasarlı kıkırdak temizlenir, ligament onarımı yapılır veya kist çıkarılır</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span>Ameliyat süresi ortalama 45-90 dakikadır</span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">Ameliyat Sonrası İyileşme</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>İlk 1-2 hafta:</strong> Atel veya splint kullanımı, hafif şişlik ve ağrı beklenir</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>2-4 hafta:</strong> Fizik tedavi başlar, hareket açıklığı egzersizleri</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>6-8 hafta:</strong> Hafif aktivitelere dönüş</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>3-4 ay:</strong> Tam fonksiyonel iyileşme ve ağır işlere dönüş</span>
              </li>
            </ul>
          </section>

          {/* Section 5: Sıkça Sorulan Sorular */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Artroskopi açık cerrahiden daha mı avantajlıdır?</h3>
                <p className="text-gray-700">
                  Evet. Minimal invaziv yaklaşım daha küçük kesiler, daha az yumuşak doku hasarı, 
                  daha az ağrı, daha hızlı iyileşme ve daha iyi kozmetik sonuç sağlar. Ancak her vaka 
                  artroskopik yaklaşıma uygun olmayabilir.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ameliyat ağrılı mıdır?</h3>
                <p className="text-gray-700">
                  Ameliyat sırasında anestezi altında olduğunuz için ağrı hissetmezsiniz. 
                  Ameliyat sonrası ağrı minimal-orta düzeydedir ve ağrı kesici ilaçlarla rahatlıkla 
                  kontrol edilir. Çoğu hasta 2-3 gün içinde günlük hafif aktivitelerine dönebilir.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ne zaman işe dönebilirim?</h3>
                <p className="text-gray-700">
                  Masa başı işlerde 1-2 hafta, hafif fiziksel işlerde 4-6 hafta, ağır manuel işlerde 
                  8-12 hafta içinde işe dönüş mümkündür. Süre yapılan işlemin tipine ve iyileşme hızına göre değişir.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Komplikasyon riski nedir?</h3>
                <p className="text-gray-700">
                  El-bilek artroskopisi deneyimli ellerde oldukça güvenli bir prosedürdür. 
                  Enfeksiyon, sinir/damar yaralanması, sertlik gibi komplikasyon oranı %1-2 düzeyindedir. 
                  Riskler ameliyat öncesi detaylı olarak açıklanır.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Kaynaklar */}
          <section className="mb-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kaynaklar</h2>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-700">
              <li>
                del Piñal F, et al. "Arthroscopic treatment of triangular fibrocartilage complex tears" J Hand Surg Am. 2007.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=wrist+arthroscopy+TFCC+treatment" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Geissler WB, et al. "Wrist arthroscopy: indications and results" Arthroscopy. 2003.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=wrist+arthroscopy+indications+results" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Slutsky DJ. "Wrist arthroscopy through a volar radial portal" Arthroscopy. 2002.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=wrist+arthroscopy+portal+techniques" 
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
              El-bilek artroskopisi, kronik el bileği problemlerinin tanı ve tedavisinde altın standart 
              haline gelmiş modern bir cerrahi tekniktir. Minimal invaziv yaklaşımın sunduğu avantajlar 
              sayesinde hastalar daha hızlı iyileşir ve normal yaşamlarına erken dönerler.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Kronik el bileği ağrınız, hareket kısıtlılığınız veya yaralanma sonrası şikayetleriniz 
              varsa, deneyimli bir el cerrahı veya ortopedi uzmanına başvurarak artroskopik tedavi 
              seçeneklerini değerlendirmeniz önerilir.
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
