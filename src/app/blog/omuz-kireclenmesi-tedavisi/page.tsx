import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Omuz Kireçlenmesi Tedavisi: Kalsifik Tendinit Nasıl Tedavi Edilir? | Op. Dr. Özgür Oktay Nar',
  description: 'Omuz kireçlenmesi (kalsifik tendinit) tedavisi: İlaç, enjeksiyon, ESWT (şok dalga), aspirasyon ve cerrahi seçenekler. Uzman doktor rehberi.',
  keywords: 'omuz kireçlenmesi, kalsifik tendinit, omuz kireç tedavisi, ESWT, şok dalga tedavisi, aspirasyon, rotator kılıf kalsifikasyonu',
  authors: [{ name: 'Op. Dr. Özgür Oktay Nar' }],
  openGraph: {
    title: 'Omuz Kireçlenmesi Tedavisi: Kalsifik Tendinit Nasıl Tedavi Edilir?',
    description: 'Omuz kireçlenmesi (kalsifik tendinit) tedavisi: İlaç, enjeksiyon, ESWT (şok dalga), aspirasyon ve cerrahi seçenekler. Uzman doktor rehberi.',
    type: 'article',
    locale: 'tr_TR',
    url: 'https://www.ozguroktaynar.com/blog/omuz-kireclenmesi-tedavisi',
    siteName: 'Op. Dr. Özgür Oktay Nar',
    images: [
      {
        url: 'https://placehold.co/1200x630/e2e8f0/475569?text=Omuz+Kireclenmesi',
        width: 1200,
        height: 630,
        alt: 'Omuz kireçlenmesi tedavisi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omuz Kireçlenmesi Tedavisi: Kalsifik Tendinit Nasıl Tedavi Edilir?',
    description: 'Omuz kireçlenmesi (kalsifik tendinit) tedavisi: İlaç, enjeksiyon, ESWT (şok dalga), aspirasyon ve cerrahi seçenekler. Uzman doktor rehberi.',
    images: ['https://placehold.co/1200x630/e2e8f0/475569?text=Omuz+Kireclenmesi'],
  },
  alternates: {
    canonical: 'https://www.ozguroktaynar.com/blog/omuz-kireclenmesi-tedavisi',
  },
};

export default function BlogPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': 'https://www.ozguroktaynar.com/blog/omuz-kireclenmesi-tedavisi#webpage',
        url: 'https://www.ozguroktaynar.com/blog/omuz-kireclenmesi-tedavisi',
        name: 'Omuz Kireçlenmesi Tedavisi: Kalsifik Tendinit Nasıl Tedavi Edilir?',
        description: 'Omuz kireçlenmesi (kalsifik tendinit) tedavisi: İlaç, enjeksiyon, ESWT (şok dalga), aspirasyon ve cerrahi seçenekler. Uzman doktor rehberi.',
        datePublished: '2025-01-23T10:00:00+03:00',
        dateModified: '2025-01-23T10:00:00+03:00',
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
          <span className="text-gray-700">Omuz Kireçlenmesi Tedavisi</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Omuz Kireçlenmesi Tedavisi: Kalsifik Tendinit Nasıl Tedavi Edilir?</h1>
          <div className="flex items-center text-gray-600 text-sm mb-6">
            <span>Op. Dr. Özgür Oktay Nar</span>
            <span className="mx-2">•</span>
            <time>23 Ocak 2025</time>
          </div>
          <img
            src="https://www.drozguroktaynar.com/wp-content/uploads/2025/11/omuz-kireclenmesi.webp"
            alt="Omuz kireçlenmesi tedavisi"
            className="w-full rounded-xl shadow-lg"
          />
        </header>

        {/* Main Content - 7 STEP ARCHITECTURE */}
        <div className="prose prose-lg max-w-none">
          
          {/* Section 1: Giriş */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Giriş</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Omzunuzda ani ve şiddetli bir ağrı mı başladı? Kol kaldıramıyor veya gece uyuyamıyor musunuz? Radyografide "kireç birikimi" tespit edildiyse, kalsifik tendinit (omuz kireçlenmesi) ile karşı karşıya olabilirsiniz. Bu durum, rotator kılıf tendonlarında kalsiyum birikimi sonucu gelişir ve genellikle 30-50 yaş arası kadınlarda görülür.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Bu yazıda omuz kireçlenmesinin tedavi seçeneklerini - konservatif yaklaşımlar, şok dalga tedavisi (ESWT), aspirasyon ve cerrahi - detaylı olarak ele alacağız. Hangi tedavi ne zaman uygulanır, iyileşme süreci nasıl işler ve kireç tekrar oluşur mu gibi sorular yanıtlanacaktır.
            </p>
          </section>

          {/* Section 2: Kalsifik Tendinit Evreleri */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Omuz Kireçlenmesi Evreleri ve Tedavi Yaklaşımı</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kalsifik tendinit kendine özgü doğal bir seyir izler. Tedavi yaklaşımı hangi evrede olduğunuza bağlı olarak değişir.
            </p>

            <div className="bg-[#E6FAF8] p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Uhthoff Sınıflaması (3 Evre)</h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Evre 1: Formative (Oluşum) Fazı</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Kalsiyum fosfat kristalleri tendon içinde birikir</li>
                    <li>• Genellikle ASEMPTOMATİK (ağrı yok)</li>
                    <li>• Radyografide iyi tanımlı, yoğun beyaz kitle</li>
                    <li>• Süre: Aylar-yıllar</li>
                    <li>• Tedavi: Genellikle takip, gerekirse fizik tedavi</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Evre 2: Resorptive (Erime) Fazı</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Vücut kireçlenmeyi yabancı madde olarak algılar → makrofajlar emmeye çalışır</li>
                    <li>• Kalsifikasyon yumuşar, çevresinde şiddetli inflamasyon</li>
                    <li>• <strong>EN AĞRILI EVRE!</strong> Ani, şiddetli omuz ağrısı (gece uykudan uyandırır)</li>
                    <li>• Radyografide kireç bulanık, sınırları belirsiz</li>
                    <li>• Süre: 2-12 hafta</li>
                    <li>• Tedavi: Ağrı yönetimi (NSAİD, enjeksiyon, aspirasyon), ESWT</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Evre 3: Post-calcific (Rekonstrüksiyon) Fazı</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Kalsifikasyon büyük ölçüde emilmiş, tendon yeniden organize oluyor</li>
                    <li>• Ağrı belirgin azalmış veya yok</li>
                    <li>• Radyografide kireçlenme küçülmüş veya kaybolmuş</li>
                    <li>• Süre: 3-6 ay</li>
                    <li>• Tedavi: Fizik tedavi (hareket açıklığı ve güçlendirme)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tedavi Stratejisi Evre Bazlı</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Formative:</strong> Takip veya proaktif ESWT (akut atak önleme)</li>
                <li>• <strong>Resorptive (akut atak):</strong> Agresif ağrı kontrolü + ESWT/aspirasyon</li>
                <li>• <strong>Post-calcific:</strong> Rehabilitasyon, fonksiyonel kazanım</li>
                <li>• <strong>Kronik ({'>'}1 yıl tedaviye dirençli):</strong> Cerrahi eksizyon</li>
              </ul>
            </div>
          </section>

          {/* Section 3: Konservatif Tedavi */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Konservatif Tedavi Seçenekleri</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. İlaç Tedavisi</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>NSAİD (Antiinflamatuar):</strong>
                    <br />• İbuprofen 600 mg (8 saatte bir) veya Naproxen 500 mg (12 saatte bir)
                    <br />• Akut ağrı atağında 10-14 gün (mide koruyucu ile)
                    <br />• Amaç: İltihabı azaltmak, ağrı kontrolü
                  </li>
                  <li>
                    <strong>Analjezikler:</strong>
                    <br />• Parasetamol (hafif ağrı için)
                    <br />• Tramadol (orta-şiddetli ağrı, kısa süreli)
                  </li>
                  <li>
                    <strong>Kolşisin (Kolkisin):</strong>
                    <br />• Gout ilaçışu, nadir kullanılır
                    <br />• Mekanizma: Kristal ilişkili iltihabı azaltır
                    <br />• Doz: 0,5 mg günde 2-3 kez, 4-6 hafta
                    <br />• Yan etki: İshal (sık)
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Fizik Tedavi</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>Akut Evrede (Resorptive):</strong>
                    <br />• Kriyoterapi (buz) - 15-20 dk, günde 4-6 kez
                    <br />• TENS (ağrı kontrolü)
                    <br />• Pasif hareket açıklığı egzersizleri (donuk omuz önleme)
                    <br />• Sling (kol askısı) - konfora göre 2-3 gün
                  </li>
                  <li>
                    <strong>Kronik/Post-calcific Evrede:</strong>
                    <br />• Ultrason, laser terapi
                    <br />• Aktif hareket ve güçlendirme egzersizleri
                    <br />• Scapular stabilizasyon
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Kortikosteroid Enjeksiyonu</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Endikasyon:</strong> Akut şiddetli ağrı (resorptive faz), konservatif tedaviye yanıtsızlık</li>
                  <li>• <strong>Uygulama:</strong> Subacromial enjeksiyon (bursa içine) - betametazon + lidokain</li>
                  <li>• <strong>Etki:</strong> 24-48 saat içinde belirgin ağrı azalması</li>
                  <li>• <strong>Süre:</strong> 2-12 hafta (kişiye göre değişir)</li>
                  <li>• <strong>Dikkat:</strong> Kalsifikasyon içine enjeksiyon YAPILMAZ (tendon rüptürü riski!)</li>
                  <li>• <strong>Sıklık:</strong> Yılda maksimum 2-3 enjeksiyon</li>
                  <li>• <strong>Başarı oranı:</strong> %60-70 (geçici ağrı rahatlaması)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: İnvaziv Minimal Tedaviler */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">İnvaziv Minimal Tedaviler</h2>
            
            <div className="space-y-6">
              <div className="bg-[#E6FAF8] p-6 rounded-lg border-l-4 border-[#1AD2C4]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. ESWT (Extracorporeal Shock Wave Therapy - Şok Dalga Tedavisi)</h3>
                
                <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Mekanizma</h4>
                <p className="text-gray-700 mb-3">
                  Yüksek enerjili ses dalgaları kalsifikasyonu mechanically parçalar ve resorpsiyonu hızlandırır. Ayrıca mikrovasküler dolaşımı artırır ve iyileşmeyi uyarır.
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-2">Uygulama</h4>
                <ul className="space-y-1 text-gray-700 mb-3">
                  <li>• Cihaz: Radyal (düşük enerji) veya Fokal (yüksek enerji) ESWT</li>
                  <li>• Seans: Haftada 1 seans, toplam 3-5 seans</li>
                  <li>• Süre: Her seans 10-15 dakika</li>
                  <li>• Anestezi: Genellikle gerekmez (hafif ağrı tolere edilebilir)</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-2">Başarı Oranı</h4>
                <ul className="space-y-1 text-gray-700 mb-3">
                  <li>• %60-70 hastada belirgin ağrı azalması ve kireç küçülmesi</li>
                  <li>• En iyi sonuç: Resorptive fazda veya {'>'}1,5 cm kireçlenmede</li>
                  <li>• Etki başlama: 4-12 hafta sonra (hemen değil!)</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-2">Avantajlar</h4>
                <ul className="space-y-1 text-gray-700 mb-3">
                  <li>✓ Non-invaziv (ameliyatsız, iğnesiz)</li>
                  <li>✓ Ayaktan tedavi (hastanede yatış yok)</li>
                  <li>✓ Düşük komplikasyon riski</li>
                  <li>✓ Cerrahi alternatifi</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-2">Dezavantajlar</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>✗ Pahalı (SGK sınırlı kapsam)</li>
                  <li>✗ %30-40 hastada etkisiz</li>
                  <li>✗ Geçici ağrı artışı (ilk 1-2 gün)</li>
                </ul>
              </div>

              <div className="bg-[#E6FAF8] p-6 rounded-lg border-l-4 border-[#1AD2C4]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Ultrason Eşliğinde Aspirasyon + Lavaj (Needling)</h3>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Prosedür</h4>
                <p className="text-gray-700 mb-3">
                  <strong>Adım 1:</strong> Ultrason ile kalsifikasyon lokalize edilir
                  <br /><strong>Adım 2:</strong> Lokal anestezi (lidokain)
                  <br /><strong>Adım 3:</strong> İğne (16-18 gauge) ile kalsifikasyon delinir
                  <br /><strong>Adım 4:</strong> Serum fizyolojik enjekte edilerek yumuşatılır (lavaj)
                  <br /><strong>Adım 5:</strong> Kalsifik materyal aspire edilir (çekilir)
                  <br /><strong>Adım 6:</strong> Subacromial kortikosteroid enjeksiyonu (opsiyonel)
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-2">Endikasyon</h4>
                <ul className="space-y-1 text-gray-700 mb-3">
                  <li>• Resorptive fazda büyük ({'>'}1,5 cm), yumuşak kalsifikasyonlar (radyografide bulanık görünüm)</li>
                  <li>• Akut şiddetli ağrı + konservatif tedaviye yanıtsızlık</li>
                  <li>• ESWT başarısızlığı</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-2">Başarı ve Riskler</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>✓ Başarı: %70-85 (ağrı azalması)</li>
                  <li>✓ Hızlı rahatlama (24-72 saat)</li>
                  <li>✗ Risk: Enfeksiyon (%0,5), tendon hasarı (nadir), vazovagal reaksiyon</li>
                  <li>✗ Sert kalsifikasyonlarda (formative faz) etkisiz</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5: Cerrahi Tedavi */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cerrahi Tedavi: Artroskopik Kalsifikasyon Eksizyonu</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Cerrahi, konservatif tedavi ve minimal invaziv yöntemlere 6-12 ay yanıt alınamayan kronik vakalarda son seçenektir.
            </p>

            <div className="bg-yellow-100 p-6 rounded-lg mb-6 border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cerrahi Endikasyonlar</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ 6-12 ay konservatif tedaviye + ESWT/aspirasyon yanıtsızlık</li>
                <li>✓ Büyük, sert kalsifikasyon ({'>'}2 cm, formative fazda kalmış)</li>
                <li>✓ Rotator kılıf tam kat yırtığı ile birlikte kalsifikasyon</li>
                <li>✓ Şiddetli fonksiyon kaybı (günlük yaşam ciddi etkilenmiş)</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Artroskopik Teknik</h3>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• <strong>Yaklaşım:</strong> 2-3 portal (küçük delik) ile kamera ve aletler sokulur</li>
              <li>• <strong>Kalsifikasyon Lokalizasyonu:</strong> Ultrason veya fluoroskopi (C-arm) eşliğinde</li>
              <li>• <strong>Eksizyon:</strong> Tendon küçük insize edilir, kalsifik materyal kürete veya shaver ile çıkarılır</li>
              <li>• <strong>Tendon Onarımı:</strong> Eksizyon sonrası tendon dikilir (gerekirse)</li>
              <li>• <strong>Subacromial Dekompresyon:</strong> İmpingement varsa akromiyoplasti eklenir</li>
              <li>• <strong>Süre:</strong> 45-75 dakika</li>
              <li>• <strong>Hastanede kalış:</strong> 0-1 gün</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ameliyat Sonrası İyileşme</h3>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• <strong>0-2 hafta:</strong> Kol askısı, pasif hareket</li>
              <li>• <strong>2-6 hafta:</strong> Aktif yardımlı hareket, hafif günlük aktiviteler</li>
              <li>• <strong>6-12 hafta:</strong> Güçlendirme egzersizleri, araba kullanma</li>
              <li>• <strong>3-6 ay:</strong> Tam fonksiyon, spora dönüş</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Başarı ve Komplikasyonlar</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ <strong>Başarı oranı:</strong> %85-95 (ağrı azalması ve fonksiyon kazanımı)</li>
              <li>✓ <strong>Kireç tekrarı:</strong> %5-10 (nadir)</li>
              <li>✗ <strong>Komplikasyonlar:</strong> Enfeksiyon (%0,5), donuk omuz (%3-5), tendon yırtığı (%1-2)</li>
            </ul>
          </section>

          {/* Section 6: Sıkça Sorulan Sorular */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Omuz kireçlenmesi kendiliğinden geçer mi?</h3>
                <p className="text-gray-700">
                  Evet, olguların %80-90'ında kireç zamanla (6 ay - 2 yıl) spontan olarak erir. Ancak bu süre boyunca ciddi ağrı yaşayabilirsiniz. Akut atak döneminde (resorptive faz) ağrı yönetimi şarttır. Eğer 6-12 ay sonunda hâlâ ağrı ve kireç varsa, ESWT veya cerrahi düşünülür. "Kendiliğinden geçer" demek "hiçbir şey yapma" anlamına gelmez - fizik tedavi ve egzersiz mutlaka olmalı (donuk omuz riski!).
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Şok dalga tedavisi (ESWT) ağrılı mı?</h3>
                <p className="text-gray-700">
                  Uygulama sırasında hafif-orta ağrı (VAS 3-5/10) hissedilir, tolere edilebilir seviyededir. Lokal anestezi gerekmez (bazı merkezlerde topikal anestezik krem kullanılır). Seans sonrası 1-2 gün hafif ağrı artışı olabilir (geçicidir, buz uygulayın). İlk 2-3 seansta ağrı daha belirgin olur, sonra azalır. Fokal ESWT (yüksek enerji) radyal'den (düşük enerji) daha ağrılıdır ama daha etkilidir.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Kireç tedavisi sonrası tekrar oluşur mu?</h3>
                <p className="text-gray-700">
                  Spontan erime veya konservatif tedavi sonrası tekrarlama riski %10-15'tir. ESWT sonrası %5-10, cerrahi sonrası %5'in altında. Önleme: Düzenli rotator kılıf güçlendirme egzersizleri, postür kontrolü, baş üstü aşırı kullanımdan kaçınma. Kireç genellikle tek omuzda gelişir, ancak %10-15 vakada bilateral (her iki omuz) olabilir.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ameliyatsız tedavi ne kadar sürer?</h3>
                <p className="text-gray-700">
                  Konservatif tedavi + ESWT programı 3-6 ay sürer:
                  • 0-4 hafta: İlaç + fizik tedavi (ağrı kontrolü)
                  • 4-12 hafta: ESWT seansları (3-5 seans)
                  • 12-24 hafta: Kireç erimesi ve iyileşme (radyolojik kontrol)
                  Akut ağrı atağı (resorptive faz) 2-8 hafta sürer. Bu dönem en zordur, ancak sonrasında belirgin düzelme olur. Sabır şart!
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Kireç varken egzersiz yapabilir miyim?</h3>
                <p className="text-gray-700">
                  <strong>Akut atakta (şiddetli ağrı):</strong> İlk 1-2 hafta sadece pasif hareket (Kodman, pendulum). Ağrılı hareketleri zorlama.
                  <strong>Akut geçtikten sonra:</strong> Mutlaka egzersiz yapmalısınız - donuk omuz riski yüksektir (%20-30). Ağrısız hareket açıklığı ve hafif güçlendirme.
                  <strong>Yasaklar:</strong> Ağır yük kaldırma, baş üstü aşırı kullanım, itme/çekme hareketleri (ilk 6 hafta).
                  Egzersiz yapmadan "kireç erimesini beklemek" YANLIŞ - eklem sertleşir!
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Kaynaklar */}
          <section className="mb-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kaynaklar</h2>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-700">
              <li>
                Speed CA, Hazleman BL. "Calcific tendinitis of the shoulder." N Engl J Med. 1999.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=speed+hazleman+calcific+tendinitis+shoulder" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Uhthoff HK, Loehr JW. "Calcific tendinopathy of the rotator cuff: pathogenesis, diagnosis, and management." J Am Acad Orthop Surg. 1997.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=uhthoff+loehr+calcific+tendinopathy+rotator+cuff" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Gerdesmeyer L, et al. "Extracorporeal shock wave therapy for the treatment of chronic calcifying tendonitis of the rotator cuff: a randomized controlled trial." JAMA. 2003.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=gerdesmeyer+extracorporeal+shock+wave+calcifying+tendonitis" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                de Witte PB, et al. "Calcific tendinitis of the rotator cuff: a randomized controlled trial of ultrasound-guided needling and lavage versus subacromial corticosteroids." Am J Sports Med. 2013.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=de+witte+calcific+tendinitis+ultrasound+needling+lavage" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
            </ol>
          </section>

          {/* Section 8: Internal Link - ZORUNLU! */}
          <section className="mb-12">
            <div className="bg-[#E6FAF8] border-l-4 border-[#1AD2C4] p-6 rounded-r-lg">
              <p className="text-gray-700">
                <strong>İlgili İçerik:</strong> Omuz kireçlenmesi için ameliyatsız tedavi seçenekleri hakkında daha fazla bilgi almak isterseniz{' '}
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
              Omuz kireçlenmesi (kalsifik tendinit), doğru tedavi yaklaşımı ile başarıyla yönetilebilen bir durumdur. Çoğu hasta konservatif tedavi veya ESWT ile iyileşir, cerrahi nadir durumlarda gerekir. Akut ağrı atağı çok zor olsa da, zamanla kireç erir ve fonksiyon kazanılır.
            </p>
            <p className="text-gray-700 leading-relaxed">
              En önemli nokta: Fizik tedavi ve egzersizi ihmal etmemek! Donuk omuz riski yüksektir ve tedavi edilmesi daha zordur. Omuzunuzda ani şiddetli ağrı başladıysa ve radyografide kireçlenme tespit edildiyse, bir ortopedi ve travmatoloji uzmanına başvurarak size özel tedavi planını belirleyin. Sabır ve doğru yaklaşım ile ağrısız, fonksiyonel bir omuza kavuşabilirsiniz.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#01CAB8] to-[#01A899] rounded-xl p-8 text-center text-white mt-12">
          <h2 className="text-2xl font-bold mb-4">Omuz Kireçlenmesi Tedavisi</h2>
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
