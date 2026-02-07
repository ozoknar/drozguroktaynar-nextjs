import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bel Fıtığı Ameliyatı Sonrası Yürüyüş Programı | Op. Dr. Özgür Oktay Nar',
  description: 'Bel fıtığı ameliyatı sonrası güvenli yürüyüş programı, haftalar bazında egzersizler ve dikkat edilmesi gereken noktalar. Uzman rehberi.',
  keywords: 'bel fıtığı ameliyatı, ameliyat sonrası yürüyüş, lomber disk hernisi, fizik tedavi, rehabilitasyon, postoperatif bakım',
  authors: [{ name: 'Op. Dr. Özgür Oktay Nar' }],
  openGraph: {
    title: 'Bel Fıtığı Ameliyatı Sonrası Yürüyüş Programı',
    description: 'Bel fıtığı ameliyatı sonrası güvenli yürüyüş programı, haftalar bazında egzersizler ve dikkat edilmesi gereken noktalar.',
    type: 'article',
    locale: 'tr_TR',
    url: 'https://www.ozguroktaynar.com/blog/bel-fitigi-ameliyati-sonrasi-yuruyus-programi',
    siteName: 'Op. Dr. Özgür Oktay Nar',
    images: [
      {
        url: 'https://placehold.co/1200x630/e2e8f0/475569?text=Bel+Fitigi+Ameliyati+Yuruyus',
        width: 1200,
        height: 630,
        alt: 'Bel Fıtığı Ameliyatı Sonrası Yürüyüş Programı',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bel Fıtığı Ameliyatı Sonrası Yürüyüş Programı',
    description: 'Bel fıtığı ameliyatı sonrası güvenli yürüyüş programı, haftalar bazında egzersizler ve dikkat edilmesi gereken noktalar.',
    images: ['https://placehold.co/1200x630/e2e8f0/475569?text=Bel+Fitigi+Ameliyati+Yuruyus'],
  },
  alternates: {
    canonical: 'https://www.ozguroktaynar.com/blog/bel-fitigi-ameliyati-sonrasi-yuruyus-programi',
  },
};

export default function BelFitigiAmeliyatiYuruyusPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': 'https://www.ozguroktaynar.com/blog/bel-fitigi-ameliyati-sonrasi-yuruyus-programi#webpage',
        url: 'https://www.ozguroktaynar.com/blog/bel-fitigi-ameliyati-sonrasi-yuruyus-programi',
        name: 'Bel Fıtığı Ameliyatı Sonrası Yürüyüş Programı',
        description: 'Bel fıtığı ameliyatı sonrası güvenli yürüyüş programı, haftalar bazında egzersizler ve dikkat edilmesi gereken noktalar.',
        datePublished: '2025-02-07T05:35:00+03:00',
        dateModified: '2025-02-07T05:35:00+03:00',
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
          <span className="text-gray-700">Bel Fıtığı Ameliyatı Sonrası Yürüyüş Programı</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Bel Fıtığı Ameliyatı Sonrası Yürüyüş Programı</h1>
          <div className="flex items-center text-gray-600 text-sm mb-6">
            <span>Op. Dr. Özgür Oktay Nar</span>
            <span className="mx-2">•</span>
            <time>7 Şubat 2025</time>
          </div>
          <img
            src="https://www.drozguroktaynar.com/wp-content/uploads/2025/10/ameliyat_sonrasi_yuruyus.jpg"
            alt="Bel Fıtığı Ameliyatı Sonrası Yürüyüş Programı"
            className="w-full rounded-xl shadow-lg"
          />
        </header>

        {/* Main Content - 7 STEP ARCHITECTURE */}
        <div className="prose prose-lg max-w-none">
          
          {/* Section 1: Giriş */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Giriş</h2>
            <p className="text-gray-700 leading-relaxed">
              Bel fıtığı (lomber disk hernisi) ameliyatı sonrası dönem, başarılı bir iyileşme için kritik öneme sahiptir. 
              Cerrahi, basıncı kaldırarak sinir ağrısını hemen azaltsa da, tam fonksiyonel iyileşme için aşamalı ve kontrollü bir rehabilitasyon programı gereklidir. 
              Yürüyüş, ameliyat sonrası dönemin en temel ve güvenli egzersizlerinden biridir.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Bu yazıda, bel fıtığı ameliyatı sonrası güvenli ve etkili bir yürüyüş programını, haftalar bazında adım adım inceleyeceğiz.
            </p>
          </section>

          {/* Section 2: Nedir / Tanım */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Neden Yürüyüş Önemlidir?</h2>
            <p className="text-gray-700 leading-relaxed">
              Ameliyat sonrası yürüyüş programı, sadece fiziksel iyileşmeyi hızlandırmakla kalmaz, aynı zamanda psikolojik olarak da iyileşme sürecine katkı sağlar:
            </p>
            <ul className="space-y-2 mt-3">
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Kan dolaşımını artırır:</strong> İyileşme için gerekli besinlerin ameliyat bölgesine taşınmasını destekler</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Kas gücünü korur:</strong> Uzun süreli hareketsizliğin neden olduğu kas kaybını önler</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Esnekliği artırır:</strong> Omurga ve çevre kasların esnekliğini geri kazandırır</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Skar dokusu oluşumunu minimize eder:</strong> Erken mobilizasyon yapışıklıkları azaltır</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Psikolojik iyileşme:</strong> Hareket etmek motivasyonu ve iyimserliği artırır</span>
              </li>
            </ul>
          </section>

          {/* Section 3: Belirtiler */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ameliyat Sonrası Ne Beklenmelidir?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ameliyat sonrası ilk günler ve haftalarda bazı belirtiler normaldir:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Hafif ağrı ve sertlik:</strong> Cerrahi bölgede normal iyileşme süreci</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Yorgunluk:</strong> Vücut iyileşmeye enerji harcar</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Hafif şişlik:</strong> Ameliyat bölgesinde geçici inflamasyon</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Kas spazmları:</strong> Kas koruyucu mekanizmaların devreye girmesi</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>⚠️ Acil doktora başvuru gerektiren belirtiler:</strong>
            </p>
            <ul className="space-y-2 mt-3">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">!</span>
                <span>Şiddetli bacak ağrısında artış veya yeni başlayan uyuşma</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">!</span>
                <span>Yara yerinde kızarıklık, ateş, akıntı</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">!</span>
                <span>İdrar veya dışkı kontrol kaybı</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">!</span>
                <span>38°C üzerinde ateş</span>
              </li>
            </ul>
          </section>

          {/* Section 4: Tedavi Yöntemleri */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Haftalar Bazında Yürüyüş Programı</h2>
            
            <div className="bg-[#E6FAF8] border-l-4 border-[#01CAB8] p-6 rounded-r-lg mb-6">
              <p className="text-gray-700">
                <strong>⚠️ ÖNEMLİ:</strong> Bu program genel bir rehberdir. Kendi programınız için mutlaka cerrahınıza danışın. 
                Her hastanın iyileşme süreci farklıdır.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">📅 1. Hafta: Erken Mobilizasyon</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Hedef:</strong> Yataktan çıkmak, kısa mesafeli ev içi yürüyüşler</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Süre:</strong> 5-10 dakika, günde 3-4 kez</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Tempo:</strong> Çok yavaş, rahat adımlar</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Dikkat:</strong> Bükülme, dönme ve ağır kaldırma yasak!</span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-8">📅 2-4. Hafta: Kademeli Artış</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Hedef:</strong> Ev dışı düz yüzeyde yürüyüşler</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Süre:</strong> 10-15 dakika, günde 2-3 kez</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Tempo:</strong> Yavaş-orta tempo, dik duruş</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Dikkat:</strong> Uzun süreli oturma yerine sık sık yürüyüş molası verin</span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-8">📅 4-8. Hafta: Dayanıklılık Arttırma</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Hedef:</strong> Sürekli yürüyüş, hafif eğimli araziler</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Süre:</strong> 20-30 dakika, günde 1-2 kez</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Tempo:</strong> Orta tempo, doğal adım uzunluğu</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Dikkat:</strong> Ağrı hissederseniz dinlenin, zorlamayın</span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-8">📅 8-12. Hafta: Tam Fonksiyonel Hareket</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Hedef:</strong> Normal günlük aktivite seviyesi</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Süre:</strong> 30-45 dakika, günde 1 kez veya daha fazla</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Tempo:</strong> Normal yürüyüş hızı</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Dikkat:</strong> Hafif koşu için 3-4 ay sonra doktor onayı alın</span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-8">💡 Altın Kurallar</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">★</span>
                <span><strong>Ağrı durdurma işaretidir:</strong> 10 üzerinden 3-4'ü aşan ağrı hissederseniz durun</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">★</span>
                <span><strong>Düz zemin tercih edin:</strong> İlk 4-6 hafta düz, sert zeminlerde yürüyün</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">★</span>
                <span><strong>İyi ayakkabı kullanın:</strong> Destekli, yastıklı spor ayakkabı tercih edin</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">★</span>
                <span><strong>Dik duruş:</strong> Öne eğilme veya yana yatma hareketlerinden kaçının</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">★</span>
                <span><strong>İstikamet değişimlerinde dikkatli olun:</strong> Ani dönüşlerden kaçının</span>
              </li>
            </ul>
          </section>

          {/* Section 5: Sıkça Sorulan Sorular */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ameliyat sonrası ne zaman yürümeye başlayabilirim?</h3>
                <p className="text-gray-700">
                  Çoğu hasta ameliyattan 4-6 saat sonra, doktor gözetiminde kısa mesafeli yürüyüşlere başlayabilir. 
                  Mikrodisektomi gibi minimal invaziv ameliyatlarda mobilizasyon daha erkendir.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Yürüyüş sırasında ağrı hissediyorum, normal mi?</h3>
                <p className="text-gray-700">
                  Hafif gerginlik ve rahatsızlık normaldir, ancak şiddetli veya artan ağrı normal değildir. 
                  Ağrı 10 üzerinden 3-4'ü aşarsa dinlenin ve doktorunuza danışın. Ağrıyı yok sayarak zorlamak iyileşmeyi geciktirir.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Yürüyüş dışında hangi aktiviteleri yapabilirim?</h3>
                <p className="text-gray-700">
                  İlk 4-6 hafta: Yüzme (sırtüstü), hafif germe egzersizleri. 
                  6-12 hafta: Hafif bisiklet, yüzme (tüm stiller), hafif kuvvetlendirme egzersizleri. 
                  12+ hafta: Pilates, hafif koşu (doktor onayıyla).
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fizik tedaviye ne zaman başlamalıyım?</h3>
                <p className="text-gray-700">
                  Genellikle 2-4 hafta sonra başlanır. Fizik tedavi uzmanı, özel egzersizlerle kas gücünü, 
                  esnekliği ve postürü geri kazanmanıza yardımcı olur. Doktorunuzun önerdiği programa düzenli katılım kritik öneme sahiptir.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Kaynaklar */}
          <section className="mb-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kaynaklar</h2>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-700">
              <li>
                McGregor AH, et al. "Rehabilitation Following Surgery for Lumbar Spinal Stenosis" Spine. 2014.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=lumbar+surgery+rehabilitation+walking" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Oosterhuis T, et al. "Early rehabilitation after lumbar disc surgery: a systematic review" European Spine Journal. 2015.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=early+rehabilitation+lumbar+disc" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Yilmaz F, et al. "The Effects of Walking on Back Pain after Lumbar Disc Surgery" Journal of Physical Therapy Science. 2016.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=walking+lumbar+disc+surgery" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
            </ol>
          </section>

          {/* Section 7: Internal Link - ZORUNLU! */}
          <section className="mb-12">
            <div className="bg-[#E6FAF8] border-l-4 border-[#1AD2C4] p-6 rounded-r-lg">
              <p className="text-gray-700">
                <strong>İlgili İçerik:</strong> Ameliyatsız tedavi seçenekleri hakkında daha fazla bilgi için{' '}
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
            <p className="text-gray-700 leading-relaxed">
              Bel fıtığı ameliyatı sonrası yürüyüş programı, başarılı bir iyileşmenin temel taşlarından biridir. 
              Aşamalı, kontrollü ve sabırlı bir yaklaşım, hem fiziksel hem de psikolojik iyileşmeyi destekler. 
              Her hastanın iyileşme süreci benzersizdir, bu nedenle kendi hızınızı bulmanız ve doktorunuzun önerilerine uymanız önemlidir.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Yürüyüş programını fizik tedavi, postür eğitimi ve yaşam tarzı değişiklikleriyle birleştirmek, 
              uzun vadeli başarı için en etkili yaklaşımdır. Herhangi bir sorunuz veya endişeniz olduğunda, 
              cerrahınız veya fizik tedavi uzmanınızla iletişime geçmekten çekinmeyin.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#01CAB8] to-[#01A899] rounded-xl p-8 text-center text-white mt-12">
          <h2 className="text-2xl font-bold mb-4">Randevu Almak İster misiniz?</h2>
          <p className="mb-6">Uzman değerlendirmesi için hemen iletişime geçin.</p>
          <Link 
            href="/iletisim" 
            className="inline-block bg-white text-[#01CAB8] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Randevu Al
          </Link>
        </div>
      </article>
    </>
  );
}
