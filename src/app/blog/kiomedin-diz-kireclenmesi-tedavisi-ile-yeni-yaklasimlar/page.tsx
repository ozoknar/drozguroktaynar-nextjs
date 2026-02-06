import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kiomedin: Diz Kireçlenmesi Tedavisinde Yeni Yaklaşımlar ve Biyoteknolojik Gelişmeler',
  description: 'Kiomedin ve kıkırdak rejenerasyon teknolojileri hakkında güncel bilgiler. Diz kireçlenmesi tedavisinde biyoteknolojik yaklaşımlar ve geleceğin tedavi seçenekleri.',
  keywords: 'kiomedin, diz kireçlenmesi, kıkırdak rejenerasyonu, biyoteknoloji, osteoartrit tedavisi, yenileyici tıp',
  openGraph: {
    title: 'Kiomedin ve Diz Kireçlenmesi Tedavisinde Yeni Yaklaşımlar | Op. Dr. Özgür Oktay Nar',
    description: 'Diz osteoartrit tedavisinde biyoteknolojik gelişmeler ve yenileyici tıp yaklaşımları.',
    type: 'article',
    locale: 'tr_TR',
    siteName: 'Op. Dr. Özgür Oktay Nar',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kiomedin ve Diz Kireçlenmesi Tedavisinde Yeni Yaklaşımlar',
    description: 'Kıkırdak rejenerasyonu ve biyoteknolojik tedavi yöntemleri.',
  },
  alternates: {
    canonical: 'https://www.drozguroktaynar.com/blog/kiomedin-diz-kireclenmesi-tedavisi-ile-yeni-yaklasimlar',
  },
};

export default function KiomedinDizKireclenmesiPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: 'Kiomedin: Diz Kireçlenmesi Tedavisinde Yeni Yaklaşımlar ve Biyoteknolojik Gelişmeler',
    description: 'Diz osteoartriti tedavisinde kiomedin ve diğer biyoteknolojik yaklaşımlar hakkında kapsamlı bilgi.',
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
      name: 'Diz Kireçlenmesi (Gonarthroz)',
      alternateName: 'Diz Osteoartriti',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-purple-50 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-4">
              Yenilikçi Tedaviler
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Kiomedin: Diz Kireçlenmesi Tedavisinde Yeni Yaklaşımlar ve Biyoteknolojik Gelişmeler
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Diz osteoartriti tedavisinde kıkırdak rejenerasyonu, biyoteknolojik ajanlar ve yenileyici tıp yaklaşımları hakkında güncel bilgiler.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Diz Kireçlenmesi Tedavisinde Yeni Dönem</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Diz osteoartriti (gonarthroz), milyonlarca insanı etkileyen, eklem kıkırdağının dejenerasyonu ile karakterize kronik bir hastalıktır. Geleneksel tedavi yöntemleri ağrı yönetimi ve fonksiyon iyileştirmeye odaklanırken, son yıllarda <strong>kıkırdak rejenerasyonu</strong> ve <strong>hastalık modifikasyonu</strong> hedefleyen biyoteknolojik yaklaşımlar büyük ilgi görmektedir.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bu makalede, kiomedin gibi araştırma aşamasındaki moleküller, kıkırdak biyolojisi ve güncel tedavi yöntemleri hakkında bilimsel temelli bilgiler sunulacaktır.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">🔬 Kiomedin Nedir?</h3>
            <p className="text-gray-700 leading-relaxed">
              <strong>Kiomedin (Chondromodulin-I benzeri proteinler)</strong>, kıkırdak doku gelişimi ve homeostazında rol oynayan, damar oluşumunu düzenleyen endojen proteinlerdir. Araştırmalar, kıkırdak dokusunun avasküler (damarsız) yapısını korumada kiomedin benzeri faktörlerin önemli olduğunu göstermektedir. Ancak, kiomedin'in diz osteoartriti tedavisinde klinik kullanımı henüz deneysel aşamadadır ve onaylanmış bir tedavi seçeneği değildir.
            </p>
          </div>
        </section>

        {/* Section 2: Kıkırdak Biyolojisi */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Kıkırdak Dokusu ve Dejenerasyon Mekanizması</h2>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Kıkırdak Yapısı ve Fonksiyonu</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Artiküler (eklem) kıkırdak, kemik uçlarını kaplayan, sürtünmeyi azaltan ve yük dağılımını sağlayan özel bir dokudur. Temel bileşenleri:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Kondrosit hücreleri:</strong> Kıkırdağın tek hücre tipi, matriks sentezi yapar</li>
            <li><strong>Ekstraselüler matriks:</strong> Kollajen tip II (%60-70), proteoglikanlar (aggrekan), su (%70-80)</li>
            <li><strong>Avasküler yapı:</strong> Kıkırdak damarsız, beslenmesi difüzyonla olur</li>
            <li><strong>Düşük rejenerasyon kapasitesi:</strong> Hasarlandığında kendini yenileme sınırlıdır</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Osteoartrit Patogenezi</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Diz osteoartritinde kıkırdak dejenerasyonu çok faktörlü bir süreçtir:
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">🔥 Katabolik Süreçler</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Matris metalloproteinazlar (MMPs) artışı</li>
                <li>• Aggrekanazlar (ADAMTS) aktivasyonu</li>
                <li>• Kollajen yıkımı</li>
                <li>• Proteoglikan kaybı</li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">⚡ İnflamatuar Süreçler</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• IL-1β, TNF-α, IL-6 sitokin artışı</li>
                <li>• Prostaglandin E2 (PGE2) salınımı</li>
                <li>• Nitrik oksit (NO) üretimi</li>
                <li>• Sinoviyal inflamasyon</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Mevcut Tedavi Yaklaşımları */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Güncel Tedavi Yöntemleri ve Etkinlikleri</h2>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Farmakolojik Tedaviler</h3>
          
          <div className="space-y-6 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">💊 Analjezikler ve NSAİİ'ler</h4>
              <p className="text-gray-700 mb-2">
                <strong>Mekanizma:</strong> Ağrı algısını bloke eder (parasetamol) veya inflamasyonu azaltır (ibuprofen, naproksen, selektif COX-2 inhibitörleri).
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Kanıt Düzeyi:</strong> Yüksek - Kısa-orta vadede etkili, hastalık modifikasyonu yok
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">💉 İntraartiküler Hyalüronik Asit</h4>
              <p className="text-gray-700 mb-2">
                <strong>Mekanizma:</strong> Eklem sıvısının viskositesini artırır (viskosüplemasyon), kayganlaştırıcı ve hafif anti-inflamatuar etki.
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Kanıt Düzeyi:</strong> Orta - Bazı hastalarda 3-6 ay ağrı azalması, tartışmalı etkinlik
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">💉 Kortikosteroid Enjeksiyonları</h4>
              <p className="text-gray-700 mb-2">
                <strong>Mekanizma:</strong> Güçlü anti-inflamatuar etki, sitokin salınımını baskılar.
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Kanıt Düzeyi:</strong> Orta-Yüksek - Kısa süreli etki (2-8 hafta), tekrarlı kullanımda kıkırdak hasarı riski
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Yenileyici Tıp Yaklaşımları (Regeneratif Tedaviler)</h3>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">🧬 PRP (Platelet-Rich Plasma) Tedavisi</h4>
            <p className="text-gray-700 mb-2">
              <strong>Mekanizma:</strong> Hastanın kendi kanından elde edilen trombosit zenginleştirilmiş plazma, büyüme faktörleri (PDGF, TGF-β, VEGF, IGF-1) içerir. Bu faktörler kıkırdak hücre proliferasyonunu, matriks sentezini ve anti-inflamatuar sinyali destekler.
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Kanıt Düzeyi:</strong> Orta - Bazı çalışmalar ağrı azalması ve fonksiyon iyileşmesi göstermiş, ancak standart protokol ve uzun dönem etkinlik tartışmalı.
            </p>
            <p className="text-gray-700 text-sm">
              <strong>Uygulama:</strong> 1-3 enjeksiyon, 1-4 hafta ara ile
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">🧬 Mezenkimal Kök Hücre (MSC) Tedavisi</h4>
            <p className="text-gray-700 mb-2">
              <strong>Mekanizma:</strong> Kemik iliği veya yağ dokusundan elde edilen kök hücreler, kondrojenik farklılaşma potansiyeli, parakrin anti-inflamatuar etki ve immünomodülasyon sağlar.
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Kanıt Düzeyi:</strong> Düşük-Orta - Klinik çalışmalar devam ediyor, uzun dönem güvenlik ve etkinlik henüz kesinleşmemiş. Bazı ülkelerde deneysel tedavi statüsünde.
            </p>
            <p className="text-gray-700 text-sm">
              <strong>Uygulama:</strong> İntraartiküler enjeksiyon veya matriks destekli implantasyon
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">🧬 Otolog Kondrosit İmplantasyonu (ACI)</h4>
            <p className="text-gray-700 mb-2">
              <strong>Mekanizma:</strong> Hastanın kendi kıkırdak hücreleri biyopsi ile alınır, laboratuvarda çoğaltılır ve defekt alanına implante edilir.
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Kanıt Düzeyi:</strong> Orta-Yüksek - Lokalize fokal kıkırdak defektlerinde etkili, yaygın osteoartrit için sınırlı kullanım.
            </p>
            <p className="text-gray-700 text-sm">
              <strong>Endikasyon:</strong> Genç hastalar, iyi huylu fokal defektler (2-10 cm²)
            </p>
          </div>
        </section>

        {/* Section 4: Biyoteknolojik Gelişmeler */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Biyoteknolojik Ajanlar ve Gelecek Tedaviler</h2>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Kiomedin ve Kıkırdak Homeostazı</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Chondromodulin-I (CHM-I)</strong> ve benzeri proteinler, kıkırdak dokusunda damar oluşumunu inhibe ederek avasküler yapıyı korur. Preklinik çalışmalar, CHM-I'in kondrosit farklılaşmasını desteklediğini ve osteoartrit modellerinde koruyucu etki gösterdiğini ileri sürmektedir.
          </p>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">🔬 Araştırma Aşamasındaki Potansiyel</h4>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Anti-anjiogenik etki:</strong> Kıkırdak damarsız yapısını koruma</li>
              <li><strong>Kondrosit maturasyonu:</strong> Kıkırdak hücre olgunlaşmasını düzenleme</li>
              <li><strong>Matriks stabilizasyonu:</strong> Kıkırdak yapısının korunması</li>
            </ul>
            <p className="text-gray-700 mt-4 text-sm">
              ⚠️ <strong>Önemli Not:</strong> Kiomedin veya CHM-I bazlı tedaviler henüz insan kullanımı için onaylanmamıştır. Klinik çalışmalar devam etmektedir.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Diğer Gelişmekte Olan Yaklaşımlar</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">🧪 Gen Terapisi</h4>
              <p className="text-gray-700 text-sm">
                <strong>Hedef:</strong> IL-1 reseptör antagonisti (IL-1Ra), TGF-β gibi genlerin transferi ile anti-katabolik/anabolik etki sağlama.
              </p>
              <p className="text-gray-700 text-sm mt-2">
                <strong>Durum:</strong> Faz I/II klinik çalışmalar
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">🧪 Küçük Molekül İnhibitörler</h4>
              <p className="text-gray-700 text-sm">
                <strong>Hedef:</strong> MMP inhibitörleri, aggrekanaz inhibitörleri, MAPK yolağı inhibitörleri.
              </p>
              <p className="text-gray-700 text-sm mt-2">
                <strong>Durum:</strong> Preklinik/erken klinik araştırmalar
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">🧪 Doku Mühendisliği</h4>
              <p className="text-gray-700 text-sm">
                <strong>Hedef:</strong> 3D biyobaskı, scaffold (iskele) temelli kıkırdak doku üretimi.
              </p>
              <p className="text-gray-700 text-sm mt-2">
                <strong>Durum:</strong> Laboratuvar aşaması, fokal defektler için deneysel
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">🧪 Ekzozom Tedavisi</h4>
              <p className="text-gray-700 text-sm">
                <strong>Hedef:</strong> MSC kaynaklı ekzozomlar ile anti-inflamatuar ve rejeneratif sinyal taşınması.
              </p>
              <p className="text-gray-700 text-sm mt-2">
                <strong>Durum:</strong> Preklinik çalışmalar, umut verici sonuçlar
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Klinik Uygulama */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Klinik Uygulama ve Hasta Seçimi</h2>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Biyolojik Tedavilerde Hasta Seçimi</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Yenileyici tedaviler her hasta için uygun olmayabilir. İdeal aday profili:
          </p>
          
          <div className="bg-green-50 p-6 rounded-lg mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">✅ İyi Adaylar</h4>
            <ul className="text-gray-700 space-y-2">
              <li>• Erken-orta evre osteoartrit (Kellgren-Lawrence Evre 1-2)</li>
              <li>• Genç-orta yaş hastalar (&lt;60 yaş)</li>
              <li>• Fokal kıkırdak defektleri</li>
              <li>• Aktif yaşam tarzı, spor yapma isteği</li>
              <li>• Konservatif tedavilere sınırlı yanıt</li>
            </ul>
          </div>

          <div className="bg-red-50 p-6 rounded-lg mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">❌ Uygun Olmayan Durumlar</h4>
            <ul className="text-gray-700 space-y-2">
              <li>• İleri evre osteoartrit (Evre 4, bone-on-bone)</li>
              <li>• Geniş yaygın eklem hasarı</li>
              <li>• Aktif enfeksiyon</li>
              <li>• Kanser öyküsü (bazı biyolojik tedaviler için)</li>
              <li>• Diz dizilim bozuklukları (varus/valgus &gt;5°)</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tedavi Kombinasyonları</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            En iyi sonuçlar genellikle multimodal yaklaşımla elde edilir:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Kilo kontrolü:</strong> Her 1 kg kayıp diz eklemine 3-4 kg yük azaltır</li>
            <li><strong>Egzersiz programı:</strong> Kas güçlendirme, propriyosepsiyon, aerobik aktivite</li>
            <li><strong>Fizik tedavi:</strong> TENS, ultrason, lazer</li>
            <li><strong>Biyolojik ajan:</strong> PRP, MSC veya diğer enjeksiyonlar</li>
            <li><strong>Yaşam tarzı modifikasyonu:</strong> Eklem koruma teknikleri</li>
          </ul>
        </section>

        {/* Section 6: Kanıt Temelli Yaklaşım */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Kanıt Düzeyleri ve Klinik Kararlar</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">📊 Tedavi Piramidi (Kanıt Bazlı)</h3>
            <ol className="text-gray-700 space-y-2">
              <li><strong>1. Basamak (Kesin Kanıt):</strong> Kilo kontrolü, egzersiz, fizik tedavi, NSAİİ'ler</li>
              <li><strong>2. Basamak (Orta Kanıt):</strong> İntraartiküler kortikosteroid, hyalüronik asit</li>
              <li><strong>3. Basamak (Gelişen Kanıt):</strong> PRP, ACI (fokal defektler için)</li>
              <li><strong>4. Basamak (Deneysel):</strong> MSC, gen terapisi, kiomedin benzeri ajanlar</li>
              <li><strong>5. Basamak (Kesin Kanıt):</strong> Total diz protezi (ileri evre)</li>
            </ol>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Hasta Danışmanlığı İlkeleri</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Biyoteknolojik tedaviler konusunda hastalarla konuşurken:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li><strong>Gerçekçi beklentiler:</strong> "Mucize tedavi" değil, semptom yönetimi ve hastalık yavaşlatma hedefi</li>
            <li><strong>Kanıt sınırlamaları:</strong> Uzun dönem etkinlik ve güvenlik verisi sınırlı</li>
            <li><strong>Maliyet faktörü:</strong> Biyolojik tedaviler genellikle pahalı ve sigorta kapsamı değişken</li>
            <li><strong>Alternatif seçenekler:</strong> Konservatif tedaviler ve cerrahi seçenekler hakkında bilgilendirme</li>
          </ul>
        </section>

        {/* Section 7: Sonuç ve Kaynaklar */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Sonuç ve Gelecek Perspektifi</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Diz osteoartriti tedavisinde biyoteknolojik ve yenileyici yaklaşımlar hızla gelişmektedir. Kiomedin gibi kıkırdak homeostazını düzenleyen moleküller, gelecekte hastalık modifiye edici tedavilerin temelini oluşturabilir. Ancak, bu ajanların klinik kullanıma girmesi için kapsamlı randomize kontrollü çalışmalar ve uzun dönem güvenlik verileri gerekmektedir.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Mevcut kanıtlar ışığında, PRP ve ACI gibi bazı yenileyici tedaviler seçilmiş hastalarda umut verici sonuçlar göstermektedir. Ancak, en güçlü kanıt hala yaşam tarzı değişiklikleri, egzersiz ve gerektiğinde cerrahi tedavilerdedir.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Gelecek on yılda, kişiselleştirilmiş tıp, doku mühendisliği ve gen terapisi gibi yaklaşımların diz osteoartriti tedavisinde devrim yaratması beklenmektedir.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Kaynaklar ve İleri Okuma</h3>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2">
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=chondromodulin+cartilage" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Chondromodulin ve Kıkırdak Biyolojisi - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=PRP+knee+osteoarthritis+meta-analysis" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  PRP Diz Osteoartriti Meta-Analiz - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=mesenchymal+stem+cell+knee+osteoarthritis" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Mezenkimal Kök Hücre Diz Osteoartriti - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=autologous+chondrocyte+implantation" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Otolog Kondrosit İmplantasyonu - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=cartilage+regeneration+biomaterials" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Kıkırdak Rejenerasyonu ve Biyomalzemeler - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=gene+therapy+osteoarthritis" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Gen Terapisi ve Osteoartrit - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=hyaluronic+acid+viscosupplementation" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Hyalüronik Asit Viskosüplemasyon - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=exosome+therapy+cartilage" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Ekzozom Tedavisi ve Kıkırdak - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=MMP+inhibitors+osteoarthritis" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  MMP İnhibitörleri ve Osteoartrit - PubMed Ara
                </a>
              </li>
              <li>
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=tissue+engineering+cartilage+3D+printing" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Doku Mühendisliği ve 3D Biyobaskı Kıkırdak - PubMed Ara
                </a>
              </li>
            </ol>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Diz Kireçlenmesi Tedavi Seçeneklerinizi Keşfedin</h2>
          <p className="text-xl mb-8 text-purple-100">
            Size uygun, kanıt temelli tedavi planı oluşturmak için uzman değerlendirmesi alın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/iletisim"
              className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              Randevu Al
            </Link>
            <Link
              href="/tedaviler"
              className="inline-block bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 transition-colors border-2 border-purple-500"
            >
              Tedavi Yöntemleri
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
