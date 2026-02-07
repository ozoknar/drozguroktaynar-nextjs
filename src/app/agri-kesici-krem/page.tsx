import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Ağrı Kesici Krem: Bursa'da Eklem ve Kas Ağrılarına Etkili Çözüm | Op. Dr. Özgür Oktay Nar",
  description: "Bursa Nilüfer'de ortopedi uzmanı Dr. Özgür Oktay Nar rehberliğinde ağrı kesici kremler hakkında bilmeniz gerekenler. Diz, bel, boyun ağrılarına ameliyatsız çözümler.",
  keywords: "ağrı kesici krem, Bursa ortopedi, kas ağrısı kremi, eklem ağrısı, diz ağrısı kremi, bel ağrısı kremi, ameliyatsız tedavi, Nilüfer ortopedi",
  openGraph: {
    title: "Ağrı Kesici Krem: Eklem ve Kas Ağrılarına Pratik Çözüm | Bursa",
    description: "Ortopedi uzmanı Dr. Özgür Oktay Nar rehberliğinde ağrı kesici kremler hakkında her şey. Ameliyatsız tedavi seçenekleri.",
    type: 'article',
  },
}

// FAQ Schema for Google Rich Snippets
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Ağrı kesici krem ne kadar sürede etki eder?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Çoğu ağrı kesici krem 15-30 dakika içinde etkisini göstermeye başlar. Ancak bu süre kremin içeriğine, uygulandığı bölgeye ve kişinin cilt yapısına göre değişebilir. Düzenli kullanımda daha kalıcı sonuçlar alınır."
      }
    },
    {
      "@type": "Question",
      "name": "Diz ağrısı için hangi krem kullanılmalı?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Diz ağrılarında diklofenak sodyum veya ketoprofen içeren kremler en etkili seçeneklerdir. Kireçlenme kaynaklı ağrılarda anti-inflamatuar içerikli, spor yaralanmalarında ise mentol-kampfer kombinasyonlu kremler tercih edilebilir."
      }
    },
    {
      "@type": "Question",
      "name": "Ağrı kesici krem tek başına yeterli mi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ağrı kesici kremler geçici rahatlama sağlar ancak ağrının kaynağını tedavi etmez. Kronik ağrılarda mutlaka bir ortopedi uzmanına başvurulmalıdır. Krem kullanımı, fizik tedavi veya enjeksiyon tedavileriyle desteklendiğinde çok daha etkili sonuçlar verir."
      }
    }
  ]
}

export default function AgriKesiciKremPage() {
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
          <Link href="/" className="hover:text-[#01CAB8]">Ana Sayfa</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">Ağrı Kesici Krem</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Ağrı Kesici Krem: Bursa'da Eklem ve Kas Ağrılarına Etkili Çözüm
        </h1>

        {/* Author Info - E-E-A-T */}
        <div className="flex items-center text-sm text-gray-500 mb-8 pb-6 border-b">
          <span className="font-medium text-gray-700">Op. Dr. Özgür Oktay Nar</span>
          <span className="mx-2">•</span>
          <span>Ortopedi ve Travmatoloji Uzmanı</span>
          <span className="mx-2">•</span>
          <span>Bursa / Nilüfer</span>
        </div>

        <div className="prose prose-lg max-w-none">
          
          {/* ADIM 1: Geo-Lokasyonlu Empatik Giriş */}
          <section className="mb-10">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Bursa ve çevresinde</strong> yaşayan pek çok hastam, özellikle kış aylarında kapıma aynı şikâyetle geliyor: <em>"Doktor bey, dizlerim ağrıyor, belim tutmuş, boynum kasılmış... Ne yapabilirim?"</em>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nilüfer'deki muayenehanemde her gün onlarca hastayı dinliyorum. Masa başında çalışan mühendisler, fabrikada vardiya yapan işçiler, ev işleriyle uğraşan anneler, spor yaparken sakatlanmış gençler... Hepsinin ortak noktası: <strong>ağrı</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed">
              İşte bu noktada <strong>ağrı kesici kremler</strong> devreye giriyor. Doğru kullanıldığında, ameliyata gerek kalmadan günlük yaşamınıza dönmenizi sağlayan pratik bir çözüm. Ama hangi krem, hangi ağrıya? İşte bu yazıda 20 yıllık klinik tecrübemle size rehberlik edeceğim.
            </p>
          </section>

          {/* ADIM 2: FAQ Modülü - Google Snippet için */}
          <section className="bg-[#E6FAF8] rounded-xl p-6 mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">❓ En Çok Sorulan 3 Soru</h2>
            
            <div className="space-y-4">
              <details className="bg-white rounded-lg p-4 cursor-pointer" open>
                <summary className="font-semibold text-gray-900">Ağrı kesici krem ne kadar sürede etki eder?</summary>
                <p className="mt-3 text-gray-600">
                  Çoğu ağrı kesici krem <strong>15-30 dakika</strong> içinde etkisini göstermeye başlar. Ancak bu süre kremin içeriğine, uygulandığı bölgeye ve kişinin cilt yapısına göre değişebilir. Düzenli kullanımda daha kalıcı sonuçlar alınır.
                </p>
              </details>
              
              <details className="bg-white rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-gray-900">Diz ağrısı için hangi krem kullanılmalı?</summary>
                <p className="mt-3 text-gray-600">
                  Diz ağrılarında <strong>diklofenak sodyum</strong> veya <strong>ketoprofen</strong> içeren kremler en etkili seçeneklerdir. Kireçlenme kaynaklı ağrılarda anti-inflamatuar içerikli, spor yaralanmalarında ise mentol-kampfer kombinasyonlu kremler tercih edilebilir.
                </p>
              </details>
              
              <details className="bg-white rounded-lg p-4 cursor-pointer">
                <summary className="font-semibold text-gray-900">Ağrı kesici krem tek başına yeterli mi?</summary>
                <p className="mt-3 text-gray-600">
                  Ağrı kesici kremler geçici rahatlama sağlar ancak <strong>ağrının kaynağını tedavi etmez</strong>. Kronik ağrılarda mutlaka bir ortopedi uzmanına başvurulmalıdır. Krem kullanımı, fizik tedavi veya enjeksiyon tedavileriyle desteklendiğinde çok daha etkili sonuçlar verir.
                </p>
              </details>
            </div>
          </section>

          {/* İçindekiler */}
          <div className="bg-gray-50 rounded-xl p-6 mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">📑 İçindekiler</h2>
            <ul className="space-y-2">
              <li><a href="#nedir" className="text-[#01CAB8] hover:underline">Ağrı Kesici Krem Nedir?</a></li>
              <li><a href="#nasil-calisir" className="text-[#01CAB8] hover:underline">Nasıl Çalışır? (Dr. Nar Anlatıyor)</a></li>
              <li><a href="#tedavi-hiyerarsisi" className="text-[#01CAB8] hover:underline">Tedavi Hiyerarşisi: Krem mi, Enjeksiyon mu, Ameliyat mı?</a></li>
              <li><a href="#diz-agrisi" className="text-[#01CAB8] hover:underline">Diz Ağrısı İçin Krem Önerileri</a></li>
              <li><a href="#bel-boyun" className="text-[#01CAB8] hover:underline">Bel ve Boyun Ağrısına İyi Gelen Kremler</a></li>
              <li><a href="#dikkat" className="text-[#01CAB8] hover:underline">Dikkat Edilmesi Gerekenler</a></li>
              <li><a href="#klinik-tecrube" className="text-[#01CAB8] hover:underline">Klinikten Örnekler</a></li>
            </ul>
          </div>

          {/* ADIM 3: Halk Dilinde Tanım */}
          <section id="nedir" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ağrı Kesici Krem Nedir?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ağrı kesici krem, <strong>deriye sürülerek kullanılan</strong> ve ağrıyı hafifletmeye yarayan bir ilaç türüdür. Hap gibi yutmadığınız için mideyi yormaz, doğrudan ağrıyan bölgeye etki eder.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              İçindeki etkin maddeler ciltten emilerek kaslarınıza ve eklemlerinize ulaşır. Orada ağrı sinyallerini azaltır, iltihabı söndürür ve kan dolaşımını hızlandırır.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Özellikle şu durumlarda etkilidir: spor yaralanmaları, kas tutulmaları, eklem sertliği, burkulma ve incinmeler.
            </p>
          </section>

          {/* ADIM 4: Dr. Nar Analojisi (Mekanik Benzetmeler) */}
          <section id="nasil-calisir" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nasıl Çalışır? (Dr. Nar Anlatıyor)</h2>
            
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6">
              <p className="text-gray-700 italic mb-4">
                "Hastalara genellikle şöyle anlatıyorum..."
              </p>
              <p className="text-gray-800 leading-relaxed">
                Vücudunuzu bir <strong>araba</strong> gibi düşünün. Eklemleriniz arabanın menteşeleri, kaslarınız motorun pistonları. Bir yerde sürtünme olduğunda, menteşe gıcırdamaya başlar — bu sizin ağrınız.
              </p>
              <p className="text-gray-800 leading-relaxed mt-3">
                Ağrı kesici krem de o menteşeye sürülen <strong>yağ</strong> gibidir. Sürtünmeyi azaltır, gıcırtıyı keser. Ama dikkat: Menteşe eğrilmişse, sadece yağlamak yetmez — o zaman tamirciye (doktora) gitmeniz gerekir.
              </p>
            </div>
            
            <p className="text-gray-700 leading-relaxed">
              Bu benzetme, kremlerin neden "geçici çözüm" olduğunu da açıklıyor. Yağ, menteşeyi bir süre rahatlatır ama asıl sorunu (kireçlenme, yırtık, fıtık) çözmez. O yüzden <strong>kronik ağrılarda mutlaka uzman muayenesi</strong> şart.
            </p>
          </section>

          {/* ADIM 5: Tedavi Hiyerarşisi */}
          <section id="tedavi-hiyerarsisi" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tedavi Hiyerarşisi: Adım Adım Yaklaşım</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Ortopedi pratiğinde <strong>"en az müdahale, en çok fayda"</strong> ilkesiyle hareket ederiz. İşte tedavi basamakları:
            </p>
            
            <div className="space-y-4">
              {/* Basamak 1 */}
              <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                <div className="flex items-center mb-2">
                  <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1</span>
                  <h3 className="text-lg font-semibold text-green-800">Koruma & Krem Tedavisi</h3>
                </div>
                <p className="text-gray-700 ml-11">
                  İlk tercih her zaman <strong>ameliyatsız yöntemler</strong>dir. Ağrı kesici kremler, buz/sıcak uygulama, istirahat ve egzersiz. Hafif-orta şiddetteki ağrıların %70'i bu basamakta çözülür.
                </p>
              </div>
              
              {/* Basamak 2 */}
              <div className="bg-[#E6FAF8] rounded-xl p-6 border-l-4 border-[#1AD2C4]">
                <div className="flex items-center mb-2">
                  <span className="bg-[#1AD2C4] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2</span>
                  <h3 className="text-lg font-semibold text-[#01867A]">Rejeneratif Tedaviler</h3>
                </div>
                <p className="text-gray-700 ml-11">
                  Krem yetmezse; PRP (trombositten zengin plazma), hidrojel enjeksiyonu, proloterapi gibi <strong>dokuyu yenileyen</strong> tedaviler devreye girer. Ameliyat değil, enjeksiyon. Etki 6-12 ay sürer.
                </p>
              </div>
              
              {/* Basamak 3 */}
              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-500">
                <div className="flex items-center mb-2">
                  <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">3</span>
                  <h3 className="text-lg font-semibold text-red-800">Cerrahi Müdahale</h3>
                </div>
                <p className="text-gray-700 ml-11">
                  Sadece <strong>diğer yöntemler başarısız olduğunda</strong> ameliyat düşünülür. Modern ortopedide hedef, hastayı bıçak altına yatırmadan iyileştirmektir. Ameliyat son çare, ilk tercih değil.
                </p>
              </div>
            </div>
          </section>

          {/* Diz Ağrısı */}
          <section id="diz-agrisi" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Diz Ağrısı İçin Krem Önerileri</h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Diz, vücudun en çok yük taşıyan eklemidir. Özellikle <strong>Bursa gibi sanayi şehirlerinde</strong>, uzun süre ayakta çalışan fabrika işçileri ve merdiven inen-çıkan ev hanımları sıklıkla diz ağrısından muzdariptir.
            </p>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Etkili İçerikler</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800">💊 Diklofenak Sodyum</h4>
                  <p className="text-gray-600 text-sm mt-1">Kireçlenme kaynaklı ağrılarda en etkili. İltihap söndürücü.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800">💊 Ketoprofen</h4>
                  <p className="text-gray-600 text-sm mt-1">Romatizmal ağrılarda tercih edilir. Hızlı emilir.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800">🌿 Mentol + Kampfer</h4>
                  <p className="text-gray-600 text-sm mt-1">Serinletici etki. Spor sonrası kas ağrılarında ideal.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800">🌶️ Kapsaisin</h4>
                  <p className="text-gray-600 text-sm mt-1">Acı biberden elde edilir. Sinir uçlarını uyuşturur.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Bel-Boyun */}
          <section id="bel-boyun" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Bel ve Boyun Ağrısına İyi Gelen Kremler</h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Bursa'da özellikle <strong>Organize Sanayi Bölgesi</strong>'nde çalışan hastaların büyük bölümü masa başı veya montaj hattında uzun saatler geçiriyor. Sonuç: boyun tutulması, bel kasılması.
            </p>
            
            <div className="bg-green-50 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">✓ Önerilen İçerikler</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>Etofenamat:</strong> Kas ve yumuşak doku kaynaklı ağrılarda etkili</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>Ibuprofen Jel:</strong> Kasların sertliğini azaltır, iltihap giderir</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>Arnika Özü:</strong> Doğal anti-inflamatuar, morarmalarda etkili</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span><strong>Okaliptüs Yağı:</strong> Isıtıcı etki, kan dolaşımını artırır</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Dikkat */}
          <section id="dikkat" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Dikkat Edilmesi Gerekenler</h2>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
              <h3 className="text-lg font-semibold text-red-800 mb-3">⚠️ Önemli Uyarılar</h3>
              <ul className="space-y-2 text-red-700">
                <li>• <strong>Açık yaraya</strong> asla uygulamayın</li>
                <li>• <strong>Göz ve ağız</strong> çevresinden uzak tutun</li>
                <li>• Uyguladıktan sonra <strong>eli yıkayın</strong></li>
                <li>• <strong>2 haftadan uzun</strong> kullanımda doktora danışın</li>
                <li>• <strong>Hamilelik ve emzirme</strong> döneminde dikkatli olun</li>
                <li>• <strong>Alerji geçmişi</strong> varsa önce küçük alanda test edin</li>
              </ul>
            </div>
          </section>

          {/* ADIM 6: Klinik Tecrübe (Anonim Örnekler) */}
          <section id="klinik-tecrube" className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Klinikten Gerçek Örnekler</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">👷</span>
                  <span className="font-semibold text-gray-800">Vaka 1: Fabrika İşçisi, 45 Yaş</span>
                </div>
                <p className="text-gray-600 mb-2">
                  <strong>Şikâyet:</strong> Diz ağrısı, merdiven inip çıkarken zorlanma
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Tedavi:</strong> Diklofenak krem (sabah-akşam) + diz egzersizleri
                </p>
                <p className="text-gray-700">
                  <strong>Sonuç:</strong> 3 haftada %80 iyileşme. Ameliyata gerek kalmadı.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">💼</span>
                  <span className="font-semibold text-gray-800">Vaka 2: Ofis Çalışanı, 32 Yaş</span>
                </div>
                <p className="text-gray-600 mb-2">
                  <strong>Şikâyet:</strong> Kronik boyun ağrısı, baş dönmesi
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Tedavi:</strong> Mentol-kampferli krem + duruş düzeltme egzersizleri + ergonomik sandalye
                </p>
                <p className="text-gray-700">
                  <strong>Sonuç:</strong> 2 haftada tamamen düzeldi.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">⚽</span>
                  <span className="font-semibold text-gray-800">Vaka 3: Amatör Futbolcu, 28 Yaş</span>
                </div>
                <p className="text-gray-600 mb-2">
                  <strong>Şikâyet:</strong> Maç sonrası baldır ağrısı, sertlik
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Tedavi:</strong> Kapsaisinli krem + soğuk-sıcak uygulama
                </p>
                <p className="text-gray-700">
                  <strong>Sonuç:</strong> 5 günde sahaya döndü.
                </p>
              </div>
            </div>
          </section>

          {/* ADIM 7: Güven Veren Kapanış & CTA */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sonuç: Ameliyat Her Zaman Çare Değil</h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              20 yıllık meslek hayatımda binlerce hastayı <strong>ameliyatsız</strong> tedavi ettim. Ağrı kesici kremler, fizik tedavi, enjeksiyonlar ve egzersizler çoğu zaman bıçaktan daha etkili.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ama şunu da unutmayın: Krem sadece bir <strong>ilk adım</strong>. Ağrı 2 haftadan uzun sürüyorsa, şiddetleniyorsa veya hareket kısıtlılığı varsa mutlaka bir uzmana başvurun.
            </p>
            <p className="text-gray-700 leading-relaxed font-medium">
              Bursa'da veya çevresindeyseniz, muayenehaneme beklerim. Birlikte en doğru tedavi yolunu belirleyelim.
            </p>
          </section>

          {/* CTA */}
          <div className="bg-[#01CAB8] text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-2">Ağrılarınız İçin Uzman Desteği Alın</h3>
            <p className="text-blue-100 mb-2">
              📍 Nilüfer, Bursa
            </p>
            <p className="text-blue-100 mb-6">
              Ameliyatsız tedavi seçenekleri için randevu alın.
            </p>
            <a
              href="https://wa.me/905522493909"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition inline-block"
            >
              📱 WhatsApp ile Randevu Al
            </a>
            <p className="text-blue-200 text-sm mt-4">
              veya arayın: <a href="tel:+905522493909" className="underline">0552 249 39 09</a>
            </p>
          </div>
        </div>
      </article>
    </>
  )
}
