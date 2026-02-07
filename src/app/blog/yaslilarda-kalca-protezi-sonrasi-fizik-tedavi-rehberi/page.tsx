import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Yaşlılarda Kalça Protezi Sonrası Fizik Tedavi Rehberi: Güvenli İyileşme',
  description: 'Yaşlılarda kalça protezi ameliyatı sonrası fizik tedavi programı, egzersizler ve güvenli iyileşme süreci. Adım adım rehabilitasyon rehberi.',
  keywords: 'yaşlılarda kalça protezi, geriatrik kalça protezi, kalça protezi fizik tedavi, total hip replacement elderly, kalça protezi egzersizleri',
  openGraph: {
    title: 'Yaşlılarda Kalça Protezi Sonrası Fizik Tedavi Rehberi',
    description: 'Geriatrik hastalarda kalça protezi rehabilitasyon programı ve güvenli iyileşme.',
    type: 'article',
    locale: 'tr_TR',
    siteName: 'Op. Dr. Özgür Oktay Nar',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yaşlılarda Kalça Protezi Sonrası Fizik Tedavi',
    description: 'Güvenli iyileşme ve rehabilitasyon rehberi.',
  },
  alternates: {
    canonical: 'https://www.drozguroktaynar.com/blog/yaslilarda-kalca-protezi-sonrasi-fizik-tedavi-rehberi',
  },
};

export default function YaslilardaKalcaProteziPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: 'Yaşlılarda Kalça Protezi Sonrası Fizik Tedavi Rehberi: Güvenli İyileşme',
    description: 'Geriatrik hastalarda total kalça protezi sonrası fizik tedavi programı, egzersizler ve güvenli mobilizasyon stratejileri.',
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
      '@type': 'MedicalProcedure',
      name: 'Total Kalça Protezi (Geriatrik)',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-50 via-white to-rose-50 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 bg-rose-100 text-rose-800 rounded-full text-sm font-semibold mb-4">
              Geriatrik Ortopedi
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Yaşlılarda Kalça Protezi Sonrası Fizik Tedavi Rehberi: Güvenli İyileşme
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              65 yaş üstü hastalarda total kalça protezi sonrası özel fizik tedavi programı, güvenlik önlemleri ve başarılı iyileşme stratejileri.
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
            <span>Op. Dr. Özgür Oktay Nar</span>
            <span>•</span>
            <time dateTime="2026-02-06">6 Şubat 2026</time>
            <span>•</span>
            <span>10 dakika okuma</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="container mx-auto px-4 max-w-4xl py-12">
        {/* Section 1: Giriş */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Yaşlılarda Kalça Protezi: Özel Yaklaşım Gerekliliği</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Total kalça artroplastisi (kalça protezi)</strong>, ileri yaştaki hastalarda yaşam kalitesini dramatik şekilde artıran başarılı bir cerrahi prosedürdür. Ancak, 65 yaş üzeri geriatrik popülasyonda bazı özel hususlar ve riskler göz önünde bulundurulmalıdır.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Yaşlı hastalarda ameliyat sonrası fizik tedavi ve rehabilitasyon programı, genç hastalara göre daha dikkatli planlanmalıdır: düşme riski, kemik kalitesi, eşlik eden hastalıklar (komorbidite), bilişsel durum ve sosyal destek faktörleri önemlidir.
          </p>

          <div className="bg-rose-50 border-l-4 border-rose-500 p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">👵 Geriatrik Hastalarda Özel Durumlar</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• <strong>Osteoporoz:</strong> Kemik kırılganlığı, çıkık riski</li>
              <li>• <strong>Kas kaybı (sarkopeni):</strong> Güç ve denge azalması</li>
              <li>• <strong>Komorbidite:</strong> Kalp, diyabet, böbrek hastalıkları</li>
              <li>• <strong>Polifarmasi:</strong> Çoklu ilaç kullanımı, etkileşim riski</li>
              <li>• <strong>Bilişsel bozukluk:</strong> Talimat takibi zorluğu</li>
              <li>• <strong>Düşme riski:</strong> Denge ve koordinasyon problemleri</li>
              <li>• <strong>Sosyal izolasyon:</strong> Evde tek yaşama, destek eksikliği</li>
            </ul>
          </div>
        </section>

        {/* Section 2: Ameliyat Öncesi Hazırlık */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ameliyat Öncesi Hazırlık (Prehabilitation)</h2>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Prehabilitation</strong>, ameliyat öncesi fiziksel ve mental hazırlık sürecidir. Yaşlı hastalarda bu aşama ameliyat sonrası başarıyı önemli ölçüde etkiler:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">💪 Fiziksel Hazırlık</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Kas güçlendirme (core, kalça, bacak)</li>
                <li>• Denge egzersizleri</li>
                <li>• Kardiyovasküler dayanıklılık</li>
                <li>• Hareket açıklığı çalışmaları</li>
                <li>• Yardımcı cihaz eğitimi (walker, koltuk değneği)</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">🧠 Mental ve Sosyal Hazırlık</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Ameliyat süreci eğitimi</li>
                <li>• Beklenti yönetimi</li>
                <li>• Ev ortamı düzenlemesi</li>
                <li>• Bakım desteği planlaması</li>
                <li>• Beslenme optimizasyonu</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Ameliyat Sonrası İlk Günler */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ameliyat Sonrası İlk 1-3 Gün (Hastanede)</h2>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Erken Mobilizasyon</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Modern yaklaşımlar, ameliyat sonrası mümkün olan en kısa sürede (genellikle ameliyat günü veya ertesi gün) mobilizasyonu önerir. Ancak yaşlı hastalarda dikkatli ilerleme gereklidir:
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">📋 İlk Mobilizasyon Adımları</h4>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h5 className="font-semibold text-gray-800">1. Yatak İçi Egzersizler (Ameliyat Sonrası 2-6 Saat)</h5>
                <ul className="text-gray-700 text-sm space-y-1 mt-2">
                  <li>• Ayak bileği pompası (her saat 10 tekrar)</li>
                  <li>• Quadriceps kasılma (diz düzleştirme, 5 sn tutma)</li>
                  <li>• Gluteal kasılma (kalça sıkma)</li>
                  <li>• Derin nefes egzersizleri (akciğer komplikasyonu önleme)</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h5 className="font-semibold text-gray-800">2. Yatak Kenarında Oturma (6-12 Saat Sonra)</h5>
                <ul className="text-gray-700 text-sm space-y-1 mt-2">
                  <li>• Hemşire veya fizyoterapist gözetiminde</li>
                  <li>• Ameliyat edilmemiş bacak ile yardım</li>
                  <li>• 90° kalça bükülmesini aşmayın</li>
                  <li>• Baş dönmesi yoksa 2-5 dk oturun</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h5 className="font-semibold text-gray-800">3. İlk Ayağa Kalkma (12-24 Saat Sonra)</h5>
                <ul className="text-gray-700 text-sm space-y-1 mt-2">
                  <li>• Walker (yürüteç) veya koltuk değneği kullanarak</li>
                  <li>• İki personel desteği (düşme önleme)</li>
                  <li>• Ameliyat olan bacağa kısmi yük (tolere edildiğince)</li>
                  <li>• 2-5 metre, çok yavaş tempo</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">🚫 Kalça Çıkığı Önleme: HIP PRECAUTIONS</h3>
            <p className="text-gray-700 mb-3">
              Ameliyat sonrası ilk 6-12 hafta boyunca kalça çıkığını önlemek için <strong>3 Altın Kural</strong> takip edilmelidir:
            </p>
            <ol className="text-gray-700 space-y-2">
              <li><strong>1. Aşırı Bükülme Yasak ({'>'}90°):</strong> Kalçayı diz seviyesinden yukarı kaldırmayın</li>
              <li><strong>2. İçe Dönme Yasak (Adduction):</strong> Bacakları çaprazlama, orta çizgiyi geçmeyin</li>
              <li><strong>3. İçe Rotasyon Yasak:</strong> Ayak parmağını içe döndürmeyin</li>
            </ol>
          </div>
        </section>

        {/* Section 4: Ev Dönem Egzersizleri */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Taburculuk Sonrası: Ev Dönem Egzersiz Programı</h2>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Hafta 1-2: Temel Egzersizler</h3>
          
          <div className="space-y-6 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">🛏️ Yatarak Yapılan Egzersizler</h4>
              <ul className="text-gray-700 space-y-3">
                <li>
                  <strong>1. Ayak Bileği Pompası</strong><br/>
                  <span className="text-sm">• Ayak bileklerini yukarı-aşağı hareket ettirin<br/>
                  • 3 set x 10 tekrar (günde 3 kez)</span>
                </li>
                <li>
                  <strong>2. Quadriceps Kasılma</strong><br/>
                  <span className="text-sm">• Dizinizi düzleştirin, 5 saniye tutun<br/>
                  • 3 set x 10 tekrar</span>
                </li>
                <li>
                  <strong>3. Gluteal Kasılma</strong><br/>
                  <span className="text-sm">• Kalça kaslarını sıkın, 5 saniye tutun<br/>
                  • 3 set x 10 tekrar</span>
                </li>
                <li>
                  <strong>4. Bacak Kaldırma (Straight Leg Raise)</strong><br/>
                  <span className="text-sm">• Sırtüstü yatın, dizi düz tutarak bacağı 30-45° kaldırın<br/>
                  • 3 sn tutun, yavaşça indirin<br/>
                  • 2 set x 10 tekrar</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">🧍 Ayakta Yapılan Egzersizler</h4>
              <ul className="text-gray-700 space-y-3">
                <li>
                  <strong>1. Destek ile Bacak Kaldırma (Yan)</strong><br/>
                  <span className="text-sm">• Tezgaha tutunun, ameliyat olan bacağı yana açın<br/>
                  • 30-45°, 2 sn tutun<br/>
                  • 2 set x 10 tekrar</span>
                </li>
                <li>
                  <strong>2. Destek ile Bacak Geriye (Extension)</strong><br/>
                  <span className="text-sm">• Dizi düz tutarak bacağı arkaya kaldırın<br/>
                  • 2 sn tutun<br/>
                  • 2 set x 10 tekrar</span>
                </li>
                <li>
                  <strong>3. Denge Egzersizi (İleri Seviye)</strong><br/>
                  <span className="text-sm">• Destek ile sağlam bacak üzerinde durma<br/>
                  • 10 sn, kademeli artış<br/>
                  • Günde 2-3 kez</span>
                </li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Hafta 3-6: İleri Egzersizler</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            İlk 2 haftayı başarıyla tamamladıktan sonra, kademeli olarak egzersiz yoğunluğu artırılır:
          </p>

          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Mini squat:</strong> Hafif diz bükme (sandalyeye oturur gibi, 45° max)</li>
            <li><strong>Topuk kaldırma:</strong> Parmak uçlarında yükselme (destek ile)</li>
            <li><strong>Step-up:</strong> Düşük basamak çıkma (10-15 cm, destek ile)</li>
            <li><strong>Stationary bike:</strong> Sabit bisiklet (düşük direnç, 10-15 dk)</li>
            <li><strong>Direnç bantları:</strong> Elastik bant ile güçlendirme</li>
          </ul>
        </section>

        {/* Section 5: Güvenlik Önlemleri */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Yaşlı Hastalarda Özel Güvenlik Önlemleri</h2>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Düşme Önleme Stratejileri</h3>
          
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">🏠 Ev Ortamı Düzenlemesi</h4>
            <ul className="text-gray-700 space-y-2">
              <li>✅ <strong>Yatak odası:</strong> Yüksek yatak (diz hizasında), yatak kenarı tutamak, gece lambası</li>
              <li>✅ <strong>Banyo:</strong> Tutunaklı duş, kaymaz mat, tuvalet yükselticisi, duş sandalyesi</li>
              <li>✅ <strong>Oturma alanı:</strong> Yüksek kollu sandalye (kalkmayı kolaylaştırır)</li>
              <li>✅ <strong>Genel:</strong> Halıları kaldırın, kablоları düzenleyin, iyi aydınlatma, korkuluklar</li>
              <li>❌ <strong>Kaldırılacaklar:</strong> Kaygan paspaslar, basamak eşikleri, dağınıklık</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Yardımcı Cihaz Kullanımı</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">🦽 Mobilite Cihazları</h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li><strong>Walker (Yürüteç):</strong> İlk 2-4 hafta, en güvenli</li>
                <li><strong>Koltuk değneği:</strong> 4-8 hafta, tek veya çift</li>
                <li><strong>Baston:</strong> 8+ hafta, gerekirse</li>
                <li><em>Not: Cihaz türü ve süre cerrahın kararı ile</em></li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">🛠️ Günlük Yaşam Ekipmanları</h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li><strong>Uzun saplı ayakkabı çekeceği:</strong> Eğilmeden ayakkabı giyme</li>
                <li><strong>Çorap giyme aparatı:</strong> Eğilme gerektirmeyen</li>
                <li><strong>Uzatma kolu (reacher):</strong> Yere düşenleri alma</li>
                <li><strong>Yüksek tuvalet oturağı:</strong> 90° bükülme önleme</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6: Aktivite İlerlemesi */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Aktivite İlerlemesi ve Yaşam Tarzı</h2>
          
          <div className="bg-green-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">📅 İyileşme Takvimi (Yaşlı Hastalarda)</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800">Hafta 1-2: Bağımlılık Fazı</h4>
                <p className="text-gray-700 text-sm">Walker ile yürüme, kısa mesafeler, sürekli destek gerekebilir</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800">Hafta 3-6: Geçiş Fazı</h4>
                <p className="text-gray-700 text-sm">Koltuk değneğine geçiş, artan mesafe, temel günlük aktiviteler</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800">Hafta 7-12: Fonksiyon Kazanımı</h4>
                <p className="text-gray-700 text-sm">Bastonsuz yürüme (bazı hastalar), sosyal aktivite artışı, alışveriş</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800">3-6 Ay: Stabilizasyon</h4>
                <p className="text-gray-700 text-sm">Maksimum fonksiyonel kapasite, uzun yürüyüş, seyahat, hobi</p>
              </div>

              <div className="bg-white p-4 rounded mt-4">
                <p className="text-gray-700 text-sm">
                  ⚠️ <strong>Not:</strong> Bu süreler genel kılavuzdur. Yaşlı hastalarda bireysel varyasyon fazladır. Bazı hastalar daha yavaş ilerler ve bu normaldir.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">İzin Verilen ve Sakıncalı Aktiviteler</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">✅ Önerilen Aktiviteler</h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Yürüyüş (düz zemin, kademeli artış)</li>
                <li>• Sabit bisiklet</li>
                <li>• Yüzme (6-8 hafta sonra, cerrah onayı ile)</li>
                <li>• Golf (3-4 ay sonra)</li>
                <li>• Dans (düşük etkili, 4-6 ay sonra)</li>
                <li>• Bahçe işleri (hafif, eğilmeden)</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">❌ Kaçınılması Gereken Aktiviteler</h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Koşma, zıplama</li>
                <li>• Yüksek etkili aerobik</li>
                <li>• Temas sporları</li>
                <li>• Derin çömelme</li>
                <li>• Ağır kaldırma ({'>'}10-15 kg)</li>
                <li>• Bacakları çaprazlama oturma</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 7: Komplikasyon İşaretleri */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Komplikasyon İşaretleri ve Ne Zaman Doktor?</h2>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">🚨 Acil Doktor Görüşü Gereken Durumlar</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• <strong>Çıkık şüphesi:</strong> Ani şiddetli ağrı, bacak kısalığı, anormal pozisyon, hareket edememe</li>
              <li>• <strong>Enfeksiyon:</strong> Ateş ({'>'}38°C), yara bölgesinde kızarıklık, şişlik, akıntı, kötü koku</li>
              <li>• <strong>Derin ven trombozu (DVT):</strong> Bacakta şişlik, ısı artışı, ağrı, ciltte renk değişimi</li>
              <li>• <strong>Pulmoner emboli:</strong> Ani nefes darlığı, göğüs ağrısı, hızlı kalp atışı</li>
              <li>• <strong>Kırık:</strong> Ameliyat bölgesinde çatırtı, anormal hareket</li>
            </ul>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">⚠️ Rutin Kontrol Gerektiren Durumlar</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Beklenen iyileşme hızında yavaşlama</li>
              <li>• Artan ağrı (ağrı kesicilere rağmen azalmıyor)</li>
              <li>• Yara iyileşmesi gecikmesi</li>
              <li>• Fonksiyonel gerilik (beklenen aktiviteyi yapamama)</li>
              <li>• Depresyon belirtileri (uyku bozukluğu, iştahsızlık, sosyal izolasyon)</li>
            </ul>
          </div>
        </section>

        {/* Section 8: Uzun Dönem */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Uzun Dönem Protez Bakımı ve Yaşam Kalitesi</h2>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Protezin Ömrünü Uzatma</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Modern kalça protezleri 20-25 yıl veya daha uzun ömürlüdür. Protezin uzun ömürlü olması için:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>İdeal kiloda kalma:</strong> Her fazla kilo proteze ekstra yük</li>
            <li><strong>Düzenli egzersiz:</strong> Kasları güçlü tutma, haftada 3-5 gün yürüyüş</li>
            <li><strong>Aşırı etkiden kaçınma:</strong> Yüksek etkili sporlar yapmama</li>
            <li><strong>Düşme önleme:</strong> Yaşam boyu düşme riski minimize etme</li>
            <li><strong>Düzenli kontroller:</strong> Yıllık ortopedi kontrolü (X-ray ile)</li>
            <li><strong>Diş tedavisi öncesi antibiyotik:</strong> Protez enfeksiyonu riskini azaltma</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Yaşam Kalitesi Optimizasyonu</h3>
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">💡 Başarılı Yaşlanma Stratejileri</h4>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Sosyal aktivite:</strong> İzolasyondan kaçının, arkadaş grupları, hobi kulüpleri</li>
              <li><strong>Mental sağlık:</strong> Kognitif aktiviteler (okuma, bulmaca, yeni beceri öğrenme)</li>
              <li><strong>Beslenme:</strong> Yüksek protein, kalsiyum, D vitamini, dengeli diyet</li>
              <li><strong>Hidrasyon:</strong> Günde 1.5-2 L su</li>
              <li><strong>Uyku hijyeni:</strong> Düzenli uyku saatleri, 7-8 saat kaliteli uyku</li>
              <li><strong>Kronik hastalık yönetimi:</strong> Diyabet, hipertansiyon kontrolü</li>
            </ul>
          </div>
        </section>

        {/* Section 9: Sonuç ve Kaynaklar */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Sonuç</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Yaşlı hastalarda kalça protezi ameliyatı, doğru uygulandığında ve uygun rehabilitasyon programı ile desteklendiğinde, yaşam kalitesini önemli ölçüde artıran başarılı bir tedavidir. Geriatrik popülasyonda özel güvenlik önlemleri, düşme riski azaltma ve bireyselleştirilmiş egzersiz programı kritiktir.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Sabırlı, sistematik ve güvenli ilerleme ile yaşlı hastalar bağımsızlıklarını geri kazanabilir ve aktif bir yaşam sürdürebilir. Multidisipliner yaklaşım (cerrah, fizyoterapist, hemşire, aile desteği) başarının anahtarıdır.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Kaynaklar ve İleri Okuma</h3>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2">
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=geriatric+hip+arthroplasty+rehabilitation" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Geriatrik Kalça Protezi Rehabilitasyon - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=elderly+hip+replacement+outcomes" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Yaşlılarda Kalça Protezi Sonuçları - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=fall+prevention+hip+arthroplasty" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Kalça Protezi Sonrası Düşme Önleme - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=hip+precautions+arthroplasty" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Kalça Protezi Önlemleri (Hip Precautions) - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=prehabilitation+hip+surgery+elderly" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Yaşlılarda Kalça Cerrahisi Öncesi Hazırlık - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=early+mobilization+hip+arthroplasty" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Kalça Protezi Erken Mobilizasyon - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=home+environment+modification+hip+surgery" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Kalça Cerrahisi Ev Ortamı Düzenleme - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=quality+of+life+elderly+hip+replacement" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Yaşlılarda Kalça Protezi Yaşam Kalitesi - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=dislocation+prevention+hip+arthroplasty" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Kalça Protezi Çıkık Önleme - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=assistive+devices+hip+arthroplasty" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Kalça Protezi Yardımcı Cihazlar - PubMed Ara
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
        <section className="bg-gradient-to-r from-rose-600 to-rose-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Kalça Protezi Hakkında Bilgi Alın</h2>
          <p className="text-xl mb-8 text-rose-100">
            Yaşlılarda kalça protezi uygunluğu, ameliyat süreci ve rehabilitasyon programı için uzman değerlendirmesi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/iletisim"
              className="inline-block bg-white text-rose-600 px-8 py-4 rounded-lg font-semibold hover:bg-rose-50 transition-colors"
            >
              Randevu Al
            </Link>
            <Link
              href="/tedaviler/kalca-protezi"
              className="inline-block bg-rose-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-rose-600 transition-colors border-2 border-rose-500"
            >
              Kalça Protezi Hakkında
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
