import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Diz Ağrısı Nedenleri: Tanı ve Tedavi Yaklaşımları | Op. Dr. Özgür Oktay Nar',
  description: 'Diz ağrısı nedenleri, belirtileri ve tedavi yöntemleri hakkında detaylı bilgi. Ortopedi uzmanından diz ağrısı için kapsamlı rehber.',
  keywords: 'diz ağrısı, diz ağrısı nedenleri, diz eklem ağrısı, meniskus, kıkırdak aşınması, diz tedavisi',
  authors: [{ name: 'Op. Dr. Özgür Oktay Nar' }],
  openGraph: {
    title: 'Diz Ağrısı Nedenleri: Tanı ve Tedavi Yaklaşımları',
    description: 'Diz ağrısı nedenleri, belirtileri ve tedavi yöntemleri hakkında detaylı bilgi. Ortopedi uzmanından diz ağrısı için kapsamlı rehber.',
    type: 'article',
    locale: 'tr_TR',
    url: 'https://www.ozguroktaynar.com/blog/diz-agrisi-nedenleri',
    siteName: 'Op. Dr. Özgür Oktay Nar',
    images: [
      {
        url: 'https://placehold.co/1200x630/e2e8f0/475569?text=Diz+Agrisi+Nedenleri',
        width: 1200,
        height: 630,
        alt: 'Diz ağrısı nedenleri ve tedavi yöntemleri',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diz Ağrısı Nedenleri: Tanı ve Tedavi Yaklaşımları',
    description: 'Diz ağrısı nedenleri, belirtileri ve tedavi yöntemleri hakkında detaylı bilgi. Ortopedi uzmanından diz ağrısı için kapsamlı rehber.',
    images: ['https://placehold.co/1200x630/e2e8f0/475569?text=Diz+Agrisi+Nedenleri'],
  },
  alternates: {
    canonical: 'https://www.ozguroktaynar.com/blog/diz-agrisi-nedenleri',
  },
};

export default function DizAgrisiNedenleriPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': 'https://www.ozguroktaynar.com/blog/diz-agrisi-nedenleri#webpage',
        url: 'https://www.ozguroktaynar.com/blog/diz-agrisi-nedenleri',
        name: 'Diz Ağrısı Nedenleri: Tanı ve Tedavi Yaklaşımları',
        description: 'Diz ağrısı nedenleri, belirtileri ve tedavi yöntemleri hakkında detaylı bilgi.',
        datePublished: '2025-01-15T10:00:00+03:00',
        dateModified: '2025-01-15T10:00:00+03:00',
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
          <span className="text-gray-700">Diz Ağrısı Nedenleri</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Diz Ağrısı Nedenleri: Tanı ve Tedavi Yaklaşımları</h1>
          <div className="flex items-center text-gray-600 text-sm mb-6">
            <span>Op. Dr. Özgür Oktay Nar</span>
            <span className="mx-2">•</span>
            <time>15 Ocak 2025</time>
          </div>
          <img
            src="https://www.drozguroktaynar.com/wp-content/uploads/2025/11/diz-agrisi-nedenleri.webp"
            alt="Diz ağrısı nedenleri ve tedavi yöntemleri"
            className="w-full rounded-xl shadow-lg"
          />
        </header>

        {/* Main Content - 7 STEP ARCHITECTURE */}
        <div className="prose prose-lg max-w-none">
          
          {/* Section 1: Giriş */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Giriş</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Diz ağrısı, günlük yaşam aktivitelerini olumsuz etkileyen en yaygın kas-iskelet sistemi şikayetlerinden biridir. 
              Her yaş grubunda görülebilen diz ağrısı, spor yaralanmalarından dejeneratif hastalıklara kadar geniş bir yelpazede 
              farklı nedenlere bağlı olarak ortaya çıkabilir.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Diz eklemi, vücudun en büyük ve en karmaşık eklemlerinden biridir. Günlük hareketlerimiz sırasında büyük yüklere 
              maruz kaldığı için çeşitli yaralanma ve hastalıklara karşı savunmasızdır. Doğru tanı ve tedavi için ağrının kaynağını 
              belirlemek kritik önem taşımaktadır.
            </p>
          </section>

          {/* Section 2: Nedir / Tanım */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Diz Ağrısı Nedir?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Diz ağrısı, diz eklemi ve çevresindeki yapılarda hissedilen rahatsızlık hissidir. Ağrı keskin, künt, yanıcı veya 
              zonklayıcı karakterde olabilir. Diz ağrısı genellikle hareketle artar ve istirahatle azalır, ancak bazı durumlarda 
              gece ağrıları da görülebilir.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Diz eklemini oluşturan yapılar şunlardır:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Kemikler:</strong> Femur (uyluk kemiği), tibia (kaval kemiği), patella (diz kapağı)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Kıkırdak:</strong> Eklem yüzeylerini kaplayan kaygan doku</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Menisküsler:</strong> C şeklinde amortisör görevi gören fibrokartilaj yapılar</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Bağlar:</strong> Eklemi stabilize eden güçlü bağ dokuları (ACL, PCL, MCL, LCL)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Kaslar ve tendonlar:</strong> Hareketi sağlayan ve destekleyen yapılar</span>
              </li>
            </ul>
          </section>

          {/* Section 3: Nedenler */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Diz Ağrısının Başlıca Nedenleri</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Meniskus Yırtığı</h3>
              <p className="text-gray-700">
                Ani dönme hareketleri veya travmalar sonucu menisküste yırtık oluşabilir. Özellikle sporcular ve orta yaş 
                grubu kişilerde sık görülür. Ağrı, şişlik ve eklemde kilitlenme hissi ile kendini gösterir.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Kıkırdak Aşınması (Osteoartrit)</h3>
              <p className="text-gray-700">
                Yaşlanma, aşırı kullanım veya travma sonucu eklem kıkırdağında aşınma meydana gelir. Sabah tutukluğu, 
                aktivite sonrası ağrı artışı ve eklemde ses karakteristik belirtilerdir.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Ön Çapraz Bağ (ACL) Yaralanması</h3>
              <p className="text-gray-700">
                Ani duruş, yön değiştirme veya direkt darbe ile ACL yaralanabilir. Genellikle spor yaralanması sonucu 
                oluşur. Eklemde instabilite ve şişlik başlıca bulgulardır.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Kondromalazi Patella</h3>
              <p className="text-gray-700">
                Diz kapağı altındaki kıkırdağın yumuşaması ve aşınması. "Koşucu dizi" olarak da bilinir. Merdiven inip 
                çıkma, çömelme sırasında ağrı ve patırtı tipiktir.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Tendinit (İltihabi Tendon Hastalıkları)</h3>
              <p className="text-gray-700">
                Aşırı kullanım veya tekrarlayan hareketler sonucu tendonlarda iltihap gelişir. Patella tendiniti 
                (jumper's knee) diz önünde ağrıya neden olur.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Bursa İltihabı (Bursit)</h3>
              <p className="text-gray-700">
                Diz ekleminde bulunan sıvı keselerinin iltihabı. Genellikle travma, aşırı kullanım veya enfeksiyon 
                sonucu gelişir. Şişlik ve hassasiyet belirgindir.
              </p>
            </div>
          </section>

          {/* Section 4: Belirtiler */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Belirtiler ve Bulgular</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 text-xl">✓</span>
                <span><strong>Ağrı:</strong> Keskin, künt veya zonklayıcı karakterde, aktiviteyle artan</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 text-xl">✓</span>
                <span><strong>Şişlik:</strong> Eklemde sıvı birikmesi, ödem</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 text-xl">✓</span>
                <span><strong>Tutukluk:</strong> Özellikle sabahları veya uzun süre hareketsizlikten sonra</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 text-xl">✓</span>
                <span><strong>Kızarıklık ve ısı artışı:</strong> İnflamasyon işareti</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 text-xl">✓</span>
                <span><strong>Hareket kısıtlılığı:</strong> Tam fleksiyon veya ekstansiyon yapamama</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 text-xl">✓</span>
                <span><strong>Kilitlenme hissi:</strong> Eklemin belli açılarda takılması</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 text-xl">✓</span>
                <span><strong>Çıtırtı veya gıcırtı sesi:</strong> Hareket sırasında</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 text-xl">✓</span>
                <span><strong>Instabilite:</strong> Dizin "boşalacak" hissi</span>
              </li>
            </ul>
          </section>

          {/* Section 5: Tanı Yöntemleri */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tanı Yöntemleri</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Doğru tanı için kapsamlı bir değerlendirme gereklidir:
            </p>
            
            <div className="space-y-4">
              <div className="bg-[#E6FAF8] p-5 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">📋 Anamnez (Öykü Alma)</h3>
                <p className="text-gray-700">
                  Ağrının başlangıcı, süresi, karakteri, tetikleyen faktörler, geçmiş travmalar değerlendirilir.
                </p>
              </div>

              <div className="bg-[#E6FAF8] p-5 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">🔍 Fizik Muayene</h3>
                <p className="text-gray-700">
                  İnspeksiyon, palpasyon, hareket açıklığı, özel testler (McMurray, Lachman, varus-valgus stress) uygulanır.
                </p>
              </div>

              <div className="bg-[#E6FAF8] p-5 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">📸 Görüntüleme Yöntemleri</h3>
                <ul className="text-gray-700 space-y-1 mt-2">
                  <li>• <strong>Röntgen:</strong> Kemik yapıları, eklem aralığı, kireçlenmeler</li>
                  <li>• <strong>MR (Manyetik Rezonans):</strong> Meniskus, bağlar, kıkırdak detaylı görüntüleme</li>
                  <li>• <strong>Ultrasonografi:</strong> Yumuşak doku değerlendirmesi</li>
                  <li>• <strong>BT (Bilgisayarlı Tomografi):</strong> Karmaşık kırıklar</li>
                </ul>
              </div>

              <div className="bg-[#E6FAF8] p-5 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">🔬 Laboratuvar Testleri</h3>
                <p className="text-gray-700">
                  Enfeksiyon, gut, romatoid artrit gibi sistemik hastalıkları ekarte etmek için kan testleri, 
                  eklem sıvısı analizi yapılabilir.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Tedavi Yöntemleri */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tedavi Yöntemleri</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Konservatif (Ameliyatsız) Tedaviler</h3>
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">→</span>
                  <span><strong>İstirahat ve aktivite modifikasyonu:</strong> Ağrıyı artıran aktivitelerden kaçınma</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">→</span>
                  <span><strong>Buz uygulaması:</strong> Akut ağrı ve şişlik için 15-20 dk buz</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">→</span>
                  <span><strong>Fizik tedavi:</strong> Güçlendirme, germe, denge egzersizleri</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">→</span>
                  <span><strong>İlaç tedavisi:</strong> Ağrı kesiciler, antiinflamatuarlar (NSAİİ)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">→</span>
                  <span><strong>Enjeksiyonlar:</strong> Kortikosteroid, hyalüronik asit, PRP</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">→</span>
                  <span><strong>Ortez kullanımı:</strong> Diz destekleri, koltuk değnekleri</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">→</span>
                  <span><strong>Kilo kontrolü:</strong> Eklem üzerindeki yükü azaltma</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Cerrahi Tedaviler</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Konservatif tedaviye cevap vermeyen, yapısal hasar olan veya instabilite bulunan durumlarda cerrahi 
              müdahale gerekebilir:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Artroskopik cerrahi:</strong> Meniskus tamiri/rezeksiyonu, kıkırdak düzeltme</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Bağ rekonstrüksiyonu:</strong> ACL/PCL onarımı</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Osteotomi:</strong> Kemik kesisi ile yük dağılımını düzenleme</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Diz protezi:</strong> İleri evre artroz için eklem replasmanı</span>
              </li>
            </ul>
          </section>

          {/* Section 7: Sıkça Sorulan Sorular */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Diz ağrısı ne zaman doktora götürülmelidir?</h3>
                <p className="text-gray-700">
                  Ağrı 48 saatten uzun sürüyorsa, yük veremiyorsanız, şiddetli şişlik varsa, eklem deformitesi 
                  görüyorsanız, ateş eşlik ediyorsa veya geçmiş travma öyküsü varsa mutlaka doktora başvurmalısınız.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Diz ağrısında hangi spor dalları önerilir?</h3>
                <p className="text-gray-700">
                  Yüzme, bisiklet, eliptik egzersiz gibi düşük etkili aktiviteler diz eklemine az yük bindirdiği için 
                  tercih edilmelidir. Koşu, tenis, basketbol gibi yüksek etkili sporlardan kaçınılmalıdır.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Diz ağrısını önlemek için ne yapılabilir?</h3>
                <p className="text-gray-700">
                  Düzenli egzersiz yaparak diz çevresi kasları güçlendirin, ideal kilonuzu koruyun, ergonomik ayakkabı 
                  kullanın, ani hareketlerden kaçının, spora başlamadan önce ısınma yapın.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Diz ağrısına buz mu yoksa sıcak mı uygulanmalı?</h3>
                <p className="text-gray-700">
                  Akut yaralanmalarda (ilk 48-72 saat) şişliği azaltmak için buz tercih edilir. Kronik ağrılarda 
                  ve kas sertliğinde ise sıcak uygulama daha etkilidir. Şüphe durumunda hekiminize danışın.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8: Kaynaklar */}
          <section className="mb-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kaynaklar</h2>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-700">
              <li>
                Lohmander LS, et al. "The long-term consequence of anterior cruciate ligament and meniscus injuries: osteoarthritis" 
                Am J Sports Med. 2007.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=anterior+cruciate+ligament+meniscus+injuries+osteoarthritis" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Felson DT. "Osteoarthritis of the knee" N Engl J Med. 2006.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=osteoarthritis+knee+felson" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Bollen S. "Epidemiology of knee injuries: diagnosis and triage" Br J Sports Med. 2000.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=epidemiology+knee+injuries+diagnosis+triage" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
            </ol>
          </section>

          {/* Section 9: Internal Link - ZORUNLU! */}
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
              Diz ağrısı çok çeşitli nedenlere bağlı olarak ortaya çıkabilen, yaşam kalitesini önemli ölçüde etkileyen 
              bir sağlık sorunudur. Erken tanı ve uygun tedavi ile çoğu diz ağrısı başarılı bir şekilde yönetilebilir.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Kalıcı diz ağrısı yaşıyorsanız, mutlaka bir ortopedi uzmanına başvurarak detaylı değerlendirme yaptırmalısınız. 
              Doğru tanı ile size özgü tedavi planı oluşturularak ağrısız ve aktif bir yaşam sürdürmeniz mümkündür.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#01CAB8] to-[#01A899] rounded-xl p-8 text-center text-white mt-12">
          <h2 className="text-2xl font-bold mb-4">Diz Ağrınız İçin Uzman Değerlendirmesi</h2>
          <p className="mb-6">Diz ağrınızın nedenini öğrenmek ve en uygun tedavi planını oluşturmak için randevu alın.</p>
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
