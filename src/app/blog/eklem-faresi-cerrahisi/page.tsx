import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Eklem Faresi Cerrahisi: Belirtileri, Tanı ve Artroskopik Tedavi',
  description: 'Eklem faresi nedir, belirtileri nelerdir, artroskopik cerrahi nasıl yapılır? Op. Dr. Özgür Oktay Nar\'dan eklem faresi tedavisi hakkında detaylı bilgi.',
  keywords: 'eklem faresi, eklem kemiği, eklem faresi ameliyatı, artroskopi, diz ağrısı, eklem kilitlenmesi',
  openGraph: {
    title: 'Eklem Faresi Cerrahisi: Belirtiler ve Artroskopik Tedavi | Op. Dr. Özgür Oktay Nar',
    description: 'Eklem faresinin belirtileri, tanısı ve minimal invaziv artroskopik tedavi yöntemleri.',
    type: 'article',
    locale: 'tr_TR',
    siteName: 'Op. Dr. Özgür Oktay Nar',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eklem Faresi Cerrahisi: Belirtiler ve Tedavi',
    description: 'Eklem faresi artroskopik cerrahisi hakkında kapsamlı rehber.',
  },
  alternates: {
    canonical: 'https://www.drozguroktaynar.com/blog/eklem-faresi-cerrahisi',
  },
};

export default function EklemFaresiCerrahisiPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: 'Eklem Faresi Cerrahisi: Belirtileri, Tanı ve Artroskopik Tedavi',
    description: 'Eklem faresi (loose body) hakkında kapsamlı bilgi: belirtiler, tanı yöntemleri ve artroskopik cerrahi tedavi.',
    datePublished: '2026-02-06',
    dateModified: '2026-02-06',
    author: {
      '@type': 'Person',
      name: 'Op. Dr. Özgür Oktay Nar',
      jobTitle: 'Ortopedi ve Travmatoloji Uzmanı',
    },
    reviewedBy: {
      '@type': 'Person',
      name: 'Op. Dr. Özgür Oktay Nar',
    },
    about: {
      '@type': 'MedicalCondition',
      name: 'Eklem Faresi',
      alternateName: 'Loose Body, İntraartiküler Serbest Cisim',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-white to-emerald-50 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold mb-4">
              Eklem Cerrahisi
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Eklem Faresi Cerrahisi: Belirtileri, Tanı ve Artroskopik Tedavi
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Eklem faresi, eklem içinde serbestçe hareket eden kemik veya kıkırdak parçalarıdır. Artroskopik cerrahi ile minimal invaziv şekilde tedavi edilir.
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
            <span>Op. Dr. Özgür Oktay Nar</span>
            <span>•</span>
            <time dateTime="2026-02-06">6 Şubat 2026</time>
            <span>•</span>
            <span>7 dakika okuma</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="container mx-auto px-4 max-w-4xl py-12">
        {/* Section 1: Giriş */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Eklem Faresi Nedir?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Eklem faresi</strong> (tıbbi adıyla <em>loose body</em> veya <em>corpus liberum</em>), eklem boşluğunda serbestçe hareket edebilen kemik, kıkırdak veya her ikisinden oluşan parçalardır. Bu parçalar eklem sıvısı içinde "fare gibi" hareket ettiği için bu adı almıştır.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Eklem fareleri, eklemin normal fonksiyonunu bozar, ani kilitlenmelere neden olabilir ve zamanla eklem kıkırdağında hasara yol açarak osteoartrit gelişimini hızlandırabilir. En sık dizde görülmekle birlikte dirsek, omuz, ayak bileği ve kalça eklemlerinde de ortaya çıkabilir.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">🔍 Terminoloji</h3>
            <ul className="text-gray-700 space-y-1">
              <li><strong>Loose Body:</strong> İngilizce karşılığı</li>
              <li><strong>Corpus Liberum:</strong> Latince tıbbi terimi</li>
              <li><strong>İntraartiküler Serbest Cisim:</strong> Türkçe akademik terimi</li>
              <li><strong>Eklem Faresi:</strong> Yaygın halk dili</li>
            </ul>
          </div>
        </section>

        {/* Section 2: Nedenler */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Eklem Faresi Nedenleri</h2>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Travmatik Nedenler</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Akut travma:</strong> Düşme, darbe, spor yaralanmaları sonucu kıkırdak veya kemik parçalarının kopması</li>
            <li><strong>Osteokondarl kırıklar:</strong> Eklem yüzeyinde kemik ve kıkırdağın birlikte kırılması</li>
            <li><strong>Menisküs yırtıkları:</strong> Menisküs parçalarının kopup eklemde serbestçe kalması</li>
            <li><strong>Kıkırdak hasarı:</strong> Kondral veya osteokondral yaralanmalar</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Dejeneratif Nedenler</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Osteoartrit:</strong> Eklem aşınması sonucu kıkırdak ve kemik parçalarının kopması</li>
            <li><strong>Osteofitler:</strong> Kemik mahmuzlarının kırılarak eklemde serbest kalması</li>
            <li><strong>Kıkırdak aşınması:</strong> Kronik aşınma sonucu parçalanma</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Diğer Nedenler</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Osteochondritis Dissecans (OCD):</strong> Subkondral kemiğin kan akımı bozukluğu sonucu parça kopması</li>
            <li><strong>Sinovyal kondromatozis:</strong> Eklem zarının anormal kıkırdak doku üretmesi</li>
            <li><strong>Vilonodüler sinovit:</strong> Eklem zarı hastalığı</li>
            <li><strong>Kireçlenme:</strong> Eklem içinde kalsifikasyon oluşumu</li>
          </ul>
        </section>

        {/* Section 3: Belirtiler */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Eklem Faresi Belirtileri</h2>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">🚨 Tipik Belirtiler</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Ani kilitlenme:</strong> Eklemin belli bir pozisyonda aniden kilitlenmesi ve hareket edememesi</li>
              <li><strong>Çatırdama hissi:</strong> Eklem hareketlerinde hissedilen veya duyulan klik, çatırtı sesleri</li>
              <li><strong>Aralıklı ağrı:</strong> Özellikle belirli hareketlerde ortaya çıkan keskin, ani ağrı</li>
              <li><strong>Şişlik:</strong> Eklem içi sıvı birikimi (efüzyon)</li>
              <li><strong>Hareket kısıtlılığı:</strong> Eklemin tam olarak bükülememesi veya açılamaması</li>
              <li><strong>Instabilite hissi:</strong> Eklemin "kaçacakmış" gibi hissedilmesi</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Dize Özgü Belirtiler</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Merdiven inip çıkarken ağrı ve kilitlenme</li>
            <li>Çömelme pozisyonunda zorluk</li>
            <li>Diz önünde veya eklem çizgilerinde lokalize ağrı</li>
            <li>Patella (diz kapağı) altında hissedilen hareket</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Dirsek ve Omuzda Belirtiler</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Eklem tam açılırken veya kapanırken ani durma</li>
            <li>Pozisyon değişikliği ile belirtilerin azalması</li>
            <li>Eklem hizasında palpe edilebilen hareketli kitle</li>
          </ul>
        </section>

        {/* Section 4: Tanı */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Eklem Faresi Nasıl Teşhis Edilir?</h2>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Klinik Muayene</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ortopedi uzmanı, eklemin hareket açıklığını değerlendirir, hassas noktaları belirler ve provocative testler uygular. Bazı durumlarda eklem faresi palpe edilebilir (hissedilebilir).
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Görüntüleme Yöntemleri</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">📷 X-ray (Radyografi)</h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>✅ Kalsifiye eklem farelerini gösterir</li>
                <li>✅ İlk tanı aracı, ucuz ve hızlı</li>
                <li>❌ Kıkırdak parçalarını göstermez</li>
                <li>📋 2 veya 3 pozisyonda çekilmeli</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">🧲 MR (Manyetik Rezonans)</h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>✅ Kıkırdak farelerini gösterir</li>
                <li>✅ Eşlik eden kıkırdak hasarını değerlendirir</li>
                <li>✅ Menisküs patolojilerini gösterir</li>
                <li>✅ En hassas görüntüleme yöntemi</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">💻 BT (Bilgisayarlı Tomografi)</h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>✅ Kemik detaylarını 3D gösterir</li>
                <li>✅ Cerrahi planlama için yararlı</li>
                <li>❌ Radyasyon içerir</li>
                <li>📋 Kompleks vakalarda tercih edilir</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">🔬 Ultrason (USG)</h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>✅ Efüzyon değerlendirmesi</li>
                <li>✅ Yüzeyel eklem farelerini gösterir</li>
                <li>❌ Eklem derinliklerinde sınırlı</li>
                <li>📋 Yardımcı tanı aracı</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: Tedavi */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Eklem Faresi Tedavisi</h2>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Konservatif (Ameliyatsız) Yaklaşım</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ameliyatsız tedavi genellikle geçici çözümdür ve aşağıdaki durumlarda düşünülebilir:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Çok küçük boyutlu, semptom vermeyen eklem fareleri</li>
            <li>Cerrahi için uygun olmayan genel sağlık durumu</li>
            <li>Hasta tercihi ile cerrahi erteleme durumları</li>
          </ul>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">⚠️ Konservatif Tedavi Sınırlamaları</h4>
            <p className="text-gray-700 mb-2">
              Fizik tedavi, ilaç ve enjeksiyonlar eklem faresini ortadan kaldırmaz. Geçici rahatlama sağlayabilir ancak kilitlenme ve ağrı tekrarlayacaktır. Zamanla eklem kıkırdağında hasar birikir ve osteoartrit riski artar.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Artroskopik Cerrahi Tedavi (Altın Standart)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Artroskopik eklem faresi çıkarılması</strong>, günümüzde eklem faresi tedavisinin standart yöntemidir. Minimal invaziv bir prosedürdür.
          </p>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">✅ Artroskopik Cerrahinin Avantajları</h4>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Küçük kesilerle (5-10 mm) yapılır, büyük cerrahi insizyon gerekmez</li>
              <li>Hastane yatışı genellikle gün içinde (day-case) veya 1 gece</li>
              <li>Daha az ağrı ve şişlik</li>
              <li>Hızlı iyileşme süreci (2-6 hafta)</li>
              <li>Kozmetik açıdan üstün (minimal skar)</li>
              <li>Eşlik eden patolojileri (menisküs yırtığı, kıkırdak hasarı) aynı seansta tedavi imkanı</li>
              <li>Düşük enfeksiyon riski</li>
            </ul>
          </div>

          <h4 className="text-lg font-semibold text-gray-800 mb-3">🔬 Artroskopi Prosedürü Nasıl Yapılır?</h4>
          <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-3">
            <li>
              <strong>Anestezi:</strong> Genel, spinal veya blok anestezi uygulanır
            </li>
            <li>
              <strong>Portal girişleri:</strong> Eklem etrafına 2-3 adet küçük kesi yapılır
            </li>
            <li>
              <strong>Kamera yerleştirilmesi:</strong> Artroskop (ince kamera) eklem içine yerleştirilir, görüntü ekrana yansıtılır
            </li>
            <li>
              <strong>Eklem inspeksiyonu:</strong> Eklemin tüm kompartmanları sistematik olarak incelenir
            </li>
            <li>
              <strong>Eklem faresi tespiti:</strong> Serbest cisim lokalize edilir ve yakalanır
            </li>
            <li>
              <strong>Çıkarılma:</strong> Özel forsepsler ile eklem faresi yakalanıp çıkarılır
            </li>
            <li>
              <strong>Ek tedaviler:</strong> Varsa kıkırdak hasarı onarımı, menisküs yırtığı tedavisi yapılır
            </li>
            <li>
              <strong>İrrigasyon ve kapatma:</strong> Eklem yıkanır, kesiler dikilir veya steri-strip ile kapatılır
            </li>
          </ol>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Açık Cerrahi</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nadiren, aşağıdaki durumlarda açık cerrahi gerekebilir:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Çok büyük eklem fareleri ({'>'}3-4 cm)</li>
            <li>Artroskopik ulaşımın zor olduğu lokalizasyonlar</li>
            <li>Kompleks osteokondral greft gerektiren durumlar</li>
            <li>Eşlik eden major rekonstrüksiyon ihtiyacı</li>
          </ul>
        </section>

        {/* Section 6: Ameliyat Sonrası */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ameliyat Sonrası İyileşme Süreci</h2>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">📅 İyileşme Takvimi</h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold text-gray-800">İlk 24-48 Saat</h4>
                <ul className="text-gray-700 text-sm space-y-1 mt-2">
                  <li>• Bacak elevasyonu (kalpten yukarı)</li>
                  <li>• Buz kompres uygulaması (20 dk her 2 saatte)</li>
                  <li>• Ağrı kontrolü için ilaç</li>
                  <li>• Pansuman kontrolü</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold text-gray-800">1. Hafta</h4>
                <ul className="text-gray-700 text-sm space-y-1 mt-2">
                  <li>• Koltuk değneği ile kısmi yük verme</li>
                  <li>• Basit eklem hareket egzersizleri</li>
                  <li>• Quadriceps kasılma egzersizleri</li>
                  <li>• Dikiş kontrolü (7-10. gün)</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold text-gray-800">2-4. Haftalar</h4>
                <ul className="text-gray-700 text-sm space-y-1 mt-2">
                  <li>• Tam yük verme (tolere edilebildiğinde)</li>
                  <li>• Fizik tedavi programı</li>
                  <li>• Kas güçlendirme egzersizleri</li>
                  <li>• Günlük aktivitelere dönüş</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold text-gray-800">6-12. Haftalar</h4>
                <ul className="text-gray-700 text-sm space-y-1 mt-2">
                  <li>• Spora dönüş değerlendirmesi</li>
                  <li>• İleri seviye güçlendirme</li>
                  <li>• Propriyosepsiyon çalışmaları</li>
                  <li>• Kademeli aktivite artışı</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">⚠️ Komplikasyon Riski ve Önleme</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Artroskopik eklem faresi cerrahisi güvenli bir prosedür olmakla birlikte nadir komplikasyonlar görülebilir:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Enfeksiyon:</strong> Risk %0.1-0.5, antibiotik profilaksisi ile minimize edilir</li>
            <li><strong>Kanama/hematom:</strong> Nadir, yeterli hemostaz ile önlenir</li>
            <li><strong>Sinir/damar yaralanması:</strong> Anatomik bilgi ile minimize edilir</li>
            <li><strong>DVT/emboli:</strong> Erken mobilizasyon ile risk azalır</li>
            <li><strong>Eklem sertliği:</strong> Erken rehabilitasyon ile önlenir</li>
          </ul>
        </section>

        {/* Section 7: Sonuç ve Kaynaklar */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Sonuç ve Prognoz</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Eklem faresi cerrahisi, yüksek başarı oranına sahip bir prosedürdür. Hastaların %90-95'inde belirtiler tamamen kaybolur ve normal aktivitelere dönüş sağlanır. Artroskopik teknik, minimal invaziv yaklaşımı sayesinde hızlı iyileşme ve yüksek hasta memnuniyeti sunar.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Eklem faresinin erken dönemde tedavi edilmesi, eklem kıkırdağında kalıcı hasar oluşmasını önler ve uzun dönem eklem sağlığını korur. Belirtiler varsa, erken tanı ve tedavi için ortopedi uzmanına başvurulması önemlidir.
          </p>

          <div className="bg-green-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">✅ Başarı Kriterleri</h3>
            <ul className="text-gray-700 space-y-1">
              <li>• Ağrısız eklem hareketi</li>
              <li>• Kilitlenme ve yakalanma hissinin ortadan kalkması</li>
              <li>• Tam hareket açıklığı</li>
              <li>• Spora ve günlük aktivitelere sorunsuz dönüş</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Kaynaklar ve İleri Okuma</h3>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2">
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=loose+body+arthroscopy" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Eklem Faresi Artroskopisi - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=intraarticular+loose+bodies+knee" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Diz İntraartiküler Serbest Cisimler - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=osteochondritis+dissecans+treatment" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Osteochondritis Dissecans Tedavisi - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=synovial+chondromatosis" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Sinovyal Kondromatozis - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=knee+arthroscopy+outcomes" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Diz Artroskopisi Sonuçları - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=elbow+loose+body+arthroscopy" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Dirsek Eklem Faresi Artroskopisi - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=knee+locking+mechanism" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Diz Kilitlenme Mekanizması - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=postoperative+rehabilitation+arthroscopy" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Artroskopi Sonrası Rehabilitasyon - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=cartilage+damage+loose+body" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Eklem Faresi ve Kıkırdak Hasarı - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=minimally+invasive+joint+surgery" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Minimal İnvaziv Eklem Cerrahisi - PubMed Ara
                </a>
              </li>
            </ol>
          </div>
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
        <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Eklem Kilitlenmesi mi Yaşıyorsunuz?</h2>
          <p className="text-xl mb-8 text-emerald-100">
            Eklem farenizi değerlendirmek ve artroskopik tedavi seçeneklerini öğrenmek için uzman görüşü alın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/iletisim"
              className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
            >
              Randevu Al
            </Link>
            <Link
              href="/tedaviler/artroskopi"
              className="inline-block bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-600 transition-colors border-2 border-emerald-500"
            >
              Artroskopi Hakkında
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
