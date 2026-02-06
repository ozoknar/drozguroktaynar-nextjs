import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Eklem Ağrısı: Nedenleri, Belirtileri ve Tedavi | Dr. Özgür Oktay Nar Bursa',
  description: 'Eklem ağrısının nedenleri, tanı yöntemleri ve modern tedavi seçenekleri. Bursa Ortopedi Uzmanı Dr. Özgür Oktay Nar\'dan kapsamlı bilgi ve tedavi yaklaşımları.',
  keywords: 'eklem ağrısı, eklem ağrısı nedenleri, eklem ağrısı tedavisi, Bursa ortopedi, Dr. Özgür Oktay Nar, artrit, osteoartrit, romatizma, Bursa',
  authors: [{ name: 'Dr. Özgür Oktay Nar' }],
  openGraph: {
    title: 'Eklem Ağrısı: Nedenleri ve Tedavisi | Dr. Özgür Oktay Nar Bursa',
    description: 'Eklem ağrısı hakkında uzman ortopedistten kapsamlı bilgi.',
    type: 'article',
    locale: 'tr_TR',
    siteName: 'Dr. Özgür Oktay Nar - Ortopedi Uzmanı Bursa',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eklem Ağrısı: Nedenleri ve Tedavisi',
    description: 'Eklem ağrıları için modern tedavi yaklaşımları.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD Schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  headline: 'Eklem Ağrısı: Nedenleri, Belirtileri ve Tedavi Yöntemleri',
  author: {
    '@type': 'Physician',
    name: 'Dr. Özgür Oktay Nar',
    medicalSpecialty: 'Ortopedik Cerrahi',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bursa',
      addressCountry: 'TR',
    },
  },
  datePublished: '2026-02-06',
  dateModified: '2026-02-06',
  description: 'Eklem ağrısının nedenleri, tanı ve tedavi yöntemleri hakkında kapsamlı rehber.',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://drozguroktaynar.com/blog/eklem-agrisi-bursa-dr-ozgur-oktay-nar-ortopedi-bursa',
  },
  about: {
    '@type': 'MedicalCondition',
    name: 'Eklem Ağrısı',
    alternateName: 'Joint Pain',
  },
};

export default function EklemAgrisiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="mb-12">
          <div className="mb-6">
            <Link 
              href="/blog"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              ← Blog'a Dön
            </Link>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Eklem Ağrısı: Nedenleri, Belirtileri ve Tedavi Yöntemleri
          </h1>
          
          <div className="flex items-center text-gray-600 text-sm mb-6">
            <time dateTime="2026-02-06">6 Şubat 2026</time>
            <span className="mx-2">•</span>
            <span>Dr. Özgür Oktay Nar</span>
            <span className="mx-2">•</span>
            <span>Bursa Ortopedi Uzmanı</span>
            <span className="mx-2">•</span>
            <span>12 dakika okuma</span>
          </div>

          <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-6">
            <Image
              src="/images/blog/eklem-agrisi-hero.jpg"
              alt="Eklem ağrısı ve ortopedik tedavi seçenekleri"
              fill
              className="object-cover"
              priority
            />
          </div>

          <p className="text-xl text-gray-700 leading-relaxed">
            Eklem ağrısı, yaşam kalitesini ciddi şekilde etkileyen yaygın bir sağlık problemidir. Diz, kalça, omuz, el ve ayak eklemlerinde ortaya çıkabilen bu ağrılar, günlük aktiviteleri zorlaştırır ve hareket kabiliyetini kısıtlar. Bu kapsamlı rehberde, eklem ağrısının nedenlerini, tanı yöntemlerini ve Bursa'da sunduğumuz modern tedavi seçeneklerini detaylı şekilde inceleyeceğiz.
          </p>
        </header>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Eklem Ağrısı Nedir?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Eklem ağrısı (artralji), eklemin kendisinden veya çevresindeki yapılardan (ligament, tendon, kıkırdak, kemik) kaynaklanan ağrı hissidir. Vücuttaki herhangi bir eklemi etkileyebilir ve şiddeti hafiften şiddetliye kadar değişkenlik gösterir.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Eklem Anatomisi (Kısa Özet)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Eklemler, iki veya daha fazla kemiğin birleşme noktalarıdır:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Kıkırdak (Cartilage):</strong> Eklem yüzeylerini kaplayan kaygan doku</li>
            <li><strong>Sinovyal sıvı:</strong> Eklemi yağlayan ve besleyen sıvı</li>
            <li><strong>Sinovyal membran:</strong> Eklemi saran ve sinovyal sıvı üreten zar</li>
            <li><strong>Ligamentler:</strong> Eklemi stabilize eden bağlar</li>
            <li><strong>Tendonlar:</strong> Kasları kemiğe bağlayan yapılar</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
            <p className="text-gray-800">
              <strong>İstatistik:</strong> Dünya genelinde 40 yaş üstü nüfusun yaklaşık %30'u kronik eklem ağrısından şikayetçidir. Türkiye'de osteoartrit prevalansı %18-20 civarındadır.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Eklem Ağrısının Nedenleri</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Eklem ağrısının çok sayıda nedeni vardır. Başlıcaları şunlardır:
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Osteoartrit (Dejeneratif Eklem Hastalığı)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            En yaygın eklem ağrısı nedenidir:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Mekanizma:</strong> Eklem kıkırdağının aşınması ve kemik sürtünmesi</li>
            <li><strong>Risk faktörleri:</strong> İleri yaş, obezite, genetik yatkınlık, eski travmalar</li>
            <li><strong>Etkilenen eklemler:</strong> Diz, kalça, el parmakları, omuz, ayak bileği</li>
            <li><strong>Belirtiler:</strong> Aktiviteyle artan ağrı, sabah sertliği (&lt;30 dk), krepitasyon (çıtırtı)</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Romatoid Artrit</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Tip:</strong> Otoimmün inflamatuar hastalık</li>
            <li><strong>Mekanizma:</strong> Bağışıklık sistemi eklem zarına saldırır</li>
            <li><strong>Özellik:</strong> Simetrik tutulum (her iki elde, her iki dizde)</li>
            <li><strong>Belirtiler:</strong> Sabah sertliği (&gt;1 saat), şişlik, kızarıklık, sıcaklık hissi</li>
            <li><strong>Ekstraartiküler bulgular:</strong> Yorgunluk, ateş, nodüller</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Gut (Damla Hastalığı)</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Neden:</strong> Ürik asit kristallerinin eklemde birikmesi</li>
            <li><strong>Tetikleyiciler:</strong> Kırmızı et, alkol, kabuklu deniz ürünleri, fruktoz</li>
            <li><strong>Tipik tutulum:</strong> Ayak başparmağı (podagra), ayak bileği, diz</li>
            <li><strong>Atak özellikleri:</strong> Ani başlangıç, şiddetli ağrı, kırmızılık, şişlik</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Travma ve Yaralanmalar</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Eklem burkulması (ligament yaralanması)</li>
            <li>Menisküs yırtığı (dizde)</li>
            <li>Kırıklar</li>
            <li>Çıkıklar</li>
            <li>Tendon yaralanmaları</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Aşırı Kullanım Sendromları</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Tendinit:</strong> Tendon iltihabı</li>
            <li><strong>Bursit:</strong> Bursa kesesi iltihabı</li>
            <li><strong>Stres kırıkları:</strong> Tekrarlayan yüklenme</li>
            <li><strong>Mesleki hastalıklar:</strong> Tekrarlayan hareketler (yazı yazma, örme)</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. İnfeksiyöz Artrit</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Septik artrit:</strong> Bakteriyel enfeksiyon</li>
            <li><strong>Viral artrit:</strong> Virüs kaynaklı (örn: parvovirus, hepatit)</li>
            <li><strong>Lyme hastalığı:</strong> Kene ısırığı sonrası</li>
            <li><strong>Acil durum:</strong> Septik artrit acil tedavi gerektirir</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Diğer İnflamatuar Hastalıklar</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Ankilozan spondilit (omurga ve sakroiliak eklem)</li>
            <li>Psöriatik artrit (sedef hastalığı ile birlikte)</li>
            <li>Lupus (sistemik otoimmün hastalık)</li>
            <li>Reaktif artrit (enfeksiyon sonrası)</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Belirtiler ve Semptomlar</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Eklem ağrısına eşlik eden belirtiler, altta yatan nedene bağlı olarak değişir:
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Genel Belirtiler</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Ağrı:</strong> Hafiften şiddetliye, keskin veya künt</li>
            <li><strong>Sertlik:</strong> Özellikle sabahları veya hareketsizlik sonrası</li>
            <li><strong>Şişlik:</strong> Eklem etrafında ödem</li>
            <li><strong>Kızarıklık ve sıcaklık:</strong> İnflamasyon belirtisi</li>
            <li><strong>Hareket kısıtlılığı:</strong> Eklem hareketlerinde azalma</li>
            <li><strong>Güç kaybı:</strong> Etkilenen ekstremitede zayıflık</li>
            <li><strong>Ses/çıtırtı:</strong> Krepitasyon, patlama sesleri</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Alarm Belirtileri (Acil Müdahale Gerektirir)</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Ani başlayan şiddetli eklem ağrısı</li>
            <li>Yüksek ateş ile birlikte eklem şişliği</li>
            <li>Eklemde şiddetli kızarıklık ve sıcaklık</li>
            <li>Eklem deformitesi veya instabilite</li>
            <li>Açıklanamayan kilo kaybı</li>
            <li>Gece ağrıları (tümör şüphesi)</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Tanı Yöntemleri</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Eklem ağrısının kaynağını belirlemek için kapsamlı değerlendirme gereklidir:
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Anamnez ve Fizik Muayene</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Öykü:</strong> Ağrının başlangıcı, süresi, karakteri, tetikleyiciler</li>
            <li><strong>İnspeksiyon:</strong> Şişlik, kızarıklık, deformite</li>
            <li><strong>Palpasyon:</strong> Hassasiyet, sıcaklık, effüzyon (sıvı birikimi)</li>
            <li><strong>Hareket açıklığı:</strong> Aktif ve pasif hareketler</li>
            <li><strong>Stabilite testleri:</strong> Ligament bütünlüğü</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Görüntüleme Yöntemleri</h3>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Direkt Röntgen</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Kemik yapısı, eklem aralığı, osteofitler (mahmuzlar)</li>
            <li>Kırık, çıkık, osteoartrit bulguları</li>
            <li>İlk tercih edilen, ekonomik yöntem</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">MRI (Manyetik Rezonans)</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Yumuşak doku yapıları (kıkırdak, menisküs, ligament, tendon)</li>
            <li>Erken inflamasyon, ödem, kitle lezyonları</li>
            <li>Kompleks eklem problemlerinde altın standart</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Ultrason</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Eklem effüzyonu, sinovit, kist</li>
            <li>Tendon ve ligament değerlendirmesi</li>
            <li>Gerçek zamanlı görüntüleme, ekonomik</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">BT (Bilgisayarlı Tomografi)</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Detaylı kemik yapısı</li>
            <li>Kompleks kırıklar, implant değerlendirmesi</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Laboratuvar Testleri</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Tam kan sayımı:</strong> Enfeksiyon, anemi</li>
            <li><strong>Sedimentasyon (ESR) ve CRP:</strong> İnflamasyon belirteçleri</li>
            <li><strong>Romatoid faktör (RF) ve Anti-CCP:</strong> Romatoid artrit</li>
            <li><strong>Ürik asit:</strong> Gut tanısı</li>
            <li><strong>ANA, Anti-dsDNA:</strong> Lupus ve diğer otoimmün hastalıklar</li>
            <li><strong>Eklem sıvısı analizi:</strong> Kristal, bakteri, hücre sayımı</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Artroskopi</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Eklem içi direkt görüntüleme</li>
            <li>Hem tanı hem tedavi amaçlı</li>
            <li>Minimal invaziv yöntem</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Tedavi Seçenekleri</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Eklem ağrısı tedavisi, altta yatan nedene göre bireyselleştirilir:
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Konservatif (Ameliyatsız) Tedaviler</h3>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Yaşam Tarzı Değişiklikleri</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Kilo kontrolü:</strong> Her 1 kg kilo kaybı diz eklemine 4 kg daha az yük</li>
            <li><strong>Düzenli egzersiz:</strong> Düşük etkili aktiviteler (yüzme, bisiklet)</li>
            <li><strong>Ergonomi:</strong> İş yerinde ve günlük aktivitelerde doğru pozisyon</li>
            <li><strong>Diyet:</strong> Antiinflamatuar beslenme (omega-3, sebze-meyve)</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Fizik Tedavi ve Rehabilitasyon</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Güçlendirme egzersizleri</li>
            <li>Hareket açıklığı egzersizleri</li>
            <li>Elektroterapi (TENS, ultrason)</li>
            <li>Manuel terapi</li>
            <li>Sıcak/soğuk uygulamalar</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. İlaç Tedavisi</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Ağrı kesiciler:</strong> Parasetamol, tramadol</li>
            <li><strong>NSAİİ'ler:</strong> İbuprofen, naproksen, diklofenak (antiinflamatuar)</li>
            <li><strong>Kondroitin ve glukozamin:</strong> Kıkırdak desteği (tartışmalı etkililik)</li>
            <li><strong>Kortikosteroidler:</strong> Şiddetli inflamasyonda kısa süreli</li>
            <li><strong>DMARD'lar:</strong> Romatoid artrit gibi otoimmün hastalıklarda</li>
            <li><strong>Biyolojik ajanlar:</strong> TNF inhibitörleri (ileri romatoid artrit)</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4. Enjeksiyon Tedavileri</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Kortikosteroid enjeksiyonları:</strong> Hızlı ağrı azaltma, inflamasyon kontrolü</li>
            <li><strong>Hyaluronik asit (viskosuplemantasyon):</strong> Eklem yağlanması, kıkırdak koruması</li>
            <li><strong>PRP (Zenginleştirilmiş Plazma):</strong> Rejeneratif tedavi, doku onarımı</li>
            <li><strong>Kök hücre tedavisi:</strong> Deneysel, henüz standart değil</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5. Destekleyici Cihazlar</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Ortezler ve destekler</li>
            <li>Yürüme yardımcıları (baston, yürüteç)</li>
            <li>Özel ayakkabı tabanları</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cerrahi Tedaviler</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Konservatif tedaviye yanıt vermeyen ileri vakalarda:
          </p>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Artroskopik Cerrahi</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Minimal invaziv yöntem</li>
            <li>Menisküs tamiri/çıkarılması</li>
            <li>Kıkırdak debridmanı</li>
            <li>Serbest cisim çıkarma</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Osteotomi</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Kemik kesisi ve açı düzeltme</li>
            <li>Yük dağılımını optimize eder</li>
            <li>Genç hastalarda protez geciktirme</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Eklem Protezi (Artroplasti)</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Parsiyel protez:</strong> Eklemin bir kısmı değiştirilir</li>
            <li><strong>Total protez:</strong> Eklemin tamamı yapay eklemle değiştirilir</li>
            <li><strong>Endikasyon:</strong> İleri osteoartrit, romatoid artrit</li>
            <li><strong>Yaygın uygulamalar:</strong> Diz, kalça, omuz protezi</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4. Artrodez (Eklem Füzyonu)</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Eklem kemiklerinin kaynaştırılması</li>
            <li>Ağrıyı ortadan kaldırır, ancak hareketi kısıtlar</li>
            <li>Ayak bileği, el bileği gibi küçük eklemlerde</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
            <p className="text-gray-800">
              <strong>Bursa'da Modern Tedavi İmkanları:</strong> Kliniğimizde eklem ağrısı tedavisinde en son teknoloji görüntüleme cihazları, PRP tedavisi, artroskopik cerrahi ve eklem protezi ameliyatları sunulmaktadır. Hastaya özel tedavi planları ile ağrısız ve fonksiyonel yaşam hedefliyoruz.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Önleme Stratejileri</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Sağlıklı kilo:</strong> Eklemlere aşırı yük bindirmemek</li>
            <li><strong>Düzenli egzersiz:</strong> Kas gücü ve esneklik artışı</li>
            <li><strong>Dengeli beslenme:</strong> Kalsiyum, D vitamini, omega-3</li>
            <li><strong>Yaralanmalardan korunma:</strong> Uygun ekipman, ısınma</li>
            <li><strong>Ergonomik iş ortamı:</strong> Tekrarlayan hareketlerden kaçınma</li>
            <li><strong>Erken tedavi:</strong> İlk belirtilerde uzman değerlendirmesi</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Eklem Ağrısında Günlük Yaşam İpuçları</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Aktivite modifikasyonu:</strong> Ağrı veren hareketlerden kaçınma</li>
            <li><strong>Dinlenme ve aktivite dengesi:</strong> Aşırı kullanım ve hareketsizlikten kaçınma</li>
            <li><strong>Sıcak-soğuk uygulama:</strong> Akut ağrıda soğuk, kronik ağrıda sıcak</li>
            <li><strong>Stres yönetimi:</strong> Yoga, meditasyon, gevşeme teknikleri</li>
            <li><strong>Uyku hijyeni:</strong> Kaliteli uyku iyileşmeyi destekler</li>
            <li><strong>Sosyal destek:</strong> Aile, arkadaş ve destek grupları</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Ne Zaman Doktora Başvurmalısınız?</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Ağrı 3-7 günden uzun sürerse</li>
            <li>Günlük aktiviteleri etkiliyorsa</li>
            <li>Eklemde şişlik, kızarıklık, sıcaklık varsa</li>
            <li>Ateş ile birlikte eklem ağrısı</li>
            <li>Gece ağrıları uykunuzu bozuyorsa</li>
            <li>Hareket kısıtlılığı artıyorsa</li>
            <li>Ev tedavilerine yanıt vermiyorsa</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Sonuç</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Eklem ağrısı yaşam kalitesini ciddi şekilde etkileyen, ancak doğru tanı ve tedavi ile yönetilebilen bir durumdur. Her hastanın durumu benzersizdir ve tedavi bireyselleştirilmelidir. Bursa'da, modern ortopedi kliniğimizde eklem ağrılarınız için kapsamlı değerlendirme ve tedavi seçenekleri sunuyoruz.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Eklem ağrınız varsa, erken tanı ve tedavi için bir ortopedi uzmanına danışmanızı öneririz. Erken müdahale, ilerleyici hasarı önler ve ağrısız, fonksiyonel bir yaşam sağlar.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Bilimsel Kaynaklar</h2>
          <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
            <li>
              Felson DT. "Osteoarthritis: new insights." Annals of Internal Medicine. 2000.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=osteoarthritis+insights" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Smolen JS, Aletaha D, McInnes IB. "Rheumatoid arthritis." Lancet. 2016.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=rheumatoid+arthritis+lancet" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Zhang W, Doherty M, Arden N, et al. "EULAR evidence based recommendations for the management of hip osteoarthritis." Annals of the Rheumatic Diseases. 2005.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=EULAR+hip+osteoarthritis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Neogi T. "The epidemiology and impact of pain in osteoarthritis." Osteoarthritis and Cartilage. 2013.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=osteoarthritis+pain+epidemiology" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Hochberg MC, Altman RD, April KT, et al. "American College of Rheumatology 2012 recommendations for the use of nonpharmacologic and pharmacologic therapies in osteoarthritis." Arthritis Care & Research. 2012.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=ACR+osteoarthritis+recommendations" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Messier SP, Gutekunst DJ, Davis C, DeVita P. "Weight loss reduces knee-joint loads in overweight and obese older adults with knee osteoarthritis." Arthritis & Rheumatism. 2005.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=weight+loss+knee+osteoarthritis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Bellamy N, Campbell J, Robinson V, et al. "Intraarticular corticosteroid for treatment of osteoarthritis of the knee." Cochrane Database of Systematic Reviews. 2006.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=intraarticular+corticosteroid+knee+osteoarthritis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Bannuru RR, Natov NS, Obadan IE, Price LL, Schmid CH, McAlindon TE. "Therapeutic trajectory of hyaluronic acid versus corticosteroids in the treatment of knee osteoarthritis." Arthritis & Rheumatism. 2009.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=hyaluronic+acid+corticosteroid+knee" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Foster NE, Thomas E, Barlas P, et al. "Acupuncture as an adjunct to exercise based physiotherapy for osteoarthritis of the knee." BMJ. 2007.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=acupuncture+knee+osteoarthritis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Kurtz SM, Lau E, Ong K, Zhao K, Kelly M, Bozic KJ. "Future young patient demand for primary and revision joint replacement." Journal of Bone and Joint Surgery. 2009.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=joint+replacement+demand+young" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
            </li>
          </ol>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Eklem Ağrınız İçin Uzman Değerlendirmesi</h2>
          <p className="text-lg mb-6 text-blue-100">
            Bursa'da modern ortopedi kliniğimizde eklem ağrılarınız için kapsamlı tanı ve tedavi hizmetleri sunuyoruz. 
            Ağrısız ve fonksiyonel bir yaşam için bugün randevu alın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/iletisim"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition text-center"
            >
              Randevu Alın
            </Link>
            <Link
              href="/hizmetler"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-center"
            >
              Hizmetlerimiz
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">İlgili Makaleler</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/hidrojel-sivi-diz-protezi-nedir-2" className="group">
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                    Hidrojel Sıvı Diz Protezi
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Diz protezlerinde yeni teknoloji: Hidrojel sıvı protezler.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/blog/ayak-bilegi-artroskopisi-nedir" className="group">
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                    Ayak Bileği Artroskopisi
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Minimal invaziv ayak bileği tedavi seçenekleri.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/blog/el-bilegi-artroskopisi" className="group">
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                    El Bileği Artroskopisi
                  </h3>
                  <p className="text-gray-600 text-sm">
                    El bileği problemlerinde modern cerrahi yaklaşım.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
