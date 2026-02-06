import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Topuk Dikeni Tedavisi | Op. Dr. Özgür Oktay Nar - Bursa',
  description: 'Topuk dikeni (plantar fasiit) nedir, belirtileri nelerdir? Bursa\'da ameliyatsız topuk dikeni tedavisi: PRP, şok dalga, fizik tedavi. Uzman ortopedist kontrolünde tedavi.',
  keywords: 'topuk dikeni, plantar fasiit, topuk ağrısı, topuk dikeni tedavisi, PRP topuk, şok dalga tedavisi, Bursa topuk dikeni',
  openGraph: {
    title: 'Topuk Dikeni Tedavisi | Bursa Ortopedi',
    description: 'Sabah ilk adımda topuk ağrısı mı? Topuk dikenini ameliyatsız tedavi ediyoruz. PRP, şok dalga ve fizik tedavi yöntemleri.',
    type: 'article',
    images: [
      {
        url: 'https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2025/04/topuk-dikeni-tedavi.webp',
        width: 1200,
        height: 800,
        alt: 'Topuk Dikeni Tedavisi - Plantar Fasiit',
      },
    ],
  },
}

// Medical Web Page Schema
const medicalSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Topuk Dikeni (Plantar Fasiit) Tedavisi",
  "description": "Topuk dikeni belirtileri, nedenleri ve ameliyatsız tedavi yöntemleri hakkında kapsamlı bilgi.",
  "medicalAudience": ["Patient", "CareGiver"],
  "about": {
    "@type": "MedicalCondition",
    "name": "Topuk Dikeni (Plantar Fasiit)",
    "alternateName": "Plantar Fasciitis",
    "associatedAnatomy": {
      "@type": "AnatomicalStructure",
      "name": "Plantar Fasya"
    },
    "signOrSymptom": [
      {
        "@type": "MedicalSymptom",
        "name": "Sabah ilk adımda şiddetli topuk ağrısı"
      },
      {
        "@type": "MedicalSymptom",
        "name": "Uzun oturma sonrası topuk ağrısı"
      },
      {
        "@type": "MedicalSymptom",
        "name": "Topuk altında hassasiyet"
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
      },
      {
        "@type": "MedicalTherapy",
        "name": "Ortez ve Destek Taban"
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
      "name": "Topuk dikeni nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Topuk dikeni (plantar fasiit), ayak tabanındaki plantar fasya adlı bağ dokusunun iltihabi bir rahatsızlığıdır. Topuk kemiğinin altında kalsiyum birikimi sonucu kemiksi bir çıkıntı oluşur. Sabah ilk adımda şiddetli ağrı tipiktir."
      }
    },
    {
      "@type": "Question",
      "name": "Topuk dikeni ameliyatsız geçer mi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Evet! Hastaların %90'ından fazlası ameliyatsız tedavi ile iyileşir. PRP, şok dalga tedavisi, fizik tedavi, ortez kullanımı ve yaşam tarzı değişiklikleri çok etkilidir. Ameliyat sadece %5-10 hastada gerekir."
      }
    },
    {
      "@type": "Question",
      "name": "Topuk dikeni tedavisi ne kadar sürer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Konservatif tedavi ile 6-12 hafta içinde belirgin iyileşme görülür. PRP tedavisi ile 3-6 ay içinde tam iyileşme sağlanabilir. Şok dalga tedavisi genellikle 3-5 seans olarak uygulanır."
      }
    }
  ]
}

export default function TopukDikeniPage() {
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
          <span className="text-gray-700">Topuk Dikeni</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Topuk Dikeni (Plantar Fasiit): Sabah İlk Adımda Ağrı mı?
        </h1>

        {/* Hero Image */}
        <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
          <Image
            src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2025/04/topuk-dikeni-tedavi.webp"
            alt="Topuk dikeni tedavisi - plantar fasiit"
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
              <strong>Bursa'da</strong> muayenehaneme gelen hastalarımın en sık yakındığı sorunlardan biri: <em>"Doktor bey, sabah yataktan kalktığımda topuğum o kadar ağrıyor ki, ilk adımı zor atıyorum."</em>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bu ağrı o kadar tipiktir ki, ilk cümleden tanı koyuyoruz: <strong>Topuk dikeni (plantar fasiit)</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed">
              İyi haber: Hastaların <strong>%90'ından fazlası ameliyatsız iyileşiyor</strong>. Modern tedavi yöntemleri (PRP, şok dalga) sayesinde topuk dikeni artık kolayca tedavi edilebilir bir rahatsızlık.
            </p>
          </section>

          {/* ADIM 2: FAQ Modülü */}
          <section className="bg-blue-50 rounded-xl p-6 mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">❓ En Çok Sorulan 3 Soru</h2>
            
            <div className="space-y-4">
              <details className="bg-white rounded-lg p-4 cursor-pointer" open>
                <summary className="font-semibold text-gray-900">Topuk dikeni nedir?</summary>
                <p className="mt-3 text-gray-600">
                  Ayak tabanındaki <strong>plantar fasya</strong> adlı bağın iltihabi bir rahatsızlığıdır. Topuk kemiğinin altında kalsiyum birikimi ile kemiksi bir çıkıntı oluşur. Ancak ağrının asıl sebebi bu çıkıntı değil, <strong>bağdaki iltihaplanmadır</strong>.
                </p>
              </details>
              
              <details className="bg-white rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-gray-900">Ameliyatsız geçer mi?</summary>
                <p className="mt-3 text-gray-600">
                  Evet! <strong>%90+ hastada ameliyatsız tedavi başarılı</strong> oluyor. PRP, şok dalga, fizik tedavi, ortez kullanımı... Ameliyat sadece %5-10 hastada gerekir.
                </p>
              </details>
              
              <details className="bg-white rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-gray-900">Tedavi ne kadar sürer?</summary>
                <p className="mt-3 text-gray-600">
                  Konservatif tedavi ile <strong>6-12 hafta</strong>. PRP tedavisi ile <strong>3-6 ay</strong> içinde tam iyileşme. Şok dalga tedavisi genellikle <strong>3-5 seans</strong>.
                </p>
              </details>
            </div>
          </section>

          {/* İçindekiler */}
          <div className="bg-gray-50 rounded-xl p-6 mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">📑 İçindekiler</h2>
            <ul className="space-y-2">
              <li><a href="#nedir" className="text-blue-600 hover:underline">Topuk Dikeni Nedir?</a></li>
              <li><a href="#nedenler" className="text-blue-600 hover:underline">Nedenleri</a></li>
              <li><a href="#belirtiler" className="text-blue-600 hover:underline">Belirtiler</a></li>
              <li><a href="#tani" className="text-blue-600 hover:underline">Tanı Nasıl Konur?</a></li>
              <li><a href="#tedavi" className="text-blue-600 hover:underline">Tedavi Yöntemleri</a></li>
              <li><a href="#prp" className="text-blue-600 hover:underline">PRP Tedavisi</a></li>
              <li><a href="#onleme" className="text-blue-600 hover:underline">Önleme Yöntemleri</a></li>
            </ul>
          </div>

          {/* ADIM 4: Dr. Nar Analojisi */}
          <section id="nedir" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Topuk Dikeni Nedir?</h2>
            
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6">
              <p className="text-gray-800 italic mb-4">
                "Hastalara şöyle anlatıyorum..."
              </p>
              <p className="text-gray-800 leading-relaxed">
                Ayağınızın altında, topuktan parmak uçlarına uzanan <strong>güçlü bir yay sistemi</strong> var: <em>plantar fasya</em>. Bu, ayağınızın yaylanmasını sağlayan bir bağ dokusu. Şimdi düşünün ki bu yay <strong>yıllarca aşırı gerildi</strong> (topuklu ayakkabı, fazla kilo, uzun yürüyüşler)...
              </p>
              <p className="text-gray-800 leading-relaxed mt-3">
                Sonunda yayın topuğa tutunduğu yerde <strong>mikro yırtıklar</strong> oluşur. Vücut bunu tamir etmeye çalışır, ama sürekli yük verildiği için tam iyileşemez. İşte bu kronik tahriş ve iltihaplanmaya <strong>topuk dikeni</strong> diyoruz.
              </p>
            </div>

            <p className="text-gray-700 mb-4">
              Röntgende topuk kemiğinin altında <strong>kemiksi bir çıkıntı</strong> görülebilir. Ancak şunu bilmek önemli: <strong>Ağrıyı yapan bu çıkıntı değil</strong>, plantar fasyada oluşan iltihaptır. Çıkıntısı olmayan kişilerde de aynı ağrı olabilir.
            </p>
          </section>

          {/* Nedenler */}
          <section id="nedenler" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Topuk Dikeni Nedenleri</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 rounded-lg p-4">
                <h3 className="font-semibold text-red-900 mb-2">⚠️ Risk Faktörleri</h3>
                <ul className="text-red-700 space-y-1 text-sm">
                  <li>• <strong>Aşırı kilo</strong> (her adımda fazla yük)</li>
                  <li>• <strong>Topuklu ayakkabı</strong> (kadınlarda çok sık)</li>
                  <li>• <strong>Düztabanlık</strong> veya yüksek kemer</li>
                  <li>• <strong>Uzun süre ayakta durulan meslekler</strong></li>
                  <li>• <strong>Aşırı spor/koşu</strong></li>
                  <li>• <strong>40 yaş üstü</strong> (doku elastikiyeti azalır)</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 mb-2">📊 İstatistikler</h3>
                <ul className="text-blue-700 space-y-1 text-sm">
                  <li>• Kadınlarda <strong>2 kat daha sık</strong></li>
                  <li>• Toplumun <strong>%10'unda</strong> görülür</li>
                  <li>• En sık <strong>40-60 yaş</strong> arası</li>
                  <li>• Koşucuların <strong>%15'inde</strong> ortaya çıkar</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Belirtiler */}
          <section id="belirtiler" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Topuk Dikeni Belirtileri</h2>
            
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-5">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">🌅</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">1. Sabah İlk Adım Ağrısı (Klasik Belirti!)</h3>
                    <p className="text-gray-700">
                      Yataktan kalktığınızda atılan <strong>ilk 3-5 adımda şiddetli ağrı</strong>. Gece boyunca plantar fasya kısalır, sabah gerilince acı verir. Biraz yürüyünce hafifler.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-5">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">🪑</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">2. Oturma Sonrası Ağrı</h3>
                    <p className="text-gray-700">
                      Uzun süre oturduktan sonra kalktığınızda aynı ağrı tekrar eder. Yine ilk adımlarda şiddetli, sonra azalır.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-5">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">🚶</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">3. Uzun Yürüyüş Sonrası Ağrı</h3>
                    <p className="text-gray-700">
                      Gün içinde çok yürüdükten sonra topuk altında yanma, batma hissi. Akşamları şiddetlenebilir.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-5">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">👆</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">4. Topuk Altında Hassasiyet</h3>
                    <p className="text-gray-700">
                      Topuk kemiğinin iç kısmına (ayak ortasına yakın) basınca <strong>lokal ağrı</strong>. Hassas bir nokta vardır.
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
                  <p className="text-gray-600">
                    Topuk altına basınç uygulanır. Tipik hassas nokta bulunur. Ayak hareketleri değerlendirilir.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Röntgen</h3>
                  <p className="text-gray-600">
                    Topuk kemiğinin altında kemiksi çıkıntı görülebilir. Ancak <strong>çıkıntı olmadan da topuk dikeni olabilir</strong>.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Ultrason (nadiren)</h3>
                  <p className="text-gray-600">
                    Plantar fasyanın kalınlaşması ve iltihabı görülür. Tanı netleşmezse kullanılır.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Tedavi */}
          <section id="tedavi" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Topuk Dikeni Tedavi Yöntemleri</h2>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
              <p className="text-green-900 font-semibold mb-2">✅ Müjdeli Haber</p>
              <p className="text-green-800">
                Hastaların <strong>%90-95'i konservatif (ameliyatsız) tedavi ile iyileşir</strong>. Ameliyat sadece 1 yıllık tedaviye rağmen iyileşmeyen %5-10 hasta için gerekir.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">1️⃣ Konservatif Tedavi (İlk 6 Hafta)</h3>
            
            <div className="space-y-3 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">🧊 Buz Uygulaması</h4>
                <p className="text-gray-700 text-sm">
                  Günde 3-4 kez, 15 dakika. İltihabı azaltır, ağrıyı keser.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">🧘 Germe Egzersizleri</h4>
                <p className="text-gray-700 text-sm">
                  Plantar fasya ve aşil tendonu germe. Sabah yataktan kalkmadan önce yapılır. <strong>En etkili yöntemlerden biri!</strong>
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">👟 Ortez (Destek Taban)</h4>
                <p className="text-gray-700 text-sm">
                  Özel topuk yastıkları veya tam taban ortezleri. Plantar fasyayı rahatlatır.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">💊 Antiinflamatuar İlaçlar</h4>
                <p className="text-gray-700 text-sm">
                  İbuprofen, naproksen gibi ağrı kesiciler. Kısa süreli kullanım.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">⚖️ Kilo Verme</h4>
                <p className="text-gray-700 text-sm">
                  Aşırı kilolu hastalarda <strong>%70 başarı oranı</strong>. Her kilo, ayağa binecek yükü azaltır.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">2️⃣ İleri Tedavi Yöntemleri</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 rounded-xl p-6">
                <h4 className="font-semibold text-purple-900 mb-3">⚡ Şok Dalga Tedavisi (ESWT)</h4>
                <p className="text-purple-800 text-sm mb-3">
                  Yüksek enerjili ses dalgaları ile plantar fasyada <strong>mikrovasküler dolaşım artırılır</strong>, iyileşme hızlanır.
                </p>
                <ul className="text-purple-700 text-sm space-y-1">
                  <li>• <strong>3-5 seans</strong> (haftada 1)</li>
                  <li>• Her seans 15-20 dk</li>
                  <li>• <strong>%70-80 başarı oranı</strong></li>
                  <li>• Ağrısız, yan etkisiz</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="font-semibold text-blue-900 mb-3">💉 PRP Tedavisi</h4>
                <p className="text-blue-800 text-sm mb-3">
                  Kendi kanınızdan elde edilen büyüme faktörleri, plantar fasyayı <strong>doğal yoldan iyileştirir</strong>.
                </p>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• <strong>1-2 seans</strong> yeterli</li>
                  <li>• Etki 3-6 ayda tam</li>
                  <li>• <strong>%80-85 başarı oranı</strong></li>
                  <li>• Ameliyata alternatif</li>
                </ul>
              </div>
            </div>
          </section>

          {/* PRP Detay */}
          <section id="prp" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">💉 PRP Tedavisi Detayları</h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
              <p className="text-gray-800 leading-relaxed mb-4">
                <strong>Bursa'da</strong> muayenehanemde topuk dikeni için en sık uyguladığım yöntem <strong>PRP tedavisi</strong>. Özellikle kronik vakalarda ve diğer yöntemlere yanıt vermeyenlerde çok etkili.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Kan Alımı</h3>
                  <p className="text-gray-600">
                    Kolunuzdan yaklaşık 10-20 ml kan alınır (normal kan tahlili kadar).
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Santrifüj</h3>
                  <p className="text-gray-600">
                    Kan özel bir cihazda döndürülür, trombositten zengin plazma ayrıştırılır.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Enjeksiyon</h3>
                  <p className="text-gray-600">
                    Topuk altındaki hassas noktaya, ultrason eşliğinde PRP enjekte edilir. <strong>Lokal anestezi ile ağrısız</strong>.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-gray-900">İyileşme Süreci</h3>
                  <p className="text-gray-600">
                    İlk 1-2 hafta hafif ağrı olabilir (iyileşme reaksiyonu). 4-6 hafta sonra belirgin iyileşme. Tam etki 3-6 ayda.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-4 mt-6">
              <p className="text-yellow-900 font-semibold mb-2">⚠️ PRP Sonrası Dikkat!</p>
              <ul className="text-yellow-800 text-sm space-y-1">
                <li>• İlk 3 gün ayağa aşırı yük vermeyin</li>
                <li>• 1 hafta boyunca ağır spor yapmayın</li>
                <li>• Düzenli olarak germe egzersizlerine devam edin</li>
                <li>• Destek taban kullanmaya devam edin</li>
              </ul>
            </div>
          </section>

          {/* Önleme */}
          <section id="onleme" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Topuk Dikenini Nasıl Önleriz?</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-semibold text-green-900 mb-2">✅ Yapılması Gerekenler</h3>
                <ul className="text-green-700 space-y-1 text-sm">
                  <li>• <strong>Uygun ayakkabı</strong> (yumuşak taban, topuk desteği)</li>
                  <li>• <strong>Düzenli germe egzersizleri</strong></li>
                  <li>• <strong>Kilo kontrolü</strong></li>
                  <li>• <strong>Adım adım spor artışı</strong> (ani yüklenme yok)</li>
                  <li>• <strong>Sert zeminlerde uzun yürümekten kaçının</strong></li>
                </ul>
              </div>
              
              <div className="bg-red-50 rounded-lg p-4">
                <h3 className="font-semibold text-red-900 mb-2">❌ Yapılmaması Gerekenler</h3>
                <ul className="text-red-700 space-y-1 text-sm">
                  <li>• <strong>Topuklu ayakkabı</strong> (özellikle ince topuklar)</li>
                  <li>• <strong>Çok ince tabanlı ayakkabı</strong></li>
                  <li>• <strong>Yalınayak sert zeminde yürüme</strong></li>
                  <li>• <strong>Ani aşırı egzersiz</strong></li>
                  <li>• <strong>Aşırı kilo</strong></li>
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
              Topuk dikeni tedavisinde kullandığımız PRP ve diğer rejeneratif yöntemler hakkında daha fazla bilgi:
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
                  <span className="text-2xl mr-3">👩‍🏫</span>
                  <span className="font-semibold text-gray-800">Öğretmen, 48 Yaş, 2 Yıllık Topuk Dikeni</span>
                </div>
                <p className="text-gray-600 mb-2">
                  <strong>Sorun:</strong> 2 yıldır sabahları şiddetli ağrı, tüm gün ayakta durmak zorunda, 3 farklı tedavi denemiş
                </p>
                <p className="text-gray-700">
                  <strong>Tedavi:</strong> 2 seans PRP + özel ortez + germe egzersizleri
                </p>
                <p className="text-green-700 font-medium">
                  <strong>Sonuç:</strong> 3. ayda ağrısız. 1 yıldır şikayetsiz, okula rahatça gidiyor.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">🏃</span>
                  <span className="font-semibold text-gray-800">Maraton Koşucusu, 35 Yaş</span>
                </div>
                <p className="text-gray-600 mb-2">
                  <strong>Sorun:</strong> Maraton antrenmanları sırasında topuk ağrısı başladı, koşmayı bırakmak zorunda kaldı
                </p>
                <p className="text-gray-700">
                  <strong>Tedavi:</strong> 4 seans şok dalga + spor fizyoterapisti eşliğinde egzersiz
                </p>
                <p className="text-green-700 font-medium">
                  <strong>Sonuç:</strong> 2 ay sonra koşulara döndü, 6 ay sonra yarı maraton koştu.
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
                  <span className="font-medium">1.</span> Tahririan MA, et al. <em>"Ultrasound guided platelet-rich plasma injection for the treatment of chronic plantar fasciitis."</em> Foot Ankle Int. 2011;32(5):S5-S8.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/21972266/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 21972266</a>
                </li>
                <li>
                  <span className="font-medium">2.</span> Rompe JD, et al. <em>"Shock wave therapy for chronic plantar fasciopathy."</em> Br Med Bull. 2007;81-82:183-208.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/17456546/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 17456546</a>
                </li>
                <li>
                  <span className="font-medium">3.</span> Digiovanni BF, et al. <em>"Plantar fascia-specific stretching exercise improves outcomes in patients with chronic plantar fasciitis."</em> J Bone Joint Surg Am. 2006;88(8):1775-81.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/16882901/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 16882901</a>
                </li>
                <li>
                  <span className="font-medium">4.</span> Gollwitzer H, et al. <em>"Radial extracorporeal shock wave therapy for chronic recalcitrant plantar fasciitis."</em> Foot Ankle Int. 2007;28(5):538-46.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/17559756/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 17559756</a>
                </li>
                <li>
                  <span className="font-medium">5.</span> Kim C, Cashdollar MR, Mendicino RW, et al. <em>"Incidence of plantar fascia ruptures following corticosteroid injection."</em> Foot Ankle Spec. 2010;3(6):335-337.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/20817847/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 20817847</a>
                </li>
              </ol>
              
              <details className="mt-4">
                <summary className="cursor-pointer text-blue-600 font-medium hover:text-blue-800 flex items-center gap-2">
                  <span>📖 Daha Fazla Kaynak Göster (5 ek referans)</span>
                </summary>
                <ol start={6} className="space-y-3 text-sm text-gray-700 mt-4 pt-4 border-t">
                  <li>
                    <span className="font-medium">6.</span> Landorf KB, et al. <em>"Effectiveness of foot orthoses versus calf muscle stretching for the treatment of plantar heel pain: a randomized trial."</em> Ann Intern Med. 2006;145(12):E1-9.{' '}
                    <a href="https://pubmed.ncbi.nlm.nih.gov/17179052/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 17179052</a>
                  </li>
                  <li>
                    <span className="font-medium">7.</span> Pfeffer G, et al. <em>"Comparison of custom and prefabricated orthoses in the initial treatment of proximal plantar fasciitis."</em> Foot Ankle Int. 1999;20(4):214-21.{' '}
                    <a href="https://pubmed.ncbi.nlm.nih.gov/10229276/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 10229276</a>
                  </li>
                  <li>
                    <span className="font-medium">8.</span> Acevedo JI, Beskin JL. <em>"Complications of plantar fascia rupture associated with corticosteroid injection."</em> Foot Ankle Int. 1998;19(2):91-7.{' '}
                    <a href="https://pubmed.ncbi.nlm.nih.gov/9498581/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 9498581</a>
                  </li>
                  <li>
                    <span className="font-medium">9.</span> Crawford F, Thomson C. <em>"Interventions for treating plantar heel pain."</em> Cochrane Database Syst Rev. 2003;(3):CD000416.{' '}
                    <a href="https://pubmed.ncbi.nlm.nih.gov/12917892/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 12917892</a>
                  </li>
                  <li>
                    <span className="font-medium">10.</span> Martin RL, et al. <em>"Heel pain-plantar fasciitis: revision 2014."</em> J Orthop Sports Phys Ther. 2014;44(11):A1-33.{' '}
                    <a href="https://pubmed.ncbi.nlm.nih.gov/25361863/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PMID: 25361863</a>
                  </li>
                </ol>
              </details>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-2">Topuk Dikeninizden Kurtulun!</h2>
            <p className="text-blue-100 mb-2">📍 Nilüfer, Bursa</p>
            <p className="text-blue-100 mb-6">
              Sabah ilk adımda ağrı mı? Ameliyatsız tedavi ile %90+ başarı oranı. Hemen randevu alın!
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
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
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
