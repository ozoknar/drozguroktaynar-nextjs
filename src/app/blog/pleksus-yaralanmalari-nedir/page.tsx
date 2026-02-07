import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pleksus Yaralanmaları Nedir? | Brakiyal Pleksus Hasarı Belirtileri ve Tedavisi',
  description: 'Pleksus yaralanmaları (brakiyal, lumbosakral), nedenleri, tipleri, tanı yöntemleri ve tedavi seçenekleri hakkında kapsamlı bilgi.',
  keywords: 'pleksus yaralanması, brakiyal pleksus, sinir hasarı, Erb palsi, nöropraks, lumbosakral pleksus',
  openGraph: {
    title: 'Pleksus Yaralanmaları: Tanı ve Tedavi Rehberi',
    description: 'Pleksus yaralanmalarının tipleri, belirtileri ve tedavi yaklaşımları.',
    type: 'article',
    locale: 'tr_TR',
    siteName: 'Dr. Özgür Oktay Nar',
  },
};

export default function PleksusYaralanmalariPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: 'Pleksus Yaralanmaları Nedir?',
    description: 'Pleksus yaralanmalarının anatomisi, tipleri, tanısı ve tedavisi.',
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
      name: 'Pleksus Yaralanması',
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
            Pleksus Yaralanmaları Nedir?
          </h1>
          <div className="relative w-full h-[400px] mb-8 rounded-2xl overflow-hidden">
            <Image
              src="/images/blog/pleksus-yaralanmalari.jpg"
              alt="Brakiyal pleksus anatomisi ve yaralanma tipleri"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Pleksus yaralanmaları, omurilikte Çıkan spinal sinirlerin oluşturduğu sinir ağlarının 
            hasarlanmasıdır. En yaygın tipi, kol ve eli kontrol eden brakiyal pleksus yaralanmasıdır. 
            Bu yaralanmalar ağrı, güçsüzlük ve duyu kaybına neden olabilir.
          </p>
        </header>

        {/* Main Content */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Pleksus Nedir?</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Pleksus, omurilikte çıkan spinal sinirlerin belirli bölgelerde birleşerek karmaşık bir 
            ağ oluşturmasıdır. Bu yapı, belirli kas gruplarına ve deri bölgelerine sinir dağılımını 
            organize eder.
          </p>

          <div className="bg-[#E6FAF8] border-l-4 border-[#1AD2C4] p-6 mb-6">
            <h4 className="font-semibold text-lg mb-3">Vücuttaki Başlıca Pleksuslar:</h4>
            <ul className="space-y-2">
              <li>• <strong>Brakiyal Pleksus (C5-T1):</strong> Kol, ön kol ve el kaslarına innervasyon</li>
              <li>• <strong>Lumbosakral Pleksus (L1-S4):</strong> Bacak ve kalça kaslarına innervasyon</li>
              <li>• <strong>Servikal Pleksus (C1-C4):</strong> Boyun ve diyafram kasları</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Brakiyal Pleksus Anatomisi</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Brakiyal pleksus, C5-C6-C7-C8 servikal ve T1 torasik spinal sinir köklerinden oluşur. 
            Boyun tarafından aksillaya (koltuk altı) uzanır ve kol sinirlerini oluşturur.
          </p>

          <div className="bg-purple-50 p-6 rounded-lg mb-8">
            <h4 className="font-semibold text-lg mb-3">Brakiyal Pleksus Yapısı (5 Seviye):</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>1. Roots (Kökler):</strong> C5, C6, C7, C8, T1 spinal sinirleri</li>
              <li>• <strong>2. Trunks (Gövdeler):</strong> Üst (C5-C6), orta (C7), alt (C8-T1)</li>
              <li>• <strong>3. Divisions (Bölümler):</strong> Her trunk anterior ve posterior'a ayrılır</li>
              <li>• <strong>4. Cords (Kordonlar):</strong> Lateral, posterior, medial kordonlar</li>
              <li>• <strong>5. Terminal Branches (Terminal dallar):</strong> Muskulokütanöz, aksiller, radial, median, ulnar sinirler</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Yaralanma Nedenleri</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Pleksus yaralanmaları travmatik veya non-travmatik nedenlerle oluşabilir. Mekanizma 
            genellikle germe, ezilme, kesilme veya avulsiyondur.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h4 className="font-semibold text-lg mb-3">Travmatik Nedenler:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Motorlu taşıt kazaları:</strong> En yaygın neden (yüksek enerjili travma)</li>
                <li>• <strong>Motosiklet kazaları:</strong> Yüksek hızda düşmeler</li>
                <li>• <strong>Spor yaralanmaları:</strong> Kontakt sporlar, omuz travması</li>
                <li>• <strong>Doğum travması:</strong> Zor doğum, omuz distozisi (Erb/Klumpke palsisi)</li>
                <li>• <strong>Penetran yaralanmalar:</strong> Kesici/delici alet, ateşli silah</li>
                <li>• <strong>İatrojenik:</strong> Cerrahi komplikasyonu, enjeksiyon hasarı</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Non-Travmatik Nedenler:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Radyasyon hasarı (kanser tedavisi sonrası)</li>
                <li>• Tümörler (nörofibrom, schwannom)</li>
                <li>• İnflamatuar nöropati (Parsonage-Turner sendromu)</li>
                <li>• Torasik outlet sendromu</li>
                <li>• Doğumsal pleksus anomalileri</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Yaralanma Tipleri (Seddon ve Sunderland Sınıflandırması)</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Sinir hasarının şiddeti, prognoz ve tedavi planını belirler.
          </p>

          <div className="space-y-6 mb-8">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-lg mb-3">1. Nöropraksi (Seddon Sınıf I / Sunderland Sınıf I)</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Hasar:</strong> Sadece miyelin kılıf hasarı, akson intakt</li>
                <li>• <strong>Belirtiler:</strong> Geçici duyu kaybı ve güçsüzlük</li>
                <li>• <strong>Prognoz:</strong> Mükemmel, 6-12 haftada tam iyileşme</li>
                <li>• <strong>Örnek:</strong> Hafif germe yaralanmaları, "kolun uyuşması"</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-semibold text-lg mb-3">2. Aksonotmezis (Seddon Sınıf II / Sunderland Sınıf II-IV)</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Hasar:</strong> Akson kesilmiş, endonörium intakt veya hasarlı</li>
                <li>• <strong>Belirtiler:</strong> Tam motor ve duyu kaybı</li>
                <li>• <strong>Prognoz:</strong> İyi-orta, Wallerian degenerasyon + yeniden büyüme (1 mm/gün)</li>
                <li>• <strong>İyileşme:</strong> 3-12 ay, mesafeye bağlı</li>
                <li>• <strong>Örnek:</strong> Orta şiddette ezilme, ciddi germe</li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h4 className="font-semibold text-lg mb-3">3. Nörotmezis (Seddon Sınıf III / Sunderland Sınıf V)</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Hasar:</strong> Tam sinir kesilmesi (endonörium, perinörium, epinörium)</li>
                <li>• <strong>Belirtiler:</strong> Tam motor, duyu ve otonom fonksiyon kaybı</li>
                <li>• <strong>Prognoz:</strong> Kötü, cerrahi gerekir (sinir tamiri/greft)</li>
                <li>• <strong>Örnek:</strong> Kesici yaralanma, avulsiyon, ciddi travma</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-lg mb-3">4. Avulsiyon (Kök Ayrılması)</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Hasar:</strong> Sinir kökünün omurilikte ayrılması</li>
                <li>• <strong>Prognoz:</strong> En kötü, spontan iyileşme yok</li>
                <li>• <strong>Tedavi:</strong> Sinir transferi, tendon transferi, fonksiyonel rekonstrüksiyon</li>
                <li>• <strong>Örnek:</strong> Yüksek enerjili travma, motorsiklet kazaları</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Belirtiler ve Klinik Bulgular</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Pleksus yaralanmalarının belirtileri, hasar seviyesi ve şiddetine göre değişir.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Üst Pleksus Yaralanması (Erb Palsisi - C5-C6):</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Omuz abduksiyonu kaybı</li>
                <li>• Dirsek fleksiyonu zayıflığı</li>
                <li>• Ön kol supinasyon kaybı</li>
                <li>• "Waiter's tip" pozisyonu (kol yanında, iç rotasyon, pronasyon)</li>
                <li>• Deltoid, biseps, brachioradialis zayıflığı</li>
              </ul>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Alt Pleksus Yaralanması (Klumpke Palsisi - C8-T1):</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• El intrensek kaslarında güçsüzlük</li>
                <li>• El bilek ve parmak fleksörlerinde zayıflık</li>
                <li>• "Pençe eli" deformitesi</li>
                <li>• Ulnar sinir dağılımında duyu kaybı</li>
                <li>• Horner sendromu (miozis, pitozis, anhidrozis) - T1 avulsiyonu</li>
              </ul>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
            <h4 className="font-semibold text-lg mb-3">Tam Pleksus Yaralanması (C5-T1):</h4>
            <ul className="space-y-2">
              <li>• Kol tamamen felçli ("flail arm")</li>
              <li>• Motor fonksiyon tam kayıp</li>
              <li>• Duyu kaybı (tüm kol)</li>
              <li>• Kronik ağrı (nöropatik)</li>
              <li>• Otonom disfonksiyon</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Tanı Yöntemleri</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Erken ve doğru tanı, tedavi başarısı için kritiktir. Klinik muayene ve elektrofizyolojik 
            testler temel tanı araçlarıdır.
          </p>

          <div className="space-y-6 mb-8">
            <div className="bg-[#E6FAF8] p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">1. Klinik Muayene:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Anamnez:</strong> Travma mekanizması, semptom başlangıcı</li>
                <li>• <strong>Motor muayene:</strong> Kas gücü değerlendirmesi (MRC skalası 0-5)</li>
                <li>• <strong>Duyu muayenesi:</strong> Dermatom haritası</li>
                <li>• <strong>Refleks testi:</strong> Derin tendon refleksleri</li>
                <li>• <strong>Özel testler:</strong> Horner sendromu, Tinel işareti</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">2. Elektrofizyolojik Testler (EMG/NCV):</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Elektromiyografi (EMG):</strong> Kas denervasyon-reinervasyon paternleri</li>
                <li>• <strong>Sinir iletim çalışması (NCV):</strong> İletim bloğu, amplitüd, latans</li>
                <li>• <strong>Zamanla:</strong> İlk test 3-4 hafta sonra (Wallerian degenerasyon tamamlanınca)</li>
                <li>• <strong>Takip:</strong> 3-6 ay aralıklarla tekrar (iyileşme takibi)</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">3. Görüntüleme:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>MRI:</strong> Psödomenenjosil (avulsiyon işareti), tümör, hematom</li>
                <li>• <strong>CT Miyelografi:</strong> Kök avulsiyonunu gösterir (gold standard)</li>
                <li>• <strong>Ultrasonografi:</strong> Yüzeyel sinir sürekliliği değerlendirmesi</li>
                <li>• <strong>X-ray:</strong> İlişkili kırıklar, omurga yaralanması</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Tedavi Seçenekleri</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Tedavi yaklaşımı yaralanma tipine, şiddetine ve zamanına göre belirlenir. Konservatif 
            veya cerrahi tedavi seçenekleri mevcuttur.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Konservatif Tedavi</h3>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h4 className="font-semibold text-lg mb-3">Nöropraksi ve Hafif Aksonotmezis İçin:</h4>
            <ul className="space-y-2">
              <li>• <strong>Fizik tedavi:</strong> Pasif ROM egzersizleri, kontraktür önleme</li>
              <li>• <strong>Ağrı yönetimi:</strong> NSAİİ, nöropatik ağrı ilaçları (gabapentin, pregabalin)</li>
              <li>• <strong>Ortezler:</strong> Eklem pozisyonu koruma</li>
              <li>• <strong>Elektrostimülasyon:</strong> Kas atrofisi önleme</li>
              <li>• <strong>Takip:</strong> 3-6 ay klinik + EMG ile izlem</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Cerrahi Tedavi</h3>

          <div className="space-y-6 mb-8">
            <div className="bg-[#E6FAF8] p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">1. Sinir Tamiri:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Primer tamir:</strong> Keskin kesiler (ilk 72 saat)</li>
                <li>• <strong>Sekonder tamir:</strong> Kontamine yaralanmalar (2-3 hafta sonra)</li>
                <li>• <strong>Teknik:</strong> Epinöral veya fasikular sütür</li>
              </ul>
            </div>

            <div className="bg-[#E6FAF8] p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">2. Sinir Greftleme:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Endikasyon:</strong> Sinir uçları gerilim altında birleşemiyorsa</li>
                <li>• <strong>Greft kaynağı:</strong> Sural sinir (bacak), medial antebrachial cutaneous sinir</li>
                <li>• <strong>Teknik:</strong> Kablo greft (cable graft)</li>
              </ul>
            </div>

            <div className="bg-[#E6FAF8] p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">3. Sinir Transferi (Nörotizasyon):</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Endikasyon:</strong> Proksimal yaralanmalar, avulsiyon</li>
                <li>• <strong>Konsept:</strong> İşlevsel sinirin bir dalını hedef sinire transfer etme</li>
                <li>• <strong>Örnekler:</strong> Oberlin prosedürü (ulnar → muskulokutanöz), Leechavengvongs (median → muskulokutanöz)</li>
                <li>• <strong>Avantaj:</strong> Kısa greft mesafesi, hızlı reinervasyon</li>
              </ul>
            </div>

            <div className="bg-[#E6FAF8] p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">4. Tendon Transferi:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Endikasyon:</strong> Kalıcı paralizi, sinir tamiri başarısız</li>
                <li>• <strong>Konsept:</strong> İşlevsel kasın tendonunu felçli kasın işlevine yönlendirme</li>
                <li>• <strong>Örnekler:</strong> Latissimus dorsi transferi (omuz eksternal rotasyon), Steindler fleksoplasti (dirsek fleksiyonu)</li>
              </ul>
            </div>

            <div className="bg-[#E6FAF8] p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">5. Serbest Fonksiyonel Kas Transferi:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Endikasyon:</strong> Ciddi paralizi, transfer edilecek lokal kas yok</li>
                <li>• <strong>Teknik:</strong> Mikrocerrahi ile gracilis veya latissimus dorsi transferi</li>
                <li>• <strong>Hedef:</strong> Dirsek fleksiyonu veya parmak fleksiyonu</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
            <h4 className="font-semibold text-lg mb-3">Cerrahi Zamanlama:</h4>
            <ul className="space-y-2">
              <li>• <strong>Acil (ilk 72 saat):</strong> Açık yaralanmalar, vasküler yaralanma</li>
              <li>• <strong>Erken (3-6 ay):</strong> 3 ayda klinik/EMG iyileşme yoksa cerrahi ekspektasyon</li>
              <li>• <strong>Geç (6-12 ay):</strong> Rekonstrüktif prosedürler (tendon transferi)</li>
              <li>• <strong>Çok geç ({'>'}12-18 ay):</strong> Artrodez, amputasyon gibi kurtarma prosedürleri</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Prognoz ve İyileşme</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Prognoz, yaralanma tipi, seviyesi ve tedavi zamanlamasına bağlıdır. Sinir rejenerasyonu 
            yavaş bir süreçtir (1 mm/gün ≈ 1 inç/ay).
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h4 className="font-semibold text-lg mb-3">Prognostik Faktörler:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>İyi prognoz:</strong> Nöropraksi, erken cerrahi, genç yaş, distal yaralanma</li>
              <li>• <strong>Kötü prognoz:</strong> Avulsiyon, gecikmiş cerrahi, ileri yaş, proksimal yaralanma</li>
              <li>• <strong>Yaş faktörü:</strong> Çocuklarda plastisitet yüksek, yetişkinlerde düşük</li>
              <li>• <strong>Seviye:</strong> C5-C6 (Erb) daha iyi, C8-T1 (Klumpke) daha kötü, avulsiyon en kötü</li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h4 className="font-semibold text-lg mb-3">Beklenen İyileşme Süreleri:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Nöropraksi:</strong> 6-12 hafta, tam iyileşme</li>
              <li>• <strong>Aksonotmezis:</strong> 3-18 ay (mesafeye bağlı), fonksiyonel iyileşme %60-80</li>
              <li>• <strong>Nörotmezis (tamir edilmiş):</strong> 12-24 ay, fonksiyonel iyileşme %40-60</li>
              <li>• <strong>Avulsiyon (sinir/tendon transferi):</strong> 18-36 ay, sınırlı fonksiyon kazanımı</li>
            </ul>
          </div>
        </section>

        {/* References */}
        <section className="mb-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Kaynaklar</h2>
          <ol className="space-y-2 text-sm text-gray-700">
            <li>1. Midha R. "Epidemiology of brachial plexus injuries in a multitrauma population." Neurosurgery. 1997. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=brachial+plexus+injury+epidemiology" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a></li>
            <li>2. Moran SL, et al. "Management of adult traumatic brachial plexus injuries." J Am Acad Orthop Surg. 2005. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=brachial+plexus+injury+management" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a></li>
            <li>3. Seddon HJ. "Three types of nerve injury." Brain. 1943. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=nerve+injury+classification+seddon" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a></li>
            <li>4. Sunderland S. "A classification of peripheral nerve injuries producing loss of function." Brain. 1951. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=sunderland+nerve+injury+classification" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a></li>
            <li>5. Narakas AO. "The treatment of brachial plexus injuries." Int Orthop. 1985. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=brachial+plexus+treatment+review" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a></li>
            <li>6. Bertelli JA, Ghizoni MF. "Nerve transfers for elbow and finger extension reconstruction in midcervical spinal cord injuries." J Neurosurg. 2015. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=nerve+transfer+brachial+plexus" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a></li>
            <li>7. Chuang DC, et al. "Functioning free muscle transplantation for brachial plexus injury." Clin Orthop Relat Res. 1995. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=free+muscle+transfer+brachial+plexus" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a></li>
            <li>8. Tung TH, Mackinnon SE. "Nerve transfers: indications, techniques, and outcomes." J Hand Surg Am. 2010. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=nerve+transfer+techniques+outcomes" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a></li>
            <li>9. Songcharoen P, et al. "Brachial plexus injury in Thailand: a report of 520 cases." Microsurgery. 1995. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=brachial+plexus+injury+outcomes" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a></li>
            <li>10. Yang LJ, et al. "Avulsed spinal nerve roots: histologic assessment after failed nerve transfers." Neurosurgery. 2008. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=brachial+plexus+avulsion+histology" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a></li>
          </ol>
        </section>
          {/* Ameliyatsız Tedavi Internal Link */}
          <div className="bg-[#E6FAF8] border-l-4 border-blue-700 p-6 my-8 rounded-r-lg">
            <p className="text-gray-700">
              <strong>İlgili İçerik:</strong> Ameliyatsız tedavi seçenekleri hakkında daha fazla bilgi için{' '}
              <a href="/ameliyatsiz-cozumler" className="text-[#01A899] hover:text-blue-900 font-semibold hover:underline">
                ameliyatsız çözümler sayfamızı
              </a>{' '}
              ziyaret edebilirsiniz.
            </p>
          </div>


        {/* CTA Section */}
        <section className="mt-12 p-8 bg-gradient-to-r from-[#01CAB8] to-[#01A899] rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">Pleksus Yaralanması Değerlendirmesi</h2>
          <p className="text-lg mb-6 text-blue-50">
            Sinir yaralanması şüphesi veya travma sonrası güçsüzlük için uzman muayenesi randevusu 
            alabilirsiniz.
          </p>
          <Link
            href="/randevu"
            className="inline-block bg-white text-[#01CAB8] px-8 py-3 rounded-lg font-semibold hover:bg-[#E6FAF8] transition-colors"
          >
            Randevu Al
          </Link>
        </section>
      </article>
    </>
  );
}
