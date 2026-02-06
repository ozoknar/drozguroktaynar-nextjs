import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

// SEO Metadata
export const metadata: Metadata = {
  title: 'El Bileği Artroskopisi: Minimal İnvaziv Tanı ve Tedavi | Dr. Özgür Oktay Nar',
  description: 'El bileği artroskopisi, küçük kesilerle yapılan minimal invaziv bir cerrahi yöntemdir. Endikasyonlar, prosedür, avantajlar ve iyileşme süreci hakkında uzman bilgisi.',
  keywords: 'el bileği artroskopisi, artroskopik cerrahi, minimal invaziv cerrahi, el bileği cerrahisi, TFCC tamiri, skafoid kırığı, ortopedi, Bursa ortopedi',
  authors: [{ name: 'Dr. Özgür Oktay Nar' }],
  openGraph: {
    title: 'El Bileği Artroskopisi: Minimal İnvaziv Cerrahi | Dr. Özgür Oktay Nar',
    description: 'El bileği problemlerinin modern tedavi yöntemi: Artroskopik cerrahi.',
    type: 'article',
    locale: 'tr_TR',
    siteName: 'Dr. Özgür Oktay Nar - Ortopedi Uzmanı',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'El Bileği Artroskopisi: Minimal İnvaziv Cerrahi',
    description: 'Modern el bileği cerrahisi hakkında bilmeniz gerekenler.',
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
  headline: 'El Bileği Artroskopisi: Minimal İnvaziv Tanı ve Tedavi',
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
  description: 'El bileği artroskopisi ile minimal invaziv tanı ve tedavi. Endikasyonlar, prosedür ve iyileşme süreci.',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://drozguroktaynar.com/blog/el-bilegi-artroskopisi',
  },
  about: {
    '@type': 'MedicalProcedure',
    name: 'El Bileği Artroskopisi',
    alternateName: 'Wrist Arthroscopy',
  },
};

export default function ElBilegiArtroskopisiPage() {
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
            El Bileği Artroskopisi: Minimal İnvaziv Tanı ve Tedavi
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
              src="/images/blog/el-bilegi-artroskopisi-hero.jpg"
              alt="El bileği artroskopisi prosedürü ve minimal invaziv cerrahi"
              fill
              className="object-cover"
              priority
            />
          </div>

          <p className="text-xl text-gray-700 leading-relaxed">
            El bileği artroskopisi, modern ortopedi cerrahisinin önemli bir dalıdır. Küçük kesiler yoluyla kamera ve özel aletler kullanılarak el bileği içi yapıların görüntülenmesi, tanı konulması ve tedavi yapılmasına olanak tanır. Bu minimal invaziv yöntem, geleneksel açık cerrahiye göre birçok avantaj sunar.
          </p>
        </header>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">El Bileği Artroskopisi Nedir?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            El bileği artroskopisi (wrist arthroscopy), el bileği ekleminin içine ince bir kamera (artroskop) ve özel cerrahi aletler yerleştirilerek yapılan bir prosedürdür. Artroskop, yaklaşık kalem kalınlığında bir cihazdır ve ucunda kamera ile ışık kaynağı bulunur.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bu yöntem ile:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>El bileği içi yapılar doğrudan görüntülenir</li>
            <li>Kesin tanı konulur</li>
            <li>Aynı seansta tedavi yapılabilir</li>
            <li>Minimal doku hasarı oluşur</li>
            <li>İyileşme süreci hızlanır</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
            <p className="text-gray-800">
              <strong>Altın Standart:</strong> El bileği artroskopisi, birçok el bileği patolojisinin tanısında altın standart kabul edilmektedir. MRI ve diğer görüntüleme yöntemleri ile tespit edilemeyen lezyonları görebilir.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Tarihçe</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            El bileği artroskopisi, diz artroskopisinden sonra geliştirilmiştir:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>1970'ler:</strong> İlk el bileği artroskopisi denemeleri</li>
            <li><strong>1986:</strong> Chen tarafından sistematik sınıflandırma</li>
            <li><strong>1990'lar:</strong> Teknik gelişmeleri ve yaygınlaşma</li>
            <li><strong>2000'ler:</strong> Terapötik (tedavi amaçlı) uygulamaların artması</li>
            <li><strong>Günümüz:</strong> Rutin kullanım ve sürekli gelişen teknikler</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Endikasyonlar (Uygulama Alanları)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            El bileği artroskopisi hem tanı hem de tedavi amaçlı kullanılır:
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Tanısal Endikasyonlar</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Açıklanamayan kronik el bileği ağrısı</li>
            <li>El bileğinde klik sesi veya atlama hissi</li>
            <li>MRI'da şüpheli ancak net olmayan bulgular</li>
            <li>Konservatif tedaviye dirençli ağrı</li>
            <li>Travma sonrası değerlendirme</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Terapötik (Tedavi Amaçlı) Endikasyonlar</h3>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. TFCC (Triangular Fibrocartilage Complex) Lezyonları</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>TFCC yırtıkları</li>
            <li>Periferik TFCC tamiri</li>
            <li>TFCC debridmanı</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Kıkırdak ve Kemik Lezyonları</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Skafoid kırık kaynamaması (nonunion)</li>
            <li>Skafoid avasküler nekrozu</li>
            <li>Lunat avasküler nekrozu (Kienböck hastalığı)</li>
            <li>Kondral (kıkırdak) lezyonlar</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Bağ Yaralanmaları</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Skafolünat bağ yırtığı</li>
            <li>Lünotrikuetral bağ yırtığı</li>
            <li>İnstabilite tedavisi</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4. Diğer Patolojiler</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Sinovit (eklem iltihabı) ve plika sendromu</li>
            <li>Serbest cisim (loose body) çıkarılması</li>
            <li>Ganglion kisti</li>
            <li>El bileği sertliği (artrofibrozis)</li>
            <li>Kırık sonrası değerlendirme ve debridman</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Avantajları</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            El bileği artroskopisinin geleneksel açık cerrahiye göre önemli avantajları vardır:
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Teknik Avantajlar</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Minimal invaziv:</strong> 2-3 mm'lik küçük kesiler</li>
            <li><strong>Direkt görüntüleme:</strong> Eklem içi yapıların büyütülmüş görüntüsü</li>
            <li><strong>Hassas tedavi:</strong> Sağlam dokuya zarar vermeden müdahale</li>
            <li><strong>Tanı ve tedavi:</strong> Aynı seansta hem tanı hem tedavi</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Hasta Avantajları</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Daha az ağrı:</strong> Küçük kesiler nedeniyle ameliyat sonrası ağrı minimal</li>
            <li><strong>Hızlı iyileşme:</strong> Açık cerrahiye göre %30-50 daha hızlı</li>
            <li><strong>Az skar:</strong> Kozmetik olarak daha iyi sonuç</li>
            <li><strong>Erken mobilizasyon:</strong> Daha erken harekete başlama</li>
            <li><strong>Düşük enfeksiyon riski:</strong> Küçük kesiler enfeksiyon riskini azaltır</li>
            <li><strong>Günübirlik cerrahi:</strong> Çoğu vakada aynı gün taburcu</li>
            <li><strong>Daha az sertlik:</strong> Eklem hareketleri daha iyi korunur</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Prosedür: Ameliyat Nasıl Yapılır?</h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Ameliyat Öncesi Hazırlık</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Anestezi:</strong> Genel veya rejyonel (blok) anestezi</li>
            <li><strong>Pozisyon:</strong> Hasta sırtüstü yatar, kol özel bir traksiyon kulesine bağlanır</li>
            <li><strong>Traksiyon:</strong> El bileğine hafif germe uygulanır (eklem aralığını açmak için)</li>
            <li><strong>Steril alan:</strong> El ve kol steril solüsyon ile yıkanır</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Ameliyat Adımları</h3>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Portal Yerleşimi</h4>
          <p className="text-gray-700 leading-relaxed mb-4">
            El bileğinde anatomik olarak belirlenmiş 6 ana portal (giriş noktası) vardır:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>3-4 portal:</strong> En sık kullanılan, radiokarpal ekleme giriş</li>
            <li><strong>4-5 portal:</strong> Alternatif giriş noktası</li>
            <li><strong>6R portal:</strong> TFCC değerlendirmesi</li>
            <li><strong>MCR portal:</strong> Midkarpal eklem girişi</li>
            <li><strong>STT portal:</strong> Skafotrapezyotrapezoid eklem</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Eklem İçi Değerlendirme</h4>
          <p className="text-gray-700 leading-relaxed mb-4">
            Artroskop eklem içine yerleştirilir ve sistematik değerlendirme yapılır:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Radiokarpal eklem inceleme</li>
            <li>Midkarpal eklem inceleme</li>
            <li>TFCC değerlendirmesi</li>
            <li>İnterkarpal bağların testi</li>
            <li>Kıkırdak yüzeylerin incelemesi</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Tedavi Prosedürleri</h4>
          <p className="text-gray-700 leading-relaxed mb-4">
            Tanıya göre uygun tedavi uygulanır:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Debridman:</strong> Hasarlı dokuların temizlenmesi</li>
            <li><strong>Dikiş tamiri:</strong> Yırtık bağ veya TFCC'nin onarımı</li>
            <li><strong>Serbest cisim çıkarma:</strong> Eklem içi kırık fragmanları veya kemik parçaları</li>
            <li><strong>Sinovektomi:</strong> İnflamatuar dokular temizlenmesi</li>
            <li><strong>Mikrokırık:</strong> Kıkırdak lezyonlarında uyarım</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4. Kapama</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Portal kesilerinin dikilmesi (1-2 dikiş)</li>
            <li>Steril sargı uygulanması</li>
            <li>Atel veya splint yerleştirilmesi</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Ameliyat Süresi:</strong> Ortalama 45-90 dakika (kompleksiteye bağlı)
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Ameliyat Sonrası Dönem</h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">İlk 24-48 Saat</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Ağrı kontrolü:</strong> Ağrı kesici ilaçlar</li>
            <li><strong>Ödem yönetimi:</strong> Buz kompres, el yüksekte tutma</li>
            <li><strong>İstirahat:</strong> El bileği hareketsiz tutulur</li>
            <li><strong>Parmak hareketleri:</strong> Ödem önlemek için parmak egzersizleri</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">İlk 1-2 Hafta</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Sargı ve atel kullanımı</li>
            <li>Dikişler 10-14. günde alınır</li>
            <li>Hafif aktivitelere başlama</li>
            <li>Kontrol muayenesi</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2-6 Hafta</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Fizik tedavi:</strong> Hareket açıklığı egzersizleri</li>
            <li><strong>Pasif hareketler:</strong> Sertlik önleme</li>
            <li><strong>Hafif yük:</strong> Günlük aktivitelerde kullanım</li>
            <li><strong>Atel kullanımı:</strong> Gerekirse koruma amaçlı</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6-12 Hafta</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Güçlendirme:</strong> Progresif direnç egzersizleri</li>
            <li><strong>Fonksiyonel aktiviteler:</strong> Normal günlük işlere dönüş</li>
            <li><strong>Ağır yük:</strong> Kademeli olarak ağırlık taşıma</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3-6 Ay</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Tam iyileşme:</strong> Maksimum fonksiyon geri kazanımı</li>
            <li><strong>Spor aktiviteleri:</strong> Doktor onayı ile dönüş</li>
            <li><strong>Ağır işler:</strong> Tam güç kazanımı</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
            <p className="text-gray-800">
              <strong>İyi Haber:</strong> Hastaların %85-90'ı ameliyattan 3-4 ay sonra normal aktivitelerine tam olarak dönebilir. Açık cerrahiye göre iyileşme süresi ortalama %40 daha kısa.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Riskler ve Komplikasyonlar</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            El bileği artroskopisi güvenli bir prosedür olsa da, her cerrahi girişimde olduğu gibi bazı riskler vardır:
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Genel Riskler (Tüm Cerrahilerde)</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Enfeksiyon (<%1)</li>
            <li>Kanama ve hematom</li>
            <li>Anestezi komplikasyonları</li>
            <li>Tromboemboli (pıhtı oluşumu) - nadir</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Artroskopiye Özgü Riskler</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Sinir hasarı:</strong> Özellikle superfisyal radial ve ulnar sinirler (%1-2)</li>
            <li><strong>Tendon yaralanması:</strong> Portal kesisi sırasında (<%1)</li>
            <li><strong>Kıkırdak hasarı:</strong> İatrogenik (istemeden) hasar - nadir</li>
            <li><strong>Portal skar ağrısı:</strong> Geçici, genellikle kendiliğinden düzelir</li>
            <li><strong>Kompleks bölgesel ağrı sendromu (CRPS):</strong> Çok nadir (<%1)</li>
            <li><strong>Eklem sertliği:</strong> Yetersiz rehabilitasyonda</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
            <p className="text-gray-800">
              <strong>Risk Minimizasyonu:</strong> Deneyimli bir el cerrahı ve uygun rehabilitasyon ile komplikasyon riski %2'nin altına düşer. Portal yerleşimi sırasında anatomik yer işaretlerinin doğru belirlenmesi kritik önem taşır.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Başarı Oranları</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Endikasyona göre başarı oranları değişir:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>TFCC periferik tamiri:</strong> %85-90 başarı</li>
            <li><strong>Skafolünat bağ lezyonları:</strong> %70-80 (erken dönem tedavisinde)</li>
            <li><strong>Kıkırdak lezyonları (debridman):</strong> %75-85 semptomatik iyileşme</li>
            <li><strong>Serbest cisim çıkarma:</strong> %95+ başarı</li>
            <li><strong>Sinovektomi:</strong> %80-85 ağrı azalması</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Kontraendikasyonlar (Uygun Olmayan Durumlar)</h2>
          
          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Mutlak Kontraendikasyonlar</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Aktif eklem enfeksiyonu</li>
            <li>Şiddetli yumuşak doku enfeksiyonu</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Göreceli Kontraendikasyonlar</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>İleri derecede artrit (evre 4)</li>
            <li>Ciddi osteoporoz</li>
            <li>Kontrolsüz diyabet</li>
            <li>Kanama bozuklukları</li>
            <li>Çok dar eklem aralığı (artroskop girmez)</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Açık Cerrahi ile Karşılaştırma</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 my-6">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Özellik</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Artroskopi</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Açık Cerrahi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Kesi Boyutu</td>
                  <td className="border border-gray-300 px-4 py-2">2-3 mm (2-3 portal)</td>
                  <td className="border border-gray-300 px-4 py-2">5-10 cm</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Ağrı</td>
                  <td className="border border-gray-300 px-4 py-2">Minimal</td>
                  <td className="border border-gray-300 px-4 py-2">Orta-Yüksek</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Hastanede Kalış</td>
                  <td className="border border-gray-300 px-4 py-2">Günübirlik</td>
                  <td className="border border-gray-300 px-4 py-2">1-2 gün</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">İyileşme Süresi</td>
                  <td className="border border-gray-300 px-4 py-2">4-8 hafta</td>
                  <td className="border border-gray-300 px-4 py-2">8-12 hafta</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Skar</td>
                  <td className="border border-gray-300 px-4 py-2">Minimal</td>
                  <td className="border border-gray-300 px-4 py-2">Belirgin</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Enfeksiyon Riski</td>
                  <td className="border border-gray-300 px-4 py-2"><%1</td>
                  <td className="border border-gray-300 px-4 py-2">%2-5</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Sertlik Riski</td>
                  <td className="border border-gray-300 px-4 py-2">Düşük</td>
                  <td className="border border-gray-300 px-4 py-2">Orta</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Sıkça Sorulan Sorular</h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Ameliyat ağrılı mı?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ameliyat anestezi altında yapıldığı için ağrı hissedilmez. Ameliyat sonrası ağrı minimal düzeydedir ve ağrı kesici ilaçlarla kolayca kontrol edilir.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Ne zaman işe dönebilirim?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Masa başı işlerde 1-2 hafta, hafif fiziksel işlerde 4-6 hafta, ağır fiziksel işlerde 8-12 hafta sonra dönüş mümkündür. İşinizin niteliğine göre cerrahınız size özel tavsiye verecektir.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">İzler kalır mı?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Portal kesilerindan çok küçük (2-3 mm) izler kalır. Zamanla bu izler soluklaşır ve zor fark edilir hale gelir.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Fizik tedavi gerekli mi?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Evet, başarılı bir sonuç için fizik tedavi ve rehabilitasyon kritik önem taşır. Genellikle 4-8 hafta süren bir program uygulanır.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Sonuç</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            El bileği artroskopisi, modern ortopedi cerrahisinin sunduğu önemli bir teknolojik gelişmedir. Minimal invaziv yaklaşımı, hızlı iyileşmesi ve yüksek başarı oranları ile birçok el bileği patolojisinin tedavisinde tercih edilen yöntem haline gelmiştir.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Doğru endikasyon, deneyimli cerrah ve uygun rehabilitasyon ile mükemmel sonuçlar elde edilebilir. El bileği ağrısı veya fonksiyon kaybı yaşıyorsanız, artroskopik tedavi seçenekleriniz hakkında bir el cerrahisi uzmanına danışmanızı öneririz.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Bilimsel Kaynaklar</h2>
          <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
            <li>
              Whipple TL. "The role of arthroscopy in the treatment of wrist injuries in the athlete." Clinics in Sports Medicine. 1992.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=wrist+arthroscopy+sports+injuries" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Osterman AL. "Arthroscopic debridement of triangular fibrocartilage complex tears." Arthroscopy. 1990.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=TFCC+arthroscopic+debridement" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Weiss AP, Akelman E, Tabatabai M. "Treatment of de Quervain's disease." Journal of Hand Surgery. 1994.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=wrist+arthroscopy+techniques" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Ruch DS, Poehling GG. "Arthroscopic management of partial scapholunate and lunotriquetral injuries of the wrist." Journal of Hand Surgery. 1996.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=scapholunate+arthroscopic+management" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Culp RW, Osterman AL. "Arthroscopic repair and debridement of the triangular fibrocartilage complex." Orthopedic Clinics of North America. 2001.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=TFCC+repair+arthroscopic" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Slutsky DJ. "Wrist arthroscopy through a volar radial portal." Arthroscopy. 2002.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=wrist+arthroscopy+volar+portal" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Verhellen R, Bain GI. "Arthroscopic capsular release for contracture of the wrist." Arthroscopy. 2000.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=arthroscopic+capsular+release+wrist" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Atzei A, Rizzo A, Luchetti R, Fairplay T. "Arthroscopic foveal repair of triangular fibrocartilage complex peripheral lesions." Hand Clinics. 2011.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=foveal+repair+TFCC" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Del Piñal F, Moraleda E, Rúas JS, de Prada FS, Martin-Ferrero M. "Minimally invasive fixation of fractures of the distal radius with arthroscopic assistance." Arthroscopy. 2015.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=distal+radius+fracture+arthroscopic" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Mathoulin C, Haerle M, Corcella D, Soulias G. "All-arthroscopic dorsal repair of scapholunate ligament." Techniques in Hand & Upper Extremity Surgery. 2007.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=scapholunate+ligament+arthroscopic+repair" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
            </li>
          </ol>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">El Bileği Artroskopisi mi Düşünüyorsunuz?</h2>
          <p className="text-lg mb-6 text-blue-100">
            El bileği ağrınız veya fonksiyon kaybınız için minimal invaziv tedavi seçeneklerini değerlendirin. 
            Bursa'da deneyimli el cerrahisi uzmanından detaylı bilgi alın.
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
            <Link href="/blog/tfcc-lezyonu" className="group">
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                    TFCC Lezyonu
                  </h3>
                  <p className="text-gray-600 text-sm">
                    El bileği ağrısının önemli nedeni TFCC lezyonu hakkında bilgi.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/blog/skafoid-kirigi-belirtileri" className="group">
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                    Skafoid Kırığı
                  </h3>
                  <p className="text-gray-600 text-sm">
                    El bileği kırıklarının en yaygın tipi hakkında detaylı bilgi.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/blog/ayak-bilegi-artroskopisi-nedir" className="group">
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                    Ayak Bileği Artroskopisi
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Ayak bileğinde minimal invaziv tedavi seçenekleri.
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
