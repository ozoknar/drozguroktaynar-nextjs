import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Kaval Kemiği (Fibula): Anatomi, Kırıklar ve Tedavi | Dr. Özgür Oktay Nar',
  description: 'Kaval kemiği (fibula) anatomisi, kırık tipleri, belirtiler ve tedavi yöntemleri hakkında uzman ortopedistten detaylı bilgi. Ayak bileği yaralanmalarında önemli rol.',
  keywords: 'kaval kemiği, fibula, fibula kırığı, ayak bileği kırığı, kaval kemiği kırığı tedavi, tibia fibula kırığı, ortopedi, Bursa ortopedi',
  authors: [{ name: 'Dr. Özgür Oktay Nar' }],
  openGraph: {
    title: 'Kaval Kemiği: Anatomi, Kırıklar ve Tedavi | Dr. Özgür Oktay Nar',
    description: 'Kaval kemiği kırıkları ve tedavi seçenekleri hakkında uzman görüşü.',
    type: 'article',
    locale: 'tr_TR',
    siteName: 'Dr. Özgür Oktay Nar - Ortopedi Uzmanı',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaval Kemiği: Anatomi, Kırıklar ve Tedavi',
    description: 'Kaval kemiği yaralanmaları hakkında bilmeniz gerekenler.',
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
  headline: 'Kaval Kemiği (Fibula): Anatomi, Kırıklar ve Tedavi',
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
  description: 'Kaval kemiği anatomisi, kırık tipleri ve tedavi yöntemleri hakkında detaylı bilgi.',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://drozguroktaynar.com/blog/kaval-kemigi',
  },
  about: {
    '@type': 'MedicalCondition',
    name: 'Kaval Kemiği Kırığı',
    alternateName: 'Fibula Kırığı',
  },
};

export default function KavalKemigiPage() {
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
            Kaval Kemiği (Fibula): Anatomi, Kırıklar ve Tedavi
          </h1>
          
          <div className="flex items-center text-gray-600 text-sm mb-6">
            <time dateTime="2026-02-06">6 Şubat 2026</time>
            <span className="mx-2">•</span>
            <span>Dr. Özgür Oktay Nar</span>
            <span className="mx-2">•</span>
            <span>9 dakika okuma</span>
          </div>

          <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-6">
            <Image
              src="/images/blog/kaval-kemigi-hero.jpg"
              alt="Kaval kemiği anatomisi ve alt bacak kemikleri"
              fill
              className="object-cover"
              priority
            />
          </div>

          <p className="text-xl text-gray-700 leading-relaxed">
            Kaval kemiği (fibula), alt bacakta baldır kemiğinin (tibia) yanında yer alan ince ve uzun bir kemiktir. Vücut ağırlığını taşımada doğrudan rol almasa da, ayak bileği stabilitesi ve kas tutunma noktaları açısından büyük önem taşır. Bu yazıda kaval kemiğinin anatomisi, kırık tipleri ve tedavi yaklaşımlarını detaylı şekilde inceleyeceğiz.
          </p>
        </header>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Kaval Kemiği Nedir?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Kaval kemiği (fibula), alt bacakta tibia'nın (kaval kemiği ile karışmamalı - tibia baldır kemiğidir) lateral (dış) tarafında uzanan bir kemiktir. Latince 'tokca' anlamına gelen fibula, aşağıdaki özelliklere sahiptir:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Alt bacaktaki iki uzun kemikten biridir (diğeri tibia)</li>
            <li>Tibiadan daha ince ve hafiftir</li>
            <li>Vücut ağırlığının yaklaşık %17'sini taşır</li>
            <li>Proksimalden (üst) distale (alt) doğru uzanır</li>
            <li>Ayak bileği ekleminin lateral stabilitesini sağlar</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Anatomik Yapı</h2>
          
          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Bölümleri</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Kaval kemiği üç ana bölüme ayrılır:
          </p>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Proksimal Uç (Fibula Başı)</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Dizin hemen altında yer alır</li>
            <li>Tibia'nın lateral kondili ile eklem yapar</li>
            <li>Peroneal sinir bu bölgeden geçer (yaralanma riski)</li>
            <li>Biceps femoris kasının yapışma yeridir</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Gövde (Şaft)</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Uzun ve ince yapılıdır</li>
            <li>Üçgen prizma şeklindedir</li>
            <li>Çok sayıda kas buraya tutunur (peroneal kaslar, ekstensörler)</li>
            <li>İnterosseöz membran ile tibia'ya bağlanır</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Distal Uç (Lateral Malleol)</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Ayak bileğinin dış çıkıntısını oluşturur</li>
            <li>Ayak bileği ekleminin lateral stabilitesinde kritik rol oynar</li>
            <li>Talus kemiği ile eklem yüzeyi oluşturur</li>
            <li>Lateral ligamentler buraya tutunur</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">İşlevleri</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Stabilite:</strong> Ayak bileğine lateral destek sağlar</li>
            <li><strong>Kas tutunma:</strong> 9 farklı kasa yapışma yeri sunar</li>
            <li><strong>Yük dağılımı:</strong> Vücut ağırlığının bir kısmını taşır</li>
            <li><strong>Hareket:</strong> Alt bacak rotasyon hareketlerine katkıda bulunur</li>
          </ul>

          <div className="bg-[#E6FAF8] border-l-4 border-[#1AD2C4] p-6 my-8">
            <p className="text-gray-800">
              <strong>İlginç Bilgi:</strong> Kaval kemiği vücut ağırlığı taşımada küçük rol oynasa da, ayak bileği stabilitesi açısından hayati öneme sahiptir. Lateral malleol olmadan ayak bileği ekleminin stabilitesi ciddi şekilde bozulur.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Kaval Kemiği Kırıkları</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Fibula kırıkları genellikle travma, spor yaralanmaları veya ayak bileği burkulmaları sonucu oluşur. Kırık lokasyonuna göre farklı sınıflandırılır.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Kırık Tipleri (Lokasyona Göre)</h3>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Proksimal Fibula Kırıkları</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Fibula başı kırığı:</strong> Genellikle direkt travma sonucu</li>
            <li><strong>Risk:</strong> Peroneal sinir hasarı (ayak düşüklüğü riski)</li>
            <li><strong>Belirtiler:</strong> Diz lateralinde ağrı, şişlik, ayak bileği fleksiyonunda güçlük</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Şaft Kırıkları</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>İzole fibula kırığı:</strong> Sadece kaval kemiği kırık</li>
            <li><strong>Tibia-fibula kırığı:</strong> Her iki kemik birlikte kırık</li>
            <li><strong>Nedenler:</strong> Direkt travma, burulma, yüksekten düşme</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Distal Fibula Kırıkları (Lateral Malleol)</h4>
          <p className="text-gray-700 leading-relaxed mb-4">
            En sık görülen tip. Ayak bileği kırıklarının önemli bir komponentidir.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Weber Sınıflaması (ayak bileği kırıkları):</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Weber A:</strong> Syndesmosis altında kırık - stabil</li>
            <li><strong>Weber B:</strong> Syndesmosis seviyesinde - potansiyel instabilite</li>
            <li><strong>Weber C:</strong> Syndesmosis üstünde - instabil, ligament hasarı muhtemel</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Kırık Nedenleri</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Travma:</strong> Araç kazası, yüksekten düşme, direkt darbe</li>
            <li><strong>Spor yaralanmaları:</strong> Futbol, basketbol, kayak</li>
            <li><strong>Ayak bileği burkulması:</strong> İnversiyon veya eversiyon yaralanmaları</li>
            <li><strong>Stres kırığı:</strong> Tekrarlayan yüklenme (koşucular, askerler)</li>
            <li><strong>Osteoporoz:</strong> Kemik yoğunluğu azalması</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Belirtiler ve Semptomlar</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Şiddetli ağrı:</strong> Kırık bölgesinde ani ve keskin ağrı</li>
            <li><strong>Şişlik:</strong> Kırık etrafında hızlı gelişen ödem</li>
            <li><strong>Morarma:</strong> Ekimoz ve hematomlar</li>
            <li><strong>Deformite:</strong> Ciddi kırıklarda bacakta şekil bozukluğu</li>
            <li><strong>Yük vermede güçlük:</strong> Basma ve yürümede ağrı</li>
            <li><strong>Hassasiyet:</strong> Dokunmada şiddetli ağrı</li>
            <li><strong>Hareket kısıtlılığı:</strong> Ayak bileği veya diz hareketlerinde sınırlılık</li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
            <p className="text-gray-800">
              <strong>ACİL DURUM:</strong> Aşağıdaki durumlar acil tıbbi müdahale gerektirir:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-700">
              <li>Açık kırık (kemik dışarı çıkmış)</li>
              <li>Bacakta dolaşım bozukluğu (soğukluk, solgunluk, nabız alınamıyor)</li>
              <li>Ayak düşüklüğü (ayak parmak ucuna kaldırılamıyor)</li>
              <li>Şiddetli deformite</li>
              <li>Kompartman sendromu belirtileri (şiddetli ağrı, gerginlik)</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Tanı Yöntemleri</h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Fizik Muayene</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Görsel değerlendirme (deformite, şişlik, morarma)</li>
            <li>Palpasyon (dokunma ile hassasiyet testi)</li>
            <li>Nörovasküler muayene (nabız, his, hareket kontrolü)</li>
            <li>Ottawa ayak bileği kuralları (röntgen gerekli mi?)</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Görüntüleme</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Direkt röntgen:</strong> İlk tercih, iki yönden çekim (AP ve lateral)</li>
            <li><strong>BT:</strong> Kompleks kırıklarda detaylı kemik yapısı değerlendirmesi</li>
            <li><strong>MRI:</strong> Ligament, tendon ve yumuşak doku hasarını gösterir</li>
            <li><strong>Stres grafisi:</strong> Ayak bileği stabilitesini değerlendirir</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Tedavi Seçenekleri</h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Konservatif (Ameliyatsız) Tedavi</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Stabil, deplase olmayan (yerinden oynamayan) kırıklar için uygulanır:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>RICE protokolü:</strong> Rest (istirahat), Ice (buz), Compression (basınç), Elevation (yüksekte tutma)</li>
            <li><strong>Alçı/atel:</strong> 4-6 hafta immobilizasyon</li>
            <li><strong>Koltuk değneği:</strong> Kırık iyileşene kadar yük vermeme</li>
            <li><strong>Ağrı kontrolü:</strong> Antiinflamatuar ilaçlar</li>
            <li><strong>Kontrol röntgenleri:</strong> İyileşmeyi takip için periyodik görüntüleme</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cerrahi Tedavi</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Aşağıdaki durumlarda cerrahi gerekebilir:
          </p>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Cerrahi Endikasyonları</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Deplase (yerinden oynamış) kırıklar</li>
            <li>Açık kırıklar</li>
            <li>İnstabil ayak bileği kırıkları</li>
            <li>Syndesmosis yaralanması</li>
            <li>Tibia-fibula çift kırığı</li>
            <li>Peroneal sinir sıkışması riski</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Cerrahi Yöntemler</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Açık redüksiyon internal fiksasyon (ORIF):</strong> Plak ve vida ile tespit</li>
            <li><strong>İntramedüller çivi:</strong> Uzun şaft kırıklarında</li>
            <li><strong>Eksternal fiksatör:</strong> Açık veya enfekte kırıklarda geçici tespit</li>
            <li><strong>Syndesmosis vidası:</strong> Ayak bileği instabilitesinde</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">İyileşme Süreci ve Rehabilitasyon</h2>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">İyileşme Süresi</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Basit kırıklar:</strong> 6-8 hafta</li>
            <li><strong>Komplike kırıklar:</strong> 3-6 ay</li>
            <li><strong>Cerrahi sonrası:</strong> Kemik kaynaması 8-12 hafta</li>
            <li><strong>Tam iyileşme:</strong> 6-12 ay (spor aktivitelerine dönüş)</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Rehabilitasyon Aşamaları</h3>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Faz 1: Koruma (0-6 hafta)</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>İmmobilizasyon (alçı/atel)</li>
            <li>Yük vermeme veya kısmi yük</li>
            <li>Ödem kontrolü</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Faz 2: Mobilizasyon (6-12 hafta)</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Hareket açıklığı egzersizleri</li>
            <li>Progresif yük verme</li>
            <li>İzometrik güçlendirme</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Faz 3: Güçlendirme (3-6 ay)</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Kuvvet ve dayanıklılık egzersizleri</li>
            <li>Propriyosepsiyon (denge) çalışmaları</li>
            <li>Fonksiyonel aktivitelere dönüş</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Faz 4: Spora Dönüş (6-12 ay)</h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Spora özel egzersizler</li>
            <li>Pliometrik çalışmalar</li>
            <li>Tam aktivite seviyesine dönüş</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Komplikasyonlar</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Kaynamama (nonunion):</strong> Kırığın iyileşmemesi</li>
            <li><strong>Yanlış kaynama (malunion):</strong> Kırığın yanlış pozisyonda iyileşmesi</li>
            <li><strong>Kompartman sendromu:</strong> Kas kompartmanlarında basınç artışı</li>
            <li><strong>Peroneal sinir hasarı:</strong> Ayak düşüklüğü</li>
            <li><strong>Enfeksiyon:</strong> Özellikle açık kırıklarda</li>
            <li><strong>Kronik ağrı:</strong> Uzun süreli rahatsızlık</li>
            <li><strong>Eklem sertliği:</strong> Hareket kısıtlılığı</li>
            <li><strong>Post-travmatik artrit:</strong> Eklemde erken aşınma</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Önleme Stratejileri</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li><strong>Koruyucu ekipman:</strong> Spor aktivitelerinde uygun koruma</li>
            <li><strong>Güçlendirme:</strong> Alt bacak kaslarını kuvvetlendirme</li>
            <li><strong>Denge egzersizleri:</strong> Propriyosepsiyon çalışmaları</li>
            <li><strong>Uygun ayakkabı:</strong> Destekleyici ve uygun spor ayakkabıları</li>
            <li><strong>Isınma:</strong> Aktivite öncesi uygun ısınma</li>
            <li><strong>Kemik sağlığı:</strong> Kalsiyum, D vitamini desteği</li>
            <li><strong>Stres kırığı önleme:</strong> Aşırı yüklenmeye karşı önlem</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
            <p className="text-gray-800">
              <strong>Uyarı:</strong> Bu makale bilgilendirme amaçlıdır ve tıbbi tavsiye yerine geçmez. Kaval kemiği kırığı şüphesi durumunda mutlaka bir ortopedi uzmanına başvurun. Erken tanı ve uygun tedavi, komplikasyon riskini azaltır ve iyileşmeyi hızlandırır.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Bilimsel Kaynaklar</h2>
          <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
            <li>
              Court-Brown CM, McBirnie J. "The epidemiology of tibial fractures." Journal of Bone and Joint Surgery. 1995.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=tibial+fractures+epidemiology" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Strauss EJ, Egol KA. "The management of ankle fractures in the elderly." Injury. 2007.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=ankle+fractures+management" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Panchbhavi VK, Vallurupalli S, Yang J, Andersen CR. "Comparison of surgical and functional outcomes of ankle fractures in patients over 60 years." Foot & Ankle International. 2008.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=ankle+fractures+outcomes" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Takao M, Ochi M, Naito K, Iwata A, Kawasaki K, Tobita M, Miyamoto W, Oae K. "Arthroscopic diagnosis of tibiofibular syndesmosis disruption." Arthroscopy. 2001.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=syndesmosis+arthroscopic+diagnosis" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Weber BG. "Evaluation of ankle injuries with stress radiography." Injury. 1972.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=Weber+classification+ankle+fractures" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Egol KA, Tejwani NC, Walsh MG, Capla EL, Koval KJ. "Predictors of short-term functional outcome following ankle fracture surgery." Journal of Bone and Joint Surgery. 2006.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=ankle+fracture+functional+outcome" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Hoiness P, Stromsoe K. "Tricortical versus quadricortical syndesmosis fixation in ankle fractures." Journal of Orthopaedic Trauma. 2004.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=syndesmosis+fixation+ankle" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Michelson JD, Varner KE, Checcone M. "Diagnosing deltoid injury in ankle fractures: the gravity stress view." Clinical Orthopaedics and Related Research. 2001.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=deltoid+injury+ankle+fractures" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Stufkens SA, van den Bekerom MP, Kerkhoffs GM, Hintermann B, van Dijk CN. "Long-term outcome after 1822 operatively treated ankle fractures." Injury. 2011.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=ankle+fractures+long+term+outcome" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
            </li>
            <li>
              Weening B, Bhandari M. "Predictors of functional outcome following transsyndesmotic screw fixation of ankle fractures." Journal of Orthopaedic Trauma. 2005.
              {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=transsyndesmotic+screw+fixation" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
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
          <h2 className="text-3xl font-bold mb-4">Alt Bacak veya Ayak Bileği Yaralanmanız mı Var?</h2>
          <p className="text-lg mb-6 text-blue-100">
            Kaval kemiği kırıkları ve ayak bileği yaralanmalarının uzman tanı ve tedavisi için bize ulaşın. 
            Bursa'da modern cerrahi ve rehabilitasyon imkanlarıyla hizmetinizdeyiz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/iletisim"
              className="bg-white text-[#01CAB8] px-8 py-3 rounded-lg font-semibold hover:bg-[#E6FAF8] transition text-center"
            >
              Randevu Alın
            </Link>
            <Link
              href="/hizmetler/travma-cerrahisi"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#01A899] transition text-center"
            >
              Travma Cerrahisi Hakkında
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">İlgili Makaleler</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/ayak-bilegi-artroskopisi-nedir" className="group">
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 group-hover:text-[#01CAB8] mb-2">
                    Ayak Bileği Artroskopisi
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Minimal invaziv ayak bileği cerrahisi hakkında bilgi edinin.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/blog/eklem-agrisi-bursa-dr-ozgur-oktay-nar-ortopedi-bursa" className="group">
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 group-hover:text-[#01CAB8] mb-2">
                    Eklem Ağrısı ve Tedavisi
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Eklem ağrılarının nedenleri ve tedavi seçenekleri.
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
                    El bileği kırıklarının yaygın bir tipi hakkında detaylı bilgi.
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
