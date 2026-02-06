import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Golfçü Dirseği (Medial Epikondilit) Tedavisi | Op. Dr. Özgür Oktay Nar - Bursa',
  description: 'Golfçü dirseği (medial epikondilit) nedir, belirtileri, tanı ve tedavi yöntemleri. Bursa\'da ameliyatsız golfçü dirseği tedavisi: PRP, şok dalga, fizik tedavi.',
  keywords: 'golfçü dirseği, medial epikondilit, dirsek iç yüz ağrısı, golfçü dirseği tedavisi, Bursa golfçü dirseği, PRP tedavisi dirsek',
  openGraph: {
    title: 'Golfçü Dirseği Tedavisi | Bursa Ortopedi',
    description: 'Dirsek iç yüzünde ağrı mı? Golfçü dirseği (medial epikondilit) ameliyatsız tedavi edilir. PRP, şok dalga ve fizyoterapi ile tam iyileşme.',
    type: 'article',
    images: [
      {
        url: 'https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2025/04/golfcu-dirsegi-tedavi.webp',
        width: 1200,
        height: 800,
        alt: 'Golfçü Dirseği Tedavisi',
      },
    ],
  },
}

// Medical Web Page Schema
const medicalSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Golfçü Dirseği (Medial Epikondilit) Tedavisi",
  "description": "Golfçü dirseği (medial epikondilit) belirtileri, nedenleri ve ameliyatsız tedavi yöntemleri.",
  "medicalAudience": ["Patient", "Athlete"],
  "about": {
    "@type": "MedicalCondition",
    "name": "Golfçü Dirseği (Medial Epikondilit)",
    "alternateName": "Medial Epicondylitis, Golfer's Elbow",
    "associatedAnatomy": {
      "@type": "AnatomicalStructure",
      "name": "Medial Epikondil"
    },
    "signOrSymptom": [
      {
        "@type": "MedicalSymptom",
        "name": "Dirsek iç yüzünde ağrı"
      },
      {
        "@type": "MedicalSymptom",
        "name": "Yumruk yaparken ağrı artışı"
      },
      {
        "@type": "MedicalSymptom",
        "name": "Önkola yayılan ağrı"
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
        "name": "Fizik Tedavi ve Egzersiz"
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
      "name": "Golfçü dirseği nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Golfçü dirseği (medial epikondilit), dirseğin iç yüzündeki kemik çıkıntıya (medial epikondil) yapışan tendonların iltihabi bir hastalığıdır. El bileğini büken kasların aşırı kullanımı sonucu tendonlarda mikro yırtıklar ve dejenerasyon oluşur."
      }
    },
    {
      "@type": "Question",
      "name": "Golfçü dirseği ile tenisçi dirseği arasındaki fark nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Golfçü dirseği dirsek İÇ yüzünde (medial), tenisçi dirseği DIŞ yüzünde (lateral) ağrı yapar. Golfçü dirseği 5 kat daha az görülür, ancak tedavi yöntemleri benzerdir. Her ikisi de tekrarlayıcı hareketlere bağlı tendon hastalığıdır."
      }
    },
    {
      "@type": "Question",
      "name": "Golfçü dirseği ameliyatsız tedavi edilir mi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Evet! Hastaların %90'ından fazlası ameliyatsız iyileşir. İstirahat, fizik tedavi, şok dalga, PRP enjeksiyonu çok etkilidir. Sadece dirençli, kronik vakalarda cerrahi gerekir."
      }
    }
  ]
}

export default function GolfcuDirsegiPage() {
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
          <span className="text-gray-700">Golfçü Dirseği</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Golfçü Dirseği (Medial Epikondilit): Dirsek İç Ağrısından Kurtulun
        </h1>

        {/* Hero Image */}
        <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden bg-gradient-to-br from-emerald-100 to-cyan-100">
          <Image
            src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2025/04/golfcu-dirsegi-tedavi.webp"
            alt="Golfçü dirseği tedavisi"
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
              <strong>Bursa'da</strong> muayenehaneme gelen hastaların yakınması: <em>"Doktor bey, yumruk yaptığımda dirsek iç kısmım çok ağrıyor."</em>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Golfçü dirseği (medial epikondilit), <strong>tenisçi dirseğinin iç yüz versiyonu</strong>. Dirsek dış yüzü yerine <strong>iç yüzde ağrı</strong> yapar. Daha az görülür ama tedavisi benzerdir.
            </p>
            <p className="text-gray-700 leading-relaxed">
              İyi haber: Hastaların <strong>%90'ından fazlası ameliyatsız iyileşir</strong>. Modern tedavi yöntemleri (PRP, şok dalga) ile kronik golfçü dirseğini bile çözebiliyoruz.
            </p>
          </section>

          {/* ADIM 2: FAQ Modülü */}
          <section className="bg-emerald-50 rounded-xl p-6 mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">❓ En Çok Sorulan 3 Soru</h2>
            
            <div className="space-y-4">
              <details className="bg-white rounded-lg p-4 cursor-pointer" open>
                <summary className="font-semibold text-gray-900">Golfçü dirseği nedir?</summary>
                <p className="mt-3 text-gray-600">
                  Dirseğin <strong>iç yüzündeki kemik çıkıntıya</strong> (medial epikondil) yapışan tendonların iltihabi hastalığıdır. El bileğini büken kasların aşırı kullanımı sonucu <strong>tendonlarda mikro yırtıklar</strong> oluşur.
                </p>
              </details>
              
              <details className="bg-white rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-gray-900">Tenisçi dirseğinden farkı nedir?</summary>
                <p className="mt-3 text-gray-600">
                  <strong>Golfçü → İÇ yüz ağrısı</strong>, <strong>Tenisçi → DIŞ yüz ağrısı</strong>. Golfçü dirseği <strong>5 kat daha az</strong> görülür. Tedavi yöntemleri benzerdir.
                </p>
              </details>
              
              <details className="bg-white rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-gray-900">Ameliyatsız geçer mi?</summary>
                <p className="mt-3 text-gray-600">
                  Evet! <strong>%90+ hasta ameliyatsız iyileşir</strong>. İstirahat, fizik tedavi, şok dalga, PRP ile tam iyileşme. Sadece dirençli vakalarda cerrahi gerekir.
                </p>
              </details>
            </div>
          </section>

          {/* İçindekiler */}
          <div className="bg-gray-50 rounded-xl p-6 mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">📑 İçindekiler</h2>
            <ul className="space-y-2">
              <li><a href="#nedir" className="text-blue-600 hover:underline">Golfçü Dirseği Nedir?</a></li>
              <li><a href="#nedenler" className="text-blue-600 hover:underline">Nedenleri</a></li>
              <li><a href="#belirtiler" className="text-blue-600 hover:underline">Belirtiler</a></li>
              <li><a href="#tani" className="text-blue-600 hover:underline">Tanı Yöntemleri</a></li>
              <li><a href="#tedavi" className="text-blue-600 hover:underline">Ameliyatsız Tedavi</a></li>
              <li><a href="#egzersizler" className="text-blue-600 hover:underline">Egzersizler</a></li>
              <li><a href="#onleme" className="text-blue-600 hover:underline">Önleme</a></li>
            </ul>
          </div>

          {/* ADIM 4: Dr. Nar Analojisi */}
          <section id="nedir" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Golfçü Dirseği Nedir?</h2>
            
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6">
              <p className="text-gray-800 italic mb-4">
                "Hastalara şöyle anlatıyorum..."
              </p>
              <p className="text-gray-800 leading-relaxed">
                Dirseğinizin iç kısmında, kemik çıkıntı üzerinde bir <strong>"tendon yapışma noktası"</strong> var: <em>medial epikondil</em>. Buraya el bileğini büken kasların kirişleri (tendonları) tutunur. Şimdi düşünün ki bu kirişleri <strong>yıllarca aynı hareketi yaparak zorladınız</strong> (golf swing, bilgisayar klavyesi, marangozluk)...
              </p>
              <p className="text-gray-800 leading-relaxed mt-3">
                Sonunda tendonlar <strong>aşınıyor, mikro yırtıklar oluşuyor</strong>. Yapışma noktasında kronik iltihaplanma başlıyor. İşte bu → <strong>golfçü dirseği</strong>.
              </p>
            </div>

            <p className="text-gray-700 mb-4">
              Adı yanıltıcı! <strong>Hastaların çoğu golf oynamaz</strong>. Golfçülerde çok sık görüldüğü için bu ismi almış. Aslında <strong>tekrarlayıcı el bileği bükme hareketi yapan herkes</strong> risk altında.
            </p>

            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-blue-900 font-semibold mb-2">📊 Epidemiyoloji</p>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• Tenisçi dirseğinden <strong>5 kat daha az</strong> görülür</li>
                <li>• En sık <strong>20-50 yaş arası erkeklerde</strong></li>
                <li>• Toplumda görülme sıklığı: <strong>%0.4-1%</strong></li>
              </ul>
            </div>
          </section>

          {/* Nedenler */}
          <section id="nedenler" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Golfçü Dirseği Nedenleri</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 rounded-lg p-4">
                <h3 className="font-semibold text-red-900 mb-2">⚠️ Risk Faktörleri</h3>
                <ul className="text-red-700 space-y-1 text-sm">
                  <li>• <strong>Tekrarlayıcı el bileği bükme</strong> (fleksiyon)</li>
                  <li>• <strong>Golf swing</strong> (yanlış teknik)</li>
                  <li>• <strong>Raket sporları</strong> (tenis, badminton)</li>
                  <li>• <strong>Ağırlık kaldırma</strong> (yanlış teknik)</li>
                  <li>• <strong>Marangozluk, boyacılık</strong></li>
                  <li>• <strong>Bilgisayar klavyesi</strong> (sürekli yazı)</li>
                  <li>• <strong>30-50 yaş arası</strong></li>
                </ul>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-4">
                <h3 className="font-semibold text-orange-900 mb-2">🏌️ Kimler Risk Altında?</h3>
                <ul className="text-orange-700 space-y-1 text-sm">
                  <li>• <strong>Golfçüler</strong> (bu yüzden bu isim)</li>
                  <li>• <strong>Sekreterler, yazarlar</strong> (sürekli yazı)</li>
                  <li>• <strong>Marangozlar, boyacılar</strong></li>
                  <li>• <strong>Ağırlık kaldıran sporcular</strong></li>
                  <li>• <strong>Aşçılar</strong> (bıçak kullanımı)</li>
                  <li>• <strong>Müzisyenler</strong> (gitar, piyano)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Belirtiler */}
          <section id="belirtiler" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Golfçü Dirseği Belirtileri</h2>
            
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-5">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">📍</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">1. Dirsek İç Yüzünde Ağrı (KLASİK!)</h3>
                    <p className="text-gray-700">
                      Medial epikondilde <strong>lokalize ağrı</strong>. Basınca hassas. Önkolun iç kenarına doğru yayılabilir.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-5">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">✊</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">2. Yumruk Yaparken Ağrı Artışı</h3>
                    <p className="text-gray-700">
                      Eli yumruk yaptığınızda veya el bileğini bükerken <strong>şiddetli ağrı</strong>. Karakteristik bir belirtidir.
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
                      Kavanoz açarken, el sıkışırken, kapı kolu çevirirken <strong>güçsüzlük ve ağrı</strong>.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-5">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">🏌️</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">4. Aktivite ile Artan Ağrı</h3>
                    <p className="text-gray-700">
                      Golf swing, yazı yazma, ağırlık kaldırma ile ağrı şiddetlenir. İstirahatle azalır.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-5">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">🌙</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">5. Gece Ağrısı (Nadir)</h3>
                    <p className="text-gray-700">
                      İleri vakalarda gece uyku bozucu ağrı olabilir. Genellikle gece ağrısı yoktur.
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
                    Doktor medial epikondile basınç uygular (hassas nokta). Provokasyon testleri:
                  </p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• <strong>Direnç karşı el bileği fleksiyonu:</strong> Ağrı tetiklenir</li>
                    <li>• <strong>Yumruk yapma testi:</strong> Ağrı artar</li>
                    <li>• <strong>Parmak fleksiyon testi:</strong> Dirençli parmak bükme ağrı yapar</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Röntgen</h3>
                  <p className="text-gray-600">
                    Kemik yapısını gösterir. Kireçlenme, kalsifikasyon, kırık ekarte edilir. Çoğu zaman normal görünür.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900">MRG (Gerekirse)</h3>
                  <p className="text-gray-600">
                    Tendon hasar derecesini gösterir. Kısmi yırtık, tam yırtık, dejenerasyon derecesi değerlendirilir. Tanı netleşmezse veya cerrahi planlanıyorsa yapılır.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Ultrason (US)</h3>
                  <p className="text-gray-600">
                    Hızlı ve ucuz. Tendon kalınlaşması, mikro yırtıklar görülür. Dinamik muayene mümkün.
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
                Golfçü dirseğinin <strong>%90'ından fazlası ameliyatsız iyileşir</strong>. Tedavi aşamalı ve sabırlı olmalı.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">1️⃣ İstirahat ve Aktivite Modifikasyonu</h3>
            <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• <strong>Dirseği zorlayıcı aktivitelerden kaçının</strong> (2-4 hafta)</li>
                <li>• <strong>Buz uygulaması:</strong> Günde 3-4 kez, 20-30 dakika</li>
                <li>• <strong>Antiinflamatuar ilaçlar:</strong> İbuprofen, naproksen (kısa süreli)</li>
                <li>• <strong>Kol bandı (forearm strap):</strong> Medial epikondile binen yükü azaltır</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">2️⃣ Fizik Tedavi</h3>
            <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
              <p className="text-gray-700 mb-3">
                <strong>10-15 seans</strong> genellikle yeterlidir.
              </p>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• <strong>Ultrason, TENS, lazer:</strong> Ağrı azaltma, iyileşmeyi hızlandırma</li>
                <li>• <strong>Germe egzersizleri:</strong> Fleksör kasların esnekliğini artırır</li>
                <li>• <strong>Eksentrik güçlendirme:</strong> Tendon iyileşmesini hızlandırır (en etkili yöntem!)</li>
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

            <h3 className="text-xl font-semibold text-gray-900 mb-4">5️⃣ Kortizon Enjeksiyonu</h3>
            <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
              <p className="text-gray-700 mb-3">
                Güçlü antiinflamatuar etki. <strong>Ancak dikkatli kullanılmalı!</strong>
              </p>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• <strong>Yılda 2'den fazla YAPMAYIN</strong> (tendon zayıflama riski)</li>
                <li>• Kısa süreli rahatlama sağlar (3-6 hafta)</li>
                <li>• Uzun vadede PRP'den daha az etkili</li>
                <li>• Mutlaka ortopedi uzmanı tarafından yapılmalı</li>
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
                <strong>Açık veya artroskopik:</strong> Hasar görmüş tendon dokusu temizlenir (debridman), kemik yüzeyi tazelenir. Başarı oranı %85-90.
              </p>
            </div>
          </section>

          {/* Egzersizler */}
          <section id="egzersizler" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ev Egzersizleri (KRİTİK!)</h2>
            
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
              <p className="text-orange-900 font-semibold mb-2">🔥 En Etkili Tedavi</p>
              <p className="text-orange-800">
                Golfçü dirseği tedavisinde <strong>en etkili yöntem eksentrik germe egzersizleridir</strong>! Günde 3-4 kez, 6-8 hafta düzenli yapıldığında %80+ başarı.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-3">🧘 Egzersiz 1: Fleksör Kas Germe</h3>
                <ol className="text-gray-700 text-sm space-y-2">
                  <li><strong>1.</strong> Kolu düz tutun, dirsek açık</li>
                  <li><strong>2.</strong> El bileğini geri çekin (ekstansiyon), parmaklar yukarı</li>
                  <li><strong>3.</strong> Diğer elinizle parmakları hafifçe geri çekin</li>
                  <li><strong>4.</strong> Dirseğin iç kısmında germe hissedin</li>
                  <li><strong>5.</strong> 15-30 saniye tutun, 3 tekrar</li>
                </ol>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-3">💪 Egzersiz 2: Eksentrik Güçlendirme (EN ÖNEMLİ!)</h3>
                <ol className="text-gray-700 text-sm space-y-2">
                  <li><strong>1.</strong> Hafif bir ağırlık tutun (0.5-1 kg)</li>
                  <li><strong>2.</strong> Dirsek masada, avuç yukarı bakıyor</li>
                  <li><strong>3.</strong> El bileğini yukarı kaldırın (fleksiyon)</li>
                  <li><strong>4.</strong> <strong>YAVAŞÇA</strong> aşağı indirin (5 saniyede)</li>
                  <li><strong>5.</strong> 10-15 tekrar, günde 3 set</li>
                </ol>
                <p className="text-blue-700 text-xs mt-3">
                  💡 İpucu: Aşağı indirme (eksentrik) fazı en önemli! Yavaş ve kontrollü yapın.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-3">✊ Egzersiz 3: Yumruk Sıkma</h3>
                <ol className="text-gray-700 text-sm space-y-2">
                  <li><strong>1.</strong> Yumuşak bir top tutun</li>
                  <li><strong>2.</strong> 5 saniye sıkın, 5 saniye gevşetin</li>
                  <li><strong>3.</strong> 10-15 tekrar, günde 3 kez</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Önleme */}
          <section id="onleme" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Golfçü Dirseğini Nasıl Önleriz?</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-semibold text-green-900 mb-2">✅ Koruyucu Önlemler</h3>
                <ul className="text-green-700 space-y-1 text-sm">
                  <li>• <strong>Doğru golf swing tekniği</strong> (profesyonel eğitim)</li>
                  <li>• <strong>Kademeli yoğunluk artışı</strong> (ani aşırı yüklenme yok)</li>
                  <li>• <strong>Düzenli germe egzersizleri</strong> (her gün 10 dk)</li>
                  <li>• <strong>Ergonomik çalışma ortamı</strong> (klavye yüksekliği)</li>
                  <li>• <strong>Güçlendirme programı</strong> (haftada 2-3 kez)</li>
                </ul>
              </div>
              
              <div className="bg-red-50 rounded-lg p-4">
                <h3 className="font-semibold text-red-900 mb-2">❌ Riskli Davranışlar</h3>
                <ul className="text-red-700 space-y-1 text-sm">
                  <li>• <strong>Yanlış golf swing</strong> (aşırı bilek fleksiyonu)</li>
                  <li>• <strong>Ağır ağırlıklar kaldırırken yanlış teknik</strong></li>
                  <li>• <strong>Isınmadan aktiviteye başlama</strong></li>
                  <li>• <strong>Ağrıyı görmezden gelip devam etme</strong></li>
                  <li>• <strong>Çok sıkı raket/grip kullanma</strong></li>
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
              Golfçü dirseği tedavisinde kullandığımız PRP, şok dalga ve diğer yöntemler hakkında:
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
                  <span className="text-2xl mr-3">🏌️</span>
                  <span className="font-semibold text-gray-800">Amatör Golfçü, 42 Yaş, Kronik Golfçü Dirseği</span>
                </div>
                <p className="text-gray-600 mb-2">
                  <strong>Sorun:</strong> 1 yıldır dirsek iç yüzünde ağrı, golf oynayamıyor, fizik tedaviye cevap vermemiş
                </p>
                <p className="text-gray-700">
                  <strong>Tedavi:</strong> 2 seans PRP + eksentrik egzersiz programı + swing tekniği düzeltme
                </p>
                <p className="text-green-700 font-medium">
                  <strong>Sonuç:</strong> 4. ayda golfe döndü. 2 yıldır sorunsuz oynuyor.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">💻</span>
                  <span className="font-semibold text-gray-800">Yazılımcı, 35 Yaş, Tekrarlayan Golfçü Dirseği</span>
                </div>
                <p className="text-gray-600 mb-2">
                  <strong>Sorun:</strong> 6 ay önce geçmiş, tekrar başlamış. Klavye kullanımı ile şiddetleniyor
                </p>
                <p className="text-gray-700">
                  <strong>Tedavi:</strong> 4 seans şok dalga + ergonomik düzenleme + ev egzersizleri
                </p>
                <p className="text-green-700 font-medium">
                  <strong>Sonuç:</strong> 3 ayda tam iyileşme. Ergonomik değişiklikler ile nüks yok.
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
                  <span className="font-medium">1.</span> Ciccotti MC, et al. <em>"Non-surgical treatment of medial epicondylitis."</em> J Shoulder Elbow Surg. 2004;13(4):412-6.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/15220882/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 15220882</a>
                </li>
                <li>
                  <span className="font-medium">2.</span> Amin NH, et al. <em>"Medial epicondylitis: evaluation and management."</em> J Am Acad Orthop Surg. 2015;23(6):348-55.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/25911660/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 25911660</a>
                </li>
                <li>
                  <span className="font-medium">3.</span> Stahl S, Kaufman T. <em>"The efficacy of an injection of steroids for medial epicondylitis: a prospective study of sixty elbows."</em> J Bone Joint Surg Am. 1997;79(11):1648-52.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/9384423/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 9384423</a>
                </li>
                <li>
                  <span className="font-medium">4.</span> Park GY, et al. <em>"Comparison of sonographically guided platelet-rich plasma injection and dry needling for lateral epicondylitis: a prospective observational study."</em> J Ultrasound Med. 2013;32(11):2023-31.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/24154906/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 24154906</a>
                </li>
                <li>
                  <span className="font-medium">5.</span> Buchbinder R, et al. <em>"Shock wave therapy for lateral elbow pain."</em> Cochrane Database Syst Rev. 2005;(4):CD003524.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/16235327/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 16235327</a>
                </li>
              </ol>
              
              <details className="mt-4">
                <summary className="cursor-pointer text-blue-600 font-medium hover:text-blue-800 flex items-center gap-2">
                  <span>📖 Daha Fazla Kaynak Göster (5 ek referans)</span>
                </summary>
                <ol start={6} className="space-y-3 text-sm text-gray-700 mt-4 pt-4 border-t">
                  <li>
                    <span className="font-medium">6.</span> Vangsness CT Jr, Jobe FW. <em>"Surgical treatment of medial epicondylitis. Results in 35 elbows."</em> J Bone Joint Surg Br. 1991;73(3):409-11.{' '}
                    <a href="https://pubmed.ncbi.nlm.nih.gov/1670438/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 1670438</a>
                  </li>
                  <li>
                    <span className="font-medium">7.</span> Kraushaar BS, Nirschl RP. <em>"Tendinosis of the elbow (tennis elbow). Clinical features and findings of histological, immunohistochemical, and electron microscopy studies."</em> J Bone Joint Surg Am. 1999;81(2):259-78.{' '}
                    <a href="https://pubmed.ncbi.nlm.nih.gov/10073590/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 10073590</a>
                  </li>
                  <li>
                    <span className="font-medium">8.</span> Gabel GT, Morrey BF. <em>"Operative treatment of medial epicondylitis. Influence of concomitant ulnar neuropathy at the elbow."</em> J Bone Joint Surg Am. 1995;77(7):1065-9.{' '}
                    <a href="https://pubmed.ncbi.nlm.nih.gov/7608228/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 7608228</a>
                  </li>
                  <li>
                    <span className="font-medium">9.</span> Jobe FW, Ciccotti MG. <em>"Lateral and medial epicondylitis of the elbow."</em> J Am Acad Orthop Surg. 1994;2(1):1-8.{' '}
                    <a href="https://pubmed.ncbi.nlm.nih.gov/10708988/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 10708988</a>
                  </li>
                  <li>
                    <span className="font-medium">10.</span> Walz DM, et al. <em>"Epicondylitis: pathogenesis, imaging, and treatment."</em> Radiographics. 2010;30(1):167-84.{' '}
                    <a href="https://pubmed.ncbi.nlm.nih.gov/20083592/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 20083592</a>
                  </li>
                </ol>
              </details>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-2">Golfçü Dirseğinizden Kurtulun!</h2>
            <p className="text-emerald-100 mb-2">📍 Nilüfer, Bursa</p>
            <p className="text-emerald-100 mb-6">
              Yumruk yaparken ağrı mı? Dirsek iç yüz ağrınız hayatınızı kısıtlıyor mu? %90+ ameliyatsız iyileşme!
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
                className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition"
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
