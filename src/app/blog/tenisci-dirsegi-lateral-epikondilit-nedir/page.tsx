import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tenisçi Dirseği (Lateral Epikondilit) Nedir? | Op. Dr. Özgür Oktay Nar',
  description: 'Lateral epikondilit (tenisçi dirseği) nedenleri, belirtileri ve tedavi yöntemleri. Dirsek dış yüz ağrısı, tanı ve konservatif tedavi seçenekleri.',
  keywords: 'tenisçi dirseği, lateral epikondilit, dirsek ağrısı, tendinit, ekstansör tendonlar, PRP tedavisi',
  authors: [{ name: 'Op. Dr. Özgür Oktay Nar' }],
  openGraph: {
    title: 'Tenisçi Dirseği (Lateral Epikondilit) Nedir?',
    description: 'Lateral epikondilit (tenisçi dirseği) nedenleri, belirtileri ve tedavi yöntemleri. Dirsek dış yüz ağrısı, tanı ve konservatif tedavi seçenekleri.',
    type: 'article',
    locale: 'tr_TR',
    url: 'https://www.ozguroktaynar.com/blog/tenisci-dirsegi-lateral-epikondilit-nedir',
    siteName: 'Op. Dr. Özgür Oktay Nar',
    images: [
      {
        url: 'https://placehold.co/1200x630/e2e8f0/475569?text=Tenisci+Dirsegi',
        width: 1200,
        height: 630,
        alt: 'Lateral Epikondilit - Tenisçi Dirseği Anatomisi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tenisçi Dirseği (Lateral Epikondilit) Nedir?',
    description: 'Lateral epikondilit (tenisçi dirseği) nedenleri, belirtileri ve tedavi yöntemleri. Dirsek dış yüz ağrısı, tanı ve konservatif tedavi seçenekleri.',
    images: ['https://placehold.co/1200x630/e2e8f0/475569?text=Tenisci+Dirsegi'],
  },
  alternates: {
    canonical: 'https://www.ozguroktaynar.com/blog/tenisci-dirsegi-lateral-epikondilit-nedir',
  },
};

export default function BlogPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': 'https://www.ozguroktaynar.com/blog/tenisci-dirsegi-lateral-epikondilit-nedir#webpage',
        url: 'https://www.ozguroktaynar.com/blog/tenisci-dirsegi-lateral-epikondilit-nedir',
        name: 'Tenisçi Dirseği (Lateral Epikondilit) Nedir?',
        description: 'Lateral epikondilit (tenisçi dirseği) nedenleri, belirtileri ve tedavi yöntemleri. Dirsek dış yüz ağrısı, tanı ve konservatif tedavi seçenekleri.',
        datePublished: '2025-02-07T10:00:00+03:00',
        dateModified: '2025-02-07T10:00:00+03:00',
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
          <span className="text-gray-700">Tenisçi Dirseği (Lateral Epikondilit)</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tenisçi Dirseği (Lateral Epikondilit) Nedir?</h1>
          <div className="flex items-center text-gray-600 text-sm mb-6">
            <span>Op. Dr. Özgür Oktay Nar</span>
            <span className="mx-2">•</span>
            <time>7 Şubat 2025</time>
          </div>
          <img
            src="https://www.drozguroktaynar.com/wp-content/uploads/2026/01/resim.jpg"
            alt="Lateral Epikondilit - Tenisçi Dirseği Anatomisi"
            className="w-full rounded-xl shadow-lg"
          />
        </header>

        {/* Main Content - 7 STEP ARCHITECTURE */}
        <div className="prose prose-lg max-w-none">
          
          {/* Section 1: Giriş */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Giriş</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dirsek dış yüzünde (lateral) hissedilen ağrı, günlük aktiviteleri ciddi şekilde 
              kısıtlayabilen yaygın bir şikayettir. "Tenisçi dirseği" olarak bilinen lateral 
              epikondilit, yalnızca tenisçilerde değil, tekrarlayan bilek ve ön kol hareketleri 
              yapan herhangi bir kişide görülebilir.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Lateral epikondilit, 30-50 yaş arasında en sık görülür ve nüfusun yaklaşık %1-3'ünü 
              etkiler. Yanlış ergonomi, aşırı kullanım ve uygun olmayan teknikler başlıca risk 
              faktörleridir. Erken tanı ve doğru tedavi ile tam iyileşme mümkündür.
            </p>
          </section>

          {/* Section 2: Nedir / Tanım */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Lateral Epikondilit Nedir?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Lateral epikondilit, dirseğin dış çıkıntısına (lateral epikondil) tutunmuş olan 
              ekstansör (bilek ve parmakları açan) kas tendonlarının kronik dejenerasyonu ve 
              inflamasyonudur. Özellikle ECRB (Extensor Carpi Radialis Brevis) tendonu en sık 
              etkilenen yapıdır.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tekrarlayan bilek ekstansiyonu, kavrama ve ön kol supinasyonu (dışa çevirme) 
              hareketleri sırasında tendonlar aşırı yüklenir. Bu, tendon liflerinde mikro yırtıklar, 
              kollajen dejenerasyonu ve yetersiz iyileşmeye yol açar. Sonuçta kronik ağrı ve 
              fonksiyon kaybı gelişir.
            </p>
            <div className="bg-[#E6FAF8] p-6 rounded-lg">
              <p className="text-gray-800 font-semibold mb-2">📌 Önemli Not:</p>
              <p className="text-gray-700">
                "Tenisçi dirseği" adına rağmen, hastaların yalnızca %5-10'u tenisçidir. 
                Ofis çalışanları, marangozlar, ressamlar, aşçılar ve günlük tekrarlayan 
                hareketler yapan herkes risk altındadır.
              </p>
            </div>
          </section>

          {/* Section 3: Belirtiler */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Belirtiler</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Lateral epikondilitin tipik belirtileri şunlardır:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Dirsek dış yüzünde ağrı:</strong> Lateral epikondil kemiği üzerinde belirgin hassasiyet</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Kavrama sırasında ağrı:</strong> El sıkma, kolu büzme, obje tutma sırasında artar</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Bilek ekstansiyonu sırasında ağrı:</strong> Bilek yukarı kaldırma, kapı kolu çevirme gibi aktivitelerde</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Kavrama kuvvetinde azalma:</strong> Sıkma ve tutma gücü zayıflar</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Ön kolda yanma hissi:</strong> Bazen dirsekten ön kola doğru yayılan ağrı</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Sabah sertliği:</strong> Dinlenme sonrası dirsekte sertlik hissi</span>
              </li>
            </ul>
          </section>

          {/* Section 4: Tedavi Yöntemleri */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tedavi Yöntemleri</h2>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">Konservatif (Ameliyatsız) Tedavi</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Lateral epikondilitin %80-95'i ameliyatsız yöntemlerle iyileşir:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Dinlenme ve aktivite modifikasyonu:</strong> Ağrıyı artıran tekrarlayan hareketlerden kaçınma (4-6 hafta)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Buz uygulaması:</strong> Günde 3-4 kez 15-20 dakika soğuk kompres</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Antiinflamatuar ilaçlar (NSAİD):</strong> Ağrı ve inflamasyonu azaltır</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Fizik tedavi:</strong> Eksentrik güçlendirme egzersizleri, ultrason, TENS, laser tedavisi</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Counterforce brace:</strong> Ön kol bandı (tennis elbow strap) tendon üzerindeki basıncı azaltır</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Kortikosteroid enjeksiyonu:</strong> Kısa vadede ağrıyı azaltabilir ancak uzun dönem sonuçları tartışmalıdır</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>PRP (Platelet-Rich Plasma) tedavisi:</strong> Tendon rejenerasyonunu destekleyen etkili modern yöntem</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Ekstrakorporeal Şok Dalga Tedavisi (ESWT):</strong> Kronik vakalarda tendon iyileşmesini uyarır</span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">Cerrahi Tedavi</h3>
            <p className="text-gray-700 leading-relaxed">
              6-12 aylık konservatif tedaviye rağmen iyileşmeyen kronik vakalarda (%10) cerrahi 
              seçenek değerlendirilebilir. Ameliyatta hasarlı tendon dokusu temizlenir (debridman), 
              gerekirse tendon sağlıklı kısma yeniden tutturulur. Açık veya artroskopik teknik uygulanabilir.
            </p>
          </section>

          {/* Section 5: Sıkça Sorulan Sorular */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Tenisçi dirseği ne kadar sürede iyileşir?</h3>
                <p className="text-gray-700">
                  Doğru tedavi ile 6-12 hafta içinde belirtilerde önemli iyileşme görülür. 
                  Ancak tam tendon iyileşmesi ve güç kazanımı 3-6 ay sürebilir. Kronik 
                  vakalarda iyileşme daha uzun sürebilir. Fizik tedavi ve egzersiz programına 
                  düzenli uyum kritiktir.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">PRP tedavisi etkili midir?</h3>
                <p className="text-gray-700">
                  Son yıllarda yapılan çalışmalar, PRP'nin (kendi kanınızdan elde edilen büyüme 
                  faktörleri) tendon iyileşmesini hızlandırdığını ve kortikosteroid enjeksiyonundan 
                  uzun vadede daha etkili olduğunu göstermektedir. Özellikle kronik vakalarda 
                  başarı oranı %60-80 düzeyindedir.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">En etkili egzersizler nelerdir?</h3>
                <p className="text-gray-700">
                  Eksentrik bilek ekstansör egzersizleri (Tyler twist egzersizi), ön kol 
                  supinasyon-pronasyon egzersizleri ve kavrama güçlendirme egzersizleri en 
                  etkilidir. Egzersizler ağrısız veya minimal ağrılı olmalı, fizik tedavi 
                  uzmanı gözetiminde yapılmalıdır.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Tekrarlama riski var mıdır?</h3>
                <p className="text-gray-700">
                  Uygun tedavi ve önleyici tedbirler alınmadan aktiviteye dönülürse tekrarlama 
                  riski %25-50 arasındadır. Düzenli esneme, güçlendirme egzersizleri, doğru 
                  ergonomi, uygun ekipman kullanımı ve kademeli aktivite artışı ile risk minimize edilir.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Kaynaklar */}
          <section className="mb-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kaynaklar</h2>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-700">
              <li>
                Coombes BK, et al. "Efficacy and safety of corticosteroid injections and other injections for management of tendinopathy: a systematic review of randomised controlled trials" Lancet. 2010.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=lateral+epicondylitis+corticosteroid+injection" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Mishra A, Pavelko T. "Treatment of chronic elbow tendinosis with buffered platelet-rich plasma" Am J Sports Med. 2006.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=PRP+lateral+epicondylitis+treatment" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Bisset L, et al. "Mobilisation with movement and exercise, corticosteroid injection, or wait and see for tennis elbow" BMJ. 2006.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=tennis+elbow+exercise+corticosteroid" 
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
            <p className="text-gray-700 leading-relaxed mb-4">
              Lateral epikondilit (tenisçi dirseği), yaygın ancak uygun tedavi ile başarılı şekilde 
              yönetilebilen bir durumdur. Erken tanı, istirahat, fizik tedavi ve eksentrik güçlendirme 
              egzersizleri ile vakaların çoğu ameliyatsız iyileşir. Modern tedavi yöntemleri (PRP, ESWT) 
              kronik vakalarda umut verici sonuçlar sağlamaktadır.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Dirsek dış yüzünde ağrı ve kavrama güçsüzlüğü yaşıyorsanız, bir ortopedi uzmanına 
              başvurarak erken tanı konulması ve bireysel tedavi planı oluşturulması önerilir. 
              Doğru ergonomi, uygun ekipman ve düzenli egzersizlerle tekrarlama riskini minimize edebilirsiniz.
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
