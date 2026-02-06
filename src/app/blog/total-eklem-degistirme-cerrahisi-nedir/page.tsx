import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Total Eklem Değiştirme Cerrahisi Nedir? | Endikasyonlar ve Komplikasyonlar',
  description: 'Total eklem değiştirme (artroplasti) cerrahisi, endikasyonları, prosedür detayları, ameliyat sonrası bakım ve komplikasyonları hakkında kapsamlı rehber.',
  keywords: 'total eklem değiştirme, artroplasti, kalça protezi, diz protezi, eklem cerrahisi, ortopedi',
  openGraph: {
    title: 'Total Eklem Değiştirme Cerrahisi Nedir?',
    description: 'Eklem artroplastisi hakkında kapsamlı bilgi ve tedavi seçenekleri.',
    type: 'article',
    locale: 'tr_TR',
    siteName: 'Dr. Özgür Oktay Nar',
  },
};

export default function TotalEklemDegistirmeCerrahisiPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: 'Total Eklem Değiştirme Cerrahisi Nedir?',
    description: 'Total eklem değiştirme cerrahisinin endikasyonları, prosedürü ve sonuçları.',
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
      '@type': 'MedicalProcedure',
      name: 'Total Eklem Değiştirme Cerrahisi',
      procedureType: 'Surgical',
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
            Total Eklem Değiştirme Cerrahisi Nedir?
          </h1>
          <div className="relative w-full h-[400px] mb-8 rounded-2xl overflow-hidden">
            <Image
              src="/images/blog/total-eklem-degistirme.jpg"
              alt="Total eklem değiştirme cerrahisi prosedürü"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Total eklem değiştirme cerrahisi (artroplasti), hasarlı veya hastalanmış eklem yüzeylerinin 
            yapay implantlarla değiştirildiği ortopedik bir prosedürdür. Bu ameliyat özellikle ileri 
            evre osteoartrit hastalarında ağrıyı azaltır ve fonksiyonları iyileştirir.
          </p>
        </header>

        {/* Main Content */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Nedir ve Nasıl Yapılır?</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Total eklem değiştirme, hasar görmüş eklem kıkırdağı ve kemik dokusunun cerrahi olarak 
            çıkarılıp metal, plastik veya seramik bileşenlerle değiştirilmesidir. En sık uygulanan 
            prosedürler kalça ve diz artroplastisidir.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ameliyat Prosedürü</h3>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h4 className="font-semibold text-lg mb-3">Cerrahi Adımlar:</h4>
            <ul className="space-y-2">
              <li>• Genel veya rejyonel anestezi uygulaması</li>
              <li>• Eklem bölgesine cerrahi insizyon</li>
              <li>• Hasarlı eklem yüzeylerinin çıkarılması</li>
              <li>• Kemik yüzeylerinin hazırlanması</li>
              <li>• Protez bileşenlerinin implantasyonu</li>
              <li>• Eklem stabilitesinin test edilmesi</li>
              <li>• Kapamanın yapılması</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Endikasyonlar</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Total eklem değiştirme cerrahisi genellikle konservatif tedavilere yanıt vermeyen 
            ileri evre eklem hastalıklarında endikedir.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Primer Endikasyonlar:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• İleri evre osteoartrit</li>
                <li>• Romatoid artrit</li>
                <li>• Avasküler nekroz</li>
                <li>• Post-travmatik artrit</li>
                <li>• Kalça displazisi</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Klinik Bulgular:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Kronik şiddetli eklem ağrısı</li>
                <li>• Hareket kısıtlılığı</li>
                <li>• Günlük aktivitelerde zorluk</li>
                <li>• Gece ağrıları</li>
                <li>• Deformite gelişimi</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Ameliyat Sonrası Bakım</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Başarılı bir ameliyat sonrası dönem, erken mobilizasyon ve disiplinli fizik tedavi 
            programı ile mümkündür.
          </p>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h4 className="font-semibold text-lg mb-3">İyileşme Süreci:</h4>
            <ul className="space-y-2">
              <li>• <strong>İlk 24-48 saat:</strong> Hastanede gözlem, ağrı kontrolü</li>
              <li>• <strong>1-2 hafta:</strong> Dikişlerin alınması, erken yürüme egzersizleri</li>
              <li>• <strong>6-8 hafta:</strong> Düzenli fizik tedavi, desteksiz yürüme</li>
              <li>• <strong>3-6 ay:</strong> Tam fonksiyona dönüş, günlük aktivitelere adaptasyon</li>
              <li>• <strong>1 yıl:</strong> Protezin yerleşmesi tamamlanır</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Komplikasyonlar</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Modern tekniklerle komplikasyon oranları düşük olsa da bazı riskler mevcuttur.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <h4 className="font-semibold text-lg mb-3">Olası Komplikasyonlar:</h4>
            <ul className="space-y-2">
              <li>• <strong>Enfeksiyon:</strong> Yara yeri veya derin prostetik enfeksiyon (%1-2)</li>
              <li>• <strong>Dislokasyon:</strong> Protezin yerinden çıkması (%2-5)</li>
              <li>• <strong>Derin ven trombozu:</strong> Bacakta pıhtı oluşumu</li>
              <li>• <strong>Aşınma:</strong> Uzun vadede protez komponentlerinin aşınması</li>
              <li>• <strong>Gevşeme:</strong> Protezin kemikten ayrılması</li>
              <li>• <strong>Nörovasküler yaralanma:</strong> Nadir ama ciddi</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Protez Ömrü ve Revizyon</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Modern protezlerin ortalama ömrü 15-20 yıldır. Genç hastalarda revizyon cerrahisi 
            gereksinimi daha yüksek olabilir. Düzenli takip ve uygun kullanım protez ömrünü uzatır.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h4 className="font-semibold text-lg mb-3">Protez Ömrünü Uzatan Faktörler:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Uygun kilo kontrolü</li>
              <li>• Düşük etkili egzersizler (yüzme, bisiklet)</li>
              <li>• Yüksek etkili sporlardan kaçınma</li>
              <li>• Düzenli ortopedik kontroller</li>
              <li>• Enfeksiyonlardan korunma</li>
            </ul>
          </div>
        </section>

        {/* References */}
        <section className="mb-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Kaynaklar</h2>
          <ol className="space-y-2 text-sm text-gray-700">
            <li>1. Carr AJ, et al. "Knee replacement." The Lancet. 2012. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=total+joint+replacement+arthroplasty" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>2. Ferguson RJ, et al. "Hip replacement." The Lancet. 2018. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=hip+replacement+outcomes" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>3. Kurtz SM, et al. "Projections of primary and revision hip and knee arthroplasty in the United States." J Bone Joint Surg Am. 2007. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=arthroplasty+projections" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>4. Bozic KJ, et al. "The epidemiology of revision total knee arthroplasty." Clin Orthop Relat Res. 2010. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=revision+arthroplasty+epidemiology" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>5. Skou ST, et al. "Total knee replacement and non-surgical treatment of knee osteoarthritis." BMJ. 2015. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=knee+osteoarthritis+treatment+comparison" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>6. Learmonth ID, et al. "The operation of the century: total hip replacement." The Lancet. 2007. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=total+hip+replacement+history" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>7. Patel A, et al. "Complications of total hip arthroplasty." World J Orthop. 2015. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=hip+arthroplasty+complications" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>8. Ethgen O, et al. "Health-related quality of life in total hip and total knee arthroplasty." J Bone Joint Surg Am. 2004. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=arthroplasty+quality+of+life" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>9. Pivec R, et al. "Hip arthroplasty." The Lancet. 2012. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=hip+arthroplasty+review" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>10. Troelsen A, et al. "What is the role of clinical tests and ultrasound in acetabular labral tear diagnostics?" Acta Orthop. 2009. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=joint+replacement+imaging" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
          </ol>
        </section>

        {/* CTA Section */}
        <section className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">Eklem Ağrılarınız mı Var?</h2>
          <p className="text-lg mb-6 text-blue-50">
            Total eklem değiştirme cerrahisi hakkında detaylı bilgi almak ve durumunuzu değerlendirmek 
            için randevu oluşturabilirsiniz.
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
