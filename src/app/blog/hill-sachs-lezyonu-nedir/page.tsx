import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hill-Sachs Lezyonu Nedir? | Humerus Baş Kırığı Belirtileri ve Tedavisi',
  description: 'Hill-Sachs lezyonu, omuz çıkığı sonrası oluşan humerus başı impaksiyon kırığı, nedenleri, tanı ve tedavi seçenekleri hakkında kapsamlı rehber.',
  keywords: 'Hill-Sachs lezyonu, omuz çıkığı, humerus başı kırığı, omuz instabilitesi, Bankart lezyonu',
  openGraph: {
    title: 'Hill-Sachs Lezyonu: Tanı ve Tedavi',
    description: 'Omuz çıkığı sonrası Hill-Sachs lezyonunun tanısı ve tedavi yaklaşımları.',
    type: 'article',
    locale: 'tr_TR',
    siteName: 'Dr. Özgür Oktay Nar',
  },
};

export default function HillSachsLezyonuPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: 'Hill-Sachs Lezyonu Nedir?',
    description: 'Hill-Sachs lezyonunun (posterolateral humerus baş impaksiyon kırığı) tanısı ve tedavisi.',
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
      name: 'Hill-Sachs Lezyonu',
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
            Hill-Sachs Lezyonu Nedir?
          </h1>
          <div className="relative w-full h-[400px] mb-8 rounded-2xl overflow-hidden">
            <Image
              src="/images/blog/hill-sachs-lezyonu.jpg"
              alt="Hill-Sachs lezyonu humerus başı impaksiyon kırığı"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Hill-Sachs lezyonu, humerus başının posterolateral (arka-dış) yüzeyinde oluşan impaksiyon 
            kırığıdır. Bu lezyon, anterior (ön) omuz çıkığı sırasında humerus başının glenoid kenarına 
            çarpması sonucu gelişir ve tekrarlayan omuz çıkıklarında sık görülür.
          </p>
        </header>

        {/* Main Content */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tanım ve Tarihçe</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Hill-Sachs lezyonu, 1940 yılında radyologlar Harold Arthur Hill ve Maurice David Sachs 
            tarafından tanımlanmıştır. Omuz çıkığının %40-100'ünde görülür ve anterior instabilitenin 
            önemli bir bileşenidir.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h4 className="font-semibold text-lg mb-3">Anatomik Konum:</h4>
            <ul className="space-y-2">
              <li>• <strong>Lokalizasyon:</strong> Humerus başı posterolateral yüzey</li>
              <li>• <strong>Mekanizma:</strong> Humerus başının anterior glenoid rimini (Bankart lezyonu) geçerek posterior-inferior glenoid kenarına çarpması</li>
              <li>• <strong>Şekil:</strong> "Wedge" (kama) veya "divot" (çukur) şeklinde çökme</li>
              <li>• <strong>Yön:</strong> Sagittal planda posterior-superior → anterior-inferior</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Nedenler ve Patofizyoloji</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Hill-Sachs lezyonu, neredeyse her zaman anterior (ön) glenohumeral dislokasyon ile 
            ilişkilidir. Bu yaralanma sırasında humerus başı öne-aşağıya kayar ve glenoid kenarına 
            çarpar.
          </p>

          <div className="bg-purple-50 p-6 rounded-lg mb-8">
            <h4 className="font-semibold text-lg mb-3">Yaralanma Mekanizması (3 Aşama):</h4>
            <ol className="space-y-2 text-gray-700">
              <li>
                <strong>1. Dislokasyon:</strong>
                <p className="text-sm mt-1">Omuz abduksiyonda, eksternal rotasyonda ve ekstansiyonda iken ani kuvvet uygulanır. 
                Humerus başı anterior kapsülü yırtarak öne-aşağı çıkar.</p>
              </li>
              <li>
                <strong>2. İmpaksiyon:</strong>
                <p className="text-sm mt-1">Humerus başının posterolateral yüzeyi (yumuşak kıkırdaklı alan), 
                anterior-inferior glenoid kenarına (sert kemik) çarpar ve içe çöker (impakte olur).</p>
              </li>
              <li>
                <strong>3. Redüksiyon:</strong>
                <p className="text-sm mt-1">Omuz yerine konduğunda, impaksiyon kırığı kalıcı hale gelir. 
                Bu çukur, tekrarlayan dislokasyonlarda "engaging" (kilitlenme) noktası olabilir.</p>
              </li>
            </ol>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Primer Nedenler:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Travmatik anterior dislokasyon:</strong> En yaygın neden (%80)</li>
                <li>• Spor yaralanmaları (kontakt sporlar, yüzme, voleybol)</li>
                <li>• Düşme (FOOSH - Fall on outstretched hand)</li>
                <li>• Motorlu taşıt kazaları</li>
                <li>• Epileptik nöbet veya elektrik çarpması (bilateral olabilir)</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Risk Faktörleri:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Genç yaş ({'<'}30 yaş, ilk dislokasyonda)</li>
                <li>• Erkek cinsiyet (2-3:1)</li>
                <li>• Kontakt sporlar (Amerikan futbolu, ragbi)</li>
                <li>• Overhead sporlar (yüzme, tenis)</li>
                <li>• Önceki omuz çıkığı öyküsü</li>
                <li>• Glenohumeral laksitite (hipermobilite)</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Sınıflandırma ve Boyutlandırma</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Hill-Sachs lezyonlarının klinik önemi, boyutlarına ve "engaging" (kilitlenme) potansiyeline 
            göre belirlenir.
          </p>

          <div className="space-y-6 mb-8">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-lg mb-3">1. Boyuta Göre Sınıflandırma (Rowe):</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Küçük (Mild):</strong> {'<'}2 cm, yüzeyel ({'<'}0.3 cm derinlik)</li>
                <li>• <strong>Orta (Moderate):</strong> 2-4 cm, 0.3-1 cm derinlik</li>
                <li>• <strong>Büyük (Severe):</strong> {'>'}4 cm, {'>'}1 cm derinlik, humerus başı %25-40'ı</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-lg mb-3">2. Engaging vs Non-Engaging:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Non-Engaging (Stabil):</strong>
                  <p className="text-sm mt-1">Omuz hareket ederken Hill-Sachs çukuru glenoid kenarına temas etmez. 
                  Bankart tamiri yeterli.</p>
                </li>
                <li>
                  <strong>Engaging (Instabil):</strong>
                  <p className="text-sm mt-1">Omuz abduksiyonda ve eksternal rotasyonda iken Hill-Sachs çukuru 
                  glenoid kenarına (özellikle anterior) kilitlenir ve subluksasyon riski yaratır. 
                  Ek cerrahi prosedür gerekir.</p>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">3. Glenoid Track Konsepti:</h4>
              <p className="text-gray-700 mb-3">
                Modern yaklaşım, Hill-Sachs lezyonunun "glenoid track" (glenoid'in humerus başına 
                temas ettiği alan) içinde mi yoksa dışında mı olduğunu değerlendirir.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>On-track:</strong> Lezyon glenoid track içinde → düşük risk, Bankart tamiri yeterli</li>
                <li>• <strong>Off-track:</strong> Lezyon track dışında → yüksek risk, ek prosedür gerekli (remplissage, distal tibial allogreft)</li>
                <li>• <strong>Hesaplama:</strong> Glenoid track genişliği - Hill-Sachs lezyon genişliği</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Belirtiler ve Klinik Bulgular</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Hill-Sachs lezyonu genellikle asemptomatiktir. Belirtiler, tekrarlayan instabilite ve 
            engaging lezyon varlığına bağlıdır.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h4 className="font-semibold text-lg mb-3">Tipik Belirtiler:</h4>
            <ul className="space-y-2">
              <li>• <strong>Tekrarlayan omuz çıkığı veya subluksasyonu:</strong> En yaygın şikayet</li>
              <li>• <strong>Apprehension (çıkacak korkusu):</strong> Özellikle abduksiyonda + eksternal rotasyonda</li>
              <li>• <strong>Belirli pozisyonlardan kaçınma:</strong> Overhead aktiviteler, giyinme</li>
              <li>• <strong>Güçsüzlük veya ağrı:</strong> Eksternal rotasyonda</li>
              <li>• <strong>"Clicking" veya "clunking" hissi:</strong> Omuz hareketi sırasında (engaging lezyon)</li>
              <li>• <strong>İlk dislokasyon öyküsü:</strong> Genellikle travmatik</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
            <h4 className="font-semibold text-lg mb-3">⚠️ Önemli Not:</h4>
            <p className="text-gray-700">
              Küçük, non-engaging Hill-Sachs lezyonları sıklıkla asemptomatiktir ve tesadüfen 
              görüntülemede saptanır. Belirtiler, lezyon boyutu, Bankart lezyonu varlığı ve 
              aktivite seviyesi ile koreledir.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Tanı Yöntemleri</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Tanı, anamnez (dislokasyon öyküsü), fizik muayene ve görüntüleme yöntemleri ile konur.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Fizik Muayene</h3>

          <div className="space-y-4 mb-8">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Apprehension Test:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Prosedür:</strong> Hasta sırtüstü, kol 90° abduksiyonda, muayeneci kolu eksternal rotasyona getirir</li>
                <li>• <strong>Pozitif:</strong> Hasta "omzum çıkacak" korkusu hisseder, kasları gerip karşı koyar</li>
                <li>• <strong>Anlamı:</strong> Anterior instabilite (Hill-Sachs + Bankart)</li>
              </ul>
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Relocation (Jobe) Test:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Prosedür:</strong> Apprehension pozisyonunda, muayeneci humerus başına posterior basınç uygular</li>
                <li>• <strong>Pozitif:</strong> Apprehension kaybolur, hasta rahatlar</li>
                <li>• <strong>Anlamı:</strong> Humerus başının posterior itilmesi instabiliteyi engelliyor → anterior instabilite doğrulanır</li>
              </ul>
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Sulcus Sign:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Prosedür:</strong> Kol yanında, aşağıya çekme ile akromiyon altında çukurluk oluşumu</li>
                <li>• <strong>Pozitif:</strong> {'>'}2 cm çukurluk → multidirectional instability (MDI) işareti</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Görüntüleme</h3>

          <div className="space-y-6 mb-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">X-Ray (Radyografi):</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Standart görüntüler:</strong> AP, aksiller, skapular Y
                  <ul className="ml-6 mt-2 space-y-1">
                    <li>- Hill-Sachs genellikle standart AP'de görünmez (posterior yüzeyde)</li>
                    <li>- Aksiller görüntü en iyi gösterir</li>
                  </ul>
                </li>
                <li>• <strong>Özel görüntüler:</strong>
                  <ul className="ml-6 mt-2 space-y-1">
                    <li>- <strong>Stryker notch view:</strong> Humerus başı postero-süperior yüzeyi</li>
                    <li>- <strong>Apical oblique view:</strong> Hill-Sachs ve glenoid rim</li>
                  </ul>
                </li>
                <li>• <strong>Bulgular:</strong> Humerus başında posterolateral çökme, "hatchet" (balta) işareti</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">CT (Bilgisayarlı Tomografi):</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Avantaj:</strong> Kemik detayı mükemmel, 3D rekonstrüksiyon mümkün</li>
                <li>• <strong>Kullanım:</strong> Lezyon boyutunu ölçmek, cerrahi planlama (greft boyutu)</li>
                <li>• <strong>Ölçüm:</strong> Genişlik, derinlik, humerus başının %kaçı etkilenmiş</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">MRI (Manyetik Rezonans):</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Gold standard</strong> yumuşak doku değerlendirmesi</li>
                <li>• <strong>Bulgular:</strong>
                  <ul className="ml-6 mt-2 space-y-1">
                    <li>- Hill-Sachs lezyonu (kemik ödemi, kıkırdak hasarı)</li>
                    <li>- Eşlik eden Bankart lezyonu (%90-95)</li>
                    <li>- Rotator cuff, labral yırtıklar</li>
                    <li>- Kapsül ve ligament hasarı</li>
                  </ul>
                </li>
                <li>• <strong>MRI Artrografi:</strong> Labral detay için tercih edilebilir</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Eşlik Eden Lezyonlar</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Hill-Sachs lezyonu nadiren izole görülür. Genellikle diğer omuz instabilite lezyonları 
            ile birlikte bulunur.
          </p>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <h4 className="font-semibold text-lg mb-3">Sık Görülen Birliktelikler:</h4>
            <ul className="space-y-2">
              <li>• <strong>Bankart lezyonu:</strong> %90-95 (anterior-inferior labral yırtık) — Hill-Sachs'ın "karşı ucu"</li>
              <li>• <strong>ALPSA lezyonu:</strong> Anterior labrum periosteal sleeve avulsion</li>
              <li>• <strong>HAGL lezyonu:</strong> Humeral avulsion of glenohumeral ligament</li>
              <li>• <strong>Rotator cuff yırtığı:</strong> Özellikli {'>'}40 yaş (%35-40)</li>
              <li>• <strong>SLAP lezyonu:</strong> Superior labral yırtık</li>
              <li>• <strong>Anterior kapsül gerilmesi:</strong> Kronik instabilite</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Tedavi Seçenekleri</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Tedavi yaklaşımı, lezyon boyutuna, engaging durumuna, hastanın yaşına, aktivite seviyesine 
            ve eşlik eden patolojilere göre belirlenir.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Konservatif Tedavi</h3>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h4 className="font-semibold text-lg mb-3">Endikasyonlar:</h4>
            <ul className="space-y-2">
              <li>• İlk dislokasyon (genç hastalarda tartışmalı)</li>
              <li>• Küçük, non-engaging Hill-Sachs lezyonu</li>
              <li>• Düşük aktivite seviyesi, yaşlı hastalar</li>
              <li>• Cerrahi riskli medikal durumlar</li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h4 className="font-semibold text-lg mb-3">Konservatif Tedavi Protokolü:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>İmmobilizasyon:</strong> Sling ile 3-6 hafta (internal rotasyonda)</li>
              <li>• <strong>Fizik tedavi:</strong> 8-12 hafta
                <ul className="ml-6 mt-2 space-y-1">
                  <li>- Faz 1: Pasif ROM, pendulum egzersizleri</li>
                  <li>- Faz 2: Aktif ROM, skapular stabilizasyon</li>
                  <li>- Faz 3: Rotator cuff ve skapular güçlendirme</li>
                  <li>- Faz 4: Fonksiyonel egzersizler, propriosepsiyon</li>
                </ul>
              </li>
              <li>• <strong>Aktivite modifikasyonu:</strong> Risk pozisyonlarından kaçınma (abduksiyon + eksternal rotasyon)</li>
              <li>• <strong>Başarı oranı:</strong> %50-80 (ancak genç aktif hastalarda tekrar dislokasyon riski %80-90)</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Cerrahi Tedavi</h3>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <h4 className="font-semibold text-lg mb-3">Cerrahi Endikasyonları:</h4>
            <ul className="space-y-2">
              <li>• Tekrarlayan dislokasyon veya subluksasyon</li>
              <li>• Engaging Hill-Sachs lezyonu (off-track)</li>
              <li>• Genç, aktif hastalar (özellikle overhead sporcular)</li>
              <li>• Ciddi fonksiyon kaybı ve yaşam kalitesinde azalma</li>
              <li>• Büyük Hill-Sachs lezyonu ({'>'}%25 humerus başı)</li>
            </ul>
          </div>

          <div className="space-y-6 mb-8">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">1. Bankart Tamiri (İzole):</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Endikasyon:</strong> Küçük, non-engaging Hill-Sachs + Bankart lezyonu</li>
                <li>• <strong>Yöntem:</strong> Artroskopik veya açık</li>
                <li>• <strong>Prosedür:</strong> Anterior labrum ve kapsülün glenoid rim'e ankrajlarla fiksasyonu</li>
                <li>• <strong>Başarı:</strong> %85-95 (non-engaging lezyonlarda)</li>
                <li>• <strong>Not:</strong> Hill-Sachs lezyonu tedavi edilmez, Bankart tamiri instabiliteyi çözer</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">2. Remplissage (Dolgu) Prosedürü:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Endikasyon:</strong> Orta-büyük engaging Hill-Sachs lezyonu (off-track)</li>
                <li>• <strong>Yöntem:</strong> Artroskopik</li>
                <li>• <strong>Prosedür:</strong> İnfraspinatus ve posterior kapsülün Hill-Sachs defektine sütürasyonu (tenodez). 
                Defekt "doldurulur" ve extraarticular hale getirilir.</li>
                <li>• <strong>Avantaj:</strong> Anatomik çözüm, ek greft gerekmez</li>
                <li>• <strong>Dezavantaj:</strong> Eksternal rotasyon kısıtlılığı (5-10°)</li>
                <li>• <strong>Kombinasyon:</strong> Genellikle Bankart tamiri ile birlikte yapılır</li>
                <li>• <strong>Başarı:</strong> %85-95, tekrar dislokasyon %3-5</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">3. Kemik Greft (Bone Grafting):</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Endikasyon:</strong> Çok büyük Hill-Sachs lezyonu ({'>'}%40 humerus başı, remplissage yetersiz)</li>
                <li>• <strong>Greft kaynağı:</strong>
                  <ul className="ml-6 mt-2 space-y-1">
                    <li>- <strong>Otogreft:</strong> Distal femur, iliac crest, humerus başı</li>
                    <li>- <strong>Allogreft:</strong> Distal tibia, femoral baş (fresh osteochondral)</li>
                  </ul>
                </li>
                <li>• <strong>Teknikler:</strong>
                  <ul className="ml-6 mt-2 space-y-1">
                    <li>- <strong>Osteochondral allograft:</strong> Kıkırdak + kemik, anatomik restorasyony</li>
                    <li>- <strong>Bone block:</strong> Sadece kemik greft</li>
                  </ul>
                </li>
                <li>• <strong>Avantaj:</strong> Humerus başı anatomisi restore edilir</li>
                <li>• <strong>Dezavantaj:</strong> Teknik zorluk, greft kaynaması riski, artrit riski</li>
                <li>• <strong>Başarı:</strong> %80-90</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">4. Partial Humeral Head Resurfacing (Kısmı Kaplama):</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Endikasyon:</strong> Çok büyük defekt, genç hasta, artrit yok</li>
                <li>• <strong>Prosedür:</strong> Hill-Sachs bölgesine metal implant yerleştirilmesi</li>
                <li>• <strong>Avantaj:</strong> Teknik basitlik, hızlı iyileşme</li>
                <li>• <strong>Dezavantaj:</strong> İmplant kayması, uzun vadeli sonuçlar belirsiz</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">5. Rotational Humeral Osteotomy (Nadiren):</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Endikasyon:</strong> Çok büyük defekt, diğer yöntemler uygulanamaz</li>
                <li>• <strong>Prosedür:</strong> Humerus internal rotasyona getirilerek Hill-Sachs posterior-üste döndürülür</li>
                <li>• <strong>Dezavantaj:</strong> Eksternal rotasyon ciddi kısıtlanır, artrit riski</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
            <h4 className="font-semibold text-lg mb-3">Tedavi Seçim Algoritması:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Küçük Hill-Sachs + on-track:</strong> Sadece Bankart tamiri</li>
              <li>• <strong>Orta Hill-Sachs + off-track + {'<'}25% defekt:</strong> Bankart + Remplissage</li>
              <li>• <strong>Büyük Hill-Sachs + 25-40% defekt:</strong> Remplissage veya kemik greft (yaş, talep bazlı)</li>
              <li>• <strong>Çok büyük Hill-Sachs + {'>'}40% defekt:</strong> Osteochondral allograft veya resurfacing</li>
              <li>• <strong>Glenoid kemik kaybı {'>'}20%:</strong> Latarjet/Bristow prosedürü eklenebilir</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Ameliyat Sonrası Rehabilitasyon</h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Bankart Tamiri + Remplissage Protokolü:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>0-4 hafta:</strong> Sling (internal rotasyonda), sadece pasif ROM (fleksiyon, internal rotasyon), eksternal rotasyon YASAK</li>
                <li>• <strong>4-8 hafta:</strong> Aktif-assistif ROM, hafif eksternal rotasyon (30-40° ile sınırlı), sling azaltılır</li>
                <li>• <strong>8-12 hafta:</strong> Aktif ROM, kademeli eksternal rotasyon artırımı, hafif izometrik güçlendirme</li>
                <li>• <strong>12-16 hafta:</strong> Progresif dirençli egzersizler, skapular stabilizasyon</li>
                <li>• <strong>4-6 ay:</strong> İleri güçlendirme, fonksiyonel egzersizler</li>
                <li>• <strong>6-9 ay:</strong> Kontakt olmayan sporlara dönüş</li>
                <li>• <strong>9-12 ay:</strong> Kontakt sporlar ve overhead atıcı sporları (tam iyileşme)</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Prognoz ve Sonuçlar</h2>
          
          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h4 className="font-semibold text-lg mb-3">Başarı Oranları:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Bankart tamiri (izole, non-engaging Hill-Sachs):</strong> %85-95 memnuniyet, %5-10 tekrar dislokasyon</li>
              <li>• <strong>Bankart + Remplissage:</strong> %85-95 memnuniyet, %3-5 tekrar dislokasyon, 5-10° eksternal rotasyon kaybı</li>
              <li>• <strong>Kemik greft prosedürleri:</strong> %80-90 memnuniyet, daha yüksek artrit riski uzun vadede</li>
              <li>• <strong>Konservatif tedavi (genç, aktif hastalar):</strong> %20-50 memnuniyet, %50-80 tekrar dislokasyon</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg mb-8">
            <h4 className="font-semibold text-lg mb-3">Komplikasyonlar:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Tekrar dislokasyon:</strong> %3-15 (teknik ve lezyon büyüklüğüne bağlı)</li>
              <li>• <strong>Sertlik:</strong> %5-10</li>
              <li>• <strong>Eksternal rotasyon kaybı:</strong> 5-10° (remplissage sonrası)</li>
              <li>• <strong>Enfeksiyon:</strong> {'<'}%1</li>
              <li>• <strong>Nörolojik yaralanma:</strong> {'<'}%1 (aksiller sinir)</li>
              <li>• <strong>Artrit:</strong> %5-15 (10-20 yıl içinde, özellikle kemik greft sonrası)</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h4 className="font-semibold text-lg mb-3">Prognostik Faktörler:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>İyi prognoz:</strong> İlk dislokasyon, küçük lezyon, uygun tedavi, düşük talep</li>
              <li>• <strong>Kötü prognoz:</strong> Tekrarlayan dislokasyon, büyük/engaging lezyon, glenoid kemik kaybı {'>'}20%, hiperlaksitite, sigara</li>
              <li>• <strong>Yaş faktörü:</strong> {'<'}20 yaş ilk dislokasyonda → %80-90 tekrar riski (cerrahi önerilir)</li>
            </ul>
          </div>
        </section>

        {/* References */}
        <section className="mb-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Kaynaklar</h2>
          <ol className="space-y-2 text-sm text-gray-700">
            <li>1. Hill HA, Sachs MD. "The grooved defect of the humeral head." Radiology. 1940. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=Hill+Sachs+lesion+original" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>2. Rowe CR, et al. "The Bankart procedure: a long-term end-result study." J Bone Joint Surg Am. 1978. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=Bankart+procedure+Hill+Sachs" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>3. Burkhart SS, De Beer JF. "Traumatic glenohumeral bone defects and their relationship to failure of arthroscopic Bankart repairs." Arthroscopy. 2000. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=glenoid+bone+loss+Bankart+failure" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>4. Yamamoto N, et al. "The stabilizing mechanism of the labrum and its importance for bone defects: a biomechanical study." J Shoulder Elbow Surg. 2010. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=glenoid+track+Hill+Sachs" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>5. Wolf EM, Arianjam A. "Hill-Sachs remplissage, an arthroscopic solution for the engaging Hill-Sachs lesion." Arthroscopy. 2014. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=remplissage+technique+Hill+Sachs" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>6. Purchase RJ, et al. "Hill-Sachs 'remplissage': an arthroscopic solution for the engaging Hill-Sachs lesion." Arthroscopy. 2008. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=remplissage+Hill+Sachs+outcomes" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>7. Provencher MT, et al. "Anatomic osteochondral glenoid reconstruction for recurrent glenohumeral instability with glenoid deficiency using a distal tibia allograft." Arthroscopy. 2009. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=osteochondral+allograft+Hill+Sachs" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>8. Chapovsky F, Kelly JD 4th. "Osteochondral allograft transplantation for treatment of glenohumeral instability." Arthroscopy. 2005. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=allograft+Hill+Sachs+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>9. Garcia GH, et al. "Biomechanical comparison of two surgical techniques for addressing the engaging Hill-Sachs lesion." J Shoulder Elbow Surg. 2016. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=Hill+Sachs+biomechanics+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>10. Boileau P, et al. "Risk factors for recurrence of shoulder instability after arthroscopic Bankart repair." J Bone Joint Surg Am. 2006. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=shoulder+instability+recurrence+risk+factors" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
          </ol>
        </section>
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
        <section className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">Omuz İnstabilitesi Değerlendirmesi</h2>
          <p className="text-lg mb-6 text-blue-50">
            Tekrarlayan omuz çıkığı veya Hill-Sachs lezyonu tanısı için uzman muayenesi randevusu 
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
