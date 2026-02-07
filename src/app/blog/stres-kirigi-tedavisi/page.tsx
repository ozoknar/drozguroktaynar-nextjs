import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Stres Kırığı Tedavisi: Belirtiler, Tanı ve İyileşme Süreci | Op. Dr. Özgür Oktay Nar',
  description: 'Stres kırığı nedir, nasıl tedavi edilir? Koşucular ve sporcular için stres kırığı belirtileri, tanı yöntemleri ve iyileşme süreci hakkında uzman bilgisi.',
  keywords: 'stres kırığı, stress fracture, yorgunluk kırığı, koşucu yaralanması, kemik ödemi, tibia stres kırığı, metatarsal kırık',
  authors: [{ name: 'Op. Dr. Özgür Oktay Nar' }],
  openGraph: {
    title: 'Stres Kırığı Tedavisi: Belirtiler, Tanı ve İyileşme Süreci',
    description: 'Stres kırığı nedir, nasıl tedavi edilir? Koşucular ve sporcular için stres kırığı belirtileri, tanı yöntemleri ve iyileşme süreci hakkında uzman bilgisi.',
    type: 'article',
    locale: 'tr_TR',
    url: 'https://www.ozguroktaynar.com/blog/stres-kirigi-tedavisi',
    siteName: 'Op. Dr. Özgür Oktay Nar',
    images: [
      {
        url: 'https://placehold.co/1200x630/e2e8f0/475569?text=Stres+Kirigi',
        width: 1200,
        height: 630,
        alt: 'Stres kırığı tedavisi ve iyileşme',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stres Kırığı Tedavisi: Belirtiler, Tanı ve İyileşme Süreci',
    description: 'Stres kırığı nedir, nasıl tedavi edilir? Koşucular ve sporcular için stres kırığı belirtileri, tanı yöntemleri ve iyileşme süreci hakkında uzman bilgisi.',
    images: ['https://placehold.co/1200x630/e2e8f0/475569?text=Stres+Kirigi'],
  },
  alternates: {
    canonical: 'https://www.ozguroktaynar.com/blog/stres-kirigi-tedavisi',
  },
};

export default function BlogPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': 'https://www.ozguroktaynar.com/blog/stres-kirigi-tedavisi#webpage',
        url: 'https://www.ozguroktaynar.com/blog/stres-kirigi-tedavisi',
        name: 'Stres Kırığı Tedavisi: Belirtiler, Tanı ve İyileşme Süreci',
        description: 'Stres kırığı nedir, nasıl tedavi edilir? Koşucular ve sporcular için stres kırığı belirtileri, tanı yöntemleri ve iyileşme süreci hakkında uzman bilgisi.',
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
          <Link href="/" className="hover:text-[#01CAB8]">Ana Sayfa</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-[#01CAB8]">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">Stres Kırığı Tedavisi</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Stres Kırığı Tedavisi: Belirtiler, Tanı ve İyileşme Süreci</h1>
          <div className="flex items-center text-gray-600 text-sm mb-6">
            <span>Op. Dr. Özgür Oktay Nar</span>
            <span className="mx-2">•</span>
            <time>18 Ocak 2025</time>
          </div>
          <img
            src="https://placehold.co/1200x630/e2e8f0/475569?text=Stres+Kirigi"
            alt="Stres kırığı tedavisi ve iyileşme"
            className="w-full rounded-xl shadow-lg"
          />
        </header>

        {/* Main Content - 7 STEP ARCHITECTURE */}
        <div className="prose prose-lg max-w-none">
          
          {/* Section 1: Giriş */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Giriş</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Koşu veya yüksek etkili spor yaparken bacağınızda giderek artan, lokalize bir ağrı hissediyor musunuz? İstirahat ederken rahat, ancak aktiviteye başladığınızda ağrı tekrar mı başlıyor? Bu belirtiler stres kırığının işareti olabilir.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Stres kırığı (yorgunluk kırığı), özellikle koşucular, atletler ve askerlerde sık görülen bir aşırı kullanım yaralanmasıdır. Normal kırıklardan farklı olarak tek bir travma değil, tekrarlayan mikrotravmalar sonucu gelişir. Bu yazıda stres kırığının ne olduğunu, nasıl tedavi edildiğini ve spora güvenli dönüş sürecini detaylı olarak ele alacağız.
            </p>
          </section>

          {/* Section 2: Nedir / Tanım */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stres Kırığı Nedir?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Stres kırığı, kemikte tekrarlayan mekanik yüklenme sonucu oluşan mikrokırıklardır. Normal kemik sürekli olarak yenilenir (remodeling): osteoklastlar eski kemiği yıkar, osteoblastlar yeni kemik yapar. Ancak tekrarlayan stres bu dengeyi bozar - yıkım yapımdan hızlı olur ve kemik zayıflar.
            </p>
            
            <div className="bg-[#E6FAF8] p-6 rounded-lg mb-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Stres Kırığı Evrimi (Kontinuum)</h3>
              <ol className="space-y-2 text-gray-700">
                <li><strong>1. Evre - Stres Reaksiyonu:</strong> Kemik ödemi (MR'da görülür), kırık çizgisi yok. Ağrı hafif, aktivite ile artar.</li>
                <li><strong>2. Evre - Stres Fraktürü:</strong> Kortikal kemikte mikroskobik kırık çizgileri. Radyografide henüz görülmeyebilir.</li>
                <li><strong>3. Evre - Tam Stres Kırığı:</strong> Belirgin kırık çizgisi (radyografide görülür). Periosteal reaksiyon (kemik yüzeyinde iyileşme).</li>
                <li><strong>4. Evre - Komplet Kırık:</strong> Tedavi edilmezse tam kırığa ilerler (yer değişimi olabilir).</li>
              </ol>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Anatomik Dağılım:</strong> Stres kırıkları en sık yük taşıyan kemiklerde görülür:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>• <strong>Tibia (kaval kemiği):</strong> %20-50 - en yaygın lokalizasyon, özellikle iç kenar ortası</li>
              <li>• <strong>Metatarsal (ayak kemikleri):</strong> %20-35 - 2. ve 3. metatarsal en sık</li>
              <li>• <strong>Fibula (kaval kemiği yan):</strong> %10-15</li>
              <li>• <strong>Femur (uyluk kemiği):</strong> %5-10 - femoral boyun yüksek riskli bölge</li>
              <li>• <strong>Pelvis, sakrum, lumbar vertebra:</strong> %5</li>
              <li>• <strong>Nadir:</strong> Kaburga, humerus, radius</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <p className="text-gray-700">
                <strong>⚠️ Yüksek Riskli Stres Kırıkları (Acil Tedavi Gerektirir):</strong>
                <br />
                • <strong>Femoral boyun (tensile side):</strong> Tam kırık ve avasküler nekroz riski
                <br />
                • <strong>Talus:</strong> İyileşme yavaş (vaskülarizasyon zayıf)
                <br />
                • <strong>Navikular (ayak ortası):</strong> Cerrahi gerekebilir
                <br />
                • <strong>5. metatarsal taban (Jones kırığı):</strong> Yüksek kaynamama riski
                <br />
                • <strong>Patella:</strong> Nadirdir, cerrahi endikasyonu yüksek
              </p>
            </div>
          </section>

          {/* Section 3: Belirtiler ve Tanı */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stres Kırığı Belirtileri ve Tanı</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Karakteristik Belirtiler</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>Aktivite İle Artan Ağrı:</strong> Koşu sırasında başlar, mesafe arttıkça şiddetlenir. İstirahat ederken azalır veya tamamen geçer (erken evrede).</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>Lokalize Hassasiyet:</strong> Parmakla basıldığında belirli bir noktada keskin ağrı ("pinpoint tenderness"). Tibiada iç kenar hassasiyeti tipiktir.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>Şişme ve Kızarıklık:</strong> İlerlemiş vakalarda kırık bölgesinde hafif ödem, cilt altında sıcaklık.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>Gece Ağrısı:</strong> Geç evrede istirahat sırasında da zonklayan ağrı (kötü prognoz bulgusudur).</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>"Dreaded Black Line" (Siyah Çizgi):</strong> Tibia ön korteksinde görülen radyografik bulgu - cerrahi endikasyonu yüksek.</span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Tanı Yöntemleri</h3>
            <div className="space-y-4 mb-6">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Klinik Muayene</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• <strong>Fulcrum testi:</strong> (Femoral stres kırığı) - uyluk ortasına baskı uygulanırken ağrı</li>
                  <li>• <strong>Hop testi:</strong> Tek bacak üzerinde zıplama - ağrı varsa pozitif</li>
                  <li>• <strong>Tuning fork testi:</strong> 128 Hz titreşimli çatal kırık bölgesine konur, ağrı varsa pozitif</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Radyolojik Görüntüleme</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>Direkt Grafi (X-ray):</strong>
                    <br />• İlk 2-3 hafta normal olabilir (duyarlılık %15-35)
                    <br />• 2-6 hafta sonra: periosteal reaksiyon, kırık çizgisi, kallus
                    <br />• Avantaj: Ucuz, kolay erişilebilir
                    <br />• Dezavantaj: Erken tanıda yetersiz
                  </li>
                  <li>
                    <strong>MRI (Manyetik Rezonans):</strong>
                    <br />• ALTIN STANDART - %100'e yakın duyarlılık
                    <br />• Kemik ödemi 1-2 gün içinde görülür (T2'de hiperintens sinyal)
                    <br />• Kırık çizgisi, periosteal reaksiyon, yumuşak doku ödemi detayları
                    <br />• Evreleme yapılabilir (tedavi planı için kritik)
                  </li>
                  <li>
                    <strong>Kemik Sintigrafisi (Bone Scan):</strong>
                    <br />• Yüksek duyarlılık (%74-84), ancak spesifite düşük
                    <br />• Tüm iskelet taraması - multipl kırık şüphesinde yararlı
                    <br />• Dezavantaj: Radyasyon, MRI kadar detay vermezbir
                  </li>
                  <li>
                    <strong>CT (Bilgisayarlı Tomografi):</strong>
                    <br />• Kortikal kırık detayı mükemmel
                    <br />• Cerrahi planlama için yararlı
                    <br />• Kullanım: Yüksek riskli bölgeler (navikular, femoral boyun)
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#B3F0EB] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tanı Algoritması</h3>
              <p className="text-gray-700 mb-2">
                <strong>1. Adım:</strong> Klinik değerlendirme + direkt grafi
              </p>
              <p className="text-gray-700 mb-2">
                <strong>2. Adım:</strong> Grafi normal ama klinik şüphe devam → MRI (tercih) veya sintigrafi
              </p>
              <p className="text-gray-700">
                <strong>3. Adım:</strong> Yüksek riskli bölge → MRI + CT (cerrahi değerlendirme)
              </p>
            </div>
          </section>

          {/* Section 4: Tedavi Yöntemleri */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stres Kırığı Tedavi Yöntemleri</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Konservatif Tedavi (Çoğu Vakada İlk Seçenek)</h3>
            
            <div className="bg-green-50 p-6 rounded-lg mb-6 border-l-4 border-green-500">
              <h4 className="text-xl font-bold text-gray-900 mb-4">1. Aktivite Modifikasyonu ve İstirahat</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>✓ Mutlak istirahat:</strong> İlk 2-4 hafta koşu, sıçrama, yüksek etki aktiviteler YOK</li>
                <li><strong>✓ Kısmi yük taşıma:</strong> Koltuk değneği kullanımı (ağrı varsa)</li>
                <li><strong>✓ Cross-training:</strong> Yüzme, su içi koşu, bisiklet (ağrı yoksa) - kardiyoyu koru</li>
                <li><strong>✗ Ağrı ile zorlamak:</strong> "Acı çekerek koşmak" iyileşmeyi engeller!</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-6 border-l-4 border-green-500">
              <h4 className="text-xl font-bold text-gray-900 mb-4">2. Mekanik Destek</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Pnömatik brace (hava yastıklı ateller):</strong> Tibia stres kırıklarında iyileşmeyi 33% hızlandırır</li>
                <li><strong>Cam walker boot (yürüme botu):</strong> Ayak/ayak bileği kırıklarında</li>
                <li><strong>Koltuk değneği:</strong> Femur, pelvis kırıklarında tam yük vermekten kaçının</li>
                <li><strong>Ortez/tabanlık:</strong> Metatarsal kırıklarda ön ayak baskısını azaltır</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-6 border-l-4 border-green-500">
              <h4 className="text-xl font-bold text-gray-900 mb-4">3. İlaç Tedavisi</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Ağrı kesici:</strong> Parasetamol (tercih) - kemik iyileşmesini bozmaz</li>
                <li><strong>⚠️ NSAİD (Dikkat!):</strong> İbuprofen, naproxen kemik iyileşmesini yavaşlatabilir. Kısa süreli (3-5 gün) ve düşük doz kullanın.</li>
                <li><strong>Kalsiyum + D vitamini:</strong> Günlük 1000-1500 mg kalsiyum, 800-2000 IU D vitamini (kemik yoğunluğu düşükse)</li>
                <li><strong>Bifosfonatlar:</strong> Sadece osteoporotik hastalarda, aksi durumda kullanmayın</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-6 border-l-4 border-green-500">
              <h4 className="text-xl font-bold text-gray-900 mb-4">4. Fizik Tedavi ve Rehabilitasyon</h4>
              <p className="text-gray-700 mb-3">
                <strong>Faz 1 (0-4 hafta): Koruma Fazı</strong>
              </p>
              <ul className="space-y-1 text-gray-700 mb-4">
                <li>• İzometrik kasformasyon egzersizleri (eklem hareket yok)</li>
                <li>• Açık kinetik zincir hareketler (minmal yük)</li>
                <li>• Propriosepsiyon (denge tahtası, gözler kapalı tek ayak durma)</li>
              </ul>
              <p className="text-gray-700 mb-3">
                <strong>Faz 2 (4-6 hafta): Kademeli Yüklenme</strong>
              </p>
              <ul className="space-y-1 text-gray-700 mb-4">
                <li>• Tam yük verme (ağrısız ise)</li>
                <li>• Kapalı kinetik zincir egzersizler (squat, lunge - düşük ağırlık)</li>
                <li>• Bisiklet, eliptik artan süre ile</li>
              </ul>
              <p className="text-gray-700 mb-3">
                <strong>Faz 3 (6-12 hafta): Spora Dönüş</strong>
              </p>
              <ul className="space-y-1 text-gray-700">
                <li>• Koşu programı (walk-jog protokolü)</li>
                <li>• Pliometrik egzersizler (hop, jump)</li>
                <li>• Spor-spesifik driller</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cerrahi Tedavi (Endikasyonlar)</h3>
            <p className="text-gray-700 mb-4">
              Stres kırıklarının %90'ı konservatif tedavi ile iyileşir. Cerrahi sadece şu durumlarda gerekir:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">🔴</span>
                <span><strong>Yüksek riskli anatomik bölgeler:</strong> Femoral boyun (tensile), navikular, 5. metatarsal taban, talus, patella, tibia dreaded black line</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">🔴</span>
                <span><strong>Tam kırık veya yer değiştirme:</strong> Komplet kırık gelişmişse</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">🔴</span>
                <span><strong>6 ay konservatif tedaviye yanıtsızlık:</strong> Non-union (kaynamama) riski</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">🔴</span>
                <span><strong>Elit sporcu:</strong> Hızlı dönüş gereken profesyonel sporcular</span>
              </li>
            </ul>

            <p className="text-gray-700 mb-4">
              <strong>Cerrahi Teknikler:</strong>
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>İntramedüller vida:</strong> Femur, tibia, metatarsal için</li>
              <li>• <strong>Kompresyon vida:</strong> Navikular, 5. metatarsal Jones kırığı</li>
              <li>• <strong>Plak-vida:</strong> Tibia dreaded black line</li>
              <li>• <strong>Kemik grefti:</strong> Non-union vakalarında</li>
            </ul>
          </section>

          {/* Section 5: İyileşme Süreci ve Spora Dönüş */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">İyileşme Süresi ve Spora Dönüş</h2>
            
            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bölgeye Göre İyileşme Süreleri</h3>
              <table className="w-full text-sm text-gray-700">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="p-2 text-left">Bölge</th>
                    <th className="p-2 text-left">İstirahat Süresi</th>
                    <th className="p-2 text-left">Spora Dönüş</th>
                    <th className="p-2 text-left">Risk</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="p-2">Metatarsal (2-4)</td>
                    <td className="p-2">4-6 hafta</td>
                    <td className="p-2">6-8 hafta</td>
                    <td className="p-2">Düşük</td>
                  </tr>
                  <tr>
                    <td className="p-2">Tibia (posteromedial)</td>
                    <td className="p-2">6-8 hafta</td>
                    <td className="p-2">8-12 hafta</td>
                    <td className="p-2">Düşük</td>
                  </tr>
                  <tr>
                    <td className="p-2">Fibula</td>
                    <td className="p-2">4-6 hafta</td>
                    <td className="p-2">6-10 hafta</td>
                    <td className="p-2">Düşük</td>
                  </tr>
                  <tr>
                    <td className="p-2">Femoral şaft</td>
                    <td className="p-2">8-12 hafta</td>
                    <td className="p-2">12-16 hafta</td>
                    <td className="p-2">Orta</td>
                  </tr>
                  <tr className="bg-yellow-50">
                    <td className="p-2"><strong>Femoral boyun (tensile)</strong></td>
                    <td className="p-2"><strong>12-16 hafta</strong></td>
                    <td className="p-2"><strong>4-6 ay</strong></td>
                    <td className="p-2"><strong>Yüksek</strong></td>
                  </tr>
                  <tr className="bg-yellow-50">
                    <td className="p-2"><strong>Navikular</strong></td>
                    <td className="p-2"><strong>6-8 hafta NWB</strong></td>
                    <td className="p-2"><strong>4-6 ay</strong></td>
                    <td className="p-2"><strong>Yüksek</strong></td>
                  </tr>
                  <tr className="bg-yellow-50">
                    <td className="p-2"><strong>5. MT taban (Jones)</strong></td>
                    <td className="p-2"><strong>6-8 hafta</strong></td>
                    <td className="p-2"><strong>3-4 ay</strong></td>
                    <td className="p-2"><strong>Yüksek</strong></td>
                  </tr>
                  <tr className="bg-yellow-50">
                    <td className="p-2"><strong>Tibia (anterior cortex)</strong></td>
                    <td className="p-2"><strong>4-6 ay</strong></td>
                    <td className="p-2"><strong>6-12 ay</strong></td>
                    <td className="p-2"><strong>Çok Yüksek</strong></td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-gray-600 mt-2">NWB: Non-weight bearing (yük vermeme)</p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Spora Dönüş Kriterleri</h3>
            <p className="text-gray-700 mb-4">
              Aşağıdaki TÜM kriterleri karşılamalısınız:
            </p>
            <ul className="space-y-2 mb-6 text-gray-700">
              <li>✅ İstirahat ve aktivitede ağrı yok</li>
              <li>✅ Lokal hassasiyet yok (parmakla basıldığında ağrı yok)</li>
              <li>✅ Tek bacak hopping ağrısız (10 tekrar)</li>
              <li>✅ Radyolojik iyileşme (kontrol grafisinde periosteal reaksiyon kaybolmuş)</li>
              <li>✅ Fonksiyonel testler geçilmiş (star excursion, hop test, isokinetik değerlendirme)</li>
            </ul>

            <div className="bg-[#E6FAF8] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Kademeli Dönüş Protokolü (Örnek: Tibia Stres Kırığı)</h3>
              <ol className="space-y-2 text-gray-700">
                <li><strong>Hafta 1-2:</strong> Yürüyüş 20-30 dk, ağrısız ise süreyi artır</li>
                <li><strong>Hafta 3-4:</strong> Walk-jog (2 dk yürü, 1 dk koş x 10 tekrar)</li>
                <li><strong>Hafta 5-6:</strong> Jog oranını artır (1 dk yürü, 2 dk koş)</li>
                <li><strong>Hafta 7-8:</strong> Kontinü koşu 20-30 dk, düz zemin</li>
                <li><strong>Hafta 9-10:</strong> İnterval koşu, tempolu koşu, yokuş</li>
                <li><strong>Hafta 11-12:</strong> Sprint, yön değiştirme, spor-spesifik driller</li>
                <li><strong>Hafta 12+:</strong> Tam spora dönüş</li>
              </ol>
              <p className="text-sm text-gray-600 mt-3">
                ⚠️ Herhangi bir aşamada ağrı başlarsa bir önceki aşamaya dön ve 1 hafta orada kal.
              </p>
            </div>
          </section>

          {/* Section 6: Sıkça Sorulan Sorular */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Stres kırığı normal kırıktan nasıl farklıdır?</h3>
                <p className="text-gray-700">
                  Normal kırık tek bir travma (düşme, çarpma) sonucu oluşur ve radyografide hemen görülür. Stres kırığı ise tekrarlayan mikrotravmalar sonucu yavaş gelişir, ilk 2-3 hafta radyografide görülmeyebilir. Normal kırıkta alçı/tespit genellikle yeterken, stres kırığında aktivite modifikasyonu ve rehabilitasyon kritiktir.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Stres kırığı tekrarlar mı? Nasıl önleyebilirim?</h3>
                <p className="text-gray-700">
                  Evet, tekrarlama oranı %15-20'dir. Önleme stratejileri:
                  • Kademeli antrenman artışı (%10 kuralı: haftalık mesafe/yoğunluğu max %10 artır)
                  • Çapraz antrenman (tek spor değil, çeşitlilik)
                  • Uygun ayakkabı (her 500-800 km'de değiştir)
                  • Biyomekanik değerlendirme (koşu analizi, ayak postürü)
                  • Kalsiyum + D vitamini düzeylerini kontrol et
                  • Kadınlarda menstrüel düzensizlik tedavisi (RED-S: Relative Energy Deficiency in Sport)
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Stres kırığı olan sporcular hangi cross-training yapmalı?</h3>
                <p className="text-gray-700">
                  <strong>ÖNERİLEN (düşük etki):</strong>
                  • Yüzme (mükemmel kardiyovasküler egzersiz, sıfır yük)
                  • Su içi koşu (aqua jogging) - koşu mekaniklerini korur
                  • Bisiklet (otururken, direnç düşük)
                  • Eliptik (alt ekstremite yaralanması yoksa)
                  • Üst vücut ağırlık çalışması
                  <strong>KAÇINILMASI GEREKEN:</strong>
                  • Koşu, sıçrama, step aerobik
                  • Ağır squat, lunge
                  • Tenis, basketbol (pivotlama)
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Kemik yoğunluğu düşüklüğü stres kırığı riskini artırır mı?</h3>
                <p className="text-gray-700">
                  Kesinlikle evet. Özellikle kadın atletlerde "female athlete triad" (adet düzensizliği + düşük enerji alımı + osteoporoz) stres kırığı riskini 2-4 kat artırır. Eğer sık yaralanıyorsanız, adet düzensizliği varsa veya 50 yaş üstüyseniz DEXA taraması (kemik yoğunluğu ölçümü) yaptırın. Düşükse bifosfonat tedavisi, diyet düzenleme ve yük taşıma egzersizleri gerekir.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Stres kırığında MRI şart mı, yoksa X-ray yeter mi?</h3>
                <p className="text-gray-700">
                  X-ray ilk basamaktır (ucuz, kolay). Ancak erken evrede %65-85 oranında stres kırığını atlayabilir. Eğer klinik şüphe güçlü ama X-ray normalse mutlaka MRI çekilmeli (özellikle yüksek riskli bölgelerde). MRI aynı zamanda evreleme yapar: sadece kemik ödemi mi var, yoksa kırık çizgisi mi oluşmuş? Bu tedavi süresini belirler. Sintigrafi alternatif ama MRI kadar detaylı değil.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Kaynaklar */}
          <section className="mb-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kaynaklar</h2>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-700">
              <li>
                Fredericson M, Jennings F, Beaulieu C, Matheson GO. "Stress fractures in athletes." Top Magn Reson Imaging. 2006.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=fredericson+stress+fractures+athletes+imaging" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Kaeding CC, et al. "Stress fractures: pathophysiology, epidemiology, and risk factors." Curr Osteoporos Rep. 2013.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=kaeding+stress+fractures+pathophysiology+epidemiology" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Wright AA, et al. "Risk factors associated with lower extremity stress fractures in runners: a systematic review with meta-analysis." Br J Sports Med. 2015.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=wright+risk+factors+stress+fractures+runners+meta+analysis" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Nattiv A, et al. "American College of Sports Medicine position stand. The female athlete triad." Med Sci Sports Exerc. 2007.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=nattiv+female+athlete+triad+ACSM" 
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
                <strong>İlgili İçerik:</strong> Stres kırığı tedavisi için ameliyatsız yaklaşımlar ve rehabilitasyon programları hakkında daha fazla bilgi almak isterseniz{' '}
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
              Stres kırıkları, erken tanı ve uygun tedavi ile tamamen iyileşebilen yaralanmalardır. Ancak sabır ve disiplin gerektirir. En büyük hata, ağrıyı görmezden gelerek antrenmana devam etmektir - bu basit bir stres reaksiyonunu komplet kırığa dönüştürebilir.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Özellikle koşucular ve yüksek etki sporları yapan atletler, kademeli antrenman artışı, uygun ayakkabı kullanımı ve düzenli dinlenme ile stres kırığı riskini minimize edebilir. Eğer lokalize kemik ağrınız varsa, erken dönemde bir ortopedi ve travmatoloji uzmanına başvurun - erken tanı, iyileşme süresini yarıya indirebilir ve tekrarlamayı önler.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#01CAB8] to-[#01A899] rounded-xl p-8 text-center text-white mt-12">
          <h2 className="text-2xl font-bold mb-4">Stres Kırığı Şüpheniz mi Var?</h2>
          <p className="mb-6">Erken tanı ve doğru tedavi için uzman değerlendirmesi alın.</p>
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
