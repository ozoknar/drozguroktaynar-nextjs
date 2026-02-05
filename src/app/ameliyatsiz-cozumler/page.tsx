import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ameliyatsız Tedavi Yöntemleri | Op. Dr. Özgür Oktay Nar - Bursa',
  description: 'Bursa\'da ameliyatsız ortopedi tedavileri: PRP, hidrojel, proloterapi, ozon terapi. Diz kireçlenmesi, bel fıtığı, omuz ağrısına cerrahi dışı çözümler.',
  keywords: 'ameliyatsız tedavi, PRP tedavisi, hidrojel tedavisi, proloterapi, ozon terapi, Bursa ameliyatsız ortopedi, diz kireçlenmesi tedavisi',
  openGraph: {
    title: 'Ameliyatsız Tedavi Yöntemleri | Bursa Ortopedi',
    description: 'Ameliyata alternatif modern tedavi yöntemleri. Diz, bel, omuz ağrılarına cerrahi dışı çözümler.',
    type: 'website',
  },
}

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Ameliyatsız tedavi gerçekten işe yarıyor mu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Evet, hastaların %85'i ameliyatsız yöntemlerle iyileşiyor. PRP, hidrojel, proloterapi gibi yöntemler bilimsel olarak kanıtlanmış ve etkili tedavilerdir."
      }
    },
    {
      "@type": "Question",
      "name": "PRP tedavisi ne kadar sürer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "PRP uygulaması yaklaşık 30-45 dakika sürer. Genellikle 3-4 seans önerilir, seanslar arası 1-2 hafta beklenir. Etki 3-6 ay içinde ortaya çıkar."
      }
    },
    {
      "@type": "Question",
      "name": "Hidrojel tedavisi diz kireçlenmesinde etkili mi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Evet, hidrojel (poliakrilamid) tedavisi özellikle erken-orta evre diz kireçlenmesinde çok etkilidir. Tek seansta yapılır ve etkisi 2-4 yıl sürebilir."
      }
    }
  ]
}

export default function AmeliyatsizCozumlerPage() {
  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">Ameliyatsız Çözümler</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Ameliyatsız Tedavi Yöntemleri: Bursa'da Cerrahi Dışı Ortopedi
        </h1>

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
              <strong>Bursa'da</strong> muayenehaneme gelen hastaların büyük çoğunluğu aynı korkuyla geliyor: <em>"Doktor bey, ameliyat olmak istemiyorum."</em>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nilüfer'deki kliniğimde 20 yılı aşkın süredir hastalarımı dinliyorum ve size güzel bir haber verebilirim: <strong>Çoğu ortopedik sorun ameliyatsız çözülebilir.</strong>
            </p>
            <p className="text-gray-700 leading-relaxed">
              Modern tıp, rejeneratif tedaviler sayesinde inanılmaz yol katetti. PRP, hidrojel, proloterapi, ozon terapi... Bu yöntemler sayesinde eskiden ameliyat gerektiren birçok sorunu artık enjeksiyonlarla tedavi edebiliyoruz.
            </p>
          </section>

          {/* ADIM 2: FAQ Modülü */}
          <section className="bg-blue-50 rounded-xl p-6 mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">❓ En Çok Sorulan 3 Soru</h2>
            
            <div className="space-y-4">
              <details className="bg-white rounded-lg p-4 cursor-pointer" open>
                <summary className="font-semibold text-gray-900">Ameliyatsız tedavi gerçekten işe yarıyor mu?</summary>
                <p className="mt-3 text-gray-600">
                  Evet! Hastaların <strong>%85'i ameliyatsız yöntemlerle iyileşiyor</strong>. Bu tedaviler bilimsel olarak kanıtlanmış, dünya genelinde uygulanan modern yöntemlerdir.
                </p>
              </details>
              
              <details className="bg-white rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-gray-900">PRP tedavisi ne kadar sürer?</summary>
                <p className="mt-3 text-gray-600">
                  Tek seans <strong>30-45 dakika</strong>. Genellikle 3-4 seans önerilir, seanslar arası 1-2 hafta beklenir. Tam etki 3-6 ayda ortaya çıkar.
                </p>
              </details>
              
              <details className="bg-white rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-gray-900">Hidrojel tedavisi diz kireçlenmesinde etkili mi?</summary>
                <p className="mt-3 text-gray-600">
                  Kesinlikle! Özellikle erken-orta evre kireçlenmede <strong>çok etkili</strong>. Tek seansta yapılır, etkisi <strong>2-4 yıl</strong> sürebilir.
                </p>
              </details>
            </div>
          </section>

          {/* İçindekiler */}
          <div className="bg-gray-50 rounded-xl p-6 mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">📑 İçindekiler</h2>
            <ul className="space-y-2">
              <li><a href="#neden-ameliyatsiz" className="text-blue-600 hover:underline">Neden Ameliyatsız Tedavi?</a></li>
              <li><a href="#prp" className="text-blue-600 hover:underline">PRP Tedavisi</a></li>
              <li><a href="#hidrojel" className="text-blue-600 hover:underline">Hidrojel Tedavisi</a></li>
              <li><a href="#proloterapi" className="text-blue-600 hover:underline">Proloterapi</a></li>
              <li><a href="#ozon" className="text-blue-600 hover:underline">Ozon Terapi</a></li>
              <li><a href="#hangi-hastaliklar" className="text-blue-600 hover:underline">Hangi Hastalıklarda Uygulanır?</a></li>
              <li><a href="#tedavi-sureci" className="text-blue-600 hover:underline">Tedavi Süreci</a></li>
            </ul>
          </div>

          {/* ADIM 4: Dr. Nar Analojisi */}
          <section id="neden-ameliyatsiz" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Neden Ameliyatsız Tedavi?</h2>
            
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6">
              <p className="text-gray-800 italic mb-4">
                "Hastalara şöyle anlatıyorum..."
              </p>
              <p className="text-gray-800 leading-relaxed">
                Vücudunuz bir <strong>araba</strong> gibi düşünün. Eklemleriniz arabanın süspansiyonu. Yıllar geçtikçe aşınıyor, yıpranıyor. Şimdi iki seçeneğiniz var:
              </p>
              <ul className="mt-3 space-y-2 text-gray-800">
                <li>🔧 <strong>Tamir:</strong> Süspansiyonu söküp yeniden takarsınız (ameliyat)</li>
                <li>🛢️ <strong>Bakım:</strong> Kaliteli yağ ekler, parçaları yenilersiniz (ameliyatsız tedavi)</li>
              </ul>
              <p className="text-gray-800 leading-relaxed mt-3">
                Çoğu zaman düzenli bakım, büyük tamirden daha mantıklıdır. Vücudunuz için de öyle.
              </p>
            </div>
          </section>

          {/* PRP */}
          <section id="prp" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">💉 PRP Tedavisi (Trombositten Zengin Plazma)</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Nedir?</h3>
                <p className="text-gray-700">
                  Kendi kanınızdan elde edilen, iyileştirici faktörler bakımından zengin plazma. Vücudun doğal tamir mekanizmasını hızlandırır.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Nasıl Uygulanır?</h3>
                <p className="text-gray-700">
                  Kolunuzdan alınan kan santrifüjlenir, trombositten zengin kısım ayrıştırılır ve ağrılı bölgeye enjekte edilir.
                </p>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">✓ Hangi Durumlarda Etkili?</h4>
              <ul className="text-green-700 space-y-1 text-sm">
                <li>• Diz kireçlenmesi (gonartroz)</li>
                <li>• Tendon yaralanmaları</li>
                <li>• Spor sakatlıkları</li>
                <li>• Omuz lif yırtıkları</li>
                <li>• Plantar fasiit (topuk dikeni)</li>
              </ul>
            </div>
          </section>

          {/* Hidrojel */}
          <section id="hidrojel" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">💧 Hidrojel Tedavisi (Sıvı Protez)</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Nedir?</h3>
                <p className="text-gray-700">
                  Poliakrilamid bazlı, jel kıvamında bir madde. Eklem içine enjekte edildiğinde doğal eklem sıvısı gibi davranır.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Avantajları</h3>
                <p className="text-gray-700">
                  Tek seansta yapılır, etkisi 2-4 yıl sürer. "Sıvı protez" olarak da bilinir.
                </p>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">✓ Özellikle Etkili Olduğu Durumlar</h4>
              <ul className="text-blue-700 space-y-1 text-sm">
                <li>• Erken-orta evre diz kireçlenmesi</li>
                <li>• Kalça kireçlenmesi</li>
                <li>• Protez ameliyatını ertelemek isteyenler</li>
              </ul>
            </div>
          </section>

          {/* Proloterapi */}
          <section id="proloterapi" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🧬 Proloterapi</h2>
            
            <p className="text-gray-700 mb-4">
              Dekstroz (şeker) solüsyonunun zayıflamış bağ, tendon veya eklem kapsülüne enjekte edilmesidir. Kontrollü bir iltihap yaratarak vücudun tamir mekanizmasını tetikler.
            </p>
            
            <div className="bg-purple-50 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">✓ Endikasyonlar</h4>
              <ul className="text-purple-700 space-y-1 text-sm">
                <li>• Kronik bel ağrısı</li>
                <li>• Boyun ağrısı</li>
                <li>• Bağ gevşekliği</li>
                <li>• Spor yaralanmaları</li>
              </ul>
            </div>
          </section>

          {/* Ozon */}
          <section id="ozon" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">☁️ Ozon Terapi</h2>
            
            <p className="text-gray-700 mb-4">
              Medikal ozon gazının eklem içine veya kas içine enjekte edilmesidir. Antiinflamatuar ve ağrı kesici etkileri vardır.
            </p>
            
            <div className="bg-cyan-50 rounded-lg p-4">
              <h4 className="font-semibold text-cyan-800 mb-2">✓ Kullanım Alanları</h4>
              <ul className="text-cyan-700 space-y-1 text-sm">
                <li>• Bel fıtığı</li>
                <li>• Boyun fıtığı</li>
                <li>• Kas ağrıları</li>
                <li>• Eklem iltihapları</li>
              </ul>
            </div>
          </section>

          {/* Hangi Hastalıklarda */}
          <section id="hangi-hastaliklar" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ameliyatsız Tedavi Hangi Hastalıklarda Uygulanır?</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">🦵 Diz</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Diz kireçlenmesi</li>
                  <li>• Menisküs yırtıkları (bazı tipler)</li>
                  <li>• Kondromalazi patella</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">🔙 Bel-Boyun</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Bel fıtığı (bazı evreler)</li>
                  <li>• Boyun fıtığı</li>
                  <li>• Kronik bel ağrısı</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">💪 Omuz</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Donuk omuz</li>
                  <li>• Rotator cuff tendinopatisi</li>
                  <li>• Omuz sıkışma sendromu</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">🦶 Ayak</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Topuk dikeni</li>
                  <li>• Plantar fasiit</li>
                  <li>• Aşil tendonu sorunları</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ADIM 5: Tedavi Hiyerarşisi */}
          <section id="tedavi-sureci" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tedavi Süreci Nasıl İşliyor?</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Muayene ve Değerlendirme</h3>
                  <p className="text-gray-600">Fizik muayene, gerekirse MR veya röntgen. Sorununuzun kaynağını belirliyoruz.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Tedavi Planı</h3>
                  <p className="text-gray-600">Size en uygun ameliyatsız yöntemi belirliyoruz: PRP, hidrojel, proloterapi...</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Uygulama</h3>
                  <p className="text-gray-600">Muayenehanede, lokal anestezi ile. Aynı gün eve dönebilirsiniz.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Takip</h3>
                  <p className="text-gray-600">Düzenli kontroller. Gerekirse ek seanslar. Fizik tedavi desteği.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ADIM 6: Klinik Tecrübe */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Klinikten Başarı Hikayeleri</h2>
            
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">👨‍🦳</span>
                  <span className="font-semibold text-gray-800">Emekli Memur, 62 Yaş, Diz Kireçlenmesi</span>
                </div>
                <p className="text-gray-600 mb-2">
                  <strong>Sorun:</strong> Her iki dizde ileri kireçlenme, protez önerilmiş
                </p>
                <p className="text-gray-700">
                  <strong>Tedavi:</strong> Hidrojel enjeksiyonu
                </p>
                <p className="text-green-700 font-medium">
                  <strong>Sonuç:</strong> 3 yıldır protez olmadan yürüyor, ağrısız.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">⚽</span>
                  <span className="font-semibold text-gray-800">Amatör Futbolcu, 28 Yaş, Diz Ağrısı</span>
                </div>
                <p className="text-gray-600 mb-2">
                  <strong>Sorun:</strong> Kondromalazi patella, sporu bırakmayı düşünüyordu
                </p>
                <p className="text-gray-700">
                  <strong>Tedavi:</strong> PRP (3 seans)
                </p>
                <p className="text-green-700 font-medium">
                  <strong>Sonuç:</strong> 2 ay sonra sahaya döndü.
                </p>
              </div>
            </div>
          </section>

          {/* ADIM 7: CTA */}
          <section className="bg-blue-600 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-2">Ameliyatsız Tedavi Sizin İçin Uygun mu?</h2>
            <p className="text-blue-100 mb-2">📍 Nilüfer, Bursa</p>
            <p className="text-blue-100 mb-6">
              Önce muayene, sonra karar. Ameliyat her zaman çare değil!
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
