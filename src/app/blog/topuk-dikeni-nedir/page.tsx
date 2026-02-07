import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Topuk Dikeni (Plantar Fasciit) Nedir? | Op. Dr. Özgür Oktay Nar',
  description: 'Topuk dikeni (plantar fasciit) nedenleri, belirtileri ve tedavi yöntemleri. Sabah topuk ağrısı, tanı ve konservatif tedavi seçenekleri.',
  keywords: 'topuk dikeni, plantar fasciit, topuk ağrısı, ayak ağrısı, plantar fasya, ESWT tedavisi',
  authors: [{ name: 'Op. Dr. Özgür Oktay Nar' }],
  openGraph: {
    title: 'Topuk Dikeni (Plantar Fasciit) Nedir?',
    description: 'Topuk dikeni (plantar fasciit) nedenleri, belirtileri ve tedavi yöntemleri. Sabah topuk ağrısı, tanı ve konservatif tedavi seçenekleri.',
    type: 'article',
    locale: 'tr_TR',
    url: 'https://www.ozguroktaynar.com/blog/topuk-dikeni-nedir',
    siteName: 'Op. Dr. Özgür Oktay Nar',
    images: [
      {
        url: 'https://placehold.co/1200x630/e2e8f0/475569?text=Topuk+Dikeni',
        width: 1200,
        height: 630,
        alt: 'Topuk Dikeni - Plantar Fasciit Anatomisi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Topuk Dikeni (Plantar Fasciit) Nedir?',
    description: 'Topuk dikeni (plantar fasciit) nedenleri, belirtileri ve tedavi yöntemleri. Sabah topuk ağrısı, tanı ve konservatif tedavi seçenekleri.',
    images: ['https://placehold.co/1200x630/e2e8f0/475569?text=Topuk+Dikeni'],
  },
  alternates: {
    canonical: 'https://www.ozguroktaynar.com/blog/topuk-dikeni-nedir',
  },
};

export default function BlogPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': 'https://www.ozguroktaynar.com/blog/topuk-dikeni-nedir#webpage',
        url: 'https://www.ozguroktaynar.com/blog/topuk-dikeni-nedir',
        name: 'Topuk Dikeni (Plantar Fasciit) Nedir?',
        description: 'Topuk dikeni (plantar fasciit) nedenleri, belirtileri ve tedavi yöntemleri. Sabah topuk ağrısı, tanı ve konservatif tedavi seçenekleri.',
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
          <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">Topuk Dikeni (Plantar Fasciit)</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Topuk Dikeni (Plantar Fasciit) Nedir?</h1>
          <div className="flex items-center text-gray-600 text-sm mb-6">
            <span>Op. Dr. Özgür Oktay Nar</span>
            <span className="mx-2">•</span>
            <time>7 Şubat 2025</time>
          </div>
          <img
            src="https://placehold.co/1200x630/e2e8f0/475569?text=Topuk+Dikeni"
            alt="Topuk Dikeni - Plantar Fasciit Anatomisi"
            className="w-full rounded-xl shadow-lg"
          />
        </header>

        {/* Main Content - 7 STEP ARCHITECTURE */}
        <div className="prose prose-lg max-w-none">
          
          {/* Section 1: Giriş */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Giriş</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sabah yataktan kalktığınızda topuğunuzda batıcı bir ağrı hissediyor musunuz? 
              Uzun süre ayakta kalma veya yürüme sonrası topuk altında artan ağrı yaşıyorsanız, 
              topuk dikeni (plantar fasciit) ile karşı karşıya olabilirsiniz.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Topuk dikeni, erişkinlerdeki topuk ağrısının en yaygın nedenlerinden biridir ve 
              nüfusun yaklaşık %10'unu etkiler. Yanlış ayakkabı kullanımı, fazla kilolar, 
              aşırı yük ve tekrarlayan mikrotravmalar başlıca risk faktörleridir. 
              Doğru tedavi ile tam iyileşme mümkündür.
            </p>
          </section>

          {/* Section 2: Nedir / Tanım */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Topuk Dikeni (Plantar Fasciit) Nedir?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Plantar fasciit, ayak tabanını boydan boya uzanan kalın bir bağ dokusu olan 
              plantar fasyanın (özellikle topuk kemiğine tutunduğu bölgede) kronik inflamasyonu 
              ve dejenerasyonudur. Plantar fasya, ayak kemerini destekler ve yürüme sırasında 
              şok emici görevi görür.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Aşırı yük, tekrarlayan stres veya ani zorlanma sonucu plantar fasya tutunma yerinde 
              (kalkaneus - topuk kemiği) mikro yırtıklar, inflamasyon ve zamanla kalsiyum birikimi 
              (kemik mahmuzları) oluşur. Ağrı genellikle sabahları veya dinlenme sonrası ilk 
              adımlarda en şiddetlidir.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-800 font-semibold mb-2">📌 Önemli Not:</p>
              <p className="text-gray-700">
                "Topuk dikeni" terimi halk arasında yaygın olsa da, ağrının nedeni kemik mahmuzunun 
                kendisi değil, plantar fasyanın kronik inflamasyonu ve dejenerasyonudur. Mahmuzlar 
                genellikle asemptomatiktir ve tedavi gerektirmez.
              </p>
            </div>
          </section>

          {/* Section 3: Belirtiler */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Belirtiler</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Plantar fasciitin tipik belirtileri şunlardır:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Sabah ilk adım ağrısı:</strong> Yataktan kalktığınızda topuk altında keskin, batıcı ağrı (en karakteristik belirti)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Dinlenme sonrası ağrı:</strong> Uzun süre oturma veya dinlenme sonrası ayağa kalkarken artan ağrı</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Aktivite ile değişen ağrı:</strong> İlk adımlarda şiddetli, sonra hafifler, uzun aktivitede yeniden artar</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Topuk iç yüzünde hassasiyet:</strong> Topuk altının ön-iç kısmında palpasyonla ağrı</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Sert zemin üzerinde artan ağrı:</strong> Yalınayak veya ince tabanlı ayakkabılarla yürürken belirginleşir</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Topallama:</strong> İleri vakalarda yürüyüş bozukluğu</span>
              </li>
            </ul>
          </section>

          {/* Section 4: Tedavi Yöntemleri */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tedavi Yöntemleri</h2>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">Konservatif (Ameliyatsız) Tedavi</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Plantar fasciitin %90'ından fazlası ameliyatsız yöntemlerle iyileşir:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>İstirahat ve aktivite modifikasyonu:</strong> Koşu, uzun yürüyüş gibi ağrıyı artıran aktivitelerden kaçınma</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Buz uygulaması:</strong> Günde 3-4 kez 15-20 dakika soğuk kompres veya buz masajı</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Antiinflamatuar ilaçlar (NSAİD):</strong> Ağrı ve inflamasyonu azaltır</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Plantar fasya germe egzersizleri:</strong> Sabah ve gün içinde düzenli esneme (towel stretch, calf stretch)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Gece splinti:</strong> Plantar fasyayı gece boyunca gergin tutarak sabah ağrısını azaltır</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Ortopedik ayakkabı tabanlığı (ortez):</strong> Ayak kemerini destekler, topuk yastığı şok emicilik sağlar</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Fizik tedavi:</strong> Ultrason, TENS, laser tedavisi, manuel terapi</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Kortikosteroid enjeksiyonu:</strong> Dirençli ağrıda kısa vadeli rahatlama sağlayabilir (plantar fasya yırtık riski nedeniyle dikkatli kullanılmalı)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>PRP (Platelet-Rich Plasma) tedavisi:</strong> Kronik vakalarda plantar fasya rejenerasyonunu destekler</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Ekstrakorporeal Şok Dalga Tedavisi (ESWT):</strong> Kronik dirençli plantar fasciitte etkili, noninvaziv tedavi yöntemi</span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">Cerrahi Tedavi</h3>
            <p className="text-gray-700 leading-relaxed">
              6-12 aylık konservatif tedaviye rağmen iyileşmeyen dirençli vakalarda (%5) cerrahi 
              seçenek değerlendirilebilir. Ameliyatta plantar fasyanın kısmi gevşetilmesi 
              (plantar fasya release) veya kemik mahmuzunun çıkarılması yapılabilir. 
              Minimal invaziv endoskopik teknikler mevcuttur.
            </p>
          </section>

          {/* Section 5: Sıkça Sorulan Sorular */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Topuk dikeni ne kadar sürede iyileşir?</h3>
                <p className="text-gray-700">
                  Doğru tedavi ile 6-12 hafta içinde belirtilerde önemli azalma görülür. 
                  Ancak tam iyileşme 6-18 ay sürebilir. Kronik vakalarda tedavi süresi daha uzundur. 
                  Düzenli esneme egzersizleri, ortez kullanımı ve aktivite modifikasyonu kritiktir.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">En etkili tedavi yöntemi nedir?</h3>
                <p className="text-gray-700">
                  Tek bir "en etkili" tedavi yoktur. En başarılı sonuç, kombine yaklaşımla elde edilir: 
                  esneme egzersizleri + ortopedik tabanlik + gece splinti + aktivite modifikasyonu. 
                  Dirençli vakalarda ESWT (şok dalga) tedavisi %60-80 başarı oranı ile umut vericidir.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Hangi ayakkabıları kullanmalıyım?</h3>
                <p className="text-gray-700">
                  İyi kemer desteği olan, yeterli topuk yastığı bulunan, esnemeyen arka bölgeli, 
                  orta-hafif esnek tabanlı spor ayakkabılar idealdir. Yüksek topuklu, ince tabanlı, 
                  yalınayak kullanım, eski yıpranmış ayakkabılardan kaçınılmalıdır. 
                  Ortopedik tabanlik kullanımı önerilir.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Tekrarlama riski var mıdır?</h3>
                <p className="text-gray-700">
                  Uygun tedavi ve önleyici tedbirler alınmadan eski aktivite düzeyine dönülürse 
                  tekrarlama riski %25-40 arasındadır. Kilo kontrolü, düzenli esneme egzersizleri, 
                  uygun ayakkabı kullanımı, aktivite artışında kademeli ilerleme ile risk minimize edilir.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Kaynaklar */}
          <section className="mb-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kaynaklar</h2>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-700">
              <li>
                DiGiovanni BF, et al. "Plantar fascia-specific stretching exercise improves outcomes in patients with chronic plantar fasciitis" J Bone Joint Surg Am. 2006.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=plantar+fasciitis+stretching+exercise" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Rompe JD, et al. "Shock wave therapy for chronic plantar fasciopathy" BMJ. 2009.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=ESWT+plantar+fasciitis+treatment" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Thomas JL, et al. "The diagnosis and treatment of heel pain: a clinical practice guideline" J Foot Ankle Surg. 2010.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=heel+pain+clinical+practice+guideline" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
            </ol>
          </section>

          {/* Section 7: Internal Link - ZORUNLU! */}
          <section className="mb-12">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-gray-700">
                <strong>İlgili İçerik:</strong> Ameliyatsız tedavi seçenekleri hakkında daha fazla bilgi için{' '}
                <Link 
                  href="/ameliyatsiz-cozumler" 
                  className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
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
              Topuk dikeni (plantar fasciit), yaygın ancak uygun tedavi ile başarılı şekilde 
              yönetilebilen bir durumdur. Erken tanı, düzenli esneme egzersizleri, ortopedik 
              tabanlik kullanımı ve aktivite modifikasyonu ile vakaların büyük çoğunluğu ameliyatsız 
              iyileşir. Modern tedavi yöntemleri (ESWT, PRP) kronik dirençli vakalarda umut verici sonuçlar sağlamaktadır.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Topuk ağrınız günlük aktivitelerinizi kısıtlıyorsa, bir ortopedi uzmanına başvurarak 
              erken tanı konulması ve bireysel tedavi planı oluşturulması önerilir. Kilo kontrolü, 
              uygun ayakkabı seçimi ve düzenli egzersizlerle tekrarlama riskini minimize edebilirsiniz.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-center text-white mt-12">
          <h2 className="text-2xl font-bold mb-4">Randevu Almak İster misiniz?</h2>
          <p className="mb-6">Uzman değerlendirmesi için hemen iletişime geçin.</p>
          <Link 
            href="/iletisim" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Randevu Al
          </Link>
        </div>
      </article>
    </>
  );
}
