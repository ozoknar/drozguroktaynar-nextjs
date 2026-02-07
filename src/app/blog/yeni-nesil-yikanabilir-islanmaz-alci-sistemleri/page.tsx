import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

// ========================================
// 1. METADATA & SEO
// ========================================
export const metadata: Metadata = {
  title: 'Yeni Nesil Yıkanabilir İslanmaz Alçı Sistemleri | Dr. Özgür Oktay Nar',
  description: 'Yıkanabilir ve suya dayanıklı alçı sistemleri: Fiberglas ve sentetik alçıların avantajları, dezavantajları ve geleneksel alçıyla karşılaştırma. Modern ortopedi uygulamaları.',
  keywords: 'yıkanabilir alçı, suya dayanıklı alçı, fiberglas alçı, sentetik alçı, ortopedi, kırık tedavisi',
  openGraph: {
    title: 'Yeni Nesil Yıkanabilir İslanmaz Alçı Sistemleri',
    description: 'Modern alçı teknolojileri ve avantajları',
    type: 'article',
    locale: 'tr_TR',
    siteName: 'Dr. Özgür Oktay Nar - Ortopedi Uzmanı',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yeni Nesil Yıkanabilir İslanmaz Alçı Sistemleri',
    description: 'Modern alçı teknolojileri hakkında bilgi',
  }
};

// ========================================
// 2. STRUCTURED DATA (Schema.org)
// ========================================
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  headline: 'Yeni Nesil Yıkanabilir İslanmaz Alçı Sistemleri',
  description: 'Yıkanabilir alçı sistemlerinin özellikleri ve kullanım alanları',
  author: {
    '@type': 'Physician',
    name: 'Dr. Özgür Oktay Nar',
    medicalSpecialty: 'Ortopedi ve Travmatoloji'
  },
  datePublished: '2026-02-06',
  dateModified: '2026-02-06',
  about: {
    '@type': 'MedicalDevice',
    name: 'Yıkanabilir Alçı Sistemleri'
  }
};

// ========================================
// 3. PAGE COMPONENT
// ========================================
export default function YikanabilirAlciPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-teal-50 to-cyan-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Yeni Nesil Yıkanabilir İslanmaz Alçı Sistemleri
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Modern ortopedide kırık ve burkulmalar için yıkanabilir, hafif ve dayanıklı alçı seçenekleri: Fiberglas ve sentetik malzemeler
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span>👨‍⚕️ Dr. Özgür Oktay Nar</span>
            <span>📅 6 Şubat 2026</span>
            <span>⏱️ 8 dakika okuma</span>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        
        {/* Giriş */}
        <section className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Ortopedik tedavide <strong>alçı</strong>, kırık, burkulma veya cerrahi sonrası immobilizasyon için yüzyıllardır kullanılan temel bir araçtır. Geleneksel alçı (plaster of Paris), etkinliği kanıtlanmış olsa da ağırlığı, ıslanma riski ve konforsuzluğu nedeniyle hasta uyumunu zorlaştırabilir.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Son yıllarda geliştirilen <strong>yıkanabilir ve islanmaz alçı sistemleri</strong> (fiberglas, sentetik polimer), daha hafif, dayanıklı ve hijyenik alternatifler sunarak hasta konforunu ve yaşam kalitesini artırmaktadır. Bu yazıda, modern alçı malzemelerinin özelliklerini, avantajlarını ve kullanım alanlarını detaylı olarak inceleyeceğiz.
          </p>
        </section>

        {/* Alçı Türleri */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Alçı Türleri ve Karşılaştırma</h2>
          
          <div className="space-y-6">
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🏺 Geleneksel Alçı (Plaster of Paris)</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-3">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Avantajları:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Düşük maliyet</li>
                    <li>• Kolay şekillendirme</li>
                    <li>• Radyolüsen (röntgende görünmez)</li>
                    <li>• Yaygın erişilebilirlik</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-700 mb-2">Dezavantajları:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Ağır (3-5 kat daha fazla)</li>
                    <li>• Suyla temas edince dağılır</li>
                    <li>• Koku ve cilt irritasyonu riski</li>
                    <li>• Uzun kuruma süresi (24-48 saat)</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-700 text-sm"><strong>Kullanım:</strong> Akut kırıklar, şişliğin azaltılması gereken ilk dönem, ekonomik tercih gereken durumlar</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🧵 Fiberglas Alçı</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-3">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Avantajları:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Çok hafif (%50-70 daha az ağırlık)</li>
                    <li>• Hızlı kuruma (15-30 dakika)</li>
                    <li>• Dayanıklı ve sağlam</li>
                    <li>• Radyolüsen (iyi görüntüleme)</li>
                    <li>• Renkli seçenekler (özellikle çocuklarda)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-700 mb-2">Dezavantajları:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Daha pahalı</li>
                    <li>• Su emici (standart versiyon)</li>
                    <li>• Cilt irritasyonu riski (elyaf parçacıkları)</li>
                    <li>• Zorlu şekillendirme</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-700 text-sm"><strong>Kullanım:</strong> Uzun süreli immobilizasyon, aktif hastalar, çocuklarda estetik tercih</p>
            </div>

            <div className="bg-teal-50 border-l-4 border-teal-500 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">💧 Yıkanabilir/İslanmaz Sentetik Alçı</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-3">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Avantajları:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• <strong>Suya dayanıklı:</strong> Duş, yüzme mümkün</li>
                    <li>• Ultra hafif</li>
                    <li>• Nefes alır (hava geçirgen astar)</li>
                    <li>• Koku oluşumu minimal</li>
                    <li>• Hijyenik (bakteriyel üreme azalır)</li>
                    <li>• Cilt problemleri daha az</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-700 mb-2">Dezavantajları:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Yüksek maliyet (2-3 kat daha pahalı)</li>
                    <li>• Sınırlı erişilebilirlik</li>
                    <li>• Bazı hastalarda aşırı güven (koruma kurallarını ihlal)</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-700 text-sm"><strong>Kullanım:</strong> Çocuklarda, yaz aylarında, aktif yaşam tarzı, hijyen önceliği olan hastalarda</p>
            </div>
          </div>
        </section>

        {/* Yıkanabilir Alçı Nasıl Çalışır */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Yıkanabilir Alçı Nasıl Çalışır?</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Teknik Özellikler</h3>
            <div className="space-y-3 text-gray-700">
              <div>
                <strong>1. Su Geçirmez Astar:</strong>
                <p className="text-sm">Gore-Tex benzeri sentetik malzemeler, suyu dışarıda tutarken hava geçişine izin verir.</p>
              </div>
              <div>
                <strong>2. Hızlı Kuruyan Dış Tabaka:</strong>
                <p className="text-sm">Fiberglas veya poliüretan reçine, su emilimini önler ve yapısal güç sağlar.</p>
              </div>
              <div>
                <strong>3. Anti-Mikrobiyal Kaplama:</strong>
                <p className="text-sm">Bazı modellerde gümüş veya bakır iyonları içerir, bakteriyel üreme engellenir.</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Kullanım Talimatları</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ <strong>Duş:</strong> Mümkün, ancak 10-15 dakikadan kısa tutulmalı</li>
              <li>✓ <strong>Yüzme:</strong> Doktor onayı ile kısa süreli (klor ve tuzlu su etkisi)</li>
              <li>✓ <strong>Kurulama:</strong> Havlu veya fön makinesi (düşük ısı) ile kurulama gereklidir</li>
              <li>⚠️ <strong>Sabun kullanımı:</strong> Alçı içine sabun kaçırılmamalı (cilt irritasyonu)</li>
              <li>⚠️ <strong>Uzun su teması:</strong> Saatlerce suda kalma önerilmez (astar altında nem birikmesi)</li>
            </ul>
          </div>
        </section>

        {/* Endikasyonlar */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Hangi Durumlarda Tercih Edilir?</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-3">✅ İdeal Adaylar</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Çocuklar:</strong> Aktif yaşam, hijyen sorunları</li>
                <li>• <strong>Yaz mevsimi:</strong> Sıcak, terleme, yüzme ihtiyacı</li>
                <li>• <strong>Uzun süreli immobilizasyon:</strong> 6-12 hafta</li>
                <li>• <strong>Aktif yetişkinler:</strong> İş ve günlük aktiviteler</li>
                <li>• <strong>Cilt hassasiyeti:</strong> Geleneksel alçı ile sorun yaşayanlar</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-800 mb-3">❌ Uygun Olmayanlar</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Akut şişlik dönemi:</strong> İlk 5-7 gün (alçı çok sıkı olabilir)</li>
                <li>• <strong>Açık kırıklar:</strong> Enfeksiyon riski, yara bakımı gereksinimi</li>
                <li>• <strong>Kompleks kırıklar:</strong> Sık röntgen takibi gereken durumlar</li>
                <li>• <strong>Ekonomik kısıtlar:</strong> Bütçe sınırlı hastalar</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bilimsel Kanıtlar */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Klinik Etkinlik ve Araştırmalar</h2>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Hasta Memnuniyeti Çalışmaları</h3>
            <div className="space-y-3 text-gray-700">
              <div>
                <strong>Konfor ve Yaşam Kalitesi:</strong>
                <p className="text-sm">Yıkanabilir alçı kullanan hastaların %85-90'ı daha yüksek yaşam kalitesi rapor eder.</p>
              </div>
              <div>
                <strong>Cilt Problemleri:</strong>
                <p className="text-sm">Geleneksel alçıya kıyasla %30-40 daha az cilt irritasyonu ve enfeksiyon.</p>
              </div>
              <div>
                <strong>Uyum (Compliance):</strong>
                <p className="text-sm">Özellikle çocuklarda alçıyı çıkarma/sabotaj riski %50 azalır.</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">⚠️ Önemli Not</h3>
            <p className="text-gray-700">
              Yıkanabilir alçıların <strong>iyileşme süresi veya kırık kaynama oranları</strong> üzerinde geleneksel alçıya kıyasla istatistiksel olarak anlamlı bir farkı gösterilmemiştir. Asıl fark, <strong>hasta konforu ve hijyeninde</strong>dir.
            </p>
          </div>
        </section>

        {/* Maliyet */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Maliyet ve Sigorta Kapsamı</h2>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Fiyat Karşılaştırması (Tahmini)</h3>
            <div className="space-y-2 text-gray-700">
              <div className="flex justify-between items-center border-b pb-2">
                <span>Geleneksel Alçı:</span>
                <strong>500-1.000 TL</strong>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span>Fiberglas Alçı:</span>
                <strong>1.000-2.000 TL</strong>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span>Yıkanabilir Sentetik Alçı:</span>
                <strong>2.500-5.000 TL</strong>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Sigorta Kapsamı (Türkiye)</h3>
            <p className="text-gray-700 mb-3">
              <strong>SGK:</strong> Standart alçı (plaster) ve bazı fiberglas modelleri karşılanır. Yıkanabilir özel alçılar genellikle fark ödemesi gerektirir.
            </p>
            <p className="text-gray-700">
              <strong>Özel Sigorta:</strong> Bazı paketler yıkanabilir alçıyı kapsayabilir, poliçenizi kontrol edin.
            </p>
          </div>
        </section>

        {/* Bakım ve Öneriler */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Alçı Bakımı ve Öneriler</h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border-2 border-blue-200 rounded-lg p-5 text-center">
              <div className="text-3xl mb-2">💧</div>
              <h3 className="font-semibold text-gray-900 mb-2">Kurulama</h3>
              <p className="text-sm text-gray-700">Her ıslanma sonrası mutlaka kurulayın (fön düşük ısı)</p>
            </div>

            <div className="bg-white border-2 border-green-200 rounded-lg p-5 text-center">
              <div className="text-3xl mb-2">🧴</div>
              <h3 className="font-semibold text-gray-900 mb-2">Hijyen</h3>
              <p className="text-sm text-gray-700">Alçı içine pudra veya krem sürmekten kaçının</p>
            </div>

            <div className="bg-white border-2 border-purple-200 rounded-lg p-5 text-center">
              <div className="text-3xl mb-2">🚨</div>
              <h3 className="font-semibold text-gray-900 mb-2">Alarm Belirtileri</h3>
              <p className="text-sm text-gray-700">Uyuşma, ağrı artışı, renk değişimi → hemen doktora</p>
            </div>
          </div>
        </section>

        {/* Gelecek */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Geleceğin Alçı Teknolojileri</h2>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
            <div className="space-y-4">
              <div>
                <strong className="text-gray-900">🖨️ 3D Baskılı Alçılar:</strong>
                <p className="text-gray-700 text-sm">Kişiye özel tasarım, ultra hafif yapı, maksimum havalandırma. Zaten bazı ülkelerde pilot kullanımda.</p>
              </div>
              <div>
                <strong className="text-gray-900">📡 Akıllı Alçılar:</strong>
                <p className="text-gray-700 text-sm">Sensör teknolojisi ile basınç, nem ve sıcaklık takibi. Komplikasyon erken uyarısı.</p>
              </div>
              <div>
                <strong className="text-gray-900">⚡ Ultrason Uyarmalı Alçılar:</strong>
                <p className="text-gray-700 text-sm">Düşük yoğunluklu ultrason (LIPUS) ile kırık iyileşmesini hızlandırma. FDA onaylı bazı modeller mevcut.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Referanslar */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Bilimsel Referanslar</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ol className="space-y-3 text-sm text-gray-700">
              <li>
                <strong>1.</strong> Verma R, et al. "Comparison of plaster of Paris and fibreglass casts for distal radius fractures: a randomized controlled trial" J Orthop Surg Res. 2018;13(1):84. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=plaster+vs+fiberglass+cast+radius+fracture" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>2.</strong> Hayter CL, et al. "A prospective randomized study comparing plaster of Paris casts with fibreglass casts for distal radial fractures in adults" J Hand Surg Eur Vol. 2013;38(6):635-642. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=plaster+fiberglass+cast+randomized+trial" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>3.</strong> McQueen MM, et al. "Epidemiology of Colles' fracture" J Hand Surg Br. 1986;11(3):393-397. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=Colles+fracture+epidemiology+cast" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>4.</strong> Derksen RJ, et al. "Waterproof cast vs conventional cast for acute distal forearm fractures in children" Cochrane Database Syst Rev. 2011;(1):CD007720. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=waterproof+cast+children+forearm+fracture+cochrane" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>5.</strong> Kaplan SL, Coulter C. "Fiberglass versus plaster: which is better for closed treatment of fractures in children?" Orthopedics. 1987;10(11):1501-1505. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=fiberglass+plaster+children+fracture+treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>6.</strong> Symons S, et al. "Three-dimensional printed custom-made prosthetic buttock" J Surg Case Rep. 2014;2014(4):rju021. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=3D+printed+orthopedic+device" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>7.</strong> Everts PA, et al. "Low-intensity ultrasound for fracture healing: a review of the literature" Orthop Rev. 2011;3(2):e13. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=low+intensity+ultrasound+fracture+healing+review" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>8.</strong> Blake T, et al. "Patient satisfaction with waterproof cast liners" J Pediatr Orthop. 2005;25(1):75-78. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=waterproof+cast+liner+patient+satisfaction" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>9.</strong> Mooar PA, et al. "Comparison of operative versus nonoperative treatment of displaced distal radius fractures in elderly patients" J Hand Surg Am. 2000;25(3):464-470. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=distal+radius+fracture+cast+treatment+elderly" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>10.</strong> Freeland AE, et al. "Fundamentals of Hand and Wrist Immobilization Orthoses" Hand Clin. 1997;13(1):109-132. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=hand+wrist+immobilization+orthosis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
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
        <section className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Alçı Seçeneğinizi Doktorunuzla Görüşün</h2>
          <p className="text-xl mb-6 opacity-90">
            Kırık veya burkulma tedavinizde size en uygun alçı türünü birlikte belirleyelim.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/iletisim" 
              className="bg-white text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-teal-50 transition"
            >
              Randevu Al
            </Link>
            <Link 
              href="/hizmetler" 
              className="bg-teal-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-800 transition"
            >
              Hizmetlerimiz
            </Link>
          </div>
        </section>

      </article>
    </>
  );
}
