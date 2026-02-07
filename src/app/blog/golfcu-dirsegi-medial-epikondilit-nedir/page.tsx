import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Golfçu Dirseği (Medial Epikondilit) Nedir? | Op. Dr. Özgür Oktay Nar',
  description: 'Medial epikondilit (golfçu dirseği) belirtileri, nedenleri ve tedavi seçenekleri. Dirsek iç yüz ağrısı ve konservatif tedavi yöntemleri.',
  keywords: 'golfçu dirseği, medial epikondilit, dirsek ağrısı, tendinit, golf yaralanması, fizik tedavi',
  authors: [{ name: 'Op. Dr. Özgür Oktay Nar' }],
  openGraph: {
    title: 'Golfçu Dirseği (Medial Epikondilit) Nedir?',
    description: 'Medial epikondilit (golfçu dirseği) belirtileri, nedenleri ve tedavi seçenekleri. Dirsek iç yüz ağrısı ve konservatif tedavi yöntemleri.',
    type: 'article',
    locale: 'tr_TR',
    url: 'https://www.ozguroktaynar.com/blog/golfcu-dirsegi-medial-epikondilit-nedir',
    siteName: 'Op. Dr. Özgür Oktay Nar',
    images: [
      {
        url: 'https://placehold.co/1200x630/e2e8f0/475569?text=Golfcu+Dirsegi',
        width: 1200,
        height: 630,
        alt: 'Medial Epikondilit - Golfçu Dirseği Anatomisi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Golfçu Dirseği (Medial Epikondilit) Nedir?',
    description: 'Medial epikondilit (golfçu dirseği) belirtileri, nedenleri ve tedavi seçenekleri. Dirsek iç yüz ağrısı ve konservatif tedavi yöntemleri.',
    images: ['https://placehold.co/1200x630/e2e8f0/475569?text=Golfcu+Dirsegi'],
  },
  alternates: {
    canonical: 'https://www.ozguroktaynar.com/blog/golfcu-dirsegi-medial-epikondilit-nedir',
  },
};

export default function BlogPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': 'https://www.ozguroktaynar.com/blog/golfcu-dirsegi-medial-epikondilit-nedir#webpage',
        url: 'https://www.ozguroktaynar.com/blog/golfcu-dirsegi-medial-epikondilit-nedir',
        name: 'Golfçu Dirseği (Medial Epikondilit) Nedir?',
        description: 'Medial epikondilit (golfçu dirseği) belirtileri, nedenleri ve tedavi seçenekleri. Dirsek iç yüz ağrısı ve konservatif tedavi yöntemleri.',
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
          <span className="text-gray-700">Golfçu Dirseği (Medial Epikondilit)</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Golfçu Dirseği (Medial Epikondilit) Nedir?</h1>
          <div className="flex items-center text-gray-600 text-sm mb-6">
            <span>Op. Dr. Özgür Oktay Nar</span>
            <span className="mx-2">•</span>
            <time>7 Şubat 2025</time>
          </div>
          <img
            src="https://placehold.co/1200x630/e2e8f0/475569?text=Golfcu+Dirsegi"
            alt="Medial Epikondilit - Golfçu Dirseği Anatomisi"
            className="w-full rounded-xl shadow-lg"
          />
        </header>

        {/* Main Content - 7 STEP ARCHITECTURE */}
        <div className="prose prose-lg max-w-none">
          
          {/* Section 1: Giriş */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Giriş</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dirsek iç yüzünde (medial) ağrı ve hassasiyet hissediyorsanız, golfçu dirseği olarak 
              bilinen medial epikondilit ile karşı karşıya olabilirsiniz. Adından da anlaşılacağı üzere, 
              bu durum golf oynayanlar arasında yaygındır ancak herhangi bir tekrarlayan bilek ve 
              el hareketi yapan kişilerde de görülebilir.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Tenisçi dirseğine (lateral epikondilit) kıyasla daha az yaygın olan medial epikondilit, 
              el bileğini büken ve ön kolu içe döndüren kasların dirsek tutunma yerindeki aşırı 
              kullanım sonucu gelişir. Doğru tedavi ile tam iyileşme mümkündür.
            </p>
          </section>

          {/* Section 2: Nedir / Tanım */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Medial Epikondilit Nedir?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Medial epikondilit, dirseğin iç çıkıntısına (medial epikondil) tutunmuş olan fleksör 
              (bilek ve parmakları büken) ve pronator (ön kolu içe döndüren) kas tendonlarının 
              dejenerasyonu ve inflamasyonudur.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bu kaslar tekrarlayan şekilde aşırı yüklendiğinde veya yanlış teknikle kullanıldığında, 
              kemik tutunma bölgesinde mikro yırtıklar, dejenerasyon ve ağrı gelişir. Tendonlarda 
              kalınlaşma ve kötü iyileşme kronik ağrıya yol açabilir.
            </p>
            <div className="bg-[#E6FAF8] p-6 rounded-lg">
              <p className="text-gray-800 font-semibold mb-2">📌 Önemli Not:</p>
              <p className="text-gray-700">
                Medial epikondilit akut bir inflamatuar süreç değil, kronik dejeneratif bir 
                tendinopatidir. Bu nedenle tedavi yalnızca inflamasyonu azaltmakla değil, 
                tendon iyileşmesini desteklemekle ilgilidir.
              </p>
            </div>
          </section>

          {/* Section 3: Belirtiler */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Belirtiler</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Medial epikondilitin tipik belirtileri şunlardır:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Dirsek iç yüzünde ağrı:</strong> Özellikle medial epikondil kemiği üzerinde hassasiyet</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Bilek fleksiyonu sırasında ağrı:</strong> El sıkma, kapı kolu çevirme, obje kaldırma sırasında artar</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Kavrama kuvvetinde azalma:</strong> Sıkma ve tutma gücü zayıflar</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Ön kolda ağrı yayılımı:</strong> Dirsekten el bileğine doğru ağrı hissedilebilir</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Sabah sertliği:</strong> Özellikle dinlenme sonrası dirsekte sertlik</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Uyuşma (nadir):</strong> Ulnar sinir irritasyonu varsa serçe ve yüzük parmağında uyuşma olabilir</span>
              </li>
            </ul>
          </section>

          {/* Section 4: Tedavi Yöntemleri */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tedavi Yöntemleri</h2>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">Konservatif (Ameliyatsız) Tedavi</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Medial epikondilitin %90'ı ameliyatsız yöntemlerle tedavi edilir:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Dinlenme ve aktivite modifikasyonu:</strong> Ağrıyı artıran tekrarlayan hareketlerden kaçınma</span>
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
                <span><strong>Fizik tedavi:</strong> Eksentrik güçlendirme egzersizleri, ultrason, TENS</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Brace/strap kullanımı:</strong> Ön kol bandı tendon üzerindeki basıncı azaltır</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>Kortikosteroid enjeksiyonu:</strong> Akut ağrıda kısa süreli rahatlama sağlayabilir (uzun dönemde tartışmalı)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#1AD2C4] mr-2">•</span>
                <span><strong>PRP (Platelet-Rich Plasma) tedavisi:</strong> Tendon rejenerasyonunu destekleyen modern yöntem</span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">Cerrahi Tedavi</h3>
            <p className="text-gray-700 leading-relaxed">
              6-12 aylık konservatif tedaviye rağmen iyileşmeyen kronik vakalarda cerrahi seçenek 
              değerlendirilebilir. Ameliyatta hasarlı tendon dokusu temizlenir, gerekirse ulnar sinir 
              dekompresyonu yapılır. Minimal invaziv artroskopik veya açık teknik uygulanabilir.
            </p>
          </section>

          {/* Section 5: Sıkça Sorulan Sorular */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Golfçu dirseği ne kadar sürede iyileşir?</h3>
                <p className="text-gray-700">
                  Konservatif tedavi ile 6-12 hafta içinde belirtilerde iyileşme görülür. Tam 
                  tendon iyileşmesi ve güç kazanımı 3-6 ay sürebilir. Erken tanı ve düzenli 
                  egzersiz programı iyileşmeyi hızlandırır.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sadece golf oynayanlar mı bu hastalığa yakalanır?</h3>
                <p className="text-gray-700">
                  Hayır. Adına rağmen, golfçü dirseği tekrarlayan bilek fleksiyonu ve kavrama 
                  gerektiren her aktivitede görülebilir: halter kaldırma, tenis, beyzbol atışı, 
                  marangozluk, bilgisayar kullanımı, müzik aleti çalma gibi.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">En etkili egzersizler nelerdir?</h3>
                <p className="text-gray-700">
                  Eksentrik bilek fleksör egzersizleri (controlled lowering), ön kol pronasyon-supinasyon 
                  egzersizleri ve kavrama güçlendirme egzersizleri en etkilidir. Fizik tedavi uzmanı 
                  gözetiminde yapılan kademeli güçlendirme programı önerilir.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Tekrarlama riski var mıdır?</h3>
                <p className="text-gray-700">
                  Uygun tedavi ve önleyici egzersizler yapılmadan aktiviteye dönülürse tekrarlama 
                  riski vardır. Düzenli esneme, güçlendirme egzersizleri, doğru teknik kullanımı 
                  ve ısınma ile risk minimize edilir.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Kaynaklar */}
          <section className="mb-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kaynaklar</h2>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-700">
              <li>
                Ciccotti MC, et al. "Diagnosis and treatment of medial epicondylitis of the elbow" Clin Sports Med. 2004.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=medial+epicondylitis+diagnosis+treatment" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Amin NH, et al. "Medial epicondylitis: evaluation and management" J Am Acad Orthop Surg. 2015.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=medial+epicondylitis+evaluation+management" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#01CAB8] hover:underline ml-1"
                >
                  [PubMed Ara]
                </a>
              </li>
              <li>
                Mishra AK, et al. "Treatment of chronic elbow tendinosis with buffered platelet-rich plasma" Am J Sports Med. 2006.
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=PRP+elbow+tendinosis+treatment" 
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
              Medial epikondilit (golfçu dirseği), tekrarlayan kullanım sonucu gelişen ancak 
              uygun tedavi ile tamamen iyileşebilen bir durumdur. Erken tanı, istirahat, 
              fizik tedavi ve kademeli güçlendirme egzersizleri başarılı sonuç sağlar.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Dirsek iç yüzünde ağrı ve hassasiyet yaşıyorsanız, bir ortopedi uzmanına başvurarak 
              tanı konulması ve bireysel tedavi planı oluşturulması önerilir. Doğru teknik kullanımı 
              ve düzenli egzersizlerle tekrarlama riskini minimize edebilirsiniz.
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
