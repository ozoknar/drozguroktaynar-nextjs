import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kalça Tendiniti Nedir? | Gluteal Tendinopati Belirtileri ve Tedavisi',
  description: 'Kalça tendiniti (gluteal tendinopati) nedenleri, tanı yöntemleri, tedavi seçenekleri ve rehabilitasyon egzersizleri hakkında uzman rehberi.',
  keywords: 'kalça tendiniti, gluteal tendinopati, kalça ağrısı, tendon iltihabı, tendinit tedavisi',
  openGraph: {
    title: 'Kalça Tendiniti: Belirtileri, Tanısı ve Tedavisi',
    description: 'Kalça tendiniti hakkında kapsamlı bilgi ve tedavi yaklaşımları.',
    type: 'article',
    locale: 'tr_TR',
    siteName: 'Dr. Özgür Oktay Nar',
  },
};

export default function KalcaTendinitiPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: 'Kalça Tendiniti Nedir?',
    description: 'Gluteal tendinopatinin tanısı, tedavisi ve rehabilitasyonu.',
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
      name: 'Kalça Tendiniti',
      alternateName: 'Gluteal Tendinopati',
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
            Kalça Tendiniti Nedir?
          </h1>
          <div className="relative w-full h-[400px] mb-8 rounded-2xl overflow-hidden">
            <Image
              src="/images/blog/kalca-tendiniti.jpg"
              alt="Kalça tendiniti ve gluteal tendonlar anatomisi"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Kalça tendiniti, kalça bölgesindeki tendonların iltihaplanması veya dejenerasyonu sonucu 
            oluşan ağrılı bir durumdur. En yaygın tipi gluteal tendinopati olup, özellikle orta yaş 
            kadınlarda sık görülür ve günlük aktiviteleri önemli ölçüde etkileyebilir.
          </p>
        </header>

        {/* Main Content */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tendon ve Tendinit Nedir?</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Tendonlar, kasları kemiklere bağlayan güçlü, lifli bağ dokularıdır. Tendinit, bu 
            tendonların iltihaplanması anlamına gelirken, tendinopati daha geniş bir terim olup 
            hem akut iltihap hem de kronik dejenerasyonu içerir.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h4 className="font-semibold text-lg mb-3">Kalça Bölgesindeki Başlıca Tendonlar:</h4>
            <ul className="space-y-2">
              <li>• <strong>Gluteus medius tendonu:</strong> Kalça abduktör kasının tendonu</li>
              <li>• <strong>Gluteus minimus tendonu:</strong> Yardımcı abduktör tendon</li>
              <li>• <strong>İliopsoas tendonu:</strong> Kalça fleksör tendonu</li>
              <li>• <strong>Hamstring tendonları:</strong> Arka uyluk kaslarının tendonları</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Nedenler ve Patogenez</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Kalça tendiniti genellikle aşırı kullanım, mekanik stres veya yaşa bağlı dejenerasyon 
            sonucu gelişir. Gluteal tendinopati özellikle kalça abduktör tendonlarını etkiler.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Akut Nedenler:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Ani artırılan egzersiz yoğunluğu</li>
                <li>• Travma (düşme, çarpma)</li>
                <li>• Aşırı yük (ağır kaldırma)</li>
                <li>• Yanlış egzersiz tekniği</li>
                <li>• Yetersiz ısınma</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Kronik Risk Faktörleri:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• İleri yaş (40+ yaş)</li>
                <li>• Kadın cinsiyet (hormonal faktörler)</li>
                <li>• Obezite</li>
                <li>• Biyomekanik bozukluklar</li>
                <li>• Bacak uzunluğu farkı</li>
                <li>• Kas dengesizlikleri</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Belirtiler ve Klinik Bulgular</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Kalça tendiniti belirtileri genellikle yavaş başlar ve zamanla kötüleşir. Ağrı, aktivite 
            ile artar ve istirahat ile azalır.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <h4 className="font-semibold text-lg mb-3">Tipik Belirtiler:</h4>
            <ul className="space-y-2">
              <li>• Kalça dış tarafında derin, künt ağrı</li>
              <li>• Yürürken veya koşarken ağrının artması</li>
              <li>• Merdivenlerden inerken zorluk</li>
              <li>• Yan yatarken rahatsızlık</li>
              <li>• Sabah sertliği</li>
              <li>• Tek bacak üzerinde durmada güçsüzlük</li>
              <li>• Kasık veya uyluğa yayılan ağrı</li>
              <li>• Aktivite sonrası şişlik (nadir)</li>
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
            <h4 className="font-semibold text-lg mb-3">⚠️ Uyarı İşaretleri (Doktor Muayenesi Gerektirir):</h4>
            <ul className="space-y-2">
              <li>• İstirahatle geçmeyen şiddetli ağrı</li>
              <li>• Gece ağrıları</li>
              <li>• Ciddi yürüme bozukluğu</li>
              <li>• Bacakta güçsüzlük veya uyuşma</li>
              <li>• Ateş veya sistemik semptomlar</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Tanı Yöntemleri</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Tanı, detaylı anamnez, fizik muayene ve gerektiğinde görüntüleme yöntemleri ile konur.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h4 className="font-semibold text-lg mb-3">Tanı Süreci:</h4>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>1. Fizik Muayene:</strong>
                <ul className="ml-4 mt-2 space-y-1">
                  <li>- Palpasyonla ağrı testi</li>
                  <li>- Trendelenburg testi (abduktör zayıflık)</li>
                  <li>- Single-leg stance test</li>
                  <li>- FABER testi (kalça fleksiyon-abdüksiyon-eksternal rotasyon)</li>
                  <li>- Resisted abduction testi</li>
                </ul>
              </li>
              <li>
                <strong>2. Görüntüleme:</strong>
                <ul className="ml-4 mt-2 space-y-1">
                  <li>- <strong>X-ray:</strong> Kemik patolojilerini ekarte etmek için</li>
                  <li>- <strong>Ultrasonografi:</strong> Tendon yapısını değerlendirme, dinamik muayene</li>
                  <li>- <strong>MRI:</strong> Tendon yırtığı, dejenerasyon ve bursa patolojisi</li>
                </ul>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Tedavi Yaklaşımları</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Kalça tendiniti tedavisi genellikle konservatif yöntemlerle başlar. Tedavi süreci 
            3-6 ay sürebilir ve hastaların çoğunda başarılıdır.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Akut Faz Tedavisi (İlk 2-3 Hafta)</h3>

          <div className="bg-green-50 p-6 rounded-lg mb-6">
            <h4 className="font-semibold text-lg mb-3">PRICE Protokolü:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Protection (Koruma):</strong> Ağrıyı artıran aktivitelerden kaçınma</li>
              <li>• <strong>Rest (İstirahat):</strong> Göreceli istirahat (tam immobilizasyon değil)</li>
              <li>• <strong>Ice (Buz):</strong> 15-20 dk, günde 3-4 kez</li>
              <li>• <strong>Compression (Kompresyon):</strong> Gerekirse elastik bandaj</li>
              <li>• <strong>Elevation (Yükselme):</strong> Şişlik varsa bacağı yüksekte tutma</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Rehabilitasyon Fazı</h3>

          <div className="space-y-6 mb-8">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Fizik Tedavi Modaliteleri:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Terapötik ultrason</li>
                <li>• TENS (transkütanöz elektrik stimülasyonu)</li>
                <li>• Lazer tedavisi</li>
                <li>• Manuel terapi ve masaj</li>
                <li>• Kinezyolojik bantlama</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Egzersiz Programı (Progresif):</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Faz 1 (0-2 hafta):</strong> Pasif ve aktif-asistif germe</li>
                <li><strong>Faz 2 (2-4 hafta):</strong> İzometrik güçlendirme</li>
                <li><strong>Faz 3 (4-8 hafta):</strong> Konsantrik/eksantrik egzersizler</li>
                <li><strong>Faz 4 (8-12 hafta):</strong> Fonksiyonel egzersizler, denge çalışması</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">İleri Tedavi Seçenekleri</h3>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h4 className="font-semibold text-lg mb-3">Medikal ve İnvaziv Tedaviler:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>NSAİİ:</strong> Ağrı ve iltihap kontrolü (kısa süreli)</li>
              <li>• <strong>Kortikosteroid enjeksiyonu:</strong> Seçilmiş hastalarda (dikkatli kullanım)</li>
              <li>• <strong>PRP (Platelet Rich Plasma):</strong> Tendon rejenerasyonu</li>
              <li>• <strong>Şok dalga tedavisi (ESWT):</strong> Kronik tendinopati için</li>
              <li>• <strong>Cerrahi:</strong> Konservatif tedaviye dirençli vakalarda (nadir)</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Rehabilitasyon Egzersizleri</h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6">
              <h4 className="font-semibold text-lg mb-3">Başlangıç Egzersizleri:</h4>
              <ul className="space-y-3">
                <li>
                  <strong>1. Gluteal İzometrik Sıkma:</strong>
                  <p className="text-gray-700 mt-1">Sırt üstü yatarken kalça kaslarını sıkın, 
                  5 saniye tutun, gevşetin. 10 tekrar, günde 3 set.</p>
                </li>
                <li>
                  <strong>2. Kalça Ekstansiyon Germe:</strong>
                  <p className="text-gray-700 mt-1">Sırt üstü yatın, bir bacağı göğse çekin, 
                  30 saniye tutun. Her bacak için 3 tekrar.</p>
                </li>
                <li>
                  <strong>3. IT Band Germe:</strong>
                  <p className="text-gray-700 mt-1">Ayakta bacakları çaprazlayarak yan eğilme. 
                  30 saniye, 3 tekrar.</p>
                </li>
              </ul>
            </div>

            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6">
              <h4 className="font-semibold text-lg mb-3">İleri Egzersizler (Faz 3-4):</h4>
              <ul className="space-y-3">
                <li>
                  <strong>4. Yan Bacak Kaldırma (Direnç Bantlı):</strong>
                  <p className="text-gray-700 mt-1">Yan yatarak üst bacağı direnç bandına karşı 
                  kaldırın. 15 tekrar, 3 set.</p>
                </li>
                <li>
                  <strong>5. Single-Leg Squat:</strong>
                  <p className="text-gray-700 mt-1">Tek bacak üzerinde kontrollü çömelme. 
                  10 tekrar, 3 set.</p>
                </li>
                <li>
                  <strong>6. Side Plank with Hip Abduction:</strong>
                  <p className="text-gray-700 mt-1">Yan plank pozisyonunda üst bacağı kaldırma. 
                  10 tekrar, 2 set.</p>
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Prognoz ve Önleme</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Kalça tendiniti tedavisi genellikle 3-6 ay sürer. Erken tanı ve uygun tedavi ile 
            çoğu hasta tam iyileşme gösterir. Kronik vakalarda iyileşme daha uzun sürebilir.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h4 className="font-semibold text-lg mb-3">Önleme Stratejileri:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Egzersiz yoğunluğunu kademeli artırma (%10 kuralı)</li>
              <li>• Uygun ısınma ve soğuma rutinleri</li>
              <li>• Düzenli germe egzersizleri</li>
              <li>• Çapraz antrenman (farklı egzersiz türleri)</li>
              <li>• Kalça stabilizatör kaslarını güçlendirme</li>
              <li>• Doğru koşu tekniği ve ayakkabı seçimi</li>
              <li>• Kilo kontrolü</li>
              <li>• Erken müdahale (ağrıda artış varsa istirahat)</li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h4 className="font-semibold text-lg mb-3">Spora Dönüş Kriterleri:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Ağrısız tam hareket açıklığı</li>
              <li>• Sağlam tarafın %90'ı kadar kas gücü</li>
              <li>• Fonksiyonel testlerde başarı (single-leg hop, squat)</li>
              <li>• Günlük aktivitelerde ağrı yok</li>
              <li>• Palpasyonda minimal hassasiyet</li>
            </ul>
          </div>
        </section>

        {/* References */}
        <section className="mb-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Kaynaklar</h2>
          <ol className="space-y-2 text-sm text-gray-700">
            <li>1. Grimaldi A, et al. "Gluteal Tendinopathy: A Review of Mechanisms, Assessment and Management." Sports Med. 2015. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=gluteal+tendinopathy+review" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>2. Mellor R, et al. "Education plus exercise versus corticosteroid injection use versus a wait and see approach on global outcome and pain from gluteal tendinopathy." Br J Sports Med. 2018. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=gluteal+tendinopathy+treatment+comparison" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>3. Fearon AM, et al. "Greater trochanteric pain syndrome: defining the clinical syndrome." Br J Sports Med. 2013. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=greater+trochanteric+pain+syndrome" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>4. Ganderton C, et al. "Gluteal Loading Versus Sham Exercises to Improve Pain and Dysfunction in Postmenopausal Women with Greater Trochanteric Pain Syndrome." J Womens Health. 2018. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=gluteal+tendinopathy+exercise+women" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>5. Cook JL, Purdam CR. "Is tendon pathology a continuum? A pathology model to explain the clinical presentation of load-induced tendinopathy." Br J Sports Med. 2009. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=tendinopathy+continuum+model" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>6. Long SS, et al. "Prevalence and Characteristics of Asymptomatic Gluteus Medius and Minimus Tendon Abnormalities on MRI." AJR Am J Roentgenol. 2018. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=gluteus+medius+tendon+MRI" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>7. Plinsinga ML, et al. "Pelvic and femoral muscle contributions to hip joint loading during running." J Biomech. 2016. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=hip+biomechanics+running" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>8. Rio E, et al. "Tendon neuroplastic training: changing the way we think about tendon rehabilitation." Br J Sports Med. 2016. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=tendon+rehabilitation+neuroplastic" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>9. Lievense A, et al. "Influence of hip dysplasia on the development of osteoarthritis of the hip." Ann Rheum Dis. 2004. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=hip+dysplasia+biomechanics" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>10. Speers CJ, Bhogal GS. "Greater trochanteric pain syndrome: a review of diagnosis and management in general practice." Br J Gen Pract. 2017. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=trochanteric+pain+primary+care" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
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
          <h2 className="text-3xl font-bold mb-4">Kalça Ağrınız için Uzman Değerlendirme</h2>
          <p className="text-lg mb-6 text-blue-50">
            Kalça tendiniti tanı ve tedavisi için detaylı muayene randevusu alabilirsiniz.
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
