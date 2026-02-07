import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

// ========================================
// 1. METADATA & SEO
// ========================================
export const metadata: Metadata = {
  title: 'Kök Hücre Tedavisi: Ortopedide Rejeneratif Tıp | Dr. Özgür Oktay Nar',
  description: 'Ortopedik hastalıklarda kök hücre tedavisi uygulamaları, etkinliği, riskleri ve güncel bilimsel veriler. Rejeneratif tıp yaklaşımları hakkında uzman görüşü.',
  keywords: 'kök hücre tedavisi, rejeneratif tıp, mezenkimal kök hücre, PRP, eklem kıkırdağı, ortopedi,줄기세포',
  openGraph: {
    title: 'Kök Hücre Tedavisi: Ortopedide Rejeneratif Tıp',
    description: 'Ortopedik hastalıklarda kök hücre tedavisi uygulamaları ve bilimsel kanıtlar',
    type: 'article',
    locale: 'tr_TR',
    siteName: 'Dr. Özgür Oktay Nar - Ortopedi Uzmanı',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kök Hücre Tedavisi: Ortopedide Rejeneratif Tıp',
    description: 'Rejeneratif tedavi seçenekleri ve güncel yaklaşımlar',
  }
};

// ========================================
// 2. STRUCTURED DATA (Schema.org)
// ========================================
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  headline: 'Kök Hücre Tedavisi: Ortopedide Rejeneratif Tıp',
  description: 'Ortopedik hastalıklarda kök hücre tedavisi uygulamaları ve bilimsel kanıtlar',
  author: {
    '@type': 'Physician',
    name: 'Dr. Özgür Oktay Nar',
    medicalSpecialty: 'Ortopedi ve Travmatoloji'
  },
  datePublished: '2026-02-06',
  dateModified: '2026-02-06',
  about: {
    '@type': 'MedicalTherapy',
    name: 'Kök Hücre Tedavisi',
    alternateName: 'Stem Cell Therapy'
  }
};

// ========================================
// 3. PAGE COMPONENT
// ========================================
export default function KokHucreTedavisiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-purple-50 to-pink-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kök Hücre Tedavisi: Ortopedide Rejeneratif Tıp
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Eklem hastalıkları ve kas-iskelet sistemi yaralanmalarında kök hücre tedavisi: Güncel bilimsel veriler, uygulamalar ve beklentiler
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span>👨‍⚕️ Dr. Özgür Oktay Nar</span>
            <span>📅 6 Şubat 2026</span>
            <span>⏱️ 10 dakika okuma</span>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        
        {/* Giriş */}
        <section className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            <strong>Rejeneratif tıp</strong>, hasarlı dokuların kendini yenilemesini ve onarılmasını hedefleyen modern tıbbın en heyecan verici alanlarından biridir. Ortopedide <strong>kök hücre tedavisi</strong>, özellikle eklem kıkırdağı hasarı, tendon yaralanmaları ve kronik kas-iskelet sistemi hastalıklarında alternatif bir tedavi seçeneği olarak giderek daha fazla araştırılmaktadır.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Ancak bu tedavinin etkinliği, güvenliği ve uzun dönem sonuçları hakkında net bilimsel kanıtlar hâlâ gelişmektedir. Bu yazıda, ortopedik hastalıklarda kök hücre tedavisi uygulamalarını, mevcut bilimsel verileri ve hasta beklentilerini ele alacağız.
          </p>
        </section>

        {/* Kök Hücre Nedir */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Kök Hücre Nedir?</h2>
          
          <div className="bg-[#E6FAF8] border-l-4 border-[#1AD2C4] p-6 mb-6">
            <p className="text-gray-700 mb-3">
              <strong>Kök hücreler</strong>, vücuttaki farklı hücre tiplerine dönüşme (diferansiyasyon) ve kendini yenileme kapasitesine sahip özel hücrelerdir. İki ana özellik taşırlar:
            </p>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>✓ <strong>Kendini yenileme:</strong> Bölünerek aynı tipte yeni kök hücreler üretebilir</li>
              <li>✓ <strong>Diferansiyasyon:</strong> Kemik, kıkırdak, kas, tendon gibi özel dokulara dönüşebilir</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ortopedide Kullanılan Kök Hücre Tipleri</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">🧬 Mezenkimal Kök Hücreler (MSC)</h4>
              <p className="text-gray-700 mb-3">
                En yaygın kullanılan tip. Kemik iliği, yağ dokusu veya umblikal korddan elde edilir.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Kemik, kıkırdak, yağ hücrelerine dönüşebilir</li>
                <li>• Anti-inflamatuar etki</li>
                <li>• İmmünomodülatör özellik</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">🩸 Periferik Kan Kök Hücreleri</h4>
              <p className="text-gray-700 mb-3">
                Hastanın kendi kanından elde edilen hücreler (PRP ile kombine edilebilir).
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Daha kolay elde edilir</li>
                <li>• Otojen kaynak (kendi dokusu)</li>
                <li>• Büyüme faktörleri içerir</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Uygulama Alanları */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ortopedide Uygulama Alanları</h2>

          <div className="space-y-6">
            <div className="bg-green-50 border-l-4 border-green-500 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">1️⃣ Eklem Kıkırdağı Hasarı</h3>
              <p className="text-gray-700 mb-2">
                Osteoartrit ve travmatik kıkırdak defektlerinde en çok araştırılan alan.
              </p>
              <ul className="space-y-1 text-sm text-gray-700 ml-4">
                <li>• Diz, omuz, kalça eklemlerinde uygulama</li>
                <li>• Kıkırdak hücrelerine (kondrosit) diferansiyasyon</li>
                <li>• İntra-artiküler enjeksiyon veya implantasyon</li>
              </ul>
            </div>

            <div className="bg-[#E6FAF8] border-l-4 border-[#1AD2C4] p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2️⃣ Tendon ve Ligament Yaralanmaları</h3>
              <p className="text-gray-700 mb-2">
                Rotator kaf, Aşil tendonu, lateral epikondilit (tenisçi dirseği) gibi yaralanmalarda denenmektedir.
              </p>
              <ul className="space-y-1 text-sm text-gray-700 ml-4">
                <li>• Tendon iyileşmesini hızlandırma</li>
                <li>• Kolajen üretimini artırma</li>
                <li>• İnflamasyonu azaltma</li>
              </ul>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3️⃣ Kemik Kaynaması (Nonunion)</h3>
              <p className="text-gray-700 mb-2">
                Kırık kaynamasında gecikme veya kaynamama durumlarında destekleyici tedavi.
              </p>
              <ul className="space-y-1 text-sm text-gray-700 ml-4">
                <li>• Osteoblast (kemik hücresi) oluşumunu uyarma</li>
                <li>• Kemik greftleri ile kombine kullanım</li>
                <li>• BMP (Bone Morphogenetic Protein) ile sinerjik etki</li>
              </ul>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">4️⃣ Osteokondral Defektler</h3>
              <p className="text-gray-700 mb-2">
                Hem kıkırdak hem de altındaki kemik dokusunu içeren hasarlar.
              </p>
              <ul className="space-y-1 text-sm text-gray-700 ml-4">
                <li>• MSC + scaffold (iskele) kombinasyonu</li>
                <li>• Doku mühendisliği yaklaşımları</li>
                <li>• 3D biyobaskı teknolojileri (gelişmekte)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tedavi Süreci */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tedavi Süreci</h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Adım Adım Kök Hücre Uygulaması</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-[#01CAB8] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <strong className="text-gray-900">Kaynak Doku Elde Etme:</strong>
                  <p className="text-gray-700 text-sm">Kemik iliği aspirasyonu (pelvis veya tibia), liposuction (yağ dokusu) veya kan alımı.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#01CAB8] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <strong className="text-gray-900">Laboratuvar İşlemi:</strong>
                  <p className="text-gray-700 text-sm">Kök hücrelerin izolasyonu, konsantrasyonu ve gerekirse kültürde çoğaltılması (2-4 hafta).</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#01CAB8] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <strong className="text-gray-900">Uygulama:</strong>
                  <p className="text-gray-700 text-sm">İntra-artiküler enjeksiyon, cerrahi implantasyon veya artroskopik yerleştirme.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#01CAB8] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <strong className="text-gray-900">Takip ve Rehabilitasyon:</strong>
                  <p className="text-gray-700 text-sm">Kontrollü egzersiz programı, 3-6-12 aylık MR veya ultrason takibi.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bilimsel Kanıtlar */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Bilimsel Kanıtlar ve Etkinlik</h2>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">⚠️ Önemli Uyarı</h3>
            <p className="text-gray-700">
              Kök hücre tedavisi ortopedide <strong>deneysel bir tedavi</strong> olarak kabul edilir. FDA onayı yalnızca belirli endikasyonlar için verilmiştir. Birçok uygulamanın uzun dönem etkinliği ve güvenliği hâlâ araştırılmaktadır.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">✅ Umut Verici Bulgular</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Orta dereceli osteoartritte ağrı azalması</li>
                <li>• Kıkırdak kalınlığında kısa dönem artış</li>
                <li>• Fonksiyonel skorlarda iyileşme</li>
                <li>• Tendon yaralanmalarında hızlı iyileşme</li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">❌ Sınırlılıklar ve Belirsizlikler</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Uzun dönem sonuçlar net değil</li>
                <li>• Standart protokol eksikliği</li>
                <li>• Plasebo etkisi ile karıştırılabilir</li>
                <li>• Yüksek maliyet</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-700 italic">
            <strong>Not:</strong> Birçok randomize kontrollü çalışma (RCT), kök hücre tedavisinin bazı ortopedik durumlarda plaseboya kıyasla üstün olmadığını göstermiştir. Ancak belirli hasta gruplarında ve belirli protokollerde fayda görülebilmektedir.
          </p>
        </section>

        {/* Riskler */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Riskler ve Komplikasyonlar</h2>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>• Enfeksiyon:</strong> Her invaziv işlemde olduğu gibi enfeksiyon riski vardır
              </li>
              <li>
                <strong>• Kontrolsüz hücre büyümesi:</strong> Teorik tümör riski (çok nadir)
              </li>
              <li>
                <strong>• İmmünolojik reaksiyonlar:</strong> Özellikle allojen (başkasından alınan) kök hücrelerde
              </li>
              <li>
                <strong>• Beklenmeyen diferansiyasyon:</strong> Hücrelerin istenmeyen dokulara dönüşmesi
              </li>
              <li>
                <strong>• Prosedüre bağlı komplikasyonlar:</strong> Kanama, sinir yaralanması (kemik iliği aspirasyonu sırasında)
              </li>
            </ul>
          </div>
        </section>

        {/* Hasta Seçimi */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Kimler İçin Uygun?</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">✅ İdeal Adaylar</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ Konservatif tedaviye yanıt vermeyen eklem ağrısı</li>
                <li>✓ Erken-orta evre osteoartrit</li>
                <li>✓ Cerrahi için uygun olmayan hastalar</li>
                <li>✓ Genç, aktif bireyler</li>
                <li>✓ Fokal (sınırlı) kıkırdak defektleri</li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">❌ Uygun Olmayanlar</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✗ İleri evre osteoartrit (Kellgren-Lawrence Grade 4)</li>
                <li>✗ Aktif enfeksiyon</li>
                <li>✗ Kanser öyküsü (son 5 yıl)</li>
                <li>✗ Kontrolsüz diyabet</li>
                <li>✗ İmmün yetmezlik</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Maliyet ve Erişim */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Maliyet ve Erişim</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              Kök hücre tedavisi maliyetleri, kullanılan yöntem ve kaynağa göre değişir:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Tek seans enjeksiyon:</strong> 1.000 - 5.000 USD</li>
              <li>• <strong>Kültüre edilmiş MSC uygulaması:</strong> 5.000 - 25.000 USD</li>
              <li>• <strong>Cerrahi implantasyon:</strong> 10.000 - 50.000 USD+</li>
            </ul>
            <p className="text-gray-700 mt-4">
              <strong>Not:</strong> Türkiye'de sosyal güvenlik sistemleri tarafından henüz rutin olarak karşılanmamaktadır. Özel sağlık sigortaları da çoğunlukla kapsamaz.
            </p>
          </div>
        </section>

        {/* Gelecek */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Geleceğe Bakış</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border-2 border-purple-200 rounded-lg p-5 text-center">
              <div className="text-3xl mb-2">🧬</div>
              <h3 className="font-semibold text-gray-900 mb-2">Gen Düzenleme</h3>
              <p className="text-sm text-gray-700">CRISPR ile genetik modifikasyon yapılmış kök hücreler</p>
            </div>

            <div className="bg-white border-2 border-blue-200 rounded-lg p-5 text-center">
              <div className="text-3xl mb-2">🖨️</div>
              <h3 className="font-semibold text-gray-900 mb-2">3D Biyobaskı</h3>
              <p className="text-sm text-gray-700">Kişiye özel doku ve organ üretimi</p>
            </div>

            <div className="bg-white border-2 border-green-200 rounded-lg p-5 text-center">
              <div className="text-3xl mb-2">🤖</div>
              <h3 className="font-semibold text-gray-900 mb-2">AI Destekli Tedavi</h3>
              <p className="text-sm text-gray-700">Yapay zeka ile optimize edilmiş protokoller</p>
            </div>
          </div>
        </section>

        {/* Referanslar */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Bilimsel Referanslar</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ol className="space-y-3 text-sm text-gray-700">
              <li>
                <strong>1.</strong> Freitag J, et al. "Mesenchymal stem cell therapy in the treatment of osteoarthritis: reparative pathways, safety and efficacy - a review" BMC Musculoskelet Disord. 2016;17:230. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=mesenchymal+stem+cell+osteoarthritis" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>2.</strong> Pers YM, et al. "Adipose Mesenchymal Stromal Cell-Based Therapy for Severe Osteoarthritis of the Knee" Arthritis Rheumatol. 2016;68(5):1171-1179. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=adipose+mesenchymal+stem+cell+knee+osteoarthritis" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>3.</strong> Wakitani S, et al. "Mesenchymal cell-based repair of large, full-thickness defects of articular cartilage" J Bone Joint Surg Am. 1994;76(4):579-592. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=mesenchymal+cell+cartilage+defect+repair" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>4.</strong> Kon E, et al. "Clinical results of multilayered biomaterials for osteochondral regeneration" J Exp Orthop. 2014;1(1):10. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=osteochondral+regeneration+biomaterials" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>5.</strong> Caplan AI. "Mesenchymal Stem Cells: Time to Change the Name!" Stem Cells Transl Med. 2017;6(6):1445-1451. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=mesenchymal+stem+cells+nomenclature" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>6.</strong> Lamo-Espinosa JM, et al. "Intra-articular injection of two different doses of autologous bone marrow mesenchymal stem cells versus hyaluronic acid in the treatment of knee osteoarthritis" Stem Cells Int. 2016;2016:4868613. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=bone+marrow+MSC+hyaluronic+acid+knee" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>7.</strong> Centeno CJ, et al. "A randomized controlled trial of bone marrow concentrate versus saline for knee osteoarthritis" Regen Med. 2018;13(2):159-173. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=bone+marrow+concentrate+knee+osteoarthritis+RCT" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>8.</strong> Hernigou P, Beaujean F. "Treatment of osteonecrosis with autologous bone marrow grafting" Clin Orthop Relat Res. 2002;(405):14-23. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=autologous+bone+marrow+osteonecrosis" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>9.</strong> Murphy MB, et al. "Stem cell therapy in a caprine model of osteoarthritis" Arthritis Rheum. 2003;48(12):3464-3474. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=stem+cell+therapy+osteoarthritis+animal+model" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>10.</strong> Toh WS, et al. "Cartilage repair using hyaluronan hydrogel-encapsulated human embryonic stem cell-derived chondrogenic cells" Biomaterials. 2010;31(27):6968-6980. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=cartilage+repair+embryonic+stem+cell+hydrogel" target="_blank" rel="noopener noreferrer" className="text-[#01CAB8] hover:underline">[PubMed Ara]</a>
              </li>
            </ol>
          </div>
        </section>
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


        {/* CTA */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Rejeneratif Tedavi Seçenekleri</h2>
          <p className="text-xl mb-6 opacity-90">
            Kök hücre tedavisi ve diğer rejeneratif yöntemler hakkında detaylı bilgi ve danışmanlık için iletişime geçin.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/iletisim" 
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition"
            >
              Randevu Al
            </Link>
            <Link 
              href="/hizmetler" 
              className="bg-purple-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-800 transition"
            >
              Tedavi Seçenekleri
            </Link>
          </div>
        </section>

      </article>
    </>
  );
}
