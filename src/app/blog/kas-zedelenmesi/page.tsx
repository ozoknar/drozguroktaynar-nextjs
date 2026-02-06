import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

// ========================================
// 1. METADATA & SEO
// ========================================
export const metadata:

 Metadata = {
  title: 'Kas Zedelenmesi (Strain): Belirtileri, Dereceleri ve Tedavisi | Dr. Özgür Oktay Nar',
  description: 'Kas zedelenmesi (muscle strain) dereceleri, iyileşme süreci, tedavi ve spora dönüş rehberi. Ortopedi uzmanından spor yaralanmaları bilgisi.',
  keywords: 'kas zedelenmesi, muscle strain, kas yırtığı, hamstring, kuadriseps, spor yaralanması, ortopedi',
  openGraph: {
    title: 'Kas Zedelenmesi: Belirtileri ve Tedavisi',
    description: 'Muscle strain tanı ve tedavi rehberi',
    type: 'article',
    locale: 'tr_TR',
    siteName: 'Dr. Özgür Oktay Nar - Ortopedi Uzmanı',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kas Zedelenmesi: Belirtileri ve Tedavisi',
    description: 'Kas yaralanmaları hakkında uzman bilgisi',
  }
};

// ========================================
// 2. STRUCTURED DATA (Schema.org)
// ========================================
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  headline: 'Kas Zedelenmesi (Strain): Belirtileri, Dereceleri ve Tedavisi',
  description: 'Kas zedelenmesi tanı ve tedavi yöntemleri',
  author: {
    '@type': 'Physician',
    name: 'Dr. Özgür Oktay Nar',
    medicalSpecialty: 'Ortopedi ve Travmatoloji'
  },
  datePublished: '2026-02-06',
  dateModified: '2026-02-06',
  about: {
    '@type': 'MedicalCondition',
    name: 'Kas Zedelenmesi',
    alternateName: 'Muscle Strain'
  }
};

// ========================================
// 3. PAGE COMPONENT
// ========================================
export default function KasZedelenmesiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-red-50 to-orange-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kas Zedelenmesi: Belirtileri ve Tedavisi
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Sporcuların korkulu rüyası kas zedelenmesi (muscle strain): Dereceleri, tedavi ve spora dönüş süreci
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
            <strong>Kas zedelenmesi (muscle strain)</strong>, kas liflerinin veya kas-tendon bileşkesinin aşırı gerilme veya ani kasılma sonucu hasar görmesidir. Sporcular arasında en sık karşılaşılan yaralanmalardan biri olup, özellikle <strong>hamstring, kuadriseps, gastroknemius (baldır) ve adduktör</strong> kaslarında görülür.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Kas zedelenmeleri, hafif gerginlikten (mikro-yırtıklar) tam kas rüptürüne kadar değişen şiddette olabilir. Doğru tanı, uygun tedavi ve rehabilitasyon, erken spora dönüş ve tekrarlayan yaralanmaları önlemek için kritiktir.
          </p>
        </section>

        {/* Derecelendirme */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Kas Zedelenmesi Dereceleri</h2>
          
          <div className="space-y-6">
            <div className="bg-green-50 border-l-4 border-green-500 p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">I</span>
                <h3 className="text-xl font-semibold text-gray-900">Derece 1 (Hafif Strain)</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Hasar:</strong> {"<"}5% kas liflerinde mikro-yırtık</li>
                <li><strong>Belirtiler:</strong> Hafif ağrı, minimal şişlik, hafif hassasiyet</li>
                <li><strong>Fonksiyon:</strong> Hareket mümkün, güç kaybı minimal</li>
                <li><strong>İyileşme:</strong> 1-3 hafta</li>
                <li><strong>Tedavi:</strong> RICE, erken mobilizasyon</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-yellow-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">II</span>
                <h3 className="text-xl font-semibold text-gray-900">Derece 2 (Orta Strain)</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Hasar:</strong> %5-50 kas liflerinde parsiyel yırtık</li>
                <li><strong>Belirtiler:</strong> Orta-şiddetli ağrı, şişlik, ekimoz (morarma), palpasyonla hassasiyet</li>
                <li><strong>Fonksiyon:</strong> Hareket kısıtlı, belirgin güç kaybı</li>
                <li><strong>İyileşme:</strong> 3-6 hafta</li>
                <li><strong>Tedavi:</strong> RICE, immobilizasyon (kısa süreli), fizik tedavi</li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">III</span>
                <h3 className="text-xl font-semibold text-gray-900">Derece 3 (Şiddetli Strain / Rüptür)</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Hasar:</strong> {">"}50% veya tam kas rüptürü</li>
                <li><strong>Belirtiler:</strong> Ani şiddetli ağrı ("çat" sesi), hızlı şişlik, geniş ekimoz, palpable defekt (çukur hissi)</li>
                <li><strong>Fonksiyon:</strong> Hareket imkansız, tam güç kaybı</li>
                <li><strong>İyileşme:</strong> 3-6 ay (cerrahi gerekebilir)</li>
                <li><strong>Tedavi:</strong> İmmobilizasyon, cerrahi rekonstrüksiyon (seçilmiş vakalar), yoğun rehabilitasyon</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sık Görülen Kaslar */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Sık Zedelenen Kaslar</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🦵 Hamstring (Arka Uyluk)</h3>
              <p className="text-gray-700 text-sm mb-2">
                <strong>En sık yaralanan kas!</strong> Koşma, sıçrama, ani yön değiştirme sırasında.
              </p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Futbol, atletizm, basketbol</li>
                <li>• Yüksek tekrar riski (%30-40)</li>
                <li>• Proksimal (oturma kemiği) veya distal (diz arkası)</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">💪 Kuadriseps (Ön Uyluk)</h3>
              <p className="text-gray-700 text-sm mb-2">
                <strong>Şiddetli kas zedelenmeleri sık.</strong> Tekme, sprint sırasında.
              </p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Futbol, ragbi, karate</li>
                <li>• Rectus femoris (iki eklemi geçen) en riskli</li>
                <li>• Ağır vakalerde cerrahi gerekebilir</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🏃 Gastroknemius (Baldır)</h3>
              <p className="text-gray-700 text-sm mb-2">
                <strong>"Tennis leg"</strong> olarak bilinen klasik yaralanma.
              </p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Tenis, basketbol, voleybol</li>
                <li>• Medial baş daha sık</li>
                <li>• Ani itme hareketi (jump, sprint)</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-purple-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🤸 Adduktör (İç Uyluk)</h3>
              <p className="text-gray-700 text-sm mb-2">
                <strong>"Groin strain"</strong> - kasık bölgesi ağrısı.
              </p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Futbol, hokey, jimnastik</li>
                <li>• Lateral yön değiştirme</li>
                <li>• Kronikleşme riski yüksek</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tanı */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tanı Yöntemleri</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Klinik Değerlendirme</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>• Öykü:</strong> Yaralanma mekanizması ("çat" sesi duyuldu mu?)</li>
              <li><strong>• İnspeksiyon:</strong> Şişlik, ekimoz, deformite (çukur)</li>
              <li><strong>• Palpasyon:</strong> Hassasiyet lokalizasyonu, defekt varlığı</li>
              <li><strong>• Fonksiyonel testler:</strong> Aktif kasılma, pasif germe (ağrı provokasyonu)</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🔬 Görüntüleme</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><strong>MR:</strong> Altın standart, yırtık boyutunu ve lokalizasyonunu gösterir</li>
                <li><strong>Ultrason:</strong> Dinamik değerlendirme, maliyet-etkin, takipte kullanılır</li>
                <li><strong>Röntgen:</strong> Avulsiyon kırığı (kemik parçası kopması) ekartasyonu</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">📊 Sınıflandırma (MR)</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><strong>Derece 0:</strong> Ödem var, lif yırtığı yok</li>
                <li><strong>Derece 1:</strong> {"<"}5% lif yırtığı</li>
                <li><strong>Derece 2:</strong> 5-50% parsiyel yırtık</li>
                <li><strong>Derece 3:</strong> {">"}50% veya tam rüptür</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tedavi */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tedavi Yaklaşımı</h2>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Akut Dönem (0-72 saat): RICE + POLICE</h3>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-4">
              <h4 className="font-semibold text-gray-900 mb-3">Klasik RICE Protokolü</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><strong>Rest:</strong> Aktiviteden kaçınma (koltuk değneği kullanımı)</li>
                <li><strong>Ice:</strong> İlk 48-72 saat, 15-20 dk/seans, günde 4-6 kez</li>
                <li><strong>Compression:</strong> Elastik bandaj ile kompresyon</li>
                <li><strong>Elevation:</strong> Kalp seviyesinin üstünde tutma</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Modern POLICE Yaklaşımı</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><strong>Protection:</strong> İlk günler immobilizasyon/destek</li>
                <li><strong>Optimal Loading:</strong> Erken kontrollü mobilizasyon (tam istirahat değil!)</li>
                <li><strong>Ice + Compression + Elevation:</strong> RICE ile aynı</li>
              </ul>
              <p className="text-gray-700 text-sm mt-3 italic">
                <strong>Anahtar:</strong> Erken hafif yükleme, tam istirahatten daha hızlı iyileşme sağlar.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Rehabilitasyon Fazları</h3>
            
            <div className="space-y-4">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Faz 1: Koruma (0-7 gün)</h4>
                <p className="text-gray-700 text-sm">• Pasif ROM, hafif izometrik kasılmalar<br />• Ağrı kontrolü, şişlik azaltma</p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Faz 2: Mobilizasyon (1-3 hafta)</h4>
                <p className="text-gray-700 text-sm">• Aktif ROM, progresif direnç egzersizleri<br />• Yavaş eksentrik güçlendirme (Nordic hamstring curl)</p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Faz 3: Güçlendirme (3-6 hafta)</h4>
                <p className="text-gray-700 text-sm">• İzokinetik egzersizler, pliometrik çalışmalar<br />• Spora özgü hareketler (düşük yoğunluk)</p>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Faz 4: Spora Dönüş (6-12 hafta)</h4>
                <p className="text-gray-700 text-sm">• Tam yoğunlukta antrenman<br />• Fonksiyonel testler geçilmeli (örn. hop test, strength test)</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-500 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-yellow-900 mb-3">⚠️ Cerrahi Endikasyonları (Nadir)</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Tam rüptür (Derece 3) + büyük fonksiyon kaybı</li>
              <li>• Proksimal avulsiyon (oturma kemiğinden kopma)</li>
              <li>• Konservatif tedaviye 3-6 ay yanıtsızlık</li>
              <li>• Profesyonel sporcu + erken dönüş ihtiyacı</li>
            </ul>
          </div>
        </section>

        {/* Önleme */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Kas Zedelenmelerini Önleme</h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border-2 border-green-200 rounded-lg p-5 text-center">
              <div className="text-3xl mb-2">🔥</div>
              <h3 className="font-semibold text-gray-900 mb-2">Isınma</h3>
              <p className="text-sm text-gray-700">10-15 dk dinamik germe ve hafif kardiyovasküler çalışma</p>
            </div>

            <div className="bg-white border-2 border-blue-200 rounded-lg p-5 text-center">
              <div className="text-3xl mb-2">💪</div>
              <h3 className="font-semibold text-gray-900 mb-2">Güçlendirme</h3>
              <p className="text-sm text-gray-700">Eksentrik egzersizler (Nordic hamstring curl) %50-70 risk azaltır</p>
            </div>

            <div className="bg-white border-2 border-purple-200 rounded-lg p-5 text-center">
              <div className="text-3xl mb-2">⚖️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Esneklik</h3>
              <p className="text-sm text-gray-700">Statik germe (aktivite sonrası), yoga, pilates</p>
            </div>
          </div>
        </section>

        {/* Referanslar */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Bilimsel Referanslar</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ol className="space-y-3 text-sm text-gray-700">
              <li>
                <strong>1.</strong> Mueller-Wohlfahrt HW, et al. "Terminology and classification of muscle injuries in sport: The Munich consensus statement" Br J Sports Med. 2013;47(6):342-350. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=Munich+consensus+muscle+injury+classification" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>2.</strong> Ekstrand J, et al. "Hamstring injuries have increased by 4% annually in men's professional football, since 2001" Br J Sports Med. 2016;50(12):731-737. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=hamstring+injuries+increase+professional+football" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>3.</strong> Askling CM, et al. "Acute hamstring injuries in Swedish elite football: a prospective randomised controlled clinical trial comparing two rehabilitation protocols" Br J Sports Med. 2013;47(15):953-959. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=hamstring+injury+rehabilitation+protocols+RCT" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>4.</strong> van der Horst N, et al. "The preventive effect of the nordic hamstring exercise on hamstring injuries in amateur soccer players" Am J Sports Med. 2015;43(6):1316-1323. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=nordic+hamstring+exercise+prevention+soccer" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>5.</strong> Järvinen TA, et al. "Muscle injuries: optimising recovery" Best Pract Res Clin Rheumatol. 2007;21(2):317-331. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=muscle+injuries+optimizing+recovery" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>6.</strong> Pollock N, et al. "British athletics muscle injury classification: a new grading system" Br J Sports Med. 2014;48(18):1347-1351. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=British+athletics+muscle+injury+classification" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>7.</strong> Bleakley CM, et al. "PRICE needs updating, should we call the POLICE?" Br J Sports Med. 2012;46(4):220-221. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=PRICE+POLICE+acute+injury+management" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>8.</strong> Hamilton B, et al. "Classification and grading of muscle injuries: a narrative review" Br J Sports Med. 2015;49(5):306. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=classification+grading+muscle+injuries+narrative+review" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>9.</strong> Croisier JL, et al. "Hamstring muscle strain recurrence and strength performance disorders" Am J Sports Med. 2002;30(2):199-203. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=hamstring+strain+recurrence+strength+performance" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>10.</strong> Orchard J, Best TM. "The management of muscle strain injuries: an early return versus the risk of recurrence" Clin J Sport Med. 2002;12(1):3-5. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=muscle+strain+management+early+return+recurrence" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
            </ol>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Kas Yaralanması mı Geçirdiniz?</h2>
          <p className="text-xl mb-6 opacity-90">
            Doğru tedavi ve rehabilitasyon ile tekrarlayan yaralanmaları önleyin, hızlı ve güvenli spora dönüş sağlayın.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/iletisim" 
              className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-red-50 transition"
            >
              Randevu Al
            </Link>
            <Link 
              href="/hizmetler" 
              className="bg-red-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-800 transition"
            >
              Spor Yaralanmaları
            </Link>
          </div>
        </section>

      </article>
    </>
  );
}
