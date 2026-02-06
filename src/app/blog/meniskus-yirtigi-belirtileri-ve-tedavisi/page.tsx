import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

// ========================================
// 1. METADATA & SEO
// ========================================
export const metadata: Metadata = {
  title: 'Menisküs Yırtığı Belirtileri ve Tedavisi | Dr. Özgür Oktay Nar',
  description: 'Menisküs yırtığı belirtileri, tanı yöntemleri ve konservatif/cerrahi tedavi seçenekleri hakkında detaylı bilgi. Ortopedi uzmanı Dr. Özgür Oktay Nar\'dan.',
  keywords: 'menisküs yırtığı, menisküs ameliyatı, diz ağrısı, diz kilitlenmesi, menisküs tedavisi, artroskopi, ortopedi',
  openGraph: {
    title: 'Menisküs Yırtığı Belirtileri ve Tedavisi',
    description: 'Menisküs yırtığı tanı ve tedavi seçenekleri hakkında uzman görüşü',
    type: 'article',
    locale: 'tr_TR',
    siteName: 'Dr. Özgür Oktay Nar - Ortopedi Uzmanı',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Menisküs Yırtığı Belirtileri ve Tedavisi',
    description: 'Menisküs yırtığı tanı ve tedavi rehberi',
  }
};

// ========================================
// 2. STRUCTURED DATA (Schema.org)
// ========================================
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  headline: 'Menisküs Yırtığı Belirtileri ve Tedavisi',
  description: 'Menisküs yırtığı belirtileri, tanı ve tedavi yöntemleri hakkında detaylı bilgi',
  author: {
    '@type': 'Physician',
    name: 'Dr. Özgür Oktay Nar',
    medicalSpecialty: 'Ortopedi ve Travmatoloji'
  },
  datePublished: '2026-02-06',
  dateModified: '2026-02-06',
  about: {
    '@type': 'MedicalCondition',
    name: 'Menisküs Yırtığı',
    alternateName: 'Meniscus Tear'
  }
};

// ========================================
// 3. PAGE COMPONENT
// ========================================
export default function MeniskusYirtigiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Menisküs Yırtığı Belirtileri ve Tedavisi
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Diz ekleminde ağrı, şişlik ve hareket kısıtlılığına neden olan menisküs yırtıklarının belirtileri, tanı ve tedavi seçenekleri
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span>👨‍⚕️ Dr. Özgür Oktay Nar</span>
            <span>📅 6 Şubat 2026</span>
            <span>⏱️ 8 dakika okuma</span>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        
        {/* Giriş */}
        <section className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            <strong>Menisküs</strong>, diz eklemi içinde bulunan ve femur (uyluk kemiği) ile tibia (kaval kemiği) arasında yer alan C-şeklindeki kıkırdak yapılardır. Her dizde medial (iç) ve lateral (dış) olmak üzere iki menisküs bulunur. Menisküsler, eklem yükünü dağıtma, şok emme ve stabilite sağlama görevlerini üstlenir.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Menisküs yırtıkları, sporcularda sık görülen travmatik yaralanmalar olabileceği gibi, orta yaş ve üzeri bireylerde dejeneratif nedenlerle de ortaya çıkabilir. Belirtilerin şiddeti ve tedavi yaklaşımı, yırtığın lokalizasyonu, tipi ve hastanın aktivite düzeyine göre değişir.
          </p>
        </section>

        {/* Belirtiler */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Menisküs Yırtığı Belirtileri</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Akut (Travmatik) Belirtiler</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ <strong>Ani şiddetli diz ağrısı:</strong> Yaralanma anında "çat" sesi duyulabilir</li>
              <li>✓ <strong>Şişlik:</strong> İlk 24-48 saat içinde diz eklemi şişer</li>
              <li>✓ <strong>Hareket kısıtlılığı:</strong> Dizin tam bükülememesi veya açılamaması</li>
              <li>✓ <strong>Kilitlenme hissi:</strong> Diz belli bir pozisyonda takılıp kalabilir</li>
            </ul>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Kronik (Dejeneratif) Belirtiler</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ <strong>Süregelen ağrı:</strong> Özellikle çömelme, merdiven inme sırasında</li>
              <li>✓ <strong>Eklem çıtırtısı:</strong> Hareket sırasında ses veya hissedilebilir patlama</li>
              <li>✓ <strong>Zayıflık ve dengesizlik:</strong> Dizin güçsüz hissetmesi</li>
              <li>✓ <strong>Periyodik şişlik:</strong> Aktivite sonrası artan ödem</li>
            </ul>
          </div>
        </section>

        {/* Tanı */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tanı Yöntemleri</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fizik Muayene</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>McMurray testi:</strong> Rotasyon sırasında klik sesi</li>
                <li>• <strong>Apley testi:</strong> Kompresyon ve distraksiyon</li>
                <li>• <strong>Eklem çizgisi hassasiyeti:</strong> Palpasyon bulgusu</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Görüntüleme</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>MR (Manyetik Rezonans):</strong> Altın standart, %90+ hassasiyet</li>
                <li>• <strong>Röntgen:</strong> Eşlik eden kemik patolojilerini gösterir</li>
                <li>• <strong>Ultrasonografi:</strong> Sınırlı kullanım</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tedavi */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tedavi Seçenekleri</h2>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Konservatif (Ameliyatsız) Tedavi</h3>
            <p className="text-gray-700 mb-4">
              Küçük, stabil ve periferik yırtıklarda veya düşük aktivite seviyesine sahip hastalarda öncelikle konservatif tedavi denenebilir:
            </p>
            <ul className="space-y-2 text-gray-700 ml-6">
              <li>• <strong>İstirahat ve aktivite modifikasyonu:</strong> Ağrıyı artıran hareketlerden kaçınma</li>
              <li>• <strong>Buz uygulaması:</strong> İlk 48-72 saat, günde 3-4 kez 15-20 dakika</li>
              <li>• <strong>NSAİİ ilaçlar:</strong> Ağrı ve iltihabı azaltmak için</li>
              <li>• <strong>Fizik tedavi:</strong> Kuadriseps ve hamstring güçlendirme</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cerrahi Tedavi</h3>
            <p className="text-gray-700 mb-4">
              Aşağıdaki durumlarda cerrahi müdahale gerekebilir:
            </p>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">Cerrahi Endikasyonları</h4>
              <ul className="space-y-1 text-gray-700">
                <li>✓ Mekanik kilitlenme (bucket-handle yırtık)</li>
                <li>✓ Konservatif tedaviye yanıtsızlık (6-12 hafta)</li>
                <li>✓ Genç, aktif hastalar</li>
                <li>✓ ACL rekonstrüksiyonu ile birlikte tamir</li>
              </ul>
            </div>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">Artroskopik Cerrahi Seçenekleri</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2">🔧 Menisküs Tamiri</h5>
                <p className="text-sm text-gray-700">
                  Periferik (red-red veya red-white) zonlardaki yırtıklar için tercih edilir. Dikişlerle onarım yapılır. İyileşme 3-6 ay.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2">✂️ Parsiyel Menisektomi</h5>
                <p className="text-sm text-gray-700">
                  İç (white-white) zonda kan akımı olmayan yırtıklar için. Yırtık parça çıkarılır. İyileşme 4-6 hafta.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* İyileşme Süreci */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">İyileşme ve Rehabilitasyon</h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Tamir Sonrası Rehabilitasyon (3-6 ay)</h3>
            <div className="space-y-3 text-gray-700">
              <div>
                <strong>0-6 hafta:</strong> Kısıtlı ağırlık verme, ROM (hareket açıklığı) egzersizleri
              </div>
              <div>
                <strong>6-12 hafta:</strong> Tam ağırlık verme, kas güçlendirme
              </div>
              <div>
                <strong>3-6 ay:</strong> Spora dönüş programı, propriyoseptif eğitim
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Menisektomi Sonrası Rehabilitasyon (4-6 hafta)</h3>
            <div className="space-y-3 text-gray-700">
              <div>
                <strong>0-2 hafta:</strong> Erken mobilizasyon, tolere edilebilir ağırlık verme
              </div>
              <div>
                <strong>2-4 hafta:</strong> Tam ROM, kas kuvvetlendirme
              </div>
              <div>
                <strong>4-6 hafta:</strong> Spora dönüş değerlendirmesi
              </div>
            </div>
          </div>
        </section>

        {/* Önleme */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Korunma Önerileri</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border-2 border-blue-200 rounded-lg p-5 text-center">
              <div className="text-3xl mb-2">💪</div>
              <h3 className="font-semibold text-gray-900 mb-2">Kas Güçlendirme</h3>
              <p className="text-sm text-gray-700">Kuadriseps ve hamstring kaslarını düzenli çalıştırın</p>
            </div>

            <div className="bg-white border-2 border-green-200 rounded-lg p-5 text-center">
              <div className="text-3xl mb-2">🏃</div>
              <h3 className="font-semibold text-gray-900 mb-2">Doğru Teknik</h3>
              <p className="text-sm text-gray-700">Spor aktivitelerinde uygun teknik ve ekipman kullanın</p>
            </div>

            <div className="bg-white border-2 border-purple-200 rounded-lg p-5 text-center">
              <div className="text-3xl mb-2">⚖️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Ideal Kilo</h3>
              <p className="text-sm text-gray-700">Eklem üzerindeki yükü azaltmak için sağlıklı kiloda kalın</p>
            </div>
          </div>
        </section>

        {/* Referanslar */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Bilimsel Referanslar</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ol className="space-y-3 text-sm text-gray-700">
              <li>
                <strong>1.</strong> Mordecai SC, et al. "Treatment of meniscal tears: An evidence based approach" World J Orthop. 2014;5(3):233-241. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=meniscus+tear+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>2.</strong> Beaufils P, Verdonk R. "The Meniscus" Springer, 2010. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=meniscus+anatomy+function" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>3.</strong> Englund M, et al. "Incidental meniscal findings on knee MRI in middle-aged and elderly persons" N Engl J Med. 2008;359(11):1108-1115. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=meniscus+MRI+incidental+findings" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>4.</strong> Katz JN, et al. "Surgery versus physical therapy for a meniscal tear and osteoarthritis" N Engl J Med. 2013;368(18):1675-1684. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=meniscus+surgery+vs+physical+therapy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>5.</strong> Paxton ES, et al. "Meniscal repair versus partial meniscectomy: a systematic review comparing reoperation rates and clinical outcomes" Arthroscopy. 2011;27(9):1275-1288. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=meniscal+repair+vs+meniscectomy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>6.</strong> Rath E, Richmond JC. "The menisci: basic science and advances in treatment" Br J Sports Med. 2000;34(4):252-257. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=meniscus+basic+science" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>7.</strong> Lohmander LS, et al. "The long-term consequence of anterior cruciate ligament and meniscus injuries" Am J Sports Med. 2007;35(10):1756-1769. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=meniscus+long+term+outcomes" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>8.</strong> Makris EA, et al. "The knee meniscus: structure-function, pathophysiology, current repair techniques, and prospects for regeneration" Biomaterials. 2011;32(30):7411-7431. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=meniscus+regeneration+biomaterials" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>9.</strong> Herrlin S, et al. "Arthroscopic or conservative treatment of degenerative medial meniscal tears: a prospective randomised trial" Knee Surg Sports Traumatol Arthrosc. 2007;15(4):393-401. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=degenerative+meniscus+arthroscopy+conservative" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>10.</strong> Petty CA, Lubowitz JH. "Does arthroscopic partial meniscectomy result in knee osteoarthritis?" Arthroscopy. 2011;27(3):431-444. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=meniscectomy+osteoarthritis+risk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
            </ol>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Diz Ağrınız mı Var?</h2>
          <p className="text-xl mb-6 opacity-90">
            Menisküs yırtığı şüpheniz varsa, erken tanı ve doğru tedavi için uzman değerlendirmesi önemlidir.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/iletisim" 
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition"
            >
              Randevu Al
            </Link>
            <Link 
              href="/hizmetler" 
              className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition"
            >
              Hizmetlerimiz
            </Link>
          </div>
        </section>

      </article>
    </>
  );
}
