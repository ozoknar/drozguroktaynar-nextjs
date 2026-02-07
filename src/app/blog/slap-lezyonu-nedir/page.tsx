import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SLAP Lezyonu Nedir? | Op. Dr. Özgür Oktay Nar',
  description: 'SLAP (Superior Labrum Anterior Posterior) lezyonu tanısı, belirtileri ve tedavi seçenekleri. Omuz labrum yırtığı hakkında detaylı bilgi.',
  keywords: 'SLAP lezyonu, labrum yırtığı, omuz yaralanması, omuz artroskopisi, spor yaralanması, biseps tendonu',
  authors: [{ name: 'Op. Dr. Özgür Oktay Nar' }],
  openGraph: {
    title: 'SLAP Lezyonu Nedir?',
    description: 'SLAP (Superior Labrum Anterior Posterior) lezyonu tanısı, belirtileri ve tedavi seçenekleri. Omuz labrum yırtığı hakkında detaylı bilgi.',
    type: 'article',
    locale: 'tr_TR',
    url: 'https://www.ozguroktaynar.com/blog/slap-lezyonu-nedir',
    siteName: 'Op. Dr. Özgür Oktay Nar',
    images: [
      {
        url: 'https://placehold.co/1200x630/e2e8f0/475569?text=SLAP+Lezyonu',
        width: 1200,
        height: 630,
        alt: 'SLAP Lezyonu - Omuz Labrum Anatomisi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SLAP Lezyonu Nedir?',
    description: 'SLAP (Superior Labrum Anterior Posterior) lezyonu tanısı, belirtileri ve tedavi seçenekleri. Omuz labrum yırtığı hakkında detaylı bilgi.',
    images: ['https://placehold.co/1200x630/e2e8f0/475569?text=SLAP+Lezyonu'],
  },
  alternates: {
    canonical: 'https://www.ozguroktaynar.com/blog/slap-lezyonu-nedir',
  },
};

export default function BlogPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': 'https://www.ozguroktaynar.com/blog/slap-lezyonu-nedir#webpage',
        url: 'https://www.ozguroktaynar.com/blog/slap-lezyonu-nedir',
        name: 'SLAP Lezyonu Nedir?',
        description: 'SLAP (Superior Labrum Anterior Posterior) lezyonu tanısı, belirtileri ve tedavi seçenekleri. Omuz labrum yırtığı hakkında detaylı bilgi.',
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
          <span className="text-gray-700">SLAP Lezyonu</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">SLAP Lezyonu Nedir?</h1>
          <div className="flex items-center text-gray-600 text-sm mb-6">
            <span>Op. Dr. Özgür Oktay Nar</span>
            <span className="mx-2">•</span>
            <time>7 Şubat 2025</time>
          </div>
          <img
            src="https://placehold.co/1200x630/e2e8f0/475569?text=SLAP+Lezyonu"
            alt="SLAP Lezyonu - Omuz Labrum Anatomisi"
            className="w-full rounded-xl shadow-lg"
          />
        </header>

        {/* Main Content - 7 STEP ARCHITECTURE */}
        <div className="prose prose-lg max-w-none">
          
          {/* Section 1: Giriş */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Giriş</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Omuz ağrısı ve instabilite şikayetleri, özellikle fırlatma sporları yapan atletler 
              arasında yaygındır. Bu şikayetlerin önemli bir nedeni, labrumun (omuz ekleminin kıkırdak 
              halka yapısı) üst kısmında oluşan yırtıklar olan SLAP (Superior Labrum Anterior Posterior) 
              lezyonlarıdır.
            </p>
            <p className="text-gray-700 leading-relaxed">
              SLAP lezyonları hem akut travma hem de tekrarlayan stres sonucu gelişebilir. 
              Doğru tanı ve uygun tedavi ile sporcuların spora dönüşü ve günlük yaşam kalitesi 
              önemli ölçüde artırılabilir.
            </p>
          </section>

          {/* Section 2: Nedir / Tanım */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">SLAP Lezyonu Nedir?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              SLAP lezyonu, omuz eklemindeki glenoid (omuz çukuru) kemiğinin kenarını çevreleyen 
              labrum adı verilen fibrokartilaj halkanın üst (superior) kısmında oluşan yırtık veya 
              kopmalardır. SLAP, "Superior Labrum Anterior to Posterior" (üst labrum ön-arkaya) 
              ifadesinin kısaltmasıdır.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Labrum, omuz eklemini derinleştirerek stabiliteyi artırır ve biseps tendonunun 
              (uzun başı) tutunma yeridir. SLAP lezyonunda, biseps tendon tutunma bölgesi de 
              genellikle etkilenir, bu da omuzda ağrı, klik hissi ve güç kaybına neden olur.
            </p>
            <div className="bg-[#E6FAF8] p-6 rounded-lg">
              <p className="text-gray-800 font-semibold mb-2">📌 SLAP Tipleri (Snyder Sınıflandırması):</p>
              <ul className="text-gray-700 space-y-1 mt-2">
                <li><strong>Tip I:</strong> Üst labrum dejenerasyonu (kopma yok)</li>
                <li><strong>Tip II:</strong> Labrum ve biseps tendon tutunma yerinin kopması (en yaygın)</li>
                <li><strong>Tip III:</strong> Bucket-handle (kova sapı) tarzı yırtık</li>
                <li><strong>Tip IV:</strong> Bucket-handle yırtık + biseps tendon yırtığı</li>
              </ul>
            </div>
          </section>

          {/* Section 3: Belirtiler */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Belirtiler</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              SLAP lezyonunun belirtileri genellikle belirsizdir ve diğer omuz problemleriyle karışabilir:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Derin omuz ağrısı:</strong> Özellikle omuz hareketleri sırasında eklem içinde hissedilir</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Klik veya kilitlenme hissi:</strong> Kol hareketleri sırasında mekanik semptomlar</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Fırlatma sırasında ağrı:</strong> Overhead (baş üstü) aktivitelerde artan şikayetler</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Güç kaybı:</strong> Omuz gücünde ve dayanıklılıkta azalma</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>İnstabilite hissi:</strong> Omuzun yerinden çıkacakmış gibi hissetme</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Gece ağrısı:</strong> Özellikle yaralı tarafına yatarken</span>
              </li>
            </ul>
          </section>

          {/* Section 4: Tedavi Yöntemleri */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tedavi Yöntemleri</h2>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">Konservatif (Ameliyatsız) Tedavi</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tip I ve bazı Tip II SLAP lezyonlarında ameliyatsız tedavi denenebilir:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Aktivite modifikasyonu:</strong> Overhead aktivitelerden kaçınma, yükü azaltma</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Fizik tedavi:</strong> Rotator kılıf güçlendirme, skapular stabilizasyon egzersizleri</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Antiinflamatuar ilaçlar (NSAİD):</strong> Ağrı ve inflamasyonu kontrol eder</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Kortikosteroid enjeksiyonu:</strong> Akut ağrıda kısa süreli rahatlama sağlayabilir</span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">Cerrahi Tedavi (Artroskopik SLAP Onarımı)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Konservatif tedaviye yanıt vermeyen, mekanik semptomu olan veya Tip III-IV lezyonlarda 
              cerrahi önerilir:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Artroskopik debridman:</strong> Yırtık kenarlarda temizleme (Tip I)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Labral onarım (anchor tekniği):</strong> Labrum ve biseps tendon tutunma yerinin yeniden sabitlenmesi (Tip II-IV)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Biseps tenodezi:</strong> Yaşlı hastalarda biseps tendonunun farklı bir yere sabitlenmesi</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Ameliyat sonrası sling kullanımı (4-6 hafta), ardından kademeli fizik tedavi programı 
              uygulanır. Spora tam dönüş genellikle 4-6 ay içinde gerçekleşir.
            </p>
          </section>

          {/* Section 5: Sıkça Sorulan Sorular */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">SLAP lezyonu nasıl oluşur?</h3>
                <p className="text-gray-700">
                  İki ana mekanizma vardır: 1) Akut travma (düşme, omuzdan yere çarpma, ani yük kaldırma), 
                  2) Tekrarlayan stres (fırlatma, yüzme, halter, overhead çalışma). Fırlatma sporlarında 
                  (beyzbol, voleybol) deselerasyon fazında biseps tendonu labrum tutunma yerini tekrarlayan 
                  şekilde zorlar.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ameliyatsız tedavi başarılı olur mu?</h3>
                <p className="text-gray-700">
                  Tip I lezyonlarda ve semptomları hafif olan bazı Tip II vakalarda %40-60 başarı oranı vardır. 
                  Ancak genç sporcular ve overhead atlet popülasyonunda, fonksiyonel talepleri karşılamak için 
                  çoğunlukla cerrahi gerekir. 40 yaş üstü hastalarda ameliyatsız yöntemler daha başarılıdır.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ameliyat sonrası spora ne zaman dönebilirim?</h3>
                <p className="text-gray-700">
                  Hafif aktivitelere 3 ay, kontakt olmayan sporlara 4-5 ay, fırlatma sporlarına 6-9 ay 
                  içinde dönüş hedeflenir. Tam iyileşme ve performansa dönüş 9-12 ay sürebilir. 
                  Fizik tedavi programına uyum kritik öneme sahiptir.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">SLAP onarımı başarılı mıdır?</h3>
                <p className="text-gray-700">
                  Genel başarı oranı %70-85 arasındadır. Genç atletlerde ve Tip II lezyonlarda başarı 
                  daha yüksektir. Biseps tenodezi yapılan yaşlı hastalarda ağrı rahatlaması %90'ın 
                  üzerindedir. Deneyimli cerrah ve uygun rehabilitasyon sonuçları iyileştirir.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Kaynaklar */}
          <section className="mb-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kaynaklar</h2>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-700">
              <li>
                Snyder SJ, et al. "SLAP lesions of the shoulder" Arthroscopy. 1990.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=SLAP+lesion+shoulder+Snyder" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Weber SC, et al. "Arthroscopic management of type II SLAP lesions" Arthroscopy. 2002.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=type+II+SLAP+arthroscopic+management" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Brockmeier SF, et al. "Results of subpectoral biceps tenodesis for treatment of type II SLAP lesions" J Shoulder Elbow Surg. 2009.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=biceps+tenodesis+SLAP+lesion" 
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
              SLAP lezyonları, özellikle overhead sporcularda omuz ağrısı ve performans kaybının 
              önemli bir nedenidir. Doğru tanı için klinik muayene, MR artrografi ve deneyimli 
              değerlendirme gereklidir. Tedavi seçeneği hasta yaşı, aktivite düzeyi ve lezyon 
              tipine göre bireyselleştirilmelidir.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Omuz ağrınız, klik hissiniz veya performans kaybınız varsa, bir omuz cerrahisi 
              uzmanına başvurarak değerlendirme yapılması önerilir. Erken tanı ve uygun tedavi 
              ile spora güvenli dönüş ve kalıcı sorunların önüne geçilmesi mümkündür.
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
