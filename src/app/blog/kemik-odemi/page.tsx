import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

// ========================================
// 1. METADATA & SEO
// ========================================
export const metadata: Metadata = {
  title: 'Kemik Ödemi (Bone Marrow Edema): Nedenleri ve Tedavisi | Dr. Özgür Oktay Nar',
  description: 'Kemik ödemi (bone marrow edema) nedir, nedenleri, MR bulguları, tedavi seçenekleri ve iyileşme süreci. Ortopedi uzmanından detaylı bilgi.',
  keywords: 'kemik ödemi, bone marrow edema, kemik iliği ödemi, travmatik ödem, stres kırığı, AVN, ortopedi',
  openGraph: {
    title: 'Kemik Ödemi: Nedenleri ve Tedavisi',
    description: 'Kemik ödemi tanı ve tedavi rehberi',
    type: 'article',
    locale: 'tr_TR',
    siteName: 'Dr. Özgür Oktay Nar - Ortopedi Uzmanı',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kemik Ödemi: Nedenleri ve Tedavisi',
    description: 'Bone marrow edema hakkında uzman bilgisi',
  }
};

// ========================================
// 2. STRUCTURED DATA (Schema.org)
// ========================================
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  headline: 'Kemik Ödemi (Bone Marrow Edema): Nedenleri ve Tedavisi',
  description: 'Kemik ödemi tanı ve tedavi yöntemleri',
  author: {
    '@type': 'Physician',
    name: 'Dr. Özgür Oktay Nar',
    medicalSpecialty: 'Ortopedi ve Travmatoloji'
  },
  datePublished: '2026-02-06',
  dateModified: '2026-02-06',
  about: {
    '@type': 'MedicalCondition',
    name: 'Kemik Ödemi',
    alternateName: 'Bone Marrow Edema'
  }
};

// ========================================
// 3. PAGE COMPONENT
// ========================================
export default function KemikOdemiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-indigo-50 to-purple-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kemik Ödemi: Nedenleri ve Tedavisi
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            MR'da sıkça karşılaşılan kemik iliği ödemi (bone marrow edema): Nedenleri, klinik önemi ve tedavi yaklaşımları
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span>👨‍⚕️ Dr. Özgür Oktay Nar</span>
            <span>📅 6 Şubat 2026</span>
            <span>⏱️ 7 dakika okuma</span>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        
        {/* Giriş */}
        <section className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            <strong>Kemik ödemi</strong> (bone marrow edema - BME), kemik iliği içinde sıvı birikimini ifade eden ve <strong>MR görüntülemede</strong> tespit edilen bir bulgudur. Röntgen veya BT'de genellikle görülmez. MR'da T2-ağırlıklı veya STIR sekanslarında yüksek sinyal (parlak alan) olarak izlenir.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Kemik ödemi, kendi başına bir hastalık değil, çeşitli patolojik süreçlerin bir <strong>belirtisidir</strong>. Travma, stres kırıkları, avasküler nekroz, enfeksiyon veya enflamatuar hastalıklar gibi birçok neden kemik ödemine yol açabilir. Doğru tanı ve altta yatan sebebin belirlenmesi, uygun tedavi için kritiktir.
          </p>
        </section>

        {/* Nedenleri */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Kemik Ödemi Nedenleri</h2>
          
          <div className="space-y-6">
            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">1️⃣ Travmatik Nedenler</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>• Akut travma:</strong> Kontüzyon (kemik morarması), mikrokırıklar</li>
                <li><strong>• Bağ yaralanmaları:</strong> ACL yırtığı, menisküs yaralanması ile birlikte</li>
                <li><strong>• Eklem dislokasyonu/subluksasyonu:</strong> Patella, omuz çıkığı sonrası</li>
                <li><strong>• Osteokondral hasar:</strong> Kıkırdak ve altındaki kemik hasarı</li>
              </ul>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2️⃣ Stres Reaksiyonu ve Kırıklar</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>• Aşırı kullanım:</strong> Sporcular, askerler (uzun mesafe koşu)</li>
                <li><strong>• Erken evre stres kırığı:</strong> Henüz kırık hattı oluşmadan ödem görülür</li>
                <li><strong>• İnsufisyens kırığı:</strong> Osteoporotik kemikte normal yükle kırık</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3️⃣ Avasküler Nekroz (AVN)</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>• Erken evre AVN:</strong> Kemik ödemi ilk bulgudur (henüz nekroz yok)</li>
                <li><strong>• Risk faktörleri:</strong> Steroid kullanımı, alkol, travma, SLE</li>
                <li><strong>• Lokalizasyon:</strong> Femur başı, humerus başı, talus</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">4️⃣ Enflamatuar ve Dejeneratif Hastalıklar</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>• Osteoartrit:</strong> Eklem dejenerasyonuna eşlik eden subkondral ödem</li>
                <li><strong>• Romatoid artrit:</strong> İnflamatuar süreç</li>
                <li><strong>• Seronegaitf spondiloartropatiler:</strong> Ankylozan spondilit, psöriatik artrit</li>
              </ul>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">5️⃣ Diğer Nedenler</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>• Osteonekroz (SONK):</strong> Spontaneous osteonecrosis of the knee</li>
                <li><strong>• Geçici osteoporoz:</strong> Özellikle gebelerde kalça</li>
                <li><strong>• Enfeksiyon:</strong> Osteomyelit erken evresi</li>
                <li><strong>• Tümör:</strong> Malign veya benign kemik tümörleri</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Belirtiler */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Klinik Belirtiler</h2>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Tipik Şikayetler</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ <strong>Ağrı:</strong> Genellikle derin, künt, istirahatle hafif azalır ama tam geçmez</li>
              <li>✓ <strong>Yük vermeyle artış:</strong> Yürüme, merdiven çıkma ile kötüleşir</li>
              <li>✓ <strong>Şişlik (bazen):</strong> Eklem efüzyonu eşlik edebilir</li>
              <li>✓ <strong>Gece ağrısı:</strong> Özellikle AVN veya tümör varlığında</li>
              <li>✓ <strong>Fonksiyon kaybı:</strong> Aktivite kısıtlılığı</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Fizik Muayene Bulguları</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Lokal hassasiyet (palpasyonla ağrı)</li>
              <li>• Eklem hareket açıklığında hafif kısıtlılık</li>
              <li>• Nadiren cilt üzerinde ısı artışı</li>
              <li>• Kas atrofisi (kronik durumlarda)</li>
            </ul>
          </div>
        </section>

        {/* Tanı */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tanı Yöntemleri</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🔬 MR (Manyetik Rezonans)</h3>
              <p className="text-gray-700 mb-3 text-sm">
                <strong>Altın standart.</strong> Kemik ödemi MR'da net görülür:
              </p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• T1-ağırlıklı: Düşük sinyal (koyu)</li>
                <li>• T2-ağırlıklı/STIR: Yüksek sinyal (parlak)</li>
                <li>• Kontrast tutulumu: Bazen görülür</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">📸 Röntgen ve BT</h3>
              <p className="text-gray-700 mb-3 text-sm">
                <strong>Sınırlı değer.</strong> Erken evre ödemde normal olabilir:
              </p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Kırık hattını gösterebilir</li>
                <li>• Subkondral kollaps (AVN geç evre)</li>
                <li>• Osteoartrit bulgularını gösterir</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-purple-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🧪 Laboratuvar</h3>
              <p className="text-gray-700 mb-3 text-sm">
                <strong>Ayırıcı tanı için.</strong> Enfeksiyon veya enflamasyonu ekarte etmek:
              </p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• CRP, ESR (enfeksiyon/enflamasyon)</li>
                <li>• Kan sayımı</li>
                <li>• Romatizma paneli (RA, ANA)</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-orange-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🦴 Kemik Sintigrafisi</h3>
              <p className="text-gray-700 mb-3 text-sm">
                <strong>Eski yöntem.</strong> MR kadar spesifik değil:
              </p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Artmış tutulum (hot spot)</li>
                <li>• Çoklu lezyonları gösterir</li>
                <li>• Metastaz taramasında kullanılır</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tedavi */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tedavi Yaklaşımları</h2>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Konservatif Tedavi (İlk Seçenek)</h3>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-4">
              <h4 className="font-semibold text-gray-900 mb-3">1. Yük Azaltma ve İstirahat</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Ağırlık vermeden kaçınma:</strong> Koltuk değneği kullanımı (2-6 hafta)</li>
                <li>• <strong>Aktivite modifikasyonu:</strong> Yüksek etkili sporlardan uzak durma</li>
                <li>• <strong>İmmobilizasyon (nadir):</strong> Sadece stres kırığı riskinde</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-4">
              <h4 className="font-semibold text-gray-900 mb-3">2. Medikal Tedavi</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>NSAİİ ilaçlar:</strong> Ağrı ve iltihabı azaltır (ibuprofen, naproxen)</li>
                <li>• <strong>Analjezikler:</strong> Parasetamol, tramadol (şiddetli ağrıda)</li>
                <li>• <strong>Bifosfonatlar:</strong> AVN veya geçici osteoporozda kullanılabilir</li>
                <li>• <strong>Vitamin D ve kalsiyum:</strong> Kemik sağlığı desteği</li>
              </ul>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-4">
              <h4 className="font-semibold text-gray-900 mb-3">3. Fizik Tedavi</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Akut dönem:</strong> Buz, kompresyon, elevasyon</li>
                <li>• <strong>Subakut dönem:</strong> Düşük etkili egzersizler (havuz, bisiklet)</li>
                <li>• <strong>İyileşme dönemi:</strong> Progresif yük verme, kas güçlendirme</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">İleri Tedavi Seçenekleri</h3>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-4">
              <h4 className="font-semibold text-gray-900 mb-3">Cerrahi Müdahale (Seçilmiş Vakalarda)</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Core dekompresyon:</strong> AVN erken evre, basıncı azaltma</li>
                <li>• <strong>Subkondral drilling:</strong> Osteokondral lezyonlarda</li>
                <li>• <strong>Artroskopik debridman:</strong> Eklem içi patoloji varsa</li>
                <li>• <strong>Osteotomi:</strong> Malalignment düzeltme</li>
              </ul>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Deneysel/Yenilikçi Tedaviler</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>PRP (Platelet-Rich Plasma):</strong> Büyüme faktörleri, henüz kanıt düzeyi düşük</li>
                <li>• <strong>Kök hücre tedavisi:</strong> Araştırma aşamasında</li>
                <li>• <strong>Hiperbarik oksijen:</strong> AVN'de kullanılabilir, tartışmalı</li>
              </ul>
            </div>
          </div>
        </section>

        {/* İyileşme Süreci */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">İyileşme Süresi ve Prognoz</h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Tipik İyileşme Süreleri</h3>
            <div className="space-y-3 text-gray-700">
              <div>
                <strong>Travmatik Ödem (Kontüzyon):</strong>
                <p className="text-sm">4-12 hafta içinde rezolüsyon, MR'da 6-12 ay sonra tamamen kaybolabilir</p>
              </div>
              <div>
                <strong>Stres Reaksiyonu:</strong>
                <p className="text-sm">6-12 hafta istirahat ile iyileşme, tam aktiviteye 3-4 ayda dönüş</p>
              </div>
              <div>
                <strong>AVN (Erken Evre):</strong>
                <p className="text-sm">Değişken, tedavi ile stabilizasyon veya progresyon mümkün</p>
              </div>
              <div>
                <strong>Osteoartrit İlişkili:</strong>
                <p className="text-sm">Kronik, altta yatan dejenerasyon devam ederse ödem tekrarlayabilir</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-500 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-yellow-900 mb-3">⚠️ Kötü Prognoz Faktörleri</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Geniş ödem alanı ({">"}50% kemik yüzeyi)</li>
              <li>• Subkondral kırık hattı varlığı</li>
              <li>• Eşlik eden kıkırdak hasarı</li>
              <li>• Altta yatan AVN veya enfeksiyon</li>
              <li>• Tedaviye uyumsuzluk (erken yük verme)</li>
            </ul>
          </div>
        </section>

        {/* Önleme */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Korunma Önerileri</h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border-2 border-green-200 rounded-lg p-5 text-center">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-semibold text-gray-900 mb-2">Kademeli Antrenman</h3>
              <p className="text-sm text-gray-700">Aktivite artışını haftada %10 ile sınırlayın</p>
            </div>

            <div className="bg-white border-2 border-blue-200 rounded-lg p-5 text-center">
              <div className="text-3xl mb-2">🦴</div>
              <h3 className="font-semibold text-gray-900 mb-2">Kemik Sağlığı</h3>
              <p className="text-sm text-gray-700">Yeterli kalsiyum, D vitamini, dengeli beslenme</p>
            </div>

            <div className="bg-white border-2 border-purple-200 rounded-lg p-5 text-center">
              <div className="text-3xl mb-2">👟</div>
              <h3 className="font-semibold text-gray-900 mb-2">Doğru Ekipman</h3>
              <p className="text-sm text-gray-700">Uygun ayakkabı ve spor ekipmanı kullanın</p>
            </div>
          </div>
        </section>

        {/* Referanslar */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Bilimsel Referanslar</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ol className="space-y-3 text-sm text-gray-700">
              <li>
                <strong>1.</strong> Eriksen EF. "Treatment of bone marrow lesions (bone marrow edema)" BoneKEy Rep. 2015;4:755. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=bone+marrow+edema+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>2.</strong> Patel S. "Primary bone marrow oedema syndromes" Rheumatology (Oxford). 2014;53(5):785-792. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=primary+bone+marrow+edema+syndrome" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>3.</strong> Zanetti M, et al. "Bone marrow edema pattern in osteoarthritic knees: correlation between MR imaging and histologic findings" Radiology. 2000;215(3):835-840. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=bone+marrow+edema+osteoarthritis+MRI+histology" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>4.</strong> Felson DT, et al. "Bone marrow edema and its relation to progression of knee osteoarthritis" Ann Intern Med. 2003;139(5 Pt 1):330-336. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=bone+marrow+edema+knee+osteoarthritis+progression" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>5.</strong> Mandalia V, Henson JH. "Traumatic bone bruising - a review article" Eur J Radiol. 2008;67(1):54-61. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=traumatic+bone+bruising+review" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>6.</strong> Mayerhoefer ME, et al. "Are signal intensity and homogeneity useful parameters for distinguishing between benign and malignant soft tissue masses on MR images?" Magn Reson Imaging. 2008;26(9):1316-1322. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=bone+marrow+MRI+signal+intensity" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>7.</strong> Laslett LL, et al. "Effect of bisphosphonate use in patients with symptomatic and radiographic knee osteoarthritis: data from the Osteoarthritis Initiative" Ann Rheum Dis. 2014;73(5):824-830. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=bisphosphonate+knee+osteoarthritis+bone+marrow+lesions" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>8.</strong> Kornaat PR, et al. "MRI assessment of knee osteoarthritis: Knee Osteoarthritis Scoring System (KOSS) - inter-observer and intra-observer reproducibility of a compartment-based scoring system" Skeletal Radiol. 2005;34(2):95-102. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=KOSS+MRI+knee+osteoarthritis+bone+marrow" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>9.</strong> Roemer FW, et al. "The role of imaging in osteoarthritis" Best Pract Res Clin Rheumatol. 2014;28(1):31-60. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=imaging+osteoarthritis+bone+marrow+lesions" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>10.</strong> Yao L, Lee JK. "Occult intraosseous fracture: detection with MR imaging" Radiology. 1988;167(3):749-751. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=occult+fracture+MRI+bone+marrow+edema" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
            </ol>
          </div>
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


        {/* CTA */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">MR Bulgularınızı Değerlendirin</h2>
          <p className="text-xl mb-6 opacity-90">
            Kemik ödemi tanısı aldıysanız, altta yatan nedenin belirlenmesi ve doğru tedavi planı için uzman görüşü alın.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/iletisim" 
              className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition"
            >
              Randevu Al
            </Link>
            <Link 
              href="/hizmetler" 
              className="bg-indigo-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-800 transition"
            >
              Tanı ve Tedavi
            </Link>
          </div>
        </section>

      </article>
    </>
  );
}
