import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dupuytren Kontraktürü Nedir? Belirtileri ve Tedavisi | Op. Dr. Özgür Oktay Nar',
  description: 'Dupuytren kontraktürü (el kontraktürü) nedenleri, belirtileri ve tedavi seçenekleri hakkında detaylı bilgi. Ortopedi uzmanından kapsamlı rehber.',
  keywords: 'dupuytren kontraktürü, el kontraktürü, parmak büzülmesi, el cerrahisi, dupuytren tedavisi',
  authors: [{ name: 'Op. Dr. Özgür Oktay Nar' }],
  openGraph: {
    title: 'Dupuytren Kontraktürü Nedir? Belirtileri ve Tedavisi',
    description: 'Dupuytren kontraktürü (el kontraktürü) nedenleri, belirtileri ve tedavi seçenekleri hakkında detaylı bilgi.',
    type: 'article',
    locale: 'tr_TR',
    url: 'https://www.ozguroktaynar.com/blog/dupuytren-kontrakturu-nedir',
    siteName: 'Op. Dr. Özgür Oktay Nar',
    images: [
      {
        url: 'https://placehold.co/1200x630/e2e8f0/475569?text=Dupuytren+Kontrakturu',
        width: 1200,
        height: 630,
        alt: 'Dupuytren kontraktürü belirtileri ve tedavi yöntemleri',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dupuytren Kontraktürü Nedir? Belirtileri ve Tedavisi',
    description: 'Dupuytren kontraktürü (el kontraktürü) nedenleri, belirtileri ve tedavi seçenekleri hakkında detaylı bilgi.',
    images: ['https://placehold.co/1200x630/e2e8f0/475569?text=Dupuytren+Kontrakturu'],
  },
  alternates: {
    canonical: 'https://www.ozguroktaynar.com/blog/dupuytren-kontrakturu-nedir',
  },
};

export default function DupuytrenKonkrakturuPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': 'https://www.ozguroktaynar.com/blog/dupuytren-kontrakturu-nedir#webpage',
        url: 'https://www.ozguroktaynar.com/blog/dupuytren-kontrakturu-nedir',
        name: 'Dupuytren Kontraktürü Nedir? Belirtileri ve Tedavisi',
        description: 'Dupuytren kontraktürü nedenleri, belirtileri ve tedavi seçenekleri hakkında detaylı bilgi.',
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
          <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">Dupuytren Kontraktürü Nedir</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Dupuytren Kontraktürü Nedir? Belirtileri ve Tedavisi</h1>
          <div className="flex items-center text-gray-600 text-sm mb-6">
            <span>Op. Dr. Özgür Oktay Nar</span>
            <span className="mx-2">•</span>
            <time>16 Ocak 2025</time>
          </div>
          <img
            src="https://placehold.co/1200x630/e2e8f0/475569?text=Dupuytren+Kontrakturu"
            alt="Dupuytren kontraktürü belirtileri ve tedavi yöntemleri"
            className="w-full rounded-xl shadow-lg"
          />
        </header>

        {/* Main Content - 7 STEP ARCHITECTURE */}
        <div className="prose prose-lg max-w-none">
          
          {/* Section 1: Giriş */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Giriş</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dupuytren kontraktürü, el ayasında bulunan fasya dokusunun kalınlaşması ve kısalması sonucu parmakların 
              büzülmesine yol açan kronik bir hastalıktır. Genellikle yüzük parmağı ve serçe parmakta görülür, 
              zamanla günlük aktiviteleri önemli ölçüde kısıtlayabilir.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Bu durum, özellikle Kuzey Avrupa kökenli orta yaşlı erkeklerde daha sık görülmektedir. Hastalık genellikle 
              yavaş ilerler, ancak bazı hastalarda hızlı progresyon gösterebilir. Erken tanı ve uygun tedavi ile el 
              fonksiyonlarını korumak mümkündür.
            </p>
          </section>

          {/* Section 2: Nedir / Tanım */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Dupuytren Kontraktürü Nedir?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dupuytren kontraktürü, el içinde bulunan palmar fasya dokusunun aşırı fibrozisi (sertleşmesi) ve 
              kontraktürü ile karakterize ilerleyici bir hastalıktır. Palmar fasya, el ayasında bulunan ve parmak 
              fleksiyon mekanizmasına destek sağlayan lifli bağ dokusudur.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Hastalık sürecinde şu değişiklikler meydana gelir:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Nodül oluşumu:</strong> El ayasında sert düğümcükler</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Kord gelişimi:</strong> Nodüllerden parmak eklemlerine uzanan sert bantlar</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Kontraktür:</strong> Parmakların büzülmesi ve düzleşmemesi</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Fonksiyon kaybı:</strong> El tutuş ve kavrama bozuklukları</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Hastalık çoğunlukla bilateral (iki elde de) görülür, ancak bir elde diğerinden daha ağır seyredebilir. 
              En sık etkilenen parmaklar yüzük parmağı (%75) ve serçe parmak (%50)'tır.
            </p>
          </section>

          {/* Section 3: Nedenler ve Risk Faktörleri */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nedenler ve Risk Faktörleri</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dupuytren kontraktürünün kesin nedeni bilinmemekle birlikte, genetik yatkınlık ve çevresel faktörlerin 
              birlikte rol oynadığı düşünülmektedir.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Genetik Faktörler</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">→</span>
                  <span>Ailesel yatkınlık (hastaların %60-70'inde pozitif aile öyküsü)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">→</span>
                  <span>Kuzey Avrupa (Viking) kökenli olma (İskandinav ülkeleri, İngiltere, İrlanda)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">→</span>
                  <span>Erkek cinsiyet (erkeklerde 3-10 kat daha sık)</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Çevresel ve Metabolik Faktörler</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">→</span>
                  <span><strong>İleri yaş:</strong> 50 yaş üzeri prevalans artar</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">→</span>
                  <span><strong>Diabetes mellitus:</strong> Diyabetiklerde 3-4 kat artmış risk</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">→</span>
                  <span><strong>Alkol kullanımı:</strong> Kronik alkol tüketimi risk faktörü</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">→</span>
                  <span><strong>Sigara:</strong> Tütün kullanımı hastalık riskini artırır</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">→</span>
                  <span><strong>Epilepsi ilaçları:</strong> Özellikle fenitoin kullanımı</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">→</span>
                  <span><strong>El travması:</strong> Geçmiş el yaralanmaları</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">→</span>
                  <span><strong>Mesleki faktörler:</strong> Titreşim maruziyeti, tekrarlayan el travması</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4: Belirtiler ve Evreler */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Belirtiler ve Klinik Bulgular</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Erken Evre Belirtileri</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span>El ayasında küçük, sert nodül (düğümcük) hissedilmesi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span>El içinde çukurlaşma veya çöküntü görülmesi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span>Genellikle ağrısız, bazen hafif hassasiyet</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span>Cilt yüzeyinde buruşma veya çekilme</span>
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">İlerlemiş Evre Belirtileri</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✓</span>
                  <span>Parmakta progresif fleksiyon kontraktürü (büzülme)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✓</span>
                  <span>Parmağı tamamen düzeltememe</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✓</span>
                  <span>El ayasından parmağa uzanan sert kordlar</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✓</span>
                  <span>Tutuş ve kavrama güçlüğü</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✓</span>
                  <span>Günlük aktivitelerde zorluk (eldiven giyme, tokalaşma, cep kullanma)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 text-xl">✓</span>
                  <span>Cilt kalınlaşması ve sertleşmesi</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Tubiana Evreleme Sistemi</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Evre</th>
                    <th className="px-4 py-3 text-left font-semibold">Kontraktür Derecesi</th>
                    <th className="px-4 py-3 text-left font-semibold">Açıklama</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3">0</td>
                    <td className="px-4 py-3">0°</td>
                    <td className="px-4 py-3">Nodül var, kontraktür yok</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">I</td>
                    <td className="px-4 py-3">0-45°</td>
                    <td className="px-4 py-3">Hafif kontraktür</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">II</td>
                    <td className="px-4 py-3">45-90°</td>
                    <td className="px-4 py-3">Orta dereceli kontraktür</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">III</td>
                    <td className="px-4 py-3">90-135°</td>
                    <td className="px-4 py-3">İleri dereceli kontraktür</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">IV</td>
                    <td className="px-4 py-3">{'>'}135°</td>
                    <td className="px-4 py-3">Çok ileri kontraktür</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5: Tanı Yöntemleri */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tanı Yöntemleri</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dupuytren kontraktürü tanısı genellikle fizik muayene ile konulur. Görüntüleme yöntemlerine nadiren ihtiyaç duyulur.
            </p>

            <div className="space-y-4">
              <div className="bg-blue-50 p-5 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">📋 Anamnez</h3>
                <p className="text-gray-700">
                  Aile öyküsü, mesleki maruziyetler, diabetes mellitus varlığı, alkol-sigara kullanımı sorgulanır.
                </p>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">👐 Fizik Muayene</h3>
                <ul className="text-gray-700 space-y-2">
                  <li><strong>İnspeksiyon:</strong> Nodül, kord, cilt değişiklikleri</li>
                  <li><strong>Palpasyon:</strong> Nodüllerin konsistansı, hassasiyet</li>
                  <li><strong>Tabletop testi:</strong> El düz yüzeye basıldığında parmakların düzleşememe durumu (pozitif test: kontraktür varlığını gösterir)</li>
                  <li><strong>Eklem hareket açıklığı:</strong> MCP, PIP eklem açılarının ölçümü</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">🔬 Ayırıcı Tanı</h3>
                <p className="text-gray-700">
                  Trigger parmak, kapsülitis, tendon yaralanması, tümörler gibi durumlardan ayırt edilmelidir.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Tedavi Yöntemleri */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tedavi Yöntemleri</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Konservatif (Gözlem) Yaklaşımı</h3>
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700 mb-3">
                Erken evrede ve minimal fonksiyon kaybında gözlem uygun olabilir:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">→</span>
                  <span>Düzenli takip (6-12 aylık kontroller)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">→</span>
                  <span>El egzersizleri ve germe</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">→</span>
                  <span>Splint kullanımı (gece splinti)</span>
                </li>
              </ul>
              <p className="text-gray-600 text-sm mt-3">
                ⚠️ Not: Masaj, fizik tedavi, ilaç tedavileri hastalık progresyonunu durduramaz.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Minimal İnvaziv Tedaviler</h3>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">1. Kolajenaz Enjeksiyonu (Xiapex/Xiaflex)</h4>
              <p className="text-gray-700 mb-2">
                Korda enjekte edilen kollajenaz enzimi, fibrozik bant dokusunu eritir.
              </p>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Ofis prosedürü, lokal anestezi</li>
                <li>• Evre I-II hastalar için uygun</li>
                <li>• Düşük komplikasyon riski</li>
                <li>• Nüks oranı cerrahi kadar</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">2. Perkütan İğne Aponeurotomisi (Needle Fasciotomy)</h4>
              <p className="text-gray-700 mb-2">
                İğne ile kontraktüre dokuyu perkütan olarak keserek açma.
              </p>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Ofis prosedürü, lokal anestezi</li>
                <li>• Hızlı iyileşme</li>
                <li>• MCP eklem kontraktürlerinde daha etkili</li>
                <li>• Yüksek nüks riski (%50-70)</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Cerrahi Tedavi</h3>
            
            <div className="bg-purple-50 p-6 rounded-lg mb-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">1. Fasiyektomi (En Yaygın Cerrahi Yöntem)</h4>
              <p className="text-gray-700 mb-2">
                Hasta fasya dokusunun cerrahi olarak çıkarılması.
              </p>
              <ul className="text-gray-700 space-y-1">
                <li>• <strong>Sınırlı (Segmental) Fasiyektomi:</strong> Sadece hasta bölgenin çıkarılması</li>
                <li>• <strong>Regional Fasiyektomi:</strong> Daha geniş alan tedavisi</li>
                <li>• <strong>Total Palmar Fasiyektomi:</strong> Tüm palmar fasya çıkarılması (nadir)</li>
              </ul>
              <p className="text-gray-700 mt-2">
                <strong>Avantajlar:</strong> Düşük nüks oranı (%10-30), uzun süreli sonuçlar
              </p>
              <p className="text-gray-700">
                <strong>Dezavantajlar:</strong> Uzun iyileşme, komplikasyon riski (sinir, damar yaralanması)
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">2. Dermofasiyektomi</h4>
              <p className="text-gray-700 mb-2">
                Hasta fasya ile birlikte üzerindeki cildin de çıkarılması, cilt grefti ile onarım.
              </p>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Ağır, rekürren vakalarda</li>
                <li>• En düşük nüks oranı (%5-10)</li>
                <li>• En invaziv yöntem</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Tedavi Sonrası Rehabilitasyon</h3>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">→</span>
                  <span>Erken mobilizasyon (24-48 saat içinde)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">→</span>
                  <span>El terapisi ve egzersizler</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">→</span>
                  <span>Gece splinti kullanımı (3-6 ay)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">→</span>
                  <span>Skar masajı</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">→</span>
                  <span>Düzenli kontrol muayeneleri</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 7: Sıkça Sorulan Sorular */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Dupuytren kontraktürü tamamen iyileşir mi?</h3>
                <p className="text-gray-700">
                  Tedavi ile parmak fonksiyonu büyük ölçüde düzeltilebilir, ancak hastalık kronik bir durumdur ve 
                  nüks (tekrarlama) riski vardır. Cerrahi sonrası nüks oranı yöntemine göre %10-70 arasında değişir.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Hangi tedavi yöntemi en iyisidir?</h3>
                <p className="text-gray-700">
                  En iyi tedavi hastanın yaşına, aktivite düzeyine, hastalık evresine ve tercihlerine göre bireyselleştirilmelidir. 
                  Erken evrede minimal invaziv yöntemler (enjeksiyon, needle fasciotomy) tercih edilebilirken, ileri evrede 
                  cerrahi fasiyektomi altın standarttır.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ne zaman ameliyat olmalıyım?</h3>
                <p className="text-gray-700">
                  Genellikle MCP eklem kontraktürü ≥30° veya PIP eklem kontraktürü ≥20° olduğunda cerrahi endikasyon oluşur. 
                  Ayrıca günlük aktivitelerde ciddi kısıtlama varsa tedavi düşünülmelidir.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Dupuytren kontraktürü önlenebilir mi?</h3>
                <p className="text-gray-700">
                  Genetik yatkınlık nedeniyle hastalığın tamamen önlenmesi mümkün değildir. Ancak sigara ve alkol 
                  kullanımından kaçınmak, diabetes kontrolü sağlamak, el yaralanmalarından korunmak risk faktörlerini azaltabilir.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8: Kaynaklar */}
          <section className="mb-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kaynaklar</h2>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-700">
              <li>
                Luck JV. "Dupuytren's contracture; a new concept of the pathogenesis correlated with surgical management" 
                J Bone Joint Surg Am. 1959.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=dupuytren+contracture+pathogenesis+luck" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Hurst LC, et al. "Injectable collagenase clostridium histolyticum for Dupuytren's contracture" 
                N Engl J Med. 2009.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=collagenase+dupuytren+hurst+nejm" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Rodrigues JN, et al. "Surgery for Dupuytren's contracture of the fingers" 
                Cochrane Database Syst Rev. 2015.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=dupuytren+surgery+cochrane" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
            </ol>
          </section>

          {/* Section 9: Internal Link - ZORUNLU! */}
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
              Dupuytren kontraktürü, kronik ve ilerleyici bir el hastalığıdır. Erken tanı ve uygun tedavi seçimiyle 
              el fonksiyonlarının korunması ve yaşam kalitesinin artırılması mümkündür.
            </p>
            <p className="text-gray-700 leading-relaxed">
              El ayasında nodül fark ederseniz veya parmağınızda büzülme başladıysa, bir el cerrahisi uzmanına başvurarak 
              değerlendirme yaptırmanız önerilir. Tedavi seçenekleri bireyselleştirilerek size en uygun yöntem belirlenecektir.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-center text-white mt-12">
          <h2 className="text-2xl font-bold mb-4">El Sağlığınız İçin Uzman Değerlendirmesi</h2>
          <p className="mb-6">Dupuytren kontraktürü veya el problemleriniz için detaylı muayene ve tedavi planlaması.</p>
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
