import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Ayak Bileği Artroskopisi Nedir? Tedavi ve İyileşme | Dr. Özgür Oktay Nar',
  description: 'Ayak bileği artroskopisi, minimal invaziv bir cerrahi yöntemdir. Endikasyonlar, prosedür, avantajlar ve tedavi süreçleri hakkında uzman ortopedistten detaylı bilgi.',
  keywords: 'ayak bileği artroskopisi, ankle arthroscopy, minimal invaziv cerrahi, ayak bileği cerrahisi, ayak bileği ağrısı, ortopedi, Bursa ortopedi',
  authors: [{ name: 'Dr. Özgür Oktay Nar' }],
  openGraph: {
    title: 'Ayak Bileği Artroskopisi Nedir? | Dr. Özgür Oktay Nar',
    description: 'Ayak bileği problemlerinde modern tedavi: Artroskopik cerrahi.',
    type: 'article',
    locale: 'tr_TR',
    siteName: 'Dr. Özgür Oktay Nar - Ortopedi Uzmanı',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayak Bileği Artroskopisi Nedir?',
    description: 'Ayak bileği artroskopisi hakkında bilmeniz gerekenler.',
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
  headline: 'Ayak Bileği Artroskopisi Nedir? Tedavi ve İyileşme Süreci',
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
  description: 'Ayak bileği artroskopisi ile minimal invaziv tanı ve tedavi. Prosedür, endikasyonlar ve iyileşme süreci.',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://drozguroktaynar.com/blog/ayak-bilegi-artroskopisi-nedir',
  },
  about: {
    '@type': 'MedicalProcedure',
    name: 'Ayak Bileği Artroskopisi',
    alternateName: 'Ankle Arthroscopy',
  },
};

export default function AyakBilegiArtroskopisiPage() {
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
            Ayak Bileği Artroskopisi Nedir? Tedavi ve İyileşme Süreci
          </h1>
          
          <div className="flex items-center text-gray-600 text-sm mb-6">
            <time dateTime="2026-02-06">6 Şubat 2026</time>
            <span className="mx-2">•</span>
            <span>Dr. Özgür Oktay Nar</span>
            <span className="mx-2">•</span>
            <span>10 dakika okuma</span>
          </div>

          <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-6">
            <Image
              src="/images/blog/ayak-bilegi-artroskopisi-hero.jpg"
              alt="Ayak bileği artroskopisi prosedürü ve minimal invaziv cerrahi"
              fill
              className="object-cover"
              priority
            />
          </div>

          <p className="text-xl text-gray-700 leading-relaxed">
            Ayak bileği artroskopisi, ayak bileği ekleminin içine küçük bir kamera ve özel cerrahi aletler yerleştirilerek yapılan minimal invaziv bir prosedürdür. Bu modern tedavi yöntemi, ayak bileği problemlerinin tanısı ve tedavisinde devrim yaratmış ve geleneksel açık cerrahiye göre birçok avantaj sunmaktadır.
          </p>
        </header>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Ayak Bileği Artroskopisi Nedir?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ayak bileği artroskopisi (ankle arthroscopy), ayak bileği ekleminin içini doğrudan görüntülemek ve tedavi etmek için kullanılan cerrahi bir tekniktir. Prosedürde:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Artroskop:</strong> Ucu kameralı ince bir cihaz kullanılır (çapı 2.4-4 mm)</li>
            <li><strong>Portal kesiler:</strong> 2-3 adet küçük (5-7 mm) kesi yapılır</li>
            <li><strong>Eklem görüntüleme:</strong> Eklem içi yüksek çözünürlüklü monitörde izlenir</li>
            <li><strong>Özel aletler:</strong> Küçük kesilerden tanı ve tedavi amaçlı aletler girilir</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
            <p className="text-gray-800">
              <strong>İlginç Bilgi:</strong> Ayak bileği artroskopisi ilk kez 1970'lerde denendi, ancak 1980'lerin sonlarında teknik gelişmelerle birlikte yaygınlaştı. Günümüzde birçok ayak bileği sorununun tedavisinde ilk tercih edilen yöntemdir.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Ayak Bileği Anatomisi (Kısa Özet)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ayak bileği eklemini anlamak, artroskopinin nasıl çalıştığını kavramak için önemlidir:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Kemikler:</strong> Tibia (kaval kemiği), fibula (küçük kaval kemiği), talus (topuk kemiği üzerindeki kemik)</li>
            <li><strong>Eklem:</strong> Tibia ve fibula'nın talus ile yaptığı "menteşe" tipi eklem</li>
            <li><strong>Ligamentler:</strong> Lateral (dış) ve medial (iç) kollateral ligamentler, syndesmosis</li>
            <li><strong>Kıkırdak:</strong> Eklem yüzeylerini kaplayan kaygan doku</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Kimler İçin Uygundur?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ayak bileği artroskopisi hem tanı hem de tedavi amaçlı kullanılır. Başlıca endikasyonlar:
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Tanısal Endikasyonlar</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Açıklanamayan kronik ayak bileği ağrısı</li>
            <li>Ayak bileğinde kilitlenme veya takılma hissi</li>
            <li>MRI'da şüpheli ancak net olmayan bulgular</li>
            <li>Tekrarlayan burkulma (instabilite şüphesi)</li>
            <li>Konservatif tedaviye yanıt vermeyen ağrı</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Tedavi Amaçlı Endikasyonlar</h3>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Osteokondral Lezyonlar (OLT)</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Talus kemiğinde kıkırdak ve kemik hasarı</li>
            <li>Mikrokırık veya debridman tekniği</li>
            <li>Osteokondral greft (kemik-kıkırdak nakli)</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Anterior İmpingement (Ön Sıkışma Sendromu)</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Kemik mahmuzları (osteofitler) nedeniyle sıkışma</li>
            <li>Yumuşak doku sıkışması</li>
            <li>Osteofitlerin temizlenmesi (debridman)</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Posterior İmpingement (Arka Sıkışma)</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Os trigonum sendromu (ekstra kemik parçası)</li>
            <li>Bale dansçıları ve futbolcularda sık görülür</li>
            <li>Ekstra kemik çıkarılması</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4. Serbest Cisimler</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Eklem içinde serbest kıkırdak veya kemik parçaları</li>
            <li>Kilitlenme ve ağrıya neden olur</li>
            <li>Parçaların çıkarılması</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5. Sinovit ve İnflamasyon</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Eklem zarı iltihabı</li>
            <li>Romatoid artrit veya diğer inflamatuar durumlar</li>
            <li>Sinovektomi (inflamatuar doku temizleme)</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6. Kırık Sonrası Sorunlar</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Kırık iyileşme değerlendirmesi</li>
            <li>Eklem içi skar dokusu temizleme</li>
            <li>Eklem yüzeyinde düzensizlik giderme</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">7. Kronik Instabilite (Kararsızlık)</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Tekrarlayan burkulma sonrası ligament gevşemesi</li>
            <li>Ligament tamiri veya rekonstrüksiyon</li>
            <li>Artroskopi ile ligament değerlendirmesi</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Artroskopinin Avantajları</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Geleneksel açık cerrahiye göre ayak bileği artroskopisinin birçok avantajı vardır:
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Hastaya Avantajlar</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Minimal doku hasarı:</strong> Küçük kesiler, az skar</li>
            <li><strong>Daha az ağrı:</strong> Ameliyat sonrası ağrı minimal</li>
            <li><strong>Hızlı iyileşme:</strong> Açık cerrahiye göre %30-50 daha hızlı</li>
            <li><strong>Erken mobilizasyon:</strong> Daha erken yürümeye başlama</li>
            <li><strong>Kozmetik sonuç:</strong> Küçük, zor fark edilen izler</li>
            <li><strong>Günübirlik cerrahi:</strong> Çoğu vakada aynı gün taburcu</li>
            <li><strong>Düşük enfeksiyon riski:</strong> Küçük kesiler &lt;%1 enfeksiyon oranı</li>
            <li><strong>Az sertlik:</strong> Eklem hareketleri daha iyi korunur</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cerrahiye Avantajlar</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Büyütülmüş görüntü:</strong> Eklem içi yapılar net görülür</li>
            <li><strong>360 derece değerlendirme:</strong> Tüm eklem açıları incelenebilir</li>
            <li><strong>Hassas tedavi:</strong> Mikro aletlerle sağlam dokuya zarar vermeden müdahale</li>
            <li><strong>Tanı ve tedavi:</strong> Aynı seansta hem tanı hem tedavi yapılabilir</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Ameliyat Prosedürü</h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Ameliyat Öncesi Hazırlık</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Anestezi:</strong> Genel anestezi, spinal anestezi veya rejyonel blok</li>
            <li><strong>Pozisyon:</strong> Hasta sırtüstü yatar, ayak masanın dışında serbest</li>
            <li><strong>Distraksiyon:</strong> Bazı vakalarda eklem aralığını açmak için hafif germe (traksiyon)</li>
            <li><strong>Sterilizasyon:</strong> Ayak ve alt bacak steril solüsyon ile yıkanır</li>
            <li><strong>Turnike:</strong> Alt bacağa basınçlı kol manşonu uygulanabilir (kanamasız alan için)</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Ameliyat Adımları</h3>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Portal Oluşturma</h4>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ayak bileği artroskopisinde yaygın kullanılan portallar:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Anterolateral (dış ön):</strong> En sık kullanılan portal, kamera için</li>
            <li><strong>Anteromedial (iç ön):</strong> İkinci en sık portal, aletler için</li>
            <li><strong>Posterolateral (dış arka):</strong> Arka eklem incelemesi</li>
            <li><strong>Posteromedial (iç arka):</strong> Posterior impingement tedavisi</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Eklem Değerlendirmesi</h4>
          <p className="text-gray-700 leading-relaxed mb-4">
            Artroskop eklem içine yerleştirilir ve sistematik inceleme yapılır:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Tibial (kaval kemiği) kıkırdak yüzeyi</li>
            <li>Talar (talus) kıkırdak yüzeyi</li>
            <li>Anterior (ön) guttera (oluk) bölgesi</li>
            <li>Medial (iç) ve lateral (dış) gutter</li>
            <li>Syndesmosis (tibia-fibula bağlantısı)</li>
            <li>Posterior (arka) eklem alanı</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Tedavi Prosedürleri</h4>
          <p className="text-gray-700 leading-relaxed mb-4">
            Tanıya göre uygun tedavi uygulanır:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Debridman:</strong> Hasarlı kıkırdak, kemik veya yumuşak doku temizleme</li>
            <li><strong>Mikrokırık:</strong> OLT tedavisinde kemik yüzeyinde küçük delikler açma</li>
            <li><strong>Osteofitektomi:</strong> Kemik mahmuzlarının çıkarılması</li>
            <li><strong>Serbest cisim çıkarma:</strong> Eklem içi parçaların alınması</li>
            <li><strong>Sinovektomi:</strong> İnflamatuar eklem zarı temizleme</li>
            <li><strong>Ligament tamiri:</strong> Yırtık ligamentlerin onarımı</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4. Kapama</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Portal kesilerinin dikilmesi (1-2 dikiş her portal için)</li>
            <li>Steril sargı uygulanması</li>
            <li>Kompresyon bandajı</li>
            <li>Atel veya ortez (gerekirse)</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Ameliyat Süresi:</strong> Ortalama 45-90 dakika (işlemin kompleksitesine bağlı)
          </p>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
            <p className="text-gray-800">
              <strong>İyi Haber:</strong> Çoğu hasta ameliyattan 2-4 saat sonra yürüyüş aygıtı (koltuk değneği) ile yürüyebilir. Ağrı minimal düzeydedir ve oral ağrı kesiciler ile kolayca kontrol edilir.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Ameliyat Sonrası Dönem ve İyileşme</h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">İlk 24-72 Saat</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>İstirahat:</strong> Ayağı mümkün olduğunca yüksekte tutma</li>
            <li><strong>Buz:</strong> 20 dakika buz, 20 dakika ara (ödem kontrolü)</li>
            <li><strong>Kompresyon:</strong> Bandaj veya elastik çorap</li>
            <li><strong>Ağrı kontrolü:</strong> Ağrı kesici ilaçlar düzenli kullanım</li>
            <li><strong>Yük verme:</strong> Cerrah talimatına göre (çoğunlukla tolere edildiği kadar)</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1-2 Hafta</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Dikişler 10-14. günde alınır</li>
            <li>Hafif aktivitelere başlama</li>
            <li>Koltuk değneği kullanımı azaltma</li>
            <li>İlk kontrol muayenesi</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2-6 Hafta: Rehabilitasyon Fazı</h3>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Faz 1: Mobilizasyon (2-4 hafta)</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Hareket açıklığı egzersizleri (pasif ve aktif)</li>
            <li>Ödem kontrolü</li>
            <li>Hafif yük verme progressiyonu</li>
            <li>Parmak ve ayak bileği pompalama egzersizleri</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Faz 2: Güçlendirme (4-8 hafta)</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>İzometrik güçlendirme</li>
            <li>Direnç bantları ile egzersizler</li>
            <li>Propriyosepsiyon (denge) çalışmaları</li>
            <li>Tam yük verme</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8-12 Hafta: İleri Rehabilitasyon</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Dinamik güçlendirme egzersizleri</li>
            <li>Pliometrik çalışmalar (hafif)</li>
            <li>Spora özel egzersizlere başlama</li>
            <li>Fonksiyonel testler</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3-6 Ay: Spora Dönüş</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>İleri pliometrik çalışmalar</li>
            <li>Spora özel simulasyonlar</li>
            <li>Tam aktiviteye dönüş (cerrah onayı ile)</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">İyileşme Süreleri (Prosedüre Göre)</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Basit debridman:</strong> 4-6 hafta tam iyileşme</li>
            <li><strong>Osteokondral lezyon tedavisi:</strong> 3-6 ay</li>
            <li><strong>Impingement tedavisi:</strong> 6-8 hafta</li>
            <li><strong>Serbest cisim çıkarma:</strong> 4-6 hafta</li>
            <li><strong>Ligament tamiri:</strong> 4-6 ay</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Riskler ve Komplikasyonlar</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ayak bileği artroskopisi güvenli bir prosedür olmakla birlikte, nadir komplikasyonlar görülebilir:
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Genel Cerrahi Riskleri</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Enfeksiyon (&lt;%1)</li>
            <li>Kanama ve hematom</li>
            <li>Anestezi komplikasyonları</li>
            <li>DVT (derin ven trombozu) - çok nadir</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Artroskopiye Özgü Riskler</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Sinir hasarı:</strong> Superfisyal peroneal sinir (%1-3) - genellikle geçici</li>
            <li><strong>Damar hasarı:</strong> Anterior tibial arter/ven - çok nadir (&lt;%0.5%)</li>
            <li><strong>Kıkırdak hasarı:</strong> Portal veya alet yerleştirilmesi sırasında - nadir</li>
            <li><strong>Portal skar ağrısı:</strong> Geçici, genellikle birkaç ay içinde kaybolur</li>
            <li><strong>Eklem sertliği:</strong> Yetersiz rehabilitasyonda (%2-5)</li>
            <li><strong>CRPS (Kompleks Bölgesel Ağrı Sendromu):</strong> Çok nadir (&lt;%1)</li>
            <li><strong>Instrument kırılması:</strong> Ekstra minimal invaziv kesi ile çıkarılır - nadir</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
            <p className="text-gray-800">
              <strong>Risk Minimizasyonu:</strong> Deneyimli bir ayak-ayak bileği cerrahı ve uygun anatomik yer işaretlerinin belirlenmesi ile komplikasyon riski %2'nin altına düşer. Portal yerleşimi sırasında yüzeyel anatominin iyi bilinmesi kritiktir.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Başarı Oranları</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Endikasyona göre başarı oranları:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Anterior impingement:</strong> %85-95 iyi/mükemmel sonuç</li>
            <li><strong>Posterior impingement:</strong> %80-90 ağrı azalması</li>
            <li><strong>OLT (mikrokırık):</strong> %70-85 başarı (lezyon boyutuna bağlı)</li>
            <li><strong>Serbest cisim çıkarma:</strong> %90-95 semptom çözülmesi</li>
            <li><strong>Sinovektomi:</strong> %75-85 ağrı iyileşmesi</li>
            <li><strong>Ligament tamiri:</strong> %80-90 stabilite kazanımı</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Kimler İçin Uygun Değildir?</h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Mutlak Kontraendikasyonlar</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Aktif ayak bileği eklem enfeksiyonu (septik artrit)</li>
            <li>Portal bölgesinde şiddetli yumuşak doku enfeksiyonu</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Göreceli Kontraendikasyonlar</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>İleri derecede artrit (evre 3-4)</li>
            <li>Şiddetli periferik vasküler hastalık</li>
            <li>Ciddi ödem (eklem aralığı daralmış)</li>
            <li>Kontrolsüz diyabet</li>
            <li>Kanama bozuklukları</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Sıkça Sorulan Sorular</h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Ameliyat ağrılı mı?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ameliyat anestezi altında yapıldığı için hiç ağrı hissedilmez. Ameliyat sonrası ağrı genellikle hafif-orta düzeydedir ve ağrı kesiciler ile kolayca kontrol edilir. Hastaların çoğu 2-3 gün içinde minimal ağrı ile günlük aktivitelerini yapabilir.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Ne zaman yürüyebilirim?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Prosedüre bağlıdır. Çoğu vakada ameliyattan hemen sonra koltuk değneği desteği ile yürüyebilirsiniz. Basit prosedürlerde (debridman, serbest cisim) 1-2 hafta içinde normal yürüyüş, kompleks prosedürlerde (OLT tedavisi) 4-6 hafta kısıtlı yük mümkün olabilir.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Fizik tedavi şart mı?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Evet, başarılı sonuç için fizik tedavi kritik öneme sahiptir. Hareket açıklığı, güç ve propriyosepsiyon (denge) kazanımı için programlı rehabilitasyon gereklidir. Fizik tedaviye uyum göstermeyen hastalarda sertlik ve fonksiyon kaybı riski artar.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Ne zaman spora dönebilirim?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Prosedür tipine ve sporun çeşidine göre değişir. Genel rehber:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Hafif egzersiz (yüzme, bisiklet): 4-6 hafta</li>
            <li>Koşma: 8-12 hafta</li>
            <li>Temas sporları (futbol, basketbol): 4-6 ay</li>
            <li>Profesyonel spor: Cerrah ve fizik tedavi uzmanı değerlendirmesi sonrası</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">İzler kalır mı?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Evet, ancak çok küçük. Her portal 5-7 mm'lik bir iz bırakır. Zamanla bu izler soluklaşır ve ayak bileği doğal kıvrımlarında kaybolur, zor fark edilir hale gelir.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Sonuç</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ayak bileği artroskopisi, birçok ayak bileği patolojisinin tedavisinde etkili, güvenli ve minimal invaziv bir yöntemdir. Doğru endikasyon seçimi, deneyimli cerrah ve uygun rehabilitasyon ile mükemmel sonuçlar elde edilebilir.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Kronik ayak bileği ağrısı, tekrarlayan burkulma veya hareket kısıtlılığı yaşıyorsanız, ayak bileği artroskopisinin sizin için uygun olup olmadığını değerlendirmek üzere bir ortopedi uzmanına danışmanızı öneririz.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Bilimsel Kaynaklar</h2>
          <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
            <li>
              Ferkel RD, Chams RN. "Chronic lateral instability: arthroscopic findings and long-term results." Foot & Ankle International. 2007.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=ankle+arthroscopy+lateral+instability" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Zengerink M, Struijs PA, Tol JL, van Dijk CN. "Treatment of osteochondral lesions of the talus: a systematic review." Knee Surgery, Sports Traumatology, Arthroscopy. 2010.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=osteochondral+lesion+talus+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              van Dijk CN, Scholte D. "Arthroscopy of the ankle joint." Arthroscopy. 1997.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=ankle+arthroscopy+technique" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Scranton PE Jr, McDermott JE. "Anterior tibiotalar spurs: a comparison of open versus arthroscopic debridement." Foot & Ankle. 1992.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=anterior+ankle+impingement+arthroscopic" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Ferkel RD, Karzel RP, Del Pizzo W, Friedman MJ, Fischer SP. "Arthroscopic treatment of anterolateral impingement of the ankle." American Journal of Sports Medicine. 1991.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=anterolateral+impingement+ankle+arthroscopy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Tol JL, Verhagen RA, Krips R, et al. "The anterior ankle impingement syndrome: diagnostic value of oblique radiographs." Foot & Ankle International. 2004.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=anterior+ankle+impingement+diagnosis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Nihal A, Trepman E, Nag D. "First metatarsophalangeal arthrodesis." Foot & Ankle Clinics. 2005.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=ankle+arthroscopy+complications" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Deng DF, Hamilton GA, Lee M, Rush S, Ford LA, Patel S. "Complications associated with foot and ankle arthroscopy." Journal of Foot and Ankle Surgery. 2012.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=foot+ankle+arthroscopy+complications" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Vega J, Golano P, Pellegrino A, Rabat E, Pena F. "All-inside arthroscopic lateral collateral ligament repair for ankle instability with a knotless suture anchor technique." Foot & Ankle International. 2013.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=arthroscopic+lateral+ligament+repair+ankle" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Urgüden M, Soyuncu Y, Ozdemir H, et al. "Arthroscopic treatment of anterolateral soft tissue impingement of the ankle." Arthroscopy. 2005.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=soft+tissue+impingement+ankle+arthroscopy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
            </li>
          </ol>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Ayak Bileği Sorununuz mu Var?</h2>
          <p className="text-lg mb-6 text-blue-100">
            Kronik ayak bileği ağrısı, burkulma veya hareket kısıtlılığı için minimal invaziv tedavi seçeneklerini öğrenin. 
            Bursa'da deneyimli ortopedi uzmanından detaylı değerlendirme alın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/iletisim"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition text-center"
            >
              Randevu Alın
            </Link>
            <Link
              href="/hizmetler/ayak-bilegi-cerrahisi"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-center"
            >
              Ayak Bileği Cerrahisi Hakkında
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">İlgili Makaleler</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/kaval-kemigi" className="group">
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                    Kaval Kemiği
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Kaval kemiği anatomisi ve kırıklar hakkında bilgi edinin.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/blog/el-bilegi-artroskopisi" className="group">
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                    El Bileği Artroskopisi
                  </h3>
                  <p className="text-gray-600 text-sm">
                    El bileğinde minimal invaziv tedavi seçenekleri.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/blog/eklem-agrisi-bursa-dr-ozgur-oktay-nar-ortopedi-bursa" className="group">
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                    Eklem Ağrısı ve Tedavisi
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Eklem ağrılarının nedenleri ve tedavi yaklaşımları.
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
