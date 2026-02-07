import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Plantar Fasiit (Fasciitis) Nedir? Topuk Ağrısı Nedenleri | Op. Dr. Özgür Oktay Nar',
  description: 'Plantar fasiit nedir, belirtileri nelerdir, nasıl tedavi edilir? Topuk ağrısının en yaygın nedeni hakkında uzman ortopedi doktorundan bilgi.',
  keywords: 'plantar fasiit, plantar fasciitis, topuk ağrısı, topuk dikeni, ayak tabanı ağrısı, sabah topuk ağrısı',
  authors: [{ name: 'Op. Dr. Özgür Oktay Nar' }],
  openGraph: {
    title: 'Plantar Fasiit (Fasciitis) Nedir? Topuk Ağrısı Nedenleri',
    description: 'Plantar fasiit nedir, belirtileri nelerdir, nasıl tedavi edilir? Topuk ağrısının en yaygın nedeni hakkında uzman ortopedi doktorundan bilgi.',
    type: 'article',
    locale: 'tr_TR',
    url: 'https://www.ozguroktaynar.com/blog/plantar-fasiit-fasciitis-nedir',
    siteName: 'Op. Dr. Özgür Oktay Nar',
    images: [
      {
        url: 'https://placehold.co/1200x630/e2e8f0/475569?text=Plantar+Fasiit',
        width: 1200,
        height: 630,
        alt: 'Plantar fasiit anatomik görünüm',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plantar Fasiit (Fasciitis) Nedir? Topuk Ağrısı Nedenleri',
    description: 'Plantar fasiit nedir, belirtileri nelerdir, nasıl tedavi edilir? Topuk ağrısının en yaygın nedeni hakkında uzman ortopedi doktorundan bilgi.',
    images: ['https://placehold.co/1200x630/e2e8f0/475569?text=Plantar+Fasiit'],
  },
  alternates: {
    canonical: 'https://www.ozguroktaynar.com/blog/plantar-fasiit-fasciitis-nedir',
  },
};

export default function BlogPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': 'https://www.ozguroktaynar.com/blog/plantar-fasiit-fasciitis-nedir#webpage',
        url: 'https://www.ozguroktaynar.com/blog/plantar-fasiit-fasciitis-nedir',
        name: 'Plantar Fasiit (Fasciitis) Nedir? Topuk Ağrısı Nedenleri',
        description: 'Plantar fasiit nedir, belirtileri nelerdir, nasıl tedavi edilir? Topuk ağrısının en yaygın nedeni hakkında uzman ortopedi doktorundan bilgi.',
        datePublished: '2025-01-16T10:00:00+03:00',
        dateModified: '2025-01-16T10:00:00+03:00',
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
          <span className="text-gray-700">Plantar Fasiit Nedir?</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Plantar Fasiit (Fasciitis) Nedir? Topuk Ağrısı Nedenleri</h1>
          <div className="flex items-center text-gray-600 text-sm mb-6">
            <span>Op. Dr. Özgür Oktay Nar</span>
            <span className="mx-2">•</span>
            <time>16 Ocak 2025</time>
          </div>
          <img
            src="https://placehold.co/1200x630/e2e8f0/475569?text=Plantar+Fasiit"
            alt="Plantar fasiit anatomik görünüm"
            className="w-full rounded-xl shadow-lg"
          />
        </header>

        {/* Main Content - 7 STEP ARCHITECTURE */}
        <div className="prose prose-lg max-w-none">
          
          {/* Section 1: Giriş */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Giriş</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sabah yataktan kalktığınızda topuğunuza ilk bastığınız anda keskin bir ağrı hissediyor musunuz? Uzun süre oturup kalktıktan sonra adım atmakta zorlanıyor musunuz? Bu belirtiler plantar faseitis (plantar fasiit) işareti olabilir.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Plantar fasiit, yetişkinlerde topuk ağrısının en yaygın nedenidir ve her yıl milyonlarca kişiyi etkiler. Özellikle 40-60 yaş arası aktif bireylerde sık görülür. Bu yazıda plantar fasiitin ne olduğunu, neden geliştiğini, belirtilerini ve risk faktörlerini detaylı olarak inceleyeceğiz.
            </p>
          </section>

          {/* Section 2: Nedir / Tanım */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Plantar Fasiit Nedir?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Plantar fasiit, ayak tabanındaki kalın bağ dokusunun (plantar fasya) iltihaplanması ve dejenerasyonudur. Plantar fasya, topuk kemiğinden (kalkaneus) başlayıp ayak parmak tabanlarına uzanan fibröz bir yapıdır ve ayak tabanının kemerini destekler.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Normal koşullarda plantar fasya, yürürken ve koşarken vücut ağırlığınızı emer ve ayak kemerini korur. Ancak aşırı yüklenme, gerginlik veya tekrarlayan mikrotravmalar sonucunda bu doku hasar görür. Zamanla dokuda mikroskobik yırtıklar, iltihaplanma ve dejenerasyon gelişir.
            </p>
            <div className="bg-[#E6FAF8] p-6 rounded-lg mb-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Anatomik Yapı</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Plantar Fasya:</strong> Topuk kemiğinden ayak parmaklarına uzanan kalın, lifli bağ dokusu (yaklaşık 3-5 mm kalınlığında)</li>
                <li><strong>Tutunma Noktası:</strong> Topuk kemiğinin alt-ön kısmı (kalkaneal tüberkül) - en yaygın hasar bölgesi</li>
                <li><strong>Fonksiyonu:</strong> Ayak kemerini destekleme, yük dağılımı, enerji emilimi</li>
                <li><strong>Yüklenme:</strong> Her adımda vücut ağırlığınızın 1,2-2 katı kadar kuvvet taşır</li>
              </ul>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>İsimlendirme Notu:</strong> Geçmişte bu durum "plantar fasciitis" (iltihap anlamına gelir) olarak adlandırılsa da, güncel araştırmalar kronik vakalarda iltihaplanmadan çok dejenerasyon (doku yıpranması) olduğunu göstermiştir. Bu nedenle bazı uzmanlar "plantar fasiyopati" veya "plantar fasiyozis" terimlerini tercih eder. Ancak halk arasında ve tıbbi literatürde hâlâ "plantar fasiit" yaygın kullanılır.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Topuk Dikeni (Spur) İlişkisi:</strong> Plantar fasiit hastaların yaklaşık %50'sinde radyografide topuk dikeni görülür. Ancak topuk dikeni plantar fasiitin nedeni değil, kronik gerginliğin sonucudur. Birçok kişide topuk dikeni olmasına rağmen hiç ağrı yoktur. Ağrının kaynağı dikenden çok fasyanın kendisidir.
            </p>
          </section>

          {/* Section 3: Belirtiler */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Plantar Fasiit Belirtileri</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Plantar faseitis'in en karakteristik özelliği, sabah ilk adımda hissedilen topuk ağrısıdır. Belirtiler genellikle yavaş başlar ve zamanla şiddetlenir.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Primer Belirtiler</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>Sabah İlk Adım Ağrısı:</strong> Yataktan kalktığınızda topuğa ilk bastığınızda keskin, bıçak saplanır gibi ağrı (en karakteristik bulgu)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>Hareketsizlik Sonrası Ağrı:</strong> Uzun süre oturup kalktıktan, araç kullanırken veya sinema sonrası ilk adımlarda sertlik ve ağrı</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>Lokalize Ağrı:</strong> Topuk altının iç kısmında (medial kalkaneal tüberkül) hassasiyet ve basınca duyarlılık</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>Aktivite İle İlişkili Ağrı:</strong> Uzun yürüyüş, koşu, merdiven çıkma sonrası artan rahatsızlık</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>"Isınma" Etkisi:</strong> İlk ağrılı adımlardan sonra bir miktar rahatlar, ancak günün sonunda tekrar kötüleşir</span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ağrı Karakteri</h3>
            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <p className="text-gray-700 mb-3">
                <strong>Tipik Günlük Ağrı Paterni:</strong>
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>🌅 <strong>Sabah 6-8:</strong> En şiddetli (10/10 ağrı) - gece boyunca fasya kısalmış</li>
                <li>🌞 <strong>Öğlen:</strong> Hafiflemiş (3-4/10) - fasya gerilmiş</li>
                <li>🌆 <strong>Akşam:</strong> Tekrar artmış (6-8/10) - günlük yüklenme birikimi</li>
                <li>🌙 <strong>Gece:</strong> İstirahat ağrısı nadir (varsa ileri evre)</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">İlerlemiş Bulgular</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2 mt-1">!</span>
                <span><strong>Topallama:</strong> Ağrıdan kaçınmak için yürüyüş şeklinde değişiklik, parmak uçlarında yürüme</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2 mt-1">!</span>
                <span><strong>Bilateral Ağrı:</strong> Başlangıçta tek taraf, zamanla karşı ayak da etkilenir (kompansasyon nedeniyle)</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2 mt-1">!</span>
                <span><strong>Şişlik:</strong> Topuk altında hafif ödem ve kızarıklık (nadirdir, olursa ciddi inflamasyonu gösterir)</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2 mt-1">!</span>
                <span><strong>Bacak/Diz Ağrısı:</strong> Değişen yürüyüş mekaniği nedeniyle sekonder problemler</span>
              </li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <p className="text-gray-700">
                <strong>⚠️ Uyarı:</strong> Topuk ağrınız şu durumlardan biriyle birlikteyse MUTLAKA hekime başvurun:
                • Ateş, kızarıklık, şiddetli şişlik (enfeksiyon şüphesi)
                • Travma olmadan ani şiddetli ağrı (Aşil tendonu rüptürü)
                • Gece uykudan uyandıran ağrı (tümör, enfeksiyon)
                • Her iki ayakta simetrik ağrı + sabah sertliği {'>'}30 dk (romatizmal hastalık)
              </p>
            </div>
          </section>

          {/* Section 4: Nedenler ve Risk Faktörleri */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Plantar Fasiit Nedenleri ve Risk Faktörleri</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Anatomik ve Biyomekanik Faktörler</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2 mt-1">•</span>
                <span><strong>Yüksek Ayak Kemeri (Pes Kavus):</strong> Aşırı yüksek kemer, plantar fasyada gerginlik yaratır</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2 mt-1">•</span>
                <span><strong>Düz Tabanlık (Pes Planus):</strong> Düşük kemer, fasya üzerinde aşırı gerilme oluşturur</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2 mt-1">•</span>
                <span><strong>Pronasyon Bozuklukları:</strong> Aşırı içe yatma (overpronation) fasya gerginliğini artırır</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2 mt-1">•</span>
                <span><strong>Baldır Kasları Gerginliği:</strong> Gastroknemius ve soleus kaslarının sıkı olması ayak bileği hareketini kısıtlar, fasya yükünü artırır</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2 mt-1">•</span>
                <span><strong>Aşil Tendonu Sertliği:</strong> Dorsifleksiyon kısıtlılığı plantar fasyaya ek yük bindirir</span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Yaşam Tarzı ve Çevresel Faktörler</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2 mt-1">•</span>
                <span><strong>Obezite:</strong> Her fazla kilogram ayak tabanına 3-4 kg ek yük bindirir. VKİ {'>'}30 olan kişilerde risk 3 kat artar</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2 mt-1">•</span>
                <span><strong>Uzun Süre Ayakta Kalma:</strong> Öğretmen, sağlık çalışanı, fabrika işçisi gibi meslekler</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2 mt-1">•</span>
                <span><strong>Sert Zemin Üzerinde Çalışma:</strong> Beton, mermer gibi yüzeylerde yürümek şok emilimini azaltır</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2 mt-1">•</span>
                <span><strong>Uygunsuz Ayakkabı:</strong> Düz tabanlar, yüksek topuklu ayakkabılar, aşınmış tabanlar</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2 mt-1">•</span>
                <span><strong>Ani Aktivite Artışı:</strong> Hazırlıksız maraton koşusu, yeni spor başlangıcı</span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Demografik ve Sistemik Faktörler</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2 mt-1">•</span>
                <span><strong>Yaş:</strong> 40-60 yaş en yüksek risk grubu (doku elastikiyeti azalır)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2 mt-1">•</span>
                <span><strong>Cinsiyet:</strong> Kadınlarda erkeklerden 2 kat daha sık (yüksek topuklu ayakkabı, hamilelik)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2 mt-1">•</span>
                <span><strong>Diyabet:</strong> Plantar fasiit riski %20 artar (mikrovasküler sorunlar, nöropati)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2 mt-1">•</span>
                <span><strong>Romatizmal Hastalıklar:</strong> Ankilozan spondilit, reaktif artrit</span>
              </li>
            </ul>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Yüksek Riskli Aktiviteler</h3>
              <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                <div>
                  <strong>Sporlar:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• Koşu (özellikle asfalt üzerinde)</li>
                    <li>• Bale, dans</li>
                    <li>• Basketbol, voleybol</li>
                    <li>• Aerobik, step</li>
                  </ul>
                </div>
                <div>
                  <strong>Meslekler:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• Hemşire, doktor</li>
                    <li>• Öğretmen</li>
                    <li>• Fabrika çalışanı</li>
                    <li>• Garson, aşçı</li>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Plantar fasiit kendiliğinden geçer mi?</h3>
                <p className="text-gray-700">Bazı hafif vakalarda 6-12 ay içinde kendiliğinden düzelebilir, ancak bu süre boyunca yaşam kalitesi ciddi şekilde etkilenir. Tedavi edilmeyen vakalarda kronikleşme, kompansatuar diz/kalça/bel ağrısı riski vardır. Erken tedavi ile iyileşme süresi 4-8 haftaya iner ve tekrarlama riski azalır.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Topuk dikeni ile plantar fasiit aynı şey mi?</h3>
                <p className="text-gray-700">Hayır. Topuk dikeni (kalkaneal spur) topuk kemiğinde oluşan kemik çıkıntısıdır ve genellikle ağrısızdır. Plantar fasiit ise fasyanın iltihaplanması/dejenerasyonudur. %50 plantar fasiit hastasında topuk dikeni görülür, ancak dikenlerin çoğu semptomsuz. Tedavi plantar fasyaya yöneliktir, dikeni çıkarmaya gerek yoktur.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Plantar fasiitte ne tür ayakkabı giymeliyim?</h3>
                <p className="text-gray-700">
                  İdeal ayakkabı özellikleri:
                  • Topuk yüksekliği 2-3 cm (tamamen düz değil)
                  • İyi kemer desteği (arch support)
                  • Esnek ama destek sağlayan taban
                  • Arka kısmı sert (heel counter) - topuğu stabilize eder
                  • Önden geniş (ayak parmaklarına yer verir)
                  Ev terliği yerine destekli sandalet kullanın. Yalınayak dolaşmaktan kaçının.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Plantar fasiitte buz mu sıcak mı uygulamalıyım?</h3>
                <p className="text-gray-700">
                  <strong>Akut evrede (ilk 2-3 hafta):</strong> Buz uygulaması - günde 3-4 kez, 15-20 dakika. İltihabı azaltır.
                  <strong>Kronik evrede:</strong> Kontrast banyo (sıcak-soğuk dönüşümlü) veya ısı. Doku elastikiyetini artırır.
                  <strong>En iyi uygulama:</strong> Su dolu plastik şişeyi dondurarak ayak altında yuvarlamak - hem soğutma hem masaj etkisi.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Plantar fasiitte koşu yapabilir miyim?</h3>
                <p className="text-gray-700">Akut ağrılı dönemde koşuyu 4-6 hafta bırakmalısınız. Alternatif olarak yüzme, bisiklet, eliptik gibi düşük etki sporu yapabilirsiniz. Koşuya dönüş kademeli olmalı: önce yürüyüş, sonra hafif tempolu koşu, son olarak sprint. Ağrı tekrarlarsa durmalı ve fizik tedavi devam etmelidir.</p>
              </div>
            </div>
          </section>

          {/* Section 6: Kaynaklar */}
          <section className="mb-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kaynaklar</h2>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-700">
              <li>
                Thomas JL, et al. "The diagnosis and treatment of heel pain: a clinical practice guideline-revision 2010." J Foot Ankle Surg. 2010.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=thomas+diagnosis+treatment+heel+pain+clinical+practice+guideline" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Riddle DL, Schappert SM. "Volume of ambulatory care visits and patterns of care for patients diagnosed with plantar fasciitis: a national study of medical doctors." Foot Ankle Int. 2004.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=riddle+plantar+fasciitis+ambulatory+care+national+study" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Lemont H, Ammirati KM, Usen N. "Plantar fasciitis: a degenerative process (fasciosis) without inflammation." J Am Podiatr Med Assoc. 2003.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=lemont+plantar+fasciitis+degenerative+fasciosis" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                DiGiovanni BF, et al. "Tissue-specific plantar fascia-stretching exercise enhances outcomes in patients with chronic heel pain." J Bone Joint Surg Am. 2003.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=digiovanni+plantar+fascia+stretching+exercise+chronic+heel+pain" 
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
                <strong>İlgili İçerik:</strong> Plantar fasiit tedavisi için ameliyatsız seçenekler hakkında daha fazla bilgi almak isterseniz{' '}
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
              Plantar fasiit, yaygın ve tedavi edilebilir bir durumdur. Sabah topuk ağrısı yaşıyorsanız, erken dönemde bir ortopedi ve travmatoloji uzmanına danışmak uzun dönemli komplikasyonları önler ve iyileşme sürecini hızlandırır.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Çoğu hasta konservatif tedavi (fizik tedavi, egzersiz, ortez, ilaç) ile 3-6 ay içinde iyileşir. Unutmayın: sabır ve egzersiz düzenliliği başarının anahtarıdır. Ağrınızı görmezden gelmek, kronik ağrı ve yürüyüş bozukluklarına yol açabilir.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#01CAB8] to-[#01A899] rounded-xl p-8 text-center text-white mt-12">
          <h2 className="text-2xl font-bold mb-4">Topuk Ağrınız İçin Uzman Değerlendirmesi</h2>
          <p className="mb-6">Plantar fasiit teşhis ve tedavisi için randevu alın.</p>
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
