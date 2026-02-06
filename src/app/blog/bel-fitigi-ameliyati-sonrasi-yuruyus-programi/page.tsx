import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bel Fıtığı Ameliyatı Sonrası Yürüyüş Programı: Güvenli İyileşme Rehberi',
  description: 'Bel fıtığı ameliyatı sonrası yürüyüş ne zaman başlanır, nasıl yapılır? Mikrodiskektomi sonrası haftalık egzersiz ve mobilizasyon programı.',
  keywords: 'bel fıtığı ameliyatı, mikrodiskektomi sonrası, bel fıtığı yürüyüş, ameliyat sonrası rehabilitasyon, lomber disk hernisi',
  openGraph: {
    title: 'Bel Fıtığı Ameliyatı Sonrası Yürüyüş Programı | Güvenli İyileşme',
    description: 'Mikrodiskektomi sonrası yürüyüş ve mobilizasyon rehberi. Hafta hafta egzersiz programı.',
    type: 'article',
    locale: 'tr_TR',
    siteName: 'Op. Dr. Özgür Oktay Nar',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bel Fıtığı Ameliyatı Sonrası Yürüyüş Programı',
    description: 'Güvenli iyileşme ve rehabilitasyon rehberi.',
  },
  alternates: {
    canonical: 'https://www.drozguroktaynar.com/blog/bel-fitigi-ameliyati-sonrasi-yuruyus-programi',
  },
};

export default function BelFitigiAmeliyatSonrasiYuruyusPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: 'Bel Fıtığı Ameliyatı Sonrası Yürüyüş Programı: Güvenli İyileşme Rehberi',
    description: 'Lomber disk hernisi (bel fıtığı) ameliyatı sonrası yürüyüş programı, egzersiz planı ve güvenli mobilizasyon rehberi.',
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
      name: 'Mikrodiskektomi (Bel Fıtığı Ameliyatı)',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-50 via-white to-cyan-50 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full text-sm font-semibold mb-4">
              Ameliyat Sonrası Bakım
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Bel Fıtığı Ameliyatı Sonrası Yürüyüş Programı: Güvenli İyileşme Rehberi
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Mikrodiskektomi sonrası güvenli yürüyüş, egzersiz ve günlük aktivitelere dönüş planı. Hafta hafta iyileşme takvimi.
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
            <span>Op. Dr. Özgür Oktay Nar</span>
            <span>•</span>
            <time dateTime="2026-02-06">6 Şubat 2026</time>
            <span>•</span>
            <span>9 dakika okuma</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="container mx-auto px-4 max-w-4xl py-12">
        {/* Section 1: Giriş */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Bel Fıtığı Ameliyatı Sonrası İyileşme Süreci</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Mikrodiskektomi</strong> (veya endoskopik diskektomi), lomber disk hernisi (bel fıtığı) tedavisinde altın standart cerrahi yöntemdir. Ameliyat, sinire bası yapan disk parçasının çıkarılmasını içerir ve genellikle minimal invaziv tekniklerle gerçekleştirilir.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ameliyat sonrası iyileşme süreci, erken mobilizasyon ve kademeli aktivite artışı ile başarılı sonuçlar sağlar. <strong>Yürüyüş</strong>, iyileşmenin en önemli bileşenlerinden biridir: kan dolaşımını artırır, kas atrofisini önler ve psikolojik iyiliği destekler.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">⏱️ Genel İyileşme Takvimi</h3>
            <ul className="text-gray-700 space-y-1">
              <li>• <strong>Hastanede kalış:</strong> Genellikle 1-2 gün (bazen gün içinde taburcu)</li>
              <li>• <strong>Yürümeye başlama:</strong> Ameliyat sonrası 2-4 saat içinde</li>
              <li>• <strong>Günlük aktiviteler:</strong> 1-2 hafta</li>
              <li>• <strong>Hafif işe dönüş:</strong> 2-4 hafta</li>
              <li>• <strong>Ağır işe dönüş:</strong> 6-12 hafta</li>
              <li>• <strong>Spor aktivitesi:</strong> 3-6 ay (cerrahın onayı ile)</li>
            </ul>
          </div>
        </section>

        {/* Section 2: İlk 24 Saat */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ameliyat Sonrası İlk 24 Saat</h2>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Erken Mobilizasyon</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Modern cerrahi yaklaşımlar, ameliyat sonrası mümkün olan en kısa sürede (genellikle 2-4 saat içinde) yürümeyi önerir. Erken mobilizasyonun faydaları:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Kan pıhtısı (DVT) riskini azaltır</li>
            <li>Bağırsak hareketlerini normalleştirir</li>
            <li>Akciğer komplikasyonlarını önler</li>
            <li>Kas güçsüzlüğünü minimize eder</li>
            <li>Psikolojik iyiliği artırır</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">✅ İlk Yürüyüş Nasıl Yapılır?</h4>
            <ol className="text-gray-700 space-y-2">
              <li><strong>1. Yataktan kalkma tekniği:</strong> Yan dönün, bacaklarınızı yavaşça yere indirin, kollarınızla destek alarak oturun. Aniden doğrulmayın.</li>
              <li><strong>2. Oturma:</strong> Yatağın kenarında 1-2 dakika oturun, baş dönmesi yoksa ayağa kalkın.</li>
              <li><strong>3. İlk adımlar:</strong> Hemşire veya refakatçi desteği ile, yavaş ve kısa mesafe (5-10 metre).</li>
              <li><strong>4. Duruş:</strong> Dik duruş, sırtınızı aşırı öne eğmeyin veya arkaya doğru bükmüyin.</li>
              <li><strong>5. Sıklık:</strong> İlk 24 saatte 3-4 kez, her seferinde biraz daha uzun.</li>
            </ol>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">⚠️ İlk 24 Saatte KAÇININ</h4>
            <ul className="text-gray-700 space-y-1">
              <li>❌ Öne eğilme, bükülme</li>
              <li>❌ Dönme, burkulma hareketleri</li>
              <li>❌ Ağır kaldırma (>2-3 kg)</li>
              <li>❌ Uzun süre oturma (>15-20 dk)</li>
              <li>❌ Merdiven inme-çıkma (gerekli değilse)</li>
            </ul>
          </div>
        </section>

        {/* Section 3: Haftalık Program */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Hafta Hafta Yürüyüş ve Egzersiz Programı</h2>
          
          <div className="space-y-8">
            {/* Hafta 1 */}
            <div className="bg-white border-2 border-cyan-200 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-cyan-800 mb-4">📅 Hafta 1: Taburculuk ve Ev Aktiviteleri</h3>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Yürüyüş Programı</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <strong>Sıklık:</strong> Günde 4-6 kez</li>
                  <li>• <strong>Süre:</strong> Her seansta 5-10 dakika</li>
                  <li>• <strong>Mesafe:</strong> Ev içi, kısa mesafeler (50-100 metre)</li>
                  <li>• <strong>Tempo:</strong> Yavaş, rahat tempo</li>
                  <li>• <strong>Zemin:</strong> Düz, sert zemin (halı veya parke)</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Günlük Aktiviteler</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>✅ Kişisel hijyen (duş almak - oturarak veya destek ile)</li>
                  <li>✅ Hafif yemek hazırlama</li>
                  <li>✅ Kısa TV izleme (20-30 dk, sonra kalkıp yürüyün)</li>
                  <li>❌ Uzun süre oturma</li>
                  <li>❌ Araba kullanma</li>
                  <li>❌ Ev işleri (süpürme, silme)</li>
                </ul>
              </div>

              <div className="bg-cyan-50 p-4 rounded">
                <h4 className="font-semibold text-gray-800 mb-2">💡 Önemli Notlar</h4>
                <p className="text-gray-700 text-sm">
                  Ağrı normal (ameliyat bölgesinde hafif-orta ağrı beklenir). Ağrı kesici kullanın. Bacak ağrısı önemli ölçüde azalmış olmalı. Artan bacak ağrısı veya yeni uyuşma → doktorunuzu arayın.
                </p>
              </div>
            </div>

            {/* Hafta 2 */}
            <div className="bg-white border-2 border-cyan-200 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-cyan-800 mb-4">📅 Hafta 2: Mesafe Artışı</h3>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Yürüyüş Programı</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <strong>Sıklık:</strong> Günde 3-4 kez</li>
                  <li>• <strong>Süre:</strong> 10-15 dakika</li>
                  <li>• <strong>Mesafe:</strong> 200-500 metre, kademeli artış</li>
                  <li>• <strong>Tempo:</strong> Orta tempo, rahat nefes alabilme</li>
                  <li>• <strong>Zemin:</strong> Düz, açık alan (park, kaldırım)</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Basit Egzersizler (Fizik tedavi onayı ile)</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Ayak bileği pompası (damar dolaşımı için)</li>
                  <li>• Quadriceps kasılma (diz düzleştirme)</li>
                  <li>• Gluteal kasılma (kalça sıkıştırma)</li>
                  <li>• Sırtüstü yatarak diz göğse (tek bacak, hafif germe)</li>
                </ul>
              </div>

              <div className="bg-cyan-50 p-4 rounded">
                <h4 className="font-semibold text-gray-800 mb-2">📋 Kontrol Randevusu</h4>
                <p className="text-gray-700 text-sm">
                  Genellikle 10-14. günde cerrahınız ile kontrol. Yara iyileşmesi değerlendirilir, dikiş alınabilir (emilmeyen dikiş kullanıldıysa).
                </p>
              </div>
            </div>

            {/* Hafta 3-4 */}
            <div className="bg-white border-2 border-cyan-200 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-cyan-800 mb-4">📅 Hafta 3-4: Aktif Yaşama Geçiş</h3>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Yürüyüş Programı</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <strong>Sıklık:</strong> Günde 2-3 kez</li>
                  <li>• <strong>Süre:</strong> 20-30 dakika</li>
                  <li>• <strong>Mesafe:</strong> 1-2 km</li>
                  <li>• <strong>Tempo:</strong> Orta-hızlı tempo</li>
                  <li>• <strong>Zemin:</strong> Düz, hafif engebeli yollar (dikkat ile)</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Günlük Aktiviteler</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>✅ Araba kullanma (kısa mesafe, 30 dk max)</li>
                  <li>✅ Hafif ev işleri (bulaşık, hafif temizlik)</li>
                  <li>✅ Alışveriş (hafif çanta taşıma, <5 kg)</li>
                  <li>✅ Ofis işi/masa başı çalışma (sık molalarla)</li>
                  <li>❌ Ağır kaldırma (>5-10 kg)</li>
                  <li>❌ Spor aktiviteleri</li>
                </ul>
              </div>

              <div className="bg-cyan-50 p-4 rounded">
                <h4 className="font-semibold text-gray-800 mb-2">🏋️ Fizik Tedavi Programı</h4>
                <p className="text-gray-700 text-sm">
                  Bu dönemde fizik tedavi uzmanı ile çalışmaya başlayın: core stabilizasyon, bel kasları güçlendirme, esneme egzersizleri.
                </p>
              </div>
            </div>

            {/* Hafta 5-8 */}
            <div className="bg-white border-2 border-cyan-200 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-cyan-800 mb-4">📅 Hafta 5-8: Güçlendirme Fazı</h3>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Yürüyüş Programı</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <strong>Sıklık:</strong> Günde 1-2 kez</li>
                  <li>• <strong>Süre:</strong> 30-45 dakika</li>
                  <li>• <strong>Mesafe:</strong> 3-5 km</li>
                  <li>• <strong>Tempo:</strong> Hızlı tempo, hafif terlet</li>
                  <li>• <strong>Zemin:</strong> Engebeli parkur, eğimli yollar (dikkatli)</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">İleri Egzersizler</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Plank (core stabilizasyon)</li>
                  <li>• Köprü egzersizi (gluteal güçlendirme)</li>
                  <li>• Kedi-inek pozu (bel esnekliği)</li>
                  <li>• Duvar squat (bacak güçlendirme)</li>
                  <li>• Yüzme (cerrah onayı ile)</li>
                </ul>
              </div>

              <div className="bg-cyan-50 p-4 rounded">
                <h4 className="font-semibold text-gray-800 mb-2">💼 İşe Dönüş</h4>
                <p className="text-gray-700 text-sm">
                  Masa başı işler: 4-6 hafta | Orta ağırlıkta fiziksel iş: 6-8 hafta | Ağır fiziksel iş: 12 hafta
                </p>
              </div>
            </div>

            {/* Hafta 9-12 */}
            <div className="bg-white border-2 border-cyan-200 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-cyan-800 mb-4">📅 Hafta 9-12: Spora Hazırlık</h3>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Aktivite Programı</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Hızlı yürüyüş / power walking (45-60 dk)</li>
                  <li>• Hafif jogging (kısa intervallerle)</li>
                  <li>• Bisiklet (düz yol, 30-45 dk)</li>
                  <li>• Yüzme (sırtüstü, kurbağalama)</li>
                  <li>• Yoga/pilates (bel dostu hareketler)</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Kuvvet Antrenmanı</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Progresif direnç egzersizleri</li>
                  <li>• Vücut ağırlığı ile çalışma</li>
                  <li>• Hafif ağırlık kaldırma (proper form)</li>
                  <li>• Functional training</li>
                </ul>
              </div>

              <div className="bg-cyan-50 p-4 rounded">
                <h4 className="font-semibold text-gray-800 mb-2">🏃 Spora Dönüş</h3>
                <p className="text-gray-700 text-sm">
                  Düşük etkili sporlar (yüzme, bisiklet): 3 ay | Orta etkili sporlar (tenis, golf): 4-6 ay | Yüksek etkili sporlar (futbol, basketbol): 6+ ay - Cerrah onayı ZORUNLU
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Uyarı İşaretleri */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Uyarı İşaretleri: Ne Zaman Doktora?</h2>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">🚨 Acil Doktor Görüşü Gereken Durumlar</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• <strong>Artan bacak ağrısı:</strong> Ameliyat öncesindeki şiddetinde veya daha kötü</li>
              <li>• <strong>Yeni uyuşma veya güçsüzlük:</strong> Ayak düşüklüğü, bacak kaldıramama</li>
              <li>• <strong>Bağırsak/mesane kontrolü kaybı:</strong> İdrar tutamama, dışkı inkontinansı</li>
              <li>• <strong>Yara enfeksiyonu:</strong> Kızarıklık, şişlik, akıntı, ateş (>38°C)</li>
              <li>• <strong>Ciddi sırt ağrısı:</strong> Ağrı kesicilere rağmen kontrol edilemeyen</li>
              <li>• <strong>Bacak şişliği:</strong> Bir bacak diğerinden belirgin kalın, sıcak, ağrılı (DVT şüphesi)</li>
            </ul>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">⚠️ Rutin Kontrol Gerektiren Durumlar</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Hafif-orta sırt ağrısı 2-3 haftadan uzun sürerse</li>
              <li>• Beklenen iyileşme hızında yavaşlama</li>
              <li>• Egzersizlerde ilerleme yapamama</li>
              <li>• Genel halsizlik, yorgunluk devam ediyorsa</li>
            </ul>
          </div>
        </section>

        {/* Section 5: Uzun Dönem */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Uzun Dönem Bel Sağlığı Koruma</h2>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Yaşam Boyu Öneriler</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ameliyat sonrası tam iyileşme 6-12 ay sürer. Uzun dönemde bel sağlığınızı korumak için:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">✅ Yapılması Gerekenler</h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Düzenli egzersiz (haftada 3-5 gün, 30 dk)</li>
                <li>• Core kas güçlendirme</li>
                <li>• İdeal kiloda kalma</li>
                <li>• Doğru kaldırma tekniği (diz bükerek, sırt düz)</li>
                <li>• Ergonomik çalışma ortamı</li>
                <li>• Esnek çalışma (sık pozisyon değişimi)</li>
                <li>• Stres yönetimi</li>
                <li>• Sigara içmeme</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">❌ Kaçınılması Gerekenler</h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Ağır kaldırma (>15-20 kg)</li>
                <li>• Aşırı öne eğilme, bükülme</li>
                <li>• Ani burkulma hareketleri</li>
                <li>• Uzun süre hareketsiz kalma</li>
                <li>• Yüksek etkili sporlar (bungee jumping)</li>
                <li>• Kötü postür (öne eğik oturma)</li>
                <li>• Yumuşak yatak</li>
                <li>• Obezite</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tekrarlama Riski</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bel fıtığı ameliyatı sonrası tekrarlama riski %5-15 arasındadır. Risk faktörleri:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Sigara kullanımı (disk beslenmesi bozar)</li>
            <li>Obezite</li>
            <li>Ağır fiziksel iş</li>
            <li>Yetersiz rehabilitasyon</li>
            <li>Genetik yatkınlık</li>
          </ul>
        </section>

        {/* Section 6: Motivasyon */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Motivasyon ve Psikolojik Destek</h2>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            Ameliyat sonrası iyileşme süreci bazen zorlayıcı olabilir. Aşağıdaki ipuçları motivasyonunuzu koruyabilir:
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">💪 Başarı İçin İpuçları</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• <strong>Gerçekçi beklentiler:</strong> İyileşme kademeli bir süreçtir, sabırlı olun</li>
              <li>• <strong>Küçük hedefler:</strong> Her hafta küçük gelişmeler kutlayın</li>
              <li>• <strong>Günlük kayıt:</strong> Yürüyüş mesafesi ve ağrı seviyesini not edin</li>
              <li>• <strong>Destek sistemi:</strong> Aile ve arkadaşlardan yardım isteyin</li>
              <li>• <strong>Pozitif düşünce:</strong> "Yapamıyorum" yerine "henüz yapamıyorum ama iyileşiyorum"</li>
              <li>• <strong>Profesyonel destek:</strong> Gerekirse psikolojik danışmanlık</li>
            </ul>
          </div>
        </section>

        {/* Section 7: Sonuç ve Kaynaklar */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Sonuç</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bel fıtığı ameliyatı sonrası yürüyüş programı, başarılı iyileşmenin temel taşlarından biridir. Erken mobilizasyon ile başlayan ve kademeli olarak artan aktivite planı, kasların güçlenmesini, fonksiyonun iyileşmesini ve günlük yaşama dönüşü sağlar.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Bu rehberdeki öneriler genel kılavuz niteliğindedir. Sizin özel durumunuz için mutlaka cerrahınızın ve fizik tedavi uzmanınızın direktiflerini izleyin. Sabır, disiplin ve doğru egzersizlerle tam iyileşme mümkündür.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Kaynaklar ve İleri Okuma</h3>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2">
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=microdiscectomy+rehabilitation+protocol" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Mikrodiskektomi Rehabilitasyon Protokolü - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=lumbar+discectomy+postoperative+care" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Lomber Diskektomi Ameliyat Sonrası Bakım - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=early+mobilization+spine+surgery" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Erken Mobilizasyon Omurga Cerrahisi - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=core+strengthening+lumbar+spine" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Core Güçlendirme Lomber Omurga - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=return+to+work+lumbar+discectomy" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Lomber Diskektomi Sonrası İşe Dönüş - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=recurrent+disc+herniation+prevention" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Tekrarlayan Disk Hernisi Önleme - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=walking+program+back+pain" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Yürüyüş Programı Bel Ağrısı - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=functional+recovery+spine+surgery" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Fonksiyonel İyileşme Omurga Cerrahisi - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=ergonomics+lumbar+spine+health" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Ergonomi ve Lomber Omurga Sağlığı - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=patient+education+lumbar+surgery" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Hasta Eğitimi Lomber Cerrahi - PubMed Ara
                </a>
              </li>
            </ol>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-cyan-600 to-cyan-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Bel Fıtığı Tedavisi Hakkında Bilgi Alın</h2>
          <p className="text-xl mb-8 text-cyan-100">
            Bel fıtığı tanı, tedavi seçenekleri ve ameliyat sonrası süreç hakkında uzman görüşü için randevu alın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/iletisim"
              className="inline-block bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-50 transition-colors"
            >
              Randevu Al
            </Link>
            <Link
              href="/tedaviler"
              className="inline-block bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-600 transition-colors border-2 border-cyan-500"
            >
              Tedavi Yöntemleri
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
