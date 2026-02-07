import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kalça Protezi Nedir? Ameliyatı Nasıl Yapılır? | Op. Dr. Özgür Oktay Nar',
  description: 'Kalça protezi (total kalça replasmanı) nedir, kimler adayıdır, ameliyat süreci ve iyileşme dönemi hakkında kapsamlı rehber.',
  keywords: 'kalça protezi, total kalça replasmanı, kalça protezi ameliyatı, hip replacement, kalça artriti tedavisi',
  authors: [{ name: 'Op. Dr. Özgür Oktay Nar' }],
  openGraph: {
    title: 'Kalça Protezi Nedir? Ameliyatı Nasıl Yapılır?',
    description: 'Kalça protezi (total kalça replasmanı) nedir, kimler adayıdır, ameliyat süreci ve iyileşme dönemi hakkında kapsamlı rehber.',
    type: 'article',
    locale: 'tr_TR',
    url: 'https://www.ozguroktaynar.com/blog/kalca-protezi-nedir-ameliyati-nasil-yapilir',
    siteName: 'Op. Dr. Özgür Oktay Nar',
    images: [
      {
        url: 'https://placehold.co/1200x630/e2e8f0/475569?text=Kalca+Protezi',
        width: 1200,
        height: 630,
        alt: 'Kalça protezi ameliyatı ve iyileşme süreci',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kalça Protezi Nedir? Ameliyatı Nasıl Yapılır?',
    description: 'Kalça protezi (total kalça replasmanı) nedir, kimler adayıdır, ameliyat süreci ve iyileşme dönemi hakkında kapsamlı rehber.',
    images: ['https://placehold.co/1200x630/e2e8f0/475569?text=Kalca+Protezi'],
  },
  alternates: {
    canonical: 'https://www.ozguroktaynar.com/blog/kalca-protezi-nedir-ameliyati-nasil-yapilir',
  },
};

export default function KalcaProteziPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': 'https://www.ozguroktaynar.com/blog/kalca-protezi-nedir-ameliyati-nasil-yapilir#webpage',
        url: 'https://www.ozguroktaynar.com/blog/kalca-protezi-nedir-ameliyati-nasil-yapilir',
        name: 'Kalça Protezi Nedir? Ameliyatı Nasıl Yapılır?',
        description: 'Kalça protezi nedir, kimler adayıdır, ameliyat süreci ve iyileşme dönemi hakkında kapsamlı rehber.',
        datePublished: '2025-01-19T10:00:00+03:00',
        dateModified: '2025-01-19T10:00:00+03:00',
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
          <span className="text-gray-700">Kalça Protezi Nedir - Ameliyatı Nasıl Yapılır</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Kalça Protezi Nedir? Ameliyatı Nasıl Yapılır?</h1>
          <div className="flex items-center text-gray-600 text-sm mb-6">
            <span>Op. Dr. Özgür Oktay Nar</span>
            <span className="mx-2">•</span>
            <time>19 Ocak 2025</time>
          </div>
          <img
            src="https://www.drozguroktaynar.com/wp-content/uploads/2025/11/Kalca-Protezi.webp"
            alt="Kalça protezi ameliyatı ve iyileşme süreci"
            className="w-full rounded-xl shadow-lg"
          />
        </header>

        {/* Main Content - 7 STEP ARCHITECTURE */}
        <div className="prose prose-lg max-w-none">
          
          {/* Section 1: Giriş */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Giriş</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kalça protezi (total hip replacement / total hip arthroplasty), hasarlı veya artritik kalça ekleminin 
              yapay bir eklem ile değiştirildiği cerrahi bir işlemdir. Modern tıbbın en başarılı operasyonlarından biri 
              olarak kabul edilen kalça protezi, milyonlarca insanın ağrısız ve aktif bir yaşam sürdürmesini sağlamıştır.
            </p>
            <p className="text-gray-700 leading-relaxed">
              İlk modern kalça protezi 1960'lı yıllarda Sir John Charnley tarafından geliştirilmiştir. O günden bu yana 
              implant tasarımları, cerrahi teknikler ve materyaller sürekli gelişerek, ameliyat başarı oranları %95'in 
              üzerine çıkmıştır.
            </p>
          </section>

          {/* Section 2: Nedir / Tanım */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kalça Protezi Nedir?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kalça protezi ameliyatında, hasarlı femur başı (uyluk kemiği yuvarlanmış kısmı) ve asetabulum 
              (kalça eklem çukuru) çıkarılarak yerine metal, seramik veya polietilen (yüksek yoğunluklu plastik) 
              materyallerden yapılmış protez bileşenler yerleştirilir.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Protez Bileşenleri</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#1AD2C4] mr-2">1.</span>
                  <div>
                    <strong>Asetabular (Kalça Çukuru) Bileşeni:</strong>
                    <p className="text-gray-600 text-sm mt-1">
                      Pelvis kemiğine yerleştirilen metal kase ve içindeki plastik (polietilen) veya seramik liner (astar).
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1AD2C4] mr-2">2.</span>
                  <div>
                    <strong>Femoral (Uyluk Kemiği) Bileşeni:</strong>
                    <p className="text-gray-600 text-sm mt-1">
                      Femur içine yerleştirilen metal sap (stem).
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1AD2C4] mr-2">3.</span>
                  <div>
                    <strong>Femoral Baş:</strong>
                    <p className="text-gray-600 text-sm mt-1">
                      Sap üzerine takılan metal veya seramik yuvarlanmış baş.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1AD2C4] mr-2">4.</span>
                  <div>
                    <strong>Liner (Astar):</strong>
                    <p className="text-gray-600 text-sm mt-1">
                      Asetabular komponentin içindeki kaygan yüzey (polietilen, seramik veya metal).
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Protez Tipleri</h3>
            <div className="space-y-4">
              <div className="bg-[#E6FAF8] p-5 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">1. Çimentolu Protez</h4>
                <p className="text-gray-700">
                  Protez bileşenleri medikal kemik çimentosu (polimetil metakrilat - PMMA) ile kemiğe sabitlenir. 
                  Yaşlı hastalar ve düşük kemik kalitesinde tercih edilir.
                </p>
              </div>

              <div className="bg-[#E6FAF8] p-5 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">2. Çimentosuz Protez</h4>
                <p className="text-gray-700">
                  Protez yüzeyi pürüzlü (porous) olup, kemik doğrudan proteze tutunarak (osseointegrasyon) sabitlenir. 
                  Genç ve aktif hastalarda, iyi kemik kalitesinde tercih edilir.
                </p>
              </div>

              <div className="bg-[#E6FAF8] p-5 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">3. Hibrit Protez</h4>
                <p className="text-gray-700">
                  Asetabular komponent çimentosuz, femoral komponent çimentolu. Orta yaş grubu için uygun olabilir.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Kimler Aday */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kalça Protezi Kimler İçin Uygundur?</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Başlıca Endikasyonlar</h3>
            <div className="space-y-4">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">1. İleri Evre Osteoartrit (Koksartroz)</h4>
                <p className="text-gray-700">
                  En sık neden. Eklem kıkırdağının tamamen aşınması, şiddetli ağrı ve hareket kısıtlılığı.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">2. Avasküler Nekroz (Osteonekroz)</h4>
                <p className="text-gray-700">
                  Femur başının kan akımı bozukluğu sonucu ölümü. İleri evrede protez gerekir.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">3. Romatoid Artrit ve Diğer İnflamatuar Artritler</h4>
                <p className="text-gray-700">
                  Kronik iltihaplı eklem hastalıkları sonucu eklem harabiyeti.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">4. Kalça Kırıkları</h4>
                <p className="text-gray-700">
                  Özellikle yaşlı hastalarda femur boyun kırıkları. Kırık onarımı yerine protez tercih edilebilir.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">5. Çocukluk Kalça Hastalıkları Sekeli</h4>
                <p className="text-gray-700">
                  Displastik kalça, Perthes hastalığı sekeli, epifiz kayması gibi durumlar sonrası artrit.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">6. Tümörler</h4>
                <p className="text-gray-700">
                  Kalça bölgesi tümörleri nedeniyle geniş rezeksiyon sonrası rekonstrüksiyon.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mt-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">⚠️ Genel Kriterler</h3>
              <ul className="text-yellow-800 space-y-1">
                <li>• Konservatif tedavilere (ilaç, fizik tedavi, enjeksiyon) rağmen devam eden ağrı</li>
                <li>• Günlük aktivitelerde ciddi kısıtlama</li>
                <li>• Gece ağrıları, uyku bozukluğu</li>
                <li>• Röntgen/MR'da ileri evre eklem hasarı</li>
                <li>• Yaşam kalitesinde belirgin düşüş</li>
              </ul>
            </div>
          </section>

          {/* Section 4: Ameliyat Süreci */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ameliyat Süreci</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Ameliyat Öncesi Hazırlık</h3>
            <div className="bg-purple-50 p-6 rounded-lg mb-6">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">→</span>
                  <span><strong>Preoperatif değerlendirme:</strong> Kan testleri, EKG, akciğer grafisi, anestezi konsültasyonu</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">→</span>
                  <span><strong>Kan hazırlığı:</strong> Gerekirse kan rezervasyonu</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">→</span>
                  <span><strong>İlaç düzenlemesi:</strong> Kan sulandırıcıların kesilmesi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">→</span>
                  <span><strong>Diş kontrolü:</strong> Enfeksiyon kaynağı olabilecek diş problemleri tedavi edilmeli</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">→</span>
                  <span><strong>Kilo kaybı:</strong> Obez hastalarda ameliyat öncesi kilo vermek önerilir</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">→</span>
                  <span><strong>Ev hazırlığı:</strong> Yürüteç, yükseltilmiş tuvalet oturağı temini</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Ameliyat Adımları</h3>
            <div className="space-y-4">
              <div className="bg-[#E6FAF8] p-5 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">1. Anestezi</h4>
                <p className="text-gray-700">
                  <strong>Genel anestezi</strong> (hasta uyutulur) veya <strong>spinal/epidural anestezi</strong> 
                  (belden aşağı uyuşturulur). Anestezi türü hastanın durumuna göre belirlenir.
                </p>
              </div>

              <div className="bg-[#E6FAF8] p-5 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">2. Pozisyonlama</h4>
                <p className="text-gray-700">
                  Hasta lateral dekübit (yan yatar) veya supine (sırt üstü) pozisyonda ameliyat masasına yerleştirilir.
                </p>
              </div>

              <div className="bg-[#E6FAF8] p-5 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">3. Cerrahi Yaklaşım</h4>
                <p className="text-gray-700 mb-2">Birkaç farklı yaklaşım vardır:</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <strong>Posterior (arka) yaklaşım:</strong> En yaygın, gluteal kaslar arasından</li>
                  <li>• <strong>Anterolateral yaklaşım:</strong> Yan önden, tensor fasya lata arasından</li>
                  <li>• <strong>Direct anterior yaklaşım:</strong> Önden, kas kesilmeden (minimal invaziv)</li>
                </ul>
              </div>

              <div className="bg-[#E6FAF8] p-5 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">4. Eklem Açılması</h4>
                <p className="text-gray-700">
                  Cilt ve yumuşak dokular açılır, eklem kapsülü kesilir, kalça çıkarılır (disloke edilir).
                </p>
              </div>

              <div className="bg-[#E6FAF8] p-5 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">5. Femur Başı Rezeksiyonu</h4>
                <p className="text-gray-700">
                  Hasarlı femur başı özel testere ile kesilir ve çıkarılır.
                </p>
              </div>

              <div className="bg-[#E6FAF8] p-5 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">6. Asetabulum Hazırlığı</h4>
                <p className="text-gray-700">
                  Kalça çukuru özel frezeler (reamer) ile protezin tam oturacağı boyuta getirilir. 
                  Hasarlı kıkırdak temizlenir.
                </p>
              </div>

              <div className="bg-[#E6FAF8] p-5 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">7. Asetabular Komponentin Yerleştirilmesi</h4>
                <p className="text-gray-700">
                  Metal kase press-fit (sıkı geçirme) veya çimento ile yerleştirilir. İçine polietilen veya seramik liner yerleştirilir.
                </p>
              </div>

              <div className="bg-[#E6FAF8] p-5 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">8. Femur Kanalı Hazırlığı</h4>
                <p className="text-gray-700">
                  Femur medüller kanalı özel rasp'lar (törpüler) ile genişletilir, stem için yatak hazırlanır.
                </p>
              </div>

              <div className="bg-[#E6FAF8] p-5 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">9. Femoral Komponentin Yerleştirilmesi</h4>
                <p className="text-gray-700">
                  Metal stem çimentolu veya çimentosuz olarak femur içine yerleştirilir. Üzerine femoral baş takılır.
                </p>
              </div>

              <div className="bg-[#E6FAF8] p-5 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">10. Trial (Deneme) ve Redüksiyon</h4>
                <p className="text-gray-700">
                  Deneme komponentler ile bacak uzunluğu, stabilite, hareket açıklığı test edilir. 
                  Uygunsa gerçek komponentler yerleştirilir ve kalça yerine konur (redüksiyon).
                </p>
              </div>

              <div className="bg-[#E6FAF8] p-5 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">11. Stabilite Kontrolü</h4>
                <p className="text-gray-700">
                  Eklem stabilitesi, hareket açıklığı, bacak uzunluğu kontrol edilir. Gerekirse revizyonlar yapılır.
                </p>
              </div>

              <div className="bg-[#E6FAF8] p-5 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">12. Kapanış</h4>
                <p className="text-gray-700">
                  Eklem kapsülü tamir edilir, kaslar ve yumuşak dokular katlar halinde dikilir. 
                  Dren yerleştirilir (kan sıvısı drenajı için). Cilt kapatılır, steril pansuman yapılır.
                </p>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">⏱️ Ameliyat Süresi</h3>
              <p className="text-gray-700">
                Standart primer (ilk kez) kalça protezi ameliyatı <strong>1.5-2.5 saat</strong> sürer. 
                Revizyon protezleri veya karmaşık vakalar daha uzun sürebilir.
              </p>
            </div>
          </section>

          {/* Section 5: Ameliyat Sonrası ve İyileşme */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ameliyat Sonrası Süreç ve İyileşme</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Hastanede (İlk 2-4 Gün)</h3>
            <div className="bg-yellow-50 p-6 rounded-lg mb-6">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">→</span>
                  <span>Ağrı kontrolü (IV, epidural veya oral analjezikler)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">→</span>
                  <span>Tromboz profilaksisi (kan sulandırıcı enjeksiyonlar, kompresyon çorapları)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">→</span>
                  <span>Dren çıkarılması (24-48 saat içinde)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">→</span>
                  <span>Erken mobilizasyon: İlk gün yatakta oturma, 2. gün yürüteç ile ayağa kalkma</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">→</span>
                  <span>Fizik tedavi başlanması</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">→</span>
                  <span>Kontrol röntgeni</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Evde İyileşme (6-12 Hafta)</h3>
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>İlk 2 hafta:</strong> Yürüteç veya koltuk değneği, kısmi yük verme</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>2-6 hafta:</strong> Tam yük verme, baston ile yürüme, fizik tedavi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>6-12 hafta:</strong> Bastondan bağımsız yürüme, günlük aktivitelere dönüş</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Yara bakımı:</strong> Dikişler 10-14. günde alınır</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>İlaçlar:</strong> Ağrı kesici, antikoagülan (6 hafta), antibiyotik profilaksisi (diş işlemleri için)</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Kalça Protezi Önlemleri (İlk 6-12 Hafta)</h3>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
              <h4 className="text-lg font-semibold text-red-900 mb-3">❌ YAPILMAMASI GEREKENLER (Çıkık Riski!)</h4>
              <ul className="text-red-800 space-y-1">
                <li>• <strong>Aşırı fleksiyon:</strong> Kalçayı 90°'den fazla bükmemeye (derin oturma, eğilme)</li>
                <li>• <strong>Adduksiyon:</strong> Bacakları çaprazlama</li>
                <li>• <strong>İç rotasyon:</strong> Ameliyatlı bacağın içe dönmesi</li>
                <li>• <strong>Düşük oturma:</strong> Alçak koltuk, tuvalet kullanma</li>
                <li>• <strong>Yatak içinde dönme:</strong> Ani hareketler</li>
              </ul>
              <p className="text-red-800 mt-3 text-sm">
                <strong>Not:</strong> Özellikle posterior yaklaşımda bu önlemler kritiktir. Anterior yaklaşımda kısıtlamalar daha azdır.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Uzun Dönem Beklentiler</h3>
            <div className="bg-[#E6FAF8] p-6 rounded-lg">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#01CAB8] mr-2">→</span>
                  <span><strong>3 ay:</strong> Günlük aktivitelerin çoğunu yapabilme, ofis işine dönüş</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#01CAB8] mr-2">→</span>
                  <span><strong>6 ay:</strong> Tam iyileşme, hafif sporlar (yüzme, golf, bisiklet)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#01CAB8] mr-2">→</span>
                  <span><strong>1 yıl:</strong> Maksimum fonksiyon kazanımı</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#01CAB8] mr-2">→</span>
                  <span><strong>Protez ömrü:</strong> Modern protezler 15-25 yıl veya daha uzun süre dayanır (%90-95 survival rate 15 yılda)</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 6: Riskler ve Komplikasyonlar */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Riskler ve Komplikasyonlar</h2>
            
            <p className="text-gray-700 mb-4">
              Kalça protezi genel olarak güvenli bir ameliyattır, ancak her cerrahi girişimde olduğu gibi riskler vardır:
            </p>

            <div className="space-y-4">
              <div className="bg-red-50 p-5 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">1. Enfeksiyon (%0.5-2)</h4>
                <p className="text-red-800 text-sm">
                  Yüzeyel (cilt) veya derin (protez çevresi). Erken enfeksiyon antibiyotik ile tedavi edilebilir, 
                  geç enfeksiyon protez revizyonu gerektirebilir.
                </p>
              </div>

              <div className="bg-red-50 p-5 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">2. Çıkık (Dislokasyon) (%2-5)</h4>
                <p className="text-red-800 text-sm">
                  İlk 3 ay en riskli dönem. Kapalı redüksiyon (anestezi altında yerine koyma) veya cerrahi gerekebilir. 
                  Tekrarlayan çıkıklarda revizyon ameliyatı yapılır.
                </p>
              </div>

              <div className="bg-red-50 p-5 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">3. Bacak Uzunluk Farkı</h4>
                <p className="text-red-800 text-sm">
                  Genellikle küçük ({'<'}1 cm) ve semptomatik değildir. Büyük farklarda topuk takviyesi kullanılır.
                </p>
              </div>

              <div className="bg-red-50 p-5 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">4. Derin Ven Trombozu (DVT) ve Pulmoner Emboli (%1-3)</h4>
                <p className="text-red-800 text-sm">
                  Kan pıhtısı oluşumu. Antikoagülan ilaçlar ve erken mobilizasyon ile önlenir.
                </p>
              </div>

              <div className="bg-red-50 p-5 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">5. Sinir veya Damar Yaralanması ({'<'}1%)</h4>
                <p className="text-red-800 text-sm">
                  Siyatik sinir yaralanması (ayak düşmesi), femoral arter/ven yaralanması.
                </p>
              </div>

              <div className="bg-red-50 p-5 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">6. Heterotopik Ossifikasyon</h4>
                <p className="text-red-800 text-sm">
                  Eklem çevresinde kemikleşme. Hareket kısıtlılığına neden olabilir. Profilaksi: NSAİİ veya radyoterapi.
                </p>
              </div>

              <div className="bg-red-50 p-5 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">7. Protez Gevşemesi (Aseptik Loosening)</h4>
                <p className="text-red-800 text-sm">
                  Uzun dönemde aşınma partikülleri sonucu protez-kemik arayüzünde gevşeme. Revizyon ameliyatı gerekir.
                </p>
              </div>

              <div className="bg-red-50 p-5 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">8. Kırık</h4>
                <p className="text-gray-700 text-sm">
                  Ameliyat sırasında (intraoperatif) veya düşme sonrası (periprostetik). Tespit veya revizyon gerekir.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Sıkça Sorulan Sorular */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Kalça protezi ağrıyı tamamen geçirir mi?</h3>
                <p className="text-gray-700">
                  Hastaların %90-95'inde ağrı tamamen veya büyük ölçüde kaybolur. Az sayıda hastada hafif ağrı devam edebilir 
                  (özellikle gevşeme, enfeksiyon, bursit gibi komplikasyonlarda).
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Kalça protezi ile spor yapabilir miyim?</h3>
                <p className="text-gray-700">
                  Düşük etkili sporlar (yüzme, bisiklet, golf, yürüyüş) önerilir. Tenis, kayak gibi orta etkili sporlar 
                  dikkatli yapılabilir. Koşu, futbol, basketbol gibi yüksek etkili sporlar genellikle önerilmez (protez ömrünü kısaltabilir).
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Havaalanı dedektörlerinde alarm verir mi?</h3>
                <p className="text-gray-700">
                  Evet, metal dedektörlerinde alarm verebilir. Doktorunuzdan protez kartı alıp yanınızda taşımalısınız.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">MR çektir ebilir miyim?</h3>
                <p className="text-gray-700">
                  Modern protezler genellikle MR uyumludur. Ancak protez tipinizi radyoloji uzmanına bildirmelisiniz.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Protez ne zaman değiştirilir?</h3>
                <p className="text-gray-700">
                  Gevşeme, aşınma, enfeksiyon, çıkık, kırık gibi durumlar revizyon (yenileme) ameliyatı gerektirebilir. 
                  Modern protezler 15-25 yıl veya daha uzun dayanır.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8: Kaynaklar */}
          <section className="mb-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kaynaklar</h2>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-700">
              <li>
                Learmonth ID, et al. "The operation of the century: total hip replacement" Lancet. 2007.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=operation+century+total+hip+replacement+lancet" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Pivec R, et al. "Hip arthroplasty" Lancet. 2012.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=hip+arthroplasty+lancet+2012" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Evans JT, et al. "How long does a hip replacement last? A systematic review and meta-analysis of case series and national registry reports with more than 15 years of follow-up" Lancet. 2019.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=hip+replacement+how+long+systematic+review+lancet" 
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
              Kalça protezi, modern ortopedinin en başarılı cerrahilerinden biridir. İleri evre kalça artritinde 
              ağrıyı ortadan kaldırır ve hastalar ağrısız, aktif bir yaşam sürdürebilir.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Kalça ağrınız günlük aktivitelerinizi kısıtlıyorsa ve konservatif tedavilere yanıt alamıyorsanız, 
              bir ortopedi uzmanına başvurarak kalça protezi için değerlendirme yaptırmanız önerilir. Uygun hasta 
              seçimi ve deneyimli cerrah ile uzun ömürlü, başarılı sonuçlar elde edilir.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#01CAB8] to-[#01A899] rounded-xl p-8 text-center text-white mt-12">
          <h2 className="text-2xl font-bold mb-4">Kalça Protezi Hakkında Detaylı Bilgi</h2>
          <p className="mb-6">Kalça protezi adaylığınızı değerlendirmek ve tüm sorularınızı yanıtlamak için randevu alın.</p>
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
