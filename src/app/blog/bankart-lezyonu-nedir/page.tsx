import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bankart Lezyonu Nedir? | Omuz Çıkığı Sonrası Labrum Yırtığı Belirtileri ve Tedavisi',
  description: 'Bankart lezyonu, anterior omuz çıkığı sonrası oluşan glenoid labrum yırtığı, nedenleri, tanı ve tedavi seçenekleri hakkında kapsamlı rehber.',
  keywords: 'Bankart lezyonu, omuz çıkığı, labrum yırtığı, omuz instabilitesi, Hill-Sachs lezyonu, kapsül yırtığı',
  openGraph: {
    title: 'Bankart Lezyonu: Tanı ve Tedavi',
    description: 'Omuz çıkığı sonrası Bankart lezyonunun tanısı ve tedavi yaklaşımları.',
    type: 'article',
    locale: 'tr_TR',
    siteName: 'Dr. Özgür Oktay Nar',
  },
};

export default function BankartLezyonuPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: 'Bankart Lezyonu Nedir?',
    description: 'Bankart lezyonunun (anterior-inferior glenoid labrum yırtığı) tanısı ve tedavisi.',
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
      name: 'Bankart Lezyonu',
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
            Bankart Lezyonu Nedir?
          </h1>
          <div className="relative w-full h-[400px] mb-8 rounded-2xl overflow-hidden">
            <Image
              src="/images/blog/bankart-lezyonu.jpg"
              alt="Bankart lezyonu glenoid labrum yırtığı ve omuz instabilitesi"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Bankart lezyonu, omuz ekleminde glenoid labrumun anterior-inferior (ön-alt) kısmının 
            yırtılmasıdır. Bu yaralanma, travmatik anterior omuz çıkığı sonrası gelişen en yaygın 
            patolojidir ve omuz instabilitesinin ana nedenlerinden biridir.
          </p>
        </header>

        {/* Main Content */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Glenoid Labrum Nedir?</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Glenoid labrum, skapulanın glenoid kavitesini çevreleyen fibrokartilaj bir halkadır. 
            Bu yapı, omuz ekleminin sığ olan glenoid kavitesini derinleştirerek humerus başının 
            stabilizasyonuna katkıda bulunur.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h4 className="font-semibold text-lg mb-3">Labrumun Fonksiyonları:</h4>
            <ul className="space-y-2">
              <li>• <strong>Eklem derinliğini artırma:</strong> Glenoid kaviteyi %50 daha derin yapar</li>
              <li>• <strong>Vakum etkisi:</strong> Negatif intraartiküler basıncı korur</li>
              <li>• <strong>Ligament tutunma yeri:</strong> Glenohumeral ligamentlerin ankor noktası</li>
              <li>• <strong>Şok emici:</strong> Eklem yüzeyleri arasındaki stresi dağıtır</li>
              <li>• <strong>Propriosepsiyon:</strong> Eklem konum hissini sağlar</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Bankart Lezyonu Tanımı</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Bankart lezyonu, 1923 yılında İngiliz cerrah Arthur Bankart tarafından tanımlanmıştır. 
            Omuzun öne doğru çıkması sırasında humerus başının, glenoidin ön-alt kenarına çarpması 
            ve labrumu yırtmasıyla oluşur.
          </p>

          <div className="bg-purple-50 p-6 rounded-lg mb-8">
            <h4 className="font-semibold text-lg mb-3">Temel Özellikleri:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Lokalizasyon:</strong> Anterior-inferior glenoid labrum (saat 3-6 pozisyonları)</li>
              <li>• <strong>Eşlik eden:</strong> Anterior inferior glenohumeral ligament (AIGHL) yırtığı</li>
              <li>• <strong>Sonuç:</strong> Omuzda tekrarlayan çıkık veya instabilite riski</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Bankart Lezyonu Tipleri</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Bankart lezyonu, sadece labrumu içeren bir yırtık olabileceği gibi, kemik tutulumu 
            da gösterebilir.
          </p>

          <div className="space-y-6 mb-8">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-lg mb-3">1. Yumuşak Doku Bankart Lezyonu:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Sadece labrum ve anterior kapsülün glenoidten ayrılması</li>
                <li>• Glenoid kemiği sağlam</li>
                <li>• En sık görülen tip</li>
                <li>• <strong>Tedavi:</strong> Artroskopik labrum tamiri (Bankart tamiri)</li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h4 className="font-semibold text-lg mb-3">2. Kemik Bankart Lezyonu:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Labrum ile birlikte glenoid kemiğinden bir parçanın kopması (anterior glenoid rim kırığı)</li>
                <li>• Tekrarlayan dislokasyonlarda glenoid kemik kaybı artabilir</li>
                <li>• <strong>Tedavi:</strong> Küçük defektlerde tamir, büyük defektlerde kemik greftleme (Latarjet prosedürü)</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-semibold text-lg mb-3">3. Diğer İlişkili Lezyonlar:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>ALPSA Lezyonu:</strong> Anterior Labroligamentous Periosteal Sleeve Avulsion (labrumun periosta kayması)</li>
                <li>• <strong>Perthes Lezyonu:</strong> Anterior inferior labrum yırtığı ve glenoid periostta yırtılma</li>
                <li>• <strong>HAGL Lezyonu:</strong> Humeral Avulsion of the Glenohumeral Ligament (ligamentin humerustan kopması)</li>
                <li>• <strong>Bipolar lezyon:</strong> Bankart + Hill-Sachs lezyonu</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Nedenler ve Risk Faktörleri</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Bankart lezyonunun ana nedeni travmatik anterior omuz çıkığıdır.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Primer Nedenler (Travmatik):</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Omuz çıkığı (anterior dislokasyon):</strong> En yaygın neden</li>
                <li>• Koldan düşme (FOOSH - Fall On Outstretched Hand)</li>
                <li>• Direkt omuz travması</li>
                <li>• Spor yaralanmaları (kontakt sporlar, güreş, futbol)</li>
                <li>• Motorlu taşıt kazaları</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Risk Faktörleri (Tekrar Dislokasyon İçin):</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Genç yaş (<25 yaş, ilk dislokasyonda)</li>
                <li>• Erkek cinsiyet</li>
                <li>• Yüksek aktivite seviyesi (kontakt sporcu)</li>
                <li>• Yüksek dereceli travma</li>
                <li>• Eşlik eden Hill-Sachs lezyonu (özellikle engaging)</li>
                <li>• Glenoid kemik kaybı (>%20-25)</li>
                <li>• Hiperlaksitite (eklem gevşekliği)</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Belirtiler ve Klinik Bulgular</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Bankart lezyonunun belirtileri genellikle ilk omuz çıkığı sonrası başlar ve tekrarlayan 
            instabilite ile kötüleşir.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h4 className="font-semibold text-lg mb-3">Tipik Belirtiler:</h4>
            <ul className="space-y-2">
              <li>• <strong>Omuzda "çıktı" hissi veya gerçek çıkık:</strong> Özellikle kol abduksiyon ve dış rotasyondayken</li>
              <li>• <strong>Apprehension (çıkacak korkusu):</strong> Kolu belirli pozisyonlara getirirken endişe</li>
              <li>• <strong>Omuz ön kısmında ağrı:</strong> Derin ve künt ağrı</li>
              <li>• <strong>Omuzda "boşluk" veya "yerinden oynama" hissi</strong></li>
              <li>• <strong>Hareket kısıtlılığı:</strong> Özellikle dış rotasyonda (bazı hastalarda artmış ROM olabilir)</li>
              <li>• <strong>Tıkırdama veya sürtünme sesleri:</strong> Eklem içinde</li>
              <li>• <strong>Zayıflık hissi:</strong> Özellikle kolu kaldırmaya çalışırken</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
            <h4 className="font-semibold text-lg mb-3">⚠️ Önemli Not:</h4>
            <p className="text-gray-700">
              İlk omuz çıkığı sonrası %80-90 oranında Bankart lezyonu oluşur. Tekrarlayan çıkıklar, 
              güvenli olmayan glenoid ve humerus başı kemik kaybı ile ilişkilidir.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Tanı Yöntemleri</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Tanı, detaylı klinik muayene ve görüntüleme testleri ile konur.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Fizik Muayene Testleri</h3>

          <div className="space-y-4 mb-8">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Apprehension Test:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Prosedür:</strong> Hasta sırtüstü, kol 90° abduksiyonda, muayeneci kolu eksternal rotasyona getirir</li>
                <li>• <strong>Pozitif:</strong> Hasta "omzum çıkacak" korkusu hisseder, kasları gerip karşı koyar</li>
                <li>• <strong>Anlamı:</strong> Anterior instabilite varlığı</li>
              </ul>
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Relocation (Jobe) Test:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Prosedür:</strong> Apprehension pozisyonunda, muayeneci humerus başına posterior basınç uygular</li>
                <li>• <strong>Pozitif:</strong> Apprehension kaybolur, hasta rahatlar</li>
                <li>• <strong>Anlamı:</strong> Posterior basınçla stabilite sağlanması → anterior instabilite doğrulanır</li>
              </ul>
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Load and Shift Test:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Prosedür:</strong> Humerus başı glenoid içine bastırılır, sonra anterior-posterior yönde kaydırma</li>
                <li>• <strong>Pozitif:</strong> Artmış translasyon (kayma) veya subluksasyon → instabilite derecesini ölçer</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Görüntüleme Yöntemleri</h3>

          <div className="space-y-6 mb-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">X-Ray (Radyografi):</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Standart görüntüler:</strong> AP, aksiller, skapular Y</li>
                <li>• <strong>Bankart lezyonu:</strong> Direkt kemik Bankart'ı gösterebilir (glenoid ön kenarında kırık)</li>
                <li>• <strong>Hill-Sachs lezyonu:</strong> Eşlik eden humerus başı impaksiyon kırığını gösterir (aksiller/Stryker view)</li>
                <li>• <strong>Kemik kaybı:</strong> Glenoid riminde kemik kaybını değerlendirir</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">MRI Artrografi (Gold Standard):</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Prosedür:</strong> Ekleme kontrast madde enjeksiyonu sonrası MRI</li>
                <li>• <strong>Avantaj:</strong> Labrum, kapsül ve ligamentleri en iyi gösteren yöntem</li>
                <li>• <strong>Bulgular:</strong> Anterior-inferior labrum yırtığı ve ayrılması, AIGHL yırtığı, Hill-Sachs lezyonu, kapsüler gerilme</li>
                <li>• <strong>Cerrahi planlama:</strong> Soft doku ve kemik lezyonlarının değerlendirilmesinde kritik</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">CT (Bilgisayarlı Tomografi):</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Avantaj:</strong> Kemik detayı mükemmel, glenoid kemik kaybını en doğru gösterir</li>
                <li>• <strong>Kullanım:</strong> Kemik Bankart lezyonlarının boyutunu, Hill-Sachs lezyonunun boyutunu ve glenoid track'i değerlendirmek</li>
                <li>• <strong>3D rekonstrüksiyon:</strong> Cerrahi öncesi detaylı planlama için</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Artroskopi:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Kesin tanı:</strong> Direkt görselleştirme ile Bankart lezyonu, kemik kaybı ve eşlik eden patolojiler görülür</li>
                <li>• <strong>Tanısal + Terapötik:</strong> Aynı seansta tanı ve tamir yapılabilir</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Tedavi Seçenekleri</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Tedavi, hastanın yaşına, aktivite seviyesine, dislokasyon sayısına, eşlik eden kemik 
            kaybı ve lezyonlara göre değişir.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Konservatif Tedavi</h3>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h4 className="font-semibold text-lg mb-3">Endikasyonlar:</h4>
            <ul className="space-y-2">
              <li>• İlk dislokasyon (özellikle yaşlı, düşük talep hastalarında)</li>
              <li>• Subjektif instabilite hissi olmayanlar</li>
              <li>• Cerrahi riskli medikal durumlar</li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h4 className="font-semibold text-lg mb-3">Konservatif Tedavi Protokolü:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>İmmobilizasyon:</strong> Sling ile 3-4 hafta (internal rotasyonda daha iyi)</li>
              <li>• <strong>Fizik tedavi:</strong> 6-12 hafta
                <ul className="ml-6 mt-2 space-y-1">
                  <li>- Faz 1: Pasif ROM, pendulum egzersizleri</li>
                  <li>- Faz 2: Aktif ROM, skapular stabilizasyon</li>
                  <li>- Faz 3: Rotator cuff ve skapular güçlendirme (özellikle internal rotatörler)</li>
                  <li>- Faz 4: Fonksiyonel egzersizler, propriosepsiyon</li>
                </ul>
              </li>
              <li>• <strong>Aktivite modifikasyonu:</strong> Risk pozisyonlarından kaçınma (abduksiyon + eksternal rotasyon)</li>
              <li>• <strong>Başarı oranı:</strong> İlk dislokasyonda tekrar riski <20 yaş için %80-90, >40 yaş için %10-20</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Cerrahi Tedavi</h3>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <h4 className="font-semibold text-lg mb-3">Cerrahi Endikasyonları:</h4>
            <ul className="space-y-2">
              <li>• Tekrarlayan dislokasyon veya subluksasyon</li>
              <li>• Genç, aktif hastalar (özellikle overhead sporcular)</li>
              <li>• Ciddi glenoid kemik kaybı (>%20)</li>
              <li>• Büyük Hill-Sachs lezyonu (engaging)</li>
              <li>• Konservatif tedaviye yanıtsızlık</li>
            </ul>
          </div>

          <div className="space-y-6 mb-8">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">1. Artroskopik Bankart Tamiri (Soft Doku):</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Yöntem:</strong> Kapalı cerrahi, minimal invaziv</li>
                <li>• <strong>Prosedür:</strong> Anterior labrum ve inferior glenohumeral ligamentin glenoid rim'e artroskopik ankraj (çapa) dikişleri ile tespiti</li>
                <li>• <strong>Avantaj:</strong> Minimal insizyon, hızlı iyileşme, kozmetik</li>
                <li>• <strong>Dezavantaj:</strong> Yüksek tekrar dislokasyon riski (özellikle kemik kaybı varsa)</li>
                <li>• <strong>Endikasyon:</strong> Yumuşak doku Bankart lezyonu, küçük Hill-Sachs (on-track)</li>
                <li>• <strong>Başarı:</strong> %85-95</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">2. Açık Bankart Tamiri:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Yöntem:</strong> Deltopektoral insizyon</li>
                <li>• <strong>Prosedür:</strong> Labrum ve kapsülün direk tespiti</li>
                <li>• <strong>Avantaj:</strong> Güvenilir, daha düşük tekrar dislokasyon oranı</li>
                <li>• <strong>Dezavantaj:</strong> Daha invaziv, uzun iyileşme, daha yüksek sertlik riski</li>
                <li>• <strong>Endikasyon:</strong> Artroskopik başarısızlık, glenoid kemik kaybı (hafif)</li>
                <li>• <strong>Başarı:</strong> %90-97</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">3. Latarjet Prosedürü (Kemik Transferi):</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Endikasyon:</strong> Ciddi glenoid kemik kaybı (>%20-25), engaging Hill-Sachs, başarısız Bankart tamiri</li>
                <li>• <strong>Yöntem:</strong> Açık veya artroskopik</li>
                <li>• <strong>Prosedür:</strong> Korakoid çıkıntının bir kısmının kesilerek glenoidin ön-alt kenarına transferi (kemik blok) ve tespit edilmesi. 
                Korakoidden çıkan kaslar (konjoin tendon) da ön kapsülü güçlendirir.</li>
                <li>• <strong>Avantaj:</strong> Kemik kaybını restore eder, mekanik bariyer sağlar, kas flebi ile dinamik stabilizasyon</li>
                <li>• <strong>Dezavantaj:</strong> Daha invaziv, komplikasyon riski yüksek (sinir, damar, nonunion)</li>
                <li>• <strong>Başarı:</strong> %90-98, tekrar dislokasyon <%5</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">4. Remplissage Prosedürü:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Endikasyon:</strong> Engaging Hill-Sachs lezyonu ile birlikte Bankart lezyonu (bipolar lezyon)</li>
                <li>• <strong>Prosedür:</strong> Hill-Sachs lezyonunun infraspinatus ve posterior kapsül ile doldurulması (ayrıca Bankart tamiri yapılır)</li>
                <li>• <strong>Avantaj:</strong> Hill-Sachs lezyonunu etkisiz hale getirir</li>
                <li>• <strong>Dezavantaj:</strong> Eksternal rotasyon kaybı</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">5. Kapsüler Shift / Plikasyon:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Endikasyon:</strong> Multidirectional Instability (MDI), genel eklem gevşekliği</li>
                <li>• <strong>Prosedür:</strong> Eklem kapsülünün sıkılaştırılması ve gerilmesi</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
            <h4 className="font-semibold text-lg mb-3">Cerrahi Karar Algoritması:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Genç, aktif, yumuşak doku Bankart, küçük Hill-Sachs (on-track):</strong> Artroskopik Bankart Tamiri</li>
              <li>• <strong>Yumuşak doku Bankart + orta Hill-Sachs (off-track):</strong> Artroskopik Bankart + Remplissage</li>
              <li>• <strong>Glenoid kemik kaybı >%20-25 veya başarısız Bankart:</strong> Latarjet Prosedürü</li>
              <li>• <strong>Büyük Hill-Sachs (>%40):</strong> Kemik greft veya Latarjet</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Ameliyat Sonrası Rehabilitasyon</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Rehabilitasyon protokolü, yapılan cerrahi prosedüre ve hastanın bireysel durumuna göre 
            kişiselleştirilir.
          </p>

          <div className="space-y-6 mb-8">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Artroskopik Bankart Tamiri Sonrası Protokol:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>0-4 hafta:</strong> İmmobilizasyon (sling), pasif/aktif-asistif ROM (0-45° eksternal rotasyon kısıtlılığı)</li>
                <li>• <strong>4-8 hafta:</strong> Aktif ROM, sling azaltılır, hafif izometrik güçlendirme (internal rotasyon)</li>
                <li>• <strong>8-12 hafta:</strong> Progresif rotator cuff ve skapular güçlendirme, propriosepsiyon</li>
                <li>• <strong>3-6 ay:</strong> Fonksiyonel egzersizler, spor-spesifik antrenman</li>
                <li>• <strong>6-9 ay:</strong> Spora dönüş (kontakt sporlar için 9-12 ay)</li>
              </ul>
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Latarjet Prosedürü Sonrası Protokol:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>0-3 hafta:</strong> Sling, pasif ROM (kısıtlı eksternal rotasyon)</li>
                <li>• <strong>3-6 hafta:</strong> Sling azaltılır, aktif-asistif ROM, hafif güçlendirme</li>
                <li>• <strong>6-12 hafta:</strong> Aktif ROM, progresif güçlendirme</li>
                <li>• <strong>3-6 ay:</strong> Spora dönüş (daha erken olabilir)</li>
                <li>• Daha hızlı fonksiyonel iyileşme mümkündür</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Prognoz ve Sonuçlar</h2>
          
          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h4 className="font-semibold text-lg mb-3">Başarı Oranları:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Artroskopik Bankart tamiri:</strong> %85-95 iyi veya mükemmel sonuçlar, %5-15 tekrar dislokasyon</li>
              <li>• <strong>Açık Bankart tamiri:</strong> %90-97 iyi veya mükemmel sonuçlar, %3-10 tekrar dislokasyon</li>
              <li>• <strong>Latarjet prosedürü:</strong> %90-98 iyi veya mükemmel sonuçlar, %2-5 tekrar dislokasyon (özellikle yüksek riskli hastalarda)</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg mb-8">
            <h4 className="font-semibold text-lg mb-3">Komplikasyonlar:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Tekrar dislokasyon/instabilite:</strong> En sık komplikasyon (%5-20, cerrahiye göre değişir)</li>
              <li>• <strong>Sertlik:</strong> %5-10 (özellikle açık cerrahi sonrası)</li>
              <li>• <strong>Sinir yaralanması:</strong> <%1 (aksiller sinir, muskulokutanöz sinir - Latarjet sonrası)</li>
              <li>• <strong>Enfeksiyon:</strong> <%1</li>
              <li>• <strong>Kemik greft nonunion:</strong> Latarjet sonrası (%1-5)</li>
              <li>• <strong>Artrit:</strong> Uzun vadede %5-15</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h4 className="font-semibold text-lg mb-3">Kötü Prognostik Faktörler:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• <25 yaş</li>
              <li>• Erkek cinsiyet</li>
              <li>• Kontakt veya overhead sporlar</li>
              <li>• Ciddi glenoid kemik kaybı (>%20)</li>
              <li>• Engaging Hill-Sachs lezyonu</li>
              <li>• Çoklu dislokasyon öyküsü</li>
              <li>• Hiperlaksitite</li>
              <li>• Sigara kullanımı</li>
            </ul>
          </div>
        </section>

        {/* References */}
        <section className="mb-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Kaynaklar</h2>
          <ol className="space-y-2 text-sm text-gray-700">
            <li>1. Bankart ASB. "Recurrent or habitual dislocation of the shoulder-joint." Br Med J. 1923. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=Bankart+lesion+original" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>2. Rowe CR, et al. "The Bankart procedure: a long-term end-result study." J Bone Joint Surg Am. 1978. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=Bankart+procedure+long+term" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>3. Burkhart SS, De Beer JF. "Traumatic glenohumeral bone defects and their relationship to failure of arthroscopic Bankart repairs." Arthroscopy. 2000. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=glenoid+bone+loss+Bankart+failure" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>4. Latarjet M. "Apropos of the treatment of recurrent dislocation of the shoulder (author's transl)." J Chir (Paris). 1954. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=Latarjet+procedure+shoulder" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>5. Boileau P, et al. "Risk factors for recurrence of shoulder instability after arthroscopic Bankart repair." J Bone Joint Surg Am. 2006. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=shoulder+instability+recurrence+risk+factors" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>6. Hovelius L, et al. "The Bankart procedure for recurrent dislocation of the shoulder: a long-term follow-up." J Bone Joint Surg Am. 1982. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=Bankart+long+term+followup" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>7. Cutts S, et al. "Anterior shoulder dislocation." BMJ. 2009. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=anterior+shoulder+dislocation+review" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>8. Itoi E, et al. "The effect of a Bankart lesion on anterior glenohumeral stability: a cadaveric study." J Shoulder Elbow Surg. 2000. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=Bankart+lesion+stability+biomechanics" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>9. Garcia GH, et al. "Biomechanical comparison of two surgical techniques for addressing the engaging Hill-Sachs lesion." J Shoulder Elbow Surg. 2016. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=Hill+Sachs+Bankart+biomechanics" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>10. Arciero RA, et al. "Recurrent anterior shoulder instability: a prospective study of glenoid bone loss and the Bankart repair." Am J Sports Med. 2020. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=glenoid+bone+loss+Bankart+repair+prospective" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
          </ol>
        </section>

        {/* CTA Section */}
        <section className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">Omuzunuzda Güvensizlik mi Hissediyorsunuz?</h2>
          <p className="text-lg mb-6 text-blue-50">
            Tekrarlayan omuz çıkığı veya Bankart lezyonu tanısı için uzman muayenesi randevusu 
            alabilirsiniz.
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
