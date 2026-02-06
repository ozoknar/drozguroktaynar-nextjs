import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Dirsek Ağrısı Tedavisi | Op. Dr. Özgür Oktay Nar - Bursa',
  description: 'Dirsek ağrısı nedenleri, belirtileri ve tedavi yöntemleri. Tenisçi dirseği, golfçü dirseği, dirsek artroskopisi. Bursa\'da uzman ortopedist kontrolünde tedavi.',
  keywords: 'dirsek ağrısı, tenisçi dirseği, lateral epikondilit, golfçü dirseği, medial epikondilit, dirsek artroskopisi, Bursa dirsek tedavisi',
  openGraph: {
    title: 'Dirsek Ağrısı Tedavisi | Bursa Ortopedi',
    description: 'Dirsek ağrısı hayatınızı kısıtlıyor mu? Tenisçi dirseği, golfçu dirseği ve diğer dirsek sorunlarında ameliyatsız ve cerrahi tedavi seçenekleri.',
    type: 'article',
    images: [
      {
        url: 'https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2025/04/dirsek-agrisi-tedavi.webp',
        width: 1200,
        height: 800,
        alt: 'Dirsek Ağrısı Tedavisi',
      },
    ],
  },
}

// Medical Web Page Schema
const medicalSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Dirsek Ağrısı Tedavisi",
  "description": "Dirsek ağrısı nedenleri, tanı yöntemleri ve cerrahi/konservatif tedavi seçenekleri hakkında kapsamlı bilgi.",
  "medicalAudience": ["Patient", "Athlete"],
  "about": {
    "@type": "MedicalCondition",
    "name": "Dirsek Ağrısı",
    "alternateName": "Elbow Pain",
    "associatedAnatomy": {
      "@type": "AnatomicalStructure",
      "name": "Dirsek Eklemi"
    },
    "signOrSymptom": [
      {
        "@type": "MedicalSymptom",
        "name": "Dirsek dış yüzünde ağrı (tenisçi dirseği)"
      },
      {
        "@type": "MedicalSymptom",
        "name": "Dirsek iç yüzünde ağrı (golfçü dirseği)"
      },
      {
        "@type": "MedicalSymptom",
        "name": "Kavrama güçsüzlüğü"
      }
    ],
    "possibleTreatment": [
      {
        "@type": "MedicalTherapy",
        "name": "Fizik Tedavi"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Şok Dalga Tedavisi (ESWT)"
      },
      {
        "@type": "MedicalTherapy",
        "name": "PRP Tedavisi"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Dirsek Artroskopisi"
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
      "name": "Dirsek ağrısının en sık nedenleri nelerdir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En sık nedenler: Tenisçi dirseği (lateral epikondilit), golfçü dirseği (medial epikondilit), sinir sıkışması (kübital tünel sendromu), kireçlenme ve yumuşak doku zedelenmeleridir. Ayrıca boyun fıtığı veya omuz sorunları da dirsek ağrısı yapabilir."
      }
    },
    {
      "@type": "Question",
      "name": "Tenisçi dirseği nedir ve nasıl tedavi edilir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tenisçi dirseği, dirsek dış yüzündeki tendonların aşırı kullanımına bağlı iltihabi bir rahatsızlıktır. Tedavi: istirahat, fizik tedavi, şok dalga, PRP enjeksiyonu. Hastaların %90'ı ameliyatsız iyileşir. Dirençli vakalarda artroskopik cerrahi uygulanır."
      }
    },
    {
      "@type": "Question",
      "name": "Dirsek ağrısı için hangi tetkikler yapılır?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Direkt grafi (kemik yapısını gösterir), MRG (yumuşak doku, tendon, kıkırdak için en değerli tetkik), EMG (sinir sıkışması şüphesinde) yapılır. Fizik muayene ile birlikte bu tetkikler tedavi planlamasını yönlendirir."
      }
    }
  ]
}

export default function DirsekAgrisiPage() {
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
          <span className="text-gray-700">Dirsek Ağrısı</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Dirsek Ağrısı: Tenisçi ve Golfçü Dirseğinden Kurtulun
        </h1>

        {/* Hero Image */}
        <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden bg-gradient-to-br from-green-100 to-blue-100">
          <Image
            src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2025/04/dirsek-agrisi-tedavi.webp"
            alt="Dirsek ağrısı tedavisi"
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
              <strong>Bursa'da</strong> muayenehaneme gelen hastaların sık yakınması: <em>"Doktor bey, kavanoz açarken dirsek ağrım o kadar şiddetleniyor ki..."</em>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dirsek ağrısı, spor yapmasanız bile <strong>günlük hayatınızı felç edebilir</strong>. Yemek yemek, araba kullanmak, kaldırmak... Her basit hareket işkenceye dönüşür.
            </p>
            <p className="text-gray-700 leading-relaxed">
              İyi haber: Dirsek ağrılarının <strong>%90'ı ameliyatsız tedavi ile iyileşir</strong>. Modern yöntemler (PRP, şok dalga, ozon) sayesinde kronik dirsek ağrılarını bile çözebiliyoruz.
            </p>
          </section>

          {/* ADIM 2: FAQ Modülü */}
          <section className="bg-green-50 rounded-xl p-6 mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">❓ En Çok Sorulan 3 Soru</h2>
            
            <div className="space-y-4">
              <details className="bg-white rounded-lg p-4 cursor-pointer" open>
                <summary className="font-semibold text-gray-900">Dirsek ağrısının en sık nedenleri nelerdir?</summary>
                <p className="mt-3 text-gray-600">
                  <strong>1. Tenisçi dirseği</strong> (dış yüz ağrısı), <strong>2. Golfçü dirseği</strong> (iç yüz ağrısı), <strong>3. Sinir sıkışması</strong> (kübital tünel), <strong>4. Kireçlenme</strong>, <strong>5. Boyun fıtığı yansıması</strong>.
                </p>
              </details>
              
              <details className="bg-white rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-gray-900">Tenisçi dirseği ameliyatsız geçer mi?</summary>
                <p className="mt-3 text-gray-600">
                  Evet! Hastaların <strong>%90'ı ameliyatsız iyileşir</strong>. İstirahat, fizik tedavi, şok dalga, PRP ile tam iyileşme sağlanır. Sadece dirençli vakalarda artroskopik cerrahi gerekir.
                </p>
              </details>
              
              <details className="bg-white rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-gray-900">Dirsek ağrısı için hangi tetkikler yapılır?</summary>
                <p className="mt-3 text-gray-600">
                  <strong>Direkt grafi</strong> (kemik yapı), <strong>MRG</strong> (yumuşak doku, tendon - en değerli tetkik), <strong>EMG</strong> (sinir sıkışması şüphesinde). Fizik muayene ile birlikte tedavi planlanır.
                </p>
              </details>
            </div>
          </section>

          {/* İçindekiler */}
          <div className="bg-gray-50 rounded-xl p-6 mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">📑 İçindekiler</h2>
            <ul className="space-y-2">
              <li><a href="#nedenler" className="text-blue-600 hover:underline">Dirsek Ağrısı Nedenleri</a></li>
              <li><a href="#tenisci-dirsegi" className="text-blue-600 hover:underline">Tenisçi Dirseği</a></li>
              <li><a href="#golfcu-dirsegi" className="text-blue-600 hover:underline">Golfçü Dirseği</a></li>
              <li><a href="#tani" className="text-blue-600 hover:underline">Tanı Yöntemleri</a></li>
              <li><a href="#tedavi" className="text-blue-600 hover:underline">Ameliyatsız Tedavi</a></li>
              <li><a href="#cerrahi" className="text-blue-600 hover:underline">Cerrahi Tedavi</a></li>
              <li><a href="#onleme" className="text-blue-600 hover:underline">Önleme</a></li>
            </ul>
          </div>

          {/* ADIM 4: Dr. Nar Analojisi */}
          <section id="nedenler" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Dirsek Ağrısı Nedenleri</h2>
            
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6">
              <p className="text-gray-800 italic mb-4">
                "Hastalara şöyle anlatıyorum..."
              </p>
              <p className="text-gray-800 leading-relaxed">
                Dirsek eklemi, <strong>3 kemiğin (kolkemiği, çıkık, ön kol kemikleri) bir araya geldiği</strong> karmaşık bir yapıdır. Etrafında kaslar, tendonlar, sinirler, bağlar var. Şimdi düşünün ki bir tendon <strong>yıllarca aynı hareketi tekrarlıyor</strong> (bilgisayar faresi kullanımı, tenis raketi sallamak, vida sıkmak)...
              </p>
              <p className="text-gray-800 leading-relaxed mt-3">
                Sonunda tendon <strong>aşınıyor, mikro yırtıklar oluşuyor</strong>. Bu kronik hasar ve iltihaplanma → <strong>dirsek ağrısı</strong>.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 rounded-lg p-4">
                <h3 className="font-semibold text-red-900 mb-2">⚠️ Ana Nedenler</h3>
                <ul className="text-red-700 space-y-1 text-sm">
                  <li>• <strong>Tenisçi dirseği</strong> (lateral epikondilit)</li>
                  <li>• <strong>Golfçü dirseği</strong> (medial epikondilit)</li>
                  <li>• <strong>Sinir sıkışması</strong> (kübital tünel sendromu)</li>
                  <li>• <strong>Kireçlenme</strong> (osteoartrit)</li>
                  <li>• <strong>Yumuşak doku zedelenmeleri</strong></li>
                  <li>• <strong>Boyun/omuz yansıması</strong></li>
                  <li>• <strong>Romatizmal hastalıklar</strong></li>
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 mb-2">📊 Risk Faktörleri</h3>
                <ul className="text-blue-700 space-y-1 text-sm">
                  <li>• <strong>Tekrarlayıcı el bileği hareketleri</strong></li>
                  <li>• <strong>Bilgisayar başında uzun saatler</strong></li>
                  <li>• <strong>Raket sporları</strong></li>
                  <li>• <strong>Marangozluk, boyacılık</strong></li>
                  <li>• <strong>30-50 yaş arası</strong></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Tenisçi Dirseği */}
          <section id="tenisci-dirsegi" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🎾 Tenisçi Dirseği (Lateral Epikondilit)</h2>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
              <p className="text-green-900 font-semibold mb-2">💡 Önemli Bilgi</p>
              <p className="text-green-800">
                "Tenisçi dirseği" ismi yanıltıcı! <strong>Hastaların %95'i tenis oynamaz</strong>. Bilgisayar başında çalışanlar, marangozlar, boyacılar, sürekli yazı yazanlar... Tekrarlayıcı el bileği hareketleri yapan herkes risk altında.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Nedir?</h3>
            <p className="text-gray-700 mb-4">
              Dirseğin <strong>dış yüzündeki kemik çıkıntıya (lateral epikondil)</strong> yapışan tendonların iltihabi bir hastalığıdır. El bileğini geriye çeken kasların kirişlerinde aşırı kullanım sonucu mikro yırtıklar ve dejenerasyon oluşur.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Belirtiler</h3>
            <div className="space-y-3">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">1. Dirsek Dış Yüzünde Ağrı</h4>
                <p className="text-gray-700 text-sm">
                  Dirseğin dış yüzünde lokalize ağrı. Önkol ve ele yayılabilir.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">2. Kavrama Güçsüzlüğü</h4>
                <p className="text-gray-700 text-sm">
                  Kavanoz açarken, kapı kolu çevirirken, el sıkışırken şiddetli ağrı ve güçsüzlük.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">3. Aktivite ile Artan Ağrı</h4>
                <p className="text-gray-700 text-sm">
                  Bilgisayar faresi kullanımı, yazı yazma, raket sporları ile ağrı şiddetlenir. İstirahatle azalır.
                </p>
              </div>
            </div>
          </section>

          {/* Golfçü Dirseği */}
          <section id="golfcu-dirsegi" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">⛳ Golfçü Dirseği (Medial Epikondilit)</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Nedir?</h3>
            <p className="text-gray-700 mb-4">
              Dirseğin <strong>iç yüzündeki kemik çıkıntıya (medial epikondil)</strong> yapışan tendonların hastalığıdır. El bileğini büken kasların kirişlerinde hasar oluşur. Tenisçi dirseğinden <strong>5 kat daha az</strong> görülür, ama tedavisi benzerdir.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Belirtiler</h3>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• <strong>Dirsek iç yüzünde ağrı</strong> (medial epikondilde lokalize)</li>
                <li>• <strong>Önkolun iç kenarına yayılım</strong></li>
                <li>• <strong>Yumruk yaparken ağrı artışı</strong></li>
                <li>• <strong>El bileği bükme hareketlerinde zorlanma</strong></li>
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-lg p-4 mt-4">
              <p className="text-yellow-900 font-semibold mb-2">📌 Kimler Risk Altında?</p>
              <ul className="text-yellow-800 text-sm space-y-1">
                <li>• Golfçüler (bu yüzden bu isim)</li>
                <li>• Sürekli yazı yazanlar (sekreterler, yazarlar)</li>
                <li>• Marangozlar, boyacılar</li>
                <li>• Ağırlık kaldıran sporcular</li>
              </ul>
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
                    Doktor dirsek üzerindeki hassas noktayı (epikondil) belirler. Provokasyon testleri:
                  </p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• <strong>Direnç karşı el bileği ekstansiyonu</strong> (tenisçi dirseği için)</li>
                    <li>• <strong>Direnç karşı el bileği fleksiyonu</strong> (golfçü dirseği için)</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Direkt Grafi (Röntgen)</h3>
                  <p className="text-gray-600">
                    Kemik yapısını gösterir. Kireçlenme, kemik çıkıntıları, kırık ekarte edilir.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900">MRG (Manyetik Rezonans)</h3>
                  <p className="text-gray-600">
                    <strong>En değerli tetkik!</strong> Tendon hasar derecesini (dejenerasyon, mikro yırtıklar), kıkırdak yapısını, bağları gösterir. Tanı netleşmezse veya cerrahi planlanıyorsa yapılır.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-gray-900">EMG (Elektromiyografi)</h3>
                  <p className="text-gray-600">
                    Sinir sıkışması (kübital tünel sendromu gibi) şüphesinde istenir. Sinir iletim hızını ölçer.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Ameliyatsız Tedavi */}
          <section id="tedavi" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ameliyatsız Tedavi Yöntemleri</h2>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
              <p className="text-green-900 font-semibold mb-2">✅ Müjdeli Haber</p>
              <p className="text-green-800">
                Dirsek ağrılarının <strong>%90'ı ameliyatsız tedavi ile iyileşir</strong>. Tedavi aşamalı ve kişiye özel planlanmalıdır.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">1️⃣ İstirahat ve Aktivite Modifikasyonu</h3>
            <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• <strong>Dirseği zorlayıcı hareketlerden kaçının</strong> (kısa süreli istirahat)</li>
                <li>• <strong>Buz uygulaması:</strong> Günde 3-4 kez, 15 dakika</li>
                <li>• <strong>Antiinflamatuar ilaçlar</strong> (ibuprofen, naproksen)</li>
                <li>• <strong>Kol bandı (elbow brace):</strong> Tendona binen yükü azaltır</li>
              </ul>
              <div className="bg-yellow-50 rounded-lg p-3 mt-4">
                <p className="text-yellow-900 font-semibold text-sm mb-1">⚠️ Dikkat!</p>
                <p className="text-yellow-800 text-xs">
                  Dirseği alçı/atel ile 15 günden fazla hareketsiz bırakmayın → eklem donması riski!
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">2️⃣ Fizik Tedavi</h3>
            <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
              <p className="text-gray-700 mb-3">
                İstirahat ile geçmeyen ağrılarda uygulanır. <strong>10-15 seans</strong> genellikle yeterlidir.
              </p>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• <strong>Ultrason, TENS, lazer</strong> (ağrı azaltma)</li>
                <li>• <strong>Germe ve güçlendirme egzersizleri</strong></li>
                <li>• <strong>Eksentrik egzersizler</strong> (tendon iyileşmesini hızlandırır)</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">3️⃣ Şok Dalga Tedavisi (ESWT)</h3>
            <div className="bg-purple-50 rounded-xl p-6 mb-6">
              <p className="text-purple-800 mb-3">
                Yüksek enerjili ses dalgaları ile tendon dokusunda <strong>mikrovasküler dolaşım artırılır</strong>, iyileşme hızlanır.
              </p>
              <ul className="text-purple-700 text-sm space-y-1">
                <li>• <strong>3-5 seans</strong> (haftada 1)</li>
                <li>• Her seans 15-20 dakika</li>
                <li>• <strong>%70-80 başarı oranı</strong></li>
                <li>• Ağrısız, yan etkisiz</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">4️⃣ Ozon Terapi</h3>
            <div className="bg-cyan-50 rounded-xl p-6 mb-6">
              <p className="text-cyan-800 mb-3">
                Medikal ozonun <strong>kan dolaşımını artırma ve iltihabı azaltma</strong> etkisi ile dirsek ağrılarında kullanılır.
              </p>
              <ul className="text-cyan-700 text-sm space-y-1">
                <li>• Eklem içine veya kas içine enjeksiyon</li>
                <li>• Organik fonksiyonları canlandırır</li>
                <li>• İltihap ve enfeksiyona bağlı problemlerde etkili</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">5️⃣ PRP (Trombositten Zengin Plazma) Tedavisi</h3>
            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <p className="text-blue-800 mb-3">
                Kendi kanınızdan elde edilen büyüme faktörleri, <strong>hasarlı tendonu doğal yoldan iyileştirir</strong>.
              </p>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• <strong>1-2 seans</strong> yeterli</li>
                <li>• Etki 3-6 ayda tam</li>
                <li>• <strong>%80-85 başarı oranı</strong></li>
                <li>• Kronik vakalarda çok etkili</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">6️⃣ Kortizon Enjeksiyonu</h3>
            <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
              <p className="text-gray-700 mb-3">
                Güçlü antiinflamatuar etki. <strong>Ancak dikkatli kullanılmalı!</strong>
              </p>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• <strong>Mutlaka ortopedi uzmanı tarafından</strong> uygulanmalı</li>
                <li>• <strong>Yılda 2'den fazla YAPMAYIN</strong> (tendon zayıflama riski)</li>
                <li>• Kısa süreli rahatlama sağlar ama altta yatan sorunu çözmez</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">7️⃣ Sodyum Hyalürinat (Kireçlenmelerde)</h3>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <p className="text-gray-700 text-sm">
                "Horoz ibiği" enjeksiyonları, özellikle <strong>dirsek kireçlenmelerinde</strong> uygulanır. Hasta seçimi önemli. Yılda 1 defadan fazla önerilmez.
              </p>
            </div>
          </section>

          {/* Cerrahi Tedavi */}
          <section id="cerrahi" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cerrahi Tedavi</h2>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
              <p className="text-red-900 font-semibold mb-2">🔴 Ne Zaman Cerrahi Gerekir?</p>
              <ul className="text-red-800 text-sm space-y-1">
                <li>• 6-12 ay konservatif tedaviye rağmen ağrı devam ediyorsa</li>
                <li>• Günlük aktiviteler ciddi şekilde kısıtlanmışsa</li>
                <li>• MRG'de ciddi tendon hasarı varsa</li>
                <li>• Sinir sıkışması (kübital tünel) varsa</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">1️⃣ Dirsek Artroskopisi (Kapalı Cerrahi)</h3>
            <div className="bg-green-50 rounded-xl p-6 mb-6">
              <p className="text-green-800 mb-4">
                <strong>Modern ve en tercih edilen yöntem.</strong> Küçük kesilerle kamera eşliğinde yapılır.
              </p>
              
              <h4 className="font-semibold text-green-900 mb-2">✅ Avantajlar:</h4>
              <ul className="text-green-700 text-sm space-y-1 mb-4">
                <li>• Küçük kesiler (kozmetik üstünlük)</li>
                <li>• Kısa ameliyat süresi (45-90 dk)</li>
                <li>• Kısa hastane yatışı (1 gün veya aynı gün taburcu)</li>
                <li>• Hızlı iyileşme</li>
                <li>• Normal hayata hızlı dönüş (2-4 hafta)</li>
              </ul>
              
              <h4 className="font-semibold text-green-900 mb-2">🔧 Yapılabilecek İşlemler:</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• Hasar görmüş tendon dokusunun temizlenmesi</li>
                <li>• Eklem içi yapışıklıkların çözülmesi</li>
                <li>• Kireçlenme temizliği</li>
                <li>• Gevşek cisimlerin çıkarılması</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">2️⃣ Açık Dirsek Cerrahileri</h3>
            <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
              <p className="text-gray-700 mb-3">
                Artroskopi ile tedavi edilemeyen durumlarda uygulanır.
              </p>
              
              <h4 className="font-semibold text-gray-900 mb-2">Endikasyonlar:</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• İlerlemiş dirsek kireçlenmelerine bağlı <strong>dirsek protezi</strong></li>
                <li>• Dirençli tenisçi/golfçü dirseği <strong>tendon gevşetme/onarım</strong> ameliyatları</li>
                <li>• Sinir sıkışması (<strong>kübital tünel sendromu</strong>) → mini açık sinir gevşetme</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-blue-900 font-semibold mb-2">📍 Bursa'da Dirsek Artroskopisi</p>
              <p className="text-blue-800 text-sm">
                Muayenehanemizde dirsek artroskopisi rutin olarak uygulanmaktadır. Hastalarımız aynı gün veya 1 gün hastanede kalıp taburcu olmakta, 2-3 hafta içinde normal aktivitelerine dönebilmektedir.
              </p>
            </div>
          </section>

          {/* Önleme */}
          <section id="onleme" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Dirsek Ağrısını Nasıl Önleriz?</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-semibold text-green-900 mb-2">✅ Koruyucu Önlemler</h3>
                <ul className="text-green-700 space-y-1 text-sm">
                  <li>• <strong>Ergonomik çalışma ortamı</strong> (fare, klavye yüksekliği)</li>
                  <li>• <strong>Sık molalar</strong> (her 30-45 dakikada)</li>
                  <li>• <strong>Germe egzersizleri</strong> (günde 3-4 kez)</li>
                  <li>• <strong>Doğru teknik</strong> (raket tutuşu, ağırlık kaldırma)</li>
                  <li>• <strong>Kademeli yoğunluk artışı</strong> (ani aşırı yüklenme yok)</li>
                </ul>
              </div>
              
              <div className="bg-red-50 rounded-lg p-4">
                <h3 className="font-semibold text-red-900 mb-2">❌ Riskli Davranışlar</h3>
                <ul className="text-red-700 space-y-1 text-sm">
                  <li>• <strong>Saatlerce bilgisayar başında mola vermeden</strong></li>
                  <li>• <strong>Ağrıyı görmezden gelip aktiviteye devam</strong></li>
                  <li>• <strong>Yanlış raket tutuşu</strong></li>
                  <li>• <strong>Ağır yükler kaldırırken yanlış teknik</strong></li>
                  <li>• <strong>Isınmadan raket sporlarına başlama</strong></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Ameliyatsız Çözümler Link */}
          <section className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 mb-10">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              🔗 İlgili Tedavi Yöntemleri
            </h3>
            <p className="text-gray-700 mb-4">
              Dirsek ağrısı tedavisinde kullandığımız PRP, ozon ve şok dalga gibi yöntemler hakkında:
            </p>
            <Link
              href="/ameliyatsiz-cozumler"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Ameliyatsız Tedavi Yöntemleri →
            </Link>
          </section>

          {/* Klinik Başarı Hikayesi */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Klinikten Başarı Hikayeleri</h2>
            
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">💻</span>
                  <span className="font-semibold text-gray-800">Yazılımcı, 38 Yaş, Kronik Tenisçi Dirseği</span>
                </div>
                <p className="text-gray-600 mb-2">
                  <strong>Sorun:</strong> 2 yıldır dirsek dış yüzünde ağrı, fare kullanamıyor, fizik tedaviye cevap vermemiş
                </p>
                <p className="text-gray-700">
                  <strong>Tedavi:</strong> 2 seans PRP + ergonomik düzenleme + germe egzersizleri
                </p>
                <p className="text-green-700 font-medium">
                  <strong>Sonuç:</strong> 3. ayda tam iyileşme. 1 yıldır ağrısız çalışıyor.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">🎾</span>
                  <span className="font-semibold text-gray-800">Amatör Tenisçi, 45 Yaş</span>
                </div>
                <p className="text-gray-600 mb-2">
                  <strong>Sorun:</strong> Tenisten sonra şiddetli dirsek ağrısı, 6 ay istirahat ve fizik tedaviye rağmen geçmedi
                </p>
                <p className="text-gray-700">
                  <strong>Tedavi:</strong> 4 seans şok dalga + eksentrik egzersiz programı
                </p>
                <p className="text-green-700 font-medium">
                  <strong>Sonuç:</strong> 2 ay sonra tenise döndü, 1 yıldır sorunsuz oynuyor.
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
                  <span className="font-medium">1.</span> Mishra AK, et al. <em>"Treatment of chronic elbow tendinosis with buffered platelet-rich plasma."</em> Am J Sports Med. 2006;34(11):1774-8.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=elbow+pain+diagnosis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">2.</span> Rompe JD, et al. <em>"Repetitive low-energy shock wave treatment for chronic lateral epicondylitis in tennis players."</em> Am J Sports Med. 2004;32(3):734-43.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=elbow+pain+diagnosis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">3.</span> Coombes BK, et al. <em>"Efficacy and safety of corticosteroid injections and other injections for management of tendinopathy: a systematic review."</em> Lancet. 2010;376(9754):1751-67.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=elbow+pain+diagnosis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">4.</span> Bisset L, et al. <em>"Mobilisation with movement and exercise, corticosteroid injection, or wait and see for tennis elbow: randomised trial."</em> BMJ. 2006;333(7575):939.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=elbow+pain+diagnosis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">5.</span> Pitzer ME, et al. <em>"A randomized trial of plasma rich in growth factors (PRGF-Endoret) versus hyaluronic acid in the treatment of lateral epicondylitis."</em> J Shoulder Elbow Surg. 2011;20(5):716-22.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=elbow+pain+diagnosis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
              </ol>
              
              <details className="mt-4">
                <summary className="cursor-pointer text-blue-600 font-medium hover:text-blue-800 flex items-center gap-2">
                  <span>📖 Daha Fazla Kaynak Göster (5 ek referans)</span>
                </summary>
                <ol start={6} className="space-y-3 text-sm text-gray-700 mt-4 pt-4 border-t">
                  <li>
                    <span className="font-medium">6.</span> Ahmad Z, et al. <em>"Lateral epicondylitis: a review of pathology and management."</em> Bone Joint J. 2013;95-B(9):1158-64.{' '}
                    <a href="https://pubmed.ncbi.nlm.nih.gov/?term=elbow+pain+diagnosis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                  </li>
                  <li>
                    <span className="font-medium">7.</span> Krogh TP, et al. <em>"Treatment of lateral epicondylitis with platelet-rich plasma, glucocorticoid, or saline: a randomized, double-blind, placebo-controlled trial."</em> Am J Sports Med. 2013;41(3):625-35.{' '}
                    <a href="https://pubmed.ncbi.nlm.nih.gov/?term=elbow+pain+diagnosis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                  </li>
                  <li>
                    <span className="font-medium">8.</span> Spacca G, et al. <em>"Radial shock wave therapy for lateral epicondylitis: a prospective randomised controlled single-blind study."</em> Eura Medicophys. 2005;41(1):17-25.{' '}
                    <a href="https://pubmed.ncbi.nlm.nih.gov/?term=elbow+pain+diagnosis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                  </li>
                  <li>
                    <span className="font-medium">9.</span> Tyler TF, et al. <em>"Addition of isolated wrist extensor eccentric exercise to standard treatment for chronic lateral epicondylosis: a prospective randomized trial."</em> J Shoulder Elbow Surg. 2010;19(6):917-22.{' '}
                    <a href="https://pubmed.ncbi.nlm.nih.gov/?term=elbow+pain+diagnosis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                  </li>
                  <li>
                    <span className="font-medium">10.</span> Nirschl RP, Ashman ES. <em>"Elbow tendinopathy: tennis elbow."</em> Clin Sports Med. 2003;22(4):813-36.{' '}
                    <a href="https://pubmed.ncbi.nlm.nih.gov/?term=elbow+pain+diagnosis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                  </li>
                </ol>
              </details>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-2">Dirsek Ağrınızdan Kurtulun!</h2>
            <p className="text-green-100 mb-2">📍 Nilüfer, Bursa</p>
            <p className="text-green-100 mb-6">
              Kavanoz açarken ağrı mı? Bilgisayar kullanamıyor musunuz? %90 ameliyatsız iyileşme! Randevu alın.
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
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
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
