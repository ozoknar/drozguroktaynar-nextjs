import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

// ========================================
// 1. METADATA & SEO
// ========================================
export const metadata: Metadata = {
  title: 'Diz Kapağı Çıkığı (Patella Dislokasyonu) Belirtileri ve Tedavisi | Dr. Özgür Oktay Nar',
  description: 'Diz kapağı çıkığı (patella dislokasyonu) belirtileri, tanı, konservatif ve cerrahi tedavi seçenekleri. Tekrarlayan dislokasyonlarda ne yapılmalı?',
  keywords: 'diz kapağı çıkığı, patella dislokasyonu, diz kapağı kayması, MPFL, ortopedi, diz yaralanması',
  openGraph: {
    title: 'Diz Kapağı Çıkığı Belirtileri ve Tedavisi',
    description: 'Patella dislokasyonu tanı ve tedavi rehberi',
    type: 'article',
    locale: 'tr_TR',
    siteName: 'Dr. Özgür Oktay Nar - Ortopedi Uzmanı',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diz Kapağı Çıkığı Belirtileri ve Tedavisi',
    description: 'Diz kapağı çıkığı tanı ve tedavi rehberi',
  }
};

// ========================================
// 2. STRUCTURED DATA (Schema.org)
// ========================================
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  headline: 'Diz Kapağı Çıkığı (Patella Dislokasyonu) Belirtileri ve Tedavisi',
  description: 'Diz kapağı çıkığı belirtileri ve tedavi yaklaşımları',
  author: {
    '@type': 'Physician',
    name: 'Dr. Özgür Oktay Nar',
    medicalSpecialty: 'Ortopedi ve Travmatoloji'
  },
  datePublished: '2026-02-06',
  dateModified: '2026-02-06',
  about: {
    '@type': 'MedicalCondition',
    name: 'Patella Dislokasyonu',
    alternateName: 'Patellar Dislocation'
  }
};

// ========================================
// 3. PAGE COMPONENT
// ========================================
export default function DizKapagiCikigiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-cyan-50 to-blue-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Diz Kapağı Çıkığı: Belirtiler ve Tedavi
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Patella dislokasyonu (diz kapağı çıkığı) belirtileri, risk faktörleri, acil müdahale ve uzun dönem tedavi seçenekleri
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span>👨‍⚕️ Dr. Özgür Oktay Nar</span>
            <span>📅 6 Şubat 2026</span>
            <span>⏱️ 9 dakika okuma</span>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        
        {/* Giriş */}
        <section className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            <strong>Diz kapağı çıkığı (patella dislokasyonu)</strong>, diz kapağının (patella) normal olarak bulunduğu femur (uyluk kemiği) oluğundan çıkması ve genellikle dışa kayması durumudur. Bu yaralanma, genç ve aktif bireylerde, özellikle pivot (ani dönme) hareketleri sırasında sık görülür.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            İlk dislokasyon travmatik bir olay olabilir, ancak tekrarlayan dislokasyonlar genellikle anatomik risk faktörleri veya bağ hasarları ile ilişkilidir. Doğru tanı ve tedavi, kronik instabilite ve eklem hasarını önlemek için kritik öneme sahiptir.
          </p>
        </section>

        {/* Anatomi */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Anatomik Yapı</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Patellayı Stabilize Eden Yapılar</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>MPFL (Medial Patellofemoral Ligament):</strong> En önemli medial stabilizatör, diz kapağının dışa kaymasını önler
              </li>
              <li>
                <strong>Kuadriseps Kası:</strong> Özellikle VMO (vastus medialis obliquus) medial stabiliteye katkıda bulunur
              </li>
              <li>
                <strong>Trochlear Groove:</strong> Femur'daki oluk, diz kapağının hareketini yönlendirir
              </li>
              <li>
                <strong>Patellofemoral Bağlar:</strong> Lateral ve medial retinakulum destekleyici yapılardır
              </li>
            </ul>
          </div>
        </section>

        {/* Risk Faktörleri */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Risk Faktörleri</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Anatomik Risk Faktörleri</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Trochlear displazi:</strong> Femur oluğunun yüzeyselleşmesi</li>
                <li>• <strong>Patella alta/baja:</strong> Diz kapağının anormal yüksekliği</li>
                <li>• <strong>Artan Q açısı:</strong> Diz kapağının lateral çekilme eğilimi</li>
                <li>• <strong>Genu valgum:</strong> X-bacak deformitesi</li>
                <li>• <strong>Femoral anteversiyon:</strong> Kalça rotasyon bozukluğu</li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Kazanılmış Risk Faktörleri</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>VMO zayıflığı:</strong> Kuadriseps kas dengesizliği</li>
                <li>• <strong>Hamstring sıkılığı:</strong> Esneklik kaybı</li>
                <li>• <strong>Geçirilmiş dislokasyon:</strong> %15-44 tekrarlama riski</li>
                <li>• <strong>Aşırı hareketlilik:</strong> Eklem laksitesi (hipermobilite)</li>
                <li>• <strong>Travma:</strong> Direk darbe veya pivot yaralanmaları</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Belirtiler */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Belirtiler ve Tanı</h2>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Akut Dislokasyon Belirtileri</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ <strong>Ani şiddetli ağrı:</strong> Özellikle diz ön kısmında</li>
              <li>✓ <strong>Görünür deformite:</strong> Diz kapağı dış tarafa kaymış (genellikle spontan yerine oturur)</li>
              <li>✓ <strong>Hızlı şişlik:</strong> Hemarthrosis (eklem içi kanama)</li>
              <li>✓ <strong>Hareket kısıtlılığı:</strong> Dizi bükmek veya açmakta zorluk</li>
              <li>✓ <strong>"Diz kapağı dışarı çıktı" hissi:</strong> Hasta net tarif edebilir</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Kronik İnstabilite Belirtileri</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ <strong>"Giving way" (diz boşalması):</strong> Özellikle merdiven inerken veya yön değiştirirken</li>
              <li>✓ <strong>Patellanın kayma hissi:</strong> Subliksasyon (kısmi çıkık)</li>
              <li>✓ <strong>Ön diz ağrısı:</strong> Patellofemoral ağrı sendromu</li>
              <li>✓ <strong>Aktiviteden kaçınma:</strong> Sportif aktivitelere güven kaybı</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fizik Muayene</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Apprehension testi:</strong> Lateral itme ile hasta korkutma</li>
                <li>• <strong>J-sign:</strong> Ekstansiyonda lateral kayma</li>
                <li>• <strong>Patellar tilt testi:</strong> Medial/lateral hareketlilik</li>
                <li>• <strong>Q açısı ölçümü:</strong> ASIS-patella-tibial tüberkül hattı</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Görüntüleme</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Röntgen:</strong> Kırık ekartasyonu, patella yüksekliği (Insall-Salvati)</li>
                <li>• <strong>MR:</strong> MPFL yırtığı, kıkırdak hasarı, kemik kontüzyonu</li>
                <li>• <strong>BT:</strong> Trochlear displazi, TT-TG mesafesi ölçümü</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Acil Müdahale */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Acil Müdahale</h2>
          
          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Olay Yerinde Ne Yapılmalı?</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <strong className="text-gray-900">Hareketsizlik:</strong>
                  <p className="text-gray-700 text-sm">Dizi hareket ettirmeyin. Hasta rahat bir pozisyonda tutun.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <strong className="text-gray-900">Redüksiyon (dikkat!):</strong>
                  <p className="text-gray-700 text-sm">Çoğu durumda spontan yerine oturur. Zorla yerine sokmaya çalışmayın.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <strong className="text-gray-900">Buz uygulaması:</strong>
                  <p className="text-gray-700 text-sm">Şişliği azaltmak için soğuk kompres (15-20 dakika).</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <strong className="text-gray-900">Acil servise götürün:</strong>
                  <p className="text-gray-700 text-sm">Kırık ve diğer yaralanmaları ekarte etmek için değerlendirme şarttır.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tedavi */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tedavi Seçenekleri</h2>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">İlk Dislokasyon: Konservatif Tedavi</h3>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Tedavi Protokolü</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>0-2 hafta:</strong> İmmobilizasyon (kilitli brace veya alçı), RICE, ağrı kontrolü</li>
                <li><strong>2-6 hafta:</strong> Erken mobilizasyon, pasif ROM egzersizleri, VMO aktivasyonu</li>
                <li><strong>6-12 hafta:</strong> Progresif güçlendirme (kuadriseps, core), propriyoseptif eğitim</li>
                <li><strong>3-6 ay:</strong> Spora dönüş programı, fonksiyonel testler</li>
              </ul>
            </div>

            <p className="text-gray-700 text-sm italic">
              <strong>Not:</strong> İlk dislokasyonlarda konservatif tedavi başarı oranı %60-70'dir. Ancak gençlerde ({"<"}20 yaş) tekrarlama riski daha yüksektir.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Tekrarlayan Dislokasyon: Cerrahi Tedavi</h3>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-4">
              <h4 className="font-semibold text-gray-900 mb-3">Cerrahi Endikasyonları</h4>
              <ul className="space-y-1 text-gray-700">
                <li>✓ İkinci veya daha fazla dislokasyon</li>
                <li>✓ İlk dislokasyonda büyük osteokondralkırık</li>
                <li>✓ Belirgin anatomik anomaliler (trochlear displazi, patella alta)</li>
                <li>✓ Konservatif tedaviye yanıtsız kronik instabilite</li>
              </ul>
            </div>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Cerrahi Yöntemler</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border-2 border-blue-200 rounded-lg p-5">
                <h5 className="font-semibold text-gray-900 mb-2">🔧 MPFL Rekonstrüksiyonu</h5>
                <p className="text-sm text-gray-700 mb-2">
                  Altın standart. Yırtık MPFL, otogref (hamstring) veya allogref ile yeniden yapılır.
                </p>
                <p className="text-xs text-gray-600">Başarı oranı: %85-95</p>
              </div>

              <div className="bg-white border-2 border-green-200 rounded-lg p-5">
                <h5 className="font-semibold text-gray-900 mb-2">🔄 Tibial Tüberkül Osteotomisi</h5>
                <p className="text-sm text-gray-700 mb-2">
                  TT-TG mesafesi {">"} 20mm ise, tibial tüberkül medialle kaydırılır.
                </p>
                <p className="text-xs text-gray-600">Ağır vakalarda ek prosedür</p>
              </div>

              <div className="bg-white border-2 border-purple-200 rounded-lg p-5">
                <h5 className="font-semibold text-gray-900 mb-2">🛠️ Trochleoplasti</h5>
                <p className="text-sm text-gray-700 mb-2">
                  Ciddi trochlear displazide femur oluğunun derinleştirilmesi.
                </p>
                <p className="text-xs text-gray-600">Nadir uygulanır, komplikasyon riski</p>
              </div>

              <div className="bg-white border-2 border-orange-200 rounded-lg p-5">
                <h5 className="font-semibold text-gray-900 mb-2">✂️ Lateral Release</h5>
                <p className="text-sm text-gray-700 mb-2">
                  Lateral retinakulumun gevşetilmesi (artık tek başına önerilmiyor).
                </p>
                <p className="text-xs text-gray-600">Ek prosedürle kombine edilebilir</p>
              </div>
            </div>
          </div>
        </section>

        {/* İyileşme */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Cerrahi Sonrası İyileşme</h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
            <div className="space-y-4">
              <div>
                <strong className="text-gray-900">0-2 hafta:</strong>
                <p className="text-gray-700 text-sm">Kilitli brace, koltuk değneği, yara bakımı, pasif ROM</p>
              </div>
              <div>
                <strong className="text-gray-900">2-6 hafta:</strong>
                <p className="text-gray-700 text-sm">Aktif ROM, kısmi ağırlık verme, VMO izometrik egzersizler</p>
              </div>
              <div>
                <strong className="text-gray-900">6-12 hafta:</strong>
                <p className="text-gray-700 text-sm">Tam ağırlık verme, kuadriseps güçlendirme, statik bisiklet</p>
              </div>
              <div>
                <strong className="text-gray-900">3-6 ay:</strong>
                <p className="text-gray-700 text-sm">İleri seviye güçlendirme, pliometrik egzersizler</p>
              </div>
              <div>
                <strong className="text-gray-900">6-9 ay:</strong>
                <p className="text-gray-700 text-sm">Spora dönüş (fonksiyonel testler geçilirse)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Komplikasyonlar */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Olası Komplikasyonlar</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Kıkırdak Hasarı</h3>
              <p className="text-sm text-gray-700">Tekrarlayan dislokasyonlar patellofemoral osteoartrit riskini artırır.</p>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Kronik Ağrı</h3>
              <p className="text-sm text-gray-700">Patellar instabilite veya cerrahi sonrası ön diz ağrısı devam edebilir.</p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Cerrahi Başarısızlık</h3>
              <p className="text-sm text-gray-700">%5-15 olguda re-dislokasyon veya instabilite devam eder.</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Nörovasküler Yaralanma</h3>
              <p className="text-sm text-gray-700">Nadir, ancak cerrahi sırasında sinir veya damar hasarı riski vardır.</p>
            </div>
          </div>
        </section>

        {/* Referanslar */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Bilimsel Referanslar</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ol className="space-y-3 text-sm text-gray-700">
              <li>
                <strong>1.</strong> Fithian DC, et al. "Epidemiology and natural history of acute patellar dislocation" Am J Sports Med. 2004;32(5):1114-1121. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=patellar+dislocation+epidemiology" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>2.</strong> Nomura E, Inoue M. "Hybrid medial patellofemoral ligament reconstruction using the semitendinosus tendon for recurrent patellar dislocation" Arthroscopy. 2006;22(7):787-793. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=MPFL+reconstruction+semitendinosus" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>3.</strong> Smith TO, et al. "Surgical versus non-surgical interventions for treating patellar dislocation" Cochrane Database Syst Rev. 2015;2:CD008106. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=patellar+dislocation+surgical+vs+conservative+cochrane" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>4.</strong> Dejour D, et al. "Factors of patellar instability: an anatomic radiographic study" Knee Surg Sports Traumatol Arthrosc. 1994;2(1):19-26. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=patellar+instability+anatomic+factors+Dejour" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>5.</strong> Schöttle PB, et al. "The tibial tuberosity-trochlear groove distance; a comparative study between CT and MRI scanning" Knee. 2006;13(1):26-31. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=TT-TG+distance+CT+MRI" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>6.</strong> Buckens CF, Saris DB. "Reconstruction of the medial patellofemoral ligament for treatment of patellofemoral instability: a systematic review" Am J Sports Med. 2010;38(1):181-188. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=MPFL+reconstruction+systematic+review" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>7.</strong> Hawkins RJ, et al. "Acute patellar dislocations. The natural history" Am J Sports Med. 1986;14(2):117-120. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=acute+patellar+dislocation+natural+history" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>8.</strong> Arendt EA, et al. "The natural history of the patellofemoral joint in asymptomatic adolescents with patellar instability" Am J Sports Med. 2018;46(5):1075-1080. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=patellofemoral+instability+adolescents+natural+history" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>9.</strong> Nelitz M, et al. "Analysis of failed surgery for patellar instability in children" J Pediatr Orthop. 2012;32(7):763-769. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=patellar+instability+failed+surgery+children" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>10.</strong> Sillanpää PJ, et al. "Recurrent patellar dislocation: results of operative treatment with medial soft-tissue realignment and femoral sulcus deepening" Knee Surg Sports Traumatol Arthrosc. 2008;16(2):124-131. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=recurrent+patellar+dislocation+trochleoplasty" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
            </ol>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Diz Kapağı Çıkığı mı Yaşadınız?</h2>
          <p className="text-xl mb-6 opacity-90">
            Tekrarlayan dislokasyonları önlemek için erken tanı ve doğru tedavi planı kritiktir. Uzman değerlendirmesi için randevu alın.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/iletisim" 
              className="bg-white text-cyan-600 px-8 py-3 rounded-full font-semibold hover:bg-cyan-50 transition"
            >
              Randevu Al
            </Link>
            <Link 
              href="/hizmetler" 
              className="bg-cyan-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-cyan-800 transition"
            >
              Tedavi Seçenekleri
            </Link>
          </div>
        </section>

      </article>
    </>
  );
}
