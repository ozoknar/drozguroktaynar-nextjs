import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Skafoid Kırığı Belirtileri, Tanı ve Tedavi | Dr. Özgür Oktay Nar',
  description: 'Skafoid kırığı el bileği kırıklarının en yaygın tipidir. Belirtiler, tanı yöntemleri, tedavi seçenekleri ve komplikasyonlar hakkında uzman ortopedistten detaylı bilgi.',
  keywords: 'skafoid kırığı, scaphoid fracture, el bileği kırığı, skafoid belirtileri, navicular kırığı, el bileği ağrısı, ortopedi, Bursa ortopedi',
  authors: [{ name: 'Dr. Özgür Oktay Nar' }],
  openGraph: {
    title: 'Skafoid Kırığı: Belirtiler, Tanı ve Tedavi | Dr. Özgür Oktay Nar',
    description: 'Skafoid kırığı hakkında bilmeniz gereken her şey.',
    type: 'article',
    locale: 'tr_TR',
    siteName: 'Dr. Özgür Oktay Nar - Ortopedi Uzmanı',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skafoid Kırığı: Belirtiler ve Tedavi',
    description: 'El bileği kırıklarının en yaygın tipi hakkında uzman görüşü.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD Schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  headline: 'Skafoid Kırığı Belirtileri, Tanı ve Tedavi',
  author: {
    '@type': 'Physician',
    name: 'Dr. Özgür Oktay Nar',
    medicalSpecialty: 'Ortopedik Cerrahi',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bursa',
      addressCountry: 'TR',
    },
  },
  datePublished: '2026-02-06',
  dateModified: '2026-02-06',
  description: 'Skafoid kırığı belirtileri, tanı yöntemleri ve tedavi seçenekleri hakkında kapsamlı rehber.',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://drozguroktaynar.com/blog/skafoid-kirigi-belirtileri',
  },
  about: {
    '@type': 'MedicalCondition',
    name: 'Skafoid Kırığı',
    alternateName: 'Scaphoid Fracture',
  },
};

export default function SkafoidKirigiBelirtileriPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="mb-12">
          <div className="mb-6">
            <Link 
              href="/blog"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              ← Blog'a Dön
            </Link>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skafoid Kırığı Belirtileri, Tanı ve Tedavi
          </h1>
          
          <div className="flex items-center text-gray-600 text-sm mb-6">
            <time dateTime="2026-02-06">6 Şubat 2026</time>
            <span className="mx-2">•</span>
            <span>Dr. Özgür Oktay Nar</span>
            <span className="mx-2">•</span>
            <span>11 dakika okuma</span>
          </div>

          <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-6">
            <Image
              src="/images/blog/skafoid-kirigi-hero.jpg"
              alt="Skafoid kemiği anatomisi ve kırık lokasyonları"
              fill
              className="object-cover"
              priority
            />
          </div>

          <p className="text-xl text-gray-700 leading-relaxed">
            Skafoid kırığı, el bileği kırıklarının en yaygın tipidir ve genellikle düşme sırasında ele binen yük sonucu oluşur. Bu kırık türü özel bir öneme sahiptir çünkü erken tanınmadığında ciddi komplikasyonlara yol açabilir. Bu yazıda skafoid kırığının belirtilerini, tanı yöntemlerini ve tedavi seçeneklerini detaylı şekilde inceleyeceğiz.
          </p>
        </header>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Skafoid Kemiği Nedir?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Skafoid (scaphoid), el bileğinde bulunan 8 küçük kemikten (karpal kemikler) biridir. "Kayık kemiği" veya "navicular" olarak da bilinir. Başparmak tarafında, el bileğinin ön yüzeyinde hissedilebilir bir kemiktir.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Anatomik Özellikler</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Lokasyon:</strong> Başparmak tarafında, radius (ön kol büyük kemiği) ile karpal kemikler arasında</li>
            <li><strong>Şekil:</strong> Kayık (çömlek) şeklinde, iki ucunda eklem yüzeyleri</li>
            <li><strong>Bölümleri:</strong> Proksimal pol (üst uç), bel (waist - orta), distal pol (alt uç)</li>
            <li><strong>İşlev:</strong> El bileği hareketlerinde kritik rol, yük taşıma</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Neden Önemlidir?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Skafoid kemiği iki önemli özelliği nedeniyle hassas bir yapıdır:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Kısıtlı kan dolaşımı:</strong> Proksimal pol bölgesi zayıf kan alır, bu nedenle iyileşme yavaştır</li>
            <li><strong>Avasküler nekroz riski:</strong> Kan akımı kesintiye uğrarsa kemik ölümü (osteonekroz) gelişebilir</li>
            <li><strong>Kaynamama riski:</strong> Diğer kemiklere göre daha yüksek nonunion (kaynamama) oranı</li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
            <p className="text-gray-800">
              <strong>KRİTİK UYARI:</strong> Skafoid kırığı bazen ilk röntgende görülmez! Düşme sonrası el bileğinde ağrı varsa, röntgen normal bile olsa mutlaka kontrol muayenesi gereklidir.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Skafoid Kırığı Nasıl Oluşur?</h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Yaralanma Mekanizması</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            En sık görülen yaralanma mekanizması:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>FOOSH (Fall On Outstretched Hand):</strong> Düşme sırasında açık el üzerine düşme</li>
            <li><strong>El bileği ekstansiyonu:</strong> El bileğinin geriye doğru zorlanması</li>
            <li><strong>Radial deviasyon:</strong> Elin başparmak tarafına doğru açılanması</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Risk Faktörleri</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Genç yaş:</strong> 15-30 yaş arası (aktif yaşam tarzı)</li>
            <li><strong>Erkek cinsiyet:</strong> Erkeklerde 4 kat daha sık</li>
            <li><strong>Spor aktiviteleri:</strong> Futbol, kayak, snowboard, motosiklet, boks</li>
            <li><strong>Osteoporoz:</strong> İleri yaşta kemik yoğunluğu azalması</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Belirtiler ve Semptomlar</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Skafoid kırığının tipik belirtileri şunlardır:
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Akut Belirtiler (Hemen Sonra)</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Ağrı:</strong> Başparmak tabanında, el bileği başparmak tarafında ağrı</li>
            <li><strong>Şişlik:</strong> Hafif-orta derecede şişlik (çok belirgin olmayabilir)</li>
            <li><strong>Hassasiyet:</strong> Anatomik snuffbox (başparmak yanındaki çukur) bölgesinde hassasiyet</li>
            <li><strong>Hareket kısıtlılığı:</strong> El bileği hareketlerinde ağrı</li>
            <li><strong>Güç kaybı:</strong> Kavrama kuvvetinde azalma</li>
            <li><strong>Morarma:</strong> Genellikle minimal veya yok</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Fizik Muayene Bulguları</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Snuffbox hassasiyeti:</strong> Başparmak geriye çekildiğinde oluşan çukurda (anatomik snuffbox) baskıda ağrı - en hassas bulgudur</li>
            <li><strong>Skafoid tüberkül hassasiyeti:</strong> Skafoid kemiğinin el bileği ön yüzeyindeki çıkıntısında hassasiyet</li>
            <li><strong>Aksiyal yük testi:</strong> Başparmağa bastırarak ağrı uyandırma</li>
            <li><strong>Scaphoid shift testi:</strong> El bileği hareketlerinde anormal ses veya kayma hissi</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
            <p className="text-gray-800">
              <strong>Önemli Not:</strong> Skafoid kırığı semptomları genellikle hafiftir ve hasta "sadece burkulma" olduğunu düşünebilir. Bu nedenle tanı gecikmesi sıktır. Düşme sonrası snuffbox bölgesinde hassasiyet varsa, mutlaka röntgen çekilmelidir.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Tanı Yöntemleri</h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Direkt Röntgen</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            İlk tercih edilen görüntüleme yöntemidir:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Scaphoid serisi:</strong> 4 farklı açıdan özel el bileği grafisi</li>
            <li><strong>AP (ön-arka), lateral, oblik, ulnar deviasyon grafisi</strong></li>
            <li><strong>Kısıtlılıklar:</strong> İlk 7-10 günde kırık %20-25 vakalarda görülmez (yanlış negatif)</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>İlk röntgen normalse ne yapılır?</strong>
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Klinik şüphe devam ediyorsa:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Alçı/atel ile immobilizasyon (10-14 gün)</li>
            <li>Tekrar röntgen (10-14 gün sonra) - iyileşme başladıysa kırık çizgisi görülebilir</li>
            <li>Veya ileri görüntüleme (MRI/BT)</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">MRI (Manyetik Rezonans Görüntüleme)</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>En hassas yöntem:</strong> %95-100 sensitivite</li>
            <li><strong>Erken tanı:</strong> Röntgende görülmeyen kırıkları gösterir</li>
            <li><strong>Kemik ödemi:</strong> Kırık öncesi kemik stresini gösterir</li>
            <li><strong>Avasküler nekroz değerlendirmesi:</strong> Kan akımını gösterir</li>
            <li><strong>Maliyet:</strong> Röntgene göre daha pahalı</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">BT (Bilgisayarlı Tomografi)</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Detaylı kemik görüntüleme:</strong> Kırık çizgisi, deplase, fragman sayısı</li>
            <li><strong>Preoperatif planlama:</strong> Cerrahi kararında yardımcı</li>
            <li><strong>Kaynamama değerlendirmesi:</strong> İyileşmeyen kırıklarda</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Kemik Sintigrafisi</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Artık nadiren kullanılır (MRI tercih edilir)</li>
            <li>Hassas ancak spesifik değil</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Kırık Sınıflandırması</h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Lokasyona Göre</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Distal pol kırığı:</strong> %10-20, iyi kan akımı, hızlı iyileşir</li>
            <li><strong>Waist (bel) kırığı:</strong> %60-70, en sık görülen tip</li>
            <li><strong>Proksimal pol kırığı:</strong> %10-20, zayıf kan akımı, yüksek komplikasyon riski</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Stabilitesine Göre</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Stabil:</strong> Deplase olmayan (&lt;1mm), transvers (yatay) kırık çizgisi</li>
            <li><strong>İnstabil:</strong> Deplase (&gt;1mm), vertikal oblik kırık, çoklu fragman</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Tedavi Seçenekleri</h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Konservatif (Ameliyatsız) Tedavi</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Stabil, deplase olmayan kırıklar için uygulanır:
          </p>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Alçı Tedavisi</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Thumb spica alçı:</strong> Başparmağı da içine alan el bileği alçısı</li>
            <li><strong>Süre:</strong> Lokasyona göre 6-12 hafta
              <ul className="list-circle pl-6 mt-2">
                <li>Distal pol: 6-8 hafta</li>
                <li>Waist: 8-12 hafta</li>
                <li>Proksimal pol: 12-20 hafta (veya cerrahi tercih)</li>
              </ul>
            </li>
            <li><strong>Dirsek dahil alçı:</strong> İlk 4-6 hafta bazı cerrahlar dirsek dahil alçı tercih eder (daha iyi immobilizasyon)</li>
            <li><strong>Kontrol röntgenleri:</strong> 2 haftada bir ilk ay, sonra aylık</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Başarı Oranı</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Distal pol: %95+ kaynama</li>
            <li>Waist: %85-90 kaynama</li>
            <li>Proksimal pol: %60-70 kaynama (cerrahi daha tercih edilir)</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cerrahi Tedavi</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Aşağıdaki durumlarda cerrahi önerilir:
          </p>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Cerrahi Endikasyonlar</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Deplase kırık (&gt;1mm)</li>
            <li>İnstabil kırık (oblik, vertikal)</li>
            <li>Proksimal pol kırığı</li>
            <li>Kaynamama (nonunion)</li>
            <li>Avasküler nekroz</li>
            <li>Hasta tercihi (sporcu, erken dönüş isteği)</li>
            <li>Alçıya uyumsuzluk riski</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Cerrahi Yöntemler</h4>

          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>1. Perkütan Vida Fiksasyonu</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Minimal invaziv teknik</li>
            <li>Küçük kesi, vida yerleştirilmesi</li>
            <li>Hızlı iyileşme, erken mobilizasyon</li>
            <li>Stabil kırıklarda tercih</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>2. Açık Redüksiyon İnternal Fiksasyon (ORIF)</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Açık cerrahi, direkt görüntüleme</li>
            <li>Deplase ve instabil kırıklarda</li>
            <li>Vida, plak veya K-teli ile tespit</li>
            <li>Kemik grefti eklenebilir</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>3. Kemik Grefti ve İleri Teknikler</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Kaynamama tedavisi:</strong> Kemik grefti + vida/plak</li>
            <li><strong>Vaskülarize greft:</strong> Kan akımlı kemik transferi (avasküler nekrozda)</li>
            <li><strong>İliak kemikten greft:</strong> Kalçadan kemik alınması</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Cerrahi Avantajları</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Daha yüksek kaynama oranı (%95+)</li>
            <li>Daha kısa immobilizasyon süresi (4-6 hafta)</li>
            <li>Erken hareket ve fonksiyonel kullanım</li>
            <li>Sporcularda tercih edilir</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">İyileşme Süreci</h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Konservatif Tedavi Sonrası</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Alçı dönemi:</strong> 6-12 hafta (lokasyona göre)</li>
            <li><strong>Fizik tedavi:</strong> Alçı çıktıktan sonra 4-6 hafta</li>
            <li><strong>Tam iyileşme:</strong> 3-6 ay</li>
            <li><strong>Spora dönüş:</strong> 4-6 ay</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cerrahi Tedavi Sonrası</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>İmmobilizasyon:</strong> 2-6 hafta (prosedüre göre)</li>
            <li><strong>Hareket başlangıcı:</strong> 2-4 hafta</li>
            <li><strong>Fizik tedavi:</strong> 6-8 hafta</li>
            <li><strong>Tam iyileşme:</strong> 3-4 ay</li>
            <li><strong>Spora dönüş:</strong> 3-4 ay</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Komplikasyonlar</h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Kaynamama (Nonunion)</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Sıklık:</strong> %5-10 (konservatif tedavide), %5-15 (proksimal pol)</li>
            <li><strong>Nedenler:</strong> Zayıf kan akımı, immobilizasyon yetersizliği, tanı gecikmesi</li>
            <li><strong>Belirtiler:</strong> Kronik ağrı, hareket kısıtlılığı, şişlik</li>
            <li><strong>Tedavi:</strong> Kemik grefti + vida/plak fiksasyonu</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Avasküler Nekroz (AVN)</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Sıklık:</strong> %13-50 (proksimal pol kırıklarında)</li>
            <li><strong>Neden:</strong> Kan akımının kesilmesi</li>
            <li><strong>Tanı:</strong> MRI ile erken tespit</li>
            <li><strong>Tedavi:</strong> Vaskülarize kemik grefti, ileri vakalarda karpal kemik eksizyonu</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Yanlış Kaynama (Malunion)</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Kırığın yanlış pozisyonda iyileşmesi</li>
            <li>Humpback deformitesi (kambur şekli)</li>
            <li>El bileği hareketlerinde kısıtlılık</li>
            <li>Tedavi: Düzeltme osteotomisi + greft</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Post-Travmatik Artrit</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Uzun vadede eklem aşınması</li>
            <li>Özellikle kaynamama ve AVN sonrası</li>
            <li>SNAC (Scaphoid Nonunion Advanced Collapse) el bileği</li>
            <li>İleri tedavi: Parsiyel veya total el bileği füzyonu</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
            <p className="text-gray-800">
              <strong>Komplikasyon Önleme:</strong> Erken tanı, uygun tedavi seçimi ve tam immobilizasyona uyum komplikasyonları minimuma indirir. Kontrol muayenelerine düzenli katılım kritiktir.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Önleme Stratejileri</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Koruyucu ekipman:</strong> Risk spor aktivitelerinde bilek koruyucuları</li>
            <li><strong>Düşme teknikleri:</strong> Spor ve aktivitelerde doğru düşme mekanikleri</li>
            <li><strong>Güçlendirme:</strong> El bileği ve önkol kaslarını güçlendirme</li>
            <li><strong>Denge egzersizleri:</strong> Propriyosepsiyon çalışmaları</li>
            <li><strong>Kemik sağlığı:</strong> Kalsiyum, D vitamini, sağlıklı beslenme</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Sıkça Sorulan Sorular</h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Skafoid kırığı röntgende görülmez mi?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            İlk çekilen röntgende kırık %20-25 vakalarda görülmez. Bu nedenle klinik şüphe devam ediyorsa (snuffbox hassasiyeti), alçı ile immobilizasyon yapılır ve 10-14 gün sonra röntgen tekrarlanır veya MRI çekilir.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Alçı ne kadar süre gerekir?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Kırık lokasyonuna göre 6-12 hafta:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Distal pol: 6-8 hafta</li>
            <li>Waist: 8-12 hafta</li>
            <li>Proksimal pol: 12-20 hafta (veya cerrahi tercih edilir)</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cerrahi mi, konservatif mi daha iyi?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Stabil kırıklarda her iki yöntem de başarılıdır. Cerrahi daha hızlı iyileşme ve erken fonksiyonel dönüş sağlar, ancak ameliyat riski taşır. Deplase ve instabil kırıklarda cerrahi tercih edilir. Sporcularda ve genç aktif hastalarda cerrahi daha sık tercih edilir.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Kaynamama nasıl tedavi edilir?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Kaynamama genellikle cerrahi gerektirir: Kemik grefti + vida/plak fiksasyonu. Bazı vakalarda vaskülarize (kan akımlı) kemik grefti gerekebilir. Başarı oranı %85-95'tir.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Ne zaman spora dönebilirim?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Konservatif tedavide 4-6 ay, cerrahi tedavide 3-4 ay sonra tam spora dönüş mümkündür. Temas sporları için tam kaynama ve hareket açıklığı kazanımı beklenmelidir.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Sonuç</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Skafoid kırığı, el bileği kırıklarının en yaygın tipidir ve özel dikkat gerektirir. Erken tanı, uygun tedavi seçimi ve tam immobilizasyona uyum başarılı sonuç için kritiktir. Tanı gecikmesi ciddi komplikasyonlara yol açabilir.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Düşme sonrası el bileğinde ağrı ve snuffbox hassasiyeti varsa, röntgen normal bile olsa mutlaka bir ortopedi uzmanına danışın. Erken müdahale, komplikasyon riskini minimuma indirir ve iyileşme sürecini hızlandırır.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Bilimsel Kaynaklar</h2>
          <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
            <li>
              Gelberman RH, Menon J. "The vascularity of the scaphoid bone." Journal of Hand Surgery. 1980.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=scaphoid+vascularity" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Herbert TJ, Fisher WE. "Management of the fractured scaphoid using a new bone screw." Journal of Bone and Joint Surgery. 1984.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=Herbert+screw+scaphoid+fracture" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Hove LM. "Epidemiology of scaphoid fractures in Bergen, Norway." Scandinavian Journal of Plastic and Reconstructive Surgery and Hand Surgery. 1999.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=scaphoid+fracture+epidemiology" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Buijze GA, Ochtman L, Ring D. "Management of scaphoid nonunion." Journal of Hand Surgery. 2012.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=scaphoid+nonunion+management" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Dias JJ, Wildin CJ, Bhowal B, Thompson JR. "Should acute scaphoid fractures be fixed?" Journal of Bone and Joint Surgery. 2005.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=acute+scaphoid+fracture+fixation" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Memarsadeghi M, Breitenseher MJ, Schaefer-Prokop C, et al. "Occult scaphoid fractures: comparison of multidetector CT and MR imaging." Radiology. 2006.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=occult+scaphoid+fracture+MRI+CT" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Mack GR, Bosse MJ, Gelberman RH, Yu E. "The natural history of scaphoid non-union." Journal of Bone and Joint Surgery. 1984.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=scaphoid+nonunion+natural+history" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Garala K, Taub NA, Dias JJ. "The epidemiology of fractures of the scaphoid." Journal of Bone and Joint Surgery. 2016.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=scaphoid+fracture+epidemiology+2016" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Slade JF 3rd, Grauer JN, Mahoney JD. "Arthroscopic reduction and percutaneous fixation of scaphoid fractures with a novel dorsal technique." Orthopedic Clinics of North America. 2001.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=arthroscopic+scaphoid+fracture+fixation" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Zaidemberg C, Siebert JW, Angrigiani C. "A new vascularized bone graft for scaphoid nonunion." Journal of Hand Surgery. 1991.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=vascularized+bone+graft+scaphoid" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
            </li>
          </ol>
        </div>
          {/* Ameliyatsız Tedavi Internal Link */}
          <div className="bg-blue-50 border-l-4 border-blue-700 p-6 my-8 rounded-r-lg">
            <p className="text-gray-700">
              <strong>İlgili İçerik:</strong> Ameliyatsız tedavi seçenekleri hakkında daha fazla bilgi için{' '}
              <a href="/ameliyatsiz-cozumler" className="text-blue-700 hover:text-blue-900 font-semibold hover:underline">
                ameliyatsız çözümler sayfamızı
              </a>{' '}
              ziyaret edebilirsiniz.
            </p>
          </div>


        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">El Bileği Yaralanmanız mı Var?</h2>
          <p className="text-lg mb-6 text-blue-100">
            Düşme sonrası el bileğinde ağrı mı hissediyorsunuz? Skafoid kırığı şüphesi için erken tanı ve uygun tedavi önemlidir. 
            Bursa'da uzman ortopedi doktorundan değerlendirme alın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/iletisim"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition text-center"
            >
              Randevu Alın
            </Link>
            <Link
              href="/hizmetler/el-bilegi-cerrahisi"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-center"
            >
              El Bileği Cerrahisi Hakkında
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">İlgili Makaleler</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/el-bilegi-artroskopisi" className="group">
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                    El Bileği Artroskopisi
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Minimal invaziv el bileği cerrahisi hakkında bilgi edinin.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/blog/tfcc-lezyonu" className="group">
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                    TFCC Lezyonu
                  </h3>
                  <p className="text-gray-600 text-sm">
                    El bileği ağrısının önemli nedeni TFCC lezyonu.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/blog/karpal-tunel-sendromu-2" className="group">
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                    Karpal Tünel Sendromu
                  </h3>
                  <p className="text-gray-600 text-sm">
                    El bileği sinir sıkışması ve tedavi seçenekleri.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
