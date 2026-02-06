import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diz Kireçlenmesine Ne İyi Gelir? | Op. Dr. Özgür Oktay Nar",
  description: "Diz kireçlenmesine iyi gelen egzersizler, beslenme önerileri, doğal yöntemler ve tedavi seçenekleri. Bursa ortopedi uzmanı.",
  keywords: ["diz kireçlenmesine ne iyi gelir", "diz kireçlenmesi egzersizleri", "diz kireçlenmesi beslenme", "osteoartrit tedavisi", "bursa ortopedi"],
  openGraph: {
    title: "Diz Kireçlenmesine Ne İyi Gelir?",
    description: "Diz kireçlenmesine iyi gelen yöntemler. Op. Dr. Özgür Oktay Nar - Bursa Ortopedi Uzmanı",
    type: "article",
    url: "https://www.ozguroktaynar.com/blog/diz-kireclenmesine-ne-iyi-gelir",
    images: [
      {
        url: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/01/diz_egzersiz.jpg",
        width: 1200,
        height: 800,
        alt: "Diz Kireçlenmesi Egzersizleri",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Diz Kireçlenmesine Ne İyi Gelir?",
  "description": "Diz kireçlenmesi (osteoartrit) için egzersiz, beslenme, yaşam tarzı değişiklikleri ve doğal tedavi yöntemleri. Kanıta dayalı öneriler.",
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
  "mainEntityOfPage": "https://www.ozguroktaynar.com/blog/diz-kireclenmesine-ne-iyi-gelir",
  "image": "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/01/diz_egzersiz.jpg"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Diz kireçlenmesine hangi egzersizler iyi gelir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yüzme, su jimnastiği, bisiklet, yürüyüş gibi düşük etkili egzersizler. Quadriceps güçlendirme ve hamstring germe egzersizleri özellikle faydalıdır."
      }
    },
    {
      "@type": "Question",
      "name": "Diz kireçlenmesinde hangi besinler tüketilmeli?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Omega-3 yağ asitleri (balık), antioksidanlar (meyve-sebze), zerdeçal, zencefil, yeşil çay ve D vitamini kireçlenmeye iyi gelir."
      }
    },
    {
      "@type": "Question",
      "name": "Diz kireçlenmesinde kilo vermek neden önemlidir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Her 1 kg kilo kaybı diz eklemine gelen yükü 4 kg azaltır. 5-10 kg kilo kaybı ağrı ve fonksiyonda belirgin iyileşme sağlar."
      }
    }
  ]
};

export default function DizKireclenmesineNeIyiGelirPage() {
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
      <section className="relative bg-gradient-to-r from-green-900 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-green-500 text-sm px-3 py-1 rounded-full mb-4">
                Doğal Tedavi
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Diz Kireçlenmesine Ne İyi Gelir?
              </h1>
              <p className="text-xl text-green-100 mb-6">
                Egzersiz, beslenme ve yaşam tarzı önerileri
              </p>
              <a
                href="tel:+905398416801"
                className="inline-block bg-white text-green-900 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
              >
                Randevu Al: 0539 841 68 01
              </a>
            </div>
            <div className="hidden md:block">
              <img
                src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/01/diz_egzersiz.jpg"
                alt="Diz Kireçlenmesi Egzersizleri"
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
              <strong>Diz kireçlenmesi (osteoartrit)</strong> tedavisinde ilaç ve cerrahi seçeneklerin yanı sıra, 
              <strong> yaşam tarzı değişiklikleri, egzersiz, beslenme ve doğal yöntemler</strong> çok önemlidir. 
              Bu yaklaşımlar özellikle erken evrede hastalık ilerlemesini yavaşlatır ve semptomları hafifletir.
            </p>
            <p className="text-gray-600">
              Bu sayfada, <strong>kanıta dayalı</strong> bilimsel araştırmalarla desteklenen, 
              diz kireçlenmesine iyi gelen yöntemleri detaylı olarak inceleyeceğiz.
            </p>
          </section>

          {/* Weight Loss Section */}
          <section className="mb-12 bg-red-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              1️⃣ Kilo Kaybı - En Etkili Yöntem
            </h2>
            <p className="text-gray-700 mb-4">
              <strong>Obezite</strong>, diz kireçlenmesinin en önemli risk faktörlerinden biridir. 
              Araştırmalar, <strong>her 1 kg kilo kaybının diz eklemine gelen yükü 4 kg azalttığını</strong> göstermektedir.
            </p>
            <div className="bg-white p-6 rounded-lg mb-4">
              <h3 className="font-semibold text-red-800 mb-3">📊 Kilo Kaybının Faydaları:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-green-500">✓</span>
                  <span><strong>5-10 kg kilo kaybı:</strong> Ağrıda %30-50 azalma</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500">✓</span>
                  <span><strong>BMI 25'in altına inmek:</strong> Hastalık ilerlemesi %50 yavaşlar</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500">✓</span>
                  <span><strong>Enflamatuar markerlar:</strong> İltihap azalır (IL-6, TNF-α ↓)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500">✓</span>
                  <span><strong>Fonksiyon:</strong> Yürüme mesafesi, merdiven çıkma kolaylaşır</span>
                </li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>💡 Öneri:</strong> Diyetisyen desteği ile dengeli beslenme programı (kalori kısıtlaması + egzersiz). 
                Hızlı kilo verme diyetleri yerine <strong>yavaş ve kalıcı</strong> kilo kaybı hedefleyin.
              </p>
            </div>
          </section>

          {/* Exercise Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              2️⃣ Egzersiz - Eklem Sağlığının Anahtarı
            </h2>
            <p className="text-gray-700 mb-6">
              <strong>"Eklem ne kadar hareket ederse o kadar sağlıklıdır."</strong> Egzersiz, kıkırdağı 
              besleyen eklem sıvısının dolaşımını artırır, kas gücünü korur ve eklem stabilitesini sağlar.
            </p>

            <div className="space-y-4">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-semibold text-blue-800 mb-3">🏊 Düşük Etkili Egzersizler (Önerilen)</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">🏊‍♂️ Yüzme & Su Jimnastiği</h4>
                    <p className="text-sm text-gray-600">
                      Su, vücut ağırlığının %90'ını destekler. Eklem yükü minimal, hareket serbestliği maksimum. 
                      <strong> En iyi seçenek!</strong>
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">🚴 Bisiklet (Stabil)</h4>
                    <p className="text-sm text-gray-600">
                      Sabit bisiklet veya düz zeminde bisiklet. Diz eklemine minimal yük, kardiyovasküler fayda yüksek.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">🚶 Yürüyüş (Düz Zemin)</h4>
                    <p className="text-sm text-gray-600">
                      Günde 30 dakika, haftada 5 gün. Yokuş inişten kaçının. Yumuşak taban ayakkabı kullanın.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">🧘 Yoga & Pilates</h4>
                    <p className="text-sm text-gray-600">
                      Esneklik, denge ve kas gücü. Diz dostu modifikasyonlarla yapın (instructor desteği).
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="font-semibold text-green-800 mb-3">💪 Kas Güçlendirme Egzersizleri</h3>
                <p className="text-gray-700 mb-4">
                  <strong>Quadriceps (uyluk ön kası)</strong> güçlendirme diz stabilitesini artırır ve ağrıyı azaltır.
                </p>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">1. Straight Leg Raise (Düz Bacak Kaldırma)</h4>
                    <p className="text-sm text-gray-700">
                      Sırt üstü yat → Bir bacağı 90° bük → Diğerini düz kaldır (15 cm) → 5 sn tut → İndir. 
                      <strong>3 set x 10 tekrar</strong>
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">2. Wall Sit (Duvar Squat)</h4>
                    <p className="text-sm text-gray-700">
                      Sırt duvara yasla → 90° açıyla çömel → 10-30 sn tut. <strong>3 set</strong> (Ağrı yoksa)
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">3. Hamstring Curl (Ayak Kıvrılması)</h4>
                    <p className="text-sm text-gray-700">
                      Yüzüstü yat → Topuğu kalçaya doğru kıvır → 5 sn tut. <strong>3 set x 10 tekrar</strong>
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">4. Step Up (Basamak Çıkma)</h4>
                    <p className="text-sm text-gray-700">
                      Düşük basamak (15-20 cm) → Çık-in → Yavaş ve kontrollü. <strong>3 set x 10 tekrar</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="font-semibold text-purple-800 mb-3">🧘‍♀️ Esneklik ve Germe Egzersizleri</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Hamstring germe:</strong> Sırt üstü, towell kullanarak bacağı gerin (30 sn x 3)</li>
                  <li>• <strong>Quadriceps germe:</strong> Ayakta, topuğu kalçaya çek (30 sn x 3)</li>
                  <li>• <strong>Calf (baldır) germe:</strong> Duvar itme pozisyonu (30 sn x 3)</li>
                  <li>• <strong>Hip flexor germe:</strong> Lunge pozisyonu (30 sn x 3)</li>
                </ul>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="font-semibold text-red-800 mb-3">⚠️ Kaçınılması Gereken Egzersizler</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Koşu</strong> (özellikle asfalt/beton üzerinde)</li>
                  <li>• <strong>Derin çömelme (full squat)</strong></li>
                  <li>• <strong>Yüksek etkili aerobik</strong> (zumba, jimnastik)</li>
                  <li>• <strong>Yokuş inişi</strong> (diz yükünü 3-4 kat artırır)</li>
                  <li>• <strong>Tekrarlayan merdiven inme</strong></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Nutrition Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              3️⃣ Beslenme - Eklem Dostu Gıdalar
            </h2>
            <p className="text-gray-700 mb-6">
              Belirli besinler <strong>anti-enflamatuar</strong> etki göstererek diz kireçlenmesi semptomlarını hafifletebilir.
            </p>

            <div className="space-y-4">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-semibold text-blue-800 mb-3">🐟 Omega-3 Yağ Asitleri</h3>
                <p className="text-gray-700 mb-3">
                  <strong>EPA ve DHA</strong> anti-enflamatuar sitokinleri artırır, COX-2'yi (iltihabı tetikleyen enzim) inhibe eder.
                </p>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div className="bg-white p-3 rounded">
                    <span className="font-medium">Kaynaklar:</span> Somon, sardalya, uskumru, ceviz, chia tohumu, keten tohumu
                  </div>
                  <div className="bg-white p-3 rounded">
                    <span className="font-medium">Öneri:</span> Haftada 2-3 porsiyon yağlı balık veya omega-3 takviyesi (1-2 g/gün)
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="font-semibold text-yellow-800 mb-3">🍊 Antioksidan Zengini Besinler</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Vitamin C, E, beta-karoten</strong> serbest radikalleri nötralize eder, kıkırdak hasarını azaltır.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>C vitamini:</strong> Portakal, kivi, çilek, biber, brokoli</li>
                  <li>• <strong>E vitamini:</strong> Fındık, badem, avokado, zeytinyağı</li>
                  <li>• <strong>Beta-karoten:</strong> Havuç, tatlı patates, ıspanak</li>
                  <li>• <strong>Flavonoidler:</strong> Yaban mersini, kiraz, üzüm (koyu renkli meyveler)</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="font-semibold text-orange-800 mb-3">🧡 Zerdeçal (Curcumin)</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Curcumin</strong> (zerdeçaldaki aktif bileşik), güçlü anti-enflamatuar ve antioksidan etkilidir. 
                  NF-κB yolağını inhibe ederek iltihabı azaltır.
                </p>
                <div className="bg-white p-4 rounded-lg text-sm">
                  <p className="text-gray-700">
                    <strong>Kullanım:</strong> 500-1000 mg/gün curcumin takviyesi veya taze zerdeçal (çorba, smoothie). 
                    <strong> Biber ile birlikte</strong> alın (biyoyararlanım 2000% artar).
                  </p>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="font-semibold text-green-800 mb-3">🍵 Yeşil Çay</h3>
                <p className="text-gray-700 mb-3">
                  <strong>EGCG (epigallocatechin gallate)</strong> kıkırdak yıkımını yavaşlatır, MMP (matrix metalloproteinase) 
                  enzimlerini inhibe eder.
                </p>
                <div className="bg-white p-4 rounded-lg text-sm">
                  <p className="text-gray-700">
                    <strong>Öneri:</strong> Günde 3-4 fincan yeşil çay veya matcha.
                  </p>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="font-semibold text-purple-800 mb-3">🥬 Diğer Faydalı Besinler</h3>
                <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                  <div className="bg-white p-3 rounded">
                    <span className="font-semibold">Zencefil:</span> COX-2 inhibitörü, anti-enflamatuar
                  </div>
                  <div className="bg-white p-3 rounded">
                    <span className="font-semibold">Sarımsak:</span> İltihap azaltıcı, bağışıklık destekleyici
                  </div>
                  <div className="bg-white p-3 rounded">
                    <span className="font-semibold">D Vitamini:</span> Kemik sağlığı, kıkırdak koruma (günlük 1000-2000 IU)
                  </div>
                  <div className="bg-white p-3 rounded">
                    <span className="font-semibold">Kollajen Tip II:</span> Kıkırdak yapı taşı (tavuk kıkırdağı, kemik suyu)
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="font-semibold text-red-800 mb-3">🚫 Kaçınılması Gereken Besinler</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>İşlenmiş gıdalar:</strong> Hazır gıda, fast food (trans yağ, katkı maddeleri)</li>
                  <li>• <strong>Şeker ve rafine karbonhidratlar:</strong> İltihap artırır (beyaz un, şekerli içecekler)</li>
                  <li>• <strong>Kırmızı et:</strong> Aşırı tüketim (omega-6 yüksek, iltihabı tetikler)</li>
                  <li>• <strong>Alkol:</strong> Kıkırdak rejenerasyonunu bozar</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Lifestyle Section */}
          <section className="mb-12 bg-teal-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              4️⃣ Yaşam Tarzı Değişiklikleri
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                <span className="text-2xl">🛏️</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Uyku Düzeni</h3>
                  <p className="text-sm text-gray-600">
                    7-9 saat kaliteli uyku. Kötü uyku iltihabı artırır ve ağrı algısını kuvvetlendirir.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                <span className="text-2xl">🧘</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Stres Yönetimi</h3>
                  <p className="text-sm text-gray-600">
                    Kronik stres kortizol seviyesini artırır → kıkırdak yıkımını hızlandırır. 
                    Meditasyon, nefes egzersizleri, yoga önerilir.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                <span className="text-2xl">👟</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Doğru Ayakkabı Seçimi</h3>
                  <p className="text-sm text-gray-600">
                    Yumuşak taban, iyi destek, yüksek topuk ve düz taban ayakkabıdan kaçının. 
                    Ortopedik tabanlık kullanın.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                <span className="text-2xl">🚭</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Sigara Bırakma</h3>
                  <p className="text-sm text-gray-600">
                    Sigara kıkırdak beslenmesini bozar, oksidatif stresi artırır. 
                    Bırakanlar ağrı ve fonksiyonda iyileşme görür.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Physical Therapy Section */}
          <section className="mb-12 bg-blue-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              5️⃣ Fizik Tedavi Modaliteleri
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">🧊 Buz Tedavisi</h3>
                <p className="text-sm text-gray-600">
                  Akut ağrı ve şişlikte. 15-20 dk, günde 3-4 kez. İltihabı azaltır.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">🔥 Isı Tedavisi</h3>
                <p className="text-sm text-gray-600">
                  Kronik ağrı ve sertlikte. Sıcak kompres, kaplıca. Kan akımını artırır.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">⚡ TENS</h3>
                <p className="text-sm text-gray-600">
                  Transkütanöz elektriksel sinir stimülasyonu. Ağrı sinyallerini bloke eder.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">🌊 Ultrason</h3>
                <p className="text-sm text-gray-600">
                  Derin ısıtma. Doku iyileşmesini hızlandırır, kas gevşemesi sağlar.
                </p>
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
                  q: "Diz kireçlenmesine hangi egzersizler iyi gelir?",
                  a: "Yüzme, su jimnastiği, bisiklet, yürüyüş gibi düşük etkili egzersizler. Quadriceps güçlendirme ve hamstring germe egzersizleri özellikle faydalıdır."
                },
                {
                  q: "Diz kireçlenmesinde hangi besinler tüketilmeli?",
                  a: "Omega-3 yağ asitleri (balık), antioksidanlar (meyve-sebze), zerdeçal, zencefil, yeşil çay ve D vitamini kireçlenmeye iyi gelir."
                },
                {
                  q: "Diz kireçlenmesinde kilo vermek neden önemlidir?",
                  a: "Her 1 kg kilo kaybı diz eklemine gelen yükü 4 kg azaltır. 5-10 kg kilo kaybı ağrı ve fonksiyonda belirgin iyileşme sağlar."
                },
                {
                  q: "Doğal tedavi yöntemleri diz kireçlenmesini iyileştirir mi?",
                  a: "Erken evrede yaşam tarzı değişiklikleri (egzersiz, beslenme, kilo kaybı) hastalık ilerlemesini yavaşlatır ve semptomları hafifletir. İleri evrede ise cerrahi tedavi gerekebilir."
                }
              ].map((faq, i) => (
                <details key={i} className="bg-gray-50 rounded-lg p-4 group">
                  <summary className="font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                    {faq.q}
                    <span className="text-green-500 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-3 text-gray-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-green-600 to-green-800 text-white p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">
              Bireysel Tedavi Planı
            </h2>
            <p className="text-green-100 mb-6">
              Uzman değerlendirme ile size özel egzersiz ve beslenme programı. Erken başlayın, yaşam kalitenizi artırın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+905398416801"
                className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
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
                <span className="font-medium">1.</span> Messier SP, et al. <em>"Effects of intensive diet and exercise on knee joint loads, inflammation, and clinical outcomes among overweight and obese adults with knee osteoarthritis: the IDEA randomized clinical trial."</em> JAMA. 2013;310(12):1263-73.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=knee+osteoarthritis+weight+loss" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">2.</span> Fransen M, et al. <em>"Exercise for osteoarthritis of the knee."</em> Cochrane Database Syst Rev. 2015;(1):CD004376.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=knee+osteoarthritis+exercise" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">3.</span> Daily JW, et al. <em>"Efficacy of turmeric extracts and curcumin for alleviating the symptoms of joint arthritis: a systematic review and meta-analysis of randomized clinical trials."</em> J Med Food. 2016;19(8):717-29.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=knee+osteoarthritis+curcumin" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">4.</span> Senftleber NK, et al. <em>"Marine oil supplements for arthritis pain: a systematic review and meta-analysis of randomized trials."</em> Nutrients. 2017;9(1):42.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=knee+osteoarthritis+omega3" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <span className="font-medium">5.</span> Brosseau L, et al. <em>"Efficacy of aerobic exercises for osteoarthritis (part II): a meta-analysis."</em> Phys Ther Rev. 2004;9(3):125-45.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/?term=knee+osteoarthritis+exercise" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
            </ol>
            
            <details className="mt-4">
              <summary className="cursor-pointer text-blue-600 font-medium hover:text-blue-800 flex items-center gap-2">
                <span>📖 Daha Fazla Kaynak Göster (5 ek referans)</span>
              </summary>
              <ol start={6} className="space-y-3 text-sm text-gray-700 mt-4 pt-4 border-t">
                <li>
                  <span className="font-medium">6.</span> Christensen R, et al. <em>"Weight loss: the treatment of choice for knee osteoarthritis? A randomized trial."</em> Osteoarthritis Cartilage. 2005;13(1):20-7.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=knee+osteoarthritis+weight+loss" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">7.</span> Thomas S, et al. <em>"What is the evidence for a role for diet and nutrition in osteoarthritis?"</em> Rheumatology (Oxford). 2018;57(suppl_4):iv61-iv74.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=knee+osteoarthritis+nutrition" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">8.</span> Uthman OA, et al. <em>"Exercise for lower limb osteoarthritis: systematic review incorporating trial sequential analysis and network meta-analysis."</em> BMJ. 2013;347:f5555.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=knee+osteoarthritis+exercise" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">9.</span> Ghalandary-Shamami M, et al. <em>"Beneficial effects of omega-3 and vitamin D co-supplementation on clinical symptoms and metabolic profiles in patients with rheumatoid arthritis."</em> J Nutr Biochem. 2018;56:141-7.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=knee+osteoarthritis+vitamin+d" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">10.</span> Bartels EM, et al. <em>"Aquatic exercise for the treatment of knee and hip osteoarthritis."</em> Cochrane Database Syst Rev. 2016;(3):CD005523.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=knee+osteoarthritis+aquatic+exercise" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
              </ol>
            </details>
          </section>

          {/* Related Links */}
          <section className="mt-12">
            <h3 className="text-xl font-bold text-gray-800 mb-4">İlgili Konular</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Diz Kireçlenmesi Tedavisi", href: "/blog/diz-kireclenmesi-tedavisi-2" },
                { title: "Diz Protezi", href: "/blog/diz-protezi" },
                { title: "Fizik Tedavi", href: "/fizik-tedavi" }
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <span className="text-green-600 font-medium">{link.title} →</span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
