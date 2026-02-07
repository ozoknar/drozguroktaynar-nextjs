import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Rotator Manşet Yırtığı Tedavisi: Konservatif ve Cerrahi Seçenekler | Op. Dr. Özgür Oktay Nar',
  description: 'Rotator kılıf (manşet) yırtığı nasıl tedavi edilir? Fizik tedavi, enjeksiyon, artroskopik onarım ve iyileşme süreci hakkında uzman bilgisi.',
  keywords: 'rotator manşet yırtığı, rotator kılıf, omuz yırtığı tedavisi, artroskopik onarım, tendon yırtığı, omuz ağrısı tedavi',
  authors: [{ name: 'Op. Dr. Özgür Oktay Nar' }],
  openGraph: {
    title: 'Rotator Manşet Yırtığı Tedavisi: Konservatif ve Cerrahi Seçenekler',
    description: 'Rotator kılıf (manşet) yırtığı nasıl tedavi edilir? Fizik tedavi, enjeksiyon, artroskopik onarım ve iyileşme süreci hakkında uzman bilgisi.',
    type: 'article',
    locale: 'tr_TR',
    url: 'https://www.ozguroktaynar.com/blog/rotator-manset-yirtigi-tedavisi',
    siteName: 'Op. Dr. Özgür Oktay Nar',
    images: [
      {
        url: 'https://placehold.co/1200x630/e2e8f0/475569?text=Rotator+Manset+Yirtigi',
        width: 1200,
        height: 630,
        alt: 'Rotator manşet yırtığı tedavisi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rotator Manşet Yırtığı Tedavisi: Konservatif ve Cerrahi Seçenekler',
    description: 'Rotator kılıf (manşet) yırtığı nasıl tedavi edilir? Fizik tedavi, enjeksiyon, artroskopik onarım ve iyileşme süreci hakkında uzman bilgisi.',
    images: ['https://placehold.co/1200x630/e2e8f0/475569?text=Rotator+Manset+Yirtigi'],
  },
  alternates: {
    canonical: 'https://www.ozguroktaynar.com/blog/rotator-manset-yirtigi-tedavisi',
  },
};

export default function BlogPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': 'https://www.ozguroktaynar.com/blog/rotator-manset-yirtigi-tedavisi#webpage',
        url: 'https://www.ozguroktaynar.com/blog/rotator-manset-yirtigi-tedavisi',
        name: 'Rotator Manşet Yırtığı Tedavisi: Konservatif ve Cerrahi Seçenekler',
        description: 'Rotator kılıf (manşet) yırtığı nasıl tedavi edilir? Fizik tedavi, enjeksiyon, artroskopik onarım ve iyileşme süreci hakkında uzman bilgisi.',
        datePublished: '2025-01-21T10:00:00+03:00',
        dateModified: '2025-01-21T10:00:00+03:00',
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
          <span className="text-gray-700">Rotator Manşet Yırtığı Tedavisi</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Rotator Manşet Yırtığı Tedavisi: Konservatif ve Cerrahi Seçenekler</h1>
          <div className="flex items-start text-gray-600 text-sm mb-6">
            <span>Op. Dr. Özgür Oktay Nar</span>
            <span className="mx-2">•</span>
            <time>21 Ocak 2025</time>
          </div>
          <img
            src="https://www.drozguroktaynar.com/wp-content/uploads/2025/11/Rotator-Manset-Yirtigi-Tedavisi.webp"
            alt="Rotator manşet yırtığı tedavisi"
            className="w-full rounded-xl shadow-lg"
          />
        </header>

        {/* Main Content - 7 STEP ARCHITECTURE */}
        <div className="prose prose-lg max-w-none">
          
          {/* Section 1: Giriş */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Giriş</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Omuz ağrınız var mı ve özellikle kol kaldırırken veya gece yatarken şiddetleniyor mu? Güç kaybı hissediyor musunuz? Bu belirtiler rotator kılıf (rotator manşet) yırtığının işareti olabilir. Rotator manşet yırtığı, özellikle 40 yaş üzeri bireylerde en yaygın omuz yaralanmasıdır.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Bu yazıda rotator manşet yırtığının tedavi seçeneklerini - fizik tedavi, enjeksiyonlar ve cerrahi onarım - detaylı olarak ele alacağız. Hangi tedavi size uygundur, ameliyatsız tedavi ne zaman başarılı olur ve cerrahi sonrası nasıl bir süreç sizi bekler gibi soruların yanıtlarını bulacaksınız.
            </p>
          </section>

          {/* Section 2: Tedavi Yaklaşımı ve Karar Süreci */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tedavi Nasıl Belirlenir?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Rotator manşet yırtığı tedavisi "herkese tek boyut" yaklaşımı ile yapılamaz. Tedavi kararı, aşağıdaki faktörlere göre kişiselleştirilir:
            </p>

            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tedavi Kararını Etkileyen Faktörler</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Yırtık boyutu:</strong> Kısmi ({'<'}50% tendon kalınlığı), tam kat küçük ({'<'}1 cm), orta (1-3 cm), büyük (3-5 cm), masif ({'>'}5 cm veya 2+ tendon)</li>
                <li>• <strong>Yırtık süresi:</strong> Akut (son 3 ay) vs. kronik ({">"} 6 ay) - kronik yırtıklarda tendon retraksiyonu ve yağlı dejenerasyon gelişir</li>
                <li>• <strong>Semptomların şiddeti:</strong> Hafif ağrı vs. şiddetli fonksiyon kaybı</li>
                <li>• <strong>Yaş ve aktivite düzeyi:</strong> 65+ yaş düşük talep vs. 45 yaş aktif sporcu</li>
                <li>• <strong>Kas kalitesi:</strong> Goutallier sınıflaması (0: normal, 4: yağlı dejenerasyon)</li>
                <li>• <strong>Hastasupraspinatus kasının retraksiyon derecesi:</strong> Medialleşme (kemikten çekilme) - ileri retraksiyon onarımı zorlaştırır</li>
              </ul>
            </div>

            <div className="bg-[#E6FAF8] p-6 rounded-lg border-l-4 border-[#1AD2C4]">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tedavi Algoritması</h3>
              <div className="space-y-3 text-gray-700">
                <div>
                  <strong>1. İlk Basamak - Konservatif Tedavi (3-6 Ay):</strong>
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>→ Kısmi yırtıklar</li>
                    <li>→ Küçük tam kat yırtıklar ({'<'}1 cm) + minimal semptom</li>
                    <li>→ 70+ yaş, düşük fiziksel talep</li>
                    <li>→ Ciddi komorbiditeli hastalar (cerrahi riski yüksek)</li>
                  </ul>
                </div>
                <div>
                  <strong>2. Cerrahi Tedavi:</strong>
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>→ Akut travmatik yırtık (özellikle genç hasta)</li>
                    <li>→ 3-6 ay konservatif tedaviye yanıtsızlık</li>
                    <li>→ Orta-büyük yırtıklar ({'>'}1 cm) + aktif hasta</li>
                    <li>→ Belirgin güç kaybı (günlük yaşam etkileniyor)</li>
                    <li>→ Yırtık progresyonu (MR'da büyüme)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Konservatif Tedavi */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Konservatif (Ameliyatsız) Tedavi Seçenekleri</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Çoğu rotator manşet yırtığı öncelikle ameliyatsız yöntemlerle tedavi edilir. %50-70 hasta konservatif tedavi ile yeterli rahatlama sağlar.
            </p>

            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. İstirahat ve Aktivite Modifikasyonu</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Akut evrede (ilk 2-3 hafta):</strong> Baş üstü aktivitelerden kaçının, kol kaldırma limiti</li>
                  <li>• <strong>Göreceli istirahat:</strong> Tamamen hareketsizlik YAPMAYIN - donuk omuz (frozen shoulder) riski</li>
                  <li>• <strong>Ergonomi:</strong> Uyku pozisyonu (ağrıyan omuz üzerine yatmak), yük taşıma tekniği</li>
                  <li>• <strong>Spor modifikasyonu:</strong> Yüzme (kelebek, serbest) → sırtüstü, tenis → hafif voleyler</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. İlaç Tedavisi</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>NSAİD (Non-steroid Antiinflamatuar):</strong>
                    <br />• İbuprofen 400-600 mg (8 saatte bir) veya Naproxen 500 mg (12 saatte bir)
                    <br />• Süre: 7-14 gün (uzun süreli kullanım mide/böbrek riski)
                    <br />• Mide koruyucu (pantoprazol, omeprazol) ile birlikte
                  </li>
                  <li>
                    <strong>Topikal NSAİD:</strong>
                    <br />• Diklofenak jel (Voltaren Emulgel) - sistemik yan etki riski düşük
                    <br />• Günde 3-4 kez, etkilenen bölgeye uygulayın
                  </li>
                  <li>
                    <strong>Analjezikler:</strong>
                    <br />• Parasetamol (ağrı keser ama iltihap azaltmaz)
                    <br />• Tramadol (orta-şiddetli ağrı için, kısa süreli)
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Fizik Tedavi ve Rehabilitasyon</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Konservatif tedavinin EN ÖNEMLİ parçasıdır.</strong> Düzenli egzersiz programı olmadan iyileşme çok zordur.
                </p>
                
                <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Faz 1 (0-4 Hafta): Ağrı Kontrolü ve Pasif Hareket</h4>
                <ul className="space-y-1 text-gray-700 ml-4 mb-3">
                  <li>• Pasif hareket açıklığı egzersizleri (terapist yardımıyla veya pendulum egzersizi)</li>
                  <li>• Kodman egzersizi: Öne eğilerek kolun sallanması</li>
                  <li>• Scapular stabilizasyon: Kürek kemiği kaslarının izometrik çalışması</li>
                  <li>• Soğuk/sıcak uygulama: 15-20 dk (ağrı kontrolü)</li>
                  <li>• TENS, ultrason, laser tedavileri (opsiyonel)</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Faz 2 (4-8 Hafta): Aktif Hareket ve Hafif Güçlendirme</h4>
                <ul className="space-y-1 text-gray-700 ml-4 mb-3">
                  <li>• Aktif yardımlı hareket: Çubuk egzersizleri</li>
                  <li>• Hafif direnç bantları ile rotator kılıf güçlendirme (internal/external rotasyon)</li>
                  <li>• Scapular kas güçlendirme: Sırt ve omuz kasları</li>
                  <li>• Postür düzeltme egzersizleri</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Faz 3 (8-12 Hafta): İleri Güçlendirme ve Fonksiyonel Kazanım</h4>
                <ul className="space-y-1 text-gray-700 ml-4 mb-3">
                  <li>• Ağırlık ile güçlendirme (dumbbell, kablo makinesi)</li>
                  <li>• Fonksiyonel egzersizler (günlük aktiviteleri simüle eden)</li>
                  <li>• Propriosepsiyon (denge ve koord/nation)</li>
                  <li>• Spora özgü egzersizler (yüzücüler için rotasyon, atıcılar için pliometrik)</li>
                </ul>

                <div className="bg-white p-4 rounded mt-3">
                  <p className="text-sm text-gray-700">
                    <strong>💡 İpucu:</strong> Fizik tedavi başarısı sabır ve düzenli egzersize bağlıdır. Haftada 5-7 gün ev egzersizleri yapmalısınız. "Bir kaç gün yaptım, geçmedi" demek haksızlık olur - minimum 8-12 hafta sürekli çalışma gerekir.
                  </p>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">4. Enjeksiyon Tedavileri</h3>
                
                <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Kortikosteroid Enjeksiyonu (Subacromial)</h4>
                <ul className="space-y-1 text-gray-700 mb-3">
                  <li>• <strong>Amaç:</strong> Güçlü antiinflamatuar etki, ağrı azaltma, fizik tedaviye katılımı artırma</li>
                  <li>• <strong>Teknik:</strong> Betametazon veya triamsinolon + lokal anestezik (lidokain) karışımı subacromial boşluğa</li>
                  <li>• <strong>Etki süresi:</strong> 2-12 hafta (hasta başına değişir)</li>
                  <li>• <strong>Sıklık:</strong> Yılda maksimum 3 enjeksiyon (tendon zayıflatma riski)</li>
                  <li>• <strong>Yan etki:</strong> Geçici ağrı artışı (ilk 24-48 saat), şeker hastalarında glisemi kontrolü bozulabilir, nadir: enfeksiyon</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">PRP (Platelet-Rich Plasma) Enjeksiyonu</h4>
                <ul className="space-y-1 text-gray-700 mb-3">
                  <li>• <strong>Mekanizma:</strong> Kendi kanınızdan elde edilen trombosit konsantrasyonu → büyüme faktörleri tendon iyileşmesini uyarır</li>
                  <li>• <strong>Endikasyon:</strong> Kısmi yırtıklar, tendinopati, kronik tendon dejenerasyonu</li>
                  <li>• <strong>Etkinlik:</strong> Kanıt düzeyi orta (bazı çalışmalarda kortikosteroidle benzer, bazılarında üstün)</li>
                  <li>• <strong>Avantaj:</strong> Doğal, yan etki riski düşük</li>
                  <li>• <strong>Dezavantaj:</strong> Pahalı, SGK ödemez, birden fazla enjeksiyon gerekebilir</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Hyalüronik Asit (Viskosuplemantasyon)</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• <strong>Kullanım:</strong> Daha çok omuz artrozunda, rotator manşet yırtığında ikincil tercih</li>
                  <li>• <strong>Etki:</strong> Eklem yağlaması, ağrı azaltma</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <p className="text-gray-700">
                  <strong>⚠️ Konservatif Tedavi Başarı Kriterleri:</strong>
                  <br />
                  Eğer 3-6 ay sonunda:
                  <br />• Ağrı %50+ azaldıysa
                  <br />• Günlük aktivitelerinizi yapabiliyorsanız
                  <br />• Gece ağrısı yoksa veya nadirse
                  <br />→ Konservatif tedavi BAŞARILI sayılır, cerrahi gerekmez.
                  <br /><br />
                  Ancak semptomlar devam ediyorsa veya kötüleşiyorsa → cerrahi değerlendirme gerekir.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Cerrahi Tedavi */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cerrahi Tedavi: Rotator Manşet Onarımı</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Konservatif tedaviye yanıt alınamazsa veya yırtık büyük/travmatikse, cerrahi onarım endikasyonu vardır. Günümüzde %90+ ameliyat artroskopik (kapalı) olarak yapılır.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cerrahi Teknikler</h3>
            <div className="space-y-4 mb-6">
              <div className="bg-[#E6FAF8] p-5 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">1. Artroskopik Rotator Manşet Onarımı (En Yaygın)</h4>
                <p className="text-gray-700 mb-2">
                  <strong>Teknik:</strong> 3-4 küçük delikten (portal) kamera ve aletler sokulur. Yırtık tendon kemik üzerindeki orijinal yapışma yerine "ankor" (vida) ile dikilir.
                </p>
                <ul className="space-y-1 text-gray-700">
                  <li>• <strong>Avantajlar:</strong> Minimal doku hasarı, kozmetik iyilik, hızlı iyileşme, daha az ağrı</li>
                  <li>• <strong>Süre:</strong> 60-120 dk</li>
                  <li>• <strong>Hastanede kalış:</strong> 0-1 gün (genellikle aynı gün taburcu)</li>
                  <li>• <strong>Başarı oranı:</strong> %80-90 (yırtık boyutuna bağlı)</li>
                </ul>
              </div>

              <div className="bg-[#E6FAF8] p-5 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">2. Mini-Open Onarım</h4>
                <p className="text-gray-700 mb-2">
                  <strong>Teknik:</strong> 3-5 cm küçük insizyon + artroskopi kombinasyonu. Büyük/kompleks yırtıklarda tercih edilebilir.
                </p>
              </div>

              <div className="bg-[#E6FAF8] p-5 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">3. Açık Onarım (Nadiren)</h4>
                <p className="text-gray-700">
                  <strong>Endikasyon:</strong> Masif yırtık + ciddi retraksiyon, revizyon cerrahisi, deltoid yaralanması ile birlikte. Daha uzun iyileşme, daha fazla ağrı.
                </p>
              </div>

              <div className="bg-[#E6FAF8] p-5 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">4. Onarılamayan Masif Yırtıklar İçin Alternatifler</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• <strong>Parsiyel Onarım:</strong> Yırtığın bir kısmı dikilir, fonksiyon kısmen düzelir</li>
                  <li>• <strong>Tendon Transferi:</strong> Başka tendon (latissimus dorsi, pectoralis major) rotator kılıf yerine geçirilir</li>
                  <li>• <strong>Superior Capsular Reconstruction:</strong> Biyolojik veya sentetik greft ile eklem kapsülü yeniden yapılır</li>
                  <li>• <strong>Reverse Omuz Protezi:</strong> İleri yaş + artropati + onarılamayan yırtıkta son seçenek</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ameliyat Sonrası İyileşme Süreci</h3>
            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Fazlar ve Zaman Çizelgesi</h4>
              
              <div className="space-y-4">
                <div>
                  <strong>Faz 1: Koruma (0-6 Hafta)</strong>
                  <ul className="mt-2 space-y-1 text-gray-700 ml-4">
                    <li>• Kol askısı kullanımı (4-6 hafta) - tendonun iyileşmesi için</li>
                    <li>• Sadece pasif hareket (fizik tedavi veya ev egzersizi)</li>
                    <li>• Günlük aktiviteler: Yazma, yeme (dirsek hareketli), yıkanma</li>
                    <li>• Yasaklar: Aktif kol kaldırma, ağır kaldırma, itme/çekme</li>
                  </ul>
                </div>

                <div>
                  <strong>Faz 2: Aktif Hareket (6-12 Hafta)</strong>
                  <ul className="mt-2 space-y-1 text-gray-700 ml-4">
                    <li>• Kol askısı bırakılır</li>
                    <li>• Aktif yardımlı hareket başlar</li>
                    <li>• Hafif izometrik güçlendirme (direnç yok)</li>
                    <li>• Günlük aktiviteler artırılır (hafif ev işleri, banyo)</li>
                  </ul>
                </div>

                <div>
                  <strong>Faz 3: Güçlendirme (12-16 Hafta)</strong>
                  <ul className="mt-2 space-y-1 text-gray-700 ml-4">
                    <li>• Dirençli egzersizler (elastik bant, hafif ağırlıklar)</li>
                    <li>• Scapular stabilizasyon ileri seviye</li>
                    <li>• Tam hareket açıklığı hedeflenir</li>
                    <li>• Araba kullanma (3-4 ay), hafif sportif aktiviteler</li>
                  </ul>
                </div>

                <div>
                  <strong>Faz 4: Spora Dönüş (4-6 Ay)</strong>
                  <ul className="mt-2 space-y-1 text-gray-700 ml-4">
                    <li>• Fonksiyonel/pliometrik egzersizler</li>
                    <li>• Spor-spesifik driller</li>
                    <li>• Tam fonksiyon kazanımı: 6-12 ay</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <p className="text-gray-700 mb-2">
                <strong>⚠️ Ameliyat Sonrası Komplikasyonlar (Nadir):</strong>
              </p>
              <ul className="space-y-1 text-gray-700">
                <li>• Tekrar yırtık (re-tear): %10-30 (büyük yırtıklarda risk artar)</li>
                <li>• Donuk omuz (adhesive capsulitis): %5-10</li>
                <li>• Enfeksiyon: %0,3-1</li>
                <li>• Sinir hasarı: %0,5-2 (geçici, çoğu düzelir)</li>
                <li>• Anestezi komplikasyonları: %1-2</li>
              </ul>
            </div>
          </section>

          {/* Section 5: Sıkça Sorulan Sorular */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rotator manşet yırtığı ameliyatsız iyileşir mi?</h3>
                <p className="text-gray-700">
                  Kısmi yırtıklar ve küçük tam kat yırtıklar ({'<'}1 cm) fizik tedavi ile iyileşebilir. Ancak "tendon kendini diker" anlamında değil - yırtık kalır ama ağrı azalır ve fonksiyon kazanılır (çevre kaslar kompanse eder). Orta-büyük yırtıklarda ({'>'}1-2 cm) spontan iyileşme nadir, genellikle cerrahi gerekir. Yaşlı, düşük talep hastalarda ameliyatsız yönetim başarılı olabilir.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ameliyatı geciktirirsem yırtık büyür mü?</h3>
                <p className="text-gray-700">
                  Evet, kronik yırtıklarda retraksiyon (tendonun çekilmesi) ve yağlı dejenerasyon (kas yağ dokusuna dönüşür) gelişir. Bu cerrahi başarı oranını düşürür. Ancak bu süreç yavaştır (aylar-yıllar). 3-6 ay konservatif tedavi denemesi yırtığı belirgin büyütmez. Ancak 1-2 yıl bekleme onarımı zorlaştırabilir. Genç, aktif hastalarda erken cerrahi tercih edilir.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ameliyat sonrası ne kadar süre kolumu kullanamam?</h3>
                <p className="text-gray-700">
                  İlk 4-6 hafta kol askısı kullanırsınız, ancak tamamen hareketsiz kalmazsınız - pasif egzersizler yapılır. 6 hafta sonra aktif hareket başlar. Günlük aktiviteler (yemek, yazma) 2. haftadan itibaren kademeli başlar. Araba kullanma 3-4 ay, ağır işler 4-6 ay sonra. Tam fonksiyon 6-12 ay.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ameliyat sonrası tekrar yırtılır mı?</h3>
                <p className="text-gray-700">
                  Küçük-orta yırtıklarda re-tear riski %5-15, büyük-masif yırtıklarda %20-40'tır. Risk faktörleri: ileri yaş ({">"} 65), büyük yırtık, kronik yırtık (yağlı dejenerasyon), sigara, diyabet, erken yük verme. Riski azaltmak için: rehabilitasyon protokolüne uyun, 6 ay ağır kaldırma yapmayın, sigarayı bırakın.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rotator manşet ameliyatı ağrılı mı?</h3>
                <p className="text-gray-700">
                  İlk 48-72 saat ağrı orta-şiddetli olabilir (VAS 5-7/10). Ancak multimodal ağrı yönetimi (opioid + NSAİD + lokal anestezik blok + kriyoterapi) ile kontrol altında tutulur. Çoğu hasta 1-2 hafta sonra analjezikleri bırakır. Gece ağrısı ilk 4-6 hafta olabilir (kol askısı rahatsızlığı). Genel olarak bel fıtığı veya diz protezi ameliyatından daha az ağrılıdır.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Kaynaklar */}
          <section className="mb-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kaynaklar</h2>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-700">
              <li>
                Kuhn JE. "Exercise in the treatment of rotator cuff impingement: a systematic review and a synthesized evidence-based rehabilitation protocol." J Shoulder Elbow Surg. 2009.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=kuhn+exercise+treatment+rotator+cuff+impingement" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Mather RC 3rd, et al. "The societal and economic value of rotator cuff repair." J Bone Joint Surg Am. 2013.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=mather+societal+economic+value+rotator+cuff+repair" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Galatz LM, et al. "The outcome and repair integrity of completely arthroscopically repaired large and massive rotator cuff tears." J Bone Joint Surg Am. 2004.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=galatz+outcome+repair+integrity+arthroscopic+rotator+cuff" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Goutallier D, et al. "Fatty muscle degeneration in cuff ruptures. Pre- and postoperative evaluation by CT scan." Clin Orthop Relat Res. 1994.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=goutallier+fatty+muscle+degeneration+cuff+ruptures" 
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
                <strong>İlgili İçerik:</strong> Rotator manşet yırtığı için ameliyatsız tedavi seçenekleri hakkında daha fazla bilgi almak isterseniz{' '}
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
              Rotator manşet yırtığı tedavisi kişiselleştirilmiş bir yaklaşım gerektirir. Çoğu hasta öncelikle konservatif tedavi ile başlamalı - fizik tedavi, enjeksiyonlar ve ilaçlar %50-70 hastada yeterli rahatlamayı sağlar. Ancak büyük yırtıklar, genç/aktif hastalar veya konservatif tedaviye yanıtsızlık durumunda cerrahi onarım altın standart tedavidir.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Modern artroskopik teknikler, minimal invaziv yaklaşım ve etkili rehabilitasyon programları sayesinde başarı oranları %80-90 düzeyindedir. Unutmayın: Hem konservatif hem cerrahi tedavide sabır ve düzenli egzersiz kritiktir. Omuz ağrınız varsa, erken dönemde bir ortopedi ve travmatoloji uzmanına başvurarak size en uygun tedavi planını belirleyin.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#01CAB8] to-[#01A899] rounded-xl p-8 text-center text-white mt-12">
          <h2 className="text-2xl font-bold mb-4">Rotator Manşet Yırtığı Tedavisi</h2>
          <p className="mb-6">Size özel tedavi planı için uzman değerlendirmesi alın.</p>
          <Link 
            href="/iletisim" 
            className="inline-block bg-white text-[#01CAB8] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Hemen Randevu Al
          </Link>
        </div>
      </article>
    </>
  );
}
