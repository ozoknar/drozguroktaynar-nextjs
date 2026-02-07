import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ayak Bileği Burkulması Tedavi Süresi Ne Kadar? İyileşme Süreci Rehberi',
  description: 'Ayak bileği burkulması ne kadar sürede iyileşir? Derece derece iyileşme süreleri, tedavi yöntemleri ve spora dönüş süreci hakkında detaylı bilgi.',
  keywords: 'ayak bileği burkulması, burkulma tedavisi, ayak bileği iyileşme süresi, sprained ankle, lateral ligament yaralanması',
  openGraph: {
    title: 'Ayak Bileği Burkulması Tedavi Süresi | İyileşme Rehberi',
    description: 'Ayak bileği burkulmasının iyileşme süreci, derece derece tedavi süreleri ve rehabilitasyon programı.',
    type: 'article',
    locale: 'tr_TR',
    siteName: 'Op. Dr. Özgür Oktay Nar',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayak Bileği Burkulması Tedavi Süresi Ne Kadar?',
    description: 'İyileşme süreci ve rehabilitasyon rehberi.',
  },
  alternates: {
    canonical: 'https://www.drozguroktaynar.com/blog/ayak-bilegi-burkulmasi-tedavi-suresi-ne-kadar',
  },
};

export default function AyakBilekBurkulmasiPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: 'Ayak Bileği Burkulması Tedavi Süresi Ne Kadar? İyileşme Süreci Rehberi',
    description: 'Ayak bileği burkulması iyileşme süreleri, tedavi yöntemleri ve rehabilitasyon programı hakkında kapsamlı bilgi.',
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
      name: 'Ayak Bileği Burkulması',
      alternateName: 'Lateral Ligament Yaralanması, Ankle Sprain',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-white to-teal-50 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-semibold mb-4">
              Spor Yaralanmaları
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Ayak Bileği Burkulması Tedavi Süresi Ne Kadar? İyileşme Süreci Rehberi
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ayak bileği burkulmasının derece derece iyileşme süreleri, tedavi yöntemleri ve spora güvenli dönüş stratejileri.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ayak Bileği Burkulması Nedir?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Ayak bileği burkulması</strong> (ankle sprain), ayak bileği eklemini stabilize eden bağların (ligamentlerin) gerilmesi veya yırtılması sonucu oluşan yaralanmadır. En sık görülen spor yaralanmalarından biri olup, günde yaklaşık 25,000 kişi ayak bileği burkulması yaşar.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Burkulmaların %85'i <strong>lateral (dış yan) ligamentleri</strong> etkiler. Ayağın içe dönmesi (inversiyon) ile anterior talofibular ligament (ATFL), calcaneofibular ligament (CFL) ve posterior talofibular ligament (PTFL) yaralanır.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">🏃 Yaralanma Mekanizması</h3>
            <p className="text-gray-700 mb-2">
              Ayak bileği burkulması genellikle aşağıdaki durumlarda oluşur:
            </p>
            <ul className="text-gray-700 space-y-1">
              <li>• Düzensiz zeminde yürüme veya koşma</li>
              <li>• Atlama sonrası yanlış inme</li>
              <li>• Ani yön değişikliği (basketbol, futbol)</li>
              <li>• Başka oyuncunun ayağına basma</li>
              <li>• Topuklu ayakkabı ile kayma</li>
            </ul>
          </div>
        </section>

        {/* Section 2: Derecelendirme */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ayak Bileği Burkulması Derecelendirmesi</h2>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            Burkulma şiddeti ligament hasarının derecesine göre sınıflandırılır:
          </p>

          <div className="space-y-6 mb-6">
            <div className="bg-green-50 border-l-4 border-green-500 p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Grade 1 (Hafif Burkulma)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Patoloji</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Ligamentlerde hafif gerilme</li>
                    <li>• Mikroskopik yırtıklar</li>
                    <li>• Stabilite korunmuş</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Belirtiler</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Hafif şişlik</li>
                    <li>• Minimal ağrı</li>
                    <li>• Yürüme olası</li>
                    <li>• Hassasiyet var</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-green-200">
                <p className="text-gray-800 font-semibold">⏱️ İyileşme Süresi: 1-2 hafta</p>
                <p className="text-gray-700 text-sm mt-1">Günlük aktiviteler: 3-5 gün | Spora dönüş: 1-2 hafta</p>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Grade 2 (Orta Burkulma)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Patoloji</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Kısmi ligament yırtığı</li>
                    <li>• ATFL ve/veya CFL tutulumu</li>
                    <li>• Hafif instabilite</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Belirtiler</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Orta-şiddetli şişlik</li>
                    <li>• Belirgin ağrı</li>
                    <li>• Morarma (ekimoz)</li>
                    <li>• Yürüme güç</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-amber-200">
                <p className="text-gray-800 font-semibold">⏱️ İyileşme Süresi: 3-6 hafta</p>
                <p className="text-gray-700 text-sm mt-1">Günlük aktiviteler: 1-2 hafta | Spora dönüş: 4-6 hafta</p>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Grade 3 (Ciddi Burkulma)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Patoloji</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Tam ligament kopması</li>
                    <li>• Çoklu ligament tutulumu</li>
                    <li>• Belirgin instabilite</li>
                    <li>• Kemik avülsiyon olabilir</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Belirtiler</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Ciddi şişlik</li>
                    <li>• Şiddetli ağrı</li>
                    <li>• Yaygın morarma</li>
                    <li>• Yürüyememe</li>
                    <li>• "Pop" hissi</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-red-200">
                <p className="text-gray-800 font-semibold">⏱️ İyileşme Süresi: 8-12 hafta (veya daha uzun)</p>
                <p className="text-gray-700 text-sm mt-1">Günlük aktiviteler: 3-4 hafta | Spora dönüş: 3-6 ay (cerrahi gerekebilir)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: İlk Müdahale */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">İlk Müdahale: RICE Protokolü</h2>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            Burkulma sonrası ilk 48-72 saat kritik öneme sahiptir. <strong>RICE (Rest, Ice, Compression, Elevation)</strong> protokolü uygulanmalıdır:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">🛏️ Rest (İstirahat)</h3>
              <p className="text-gray-700 text-sm">
                Yaralanmış ayak bileğini dinlendirin. Ağrı yapan aktivitelerden kaçının. Gerekirse koltuk değneği kullanın. Tamamen hareketsiz kalmayın, ancak aşırı zorlamayın.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">🧊 Ice (Buz)</h3>
              <p className="text-gray-700 text-sm">
                İlk 48-72 saat boyunca her 2-3 saatte bir 15-20 dakika buz uygulayın. Doğrudan cilde değil, bez ile sarılı buz torbası kullanın. Şişliği ve iltihabı azaltır.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">🔄 Compression (Kompresyon)</h3>
              <p className="text-gray-700 text-sm">
                Elastik bandaj ile hafifçe sarın (çok sıkı değil). Şişliği kontrol eder. Parmaklar soğuk, morumsu veya uyuşuksa gevşetin. Gece çıkarılabilir.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">⬆️ Elevation (Yükseltime)</h3>
              <p className="text-gray-700 text-sm">
                Ayağı kalp seviyesinin üzerine kaldırın (yastık kullanın). Özellikle ilk 2-3 gün ve uyurken önemlidir. Şişliği azaltır, iyileşmeyi hızlandırır.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">⚠️ İlk 48-72 Saatte KAÇININ</h3>
            <ul className="text-gray-700 space-y-2">
              <li><strong>HEAT (Sıcak):</strong> Ilık duş, sauna, sıcak kompres → şişliği artırır</li>
              <li><strong>ALCOHOL (Alkol):</strong> Kanama ve şişliği artırabilir</li>
              <li><strong>RUNNING (Koşma):</strong> Erken yük verme iyileşmeyi bozar</li>
              <li><strong>MASSAGE (Masaj):</strong> Akut fazda masaj yapmayın</li>
            </ul>
          </div>
        </section>

        {/* Section 4: Tedavi Süreci */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tedavi Yöntemleri ve İyileşme Takvimi</h2>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Konservatif Tedavi (Ameliyatsız)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Grade 1 ve 2 burkulmalar genellikle ameliyatsız tedavi ile iyileşir:
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">📅 Faz-Bazlı Rehabilitasyon Programı</h4>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h5 className="font-semibold text-gray-800">Faz 1: Akut Faz (0-7 gün)</h5>
                <ul className="text-gray-700 text-sm space-y-1 mt-2">
                  <li>• RICE protokolü</li>
                  <li>• NSAİİ (ibuprofen, naproksen) ağrı için</li>
                  <li>• Ayak bileği desteği/bandaj</li>
                  <li>• İzometrik egzersizler (hareket yok)</li>
                  <li><strong>Hedef:</strong> Şişlik azaltma, ağrı kontrolü</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h5 className="font-semibold text-gray-800">Faz 2: Erken Mobilizasyon (1-3 hafta)</h5>
                <ul className="text-gray-700 text-sm space-y-1 mt-2">
                  <li>• Kademeli yük verme (tolere edilebildiğinde)</li>
                  <li>• Hareket açıklığı egzersizleri (ROM)</li>
                  <li>• Ayak bileği alfabe çizme</li>
                  <li>• Direnç bandı ile güçlendirme (hafif)</li>
                  <li><strong>Hedef:</strong> Normal ROM, ağrısız yürüme</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h5 className="font-semibold text-gray-800">Faz 3: Güçlendirme (3-6 hafta)</h5>
                <ul className="text-gray-700 text-sm space-y-1 mt-2">
                  <li>• Progresif direnç egzersizleri</li>
                  <li>• Tek ayak üzerinde durma dengesi</li>
                  <li>• Topuk kaldırma egzersizleri</li>
                  <li>• Balance board çalışmaları</li>
                  <li><strong>Hedef:</strong> Kas gücü, propriyosepsiyon</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h5 className="font-semibold text-gray-800">Faz 4: Spora Dönüş (6+ hafta)</h5>
                <ul className="text-gray-700 text-sm space-y-1 mt-2">
                  <li>• İleri seviye güçlendirme</li>
                  <li>• Pliyometrik egzersizler (zıplama, sıçrama)</li>
                  <li>• Spora spesifik hareketler</li>
                  <li>• Kademeli antrenman artışı</li>
                  <li><strong>Hedef:</strong> Güvenli spora dönüş</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Cerrahi Tedavi</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Aşağıdaki durumlarda cerrahi düşünülebilir:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Kronik instabilite:</strong> Tekrarlayan burkulma öyküsü, konservatif tedaviye yanıt yok</li>
            <li><strong>Tam ligament kopması:</strong> Grade 3 yaralanma (genç, aktif sporcu)</li>
            <li><strong>Kemik avülsiyon:</strong> Ligament ile birlikte kemik parçası kopması</li>
            <li><strong>Osteokondral defekt:</strong> Kıkırdak hasarı eşlik ediyorsa</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-4">
            Cerrahi seçenekler: <strong>Ligament onarımı (Broström prosedürü)</strong>, <strong>ligament rekonstrüksiyonu</strong> (tendon grefti ile).
          </p>
        </section>

        {/* Section 5: Komplikasyonlar */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Olası Komplikasyonlar ve Önleme</h2>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">⚠️ Kronik Komplikasyonlar</h3>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Kronik ayak bileği instabilitesi:</strong> %20-40 burkulma geçirenlerde tekrar burkulma riski</li>
              <li><strong>Kronik ağrı:</strong> Yetersiz iyileşme veya skar dokusu</li>
              <li><strong>Sertlik:</strong> ROM kaybı (rehabilitasyon eksikliği)</li>
              <li><strong>Osteoartrit:</strong> Uzun dönemde eklem aşınması riski</li>
              <li><strong>Sinir yaralanması:</strong> Nadir, sural veya peroneal sinir hasarı</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tekrarlayan Burkulmaları Önleme</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Tam rehabilitasyon:</strong> İyileşme tamamlanmadan spora dönmeyin</li>
            <li><strong>Propriyosepsiyon egzersizleri:</strong> Denge ve koordinasyon çalışmaları</li>
            <li><strong>Ayak bileği desteği:</strong> Spor sırasında bandaj veya brace kullanımı</li>
            <li><strong>Uygun ayakkabı:</strong> İyi destekli, spor tipine uygun ayakkabılar</li>
            <li><strong>Isınma:</strong> Aktivite öncesi düzenli ısınma ve esneme</li>
            <li><strong>Kas güçlendirme:</strong> Peroneal kaslar (lateral stabilite sağlar) güçlendirilmeli</li>
          </ul>
        </section>

        {/* Section 6: Ne Zaman Doktora */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ne Zaman Ortopedi Uzmanına Başvurulmalı?</h2>
          
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">🚨 Acil Doktor Görüşü Gereken Durumlar</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Şiddetli ağrı ve yürüyememe</li>
              <li>• Belirgin deformite (kemik kırığı şüphesi)</li>
              <li>• Kemik üzerinde hassasiyet (malleol, metatarsal base)</li>
              <li>• Uyuşma veya karıncalanma (sinir yaralanması)</li>
              <li>• 48-72 saat içinde şişlik azalmıyorsa</li>
              <li>• Ayak veya bacak soğuksa, renk değişikliği varsa</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">📋 Ottawa Ayak Bileği Kuralları</h3>
            <p className="text-gray-700 mb-2">
              Aşağıdaki durumlardan biri varsa <strong>röntgen çekilmeli</strong>:
            </p>
            <ul className="text-gray-700 space-y-1">
              <li>✓ Posterior malleol (kemik çıkıntı) üzerinde hassasiyet (lateral veya medial)</li>
              <li>✓ Yaralanma sonrası 4 adım yürüyememe (hemen sonra ve acilde)</li>
              <li>✓ 5. metatars tabanında hassasiyet</li>
              <li>✓ Naviküler kemik üzerinde hassasiyet</li>
            </ul>
          </div>
        </section>

        {/* Section 7: Sonuç ve Kaynaklar */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Sonuç ve Öneriler</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ayak bileği burkulması tedavi süresi, yaralanmanın şiddetine göre 1-2 haftadan 3-6 aya kadar değişir. Grade 1 burkulmalar genellikle 1-2 haftada iyileşirken, Grade 3 ciddi yaralanmalar 3-6 ay tam iyileşme gerektirebilir.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Başarılı iyileşme için erken uygun müdahale, disiplinli rehabilitasyon ve sabırlı spora dönüş süreci gereklidir. Acele spora dönüş, kronik instabilite ve tekrarlayan burkulma riskini artırır.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Şiddetli ağrı, deformite veya iyileşme süreci beklenenden uzun sürüyorsa mutlaka ortopedi uzmanına başvurulmalıdır.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Kaynaklar ve İleri Okuma</h3>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2">
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=ankle+sprain+treatment+guidelines" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Ayak Bileği Burkulması Tedavi Kılavuzları - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=lateral+ankle+ligament+injury" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Lateral Ayak Bileği Ligament Yaralanması - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=ankle+sprain+rehabilitation+protocol" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Ayak Bileği Burkulması Rehabilitasyon Protokolü - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=chronic+ankle+instability" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Kronik Ayak Bileği İnstabilitesi - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=Brostrom+procedure+ankle" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Broström Prosedürü (Ligament Onarımı) - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=proprioception+training+ankle" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Ayak Bileği Propriyosepsiyon Eğitimi - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=Ottawa+ankle+rules" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Ottawa Ayak Bileği Kuralları - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=ankle+taping+bracing" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Ayak Bileği Bantlama ve Bracing - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=ankle+sprain+return+to+sport" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Burkulma Sonrası Spora Dönüş - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=peroneal+muscle+strengthening" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Peroneal Kas Güçlendirme - PubMed Ara
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
        <section className="bg-gradient-to-r from-teal-600 to-teal-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ayak Bileği Burkulmanız mı Var?</h2>
          <p className="text-xl mb-8 text-teal-100">
            Doğru tanı ve kişiselleştirilmiş tedavi planı için ortopedi uzmanına danışın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/iletisim"
              className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
            >
              Randevu Al
            </Link>
            <Link
              href="/tedaviler"
              className="inline-block bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-600 transition-colors border-2 border-teal-500"
            >
              Tedavi Yöntemleri
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
