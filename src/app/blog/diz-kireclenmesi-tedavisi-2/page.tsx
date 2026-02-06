import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diz Kireçlenmesi Tedavisi: Güncel Yöntemler | Op. Dr. Özgür Oktay Nar",
  description: "Diz kireçlenmesi (osteoartrit) tedavisinde konservatif ve cerrahi yöntemler. PRP, viscosupplementation, diz protezi. Bursa ortopedi uzmanı.",
  keywords: ["diz kireçlenmesi tedavisi", "osteoartrit", "diz protezi", "PRP tedavisi", "hyaluronik asit", "bursa ortopedi"],
  openGraph: {
    title: "Diz Kireçlenmesi Tedavisi: Güncel Yöntemler",
    description: "Diz kireçlenmesi tedavi seçenekleri. Op. Dr. Özgür Oktay Nar - Bursa Ortopedi Uzmanı",
    type: "article",
    url: "https://www.ozguroktaynar.com/blog/diz-kireclenmesi-tedavisi-2",
    images: [
      {
        url: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/01/diz_kireclenmesi.jpg",
        width: 1200,
        height: 800,
        alt: "Diz Kireçlenmesi Tedavisi",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Diz Kireçlenmesi Tedavisi: Güncel Yöntemler",
  "description": "Diz kireçlenmesi (osteoartrit), kıkırdağın aşınması ve eklem iltihabı ile karakterize ilerleyici bir hastalıktır. Tedavi seçenekleri hastalık evresine göre değişir.",
  "author": {
    "@type": "Person",
    "name": "Op. Dr. Özgür Oktay Nar",
    "jobTitle": "Ortopedi ve Travmatoloji Uzmanı",
    "url": "https://www.ozguroktaynar.com/hakkimda"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Op. Dr. Özgür Oktay Nar",
    "url": "https://www.ozguroktaynar.com"
  },
  "datePublished": "2024-01-15",
  "dateModified": "2026-02-06",
  "mainEntityOfPage": "https://www.ozguroktaynar.com/blog/diz-kireclenmesi-tedavisi-2",
  "image": "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/01/diz_kireclenmesi.jpg"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Diz kireçlenmesi tedavisi nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Diz kireçlenmesi tedavisi, hastalık evresine göre kilo kaybı, fizik tedavi, ilaç, enjeksiyonlar (PRP, hyaluronik asit), artroskopi veya diz protezi uygulamasını içerir."
      }
    },
    {
      "@type": "Question",
      "name": "Diz kireçlenmesinde ameliyatsız tedavi mümkün mü?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Erken evrede konservatif tedavi (kilo kaybı, egzersiz, ilaç, enjeksiyon) etkilidir. İleri evrede cerrahi tedavi gerekebilir."
      }
    },
    {
      "@type": "Question",
      "name": "PRP tedavisi diz kireçlenmesine iyi gelir mi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "PRP (platelet-rich plasma) erken ve orta evre osteoartritte ağrı ve fonksiyonu iyileştirebilir. İleri evrede etkisi sınırlıdır."
      }
    }
  ]
};

export default function DizKireclenmesiTedavisi2Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-900 to-teal-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-teal-500 text-sm px-3 py-1 rounded-full mb-4">
                Diz Kireçlenmesi
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Diz Kireçlenmesi Tedavisi
              </h1>
              <p className="text-xl text-teal-100 mb-6">
                Güncel tedavi yöntemleri ve cerrahi seçenekler
              </p>
              <a
                href="tel:+905398416801"
                className="inline-block bg-white text-teal-900 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition"
              >
                Randevu Al: 0539 841 68 01
              </a>
            </div>
            <div className="hidden md:block">
              <img
                src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/01/diz_kireclenmesi.jpg"
                alt="Diz Kireçlenmesi Tedavisi"
                className="rounded-lg shadow-2xl"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Introduction */}
          <section className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 leading-relaxed">
              <strong>Diz kireçlenmesi (osteoartrit)</strong>, eklemdeki kıkırdağın zamanla aşınması 
              ve eklem iltihabı ile karakterize ilerleyici bir hastalıktır. <strong>Yaşa bağlı yıpranma</strong>, 
              obezite, travma ve genetik faktörler risk oluşturur.
            </p>
            <p className="text-gray-600">
              Tedavi, hastalığın evresine, hastanın yaşına, aktivite düzeyine ve semptomlara göre bireyselleştirilir. 
              Erken tanı ve doğru tedavi ile yaşam kalitesi önemli ölçüde iyileşir.
            </p>
          </section>

          {/* Staging Section */}
          <section className="mb-12 bg-teal-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Osteoartrit Evreleri (Kellgren-Lawrence)
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                <span className="text-2xl">0️⃣</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Evre 0 - Normal</h3>
                  <p className="text-sm text-gray-600">Eklemde kireçlenme bulgusu yok</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                <span className="text-2xl">1️⃣</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Evre 1 - Şüpheli</h3>
                  <p className="text-sm text-gray-600">Minimal osteofitler, belirsiz eklem aralığı daralması</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                <span className="text-2xl">2️⃣</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Evre 2 - Hafif</h3>
                  <p className="text-sm text-gray-600">Kesin osteofitler, hafif eklem aralığı daralması</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                <span className="text-2xl">3️⃣</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Evre 3 - Orta</h3>
                  <p className="text-sm text-gray-600">Orta derecede eklem aralığı daralması, belirgin osteofitler</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                <span className="text-2xl">4️⃣</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Evre 4 - İleri</h3>
                  <p className="text-sm text-gray-600">Eklem aralığı tamamen kaybolmuş, kemik-kemik teması</p>
                </div>
              </div>
            </div>
          </section>

          {/* Conservative Treatment */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Konservatif (Ameliyatsız) Tedavi
            </h2>
            
            <div className="space-y-4">
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="font-semibold text-green-800 mb-3">⚖️ Kilo Kaybı</h3>
                <p className="text-gray-700">
                  <strong>5-10 kg kilo kaybı</strong> dizlerdeki yükü önemli ölçüde azaltır. 
                  Her 1 kg kilo kaybı, diz eklemine gelen yükü 4 kg azaltır. Diyetisyen desteği ile 
                  dengeli beslenme programı önerilir.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-semibold text-blue-800 mb-3">🚴 Egzersiz ve Fizik Tedavi</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Düşük etkili egzersizler:</strong> Yüzme, su jimnastiği, bisiklet, yürüyüş
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Quadriceps (uyluk ön kası) güçlendirme</li>
                  <li>• Hamstring (uyluk arka kası) germe</li>
                  <li>• Denge ve propriosepsiyon egzersizleri</li>
                  <li>• Manuel terapi ve mobilizasyon</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="font-semibold text-purple-800 mb-3">💊 İlaç Tedavisi</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-800 text-sm">1. Ağrı Kesiciler (Analjezikler)</h4>
                    <p className="text-sm text-gray-600">Parasetamol - İlk tercih (güvenli, yan etki az)</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 text-sm">2. NSAİİ (Nonsteroid Antienflamatuar)</h4>
                    <p className="text-sm text-gray-600">İbuprofen, naproksen, diklofenak - İltihabı azaltır</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 text-sm">3. Kondroprotektif Ajanlar</h4>
                    <p className="text-sm text-gray-600">Glukozamin, kondroitin sülfat - Kıkırdak desteği (tartışmalı)</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 text-sm">4. Topikal Tedaviler</h4>
                    <p className="text-sm text-gray-600">NSAİİ içeren kremler/jeller - Lokal uygulama</p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="font-semibold text-orange-800 mb-3">💉 Enjeksiyon Tedavileri</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">🔸 Hyaluronik Asit (Viscosupplementation)</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      Eklem sıvısının viskoelastik özelliklerini iyileştirir. <strong>3-5 enjeksiyon</strong> 
                      (haftalık veya tek seans).
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Erken-orta evre osteoartritte etkili</li>
                      <li>• Etki süresi: 6-12 ay</li>
                      <li>• Yan etki: Minimal (geçici şişlik, ağrı)</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">🔹 PRP (Platelet-Rich Plasma)</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      Hastanın kendi kanından elde edilen <strong>trombosit yoğun plazma</strong>. 
                      Büyüme faktörleri ve sitokinler içerir.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Orta evre osteoartritte ümit verici</li>
                      <li>• 1-3 enjeksiyon (2-4 hafta arayla)</li>
                      <li>• Hyaluronik asitten daha uzun etki süresi</li>
                      <li>• İleri evrede sınırlı etki</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">🔺 Kortikosteroid Enjeksiyonu</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Güçlü anti-enflamatuar</strong> etki. Kısa süreli ağrı kontrolü.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Akut alevlenmelerde tercih edilir</li>
                      <li>• Maksimum yılda 3-4 enjeksiyon</li>
                      <li>• Uzun dönemde kıkırdak hasarı riski</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">🧬 Stromal Vascular Fraction (SVF) / Kök Hücre</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      Yağ dokusundan veya kemik iliğinden elde edilen <strong>mezenkimal kök hücreler</strong>.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Rejeneratif potansiyel</li>
                      <li>• Araştırma aşamasında (henüz standart tedavi değil)</li>
                      <li>• Pahalı ve sınırlı erişilebilirlik</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="font-semibold text-yellow-800 mb-3">🦵 Ortezler ve Yardımcı Araçlar</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Diz breysi:</strong> Eklem stabilitesi ve yük dağılımı</li>
                  <li>• <strong>Ayakkabı tabanı (insole):</strong> Yük çizgisi düzeltme</li>
                  <li>• <strong>Baston:</strong> Karşı ele baston ile yük azaltma</li>
                  <li>• <strong>Walker/Yürüteç:</strong> İleri evrede destek</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Surgical Treatment */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Cerrahi Tedavi Seçenekleri
            </h2>

            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="font-semibold text-blue-800 mb-3">🔬 Diz Artroskopisi</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Minimal invaziv</strong> yöntem. Erken evre osteoartrit, mekanik semptomlar 
                  (menisküs yırtığı, gevşek cisim) için.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Debridman (hasar görmüş doku temizliği)</li>
                  <li>• Menisküsektomi (menisküs yırtığı onarımı)</li>
                  <li>• Kondral lezyon tedavisi (mikrofraktür, mozaikoplasti)</li>
                  <li>• <strong>Not:</strong> İleri evrede fayda sağlamaz</li>
                </ul>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h3 className="font-semibold text-purple-800 mb-3">📐 Osteotomi (Kemik Kesisi)</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Genç, aktif hastalarda</strong> tek kompartman tutulumu (mediyal veya lateral) 
                  varsa yük hattını düzeltmek için uygulanır.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>HTO (High Tibial Osteotomy):</strong> Tibia üst kesisi</li>
                  <li>• <strong>DFO (Distal Femoral Osteotomy):</strong> Femur alt kesisi</li>
                  <li>• Diz protezini 10-15 yıl erteleyebilir</li>
                  <li>• İyileşme süresi 3-6 ay</li>
                </ul>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="font-semibold text-red-800 mb-3">🦴 Kısmi Diz Protezi (Unikondiler Protez)</h3>
                <p className="text-gray-700 mb-3">
                  Sadece <strong>bir kompartmanın değiştirilmesi</strong> (mediyal veya lateral). 
                  Seçilmiş hastalarda uygulanır.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Tek kompartman tutulumu</li>
                  <li>• Bağlar sağlam</li>
                  <li>• 60 yaş altı, düşük BMI</li>
                  <li>• Daha hızlı iyileşme, daha doğal his</li>
                  <li>• Revizyon riski total protezden yüksek</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="font-semibold text-green-800 mb-3">🏥 Total Diz Protezi (TKA)</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Altın standart</strong> tedavi. İleri evre osteoartrit, konservatif tedaviye 
                  yanıtsızlık, yaşam kalitesinde belirgin düşüş.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Endikasyonlar:</strong> Evre 3-4 osteoartrit, dinlenmede ağrı, gece ağrısı</li>
                  <li>• <strong>Cerrahi süre:</strong> 1-2 saat</li>
                  <li>• <strong>Hastanede kalış:</strong> 2-4 gün</li>
                  <li>• <strong>Yürüme:</strong> Ameliyat sonrası 1. gün</li>
                  <li>• <strong>İyileşme:</strong> 6-12 hafta (tam iyileşme 6-12 ay)</li>
                  <li>• <strong>Ömür:</strong> %90-95 implant 15-20 yıl sorunsuz</li>
                  <li>• <strong>Komplikasyonlar:</strong> Enfeksiyon (%1), DVT/PE (%1-2), sinir/damar hasarı (nadir)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Treatment Algorithm */}
          <section className="mb-12 bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Tedavi Algoritması
            </h2>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-center gap-3">
                <span className="bg-green-200 px-3 py-1 rounded text-sm font-medium">Evre 1-2</span>
                <span>→ Kilo kaybı + Egzersiz + NSAİİ + Hyaluronik asit/PRP</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-yellow-200 px-3 py-1 rounded text-sm font-medium">Evre 3</span>
                <span>→ Yukarıdakiler + Artroskopi/Osteotomi (genç hasta) veya Kısmi protez</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-red-200 px-3 py-1 rounded text-sm font-medium">Evre 4</span>
                <span>→ Total Diz Protezi</span>
              </div>
            </div>
          </section>

          {/* When to See Doctor Section */}
          <section className="mb-12 bg-red-50 border-l-4 border-red-500 p-8 rounded-r-lg">
            <h2 className="text-2xl font-bold text-red-800 mb-4">
              ⚠️ Ne Zaman Doktora Gidilmeli?
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span className="text-red-500">•</span>
                <span>Dinlenme sırasında veya gece ağrısı</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">•</span>
                <span>3 aydan uzun süren diz ağrısı</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">•</span>
                <span>Yürüme mesafesinde belirgin azalma</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">•</span>
                <span>Merdiven inip çıkmada güçlük</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">•</span>
                <span>İlaçlarla kontrol edilemeyen ağrı</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">•</span>
                <span>Yaşam kalitesinde belirgin düşüş</span>
              </li>
            </ul>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Sıkça Sorulan Sorular
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Diz kireçlenmesi tedavisi nedir?",
                  a: "Diz kireçlenmesi tedavisi, hastalık evresine göre kilo kaybı, fizik tedavi, ilaç, enjeksiyonlar (PRP, hyaluronik asit), artroskopi veya diz protezi uygulamasını içerir."
                },
                {
                  q: "Diz kireçlenmesinde ameliyatsız tedavi mümkün mü?",
                  a: "Erken evrede konservatif tedavi (kilo kaybı, egzersiz, ilaç, enjeksiyon) etkilidir. İleri evrede cerrahi tedavi gerekebilir."
                },
                {
                  q: "PRP tedavisi diz kireçlenmesine iyi gelir mi?",
                  a: "PRP (platelet-rich plasma) erken ve orta evre osteoartritte ağrı ve fonksiyonu iyileştirebilir. İleri evrede etkisi sınırlıdır."
                },
                {
                  q: "Diz protezi ne zaman gerekir?",
                  a: "İleri evre osteoartrit (Evre 3-4), konservatif tedaviye yanıtsızlık, dinlenmede ağrı ve yaşam kalitesinde belirgin düşüş varsa diz protezi önerilir."
                }
              ].map((faq, i) => (
                <details key={i} className="bg-gray-50 rounded-lg p-4 group">
                  <summary className="font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                    {faq.q}
                    <span className="text-teal-500 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-3 text-gray-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Diz Kireçlenmesi Tedavisi
            </h2>
            <p className="text-teal-100 mb-6">
              Bireysel tedavi planı için uzman değerlendirme. Erken müdahale ile yaşam kalitenizi iyileştirin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+905398416801"
                className="bg-white text-teal-700 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition"
              >
                📞 0539 841 68 01
              </a>
              <a
                href="https://wa.me/905398416801"
                className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
              >
                💬 WhatsApp
              </a>
            </div>
          </section>

          {/* PubMed References */}
          <section className="mt-12 bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span>📚</span> Bilimsel Kaynaklar
            </h3>
            <ol className="space-y-3 text-sm text-gray-700">
              <li>
                <span className="font-medium">1.</span> Zhang W, et al. <em>"OARSI recommendations for the management of hip and knee osteoarthritis, Part II: OARSI evidence-based, expert consensus guidelines."</em> Osteoarthritis Cartilage. 2008;16(2):137-62.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=knee+osteoarthritis+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">2.</span> McAlindon TE, et al. <em>"OARSI guidelines for the non-surgical management of knee osteoarthritis."</em> Osteoarthritis Cartilage. 2014;22(3):363-88.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=knee+osteoarthritis+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">3.</span> Bannuru RR, et al. <em>"Comparative effectiveness of pharmacologic interventions for knee osteoarthritis: a systematic review and network meta-analysis."</em> Ann Intern Med. 2015;162(1):46-54.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=knee+osteoarthritis+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">4.</span> Meheux CJ, et al. <em>"Efficacy of intra-articular platelet-rich plasma injections in knee osteoarthritis: a systematic review."</em> Arthroscopy. 2016;32(3):495-505.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=knee+osteoarthritis+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">5.</span> Huang Y, et al. <em>"Platelet-rich plasma versus hyaluronic acid in the treatment of knee osteoarthritis: a meta-analysis."</em> Am J Sports Med. 2022;50(14):3971-81.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=knee+osteoarthritis+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
            </ol>
            
            <details className="mt-4">
              <summary className="cursor-pointer text-blue-600 font-medium hover:text-blue-800 flex items-center gap-2">
                <span>📖 Daha Fazla Kaynak Göster (5 ek referans)</span>
              </summary>
              <ol start={6} className="space-y-3 text-sm text-gray-700 mt-4 pt-4 border-t">
                <li>
                  <span className="font-medium">6.</span> Carr AJ, et al. <em>"Knee replacement."</em> Lancet. 2012;379(9823):1331-40.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=knee+osteoarthritis+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">7.</span> Bellamy N, et al. <em>"Viscosupplementation for the treatment of osteoarthritis of the knee."</em> Cochrane Database Syst Rev. 2006;(2):CD005321.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=knee+osteoarthritis+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">8.</span> Glyn-Jones S, et al. <em>"Osteoarthritis."</em> Lancet. 2015;386(9991):376-87.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=knee+osteoarthritis+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">9.</span> Bruyère O, et al. <em>"An updated algorithm recommendation for the management of knee osteoarthritis from the European Society for Clinical and Economic Aspects of Osteoporosis, Osteoarthritis and Musculoskeletal Diseases (ESCEO)."</em> Semin Arthritis Rheum. 2019;49(3):337-50.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=knee+osteoarthritis+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">10.</span> Jüni P, et al. <em>"Intra-articular corticosteroid for knee osteoarthritis."</em> Cochrane Database Syst Rev. 2015;(10):CD005328.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=knee+osteoarthritis+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
              </ol>
            </details>
          </section>

          {/* Related Links */}
          <section className="mt-12">
            <h3 className="text-xl font-bold text-gray-800 mb-4">İlgili Konular</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Diz Protezi", href: "/blog/diz-protezi" },
                { title: "Diz Ağrısı", href: "/blog/diz-agrisi" },
                { title: "Kondromalazi", href: "/blog/kondromalazi" }
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <span className="text-teal-600 font-medium">{link.title} →</span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
