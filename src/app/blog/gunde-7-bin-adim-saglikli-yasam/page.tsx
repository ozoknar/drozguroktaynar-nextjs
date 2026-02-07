import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

// ========================================
// 1. METADATA & SEO
// ========================================
export const metadata: Metadata = {
  title: 'Günde 7 Bin Adım: Sağlıklı Yaşam İçin Yeni Hedef | Dr. Özgür Oktay Nar',
  description: 'Günde 10 bin adım miti yıkıldı! Bilimsel araştırmalar günde 7000 adımın optimal sağlık faydası sağladığını gösteriyor. Ortopedi ve kardiyo-metabolik sağlık.',
  keywords: 'günde 7000 adım, yürüyüş, fiziksel aktivite, sağlıklı yaşam, kardiyovasküler sağlık, adım sayısı',
  openGraph: {
    title: 'Günde 7 Bin Adım: Sağlıklı Yaşam İçin Yeni Hedef',
    description: 'Bilimsel araştırmalarla desteklenen optimal adım sayısı',
    type: 'article',
    locale: 'tr_TR',
    siteName: 'Dr. Özgür Oktay Nar - Ortopedi Uzmanı',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Günde 7 Bin Adım: Sağlıklı Yaşam İçin Yeni Hedef',
    description: 'Optimal adım sayısı hakkında bilimsel kanıtlar',
  }
};

// ========================================
// 2. STRUCTURED DATA (Schema.org)
// ========================================
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  headline: 'Günde 7 Bin Adım: Sağlıklı Yaşam İçin Yeni Hedef',
  description: 'Günlük adım sayısı ve sağlık faydaları hakkında bilimsel veriler',
  author: {
    '@type': 'Physician',
    name: 'Dr. Özgür Oktay Nar',
    medicalSpecialty: 'Ortopedi ve Travmatoloji'
  },
  datePublished: '2026-02-06',
  dateModified: '2026-02-06',
  about: {
    '@type': 'HealthTopicContent',
    name: 'Fiziksel Aktivite ve Yürüyüş'
  }
};

// ========================================
// 3. PAGE COMPONENT
// ========================================
export default function GunlukAdimPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-green-50 to-emerald-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Günde 7 Bin Adım: Sağlıklı Yaşam İçin Yeni Hedef
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            10 bin adım miti yıkıldı! Bilimsel araştırmalar, günde 7000 adımın optimal sağlık faydası sağladığını gösteriyor
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
            <strong>"Günde 10 bin adım"</strong> hedefi, fitness dünyasında neredeyse evrensel bir standart haline gelmiştir. Ancak bu sayının kökeni bilimsel araştırmadan ziyade, 1960'larda Japonya'da satılan bir pedometrenin (<em>manpo-kei</em> - "10 bin adım sayacı") pazarlama sloganından gelmektedir!
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Son yıllarda yapılan büyük ölçekli epidemiyolojik çalışmalar, günlük adım sayısı ve sağlık sonuçları arasındaki ilişkiyi net bir şekilde ortaya koymuştur. Sonuçlar şaşırtıcıdır: <strong>Günde 7000-8000 adım</strong>, kardiyovasküler ve genel mortalite riskini azaltmak için yeterlidir ve bu sayının üzerine çıkmak marjinal ek fayda sağlar.
          </p>
        </section>

        {/* Bilimsel Kanıtlar */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Bilimsel Kanıtlar: Adım Sayısı ve Mortalite</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Önemli Araştırmalar</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">📊 JAMA Çalışması (2020) - 4840 katılımcı</h4>
                <p className="text-gray-700 text-sm mb-2">
                  Orta yaşlı ve yaşlı yetişkinlerde günlük adım sayısı ile tüm nedenlere bağlı mortalite arasındaki ilişki incelendi.
                </p>
                <ul className="space-y-1 text-gray-700 text-sm ml-4">
                  <li>• <strong>4000 adım/gün:</strong> Referans grup</li>
                  <li>• <strong>8000 adım/gün:</strong> Mortalite riski %51 azalma</li>
                  <li>• <strong>12000 adım/gün:</strong> Ek fayda minimal (sadece %65 azalma)</li>
                </ul>
                <p className="text-gray-700 text-sm mt-2 italic">
                  <strong>Sonuç:</strong> 7000-10000 adım aralığı optimal görünüyor.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">📊 Lancet Public Health (2022) - 47,000+ katılımcı</h4>
                <p className="text-gray-700 text-sm mb-2">
                  18 yaş üstü yetişkinlerde adım sayısı ve mortalite riski meta-analizi.
                </p>
                <ul className="space-y-1 text-gray-700 text-sm ml-4">
                  <li>• <strong>18-59 yaş:</strong> 8000-10000 adım optimal</li>
                  <li>• <strong>60+ yaş:</strong> 6000-8000 adım yeterli</li>
                  <li>• <strong>Kritik eşik:</strong> 7000 adım (en büyük risk azalması burada)</li>
                </ul>
                <p className="text-gray-700 text-sm mt-2 italic">
                  <strong>Sonuç:</strong> Yaşla birlikte optimal adım sayısı azalır.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Adım Sayısının Faydaları */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Günlük Yürüyüşün Sağlık Faydaları</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">❤️ Kardiyovasküler Sağlık</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Kalp hastalığı riski %30-40 azalma</li>
                <li>• Kan basıncında düşüş</li>
                <li>• HDL (iyi kolesterol) artışı</li>
                <li>• İnme riski azalması</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🩺 Metabolik Sağlık</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Tip 2 diyabet riski %50 azalma</li>
                <li>• İnsülin duyarlılığı artışı</li>
                <li>• Kilo kontrolü (günde ~200-300 kalori yakımı)</li>
                <li>• Metabolik sendrom riski azalması</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🦴 Ortopedik ve Kas-İskelet Sistemi</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Kemik yoğunluğu korunması (osteoporoz önleme)</li>
                <li>• Eklem hareketliliğinin artması</li>
                <li>• Alt ekstremite kas gücü</li>
                <li>• Denge ve propriyosepsiyon iyileşmesi</li>
              </ul>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🧠 Ruh Sağlığı ve Bilişsel Fonksiyon</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Depresyon ve anksiyete azalması</li>
                <li>• Bilişsel gerileme riski %25-50 azalma</li>
                <li>• Uyku kalitesi iyileşmesi</li>
                <li>• Stres hormon seviyelerinde düşüş</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Yaşa Göre Hedefler */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Yaş Gruplarına Göre Adım Hedefleri</h2>
          
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">👦 18-40 Yaş (Genç Yetişkinler)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-700 mb-2"><strong>Optimal Hedef:</strong> 8000-10000 adım/gün</p>
                  <p className="text-gray-700 text-sm">Yüksek metabolizma ve aktivite seviyesi nedeniyle daha fazla hareket faydalıdır.</p>
                </div>
                <div className="text-sm text-gray-700">
                  <strong>Stratejiler:</strong>
                  <ul className="list-disc ml-4 mt-1">
                    <li>Toplu taşıma yerine yürüme</li>
                    <li>Öğle molasında 15 dk yürüyüş</li>
                    <li>Merdiven kullanımı</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🧑 40-60 Yaş (Orta Yaş)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-700 mb-2"><strong>Optimal Hedef:</strong> 7000-9000 adım/gün</p>
                  <p className="text-gray-700 text-sm">Kronik hastalık önleme ve metabolik sağlık için kritik dönem.</p>
                </div>
                <div className="text-sm text-gray-700">
                  <strong>Stratejiler:</strong>
                  <ul className="list-disc ml-4 mt-1">
                    <li>Sabah veya akşam rutin yürüyüş</li>
                    <li>Hafta sonu doğa yürüyüşleri</li>
                    <li>Ev işlerinde aktif olma</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">👴 60+ Yaş (Yaşlı Yetişkinler)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-700 mb-2"><strong>Optimal Hedef:</strong> 6000-8000 adım/gün</p>
                  <p className="text-gray-700 text-sm">Mobilite korunması ve düşme riski azaltılması öncelikli.</p>
                </div>
                <div className="text-sm text-gray-700">
                  <strong>Stratejiler:</strong>
                  <ul className="list-disc ml-4 mt-1">
                    <li>Yavaş tempolu yürüyüşler</li>
                    <li>Alışveriş merkezi yürüyüşü (güvenli zemin)</li>
                    <li>Grup yürüyüşleri (sosyal destek)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hız Önemli mi */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Adım Sayısı mı, Yürüyüş Hızı mı Önemli?</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">⚡ Tempo (Cadence) Etkisi</h3>
            <p className="text-gray-700 mb-3">
              2019 JAMA çalışması, <strong>yürüyüş hızının</strong> (intensity) da mortalite riski üzerinde bağımsız etkisi olduğunu göstermiştir:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Yavaş yürüyüş ({"<"}3 km/sa):</strong> Minimal kardiyovasküler fayda</li>
              <li>• <strong>Orta hız (4-5 km/sa):</strong> Optimal fayda, konuşarak yürüyebilme</li>
              <li>• <strong>Hızlı yürüyüş ({">"}5.5 km/sa):</strong> Ek fayda, ancak yaralanma riski artar</li>
            </ul>
            <p className="text-gray-700 mt-3 italic">
              <strong>Altın kural:</strong> Adım sayısı + orta-yüksek tempo = Maksimum fayda
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">📏 Nasıl Ölçülür?</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <strong>Adım Sayısı:</strong>
                <ul className="list-disc ml-4 mt-1">
                  <li>Akıllı telefon (adımsayar uygulaması)</li>
                  <li>Fitness tracker (Fitbit, Garmin, Apple Watch)</li>
                  <li>Pedometer (basit sayaç)</li>
                </ul>
              </div>
              <div>
                <strong>Yoğunluk (Tempo):</strong>
                <ul className="list-disc ml-4 mt-1">
                  <li><strong>Hafif:</strong> Konuşabilir, şarkı söyleyebilir</li>
                  <li><strong>Orta:</strong> Konuşabilir, ama şarkı zor</li>
                  <li><strong>Yoğun:</strong> Birkaç kelimeden fazla konuşamaz</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pratik Öneriler */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">7000 Adıma Ulaşmak İçin Pratik Stratejiler</h2>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white border-2 border-green-200 rounded-lg p-5 text-center">
              <div className="text-3xl mb-2">☀️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Sabah Rutini</h3>
              <p className="text-sm text-gray-700">Kahvaltı öncesi 10 dk yürüyüş (~1000 adım)</p>
            </div>

            <div className="bg-white border-2 border-blue-200 rounded-lg p-5 text-center">
              <div className="text-3xl mb-2">🏢</div>
              <h3 className="font-semibold text-gray-900 mb-2">İş Molası</h3>
              <p className="text-sm text-gray-700">Öğle molasında 15 dk (~1500 adım)</p>
            </div>

            <div className="bg-white border-2 border-purple-200 rounded-lg p-5 text-center">
              <div className="text-3xl mb-2">🌆</div>
              <h3 className="font-semibold text-gray-900 mb-2">Akşam Gezintisi</h3>
              <p className="text-sm text-gray-700">Yemek sonrası 20-30 dk (~2500 adım)</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">💡 Günlük Hayatta Adım Artırma İpuçları</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <ul className="space-y-2 text-sm">
                <li>✓ Arabayı uzağa park et</li>
                <li>✓ Asansör yerine merdiven</li>
                <li>✓ Telefon görüşmelerinde yürü</li>
                <li>✓ TV izlerken reklam aralarında yürü</li>
              </ul>
              <ul className="space-y-2 text-sm">
                <li>✓ Çocukları okula yürüyerek götür</li>
                <li>✓ Alışverişte market içinde dolaş</li>
                <li>✓ Evcil hayvanınla uzun yürüyüş</li>
                <li>✓ Arkadaşlarla kahve yerine yürüyüş</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Dikkat Edilmesi Gerekenler */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Dikkat Edilmesi Gerekenler</h2>
          
          <div className="bg-red-50 border-2 border-red-500 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-red-900 mb-4">⚠️ Risk Grupları ve Önlemler</h3>
            <div className="space-y-3 text-gray-700">
              <div>
                <strong>Ortopedik Problemler:</strong>
                <p className="text-sm">Diz, kalça veya ayak ağrınız varsa → düşük etkili aktiviteler (yüzme, bisiklet) tercih edin</p>
              </div>
              <div>
                <strong>Kardiyak Hastalar:</strong>
                <p className="text-sm">Kalp hastalığı öyküsü → doktor onayı ve kademeli artış (haftada %10 artış kuralı)</p>
              </div>
              <div>
                <strong>Aşırı Yüklenme:</strong>
                <p className="text-sm">Ani şiddetli artış → stres kırıkları, tendinit riski. İlk hafta 3000 adımla başlayın.</p>
              </div>
              <div>
                <strong>Doğru Ayakkabı:</strong>
                <p className="text-sm">Aşınmış tabanlı ayakkabılar → plantar fasiit, shin splint riski. 6-12 ayda değiştirin.</p>
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
                <strong>1.</strong> Lee IM, et al. "Association of Step Volume and Intensity With All-Cause Mortality in Older Women" JAMA Intern Med. 2019;179(8):1105-1112. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=step+volume+intensity+mortality+older+women" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>2.</strong> Saint-Maurice PF, et al. "Association of Daily Step Count and Step Intensity With Mortality Among US Adults" JAMA. 2020;323(12):1151-1160. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=daily+step+count+intensity+mortality+US+adults" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>3.</strong> Paluch AE, et al. "Daily steps and all-cause mortality: a meta-analysis of 15 international cohorts" Lancet Public Health. 2022;7(3):e219-e228. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=daily+steps+mortality+meta+analysis+lancet" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>4.</strong> Tudor-Locke C, et al. "How many steps/day are enough? Preliminary pedometer indices for public health" Sports Med. 2004;34(1):1-8. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=pedometer+steps+public+health+Tudor-Locke" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>5.</strong> Bassett DR Jr, et al. "Step counting: a review of measurement considerations and health-related applications" Sports Med. 2017;47(7):1303-1315. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=step+counting+review+health+applications" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>6.</strong> Dwyer T, et al. "Objectively measured daily steps and subsequent long-term all-cause mortality" PLoS One. 2015;10(11):e0141274. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=objectively+measured+steps+mortality+PLoS" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>7.</strong> Jefferis BJ, et al. "Objectively measured physical activity, sedentary behaviour and all-cause mortality in older men" Br J Sports Med. 2019;53(16):1012-1018. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=physical+activity+sedentary+behaviour+mortality+older+men" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>8.</strong> Hall KS, et al. "Systematic review of the prospective association of daily step counts with risk of mortality, cardiovascular disease, and dysglycemia" Int J Behav Nutr Phys Act. 2020;17(1):78. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=step+counts+mortality+cardiovascular+dysglycemia+review" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>9.</strong> Del Pozo Cruz B, et al. "Association of Daily Step Count and Intensity With Incident Dementia in 78,430 Adults Living in the UK" JAMA Neurol. 2022;79(10):1059-1063. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=daily+step+count+dementia+UK+JAMA" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>10.</strong> Kraus WE, et al. "Daily step counts for measuring physical activity exposure and its relation to health" Med Sci Sports Exerc. 2019;51(6):1206-1212. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=daily+step+counts+physical+activity+health" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
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
        <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Sağlıklı Yaşam İçin Harekete Geçin!</h2>
          <p className="text-xl mb-6 opacity-90">
            Ortopedik değerlendirme ve kişiselleştirilmiş egzersiz programı için randevu alın.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/iletisim" 
              className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition"
            >
              Randevu Al
            </Link>
            <Link 
              href="/hizmetler" 
              className="bg-green-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-800 transition"
            >
              Fizik Tedavi ve Rehabilitasyon
            </Link>
          </div>
        </section>

      </article>
    </>
  );
}
