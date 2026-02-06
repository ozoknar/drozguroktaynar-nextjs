import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kalça Kireçlenmesi Nedir? Belirtiler, Nedenler ve Tedavi Yöntemleri',
  description: 'Kalça kireçlenmesi (koksartroz) nedir, belirtileri nelerdir, nasıl tedavi edilir? Op. Dr. Özgür Oktay Nar\'dan kalça osteoartriti hakkında kapsamlı bilgi.',
  keywords: 'kalça kireçlenmesi, koksartroz, kalça osteoartriti, kalça ağrısı, kalça tedavisi, kalça protezi',
  openGraph: {
    title: 'Kalça Kireçlenmesi Nedir? Belirtiler ve Tedavi | Op. Dr. Özgür Oktay Nar',
    description: 'Kalça kireçlenmesinin belirtileri, nedenleri ve güncel tedavi yöntemleri hakkında uzman görüşü.',
    type: 'article',
    locale: 'tr_TR',
    siteName: 'Op. Dr. Özgür Oktay Nar',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kalça Kireçlenmesi Nedir? Belirtiler ve Tedavi',
    description: 'Kalça osteoartriti hakkında kapsamlı rehber.',
  },
  alternates: {
    canonical: 'https://www.drozguroktaynar.com/blog/kalca-kireclenmesi-nedir',
  },
};

export default function KalcaKireclenmesiNedirPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: 'Kalça Kireçlenmesi Nedir? Belirtiler, Nedenler ve Tedavi Yöntemleri',
    description: 'Kalça kireçlenmesi (koksartroz) hakkında kapsamlı bilgi: belirtiler, nedenler, risk faktörleri ve tedavi seçenekleri.',
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
      name: 'Kalça Kireçlenmesi (Koksartroz)',
      alternateName: 'Kalça Osteoartriti',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
              Kalça Sağlığı
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Kalça Kireçlenmesi Nedir? Belirtiler, Nedenler ve Tedavi Yöntemleri
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Kalça kireçlenmesi (koksartroz), kalça eklemindeki kıkırdak dokunun aşınması sonucu oluşan dejeneratif bir hastalıktır. Belirtileri, nedenleri ve tedavi seçeneklerini keşfedin.
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
            <span>Op. Dr. Özgür Oktay Nar</span>
            <span>•</span>
            <time dateTime="2026-02-06">6 Şubat 2026</time>
            <span>•</span>
            <span>8 dakika okuma</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="container mx-auto px-4 max-w-4xl py-12">
        {/* Section 1: Giriş */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Kalça Kireçlenmesi (Koksartroz) Nedir?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Kalça kireçlenmesi, tıp dilinde <strong>koksartroz</strong> veya <strong>kalça osteoartriti</strong> olarak adlandırılan, kalça eklemindeki kıkırdak dokunun zamanla aşınması ve incelmeyi sonucu ortaya çıkan kronik bir eklem hastalığıdır. Bu durum, kemiklerin birbirine sürtünmesine, ağrıya, sertliğe ve hareket kısıtlılığına neden olur.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Kalça eklemi, vücudun en büyük ve en yük taşıyan eklemlerinden biridir. Femur başı (uyluk kemiği) ile asetabulum (leğen kemiğindeki çukur) arasında oluşan bu eklem, yürüme, koşma ve günlük aktivitelerde kritik rol oynar. Kıkırdak doku, bu kemiklerin pürüzsüz hareket etmesini sağlar ve darbeleri emer.
          </p>
        </section>

        {/* Section 2: Nedenler ve Risk Faktörleri */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Kalça Kireçlenmesinin Nedenleri ve Risk Faktörleri</h2>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Primer (Birincil) Nedenler</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Yaşlanma:</strong> Kıkırdak doku yaşla birlikte doğal olarak aşınır ve yenilenme kapasitesi azalır</li>
            <li><strong>Genetik faktörler:</strong> Ailede osteoartrit öyküsü riski artırır</li>
            <li><strong>Cinsiyet:</strong> 50 yaş üzeri kadınlarda daha sık görülür</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Sekonder (İkincil) Nedenler</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Obezite:</strong> Fazla kilo kalça eklemine aşırı yük bindirir</li>
            <li><strong>Geçirilmiş travmalar:</strong> Kalça kırıkları veya çıkıkları</li>
            <li><strong>Gelişimsel displazi:</strong> Doğumsal kalça çıkığı veya yuva yetersizliği</li>
            <li><strong>Femoro-asetabular sıkışma (FAI):</strong> Kalça ekleminde anormal kemik yapısı</li>
            <li><strong>Avasküler nekroz:</strong> Kalça başında kan akımının bozulması</li>
            <li><strong>Romatizmal hastalıklar:</strong> Romatoid artrit gibi inflamatuar durumlar</li>
            <li><strong>Mesleki faktörler:</strong> Ağır yük taşıma, uzun süre ayakta kalma</li>
          </ul>
        </section>

        {/* Section 3: Belirtiler */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Kalça Kireçlenmesi Belirtileri</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Kalça kireçlenmesinin belirtileri genellikle yavaş ilerler ve zamanla şiddetlenir:
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Erken Dönem Belirtileri</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Sabah tutukluğu ve eklem sertliği (30 dakikadan kısa sürer)</li>
              <li>Uzun süre hareketsizlikten sonra ağrı</li>
              <li>Aktivite sonrası rahatsızlık hissi</li>
              <li>Kasıkta hafif ağrı veya huzursuzluk</li>
            </ul>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">İleri Dönem Belirtileri</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Ağrı:</strong> Kasık, kalça, uyluk veya dizde ağrı (istirahat sırasında da olabilir)</li>
              <li><strong>Hareket kısıtlılığı:</strong> Çorap giyme, ayakkabı bağlama zorluğu</li>
              <li><strong>Topallama:</strong> Ağrıyı azaltmak için değişen yürüyüş şekli</li>
              <li><strong>Krepitasyon:</strong> Hareket sırasında çıtırtı veya klik sesleri</li>
              <li><strong>Kas zayıflığı:</strong> Kalça çevresinde kas erimesi</li>
              <li><strong>Bacak boyu farklılığı:</strong> İleri vakalarda bacak kısalması</li>
            </ul>
          </div>
        </section>

        {/* Section 4: Tanı */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Kalça Kireçlenmesi Nasıl Teşhis Edilir?</h2>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Fizik Muayene</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ortopedi uzmanı, kalça hareketlerini değerlendirir, ağrı noktalarını tespit eder ve yürüyüş şeklinizi inceler. Özel testler (Patrick testi, FABER testi) yapılarak kalça patolojileri değerlendirilir.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Görüntüleme Yöntemleri</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>X-ray (Radyografi):</strong> Eklem aralığında daralma, osteofitler (kemik mahmuzları), kist formasyonları görülür</li>
            <li><strong>MR (Manyetik Rezonans):</strong> Kıkırdak hasarı, labrum yırtıkları, kemik ödemi detaylı değerlendirilir</li>
            <li><strong>BT (Bilgisayarlı Tomografi):</strong> Kemik yapısı ve deformiteler 3 boyutlu incelenir</li>
          </ul>
        </section>

        {/* Section 5: Tedavi */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Kalça Kireçlenmesi Tedavi Seçenekleri</h2>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Konservatif (Ameliyatsız) Tedavi</h3>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Yaşam Tarzı Değişiklikleri</h4>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Kilo kaybı (her 1 kg kalça eklemine 3-4 kg yük azaltır)</li>
              <li>Düşük etkili egzersizler (yüzme, bisiklet, yürüyüş)</li>
              <li>Ergonomik düzenlemeler</li>
              <li>Yüksek etkili sporlardan kaçınma</li>
            </ul>
          </div>

          <h4 className="text-lg font-semibold text-gray-800 mb-2">Fizik Tedavi ve Egzersiz</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Eklem hareket genişliği egzersizleri</li>
            <li>Kalça çevresi kas güçlendirme</li>
            <li>Denge ve koordinasyon çalışmaları</li>
            <li>Elektroterapi uygulamaları (TENS, ultrason)</li>
          </ul>

          <h4 className="text-lg font-semibold text-gray-800 mb-2">İlaç Tedavisi</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Analjezikler:</strong> Parasetamol (hafif-orta ağrı için)</li>
            <li><strong>NSAİİ'ler:</strong> İbuprofen, naproksen (ağrı ve inflamasyonu azaltır)</li>
            <li><strong>Kondroprotektif ajanlar:</strong> Glukozamin, kondroitin sülfat</li>
            <li><strong>Topikal kremler:</strong> Kapsaisin içerikli merhemler</li>
          </ul>

          <h4 className="text-lg font-semibold text-gray-800 mb-2">Enjeksiyon Tedavileri</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Kortikosteroid enjeksiyonları:</strong> Kısa süreli ağrı kontrolü</li>
            <li><strong>Hyalüronik asit:</strong> Eklem kayganlaştırıcısı (viskosüplemasyon)</li>
            <li><strong>PRP (Platelet Rich Plasma):</strong> Zenginleştirilmiş plazma tedavisi</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Cerrahi Tedavi</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Konservatif tedavilere yanıt alınamadığında veya ileri derecede eklem hasarı varlığında cerrahi seçenekler değerlendirilir:
          </p>

          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Artroskopi:</strong> Erken evrede eklem faresi temizliği, labrum onarımı</li>
            <li><strong>Osteotomi:</strong> Genç hastalarda yük dağılımını düzeltmek için kemik kesisi</li>
            <li><strong>Total Kalça Protezi:</strong> Hasar görmüş eklemin yapay eklemle değiştirilmesi (en etkili tedavi)</li>
            <li><strong>Yüzey protezi:</strong> Seçilmiş genç hastalarda alternatif</li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Kalça Protezi Hakkında</h4>
            <p className="text-gray-700 leading-relaxed">
              Total kalça protezi, günümüzde başarı oranı %95'in üzerinde olan, hastanın yaşam kalitesini dramatik şekilde artıran bir ameliyattır. Cerrahi sonrası hastalar genellikle 6-12 hafta içinde normal aktivitelere döner ve protezlerin ömrü 20-25 yıldır.
            </p>
          </div>
        </section>

        {/* Section 6: Önleme */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Kalça Kireçlenmesinden Korunma Yöntemleri</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">🏋️ Sağlıklı Kilo</h3>
              <p className="text-gray-700">İdeal kiloda kalmak kalça eklemine binen yükü azaltır</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">🏊 Düzenli Egzersiz</h3>
              <p className="text-gray-700">Eklem hareketliliğini korur ve kasları güçlendirir</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">⚠️ Travmalardan Korunma</h3>
              <p className="text-gray-700">Düşme riskini azaltın, koruyucu ekipman kullanın</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">🩺 Erken Tanı</h3>
              <p className="text-gray-700">Belirtiler başladığında uzman görüşü alın</p>
            </div>
          </div>
        </section>

        {/* Section 7: Sonuç ve Kaynaklar */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Sonuç</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Kalça kireçlenmesi, yaşam kalitesini önemli ölçüde etkileyebilen kronik bir hastalıktır. Ancak erken tanı, uygun tedavi yöntemleri ve yaşam tarzı değişiklikleri ile hastalığın ilerlemesi yavaşlatılabilir ve semptomlar kontrol altına alınabilir. İleri vakalarda kalça protezi cerrahisi, hastaların ağrısız ve aktif bir yaşama dönmesini sağlar.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Kalça ağrınız varsa veya hareket kısıtlılığı yaşıyorsanız, bir ortopedi uzmanına başvurmanız önemlidir. Kişiselleştirilmiş tedavi planı ile en iyi sonuçları elde edebilirsiniz.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Kaynaklar ve İleri Okuma</h3>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2">
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=hip+osteoarthritis+treatment" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Kalça Osteoartriti Tedavisi - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=hip+osteoarthritis+risk+factors" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Kalça Osteoartriti Risk Faktörleri - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=total+hip+arthroplasty+outcomes" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Total Kalça Protezi Sonuçları - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=hip+osteoarthritis+conservative+treatment" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Kalça Osteoartriti Konservatif Tedavi - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=femoroacetabular+impingement" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Femoro-asetabular Sıkışma - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=hip+arthritis+physical+therapy" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Kalça Artriti Fizik Tedavi - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=hyaluronic+acid+hip+injection" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Kalça Hyalüronik Asit Enjeksiyonu - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=hip+osteoarthritis+obesity" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Kalça Osteoartriti ve Obezite - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=hip+arthroscopy+osteoarthritis" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Kalça Artroskopisi ve Osteoartrit - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=developmental+dysplasia+hip+osteoarthritis" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Gelişimsel Displazi ve Kalça Osteoartriti - PubMed Ara
                </a>
              </li>
            </ol>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Kalça Ağrınız mı Var?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Kalça kireçlenmesi belirtilerinizi değerlendirmek ve size özel tedavi planı oluşturmak için randevu alın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/iletisim"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Randevu Al
            </Link>
            <Link
              href="/hakkimda"
              className="inline-block bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors border-2 border-blue-500"
            >
              Op. Dr. Özgür Oktay Nar Hakkında
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
