import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Omuz Sıkışması Nedir? Belirtileri ve Nedenleri | Op. Dr. Özgür Oktay Nar',
  description: 'Omuz sıkışması (impingement sendromu) nedir, belirtileri nelerdir, nasıl teşhis edilir? Uzman ortopedi doktorundan detaylı bilgi.',
  keywords: 'omuz sıkışması, impingement sendromu, omuz ağrısı, rotator kılıf, omuz belirtileri, subacromial sıkışma',
  authors: [{ name: 'Op. Dr. Özgür Oktay Nar' }],
  openGraph: {
    title: 'Omuz Sıkışması Nedir? Belirtileri ve Nedenleri',
    description: 'Omuz sıkışması (impingement sendromu) nedir, belirtileri nelerdir, nasıl teşhis edilir? Uzman ortopedi doktorundan detaylı bilgi.',
    type: 'article',
    locale: 'tr_TR',
    url: 'https://www.ozguroktaynar.com/blog/omuz-sikismasi-nedir',
    siteName: 'Op. Dr. Özgür Oktay Nar',
    images: [
      {
        url: 'https://placehold.co/1200x630/e2e8f0/475569?text=Omuz+Sikismasi',
        width: 1200,
        height: 630,
        alt: 'Omuz sıkışması anatomik görünüm',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omuz Sıkışması Nedir? Belirtileri ve Nedenleri',
    description: 'Omuz sıkışması (impingement sendromu) nedir, belirtileri nelerdir, nasıl teşhis edilir? Uzman ortopedi doktorundan detaylı bilgi.',
    images: ['https://placehold.co/1200x630/e2e8f0/475569?text=Omuz+Sikismasi'],
  },
  alternates: {
    canonical: 'https://www.ozguroktaynar.com/blog/omuz-sikismasi-nedir',
  },
};

export default function BlogPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': 'https://www.ozguroktaynar.com/blog/omuz-sikismasi-nedir#webpage',
        url: 'https://www.ozguroktaynar.com/blog/omuz-sikismasi-nedir',
        name: 'Omuz Sıkışması Nedir? Belirtileri ve Nedenleri',
        description: 'Omuz sıkışması (impingement sendromu) nedir, belirtileri nelerdir, nasıl teşhis edilir? Uzman ortopedi doktorundan detaylı bilgi.',
        datePublished: '2025-01-15T10:00:00+03:00',
        dateModified: '2025-01-15T10:00:00+03:00',
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
          <span className="text-gray-700">Omuz Sıkışması Nedir?</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Omuz Sıkışması Nedir? Belirtileri ve Nedenleri</h1>
          <div className="flex items-center text-gray-600 text-sm mb-6">
            <span>Op. Dr. Özgür Oktay Nar</span>
            <span className="mx-2">•</span>
            <time>15 Ocak 2025</time>
          </div>
          <img
            src="https://www.drozguroktaynar.com/wp-content/uploads/2025/11/omuz-sikismasi-1.webp"
            alt="Omuz sıkışması anatomik görünüm"
            className="w-full rounded-xl shadow-lg"
          />
        </header>

        {/* Main Content - 7 STEP ARCHITECTURE */}
        <div className="prose prose-lg max-w-none">
          
          {/* Section 1: Giriş */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Giriş</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Omuz ağrısı yaşayan her dört kişiden birinde omuz sıkışması (impingement sendromu) görülür. Özellikle kol kaldırma hareketlerinde ortaya çıkan bu rahatsızlık, günlük yaşam aktivitelerini ciddi şekilde kısıtlayabilir.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Bu yazıda omuz sıkışmasının ne olduğunu, nasıl geliştiğini, belirtilerini ve risk faktörlerini detaylı olarak ele alacağız. Erken tanı ve doğru yaklaşım, bu rahatsızlığın tedavisinde kritik öneme sahiptir.
            </p>
          </section>

          {/* Section 2: Nedir / Tanım */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Omuz Sıkışması (Impingement Sendromu) Nedir?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Omuz sıkışması, omuz ekleminde rotator kılıf kaslarının tendonları ile akromion kemiği (kürek kemiğinin üst çıkıntısı) arasındaki mesafenin daralması sonucu gelişen bir durumdur. Bu daralma, kolunuzu yukarı kaldırdığınızda tendonların sıkışmasına ve sürtünmesine neden olur.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Normal omuz hareketinde, rotator kılıf kasları kol kemiğini (humerus) omuz çukurunda (glenoid) stabil tutar. Ancak sıkışma durumunda, tendonlar ve bursa (yastıkçık doku) akromion ile kol kemiği arasında sıkışır. Bu sürekli sürtünme, iltihaplanma ve ağrıya yol açar.
            </p>
            <div className="bg-[#E6FAF8] p-6 rounded-lg mb-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Anatomik Yapılar</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Akromion:</strong> Kürek kemiğinin omuz eklemini örten çıkıntısı</li>
                <li><strong>Rotator Kılıf:</strong> Omuzu hareket ettiren ve stabilize eden 4 kas grubu</li>
                <li><strong>Bursa:</strong> Kemik ve tendon arasında sürtünmeyi azaltan yastıkçık</li>
                <li><strong>Subacromial Boşluk:</strong> Akromion ile kol kemiği arasındaki kritik alan</li>
              </ul>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Sıkışma genellikle subacromial bursanın iltihaplanması (bursit) ile başlar ve zamanla rotator kılıf tendonlarında hasar (tendinit) gelişir. Tedavi edilmezse tendon yırtıklarına kadar ilerleyebilir.
            </p>
          </section>

          {/* Section 3: Belirtiler */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Omuz Sıkışması Belirtileri</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Omuz sıkışması belirtileri genellikle yavaş başlar ve zamanla şiddetlenir. En karakteristik özellik, belirli hareketlerde artan ağrıdır.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Primer Belirtiler</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>Kol Kaldırmada Ağrı:</strong> Kolunuzu başınızın üzerine kaldırmaya çalıştığınızda keskin veya zonklayan ağrı (özellikle 60-120 derece aralığında)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>Gece Ağrısı:</strong> Özellikle ağrıyan omuz üzerine yatarken artan rahatsızlık, uyku bozukluğu</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>Omuz Önünde Ağrı:</strong> Akromion altında ve omuz ön kısmında lokalize hassasiyet</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>Güç Kaybı:</strong> Özellikle kol kaldırma ve dış rotasyon hareketlerinde zayıflık</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>Eklem Sertliği:</strong> Sabah uyandığınızda veya uzun hareketsizlik sonrası omuzda katılık</span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">İlerlemiş Bulgular</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2 mt-1">!</span>
                <span><strong>Kol Arkaya Götürmede Zorluk:</strong> Ceket giyerken, bel kemerine uzanırken şiddetli ağrı</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2 mt-1">!</span>
                <span><strong>İstirahat Ağrısı:</strong> Hareket etmediğiniz zamanlarda bile süregelen ağrı</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2 mt-1">!</span>
                <span><strong>Kas Atrofisi:</strong> Omuz kaslarında erime ve şekil bozukluğu</span>
              </li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <p className="text-gray-700">
                <strong>⚠️ Uyarı:</strong> Kol kaldırırken "painful arc" (ağrılı yay) hissediyorsanız - yani kolunuzu kaldırırken belirli bir açıda şiddetli ağrı başlıyor ve daha yukarı kaldırdığınızda azalıyorsa - bu omuz sıkışmasının karakteristik bulgusudur. Mutlaka bir ortopedi uzmanına danışın.
              </p>
            </div>
          </section>

          {/* Section 4: Nedenler ve Risk Faktörleri */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Omuz Sıkışması Nedenleri ve Risk Faktörleri</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Anatomik Nedenler</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bazı kişilerde omuz sıkışması gelişme riski anatomik yapı nedeniyle daha yüksektir:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2 mt-1">•</span>
                <span><strong>Akromion Şekli:</strong> Kancalı (tip III) akromion, düz akromiona göre sıkışma riskini 3 kat artırır</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2 mt-1">•</span>
                <span><strong>Akromiyoklaviküler Eklem Artrozu:</strong> Bu eklemdeki kemik mahmuzları subacromial alanı daraltır</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2 mt-1">•</span>
                <span><strong>Genetik Yatkınlık:</strong> Ailesel olarak dar subacromial boşluk</span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Kazanılmış (Sekonder) Nedenler</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2 mt-1">•</span>
                <span><strong>Tekrarlayan Baş Üstü Hareketler:</strong> Yüzme, voleybol, tenis, boyacılık gibi aktiviteler</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2 mt-1">•</span>
                <span><strong>Kötü Postür:</strong> Öne eğik omuzlar subacromial alanı daraltır</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2 mt-1">•</span>
                <span><strong>Rotator Kılıf Zayıflığı:</strong> Kas dengesizliği kol kemiğinin yukarı kaymasına neden olur</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2 mt-1">•</span>
                <span><strong>Yaşlanma:</strong> 40 yaş üzeri tendon dejenerasyonu riski artar</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2 mt-1">•</span>
                <span><strong>Travma:</strong> Omuz çarpması, düşme sonrası bursa şişmesi</span>
              </li>
            </ul>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Yüksek Riskli Meslekler ve Aktiviteler</h3>
              <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                <div>
                  <strong>Meslekler:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• Boyacı, sıvacı</li>
                    <li>• Kuaför</li>
                    <li>• Mimar, mühendis (uzun CAD çalışması)</li>
                    <li>• İnşaat işçisi</li>
                  </ul>
                </div>
                <div>
                  <strong>Sporlar:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• Yüzme (özellikle kelebek, serbest)</li>
                    <li>• Tenis, voleybol</li>
                    <li>• Basketbol</li>
                    <li>• Ağırlık kaldırma</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Sıkça Sorulan Sorular */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Omuz sıkışması kendiliğinden geçer mi?</h3>
                <p className="text-gray-700">Erken evrede ve hafif vakalarda, aktivite modifikasyonu ve antiinflamatuar ilaçlarla belirtiler geçebilir. Ancak altındaki yapısal sorun devam ediyorsa (örneğin kancalı akromion), tekrarlama riski yüksektir. Fizik tedavi ve egzersiz programı olmadan tamamen iyileşme nadirdir.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Omuz sıkışması ile rotator kılıf yırtığı aynı şey mi?</h3>
                <p className="text-gray-700">Hayır. Omuz sıkışması tendonların akromion altında sıkışıp iltihaplanmasıdır (tendinit). Rotator kılıf yırtığı ise tendonun kısmen veya tamamen kopmasıdır. Ancak tedavi edilmeyen kronik sıkışma, zamanla yırtığa ilerleyebilir. Bu yüzden erken tedavi çok önemlidir.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Omuz sıkışmasında hangi hareketlerden kaçınmalıyım?</h3>
                <p className="text-gray-700">
                  Akut dönemde şu hareketlerden kaçının:
                  • Baş üstü kaldırma (raf, dolap kullanma)
                  • Kol arkaya götürme (ceket giyerken)
                  • Ağır yük taşıma
                  • Yatarken ağrıyan omuz üzerine uzanma
                  Bunun yerine kolunuzu vücudunuza yakın tutun ve yavaş, kontrollü hareketler yapın.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Omuz sıkışması nasıl teşhis edilir?</h3>
                <p className="text-gray-700">Teşhis klinik muayene ile başlar. Doktorunuz özel testler (Neer testi, Hawkins-Kennedy testi) uygular. Radyolojik olarak direkt grafi, ultrasonografi veya MR kullanılabilir. MR, yumuşak doku detayı için altın standarttır ve rotator kılıf durumunu net gösterir.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Omuz sıkışması tekrarlar mı?</h3>
                <p className="text-gray-700">Tedavi sonrası düzgün egzersiz programı uygulamazsanız veya risk faktörleriniz (örneğin mesleki zorlama) devam ederse tekrarlama riski yüksektir. Kısa ve uzun dönem egzersizler, postür düzeltme ve ergonomik düzenlemeler tekrarı önlemede kritiktir.</p>
              </div>
            </div>
          </section>

          {/* Section 6: Kaynaklar */}
          <section className="mb-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kaynaklar</h2>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-700">
              <li>
                Neer CS 2nd. "Anterior acromioplasty for the chronic impingement syndrome in the shoulder: a preliminary report." J Bone Joint Surg Am. 1972.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=neer+anterior+acromioplasty+impingement" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Michener LA, et al. "Anatomical and biomechanical mechanisms of subacromial impingement syndrome." Clin Biomech. 2003.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=michener+subacromial+impingement+biomechanical" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Bigliani LU, Morrison DS, April EW. "The morphology of the acromion and its relationship to rotator cuff tears." Orthop Trans. 1986.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=bigliani+acromion+morphology+rotator+cuff" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Lewis JS. "Rotator cuff tendinopathy/subacromial impingement syndrome: is it time for a new method of assessment?" Br J Sports Med. 2009.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=lewis+rotator+cuff+tendinopathy+assessment" 
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
                <strong>İlgili İçerik:</strong> Omuz sıkışması tedavisi için ameliyatsız seçenekler hakkında daha fazla bilgi almak isterseniz{' '}
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
              Omuz sıkışması, zamanında tanı konulduğunda ve doğru tedavi edildiğinde başarıyla yönetilebilen bir durumdur. Belirtileri hafife almadan, erken dönemde uzman değerlendirmesi almak, kronik ağrı ve rotator kılıf yırtığı gibi komplikasyonları önler.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Özellikle baş üstü hareketler gerektiren mesleklerde çalışıyorsanız veya sporla uğraşıyorsanız, düzenli omuz güçlendirme egzersizleri ve postür kontrolü yapmanız önemlidir. Ağrınız 2 haftadan uzun sürüyorsa veya gece uykudan uyandırıyorsa mutlaka bir ortopedi ve travmatoloji uzmanına başvurun.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#01CAB8] to-[#01A899] rounded-xl p-8 text-center text-white mt-12">
          <h2 className="text-2xl font-bold mb-4">Omuz Ağrınız İçin Uzman Değerlendirmesi</h2>
          <p className="mb-6">Omuz sıkışması teşhis ve tedavisi için randevu alın.</p>
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
