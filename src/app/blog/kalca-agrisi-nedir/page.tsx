import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kalça Ağrısı Nedir? Nedenleri, Belirtileri ve Tedavisi | Op. Dr. Özgür Oktay Nar',
  description: 'Kalça ağrısı nedenleri, tanı yöntemleri ve tedavi seçenekleri hakkında detaylı bilgi. Ortopedi uzmanından kalça ağrısı için kapsamlı rehber.',
  keywords: 'kalça ağrısı, kalça eklem ağrısı, kalça artriti, kalça bursiti, koksartroz, kalça tedavisi',
  authors: [{ name: 'Op. Dr. Özgür Oktay Nar' }],
  openGraph: {
    title: 'Kalça Ağrısı Nedir? Nedenleri, Belirtileri ve Tedavisi',
    description: 'Kalça ağrısı nedenleri, tanı yöntemleri ve tedavi seçenekleri hakkında detaylı bilgi.',
    type: 'article',
    locale: 'tr_TR',
    url: 'https://www.ozguroktaynar.com/blog/kalca-agrisi-nedir',
    siteName: 'Op. Dr. Özgür Oktay Nar',
    images: [
      {
        url: 'https://placehold.co/1200x630/e2e8f0/475569?text=Kalca+Agrisi',
        width: 1200,
        height: 630,
        alt: 'Kalça ağrısı nedenleri ve tedavi yöntemleri',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kalça Ağrısı Nedir? Nedenleri, Belirtileri ve Tedavisi',
    description: 'Kalça ağrısı nedenleri, tanı yöntemleri ve tedavi seçenekleri hakkında detaylı bilgi.',
    images: ['https://placehold.co/1200x630/e2e8f0/475569?text=Kalca+Agrisi'],
  },
  alternates: {
    canonical: 'https://www.ozguroktaynar.com/blog/kalca-agrisi-nedir',
  },
};

export default function KalcaAgrisiPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': 'https://www.ozguroktaynar.com/blog/kalca-agrisi-nedir#webpage',
        url: 'https://www.ozguroktaynar.com/blog/kalca-agrisi-nedir',
        name: 'Kalça Ağrısı Nedir? Nedenleri, Belirtileri ve Tedavisi',
        description: 'Kalça ağrısı nedenleri, tanı yöntemleri ve tedavi seçenekleri hakkında detaylı bilgi.',
        datePublished: '2025-01-17T10:00:00+03:00',
        dateModified: '2025-01-17T10:00:00+03:00',
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
          <span className="text-gray-700">Kalça Ağrısı Nedir</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Kalça Ağrısı Nedir? Nedenleri, Belirtileri ve Tedavisi</h1>
          <div className="flex items-center text-gray-600 text-sm mb-6">
            <span>Op. Dr. Özgür Oktay Nar</span>
            <span className="mx-2">•</span>
            <time>17 Ocak 2025</time>
          </div>
          <img
            src="https://www.drozguroktaynar.com/wp-content/uploads/2025/12/kalca-agrisi.webp"
            alt="Kalça ağrısı nedenleri ve tedavi yöntemleri"
            className="w-full rounded-xl shadow-lg"
          />
        </header>

        {/* Main Content - 7 STEP ARCHITECTURE */}
        <div className="prose prose-lg max-w-none">
          
          {/* Section 1: Giriş */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Giriş</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kalça ağrısı, günlük yaşam aktivitelerini ciddi şekilde kısıtlayabilen yaygın bir şikayettir. 
              Yürüme, merdiven inip çıkma, oturma ve ayağa kalkma gibi temel hareketleri zorlaştırarak yaşam 
              kalitesini olumsuz etkileyebilir.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Kalça ağrısı her yaş grubunda görülebilir; gençlerde daha çok travma ve spor yaralanmalarına bağlıyken, 
              ileri yaşlarda dejeneratif hastalıklar ön plandadır. Ağrının kaynağının doğru belirlenmesi, etkili 
              tedavi için kritik öneme sahiptir.
            </p>
          </section>

          {/* Section 2: Nedir / Tanım */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kalça Ağrısı Nedir?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kalça ağrısı, kalça eklemi içinde veya kalça çevresindeki yumuşak dokularda hissedilen rahatsızlık hissidir. 
              Ağrı kasık bölgesinde, kalça dışında (trokanter major bölgesi), kalça arkasında (gluteal bölge) veya uyluk 
              üst kısmında lokalize olabilir.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Kalça Eklem Anatomisi</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#1AD2C4] mr-2">•</span>
                  <span><strong>Asetabulum:</strong> Pelvis kemiğindeki kalça eklem çukuru</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1AD2C4] mr-2">•</span>
                  <span><strong>Femoral baş:</strong> Uyluk kemiğinin yuvarlanmış üst kısmı</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1AD2C4] mr-2">•</span>
                  <span><strong>Artiküler kıkırdak:</strong> Eklem yüzeylerini kaplayan pürüzsüz doku</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1AD2C4] mr-2">•</span>
                  <span><strong>Labrum:</strong> Eklem çukurunu derinleştiren fibrokartilaj halka</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1AD2C4] mr-2">•</span>
                  <span><strong>Eklem kapsülü ve bağlar:</strong> Stabilite sağlayan yapılar</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1AD2C4] mr-2">•</span>
                  <span><strong>Bursalar:</strong> Sürtünmeyi azaltan sıvı keseleri</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1AD2C4] mr-2">•</span>
                  <span><strong>Kaslar ve tendonlar:</strong> Hareket ve destek sağlayan yapılar</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Kalça eklemi, vücudun en büyük yük taşıyan eklemlerinden biridir. Ball-and-socket (küre-yuva) tipi bir 
              eklem olup, geniş hareket açıklığı sağlar ancak bu nedenle aşınmaya ve yaralanmalara karşı duyarlıdır.
            </p>
          </section>

          {/* Section 3: Nedenler */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kalça Ağrısının Başlıca Nedenleri</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Koksartroz (Kalça Osteoartriti)</h3>
              <p className="text-gray-700 mb-2">
                Kalça eklem kıkırdağının aşınması ve dejenerasyonu. En sık kalça ağrısı nedenidir.
              </p>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• <strong>Belirtiler:</strong> Kasık ağrısı, sabah tutukluğu, hareket kısıtlılığı</li>
                <li>• <strong>Risk faktörleri:</strong> İleri yaş, obezite, genetik yatkınlık, travma öyküsü</li>
                <li>• <strong>İlerleme:</strong> Yavaş progresif, yıllar içinde ilerler</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Trokanterik Bursit (Greater Trochanter Pain Syndrome)</h3>
              <p className="text-gray-700 mb-2">
                Kalça dışındaki bursa iltihabı. Özellikle kadınlarda ve orta yaş grubunda sık görülür.
              </p>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• <strong>Belirtiler:</strong> Kalça dışında ağrı, yan yatarken artış, hassasiyet</li>
                <li>• <strong>Nedenler:</strong> Aşırı kullanım, travma, kas dengesizliği, bacak uzunluk farkı</li>
                <li>• <strong>Ayırıcı özellik:</strong> Ağrı kalça eklemi içinde değil, dışındadır</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Femoro-Asetabular İmpingement (FAI)</h3>
              <p className="text-gray-700 mb-2">
                Femur başı ile asetabulum arasında anormal temas, genç ve aktif bireylerde erken artroz nedeni.
              </p>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• <strong>CAM tipi:</strong> Femur başı deformitesi</li>
                <li>• <strong>Pincer tipi:</strong> Asetabulum aşırı örtüsü</li>
                <li>• <strong>Mikst tip:</strong> Her ikisinin kombinasyonu</li>
                <li>• <strong>Belirtiler:</strong> Kasık ağrısı, C-sign (kasığı işaret ederek ağrı tarifi), hareket sırasında kilitlenme</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Labral Yırtık</h3>
              <p className="text-gray-700 mb-2">
                Asetabular labrumun yırtılması, genellikle FAI veya travma sonucu.
              </p>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• <strong>Belirtiler:</strong> Keskin kasık ağrısı, takılma hissi, mekanik semptomlar</li>
                <li>• <strong>Tetikleyiciler:</strong> Ani dönme, derin çökme, spor aktiviteleri</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Avasküler Nekroz (Osteonekroz)</h3>
              <p className="text-gray-700 mb-2">
                Femur başına kan akımının kesilmesi sonucu kemik ölümü. Ciddi bir durumdur.
              </p>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• <strong>Risk faktörleri:</strong> Kortikosteroid kullanımı, alkol, travma, orak hücre hastalığı</li>
                <li>• <strong>Belirtiler:</strong> Ani başlangıçlı kasık ağrısı, gece ağrısı, yük vermede zorluk</li>
                <li>• <strong>Prognoz:</strong> Erken tanı kritik, geç evrede kalça protezi gerekebilir</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Kas ve Tendon Yaralanmaları</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• <strong>Hip flexor strain:</strong> İliopsoas kası germesi/yırtığı</li>
                <li>• <strong>Hamstring yaralanması:</strong> Uyluk arkası kas yırtığı</li>
                <li>• <strong>Gluteal tendinopati:</strong> Kalça kası tendon iltihabı</li>
                <li>• <strong>Snapping hip:</strong> Kalça çıtırtısı, tendonların kemik çıkıntılar üzerinden kayması</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">7. Yansıyan Ağrılar</h3>
              <p className="text-gray-700">
                Bel fıtığı (lumbar disk hernisi), sakroiliak eklem disfonksiyonu, kasık fıtığı gibi durumlar kalça ağrısı 
                olarak algılanabilir. Detaylı muayene ile ayırt edilmelidir.
              </p>
            </div>
          </section>

          {/* Section 4: Belirtiler */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Belirtiler ve Klinik Bulgular</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 text-xl">✓</span>
                <span><strong>Ağrı lokalizasyonu:</strong> Kasık, kalça dışı, gluteal bölge veya uyluk</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 text-xl">✓</span>
                <span><strong>Ağrı karakteri:</strong> Künt, keskin, zonklayıcı veya yanıcı</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 text-xl">✓</span>
                <span><strong>Aktiviteyle ilişki:</strong> Yürüme, merdiven, oturma-kalkma sırasında artış</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 text-xl">✓</span>
                <span><strong>Sabah tutukluğu:</strong> Özellikle osteoartritte belirgin</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 text-xl">✓</span>
                <span><strong>Topallama:</strong> Ağrıdan kaçınmak için antaljik yürüyüş</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 text-xl">✓</span>
                <span><strong>Hareket kısıtlılığı:</strong> İç rotasyon ve abduksiyon sıklıkla kısıtlıdır</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 text-xl">✓</span>
                <span><strong>Mekanik semptomlar:</strong> Kilitlenme, takılma, çıtırtı</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 text-xl">✓</span>
                <span><strong>Gece ağrısı:</strong> Avasküler nekroz, tümör gibi ciddi durumlarda</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 text-xl">✓</span>
                <span><strong>Ayakkabı giyme zorluğu:</strong> İleri artroz belirtisi</span>
              </li>
            </ul>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mt-6">
              <h3 className="text-lg font-semibold text-red-900 mb-2">⚠️ Acil Durum Belirtileri</h3>
              <p className="text-red-800 mb-2">Aşağıdaki durumlardan biri varsa derhal doktora başvurun:</p>
              <ul className="text-red-800 space-y-1 text-sm">
                <li>• Ani başlayan şiddetli ağrı (kırık veya dislokasyon şüphesi)</li>
                <li>• Yük verememe, bacağı hareket ettirememe</li>
                <li>• Ateş, kızarıklık, şişlik (enfeksiyon şüphesi)</li>
                <li>• Travma sonrası deformite</li>
                <li>• Pelvik bölgede kitle hissedilmesi</li>
              </ul>
            </div>
          </section>

          {/* Section 5: Tanı Yöntemleri */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tanı Yöntemleri</h2>
            
            <div className="space-y-4">
              <div className="bg-[#E6FAF8] p-5 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">📋 Anamnez (Öykü)</h3>
                <p className="text-gray-700">
                  Ağrının başlangıcı, süresi, lokalizasyonu, tetikleyici faktörler, travma öyküsü, sistemik hastalıklar değerlendirilir.
                </p>
              </div>

              <div className="bg-[#E6FAF8] p-5 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">🔍 Fizik Muayene</h3>
                <ul className="text-gray-700 space-y-2">
                  <li><strong>Gözlem:</strong> Yürüyüş analizi, postür, bacak uzunluk eşitsizliği</li>
                  <li><strong>Palpasyon:</strong> Hassasiyet noktaları (kasık, trokanter, gluteal bölge)</li>
                  <li><strong>Eklem hareket açıklığı:</strong> Fleksiyon, ekstansiyon, abduksiyon, adduksiyon, rotasyonlar</li>
                  <li><strong>Özel testler:</strong> FABER/Patrick testi, FADIR testi, Trendelenburg testi, log roll testi</li>
                  <li><strong>Nörovasküler muayene:</strong> Periferik nabızlar, duyu ve motor fonksiyonlar</li>
                </ul>
              </div>

              <div className="bg-[#E6FAF8] p-5 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">📸 Görüntüleme Yöntemleri</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-800">Röntgen (Direkt Grafi)</h4>
                    <p className="text-gray-700 text-sm">
                      İlk tercih edilen görüntüleme. AP pelvis ve lateral kalça grafisi. Eklem aralığı daralması, 
                      osteofitler, kistler, kemik deformiteleri değerlendirilir.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">MR (Manyetik Rezonans)</h4>
                    <p className="text-gray-700 text-sm">
                      Yumuşak doku değerlendirmesi için altın standart. Labral yırtık, kıkırdak lezyonları, avasküler nekroz 
                      (erken evre), tendon yaralanmaları, bursa iltihabı tespit edilir.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">BT (Bilgisayarlı Tomografi)</h4>
                    <p className="text-gray-700 text-sm">
                      Kemik detayları için üstün. FAI değerlendirmesi, kırık analizi, cerrahi planlama.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Ultrasonografi</h4>
                    <p className="text-gray-700 text-sm">
                      Dinamik değerlendirme, enjeksiyon kılavuzluğu, trokanterik bursit tanısı.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#E6FAF8] p-5 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">🔬 Laboratuvar Testleri</h3>
                <p className="text-gray-700">
                  Enfeksiyon, inflamatuar artrit, metabolik hastalıklar için kan testleri (CRP, ESR, RF, ürik asit vb.)
                </p>
              </div>

              <div className="bg-[#E6FAF8] p-5 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">💉 Diagnostik Enjeksiyon</h3>
                <p className="text-gray-700">
                  Şüpheli ağrı kaynağına lokal anestezik enjekte edilerek, ağrıda azalma olup olmadığı test edilir.
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
                  <span><strong>Aktivite modifikasyonu:</strong> Ağrıyı artıran hareketlerden kaçınma</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">→</span>
                  <span><strong>Fizik tedavi:</strong> Güçlendirme egzersizleri, germe, mobilizasyon</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">→</span>
                  <span><strong>İlaç tedavisi:</strong> NSAİİ (ağrı kesici ve antiinflamatuar), analjezikler</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">→</span>
                  <span><strong>Kilo kaybı:</strong> Obez hastalarda eklem yükünü azaltma</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">→</span>
                  <span><strong>Yürüme yardımcıları:</strong> Baston, koltuk değneği kullanımı</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">→</span>
                  <span><strong>Soğuk-sıcak uygulama:</strong> Akut ağrıda buz, kronik ağrıda sıcak</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Enjeksiyon Tedavileri</h3>
            <div className="bg-[#E6FAF8] p-6 rounded-lg mb-6">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#01CAB8] mr-2">•</span>
                  <span><strong>Kortikosteroid enjeksiyonu:</strong> Bursa, eklem içi veya tendon çevresine</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#01CAB8] mr-2">•</span>
                  <span><strong>Hyalüronik asit:</strong> Eklem içi, kıkırdak koruması ve kayganlaştırma</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#01CAB8] mr-2">•</span>
                  <span><strong>PRP (Platelet-Rich Plasma):</strong> Rejeneratif tedavi</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Cerrahi Tedaviler</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Konservatif tedaviye yanıt alınamadığında veya yapısal patoloji varlığında cerrahi düşünülür:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span><strong>Kalça artroskopisi:</strong> FAI, labral yırtık, kıkırdak lezyonları için minimal invaziv cerrahi</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span><strong>Osteotomi:</strong> Kemik kesisi ile eklem mekaniğini düzeltme</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span><strong>Kalça protezi (Total Hip Replacement):</strong> İleri evre osteoartrit, avasküler nekroz için eklem replasmanı</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span><strong>Core dekompresyon:</strong> Erken evre avasküler nekrozda femur başına kan akımını artırma</span>
              </li>
            </ul>
          </section>

          {/* Section 7: Sıkça Sorulan Sorular */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Kalça ağrısı ile bel ağrısı nasıl ayırt edilir?</h3>
                <p className="text-gray-700">
                  Kalça ağrısı genellikle kasık ve uyluk üst kısmında hissedilir, hareketle artar. Bel ağrısı sırt alt 
                  kısmında lokalize olup bacağa yayılabilir (siyatik). Fizik muayene ile ayırım yapılır.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Kalça ağrısında hangi egzersizler yapılmalı?</h3>
                <p className="text-gray-700">
                  Gluteal kas güçlendirme, core stabilizasyon, hip flexor germe, kuadriseps egzersizleri faydalıdır. 
                  Yüzme ve su içi egzersizler düşük yükte çalışma imkanı verir. Egzersiz programı fizyoterapist gözetiminde 
                  bireyselleştirilmelidir.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Kalça artriti önlenebilir mi?</h3>
                <p className="text-gray-700">
                  Genetik yatkınlık değiştirilemez, ancak kilo kontrolü, düzenli egzersiz, travmalardan korunma, 
                  erken evre yapısal sorunların (FAI gibi) tedavisi ile artrit gelişme riski azaltılabilir.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Kalça protezi ne zaman gerekir?</h3>
                <p className="text-gray-700">
                  İleri evre kalça artriti, avasküler nekroz, kırık sekelinde, konservatif tedavilere rağmen günlük 
                  aktiviteleri önemli ölçüde kısıtlayan ağrı varlığında kalça protezi endikasyonu oluşur.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8: Kaynaklar */}
          <section className="mb-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kaynaklar</h2>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-700">
              <li>
                Murphy LB, et al. "Lifetime risk of symptomatic hip osteoarthritis" Arthritis Rheumatol. 2010.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=lifetime+risk+hip+osteoarthritis" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Ganz R, et al. "Femoroacetabular impingement: a cause for osteoarthritis of the hip" 
                Clin Orthop Relat Res. 2003.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=femoroacetabular+impingement+ganz+2003" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Lespasio MJ, et al. "Hip Osteoarthritis: A Primer" Perm J. 2017.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=hip+osteoarthritis+primer" 
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
              Kalça ağrısı çok çeşitli nedenlere bağlı olarak ortaya çıkabilir. Doğru tanı ve uygun tedavi ile 
              çoğu hastada başarılı sonuçlar elde edilir. Erken tanı, özellikle gençlerde ileri evre artroz gelişimini 
              önleyebilir.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Kalıcı kalça ağrısı yaşıyorsanız veya aktiviteleriniz kısıtlanıyorsa, mutlaka bir ortopedi uzmanına başvurarak 
              detaylı değerlendirme yaptırmalısınız. Bireyselleştirilmiş tedavi planı ile ağrısız ve aktif bir yaşam sürdürmeniz 
              mümkündür.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#01CAB8] to-[#01A899] rounded-xl p-8 text-center text-white mt-12">
          <h2 className="text-2xl font-bold mb-4">Kalça Ağrınız İçin Uzman Değerlendirmesi</h2>
          <p className="mb-6">Kalça ağrınızın nedenini öğrenmek ve en uygun tedavi planını oluşturmak için randevu alın.</p>
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
