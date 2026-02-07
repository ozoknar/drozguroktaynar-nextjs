import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bel Fıtığı Ameliyatı Sonrası İşe Dönüş: Süreç ve Öneriler | Op. Dr. Özgür Oktay Nar',
  description: 'Bel fıtığı ameliyatı sonrası ne zaman işe dönebilirsiniz? Masabaşı ve ağır işlerde çalışma zamanlaması, dikkat edilecekler ve rehabilitasyon süreci.',
  keywords: 'bel fıtığı ameliyatı, diskektomi, işe dönüş, bel fıtığı sonrası iş, mikrodiskektomi iyileşme, lomber disk hernisi',
  authors: [{ name: 'Op. Dr. Özgür Oktay Nar' }],
  openGraph: {
    title: 'Bel Fıtığı Ameliyatı Sonrası İşe Dönüş: Süreç ve Öneriler',
    description: 'Bel fıtığı ameliyatı sonrası ne zaman işe dönebilirsiniz? Masabaşı ve ağır işlerde çalışma zamanlaması, dikkat edilecekler ve rehabilitasyon süreci.',
    type: 'article',
    locale: 'tr_TR',
    url: 'https://www.ozguroktaynar.com/blog/bel-fitigi-ameliyati-sonrasi-ise-donus',
    siteName: 'Op. Dr. Özgür Oktay Nar',
    images: [
      {
        url: 'https://placehold.co/1200x630/e2e8f0/475569?text=Bel+Fitigi+Ameliyati',
        width: 1200,
        height: 630,
        alt: 'Bel fıtığı ameliyatı sonrası işe dönüş',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bel Fıtığı Ameliyatı Sonrası İşe Dönüş: Süreç ve Öneriler',
    description: 'Bel fıtığı ameliyatı sonrası ne zaman işe dönebilirsiniz? Masabaşı ve ağır işlerde çalışma zamanlaması, dikkat edilecekler ve rehabilitasyon süreci.',
    images: ['https://placehold.co/1200x630/e2e8f0/475569?text=Bel+Fitigi+Ameliyati'],
  },
  alternates: {
    canonical: 'https://www.ozguroktaynar.com/blog/bel-fitigi-ameliyati-sonrasi-ise-donus',
  },
};

export default function BlogPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': 'https://www.ozguroktaynar.com/blog/bel-fitigi-ameliyati-sonrasi-ise-donus#webpage',
        url: 'https://www.ozguroktaynar.com/blog/bel-fitigi-ameliyati-sonrasi-ise-donus',
        name: 'Bel Fıtığı Ameliyatı Sonrası İşe Dönüş: Süreç ve Öneriler',
        description: 'Bel fıtığı ameliyatı sonrası ne zaman işe dönebilirsiniz? Masabaşı ve ağır işlerde çalışma zamanlaması, dikkat edilecekler ve rehabilitasyon süreci.',
        datePublished: '2025-01-20T10:00:00+03:00',
        dateModified: '2025-01-20T10:00:00+03:00',
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
          <Link href="/" className="hover:text-[#01CAB8]">Ana Sayfa</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-[#01CAB8]">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">Bel Fıtığı Ameliyatı Sonrası İşe Dönüş</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Bel Fıtığı Ameliyatı Sonrası İşe Dönüş: Süreç ve Öneriler</h1>
          <div className="flex items-center text-gray-600 text-sm mb-6">
            <span>Op. Dr. Özgür Oktay Nar</span>
            <span className="mx-2">•</span>
            <time>20 Ocak 2025</time>
          </div>
          <img
            src="https://placehold.co/1200x630/e2e8f0/475569?text=Bel+Fitigi+Ameliyati"
            alt="Bel fıtığı ameliyatı sonrası işe dönüş"
            className="w-full rounded-xl shadow-lg"
          />
        </header>

        {/* Main Content - 7 STEP ARCHITECTURE */}
        <div className="prose prose-lg max-w-none">
          
          {/* Section 1: Giriş */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Giriş</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bel fıtığı (lomber disk hernisi) ameliyatı geçirdikten sonra hastaların en çok merak ettiği soru "Ne zaman işime dönebilirim?" olur. İşe dönüş zamanlaması, ameliyat tipi, işin fiziksel talepleri ve iyileşme hızına bağlı olarak kişiden kişiye değişir.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Bu yazıda bel fıtığı ameliyatı sonrası işe dönüş sürecini, meslek türüne göre önerilen zamanlamayı, dikkat edilmesi gereken noktaları ve başarılı bir iş hayatına geri dönüş için gerekli adımları detaylı olarak ele alacağız. Doğru planlama ve sabırlı rehabilitasyon, hem işe güvenli dönüşü hem de tekrarlama riskini minimize eder.
            </p>
          </section>

          {/* Section 2: Ameliyat Tipleri ve İyileşme Farkları */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Bel Fıtığı Ameliyat Tipleri ve İyileşme Süreleri</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              İşe dönüş zamanını etkileyen en önemli faktör, uygulanan cerrahi tekniğin tipidir. Modern bel fıtığı cerrahisi büyük ölçüde minimal invaziv yöntemlerle yapılır.
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-[#E6FAF8] p-6 rounded-lg border-l-4 border-[#1AD2C4]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Mikrodiskektomi (En Yaygın)</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Teknik:</strong> Mikroskop veya lup (büyüteç) altında 2-3 cm insizyon ile fıtık doku çıkarılır. Kas hasarı minimal, kemik kesimi yok veya çok az.
                </p>
                <ul className="space-y-1 text-gray-700">
                  <li>• <strong>Hastanede kalış:</strong> 1 gün (bazı merkezlerde aynı gün taburcu)</li>
                  <li>• <strong>Mobilizasyon:</strong> Ameliyat sonrası 2-4 saat içinde yürüme</li>
                  <li>• <strong>Yara iyileşmesi:</strong> 10-14 gün</li>
                  <li>• <strong>Hafif aktiviteler:</strong> 2-3 hafta</li>
                  <li>• <strong>Tam iyileşme:</strong> 6-12 hafta</li>
                </ul>
              </div>

              <div className="bg-[#E6FAF8] p-6 rounded-lg border-l-4 border-[#1AD2C4]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Endoskopik Diskektomi</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Teknik:</strong> Kamera eşliğinde 1 cm'den küçük insizyon ile fıtık çıkarılır. Daha az doku hasarı, daha hızlı iyileşme.
                </p>
                <ul className="space-y-1 text-gray-700">
                  <li>• <strong>Hastanede kalış:</strong> 0-1 gün (genellikle aynı gün taburcu)</li>
                  <li>• <strong>Mobilizasyon:</strong> Ameliyat sonrası 1-2 saat içinde</li>
                  <li>• <strong>Hafif aktiviteler:</strong> 1-2 hafta</li>
                  <li>• <strong>İşe dönüş:</strong> Masabaşı işlerde 2-3 hafta</li>
                </ul>
              </div>

              <div className="bg-[#E6FAF8] p-6 rounded-lg border-l-4 border-[#1AD2C4]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Laminektomi/Laminotomi</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Teknik:</strong> Spinal kanalı daraltmış kemik çıkartması (lamina) kaldırılır. Genellikle spinal stenoz + fıtık kombinasyonunda.
                </p>
                <ul className="space-y-1 text-gray-700">
                  <li>• <strong>Hastanede kalış:</strong> 1-3 gün</li>
                  <li>• <strong>Mobilizasyon:</strong> 4-6 saat sonra</li>
                  <li>• <strong>Hafif aktiviteler:</strong> 3-4 hafta</li>
                  <li>• <strong>Tam iyileşme:</strong> 8-12 hafta</li>
                </ul>
              </div>

              <div className="bg-[#E6FAF8] p-6 rounded-lg border-l-4 border-[#1AD2C4]">
                <h3 className="text-xl font-bold text-gray-900 mb-3">4. Füzyon Cerrahisi (Nadirdir)</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Teknik:</strong> Disk çıkarılıp iki omur birleştirilir (vida, plak, kafes). İnstabilite veya tekrarlayan fıtıklarda.
                </p>
                <ul className="space-y-1 text-gray-700">
                  <li>• <strong>Hastanede kalış:</strong> 2-5 gün</li>
                  <li>• <strong>Mobilizasyon:</strong> 12-24 saat sonra (korse ile)</li>
                  <li>• <strong>Hafif aktiviteler:</strong> 6-8 hafta</li>
                  <li>• <strong>Tam iyileşme:</strong> 3-6 ay (kemik kaynaşması)</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed italic">
              💡 Bu yazıda odak mikrodiskektomi üzerinedir (en yaygın yöntem). Diğer tekniklerde süreler farklılık gösterir.
            </p>
          </section>

          {/* Section 3: İşe Dönüş Zamanlaması (Meslek Bazlı) */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meslek Türüne Göre İşe Dönüş Zamanlaması</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              İşe dönüş zamanı, işin fiziksel taleplerinden doğrudan etkilenir. Aşağıdaki zamanlamalar mikrodiskektomi ameliyatı için ortalama değerlerdir ve cerrahın onayı şarttır.
            </p>

            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Masabaşı / Büro İşleri</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Örnekler:</strong> Muhasebeci, yazılımcı, öğretmen (oturan), avukat, grafiker, call center
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>İşe dönüş:</strong> 2-4 hafta</li>
                  <li>• <strong>Yarı zamanlı başlangıç:</strong> 2. haftadan yarım gün (eğer cerrah onaylarsa)</li>
                  <li>• <strong>Tam zamanlı:</strong> 3-4. hafta</li>
                  <li>• <strong>Koşullar:</strong> Ergonomik sandalye, her 30 dk'da kısa yürüyüş, doğru oturma postürü</li>
                </ul>
                <div className="bg-white p-4 rounded mt-3">
                  <p className="text-sm text-gray-700">
                    <strong>⚠️ Dikkat:</strong> Uzun süre oturmak bel fıtığı tekrarlamasının en büyük risk faktörüdür. İlk 6 hafta 30 dakikadan fazla kesintisiz oturmayın. Ayakta çalışma masası kullanabilirsiniz.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Hafif-Orta Fiziksel İş</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Örnekler:</strong> Hemşire, satış danışmanı (ayakta), berber/kuaför, garson, market kasiyeri
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>İşe dönüş:</strong> 4-6 hafta</li>
                  <li>• <strong>Sınırlı görevlerle başla:</strong> İlk 2 hafta hafif yükler ({'<'}5 kg), kısa süreli ayakta kalma</li>
                  <li>• <strong>Tam iş yükü:</strong> 8-10. hafta</li>
                  <li>• <strong>Koşullar:</strong> Yük kaldırırken diz bükme, bel bükme YOK, sık dinlenme molaları</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Orta-Ağır Fiziksel İş</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Örnekler:</strong> Tesisatçı, elektrikçi, taşımacılık, temizlik işçisi, fabrika çalışanı
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>İşe dönüş:</strong> 8-12 hafta</li>
                  <li>• <strong>Kademeli başlama:</strong> İlk 4 hafta hafif görevler, masa işleri (varsa)</li>
                  <li>• <strong>Tam iş yükü:</strong> 12-16. hafta</li>
                  <li>• <strong>Koşullar:</strong> Bel korsesi kullanımı (gerekirse), mesleki rehabilitasyon, güçlendirme egzersizleri tamamlanmalı</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">4. Ağır Fiziksel İş / Yüksek Risk</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Örnekler:</strong> İnşaat işçisi, hamal, maden işçisi, orman işçisi, kargo taşıma
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>İşe dönüş:</strong> 3-6 ay</li>
                  <li>• <strong>Alternatif görev:</strong> Mümkünse geçici olarak hafif işlere geçiş</li>
                  <li>• <strong>Tam iş yükü:</strong> 4-6 ay (fizik tedavi + fonksiyonel kapasite değerlendirmesi sonrası)</li>
                  <li>• <strong>Risk:</strong> Ağır kaldırma, bükülme, titreşim (kazma, matkap) tekrarlama riskini 3-5 kat artırır</li>
                </ul>
                <div className="bg-white p-4 rounded mt-3">
                  <p className="text-sm text-gray-700">
                    <strong>⚠️ Önemli:</strong> Bazı hastalarda meslek değişikliği önerilebilir. Tekrarlayan fıtık riski çok yüksekse, mesleki danışmanlık ve yeniden eğitim programları değerlendirilebilir.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">İşe Dönüş Tablosu (Özet)</h3>
              <table className="w-full text-sm text-gray-700">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="p-2 text-left">İş Türü</th>
                    <th className="p-2 text-left">Yarı Zamanlı</th>
                    <th className="p-2 text-left">Tam Zamanlı</th>
                    <th className="p-2 text-left">Tam Kapasite</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="p-2">Masabaşı</td>
                    <td className="p-2">2 hafta</td>
                    <td className="p-2">3-4 hafta</td>
                    <td className="p-2">6 hafta</td>
                  </tr>
                  <tr>
                    <td className="p-2">Hafif Fiziksel</td>
                    <td className="p-2">4 hafta</td>
                    <td className="p-2">6 hafta</td>
                    <td className="p-2">8-10 hafta</td>
                  </tr>
                  <tr>
                    <td className="p-2">Orta Fiziksel</td>
                    <td className="p-2">8 hafta</td>
                    <td className="p-2">10-12 hafta</td>
                    <td className="p-2">12-16 hafta</td>
                  </tr>
                  <tr>
                    <td className="p-2">Ağır Fiziksel</td>
                    <td className="p-2">12 hafta</td>
                    <td className="p-2">16 hafta</td>
                    <td className="p-2">3-6 ay</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4: İşe Dönüş İçin Kriterler */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">İşe Dönebilmek İçin Karşılamanız Gereken Kriterler</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Takvim tarihleri genel kılavuzdur, ancak işe dönüş kararı aşağıdaki objektif kriterlere dayanmalıdır:
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>Ağrı Kontrolü:</strong> İstirahat ve hafif aktivitede ağrı yok. Bacak ağrısı (siyatik) tamamen veya %80+ gerilemiş. Bel ağrısı tolere edilebilir düzeyde (VAS {'<'}3/10).</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>Nörolojik İyileşme:</strong> Uyuşma/karıncalanma azalmış veya kaybolmuş. Kas gücü normale dönmüş (foot drop düzelmişse, başparmak kaldırma gücü 4-5/5).</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>Mobilite:</strong> 30 dakika kesintisiz yürüyebilme. Merdiven çıkıp inebilme. Araba kullanabilme (acil fren yapabilme).</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>Fonksiyonel Kapasite:</strong> İşinizin gerektirdiği temel hareketleri yapabilme (örn: 5 kg kaldırma, 2 saat oturma, vs.).</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>Yara İyileşmesi:</strong> Dikişler alınmış, enfeksiyon bulgusu yok, yara tamamen kapanmış.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>Cerrah Onayı:</strong> Doktorunuz kontrol muayenesinde işe dönüş için uygun görmüş olmalı.</span>
              </li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <p className="text-gray-700">
                <strong>⚠️ Uyarı:</strong> Bu kriterlerden herhangi biri karşılanmadıysa işe DÖNME Yİİ. Erken dönüş, fıtık tekrarlaması riskini 2-3 kat artırır ve uzun dönemli kronik ağrıya neden olabilir. İşvereninizle görüşerek geçici hafif görev düzenlemesi yapabilirsiniz.
              </p>
            </div>
          </section>

          {/* Section 5: İşyerinde Dikkat Edilecekler */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">İşyerinde Dikkat Edilmesi Gerekenler</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ergonomi ve Postür</h3>
            <div className="space-y-4 mb-6">
              <div className="bg-[#E6FAF8] p-5 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Oturma Düzeni (Masabaşı İşler)</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• <strong>Sandalye:</strong> Lomber destek (bel yastığı) kullan, diz 90°, ayaklar yere tam basmalı</li>
                  <li>• <strong>Ekran:</strong> Göz hizasında (başı öne eğmemek için), kol mesafesi</li>
                  <li>• <strong>Klavye/mouse:</strong> Dirsek 90°, bilek düz (karpal tunel önlemi)</li>
                  <li>• <strong>30-30 Kuralı:</strong> Her 30 dk'da 30 sn ayağa kalk, sırtını gerdiriyor, yürü</li>
                  <li>• <strong>Alternatif:</strong> Ayakta çalışma masası (standing desk) - günün %30'u ayakta</li>
                </ul>
              </div>

              <div className="bg-[#E6FAF8] p-5 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Yük Kaldırma Tekniği (Fiziksel İşler)</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• <strong>Altın Kural:</strong> Dizlerini bük, beli düz tut, yükü vücuda yakın al</li>
                  <li>• <strong>Dönerken:</strong> Ayaklarla dön, beli bükerek dönme (en yaygın yaralanma nedeni!)</li>
                  <li>• <strong>Ağırlık sınırı:</strong> İlk 6 hafta max 5 kg, 6-12 hafta max 10 kg, sonra kademeli artır</li>
                  <li>• <strong>İki kişilik taşıma:</strong> 15 kg üzeri yüklerde yardım al</li>
                  <li>• <strong>Mekanik yardım:</strong> Mümkünse el arabası, forklift, palet kaldırıcı kullan</li>
                </ul>
              </div>

              <div className="bg-[#E6FAF8] p-5 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Yasaklanan Hareketler (İlk 3 Ay)</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>❌ Bükülüp kaldırma (gardrop, koli, çocuk)</li>
                  <li>❌ Dönerek kaldırma (torba alıp dönme)</li>
                  <li>❌ Tek ayakta uzun durma (dengesizlik)</li>
                  <li>❌ Aşırı geriye eğilme (arka raftan eşya alma)</li>
                  <li>❌ Titreşim (matkap, kazma, çim biçme makinesi - vibrasyon disk basıncını artırır)</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">İşveren ile İletişim ve Haklar</h3>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• <strong>Rapor:</strong> Cerrahınızdan detaylı rapor alın (ameliyat tipi, kısıtlamalar, tahmini dönüş tarihi)</li>
              <li>• <strong>Görüşme:</strong> İşvereninizle ameliyat öncesi görüşün, iş yükü ayarlaması planı yapın</li>
              <li>• <strong>Kademeli dönüş:</strong> Yarı zamanlı başlama, hafif görevler ile geçiş talebi</li>
              <li>• <strong>Ergonomik düzenleme:</strong> Ergonomik sandalye, masa yüksekliği, ayakta çalışma imkanı talep edin</li>
              <li>• <strong>Yasal haklar (Türkiye):</strong> SGK raporu ile istirahat süresi boyunca iş güvencesi korunur, işveren işten çıkaramaz</li>
            </ul>
          </section>

          {/* Section 6: Sıkça Sorulan Sorular */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Bel fıtığı ameliyatı sonrası ne zaman araba kullanabilirim?</h3>
                <p className="text-gray-700">
                  Genel kural: 2-4 hafta sonra. Kritik olan acil fren yapabilme refleksiniz. Eğer sağ ayağınızda güçsüzlük (foot drop) varsa tamamen düzelene kadar (4-8 hafta) sürmeyin. İlk sürüşte kısa mesafe deneyin (10-15 dk), ağrı artar veya bacak uyuşursa durun. Uzun yolculuklarda her 30-45 dk'da mola verin, yürüyün.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">İşe döndükten sonra ağrım tekrar başladı, ne yapmalıyım?</h3>
                <p className="text-gray-700">
                  İlk 2-3 gün hafif bel ağrısı normal (kasların yeni yüke adaptasyonu). Ancak bacak ağrısı, uyuşma, güç kaybı veya şiddetli bel ağrısı varsa:
                  1. Derhal işi bırakın, istirahat edin
                  2. Buz uygulayın (20 dk)
                  3. 24-48 saat içinde cerrahınıza başvurun
                  4. Fıtık tekrarlaması (recurrence) %5-15 oranında görülür, erken tanı önemli
                  İşinizin fiziksel talepleri size fazla geliyorsa, doktorunuzla görüşerek iş değişikliği veya ek rehabilitasyon planı yapılabilir.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Bel korsesi çalışırken kullanmalı mıyım?</h3>
                <p className="text-gray-700">
                  <strong>Kısa dönem (ilk 4-6 hafta):</strong> Fiziksel iş yapıyorsanız, korse yardımcı olabilir (lomber desteği sağlar, bel kaslarını hatırlatır). Ancak sürekli kullanmayın - kas zayıflaması yapar.
                  <strong>Uzun dönem:</strong> Korse bağımlılığı yaratır, kas güçlendirme egzersizleri daha etkilidir.
                  <strong>Doğru kullanım:</strong> Sadece ağır yük kaldırma anlarında kullan, oturma/dinlenme sırasında çıkar.
                  <strong>Alternatif:</strong> Korse yerine core (karın ve bel) kaslarını güçlendir - doğal "et korse" oluştur.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ameliyat sonrası fizik tedavi şart mı?</h3>
                <p className="text-gray-700">
                  Basit mikrodiskektomide zorunlu değil, ancak ŞIDDETLE ÖNERİLİR. Fizik tedavinin faydaları:
                  • Core kaslarını güçlendirir (tekrarlama riskini %40-50 azaltır)
                  • Doğru hareket paternleri öğretir (bel sağlığı eğitimi)
                  • Esneklik kazandırır (hamstring gerginliği bel yükünü artırır)
                  • İşe güvenli dönüş için fonksiyonel egzersizler
                  Özellikle fiziksel iş yapıyorsanız, işe dönmeden ÖNCE 4-6 haftalık fizik tedavi programı tamamlayın.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">İşim çok ağır, meslek değiştirmem gerekir mi?</h3>
                <p className="text-gray-700">
                  Eğer işiniz sürekli ağır kaldırma, bükülme, titreşim gerektiriyorsa (örn: hamal, inşaat, madencilik), fıtık tekrarlama riski %20-30'dur. Seçenekler:
                  1. <strong>İş içi değişiklik:</strong> Aynı şirkette daha hafif pozisyon (depo yerine ofis, formen, kalite kontrol)
                  2. <strong>Ergonomik araçlar:</strong> Mekanik kaldırıcılar, exoskeleton (dış iskelet) gibi destekler
                  3. <strong>Meslek değişikliği:</strong> Mesleki rehberlik ile yeniden eğitim programları (SGK destekli olabilir)
                  4. <strong>Erken emeklilik:</strong> Sürekli ağır iş yapamıyorsanız, hekimden maluliyet raporu alıp erken emeklilik başvurusu yapılabilir
                  Kararı tek başına vermeyin - cerrah, fizyoterapist ve meslek danışmanı ile birlikte değerlendirin.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Kaynaklar */}
          <section className="mb-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kaynaklar</h2>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-700">
              <li>
                Carragee EJ, et al. "A prospective controlled study of limited versus subtotal posterior discectomy: short-term outcomes in patients with herniated lumbar intervertebral discs and large posterior annular defect." Spine. 2006.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=carragee+posterior+discectomy+outcomes" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Silverplats K, et al. "Clinical factors of importance for outcome after lumbar disc herniation surgery: long-term follow-up." Eur Spine J. 2010.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=silverplats+lumbar+disc+herniation+surgery+outcome" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Kulig K, et al. "Segmental lumbar mobility in individuals with low back pain: in vivo assessment during manual and self-imposed motion using dynamic MRI." BMC Musculoskelet Disord. 2007.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=kulig+lumbar+mobility+low+back+pain+dynamic+MRI" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Mannion AF, et al. "The quality of spine surgery from the patient's perspective: part 2. Minimal clinically important difference for improvement and deterioration as measured with the Core Outcome Measures Index." Eur Spine J. 2009.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=mannion+quality+spine+surgery+patient+perspective+COMI" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
            </ol>
          </section>

          {/* Section 8: Internal Link - ZORUNLU! */}
          <section className="mb-12">
            <div className="bg-[#E6FAF8] border-l-4 border-[#1AD2C4] p-6 rounded-r-lg">
              <p className="text-gray-700">
                <strong>İlgili İçerik:</strong> Bel fıtığı tedavisi için cerrahi dışı seçenekler hakkında bilgi almak isterseniz{' '}
                <Link 
                  href="/ameliyatsiz-cozumler" 
                  className="text-[#01CAB8] hover:text-[#01867A] font-semibold hover:underline"
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
              Bel fıtığı ameliyatı sonrası işe dönüş, sabır, planlama ve doğru rehabilitasyon gerektirir. Acele etmek, fıtık tekrarlaması ve kronik ağrı riskini ciddi şekilde artırır. Mesleğinizin fiziksel taleplerine göre 2 hafta ile 6 ay arasında değişen bir süreç bekleyebilirsiniz.
            </p>
            <p className="text-gray-700 leading-relaxed">
              İşyerinde ergonomi kurallarına uymak, core kaslarını güçlendirmek ve doğru kaldırma tekniklerini uygulamak, uzun dönemli başarının anahtarıdır. Cerrahınızın önerilerine sıkı sıkıya uyarak, iş hayatınıza güvenle ve sağlıklı bir şekilde dönebilirsiniz. Unutmayın: Acele etmek yerine doğru iyileşmek, yaşam boyu sağlıklı bir bele sahip olmanızı sağlar.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#01CAB8] to-[#01A899] rounded-xl p-8 text-center text-white mt-12">
          <h2 className="text-2xl font-bold mb-4">Bel Fıtığı Ameliyatı Sonrası Takip</h2>
          <p className="mb-6">İşe dönüş süreciniz için uzman rehberliği alın.</p>
          <Link 
            href="/iletisim" 
            className="inline-block bg-white text-[#01CAB8] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Randevu Al
          </Link>
        </div>
      </article>
    </>
  );
}
