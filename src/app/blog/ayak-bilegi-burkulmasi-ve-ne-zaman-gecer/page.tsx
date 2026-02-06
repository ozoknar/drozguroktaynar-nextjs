import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

// ========================================
// 1. METADATA & SEO
// ========================================
export const metadata: Metadata = {
  title: 'Ayak Bileği Burkulması Ne Zaman Geçer? İyileşme Süreci | Dr. Özgür Oktay Nar',
  description: 'Ayak bileği burkulması iyileşme süresi, dereceleri, tedavi yöntemleri ve ne zaman doktora gidilmeli sorusunun cevapları. Uzman ortopedi hekiminden detaylı bilgi.',
  keywords: 'ayak bileği burkulması, burkulma ne zaman geçer, ankle sprain, bağ yaralanması, RICE tedavisi, ayak bileği şişmesi',
  openGraph: {
    title: 'Ayak Bileği Burkulması Ne Zaman Geçer?',
    description: 'Burkulma iyileşme süreci, tedavi ve komplikasyonlar hakkında uzman görüşü',
    type: 'article',
    locale: 'tr_TR',
    siteName: 'Dr. Özgür Oktay Nar - Ortopedi Uzmanı',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayak Bileği Burkulması Ne Zaman Geçer?',
    description: 'İyileşme süreci ve tedavi rehberi',
  }
};

// ========================================
// 2. STRUCTURED DATA (Schema.org)
// ========================================
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  headline: 'Ayak Bileği Burkulması ve Ne Zaman Geçer',
  description: 'Ayak bileği burkulması iyileşme süresi ve tedavi yöntemleri',
  author: {
    '@type': 'Physician',
    name: 'Dr. Özgür Oktay Nar',
    medicalSpecialty: 'Ortopedi ve Travmatoloji'
  },
  datePublished: '2026-02-06',
  dateModified: '2026-02-06',
  about: {
    '@type': 'MedicalCondition',
    name: 'Ayak Bileği Burkulması',
    alternateName: 'Ankle Sprain'
  }
};

// ========================================
// 3. PAGE COMPONENT
// ========================================
export default function AyakBilegiBurkulmasiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-orange-50 to-red-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ayak Bileği Burkulması Ne Zaman Geçer?
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            En sık görülen spor yaralanmalarından biri olan ayak bileği burkulması: İyileşme süreci, tedavi ve önleme stratejileri
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
            <strong>Ayak bileği burkulması</strong>, ayak bileği eklemini stabilize eden bağların gerilmesi veya yırtılması sonucu oluşan yaralanmadır. Genellikle ayağın içe veya dışa dönmesi (inversiyonanakıyla meydana gelir. En sık yaralanan bağ, ayak bileğinin dış tarafında bulunan <strong>anterior talofibular ligament (ATFL)</strong>'dir.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            "Burkulma ne zaman geçer?" sorusunun cevabı, yaralanmanın derecesine, tedaviye uyuma ve bireyin genel sağlık durumuna göre değişir. Bu yazıda, ayak bileği burkulmalarının evreleri, iyileşme süreleri ve tedavi yaklaşımlarını detaylı olarak ele alacağız.
          </p>
        </section>

        {/* Burkulma Dereceleri */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Burkulma Dereceleri ve İyileşme Süreleri</h2>
          
          <div className="space-y-6">
            <div className="bg-green-50 border-l-4 border-green-500 p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">I</span>
                <h3 className="text-xl font-semibold text-gray-900">Hafif (Derece 1)</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Yaralanma:</strong> Bağlarda hafif gerilme, lifler intakt</li>
                <li><strong>Belirtiler:</strong> Minimal şişlik, hafif ağrı, yürüyebilir</li>
                <li><strong>İyileşme:</strong> 1-3 hafta</li>
                <li><strong>Tedavi:</strong> RICE protokolü, erken mobilizasyon</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-yellow-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">II</span>
                <h3 className="text-xl font-semibold text-gray-900">Orta (Derece 2)</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Yaralanma:</strong> Bağ liflerinde parsiyel yırtık</li>
                <li><strong>Belirtiler:</strong> Orta şişlik ve morarma, ağrılı yürüyüş, eklem gevşekliği</li>
                <li><strong>İyileşme:</strong> 3-6 hafta</li>
                <li><strong>Tedavi:</strong> RICE, immobilizasyon (ankle brace), fizik tedavi</li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">III</span>
                <h3 className="text-xl font-semibold text-gray-900">Şiddetli (Derece 3)</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Yaralanma:</strong> Bağın tam kopması</li>
                <li><strong>Belirtiler:</strong> Şiddetli şişlik, yaygın morarma, yürüyememe, belirgin instabilite</li>
                <li><strong>İyileşme:</strong> 8-12 hafta (bazen cerrahi gerekebilir)</li>
                <li><strong>Tedavi:</strong> İmmobilizasyon (alçı/bot), fizik tedavi, nadir durumlarda cerrahi</li>
              </ul>
            </div>
          </div>
        </section>

        {/* RICE Protokolü */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">RICE Protokolü: İlk Yardım ve Erken Tedavi</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <p className="text-gray-700 mb-4">
              <strong>RICE</strong>, akut yaralanmaların ilk 48-72 saatinde uygulanması gereken standart bir yaklaşımdır:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🧊 R - Rest (İstirahat)</h3>
              <p className="text-gray-700 mb-2">
                <strong>Ne:</strong> Yaralı ayak bileğini kullanmayı azaltın
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Nasıl:</strong> İlk 48 saat ağırlık vermekten kaçının, koltuk değneği kullanabilirsiniz
              </p>
            </div>

            <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">❄️ I - Ice (Buz)</h3>
              <p className="text-gray-700 mb-2">
                <strong>Ne:</strong> Şişliği ve iltihabı azaltmak için soğuk uygulama
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Nasıl:</strong> İlk 72 saat boyunca her 2-3 saatte bir 15-20 dakika buz torbası (ciltle direkt temas ettirmeyin)
              </p>
            </div>

            <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🩹 C - Compression (Kompresyon)</h3>
              <p className="text-gray-700 mb-2">
                <strong>Ne:</strong> Elastik bandajla sıkıca sarma
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Nasıl:</strong> Çok sıkı olmayacak şekilde ayak parmaklarından yukarı doğru sarın (kan dolaşımını kesmemeli)
              </p>
            </div>

            <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">⬆️ E - Elevation (Yükseltme)</h3>
              <p className="text-gray-700 mb-2">
                <strong>Ne:</strong> Ayağı kalp seviyesinin üzerine kaldırma
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Nasıl:</strong> Oturur veya yatarken ayağınızı yastık üzerine koyun, özellikle ilk 48-72 saat kritik
              </p>
            </div>
          </div>
        </section>

        {/* Tedavi Aşamaları */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tedavi ve İyileşme Aşamaları</h2>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Faz 1: Akut Dönem (0-7 gün)</h3>
            <div className="space-y-2 text-gray-700">
              <div><strong>Amaç:</strong> Ağrı ve şişliği kontrol altına almak</div>
              <div><strong>Yöntem:</strong> RICE, NSAİİ ilaçlar (ibuprofen, naproxen)</div>
              <div><strong>Mobilizasyon:</strong> Minimal, ağrı toleransı kadar</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Faz 2: Subakut Dönem (1-3 hafta)</h3>
            <div className="space-y-2 text-gray-700">
              <div><strong>Amaç:</strong> Hareket açıklığını (ROM) geri kazanmak</div>
              <div><strong>Yöntem:</strong> Pasif ve aktif ROM egzersizleri (alfabe yazmak, ayak bileği pompalama)</div>
              <div><strong>Mobilizasyon:</strong> Kısmi ağırlık verme, ankle brace kullanımı</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Faz 3: Rehabilitasyon (3-8 hafta)</h3>
            <div className="space-y-2 text-gray-700">
              <div><strong>Amaç:</strong> Kas gücü ve propriyosepsiyonu (denge) geliştirmek</div>
              <div><strong>Yöntem:</strong> Direnç egzersizleri, denge tahtası, tek ayak üzerinde durma</div>
              <div><strong>Mobilizasyon:</strong> Tam ağırlık verme, günlük aktivitelere dönüş</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Faz 4: Spora Dönüş (8-12 hafta)</h3>
            <div className="space-y-2 text-gray-700">
              <div><strong>Amaç:</strong> Fonksiyonel kapasiteyi restore etmek</div>
              <div><strong>Yöntem:</strong> Spor-spesifik egzersizler, pliometrik çalışmalar</div>
              <div><strong>Mobilizasyon:</strong> Kademeli olarak spora dönüş, taping veya brace kullanımı</div>
            </div>
          </div>
        </section>

        {/* Ne Zaman Doktora */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ne Zaman Doktora Gidilmeli?</h2>
          
          <div className="bg-red-50 border-2 border-red-500 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-red-900 mb-4">🚨 Acil Değerlendirme Gerektiren Durumlar</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Ayak bileğine hiç ağırlık verememe</li>
              <li>✓ Şiddetli şişlik ve geniş morarma (ilk saatler içinde)</li>
              <li>✓ Eklem deformitesi veya anormal pozisyon</li>
              <li>✓ Kemik üzerinde hassasiyet (kırık şüphesi)</li>
              <li>✓ Ayak parmaklarında uyuşma veya karıncalanma</li>
              <li>✓ 7-10 gün konservatif tedaviye rağmen iyileşme olmaması</li>
            </ul>
          </div>
        </section>

        {/* Komplikasyonlar */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Olası Komplikasyonlar</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Kronik İnstabilite</h3>
              <p className="text-gray-700 text-sm mb-2">
                Yetersiz iyileşme veya rehabilitasyon eksikliği sonucu eklem gevşekliği oluşabilir.
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Önleme:</strong> Tam rehabilitasyon programı, propriyoseptif egzersizler
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Tekrarlayan Burkulmalar</h3>
              <p className="text-gray-700 text-sm mb-2">
                İlk burkulma sonrası risk %40-70 artar.
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Önleme:</strong> Ayak bileği güçlendirme, destek kullanımı (taping/brace)
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Kronik Ağrı</h3>
              <p className="text-gray-700 text-sm mb-2">
                Skar dokusu, sinir yaralanması veya kıkırdak hasarı nedeniyle uzun süreli ağrı.
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Tedavi:</strong> Fizik tedavi, enjeksiyonlar, nadir durumlarda cerrahi
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Osteoartrit</h3>
              <p className="text-gray-700 text-sm mb-2">
                Tekrarlayan yaralanmalar uzun dönemde eklem dejenerasyonuna yol açabilir.
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Önleme:</strong> Erken ve etkili tedavi, kilo kontrolü
              </p>
            </div>
          </div>
        </section>

        {/* Önleme */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Burkulmaları Önleme Stratejileri</h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border-2 border-blue-200 rounded-lg p-5 text-center">
              <div className="text-3xl mb-2">👟</div>
              <h3 className="font-semibold text-gray-900 mb-2">Doğru Ayakkabı</h3>
              <p className="text-sm text-gray-700">Spora uygun, ayak bileğine destek veren ayakkabılar</p>
            </div>

            <div className="bg-white border-2 border-green-200 rounded-lg p-5 text-center">
              <div className="text-3xl mb-2">🤸</div>
              <h3 className="font-semibold text-gray-900 mb-2">Isınma</h3>
              <p className="text-sm text-gray-700">Egzersiz öncesi dinamik germe ve ısınma hareketleri</p>
            </div>

            <div className="bg-white border-2 border-purple-200 rounded-lg p-5 text-center">
              <div className="text-3xl mb-2">⚖️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Denge Eğitimi</h3>
              <p className="text-sm text-gray-700">Propriyoseptif egzersizlerle ayak bileği stabilitesi</p>
            </div>
          </div>
        </section>

        {/* Referanslar */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Bilimsel Referanslar</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ol className="space-y-3 text-sm text-gray-700">
              <li>
                <strong>1.</strong> Ferran NA, Maffulli N. "Epidemiology of sprains of the lateral ankle ligament complex" Foot Ankle Clin. 2006;11(3):659-662. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=ankle+sprain+epidemiology" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>2.</strong> Bleakley CM, et al. "Effect of accelerated rehabilitation on function after ankle sprain: randomised controlled trial" BMJ. 2010;340:c1964. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=ankle+sprain+accelerated+rehabilitation+RCT" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>3.</strong> Kerkhoffs GM, et al. "Immobilisation and functional treatment for acute lateral ankle ligament injuries in adults" Cochrane Database Syst Rev. 2012;2:CD003762. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=ankle+sprain+immobilization+functional+treatment+cochrane" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>4.</strong> Hupperets MD, et al. "Effect of unsupervised home based proprioceptive training on recurrences of ankle sprain" BMJ. 2009;339:b2684. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=ankle+sprain+proprioceptive+training+prevention" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>5.</strong> van Rijn RM, et al. "What is the clinical course of acute ankle sprains?" Am J Med. 2008;121(4):324-331. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=ankle+sprain+clinical+course+natural+history" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>6.</strong> Lamb SE, et al. "Mechanical supports for acute, severe ankle sprain" Cochrane Database Syst Rev. 2009;3:CD005958. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=ankle+sprain+mechanical+support+cochrane" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>7.</strong> Ivins D. "Acute ankle sprain: an update" Am Fam Physician. 2006;74(10):1714-1720. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=acute+ankle+sprain+update+management" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>8.</strong> Doherty C, et al. "The incidence and prevalence of ankle sprain injury: a systematic review and meta-analysis" Sports Med. 2014;44(1):123-140. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=ankle+sprain+incidence+prevalence+meta+analysis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>9.</strong> Doherty C, et al. "Treatment and prevention of acute and recurrent ankle sprain: an overview of systematic reviews with meta-analysis" Br J Sports Med. 2017;51(2):113-125. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=ankle+sprain+treatment+prevention+overview" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>10.</strong> Anandacoomarasamy A, Barnsley L. "Long term outcomes of inversion ankle injuries" Br J Sports Med. 2005;39(3):e14. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=ankle+sprain+long+term+outcomes" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
            </ol>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ayak Bileği Ağrınız mı Var?</h2>
          <p className="text-xl mb-6 opacity-90">
            Burkulma sonrası doğru tedavi ve rehabilitasyon için uzman değerlendirmesi alın.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/iletisim" 
              className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition"
            >
              Randevu Al
            </Link>
            <Link 
              href="/hizmetler" 
              className="bg-orange-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-800 transition"
            >
              Hizmetlerimiz
            </Link>
          </div>
        </section>

      </article>
    </>
  );
}
