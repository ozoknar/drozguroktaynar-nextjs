import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Aşil Tendonu Yırtığı Tedavisi | Op. Dr. Özgür Oktay Nar - Bursa',
  description: 'Aşil tendonu yırtığı belirtileri, tanı ve tedavi yöntemleri. Bursa\'da cerrahi ve konservatif aşil tendonu tedavisi. Spor sakatlıklarında uzman yaklaşım.',
  keywords: 'aşil tendonu yırtığı, aşil tendon kopması, achilles tendon rupture, aşil tendonu ameliyatı, Bursa aşil tedavisi, spor sakatlığı',
  openGraph: {
    title: 'Aşil Tendonu Yırtığı Tedavisi | Bursa Ortopedi',
    description: 'Spor yaparken "çat" sesi mi duydunuz? Aşil tendonu yırtığı erken tanı ve tedavi ile tam iyileşir. Uzman yaklaşım.',
    type: 'article',
    images: [
      {
        url: 'https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2025/04/asil-tendonu-yirtigi.webp',
        width: 1200,
        height: 800,
        alt: 'Aşil Tendonu Yırtığı Tedavisi',
      },
    ],
  },
}

// Medical Web Page Schema
const medicalSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Aşil Tendonu Yırtığı Tedavisi",
  "description": "Aşil tendonu yırtığı belirtileri, tanı yöntemleri ve cerrahi/konservatif tedavi seçenekleri.",
  "medicalAudience": ["Patient", "Athlete"],
  "about": {
    "@type": "MedicalCondition",
    "name": "Aşil Tendonu Yırtığı (Rüptürü)",
    "alternateName": "Achilles Tendon Rupture",
    "associatedAnatomy": {
      "@type": "AnatomicalStructure",
      "name": "Aşil Tendonu"
    },
    "signOrSymptom": [
      {
        "@type": "MedicalSymptom",
        "name": "Ani 'çat' sesi ve darbe hissi"
      },
      {
        "@type": "MedicalSymptom",
        "name": "Parmak ucunda yükselememe"
      },
      {
        "@type": "MedicalSymptom",
        "name": "Tendon bölgesinde boşluk hissi"
      }
    ],
    "possibleTreatment": [
      {
        "@type": "MedicalProcedure",
        "name": "Cerrahi Onarım (Genç ve Aktif Hastalarda)"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Konservatif Tedavi (Alçı ve Fizyoterapi)"
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
      "name": "Aşil tendonu yırtığı nasıl anlaşılır?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En tipik belirti: Spor yaparken veya ani hareket sırasında 'çat' sesi duymak ve arkadan vurulmuş gibi hissetmek. Parmak ucunda yükselememe, tendon bölgesinde çukurluk hissedilmesi ve ayak bileğinde şişlik görülür."
      }
    },
    {
      "@type": "Question",
      "name": "Aşil tendonu yırtığı ameliyatsız tedavi edilir mi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yaşlı hastalarda veya sağlık durumu ameliyata uygun olmayanlarda konservatif tedavi (alçı + fizyoterapi) uygulanabilir. Ancak genç ve aktif bireylerde cerrahi tedavi tercih edilir çünkü yeniden yırtılma riski daha düşük ve iyileşme daha sağlamdır."
      }
    },
    {
      "@type": "Question",
      "name": "Aşil tendonu ameliyatı sonrası iyileşme süresi ne kadar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "4-6 hafta alçı/atel kullanımı, ardından fizyoterapi başlar. Hafif aktivitelere 3-4 ayda, spora dönüş 6-9 ayda gerçekleşir. Tam iyileşme 9-12 ay sürer."
      }
    }
  ]
}

export default function AsilTendonuYirtigiPage() {
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
          <span className="text-gray-700">Aşil Tendonu Yırtığı</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Aşil Tendonu Yırtığı: "Çat" Sesi Duydunuz mu?
        </h1>

        {/* Hero Image */}
        <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden bg-gradient-to-br from-red-100 to-orange-100">
          <Image
            src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2025/04/asil-tendonu-yirtigi.webp"
            alt="Aşil tendonu yırtığı tedavisi"
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
              <strong>Bursa'da</strong> acil servise gelen sporcuların en çok söylediği cümle: <em>"Doktor bey, koşarken 'çat' diye bir ses duydum, sanki arkadan vuruldum."</em>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bu tipik hikaye, <strong>aşil tendonu yırtığı</strong>nın karakteristik özelliğidir. Vücudun en güçlü tendonu bile ani bir yüklenmeyle kopabilir.
            </p>
            <p className="text-gray-700 leading-relaxed">
              İyi haber: Erken tanı ve doğru tedavi ile <strong>tam iyileşme mümkün</strong>. Genç ve aktif hastalarda cerrahi tedavi ile spora dönüş oranı %90+.
            </p>
          </section>

          {/* ADIM 2: FAQ Modülü */}
          <section className="bg-red-50 rounded-xl p-6 mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">❓ En Çok Sorulan 3 Soru</h2>
            
            <div className="space-y-4">
              <details className="bg-white rounded-lg p-4 cursor-pointer" open>
                <summary className="font-semibold text-gray-900">Aşil tendonu yırtığı nasıl anlaşılır?</summary>
                <p className="mt-3 text-gray-600">
                  En tipik belirti: Spor yaparken <strong>"çat" sesi duymak</strong> ve arkadan vurulmuş gibi hissetmek. Parmak ucunda yükselememe, tendon bölgesinde çukurluk ve şişlik görülür.
                </p>
              </details>
              
              <details className="bg-white rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-gray-900">Ameliyatsız tedavi edilir mi?</summary>
                <p className="mt-3 text-gray-600">
                  Yaşlı hastalarda veya ameliyata uygun olmayanlarda <strong>konservatif tedavi</strong> (alçı + fizyoterapi) uygulanabilir. Ancak genç ve aktif bireylerde <strong>cerrahi tercih edilir</strong> (yeniden yırtılma riski %5'e iner).
                </p>
              </details>
              
              <details className="bg-white rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-gray-900">İyileşme süresi ne kadar?</summary>
                <p className="mt-3 text-gray-600">
                  <strong>4-6 hafta alçı/atel</strong>, ardından fizyoterapi. Hafif aktivitelere <strong>3-4 ayda</strong>, spora dönüş <strong>6-9 ayda</strong>. Tam iyileşme 9-12 ay.
                </p>
              </details>
            </div>
          </section>

          {/* İçindekiler */}
          <div className="bg-gray-50 rounded-xl p-6 mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">📑 İçindekiler</h2>
            <ul className="space-y-2">
              <li><a href="#nedir" className="text-blue-600 hover:underline">Aşil Tendonu Nedir?</a></li>
              <li><a href="#nedenler" className="text-blue-600 hover:underline">Yırtık Nedenleri</a></li>
              <li><a href="#belirtiler" className="text-blue-600 hover:underline">Belirtiler</a></li>
              <li><a href="#tani" className="text-blue-600 hover:underline">Tanı Yöntemleri</a></li>
              <li><a href="#tedavi" className="text-blue-600 hover:underline">Tedavi Seçenekleri</a></li>
              <li><a href="#ameliyat" className="text-blue-600 hover:underline">Ameliyat Süreci</a></li>
              <li><a href="#onleme" className="text-blue-600 hover:underline">Önleme</a></li>
            </ul>
          </div>

          {/* ADIM 4: Dr. Nar Analojisi */}
          <section id="nedir" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Aşil Tendonu Nedir?</h2>
            
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6">
              <p className="text-gray-800 italic mb-4">
                "Hastalara şöyle anlatıyorum..."
              </p>
              <p className="text-gray-800 leading-relaxed">
                Aşil tendonu, vücudunuzdaki <strong>en kalın ve en güçlü tendon</strong>. Baldır kaslarınızı (gastrocnemius ve soleus) topuk kemiğinize (kalkaneus) bağlar. Yürürken, koşarken, zıplarken <strong>7 kat vücut ağırlığınıza kadar yük taşır</strong>.
              </p>
              <p className="text-gray-800 leading-relaxed mt-3">
                Düşünün ki bu güçlü halatı <strong>yıllarca aşırı zorladınız</strong> (düzensiz spor, ısınmasız koşu, yetersiz germe). Bir gün ani bir hareket yaptığınızda... <strong>ÇAT!</strong> Halat kopuyor.
              </p>
            </div>

            <p className="text-gray-700 mb-4">
              Aşil tendonu yırtıkları genellikle <strong>tendonun topuk kemiğine yapıştığı yerden 2-6 cm yukarıda</strong> oluşur. Bu bölge en az kanlanan ve en çok zorlanan yerdir.
            </p>
          </section>

          {/* Nedenler */}
          <section id="nedenler" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Aşil Tendonu Yırtığı Nedenleri</h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-red-50 rounded-lg p-4">
                <h3 className="font-semibold text-red-900 mb-2">⚠️ Risk Faktörleri</h3>
                <ul className="text-red-700 space-y-1 text-sm">
                  <li>• <strong>30-50 yaş arası</strong> (en sık bu yaş grubu)</li>
                  <li>• <strong>Erkek cinsiyet</strong> (5 kat daha sık)</li>
                  <li>• <strong>Düzensiz spor</strong> ("Pazar futbolu sendromu")</li>
                  <li>• <strong>Önceden tendinit</strong> (kronik aşil ağrısı)</li>
                  <li>• <strong>Steroid kullanımı</strong></li>
                  <li>• <strong>Florokinolon antibiyotikler</strong></li>
                  <li>• <strong>Yetersiz ısınma</strong></li>
                </ul>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-4">
                <h3 className="font-semibold text-orange-900 mb-2">🏃 Tipik Yaralanma Senaryoları</h3>
                <ul className="text-orange-700 space-y-1 text-sm">
                  <li>• <strong>Sprint başlarken</strong> ani hızlanma</li>
                  <li>• <strong>Smaç yaparken</strong> zıplama</li>
                  <li>• <strong>Tenis servisinde</strong> ani yüklenme</li>
                  <li>• <strong>Merdiven inerken</strong> fark edilmeyen basamak</li>
                  <li>• <strong>Ani yön değiştirme</strong></li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-blue-900 font-semibold mb-2">📊 İstatistik</p>
              <p className="text-blue-800 text-sm">
                Aşil tendonu yırtıkları, <strong>spor sakatlıklarının %5-10'unu</strong> oluşturur. Erkeklerde kadınlara göre <strong>5 kat daha sık</strong> görülür. En sık <strong>30-40 yaş arası</strong>, düzensiz spor yapan kişilerde ortaya çıkar.
              </p>
            </div>
          </section>

          {/* Belirtiler */}
          <section id="belirtiler" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Aşil Tendonu Yırtığı Belirtileri</h2>
            
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-5">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">💥</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">1. Ani "Çat" Sesi ve Darbe Hissi (KLASİK!)</h3>
                    <p className="text-gray-700">
                      Hastaların <strong>%70'i bir patlama sesi duyar</strong>. "Arkadan vuruldum sandım", "Top geldi zannettim" derler. Bu, tendonun kopma anıdır.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-5">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">🚫</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">2. Parmak Ucunda Yükselememe</h3>
                    <p className="text-gray-700">
                      Aşil tendonu olmadan parmak ucuna çıkamazsınız. Tek ayak üzerinde parmak ucuna kalkma testi <strong>negatif</strong>.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-5">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">🕳️</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">3. Tendon Bölgesinde Boşluk (Palpable Gap)</h3>
                    <p className="text-gray-700">
                      Elle tendon takip edildiğinde, <strong>çukurluk hissedilir</strong>. Kopma bölgesi belirgindir.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-5">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">🦶</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">4. Ayak Bileğinde Şişlik ve Morarma</h3>
                    <p className="text-gray-700">
                      Saatler içinde şişlik başlar. 1-2 gün içinde morluklar ayak bileğine ve ayağa yayılır.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-5">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">🚶</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">5. Yürüme Güçlüğü ve Aksama</h3>
                    <p className="text-gray-700">
                      Tam kopmalarda yürüme <strong>çok zorlaşır</strong>. Kısmi yırtıklarda topallamalar görülür.
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
                    Tanı genellikle fizik muayene ile konur. İki önemli test:
                  </p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• <strong>Thompson Testi:</strong> Baldır sıkıldığında ayak bileği hareket etmez (pozitif test)</li>
                    <li>• <strong>Palpasyon:</strong> Kopma yerinde çukurluk hissedilir</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Ultrason (US)</h3>
                  <p className="text-gray-600">
                    Hızlı ve ucuz. Kopma yerini, kopma tipini (tam/kısmi) gösterir. <strong>İlk tercih edilen görüntüleme</strong>.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900">MR (Gerekirse)</h3>
                  <p className="text-gray-600">
                    Kısmi yırtıklar, eşlik eden yaralanmalar (paratenon, bursa) veya tanı netleşmezse MR istenir.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Tedavi */}
          <section id="tedavi" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tedavi Seçenekleri</h2>
            
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
              <p className="text-purple-900 font-semibold mb-2">🎯 Tedavi Kararı Nasıl Verilir?</p>
              <p className="text-purple-800">
                Hastanın <strong>yaşı, aktivite düzeyi ve sağlık durumu</strong> belirleyicidir:
              </p>
              <ul className="text-purple-700 mt-3 space-y-1 text-sm">
                <li>• <strong>Genç ve aktif</strong> → Cerrahi tercih edilir (%90+ başarı)</li>
                <li>• <strong>Yaşlı veya komorbid</strong> → Konservatif tedavi</li>
                <li>• <strong>Kısmi yırtık</strong> → Önce konservatif, cevap vermezse cerrahi</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">1️⃣ Konservatif (Ameliyatsız) Tedavi</h3>
            
            <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Kimler İçin Uygun?</h4>
              <ul className="text-gray-700 text-sm space-y-1 mb-4">
                <li>• 60 yaş üstü, düşük aktivite</li>
                <li>• Ameliyata engel sağlık sorunu (diyabet, kalp hastalığı)</li>
                <li>• Kısmi yırtıklar</li>
              </ul>
              
              <h4 className="font-semibold text-gray-900 mb-3">Süreç:</h4>
              <div className="space-y-2 text-sm text-gray-700">
                <p>• <strong>İlk 2 hafta:</strong> Diz üstü alçı, ayak parmak uçlarına bakan pozisyonda (equinus)</p>
                <p>• <strong>2-4. hafta:</strong> Diz altı alçı, ayak pozisyonu kademeli nötralize edilir</p>
                <p>• <strong>6-8. hafta:</strong> Alçı çıkarılır, fizyoterapi başlar</p>
                <p>• <strong>3-6. ay:</strong> Yürüme normalize olur, hafif aktiviteler</p>
              </div>
              
              <div className="bg-yellow-50 rounded-lg p-3 mt-4">
                <p className="text-yellow-900 font-semibold text-sm mb-1">⚠️ Dezavantajlar:</p>
                <ul className="text-yellow-800 text-xs space-y-1">
                  <li>• Yeniden yırtılma riski <strong>%10-20</strong></li>
                  <li>• Plantar fleksiyon gücü kaybı (<strong>%20-30</strong>)</li>
                  <li>• Uzun immobilizasyon (8 hafta)</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">2️⃣ Cerrahi Tedavi</h3>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
              <p className="text-green-900 font-semibold mb-2">✅ Avantajlar</p>
              <ul className="text-green-800 text-sm space-y-1">
                <li>• Yeniden yırtılma riski <strong>%5'in altında</strong></li>
                <li>• Plantar fleksiyon gücü kaybı minimal (<strong>%5-10</strong>)</li>
                <li>• Erken mobilizasyon (2 hafta içinde hareket başlar)</li>
                <li>• Spora dönüş oranı <strong>%90+</strong></li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h4 className="font-semibold text-gray-900 mb-3">Cerrahi Teknikler</h4>
              
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-1">🔪 Açık Cerrahi (Klasik)</p>
                  <p className="text-gray-600 text-sm">
                    Tendon uçları direkt görülerek dikilir. 10-15 cm kesi. En sağlam onarım. Yara komplikasyon riski %5-10.
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-1">🪡 Minimal İnvaziv (Perkütan)</p>
                  <p className="text-gray-600 text-sm">
                    2-3 cm küçük kesilerle, özel aletlerle tendon dikilir. Yara komplikasyonu <strong>%1'in altında</strong>. Sinir yaralanma riski hafif artar.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Ameliyat Süreci */}
          <section id="ameliyat" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ameliyat Süreci Nasıl İşler?</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Ameliyat Öncesi</h3>
                  <p className="text-gray-600">
                    Genel veya spinal anestezi. Ameliyat yaklaşık <strong>45-90 dakika</strong> sürer.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Ameliyat Sırasında</h3>
                  <p className="text-gray-600">
                    Kopan tendon uçları bulunur, temizlenir, güçlü dikişlerle birleştirilir. Gerekirse komşu tendonla güçlendirme yapılır.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Ameliyat Sonrası</h3>
                  <p className="text-gray-600">
                    Aynı gün veya 1 gece hastanede kalınır. Diz altı alçı/atel uygulanır (4-6 hafta).
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Rehabilitasyon</h3>
                  <p className="text-gray-600 mb-2">
                    <strong>Aşamalı iyileşme protokolü:</strong>
                  </p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• <strong>0-2 hafta:</strong> Alçı, ayak yüke kapalı</li>
                    <li>• <strong>2-6 hafta:</strong> Kontrollü hareket, kademeli yük verme</li>
                    <li>• <strong>6-12 hafta:</strong> Fizyoterapi, güçlendirme</li>
                    <li>• <strong>3-4 ay:</strong> Yürüme normale döner</li>
                    <li>• <strong>6-9 ay:</strong> Spora dönüş (izokinetik test ile onaylanır)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Önleme */}
          <section id="onleme" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Aşil Tendonu Yırtığını Nasıl Önleriz?</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-semibold text-green-900 mb-2">✅ Koruyucu Önlemler</h3>
                <ul className="text-green-700 space-y-1 text-sm">
                  <li>• <strong>Düzenli germe egzersizleri</strong> (her gün 10 dk)</li>
                  <li>• <strong>Kademeli spor artışı</strong> (aniden yoğunluk artırma)</li>
                  <li>• <strong>Isınma zorunlu</strong> (özellikle soğuk havalarda)</li>
                  <li>• <strong>Kronik aşil ağrısını ciddiye al</strong> (tendinite erken müdahale)</li>
                  <li>• <strong>Uygun ayakkabı</strong> (topuk desteği olan)</li>
                </ul>
              </div>
              
              <div className="bg-red-50 rounded-lg p-4">
                <h3 className="font-semibold text-red-900 mb-2">❌ Riskli Davranışlar</h3>
                <ul className="text-red-700 space-y-1 text-sm">
                  <li>• <strong>Pazar futbolu sendromu</strong> (haftada 1 kez aşırı yüklenme)</li>
                  <li>• <strong>Isınmadan sprint</strong></li>
                  <li>• <strong>Kronik ağrıyı ilaçla bastırıp spora devam</strong></li>
                  <li>• <strong>Aşırı kilo</strong></li>
                  <li>• <strong>Steroid kullanımı</strong></li>
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
              Aşil tendonu sakatlıklarında kullanılan PRP ve diğer rejeneratif yöntemler hakkında:
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
                  <span className="text-2xl mr-3">⚽</span>
                  <span className="font-semibold text-gray-800">Futbolcu, 32 Yaş, Tam Aşil Kopması</span>
                </div>
                <p className="text-gray-600 mb-2">
                  <strong>Sorun:</strong> Maç sırasında sprint yaparken "çat" sesi, tam kopma
                </p>
                <p className="text-gray-700">
                  <strong>Tedavi:</strong> Açık cerrahi onarım + 6 ay fizik tedavi programı
                </p>
                <p className="text-green-700 font-medium">
                  <strong>Sonuç:</strong> 9. ayda sahaya döndü, 1 yıldır şikayetsiz oynuyor.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">🏃‍♀️</span>
                  <span className="font-semibold text-gray-800">Koşucu, 45 Yaş, Kısmi Yırtık</span>
                </div>
                <p className="text-gray-600 mb-2">
                  <strong>Sorun:</strong> Kronik aşil ağrısı sonrası kısmi yırtık
                </p>
                <p className="text-gray-700">
                  <strong>Tedavi:</strong> 6 hafta alçı + eksentrik egzersiz programı + PRP
                </p>
                <p className="text-green-700 font-medium">
                  <strong>Sonuç:</strong> 4 ayda koşmaya döndü, 1 yıldır yırtık nüksü yok.
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
                  <span className="font-medium">1.</span> Willits K, et al. <em>"Operative versus nonoperative treatment of acute Achilles tendon ruptures: a multicenter randomized trial using accelerated functional rehabilitation."</em> J Bone Joint Surg Am. 2010;92(17):2767-75.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=achilles+tendon+rupture" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">2.</span> Khan RJ, et al. <em>"Treatment of acute Achilles tendon ruptures. A meta-analysis of randomized, controlled trials."</em> J Bone Joint Surg Am. 2005;87(10):2202-10.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=achilles+tendon+rupture" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">3.</span> Maffulli N, et al. <em>"Achilles tendon ruptures in elite athletes."</em> Foot Ankle Int. 2011;32(1):9-15.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=achilles+tendon+rupture" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">4.</span> Soroceanu A, et al. <em>"Surgical versus nonsurgical treatment of acute Achilles tendon rupture: a meta-analysis of randomized trials."</em> J Bone Joint Surg Am. 2012;94(23):2136-43.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=achilles+tendon+rupture" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
                <li>
                  <span className="font-medium">5.</span> Grassi A, et al. <em>"Minimally invasive versus open repair for acute Achilles tendon rupture: meta-analysis showing reduced complications."</em> J Orthop Surg Res. 2018;13(1):288.{' '}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/?term=achilles+tendon+rupture" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                </li>
              </ol>
              
              <details className="mt-4">
                <summary className="cursor-pointer text-blue-600 font-medium hover:text-blue-800 flex items-center gap-2">
                  <span>📖 Daha Fazla Kaynak Göster (5 ek referans)</span>
                </summary>
                <ol start={6} className="space-y-3 text-sm text-gray-700 mt-4 pt-4 border-t">
                  <li>
                    <span className="font-medium">6.</span> Olsson N, et al. <em>"Major complications after surgical treatment of Achilles tendon ruptures: wound infections and deep venous thrombosis."</em> Foot Ankle Surg. 2014;20(3):166-71.{' '}
                    <a href="https://pubmed.ncbi.nlm.nih.gov/?term=achilles+tendon+rupture" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                  </li>
                  <li>
                    <span className="font-medium">7.</span> Lantto I, et al. <em>"Epidemiology of Achilles tendon ruptures: increasing incidence over a 33-year period."</em> Scand J Med Sci Sports. 2015;25(1):e133-8.{' '}
                    <a href="https://pubmed.ncbi.nlm.nih.gov/?term=achilles+tendon+rupture" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                  </li>
                  <li>
                    <span className="font-medium">8.</span> Nilsson-Helander K, et al. <em>"The Achilles tendon Total Rupture Score (ATRS): development and validation."</em> Am J Sports Med. 2007;35(3):421-6.{' '}
                    <a href="https://pubmed.ncbi.nlm.nih.gov/?term=achilles+tendon+rupture" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                  </li>
                  <li>
                    <span className="font-medium">9.</span> Schepull T, et al. <em>"Autologous platelets have no effect on the healing of human Achilles tendon ruptures: a randomized single-blind study."</em> Am J Sports Med. 2011;39(1):38-47.{' '}
                    <a href="https://pubmed.ncbi.nlm.nih.gov/?term=achilles+tendon+rupture" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                  </li>
                  <li>
                    <span className="font-medium">10.</span> Keating JF, Will EM. <em>"Operative versus non-operative treatment of acute rupture of tendo Achillis: a prospective randomised evaluation of functional outcome."</em> J Bone Joint Surg Br. 2011;93(8):1071-8.{' '}
                    <a href="https://pubmed.ncbi.nlm.nih.gov/?term=achilles+tendon+rupture" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
                  </li>
                </ol>
              </details>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-2">Aşil Tendonu Yırtığı mı? Acil Değerlendirme!</h2>
            <p className="text-red-100 mb-2">📍 Nilüfer, Bursa</p>
            <p className="text-red-100 mb-6">
              "Çat" sesi duydunuz mu? Erken tanı ve tedavi ile tam iyileşme mümkün. Hemen randevu alın!
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
