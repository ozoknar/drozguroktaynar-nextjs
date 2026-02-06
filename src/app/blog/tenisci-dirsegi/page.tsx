import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Tenisçi Dirseği (Lateral Epikondilit) Tedavisi | Op. Dr. Özgür Oktay Nar - Bursa',
  description: 'Tenisçi dirseği (lateral epikondilit) belirtileri, nedenleri ve ameliyatsız tedavi yöntemleri. Bursa\'da PRP, şok dalga, fizik tedavi ile tam iyileşme.',
  keywords: 'tenisçi dirseği, lateral epikondilit, dirsek dış ağrısı, tenisçi dirseği tedavisi, Bursa tenisçi dirseği, PRP dirsek tedavisi',
  openGraph: {
    title: 'Tenisçi Dirseği Tedavisi | Bursa Ortopedi',
    description: 'Kavanoz açarken dirsek ağrısı mı? Tenisçi dirseği (lateral epikondilit) ameliyatsız tedavi edilir. %90+ başarı oranı.',
    type: 'article',
    images: [
      {
        url: 'https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2025/04/tenisci-dirsegi-tedavi.webp',
        width: 1200,
        height: 800,
        alt: 'Tenisçi Dirseği Tedavisi',
      },
    ],
  },
}

// Medical Web Page Schema
const medicalSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Tenisçi Dirseği (Lateral Epikondilit) Tedavisi",
  "description": "Tenisçi dirseği (lateral epikondilit) belirtileri, nedenleri ve ameliyatsız tedavi yöntemleri hakkında kapsamlı bilgi.",
  "medicalAudience": ["Patient", "Athlete"],
  "about": {
    "@type": "MedicalCondition",
    "name": "Tenisçi Dirseği (Lateral Epikondilit)",
    "alternateName": "Lateral Epicondylitis, Tennis Elbow",
    "associatedAnatomy": {
      "@type": "AnatomicalStructure",
      "name": "Lateral Epikondil"
    },
    "signOrSymptom": [
      {
        "@type": "MedicalSymptom",
        "name": "Dirsek dış yüzünde ağrı"
      },
      {
        "@type": "MedicalSymptom",
        "name": "Kavrama güçsüzlüğü"
      },
      {
        "@type": "MedicalSymptom",
        "name": "El bileğini geriye çekmede ağrı"
      }
    ],
    "possibleTreatment": [
      {
        "@type": "MedicalTherapy",
        "name": "PRP (Trombositten Zengin Plazma) Tedavisi"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Şok Dalga Tedavisi (ESWT)"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Fizik Tedavi ve Eksentrik Egzersizler"
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
      "name": "Tenisçi dirseği nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tenisçi dirseği (lateral epikondilit), dirseğin dış yüzündeki kemik çıkıntıya (lateral epikondil) yapışan tendonların iltihabi bir hastalığıdır. El bileğini geriye çeken kasların aşırı kullanımı sonucu tendonlarda mikro yırtıklar ve dejenerasyon oluşur. İsim yanıltıcıdır - hastaların %90'ı tenis oynamaz!"
      }
    },
    {
      "@type": "Question",
      "name": "Tenisçi dirseği ameliyatsız tedavi edilir mi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Evet! Hastaların %90'ından fazlası ameliyatsız iyileşir. İstirahat, fizik tedavi, şok dalga tedavisi, PRP enjeksiyonu çok etkilidir. Eksentrik egzersizler %80+ başarı oranına sahiptir. Sadece dirençli, kronik vakalarda cerrahi gerekir."
      }
    },
    {
      "@type": "Question",
      "name": "Tenisçi dirseği ne kadar sürede geçer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Konservatif tedavi ile 6-12 hafta. PRP tedavisi ile 3-6 ay içinde tam iyileşme. Şok dalga tedavisi genellikle 3-5 seans. Eksentrik egzersiz programı 8-12 hafta sürer. Her hasta farklıdır, sabır ve disiplin gerekir."
      }
    }
  ]
}

export default function TenisciDirsegiPage() {
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
          <span className="text-gray-700">Tenisçi Dirseği</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Tenisçi Dirseği (Lateral Epikondilit): Kavanoz Açamıyor musunuz?
        </h1>

        {/* Hero Image */}
        <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden bg-gradient-to-br from-teal-100 to-lime-100">
          <Image
            src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2025/04/tenisci-dirsegi-tedavi.webp"
            alt="Tenisçi dirseği tedavisi"
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
              <strong>Bursa'da</strong> muayenehaneme gelen hastaların en sık yakınması: <em>"Doktor bey, kavanoz açarken dirsek dış kısmım o kadar ağrıyor ki..."</em>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tenisçi dirseği (lateral epikondilit), <strong>vücuttaki en sık görülen tendon hastalığıdır</strong>. Her 100 kişiden 1-3'ü hayatının bir döneminde yaşar. Ve hastaların <strong>%90'ı tenis oynamaz!</strong>
            </p>
            <p className="text-gray-700 leading-relaxed">
              İyi haber: <strong>%90'ından fazlası ameliyatsız iyileşir</strong>. Modern tedavi yöntemleri (PRP, şok dalga, eksentrik egzersizler) ile kronik tenisçi dirseğini bile çözebiliyoruz.
            </p>
          </section>

          {/* ADIM 2: FAQ Modülü */}
          <section className="bg-teal-50 rounded-xl p-6 mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">❓ En Çok Sorulan 3 Soru</h2>
            
            <div className="space-y-4">
              <details className="bg-white rounded-lg p-4 cursor-pointer" open>
                <summary className="font-semibold text-gray-900">Tenisçi dirseği nedir?</summary>
                <p className="mt-3 text-gray-600">
                  Dirseğin <strong>dış yüzündeki kemik çıkıntıya</strong> (lateral epikondil) yapışan tendonların iltihabi hastalığıdır. El bileğini geriye çeken kasların aşırı kullanımı sonucu <strong>tendonlarda mikro yırtıklar ve dejenerasyon</strong> oluşur. <strong>%90 hasta tenis oynamaz</strong> - bilgisayar kullananlar, marangozlar, aşçılar da risk altında!
                </p>
              </details>
              
              <details className="bg-white rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-gray-900">Ameliyatsız geçer mi?</summary>
                <p className="mt-3 text-gray-600">
                  Evet! <strong>%90+ hasta ameliyatsız iyileşir</strong>. İstirahat, fizik tedavi, şok dalga, PRP, <strong>eksentrik egzersizler</strong> (%80+ başarı) çok etkilidir. Sabır ve disiplin gerekir.
                </p>
              </details>
              
              <details className="bg-white rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-gray-900">Ne kadar sürede geçer?</summary>
                <p className="mt-3 text-gray-600">
                  Konservatif tedavi <strong>6-12 hafta</strong>. PRP tedavisi <strong>3-6 ay</strong>. Şok dalga <strong>3-5 seans</strong>. Eksentrik egzersiz programı <strong>8-12 hafta</strong>. Sabır şart!
                </p>
              </details>
            </div>
          </section>

          {/* İçindekiler */}
          <div className="bg-gray-50 rounded-xl p-6 mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">📑 İçindekiler</h2>
            <ul className="space-y-2">
              <li><a href="#nedir" className="text-blue-600 hover:underline">Tenisçi Dirseği Nedir?</a></li>
              <li><a href="#nedenler" className="text-blue-600 hover:underline">Nedenleri</a></li>
              <li><a href="#belirtiler" className="text-blue-600 hover:underline">Belirtiler</a></li>
              <li><a href="#tani" className="text-blue-600 hover:underline">Tanı Yöntemleri</a></li>
              <li><a href="#tedavi" className="text-blue-600 hover:underline">Ameliyatsız Tedavi</a></li>
              <li><a href="#egzersizler" className="text-blue-600 hover:underline">Eksentrik Egzersizler (ALTIN STANDART)</a></li>
              <li><a href="#onleme" className="text-blue-600 hover:underline">Önleme</a></li>
            </ul>
          </div>

          {/* ADIM 4: Dr. Nar Analojisi */}
          <section id="nedir" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tenisçi Dirseği Nedir?</h2>
            
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6">
              <p className="text-gray-800 italic mb-4">
                "Hastalara şöyle anlatıyorum..."
              </p>
              <p className="text-gray-800 leading-relaxed">
                Dirseğinizin dış kısmında, kemik çıkıntı üzerinde bir <strong>"tendon yapışma noktası"</strong> var: <em>lateral epikondil</em>. Buraya el bileğini geriye çeken kasların kirişleri (tendonları) tutunur. Şimdi düşünün ki bu kirişleri <strong>yıllarca aynı hareketi yaparak zorladınız</strong> (bilgisayar faresi, raket sallamak, vida sıkmak)...
              </p>
              <p className="text-gray-800 leading-relaxed mt-3">
                Sonunda tendonlar <strong>aşınıyor, mikro yırtıklar oluşuyor</strong>. Yapışma noktasında kronik iltihaplanma başlıyor. İşte bu → <strong>tenisçi dirseği</strong>.
              </p>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>ÖNEMLİ:</strong> Adı çok yanıltıcı! Hastaların <strong>%90'ı tenis oynamaz</strong>. Bilgisayar başında çalışanlar, marangozlar, boyacılar, aşçılar... <strong>Tekrarlayıcı el bileği hareketi yapan herkes</strong> risk altında.
            </p>

            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-blue-900 font-semibold mb-2">📊 Epidemiyoloji</p>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• Toplumda görülme sıklığı: <strong>%1-3</strong></li>
                <li>• En sık <strong>35-50 yaş arası</strong></li>
                <li>• <strong>Dominant kol</strong>da daha sık</li>
                <li>• Hastaların <strong>%90'ı tenis oynamaz!</strong></li>
              </ul>
            </div>
          </section>

          {/* Nedenler */}
          <section id="nedenler" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tenisçi Dirseği Nedenleri</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 rounded-lg p-4">
                <h3 className="font-semibold text-red-900 mb-2">⚠️ Risk Faktörleri</h3>
                <ul className="text-red-700 space-y-1 text-sm">
                  <li>• <strong>Tekrarlayıcı el bileği ekstansiyonu</strong> (geriye çekme)</li>
                  <li>• <strong>Bilgisayar faresi kullanımı</strong> (saatlerce)</li>
                  <li>• <strong>Raket sporları</strong> (yanlış teknik)</li>
                  <li>• <strong>Marangozluk, boyacılık</strong></li>
                  <li>• <strong>Aşçılık</strong> (bıçak, tava kullanımı)</li>
                  <li>• <strong>Müzisyenler</strong> (gitar, keman)</li>
                  <li>• <strong>35-50 yaş arası</strong></li>
                </ul>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-4">
                <h3 className="font-semibold text-orange-900 mb-2">🎾 Kimler Risk Altında?</h3>
                <ul className="text-orange-700 space-y-1 text-sm">
                  <li>• <strong>Bilgisayar başında çalışanlar</strong> (%40)</li>
                  <li>• <strong>Tenis oyuncuları</strong> (%10 - bu yüzden bu isim!)</li>
                  <li>• <strong>Marangozlar, ustalar</strong></li>
                  <li>• <strong>Aşçılar, kasaplar</strong></li>
                  <li>• <strong>Boyacılar, elektrikçiler</strong></li>
                  <li>• <strong>Müzisyenler</strong></li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-4 mt-4">
              <p className="text-yellow-900 font-semibold mb-2">🔍 Patomekanizma (Nasıl Oluşur?)</p>
              <p className="text-yellow-800 text-sm">
                El bileğini geriye çeken kaslar (ekstansörler) sürekli çalışır → Lateral epikondildeki yapışma noktasında <strong>aşırı yük</strong> → Mikro travmalar → Tendon <strong>dejenerasyonu</strong> (aşınma) → Kronik <strong>iltihaplanma</strong> → <strong>AĞRI!</strong>
              </p>
            </div>
          </section>

          {/* Belirtiler */}
          <section id="belirtiler" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tenisçi Dirseği Belirtileri</h2>
            
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-5">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">📍</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">1. Dirsek Dış Yüzünde Ağrı (KLASİK!)</h3>
                    <p className="text-gray-700">
                      Lateral epikondilde <strong>lokalize ağrı</strong>. Basınca hassas. Önkola ve el sırtına doğru yayılabilir.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-5">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">🏺</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">2. Kavanoz Açarken Ağrı (TİPİK!)</h3>
                    <p className="text-gray-700">
                      Kavanoz kapağını çevirirken, kapı kolu döndürürken <strong>şiddetli ağrı</strong>. Çok karakteristik bir belirtidir!
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-5">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">💪</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">3. Kavrama Güçsüzlüğü</h3>
                    <p className="text-gray-700">
                      El sıkışırken, bardak tutarken <strong>güçsüzlük ve ağrı</strong>. Hastalar "ellerim tutmuyor" der.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-5">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">💻</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">4. Fare/Klavye Kullanımı ile Artan Ağrı</h3>
                    <p className="text-gray-700">
                      Bilgisayar başında çalışırken ağrı şiddetlenir. Özellikle <strong>fare kullanımı</strong> çok ağrılı.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-5">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">🌅</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">5. Sabah Sertliği</h3>
                    <p className="text-gray-700">
                      Sabahları uyanırken dirsekte <strong>sertlik ve ağrı</strong>. Birkaç saat sonra hafifleyebilir.
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
                  <h3 className="font-semibold text-gray-900">Fizik Muayene (EN ÖNEMLİ!)</h3>
                  <p className="text-gray-600 mb-2">
                    Doktor lateral epikondile basınç uygular (hassas nokta). Provokasyon testleri:
                  </p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• <strong>Cozen Testi:</strong> Direnç karşı el bileği ekstansiyonu → ağrı tetiklenir</li>
                    <li>• <strong>Mill Testi:</strong> Direnç karşı orta parmak ekstansiyonu → ağrı</li>
                    <li>• <strong>Kavrama gücü ölçümü:</strong> Azalmış (sağlam tarafa göre %20-50)</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Röntgen (Genellikle Gereksiz)</h3>
                  <p className="text-gray-600">
                    Kemik yapısını gösterir. <strong>Çoğu zaman normal</strong>. Kireçlenme veya kemik çıkıntısı ekarte edilir.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Ultrason (US)</h3>
                  <p className="text-gray-600">
                    Hızlı ve ucuz. Tendon kalınlaşması, mikro yırtıklar, dejenerasyon derecesi görülür. Tanı netleşmezse yapılır.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-gray-900">MRG (Gerekirse)</h3>
                  <p className="text-gray-600">
                    Tendon hasar derecesini detaylı gösterir. Kısmi yırtık, tam yırtık, dejenerasyon. Cerrahi planlanıyorsa veya tanı netleşmezse yapılır.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Tedavi */}
          <section id="tedavi" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ameliyatsız Tedavi Yöntemleri</h2>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
              <p className="text-green-900 font-semibold mb-2">✅ Müjdeli Haber</p>
              <p className="text-green-800">
                Tenisçi dirseğinin <strong>%90'ından fazlası ameliyatsız iyileşir</strong>. Tedavi aşamalı ve sabırlı olmalı. <strong>Eksentrik egzersizler altın standarttır!</strong>
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">1️⃣ İstirahat ve Aktivite Modifikasyonu</h3>
            <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• <strong>Dirseği zorlayıcı aktivitelerden kaçının</strong> (2-4 hafta)</li>
                <li>• <strong>Buz uygulaması:</strong> Günde 3-4 kez, 20-30 dakika</li>
                <li>• <strong>Antiinflamatuar ilaçlar:</strong> İbuprofen, naproksen (kısa süreli)</li>
                <li>• <strong>Kol bandı (counterforce brace):</strong> Lateral epikondile binen yükü azaltır</li>
                <li>• <strong>Ergonomik düzenleme:</strong> Fare yüksekliği, klavye pozisyonu</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">2️⃣ Fizik Tedavi</h3>
            <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
              <p className="text-gray-700 mb-3">
                <strong>10-15 seans</strong> genellikle yeterlidir.
              </p>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• <strong>Ultrason, TENS, lazer:</strong> Ağrı azaltma, iyileşmeyi hızlandırma</li>
                <li>• <strong>Germe egzersizleri:</strong> Ekstansör kasların esnekliğini artırır</li>
                <li>• <strong>Eksentrik güçlendirme:</strong> <strong>EN ETKİLİ YÖNTEM!</strong> (detaylar aşağıda)</li>
                <li>• <strong>Masaj ve yumuşak doku mobilizasyonu</strong></li>
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
                <li>• Kronik vakalarda çok etkili</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">4️⃣ PRP (Trombositten Zengin Plazma) Tedavisi</h3>
            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <p className="text-blue-800 mb-3">
                Kendi kanınızdan elde edilen büyüme faktörleri, <strong>hasarlı tendonu doğal yoldan iyileştirir</strong>.
              </p>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• <strong>1-2 seans</strong> yeterli</li>
                <li>• Etki 3-6 ayda tam</li>
                <li>• <strong>%80-85 başarı oranı</strong></li>
                <li>• Kronik vakalarda çok etkili</li>
                <li>• Ultrason eşliğinde hassas enjeksiyon</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">5️⃣ Kortizon Enjeksiyonu (DİKKATLİ!)</h3>
            <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
              <p className="text-gray-700 mb-3">
                Güçlü antiinflamatuar etki. <strong>Ancak dikkatli kullanılmalı!</strong>
              </p>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• <strong>Yılda 2'den fazla YAPMAYIN</strong> (tendon zayıflama riski)</li>
                <li>• Kısa süreli rahatlama sağlar (3-8 hafta)</li>
                <li>• <strong>Uzun vadede PRP'den daha az etkili</strong></li>
                <li>• Mutlaka ortopedi uzmanı tarafından yapılmalı</li>
                <li>• <strong>3 enjeksiyondan sonra %50 nüks riski!</strong></li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">6️⃣ Cerrahi Tedavi (Nadir)</h3>
            <div className="bg-red-50 rounded-lg p-5">
              <p className="text-red-900 font-semibold mb-2">🔴 Ne Zaman Cerrahi?</p>
              <ul className="text-red-800 text-sm space-y-1 mb-3">
                <li>• 6-12 ay konservatif tedaviye rağmen ağrı devam ediyorsa</li>
                <li>• Günlük aktiviteler ciddi şekilde kısıtlanmışsa</li>
                <li>• MRG'de ciddi tendon hasarı varsa</li>
              </ul>
              <p className="text-red-700 text-sm">
                <strong>Açık veya artroskopik:</strong> Hasar görmüş tendon dokusu temizlenir (debridman), kemik yüzeyi tazelenir. Başarı oranı <strong>%85-90</strong>.
              </p>
            </div>
          </section>

          {/* Eksentrik Egzersizler (ALTIN STANDART) */}
          <section id="egzersizler" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">⭐ Eksentrik Egzersizler (ALTIN STANDART!)</h2>
            
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-6 mb-6">
              <p className="text-yellow-900 font-semibold mb-2">🔥 EN ETKİLİ TEDAVİ YÖNTEMİ</p>
              <p className="text-yellow-800">
                Tenisçi dirseği tedavisinde <strong>altın standart eksentrik germe egzersizleridir</strong>! Günde 2-3 kez, 8-12 hafta düzenli yapıldığında <strong>%80-90 başarı oranı</strong>. Ücretsiz, evde yapılır, yan etkisi yok!
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-3">🏋️ Tyler Twist Egzersizi (EN POPÜLERnin)</h3>
                <ol className="text-gray-700 text-sm space-y-2 mb-3">
                  <li><strong>1.</strong> Hafif bir ağırlık (0.5-1 kg) veya FlexBar tutun</li>
                  <li><strong>2.</strong> Sağlam el ile yukarıdan, hasta el ile aşağıdan kavrayın</li>
                  <li><strong>3.</strong> Sağlam el ile FlexBar'ı bükün (bilek ekstansiyonu)</li>
                  <li><strong>4.</strong> Hasta el ile <strong>YAVAŞÇA</strong> düzleştirin (5 saniyede)</li>
                  <li><strong>5.</strong> 15 tekrar x 3 set, günde 2-3 kez</li>
                </ol>
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-blue-900 text-xs">
                    <strong>💡 İpucu:</strong> Aşağı indirme (eksentrik) fazı en önemli! Yavaş ve kontrollü yapın. İlk 1-2 hafta hafif ağrı normaldir.
                  </p>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-3">💪 Direnç Bantlı Eksentrik Egzersiz</h3>
                <ol className="text-gray-700 text-sm space-y-2">
                  <li><strong>1.</strong> Direnç bandı ayak altına</li>
                  <li><strong>2.</strong> Sağlam el ile bandı yukarı çekin (bilek ekstansiyonu)</li>
                  <li><strong>3.</strong> Hasta el ile <strong>YAVAŞÇA</strong> geri indirin (5 saniyede)</li>
                  <li><strong>4.</strong> 10-15 tekrar x 3 set</li>
                </ol>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-3">🤲 Germe Egzersizi</h3>
                <ol className="text-gray-700 text-sm space-y-2">
                  <li><strong>1.</strong> Kolu düz tutun, dirsek açık</li>
                  <li><strong>2.</strong> El bileğini aşağı bükün (fleksiyon), parmaklar aşağı</li>
                  <li><strong>3.</strong> Diğer elinizle parmakları hafifçe aşağı bastırın</li>
                  <li><strong>4.</strong> Dirseğin dış kısmında germe hissedin</li>
                  <li><strong>5.</strong> 15-30 saniye tutun, 3 tekrar, günde 4-5 kez</li>
                </ol>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-4 mt-6">
              <p className="text-yellow-900 font-semibold text-sm mb-2">⚠️ Egzersiz Kuralları</p>
              <ul className="text-yellow-800 text-xs space-y-1">
                <li>• <strong>Sabır:</strong> 6-8 hafta düzenli yapın, sonuç görmek zaman alır</li>
                <li>• <strong>Hafif ağrı normaldir:</strong> İlk 2 hafta egzersiz sonrası hafif ağrı olabilir</li>
                <li>• <strong>Şiddetli ağrıda dur:</strong> Çok ağrıyorsa bir gün ara verin</li>
                <li>• <strong>Yavaş yavaş artırın:</strong> Ağırlık veya tekrar sayısını kademeli artırın</li>
              </ul>
            </div>
          </section>

          {/* Önleme */}
          <section id="onleme" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tenisçi Dirseğini Nasıl Önleriz?</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-semibold text-green-900 mb-2">✅ Koruyucu Önlemler</h3>
                <ul className="text-green-700 space-y-1 text-sm">
                  <li>• <strong>Ergonomik çalışma ortamı</strong> (fare, klavye yüksekliği)</li>
                  <li>• <strong>Sık molalar</strong> (her 30-45 dakikada)</li>
                  <li>• <strong>Düzenli germe egzersizleri</strong> (günde 3-4 kez)</li>
                  <li>• <strong>Doğru raket tekniği</strong> (profesyonel eğitim)</li>
                  <li>• <strong>Uygun raket seçimi</strong> (ağırlık, sap kalınlığı)</li>
                  <li>• <strong>Kademeli yoğunluk artışı</strong></li>
                </ul>
              </div>
              
              <div className="bg-red-50 rounded-lg p-4">
                <h3 className="font-semibold text-red-900 mb-2">❌ Riskli Davranışlar</h3>
                <ul className="text-red-700 space-y-1 text-sm">
                  <li>• <strong>Saatlerce bilgisayar başında mola vermeden</strong></li>
                  <li>• <strong>Ağrıyı görmezden gelip aktiviteye devam</strong></li>
                  <li>• <strong>Yanlış raket tutuşu</strong></li>
                  <li>• <strong>Çok sıkı raket/fare kavrama</strong></li>
                  <li>• <strong>Isınmadan tenis oynamaya başlama</strong></li>
                  <li>• <strong>Aşırı ağırlık kaldırma</strong> (yanlış teknik)</li>
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
              Tenisçi dirseği tedavisinde kullandığımız PRP, şok dalga ve diğer yöntemler hakkında:
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
                  <strong>Sorun:</strong> 2 yıldır dirsek dış yüzünde ağrı, fare kullanamıyor, 3 kez kortizon enjeksiyonu yapılmış ama tekrarlıyor
                </p>
                <p className="text-gray-700">
                  <strong>Tedavi:</strong> 2 seans PRP + ergonomik düzenleme + 12 hafta Tyler Twist egzersizi
                </p>
                <p className="text-green-700 font-medium">
                  <strong>Sonuç:</strong> 4. ayda tam iyileşme. 2 yıldır ağrısız çalışıyor.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">🎾</span>
                  <span className="font-semibold text-gray-800">Amatör Tenisçi, 45 Yaş</span>
                </div>
                <p className="text-gray-600 mb-2">
                  <strong>Sorun:</strong> Tenis sonrası şiddetli dirsek ağrısı, 6 ay istirahat ve fizik tedaviye rağmen geçmedi
                </p>
                <p className="text-gray-700">
                  <strong>Tedavi:</strong> 4 seans şok dalga + 10 hafta eksentrik egzersiz + raket tekniği düzeltme
                </p>
                <p className="text-green-700 font-medium">
                  <strong>Sonuç:</strong> 3 ay sonra tenise döndü, 3 yıldır sorunsuz oynuyor.
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
                  <span className="font-medium">1.</span> Tyler TF, et al. <em>"Addition of isolated wrist extensor eccentric exercise to standard treatment for chronic lateral epicondylosis: a prospective randomized trial."</em> J Shoulder Elbow Surg. 2010;19(6):917-22.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/20163967/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 20163967</a>
                </li>
                <li>
                  <span className="font-medium">2.</span> Mishra AK, et al. <em>"Treatment of chronic elbow tendinosis with buffered platelet-rich plasma."</em> Am J Sports Med. 2006;34(11):1774-8.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/16735582/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 16735582</a>
                </li>
                <li>
                  <span className="font-medium">3.</span> Rompe JD, et al. <em>"Repetitive low-energy shock wave treatment for chronic lateral epicondylitis in tennis players."</em> Am J Sports Med. 2004;32(3):734-43.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/15090392/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 15090392</a>
                </li>
                <li>
                  <span className="font-medium">4.</span> Coombes BK, et al. <em>"Efficacy and safety of corticosteroid injections and other injections for management of tendinopathy: a systematic review."</em> Lancet. 2010;376(9754):1751-67.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/20970844/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 20970844</a>
                </li>
                <li>
                  <span className="font-medium">5.</span> Bisset L, et al. <em>"Mobilisation with movement and exercise, corticosteroid injection, or wait and see for tennis elbow: randomised trial."</em> BMJ. 2006;333(7575):939.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/17012266/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 17012266</a>
                </li>
              </ol>
              
              <details className="mt-4">
                <summary className="cursor-pointer text-blue-600 font-medium hover:text-blue-800 flex items-center gap-2">
                  <span>📖 Daha Fazla Kaynak Göster (5 ek referans)</span>
                </summary>
                <ol start={6} className="space-y-3 text-sm text-gray-700 mt-4 pt-4 border-t">
                  <li>
                    <span className="font-medium">6.</span> Ahmad Z, et al. <em>"Lateral epicondylitis: a review of pathology and management."</em> Bone Joint J. 2013;95-B(9):1158-64.{' '}
                    <a href="https://pubmed.ncbi.nlm.nih.gov/23997125/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 23997125</a>
                  </li>
                  <li>
                    <span className="font-medium">7.</span> Krogh TP, et al. <em>"Treatment of lateral epicondylitis with platelet-rich plasma, glucocorticoid, or saline: a randomized, double-blind, placebo-controlled trial."</em> Am J Sports Med. 2013;41(3):625-35.{' '}
                    <a href="https://pubmed.ncbi.nlm.nih.gov/23328738/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 23328738</a>
                  </li>
                  <li>
                    <span className="font-medium">8.</span> Nirschl RP, Ashman ES. <em>"Elbow tendinopathy: tennis elbow."</em> Clin Sports Med. 2003;22(4):813-36.{' '}
                    <a href="https://pubmed.ncbi.nlm.nih.gov/14560548/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 14560548</a>
                  </li>
                  <li>
                    <span className="font-medium">9.</span> Peterson M, et al. <em>"Eccentric exercise in the treatment of tendinopathy."</em> Disabil Rehabil. 2014;36(20):1718-23.{' '}
                    <a href="https://pubmed.ncbi.nlm.nih.gov/24279445/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 24279445</a>
                  </li>
                  <li>
                    <span className="font-medium">10.</span> Spacca G, et al. <em>"Radial shock wave therapy for lateral epicondylitis: a prospective randomised controlled single-blind study."</em> Eura Medicophys. 2005;41(1):17-25.{' '}
                    <a href="https://pubmed.ncbi.nlm.nih.gov/16175767/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 16175767</a>
                  </li>
                </ol>
              </details>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-teal-600 to-lime-600 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-2">Tenisçi Dirseğinizden Kurtulun!</h2>
            <p className="text-teal-100 mb-2">📍 Nilüfer, Bursa</p>
            <p className="text-teal-100 mb-6">
              Kavanoz açarken ağrı mı? Bilgisayar kullanamıyor musunuz? %90+ ameliyatsız iyileşme!
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
                className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition"
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
