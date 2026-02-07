import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Op. Dr. Özgür Oktay Nar İSİAT 2025\'te Bilimsel Katkısıyla Dikkat Çekti',
  description: 'Op. Dr. Özgür Oktay Nar, İSİAT 2025 kongresinde diz ve kalça cerrahisi alanındaki bilimsel çalışmalarını paylaştı. Artroplasti ve artroskopi konularındaki katkıları.',
  keywords: 'Op. Dr. Özgür Oktay Nar, İSİAT 2025, ortopedi kongresi, diz protezi, kalça protezi, artroskopi, bilimsel sunum',
  openGraph: {
    title: 'Op. Dr. Özgür Oktay Nar İSİAT 2025 Kongresinde | Bilimsel Sunum',
    description: 'İSİAT 2025 kongresinde diz ve kalça cerrahisi alanındaki bilimsel katkılar.',
    type: 'article',
    locale: 'tr_TR',
    siteName: 'Op. Dr. Özgür Oktay Nar',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Op. Dr. Özgür Oktay Nar İSİAT 2025\'te',
    description: 'Bilimsel sunum ve ortopedi alanındaki katkılar.',
  },
  alternates: {
    canonical: 'https://www.drozguroktaynar.com/blog/ortopedi-uzmani-op-dr-ozgur-oktay-nar-isiat-2025te-bilimsel-katkisiyla-dikkat-cekti',
  },
};

export default function IsiatKongresiPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Op. Dr. Özgür Oktay Nar İSİAT 2025\'te Bilimsel Katkısıyla Dikkat Çekti',
    description: 'Op. Dr. Özgür Oktay Nar\'ın İSİAT 2025 kongresindeki bilimsel sunumları ve ortopedi alanındaki akademik katkıları.',
    datePublished: '2026-02-06',
    dateModified: '2026-02-06',
    author: {
      '@type': 'Person',
      name: 'Op. Dr. Özgür Oktay Nar',
      jobTitle: 'Ortopedi ve Travmatoloji Uzmanı',
    },
    about: {
      '@type': 'MedicalBusiness',
      name: 'Op. Dr. Özgür Oktay Nar Ortopedi Kliniği',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-indigo-50 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-semibold mb-4">
              Bilimsel Etkinlik
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Op. Dr. Özgür Oktay Nar İSİAT 2025'te Bilimsel Katkısıyla Dikkat Çekti
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              İSİAT 2025 kongresinde diz ve kalça cerrahisi alanındaki güncel yaklaşımlar ve klinik deneyimler paylaşıldı.
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
            <span>Op. Dr. Özgür Oktay Nar</span>
            <span>•</span>
            <time dateTime="2026-02-06">6 Şubat 2026</time>
            <span>•</span>
            <span>6 dakika okuma</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="container mx-auto px-4 max-w-4xl py-12">
        {/* Section 1: Giriş */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">İSİAT 2025 Kongresi ve Ortopedi Camiası</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>İSİAT (İstanbul Spor ve Artroplasti Toplantısı)</strong>, Türkiye'nin en prestijli ortopedi kongrelerinden biri olarak her yıl diz ve kalça cerrahisi, spor yaralanmaları ve artroplasti alanlarında çalışan uzmanları bir araya getirmektedir. 2025 yılı kongresinde, yurt içi ve yurt dışından katılımcılar en güncel bilimsel gelişmeleri, cerrahi teknikleri ve klinik deneyimlerini paylaştılar.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bu yılki kongrede, <strong>Op. Dr. Özgür Oktay Nar</strong> da diz ve kalça cerrahisi alanındaki çalışmaları ve klinik yaklaşımlarıyla dikkat çekti. Kongre kapsamında sunumlar, paneller ve atölye çalışmalarında yer alarak meslektaşları ile bilgi alışverişinde bulundu.
          </p>
        </section>

        {/* Section 2: Kongre Odak Alanları */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">İSİAT 2025 Kongresi Odak Alanları</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-[#E6FAF8] border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">🦴 Artroplasti (Protez Cerrahisi)</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Total diz protezi güncel teknikler</li>
                <li>• Kalça protezinde minimal invaziv yaklaşımlar</li>
                <li>• Revizyon cerrahisi stratejileri</li>
                <li>• Protez enfeksiyonları yönetimi</li>
                <li>• Hasta bazlı implant seçimi</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">🔬 Artroskopi ve Spor Cerrahisi</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Diz artroskopisi endikasyonları</li>
                <li>• Menisküs koruyucu tedaviler</li>
                <li>• Ön çapraz bağ (ACL) rekonstrüksiyonu</li>
                <li>• Kıkırdak onarım teknikleri</li>
                <li>• Omuz artroskopisi güncellemeleri</li>
              </ul>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">🧬 Yenileyici Tıp</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• PRP (Zenginleştirilmiş plazma) uygulamaları</li>
                <li>• Kök hücre tedavileri</li>
                <li>• Biyolojik ajanların etkinliği</li>
                <li>• Kıkırdak rejenerasyonu</li>
                <li>• Tendon iyileşmesi optimizasyonu</li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">💡 Teknoloji ve İnovasyon</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Robotik cerrahi sistemleri</li>
                <li>• Navigasyon destekli ameliyatlar</li>
                <li>• 3D baskı ve hasta-spesifik implantlar</li>
                <li>• Artırılmış gerçeklik (AR) uygulamaları</li>
                <li>• Telemedicine ve uzaktan takip</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Op. Dr. Özgür Oktay Nar'ın Katkıları */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Op. Dr. Özgür Oktay Nar'ın Bilimsel Katkıları</h2>
          
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">🎓 Uzmanlık Alanları ve Klinik Deneyim</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Op. Dr. Özgür Oktay Nar, diz ve kalça cerrahisi, artroskopi ve spor yaralanmaları tedavisi konularında uzmanlaşmış bir ortopedi ve travmatoloji uzmanıdır. Kongrede paylaştığı konular arasında:
            </p>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Total diz protezi:</strong> Kişiselleştirilmiş cerrahi planlama ve hasta memnuniyeti optimizasyonu</li>
              <li><strong>Kalça artroplastisi:</strong> Minimal invaziv teknikler ve erken mobilizasyon protokolleri</li>
              <li><strong>Artroskopik tedaviler:</strong> Menisküs preservasyonu ve kıkırdak onarım stratejileri</li>
              <li><strong>Spor yaralanmaları:</strong> ACL hasarı yönetimi ve spora dönüş programları</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Güncel Klinik Yaklaşımlar</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Kongrede vurgulanan önemli noktalar:
          </p>

          <div className="space-y-6 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">👥 Hasta Merkezli Yaklaşım</h4>
              <p className="text-gray-700 text-sm">
                Her hastanın anatomisi, beklentileri ve yaşam tarzı farklıdır. Cerrahi planlama ve implant seçimi bu faktörlere göre kişiselleştirilmelidir. Shared decision-making (ortak karar verme) modeli önemlidir.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">🔬 Kanıt Temelli Uygulama</h4>
              <p className="text-gray-700 text-sm">
                Güncel literatür ve klinik kılavuzlar ışığında tedavi kararları alınmalıdır. Randomize kontrollü çalışmalar, meta-analizler ve uzun dönem takip sonuçları önemlidir.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">⚡ Minimal İnvaziv Teknikler</h4>
              <p className="text-gray-700 text-sm">
                Daha küçük insizyonlar, kas koruyucu yaklaşımlar ve hızlı iyileşme protokolleri hasta konforu ve erken mobilizasyonu artırır. Ancak, minimal invaziv teknikler cerrahi doğruluğu tehlikeye atmadan uygulanmalıdır.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">🏥 Multidisipliner Yaklaşım</h4>
              <p className="text-gray-700 text-sm">
                Fizik tedavi uzmanları, radyologlar, anestezi ekipleri ve diğer sağlık profesyonelleri ile koordinasyon, başarılı tedavi sonuçları için kritiktir.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Kongre Çıktıları */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">İSİAT 2025'ten Öne Çıkan Mesajlar</h2>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Diz Protezi Alanında</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Robotik cerrahi:</strong> Diz protezi cerrahisinde robotik sistemlerin kullanımı artmakla birlikte, deneyimli cerrahın klinik kararları hala en önemli faktördür</li>
            <li><strong>Kişiselleştirilmiş kesiler:</strong> Hasta anatomisine özel planlama araçları implant pozisyonunu optimize eder</li>
            <li><strong>Erken mobilizasyon:</strong> Enhanced recovery after surgery (ERAS) protokolleri hastane kalış süresini azaltır ve komplikasyon riskini düşürür</li>
            <li><strong>Ağrı yönetimi:</strong> Multimodal analjezi yaklaşımı opioid kullanımını azaltır</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Kalça Protezi Alanında</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Anterior yaklaşım:</strong> Kas kesisi gerektirmeyen ön yaklaşım popülerlik kazanmaktadır</li>
            <li><strong>Dual mobilite:</strong> Çıkık riski yüksek hastalarda dual mobilite başlıklar tercih edilmektedir</li>
            <li><strong>Genç hastalar:</strong> Seramik-seramik artikülasyon genç, aktif hastalarda uzun ömür sağlar</li>
            <li><strong>Revizyon karmaşıklığı:</strong> Kemik stoğu kaybı yönetimi için tantalum augmentler ve özel implantlar kullanılır</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Artroskopi Alanında</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Menisküs koruma:</strong> Mümkün olduğunca menisküs dokusu korunmalı, onarım cerrahi kesim yerine tercih edilmelidir</li>
            <li><strong>ACL rekonstrüksiyon:</strong> Anatomik bağ rekonstrüksiyonu ve biyolojik iyileşme optimizasyonu önemlidir</li>
            <li><strong>Kıkırdak tedavisi:</strong> Mikrokırık, osteokondral greft ve otolog kondrosit implantasyonu seçilmiş vakalarda etkilidir</li>
            <li><strong>Omuz instabilitesi:</strong> Bankart lezyonu onarımı ve rotator kılıf tedavisi artroskopik olarak başarıyla yapılabilir</li>
          </ul>
        </section>

        {/* Section 5: Bilimsel Toplantıların Önemi */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Bilimsel Kongrelerin Tıp Eğitimindeki Yeri</h2>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            İSİAT gibi bilimsel toplantılar, tıp eğitiminde ve meslek içi gelişimde kritik rol oynar:
          </p>

          <div className="bg-green-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">✅ Kongrelerin Faydaları</h3>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Güncel bilgi transferi:</strong> En yeni araştırma sonuçları ve klinik deneyimler paylaşılır</li>
              <li><strong>Networking:</strong> Meslektaşlar ile iletişim kurma ve işbirliği fırsatları</li>
              <li><strong>Teknoloji tanıtımı:</strong> Yeni implantlar, cihazlar ve cerrahi aletler tanıtılır</li>
              <li><strong>Hands-on eğitim:</strong> Atölye çalışmaları ve canlı cerrahi izleme imkanı</li>
              <li><strong>Multidisipliner tartışma:</strong> Farklı bakış açıları ve yaklaşımların karşılaştırılması</li>
              <li><strong>Kalite iyileştirme:</strong> Komplikasyon yönetimi ve sonuç analizi tartışmaları</li>
            </ul>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            Op. Dr. Özgür Oktay Nar, sürekli mesleki gelişim felsefesiyle bu tür bilimsel etkinliklere aktif katılım sağlamakta, hem bilgi edinmekte hem de kendi deneyimlerini meslektaşları ile paylaşmaktadır.
          </p>
        </section>

        {/* Section 6: Gelecek Perspektifi */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ortopedi Cerrahisinde Gelecek Trendleri</h2>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            İSİAT 2025'te tartışılan gelecek perspektifi konuları:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-[#E6FAF8] border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">🤖 Yapay Zeka ve Makine Öğrenmesi</h4>
              <p className="text-gray-700 text-sm">
                AI destekli preoperatif planlama, görüntü analizi ve sonuç tahmin modelleri geliştirilmektedir.
              </p>
            </div>

            <div className="bg-[#E6FAF8] border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">🧬 Kişiselleştirilmiş İmplantlar</h4>
              <p className="text-gray-700 text-sm">
                3D baskı teknolojisi ile hasta anatomisine tam uyumlu implantlar üretilmektedir.
              </p>
            </div>

            <div className="bg-[#E6FAF8] border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">🔬 Biyomateryal İnovasyonu</h4>
              <p className="text-gray-700 text-sm">
                Daha dayanıklı, biyouyumlu ve antibakteriyel özellikli yeni materyaller araştırılmaktadır.
              </p>
            </div>

            <div className="bg-[#E6FAF8] border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">📱 Dijital Sağlık</h4>
              <p className="text-gray-700 text-sm">
                Wearable cihazlar, mobil uygulamalar ve uzaktan hasta takibi sistemleri gelişmektedir.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Sonuç ve Kaynaklar */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Sonuç</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            İSİAT 2025 kongresi, Türk ortopedi camiası için bilgi paylaşımı, networking ve mesleki gelişim açısından oldukça verimli bir etkinlik olmuştur. Op. Dr. Özgür Oktay Nar'ın diz ve kalça cerrahisi alanındaki katkıları, kongrenin akademik zenginliğine katkı sağlamıştır.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ortopedi ve travmatoloji alanında sürekli gelişim, hasta bakım kalitesinin artırılması için elzemdir. Bilimsel toplantılar, bu gelişimin sağlanmasında kritik rol oynar.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Kaynaklar ve İleri Okuma</h3>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2">
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=total+knee+arthroplasty+outcomes" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-[#01CAB8] hover:text-[#01867A]"
                >
                  Total Diz Protezi Sonuçları - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=hip+arthroplasty+minimally+invasive" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-[#01CAB8] hover:text-[#01867A]"
                >
                  Minimal İnvaziv Kalça Protezi - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=knee+arthroscopy+current+concepts" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-[#01CAB8] hover:text-[#01867A]"
                >
                  Diz Artroskopisi Güncel Kavramlar - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=ACL+reconstruction+techniques" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-[#01CAB8] hover:text-[#01867A]"
                >
                  ACL Rekonstrüksiyon Teknikleri - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=robotic+assisted+knee+arthroplasty" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-[#01CAB8] hover:text-[#01867A]"
                >
                  Robotik Destekli Diz Protezi - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=enhanced+recovery+after+surgery+orthopedics" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-[#01CAB8] hover:text-[#01867A]"
                >
                  ERAS Protokolleri Ortopedi - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=meniscus+preservation+repair" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-[#01CAB8] hover:text-[#01867A]"
                >
                  Menisküs Koruma ve Onarım - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=cartilage+repair+techniques" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-[#01CAB8] hover:text-[#01867A]"
                >
                  Kıkırdak Onarım Teknikleri - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=hip+arthroplasty+dual+mobility" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-[#01CAB8] hover:text-[#01867A]"
                >
                  Dual Mobilite Kalça Protezi - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=patient+specific+instrumentation+arthroplasty" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-[#01CAB8] hover:text-[#01867A]"
                >
                  Hasta Spesifik Enstrümantasyon - PubMed Ara
                </a>
              </li>
            </ol>
          </div>
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
        <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Diz ve Kalça Cerrahisi Konusunda Uzman Görüşü</h2>
          <p className="text-xl mb-8 text-indigo-100">
            Op. Dr. Özgür Oktay Nar ile eklem sorunlarınızı değerlendirin ve size özel tedavi planı oluşturun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/iletisim"
              className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              Randevu Al
            </Link>
            <Link
              href="/hakkimda"
              className="inline-block bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-600 transition-colors border-2 border-indigo-500"
            >
              Hakkımda
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
