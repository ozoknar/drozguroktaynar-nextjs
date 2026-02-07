import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diz Burkulmasi Belirtileri ve Tedavisi | Op. Dr. Özgür Oktay Nar",
  description: "Diz burkulmasi belirtileri, tedavisi ve iyileşme süreci. Bağ yaralanmaları, menisküs yırtığı. Bursa ortopedi uzmanı.",
  keywords: ["diz burkulmasi", "diz burkulması belirtileri", "bağ yaralanması", "menisküs yırtığı", "diz spreni", "bursa ortopedi"],
  openGraph: {
    title: "Diz Burkulmasi Belirtileri ve Tedavisi",
    description: "Diz burkulmasi tedavisi hakkında uzman bilgisi. Op. Dr. Özgür Oktay Nar - Bursa Ortopedi Uzmanı",
    type: "article",
    url: "https://www.ozguroktaynar.com/blog/diz-burkulmasi-belirtisi",
    images: [
      {
        url: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/01/diz_travmasi.jpg",
        width: 1200,
        height: 800,
        alt: "Diz Burkulmasi",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Diz Burkulmasi Belirtileri ve Tedavisi",
  "description": "Diz burkulmasi (sprain), dizin anormal dönmesi veya bükülmesi sonucu bağ ve menisküsün zarar görmesidir. Belirtileri ve tedavisi hakkında detaylı bilgi.",
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
  "mainEntityOfPage": "https://www.ozguroktaynar.com/blog/diz-burkulmasi-belirtisi",
  "image": "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/01/diz_travmasi.jpg"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Diz burkulmasi belirtileri nelerdir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ani ağrı, şişlik, eklem hareketinde kısıtlılık, instabilite (diz kayma hissi), 'pop' sesi (bağ kopması), morluk ve zorlu yürüme."
      }
    },
    {
      "@type": "Question",
      "name": "Diz burkulmasi nasıl tedavi edilir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hafif burkulmada RICE protokolü (dinlenme, buz, kompresyon, elevatasyon). Ciddi bağ yırtığında cerrahi rekonstrüksiyon gerekebilir."
      }
    },
    {
      "@type": "Question",
      "name": "Diz burkulmasi iyileşme süresi ne kadar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hafif burkulma 2-4 hafta, orta derece 4-8 hafta, ciddi bağ yırtığı (cerrahi sonrası) 6-12 ay tam iyileşme sürer."
      }
    }
  ]
};

export default function DizBurkulmasiBelirtisiPage() {
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
      <section className="relative bg-gradient-to-r from-red-900 to-red-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-red-500 text-sm px-3 py-1 rounded-full mb-4">
                Diz Travması
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Diz Burkulmasi Belirtileri
              </h1>
              <p className="text-xl text-red-100 mb-6">
                Bağ yaralanmaları, tanı ve tedavi seçenekleri
              </p>
              <a
                href="tel:+905398416801"
                className="inline-block bg-white text-red-900 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition"
              >
                Randevu Al: 0539 841 68 01
              </a>
            </div>
            <div className="hidden md:block">
              <img
                src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/01/diz_travmasi.jpg"
                alt="Diz Burkulmasi"
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
              <strong>Diz burkulmasi (sprain)</strong>, dizin anormal şekilde dönmesi, bükülmesi veya 
              direkt travma sonucu <strong>bağların (ligament) ve menisküsün</strong> zarar görmesidir. 
              Spor yaralanmaları, trafik kazaları ve düşmeler en sık nedenlerdir.
            </p>
            <p className="text-gray-600">
              Hafif burkulmalardan ciddi bağ yırtıklarına kadar geniş bir yelpazede görülür. 
              Erken tanı ve uygun tedavi ile tam iyileşme ve spora dönüş mümkündür.
            </p>
          </section>

          {/* Anatomy Section */}
          <section className="mb-12 bg-blue-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Diz Bağları (Ligamentler)
            </h2>
            <p className="text-gray-700 mb-4">
              Diz ekleminde <strong>dört ana bağ</strong> kemikleri birbirine bağlar ve stabilite sağlar:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">🔴 ACL (Anterior Cruciate Ligament)</h3>
                <p className="text-sm text-gray-600">
                  <strong>Ön Çapraz Bağ.</strong> Tibia'nın öne kaymasını önler. 
                  En sık yaralanan bağ (spor yaralanmaları).
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">🟠 PCL (Posterior Cruciate Ligament)</h3>
                <p className="text-sm text-gray-600">
                  <strong>Arka Çapraz Bağ.</strong> Tibia'nın geriye kaymasını önler. 
                  Dashboard yaralanması (araç kazası).
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">🟡 MCL (Medial Collateral Ligament)</h3>
                <p className="text-sm text-gray-600">
                  <strong>İç Yan Bağ.</strong> Dizin içe doğru açılmasını (valgus) önler. 
                  Dıştan darbe ile yaralanır.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">🟢 LCL (Lateral Collateral Ligament)</h3>
                <p className="text-sm text-gray-600">
                  <strong>Dış Yan Bağ.</strong> Dizin dışa doğru açılmasını (varus) önler. 
                  İçten darbe ile yaralanır (nadir).
                </p>
              </div>
            </div>
          </section>

          {/* Symptoms Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Diz Burkulmasi Belirtileri
            </h2>
            <div className="space-y-4">
              <div className="bg-red-50 p-6 rounded-xl">
                <h3 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                  <span>🔴</span> Ani Şiddetli Ağrı
                </h3>
                <p className="text-gray-700">
                  Yaralanma anında keskin ağrı. Hareket ve yük verme ile artar. 
                  Ciddi yaralanmalarda dinlenmede bile ağrı devam eder.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                  <span>💧</span> Şişlik (Efüzyon)
                </h3>
                <p className="text-gray-700">
                  Yaralanmadan <strong>2-6 saat içinde</strong> diz şişer. ACL yırtığında 
                  <strong> hemarthrosis (eklem içi kanama)</strong> hızlı şişliğe neden olur.
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="font-semibold text-yellow-800 mb-3 flex items-center gap-2">
                  <span>🔊</span> "Pop" Sesi
                </h3>
                <p className="text-gray-700">
                  ACL yırtığında hastaların %70'i <strong>kopma anında "çat" veya "pop" sesi</strong> duyar. 
                  Bu, bağın tamamen koptuğunu gösterir.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                  <span>⚠️</span> İnstabilite (Kayganlık Hissi)
                </h3>
                <p className="text-gray-700">
                  Diz "kaymış" veya "çıkıyor" hissi. ACL/PCL yırtığında belirgindir. 
                  Hasta yük vermeye korkur, bacak "bükülecek" gibi hisseder.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <span>🚫</span> Hareket Kısıtlılığı
                </h3>
                <p className="text-gray-700">
                  Dizin tam olarak bükülmesi veya açılması zorlaşır. Menisküs yırtığında 
                  <strong> kilitlenme (locking)</strong> görülebilir.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <span>🟣</span> Morluk (Ekimoz)
                </h3>
                <p className="text-gray-700">
                  Yaralanma bölgesinde morarma. Kan damarları hasar görerse daha belirgindir.
                </p>
              </div>
            </div>
          </section>

          {/* Grading Section */}
          <section className="mb-12 bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Burkulma Derecelendirmesi
            </h2>
            <div className="space-y-3">
              <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-semibold text-green-800 mb-2">Grade 1 - Hafif Burkulma</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Bağ lifleri gerilmiş ama kopma yok</li>
                  <li>• Hafif ağrı ve minimal şişlik</li>
                  <li>• Eklem stabilitesi korunmuş</li>
                  <li>• İyileşme: 2-4 hafta</li>
                </ul>
              </div>

              <div className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500">
                <h3 className="font-semibold text-yellow-800 mb-2">Grade 2 - Orta Derece Burkulma</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Kısmi bağ yırtığı (lifler %25-75 kopmuş)</li>
                  <li>• Orta şiddette ağrı ve şişlik</li>
                  <li>• Hafif instabilite (hafif kayma hissi)</li>
                  <li>• İyileşme: 4-8 hafta</li>
                </ul>
              </div>

              <div className="bg-red-100 p-4 rounded-lg border-l-4 border-red-500">
                <h3 className="font-semibold text-red-800 mb-2">Grade 3 - Ciddi Burkulma (Tam Yırtık)</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Bağ tamamen kopmuş</li>
                  <li>• Şiddetli ağrı (bazen travma sonrası azalır)</li>
                  <li>• Belirgin instabilite (diz "sallantıda")</li>
                  <li>• Cerrahi tedavi genellikle gerekli</li>
                  <li>• İyileşme: 6-12 ay (cerrahi sonrası)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Diagnosis Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Tanı Yöntemleri
            </h2>
            <div className="space-y-4">
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="font-semibold text-purple-800 mb-3">📋 Fizik Muayene</h3>
                <div className="space-y-2 text-gray-700 text-sm">
                  <p><strong>Lachman Testi:</strong> ACL değerlendirmesi (en hassas test)</p>
                  <p><strong>Anterior Drawer Test:</strong> ACL ikincil testi</p>
                  <p><strong>Pivot Shift Test:</strong> ACL instabilitesini gösterir</p>
                  <p><strong>Posterior Drawer Test:</strong> PCL değerlendirmesi</p>
                  <p><strong>Valgus/Varus Stress Test:</strong> MCL/LCL değerlendirmesi</p>
                  <p><strong>McMurray Testi:</strong> Menisküs yırtığı</p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-semibold text-blue-800 mb-3">📷 Direkt Röntgen</h3>
                <p className="text-gray-700">
                  Kırık ve çıkığı değerlendirmek için. Bağları göstermez ama 
                  <strong> avulsiyon kırığı</strong> (bağın kemikle birlikte kopması) tespit edilebilir.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="font-semibold text-green-800 mb-3">🧲 MRI (Manyetik Rezonans Görüntüleme)</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Altın standart.</strong> Bağ, menisküs, kıkırdak hasarlarını detaylı gösterir. 
                  Cerrahi planlama için kritik.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Grade 1-2-3 ayrımı</li>
                  <li>• Eşlik eden yaralanmalar (menisküs, kıkırdak)</li>
                  <li>• Kemik kontüzyonu (bone bruise)</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="font-semibold text-yellow-800 mb-3">🩺 Artroskopi (Tanısal)</h3>
                <p className="text-gray-700">
                  MRI belirsizse veya aynı seansta tedavi planlanıyorsa. Eklem içi direkt görüntüleme.
                </p>
              </div>
            </div>
          </section>

          {/* Treatment Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Tedavi Seçenekleri
            </h2>

            <div className="mb-8 bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="font-semibold text-green-800 mb-3">✅ Konservatif Tedavi (Grade 1-2)</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">🧊 RICE Protokolü (İlk 48-72 Saat)</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Rest (Dinlenme):</strong> Yük vermekten kaçın, koltuk değneği kullanın</li>
                    <li>• <strong>Ice (Buz):</strong> 15-20 dk, günde 4-6 kez (iltihabı azaltır)</li>
                    <li>• <strong>Compression (Kompresyon):</strong> Elastik bandaj ile sıkıştırma</li>
                    <li>• <strong>Elevation (Yükseltime):</strong> Bacağı kalp seviyesinin üstünde tutun</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">💊 İlaç Tedavisi</h4>
                  <p className="text-sm text-gray-700">
                    NSAİİ (ibuprofen, naproksen) - Ağrı ve iltihap kontrolü. İlk 3-5 gün.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">🦵 Fizik Tedavi ve Rehabilitasyon</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Hafta 1-2:</strong> Hareket açıklığı (ROM) egzersizleri</li>
                    <li>• <strong>Hafta 3-4:</strong> Quadriceps/hamstring izometrik güçlendirme</li>
                    <li>• <strong>Hafta 5-8:</strong> Propriosepsiyon (denge) egzersizleri</li>
                    <li>• <strong>Hafta 8+:</strong> Spora dönüş programı (kademeli)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">🩹 Bracing (Destek)</h4>
                  <p className="text-sm text-gray-700">
                    Akut fazda diz breysi. MCL Grade 2 yırtıklarında 4-6 hafta kullanım.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="font-semibold text-red-800 mb-3">🏥 Cerrahi Tedavi (Grade 3)</h3>
              <p className="text-gray-700 mb-4">
                <strong>ACL tam yırtığı</strong> genellikle cerrahi rekonstrüksiyon gerektirir 
                (özellikle genç, aktif hastalar). MCL Grade 3 genellikle konservatif tedavi ile iyileşir.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">🔬 ACL Rekonstrüksiyonu</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Artroskopik cerrahi</strong> (minimal invaziv)</li>
                    <li>• <strong>Greft seçenekleri:</strong> Hamstring, patellar tendon, allogreft</li>
                    <li>• <strong>Ameliyat süresi:</strong> 1-2 saat</li>
                    <li>• <strong>Hastanede kalış:</strong> Aynı gün veya 1 gece</li>
                    <li>• <strong>Yürüme:</strong> Koltuk değneği ile 2-4 hafta</li>
                    <li>• <strong>Spora dönüş:</strong> 6-12 ay</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">🔧 PCL/LCL Cerrahisi</h4>
                  <p className="text-sm text-gray-700">
                    Nadir uygulanır. Genellikle konservatif tedavi tercih edilir. 
                    Multi-ligament yaralanmalarında (2+ bağ yırtığı) cerrahi zorunlu.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">🩹 Menisküs Onarımı/Rezeksiyonu</h4>
                  <p className="text-sm text-gray-700">
                    ACL rekonstrüksiyonu ile aynı seansta yapılabilir. Menisküs korunması uzun dönem 
                    eklem sağlığı için önemlidir.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Recovery Section */}
          <section className="mb-12 bg-blue-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              İyileşme Süreci ve Spora Dönüş
            </h2>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">📅 Konservatif Tedavi (Grade 1-2)</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>2-4 hafta:</strong> Normal aktiviteler</li>
                  <li>• <strong>4-6 hafta:</strong> Hafif spor (bisiklet, yüzme)</li>
                  <li>• <strong>6-8 hafta:</strong> Tam spora dönüş (breys ile)</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">📅 Cerrahi Sonrası (ACL Rekonstrüksiyon)</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>0-2 hafta:</strong> Buz, elevatasyon, ROM egzersizleri</li>
                  <li>• <strong>2-6 hafta:</strong> Yük verme, quadriceps güçlendirme</li>
                  <li>• <strong>6-12 hafta:</strong> Tam yük, propriosepsiyon</li>
                  <li>• <strong>3-6 ay:</strong> Koşu, yana hareketler</li>
                  <li>• <strong>6-9 ay:</strong> Spora özel antreman</li>
                  <li>• <strong>9-12 ay:</strong> Tam spora dönüş (test sonuçlarına göre)</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <p className="text-sm text-gray-700">
                  <strong>⚠️ Dikkat:</strong> Erken spora dönüş <strong>re-yırtık riskini %6-7'ye</strong> çıkarır. 
                  Kas gücü, denge ve izokinetik testler normal olmalı.
                </p>
              </div>
            </div>
          </section>

          {/* Complications Section */}
          <section className="mb-12 bg-red-50 border-l-4 border-red-500 p-8 rounded-r-lg">
            <h2 className="text-2xl font-bold text-red-800 mb-4">
              ⚠️ Komplikasyonlar
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Tedavi Edilmezse:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Kronik instabilite</li>
                  <li>• Menisküs yırtığı (sekonder)</li>
                  <li>• Kıkırdak hasarı</li>
                  <li>• Erken osteoartrit (10-15 yıl sonra)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Cerrahi Sonrası:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Enfeksiyon (%1)</li>
                  <li>• DVT/PE (tromboz) (%1)</li>
                  <li>• Greft yetmezliği/kopması (%2-5)</li>
                  <li>• Eklem sertliği (arthrofibrosis)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Sıkça Sorulan Sorular
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Diz burkulmasi belirtileri nelerdir?",
                  a: "Ani ağrı, şişlik, eklem hareketinde kısıtlılık, instabilite (diz kayma hissi), 'pop' sesi (bağ kopması), morluk ve zorlu yürüme."
                },
                {
                  q: "Diz burkulmasi nasıl tedavi edilir?",
                  a: "Hafif burkulmada RICE protokolü (dinlenme, buz, kompresyon, elevatasyon). Ciddi bağ yırtığında cerrahi rekonstrüksiyon gerekebilir."
                },
                {
                  q: "Diz burkulmasi iyileşme süresi ne kadar?",
                  a: "Hafif burkulma 2-4 hafta, orta derece 4-8 hafta, ciddi bağ yırtığı (cerrahi sonrası) 6-12 ay tam iyileşme sürer."
                },
                {
                  q: "ACL yırtığı ameliyat olmadan iyileşir mi?",
                  a: "ACL kendiliğinden iyileşmez. Sedanter, yaşlı hastalarda konservatif tedavi (fizik tedavi + breys) denenebilir. Genç, aktif hastalarda cerrahi önerilir."
                }
              ].map((faq, i) => (
                <details key={i} className="bg-gray-50 rounded-lg p-4 group">
                  <summary className="font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                    {faq.q}
                    <span className="text-red-500 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-3 text-gray-600">{faq.a}</p>
                </details>
              ))}
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
          <section className="bg-gradient-to-r from-red-600 to-red-800 text-white p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Diziniz mi Burkuldu?
            </h2>
            <p className="text-red-100 mb-6">
              Acil değerlendirme için randevu alın. Erken tanı, tam iyileşme için kritik!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+905398416801"
                className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition"
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
                <span className="font-medium">1.</span> Raines BT, et al. <em>"Management of anterior cruciate ligament injury: what's in and what's out?"</em> Indian J Orthop. 2017;51(5):563-75.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=ACL+injury+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">2.</span> Sanders TL, et al. <em>"Incidence of anterior cruciate ligament tears and reconstruction: a 21-year population-based study."</em> Am J Sports Med. 2016;44(6):1502-7.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=ACL+injury+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">3.</span> Filbay SR, Grindem H. <em>"Evidence-based recommendations for the management of anterior cruciate ligament (ACL) rupture."</em> Best Pract Res Clin Rheumatol. 2019;33(1):33-47.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=ACL+injury+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">4.</span> Smith TO, et al. <em>"Early versus delayed surgery for anterior cruciate ligament reconstruction: a systematic review and meta-analysis."</em> Knee Surg Sports Traumatol Arthrosc. 2010;18(3):304-11.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=ACL+injury+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">5.</span> Wright RW, et al. <em>"Meniscal and articular cartilage predictors of outcome after reconstruction of the anterior cruciate ligament."</em> Am J Sports Med. 2007;35(10):1630-4.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=ACL+injury+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
            </ol>
            
            <details className="mt-4">
              <summary className="cursor-pointer text-blue-600 font-medium hover:text-blue-800 flex items-center gap-2">
                <span>📖 Daha Fazla Kaynak Göster (5 ek referans)</span>
              </summary>
              <ol start={6} className="space-y-3 text-sm text-gray-700 mt-4 pt-4 border-t">
                <li>
                  <span className="font-medium">6.</span> Ardern CL, et al. <em>"2016 Consensus statement on return to sport from the First World Congress in Sports Physical Therapy, Bern."</em> Br J Sports Med. 2016;50(14):853-64.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=ACL+injury+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">7.</span> Frobell RB, et al. <em>"A randomized trial of treatment for acute anterior cruciate ligament tears."</em> N Engl J Med. 2010;363(4):331-42.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=ACL+injury+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">8.</span> Paulos L, et al. <em>"Infrapatellar contracture syndrome: an unrecognized cause of knee stiffness with patella entrapment and patella infera."</em> Am J Sports Med. 1987;15(4):331-41.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=ACL+injury+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">9.</span> Shelbourne KD, et al. <em>"Long-term evaluation of posterior cruciate ligament injuries."</em> Am J Sports Med. 1999;27(2):127-34.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=PCL+injury+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">10.</span> LaPrade RF, et al. <em>"The MCL injury: outcomes and treatment."</em> J Am Acad Orthop Surg. 2007;15(6):368-77.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=MCL+injury+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
              </ol>
            </details>
          </section>

          {/* Related Links */}
          <section className="mt-12">
            <h3 className="text-xl font-bold text-gray-800 mb-4">İlgili Konular</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Menisküs Yırtığı", href: "/blog/meniskus-yirtilmasi-belirtileri-ve-tedavisi" },
                { title: "Diz Ağrısı", href: "/blog/diz-agrisi" },
                { title: "Spor Yaralanmaları", href: "/spor-yaralanmalari" }
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <span className="text-red-600 font-medium">{link.title} →</span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
