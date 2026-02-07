import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Karpal Tünel Sendromu Nedir? Belirtileri ve Tedavisi | Op. Dr. Özgür Oktay Nar',
  description: 'Karpal tünel sendromu (el bilek sıkışması) nedenleri, belirtileri, tanı yöntemleri ve tedavi seçenekleri hakkında detaylı bilgi.',
  keywords: 'karpal tünel sendromu, el bilek sıkışması, median sinir sıkışması, el uyuşması, kts tedavisi',
  authors: [{ name: 'Op. Dr. Özgür Oktay Nar' }],
  openGraph: {
    title: 'Karpal Tünel Sendromu Nedir? Belirtileri ve Tedavisi',
    description: 'Karpal tünel sendromu (el bilek sıkışması) nedenleri, belirtileri, tanı yöntemleri ve tedavi seçenekleri hakkında detaylı bilgi.',
    type: 'article',
    locale: 'tr_TR',
    url: 'https://www.ozguroktaynar.com/blog/karpal-tunel-sendromu-2',
    siteName: 'Op. Dr. Özgür Oktay Nar',
    images: [
      {
        url: 'https://placehold.co/1200x630/e2e8f0/475569?text=Karpal+Tunel+Sendromu',
        width: 1200,
        height: 630,
        alt: 'Karpal tünel sendromu belirtileri ve tedavisi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karpal tünel Sendromu Nedir? Belirtileri ve Tedavisi',
    description: 'Karpal tünel sendromu (el bilek sıkışması) nedenleri, belirtileri, tanı yöntemleri ve tedavi seçenekleri hakkında detaylı bilgi.',
    images: ['https://placehold.co/1200x630/e2e8f0/475569?text=Karpal+Tunel+Sendromu'],
  },
  alternates: {
    canonical: 'https://www.ozguroktaynar.com/blog/karpal-tunel-sendromu-2',
  },
};

export default function KarpalTunelSendromuPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': 'https://www.ozguroktaynar.com/blog/karpal-tunel-sendromu-2#webpage',
        url: 'https://www.ozguroktaynar.com/blog/karpal-tunel-sendromu-2',
        name: 'Karpal Tünel Sendromu Nedir? Belirtileri ve Tedavisi',
        description: 'Karpal tünel sendromu nedenleri, belirtileri, tanı yöntemleri ve tedavi seçenekleri hakkında detaylı bilgi.',
        datePublished: '2025-01-20T10:00:00+03:00',
        dateModified: '2025-01-20T10:00:00+03:00',
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
          <span className="text-gray-700">Karpal Tünel Sendromu</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Karpal Tünel Sendromu Nedir? Belirtileri ve Tedavisi</h1>
          <div className="flex items-center text-gray-600 text-sm mb-6">
            <span>Op. Dr. Özgür Oktay Nar</span>
            <span className="mx-2">•</span>
            <time>20 Ocak 2025</time>
          </div>
          <img
            src="https://placehold.co/1200x630/e2e8f0/475569?text=Karpal+Tunel+Sendromu"
            alt="Karpal tünel sendromu belirtileri ve tedavisi"
            className="w-full rounded-xl shadow-lg"
          />
        </header>

        {/* Main Content - 7 STEP ARCHITECTURE */}
        <div className="prose prose-lg max-w-none">
          
          {/* Section 1: Giriş */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Giriş</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Karpal tünel sendromu (KTS), el bileğinden geçen median sinirin sıkışması sonucu ortaya çıkan 
              en yaygın tuzak nöropatisidir. El ve parmakta uyuşma, karıncalanma ve ağrı ile karakterizedir. 
              Özellikle bilgisayar kullanıcıları, sekreterler, kasiyerler gibi tekrarlayan el hareketleri yapan 
              kişilerde sık görülür.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Kadınlarda erkeklere göre 3-10 kat daha fazla görülür. 40-60 yaş arasında en sık karşılaşılır. 
              Erken tanı ve tedavi ile sinir hasarı önlenebilir ve semptomlar tamamen ortadan kaldırılabilir.
            </p>
          </section>

          {/* Section 2: Nedir / Tanım */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Karpal Tünel Sendromu Nedir?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Karpal tünel, el bileğinin içinden geçen kemik ve bağlarla çevrili dar bir kanaldır. Bu tünelden 
              median sinir ve 9 fleksör tendon geçer. Karpal tünel sendromu, median sinirin bu tünel içinde 
              sıkışması ve bası altında kalması sonucu gelişir.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Anatomik Yapı</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Karpal kemikler:</strong> El bileği tabanını oluşturan 8 küçük kemik</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Transvers karpal ligament (Flexor retinaculum):</strong> Tünelin tavanını oluşturan sıkı bağ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Median sinir:</strong> Baş parmak, işaret parmağı, orta parmak ve yüzük parmağının yarısına duyu ve tenar kaslara motor fonksiyon sağlar</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Fleksör tendonlar:</strong> Parmakları bükmek için gerekli tendonlar</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Tünel içindeki basınç artışı (ödem, inflamasyon, kitle) veya tünel hacminin daralması 
              (kırık, artrit) median sinire bası uygular ve sinir fonksiyonunu bozar.
            </p>
          </section>

          {/* Section 3: Nedenler ve Risk Faktörleri */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nedenler ve Risk Faktörleri</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              KTS genellikle multifaktöriyeldir (birden fazla neden birlikte rol oynar).
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Anatomik ve Yapısal Faktörler</h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Dar karpal tünel (konjenital)</li>
                <li>• El bilek kırıkları ve deformiteleri</li>
                <li>• Artrit (osteoartrit, romatoid artrit)</li>
                <li>• Ganglion kisti, lipom gibi kitleler</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mesleki ve Aktiviteyle İlgili Faktörler</h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Tekrarlayan el bilek hareketleri (bilgisayar kullanımı, montaj işleri)</li>
                <li>• Titreşimli alet kullanımı (matkap, testere)</li>
                <li>• Kuvvetli tutuş gerektiren işler</li>
                <li>• Uzun süreli el bilek fleksiyonu veya ekstansiyonu</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sistemik ve Metabolik Hastalıklar</h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Diabetes mellitus (şeker hastalığı)</li>
                <li>• Hipotiroidizm (tiroid bezinin düşük çalışması)</li>
                <li>• Romatoid artrit</li>
                <li>• Amiloidoz</li>
                <li>• Böbrek yetmezliği (diyaliz hastaları)</li>
                <li>• Gut (kristal birikimi)</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hormonal Faktörler</h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Gebelik (sıvı retansiyonu nedeniyle)</li>
                <li>• Menopoz</li>
                <li>• Oral kontraseptif kullanımı</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Diğer Risk Faktörleri</h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Kadın cinsiyet</li>
                <li>• İleri yaş (40-60 yaş arası)</li>
                <li>• Obezite</li>
                <li>• Aile öyküsü</li>
                <li>• Sigara kullanımı</li>
              </ul>
            </div>
          </section>

          {/* Section 4: Belirtiler */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Belirtiler ve Klinik Bulgular</h2>
            
            <div className="bg-yellow-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tipik Semptomlar</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span><strong>Uyuşma ve karıncalanma:</strong> Baş parmak, işaret parmağı, orta parmak ve yüzük parmağının yarısında (median sinir dağılımı)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span><strong>Gece ağrıları:</strong> Uykudan uyandıran, el sallamakla geçen ağrı ve uyuşma</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span><strong>Güçsüzlük:</strong> Baş parmakta güç kaybı, kavrama zorluğu</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span><strong>Nesneleri düşürme:</strong> Bardak, telefon gibi objeleri tutar ken düşürme</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span><strong>İnce işlerde zorluk:</strong> Düğme ilikleme, yazı yazma, iğne kullanma güçlüğü</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span><strong>Kola yayılan ağrı:</strong> Bazı hastalarda dirsek ve omuza kadar yayılan ağrı</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span><strong>Sıcak-soğuk his kaybı:</strong> Parmak uçlarında duyu azalması</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Hastalık Evreleri</h3>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Evre</th>
                    <th className="px-4 py-3 text-left font-semibold">Semptomlar</th>
                    <th className="px-4 py-3 text-left font-semibold">Tedavi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3">Hafif</td>
                    <td className="px-4 py-3">Geceleri uyuşma, gün içinde normal</td>
                    <td className="px-4 py-3">Konservatif (splint, fizik tedavi)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Orta</td>
                    <td className="px-4 py-3">Gün içinde de uyuşma, hafif güçsüzlük</td>
                    <td className="px-4 py-3">Konservatif + enjeksiyon veya cerrahi</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">İleri</td>
                    <td className="px-4 py-3">Sürekli uyuşma, belirgin güç kaybı, kas erimesi (tenar atrofi)</td>
                    <td className="px-4 py-3">Cerrahi (kalıcı hasar önlenmeli)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-red-900 mb-2">⚠️ Tenar Kas Atrofisi (İleri Evre İşareti)</h3>
              <p className="text-red-800">
                Baş parmak tabanındaki kabarıklığın (tenar kasların) erimesi kalıcı sinir hasarını gösterir. 
                Bu aşamada cerrahi tedavi gecikmeden yapılmalıdır.
              </p>
            </div>
          </section>

          {/* Section 5: Tanı Yöntemleri */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tanı Yöntemleri</h2>
            
            <div className="space-y-4">
              <div className="bg-blue-50 p-5 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">📋 Anamnez</h3>
                <p className="text-gray-700">
                  Semptomların karakteri, zamanlaması, tetikleyici faktörler, meslek, sistemik hastalıklar sorgulanır.
                </p>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">🔍 Fizik Muayene</h3>
                <ul className="text-gray-700 space-y-2">
                  <li><strong>Tinel testi:</strong> Karpal tünel üzerine vurma → parmağa yayılan karıncalanma (pozitif)</li>
                  <li><strong>Phalen testi:</strong> El bilekleri fleksiyonda 60 sn bekletme → semptomların provokasyonu</li>
                  <li><strong>Ters Phalen (Durkan) testi:</strong> El bilek ekstansiyonda</li>
                  <li><strong>İki-nokta diskriminasyonu:</strong> Duyusal kaybın değerlendirilmesi</li>
                  <li><strong>Tenar kas gücü testi:</strong> Baş parmak abduksiyonu (dışa açma) gücü</li>
                  <li><strong>Tenar atrofi muayenesi:</strong> Kas erimesi gözlem</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">⚡ Elektrofizyolojik Testler (Altın Standart)</h3>
                <div className="space-y-2 text-gray-700">
                  <div>
                    <h4 className="font-semibold">Sinir İletim Çalışması (NCS)</h4>
                    <p className="text-sm">
                      Median sinir iletim hızı ve amplitüd ölçümü. Sıkışma varlığını ve şiddetini objektif olarak gösterir.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Elektromyografi (EMG)</h4>
                    <p className="text-sm">
                      Tenar kas denervasyonunu (sinir hasarı) tespit eder. İleri evrede pozitif.
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-2">
                  <strong>Not:</strong> Klinik tanı ön planda olup, EMG tedavi kararını destekler. Normal EMG olsa da klinik bulgular varsa tedavi yapılabilir.
                </p>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">📸 Görüntüleme</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <strong>Röntgen:</strong> Kırık, artrit, kitle ekarte etmek için</li>
                  <li>• <strong>Ultrason:</strong> Median sinir kalınlığı, kitle, tenosinovit değerlendirmesi</li>
                  <li>• <strong>MR:</strong> Nadiren, karmaşık vakalarda</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6: Tedavi Yöntemleri */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tedavi Yöntemleri</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Konservatif (Ameliyatsız) Tedaviler</h3>
            <p className="text-gray-700 mb-4">
              Hafif-orta şiddette semptomları olan, kas atrofisi bulunmayan hastalarda ilk tercih edilir.
            </p>

            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">→</span>
                  <div>
                    <strong>El bilek splinti (gece ateli):</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      El bileğini nötral pozisyonda tutar, özellikle gece kullanımı. 4-6 hafta düzenli kullanım önerilir.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">→</span>
                  <div>
                    <strong>Aktivite modifikasyonu:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Tekrarlayan el bilek hareketlerinden kaçınma, ergonomik düzenlemeler.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">→</span>
                  <div>
                    <strong>Buz uygulaması:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Akut semptomları azaltmak için 15-20 dk buz.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">→</span>
                  <div>
                    <strong>İlaç tedavisi:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      NSAİİ (ibuprofen, naproksen) kısa süreli kullanım. Nöropatik ağrı için gabapentin, pregabalin.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">→</span>
                  <div>
                    <strong>Fizik tedavi:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Sinir kayma egzersizleri (nerve gliding), tendon kayma, germe egzersizleri.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">→</span>
                  <div>
                    <strong>Kortikosteroid enjeksiyonu:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Karpal tünel içine steroid enjeksiyonu. Geçici rahatlama sağlar (%50-70 hastada 3-6 ay sürer). 
                      Kalıcı çözüm değildir.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Cerrahi Tedavi</h3>
            <p className="text-gray-700 mb-4">
              Şu durumlarda cerrahi endikasyon vardır:
            </p>
            <ul className="text-gray-700 space-y-1 mb-4">
              <li>• Konservatif tedaviye 3-6 ay cevap yok</li>
              <li>• İleri evre sıkışma (EMG'de ciddi denervasyond</li>
              <li>• Tenar kas atrofisi mevcut</li>
              <li>• Sürekli uyuşma ve güç kaybı</li>
              <li>• Hastanın tercihi (erken cerrahi istemi)</li>
            </ul>

            <div className="bg-purple-50 p-6 rounded-lg mb-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">1. Açık Karpal Tünel Gevşetme Cerrahisi</h4>
              <p className="text-gray-700 mb-2">
                En yaygın yöntem. El bileğinde 2-3 cm kesiden transvers karpal ligament kesilir, median sinir üzerindeki bası kaldırılır.
              </p>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• <strong>Anestezi:</strong> Lokal veya rejyonel blok</li>
                <li>• <strong>Süre:</strong> 15-30 dakika</li>
                <li>• <strong>Avantaj:</strong> Direkt görüş altında, güvenli</li>
                <li>• <strong>İyileşme:</strong> Dikişler 10-14. günde alınır, tam fonksiyon 4-6 hafta</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">2. Endoskopik Karpal Tünel Gevşetme</h4>
              <p className="text-gray-700 mb-2">
                1-2 adet küçük kesiden endoskop kullanılarak ligament kesilir.
              </p>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• <strong>Avantaj:</strong> Küçük skar, daha hızlı iyileşme</li>
                <li>• <strong>Dezavantaj:</strong> Öğrenme eğrisi, sinir-damar yaralanması riski약간 daha yüksek</li>
                <li>• <strong>İyileşme:</strong> Genellikle açık cerrahiden 1-2 hafta daha hızlı</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Ameliyat Sonrası Bakım</h3>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">→</span>
                  <span>İlk 24-48 saat: El yükseğe alma (ödem kontrolü), buz, pansuman</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">→</span>
                  <span>İlk hafta: Hafif parmak hareketleri, ağır kaldırma yok</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">→</span>
                  <span>2. hafta: Dikişler alınır, hafif aktiviteler başlar</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">→</span>
                  <span>4-6 hafta: Tam aktiviteye dönüş, güç egzersizleri</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">→</span>
                  <span>3-6 ay: Skar yumuşaması, maksimum iyileşme</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 7: Sıkça Sorulan Sorular */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Karpal tünel sendromu kendi kendine geçer mi?</h3>
                <p className="text-gray-700">
                  Gebeliğe bağlı KTS doğum sonrası düzelebilir. Ancak kronik KTS genellikle ilerleyicidir ve tedavi 
                  gerektir. Erken evrede konservatif tedavi ile düzelme mümkündür.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ameliyat sonrası uyuşma hemen geçer mi?</h3>
                <p className="text-gray-700">
                  Hafif vakalarda uyuşma ameliyat sonrası hemen düzelebilir. İleri evrede sinir iyileşmesi 3-6 ay 
                  sürebilir. Kalıcı hasar varsa (tenar atrofi), tam iyileşme olmayabilir.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Bilgisayar kullanımı KTS'ye neden olur mu?</h3>
                <p className="text-gray-700">
                  Uzun süreli bilgisayar kullanımı risk faktörüdür. Ergonomik klavye-mouse kullanımı, sık molalar, 
                  el bilek destekleri risk azaltır. Ancak tek başına neden değil, genetik yatkınlık ve diğer faktörler de rol oynar.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">KTS nüks eder mi (tekrarlar mı)?</h3>
                <p className="text-gray-700">
                  Cerrahi sonrası nüks oranı çok düşüktür (%1-5). Nüks genellikle yetersiz ligament kesimi veya 
                  skar dokusu oluşumuna bağlıdır. Tekrarlayan vakalarda revizyon cerrahisi gerekebilir.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Her iki elde KTS varsa ne yapmalıyım?</h3>
                <p className="text-gray-700">
                  Bilateral KTS sıktır. Genellikle önce daha semptomatik el ameliyat edilir. 4-6 hafta sonra diğer el 
                  ameliyat edilebilir. Hasta tercihine göre aynı seansta her iki el de ameliyat edilebilir (günlük aktivite kısıtlaması olur).
                </p>
              </div>
            </div>
          </section>

          {/* Section 8: Kaynaklar */}
          <section className="mb-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kaynaklar</h2>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-700">
              <li>
                Atroshi I, et al. "Prevalence of carpal tunnel syndrome in a general population" JAMA. 1999.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=prevalence+carpal+tunnel+syndrome+general+population" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Keith MW, et al. "Treatment of carpal tunnel syndrome" J Am Acad Orthop Surg. 2009.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=treatment+carpal+tunnel+syndrome+JAAOS" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Verdugo RJ, et al. "Surgical versus non-surgical treatment for carpal tunnel syndrome" 
                Cochrane Database Syst Rev. 2008.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=surgical+non-surgical+carpal+tunnel+cochrane" 
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
              Karpal tünel sendromu yaygın ve tedavi edilebilir bir durumdur. Erken tanı ve uygun tedavi ile 
              tam iyileşme mümkündür. Gece uyuşmaları, parmak karıncalanması gibi semptomlar varsa mutlaka 
              bir ortopedi veya el cerrahisi uzmanına başvurmalısınız.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Hafif vakalarda konservatif tedaviler yeterli olabilir. İleri evrede cerrahi tedavi, minimal invaziv, 
              güvenli ve yüksek başarı oranına sahip bir çözümdür. Tedavi geciktirilirse kalıcı sinir hasarı 
              oluşabilir, bu nedenle erken müdahale önemlidir.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-center text-white mt-12">
          <h2 className="text-2xl font-bold mb-4">El ve Bilek Sağlığınız İçin Uzman Değerlendirmesi</h2>
          <p className="mb-6">Karpal tünel sendromu şüpheniz varsa detaylı muayene ve tedavi için randevu alın.</p>
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
