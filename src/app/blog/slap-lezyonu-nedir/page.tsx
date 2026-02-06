import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SLAP Lezyonu Nedir? | Superior Labrum Yırtığı Belirtileri ve Tedavisi',
  description: 'SLAP (Superior Labrum Anterior Posterior) lezyonu, nedenleri, tipleri, tanı yöntemleri ve tedavi seçenekleri hakkında kapsamlı rehber.',
  keywords: 'SLAP lezyonu, labrum yırtığı, biseps ankoru, omuz yaralanması, labral tear',
  openGraph: {
    title: 'SLAP Lezyonu: Tanı ve Tedavi Rehberi',
    description: 'Superior labrum yırtıklarının tipleri, belirtileri ve tedavi yaklaşımları.',
    type: 'article',
    locale: 'tr_TR',
    siteName: 'Dr. Özgür Oktay Nar',
  },
};

export default function SlapLezyonuPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: 'SLAP Lezyonu Nedir?',
    description: 'SLAP lezyonunun (superior labrum yırtığı) tanısı ve tedavisi.',
    author: {
      '@type': 'Person',
      name: 'Dr. Özgür Oktay Nar',
      jobTitle: 'Ortopedi ve Travmatoloji Uzmanı',
    },
    datePublished: '2026-02-06',
    dateModified: '2026-02-06',
    publisher: {
      '@type': 'Organization',
      name: 'Dr. Özgür Oktay Nar',
    },
    medicalSpecialty: 'Orthopedics',
    about: {
      '@type': 'MedicalCondition',
      name: 'SLAP Lezyonu',
      alternateName: 'Superior Labrum Anterior Posterior Lesion',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            SLAP Lezyonu Nedir?
          </h1>
          <div className="relative w-full h-[400px] mb-8 rounded-2xl overflow-hidden">
            <Image
              src="/images/blog/slap-lezyonu.jpg"
              alt="SLAP lezyonu anatomisi ve biseps ankoru"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            SLAP lezyonu (Superior Labrum Anterior to Posterior), omuz ekleminde glenoid labrumun 
            üst kısmının, biseps tendon ankörü çevresinde ön-arkaya doğru yırtılmasıdır. Bu yaralanma, 
            özellikle overhead sporcularda ve travma sonrasında görülür.
          </p>
        </header>

        {/* Main Content */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Labrum Nedir?</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Glenohumeral labrum, skapulanın glenoid kavitesini çevreleyen fibrokartilaj bir 
            halka yapıdır. Bu yapı, eklem stabilitesini artırır, şok emici görevi görür ve 
            propriosepsiyonu destekler.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h4 className="font-semibold text-lg mb-3">Labrumun Fonksiyonları:</h4>
            <ul className="space-y-2">
              <li>• <strong>Derinleştirme:</strong> Glenoid kaviteyi %50 daha derin yapar</li>
              <li>• <strong>Stabilizasyon:</strong> Glenohumeral ligamentlere tutunma yeri</li>
              <li>• <strong>Vakum etkisi:</strong> Negatif basınçla eklemi stabilize eder</li>
              <li>• <strong>Biseps ankoru:</strong> Uzun baş biseps tendonuna tutunma noktası</li>
              <li>• <strong>Propriosepsiyon:</strong> Mekanoreseptörler içerir</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">SLAP Lezyonu Tanımı</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            "SLAP" kısaltması şu kelimelerin baş harflerinden oluşur:
          </p>

          <div className="bg-purple-50 p-6 rounded-lg mb-8">
            <ul className="space-y-2 text-gray-700 text-lg">
              <li>• <strong>S</strong>uperior (Üst)</li>
              <li>• <strong>L</strong>abrum (Labrum)</li>
              <li>• <strong>A</strong>nterior (Ön)</li>
              <li>• <strong>P</strong>osterior (Arka)</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Yani, labrumun üst kısmında, saat 10-2 pozisyonunda (biseps ankörü çevresinde), 
              önden arkaya uzanan bir yırtıktır.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">SLAP Lezyonu Tipleri (Snyder Sınıflaması)</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Snyder ve arkadaşları 1990'da SLAP lezyonlarını dört ana tipe ayırmıştır. Daha sonra 
            Type V-X gibi alt tipler tanımlanmış, ancak Type I-IV en yaygındır.
          </p>

          <div className="space-y-6 mb-8">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-lg mb-3">Type I: Dejeneratif Püzülme</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Labrumun üst kenarında püzülme ve fibrilasyon</li>
                <li>• Biseps ankörü intakt (sağlam)</li>
                <li>• Genellikle yaşa bağlı dejenerasyon</li>
                <li>• <strong>Tedavi:</strong> Konservatif (debridman gerekebilir)</li>
                <li>• <strong>Sıklık:</strong> %21</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-lg mb-3">Type II: Biseps Ankör Ayrılması</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Superior labrum ve biseps ankörünün glenoidten ayrılması</li>
                <li>• En yaygın tip (cerrahi gerektiren)</li>
                <li>• Biseps tendonu labrum ile birlikte kaldırılabilir (peel-back mekanizması)</li>
                <li>• <strong>Tedavi:</strong> Artroskopik tamir (ankraj ile fiksasyon)</li>
                <li>• <strong>Sıklık:</strong> %55 (en sık)</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-semibold text-lg mb-3">Type III: Kova Sapı (Bucket-Handle) Yırtığı</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Superior labrumda kova sapı şeklinde yırtık</li>
                <li>• Biseps ankörü intakt, ama labrum ekleme düşebilir</li>
                <li>• Kilitlenme ve mekanik semptomlara neden olur</li>
                <li>• <strong>Tedavi:</strong> Yırtık parçanın eksizyonu (debridman) veya tamir</li>
                <li>• <strong>Sıklık:</strong> %9</li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h4 className="font-semibold text-lg mb-3">Type IV: Kova Sapı + Biseps Tendonu Yırtığı</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Type III + biseps tendonuna uzanan yırtık</li>
                <li>• Biseps tendonunun %50'sinden fazlası yırtıksa → tenodez/tenotomi gerekir</li>
                <li>• En ciddi tip</li>
                <li>• <strong>Tedavi:</strong> Labrum tamiri + biseps prosedürü (tenodez/tenotomi)</li>
                <li>• <strong>Sıklık:</strong> %10</li>
              </ul>
            </div>
          </div>

          <div className="bg-indigo-50 p-6 rounded-lg mb-8">
            <h4 className="font-semibold text-lg mb-3">Ek Tipler (Type V-X):</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Type V:</strong> SLAP + anterior Bankart lezyonu (instabilite ile)</li>
              <li>• <strong>Type VI:</strong> Labrum flep ayrılması</li>
              <li>• <strong>Type VII:</strong> SLAP + middle glenohumeral ligament uzaması</li>
              <li>• <strong>Type VIII:</strong> SLAP + posterior labral yırtık</li>
              <li>• <strong>Type IX:</strong> SLAP + tüm çevre labral yırtık</li>
              <li>• <strong>Type X:</strong> SLAP + posterior-superior rotator cuff yırtığı</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Nedenler ve Risk Faktörleri</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            SLAP lezyonları genellikle akut travma veya tekrarlayan mikrotravm ile oluşur.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Akut Travmatik Nedenler:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Koldan düşme (FOOSH - Fall On Outstretched Hand)</li>
                <li>• Direkt omuz travması</li>
                <li>• Omuz çıkığı (anterior dislokasyon)</li>
                <li>• Ani traksiyon (çekilme) yaralanması</li>
                <li>• Motorlu taşıt kazaları</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Kronik Aşırı Kullanım:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Sporlar:</strong> Beyzbol (atıcı), tenis, voleybol, yüzme</li>
                <li>• Tekrarlayan overhead hareketler</li>
                <li>• Peel-back mekanizması (abduksiyon + eksternal rotasyon)</li>
                <li>• İç rotasyon eksikliği (GIRD - Glenohumeral Internal Rotation Deficit)</li>
                <li>• Posterior kapsül gerginliği</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h4 className="font-semibold text-lg mb-3">Risk Faktörleri:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Overhead sporlar (beyzbol, tenis, yüzme)</li>
              <li>• 20-40 yaş arası aktif bireyler</li>
              <li>• Erkeklerde daha sık (2:1)</li>
              <li>• Omuz instabilitesi öyküsü</li>
              <li>• Yetersiz skapular kontrol</li>
              <li>• Rotator kılıf zayıflığı</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Belirtiler ve Klinik Bulgular</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            SLAP lezyonunun belirtileri genellikle belirsizdir ve diğer omuz patolojileri ile 
            karışabilir.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h4 className="font-semibold text-lg mb-3">Tipik Belirtiler:</h4>
            <ul className="space-y-2">
              <li>• <strong>Derin omuz ağrısı:</strong> Eklem içinde, lokalize edilemez</li>
              <li>• <strong>"Çıtırtı" veya "kilitlenme" hissi:</strong> Omuz hareketlerinde</li>
              <li>• <strong>Overhead aktivitelerde ağrı:</strong> Atma, vuruş, yüzme</li>
              <li>• <strong>Güç kaybı:</strong> Özellikle geç dönemde</li>
              <li>• <strong>Gece ağrıları:</strong> Yan yatarken</li>
              <li>• <strong>İnstabilite hissi:</strong> Omuzda kayma veya çıkacak gibi hissetme (nadir)</li>
              <li>• <strong>Aktivite kısıtlılığı:</strong> Spor performansında düşüş</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Tanı Yöntemleri</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            SLAP lezyonu tanısı zordur çünkü belirtiler nonspesifiktir. Fizik muayene testlerinin 
            duyarlılığı düşüktür, kesin tanı MRI ve artroskopi ile konur.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Fizik Muayene Testleri</h3>

          <div className="space-y-4 mb-8">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">O'Brien Testi (Active Compression Test):</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Prosedür:</strong> Kol 90° fleksiyonda, 10-15° adduksiyonda, internal rotasyonda. Aşağı bastırma direncine karşı ağrı. Eksternal rotasyonda tekrar → ağrı azalırsa pozitif.</li>
                <li>• <strong>Duyarlılık:</strong> %47-100 (değişken)</li>
                <li>• <strong>Özgüllük:</strong> %31-98</li>
                <li>• <strong>Sorun:</strong> AC eklem patolojisinde de pozitif olabilir</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Biceps Load Test II:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Prosedür:</strong> Sırtüstü yatar, kol 120° abduksiyon + maksimal eksternal rotasyon. Dirsek 90° fleksiyon. Hastadan dirsek fleksiyonunu sürdürmesi istenir.</li>
                <li>• <strong>Pozitif:</strong> Omuzda derin ağrı veya "click"</li>
                <li>• <strong>Duyarlılık:</strong> %90</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Crank Test:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Prosedür:</strong> Kol 160° elevasyonda, aksiyel yükle internal/eksternal rotasyon</li>
                <li>• <strong>Pozitif:</strong> Ağrı ve/veya "click"</li>
                <li>• <strong>Duyarlılık:</strong> %46-91</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Anterior Slide Test:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Prosedür:</strong> Eller belde, muayeneci skapula stabilize eder, dirsekten yukarı iter</li>
                <li>• <strong>Pozitif:</strong> Superior omuzda ağrı veya "pop"</li>
                <li>• <strong>Duyarlılık:</strong> %8-78 (düşük)</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6 bg-yellow-50 border-l-4 border-yellow-500 p-4">
            ⚠️ <strong>Önemli:</strong> Hiçbir fizik muayene testi tek başına %100 güvenilir değildir. 
            Testlerin kombinasyonu ve klinik şüphe önemlidir.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Görüntüleme</h3>

          <div className="space-y-6 mb-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">X-Ray:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Labrumu göstermez, ama kemik patolojilerini ekarte eder</li>
                <li>• Artrit, kırık, glenohumeral aralık değerlendirmesi</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">MRI Artrografi (Gold Standard):</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Prosedür:</strong> Ekleme gadolinium kontrast enjeksiyonu sonrası MRI</li>
                <li>• <strong>Bulgular:</strong> Superior labrumda yüksek sinyal, biseps ankör ayrılması, labral ayrılma</li>
                <li>• <strong>Duyarlılık:</strong> %82-98</li>
                <li>• <strong>Özgüllük:</strong> %70-98</li>
                <li>• <strong>Avantaj:</strong> Eşlik eden patolojileri gösterir (rotator cuff, Bankart)</li>
                <li>• <strong>Sınırlılık:</strong> İnvaziv, pahalı</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Standart MRI (Non-kontrast):</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• MRI artrografiye göre daha az duyarlı (%50-80)</li>
                <li>• Non-invaziv, ilk tercih olabilir</li>
                <li>• 3 Tesla MRI daha iyi çözünürlük</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Artroskopi:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Gold standard tanı</strong> (direkt görselleştirme)</li>
                <li>• Tedavi ile birleştirilebilir (tanısal + terapötik)</li>
                <li>• Peel-back testi (abduksiyon + eksternal rotasyon ile biseps ankörü kaldırılır mı?)</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Tedavi Seçenekleri</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Tedavi yaklaşımı, lezyon tipine, hastanın yaşına, aktivite seviyesine ve eşlik eden 
            patolojilere göre belirlenir.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Konservatif Tedavi</h3>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h4 className="font-semibold text-lg mb-3">Endikasyonlar:</h4>
            <ul className="space-y-2">
              <li>• Type I lezyonlar (dejeneratif püzülme)</li>
              <li>• Düşük aktivite seviyesi, yaşlı hastalar</li>
              <li>• Eşlik eden ciddi rotator cuff yırtığı (önce RC tedavisi)</li>
              <li>• Cerrahi riskli hastalar</li>
            </ul>
          </div>

          <div className="space-y-6 mb-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Konservatif Tedavi Protokolü (3-6 Ay):</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>İstirahat:</strong> Ağrıyı artıran aktivitelerden kaçınma (2-4 hafta)</li>
                <li>• <strong>NSAİİ:</strong> İbuprofen, naproksen (iltihap kontrolü)</li>
                <li>• <strong>Fizik tedavi:</strong> 8-12 hafta
                  <ul className="ml-6 mt-2 space-y-1">
                    <li>- Faz 1: Ağrı kontrolü, pasif ROM</li>
                    <li>- Faz 2: Aktif ROM, skapular stabilizasyon</li>
                    <li>- Faz 3: Rotator cuff güçlendirme</li>
                    <li>- Faz 4: Fonksiyonel egzersizler, spor-spesifik antrenman</li>
                  </ul>
                </li>
                <li>• <strong>Kortikosteroid enjeksiyonu:</strong> Gerekirse (dikkatli, labral dejenerasyonu artırabilir)</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Cerrahi Tedavi</h3>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <h4 className="font-semibold text-lg mb-3">Cerrahi Endikasyonları:</h4>
            <ul className="space-y-2">
              <li>• Type II, III, IV lezyonlar (özellikle Type II)</li>
              <li>• 3-6 ay konservatif tedaviye yanıtsızlık</li>
              <li>• Genç, aktif, overhead sporcu hastalar</li>
              <li>• Ciddi fonksiyon kaybı ve performans düşüşü</li>
              <li>• MRI/artroskopide açık SLAP lezyonu</li>
            </ul>
          </div>

          <div className="space-y-6 mb-8">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">1. SLAP Tamiri (Repair):</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Yöntem:</strong> Artroskopik (kapalı)</li>
                <li>• <strong>Teknik:</strong> Ankraj (çapa) ile superior labrumun glenoid rim'e fiksasyonu</li>
                <li>• <strong>Ankraj sayısı:</strong> Genellikle 1-2 adet (saat 11 ve 1 pozisyonları)</li>
                <li>• <strong>Hedef:</strong> Biseps ankörü ve labrumu anatomik pozisyona restore etmek</li>
                <li>• <strong>Endikasyon:</strong> Type II, III (tamir edilebilirse), IV, genç overhead sporcular</li>
                <li>• <strong>Avantaj:</strong> Anatomik tamir, biseps fonksiyonu korunur</li>
                <li>• <strong>Dezavantaj:</strong> Uzun rehabilitasyon (4-6 ay), sertlik riski</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">2. SLAP Debridman (Labral Trimming):</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Yöntem:</strong> Artroskopik</li>
                <li>• <strong>Teknik:</strong> Instabil/yırtık labrum parçalarının eksizyonu</li>
                <li>• <strong>Endikasyon:</strong> Type I, Type III (küçük kova sapı), düşük talep hastaları, >40 yaş</li>
                <li>• <strong>Avantaj:</strong> Hızlı iyileşme (6-8 hafta), düşük sertlik riski</li>
                <li>• <strong>Dezavantaj:</strong> Stabilite katkısı yok</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">3. Biseps Tenodez:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Yöntem:</strong> Artroskopik veya açık</li>
                <li>• <strong>Teknik:</strong> Biseps tendonunun labral ankörden kesilip humerusa yeni bir noktaya fiksasyonu</li>
                <li>• <strong>Endikasyon:</strong> Type IV (>%50 biseps yırtığı), başarısız SLAP tamiri, >40 yaş, non-sporcu</li>
                <li>• <strong>Avantaj:</strong> Güvenilir ağrı azalması, hızlı iyileşme</li>
                <li>• <strong>Dezavantaj:</strong> Biseps anatomisi değişir (kozmetik "Popeye" deformitesi %5-10)</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">4. Biseps Tenotomi:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Yöntem:</strong> Artroskopik</li>
                <li>• <strong>Teknik:</strong> Biseps tendonunun labral ankörden basitçe kesilmesi (fiksasyon yok)</li>
                <li>• <strong>Endikasyon:</strong> >60 yaş, düşük talep, biseps tendiniti ile birlikte</li>
                <li>• <strong>Avantaj:</strong> En hızlı iyileşme, en basit prosedür</li>
                <li>• <strong>Dezavantaj:</strong> Popeye deformitesi riski daha yüksek (%20-30), hafif güç kaybı</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
            <h4 className="font-semibold text-lg mb-3">Tedavi Seçiminde Karar Algoritması:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong><35 yaş + overhead sporcu + Type II:</strong> SLAP tamiri</li>
              <li>• <strong>35-45 yaş + rekreasyonel sporcu + Type II:</strong> SLAP tamiri veya tenodez (kişiselleştirilmiş)</li>
              <li>• <strong>>45 yaş veya non-sporcu + Type II:</strong> Tenodez veya debridman</li>
              <li>• <strong>>60 yaş + düşük talep:</strong> Tenotomi veya debridman</li>
              <li>• <strong>Type I:</strong> Debridman</li>
              <li>• <strong>Type III:</strong> Debridman veya tamir (boyuta göre)</li>
              <li>• <strong>Type IV (>%50 biseps yırtık):</strong> Tenodez veya tenotomi</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Ameliyat Sonrası Rehabilitasyon</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Rehabilitasyon, ameliyat tipine göre değişir. SLAP tamiri en uzun rehabilitasyonu 
            gerektirir.
          </p>

          <div className="space-y-6 mb-8">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">SLAP Tamiri Sonrası Protokol:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>0-4 hafta:</strong> İmmobilizasyon (sling), sadece pasif ROM (pulley, pendulum). Aktif dirsek/el egzersizleri.</li>
                <li>• <strong>4-8 hafta:</strong> Aktif-asistif ROM başlar. Sling azaltılır.</li>
                <li>• <strong>8-12 hafta:</strong> Aktif ROM, hafif izometrik güçlendirme.</li>
                <li>• <strong>12-16 hafta:</strong> Progresif dirençli egzersizler, skapular stabilizasyon.</li>
                <li>• <strong>4-6 ay:</strong> İleri güçlendirme, spor-spesifik antrenman.</li>
                <li>• <strong>6-9 ay:</strong> Spora dönüş (throwing sporcular için 9-12 ay).</li>
              </ul>
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Tenodez/Tenotomi Sonrası Protokol:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>0-2 hafta:</strong> Sling, pasif ROM.</li>
                <li>• <strong>2-4 hafta:</strong> Aktif-assistif ROM, sling bırakılır.</li>
                <li>• <strong>4-8 hafta:</strong> Aktif ROM, hafif güçlendirme.</li>
                <li>• <strong>8-12 hafta:</strong> İleri güçlendirme, fonksiyonel aktiviteler.</li>
                <li>• <strong>3-4 ay:</strong> Spor ve ağır aktivitelere dönüş.</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Prognoz ve Sonuçlar</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            SLAP lezyonu tedavi sonuçları değişkendir ve hasta seçimi kritiktir.
          </p>

          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h4 className="font-semibold text-lg mb-3">Başarı Oranları:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>SLAP tamiri (genç overhead sporcular):</strong> %63-94 spora dönüş, %73-80 önceki seviyeye dönüş</li>
              <li>• <strong>SLAP tamiri (non-overhead sporcular):</strong> %85-95 memnuniyet</li>
              <li>• <strong>Biseps tenodez:</strong> %85-95 memnuniyet, özellikle >40 yaş</li>
              <li>• <strong>Debridman:</strong> %70-80 memnuniyet (düşük talep hastalarında)</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg mb-8">
            <h4 className="font-semibold text-lg mb-3">Komplikasyonlar:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Sertlik (en sık):</strong> %5-15, özellikle SLAP tamirinden sonra</li>
              <li>• <strong>Başarısız tamir:</strong> %5-10, tekrar yırtık</li>
              <li>• <strong>Popeye deformitesi:</strong> Tenodez/tenotomi sonrası (%5-30)</li>
              <li>• <strong>Devam eden ağrı:</strong> %10-20</li>
              <li>• <strong>İnfeksiyon:</strong> <%1</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h4 className="font-semibold text-lg mb-3">Kötü Prognostik Faktörler:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• >40 yaş</li>
              <li>• İşçi tazminat vakası</li>
              <li>• Eşlik eden rotator cuff yırtığı</li>
              <li>• Ciddi sertlik</li>
              <li>• Posterior kapsül gerginliği (GIRD) düzeltilmemiş</li>
              <li>• Sigara kullanımı</li>
            </ul>
          </div>
        </section>

        {/* References */}
        <section className="mb-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Kaynaklar</h2>
          <ol className="space-y-2 text-sm text-gray-700">
            <li>1. Snyder SJ, et al. "SLAP lesions of the shoulder." Arthroscopy. 1990. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=Snyder+SLAP+lesion+classification" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>2. Maffet MW, et al. "Superior labrum-biceps tendon complex lesions of the shoulder." Am J Sports Med. 1995. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=superior+labrum+biceps+lesions" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>3. O'Brien SJ, et al. "The active compression test: a new and effective test for diagnosing labral tears and acromioclavicular joint abnormality." Am J Sports Med. 1998. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=O'Brien+active+compression+test" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>4. Burkhart SS, Morgan CD. "The peel-back mechanism: its role in producing and extending posterior type II SLAP lesions." Arthroscopy. 1998. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=peel+back+mechanism+SLAP" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>5. Gobezie R, et al. "A biomechanical analysis of the effects of supraspinatus and infraspinatus weakness on articular surface rotator cuff tears." Am J Sports Med. 2007. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=SLAP+lesion+MRI+diagnosis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>6. Brockmeier SF, et al. "Results of arthroscopic shoulder surgery in patients aged 65 years or older." J Shoulder Elbow Surg. 2005. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=SLAP+repair+outcomes+age" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>7. Boileau P, et al. "Arthroscopic treatment of isolated type II SLAP lesions: biceps tenodesis as an alternative to reinsertion." Am J Sports Med. 2009. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=SLAP+biceps+tenodesis+vs+repair" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>8. Denard PJ, et al. "Long-term outcome of arthroscopic SLAP repair." Arthroscopy. 2012. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=SLAP+repair+long+term+outcomes" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>9. McCormick F, et al. "A systematic review of the clinical and radiographic outcomes of superior labrum anterior posterior (SLAP) repair to biceps tenodesis." Arthroscopy. 2015. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=SLAP+repair+vs+tenodesis+systematic+review" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>10. Ek ET, et al. "Surgical management of type II superior labrum anterior posterior lesions: a systematic review." J Shoulder Elbow Surg. 2016. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=type+II+SLAP+treatment+systematic+review" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
          </ol>
        </section>

        {/* CTA Section */}
        <section className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">SLAP Lezyonu Değerlendirmesi</h2>
          <p className="text-lg mb-6 text-blue-50">
            Omuz ağrısı, kilitlenme hissi veya overhead aktivitelerde zorluk için uzman muayenesi 
            randevusu alabilirsiniz.
          </p>
          <Link
            href="/randevu"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Randevu Al
          </Link>
        </section>
      </article>
    </>
  );
}
