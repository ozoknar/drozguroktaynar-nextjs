import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dirsek Ağrısı Tedavisi: Nedenleri ve Çözümleri | Op. Dr. Özgür Oktay Nar',
  description: 'Dirsek ağrısının nedenleri, belirtileri ve etkili tedavi yöntemleri. Tenisçi dirseği, golfçü dirseği ve diğer yaygın dirsek problemleri hakkında uzman rehberi.',
  keywords: 'dirsek ağrısı, dirsek tedavisi, tenisçi dirseği, golfçu dirseği, epikondilit, dirsek yaralanması, ortopedi',
  authors: [{ name: 'Op. Dr. Özgür Oktay Nar' }],
  openGraph: {
    title: 'Dirsek Ağrısı Tedavisi: Nedenleri ve Çözümleri',
    description: 'Dirsek ağrısının nedenleri, belirtileri ve etkili tedavi yöntemleri. Tenisçi dirseği, golfçü dirseği ve diğer yaygın dirsek problemleri.',
    type: 'article',
    locale: 'tr_TR',
    url: 'https://www.ozguroktaynar.com/blog/dirsek-agrisi-tedavisi',
    siteName: 'Op. Dr. Özgür Oktay Nar',
    images: [
      {
        url: 'https://placehold.co/1200x630/e2e8f0/475569?text=Dirsek+Agrisi+Tedavisi',
        width: 1200,
        height: 630,
        alt: 'Dirsek Ağrısı Tedavisi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dirsek Ağrısı Tedavisi: Nedenleri ve Çözümleri',
    description: 'Dirsek ağrısının nedenleri, belirtileri ve etkili tedavi yöntemleri.',
    images: ['https://placehold.co/1200x630/e2e8f0/475569?text=Dirsek+Agrisi+Tedavisi'],
  },
  alternates: {
    canonical: 'https://www.ozguroktaynar.com/blog/dirsek-agrisi-tedavisi',
  },
};

export default function DirsekAgrisiTedavisiPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': 'https://www.ozguroktaynar.com/blog/dirsek-agrisi-tedavisi#webpage',
        url: 'https://www.ozguroktaynar.com/blog/dirsek-agrisi-tedavisi',
        name: 'Dirsek Ağrısı Tedavisi: Nedenleri ve Çözümleri',
        description: 'Dirsek ağrısının nedenleri, belirtileri ve etkili tedavi yöntemleri.',
        datePublished: '2025-02-07T05:40:00+03:00',
        dateModified: '2025-02-07T05:40:00+03:00',
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
          <span className="text-gray-700">Dirsek Ağrısı Tedavisi</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Dirsek Ağrısı Tedavisi: Nedenleri ve Çözümleri</h1>
          <div className="flex items-center text-gray-600 text-sm mb-6">
            <span>Op. Dr. Özgür Oktay Nar</span>
            <span className="mx-2">•</span>
            <time>7 Şubat 2025</time>
          </div>
          <img
            src="https://www.drozguroktaynar.com/wp-content/uploads/2026/01/Dirsek-Agrisi-Tedavisi.webp"
            alt="Dirsek Ağrısı Tedavisi"
            className="w-full rounded-xl shadow-lg"
          />
        </header>

        {/* Main Content - 7 STEP ARCHITECTURE */}
        <div className="prose prose-lg max-w-none">
          
          {/* Section 1: Giriş */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Giriş</h2>
            <p className="text-gray-700 leading-relaxed">
              Dirsek ağrısı, günlük yaşamda yaygın karşılaşılan bir şikayettir ve kolun fonksiyonunu ciddi şekilde etkileyebilir. 
              Klavye kullanımından spor aktivitelerine kadar birçok hareket dirseği kullanır, 
              bu nedenle yaralanma veya aşırı kullanım riskleri oldukça yüksektir.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Dirsek ağrısının nedenleri çok çeşitlidir: tendinit (tendon iltihabı), bursit, sinir sıkışması, 
              kırık veya çıkık gibi travmatik yaralanmalar. Bu yazıda, dirsek ağrısının en yaygın nedenlerini, 
              belirtilerini ve güncel tedavi seçeneklerini detaylı olarak inceleyeceğiz.
            </p>
          </section>

          {/* Section 2: Nedir / Tanım */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Dirsek Ağrısı Nedir?</h2>
            <p className="text-gray-700 leading-relaxed">
              Dirsek ağrısı, dirsek ekleminde, çevresindeki tendonlarda, kaslarda veya sinirlerde meydana gelen rahatsızlıktır. 
              Ağrının yeri ve karakteri, altta yatan nedeni belirlemede önemli ipuçları sağlar.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Yaygın dirsek ağrısı nedenleri:</strong>
            </p>
            <ul className="space-y-2 mt-3">
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Lateral epikondilit (Tenisçi dirseği):</strong> Dirsek dış yan ağrısı, aşırı kullanımla gelişir</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Medial epikondilit (Golfçü dirseği):</strong> Dirsek iç yan ağrısı, tekrarlayan hareketlerle oluşur</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Olekranon bursiti:</strong> Dirsek arkasında şişlik ve ağrı</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Ulnar sinir sıkışması (Kubital tünel sendromu):</strong> El ve parmaklarda uyuşma ile birlikte ağrı</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Kıkırdak hasarı veya artrit:</strong> Eklem dejenerasyonu, hareket kısıtlılığı</span>
              </li>
            </ul>
          </section>

          {/* Section 3: Belirtiler */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Belirtiler</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dirsek ağrısının belirtileri altta yatan nedene göre değişir, ancak yaygın işaretler şunlardır:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Ağrı:</strong> Dinlenme veya hareket sırasında, keskin veya künt ağrı</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Şişlik:</strong> Dirsek ekleminde veya çevresinde görünür şişme</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Hassasiyet:</strong> Dokunma veya basınç uygulandığında ağrı artışı</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><span><strong>Hareket kısıtlılığı:</strong> Dirseği tamamen açamama veya kapayamama</span></span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Güçsüzlük:</strong> Kavrama gücünde azalma, nesneleri tutamama</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Uyuşma veya karıncalanma:</strong> Sinir sıkışmasında el ve parmaklara yayılan his kaybı</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Çıtırtı sesi:</strong> Hareket sırasında eklemde anormal sesler</span>
              </li>
            </ul>
          </section>

          {/* Section 4: Tedavi Yöntemleri */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tedavi Yöntemleri</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Konservatif (Ameliyatsız) Tedavi</h3>
            <p className="text-gray-700 leading-relaxed">
              Dirsek ağrısının %80-90'ı ameliyatsız yöntemlerle başarıyla tedavi edilir:
            </p>

            <h4 className="text-xl font-semibold text-gray-800 mb-2 mt-4">1. Dinlenme ve Aktivite Modifikasyonu</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span>Ağrıyı tetikleyen hareketlerden kaçının</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span>İş veya spor aktivitelerinde düzenleme yapın (ergonomi iyileştirmesi)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span>Atel veya bandaj ile eklem desteği sağlayın</span>
              </li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-800 mb-2 mt-4">2. Soğuk ve Sıcak Uygulama</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Soğuk uygulama:</strong> İlk 48 saat, şişlik ve iltihabı azaltır (günde 3-4 kez, 15-20 dakika)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Sıcak uygulama:</strong> Kronik ağrıda, kan dolaşımını artırır ve kasları rahatlatır</span>
              </li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-800 mb-2 mt-4">3. İlaç Tedavisi</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span>NSAİİ (ibuprofen, naproksen) - ağrı ve iltihabı azaltır</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span>Kortikosteroid enjeksiyonları - şiddetli inflamasyonda kısa vadeli rahatlama</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span>PRP (Platelet-Rich Plasma) tedavisi - tendon iyileşmesini destekler</span>
              </li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-800 mb-2 mt-4">4. Fizik Tedavi ve Egzersiz</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Germe egzersizleri:</strong> Esnekliği artırır, kasılmayı azaltır</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Kuvvetlendirme:</strong> Dirsek çevresindeki kasları güçlendirir, destekler</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Ultrason, TENS:</strong> Ağrı kontrolü ve doku iyileşmesini hızlandırır</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Manuel terapi:</strong> Eklem mobilizasyonu ve yumuşak doku masajı</span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-8">Cerrahi Tedavi</h3>
            <p className="text-gray-700 leading-relaxed">
              Konservatif tedaviye 6-12 ay yanıt alınamazsa cerrahi düşünülebilir:
            </p>
            <ul className="space-y-2 mt-3">
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Tendon onarımı veya debridman:</strong> Hasarlı tendon dokusunun temizlenmesi</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Sinir dekompresyonu:</strong> Kubital tünel sendromundasinir basısının giderilmesi</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Artroskopi:</strong> Minimal invaziv eklem temizliği ve onarımı</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Eklem replasmanı:</strong> İleri evre artrit durumunda</span>
              </li>
            </ul>
          </section>

          {/* Section 5: Sıkça Sorulan Sorular */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Dirsek ağrısı ne zaman ciddiye alınmalıdır?</h3>
                <p className="text-gray-700">
                  Şiddetli ağrı, belirgin şişlik, hareket kısıtlılığı, uyuşma/karıncalanma veya travma sonrası ağrı durumlarında 
                  derhal doktora başvurun. Ayrıca ağrı 1-2 hafta içinde iyileşmiyorsa değerlendirme önerilir.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Tenisçi dirseği sadece tenisçilerde mi görülür?</h3>
                <p className="text-gray-700">
                  Hayır. Adına rağmen, tenisçi dirseği bilgisayar kullanıcıları, boyacılar, tamirciler ve 
                  tekrarlayan bilek hareketleri yapan herhangi bir kişide gelişebilir. Aslında vakaların sadece %5-10'u tenisçilerde görülür.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Dirsek ağrısı kendiliğinden geçer mi?</h3>
                <p className="text-gray-700">
                  Hafif aşırı kullanım ağrıları dinlenme ile iyileşebilir, ancak kronik tendinit veya sinir sıkışması gibi durumlar 
                  tedavi edilmezse kötüleşebilir. Erken müdahale iyileşme süresini kısaltır ve komplikasyon riskini azaltır.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Dirsek ağrısını nasıl önleyebilirim?</h3>
                <p className="text-gray-700">
                  Düzenli germe ve kuvvetlendirme egzersizleri, doğru teknik kullanımı (spor, iş), ergonomik çalışma ortamı, 
                  aşırı yükten kaçınma ve ısınma hareketleri dirsek ağrısı riskini azaltır.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Kaynaklar */}
          <section className="mb-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kaynaklar</h2>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-700">
              <li>
                Shiri R, Viikari-Juntura E. "Lateral and medial epicondylitis: role of occupational factors" Best Practice & Research Clinical Rheumatology. 2011.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=epicondylitis+occupational+factors" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Coombes BK, et al. "Efficacy and safety of corticosteroid injections and other injections for management of tendinopathy: a systematic review" Lancet. 2010.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=corticosteroid+injections+tendinopathy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Bisset L, et al. "Mobilisation with movement and exercise, corticosteroid injection, or wait and see for tennis elbow" BMJ. 2006.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=tennis+elbow+treatment+comparison" 
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
            <p className="text-gray-700 leading-relaxed">
              Dirsek ağrısı çok yönlü bir problem olsa da, doğru tanı ve tedavi ile etkili bir şekilde yönetilebilir. 
              Erken müdahale, kronikleşmeyi önler ve daha hızlı iyileşme sağlar. Konservatif yaklaşımlar çoğu vakada başarılıdır 
              ve cerrahi nadiren gereklidir.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Dirsek ağrısı yaşıyorsanız, kendinizi teşhis etmeye çalışmak yerine uzman bir ortopedi doktoruna başvurun. 
              Kişiselleştirilmiş tedavi planı, kalıcı çözüm ve fonksiyonel iyileşme için en güvenilir yoldur.
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
