import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Aşil Tendonu Yırtığı Nasıl Tedavi Edilir? Ameliyatlı ve Ameliyatsız | Op. Dr. Özgür Oktay Nar',
  description: 'Aşil tendonu yırtığı tedavisi: konservatif (alçı/bot), açık cerrahi, minimal invaziv onarım ve rehabilitasyon. Aşil yırtığı iyileşme süreci.',
  keywords: 'aşil tendonu yırtığı, aşil yırtığı tedavisi, aşil kopması, ameliyatsız aşil, aşil cerrahisi, achilles tendon rupture, achilles tendinit',
  authors: [{ name: 'Op. Dr. Özgür Oktay Nar' }],
  openGraph: {
    title: 'Aşil Tendonu Yırtığı Nasıl Tedavi Edilir? Ameliyatlı ve Ameliyatsız',
    description: 'Aşil tendonu yırtığı tedavisi: konservatif (alçı/bot), açık cerrahi, minimal invaziv onarım ve rehabilitasyon. Aşil yırtığı iyileşme süreci.',
    type: 'article',
    locale: 'tr_TR',
    url: 'https://www.ozguroktaynar.com/blog/asil-tendonu-yirtigi-nasil-tedavi-edilir-2',
    siteName: 'Op. Dr. Özgür Oktay Nar',
    images: [
      {
        url: 'https://placehold.co/1200x630/e2e8f0/475569?text=Asil+Tendon+Yirtigi',
        width: 1200,
        height: 630,
        alt: 'Aşil tendonu yırtığı tedavisi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aşil Tendonu Yırtığı Nasıl Tedavi Edilir? Ameliyatlı ve Ameliyatsız',
    description: 'Aşil tendonu yırtığı tedavisi: konservatif (alçı/bot), açık cerrahi, minimal invaziv onarım ve rehabilitasyon. Aşil yırtığı iyileşme süreci.',
    images: ['https://placehold.co/1200x630/e2e8f0/475569?text=Asil+Tendon+Yirtigi'],
  },
  alternates: {
    canonical: 'https://www.ozguroktaynar.com/blog/asil-tendonu-yirtigi-nasil-tedavi-edilir-2',
  },
};

export default function BlogPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': 'https://www.ozguroktaynar.com/blog/asil-tendonu-yirtigi-nasil-tedavi-edilir-2#webpage',
        url: 'https://www.ozguroktaynar.com/blog/asil-tendonu-yirtigi-nasil-tedavi-edilir-2',
        name: 'Aşil Tendonu Yırtığı Nasıl Tedavi Edilir? Ameliyatlı ve Ameliyatsız',
        description: 'Aşil tendonu yırtığı tedavisi: konservatif (alçı/bot), açık cerrahi, minimal invaziv onarım ve rehabilitasyon. Aşil yırtığı iyileşme süreci.',
        datePublished: '2025-01-25T10:00:00+03:00',
        dateModified: '2025-01-25T10:00:00+03:00',
        inLanguage: 'tr-TR',
        author: {
          '@type': 'Physician',
          name: 'Op. Dr. Özgür Oktay Nar',
          url: 'https://www.ozguroktaynar.com',
          specialty: 'Ortopedi ve Travmatoloji',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Op. Dr. Özgür Oktay Nar',
          url: 'https://www.ozguroktaynar.com',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#01CAB8]">Ana Sayfa</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-[#01CAB8]">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">Aşil Tendonu Yırtığı Nasıl Tedavi Edilir?</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Aşil Tendonu Yırtığı Nasıl Tedavi Edilir? Ameliyatlı ve Ameliyatsız Seçenekler</h1>
          <div className="flex items-center text-gray-600 text-sm mb-6">
            <span>Op. Dr. Özgür Oktay Nar</span>
            <span className="mx-2">•</span>
            <time>25 Ocak 2025</time>
          </div>
          <img
            src="https://www.drozguroktaynar.com/wp-content/uploads/2026/02/Asil-Tendonu-Yirtigi-Nasil-Tedavi-Edilir.webp"
            alt="Aşil tendonu yırtığı tedavisi"
            className="w-full rounded-xl shadow-lg"
          />
        </header>

        {/* Main Content - 7 STEP ARCHITECTURE */}
        <div className="prose prose-lg max-w-none">
          
          {/* Section 1: Giriş */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Giriş</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tenis oynarken, koşarken veya ani bir hareket sırasında bacağınızın arkasından bir "pop" sesi geldiğini duyduysanız, sanki birisi arkadan tekme atmış gibi hissettiyseniz ve ardından topallama başladıysa, muhtemelen Aşil tendonu yırtığı yaşadınız. Aşil tendonu, vücudumuzun en kalın ve en güçlü tendonu olmasına rağmen, spor yaralanmalarında sıkça görülür.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Bu yazıda Aşil tendonu yırtığının ne olduğunu, nasıl teşhis edildiğini ve en önemlisi, hem ameliyatlı hem de ameliyatsız tedavi seçeneklerini detaylı olarak ele alacağız. Hangi tedavi yöntemi size uygundur, iyileşme süreci nasıl işler ve spora güvenli dönüş için neler yapmalısınız gibi soruların yanıtlarını bulacaksınız.
            </p>
          </section>

          {/* Section 2: Aşil Tendonu Yırtığı Nedir? */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Aşil Tendonu Yırtığı Nedir?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Aşil tendonu, baldır kaslarını (gastroknemius ve soleus) topuk kemiğine (kalkaneus) bağlayan, yaklaşık 15 cm uzunluğunda, güçlü, fibröz bir yapıdır. Yürüme, koşma, zıplama gibi ayak bileği itme (plantar fleksiyon) hareketlerinde kritik rol oynar.
            </p>

            <div className="bg-[#E6FAF8] p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Yırtık Tipleri</h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong>Kısmi Yırtık:</strong> Tendonun bir kısmının zarar görmesi. Ağrı vardır ancak itme gücü korunabilir. Tanısı zor olabilir.
                </li>
                <li>
                  <strong>Tam Kat Yırtık (Rüptür):</strong> Tendonun tamamen kopması. Genellikle topuk kemiğinden 2-6 cm yukarıda, tendonda kan akımının zayıf olduğu bölgede görülür.
                </li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Sıklık ve Risk Faktörleri:</strong> Aşil tendonu yırtığı, en sık 30-50 yaş arası, "hafta sonu savaşçısı" olarak adlandırılan, düzensiz spor yapan erkeklerde görülür. 
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>• <strong>Spor aktivitesi:</strong> Tenis, basketbol, futbol, squash, koşu (ani hızlanma/yavaşlama, sıçrama)</li>
              <li>• <strong>Yaş:</strong> Tendon elastikiyeti 30 yaş sonrası azalmaya başlar</li>
              <li>• <strong>Cinsiyet:</strong> Erkeklerde kadınlardan 5-10 kat daha sık</li>
              <li>• <strong>İlaçlar:</strong> Florokinolon grubu antibiyotikler (Cipro, Levofloxacin), kortikosteroidler (tendonu zayıflatır)</li>
              <li>• <strong>Hastalıklar:</strong> Diyabet, romatoid artrit</li>
              <li>• <strong>Enjeksiyonlar:</strong> Tendon içine kortikosteroid enjeksiyonu</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <p className="text-gray-700">
                <strong>⚠️ Aşil Tendinitine Dikkat:</strong> Kronik Aşil tendiniti (tendon iltihabı ve dejenerasyonu), akut yırtık riskini 2-3 kat artırır. Eğer tendinit geçmişiniz varsa, spor yaparken dikkatli olun, iyi ısının ve kademeli yüklenin.
              </p>
            </div>
          </section>

          {/* Section 3: Belirtiler ve Tanı */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Aşil Tendonu Yırtığı Belirtileri ve Tanı</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Karakteristik Belirtiler</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">🔴</span>
                <span><strong>Ani "Pop" Sesi:</strong> Çoğu hasta bacak arkasından bir "pop" veya "çat" sesi geldiğini duyar veya hisseder, sanki arkadan birisi tekme atmış gibi</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">🔴</span>
                <span><strong>Şiddetli Ağrı:</strong> Yırtılma anında keskin ağrı, sonrasında künt ağrı ve topallama</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">🔴</span>
                <span><strong>Fonksiyon Kaybı:</strong> Ayak parmakları üzerinde duramama, merdiven çıkmada zorluk, koşamama</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">🔴</span>
                <span><strong>Boşluk Hissi:</strong> Tendonun kopuk olduğu bölgede (topuktan 2-6 cm yukarıda) girinti veya boşluk hissedilir</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">🔴</span>
                <span><strong>Şişlik ve Morarma:</strong> İlk 24-48 saat içinde ayak bileği ve baldırda ödem ve ekimoz (morarma) gelişebilir</span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Tanı Yöntemleri</h3>
            <div className="space-y-4 mb-6">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">1. Klinik Muayene (En Önemli!)</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• <strong>Palpasyon:</strong> Tendon hattı üzerinde boşluk, hassasiyet</li>
                  <li>• <strong>Thompson Testi (Altın Standart):</strong> Hasta yüzüstü yatar, dizi bükülü. Baldır sıkılır. Normalde ayak bileği aşağı (plantar fleksiyon) hareket eder. Aşil yırtığında hareket olmaz → POZİTİF TEST (%96 duyarlılık)</li>
                  <li>• <strong>Ayak Bileği Plantar Fleksiyon Gücü:</strong> Aktif itme gücünde belirgin azalma</li>
                  <li>• <strong>Tek Ayak Parmak Ucunda Durma:</strong> Mümkün değil veya çok zayıf</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">2. Ultrasonografi</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• <strong>Avantaj:</strong> Dinamik değerlendirme (ayak bileği hareketli), ucuz, radyasyon yok, yırtık boyutu/mesafesi net</li>
                  <li>• <strong>Kullanım:</strong> Tanı konulması, yırtık boyutu ve tipinin değerlendirilmesi, konservatif tedavide takip</li>
                  <li>• <strong>Dezavantaj:</strong> Deneyimli operatör gerektirir</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">3. MRI (Manyetik Rezonans)</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• <strong>Avantaj:</strong> Yırtığın tipi (kısmi/tam), boyutu, tendon dejenerasyonu, çevre yumuşak doku hasarı detayı mükemmel</li>
                  <li>• <strong>Kullanım:</strong> Şüpheli kısmi yırtıklarda, kronikleşmiş yırtıklarda, cerrahi planlama öncesi</li>
                  <li>• <strong>Dezavantaj:</strong> Pahalı, her yerde erişilebilir değil</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#B3F0EB] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tanı Algoritması</h3>
              <p className="text-gray-700 mb-2">
                <strong>1. Adım:</strong> Klinik değerlendirme (Thompson testi!) - %95 tanı konulur
              </p>
              <p className="text-gray-700 mb-2">
                <strong>2. Adım:</strong> Ultrasonografi - yırtık boyutu, mesafesi, dinamik değerlendirme
              </p>
              <p className="text-gray-700">
                <strong>3. Adım:</strong> MRI (şüpheli durumlarda veya cerrahi planlama için)
              </p>
            </div>
          </section>

          {/* Section 4: Tedavi Yöntemleri */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Aşil Tendonu Yırtığı Tedavi Yöntemleri</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Aşil tendonu yırtığı tedavisinde iki ana yaklaşım vardır: konservatif (ameliyatsız) ve cerrahi. Hangi yöntemin seçileceği yaşa, aktivite düzeyine, yırtığın tipine ve hastanın tercihlerine göre değişir.
            </p>

            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Konservatif (Ameliyatsız) Tedavi</h3>
                
                <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Endikasyonlar</h4>
                <ul className="space-y-1 text-gray-700 mb-3">
                  <li>• Yaşlı, sedanter hastalar ({'>'}65-70 yaş)</li>
                  <li>• Düşük aktivite düzeyi</li>
                  <li>• Cerrahiye uygun olmayan komorbiditeler (diyabet, kalp hastalığı)</li>
                  <li>• Akut yırtık (ilk 24-48 saat içinde, tendon uçları yakın)</li>
                  <li>• Kısmi yırtıklar (tendonun {'>'}%50'si sağlam)</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-2">Uygulama</h4>
                <ul className="space-y-1 text-gray-700 mb-3">
                  <li>• <strong>Ayak Bileği Ateli / Bot:</strong> Ayak bileği ilk 2-4 hafta plantar fleksiyonda (ayak aşağı bakacak şekilde) immobilize edilir. Bu, tendon uçlarının birbirine yaklaşmasını sağlar.</li>
                  <li>• <strong>Kademeli Dorsifleksiyon:</strong> Sonraki 4-6 hafta boyunca botun açısı yavaşça nötr pozisyona getirilir (topuk kamaları çıkarılır).</li>
                  <li>• <strong>Toplam İmmobilizasyon:</strong> Genellikle 6-8 hafta sürer. Bu süreçte koltuk değneği ile kısmi yük verilir.</li>
                  <li>• <strong>Fizik Tedavi:</strong> İmmobilizasyon sonrası başlar - güçlendirme, hareket açıklığı, denge.</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-2">Avantajlar ve Dezavantajlar</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>✓ <strong>Avantajlar:</strong> Ameliyat riskleri yok (enfeksiyon, anestezi), daha az maliyet</li>
                  <li>✗ <strong>Dezavantajlar:</strong> Tekrar yırtık riski daha yüksek (%10-30 vs %2-5), baldır kas gücü kaybı daha fazla, tendonda uzama (calf atrophy)</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Cerrahi Tedavi</h3>
                
                <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Endikasyonlar</h4>
                <ul className="space-y-1 text-gray-700 mb-3">
                  <li>• Genç, aktif hastalar ({'<'}60 yaş, sporcu)</li>
                  <li>• Yüksek fonksiyonel beklenti</li>
                  <li>• Kronik yırtıklar ({'>'}4-6 hafta, tendon uçları ayrık)</li>
                  <li>• Konservatif tedavi sonrası tekrar yırtık</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-2">Cerrahi Teknikler</h4>
                <ul className="space-y-1 text-gray-700 mb-3">
                  <li>
                    <strong>Açık Onarım (Geleneksel):</strong>
                    <br />• Ayak bileği arkasından 10-15 cm insizyon
                    <br />• Tendon uçları bulunur, dikişle (örneğin Krackow dikişi) birleştirilir
                    <br />• Avantaj: Çok güçlü onarım, direkt görselizasyon
                    <br />• Dezavantaj: Yüksek yara komplikasyonu (enfeksiyon, nekroz) riski (%5-10)
                  </li>
                  <li>
                    <strong>Minimal İnvaziv Onarım:</strong>
                    <br />• Küçük insizyonlar (2-3 cm) veya perkütan (ciltten iğnelerle) onarım
                    <br />• Özel aletler veya kılavuzlar kullanılır
                    <br />• Avantaj: Daha düşük yara komplikasyonu riski, daha hızlı iyileşme
                    <br />• Dezavantaj: N. suralis hasarı riski (duyu siniri), onarımın gücü açık cerrahiye göre biraz daha az olabilir
                  </li>
                  <li>
                    <strong>Greft Kullanımı (Kronik/Masif Yırtıklar):</strong>
                    <br />• Başka bir tendondan (plantaris, peroneus brevis) veya sentetik materyalden tendon takviyesi
                    <br />• Endikasyon: Büyük boşluklar, kötü tendon kalitesi, tekrar yırtıklar
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-900 mb-2">Avantajlar ve Dezavantajlar</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>✓ <strong>Avantajlar:</strong> Daha düşük tekrar yırtık riski (%2-5), daha iyi fonksiyonel sonuçlar (kuvvet, güç)</li>
                  <li>✗ <strong>Dezavantajlar:</strong> Ameliyat riskleri (enfeksiyon, yara iyileşme sorunu, sinir hasarı), hastanede kalış, maliyet</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <p className="text-gray-700 mb-2">
                <strong>⚠️ Tedavi Kararını Etkileyen En Önemli Faktör:</strong>
                <br />
                Tekrar yırtık riski her iki yöntemde de temel endişedir. Cerrahi bu riski belirgin azaltır. Ancak enfeksiyon ve yara iyileşmesi riski cerrahide daha yüksektir. Hastanın yaşı, aktivite beklentisi ve komorbiditeler cerrah ile birlikte detaylıca değerlendirilmelidir.
              </p>
            </div>
          </section>

          {/* Section 5: Rehabilitasyon ve İyileşme Süreci */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Rehabilitasyon ve İyileşme Süreci</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Aşil tendonu yırtığı tedavisinde rehabilitasyon, cerrahi kadar kritik öneme sahiptir. Modern yaklaşımlar erken mobilizasyonu ve fonksiyonel yüklenmeyi içerir.
            </p>

            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Rehabilitasyon Protokolü (Cerrahi ve Konservatif Benzer)</h3>
              
              <div className="space-y-4">
                <div>
                  <strong>Faz 1: Koruma ve Erken Hareket (0-2 Hafta)</strong>
                  <ul className="mt-2 space-y-1 text-gray-700 ml-4">
                    <li>• Ayak bileği immobilizasyonu (bot veya alçı), hafif plantar fleksiyonda</li>
                    <li>• Koltuk değneği ile yük vermeden yürüme</li>
                    <li>• Aşil tendonu gerilmemeli (dorsifleksiyon kısıtlı)</li>
                    <li>• Baldır kaslarına izometrik egzersizler (pasif)</li>
                    <li>• Parmak egzersizleri, üst ekstremite egzersizleri</li>
                  </ul>
                </div>

                <div>
                  <strong>Faz 2: Kademeli Yüklenme ve Hareket (2-6 Hafta)</strong>
                  <ul className="mt-2 space-y-1 text-gray-700 ml-4">
                    <li>• Bot açısı yavaşça nötre getirilir (her hafta topuk kama çıkarılır)</li>
                    <li>• Kısmi yük vermeye başlama (bot içinde, koltuk değneği yardımıyla)</li>
                    <li>• Pasif ayak bileği dorsifleksiyon egzersizleri (tendonu germeden)</li>
                    <li>• Baldır kasları güçlendirme (izometrik, sonra hafif direnç)</li>
                  </ul>
                </div>

                <div>
                  <strong>Faz 3: Güçlendirme ve Tam Yük (6-12 Hafta)</strong>
                  <ul className="mt-2 space-y-1 text-gray-700 ml-4">
                    <li>• Bot çıkarılır, ayakkabıya geçiş</li>
                    <li>• Tam yük verme (koltuk değneği bırakılır)</li>
                    <li>• Aktif hareket açıklığı egzersizleri (dorsifleksiyon - nazikçe!)</li>
                    <li>• Güçlendirme egzersizleri: Tekrarlı baldır kaldırma (calf raise) - iki ayakla başla, sonra tek ayakla</li>
                    <li>• Denge ve propriosepsiyon egzersizleri (denge tahtası)</li>
                    <li>• Yürüme bandında yavaş yürüme, bisiklet (düşük direnç)</li>
                  </ul>
                </div>

                <div>
                  <strong>Faz 4: Spora Dönüş (3-6 Ay)</strong>
                  <ul className="mt-2 space-y-1 text-gray-700 ml-4">
                    <li>• Plyometrik egzersizler (hafif sıçrama, zıplama)</li>
                    <li>• Koşu programı (kademeli - walk/jog)</li>
                    <li>• Spor-spesifik driller (yön değiştirme, hızlanma/yavaşlama)</li>
                    <li>• Tam fonksiyona dönüş 6-12 ay sürebilir</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <p className="text-gray-700 mb-2">
                <strong>⚠️ İyileşme Süresi:</strong>
                <br />• <strong>Tendon iyileşmesi:</strong> Cerrahi sonrası 6-8 hafta
                <br />• <strong>Günlük aktivitelere dönüş:</strong> 8-12 hafta
                <br />• <strong>Spora dönüş (hafif):</strong> 3-4 ay
                <br />• <strong>Spora dönüş (yüksek etkili):</strong> 6-12 ay
                <br />• <strong>Maksimal güç kazanımı:</strong> 12-18 ay (sağlam bacağa göre %80-90 güç)
              </p>
            </div>
          </section>

          {/* Section 6: Sıkça Sorulan Sorular */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Aşil tendonu yırtığı ameliyatsız iyileşir mi?</h3>
                <p className="text-gray-700">
                  Evet, konservatif tedavi ile yırtık iyileşebilir. Ancak tekrar yırtık riski ameliyatlı gruba göre daha yüksektir (%10-30 vs %2-5). Daha çok yaşlı, sedanter hastalarda veya ameliyat riskleri yüksek olan kişilerde tercih edilir. Genç ve aktif sporcularda genellikle cerrahi önerilir çünkü fonksiyonel beklenti daha yüksektir ve tekrar yırtık riski minimize edilmek istenir.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Aşil tendonu yırtığı ameliyatı sonrası ne kadar süre bot kullanmam gerekir?</h3>
                <p className="text-gray-700">
                  Genellikle ameliyat sonrası 6-8 hafta boyunca özel bir yürüme botu (CAM walker) kullanmanız istenir. İlk 2-4 hafta ayak bileği plantar fleksiyonda, sonraki 2-4 hafta kademeli olarak nötr pozisyona getirilir. Bu süreçte koltuk değneği yardımıyla kısmi veya tam yük verebilirsiniz (cerrahın protokolüne göre).
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ameliyat sonrası ne zaman spora geri dönebilirim?</h3>
                <p className="text-gray-700">
                  Spora dönüş kademeli bir süreçtir ve acele edilmemelidir:
                  • <strong>Düşük etkili sporlar (yüzme, bisiklet):</strong> 3-4 ay sonra
                  • <strong>Hafif koşu:</strong> 4-6 ay sonra (kontrollü, düz zemin)
                  • <strong>Yüksek etkili sporlar (futbol, basketbol, tenis):</strong> 6-12 ay sonra
                  Bu süreçte baldır kas gücünüzün sağlam bacağınızın %80-90'ına ulaşması ve ağrı olmaması kritik kriterlerdir.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Aşil tendonu yırtığı ameliyatı riskli mi?</h3>
                <p className="text-gray-700">
                  Her cerrahi gibi riskler mevcuttur. Aşil cerrahisinde en sık görülen riskler:
                  • <strong>Yara iyileşme sorunları:</strong> %5-10 (özellikle açık cerrahide, sigara içenlerde, diyabetiklerde)
                  • <strong>Enfeksiyon:</strong> %1-3
                  • <strong>Suralis sinir hasarı:</strong> %2-5 (geçici uyuşma, minimal invazivde risk biraz daha yüksek)
                  • <strong>Tekrar yırtık:</strong> %2-5 (konservatiften düşük, ama hâlâ var)
                  Minimal invaziv teknikler yara sorunlarını azaltır, ancak sinir hasarı riskini biraz artırabilir.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rehabilitasyon sürecinde en çok nelere dikkat etmeliyim?</h3>
                <p className="text-gray-700">
                  1. <strong>Sabır:</strong> İyileşme uzun bir süreçtir, acele etmeyin.
                  2. <strong>Protokole uyum:</strong> Fizik tedavi egzersizlerini düzenli ve doğru yapın.
                  3. <strong>Erken yük vermeden kaçınma:</strong> İlk haftalarda tendonu aşırı germeyin.
                  4. <strong>Kademeli güçlendirme:</strong> Baldır kaslarını yavaşça ve kontrollü şekilde güçlendirin.
                  5. <strong>Denge ve propriosepsiyon:</strong> İyileşme sonrası dengeyi geri kazanın (ayak bileği burkulmalarını önler).
                  6. <strong>Diyet ve hidrasyon:</strong> İyileşmeyi desteklemek için protein, vitamin ve bol su tüketin.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Kaynaklar */}
          <section className="mb-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kaynaklar</h2>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-700">
              <li>
                Lantto I, et al. "Conservative treatment of Achilles tendon rupture: a systematic review." Scand J Surg. 2015.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=lantto+conservative+treatment+achilles+tendon+rupture" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Willits K, et al. "Operative versus nonoperative treatment of acute Achilles tendon ruptures: a multicenter randomized trial." J Bone Joint Surg Am. 2010.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=willits+operative+nonoperative+achilles+tendon+ruptures" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Metcalf MG, et al. "Achilles tendon rupture: current trends in diagnosis and management." Sports Health. 2011.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=metcalf+achilles+tendon+rupture+diagnosis+management" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Frankel S, et al. "Rehabilitation after Achilles tendon repair: a systematic review." J Orthop Sports Phys Ther. 2008.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=frankel+rehabilitation+achilles+tendon+repair+systematic+review" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
            </ol>
          </section>

          {/* Section 8: Internal Link - ZORUNLU! */}
          <section className="mb-12">
            <div className="bg-[#E6FAF8] border-l-4 border-[#1AD2C4] p-6 rounded-r-lg">
              <p className="text-gray-700">
                <strong>İlgili İçerik:</strong> Aşil tendonu yaralanmaları için ameliyatsız tedavi seçenekleri hakkında daha fazla bilgi almak isterseniz{' '}
                <Link 
                  href="/ameliyatsiz-cozumler" 
                  className="text-[#01CAB8] hover:text-[#01867A] font-semibold hover:underline"
                >
                  ameliyatsız çözümler sayfamızı
                </Link>{' '}
                ziyaret edebilirsiniz.
              </p>
            </div>
          </section>

          {/* Sonuç */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sonuç</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Aşil tendonu yırtığı, ciddi bir yaralanma olmasına rağmen, modern tedavi yöntemleri ile başarılı bir şekilde yönetilebilir. Tedavi seçimi, hastanın yaşı, aktivite düzeyi ve beklentilerine göre cerrah ile birlikte değerlendirilmelidir. Ameliyatsız tedavi, cerrahi riskleri olmayan veya düşük aktivite düzeyine sahip hastalar için uygunken, cerrahi onarım daha düşük tekrar yırtık riski ve daha iyi fonksiyonel sonuçlar sunar.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Unutulmaması gereken en önemli nokta, seçilen tedavi yönteminden bağımsız olarak, sabırlı ve disiplinli bir rehabilitasyon sürecinin başarı için kritik olduğudur. Aşil tendonu yırtığı şüpheniz varsa, derhal bir ortopedi ve travmatoloji uzmanına başvurarak erken tanı ve size en uygun tedavi planını belirleyin. Bu, spora güvenli ve tam bir dönüş yapmanızı sağlayacaktır.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#01CAB8] to-[#01A899] rounded-xl p-8 text-center text-white mt-12">
          <h2 className="text-2xl font-bold mb-4">Aşil Tendonu Yırtığı İçin Uzman Değerlendirmesi</h2>
          <p className="mb-6">Tanı ve tedavi için hemen randevu alın.</p>
          <Link 
            href="/iletisim" 
            className="inline-block bg-white text-[#01CAB8] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Hemen Randevu Al
          </Link>
        </div>
      </article>
    </>
  );
}
