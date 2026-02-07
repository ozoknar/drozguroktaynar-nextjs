import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Omuz Anatomisi: Eklemin Yapısı, Kasları ve Fonksiyonları | Detaylı Rehber',
  description: 'Omuz eklemi anatomisi, kemik yapısı, kaslar, ligamentler, rotator kılıf ve fonksiyonları hakkında kapsamlı bilgiler.',
  keywords: 'omuz anatomisi, glenohumeral eklem, rotator kılıf, omuz kasları, skapula, klavikula',
  openGraph: {
    title: 'Omuz Anatomisi: Yapı, Kaslar ve Fonksiyonlar',
    description: 'Omuz ekleminin detaylı anatomisi ve fonksiyonel biomekaniği.',
    type: 'article',
    locale: 'tr_TR',
    siteName: 'Dr. Özgür Oktay Nar',
  },
};

export default function OmuzAnatomisiPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: 'Omuz Anatomisi: Eklemin Yapısı, Kasları ve Fonksiyonları',
    description: 'Omuz ekleminin detaylı anatomik yapısı ve fonksiyonel özellikleri.',
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
      '@type': 'AnatomicalStructure',
      name: 'Omuz Eklemi',
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
            Omuz Anatomisi: Eklemin Yapısı, Kasları ve Fonksiyonları
          </h1>
          <div className="relative w-full h-[400px] mb-8 rounded-2xl overflow-hidden">
            <Image
              src="/images/blog/omuz-anatomisi.jpg"
              alt="Omuz eklemi anatomik yapısı ve kaslar"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Omuz eklemi, vücudumuzdaki en geniş hareket açıklığına sahip eklemdir. Karmaşık anatomik 
            yapısı, kemikler, kaslar, ligamentler ve bursa keselerinin mükemmel koordinasyonu ile 
            360 derece hareket imkanı sağlar.
          </p>
        </header>

        {/* Main Content */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Omuz Kompleksi Nedir?</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Omuz, tek bir eklem değil, birbirleriyle koordineli çalışan dört ayrı eklemden oluşan 
            bir komplekstir. Bu yapı, hem geniş hareket açıklığı hem de stabilite sağlar.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h4 className="font-semibold text-lg mb-3">Omuz Kompleksini Oluşturan 4 Eklem:</h4>
            <ul className="space-y-2">
              <li>• <strong>Glenohumeral eklem:</strong> Asıl omuz eklemi (küre-çukur tipi)</li>
              <li>• <strong>Akromioklaviküler (AC) eklem:</strong> Akromion ve klavikula arası</li>
              <li>• <strong>Sternoklaviküler (SC) eklem:</strong> Göğüs kemiği ve klavikula arası</li>
              <li>• <strong>Skapulotorasik eklem:</strong> Kürek kemiği ve göğüs kafesi arası (psödoartikulasyon)</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Kemik Yapısı</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Omuz kompleksini oluşturan üç ana kemik vardır: klavikula (köprücük kemiği), 
            skapula (kürek kemiği) ve humerus (kol kemiği).
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Skapula (Kürek Kemiği):</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Glenoid kavite:</strong> Humerus başını barındıran sığ çukur</li>
                <li>• <strong>Akromion:</strong> Omuz çatısını oluşturan çıkıntı</li>
                <li>• <strong>Korakoid çıkıntı:</strong> Ön-üst kas tutunma yeri</li>
                <li>• <strong>Spina skapula:</strong> Arka yüzeydeki sırt</li>
                <li>• <strong>Margo lateralis ve medialis:</strong> Yan ve iç kenarlar</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Humerus (Kol Kemiği):</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Humerus başı:</strong> Küresel eklem yüzeyi</li>
                <li>• <strong>Anatomik boyun:</strong> Baş etrafındaki daralmış bölge</li>
                <li>• <strong>Büyük tüberkül:</strong> Yan çıkıntı (rotator kılıf tutunması)</li>
                <li>• <strong>Küçük tüberkül:</strong> Ön çıkıntı</li>
                <li>• <strong>İntertüberkular oluk:</strong> Biseps tendon kanalı</li>
              </ul>
            </div>
          </div>

          <div className="bg-indigo-50 p-6 rounded-lg mb-8">
            <h4 className="font-semibold text-lg mb-3">Klavikula (Köprücük Kemiği):</h4>
            <p className="text-gray-700 mb-2">
              S-şeklinde uzun kemik, üst gövde ile kolu bağlar. İki ucu:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Medial (iç) uç:</strong> Sternumla eklem yapar (SC eklem)</li>
              <li>• <strong>Lateral (dış) uç:</strong> Akromionla eklem yapar (AC eklem)</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Ligamentler ve Kapsül</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Ligamentler, omuz eklemini stabilize eden ve aşırı hareketleri sınırlayan yapılardır.
          </p>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
            <h4 className="font-semibold text-lg mb-3">Başlıca Ligamentler:</h4>
            <ul className="space-y-2">
              <li>• <strong>Glenohumeral ligamentler (SGHL, MGHL, IGHL):</strong> Anterior stabilizasyon</li>
              <li>• <strong>Korakohumeral ligament:</strong> Superior stabilizasyon</li>
              <li>• <strong>Korakoakromiyal ligament:</strong> Akromiyal çatı oluşturur</li>
              <li>• <strong>AC ligamentler:</strong> Akromioklaviküler eklemi stabilize eder</li>
              <li>• <strong>Korakoklavikülar ligamentler (konoid ve trapezoid):</strong> Vertikal stabilizasyon</li>
            </ul>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Eklem kapsülü,</strong> glenohumeral eklemi çevreleyen gevşek bir zarfır. 
            Bu gevşeklik, geniş hareket açıklığını mümkün kılar ancak stabiliteyi azaltır.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Rotator Kılıf Kasları</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Rotator kılıf, glenohumeral eklemi çevreleyen ve stabilize eden dört kasın tendonlarından 
            oluşur. Bu kaslar, omuz hareketlerinde kritik rol oynar.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Rotator Kılıf Kasları (SITS):</h4>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong>1. Supraspinatus:</strong>
                  <p className="text-sm mt-1">Abdukciyonun ilk 15°'sini başlatır</p>
                </li>
                <li>
                  <strong>2. Infraspinatus:</strong>
                  <p className="text-sm mt-1">Eksternal (dış) rotasyon</p>
                </li>
                <li>
                  <strong>3. Teres Minor:</strong>
                  <p className="text-sm mt-1">Eksternal rotasyon ve adduksiyonda yardımcı</p>
                </li>
                <li>
                  <strong>4. Subscapularis:</strong>
                  <p className="text-sm mt-1">İnternal (iç) rotasyon</p>
                </li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Fonksiyonlar:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Humerus başını glenoid içinde stabilize eder</li>
                <li>• Deltoid kasın çekişini dengeler</li>
                <li>• Dinamik stabilizasyon sağlar</li>
                <li>• Güç ve hareket üretir</li>
                <li>• Propriosepsiyon (konum algısı) sağlar</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Diğer Omuz Kasları</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Omuz hareketleri, rotator kılıf dışında birçok kas tarafından da desteklenir.
          </p>

          <div className="space-y-6 mb-8">
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Primer Hareket Kasları:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Deltoid:</strong> Omzun ana abduktörü (üç kısım: anterior, orta, posterior)</li>
                <li>• <strong>Pektoralis major:</strong> Adduksiyon, internal rotasyon, fleksiyon</li>
                <li>• <strong>Latissimus dorsi:</strong> Adduksiyon, internal rotasyon, ekstansiyon</li>
                <li>• <strong>Teres major:</strong> Internal rotasyon ve adduksiyon</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Skapular Stabilizatörler:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Trapezius:</strong> Skapula elevasyonu, rotasyonu, retraksiyonu</li>
                <li>• <strong>Serratus anterior:</strong> Skapula protaksiyonu ve yukarı rotasyonu</li>
                <li>• <strong>Rhomboidler:</strong> Skapula retraksiyonu</li>
                <li>• <strong>Levator skapula:</strong> Skapula elevasyonu</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Yardımcı Kaslar:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Biseps brachii (uzun baş):</strong> Fleksiyon, stabilizasyon</li>
                <li>• <strong>Triseps brachii (uzun baş):</strong> Ekstansiyon</li>
                <li>• <strong>Korakobrakiyalis:</strong> Fleksiyon ve adduksiyon</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Bursalar</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Bursalar, sürtünmeyi azaltmak için eklem çevresinde bulunan sıvı dolu keseleridir.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h4 className="font-semibold text-lg mb-3">Omuz Bölgesindeki Başlıca Bursalar:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Subakromiyal bursa:</strong> Akromion ve rotator kılıf arasında (en önemli)</li>
              <li>• <strong>Subdeltoid bursa:</strong> Deltoid ve rotator kılıf arasında</li>
              <li>• <strong>Subkorakoid bursa:</strong> Korakoid çıkıntı altında</li>
              <li>• <strong>Subskapuler bursa:</strong> Skapula ön yüzü ve göğüs kafesi arasında</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Sinir ve Damar Yapısı</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Başlıca Sinirler:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Aksiller sinir:</strong> Deltoid ve teres minor</li>
                <li>• <strong>Supraskpular sinir:</strong> Supraspinatus ve infraspinatus</li>
                <li>• <strong>Subskapular sinirler:</strong> Subscapularis ve teres major</li>
                <li>• <strong>Muskulokütanöz sinir:</strong> Biseps ve korakobrakiyalis</li>
                <li>• <strong>Thorakodorsal sinir:</strong> Latissimus dorsi</li>
              </ul>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Damarlar:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Aksiller arter:</strong> Ana damar kaynağı</li>
                <li>• <strong>Anterior/posterior humeral sirkumfleks arterler:</strong> Humerus başı beslenmesi</li>
                <li>• <strong>Supraskpular arter:</strong> Rotator kılıf beslenmesi</li>
                <li>• <strong>Thorakoakromial arter:</strong> Deltoid ve pektoral kaslar</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Omuz Hareketleri ve Biyomekanik</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Omuz eklemi altı temel hareket düzleminde çalışır. Bu hareketler, farklı kas gruplarının 
            koordineli çalışması ile gerçekleşir.
          </p>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
            <h4 className="font-semibold text-lg mb-3">Omuz Hareketleri:</h4>
            <ul className="space-y-3">
              <li>
                <strong>1. Fleksiyon (0-180°):</strong>
                <p className="text-gray-700">Kolu öne kaldırma. Primer kaslar: Deltoid (anterior), pektoralis major, biseps.</p>
              </li>
              <li>
                <strong>2. Ekstansiyon (0-60°):</strong>
                <p className="text-gray-700">Kolu arkaya çekme. Primer kaslar: Latissimus dorsi, teres major, deltoid (posterior).</p>
              </li>
              <li>
                <strong>3. Abduksiyon (0-180°):</strong>
                <p className="text-gray-700">Kolu yana kaldırma. Primer kaslar: Supraspinatus (0-15°), deltoid (15-90°), trapezius (skapular rotasyon).</p>
              </li>
              <li>
                <strong>4. Adduksiyon:</strong>
                <p className="text-gray-700">Kolu vücuda yaklaştırma. Primer kaslar: Pektoralis major, latissimus dorsi, teres major.</p>
              </li>
              <li>
                <strong>5. İnternal Rotasyon (0-90°):</strong>
                <p className="text-gray-700">İçe döndürme. Primer kaslar: Subscapularis, pektoralis major, latissimus dorsi.</p>
              </li>
              <li>
                <strong>6. Eksternal Rotasyon (0-90°):</strong>
                <p className="text-gray-700">Dışa döndürme. Primer kaslar: Infraspinatus, teres minor, deltoid (posterior).</p>
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Skapulohumeral Ritim</h3>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Kol kaldırılırken glenohumeral eklem ve skapula 2:1 oranında birlikte hareket eder. 
            180° abduksiyonun 120°'si glenohumeral eklemden, 60°'si skapular rotasyondan gelir.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Klinik Önemi</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Omuz anatomisinin iyi anlaşılması, yaralanmaların tanı ve tedavisinde kritik öneme sahiptir.
          </p>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <h4 className="font-semibold text-lg mb-3">Yaygın Omuz Patolojileri:</h4>
            <ul className="space-y-2">
              <li>• <strong>Rotator kılıf yırtığı:</strong> Tendonda yıpranma veya travma</li>
              <li>• <strong>Subakromiyal sıkışma sendromu:</strong> Bursa iltihabı</li>
              <li>• <strong>Omuz instabilitesi:</strong> Çıkık/subluksasyon</li>
              <li>• <strong>Frozen shoulder (adeziv kapsülit):</strong> Kapsül fibrozisi</li>
              <li>• <strong>Labral yırtıklar (SLAP, Bankart):</strong> Labrum hasarı</li>
              <li>• <strong>AC eklem artriti:</strong> Dejenerasyon</li>
              <li>• <strong>Biseps tendiniti:</strong> Tendon iltihabı</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h4 className="font-semibold text-lg mb-3">Anatomik Bilginin Önemi:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Doğru tanı koymak</li>
              <li>• Uygun tedavi planlamak</li>
              <li>• Rehabilitasyon programı tasarlamak</li>
              <li>• Cerrahi planlamada yol haritası</li>
              <li>• Yaralanmaları önlemek</li>
              <li>• Performans optimizasyonu</li>
            </ul>
          </div>
        </section>

        {/* References */}
        <section className="mb-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Kaynaklar</h2>
          <ol className="space-y-2 text-sm text-gray-700">
            <li>1. Neumann DA. "Kinesiology of the musculoskeletal system: foundations for rehabilitation." Mosby Elsevier. 2010. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=shoulder+kinesiology+biomechanics" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>2. Lugo R, et al. "Shoulder biomechanics." Eur J Radiol. 2008. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=shoulder+anatomy+biomechanics" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>3. Hansen ML, et al. "Anatomy and biomechanics of the shoulder in throwing, swimming, gymnastics, and tennis." Clin Sports Med. 2001. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=shoulder+anatomy+sports" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>4. Halder AM, et al. "Passive capsular restraints to anterior-inferior translation of the glenohumeral joint." J Shoulder Elbow Surg. 2001. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=glenohumeral+ligaments+stability" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>5. Yamaguchi K, et al. "The demographics and morphological features of rotator cuff disease." J Bone Joint Surg Am. 2006. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=rotator+cuff+anatomy+pathology" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>6. Burkhart SS. "Arthroscopic treatment of massive rotator cuff tears." Clin Orthop Relat Res. 2001. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=rotator+cuff+functional+anatomy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>7. Cools AM, et al. "Scapular muscle recruitment patterns: trapezius muscle latency with and without impingement symptoms." Am J Sports Med. 2003. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=scapular+muscle+function" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>8. Terry GC, Chopp TM. "Functional anatomy of the shoulder." J Athl Train. 2000. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=shoulder+functional+anatomy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>9. Ellenbecker TS, Cools A. "Rehabilitation of shoulder impingement syndrome and rotator cuff injuries." World J Orthop. 2010. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=shoulder+rehabilitation+anatomy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>10. Matsen FA, et al. "The Shoulder." 4th ed. Saunders. 2009. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=shoulder+comprehensive+anatomy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
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
          <h2 className="text-3xl font-bold mb-4">Omuz Problemleriniz için Uzman Değerlendirme</h2>
          <p className="text-lg mb-6 text-blue-50">
            Omuz ağrısı veya hareket kısıtlılığı için detaylı muayene randevusu alabilirsiniz.
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
