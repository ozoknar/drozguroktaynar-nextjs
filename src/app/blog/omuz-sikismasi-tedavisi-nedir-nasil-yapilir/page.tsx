import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Omuz Sıkışması Tedavisi Nedir, Nasıl Yapılır? | Op. Dr. Özgür Oktay Nar',
  description: 'Omuz sıkışması (impingement) tedavisi: Fizik tedavi, enjeksiyonlar, egzersizler ve artroskopik cerrahi. Konservatif ve cerrahi tedavi seçenekleri.',
  keywords: 'omuz sıkışması tedavisi, impingement tedavisi, omuz ağrısı tedavi, subacromial dekompresyon, omuz egzersizleri',
  authors: [{ name: 'Op. Dr. Özgür Oktay Nar' }],
  openGraph: {
    title: 'Omuz Sıkışması Tedavisi Nedir, Nasıl Yapılır?',
    description: 'Omuz sıkışması (impingement) tedavisi: Fizik tedavi, enjeksiyonlar, egzersizler ve artroskopik cerrahi. Konservatif ve cerrahi tedavi seçenekleri.',
    type: 'article',
    locale: 'tr_TR',
    url: 'https://www.ozguroktaynar.com/blog/omuz-sikismasi-tedavisi-nedir-nasil-yapilir',
    siteName: 'Op. Dr. Özgür Oktay Nar',
    images: [
      {
        url: 'https://placehold.co/1200x630/e2e8f0/475569?text=Omuz+Sikismasi+Tedavisi',
        width: 1200,
        height: 630,
        alt: 'Omuz sıkışması tedavisi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omuz Sıkışması Tedavisi Nedir, Nasıl Yapılır?',
    description: 'Omuz sıkışması (impingement) tedavisi: Fizik tedavi, enjeksiyonlar, egzersizler ve artroskopik cerrahi. Konservatif ve cerrahi tedavi seçenekleri.',
    images: ['https://placehold.co/1200x630/e2e8f0/475569?text=Omuz+Sikismasi+Tedavisi'],
  },
  alternates: {
    canonical: 'https://www.ozguroktaynar.com/blog/omuz-sikismasi-tedavisi-nedir-nasil-yapilir',
  },
};

export default function BlogPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': 'https://www.ozguroktaynar.com/blog/omuz-sikismasi-tedavisi-nedir-nasil-yapilir#webpage',
        url: 'https://www.ozguroktaynar.com/blog/omuz-sikismasi-tedavisi-nedir-nasil-yapilir',
        name: 'Omuz Sıkışması Tedavisi Nedir, Nasıl Yapılır?',
        description: 'Omuz sıkışması (impingement) tedavisi: Fizik tedavi, enjeksiyonlar, egzersizler ve artroskopik cerrahi. Konservatif ve cerrahi tedavi seçenekleri.',
        datePublished: '2025-01-22T10:00:00+03:00',
        dateModified: '2025-01-22T10:00:00+03:00',
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
          <span className="text-gray-700">Omuz Sıkışması Tedavisi Nedir, Nasıl Yapılır?</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Omuz Sıkışması Tedavisi Nedir, Nasıl Yapılır?</h1>
          <div className="flex items-center text-gray-600 text-sm mb-6">
            <span>Op. Dr. Özgür Oktay Nar</span>
            <span className="mx-2">•</span>
            <time>22 Ocak 2025</time>
          </div>
          <img
            src="https://placehold.co/1200x630/e2e8f0/475569?text=Omuz+Sikismasi+Tedavisi"
            alt="Omuz sıkışması tedavisi"
            className="w-full rounded-xl shadow-lg"
          />
        </header>

        {/* Main Content - 7 STEP ARCHITECTURE */}
        <div className="prose prose-lg max-w-none">
          
          {/* Section 1: Giriş */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Giriş</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kol kaldırırken omzunuzda keskin bir ağrı hissediyor ve gece uykudan uyanıyor musunuz? Omuz sıkışması (subacromial impingement sendromu), rotator kılıf tendonlarının ve bursanın akromion altında sıkışması sonucu gelişen yaygın bir durumdur. İyi haber şu ki, omuz sıkışması çoğunlukla ameliyatsız tedavi ile başarıyla yönetilebilir.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Bu yazıda omuz sıkışmasının tedavi seçeneklerini - fizik tedavi, enjeksiyonlar, egzersizler ve gerekirse cerrahi - detaylı olarak ele alacağız. Hangi tedavi size uygundur, ne kadar sürede iyileşirsiniz ve ameliyat ne zaman gerekir gibi soruların yanıtlarını bulacaksınız.
            </p>
          </section>

          {/* Section 2: Tedavi Hedefleri ve Yaklaşımı */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Omuz Sıkışması Tedavisinin Hedefleri</h2>
            <div className="bg-[#E6FAF8] p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tedavi Hedefleri</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Ağrıyı azaltmak ve gece uykusunu düzeltmek</li>
                <li>✓ İltihabı kontrol altına almak (bursite, tendinit)</li>
                <li>✓ Omuz hareket açıklığını normale döndürmek</li>
                <li>✓ Rotator kılıf ve skapular kasları güçlendirmek</li>
                <li>✓ Postürü düzeltmek (öne eğik omuz)</li>
                <li>✓ Fonksiyonu restore etmek (baş üstü aktiviteler)</li>
                <li>✓ Tekrarlamayı önlemek</li>
              </ul>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tedavi Algoritması</h3>
              <p className="text-gray-700 mb-3">
                <strong>1. Basamak (İlk 6-12 Hafta): Konservatif Tedavi</strong>
              </p>
              <ul className="space-y-1 text-gray-700 ml-4 mb-4">
                <li>→ İlaç tedavisi (NSAİD)</li>
                <li>→ Fizik tedavi modaliteleri</li>
                <li>→ Ev egzersiz programı</li>
                <li>→ Aktivite modifikasyonu</li>
              </ul>
              <p className="text-gray-700 mb-3">
                <strong>2. Basamak (Yanıtsızlık Halinde): Enjeksiyon Tedavisi</strong>
              </p>
              <ul className="space-y-1 text-gray-700 ml-4 mb-4">
                <li>→ Subacromial kortikosteroid enjeksiyonu</li>
                <li>→ Fizik tedavi devamı</li>
              </ul>
              <p className="text-gray-700 mb-3">
                <strong>3. Basamak (3-6 Ay Konservatif Tedaviye Yanıtsızlık): Cerrahi</strong>
              </p>
              <ul className="space-y-1 text-gray-700 ml-4">
                <li>→ Artroskopik subacromial dekompresyon</li>
                <li>→ Bursa rezeksiyonu</li>
                <li>→ Akromiyoplasti (gerekirse)</li>
              </ul>
            </div>
          </section>

          {/* Section 3: Konservatif Tedavi */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Konservatif (Ameliyatsız) Tedavi Seçenekleri</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Omuz sıkışmasının %70-80'i konservatif tedavi ile düzelir. Bu yaklaşım 3-6 ay sürebilir ancak sabır ve düzenli egzersiz başarının anahtarıdır.
            </p>

            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Aktivite Modifikasyonu ve İstirahat</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Baş üstü aktivitelerden kaçının:</strong> İlk 2-4 hafta raf kullanımı, yüksek yerlere eşya koyma, boyama gibi aktiviteleri sınırlayın</li>
                  <li>• <strong>Ağrılı hareketleri durdurun:</strong> "Acı çekerek devam etme" yaklaşımı inflamasyonu şiddetlendirir</li>
                  <li>• <strong>Uyku pozisyonu:</strong> Ağrıyan omuz üzerine yatmayın, sırtüstü veya sağlam taraf üzerine yatın</li>
                  <li>• <strong>İş ergonomisi:</strong> Bilgisayar ekranı göz hizasında, klavye dirsek seviyesinde (omuz elevasyonu yapılmamalı)</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. İlaç Tedavisi</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>NSAİD (Antiinflamatuar):</strong>
                    <br />• İbuprofen 400-600 mg (8 saatte bir) veya Naproxen 500 mg (12 saatte bir)
                    <br />• Süre: 7-14 gün (uzun süreli kullanım sakıncalı)
                    <br />• Mide koruyucu ile birlikte (pantoprazol, lansoprazol)
                  </li>
                  <li>
                    <strong>Topikal NSAİD:</strong>
                    <br />• Diklofenak jel (Voltaren Emulgel) - omuz ön ve yan kısmına günde 3-4 kez
                    <br />• Sistemik yan etki riski düşük
                  </li>
                  <li>
                    <strong>Analjezik:</strong>
                    <br />• Parasetamol (ağrı keser ama iltihap azaltmaz)
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Fizik Tedavi Modaliteleri</h3>
                <p className="text-gray-700 mb-3">
                  Fizik tedavi kliniğinde uygulanan pasif tedaviler (egzersiz değil, cihazlarla):
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Kriyoterapi (Buz):</strong> Akut dönemde 15-20 dk (iltihap azaltır)</li>
                  <li>• <strong>Ultrason:</strong> Derin ısı, doku iyileşmesini hızlandırır</li>
                  <li>• <strong>TENS (Transkütanöz Elektrik Stimülasyonu):</strong> Ağrı kontrolü</li>
                  <li>• <strong>Laser Terapi:</strong> Düşük yoğunluklu - doku onarımı</li>
                  <li>• <strong>Mobilizasyon:</strong> Fizik tedavi uzmanı tarafından pasif eklem hareket</li>
                </ul>
                <p className="text-sm text-gray-600 mt-3 italic">
                  Not: Bu modaliteler yardımcı tedavidir, ASIL tedavi egzersizdir. Cihaz tedavileri tek başına yeterli değildir.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">4. Egzersiz Programı (EN ÖNEMLİ!)</h3>
                <p className="text-gray-700 mb-4">
                  Omuz sıkışması tedavisinin temel taşıdır. Düzenli egzersiz yapmadan iyileşme olmaz.
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-2">Faz 1 (0-4 Hafta): Ağrı Kontrolü ve Hareket Açıklığı</h4>
                <ul className="space-y-1 text-gray-700 mb-4 ml-4">
                  <li><strong>Kodman (Pendulum) Egzersizi:</strong> Öne eğilerek kolun sallanması - günde 3x10</li>
                  <li><strong>Pasif Abduksiyon:</strong> Karşı el veya duvar yardımıyla kol yan/öne kaldırma</li>
                  <li><strong>Çubuk Egzersizleri:</strong> Sopa ile öne, yana, yukarı kaldırma (pasif yardımlı)</li>
                  <li><strong>Skapular Retraksiyon:</strong> Kürek kemiklerini arkaya çekme (oturarak)</li>
                  <li><strong>Postür Egzersizi:</strong> Sırt duvar teması, omuz geri çekme</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-2">Faz 2 (4-8 Hafta): Güçlendirme (Hafif Direnç)</h4>
                <ul className="space-y-1 text-gray-700 mb-4 ml-4">
                  <li><strong>Elastik Bant Egzersizleri:</strong> İç-dış rotasyon, abduksiyon (hafif direnç)</li>
                  <li><strong>Scapular Stabilizasyon:</strong> Kürek kemiği kasları (trapez, romboid, serratus anterior)</li>
                  <li><strong>Rotator Kılıf Güçlendirme:</strong> İç rotasyon, dış rotasyon, abduksiyon (hafif ağırlık veya bant)</li>
                  <li><strong>Duvar İtme:</strong> Omuz stabilizasyonu</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-2">Faz 3 (8-12 Hafta): İleri Güçlendirme ve Fonksiyonel Egzersizler</h4>
                <ul className="space-y-1 text-gray-700 mb-4 ml-4">
                  <li><strong>Ağırlık ile Egzersiz:</strong> Dumbbell lateral raise, front raise (dikkatli)</li>
                  <li><strong>Kapalı Kinetik Zincir:</strong> Plank, push-up (dizden başlayarak)</li>
                  <li><strong>Propriosepsiyon:</strong> Denge tahtası, duvar topu</li>
                  <li><strong>Fonksiyonel Aktiviteler:</strong> Raf kullanma, başın arkasına uzanma simülasyonu</li>
                </ul>

                <div className="bg-white p-4 rounded mt-3">
                  <p className="text-sm text-gray-700">
                    <strong>💡 Kritik İpucu:</strong> Egzersizleri AĞRISIZ aralıkta yapın. Ağrılı açılarda zorlama yapmayın - bu sıkışmayı şiddetlendirir. "No pain, gain yok" burada geçersiz!
                  </p>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">5. Enjeksiyon Tedavileri</h3>
                <p className="text-gray-700 mb-3">
                  Eğer 4-6 hafta konservatif tedaviye rağmen belirgin düzelme yoksa, enjeksiyon tedavisi düşünülür.
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-2">Subacromial Kortikosteroid Enjeksiyonu</h4>
                <ul className="space-y-1 text-gray-700 mb-4">
                  <li>• <strong>İçerik:</strong> Betametazon veya triamsinolon + lokal anestezik (lidokain)</li>
                  <li>• <strong>Amaç:</strong> Güçlü antiinflamatuar etki, bursit/tendinit tedavisi</li>
                  <li>• <strong>Uygulama:</strong> Akromion altı boşluğa (subacromial bursa)</li>
                  <li>• <strong>Etki başlama:</strong> 24-48 saat</li>
                  <li>• <strong>Etki süresi:</strong> 2-12 hafta (kişiye göre değişir)</li>
                  <li>• <strong>Başarı oranı:</strong> %60-70 hastada belirgin ağrı azalması</li>
                  <li>• <strong>Sıklık:</strong> Yılda maksimum 3 enjeksiyon (fazlası tendon zayıflatabilir)</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-2">PRP (Platelet-Rich Plasma) Enjeksiyonu</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• <strong>Mekanizma:</strong> Kendi kanınızdan elde edilen büyüme faktörleri tendon iyileşmesini uyarır</li>
                  <li>• <strong>Endikasyon:</strong> Kronik tendinopati, kortikosteroid yanıtsızlığı</li>
                  <li>• <strong>Avantaj:</strong> Doğal, yan etki az</li>
                  <li>• <strong>Dezavantaj:</strong> Pahalı, SGK ödemez, kanıt düzeyi orta</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: Cerrahi Tedavi */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cerrahi Tedavi: Artroskopik Subacromial Dekompresyon</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Eğer 3-6 ay konservatif tedaviye (ilaç, fizik tedavi, enjeksiyon) rağmen belirgin düzelme yoksa, cerrahi tedavi düşünülür. Modern omuz cerrahisinin %90'ı artroskopik (kapalı) olarak yapılır.
            </p>

            <div className="bg-[#B3F0EB] p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cerrahi Endikasyonlar</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ 3-6 ay konservatif tedaviye yanıtsızlık</li>
                <li>✓ Şiddetli fonksiyon kaybı (günlük aktivitelerde ciddi kısıtlılık)</li>
                <li>✓ Gece ağrısı (uyku bozukluğu)</li>
                <li>✓ MR'da belirgin bursite, kıkırdak hasarı veya kısmi rotator kılıf yırtığı</li>
                <li>✓ Kancalı (tip III) akromion</li>
                <li>✓ Akromiyoklaviküler eklem artrozu (osteofitler subacromial alanı daralı)</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cerrahi Teknik</h3>
            <div className="space-y-4 mb-6">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Artroskopik Subacromial Dekompresyon</h4>
                <p className="text-gray-700 mb-3">
                  <strong>Prosedür:</strong> 2-3 küçük delikten (portal) kamera ve aletler sokulur.
                </p>
                <ul className="space-y-1 text-gray-700">
                  <li><strong>1. Bursa Rezeksiyonu:</strong> İltihaplanmış bursa (yastıkçık doku) çıkarılır</li>
                  <li><strong>2. Akromiyoplasti:</strong> Akromionun alt yüzeyinden kemik mahmuzları (osteofitler) kesilir, düzleştirilir. Subacromial alan genişletilir.</li>
                  <li><strong>3. AC Eklem Rezeksiyonu (gerekirse):</strong> Akromiyoklaviküler eklem artrozu varsa, eklem ucundan ~5 mm kemik kesilir (Mumford prosedürü)</li>
                  <li><strong>4. Rotator Kılıf İnspeksiyonu:</strong> Kısmi yırtık varsa → debridman veya onarım</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Ameliyat Detayları</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• <strong>Anestezi:</strong> Genel anestezi + interscalene blok (ameliyat sonrası ağrı kontrolü)</li>
                  <li>• <strong>Süre:</strong> 45-75 dakika</li>
                  <li>• <strong>Hastanede kalış:</strong> 0-1 gün (genellikle aynı gün taburcu)</li>
                  <li>• <strong>Başarı oranı:</strong> %70-90 (ağrı azalması ve fonksiyon kazanımı)</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ameliyat Sonrası İyileşme</h3>
            <div className="space-y-3 mb-6">
              <div>
                <strong>0-2 Hafta:</strong>
                <ul className="ml-4 space-y-1 text-gray-700">
                  <li>• Kol askısı (2-3 gün, konfora göre)</li>
                  <li>• Pasif hareket egzersizleri (pendulum, çubuk)</li>
                  <li>• Buz uygulama (ağrı kontrolü)</li>
                  <li>• Yara bakımı, dikiş alma (10-14. gün)</li>
                </ul>
              </div>

              <div>
                <strong>2-6 Hafta:</strong>
                <ul className="ml-4 space-y-1 text-gray-700">
                  <li>• Aktif yardımlı hareket</li>
                  <li>• Hafif günlük aktiviteler (yemek, yazma)</li>
                  <li>• Fizik tedavi başlar</li>
                </ul>
              </div>

              <div>
                <strong>6-12 Hafta:</strong>
                <ul className="ml-4 space-y-1 text-gray-700">
                  <li>• Güçlendirme egzersizleri (direnç bantları)</li>
                  <li>• Araba kullanma (6-8 hafta)</li>
                  <li>• Hafif iş aktiviteleri</li>
                </ul>
              </div>

              <div>
                <strong>3-6 Ay:</strong>
                <ul className="ml-4 space-y-1 text-gray-700">
                  <li>• Tam fonksiyon kazanımı</li>
                  <li>• Spora dönüş (baş üstü sporlar dikkatli)</li>
                  <li>• Ağır yük kaldırma</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <p className="text-gray-700 mb-2">
                <strong>⚠️ Cerrahi Komplikasyonlar (Nadir):</strong>
              </p>
              <ul className="space-y-1 text-gray-700">
                <li>• Donuk omuz (adhesive capsulitis): %2-5</li>
                <li>• Enfeksiyon: %0,5-1</li>
                <li>• Akromion kırığı (aşırı kemik kesilmesi): {'<'}%1</li>
                <li>• Deltoid kas zayıflaması: %1-2</li>
                <li>• Tekrarlama (impingement devam): %5-10</li>
              </ul>
            </div>
          </section>

          {/* Section 5: Sıkça Sorulan Sorular */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Omuz sıkışması tedavisinde egzersiz ne kadar önemlidir?</h3>
                <p className="text-gray-700">
                  EgzerSİZ, ameliyatsız tedavinin EN ÖNEMLİ parçasıdır. İlaç ve enjeksiyonlar sadece ağrıyı azaltır, ama omuzun biyomekanik sorununu çözmez. Rotator kılıf ve skapular kasları güçlendirmek, kol kemiğinin yukarı kaymasını engeller ve sıkışma azalır. Düzenli egzersiz yapmayan hastalarda başarı oranı %20-30 iken, düzenli yapanlarda %70-80'dir. Minimum 8-12 hafta, haftada 5-7 gün ev egzersizi şart.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enjeksiyon tedavisi bağımlılık yapar mı?</h3>
                <p className="text-gray-700">
                  Hayır, kortikosteroid enjeksiyonu bağımlılık yapmaz. Ancak sık tekrar (yılda {'>'}3 enjeksiyon) tendon zayıflatabilir ve yırtık riskini artırır. İdeal yaklaşım: 1 enjeksiyon + agresif fizik tedavi. Eğer enjeksiyon sonrası ağrı tamamen geçip 6 ay sonra tekrar ediyorsa, bu bağımlılık değil, altındaki sorunun (mekanik sıkışma) devam ettiğini gösterir - bu durumda cerrahi değerlendirme gerekir.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ameliyatsız tedavi ne kadar sürer?</h3>
                <p className="text-gray-700">
                  Konservatif tedavi programı minimum 3-6 ay sürer:
                  • 0-4 hafta: Ağrı kontrolü, pasif hareket
                  • 4-8 hafta: Aktif hareket, hafif güçlendirme
                  • 8-12 hafta: İleri güçlendirme, fonksiyonel egzersiz
                  Hafif-orta vakalarda 6-8 haftada belirgin düzelme görülür. Şiddetli vakalarda 3-6 ay gerekebilir. Eğer 6 ay sonunda hâlâ ağrı ve fonksiyon kaybı varsa, cerrahi düşünülür.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Omuz sıkışması ameliyatı başarılı mı?</h3>
                <p className="text-gray-700">
                  Artroskopik subacromial dekompresyon, doğru hasta seçimi ile %70-90 başarı oranına sahiptir. En iyi sonuçlar: konservatif tedaviye yanıtsız, kancalı akromion, MR'da bursite. Kötü sonuç risk faktörleri: rotator kılıf yırtığı (önce onarım gerekir), ileri yaş ({'>'}70), işçi tazminatı davaları (psikososyal faktörler). Ameliyat sonrası düzenli fizik tedavi yapmayan hastalarda başarı %50'nin altına düşer.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Omuz sıkışması tekrarlar mı?</h3>
                <p className="text-gray-700">
                  Tekrarlama riski %15-30'dur. Önleme stratejileri:
                  • Ameliyat sonrası/tedavi sonrası düzenli güçlendirme egzersizlerine devam et (ömür boyu)
                  • Baş üstü sporlar/işlerde postür ve tekniğe dikkat et
                  • Erken belirtilerde (hafif ağrı) derhal egzersiz programına dön
                  • 6 ayda bir kontrol muayenesi
                  Cerrahi sonrası tekrarlama daha nadirdir (%5-10) çünkü mekanik sorun (kemik mahmuzları) çözülmüştür.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Kaynaklar */}
          <section className="mb-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kaynaklar</h2>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-700">
              <li>
                Michener LA, et al. "Effectiveness of rehabilitation for patients with subacromial impingement syndrome: a systematic review." J Hand Ther. 2004.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=michener+effectiveness+rehabilitation+subacromial+impingement" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Haahr JP, et al. "Exercises versus arthroscopic decompression in patients with subacromial impingement: a randomised, controlled study in 90 cases with a one year follow up." Ann Rheum Dis. 2005.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=haahr+exercises+arthroscopic+decompression+subacromial+impingement" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Ketola S, et al. "No evidence of long-term benefits of arthroscopic acromioplasty in the treatment of shoulder impingement syndrome." Bone Joint Res. 2013.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=ketola+arthroscopic+acromioplasty+shoulder+impingement" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Neer CS 2nd. "Anterior acromioplasty for the chronic impingement syndrome in the shoulder." J Bone Joint Surg Am. 1972.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=neer+anterior+acromioplasty+chronic+impingement" 
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
                <strong>İlgili İçerik:</strong> Omuz sıkışması için ameliyatsız tedavi seçenekleri hakkında daha fazla bilgi almak isterseniz{' '}
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
              Omuz sıkışması tedavisinde en önemli nokta, sabırlı ve düzenli konservatif tedavi yaklaşımıdır. %70-80 hasta fizik tedavi, egzersiz ve gerekirse enjeksiyon ile başarıyla iyileşir. Egzersiz yapmadan sadece ilaç ve enjeksiyon ile kalıcı sonuç alınamaz.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Eğer 3-6 ay konservatif tedaviye rağmen düzelme yoksa, artroskopik cerrahi güvenli ve etkili bir seçenektir. Unutmayın: Hem ameliyatsız hem cerrahi tedavide, düzenli fizik tedavi ve ev egzersizleri başarının anahtarıdır. Omuz ağrınız varsa, erken dönemde bir ortopedi ve travmatoloji uzmanına başvurarak size özel tedavi planını belirleyin.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#01CAB8] to-[#01A899] rounded-xl p-8 text-center text-white mt-12">
          <h2 className="text-2xl font-bold mb-4">Omuz Sıkışması Tedavisi</h2>
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
