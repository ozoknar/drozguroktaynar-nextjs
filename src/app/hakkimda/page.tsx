import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Hakkımda | Op. Dr. Özgür Oktay Nar - Bursa Ortopedi Uzmanı',
  description: 'Op. Dr. Özgür Oktay Nar - Bursa Nilüfer\'de ortopedi ve travmatoloji uzmanı. 20+ yıllık deneyim, ameliyatsız tedavi yaklaşımı, ayak-diz-omuz-bel tedavisi.',
  keywords: 'Op Dr Özgür Oktay Nar, Bursa ortopedi, Nilüfer ortopedi uzmanı, ortopedi doktoru, travmatoloji, ameliyatsız tedavi',
  openGraph: {
    title: 'Op. Dr. Özgür Oktay Nar | Bursa Ortopedi Uzmanı',
    description: '20+ yıllık deneyimle Bursa\'da ortopedi ve travmatoloji hizmeti. Ameliyatsız tedavi odaklı yaklaşım.',
    type: 'profile',
  },
}

// Physician Schema for E-E-A-T
const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Op. Dr. Özgür Oktay Nar",
  "image": "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2023/04/5i6a7025-1024x683.jpg",
  "description": "Ortopedi ve Travmatoloji Uzmanı",
  "medicalSpecialty": "Orthopedic Surgery",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Nilüfer",
    "addressLocality": "Bursa",
    "addressCountry": "TR"
  },
  "telephone": "+905522493909",
  "availableService": [
    "Ayak ve Ayak Bileği Cerrahisi",
    "Diz Tedavisi",
    "Omuz Tedavisi",
    "Bel ve Boyun Tedavisi",
    "Spor Yaralanmaları",
    "Ameliyatsız Tedavi"
  ],
  "alumniOf": [
    {
      "@type": "EducationalOrganization",
      "name": "19 Mayıs Üniversitesi Tıp Fakültesi"
    },
    {
      "@type": "EducationalOrganization",
      "name": "Kahramanmaraş Sütçü İmam Üniversitesi Tıp Fakültesi"
    }
  ]
}

export default function HakkimdaPage() {
  return (
    <>
      {/* Physician Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">Hakkımda</span>
        </nav>

        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Op. Dr. Özgür Oktay Nar
            </h1>
            <p className="text-xl text-blue-600 font-medium mb-4">
              Ortopedi ve Travmatoloji Uzmanı
            </p>
            <p className="text-lg text-gray-600 mb-6">
              📍 Bursa / Nilüfer
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">20+</div>
                <div className="text-sm text-gray-600">Yıl Deneyim</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">1000+</div>
                <div className="text-sm text-gray-600">Mutlu Hasta</div>
              </div>
              <div className="text-center p-4 bg-amber-50 rounded-lg">
                <div className="text-2xl font-bold text-amber-600">15+</div>
                <div className="text-sm text-gray-600">Sertifika</div>
              </div>
            </div>

            <a
              href="https://wa.me/905522493909"
              className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              📱 WhatsApp ile Randevu Al
            </a>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden">
              <img
                src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2023/04/5i6a7025-1024x683.jpg"
                alt="Op. Dr. Özgür Oktay Nar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* About Section - Geo-lokasyonlu Empatik Giriş */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Merhaba, Ben Dr. Özgür</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              <strong>Bursa'da</strong> ortopedi alanında 20 yılı aşkın süredir hastalarıma hizmet veriyorum. Nilüfer'deki muayenehanemde her gün onlarca hastayı dinliyor, muayene ediyor ve en uygun tedavi yöntemini birlikte belirliyoruz.
            </p>
            <p className="mb-4">
              1978 yılında Adana'da doğdum. Tıp eğitimimi Samsun 19 Mayıs Üniversitesi'nde tamamladım. Ortopedi ve Travmatoloji uzmanlığımı ise Kahramanmaraş Sütçü İmam Üniversitesi'nde aldım.
            </p>
            <p className="mb-4">
              2013'ten bu yana Bursa'da çalışıyorum. Öncesinde Aydın Nazilli Devlet Hastanesi'nde görev yaptım. Şu anda kendi özel muayenehanemde hasta kabul ediyorum.
            </p>
          </div>
        </section>

        {/* Treatment Philosophy - Dr. Nar Yaklaşımı */}
        <section className="bg-blue-50 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🩺 Tedavi Felsefem</h2>
          
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6">
            <p className="text-gray-800 italic text-lg">
              "Ameliyat her zaman çare değildir. Benim için öncelik, hastamı bıçak altına yatırmadan iyileştirmektir."
            </p>
            <p className="text-gray-600 mt-2">— Op. Dr. Özgür Oktay Nar</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6">
              <div className="text-3xl mb-3">🟢</div>
              <h3 className="font-semibold text-gray-900 mb-2">1. Önce Dinle</h3>
              <p className="text-gray-600 text-sm">Her hastanın hikayesi farklıdır. Muayeneden önce dinlerim, anlarım.</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="text-3xl mb-3">🔵</div>
              <h3 className="font-semibold text-gray-900 mb-2">2. Ameliyatsız Dene</h3>
              <p className="text-gray-600 text-sm">Fizik tedavi, enjeksiyon, egzersiz... Cerrahi son basamaktır.</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="text-3xl mb-3">🔴</div>
              <h3 className="font-semibold text-gray-900 mb-2">3. Takip Et</h3>
              <p className="text-gray-600 text-sm">Tedavi bitmez, takip devam eder. Her hastam için ulaşılabilirdim.</p>
            </div>
          </div>
        </section>

        {/* Education & Experience */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📚 Eğitim ve Kariyer</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
              <div>
                <h3 className="font-semibold text-gray-900">Tıp Eğitimi</h3>
                <p className="text-gray-600">19 Mayıs Üniversitesi Tıp Fakültesi, Samsun</p>
                <p className="text-sm text-gray-500">1996-2002</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
              <div>
                <h3 className="font-semibold text-gray-900">Uzmanlık Eğitimi</h3>
                <p className="text-gray-600">Kahramanmaraş Sütçü İmam Üniversitesi – Ortopedi ve Travmatoloji</p>
                <p className="text-sm text-gray-500">2003-2008</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
              <div>
                <h3 className="font-semibold text-gray-900">Nazilli Devlet Hastanesi</h3>
                <p className="text-gray-600">Uzman Hekim – Aydın</p>
                <p className="text-sm text-gray-500">2008-2013</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">✓</div>
              <div>
                <h3 className="font-semibold text-gray-900">Bursa – Özel Muayenehane</h3>
                <p className="text-gray-600">Nilüfer, Bursa</p>
                <p className="text-sm text-gray-500">2013 – Günümüz</p>
              </div>
            </div>
          </div>
        </section>

        {/* Specialties */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🏥 Uzmanlık Alanlarım</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/ayak-ve-ayak-bilegi" className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition group">
              <div className="text-3xl mb-3">🦶</div>
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">Ayak ve Ayak Bileği</h3>
              <p className="text-gray-600 text-sm mt-2">Halluks valgus, topuk dikeni, ayak bileği cerrahisi</p>
            </Link>
            
            <Link href="/diz" className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition group">
              <div className="text-3xl mb-3">🦵</div>
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">Diz</h3>
              <p className="text-gray-600 text-sm mt-2">Menisküs, çapraz bağ, kireçlenme, hidrojel tedavisi</p>
            </Link>
            
            <Link href="/omuz" className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition group">
              <div className="text-3xl mb-3">💪</div>
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">Omuz</h3>
              <p className="text-gray-600 text-sm mt-2">Donuk omuz, rotator cuff yırtığı, omuz instabilitesi</p>
            </Link>
            
            <Link href="/boyun-sirt-bel" className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition group">
              <div className="text-3xl mb-3">🔙</div>
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">Boyun – Sırt – Bel</h3>
              <p className="text-gray-600 text-sm mt-2">Bel fıtığı, boyun fıtığı, skolyoz</p>
            </Link>
            
            <Link href="/kalca" className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition group">
              <div className="text-3xl mb-3">🦴</div>
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">Kalça</h3>
              <p className="text-gray-600 text-sm mt-2">Kalça kireçlenmesi, kalça protezi</p>
            </Link>
            
            <Link href="/sporcu-sorunlari" className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition group">
              <div className="text-3xl mb-3">⚽</div>
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">Spor Yaralanmaları</h3>
              <p className="text-gray-600 text-sm mt-2">Sporcu sağlığı, sakatlık tedavisi, performans</p>
            </Link>
          </div>
        </section>

        {/* Medical Interests */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🎯 Tıbbi İlgi Alanlarım</h2>
          
          <div className="bg-gray-50 rounded-xl p-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <span>Ayak ve ayak bileği cerrahisi, Yürüme analizi, Kişiye özel tabanlık</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <span>Spor yaralanmaları ve sporcu sağlığı</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <span>Spor cerrahisi (diz ön çapraz bağ tamiri, menisküs yırtığı tamiri, omuz kuşağı lif yırtığı tamiri)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <span>Ayak bileği artroskopisi, Minimal invaziv ayak cerrahisi</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <span>Halluks Valgus (Ayak birinci parmak kemik çıkıntısı) özel cerrahisi</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <span>Ameliyatsız tedavi yöntemleri: PRP, Hidrojel, Proloterapi</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Certificates */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🏅 Sertifika ve Belgeler</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2023/04/21-x-30-cm-folyo-baski-b.jpg"
                alt="Sertifika"
                className="w-full h-full object-cover hover:scale-105 transition"
              />
            </div>
            <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2023/04/15-x-21-cm-folyo-baski.jpg"
                alt="Sertifika"
                className="w-full h-full object-cover hover:scale-105 transition"
              />
            </div>
            <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2023/04/23-x-33-cm-folyo-baski.jpg"
                alt="Sertifika"
                className="w-full h-full object-cover hover:scale-105 transition"
              />
            </div>
            <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2023/04/21-x-30-cm-folyo-baski-s.jpg"
                alt="Sertifika"
                className="w-full h-full object-cover hover:scale-105 transition"
              />
            </div>
          </div>
          
          <div className="text-center mt-6">
            <Link href="/sertifikalarim" className="text-blue-600 hover:underline">
              Tüm sertifikalarımı görüntüle →
            </Link>
          </div>
        </section>

        {/* Personal */}
        <section className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">👨‍👩‍👧‍👦 Kişisel</h2>
          <p className="text-gray-700">
            Evli ve iki çocuk babasıyım. Yabancı dilim İngilizce.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Randevu Almak İster Misiniz?</h2>
          <p className="text-blue-100 mb-2">📍 Nilüfer, Bursa</p>
          <p className="text-blue-100 mb-6">Ameliyatsız tedavi seçenekleri için beni arayın.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/905522493909"
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              📱 WhatsApp ile Ulaş
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
    </>
  )
}
