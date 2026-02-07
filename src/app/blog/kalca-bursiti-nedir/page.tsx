import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kalça Bursiti Nedir? | Trokanterik Bursitin Tedavisi ve Egzersizleri',
  description: 'Kalça bursiti (trokanterik bursit) nedenleri, belirtileri, tanı yöntemleri ve tedavi seçenekleri hakkında kapsamlı bilgi.',
  keywords: 'kalça bursiti, trokanterik bursit, kalça ağrısı, bursa iltihabı, kalça tedavisi',
  openGraph: {
    title: 'Kalça Bursiti Nedir? Belirtileri ve Tedavisi',
    description: 'Kalça bursitinin nedenleri, tanısı ve tedavi yöntemleri hakkında uzman rehberi.',
    type: 'article',
    locale: 'tr_TR',
    siteName: 'Dr. Özgür Oktay Nar',
  },
};

export default function KalcaBursitiPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: 'Kalça Bursiti Nedir?',
    description: 'Kalça bursitinin tanısı, tedavisi ve önleme yöntemleri.',
    author: {
      '@type': 'Person',
      name: 'Dr. Özgür Oktay Nar',
      jobTitle: 'Ortopedi ve Travmatoloji Uzmanı',
    },
    datePublished: '2026-02-06',
    dateModified: '2026-02-06',
    publisher: {
      '@type': 'Organization',
      name: 'Dr. Özgür Oktay Nar',
    },
    medicalSpecialty: 'Orthopedics',
    about: {
      '@type': 'MedicalCondition',
      name: 'Kalça Bursiti',
      alternateName: 'Trokanterik Bursit',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Kalça Bursiti Nedir?
          </h1>
          <div className="relative w-full h-[400px] mb-8 rounded-2xl overflow-hidden">
            <Image
              src="/images/blog/kalca-bursiti.jpg"
              alt="Kalça bursiti anatomisi ve lokasyonu"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Kalça bursiti, kalça ekleminin dışında bulunan bursa keselerinin iltihaplanması sonucu 
            oluşan ağrılı bir durumdur. En yaygın tipi trokanterik bursittir ve özellikle yandan yatarken 
            veya yürürken ağrıya neden olur.
          </p>
        </header>

        {/* Main Content */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Bursa Nedir?</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Bursa keseleri, eklemlerimizde kemik, tendon ve kaslar arasında bulunan, içi sıvı dolu 
            küçük yastıkçıklardır. Sürtünmeyi azaltarak yumuşak dokuların rahatça hareket etmesini sağlarlar. 
            Kalçada yaklaşık 20 bursa bulunur, ancak en sık etkilenen trokanterik bursadır.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h4 className="font-semibold text-lg mb-3">Kalça Bölgesindeki Başlıca Bursalar:</h4>
            <ul className="space-y-2">
              <li>• <strong>Trokanterik bursa:</strong> Kalça kemiğinin dış çıkıntısı üzerinde</li>
              <li>• <strong>İliopektineal bursa:</strong> Kasık bölgesinde</li>
              <li>• <strong>İskiyal bursa:</strong> Oturma kemiği üzerinde</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Nedenler ve Risk Faktörleri</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Kalça bursiti genellikle tekrarlayan hareketler veya direkt travma sonucu gelişir. 
            Orta yaş ve üzeri kadınlarda daha sık görülür.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Primer Nedenler:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Aşırı kullanım (koşu, merdiven çıkma)</li>
                <li>• Direkt travma (düşme, çarpma)</li>
                <li>• Kalça cerrahisi sonrası</li>
                <li>• Bacak uzunluğu farkı</li>
                <li>• Spinal problemler (skolyoz)</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Risk Faktörleri:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• İleri yaş (40-60 yaş arası)</li>
                <li>• Kadın cinsiyet</li>
                <li>• Obezite</li>
                <li>• Romatoid artrit</li>
                <li>• Diyabet</li>
                <li>• Tiroid hastalıkları</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Belirtiler</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Kalça bursitinin en karakteristik belirtisi kalça dış kısmında hassasiyet ve ağrıdır. 
            Belirtiler zamanla kötüleşebilir ve günlük aktiviteleri etkileyebilir.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <h4 className="font-semibold text-lg mb-3">Tipik Belirtiler:</h4>
            <ul className="space-y-2">
              <li>• Kalça dış tarafında keskin veya yanıcı ağrı</li>
              <li>• Yandan yatarken ağrının artması</li>
              <li>• Uzun süre oturma sonrası ağrı</li>
              <li>• Merdiven çıkarken veya koşarken ağrı</li>
              <li>• Gece ağrılarının artması</li>
              <li>• Kalça hareketlerinde kısıtlılık</li>
              <li>• Hassas noktada şişlik ve kızarıklık (nadir)</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Tanı Yöntemleri</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Tanı genellikle fizik muayene ve anamnez ile konur. Görüntüleme yöntemleri ayırıcı tanı 
            için kullanılır.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h4 className="font-semibold text-lg mb-3">Tanı Testleri:</h4>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>Fizik Muayene:</strong>
                <ul className="ml-4 mt-2 space-y-1">
                  <li>- Trokanterik bölgede palpasyonla ağrı</li>
                  <li>- Ober testi (abduktor gerginlik değerlendirmesi)</li>
                  <li>- Trendelenburg testi</li>
                </ul>
              </li>
              <li>
                <strong>Görüntüleme:</strong>
                <ul className="ml-4 mt-2 space-y-1">
                  <li>- X-ray: Kemik patolojilerini dışlamak için</li>
                  <li>- Ultrasonografi: Bursa iltihabını gösterir</li>
                  <li>- MRI: Yumuşak doku detayı ve ayırıcı tanı</li>
                </ul>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Tedavi Seçenekleri</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Kalça bursitinin tedavisi genellikle konservatiftir ve hastaların çoğunda etkilidir. 
            Cerrahi tedavi nadiren gerekir.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Konservatif Tedavi</h3>

          <div className="space-y-6 mb-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">İlk Aşama Tedavi:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>İstirahat:</strong> Ağrıyı artıran aktivitelerden kaçınma</li>
                <li>• <strong>Buz uygulaması:</strong> Günde 3-4 kez, 15-20 dakika</li>
                <li>• <strong>NSAİİ:</strong> İbuprofen veya naproksen (ağrı ve iltihap için)</li>
                <li>• <strong>Aktivite modifikasyonu:</strong> Yürüyüş baston kullanımı</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Fizik Tedavi ve Egzersiz:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Germe egzersizleri (iliotibial bant, kalça fleksörleri)</li>
                <li>• Güçlendirme egzersizleri (abduktör kaslar)</li>
                <li>• Ultrason tedavisi</li>
                <li>• Elektroterapi (TENS)</li>
                <li>• Postür düzeltme</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">İleri Tedavi Seçenekleri:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Kortikosteroid enjeksiyonu:</strong> Hızlı ağrı kesici etki</li>
                <li>• <strong>PRP (Platelet Rich Plasma):</strong> Rejeneratif tedavi</li>
                <li>• <strong>Şok dalga tedavisi:</strong> Kronik vakalarda</li>
                <li>• <strong>Cerrahi (nadir):</strong> Bursa eksizyonu veya iliotibial bant gevşetme</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Egzersiz Önerileri</h2>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
            <h4 className="font-semibold text-lg mb-3">Önerilen Egzersizler:</h4>
            <ul className="space-y-3">
              <li>
                <strong>1. İliotibial Bant Germe:</strong>
                <p className="text-gray-700 mt-1">Ayakta, etkilenen bacağı diğerinin arkasına çaprazlayın. 
                Vücudu etkilenen tarafa doğru eğin. 30 saniye tutun, 3 tekrar.</p>
              </li>
              <li>
                <strong>2. Glute Köprüsü:</strong>
                <p className="text-gray-700 mt-1">Sırt üstü yatın, dizler bükülü. Kalçayı yukarı kaldırın, 
                5 saniye tutun. 10-15 tekrar, 3 set.</p>
              </li>
              <li>
                <strong>3. Yan Bacak Kaldırma:</strong>
                <p className="text-gray-700 mt-1">Yan yatarak alt bacağı bükün, üst bacağı düz kaldırın. 
                10-15 tekrar, 3 set.</p>
              </li>
              <li>
                <strong>4. Klamshell:</strong>
                <p className="text-gray-700 mt-1">Yan yatarak dizler bükülü, ayaklar birleşik. Üst dizi açın 
                ve kapatın. 15 tekrar, 3 set.</p>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Prognoz ve Önleme</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Kalça bursiti uygun tedavi ile genellikle 4-6 hafta içinde iyileşir. Kronik vakalarda 
            tedavi süresi uzayabilir ancak prognoz genel olarak iyidir.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h4 className="font-semibold text-lg mb-3">Önleme Stratejileri:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Uygun ısınma ve soğuma egzersizleri</li>
              <li>• Aşırı tekrarlayan hareketlerden kaçınma</li>
              <li>• Doğru ayakkabı kullanımı</li>
              <li>• Kilo kontrolü</li>
              <li>• Düzenli germe ve güçlendirme egzersizleri</li>
              <li>• Bacak uzunluğu farkının korrekciyonu</li>
              <li>• Yan yatarken yumuşak yastık kullanımı</li>
            </ul>
          </div>
        </section>

        {/* References */}
        <section className="mb-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Kaynaklar</h2>
          <ol className="space-y-2 text-sm text-gray-700">
            <li>1. Williams BS, Cohen SP. "Greater trochanteric pain syndrome: a review of anatomy, diagnosis and treatment." Anesth Analg. 2009. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=greater+trochanteric+pain+syndrome" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>2. Seidman AJ, et al. "Review of Greater Trochanteric Pain Syndrome." Curr Sports Med Rep. 2016. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=trochanteric+bursitis+review" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>3. Reid D. "The management of greater trochanteric pain syndrome: A systematic literature review." J Orthop. 2016. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=trochanteric+pain+management" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>4. Lievense A, et al. "Prognosis of trochanteric pain in primary care." Br J Gen Pract. 2005. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=trochanteric+bursitis+prognosis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>5. Rompe JD, et al. "Home training, local corticosteroid injection, or radial shock wave therapy for greater trochanter pain syndrome." Am J Sports Med. 2009. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=shock+wave+therapy+trochanteric+pain" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>6. Lustenberger DP, et al. "Efficacy of treatment of trochanteric bursitis: a systematic review." Clin J Sport Med. 2011. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=trochanteric+bursitis+treatment+efficacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>7. Cvitanic O, et al. "Snapping hip syndrome." Semin Musculoskelet Radiol. 2013. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=hip+bursitis+imaging" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>8. Fearon AM, et al. "Greater trochanteric pain syndrome negatively affects work, physical activity and quality of life." Int J Sports Phys Ther. 2014. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=trochanteric+pain+quality+of+life" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>9. Shbeeb MI, et al. "Trochanteric bursitis (greater trochanter pain syndrome)." Mayo Clin Proc. 1996. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=trochanteric+bursitis+epidemiology" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>10. Walker P, et al. "Platelet-rich plasma for the treatment of greater trochanteric pain syndrome: a review." BMJ Open Sport Exerc Med. 2018. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=PRP+trochanteric+bursitis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
          </ol>
        </section>
          {/* Ameliyatsız Tedavi Internal Link */}
          <div className="bg-blue-50 border-l-4 border-blue-700 p-6 my-8 rounded-r-lg">
            <p className="text-gray-700">
              <strong>İlgili İçerik:</strong> Ameliyatsız tedavi seçenekleri hakkında daha fazla bilgi için{' '}
              <a href="/ameliyatsiz-cozumler" className="text-blue-700 hover:text-blue-900 font-semibold hover:underline">
                ameliyatsız çözümler sayfamızı
              </a>{' '}
              ziyaret edebilirsiniz.
            </p>
          </div>


        {/* CTA Section */}
        <section className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">Kalça Ağrınız mı Var?</h2>
          <p className="text-lg mb-6 text-blue-50">
            Kalça bursiti tanı ve tedavisi için uzman değerlendirme randevusu alabilirsiniz.
          </p>
          <Link
            href="/randevu"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Randevu Al
          </Link>
        </section>
      </article>
    </>
  );
}
