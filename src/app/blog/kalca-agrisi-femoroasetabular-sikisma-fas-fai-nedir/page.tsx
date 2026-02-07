import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kalça Ağrısı: Femoroasetabüler Sıkışma (FAS/FAI) Nedir? | Op. Dr. Özgür Oktay Nar',
  description: 'Femoroasetabüler sıkışma sendromu (FAS/FAI) nedir? Genç erişkinlerde kalça ağrısı nedeni, belirtileri, tanı yöntemleri ve tedavi seçenekleri.',
  keywords: 'femoroasetabüler sıkışma, FAS, FAI, kalça ağrısı, genç kalça ağrısı, cam impingement, pincer impingement, kalça artroskopisi',
  authors: [{ name: 'Op. Dr. Özgür Oktay Nar' }],
  openGraph: {
    title: 'Kalça Ağrısı: Femoroasetabüler Sıkışma (FAS/FAI) Nedir?',
    description: 'Femoroasetabüler sıkışma sendromu (FAS/FAI) nedir? Genç erişkinlerde kalça ağrısı nedeni, belirtileri, tanı yöntemleri ve tedavi seçenekleri.',
    type: 'article',
    locale: 'tr_TR',
    url: 'https://www.ozguroktaynar.com/blog/kalca-agrisi-femoroasetabular-sikisma-fas-fai-nedir',
    siteName: 'Op. Dr. Özgür Oktay Nar',
    images: [
      {
        url: 'https://placehold.co/1200x630/e2e8f0/475569?text=Femoroaseabular+Sikisma',
        width: 1200,
        height: 630,
        alt: 'Femoroasetabüler sıkışma sendromu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kalça Ağrısı: Femoroasetabüler Sıkışma (FAS/FAI) Nedir?',
    description: 'Femoroasetabüler sıkışma sendromu (FAS/FAI) nedir? Genç erişkinlerde kalça ağrısı nedeni, belirtileri, tanı yöntemleri ve tedavi seçenekleri.',
    images: ['https://placehold.co/1200x630/e2e8f0/475569?text=Femoroaseabular+Sikisma'],
  },
  alternates: {
    canonical: 'https://www.ozguroktaynar.com/blog/kalca-agrisi-femoroasetabular-sikisma-fas-fai-nedir',
  },
};

export default function BlogPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': 'https://www.ozguroktaynar.com/blog/kalca-agrisi-femoroasetabular-sikisma-fas-fai-nedir#webpage',
        url: 'https://www.ozguroktaynar.com/blog/kalca-agrisi-femoroasetabular-sikisma-fas-fai-nedir',
        name: 'Kalça Ağrısı: Femoroasetabüler Sıkışma (FAS/FAI) Nedir?',
        description: 'Femoroasetabüler sıkışma sendromu (FAS/FAI) nedir? Genç erişkinlerde kalça ağrısı nedeni, belirtileri, tanı yöntemleri ve tedavi seçenekleri.',
        datePublished: '2025-01-24T10:00:00+03:00',
        dateModified: '2025-01-24T10:00:00+03:00',
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
          <span className="text-gray-700">Kalça Ağrısı: Femoroasetabüler Sıkışma (FAS/FAI) Nedir?</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Kalça Ağrısı: Femoroasetabüler Sıkışma (FAS/FAI) Nedir?</h1>
          <div className="flex items-center text-gray-600 text-sm mb-6">
            <span>Op. Dr. Özgür Oktay Nar</span>
            <span className="mx-2">•</span>
            <time>24 Ocak 2025</time>
          </div>
          <img
            src="https://placehold.co/1200x630/e2e8f0/475569?text=Femoroaseabular+Sikisma"
            alt="Femoroasetabüler sıkışma sendromu"
            className="w-full rounded-xl shadow-lg"
          />
        </header>

        {/* Main Content - 7 STEP ARCHITECTURE */}
        <div className="prose prose-lg max-w-none">
          
          {/* Section 1: Giriş */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Giriş</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Genç bir yetişkin misiniz ve kalçanızda, özellikle oturmaktan kalkarken veya spor yaparken kasık ağrısı hissediyor musunuz? Bağdaş kuramıyor, ayakkabı bağlayamıyor veya arabaya binerken zorluk mu çekiyorsunuz? Bu belirtiler femoroasetabüler sıkışma sendromu (FAS veya FAI - Femoroacetabular Impingement) işareti olabilir.
            </p>
            <p className="text-gray-700 leading-relaxed">
              FAS, genç ve orta yaşlı aktif bireylerde kalça ağrısının en yaygın nedenlerinden biridir ve erken tanı konulmadığında kalça artrozuna (kireçlenme) yol açabilir. Bu yazıda FAS'ın ne olduğunu, nasıl geliştiğini, belirtilerini, tanı yöntemlerini ve tedavi seçeneklerini detaylı olarak ele alacağız.
            </p>
          </section>

          {/* Section 2: FAS/FAI Nedir? */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Femoroasetabüler Sıkışma (FAS/FAI) Nedir?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Femoroasetabüler sıkışma, kalça ekleminde femur (uyluk kemiği) ile asetabulum (kalça çukuru) arasında anormal mekanik temas ve sürtünme sonucu gelişen bir durumdur. Normal kalça hareketinde kemikler arasında yeterli boşluk vardır, ancak FAS'ta anatomik şekil bozuklukları bu boşluğu daraltır ve eklem kıkırdağı ile labrum (eklem dudağı) hasar görür.
            </p>

            <div className="bg-[#E6FAF8] p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">FAS Tipleri (Morfokojik Sınıflama)</h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">1. CAM Tipi (Cam Impingement)</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• <strong>Anatomi:</strong> Femur başı-boyun bileşkesinde ek kemik oluşumu (bump) - femur başı küresel değil, hafif oval</li>
                    <li>• <strong>Mekanizma:</strong> Kalça fleksiyonu ve iç rotasyon sırasında bu bump asetabuluma çarpar</li>
                    <li>• <strong>Hasar:</strong> Önce asetabular kıkırdak hasar görür (anterosuperior), sonra labrum yırtılır</li>
                    <li>• <strong>Demografi:</strong> Genç erkekler (20-40 yaş), sporcularda yaygın (futbol, hokey, koşu)</li>
                    <li>• <strong>Radyoloji:</strong> Alpha açısı {'>'}55° (normal {'<'}50°)</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">2. Pincer Tipi (Pincer Impingement)</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• <strong>Anatomi:</strong> Asetabulumun aşırı derinliği veya ön kenarda (anterior rim) ek kemik oluşumu (over-coverage)</li>
                    <li>• <strong>Mekanizma:</strong> Asetabulum femur başını aşırı örter, hareket sırasında "kıskaç" (pincer) gibi sıkıştırır</li>
                    <li>• <strong>Hasar:</strong> Önce labrum ezilir (posteroinferior), sonra kıkırdak ve femur boynunda karşı yaralanma (contre-coup)</li>
                    <li>• <strong>Demografi:</strong> Orta yaşlı kadınlar (30-50 yaş)</li>
                    <li>• <strong>Radyoloji:</strong> Lateral center-edge açısı {'>'}40° (normal 25-40°), crossover sign (pelvis AP grafide)</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">3. Mikst Tip (CAM + Pincer)</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• <strong>Tanım:</strong> Hem CAM hem Pincer özelliklerinin bir arada bulunması</li>
                    <li>• <strong>Sıklık:</strong> %80-85 FAS vakası mikst tiptir (saf CAM veya Pincer nadirdir)</li>
                    <li>• <strong>Klinik:</strong> Daha karmaşık hasar paterni, tedavi planlaması zor</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              <strong>Patofizyoloji:</strong> FAS, eklem kıkırdağı ve labrum üzerinde tekrarlayan mikrotravmalara neden olur. Zamanla kıkırdakta delaminasyon (soyulma), labrum yırtıkları ve ossifikasyon (kemikleşme) gelişir. Tedavi edilmezse, 5-15 yıl içinde erken evre kalça artrozu (osteoartrit) riski yüksektir.
            </p>
          </section>

          {/* Section 3: Belirtiler */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">FAS Belirtileri</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              FAS belirtileri genellikle yavaş başlar ve zamanla artar. Akut travma olmadan kronik ağrı tipiktir.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Karakteristik Belirtiler</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>Kasık Ağrısı:</strong> En yaygın belirti - kalça ekleminin önünde (inguinal bölge), bazen uyluk ortasına yayılır. Tipik olarak "C-işareti" (C-sign) - hasta eliyle kalça ön tarafını kavrar.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>Oturma Ağrısı:</strong> Uzun süre oturma (araba, sinema, masa) sonrası sertlik ve ağrı, kalkmakta zorluk</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>Hareket Kısıtlılığı:</strong> Ayakkabı bağlama, çorap giyme, tırnak kesme, arabaya binme zorluğu. Bağdaş kuramama, bacak bacak üstüne atamama.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>Aktivite İle Artan Ağrı:</strong> Yürüyüş, merdiven çıkma, koşu, spor sırasında ağrı. İstirahat ederken azalır (erken evrede).</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>Clicking/Clunking (Klik Sesi):</strong> Kalça hareketinde anormal sesler - labrum yırtığı işareti</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>Catching (Yakalanma Hissi):</strong> Belirli hareketlerde kalçanın kilitlenme hissi</span>
              </li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-6">
              <p className="text-gray-700">
                <strong>⚠️ Tipik Hasta Profili:</strong>
                <br />• Yaş: 20-50 (genç-orta yaşlı)
                <br />• Aktivite: Sporcu veya aktif yaşam (futbol, koşu, bale, yoga, savaş sanatları)
                <br />• Şikayet: "Kalçamda kasıkta ağrı var, ayakkabı bağlayamıyorum"
                <br />• Süre: Aylar-yıllar (kronik, yavaş ilerleyen)
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Fizik Muayene Testleri</h3>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• <strong>FADIR Testi (Fleksiyon-Adduksiyon-İç Rotasyon):</strong> Hasta sırtüstü, kalça 90° bükülü, bacak karşı tarafa çapraz + iç rotasyon → kasık ağrısı pozitif FAS belirtisi (duyarlılık %95)</li>
              <li>• <strong>FABER Testi (Fleksiyon-Abduksiyon-Dış Rotasyon):</strong> "Çarpı 4" pozisyonu - kalça yan ve dış rotasyonda → ağrı varsa labrum patolojisi</li>
              <li>• <strong>İç Rotasyon Kısıtlılığı:</strong> 90° fleksiyonda iç rotasyon {'<'}15° (normal 30-40°)</li>
              <li>• <strong>Log Roll Testi:</strong> Bacak uzun, kalça pasif iç-dış rotasyon → ağrı/klik sesi</li>
            </ul>
          </section>

          {/* Section 4: Tanı Yöntemleri */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">FAS Tanı Yöntemleri</h2>
            
            <div className="space-y-4 mb-6">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Radyografi (X-ray)</h3>
                <p className="text-gray-700 mb-2"><strong>Grafikler:</strong> Pelvis AP (anteroposterior), kalça lateral (Dunn view, cross-table lateral)</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• <strong>CAM değerlendirmesi:</strong> Alpha açısı ölçümü ({'>'}55° anormal)</li>
                  <li>• <strong>Pincer değerlendirmesi:</strong> Lateral center-edge açısı ({'>'}40°), crossover sign</li>
                  <li>• <strong>Artrit değerlendirmesi:</strong> Eklem aralığı daralması, osteofitler, kistler</li>
                  <li>• <strong>Avantaj:</strong> Ucuz, kolay, kemik morfolojisi net</li>
                  <li>• <strong>Dezavantaj:</strong> Yumuşak doku (kıkırdak, labrum) görülmez</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. MRI (Manyetik Rezonans)</h3>
                <p className="text-gray-700 mb-2"><strong>Altın Standart:</strong> MR Artrografi (eklem içine kontrast madde + MR çekimi)</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• <strong>Görüntüler:</strong> Labrum yırtıkları (%90+ labrum patolojisi), kıkırdak hasarı (delaminasyon), sinovit</li>
                  <li>• <strong>Kontrast gerekli mi?:</strong> Artrografi labrum detayını artırır (duyarlılık %95 vs %65)</li>
                  <li>• <strong>Sınıflama:</strong> Beck sınıflaması (kıkırdak hasar evre 1-4)</li>
                  <li>• <strong>Avantaj:</strong> Yumuşak doku detayı mükemmel, cerrahi planlama</li>
                  <li>• <strong>Dezavantaj:</strong> Pahalı, kontrenjlikasyonlar (hamilelik, implant)</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. CT (Bilgisayarlı Tomografi)</h3>
                <ul className="space-y-1 text-gray-700">
                  <li>• <strong>Kullanım:</strong> 3D rekonstrüksiyon - CAM/Pincer deformitesinin detaylı analizi</li>
                  <li>• <strong>Avantaj:</strong> Kemik morfolojisi çok net, cerrahi planlama (sanal osteoplasti simülasyonu)</li>
                  <li>• <strong>Dezavantaj:</strong> Radyasyon, yumuşak doku kötü</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Diagnostik Enjeksiyon</h3>
                <p className="text-gray-700">
                  Eklem içi lokal anestezik (lidokain) + steroid enjeksiyonu → Ağrı %70+ azalırsa FAS tanısı desteklenir (eklem dışı ağrı kaynakları ekarte edilir - bursit, tendinit, lumbar radikülopati).
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Tedavi Seçenekleri */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">FAS Tedavi Seçenekleri</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Konservatif Tedavi (İlk Basamak)</h3>
            <p className="text-gray-700 mb-4">
              Hafif-orta evre FAS (minimal kıkırdak hasarı) öncelikle ameliyatsız tedavi ile yönetilir. Başarı oranı %30-40.
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>Aktivite Modifikasyonu:</strong> Ağrılı hareketlerden kaçının (derin çömelme, bağdaş, koşu). Düşük etkili aktiviteler (yüzme, bisiklet).</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>NSAİD:</strong> İbuprofen, naproxen (2-4 hafta) - iltihap kontrolü</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>Fizik Tedavi (Kritik!):</strong>
                  <br />- Core stabilizasyon (karın ve bel kasları)
                  <br />- Kalça fleksör germe (iliopsoas, rektus femoris)
                  <br />- Kalça abdüktör güçlendirme (gluteus medius)
                  <br />- Hamstring esnekliği
                  <br />- Lumbo-pelvik stabilizasyon
                  <br />Süre: 8-12 hafta, haftada 5-7 gün
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>İntraarticular Kortikosteroid Enjeksiyonu:</strong> Geçici ağrı rahatlaması (2-6 ay), fizik tedaviye katılımı kolaylaştırır.</span>
              </li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-6">
              <p className="text-gray-700">
                <strong>⚠️ Konservatif Tedavi Sınırlaması:</strong> FAS anatomik bir problemdir (kemik şekli). Fizik tedavi semptomları azaltabilir ama deformiteyi düzeltemez. Eğer 3-6 ay konservatif tedaviye rağmen ağrı devam ediyorsa, cerrahi düşünülmelidir.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cerrahi Tedavi: Kalça Artroskopisi</h3>
            <p className="text-gray-700 mb-4">
              Modern kalça cerrahisinin %90'ı artroskopik (kapalı) olarak yapılır. Açık cerrahi (cerrahi dislokasyon) nadir, sadece masif deformitelerde.
            </p>

            <div className="bg-[#B3F0EB] p-6 rounded-lg mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Cerrahi Endikasyonlar</h4>
              <ul className="space-y-2 text-gray-700">
                <li>✓ 3-6 ay konservatif tedaviye yanıtsızlık + belirgin fonksiyon kaybı</li>
                <li>✓ Radyolojik FAS bulguları (CAM/Pincer) + MR'da labrum/kıkırdak hasarı</li>
                <li>✓ Genç, aktif hasta ({'<'}50 yaş) + minimal-orta evre artrit (Tönnis evre 0-1)</li>
                <li>✗ <strong>Kontrendikasyon:</strong> İleri artrit (eklem aralığı {'<'}2 mm), ciddi kıkırdak kaybı, yaşlı hasta ({'>'}60 yaş, düşük talep)</li>
              </ul>
            </div>

            <h4 className="text-lg font-semibold text-gray-900 mb-3">Artroskopik Prosedür</h4>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• <strong>Traksiyon:</strong> Hasta özel masada, kalça eklem aralığı açılır (femur başı acetabulumdan çekilir)</li>
              <li>• <strong>Portallar:</strong> 2-3 küçük portal (delik) açılır, kamera ve aletler sokulur</li>
              <li>• <strong>1. Santral Kompartman Çalışması:</strong>
                <br />- Labrum tamiri (yırtık varsa dikilir, débridman)
                <br />- Kıkırdak tamiri/debridman
                <br />- Sinovektomi (iltihaplanmış eklem zarı temizleme)
              </li>
              <li>• <strong>2. Periferik Kompartman (Traksiyon Serbest):</strong>
                <br />- CAM rezeksiyonu (femoral osteokondoplasti) - ek kemik törpülenir
                <br />- Pincer rezeksiyonu (acetabular trimming) - asetabulum kenarı törpülenir
                <br />- Kapsül tamiri
              </li>
              <li>• <strong>Süre:</strong> 90-150 dakika</li>
              <li>• <strong>Hastanede kalış:</strong> 0-1 gün</li>
            </ul>

            <h4 className="text-lg font-semibold text-gray-900 mb-3">Ameliyat Sonrası İyileşme</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>0-2 hafta:</strong> Koltuk değneği (kısmi yük), pasif hareket, kapsül koruması</li>
              <li>• <strong>2-6 hafta:</strong> Tam yük, aktif yardımlı hareket, hafif egzersiz</li>
              <li>• <strong>6-12 hafta:</strong> Güçlendirme, bisiklet, yüzme</li>
              <li>• <strong>4-6 ay:</strong> Koşu, spora dönüş (düşük etkili)</li>
              <li>• <strong>6-12 ay:</strong> Tam spora dönüş (yüksek etkili - futbol, koşu)</li>
            </ul>

            <h4 className="text-lg font-semibold text-gray-900 mb-3">Başarı ve Komplikasyonlar</h4>
            <ul className="space-y-2 text-gray-700">
              <li>✓ <strong>Başarı oranı:</strong> %70-85 (ağrı azalması, fonksiyon kazanımı)</li>
              <li>✓ <strong>Artrit progresyonu önleme:</strong> Kıkırdak hasarını durdurur (erken vakalarda)</li>
              <li>✗ <strong>Komplikasyonlar:</strong> Geçici femoral sinir parestezisi (%5-10, çoğu düzelir), heterotopik ossifikasyon (%1-3), enfeksiyon (%0,5), AVN (avasküler nekroz - nadir, {'<'}%0,5)</li>
            </ul>
          </section>

          {/* Section 6: Sıkça Sorulan Sorular */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">FAS tedavi edilmezse ne olur?</h3>
                <p className="text-gray-700">
                  FAS progresif bir durumdur. Tedavi edilmezse, tekrarlayan sıkışma kıkırdak hasarını artırır. Araştırmalar gösteriyor ki, tedavi edilmemiş FAS hastalarının %50-70'inde 5-15 yıl içinde erken evre kalça artrozu (osteoartrit) gelişir. Bu noktada kalça protezi gerekebilir (30-40 yaşta protez - çok erken!). Erken tanı ve tedavi, artrit riskini %50-60 azaltır.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Kalça artroskopisi ağrılı mı? İyileşme süreci nasıl?</h3>
                <p className="text-gray-700">
                  Ameliyat sonrası ilk 1-2 gün orta ağrı (VAS 4-6/10) - multimodal ağrı yönetimi ile kontrol altında. İlk 2 hafta koltuk değneği ile rahat yürüme (topallama minimal). 4-6 hafta sonra günlük aktivitelere dönebilirsiniz. Tam fonksiyon kazanımı 6-12 ay sürer. Bel fıtığı ameliyatından uzun ama diz protezinden daha hızlı iyileşme. Sabır şart - acele etmek tekrar sıkışma/labrum yırtığı riskini artırır.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">FAS ameliyatı sonrası spora dönebilir miyim?</h3>
                <p className="text-gray-700">
                  Evet, çoğu hasta spora döner (%70-80). Ancak zamanlama kritik:
                  • Düşük etkili (yüzme, bisiklet): 3-4 ay
                  • Orta etkili (tenis, golf): 6 ay
                  • Yüksek etkili (futbol, koşu, dövüş sanatları): 9-12 ay
                  Profesyonel sporcular daha hızlı döner (özel rehabilitasyon). Ancak ekstrem hareketler gerektiren sporlar (bale, artistik jimnastik, yoga'nın ileri pozisyonları) kalıcı olarak kısıtlı olabilir.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Her kalça ağrısı FAS mıdır?</h3>
                <p className="text-gray-700">
                  Hayır. Genç erişkin kalça ağrısının birçok nedeni var:
                  • Trokanter bursiti (yan kalça ağrısı)
                  • İliopsoas tendiniti (kasık ağrısı)
                  • Addüktör strain (iç uyluk)
                  • Osteitis pubis (kasık ortası)
                  • Lumbar radikülopati (bel kaynaklı)
                  • Snapping hip (kilitlenme sesi)
                  • Stres kırığı (femur boyun, pelvis)
                  FAS tanısı için: kasık ağrısı + FADIR pozitif + radyolojik deformite + MR'da labrum/kıkırdak hasarı kombinasyonu gerekli.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">FAS genetik mi? Çocuğuma geçer mi?</h3>
                <p className="text-gray-700">
                  Kısmen genetik. CAM/Pincer deformitesi büyüme döneminde (ergenlik) gelişir - kalça kafası şekillenmesi sırasında epifizyel anormallikler oluşur. Genetik yatkınlık + çevresel faktörler (yoğun spor, özellikle futbol, hokey) birleşince risk artar. Aile öyküsü varsa (ebeveyn/kardeşte FAS), risk 2-3 kat artar. Ancak "kesin geçer" değil - önleyici tedbirler alınabilir (çocukluk/ergenlik döneminde aşırı tek spor zorlamamak, çeşitlilik).
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Kaynaklar */}
          <section className="mb-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kaynaklar</h2>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-700">
              <li>
                Ganz R, et al. "Femoroacetabular impingement: a cause for osteoarthritis of the hip." Clin Orthop Relat Res. 2003.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=ganz+femoroacetabular+impingement+osteoarthritis+hip" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Beck M, et al. "Hip morphology influences the pattern of damage to the acetabular cartilage: femoroacetabular impingement as a cause of early osteoarthritis of the hip." J Bone Joint Surg Br. 2005.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=beck+hip+morphology+acetabular+cartilage+impingement" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Philippon MJ, et al. "Arthroscopic management of femoroacetabular impingement: osteoplasty technique and literature review." Am J Sports Med. 2007.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=philippon+arthroscopic+femoroacetabular+impingement+osteoplasty" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Byrd JWT, Jones KS. "Prospective analysis of hip arthroscopy with 2-year follow-up." Arthroscopy. 2000.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=byrd+jones+hip+arthroscopy+prospective+analysis" 
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
                <strong>İlgili İçerik:</strong> Kalça ağrısı için ameliyatsız tedavi seçenekleri hakkında daha fazla bilgi almak isterseniz{' '}
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
              Femoroasetabüler sıkışma (FAS), genç erişkinlerde kronik kalça ağrısının en yaygın nedenlerinden biridir ve erken tanı kritiktir. Tedavi edilmediğinde, 5-15 yıl içinde erken evre kalça artrozuna yol açabilir. Konservatif tedavi (fizik tedavi, aktivite modifikasyonu) hafif vakalarda etkili olabilir, ancak çoğu hasta için kalça artroskopisi en uygun çözümdür.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Genç yaşta kasık ağrısı, oturma zorluğu veya ayakkabı bağlama problemi yaşıyorsanız, bir ortopedi ve travmatoloji uzmanına başvurarak FAS değerlendirmesi yaptırın. Erken tanı ve tedavi, kalça sağlığınızı uzun yıllar korumanızı sağlar ve erken protez ihtiyacını önler.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#01CAB8] to-[#01A899] rounded-xl p-8 text-center text-white mt-12">
          <h2 className="text-2xl font-bold mb-4">Kalça Ağrınız İçin Uzman Değerlendirmesi</h2>
          <p className="mb-6">FAS tanı ve tedavisi için randevu alın.</p>
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
