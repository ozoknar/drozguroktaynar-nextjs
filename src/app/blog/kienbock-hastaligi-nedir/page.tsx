import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kienböck Hastalığı Nedir? | Tanı ve Tedavi',
  description: 'Kienböck hastalığı (lunat kemiği avasküler nekrozu) belirtileri, nedenleri ve tedavi yöntemleri. El bileği ağrısı ve hareket kısıtlılığı hakkında bilgi.',
  keywords: ['kienböck hastalığı', 'lunat nekrozu', 'el bileği ağrısı', 'avasküler nekroz', 'el bileği hastalıkları'],
  openGraph: {
    title: 'Kienböck Hastalığı Nedir? | Dr. Özgür Oktay Nar',
    description: 'Kienböck hastalığı tanı, tedavi ve cerrahi seçenekleri hakkında detaylı bilgi',
    type: 'article',
    locale: 'tr_TR',
    url: 'https://www.drozguroktaynar.com/blog/kienbock-hastaligi-nedir',
    siteName: 'Dr. Özgür Oktay Nar',
    images: [{
      url: 'https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/kienbock-hastaligi.jpg',
      width: 1200,
      height: 630,
      alt: 'Kienböck Hastalığı'
    }]
  }
};

export default function KienbockHastaligiPage() {
  const jsonLdMedical = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "headline": "Kienböck Hastalığı Nedir?",
    "description": "Lunat kemiği avasküler nekrozu, belirtileri ve tedavi seçenekleri",
    "datePublished": "2026-02-02T23:47:04+00:00",
    "dateModified": "2026-02-02T23:47:08+00:00",
    "author": {
      "@type": "Physician",
      "name": "Dr. Özgür Oktay Nar",
      "medicalSpecialty": "Ortopedi ve Travmatoloji"
    },
    "about": {
      "@type": "MedicalCondition",
      "name": "Kienböck Hastalığı",
      "alternateName": "Lunat Avasküler Nekrozu"
    }
  };

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Kienböck hastalığı nedir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kienböck hastalığı, el bileğinde bulunan lunat kemiğin avasküler nekrozu ve bunun sebep olduğu el bileği sorunları olarak tanımlanır. Lunatumun normal yapısı kaybolur ve el bileğinde hareket kısıtlılığı oluşur."
        }
      },
      {
        "@type": "Question",
        "name": "Kienböck hastalığı hangi yaşta görülür?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bu hastalık en çok 20 ile 40 yaşları arasında görülür. Çok nadir de olsa kişinin her iki el bileğinde de görülebilir."
        }
      },
      {
        "@type": "Question",
        "name": "Kienböck hastalığı belirtileri nelerdir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En önemli belirti el bileğinin ortasında hissedilen ağrıdır. Bu ağrı orta parmağın yukarı kaldırılması ile artar. Hastalığın ilerleyen safhalarında ağrılar şiddetlenir ve hareket kısıtlılığı oluşur."
        }
      },
      {
        "@type": "Question",
        "name": "Kienböck hastalığı tedavisi nasıl yapılır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tedavide hastalığın evresi, hastanın yaşı ve önkol kemikleri arasındaki boy farkı önemlidir. Erken dönemde dinlenme ateli, ileri evrelerde cerrahi yöntemler (damarlı kemik nakli, kemik füzyonu) uygulanabilir."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdMedical) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="mb-12">
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Kienböck Hastalığı Nedir?
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              El bileğinde lunat kemiğin avasküler nekrozu, belirtileri, tanı yöntemleri ve modern tedavi yaklaşımları hakkında kapsamlı bilgi.
            </p>
          </div>
        </header>

        {/* 1. Problem Definition */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Kienböck Hastalığı Nedir?</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Kienböck hastalığı, el bileğinde bulunan lunat kemiğin avasküler nekrozu ve bunun sebep olduğu el bileği sorunları olarak tanımlanabilir. Lunatum el bileğinde yer alan 8 kemikten birisidir.
            </p>
            <div className="bg-blue-50 rounded-lg p-6 mb-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">El Bileği Anatomisi</h3>
              <p className="text-gray-700 mb-3">
                Lunat, el bileğinin her iki yanında bulunan skafoid ve trikuetrum kemikleri ile el bileği eklemini oluşturur. Tam olarak belirlenemeyen sebepler ile lunatumun normal yapısı kaybolabilir.
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bunun sonucunda el bileğinde hareket kısıtlılığı ve şekil değişiklikleri oluşabilir. Bu hastalık en çok 20 ile 40 yaşları arasında görülür. Çok nadir de olsa kişinin her iki el bileğinde de görülebilir.
            </p>
          </div>
        </section>

        {/* 2. Causes & Risk Factors */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Kienböck Hastalığı Nedenleri</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Bu hastalığın nedeni olarak iskelet sisteminde var olan varyasyonlar gösterilebilir. Bunların arasında devamlı olarak el bileği travmalarına maruz kalma da bulunmaktadır.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Anatomik Faktörler</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Önkol kemikleri arasında boy farkı</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>Lunat kemiğin kan dolaşımı yetersizliği</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>İskelet sisteminde varyasyonlar</span>
                  </li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Travmatik Faktörler</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Tekrarlayan el bileği travmaları</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Mikro travmalar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Yoğun el bileği kullanımı gerektiren işler</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Symptoms */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Kienböck Hastalığı Belirtileri</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Kienböck hastalığı belirtileri arasında en çok el bileğinin ortasında hissedilen ağrı gösterilebilir. Bu ağrı orta parmağın yukarı kaldırılması ile daha da artar.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Başlıca Belirtiler</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold mr-2">1.</span>
                  <div>
                    <strong>El bileği ortasında ağrı:</strong> Özellikle orta parmak kaldırılırken artar
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold mr-2">2.</span>
                  <div>
                    <strong>Hareket kısıtlılığı:</strong> El bileği hareketlerinde azalma
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold mr-2">3.</span>
                  <div>
                    <strong>Şekil değişikliği:</strong> Lunatumda çökme ve deformite
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 font-bold mr-2">4.</span>
                  <div>
                    <strong>Güç kaybı:</strong> El kavrama kuvvetinde azalma
                  </div>
                </li>
              </ul>
            </div>
            <p className="text-gray-700 leading-relaxed">
              El bileği ekleminde gittikçe artış gösteren bu ağrı, başlarda lunatumda şekil bozukluğu ya da çökme ile belirir. Kienböck hastalığının erken dönemlerde teşhis edilmesi oldukça zordur. Eğer dikkat edilmezse gözden kaçabilir. Hastalığın ilerleyen safhalarında ağrılar daha da şiddetlenir. Çoğu zaman ancak hastalığın ilerleyen safhalarında teşhis konulabilmektedir.
            </p>
          </div>
        </section>

        {/* 4. Diagnosis */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tanı Yöntemleri</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Hastalığın tanısında MR, bilgisayarlı tomografi gibi yöntemler kullanılabilir. Özellikle hastalığın ilk evrelerinde bu hastalıktan şüpheleniliyorsa MR, hastalığın erken teşhisi için oldukça önemlidir.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white border-2 border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Direkt Radyografi</h4>
                <p className="text-sm text-gray-600">İleri evrelerde lunat çökmesi görülebilir</p>
              </div>
              <div className="bg-white border-2 border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">MR Görüntüleme</h4>
                <p className="text-sm text-gray-600">Erken tanıda altın standart</p>
              </div>
              <div className="bg-white border-2 border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">BT Tarama</h4>
                <p className="text-sm text-gray-600">Kemik yapısını detaylı değerlendirir</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Treatment */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Kienböck Hastalığı Tedavisi</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Hastalığın tedavisinde; hastalığın hangi evrede olduğu, önkol kemiklerinin arasında boy farkının varlığı ve hastanın yaşı oldukça etkilidir.
            </p>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Erken Evre Tedavi</h3>
              <p className="text-gray-700 mb-3">
                Çok erken dönemlerde tespit edilebilirse dinlenme ateli sayesinde iyileşme sağlanabilir. Bu aşamada konservatif tedavi yaklaşımı tercih edilir.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">İleri Evre Tedavi</h3>
              <p className="text-gray-700 mb-4">
                İleri evrelerde önkol kemikleri arasındaki boy farklarının giderilmesinin yararı vardır. Bunun için de kan dolaşımının artışı sağlanmalıdır.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Eğer boy uzunluk farkı mevcut değilse, damarlı kemik nakli gerçekleştirilebilir</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Kemiklerin birbirleri ile dondurulması (füzyon) uygulanabilir</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Kireçlenme varsa el bileğinin dondurulması düşünülebilir</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Modern Tedavi Yöntemleri</h3>
              <p className="text-gray-700">
                Kienböck hastalığının tedavisinde son yıllarda kameralı sistemler ile uygulanan yöntemler de oldukça popülerdir. Hastalığın tedavisi sürecinde hangi yöntemin kullanılacağında tecrübe oldukça önemlidir.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Prevention & Management */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Korunma ve Yönetim</h2>
          <div className="prose prose-lg max-w-none">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Risk Azaltma</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Tekrarlayan el bileği travmalarından kaçınma</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Ergonomik çalışma koşulları</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>El bileği koruyucuları kullanımı</span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Erken Tanı Önemi</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>El bileği ağrısında uzman kontrolü</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Düzenli takip muayeneleri</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>MR ile erken teşhis</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Expert Opinion & CTA */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Uzman Görüşü</h2>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white mb-8">
            <p className="text-lg leading-relaxed mb-6">
              "Kienböck hastalığında erken tanı kritik önem taşır. MR görüntüleme ile erken evrede tespit edilen vakalarda konservatif tedavi başarılı olabilir. İleri evrelerde ise hasta ve hastalık durumuna özgü cerrahi planlamayla mükemmel sonuçlar elde edilmektedir. Her hastanın durumu benzersizdir ve tedavi planı kişiselleştirilmelidir."
            </p>
            <p className="font-semibold text-xl">— Dr. Özgür Oktay Nar</p>
            <p className="text-blue-100">Ortopedi ve Travmatoloji Uzmanı</p>
          </div>

          {/* CTA Buttons */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <a
              href="tel:+905321741490"
              className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Hemen Ara: 0532 174 14 90
            </a>
            <a
              href="https://wa.me/905321741490"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp ile İletişim
            </a>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              <Link href="/ameliyatsiz-cozumler" className="text-blue-600 hover:text-blue-800 font-semibold underline">
                Ameliyatsız tedavi seçenekleri
              </Link>
              {' '}hakkında detaylı bilgi almak için sayfamızı ziyaret edebilirsiniz.
            </p>
          </div>
        </section>

        {/* References Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Bilimsel Kaynaklar ve Referanslar</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <ol className="space-y-3 text-sm text-gray-700">
              <li>
                1. Lutsky K, et al. "Kienböck disease: an update on diagnosis and treatment." J Hand Surg Am. 2012. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=kienbock+disease+diagnosis+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">&#91;PubMed Ara&#93;</a>
              </li>
              <li>
                2. Moran SL, et al. "Kienböck's disease." J Am Acad Orthop Surg. 2008. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=kienbock+disease+review" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">&#91;PubMed Ara&#93;</a>
              </li>
              <li>
                3. Lichtman DM, et al. "A new classification of Kienböck's disease." J Hand Surg Am. 2010. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=kienbock+disease+classification" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">&#91;PubMed Ara&#93;</a>
              </li>
              <li>
                4. Chung KC, et al. "Outcomes of pyrocarbon arthroplasty for the treatment of advanced Kienböck's disease." J Hand Surg Am. 2009. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=kienbock+disease+arthroplasty" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">&#91;PubMed Ara&#93;</a>
              </li>
              <li>
                5. Delawerde WJ, et al. "Radial osteotomy for Kienböck disease." J Hand Surg Am. 2008. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=kienbock+disease+radial+osteotomy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">&#91;PubMed Ara&#93;</a>
              </li>
            </ol>
            
            <details className="mt-6">
              <summary className="cursor-pointer font-semibold text-gray-900 hover:text-blue-600">
                Ek Kaynaklar (5 Referans Daha)
              </summary>
              <ol start={6} className="space-y-3 text-sm text-gray-700 mt-4">
                <li>
                  6. Shin AY, Bishop AT. "Vascularized bone grafting for Kienböck's disease." Tech Hand Up Extrem Surg. 2002. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=kienbock+vascularized+bone+graft" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">&#91;PubMed Ara&#93;</a>
                </li>
                <li>
                  7. Innes L, Strauch RJ. "Systematic review of the treatment of Kienböck's disease in its early and late stages." J Hand Surg Am. 2010. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=kienbock+disease+systematic+review" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">&#91;PubMed Ara&#93;</a>
                </li>
                <li>
                  8. Arnaiz J, et al. "MR imaging of Kienböck disease." AJR Am J Roentgenol. 1994. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=kienbock+disease+MRI" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">&#91;PubMed Ara&#93;</a>
                </li>
                <li>
                  9. Beckenbaugh RD, et al. "Kienböck's disease: the natural history of Kienböck's disease and consideration of lunate fractures." Clin Orthop Relat Res. 1980. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=kienbock+disease+natural+history" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">&#91;PubMed Ara&#93;</a>
                </li>
                <li>
                  10. Gelberman RH, et al. "The vascularity of the lunate bone and Kienböck's disease." J Hand Surg Am. 1980. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=kienbock+disease+vascularity+lunate" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">&#91;PubMed Ara&#93;</a>
                </li>
              </ol>
            </details>
          </div>
        </section>

        {/* Medical Disclaimer */}
        <aside className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
          <p className="text-sm text-gray-700">
            <strong>Tıbbi Uyarı:</strong> Bu sayfa yalnızca bilgilendirme amaçlıdır ve profesyonel tıbbi tavsiye, teşhis veya tedavinin yerini tutmaz. Sağlık sorunlarınız için mutlaka bir sağlık profesyoneline danışın.
          </p>
        </aside>
      </article>
    </>
  );
}
