import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

// SEO Metadata
export const metadata: Metadata = {
  title: 'TFCC Lezyonu: Belirtiler, Tanı ve Tedavi Yöntemleri | Dr. Özgür Oktay Nar',
  description: 'TFCC (Triangular Fibrocartilage Complex) lezyonu el bileği ağrısının önemli nedenlerinden biridir. Belirtiler, tanı yöntemleri ve tedavi seçenekleri hakkında detaylı bilgi.',
  keywords: 'TFCC lezyonu, el bileği ağrısı, triangular fibrocartilage complex, el bileği yaralanması, TFCC tedavisi, el bileği artroskopisi, ortopedi, Bursa ortopedi',
  authors: [{ name: 'Dr. Özgür Oktay Nar' }],
  openGraph: {
    title: 'TFCC Lezyonu: Belirtiler, Tanı ve Tedavi | Dr. Özgür Oktay Nar',
    description: 'TFCC lezyonu el bileği ağrısının önemli nedenlerinden biridir. Uzman ortopedi doktorundan detaylı bilgi.',
    type: 'article',
    locale: 'tr_TR',
    siteName: 'Dr. Özgür Oktay Nar - Ortopedi Uzmanı',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TFCC Lezyonu: Belirtiler, Tanı ve Tedavi',
    description: 'TFCC lezyonu hakkında uzman görüşü ve tedavi seçenekleri.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD Schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  headline: 'TFCC Lezyonu: Belirtiler, Tanı ve Tedavi Yöntemleri',
  author: {
    '@type': 'Physician',
    name: 'Dr. Özgür Oktay Nar',
    medicalSpecialty: 'Ortopedik Cerrahi',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bursa',
      addressCountry: 'TR',
    },
  },
  datePublished: '2026-02-06',
  dateModified: '2026-02-06',
  description: 'TFCC lezyonu el bileği ağrısının önemli nedenlerinden biridir. Belirtiler, tanı yöntemleri ve tedavi seçenekleri hakkında detaylı bilgi.',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://drozguroktaynar.com/blog/tfcc-lezyonu',
  },
  about: {
    '@type': 'MedicalCondition',
    name: 'TFCC Lezyonu',
    alternateName: 'Triangular Fibrocartilage Complex Lezyonu',
  },
};

export default function TFCCLezyonuPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="mb-12">
          <div className="mb-6">
            <Link 
              href="/blog"
              className="text-[#01CAB8] hover:text-[#01867A] text-sm font-medium"
            >
              ← Blog'a Dön
            </Link>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            TFCC Lezyonu: Belirtiler, Tanı ve Tedavi Yöntemleri
          </h1>
          
          <div className="flex items-center text-gray-600 text-sm mb-6">
            <time dateTime="2026-02-06">6 Şubat 2026</time>
            <span className="mx-2">•</span>
            <span>Dr. Özgür Oktay Nar</span>
            <span className="mx-2">•</span>
            <span>8 dakika okuma</span>
          </div>

          <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-6">
            <Image
              src="/images/blog/tfcc-lezyonu-hero.jpg"
              alt="TFCC lezyonu anatomisi ve el bileği yapısı"
              fill
              className="object-cover"
              priority
            />
          </div>

          <p className="text-xl text-gray-700 leading-relaxed">
            TFCC (Triangular Fibrocartilage Complex - Üçgen Fibrokartilaj Kompleksi), el bileğinin küçük parmak tarafında yer alan ve ulna kemiği ile el bilek kemikleri arasında köprü görevi gören önemli bir yapıdır. Bu yapının yaralanması, el bileği ağrısı ve fonksiyon kaybının sık görülen nedenlerinden biridir.
          </p>
        </header>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">TFCC Nedir?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            TFCC, el bileğinde ulna kemiğinin ucunda bulunan ve birkaç bağ ile kıkırdak yapıdan oluşan kompleks bir anatomik yapıdır. Bu yapı:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>El bileğinde stabilite sağlar</li>
            <li>Yük taşıma ve dağıtma fonksiyonuna sahiptir</li>
            <li>El bileği hareketlerinde yastıklama görevi görür</li>
            <li>Radius ve ulna kemikleri arasındaki hareketin koordinasyonunu destekler</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">TFCC Lezyonu Nedenleri</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            TFCC lezyonları genellikle iki ana kategoride değerlendirilir:
          </p>
          
          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Travmatik Lezyonlar</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Düşme sırasında ele binen ani yük</li>
            <li>El bileğinin ani dönme (rotasyon) hareketleri</li>
            <li>Spor yaralanmaları (özellikle raket sporları, jimnastik)</li>
            <li>Kırık veya çıkıkla birlikte gelişen yaralanmalar</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Dejeneratif Lezyonlar</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Yaşa bağlı aşınma ve yıpranma</li>
            <li>Tekrarlayan el bileği hareketleri</li>
            <li>Ulna kemiğinin uzun olması (ulnar pozitif varyans)</li>
            <li>Kronik inflamatuar durumlar</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Belirtiler ve Semptomlar</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            TFCC lezyonunun tipik belirtileri şunlardır:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>El bileği ağrısı:</strong> Özellikle küçük parmak tarafında, ulna kemiği üzerinde ağrı</li>
            <li><strong>Şişlik:</strong> El bileğinin ulnar tarafında hafif şişlik</li>
            <li><strong>Klik sesi:</strong> El bileği hareketlerinde ses veya atlama hissi</li>
            <li><strong>Güç kaybı:</strong> Kavrama kuvvetinde azalma</li>
            <li><strong>Hareket kısıtlılığı:</strong> Özellikle dönme (pronasyon-supinasyon) hareketlerinde kısıtlılık</li>
            <li><strong>İstirahat ağrısı:</strong> İleri vakalarda gece ağrıları</li>
          </ul>

          <div className="bg-[#E6FAF8] border-l-4 border-[#1AD2C4] p-6 my-8">
            <p className="text-gray-800">
              <strong>Önemli Not:</strong> TFCC lezyonu belirtileri diğer el bileği problemleriyle karışabilir. Kesin tanı için uzman değerlendirmesi gereklidir.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Tanı Yöntemleri</h2>
          
          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Fizik Muayene</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ortopedi uzmanı tarafından yapılan muayenede:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>TFCC stres testleri:</strong> El bileğine baskı ve rotasyon uygulanarak ağrı değerlendirilir</li>
            <li><strong>Fovea bulgusu:</strong> Ulna başı etrafında hassasiyet kontrolü</li>
            <li><strong>Kavrama gücü testi:</strong> Karşılaştırmalı güç değerlendirmesi</li>
            <li><strong>Hareket açıklığı ölçümü:</strong> Pronasyon-supinasyon değerlendirmesi</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Görüntüleme Yöntemleri</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Direkt Röntgen:</strong> Kemik anatomisini ve ulna varyansını değerlendirir</li>
            <li><strong>MRI:</strong> TFCC yaralanmasını göstermede en etkili yöntemdir</li>
            <li><strong>MR Artrografi:</strong> Kontrast madde enjeksiyonu ile daha detaylı görüntüleme</li>
            <li><strong>El Bileği Artroskopisi:</strong> Hem tanı hem de tedavi amaçlı kullanılan altın standart yöntem</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Tedavi Seçenekleri</h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Konservatif (Ameliyatsız) Tedavi</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hafif ve orta dereceli TFCC lezyonlarında ilk tercih edilir:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>İstirahat:</strong> Aktivite modifikasyonu ve el bileğine yük vermekten kaçınma</li>
            <li><strong>Atelleme:</strong> 4-6 hafta süreyle el bileği atelinin kullanımı</li>
            <li><strong>İlaç tedavisi:</strong> Ağrı ve inflamasyonu azaltmak için antiinflamatuar ilaçlar</li>
            <li><strong>Fizik tedavi:</strong> İyileşme sonrası güçlendirme ve hareket açıklığı egzersizleri</li>
            <li><strong>Enjeksiyon tedavisi:</strong> Kortikosteroid veya PRP enjeksiyonları</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cerrahi Tedavi</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Konservatif tedaviye yanıt vermeyen vakalarda veya komplet yırtıklarda cerrahi gerekebilir:
          </p>
          
          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Artroskopik Tedavi</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Minimal invaziv (küçük kesiler) prosedür</li>
            <li>TFCC debridmanı (hasarlı dokuların temizlenmesi)</li>
            <li>TFCC tamiri (dikişle onarım)</li>
            <li>Daha hızlı iyileşme ve az skar dokusu</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Açık Cerrahi</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Komplike vakalarda tercih edilir</li>
            <li>TFCC rekonstrüksiyonu (yeniden yapılandırma)</li>
            <li>Ulnar kısaltma osteotomisi (ulna kemiği kısaltılması)</li>
            <li>Bağ rekonstrüksiyonu</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">İyileşme Süreci ve Rehabilitasyon</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            İyileşme süresi lezyonun ciddiyetine ve tedavi yöntemine bağlıdır:
          </p>
          
          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Konservatif Tedavi Sonrası</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>4-6 hafta atelleme dönemi</li>
            <li>6-8 hafta fizik tedavi</li>
            <li>3-4 ay içinde normale dönüş</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cerrahi Tedavi Sonrası</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>İlk 4-6 hafta: İmmobilizasyon ve koruma</li>
            <li>6-12 hafta: Kontrollü hareket ve hafif egzersizler</li>
            <li>3-6 ay: Tam aktiviteye dönüş</li>
            <li>Spor aktiviteleri: 4-6 ay sonra doktor onayı ile</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Prognoz ve Beklentiler</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            TFCC lezyonlarında prognoz, lezyonun tipi, ciddiyeti ve tedavinin zamanlamasına bağlıdır:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Erken tanı ve uygun tedavi ile başarı oranı %85-90'dır</li>
            <li>Travmatik lezyonlar genellikle dejeneratif lezyonlara göre daha iyi sonuç verir</li>
            <li>Genç hastalarda iyileşme potansiyeli daha yüksektir</li>
            <li>Fizik tedavi ve rehabilitasyona uyum sonuçları olumlu etkiler</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Önleme Stratejileri</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Uygun ekipman kullanımı:</strong> Spor aktivitelerinde koruyucu ekipman</li>
            <li><strong>Teknik eğitim:</strong> Doğru el bileği mekanikleri</li>
            <li><strong>Güçlendirme egzersizleri:</strong> El bileği ve önkol kaslarının kuvvetlendirilmesi</li>
            <li><strong>Ergonomi:</strong> İş yerinde uygun pozisyon ve ekipman</li>
            <li><strong>Erken müdahale:</strong> Ağrı başladığında erken değerlendirme</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
            <p className="text-gray-800">
              <strong>Uyarı:</strong> Bu makale bilgilendirme amaçlıdır ve tıbbi tavsiye yerine geçmez. El bileği ağrısı yaşıyorsanız, kesin tanı ve kişiselleştirilmiş tedavi planı için mutlaka bir ortopedi uzmanına başvurun.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Bilimsel Kaynaklar</h2>
          <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
            <li>
              Palmer AK. "Triangular fibrocartilage complex lesions: a classification." Journal of Hand Surgery. 1989.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=TFCC+lesions+classification" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Atzei A, Rizzo A, Luchetti R, Fairplay T. "Arthroscopic foveal repair of triangular fibrocartilage complex peripheral lesions." Hand Clinics. 2011.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=arthroscopic+TFCC+repair" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Andersson JK. "Treatment of TFCC lesions: a systematic review." Journal of Wrist Surgery. 2015.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=TFCC+treatment+systematic+review" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Saito T, Nakamura T, Makino Y. "Wrist arthroscopy for triangular fibrocartilage complex tears." Arthroscopy Techniques. 2018.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=wrist+arthroscopy+TFCC" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Estrella EP, Hung LK, Ho PC, Wang WM. "Arthroscopic repair of triangular fibrocartilage complex tears." Arthroscopy. 2007.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=arthroscopic+repair+TFCC+tears" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Haugstvedt JR, Berger RA, Nakamura T, Neale P, Berglund L, An KN. "Relative contributions of the ulnar attachments of the triangular fibrocartilage complex to the dynamic stability of the distal radioulnar joint." Journal of Hand Surgery. 2006.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=TFCC+ulnar+attachments+stability" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Nakamura T, Yabe Y, Horiuchi Y. "Functional anatomy of the triangular fibrocartilage complex." Journal of Hand Surgery. 1996.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=TFCC+functional+anatomy" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Wysocki RW, Richard MJ, Crowe MM, Leversedge FJ, Ruch DS. "Arthroscopic treatment of peripheral triangular fibrocartilage complex tears with debridement and repair." Journal of Hand Surgery. 2012.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=TFCC+peripheral+tears+arthroscopic+treatment" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              De Smet L, De Ferm A. "Chronic isolated instability of the distal radioulnar joint treated by ulnar shortening osteotomy." Acta Orthopaedica Belgica. 2004.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=ulnar+shortening+osteotomy+DRUJ" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Bednar MS, Arnoczky SP, Weiland AJ. "The microvasculature of the triangular fibrocartilage complex: its clinical significance." Journal of Hand Surgery. 1991.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=TFCC+microvasculature" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
            </li>
          </ol>
        </div>
          {/* Ameliyatsız Tedavi Internal Link */}
          <div className="bg-[#E6FAF8] border-l-4 border-blue-700 p-6 my-8 rounded-r-lg">
            <p className="text-gray-700">
              <strong>İlgili İçerik:</strong> Ameliyatsız tedavi seçenekleri hakkında daha fazla bilgi için{' '}
              <a href="/ameliyatsiz-cozumler" className="text-[#01A899] hover:text-blue-900 font-semibold hover:underline">
                ameliyatsız çözümler sayfamızı
              </a>{' '}
              ziyaret edebilirsiniz.
            </p>
          </div>


        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-[#01CAB8] to-[#01867A] rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">El Bileği Ağrınız mı Var?</h2>
          <p className="text-lg mb-6 text-blue-100">
            TFCC lezyonu ve diğer el bileği problemlerinin tanı ve tedavisi için uzman değerlendirmesi alın. 
            Bursa'da modern teşhis ve tedavi imkanlarıyla hizmetinizdeyiz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/iletisim"
              className="bg-white text-[#01CAB8] px-8 py-3 rounded-lg font-semibold hover:bg-[#E6FAF8] transition text-center"
            >
              Randevu Alın
            </Link>
            <Link
              href="/hizmetler/el-bilegi-cerrahisi"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#01A899] transition text-center"
            >
              El Bileği Cerrahisi Hakkında
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">İlgili Makaleler</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/el-bilegi-artroskopisi" className="group">
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 group-hover:text-[#01CAB8] mb-2">
                    El Bileği Artroskopisi
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Minimal invaziv el bileği cerrahisi hakkında bilgi edinin.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/blog/karpal-tunel-sendromu-2" className="group">
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 group-hover:text-[#01CAB8] mb-2">
                    Karpal Tünel Sendromu
                  </h3>
                  <p className="text-gray-600 text-sm">
                    El bileğinde sinir sıkışması ve tedavi seçenekleri.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/blog/skafoid-kirigi-belirtileri" className="group">
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 group-hover:text-[#01CAB8] mb-2">
                    Skafoid Kırığı
                  </h3>
                  <p className="text-gray-600 text-sm">
                    El bileği kırıklarının en yaygın tipi hakkında detaylı bilgi.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
