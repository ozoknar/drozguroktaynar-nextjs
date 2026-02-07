import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Total Diz Protezi Nedir? Tedavisi Nasıl Yapılır? | Op. Dr. Özgür Oktay Nar',
  description: 'Total diz protezi ameliyatı, endikasyonları, cerrahi tekniği, iyileşme süreci ve sonuçları hakkında detaylı bilgi. Diz protezi kimlere yapılır?',
  keywords: 'total diz protezi, diz protezi ameliyatı, diz artroplastisi, osteoartrit tedavisi, diz protezi iyileşme, diz protezi sonrası',
  authors: [{ name: 'Op. Dr. Özgür Oktay Nar' }],
  openGraph: {
    title: 'Total Diz Protezi Nedir? Tedavisi Nasıl Yapılır?',
    description: 'Total diz protezi ameliyatı, endikasyonları, cerrahi tekniği, iyileşme süreci ve sonuçları hakkında detaylı bilgi. Diz protezi kimlere yapılır?',
    type: 'article',
    locale: 'tr_TR',
    url: 'https://www.ozguroktaynar.com/blog/total-diz-protezi-nedir-tedavisi-nasil-yapilir',
    siteName: 'Op. Dr. Özgür Oktay Nar',
    images: [
      {
        url: 'https://placehold.co/1200x630/e2e8f0/475569?text=Total+Diz+Protezi',
        width: 1200,
        height: 630,
        alt: 'Total diz protezi ameliyatı',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Total Diz Protezi Nedir? Tedavisi Nasıl Yapılır?',
    description: 'Total diz protezi ameliyatı, endikasyonları, cerrahi tekniği, iyileşme süreci ve sonuçları hakkında detaylı bilgi. Diz protezi kimlere yapılır?',
    images: ['https://placehold.co/1200x630/e2e8f0/475569?text=Total+Diz+Protezi'],
  },
  alternates: {
    canonical: 'https://www.ozguroktaynar.com/blog/total-diz-protezi-nedir-tedavisi-nasil-yapilir',
  },
};

export default function BlogPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': 'https://www.ozguroktaynar.com/blog/total-diz-protezi-nedir-tedavisi-nasil-yapilir#webpage',
        url: 'https://www.ozguroktaynar.com/blog/total-diz-protezi-nedir-tedavisi-nasil-yapilir',
        name: 'Total Diz Protezi Nedir? Tedavisi Nasıl Yapılır?',
        description: 'Total diz protezi ameliyatı, endikasyonları, cerrahi tekniği, iyileşme süreci ve sonuçları hakkında detaylı bilgi. Diz protezi kimlere yapılır?',
        datePublished: '2025-01-19T10:00:00+03:00',
        dateModified: '2025-01-19T10:00:00+03:00',
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
          <span className="text-gray-700">Total Diz Protezi Nedir? Tedavisi Nasıl Yapılır?</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Total Diz Protezi Nedir? Tedavisi Nasıl Yapılır?</h1>
          <div className="flex items-center text-gray-600 text-sm mb-6">
            <span>Op. Dr. Özgür Oktay Nar</span>
            <span className="mx-2">•</span>
            <time>19 Ocak 2025</time>
          </div>
          <img
            src="https://placehold.co/1200x630/e2e8f0/475569?text=Total+Diz+Protezi"
            alt="Total diz protezi ameliyatı"
            className="w-full rounded-xl shadow-lg"
          />
        </header>

        {/* Main Content - 7 STEP ARCHITECTURE */}
        <div className="prose prose-lg max-w-none">
          
          {/* Section 1: Giriş */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Giriş</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Diz ağrısı yürüyüşünüzü, merdiven çıkmayı ve günlük aktivitelerinizi imkansız hale mi getirdi? İlaçlar ve fizik tedavi artık işe yaramıyor mu? Total diz protezi (total diz artroplastisi), ileri evre diz eklem hastalıklarında yaşam kalitesini dramatik şekilde artıran cerrahi bir tedavi yöntemidir.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Her yıl dünyada 1 milyondan fazla diz protezi ameliyatı yapılmaktadır. Modern protez teknolojisi ve minimal invaziv cerrahi teknikler sayesinde başarı oranı %95'in üzerindedir. Bu yazıda total diz protezinin ne olduğunu, kimlere yapıldığını, ameliyat sürecini ve iyileşme aşamalarını detaylı olarak ele alacağız.
            </p>
          </section>

          {/* Section 2: Nedir / Tanım */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Total Diz Protezi Nedir?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Total diz protezi, aşınmış ve hasar görmüş diz eklem yüzeylerinin metal ve polietilen (yüksek kaliteli plastik) implantlarla değiştirilmesi işlemidir. Cerrahi sırasında femur (uyluk kemiği), tibia (kaval kemiği) ve genellikle patella (dizkapağı) altında kalan eklem yüzeyleri kesilir ve protez bileşenleri yerleştirilir.
            </p>

            <div className="bg-[#E6FAF8] p-6 rounded-lg mb-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Diz Protezi Bileşenleri</h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong>Femoral Komponent (Metal):</strong> Uyluk kemiğinin alt ucunu kaplar. Genellikle kobalt-krom veya titanyum alaşımdan yapılır. Eklem yüzeyini taklit eder.
                </li>
                <li>
                  <strong>Tibial Komponent (Metal Taban + Polietilen Insert):</strong> İki parçalı yapı - metal taban kemiğe sabitlenir, üzerindeki polietilen insert kayma yüzeyini oluşturur.
                </li>
                <li>
                  <strong>Patellar Komponent (Polietilen):</strong> Dizkapağının arka yüzeyine yerleştirilir (her vakada kullanılmaz, cerrahın tercihine bağlı).
                </li>
                <li>
                  <strong>Sabitleyici:</strong> Kemik çimentosu (PMMA) ile veya çimentosuz (press-fit, kemik içine büyüme ile) sabitlenir.
                </li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Protez Tipleri:</strong>
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>
                <strong>1. Çimentolu Protez:</strong> Kemik çimentosu kullanılır. Hemen sabitlik sağlar, erken yük verilebilir. 70+ yaş, osteoporotik kemik için tercih edilir.
              </li>
              <li>
                <strong>2. Çimentosuz Protez:</strong> Gözenekli yüzey ile kemik içine büyüme beklenir. Genç, aktif, iyi kemik kalitesi olan hastalarda. Uzun dönem fiksasyon daha iyi olabilir.
              </li>
              <li>
                <strong>3. Hibrit Protez:</strong> Femoral komponent çimentosuz, tibial komponent çimentolu (en yaygın kombinasyon).
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              <strong>Mekanik Özellikler:</strong> Diz protezi, eklemin doğal hareketini (fleksiyon-ekstansiyon, hafif rotasyon) taklit eder. Modern protezler 0-135 derece fleksiyona izin verir (diz çökme, sandalyeden kalkma için yeterli). Stabilite, bağlar (cruciate-retaining) veya implant tasarımı (posterior-stabilized) ile sağlanır.
            </p>
          </section>

          {/* Section 3: Endikasyonlar (Kimlere Yapılır?) */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Total Diz Protezi Kimlere Yapılır?</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Primer Endikasyonlar</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>İleri Evre Osteoartrit (Dejeneratif Eklem Hastalığı):</strong> En yaygın neden (%80-90 vaka). Kıkırdak tamamen aşınmış, kemik-kemik teması var. Konservatif tedaviye yanıtsız ağrı.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>Romatoid Artrit:</strong> Kronik inflamatuar hastalık sonucu eklem destrüksiyonu. Genellikle bilateral (her iki diz).</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>Post-Travmatik Artrit:</strong> Eski kırık veya bağ yaralanması sonrası gelişen artrit.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>Avasküler Nekroz (Kemik Ölümü):</strong> Femur kondillerinde kan akımı kaybı nedeniyle kemik çökmesi.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span><strong>Ankilozan Spondilit:</strong> İleri evre eklem tutulumu ve ankiloz (eklem hareketsizliği).</span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Klinik Kriterler</h3>
            <p className="text-gray-700 mb-4">
              Ameliyat kararı SADECE radyolojik bulgulara değil, aşağıdaki klinik kriterlere dayanır:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>✅ Konservatif tedaviye (ilaç, enjeksiyon, fizik tedavi) 3-6 ay yanıtsızlık</li>
              <li>✅ İstirahat ve gece ağrısı (yaşam kalitesini ciddi düşürüyor)</li>
              <li>✅ Fonksiyonel kısıtlılık (100m yürüyemiyor, merdiven çıkamıyor, günlük aktiviteler yapamıyor)</li>
              <li>✅ Radyolojik bulgular: Kellgren-Lawrence Evre III-IV (eklem aralığı kaybolmuş, osteofitler, subkondral skleroz)</li>
              <li>✅ Hasta beklentileri gerçekçi ve ameliyat için motivasyonu yüksek</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Yaş ve Aktivite Düzeyi</h3>
            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <p className="text-gray-700 mb-2">
                <strong>Geleneksel Yaklaşım:</strong> 60-80 yaş arası ideal. Ancak günümüzde yaş tek başına kriter değil, biyolojik yaş ve aktivite düzeyi önemli.
              </p>
              <ul className="space-y-2 text-gray-700 mt-3">
                <li>• <strong>{'<'}60 yaş:</strong> Aktif hastalarda protez ömrü endişesi (20-25 yıl sonra revizyon gerekebilir). Unicompartmental (yarım) protez veya osteotomi alternatifleri değerlendirilir.</li>
                <li>• <strong>60-80 yaş:</strong> En ideal grup. Protez ömrü (15-25 yıl) hastanın yaşam beklentisi ile uyumlu.</li>
                <li>• <strong>{'>'}80 yaş:</strong> Ameliyat riski artar, ancak mobiliteyi korumak için hâlâ yapılabilir. Anestezi ve komorbidite değerlendirmesi kritik.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Kontrendikasyonlar (Yapılmamalı)</h3>
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <p className="text-gray-700 mb-3"><strong>Mutlak Kontrendikasyonlar:</strong></p>
              <ul className="space-y-1 text-gray-700 mb-4">
                <li>• Aktif enfeksiyon (diz ekleminde veya sistemik sepsis)</li>
                <li>• Ekstansör mekanizma yetmezliği (quadriseps kas felci - diz düzeltemiyor)</li>
                <li>• Damar hastalığı (kritik iskemi - bacak perfüzyonu yetersiz)</li>
                <li>• Ciddi mental hastalık (rehabilitasyona uyum gösteremez)</li>
              </ul>
              <p className="text-gray-700 mb-3"><strong>Relatif Kontrendikasyonlar (Dikkatle Değerlendirilmeli):</strong></p>
              <ul className="space-y-1 text-gray-700">
                <li>• Kontrol altında olmayan diyabet (HbA1c {'>'}8%)</li>
                <li>• Morbid obezite (VKİ {'>'}40) - komplikasyon riski 2-3 kat artar</li>
                <li>• Periferik nöropati (denge ve propriosepsiyon sorunu)</li>
                <li>• Sigara (kemik iyileşmesini bozar, enfeksiyon riski artar)</li>
                <li>• Psikiyatrik hastalık (beklenti yönetimi zor)</li>
              </ul>
            </div>
          </section>

          {/* Section 4: Ameliyat Süreci */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Total Diz Protezi Ameliyatı Nasıl Yapılır?</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ameliyat Öncesi Hazırlık</h3>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• <strong>Preoperatif Değerlendirme:</strong> Kalp, akciğer, böbrek fonksiyonları, tam kan sayımı, koagülasyon testleri</li>
              <li>• <strong>Dental Kontrol:</strong> Enfeksiyon kaynağı olabilecek diş sorunları tedavi edilmeli</li>
              <li>• <strong>Deri Hazırlığı:</strong> Yara, egzama, enfeksiyon varsa ameliyat ertelen mir</li>
              <li>• <strong>İlaç Düzenlemesi:</strong> Kan sulandırıcılar (aspirin, warfarin, NOAC) önceden kesilir</li>
              <li>• <strong>Kilo Verme:</strong> VKİ {'>'}35 ise ameliyat öncesi 5-10 kg vermek komplikasyonları azaltır</li>
              <li>• <strong>Fizik Tedavi:</strong> Ameliyat öncesi quadriseps güçlendirme iyileşmeyi hızlandırır</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cerrahi Teknik (Adım Adım)</h3>
            <div className="space-y-4 mb-6">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">1. Anestezi</h4>
                <p className="text-gray-700">
                  <strong>Spinal/Epidural Anestezi:</strong> En yaygın tercih. Belden aşağısı uyuşuyor, hasta uyanık veya hafif sedatize. Daha az bulantı, erken mobilizasyon.
                  <br />
                  <strong>Genel Anestezi:</strong> Hastanın tercihi veya spinal kontrendikasyon varsa. Tamamen uyutulur.
                  <br />
                  <strong>Periferik Sinir Bloğu (Adductor Kanal Bloğu):</strong> Ameliyat sonrası ağrı kontrolü için ekstra analjezi. Quadriseps gücünü korur.
                </p>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">2. İnsizyon ve Eklem Ekspozürü</h4>
                <p className="text-gray-700">
                  <strong>Anterior Medial (Parapatellar) Yaklaşım:</strong> En yaygın. Diz ön orta hattından 10-15 cm insizyon, dizkapağı laterale çevrilir.
                  <br />
                  <strong>Minimal İnvaziv Yaklaşımlar:</strong> Subvastus, midvastus - quadriseps kası korunur, daha az ağrı, hızlı iyileşme.
                  <br />
                  <strong>Computer-Assisted (Bilgisayar Destekli):</strong> Navigasyon sistemi ile kemik kesilerinin doğruluğu artırılır.
                </p>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">3. Kemik Kesimi (Bone Resection)</h4>
                <p className="text-gray-700">
                  • <strong>Femoral Kesim:</strong> Distal femurdan 8-10 mm kemik çıkarılır (anatomik eksen 5-7° valgus)
                  <br />
                  • <strong>Tibial Kesim:</strong> Proksimal tibiadan 8-10 mm kemik çıkarılır (0-3° posterior slope)
                  <br />
                  • <strong>Patellar Kesim:</strong> Dizkapağı arka yüzeyinden kıkırdak çıkarılır (kalınlık korunur)
                  <br />
                  • <strong>Osteofitlerin Temizlenmesi:</strong> Kemik mahmuzları kesilir
                </p>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">4. Soft Tissue Balancing (Yumuşak Doku Dengesi)</h4>
                <p className="text-gray-700">
                  Eklemin içe veya dışa kaymaması için medial ve lateral bağlar dengelenir. Fleksiyon ve ekstansiyonda eşit "gap" oluşturulmalı. Gerekirse bağ gevşetme (release) yapılır.
                </p>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">5. Deneme (Trial) Komponentler</h4>
                <p className="text-gray-700">
                  Gerçek protezle aynı boyutta deneme protezler yerleştirilir. Eklem stabilitesi, hareket açıklığı, patellar tracking kontrol edilir. Sorun varsa kemik kesimi veya komponent boyutu revize edilir.
                </p>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">6. Gerçek Protezin Yerleştirilmesi</h4>
                <p className="text-gray-700">
                  Kemik çimentosu kullanılıyorsa: Kemik yüzeyi pulsatil lavaj ile yıkanır, kurutulur, çimento uygulanır, implant yerleştirilir, çimento sertleşene kadar (5-8 dk) stabilite korunur.
                  <br />
                  Çimentosuz protezde: Press-fit tekniği ile implant kemiğe sıkıca yerleştirilir.
                </p>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">7. Kapama ve Dren</h4>
                <p className="text-gray-700">
                  Eklem kapsülü, quadriseps tendonu ve cilt katmanlar halinde kapatılır. Dren (kan toplama tüpü) yerleştirilebilir (tartışmalı - bazı cerrahlar kullanmaz). Steril pansuman yapılır.
                </p>
              </div>
            </div>

            <div className="bg-[#B3F0EB] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ameliyat İstatistikleri</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Süre:</strong> 60-90 dakika (tek taraflı), 120-150 dakika (bilateral)</li>
                <li>• <strong>Kan Kaybı:</strong> Ortalama 300-500 ml (turnike kullanımı ile minimize edilir)</li>
                <li>• <strong>Hastanede Kalış:</strong> 2-4 gün (hızlandırılmış protokollerde 1-2 gün)</li>
                <li>• <strong>Protez Ömrü:</strong> %90-95 protez 15-20 yıl sonra hâlâ fonksiyonel</li>
              </ul>
            </div>
          </section>

          {/* Section 5: Ameliyat Sonrası İyileşme */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ameliyat Sonrası İyileşme Süreci</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Hastanede (0-3 Gün)</h3>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• <strong>Gün 0 (Ameliyat günü):</strong> Yatak içi egzersizler (ayak bileği pump, quadriseps set), derin solunum</li>
              <li>• <strong>Gün 1:</strong> Fizik tedavi başlar, yürüteç ile 10-20 adım, diz fleksiyonu 45-60°</li>
              <li>• <strong>Gün 2-3:</strong> Bağımsız mobilizasyon, merdiven çıkma, dren çıkarılır, kontrol radyografisi</li>
              <li>• <strong>Ağrı Yönetimi:</strong> Multimodal analjezi (opioid + NSAİD + lokal infiltrasyon), epidural kateter veya adductor kanal bloğu</li>
              <li>• <strong>Tromboz Profilaksisi:</strong> Düşük molekül ağırlıklı heparin veya NOAC (rivaroxaban, apixaban), kompresyon çorapları</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Evde İyileşme (1-6 Hafta)</h3>
            <div className="bg-green-50 p-6 rounded-lg mb-6 border-l-4 border-green-500">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Hafta 1-2: Yara İyileşmesi ve Erken Mobilizasyon</h4>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Yürüteç veya koltuk değneği ile yürüme (tam yük verilebilir - çimento kullanıldıysa)</li>
                <li>✓ Diz fleksiyonu hedefi: 90° (sandalyeye oturabilmek için yeterli)</li>
                <li>✓ Günde 3-4 kez buz uygulama (15-20 dk)</li>
                <li>✓ Egzersizler: Straight leg raise, heel slides, ankle pumps</li>
                <li>✓ Yara kontrolü: 10-14. gün dikiş alma (emilmeyen sütür kullanıldıysa)</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-6 border-l-4 border-green-500">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Hafta 3-6: Fonksiyonel Kazanım</h4>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Baston ile yürüme (yürüteç bırakılır)</li>
                <li>✓ Diz fleksiyonu hedefi: 110-120° (merdiven rahatça çıkabilme)</li>
                <li>✓ Fizik tedavi: Direnç egzersizleri, statik bisiklet, denge çalışması</li>
                <li>✓ Günlük aktiviteler: Kendi yemeğini yapmak, banyo, kısa mesafe yürüyüş</li>
                <li>✓ Araba kullanma: 4-6 hafta sonra (sağ diz ameliyatı olduysa), acil fren yapabilmeli</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Orta Dönem (6 Hafta - 3 Ay)</h3>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• Baston bırakılır, normal yürüyüş kazanılır</li>
              <li>• Diz fleksiyonu 120-130° (çömelme, diz çökme mümkün olabilir)</li>
              <li>• İşe dönüş: Masa başı işler 4-6 hafta, ağır fiziksel işler 3-6 ay</li>
              <li>• Düşük etkili sporlar: Yüzme, bisiklet, golf (3 aydan sonra)</li>
              <li>• Kontrol muayenesi: 6. hafta ve 3. ay radyografisi</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Uzun Dönem (3-12 Ay)</h3>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• Tam fonksiyonel iyileşme: %80-90 hastalar ağrısız, normal günlük aktivite</li>
              <li>• Sporun devamı: Tenis (çiftler), yürüyüş, dans - ama koşu, futbol, basketbol ÖNERİLMEZ</li>
              <li>• Maksimal iyileşme: 12-18 ay (bazı hastalarda 2 yıl sürebilir)</li>
              <li>• Yaşam boyu kontroller: İlk 5 yıl yıllık, sonra 2-3 yılda bir radyografi</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <p className="text-gray-700 mb-2">
                <strong>⚠️ DOKTORA ACİL BAŞVURU GEREKTİREN DURUMLAR:</strong>
              </p>
              <ul className="space-y-1 text-gray-700">
                <li>• Yara yerinde akıntı, kızarıklık, şişlik, ateş (enfeksiyon şüphesi)</li>
                <li>• Baldırda şişme, ağrı, kızarıklık (derin ven trombozu)</li>
                <li>• Nefes darlığı, göğüs ağrısı (pulmoner emboli)</li>
                <li>• Ani şiddetli ağrı, diz hareketinde kısıtlılık (protez dislokasyonu nadirdir ama mümkün)</li>
                <li>• Bacakta uyuşma, güç kaybı (sinir hasarı - nadir)</li>
              </ul>
            </div>
          </section>

          {/* Section 6: Sıkça Sorulan Sorular */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Diz protezi ömrü ne kadar? Revizyon gerekir mi?</h3>
                <p className="text-gray-700">
                  Modern protezlerin %90-95'i 15-20 yıl sonra hâlâ fonksiyoneldir. Bazı protezler 25-30 yıl dayanır. Revizyon (protezin değiştirilmesi) genellikle polietilen aşınması, gevşeme veya enfeksiyon nedeniyle gerekir. 60 yaşında protez olan birinin 80 yaşında revizyon olasılığı %10-15 civarındadır. Genç hastalarda ({'<'}60 yaş) yaşam boyu revizyon riski daha yüksektir.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Diz protezi sonrası hangi sporları yapabilirim?</h3>
                <p className="text-gray-700">
                  <strong>ÖNERİLEN (düşük etki):</strong> Yüzme, bisiklet, golf, yürüyüş, dans (vals), bowling, kayak (amatör, dikkatli).
                  <br />
                  <strong>SAKINCALI (orta etki):</strong> Tenis (çiftler - tek dikkatli), hafif koşu (kısa mesafe).
                  <br />
                  <strong>YAPMAYIN (yüksek etki):</strong> Futbol, basketbol, voleybol, maraton, sıçrama sporları, kayak yarışı, rugby.
                  <br />
                  Kural: Eklem üzerinde tekrarlayan şok ve ani yön değiştirmeler protez ömrünü kısaltır.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Diz protezinde metal dedektör çalar mı? Havalimanında sorun olur mu?</h3>
                <p className="text-gray-700">
                  Evet, metal detektörler çoğunlukla çalar. Havalimanlarında protez kartınızı (cerrahın verdiği implant kimlik kartı) gösterin veya ameliyat raporunuzu yanınızda taşıyın. Manuel arama yapılabilir. Modern havalimanlarında bu rutin bir durumdur, seyahatinizi engellemez. MRI çekilebilir (titanyum ve kobalt-krom manyetik değil), ancak radyologa mutlaka protez olduğunu söyleyin.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Diz protezi ameliyatı riskli mi? Komplikasyon oranı nedir?</h3>
                <p className="text-gray-700">
                  Her cerrahi gibi riskler vardır, ancak genel komplikasyon oranı %2-5'tir.
                  <br />
                  <strong>Majör komplikasyonlar:</strong>
                  • Enfeksiyon: %0,5-2 (derin enfeksiyon protez çıkarılması gerektirebilir)
                  • Derin ven trombozu/pulmoner emboli: %0,5-1,5 (profilaksi ile minimize edilir)
                  • Protez gevşemesi/yanlış pozisyon: %1-2
                  <br />
                  <strong>Minör komplikasyonlar:</strong>
                  • Yara iyileşme sorunu: %1-2
                  • Sertlik (fibroz): %3-5
                  • Peroneal sinir felci: %0,3-1 (geçici, çoğu düzelir)
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Her iki dizime birden protez yapılabilir mi?</h3>
                <p className="text-gray-700">
                  Evet, bilateral (aynı anda iki diz) protez mümkündür. Avantajları: Tek anestezi, tek hastane yatış, tek rehabilitasyon süreci, daha kısa toplam iyileşme. Dezavantajları: Kan kaybı daha fazla, kardiyopulmoner stres artar, rehabilitasyon daha zor (iki dizden de destek alamazsınız). Genellikle genç ({'<'}70 yaş), sağlıklı, fit hastalarda tercih edilir. 70+ yaş veya kalp/akciğer sorunu varsa kademeli ameliyat (3-6 ay ara ile) daha güvenlidir.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Kaynaklar */}
          <section className="mb-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kaynaklar</h2>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-700">
              <li>
                Kurtz S, et al. "Projections of primary and revision hip and knee arthroplasty in the United States from 2005 to 2030." J Bone Joint Surg Am. 2007.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=kurtz+projections+hip+knee+arthroplasty+2030" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Insall JN, Binazzi R, Soudry M, Mestriner LA. "Total knee arthroplasty." Clin Orthop Relat Res. 1985.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=insall+total+knee+arthroplasty+technique" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Ranawat CS, et al. "Long-term results of the total condylar knee arthroplasty. A 15-year survivorship study." Clin Orthop Relat Res. 1993.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=ranawat+total+condylar+knee+survivorship" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Healy WL, et al. "Complications of total knee arthroplasty: standardized list and definitions of the Knee Society." Clin Orthop Relat Res. 2013.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=healy+complications+total+knee+arthroplasty+knee+society" 
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
                <strong>İlgili İçerik:</strong> Diz ağrısı için protez dışında tedavi seçenekleri hakkında bilgi almak isterseniz{' '}
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
              Total diz protezi, ileri evre diz eklem hastalıklarında yaşam kalitesini dramatik şekilde artıran güvenli ve etkili bir tedavidir. Modern protez teknolojisi ve cerrahi teknikler sayesinde %90-95 hasta ağrısız, fonksiyonel bir dize kavuşur.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Ameliyat kararı, sadece radyolojik bulgulara değil, ağrının şiddeti, fonksiyonel kısıtlılık ve konservatif tedaviye yanıtsızlık gibi klinik kriterlere dayanmalıdır. Doğru hasta seçimi, deneyimli cerrah ve düzenli fizik tedavi, başarılı sonuçların anahtarıdır. Diz ağrınız yaşamınızı kısıtlıyorsa, bir ortopedi ve travmatoloji uzmanı ile görüşerek size en uygun tedavi seçeneğini değerlendirebilirsiniz.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#01CAB8] to-[#01A899] rounded-xl p-8 text-center text-white mt-12">
          <h2 className="text-2xl font-bold mb-4">Diz Protezi Hakkında Daha Fazla Bilgi</h2>
          <p className="mb-6">Size özel değerlendirme ve tedavi planı için randevu alın.</p>
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
