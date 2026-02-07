import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Spor Sonrası Diz Şişmesi Evde Nasıl İner? Pratik Çözümler | Op. Dr. Özgür Oktay Nar',
  description: 'Spor sonrası diz şişmesinin nedenleri, evde uygulayabileceğiniz RICE yöntemi ve şişmeyi azaltan uygulamalar hakkında uzman doktor bilgisi.',
  keywords: 'diz şişmesi, spor yaralanması, RICE yöntemi, diz ödemi, egzersiz sonrası şişlik, diz soğuk uygulama',
  authors: [{ name: 'Op. Dr. Özgür Oktay Nar' }],
  openGraph: {
    title: 'Spor Sonrası Diz Şişmesi Evde Nasıl İner? Pratik Çözümler',
    description: 'Spor sonrası diz şişmesinin nedenleri, evde uygulayabileceğiniz RICE yöntemi ve şişmeyi azaltan uygulamalar hakkında uzman doktor bilgisi.',
    type: 'article',
    locale: 'tr_TR',
    url: 'https://www.ozguroktaynar.com/blog/spor-sonrasi-diz-sismesi-evde-nasil-iner',
    siteName: 'Op. Dr. Özgür Oktay Nar',
    images: [
      {
        url: 'https://placehold.co/1200x630/e2e8f0/475569?text=Diz+Sismesi',
        width: 1200,
        height: 630,
        alt: 'Spor sonrası diz şişmesi tedavisi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spor Sonrası Diz Şişmesi Evde Nasıl İner? Pratik Çözümler',
    description: 'Spor sonrası diz şişmesinin nedenleri, evde uygulayabileceğiniz RICE yöntemi ve şişmeyi azaltan uygulamalar hakkında uzman doktor bilgisi.',
    images: ['https://placehold.co/1200x630/e2e8f0/475569?text=Diz+Sismesi'],
  },
  alternates: {
    canonical: 'https://www.ozguroktaynar.com/blog/spor-sonrasi-diz-sismesi-evde-nasil-iner',
  },
};

export default function BlogPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': 'https://www.ozguroktaynar.com/blog/spor-sonrasi-diz-sismesi-evde-nasil-iner#webpage',
        url: 'https://www.ozguroktaynar.com/blog/spor-sonrasi-diz-sismesi-evde-nasil-iner',
        name: 'Spor Sonrası Diz Şişmesi Evde Nasıl İner? Pratik Çözümler',
        description: 'Spor sonrası diz şişmesinin nedenleri, evde uygulayabileceğiniz RICE yöntemi ve şişmeyi azaltan uygulamalar hakkında uzman doktor bilgisi.',
        datePublished: '2025-01-17T10:00:00+03:00',
        dateModified: '2025-01-17T10:00:00+03:00',
        inLanguage: 'tr-TR',
        author: {
          '@type': 'Physician',
          name: 'Op. Dr. Özgür Oktay Nar',
          url: 'https://www.ozguroktaynar.com',
          specialty: 'Ortopedi ve Travmatoloji',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Op. Dr. Özgür Oktay Nar',
          url: 'https://www.ozguroktaynar.com',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">Spor Sonrası Diz Şişmesi Evde Nasıl İner?</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Spor Sonrası Diz Şişmesi Evde Nasıl İner? Pratik Çözümler</h1>
          <div className="flex items-center text-gray-600 text-sm mb-6">
            <span>Op. Dr. Özgür Oktay Nar</span>
            <span className="mx-2">•</span>
            <time>17 Ocak 2025</time>
          </div>
          <img
            src="https://placehold.co/1200x630/e2e8f0/475569?text=Diz+Sismesi"
            alt="Spor sonrası diz şişmesi tedavisi"
            className="w-full rounded-xl shadow-lg"
          />
        </header>

        {/* Main Content - 7 STEP ARCHITECTURE */}
        <div className="prose prose-lg max-w-none">
          
          {/* Section 1: Giriş */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Giriş</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Spor yaparken veya sonrasında dizinizin şiştiğini fark ettiyseniz, yalnız değilsiniz. Diz şişmesi (efüzyon), aktif bireylerde en yaygın karşılaşılan şikayetlerden biridir. Özellikle futbol, basketbol, koşu ve tenis gibi yüksek etki sporlarda sık görülür.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Bu yazıda spor sonrası diz şişmesinin nedenlerini, evde uygulayabileceğiniz ilk yardım yöntemlerini (RICE protokolü) ve ne zaman doktora başvurmanız gerektiğini detaylı olarak ele alacağız. Doğru yaklaşım ile hafif şişmeleri evde yönetebilir ve daha ciddi sakatlıkları erkenden fark edebilirsiniz.
            </p>
          </section>

          {/* Section 2: Nedir / Tanım */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Diz Şişmesi (Efüzyon) Nedir?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Diz şişmesi, diz eklemi içinde veya çevresindeki yumuşak dokularda aşırı sıvı birikmesidir. Tıbbi dilde buna "efüzyon" denir. Normal bir dizde yaklaşık 1-2 ml sinovyal sıvı bulunur, ancak yaralanma veya iltihaplanma durumunda bu miktar 100 ml'ye kadar çıkabilir.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Şişme Tipleri</h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong>İntraartiküler Efüzyon (Eklem İçi):</strong> Diz ekleminin kapsülü içinde sıvı birikimi. Dizin ön kısmında belirgin şişlik, dizkapağı ("sıvı dalgası" testi pozitif). Genellikle menisküs yırtığı, ön çapraz bağ yaralanması, kıkırdak hasarında görülür.
                </li>
                <li>
                  <strong>Ekstraartiküler Ödem (Eklem Dışı):</strong> Eklem çevresindeki yumuşak dokularda (cilt altı, bağlar, kas) ödem. Daha yaygın şişlik, belirli bir lokalizasyon yok. Genellikle çarpma, burkulma, kas yırtılmasında görülür.
                </li>
                <li>
                  <strong>Hemarthroz (Kanlı Eklem):</strong> Eklem içinde kan birikimi. Ani şiddetli travma sonrası hızlı şişme (2-6 saat içinde). Acil değerlendirme gerektirir (ÖÇB, kırık şüphesi).
                </li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Zamanlama Önemlidir:</strong>
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>• <strong>Ani şişme (0-2 saat):</strong> Genellikle hemarthroz - ÖÇB yırtığı, kırık, çıkık olabilir → ACİL doktor değerlendirmesi</li>
              <li>• <strong>Gecikmeli şişme (6-24 saat):</strong> Menisküs yırtığı, kas gerginliği, eklem burkulmasi → RICE protokolü uygula, 48 saat izle</li>
              <li>• <strong>Kronik şişme (günler-haftalar):</strong> Overuse yaralanması, tendinit, bursite işaret eder → doktor değerlendirmesi</li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              Spor sonrası diz şişmesi genellikle akut yaralanmaya (travma) veya aşırı kullanıma (overuse) bağlı gelişir. Vücudun doğal tepkisi olarak inflamatuar mediatörler salgılanır ve bölgeye kan akışı artar. Bu hem iyileştirme sürecinin parçasıdır hem de ağrı ve fonksiyon kaybına neden olur.
            </p>
          </section>

          {/* Section 3: Nedenler */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Spor Sonrası Diz Şişmesi Nedenleri</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Akut Travmatik Nedenler</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">🔴</span>
                <span><strong>Ön Çapraz Bağ (ACL) Yaralanması:</strong> Ani duruş, dönme hareketi sonrası "çat" sesi, dizin kayması hissi, hızlı şişme</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">🔴</span>
                <span><strong>Menisküs Yırtığı:</strong> Çömelme veya dönme sırasında kilitlenme, gecikmeli şişme (12-24 saat)</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">🔴</span>
                <span><strong>Yan Bağ Yaralanması (MCL/LCL):</strong> Dışarıdan darbe, yan ağrı, eklem instabilitesi</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">🔴</span>
                <span><strong>Patella Çıkığı:</strong> Dizkapağı kaydı, belirgin deformite, şiddetli ağrı</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">🔴</span>
                <span><strong>Kıkırdak Hasarı:</strong> Ani bükme/çarpma sonrası ağrı ve şişlik</span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Aşırı Kullanım (Overuse) Nedenleri</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2 mt-1">🟠</span>
                <span><strong>Patellofemoral Ağrı Sendromu:</strong> Dizkapağı çevresi ağrı, merdiven inişi zorluğu, hafif şişlik</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2 mt-1">🟠</span>
                <span><strong>Patella Tendiniti (Jumper's Knee):</strong> Sıçrama sporları, dizkapağı altında ağrı ve hassasiyet</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2 mt-1">🟠</span>
                <span><strong>İliotibial Band Sendromu:</strong> Dizin dış yanında ağrı, koşucular ve bisikletçilerde yaygın</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2 mt-1">🟠</span>
                <span><strong>Bursite (Housemaid's Knee):</strong> Dizkapağı önünde yumuşak şişlik, çömelme ağrısı</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2 mt-1">🟠</span>
                <span><strong>Osteoartrit Alevlenmesi:</strong> Aniden artan aktivite sonrası eklem sertliği ve şişlik</span>
              </li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <p className="text-gray-700 mb-2">
                <strong>⚠️ ACİL DOKTOR GEREKTİREN BULGULAR:</strong>
              </p>
              <ul className="space-y-1 text-gray-700">
                <li>• Şiddetli ağrı ve dizi hiç kıpırdatamama</li>
                <li>• Diz şekil bozukluğu (çıkık, kırık şüphesi)</li>
                <li>• 2 saat içinde hızlı şişme (hemarthroz)</li>
                <li>• Ateş, kızarıklık, sıcaklık (enfeksiyon şüphesi)</li>
                <li>• Bacakta duygu/hareket kaybı (sinir/damar hasarı)</li>
                <li>• Dizin tamamen kilitlenmesi (menisküs parçası sıkışması)</li>
              </ul>
            </div>
          </section>

          {/* Section 4: RICE Yöntemi ve Evde Tedavi */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Evde Uygulama: RICE Protokolü</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Hafif-orta düzeyde diz şişmesinde ilk 48-72 saat için altın standart yaklaşım RICE protokolüdür. Bu basit ama etkili yöntem, inflamasyonu azaltır ve iyileşmeyi hızlandırır.
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">R - REST (İstirahat)</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Amaç:</strong> Ek hasarı önlemek, iyileşme sürecini başlatmak.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>✓ Yapın:</strong> İlk 48 saat sporu tamamen bırakın, günlük aktiviteleri sınırlayın</li>
                  <li><strong>✓ Koltuk değneği:</strong> Ağır şişlik varsa yürürken kullanın (yaralı bacağa yük bindirmeyin)</li>
                  <li><strong>✗ Yapmayın:</strong> "Yürüyünce geçer" diye zorlamak - bu iyileşmeyi geciktirir</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">I - ICE (Buz/Soğuk Uygulama)</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Amaç:</strong> İltihabı azaltmak, kan akışını yavaşlatmak, ödemi engellemek.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>✓ Nasıl:</strong> Buz torbasını ince havlu ile sarın, dizin şiş kısmına koyun</li>
                  <li><strong>✓ Süre:</strong> 15-20 dakika uygula, 1 saat ara ver, tekrarla</li>
                  <li><strong>✓ Sıklık:</strong> İlk 48 saat günde 4-6 kez</li>
                  <li><strong>✗ Yapmayın:</strong> Buzı direkt cilde koymak (donma riski), 20 dk'dan uzun (sinir hasarı)</li>
                  <li><strong>💡 İpucu:</strong> Dondurulmuş bezelye paketi esnek buz torbası alternatifi</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">C - COMPRESSION (Kompresyon/Sıkıştırma)</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Amaç:</strong> Şişmeyi sınırlamak, eklem stabilitesini artırmak.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>✓ Araç:</strong> Elastik bandaj (ACE bandı) veya diz desteği/korse</li>
                  <li><strong>✓ Teknik:</strong> Baldır altından başlayıp yukarı doğru sar, %50 overlap</li>
                  <li><strong>✓ Sıkılık:</strong> Orta sıkılıkta - 2 parmak sığabilecek kadar</li>
                  <li><strong>✗ Yapmayın:</strong> Aşırı sıkı sarmak (dolaşım bozulur - ayak morararsa gevşetin!)</li>
                  <li><strong>⏰ Süre:</strong> Gündüz kullan, gece çıkar</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">E - ELEVATION (Yükseltme)</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Amaç:</strong> Yerçekimini kullanarak sıvı drainajını artırmak, ödemi azaltmak.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>✓ Pozisyon:</strong> Bacağı kalp seviyesinin üzerine kaldırın (yatarken altına 2-3 yastık)</li>
                  <li><strong>✓ Süre:</strong> Günde toplam 3-4 saat (özellikle gece)</li>
                  <li><strong>✓ Aktivite:</strong> TV izlerken, kitap okurken bacağı tabureye yükseltin</li>
                  <li><strong>💡 İpucu:</strong> Ayak bileğini kalp seviyesinin ÜZERİNDE tutmak kritik</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ek Evde Tedavi Yöntemleri</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>Antiinflamatuar İlaçlar:</strong> İbuprofen (400-600 mg, 8 saatte bir) veya naproxen mide koruyucu ile birlikte, 5-7 gün. (Mide/böbrek sorunu varsa doktora danışın)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>Gentle Mobilizasyon:</strong> 48 saat sonra ağrısız pasif hareketler (dizin sallanması, topuk kaydırma)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>Kontrast Terapi:</strong> 3. günden sonra: 3 dk sıcak su, 1 dk soğuk su (4-5 döngü)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>Beslenme:</strong> Proteinden zengin diyet (iyileşme için), bol su (dehidrasyon ödemi artırır)</span>
              </li>
            </ul>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">RICE Protokolü Zaman Çizelgesi</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>0-48 saat:</strong> Agresif RICE + NSAİD, tam istirahat, spor yok</p>
                <p><strong>3-7 gün:</strong> RICE devam, hafif pasif hareketler, ağrısız günlük aktivite</p>
                <p><strong>1-2 hafta:</strong> Şişme azaldıysa fizik tedavi egzersizleri, spora kademeli dönüş</p>
                <p><strong>2+ hafta:</strong> Şişme devam ediyorsa → MUTLAKA doktor değerlendirmesi</p>
              </div>
            </div>
          </section>

          {/* Section 5: Sıkça Sorulan Sorular */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Diz şişmesinde buz mu sıcak mı uygulamalıyım?</h3>
                <p className="text-gray-700">
                  <strong>İlk 48-72 saat: BUZ</strong> - İltihabı azaltır, ödemi önler.
                  <strong>72 saat sonra: SICAK veya KONTRAST</strong> - Kan dolaşımını artırır, sertliği azaltır.
                  <strong>Kural:</strong> Akut yaralanma = soğuk, kronik ağrı = sıcak.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Şişmiş dizle yürüyebilir miyim?</h3>
                <p className="text-gray-700">Hafif şişlik ve ağrı yoksa yavaş yürüyüş yapabilirsiniz. Ancak topallama gerektiriyorsa veya ağrı artıyorsa DURUN. Koltuk değneği kullanarak yükü azaltın. İlk 48 saat mümkün olduğunca istirahat edin - "yürüyünce geçer" yaklaşımı hasarı derinleştirebilir.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Diz şişmesi kaç günde geçer?</h3>
                <p className="text-gray-700">
                  Hafif burkulma/çarpma: 3-7 gün
                  Orta düzey strain/kontüzyon: 1-2 hafta
                  Menisküs yırtığı/bağ hasarı: 2-6 hafta (tedavi ile)
                  Ağır yaralanmalar: Aylar sürebilir
                  Eğer 2 hafta RICE uygulamasına rağmen şişlik azalmıyorsa mutlaka doktora başvurun.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Diz şişmesinde hangi ilaçları kullanabilirim?</h3>
                <p className="text-gray-700">
                  <strong>Reçetesiz:</strong> İbuprofen (Advil, Brufen) 400-600 mg, 8 saatte bir veya Naproxen (Apranax) 550 mg, 12 saatte bir. En fazla 5-7 gün.
                  <strong>Topikal:</strong> Diklofenak jel (Voltaren Emulgel) - mide hassasiyeti olanlara uygun.
                  <strong>Yan etki riski:</strong> Mide ülseri, böbrek sorunu, kalp hastası iseniz önce doktora danışın.
                  <strong>Paracetamol:</strong> İltihabı azaltmaz, sadece ağrı keser - şişme için yeterli değil.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ne zaman spora geri dönebilirim?</h3>
                <p className="text-gray-700">
                  Şu kriterleri karşılamalısınız:
                  ✓ Şişlik tamamen geçmiş
                  ✓ İstirahat ve aktivitede ağrı yok
                  ✓ Tam hareket açıklığı (sağlam diz ile aynı)
                  ✓ %90+ kas gücü (bacak presi, squat testleri)
                  ✓ Topallama yok, merdiven rahatça çıkabilme
                  Kademeli dönüş: hafif tempolu koşu → sprint → yön değiştirme → tam temas spor. Acele etmeyin!
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Kaynaklar */}
          <section className="mb-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kaynaklar</h2>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-700">
              <li>
                Bleakley C, et al. "The use of ice in the treatment of acute soft-tissue injury: a systematic review of randomized controlled trials." Am J Sports Med. 2004.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=bleakley+ice+treatment+acute+soft+tissue+injury" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Mirkin G, Hoffman M. "The Sports Medicine Book." Little, Brown and Company. 1978. (RICE protokolünün orijinal kaynağı)
              </li>
              <li>
                van den Bekerom MP, et al. "What is the evidence for rest, ice, compression, and elevation therapy in the treatment of ankle sprains in adults?" J Athl Train. 2012.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=bekerom+rest+ice+compression+elevation+ankle+sprains" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Rosenthal MD, et al. "Evaluation and management of posterior cruciate ligament injuries." Am Fam Physician. 2012.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=rosenthal+evaluation+management+knee+injuries" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
            </ol>
          </section>

          {/* Section 7: Internal Link - ZORUNLU! */}
          <section className="mb-12">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-gray-700">
                <strong>İlgili İçerik:</strong> Diz yaralanmaları için ameliyatsız tedavi seçenekleri hakkında daha fazla bilgi almak isterseniz{' '}
                <Link 
                  href="/ameliyatsiz-cozumler" 
                  className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
                >
                  ameliyatsız çözümler sayfamızı
                </Link>{' '}
                ziyaret edebilirsiniz.
              </p>
            </div>
          </section>

          {/* Sonuç */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sonuç</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Spor sonrası diz şişmesi, hafif vakalarda evde RICE protokolü ile başarıyla yönetilebilir. Ancak zamanlama ve şiddet değerlendirmesi kritiktir. İlk 2 saat içinde hızlı şişme, şiddetli ağrı, şekil bozukluğu varsa acil doktor değerlendirmesi gerekir.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Unutmayın: Şişlik vücudun koruyucu bir tepkisidir, ancak kronikleşmesine izin vermemek önemlidir. İki haftalık evde tedaviye rağmen düzelme yoksa, bir ortopedi ve travmatoloji uzmanına başvurun. Erken ve doğru tanı, uzun dönemli komplikasyonları önler ve spora güvenli dönüşünüzü sağlar.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-center text-white mt-12">
          <h2 className="text-2xl font-bold mb-4">Diz Şişmeniz Geçmiyor mu?</h2>
          <p className="mb-6">Uzman değerlendirmesi ve tedavi için randevu alın.</p>
          <Link 
            href="/iletisim" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Hemen Randevu Al
          </Link>
        </div>
      </article>
    </>
  );
}
