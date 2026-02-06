import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bursa Ortopedi Doktoru | Op. Dr. Özgür Oktay Nar - Nilüfer',
  description: 'Bursa Nilüfer\'de ortopedi doktoru arıyorsanız Op. Dr. Özgür Oktay Nar. Diz, bel, omuz, ayak tedavisi. Ameliyatsız çözümler. WhatsApp ile randevu.',
  keywords: 'Bursa ortopedi doktoru, Nilüfer ortopedi, Bursa ortopedi uzmanı, Osmangazi ortopedi, en iyi ortopedi doktoru Bursa',
  openGraph: {
    title: 'Bursa Ortopedi Doktoru | Op. Dr. Özgür Oktay Nar',
    description: 'Bursa Nilüfer\'de 20+ yıllık deneyimle ortopedi hizmeti. Ameliyatsız tedavi odaklı yaklaşım.',
    type: 'website',
  },
}

// LocalBusiness Schema for Local SEO
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Op. Dr. Özgür Oktay Nar - Ortopedi Kliniği",
  "image": "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2023/04/5i6a7025-1024x683.jpg",
  "description": "Bursa Nilüfer'de ortopedi ve travmatoloji uzmanı",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Nilüfer",
    "addressLocality": "Bursa",
    "addressRegion": "Bursa",
    "postalCode": "16110",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "40.2128",
    "longitude": "28.9744"
  },
  "telephone": "+905522493909",
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "medicalSpecialty": "Orthopedic",
  "availableService": [
    "Diz Tedavisi",
    "Bel Ağrısı Tedavisi",
    "Omuz Tedavisi",
    "Ayak ve Ayak Bileği",
    "Hidrojel Tedavisi",
    "PRP Tedavisi"
  ]
}

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Bursa'da en iyi ortopedi doktoru kim?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Op. Dr. Özgür Oktay Nar, Bursa Nilüfer'de 20+ yıllık deneyimle hizmet veren ortopedi ve travmatoloji uzmanıdır. Ameliyatsız tedavi yaklaşımı ve hasta memnuniyeti ile tanınır."
      }
    },
    {
      "@type": "Question",
      "name": "Bursa'da ortopedi muayenesi nasıl randevu alınır?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Op. Dr. Özgür Oktay Nar'dan randevu almak için WhatsApp üzerinden 0552 249 39 09 numarasına mesaj atabilir veya arayabilirsiniz."
      }
    },
    {
      "@type": "Question",
      "name": "Nilüfer'de ortopedi kliniği var mı?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Evet, Op. Dr. Özgür Oktay Nar'ın özel muayenehanesi Bursa Nilüfer'de bulunmaktadır. Diz, bel, omuz, ayak ve tüm ortopedik sorunlar için hizmet vermektedir."
      }
    }
  ]
}

export default function BursaOrtopediDoktoruPage() {
  return (
    <>
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
          <span className="text-gray-700">Bursa Ortopedi Doktoru</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Bursa Ortopedi Doktoru: Op. Dr. Özgür Oktay Nar
        </h1>

        {/* Author & Location Info */}
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
              <strong>Bursa'da ortopedi doktoru</strong> arıyorsanız, doğru yerdesiniz. Ben Op. Dr. Özgür Oktay Nar, <strong>Nilüfer</strong>'deki muayenehanemde 2013'ten bu yana Bursalılara ortopedi hizmeti veriyorum.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Osmangazi</strong>'den, <strong>Yıldırım</strong>'dan, <strong>Görükle</strong>'den, <strong>Mudanya</strong>'dan... Bursa'nın dört bir yanından hastalar geliyor. Fabrika işçileri, ofis çalışanları, ev hanımları, sporcular... Hepsinin ortak derdi: ağrı ve hareket kısıtlılığı.
            </p>
            <p className="text-gray-700 leading-relaxed">
              20 yılı aşkın klinik tecrübemle size söyleyebileceğim en önemli şey: <strong>Ameliyat her zaman çare değil.</strong> Çoğu ortopedik sorunu ameliyatsız yöntemlerle çözebiliyoruz.
            </p>
          </section>

          {/* ADIM 2: FAQ Modülü */}
          <section className="bg-blue-50 rounded-xl p-6 mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">❓ Sık Sorulan Sorular</h2>
            
            <div className="space-y-4">
              <details className="bg-white rounded-lg p-4 cursor-pointer" open>
                <summary className="font-semibold text-gray-900">Bursa'da en iyi ortopedi doktoru kim?</summary>
                <p className="mt-3 text-gray-600">
                  "En iyi" göreceli bir kavram, ama hasta memnuniyeti, deneyim ve ameliyatsız tedavi yaklaşımı açısından değerlendirildiğinde, Nilüfer'de 20+ yıllık tecrübeyle hizmet verdiğim için size yardımcı olabilirim.
                </p>
              </details>
              
              <details className="bg-white rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-gray-900">Bursa'da ortopedi muayenesi nasıl randevu alınır?</summary>
                <p className="mt-3 text-gray-600">
                  En kolay yol <strong>WhatsApp</strong>: 0552 249 39 09 numarasına mesaj atın veya arayın. Genellikle aynı hafta içinde randevu verebiliyorum.
                </p>
              </details>
              
              <details className="bg-white rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-gray-900">Nilüfer'de ortopedi kliniği var mı?</summary>
                <p className="mt-3 text-gray-600">
                  Evet, özel muayenehanem <strong>Nilüfer</strong>'de. Diz, bel, omuz, ayak ve tüm ortopedik sorunlar için hizmet veriyorum.
                </p>
              </details>
            </div>
          </section>

          {/* Tedavi Alanları */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Bursa'da Hangi Ortopedik Sorunları Tedavi Ediyorum?</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">🦵 Diz Sorunları</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Diz kireçlenmesi (gonartroz)</li>
                  <li>• Menisküs yırtığı</li>
                  <li>• Ön çapraz bağ (ACL) yaralanması</li>
                  <li>• Diz ağrısı ve şişlik</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">🔙 Bel ve Boyun</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Bel fıtığı</li>
                  <li>• Boyun fıtığı</li>
                  <li>• Kronik bel ağrısı</li>
                  <li>• Skolyoz</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">💪 Omuz</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Donuk omuz</li>
                  <li>• Rotator cuff yırtığı</li>
                  <li>• Omuz çıkığı</li>
                  <li>• Omuz sıkışma sendromu</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">🦶 Ayak ve Ayak Bileği</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Halluks valgus (şekil bozukluğu)</li>
                  <li>• Topuk dikeni</li>
                  <li>• Ayak bileği burkulması</li>
                  <li>• Düz taban</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ADIM 5: Tedavi Hiyerarşisi */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tedavi Yaklaşımım: Ameliyat Son Çare</h2>
            
            <div className="space-y-4">
              <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                <div className="flex items-center mb-2">
                  <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1</span>
                  <h3 className="text-lg font-semibold text-green-800">Konservatif Tedavi</h3>
                </div>
                <p className="text-gray-700 ml-11">
                  İlaç, fizik tedavi, egzersiz, yaşam tarzı değişiklikleri. Hastaların %60'ı bu aşamada iyileşir.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                <div className="flex items-center mb-2">
                  <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-lg font-semibold text-blue-800">Enjeksiyon Tedavileri</h3>
                </div>
                <p className="text-gray-700 ml-11">
                  PRP, hidrojel, hyaluronik asit, proloterapi. Ameliyatsız ama etkili yöntemler. %25 hasta bu aşamada çözüme kavuşur.
                </p>
              </div>
              
              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-500">
                <div className="flex items-center mb-2">
                  <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-lg font-semibold text-red-800">Cerrahi Müdahale</h3>
                </div>
                <p className="text-gray-700 ml-11">
                  Sadece diğer yöntemler işe yaramadığında. Hastaların sadece %15'inde ameliyat gerekiyor.
                </p>
              </div>
            </div>
          </section>

          {/* Neden Ben? */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Neden Beni Tercih Etmelisiniz?</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <span className="text-2xl mr-4">✅</span>
                <div>
                  <h3 className="font-semibold text-gray-900">20+ Yıl Deneyim</h3>
                  <p className="text-gray-600 text-sm">Binlerce başarılı tedavi ve ameliyat</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-2xl mr-4">✅</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Ameliyatsız Tedavi Odağı</h3>
                  <p className="text-gray-600 text-sm">Bıçak son çare, önce konservatif</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-2xl mr-4">✅</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Kolay Ulaşım</h3>
                  <p className="text-gray-600 text-sm">Nilüfer merkezi konum, otopark imkanı</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-2xl mr-4">✅</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Hızlı Randevu</h3>
                  <p className="text-gray-600 text-sm">WhatsApp ile anında iletişim</p>
                </div>
              </div>
            </div>
          </section>

          {/* ADIM 6: Klinik Tecrübe */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Bursa'dan Hastalarım</h2>
            
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">👷</span>
                  <span className="font-semibold text-gray-800">Nilüfer'den Fabrika İşçisi, 48 Yaş</span>
                </div>
                <p className="text-gray-600 mb-2">
                  <strong>Şikâyet:</strong> 5 yıldır diz ağrısı, ameliyat önerilmiş
                </p>
                <p className="text-gray-700">
                  <strong>Sonuç:</strong> Hidrojel tedavisi + fizik tedavi ile %90 iyileşme. Ameliyata gerek kalmadı.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">👩‍💼</span>
                  <span className="font-semibold text-gray-800">Osmangazi'den Öğretmen, 35 Yaş</span>
                </div>
                <p className="text-gray-600 mb-2">
                  <strong>Şikâyet:</strong> Kronik bel ağrısı, 3 ay iş göremezlik
                </p>
                <p className="text-gray-700">
                  <strong>Sonuç:</strong> PRP + egzersiz programı ile 6 haftada işe döndü.
                </p>
              </div>
            </div>
          </section>

          {/* Bursa İlçeleri */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Bursa'nın Her Yerinden Gelebilirsiniz</h2>
            <p className="text-gray-700 mb-4">
              Muayenehanem <strong>Nilüfer</strong>'de, ama Bursa'nın her ilçesinden hastalarım var:
            </p>
            <div className="flex flex-wrap gap-2">
              {['Nilüfer', 'Osmangazi', 'Yıldırım', 'Görükle', 'Mudanya', 'Gemlik', 'İnegöl', 'Kestel', 'Gürsu', 'Karacabey'].map((ilce) => (
                <span key={ilce} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {ilce}
                </span>
              ))}
            </div>
          </section>

          {/* ADIM 7: CTA */}
          <section className="bg-blue-600 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-2">Bursa'da Ortopedi Randevusu Alın</h2>
            <p className="text-blue-100 mb-2">📍 Nilüfer, Bursa</p>
            <p className="text-blue-100 mb-6">
              Ağrılarınız için önce konuşalım. Ameliyat şart değil!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/905522493909"
                className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
              >
                📱 WhatsApp: 0552 249 39 09
              </a>
              <a
                href="tel:+905522493909"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                📞 Hemen Ara
              </a>
            </div>
          </section>
        </div>
      </article>
    </>
  )
}
