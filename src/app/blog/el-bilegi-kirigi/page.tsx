import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'El Bileği Kırığı Tedavisi | Op. Dr. Özgür Oktay Nar - Bursa',
  description: 'El bileği kırığı (radius kırığı) belirtileri, tanı ve tedavi yöntemleri. Bursa\'da el bileği kırığı ameliyatı, alçı tedavisi. Uzman ortopedist yaklaşımı.',
  keywords: 'el bileği kırığı, radius kırığı, Colles kırığı, skafoid kırığı, el bileği kırığı tedavisi, Bursa el bileği kırığı',
  openGraph: {
    title: 'El Bileği Kırığı Tedavisi | Bursa Ortopedi',
    description: 'Düşme sonrası el bileği ağrısı ve şişlik mi? El bileği kırığı erken tanı ve doğru tedavi ile tam iyileşir. Uzman yaklaşım.',
    type: 'article',
    images: [
      {
        url: 'https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2025/04/el-bilegi-kirigi-tedavi.webp',
        width: 1200,
        height: 800,
        alt: 'El Bileği Kırığı Tedavisi',
      },
    ],
  },
}

// Medical Web Page Schema
const medicalSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "El Bileği Kırığı Tedavisi",
  "description": "El bileği kırığı belirtileri, tanı yöntemleri ve cerrahi/konservatif tedavi seçenekleri.",
  "medicalAudience": ["Patient"],
  "about": {
    "@type": "MedicalCondition",
    "name": "El Bileği Kırığı",
    "alternateName": "Distal Radius Fracture, Colles Fracture",
    "associatedAnatomy": {
      "@type": "AnatomicalStructure",
      "name": "El Bileği (Distal Radius)"
    },
    "signOrSymptom": [
      {
        "@type": "MedicalSymptom",
        "name": "Şiddetli ağrı ve şişlik"
      },
      {
        "@type": "MedicalSymptom",
        "name": "Şekil bozukluğu (deformite)"
      },
      {
        "@type": "MedicalSymptom",
        "name": "Hareket kısıtlılığı"
      }
    ],
    "possibleTreatment": [
      {
        "@type": "MedicalTherapy",
        "name": "Kapalı Redüksiyon ve Alçı"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Cerrahi Fiksasyon (Plak-Vida)"
      }
    ]
  },
  "author": {
    "@type": "Physician",
    "name": "Op. Dr. Özgür Oktay Nar",
    "medicalSpecialty": "Ortopedi ve Travmatoloji"
  }
}

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "El bileği kırığı nasıl anlaşılır?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Düşme veya darbe sonrası şiddetli ağrı, şişlik, morluk, şekil bozukluğu (çatal sırtı deformitesi) görülür. El bileği hareket ettirilemez. Tanı için mutlaka röntgen çekilmelidir."
      }
    },
    {
      "@type": "Question",
      "name": "El bileği kırığı ameliyat gerektirir mi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yerinden oynamayan basit kırıklar alçı ile tedavi edilir (6 hafta). Parçalı, yerinden oynamış, eklem içi kırıklarda cerrahi tedavi (plak-vida fiksasyonu) gerekir. Yaşlılarda osteoporoza bağlı parçalı kırıklar çok sık cerrahi gerektirir."
      }
    },
    {
      "@type": "Question",
      "name": "El bileği kırığı iyileşme süresi ne kadar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Alçı tedavisi 6 hafta. Cerrahi tedavide kemik kaynaması 8-12 hafta. Erken mobilizasyon protokolleri ile 2-3 haftada hareket başlar. Tam güç geri kazanımı 3-6 ay alır. Yaşlılarda biraz daha uzun sürebilir."
      }
    }
  ]
}

export default function ElBilegiKirigiPage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">El Bileği Kırığı</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          El Bileği Kırığı: En Sık Kırık, Doğru Tedavi ile Tam İyileşme
        </h1>

        {/* Hero Image */}
        <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden bg-gradient-to-br from-indigo-100 to-pink-100">
          <Image
            src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2025/04/el-bilegi-kirigi-tedavi.webp"
            alt="El bileği kırığı tedavisi"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Author Info */}
        <div className="flex flex-wrap items-center text-sm text-gray-500 mb-8 pb-6 border-b gap-2">
          <span className="font-medium text-gray-700">Op. Dr. Özgür Oktay Nar</span>
          <span className="mx-2">•</span>
          <span>Ortopedi ve Travmatoloji Uzmanı</span>
          <span className="mx-2">•</span>
          <span className="text-blue-600">📍 Nilüfer, Bursa</span>
        </div>

        <div className="prose prose-lg max-w-none">
          
          {/* ADIM 1: Geo-Lokasyonlu Empatik Giriş */}
          <section className="mb-10">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Bursa'da</strong> acil servise gelen travma hastalarının büyük kısmı: <em>"Doktor bey, düşerken elimi yere koydum, el bileğim çok ağrıyor."</em>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              El bileği kırığı (radius kırığı), <strong>vücuttaki en sık görülen kırıktır</strong>. Özellikle yaşlılarda osteoporoza bağlı çok sık görülür. Her düşme sonrası el bileği kırığı olabilir.
            </p>
            <p className="text-gray-700 leading-relaxed">
              İyi haber: <strong>Erken tanı ve doğru tedavi ile tam iyileşme mümkün</strong>. Modern cerrahi teknikler sayesinde erken mobilizasyon sağlıyor, sert bilek riskini minimize ediyoruz.
            </p>
          </section>

          {/* ADIM 2: FAQ Modülü */}
          <section className="bg-indigo-50 rounded-xl p-6 mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">❓ En Çok Sorulan 3 Soru</h2>
            
            <div className="space-y-4">
              <details className="bg-white rounded-lg p-4 cursor-pointer" open>
                <summary className="font-semibold text-gray-900">El bileği kırığı nasıl anlaşılır?</summary>
                <p className="mt-3 text-gray-600">
                  Düşme sonrası <strong>şiddetli ağrı, şişlik, morluk, şekil bozukluğu</strong> (çatal sırtı görünümü) görülür. El bileği hareket ettirilemez. Tanı için <strong>mutlaka röntgen</strong> çekilmelidir.
                </p>
              </details>
              
              <details className="bg-white rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-gray-900">Ameliyat gerektirir mi?</summary>
                <p className="mt-3 text-gray-600">
                  <strong>Yerinden oynamayan basit kırıklar</strong> → alçı (6 hafta). <strong>Parçalı, yerinden oynamış kırıklar</strong> → cerrahi (plak-vida). Yaşlılarda osteoporoza bağlı parçalı kırıklar çok sık cerrahi gerektirir.
                </p>
              </details>
              
              <details className="bg-white rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-gray-900">İyileşme süresi ne kadar?</summary>
                <p className="mt-3 text-gray-600">
                  Alçı tedavisi <strong>6 hafta</strong>. Cerrahi tedavide kemik kaynaması <strong>8-12 hafta</strong>. Erken mobilizasyon ile 2-3 haftada hareket başlar. Tam güç geri kazanımı <strong>3-6 ay</strong>.
                </p>
              </details>
            </div>
          </section>

          {/* İçindekiler */}
          <div className="bg-gray-50 rounded-xl p-6 mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">📑 İçindekiler</h2>
            <ul className="space-y-2">
              <li><a href="#nedir" className="text-blue-600 hover:underline">El Bileği Kırığı Nedir?</a></li>
              <li><a href="#tipler" className="text-blue-600 hover:underline">Kırık Tipleri</a></li>
              <li><a href="#belirtiler" className="text-blue-600 hover:underline">Belirtiler</a></li>
              <li><a href="#tani" className="text-blue-600 hover:underline">Tanı Yöntemleri</a></li>
              <li><a href="#tedavi" className="text-blue-600 hover:underline">Tedavi Seçenekleri</a></li>
              <li><a href="#rehabilitasyon" className="text-blue-600 hover:underline">Rehabilitasyon</a></li>
              <li><a href="#onleme" className="text-blue-600 hover:underline">Önleme</a></li>
            </ul>
          </div>

          {/* ADIM 4: Dr. Nar Analojisi */}
          <section id="nedir" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">El Bileği Kırığı Nedir?</h2>
            
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6">
              <p className="text-gray-800 italic mb-4">
                "Hastalara şöyle anlatıyorum..."
              </p>
              <p className="text-gray-800 leading-relaxed">
                El bileğiniz, <strong>2 uzun kemikle (radius ve ulna) başlar</strong>. Düşerken elini yere koyduğunda tüm vücut ağırlığın bu iki kemiğin uçlarına biner. Özellikle <strong>radius kemiğinin ucunda</strong> (bilek hizasında) kırık oluşur.
              </p>
              <p className="text-gray-800 leading-relaxed mt-3">
                Genç birinin kemiği sağlam → kırık basit. Yaşlı birinin kemiği <strong>osteoporozlu → kırık parçalı</strong>, ameliyat gerektirebilir. İşte bu yüzden yaşlılarda el bileği kırığı çok sık cerrahi gerektirir.
              </p>
            </div>

            <p className="text-gray-700 mb-4">
              El bileği kırığı, <strong>tüm kırıkların %15-20'sini</strong> oluşturur. Özellikle yaşlı kadınlarda çok sık (osteoporoz nedeniyle).
            </p>

            <div className="bg-red-50 rounded-lg p-4">
              <p className="text-red-900 font-semibold mb-2">⚠️ Risk Grupları</p>
              <ul className="text-red-800 text-sm space-y-1">
                <li>• <strong>Yaşlılar</strong> (özellikle osteoporozlu kadınlar)</li>
                <li>• <strong>Çocuklar</strong> (oyun sırasında düşme)</li>
                <li>• <strong>Kaykaycılar, patenli kaykay yapanlar</strong></li>
                <li>• <strong>Kış aylarında buzlu yollarda yürüyenler</strong></li>
              </ul>
            </div>
          </section>

          {/* Kırık Tipleri */}
          <section id="tipler" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">El Bileği Kırığı Tipleri</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 mb-2">1. Colles Kırığı (EN SIK!)</h3>
                <p className="text-blue-700 text-sm mb-2">
                  Radius kemiğinin ucu <strong>sırt tarafına doğru kırılır</strong>. "Çatal sırtı deformitesi" tipik görünüm.
                </p>
                <ul className="text-blue-600 text-xs space-y-1">
                  <li>• El üzerine düşme sonucu</li>
                  <li>• Yaşlılarda çok sık</li>
                  <li>• %90 el bileği kırığı bu tiptir</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-900 mb-2">2. Smith Kırığı</h3>
                <p className="text-purple-700 text-sm mb-2">
                  Radius ucu <strong>avuç tarafına doğru kırılır</strong>. Colles'in tersi.
                </p>
                <ul className="text-purple-600 text-xs space-y-1">
                  <li>• El tersi üzerine düşme</li>
                  <li>• Daha nadir görülür</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-semibold text-green-900 mb-2">3. Skafoid Kırığı</h3>
                <p className="text-green-700 text-sm mb-2">
                  El bileğindeki <strong>en küçük kemiklerden biri</strong> (skafoid) kırılır. Teşhis zordur!
                </p>
                <ul className="text-green-600 text-xs space-y-1">
                  <li>• Röntgende görülmeyebilir</li>
                  <li>• MR veya BT gerekebilir</li>
                  <li>• Geç teşhis → kronik ağrı</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-4">
                <h3 className="font-semibold text-orange-900 mb-2">4. Barton Kırığı</h3>
                <p className="text-orange-700 text-sm mb-2">
                  Radius ucu + eklem yüzeyi birlikte kırılır. <strong>Cerrahi şart!</strong>
                </p>
                <ul className="text-orange-600 text-xs space-y-1">
                  <li>• Eklem yüzünü ilgilendirir</li>
                  <li>• Mutlaka cerrahi gerekir</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Belirtiler */}
          <section id="belirtiler" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">El Bileği Kırığı Belirtileri</h2>
            
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-5">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">💥</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">1. Şiddetli Ağrı</h3>
                    <p className="text-gray-700">
                      Düşme sonrası <strong>hemen başlar</strong>. Kırık uçları birbirine sürtündüğü için çok şiddetli.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-5">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">🍴</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">2. Şekil Bozukluğu (Çatal Sırtı Deformitesi)</h3>
                    <p className="text-gray-700">
                      Colles kırığında tipik: El bileği <strong>"çatal sırtı" gibi görünür</strong>. Radius ucu yukarı doğru çıkmış.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-5">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">💧</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">3. Şişlik ve Morarma</h3>
                    <p className="text-gray-700">
                      Saatler içinde el bileği şişer, morluk el sırtına ve parmaklara yayılır.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-5">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">🚫</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">4. Hareket Kısıtlılığı</h3>
                    <p className="text-gray-700">
                      El bileği hareket ettirilemez. Bükme-açma çok ağrılı veya imkansız.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-5">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">⚠️</span>
                  <div>
                    <h3 className="font-semibold text-yellow-900 mb-2">5. Skafoid Kırığında Özel Belirti</h3>
                    <p className="text-yellow-800">
                      Başparmak tabanında (anatomik snuff box) basınca <strong>hassasiyet</strong>. Şişlik minimal olabilir, bu yüzden atlanabilir!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tanı */}
          <section id="tani" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tanı Nasıl Konur?</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Fizik Muayene</h3>
                  <p className="text-gray-600 mb-2">
                    Doktor el bileğini dikkatle inceler:
                  </p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Şişlik, deformite, açık yara kontrolü</li>
                    <li>• <strong>Damar kontrolü:</strong> Nabız alınır, parmak uçları sıcaklığı</li>
                    <li>• <strong>Sinir kontrolü:</strong> Parmak hareketleri, duyu muayenesi</li>
                    <li>• <strong>Skafoid hassasiyet testi:</strong> Anatomik snuff box basınç testi</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Röntgen (En Önemli Tetkik)</h3>
                  <p className="text-gray-600">
                    <strong>En az 2 planda</strong> (ön-arka, yan). Kırığın varlığını, tipini, yerinden oynama derecesini gösterir. <strong>Dikkat:</strong> Skafoid kırığı ilk röntgende görülmeyebilir!
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900">BT (Bilgisayarlı Tomografi)</h3>
                  <p className="text-gray-600">
                    Parçalı kırıklar, eklem yüzü kırıkları, cerrahi planlama için. <strong>3D rekonstrüksiyon</strong> ile kırık anatomisi detaylı görülür.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-gray-900">MR (Skafoid Kırığı Şüphesinde)</h3>
                  <p className="text-gray-600">
                    Röntgende görülmeyen skafoid kırığını gösterir. Bağ yaralanmaları için de gerekebilir.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Tedavi */}
          <section id="tedavi" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tedavi Seçenekleri</h2>
            
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
              <p className="text-purple-900 font-semibold mb-2">🎯 Tedavi Hedefi</p>
              <p className="text-purple-800">
                <strong>1. Anatomik dizilim</strong> (kırık parçalar doğru pozisyonda)<br />
                <strong>2. Erken mobilizasyon</strong> (sert bilek önleme)<br />
                <strong>3. Tam hareket ve güç geri kazanımı</strong>
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">1️⃣ Konservatif (Alçı) Tedavi</h3>
            
            <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Kimler İçin Uygun?</h4>
              <ul className="text-gray-700 text-sm space-y-1 mb-4">
                <li>• <strong>Yerinden oynamayan basit kırıklar</strong></li>
                <li>• <strong>Minimal deplasman</strong> (2-3 mm'den az)</li>
                <li>• <strong>Çocuklarda büyüme plağı kırıkları</strong></li>
              </ul>
              
              <h4 className="font-semibold text-gray-900 mb-3">Süreç:</h4>
              <div className="space-y-2 text-sm text-gray-700">
                <p>• <strong>Kapalı redüksiyon:</strong> Kırık uçları anestezi altında yerine koyulur</p>
                <p>• <strong>Alçı uygulaması:</strong> El içi-ön kol-dirsek üstü alçı (6 hafta)</p>
                <p>• <strong>Kontrol röntgenleri:</strong> 1., 2., 6. hafta</p>
                <p>• <strong>Alçı çıkarıldıktan sonra:</strong> Koruyucu atel + fizyoterapi</p>
              </div>
              
              <div className="bg-yellow-50 rounded-lg p-3 mt-4">
                <p className="text-yellow-900 font-semibold text-sm mb-1">⚠️ Dikkat!</p>
                <p className="text-yellow-800 text-xs">
                  Alçı tedavisi sırasında kırık <strong>yerinden oynayabilir</strong> (5-10% risk). Bu yüzden düzenli kontrol şart!
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">2️⃣ Cerrahi Tedavi</h3>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
              <p className="text-green-900 font-semibold mb-2">✅ Ne Zaman Cerrahi?</p>
              <ul className="text-green-800 text-sm space-y-1">
                <li>• Yerinden oynamış, parçalı kırıklar</li>
                <li>• Eklem yüzünü ilgilendiren kırıklar</li>
                <li>• Açık kırıklar</li>
                <li>• Kapalı redüksiyon başarısız</li>
                <li>• Osteoporozlu yaşlılarda parçalı kırıklar</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Cerrahi Teknikler</h4>
              
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-1">🔩 Volar Plak Fiksasyonu (EN SIK!)</p>
                  <p className="text-gray-600 text-sm">
                    El bileği avuç tarafından yaklaşım. Metal plak ve vidalar ile kırık sabitlenir. <strong>En sık kullanılan yöntem</strong>. Erken mobilizasyon mümkün.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-1">📌 Kırşner Telleri</p>
                  <p className="text-gray-600 text-sm">
                    İnce tellerle tespit. Basit kırıklarda. Minimal invaziv. 6 hafta sonra teller çıkarılır.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-1">🔄 Eksternal Fiksatör</p>
                  <p className="text-gray-600 text-sm">
                    Çok parçalı kırıklarda. Dışarıdan aparatle tespit. İyileşme süresi daha uzun.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-blue-900 font-semibold mb-2">⏱️ Ameliyat Sonrası</p>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• Hastanede kalış: <strong>1-2 gün</strong></li>
                <li>• Atel/splint: <strong>2 hafta</strong></li>
                <li>• <strong>Erken hareket başlar</strong> (2-3. gün parmak, 2. hafta bilek)</li>
                <li>• Dikişler: 10-14 günde alınır</li>
                <li>• Kemik kaynaması: 8-12 hafta</li>
              </ul>
            </div>
          </section>

          {/* Rehabilitasyon */}
          <section id="rehabilitasyon" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Rehabilitasyon (ÇOK ÖNEMLİ!)</h2>
            
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
              <p className="text-orange-900 font-semibold mb-2">🔥 En Kritik Aşama</p>
              <p className="text-orange-800">
                El bileği kırığı tedavisinde <strong>en önemli faktör fizyoterapi</strong>dir! Alçı çıktıktan sonra 6-8 hafta yoğun fizyoterapi şart.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Alçı Döneminde (0-6 Hafta)</h3>
                  <p className="text-gray-600">
                    <strong>Parmak hareketleri:</strong> Parmakları sık sık hareket ettirin (şişlik önler). Kol elevasyonu (yukarıda tutma).
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Erken Mobilizasyon (6-8 Hafta)</h3>
                  <p className="text-gray-600">
                    Alçı çıktıktan sonra <strong>pasif hareket</strong> başlar. Fizyoterapist eşliğinde germe egzersizleri.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Aktif Hareket (8-12 Hafta)</h3>
                  <p className="text-gray-600">
                    Hasta kendi gücüyle hareket. <strong>Güçlendirme egzersizleri</strong> başlar (hamur sıkma, top sıkma).
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Fonksiyonel Eğitim (3-6 Ay)</h3>
                  <p className="text-gray-600">
                    Günlük aktivitelere dönüş. <strong>Tam güç geri kazanımı</strong> bu aşamada.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Önleme */}
          <section id="onleme" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">El Bileği Kırığını Nasıl Önleriz?</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-semibold text-green-900 mb-2">✅ Yaşlılar İçin Koruyucu Önlemler</h3>
                <ul className="text-green-700 space-y-1 text-sm">
                  <li>• <strong>Osteoporoz tedavisi</strong> (kalsiyum, D vitamini, ilaç)</li>
                  <li>• <strong>Ev güvenliği:</strong> Halı kaldırma, tutunma barları</li>
                  <li>• <strong>Bastonla yürüme</strong> (denge sorunlu yaşlılarda)</li>
                  <li>• <strong>Gözlük takma</strong> (görme bozukluğu varsa)</li>
                  <li>• <strong>Düzenli egzersiz</strong> (denge ve kas gücü)</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 mb-2">✅ Gençler/Sporcular İçin</h3>
                <ul className="text-blue-700 space-y-1 text-sm">
                  <li>• <strong>Koruyucu ekipman:</strong> Bilek bandı, korumalık</li>
                  <li>• <strong>Doğru düşme tekniği</strong> (spor eğitimi)</li>
                  <li>• <strong>Güçlendirme egzersizleri</strong> (bilek ve ön kol)</li>
                  <li>• <strong>Kış aylarında dikkat</strong> (buzlu yollar)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Klinik Başarı Hikayesi */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Klinikten Başarı Hikayeleri</h2>
            
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">👵</span>
                  <span className="font-semibold text-gray-800">Emekli Kadın, 72 Yaş, Parçalı Colles Kırığı</span>
                </div>
                <p className="text-gray-600 mb-2">
                  <strong>Sorun:</strong> Banyo kayması, parçalı radius kırığı, osteoporoz mevcut
                </p>
                <p className="text-gray-700">
                  <strong>Tedavi:</strong> Volar plak fiksasyonu + osteoporoz tedavisi + 8 hafta fizyoterapi
                </p>
                <p className="text-green-700 font-medium">
                  <strong>Sonuç:</strong> 3 ayda günlük işlerine döndü. Tam hareket genişliği, ağrısız.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">🛹</span>
                  <span className="font-semibold text-gray-800">Kaykay Sporcusu, 16 Yaş, Skafoid Kırığı</span>
                </div>
                <p className="text-gray-600 mb-2">
                  <strong>Sorun:</strong> İlk röntgen normal, ağrı devam etti. MR'da skafoid kırığı tespit edildi
                </p>
                <p className="text-gray-700">
                  <strong>Tedavi:</strong> Başparmak alçısı (8 hafta) + fizyoterapi
                </p>
                <p className="text-green-700 font-medium">
                  <strong>Sonuç:</strong> 3 ay sonra kaykaya döndü, tam iyileşme.
                </p>
              </div>
            </div>
          </section>

          {/* PubMed Referansları */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">📚 Bilimsel Kaynaklar</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <ol className="space-y-3 text-sm text-gray-700">
                <li>
                  <span className="font-medium">1.</span> Chung KC, Spilson SV. <em>"The frequency and epidemiology of hand and forearm fractures in the United States."</em> J Hand Surg Am. 2001;26(5):908-15.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/11561245/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 11561245</a>
                </li>
                <li>
                  <span className="font-medium">2.</span> Orbay JL, Fernandez DL. <em>"Volar fixation for dorsally displaced fractures of the distal radius: a preliminary report."</em> J Hand Surg Am. 2002;27(2):205-15.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/11901379/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 11901379</a>
                </li>
                <li>
                  <span className="font-medium">3.</span> Handoll HH, et al. <em>"Interventions for treating distal radial fractures in adults."</em> Cochrane Database Syst Rev. 2003;(3):CD003209.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/12917953/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 12917953</a>
                </li>
                <li>
                  <span className="font-medium">4.</span> Arora R, et al. <em>"A prospective randomized trial comparing nonoperative treatment with volar locking plate fixation for displaced and unstable distal radial fractures in patients sixty-five years of age and older."</em> J Bone Joint Surg Am. 2011;93(23):2146-53.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/22159849/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 22159849</a>
                </li>
                <li>
                  <span className="font-medium">5.</span> Herbert TJ, Fisher WE. <em>"Management of the fractured scaphoid using a new bone screw."</em> J Bone Joint Surg Br. 1984;66(1):114-23.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/6693468/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 6693468</a>
                </li>
              </ol>
              
              <details className="mt-4">
                <summary className="cursor-pointer text-blue-600 font-medium hover:text-blue-800 flex items-center gap-2">
                  <span>📖 Daha Fazla Kaynak Göster (5 ek referans)</span>
                </summary>
                <ol start={6} className="space-y-3 text-sm text-gray-700 mt-4 pt-4 border-t">
                  <li>
                    <span className="font-medium">6.</span> Mellstrand-Navarro C, et al. <em>"Treatment of radius or ulna fractures in the elderly: a systematic review covering effectiveness, safety, economic aspects and current practice."</em> PLoS One. 2019;14(3):e0214362.{' '}
                    <a href="https://pubmed.ncbi.nlm.nih.gov/30897144/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 30897144</a>
                  </li>
                  <li>
                    <span className="font-medium">7.</span> Diaz-Garcia RJ, et al. <em>"A systematic review of outcomes and complications of treating unstable distal radius fractures in the elderly."</em> J Hand Surg Am. 2011;36(5):824-35.{' '}
                    <a href="https://pubmed.ncbi.nlm.nih.gov/21527140/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 21527140</a>
                  </li>
                  <li>
                    <span className="font-medium">8.</span> Slutsky DJ. <em>"Predicting the outcome of distal radius fractures."</em> Hand Clin. 2005;21(3):289-94.{' '}
                    <a href="https://pubmed.ncbi.nlm.nih.gov/16039441/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 16039441</a>
                  </li>
                  <li>
                    <span className="font-medium">9.</span> Wei DH, et al. <em>"Unstable distal radial fractures treated with external fixation, a radial column plate, or a volar plate. A prospective randomized trial."</em> J Bone Joint Surg Am. 2009;91(7):1568-77.{' '}
                    <a href="https://pubmed.ncbi.nlm.nih.gov/19571078/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 19571078</a>
                  </li>
                  <li>
                    <span className="font-medium">10.</span> Koval KJ, et al. <em>"Distal radial fractures in the elderly: indications for open reduction and internal fixation."</em> Bull Hosp Jt Dis. 1999;58(1):12-8.{' '}
                    <a href="https://pubmed.ncbi.nlm.nih.gov/10409856/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 10409856</a>
                  </li>
                </ol>
              </details>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-2">El Bileği Kırığı mı? Acil Değerlendirme!</h2>
            <p className="text-indigo-100 mb-2">📍 Nilüfer, Bursa</p>
            <p className="text-indigo-100 mb-6">
              Düştünüz ve el bileğiniz şişti mi? Erken tanı ve doğru tedavi ile tam iyileşme mümkün!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/905522493909"
                className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
              >
                📱 WhatsApp ile Randevu
              </a>
              <a
                href="tel:+905522493909"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition"
              >
                📞 0552 249 39 09
              </a>
            </div>
          </section>
        </div>
      </article>
    </>
  )
}
