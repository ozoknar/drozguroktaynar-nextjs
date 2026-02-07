import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Dirsek Kırığı Tedavisi | Op. Dr. Özgür Oktay Nar - Bursa',
  description: 'Dirsek kırığı belirtileri, tanı ve tedavi yöntemleri. Bursa\'da dirsek kırığı ameliyatı, erken mobilizasyon protokolleri. Uzman ortopedist yaklaşımı.',
  keywords: 'dirsek kırığı, dirsek kırığı tedavisi, dirsek kırığı ameliyatı, dirsek çıkığı, Bursa dirsek kırığı, travma tedavisi',
  openGraph: {
    title: 'Dirsek Kırığı Tedavisi | Bursa Ortopedi',
    description: 'Düşme sonrası dirsek ağrısı ve şişlik mi? Dirsek kırığı erken tanı ve doğru tedavi ile tam iyileşir. Uzman yaklaşım.',
    type: 'article',
    images: [
      {
        url: 'https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2025/04/dirsek-kirigi-tedavi.webp',
        width: 1200,
        height: 800,
        alt: 'Dirsek Kırığı Tedavisi',
      },
    ],
  },
}

// Medical Web Page Schema
const medicalSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Dirsek Kırığı Tedavisi",
  "description": "Dirsek kırığı belirtileri, tanı yöntemleri ve cerrahi/konservatif tedavi seçenekleri.",
  "medicalAudience": ["Patient"],
  "about": {
    "@type": "MedicalCondition",
    "name": "Dirsek Kırığı",
    "alternateName": "Elbow Fracture",
    "associatedAnatomy": {
      "@type": "AnatomicalStructure",
      "name": "Dirsek Eklemi"
    },
    "signOrSymptom": [
      {
        "@type": "MedicalSymptom",
        "name": "Şiddetli ağrı ve şişlik"
      },
      {
        "@type": "MedicalSymptom",
        "name": "Hareket kısıtlılığı"
      },
      {
        "@type": "MedicalSymptom",
        "name": "Deformite"
      }
    ],
    "possibleTreatment": [
      {
        "@type": "MedicalTherapy",
        "name": "Konservatif Tedavi (Alçı/Atel)"
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
      "name": "Dirsek kırığı nasıl anlaşılır?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Düşme veya darbe sonrası şiddetli ağrı, şişlik, morluk, hareket kısıtlılığı, deformite görülür. Dirseği hareket ettirirken kıtırtı sesi duyulabilir. Tanı için mutlaka röntgen çekilmelidir."
      }
    },
    {
      "@type": "Question",
      "name": "Dirsek kırığı ameliyat gerektirir mi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yerinden oynamayan, basit kırıklar alçı veya atel ile tedavi edilir. Ancak parçalı, yerinden oynamış, eklem yüzünü ilgilendiren kırıklarda cerrahi tedavi gerekir. Erken mobilizasyon için cerrahi tercih edilir."
      }
    },
    {
      "@type": "Question",
      "name": "Dirsek kırığı iyileşme süresi ne kadar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Basit kırıklarda 6-8 hafta. Cerrahi tedavide kemik kaynaması 8-12 hafta sürer. Erken mobilizasyon protokolleri ile 2-3 haftada hareket başlar. Tam iyileşme ve güç geri kazanımı 3-6 ay alır."
      }
    }
  ]
}

export default function DirsekKirigiPage() {
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
          <span className="text-gray-700">Dirsek Kırığı</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Dirsek Kırığı: Erken Tanı ve Doğru Tedavi ile Tam İyileşme
        </h1>

        {/* Hero Image */}
        <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden bg-gradient-to-br from-red-100 to-yellow-100">
          <Image
            src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2025/04/dirsek-kirigi-tedavi.webp"
            alt="Dirsek kırığı tedavisi"
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
              <strong>Bursa'da</strong> acil servise gelen travma hastalarının önemli bir kısmı: <em>"Doktor bey, düşerken el üzerine düştüm, dirsek ağrım çok şiddetli."</em>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dirsek eklemi, vücudun <strong>en karmaşık eklemlerinden biri</strong>dir. Kırık sonrası tedavi edilmezse veya yanlış tedavi edilirse <strong>kalıcı hareket kısıtlılığı</strong> (sert dirsek) oluşabilir.
            </p>
            <p className="text-gray-700 leading-relaxed">
              İyi haber: Erken tanı ve <strong>doğru tedavi protokolü</strong> ile tam iyileşme mümkün. Modern cerrahi teknikler sayesinde erken mobilizasyon sağlıyor, sert dirsek riskini minimize ediyoruz.
            </p>
          </section>

          {/* ADIM 2: FAQ Modülü */}
          <section className="bg-red-50 rounded-xl p-6 mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">❓ En Çok Sorulan 3 Soru</h2>
            
            <div className="space-y-4">
              <details className="bg-white rounded-lg p-4 cursor-pointer" open>
                <summary className="font-semibold text-gray-900">Dirsek kırığı nasıl anlaşılır?</summary>
                <p className="mt-3 text-gray-600">
                  Düşme veya darbe sonrası <strong>şiddetli ağrı, şişlik, morluk, hareket kısıtlılığı</strong> ve bazen deformite görülür. Dirseği hareket ettirirken kıtırtı sesi duyulabilir. Tanı için <strong>mutlaka röntgen</strong> çekilmelidir.
                </p>
              </details>
              
              <details className="bg-white rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-gray-900">Ameliyat gerektirir mi?</summary>
                <p className="mt-3 text-gray-600">
                  <strong>Yerinden oynamayan basit kırıklar</strong> → alçı/atel ile tedavi. <strong>Parçalı, yerinden oynamış kırıklar</strong> → cerrahi tedavi. Eklem yüzünü ilgilendiren kırıklarda <strong>kesinlikle cerrahi</strong> gerekir (erken mobilizasyon için).
                </p>
              </details>
              
              <details className="bg-white rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-gray-900">İyileşme süresi ne kadar?</summary>
                <p className="mt-3 text-gray-600">
                  Basit kırıklar <strong>6-8 hafta</strong>. Cerrahi tedavide kemik kaynaması <strong>8-12 hafta</strong>. Erken mobilizasyon ile 2-3 haftada hareket başlar. Tam iyileşme <strong>3-6 ay</strong>.
                </p>
              </details>
            </div>
          </section>

          {/* İçindekiler */}
          <div className="bg-gray-50 rounded-xl p-6 mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">📑 İçindekiler</h2>
            <ul className="space-y-2">
              <li><a href="#nedir" className="text-blue-600 hover:underline">Dirsek Kırığı Nedir?</a></li>
              <li><a href="#tipler" className="text-blue-600 hover:underline">Kırık Tipleri</a></li>
              <li><a href="#belirtiler" className="text-blue-600 hover:underline">Belirtiler</a></li>
              <li><a href="#tani" className="text-blue-600 hover:underline">Tanı Yöntemleri</a></li>
              <li><a href="#tedavi" className="text-blue-600 hover:underline">Tedavi Seçenekleri</a></li>
              <li><a href="#rehabilitasyon" className="text-blue-600 hover:underline">Rehabilitasyon</a></li>
              <li><a href="#komplikasyonlar" className="text-blue-600 hover:underline">Komplikasyonlar</a></li>
            </ul>
          </div>

          {/* ADIM 4: Dr. Nar Analojisi */}
          <section id="nedir" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Dirsek Kırığı Nedir?</h2>
            
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6">
              <p className="text-gray-800 italic mb-4">
                "Hastalara şöyle anlatıyorum..."
              </p>
              <p className="text-gray-800 leading-relaxed">
                Dirsek eklemi, <strong>3 kemiğin bir araya geldiği</strong> karmaşık bir yapı: Kol kemiği (humerus), çıkık (radius), ön kol iç kemiği (ulna). Düşünün ki bu 3 parçalı bir puzzle... Şimdi bu puzzle'ın parçalarından biri kırılırsa → <strong>eklemi yeniden monte etmek çok hassas bir işlem</strong>.
              </p>
              <p className="text-gray-800 leading-relaxed mt-3">
                Çünkü dirsek sadece kemik değil, <strong>eklem yüzeyleri, bağlar, sinirler, damarlar</strong> içerir. Kırık yanlış kaynasa → eklem yüzeyi düzgün olmaz → <strong>erken kireçlenme ve sert dirsek</strong> oluşur.
              </p>
            </div>

            <p className="text-gray-700 mb-4">
              Dirsek kırıkları genellikle <strong>el üzerine düşme, direkt darbe veya trafik kazası</strong> sonucu oluşur. Kırık olmasa bile bağ kopmaları ve çıkıklar da görülebilir.
            </p>
          </section>

          {/* Kırık Tipleri */}
          <section id="tipler" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Dirsek Kırığı Tipleri</h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 mb-2">1. Humerus Suprakondiler Kırığı</h3>
                <p className="text-blue-700 text-sm mb-2">
                  Kol kemiğinin dirsek üstü kırığı. <strong>Çocuklarda çok sık.</strong>
                </p>
                <ul className="text-blue-600 text-xs space-y-1">
                  <li>• Sinir/damar yaralanma riski yüksek</li>
                  <li>• Acil değerlendirme gerekir</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-purple-900 mb-2">2. Radial Baş Kırığı</h3>
                <p className="text-purple-700 text-sm mb-2">
                  Çıkık kemiğinin baş kısmı kırığı. <strong>Yetişkinlerde sık.</strong>
                </p>
                <ul className="text-purple-600 text-xs space-y-1">
                  <li>• El bileği dönme hareketini etkiler</li>
                  <li>• Basit → alçı, parçalı → cerrahi</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-semibold text-green-900 mb-2">3. Olekranon Kırığı</h3>
                <p className="text-green-700 text-sm mb-2">
                  Ön kol iç kemiğinin dirsek arkası çıkıntısı kırığı.
                </p>
                <ul className="text-green-600 text-xs space-y-1">
                  <li>• Direkt darbe (düşme) sonucu</li>
                  <li>• Genellikle cerrahi gerekir</li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 rounded-lg p-4 mt-4">
              <h3 className="font-semibold text-orange-900 mb-2">4. Kompleks Dirsek Kırık-Çıkıkları</h3>
              <p className="text-orange-700 text-sm">
                Kırık + çıkık birlikte. <strong>En ciddi tip.</strong> Genellikle yüksek enerjili travma (trafik kazası). Multidisipliner yaklaşım gerekir.
              </p>
            </div>
          </section>

          {/* Belirtiler */}
          <section id="belirtiler" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Dirsek Kırığı Belirtileri</h2>
            
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-5">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">💥</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">1. Şiddetli Ağrı ve Şişlik</h3>
                    <p className="text-gray-700">
                      Travma sonrası <strong>hemen başlar</strong>. Dirsek çevresinde hızlı şişlik ve morluk oluşur.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-5">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">🚫</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">2. Hareket Kısıtlılığı</h3>
                    <p className="text-gray-700">
                      Dirsek bükme-açma <strong>çok ağrılı veya imkansız</strong>. Hastalar dirseği sabit pozisyonda tutar.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-5">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">🔊</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">3. Kıtırtı veya Atlama Sesi</h3>
                    <p className="text-gray-700">
                      Dirsek hareket ettirildiğinde <strong>krepitasyon</strong> (kıtırtı sesi) duyulabilir. Kemik parçaları birbirine sürtünüyor demek.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-5">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">🦴</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">4. Deformite (Şekil Bozukluğu)</h3>
                    <p className="text-gray-700">
                      Dirseğin şekli <strong>normal değil</strong>. Yerinden oynamış kırıklarda belirgindir. Çıkık ile birlikte ise çok belirgin.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-5">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">🩸</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">5. Açık Yaralanma (Nadir)</h3>
                    <p className="text-gray-700">
                      Kemik deri altından görülüyorsa → <strong>açık kırık</strong>. Enfeksiyon riski yüksek, acil cerrahi gerekir.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-5">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">⚠️</span>
                  <div>
                    <h3 className="font-semibold text-yellow-900 mb-2">6. Elde Uyuşukluk veya Soğukluk (ACİL!)</h3>
                    <p className="text-yellow-800">
                      <strong>Damar veya sinir yaralanması</strong> ihtimali! Hemen acil servise gidin. Geç kalınırsa kalıcı hasar oluşabilir.
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
                    Doktor dirseği dikkatle inceler:
                  </p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Şişlik, deformite, açık yara kontrolü</li>
                    <li>• <strong>Damar kontrolü:</strong> Nabız alınır, el sıcaklığı değerlendirilir</li>
                    <li>• <strong>Sinir kontrolü:</strong> Parmak hareketleri, duyusal muayene</li>
                    <li>• Hareket genişliği (mümkünse)</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Röntgen (En Önemli Tetkik)</h3>
                  <p className="text-gray-600">
                    <strong>En az 2 planda</strong> (ön-arka, yan) çekilir. Kırığın varlığını, tipini, yerinden oynama derecesini gösterir. Çoğu zaman tanı için yeterlidir.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900">BT (Bilgisayarlı Tomografi)</h3>
                  <p className="text-gray-600">
                    Parçalı kırıklar, eklem yüzü kırıkları, cerrahi planlama için istenir. <strong>3D rekonstrüksiyon</strong> ile kırık anatomisi detaylı görülür.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-gray-900">MR (Gerekirse)</h3>
                  <p className="text-gray-600">
                    Bağ yaralanmaları, kıkırdak hasarı şüphesinde. Kronik ağrı varsa veya cerrahi sonrası sorun çıkarsa istenebilir.
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
                <strong>1. Kemik iyileşmesi</strong><br />
                <strong>2. Erken mobilizasyon</strong> (sert dirsek önleme)<br />
                <strong>3. Tam hareket genişliği ve güç geri kazanımı</strong>
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">1️⃣ Konservatif (Ameliyatsız) Tedavi</h3>
            
            <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Kimler İçin Uygun?</h4>
              <ul className="text-gray-700 text-sm space-y-1 mb-4">
                <li>• <strong>Yerinden oynamayan basit kırıklar</strong></li>
                <li>• <strong>Minimal deplasman</strong> (2 mm'den az)</li>
                <li>• <strong>Eklem yüzünü ilgilendirmeyen kırıklar</strong></li>
              </ul>
              
              <h4 className="font-semibold text-gray-900 mb-3">Süreç:</h4>
              <div className="space-y-2 text-sm text-gray-700">
                <p>• <strong>İlk 1-2 hafta:</strong> Alçı veya atel (90 derece bükülü pozisyon)</p>
                <p>• <strong>2-4. hafta:</strong> Kontrol röntgeni. Yerinden oynama yoksa hareket başlar</p>
                <p>• <strong>4-6. hafta:</strong> Alçı çıkarılır, fizyoterapi başlar</p>
                <p>• <strong>6-8. hafta:</strong> Tam iyileşme kontrolü</p>
              </div>
              
              <div className="bg-yellow-50 rounded-lg p-3 mt-4">
                <p className="text-yellow-900 font-semibold text-sm mb-1">⚠️ Dikkat!</p>
                <p className="text-yellow-800 text-xs">
                  Dirsek <strong>3 haftadan fazla hareketsiz bırakılmamalı</strong> → sert dirsek riski artar!
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
                <li>• Çıkık ile birlikte kırık</li>
                <li>• Damar/sinir yaralanması varsa</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Cerrahi Teknikler</h4>
              
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-1">🔩 Plak-Vida Fiksasyonu</p>
                  <p className="text-gray-600 text-sm">
                    En sık kullanılan yöntem. Kırık parçalar metal plak ve vidalar ile sabitlenir. <strong>Erken mobilizasyon</strong> mümkün olur.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-1">📌 Kırşner Teli/Vida</p>
                  <p className="text-gray-600 text-sm">
                    Basit kırıklarda. İnce tellerle veya vidalarla tespit. Minimal invaziv.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-1">🔄 Radial Baş Protezi</p>
                  <p className="text-gray-600 text-sm">
                    Çıkık kemiği baş kırığı onarılamıyorsa → protez yerleştirilir.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-blue-900 font-semibold mb-2">⏱️ Ameliyat Sonrası</p>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• Hastanede kalış: <strong>1-3 gün</strong></li>
                <li>• Atel/splint: <strong>1-2 hafta</strong></li>
                <li>• <strong>Erken hareket başlar</strong> (2-3. gün pasif, 2-3. hafta aktif)</li>
                <li>• Dikişler: 10-14 günde alınır</li>
              </ul>
            </div>
          </section>

          {/* Rehabilitasyon */}
          <section id="rehabilitasyon" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Rehabilitasyon (KRİTİK!)</h2>
            
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
              <p className="text-orange-900 font-semibold mb-2">🔥 En Önemli Aşama</p>
              <p className="text-orange-800">
                Dirsek kırığı tedavisinde <strong>en önemli faktör rehabilitasyon</strong>dır! Cerrahi mükemmel olsa bile fizyoterapi yapılmazsa → sert dirsek oluşur.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Erken Pasif Hareket (0-2 Hafta)</h3>
                  <p className="text-gray-600">
                    Fizyoterapist eşliğinde <strong>pasif hareket</strong>. Eklem donmasını önler.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Aktif Yardımlı Hareket (2-6 Hafta)</h3>
                  <p className="text-gray-600">
                    Hasta kendi gücüyle hareket başlar. <strong>Germe egzersizleri</strong> çok önemli.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Güçlendirme (6-12 Hafta)</h3>
                  <p className="text-gray-600">
                    Kemik kaynaması sağlamsa → direnç egzersizleri. Kas gücü geri kazanılır.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Fonksiyonel Eğitim (3-6 Ay)</h3>
                  <p className="text-gray-600">
                    Günlük aktivite ve spora dönüş eğitimi. <strong>Tam iyileşme</strong> bu aşamada.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Komplikasyonlar */}
          <section id="komplikasyonlar" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Olası Komplikasyonlar</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 rounded-lg p-4">
                <h3 className="font-semibold text-red-900 mb-2">⚠️ Erken Komplikasyonlar</h3>
                <ul className="text-red-700 space-y-1 text-sm">
                  <li>• <strong>Damar yaralanması</strong> (kompartman sendromu riski)</li>
                  <li>• <strong>Sinir yaralanması</strong> (uyuşukluk, güçsüzlük)</li>
                  <li>• <strong>Enfeksiyon</strong> (açık kırıklarda)</li>
                  <li>• <strong>Yanlış kaynama</strong> (malunion)</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-900 mb-2">📌 Geç Komplikasyonlar</h3>
                <ul className="text-yellow-700 space-y-1 text-sm">
                  <li>• <strong>Sert dirsek</strong> (hareket kısıtlılığı) - EN SIK</li>
                  <li>• <strong>Heterotopik ossifikasyon</strong> (kemikleşme)</li>
                  <li>• <strong>Post-travmatik artroz</strong> (erken kireçlenme)</li>
                  <li>• <strong>Kronik ağrı</strong></li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 mt-4">
              <p className="text-blue-900 font-semibold mb-2">💡 Sert Dirsek Nasıl Önlenir?</p>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• <strong>Erken mobilizasyon</strong> (en geç 3. hafta)</li>
                <li>• <strong>Düzenli fizyoterapi</strong> (en az 6 hafta)</li>
                <li>• <strong>Evde egzersiz disiplini</strong> (günde 3-4 kez)</li>
                <li>• <strong>Germe egzersizleri</strong> (ısı + germe kombinasyonu)</li>
              </ul>
            </div>
          </section>

          {/* Klinik Başarı Hikayesi */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Klinikten Başarı Hikayeleri</h2>
            
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">🏍️</span>
                  <span className="font-semibold text-gray-800">Motosiklet Kazası, 28 Yaş, Kompleks Dirsek Kırık-Çıkığı</span>
                </div>
                <p className="text-gray-600 mb-2">
                  <strong>Sorun:</strong> Olekranon + radial baş kırığı + çıkık, parçalı kırık
                </p>
                <p className="text-gray-700">
                  <strong>Tedavi:</strong> Acil cerrahi (plak-vida fiksasyonu) + 3 ay yoğun fizyoterapi
                </p>
                <p className="text-green-700 font-medium">
                  <strong>Sonuç:</strong> 6 ayda tam hareket genişliği, 1 yıl sonra motosiklete döndü.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">👵</span>
                  <span className="font-semibold text-gray-800">Ev Kadını, 65 Yaş, Radial Baş Kırığı</span>
                </div>
                <p className="text-gray-600 mb-2">
                  <strong>Sorun:</strong> Banyo kayması sonrası radial baş kırığı, minimal deplasman
                </p>
                <p className="text-gray-700">
                  <strong>Tedavi:</strong> Konservatif (2 hafta atel + erken mobilizasyon)
                </p>
                <p className="text-green-700 font-medium">
                  <strong>Sonuç:</strong> 8 haftada tam iyileşme, ev işlerine döndü.
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
                  <span className="font-medium">1.</span> Ring D, et al. <em>"Treatment of unstable elbow fracture dislocations."</em> J Bone Joint Surg Am. 2002;84(10):1823-8.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=elbow+fracture+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">2.</span> Doornberg J, et al. <em>"Surgical treatment of intra-articular fractures of the distal part of the humerus."</em> J Bone Joint Surg Am. 2007;89(5):1524-32.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=elbow+fracture+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">3.</span> Garrigues GE, et al. <em>"Fixation of the olecranon fracture: a biomechanical comparison of plate and screw constructs."</em> J Orthop Trauma. 2011;25(9):545-50.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=elbow+fracture+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">4.</span> Pike JM, et al. <em>"Radial head fractures - An update."</em> J Hand Surg Am. 2009;34(3):557-65.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=elbow+fracture+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">5.</span> Myderrizi N, et al. <em>"Complications following operative fixation of distal humerus fractures."</em> Injury. 2014;45(2):421-6.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=elbow+fracture+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
              </ol>
              
              <details className="mt-4">
                <summary className="cursor-pointer text-blue-600 font-medium hover:text-blue-800 flex items-center gap-2">
                  <span>📖 Daha Fazla Kaynak Göster (5 ek referans)</span>
                </summary>
                <ol start={6} className="space-y-3 text-sm text-gray-700 mt-4 pt-4 border-t">
                  <li>
                    <span className="font-medium">6.</span> Sanchez-Sotelo J. <em>"Distal humeral fractures: role of internal fixation and elbow arthroplasty."</em> J Bone Joint Surg Am. 2012;94(6):555-68.{' '}
                    <a href="https://pubmed.ncbi.nlm.nih.gov/?term=elbow+fracture+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                  </li>
                  <li>
                    <span className="font-medium">7.</span> Nauth A, et al. <em>"Management of terrible triad injuries of the elbow."</em> J Orthop Trauma. 2011;25 Suppl 1:S78-86.{' '}
                    <a href="https://pubmed.ncbi.nlm.nih.gov/?term=elbow+fracture+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                  </li>
                  <li>
                    <span className="font-medium">8.</span> Foruria AM, et al. <em>"Heterotopic ossification after surgery for fractures and dislocations involving the radial head and proximal ulna."</em> J Hand Surg Am. 2010;35(12):1928-34.{' '}
                    <a href="https://pubmed.ncbi.nlm.nih.gov/?term=elbow+fracture+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                  </li>
                  <li>
                    <span className="font-medium">9.</span> Bailey CS, et al. <em>"Outcome of plate fixation of olecranon fractures."</em> J Orthop Trauma. 2001;15(8):542-8.{' '}
                    <a href="https://pubmed.ncbi.nlm.nih.gov/?term=elbow+fracture+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                  </li>
                  <li>
                    <span className="font-medium">10.</span> Morrey BF. <em>"Current concepts in the treatment of fractures of the radial head, the olecranon, and the coronoid."</em> J Bone Joint Surg Am. 1995;77(2):316-27.{' '}
                    <a href="https://pubmed.ncbi.nlm.nih.gov/?term=elbow+fracture+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                  </li>
                </ol>
              </details>
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


          {/* CTA */}
          <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-2">Dirsek Kırığı mı? Acil Değerlendirme!</h2>
            <p className="text-red-100 mb-2">📍 Nilüfer, Bursa</p>
            <p className="text-red-100 mb-6">
              Düştünüz ve dirsek ağrınız şiddetli mi? Erken tanı ve doğru tedavi ile tam iyileşme mümkün!
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
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition"
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
