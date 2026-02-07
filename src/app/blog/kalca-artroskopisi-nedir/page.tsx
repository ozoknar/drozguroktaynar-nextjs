import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kalça Artroskopisi Nedir? Ameliyat Süreci ve İyileşme | Op. Dr. Özgür Oktay Nar',
  description: 'Kalça artroskopisi (kapalı kalça ameliyatı) nedir, hangi durumlarda yapılır, ameliyat süreci ve iyileşme dönemi hakkında detaylı bilgi.',
  keywords: 'kalça artroskopisi, kapalı kalça ameliyatı, FAI ameliyatı, labral yırtık tedavisi, minimal invaziv kalça cerrahisi',
  authors: [{ name: 'Op. Dr. Özgür Oktay Nar' }],
  openGraph: {
    title: 'Kalça Artroskopisi Nedir? Ameliyat Süreci ve İyileşme',
    description: 'Kalça artroskopisi (kapalı kalça ameliyatı) nedir, hangi durumlarda yapılır, ameliyat süreci ve iyileşme dönemi hakkında detaylı bilgi.',
    type: 'article',
    locale: 'tr_TR',
    url: 'https://www.ozguroktaynar.com/blog/kalca-artroskopisi-nedir',
    siteName: 'Op. Dr. Özgür Oktay Nar',
    images: [
      {
        url: 'https://placehold.co/1200x630/e2e8f0/475569?text=Kalca+Artroskopisi',
        width: 1200,
        height: 630,
        alt: 'Kalça artroskopisi ameliyatı ve iyileşme süreci',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kalça Artroskopisi Nedir? Ameliyat Süreci ve İyileşme',
    description: 'Kalça artroskopisi (kapalı kalça ameliyatı) nedir, hangi durumlarda yapılır, ameliyat süreci ve iyileşme dönemi hakkında detaylı bilgi.',
    images: ['https://placehold.co/1200x630/e2e8f0/475569?text=Kalca+Artroskopisi'],
  },
  alternates: {
    canonical: 'https://www.ozguroktaynar.com/blog/kalca-artroskopisi-nedir',
  },
};

export default function KalcaArtroskopisiPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': 'https://www.ozguroktaynar.com/blog/kalca-artroskopisi-nedir#webpage',
        url: 'https://www.ozguroktaynar.com/blog/kalca-artroskopisi-nedir',
        name: 'Kalça Artroskopisi Nedir? Ameliyat Süreci ve İyileşme',
        description: 'Kalça artroskopisi nedir, hangi durumlarda yapılır, ameliyat süreci ve iyileşme dönemi hakkında detaylı bilgi.',
        datePublished: '2025-01-18T10:00:00+03:00',
        dateModified: '2025-01-18T10:00:00+03:00',
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
          <span className="text-gray-700">Kalça Artroskopisi Nedir</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Kalça Artroskopisi Nedir? Ameliyat Süreci ve İyileşme</h1>
          <div className="flex items-start text-gray-600 text-sm mb-6">
            <span>Op. Dr. Özgür Oktay Nar</span>
            <span className="mx-2">•</span>
            <time>18 Ocak 2025</time>
          </div>
          <img
            src="https://placehold.co/1200x630/e2e8f0/475569?text=Kalca+Artroskopisi"
            alt="Kalça artroskopisi ameliyatı ve iyileşme süreci"
            className="w-full rounded-xl shadow-lg"
          />
        </header>

        {/* Main Content - 7 STEP ARCHITECTURE */}
        <div className="prose prose-lg max-w-none">
          
          {/* Section 1: Giriş */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Giriş</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kalça artroskopisi, kalça ekleminin içine ince bir kamera (artroskop) ve özel cerrahi aletler yerleştirilerek, 
              minimal invaziv yöntemle tanı ve tedavi yapılmasını sağlayan modern bir cerrahi tekniktir. Bu yöntem, 
              geleneksel açık cerrahiye göre daha az doku hasarı, daha hızlı iyileşme ve daha az ağrı avantajları sunar.
            </p>
            <p className="text-gray-700 leading-relaxed">
              1990'lı yılların sonundan itibaren yaygınlaşan kalça artroskopisi, özellikle genç ve aktif bireylerdeki 
              kalça problemlerinin tedavisinde devrim yaratmıştır. Femoro-asetabular impingement (FAI), labral yırtıklar 
              ve kıkırdak lezyonlarının tedavisinde altın standart haline gelmiştir.
            </p>
          </section>

          {/* Section 2: Nedir / Tanım */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kalça Artroskopisi Nedir?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kalça artroskopisi, küçük cilt kesilerinden (yaklaşık 1 cm) eklem içine kamera ve cerrahi aletlerin 
              yerleştirildiği, kapalı ameliyat tekniğidir. Cerrah, monitör üzerinden eklem içini görüntüleyerek 
              patolojileri tanımlar ve tedavi eder.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Artroskopik Cerrahi Prensipleri</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Minimal invaziv:</strong> Küçük kesiler (portal) kullanılır</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Görüntüleme:</strong> HD kameralar ile detaylı görüntü</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Traksiyon:</strong> Eklem aralığını açmak için özel masa kullanılır</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Sıvı ortamı:</strong> Eklem içi genişletmek ve görüş sağlamak için steril sıvı infüzyonu</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Özel aletler:</strong> Shavers, burrs, RF probes gibi özelleşmiş araçlar</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3: Endikasyonlar */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kalça Artroskopisi Hangi Durumlarda Yapılır?</h2>
            
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Femoro-Asetabular Impingement (FAI)</h3>
              <p className="text-gray-700 mb-2">
                En sık artroskopi endikasyonu. Femur başı ile asetabulum arasında anormal temas.
              </p>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• <strong>CAM lezyonu:</strong> Femur başı-boyun birleşiminde fazla kemik → Osteoplasti</li>
                <li>• <strong>Pincer lezyonu:</strong> Asetabulum aşırı örtüsü → Rim rezeksiyonu</li>
                <li>• <strong>Mikst tip:</strong> Her iki lezyonun kombinasyonu</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Labral Yırtıklar</h3>
              <p className="text-gray-700 mb-2">
                Asetabular labrumun yırtılması, genellikle FAI ile birlikte.
              </p>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• <strong>Tedavi:</strong> Labral tamir (dikiş) veya debridman (yıpranmış kısmın temizlenmesi)</li>
                <li>• <strong>Belirtiler:</strong> Kasık ağrısı, takılma hissi, C-sign pozitif</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Kıkırdak Lezyonları</h3>
              <p className="text-gray-700 mb-2">
                Eklem kıkırdağında hasar (kondral veya osteokondral defekt).
              </p>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• <strong>Tedavi:</strong> Mikrofraktür, debridman, kıkırdak nakli (uygun vakalarda)</li>
                <li>• <strong>Amaç:</strong> Kıkırdak rejenerasyonunu teşvik etme, artrit progresyonunu yavaşlatma</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Serbest Cisimler (Loose Bodies)</h3>
              <p className="text-gray-700">
                Eklem içinde kıkırdak veya kemik parçacıkları. Kilitlenme ve mekanik semptomlar yapar.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Sinovit (Eklem Zarı İltihabı)</h3>
              <p className="text-gray-700">
                Aşırı sinoviyal dokudan kaynaklanan ağrı ve şişlik. Artroskopik sinovektomi ile tedavi edilir.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Snapping Hip Sendromu</h3>
              <p className="text-gray-700">
                İliopsoas tendonunun eklem kapsülü üzerinden atlaması. İliopsoas tenotomi ile tedavi edilir.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">7. Enfeksiyon (Septik Artrit)</h3>
              <p className="text-gray-700">
                Eklem içi enfeksiyonun debridmanı ve lavajı.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">❌ Kontraendikasyonlar (Artroskopi Yapılamaz)</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• İleri evre kalça artrozu (eklem aralığı yok)</li>
                <li>• Ciddi eklem sertliği (hareket açıklığı çok kısıtlı)</li>
                <li>• Akut enfeksiyon (relatif)</li>
                <li>• Aşırı obezite (teknik zorluk)</li>
                <li>• Damar-sinir patolojileri (traksiyon riski)</li>
              </ul>
            </div>
          </section>

          {/* Section 4: Ameliyat Süreci */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ameliyat Süreci</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Ameliyat Öncesi Hazırlık</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Preoperatif değerlendirme (MR, röntgen, kan testleri)</li>
                  <li>• Anestezi konsültasyonu</li>
                  <li>• Kan sulandırıcı ilaçların kesilmesi</li>
                  <li>• Açlık süresi (ameliyattan 6-8 saat önce)</li>
                  <li>• Kıl temizliği (gerekirse)</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Anestezi</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Genel anestezi + periferik sinir bloğu:</strong> Ameliyat sırasında hasta uyutulur, 
                  ameliyat sonrası ağrı kontrolü için femoral sinir bloğu uygulanır.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Pozisyonlama</h3>
                <p className="text-gray-700">
                  <strong>Supine (sırtüstü) veya lateral (yan yatar) pozisyon:</strong> Özel traksiyon masasında, 
                  eklem aralığını açmak için kontrollü traksiyon uygulanır.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Portal (Giriş) Oluşturma</h3>
                <p className="text-gray-700 mb-2">
                  Floroskopi (röntgen) kılavuzluğunda 2-4 adet küçük cilt kesisi (portal) açılır:
                </p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <strong>Anterolateral portal:</strong> Kamera girişi</li>
                  <li>• <strong>Mid-anterior portal:</strong> Cerrahi aletler</li>
                  <li>• <strong>Posterolateral portal:</strong> Eklem dışı (peritrochanteric) alan</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">5. Tanısal Artroskopi</h3>
                <p className="text-gray-700">
                  Eklem içi sistematik olarak incelenir: labrum, kıkırdak, ligamentum teres, sinoviyal doku, 
                  femoral baş ve asetabulum değerlendirilir.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">6. Cerrahi Prosedürler</h3>
                <ul className="text-gray-700 space-y-2">
                  <li><strong>Labral tamir:</strong> Yırtık labrum eklem kıkırdağına dikilir (anchor kullanılarak)</li>
                  <li><strong>Osteoplasti (CAM rezeksiyonu):</strong> Femur başı-boyun fazla kemiği törpülenir</li>
                  <li><strong>Rim rezeksiyonu (Pincer tedavisi):</strong> Asetabulum kenarı düzeltilir</li>
                  <li><strong>Mikrofraktür:</strong> Kıkırdak defektinde altta kemik delinir (fibrokartilaj oluşumu için)</li>
                  <li><strong>Debridman:</strong> Yırtık/aşınmış dokuların temizlenmesi</li>
                  <li><strong>Serbest cisim çıkarılması</strong></li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">7. Kapanış</h3>
                <p className="text-gray-700">
                  Portal yerleri birkaç dikiş ile kapatılır. Dren genellikle gerekmez. Steril pansuman yapılır.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">⏱️ Ameliyat Süresi</h3>
                <p className="text-gray-700">
                  Genellikle 1.5-3 saat arasında değişir (patolojinin kapsamına göre).
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Ameliyat Sonrası */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ameliyat Sonrası Süreç ve İyileşme</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">İlk 24-48 Saat</h3>
            <div className="bg-yellow-50 p-6 rounded-lg mb-6">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">→</span>
                  <span>Hastanede gözlem (genellikle 1 gün, günübirlik de mümkün)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">→</span>
                  <span>Ağrı kontrolü (IV veya oral analjezikler)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">→</span>
                  <span>Buz uygulaması (şişliği azaltmak için)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">→</span>
                  <span>Koltuk değneği ile hareketlilik (kısmi yük verme)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">→</span>
                  <span>Tromboz profilaksisi (kan sulandırıcı enjeksiyonlar)</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">İyileşme Aşamaları</h3>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Zaman</th>
                    <th className="px-4 py-3 text-left font-semibold">Aktivite</th>
                    <th className="px-4 py-3 text-left font-semibold">Hedefler</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3">0-2 hafta</td>
                    <td className="px-4 py-3">Korunma fazı, koltuk değneği</td>
                    <td className="px-4 py-3">Ağrı-şişlik kontrolü, yara iyileşmesi</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">2-6 hafta</td>
                    <td className="px-4 py-3">Hafif yük verme, pasif-aktif egzersizler</td>
                    <td className="px-4 py-3">Hareket açıklığı kazanma</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">6-12 hafta</td>
                    <td className="px-4 py-3">Tam yük verme, güçlendirme</td>
                    <td className="px-4 py-3">Kas gücü artırma, propriyosepsiyon</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">3-6 ay</td>
                    <td className="px-4 py-3">Spora dönüş aşaması</td>
                    <td className="px-4 py-3">Fonksiyonel aktiviteler, kondisyon</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">6-12 ay</td>
                    <td className="px-4 py-3">Tam spora dönüş</td>
                    <td className="px-4 py-3">Önceki performans seviyesine ulaşma</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Fizik Tedavi Programı</h3>
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Erken faz:</strong> Pasif ROM (hareket açıklığı), izometrik egzersizler</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Orta faz:</strong> Aktif ROM, hafif direnç egzersizleri</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>İleri faz:</strong> Kuvvetlendirme, denge, fonksiyonel egzersizler</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Spora dönüş:</strong> Pliometrik, sportif hareketler, kondisyon</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Kaçınılması Gereken Hareketler</h3>
            <div className="bg-red-50 p-6 rounded-lg">
              <ul className="text-red-800 space-y-1">
                <li>• İlk 6 hafta aşırı fleksiyon ({'>'}90°) ve adduksiyon (bacak çaprazlama)</li>
                <li>• İlk 3 ay yüksek etkili sporlar (koşu, zıplama)</li>
                <li>• İlk 6 hafta derin çömelme, bacak havaya kaldırma</li>
                <li>• Ani dönme hareketleri (ilk 3 ay)</li>
              </ul>
            </div>
          </section>

          {/* Section 6: Avantajlar ve Riskler */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Avantajlar ve Riskler</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">✅ Avantajlar</h3>
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Minimal doku hasarı (küçük kesiler)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Daha az ameliyat sonrası ağrı</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Hızlı iyileşme ve erken mobilizasyon</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Kozmetik olarak üstün (küçük skarlar)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Düşük enfeksiyon riski</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Kısa hastane yatış süresi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Eklem içi detaylı görüntüleme imkanı</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">⚠️ Riskler ve Komplikasyonlar</h3>
            <div className="bg-red-50 p-6 rounded-lg">
              <p className="text-red-800 mb-3">Kalça artroskopisi genel olarak güvenlidir, ancak şu riskler vardır:</p>
              <ul className="text-red-800 space-y-1 text-sm">
                <li>• <strong>Sinir yaralanması:</strong> Traksiyon sırasında pudendal, lateral femoral kutanöz sinir (%0.5-1)</li>
                <li>• <strong>Heterotopik ossifikasyon:</strong> Eklem çevresinde kemikleşme (%1-6)</li>
                <li>• <strong>Traksiyon komplikasyonları:</strong> Kasık bölgesinde morarma, uyuşukluk</li>
                <li>• <strong>Enfeksiyon:</strong> Nadir ({'<'}0.5%)</li>
                <li>• <strong>Tromboz/emboli:</strong> Çok nadir</li>
                <li>• <strong>Sıvı ekstravasasyonu:</strong> Eklem dışına sıvı kaçışı</li>
                <li>• <strong>Cerrahi başarısızlık:</strong> Semptomların devam etmesi (%10-15)</li>
              </ul>
              <p className="text-red-800 mt-3 text-sm">
                <strong>Not:</strong> Deneyimli cerrahlar ve uygun hasta seçimi ile komplikasyon riski minimalize edilir.
              </p>
            </div>
          </section>

          {/* Section 7: Sıkça Sorulan Sorular */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ameliyat sonrası ne zaman yürüyebilirim?</h3>
                <p className="text-gray-700">
                  İlk gün koltuk değneği desteği ile yürüyebilirsiniz. Tam yük verme genellikle 2-6 hafta içinde 
                  (yapılan prosedüre göre) izin verilir.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">İşe ne zaman dönebilirim?</h3>
                <p className="text-gray-700">
                  Masabaşı işlerde 1-2 hafta, fiziksel işlerde 6-12 hafta sonra dönüş mümkündür.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Spor ne zaman yapabilirim?</h3>
                <p className="text-gray-700">
                  Yüzme ve bisiklet 6-8 hafta, koşu 3-4 ay, futbol-basketbol gibi kontakt sporlar 6-9 ay sonra 
                  (cerrahın onayı ile) yapılabilir.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ameliyat başarı oranı nedir?</h3>
                <p className="text-gray-700">
                  Uygun hasta seçiminde %80-90 başarı oranı bildirilmiştir. Başarı, erken tanı, ileri artroz yokluğu, 
                  uygun rehabilitasyon ve hasta uyumu ile artar.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ameliyat sonrası artrit oluşur mu?</h3>
                <p className="text-gray-700">
                  Kalça artroskopisinin amacı artrit gelişimini önlemek veya yavaşlatmaktır. Ancak ileri evre hasar 
                  varsa, uzun vadede artrit ilerleyebilir. Erken müdahale önemlidir.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8: Kaynaklar */}
          <section className="mb-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kaynaklar</h2>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-700">
              <li>
                Griffin DR, et al. "Hip arthroscopy versus best conservative care for the treatment of femoroacetabular impingement syndrome (UK FASHIoN): a multicentre randomised controlled trial" Lancet. 2018.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=hip+arthroscopy+femoroacetabular+impingement+UK+FASHIoN" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Ayeni OR, et al. "Surgical indications for arthroscopic management of femoroacetabular impingement" 
                Arthroscopy. 2012.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=arthroscopic+femoroacetabular+impingement+surgical+indications" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Harris JD, et al. "Complications and reoperations during and after hip arthroscopy: a systematic review of 92 studies and more than 6,000 patients" Arthroscopy. 2013.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=hip+arthroscopy+complications+reoperations+systematic+review" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
            </ol>
          </section>

          {/* Section 9: Internal Link - ZORUNLU! */}
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
            <p className="text-gray-700 leading-relaxed mb-4">
              Kalça artroskopisi, kalça eklem patolojilerinin tedavisinde minimal invaziv, etkili ve güvenli bir yöntemdir. 
              Özellikle genç ve aktif hastalarda erken müdahale ile artrit gelişimini önleyebilir veya geciktirebilir.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Uygun hasta seçimi, deneyimli cerrah ve kapsamlı rehabilitasyon programı ile başarı oranı yüksektir. 
              Kalça ağrınız varsa ve konservatif tedavilere yanıt alamıyorsanız, kalça artroskopisi için bir ortopedi 
              uzmanına başvurmanızı öneririz.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-center text-white mt-12">
          <h2 className="text-2xl font-bold mb-4">Kalça Artroskopisi Hakkında Detaylı Bilgi</h2>
          <p className="mb-6">Kalça problemleriniz için artroskopi uygunluğunu değerlendirmek için randevu alın.</p>
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
