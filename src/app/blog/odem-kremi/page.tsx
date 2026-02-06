import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

// ========================================
// 1. METADATA & SEO
// ========================================
export const metadata: Metadata = {
  title: 'Ödem Kremi: Etkinliği, İçeriği ve Doğru Kullanım | Dr. Özgür Oktay Nar',
  description: 'Ödem (şişlik) kremleri gerçekten işe yarar mı? İçerikleri, etkinlikleri ve ortopedik yaralanmalarda kullanımı hakkında uzman görüşü.',
  keywords: 'ödem kremi, anti-ödem krem, şişlik kremi, travma kremi, topikal antienflamatuar, ortopedi',
  openGraph: {
    title: 'Ödem Kremi: Etkinliği ve Doğru Kullanım',
    description: 'Ödem kremlerinin bilimsel değerlendirmesi',
    type: 'article',
    locale: 'tr_TR',
    siteName: 'Dr. Özgür Oktay Nar - Ortopedi Uzmanı',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ödem Kremi: Etkinliği ve Doğru Kullanım',
    description: 'Topikal ödem tedavisi hakkında bilgi',
  }
};

// ========================================
// 2. STRUCTURED DATA (Schema.org)
// ========================================
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  headline: 'Ödem Kremi: Etkinliği, İçeriği ve Doğru Kullanım',
  description: 'Ödem kremlerinin içeriği ve etkinliği hakkında bilimsel bilgi',
  author: {
    '@type': 'Physician',
    name: 'Dr. Özgür Oktay Nar',
    medicalSpecialty: 'Ortopedi ve Travmatoloji'
  },
  datePublished: '2026-02-06',
  dateModified: '2026-02-06',
  about: {
    '@type': 'HealthTopicContent',
    name: 'Topikal Ödem Tedavisi'
  }
};

// ========================================
// 3. PAGE COMPONENT
// ========================================
export default function OdemKremiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-pink-50 to-rose-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ödem Kremi: Etkinliği ve Doğru Kullanım
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Travma ve yaralanma sonrası şişlik için ödem kremleri gerçekten işe yarar mı? Bilimsel kanıtlar ve doğru kullanım rehberi
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span>👨‍⚕️ Dr. Özgür Oktay Nar</span>
            <span>📅 6 Şubat 2026</span>
            <span>⏱️ 6 dakika okuma</span>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        
        {/* Giriş */}
        <section className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            <strong>Ödem (şişlik)</strong>, doku içinde veya eklem boşluğunda sıvı birikimi sonucu oluşan bir durumdur. Travma, burkulma, çarpma veya cerrahi sonrası vücudun doğal inflamatuar yanıtının bir parçasıdır. Piyasada birçok <strong>"ödem kremi"</strong> veya <strong>"anti-ödem jel"</strong> bulunmaktadır, ancak bunların etkinliği konusunda bilimsel veriler sınırlıdır.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Bu yazıda, ödem kremlerinin içeriklerini, topikal (cilt yoluyla) uygulamanın fizyolojik etkilerini ve ortopedik yaralanmalarda gerçekten fayda sağlayıp sağlamadıklarını bilimsel veriler ışığında ele alacağız.
          </p>
        </section>

        {/* Ödem Nedir */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ödem Nasıl Oluşur?</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Fizyolojik Mekanizma</h3>
            <div className="space-y-3 text-gray-700">
              <div>
                <strong>1. Travma/Yaralanma:</strong>
                <p className="text-sm">Doku hasarı → inflamatuar yanıt (histamin, bradikinin salınımı)</p>
              </div>
              <div>
                <strong>2. Vasküler Geçirgenlik Artışı:</strong>
                <p className="text-sm">Kan damarları genişler, sıvı dokuya sızar</p>
              </div>
              <div>
                <strong>3. Lenfatik Drenaj Yetersizliği:</strong>
                <p className="text-sm">Lenf sistemi fazla sıvıyı temizleyemez → ödem birikir</p>
              </div>
              <div>
                <strong>4. İyileşme Süreci:</strong>
                <p className="text-sm">48-72 saat sonra ödem azalmaya başlar (fizyolojik)</p>
              </div>
            </div>
          </div>
        </section>

        {/* İçerikler */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ödem Kremlerinin İçeriği</h2>
          
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🌿 Bitkisel Ekstraklarlar</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <strong>Arnika (Arnica montana):</strong>
                  <p>• En yaygın bileşen<br />• Anti-inflamatuar özellik<br />• Kanıt düzeyi: Düşük-orta</p>
                </div>
                <div>
                  <strong>At kestanesi (Aesculus hippocastanum):</strong>
                  <p>• Ven tonusunu artırır<br />• Ödem azaltıcı<br />• Venöz yetersizlikte daha etkili</p>
                </div>
                <div>
                  <strong>Sarı kantaron (Hypericum perforatum):</strong>
                  <p>• Hafif antienflamatuar<br />• Yara iyileştirici<br />• Kanıt düzeyi: Zayıf</p>
                </div>
                <div>
                  <strong>Bromelain (ananas ekstraktı):</strong>
                  <p>• Proteolitik enzim<br />• Ödem azaltıcı (oral formda daha etkili)<br />• Topikal etkinlik sınırlı</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">💊 Sentetik/Farmakolojik Bileşenler</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <strong>Heparin/Heparinoidler:</strong>
                  <p>• Antikoagülan etki<br />• Ekimoz (morarma) azaltıcı<br />• Ödem üzerine dolaylı etki</p>
                </div>
                <div>
                  <strong>NSAİİ'ler (diklofenak, ibuprofen):</strong>
                  <p>• Prostaglandin sentezini bloke eder<br />• Anti-inflamatuar<br />• <strong>En güçlü kanıt</strong></p>
                </div>
                <div>
                  <strong>Mentol/Kamfor:</strong>
                  <p>• Soğutma hissi<br />• Ağrı algısını azaltır<br />• Ödem üzerine direkt etki yok</p>
                </div>
                <div>
                  <strong>Troxerutin:</strong>
                  <p>• Kapiller geçirgenliği azaltır<br />• Venöz ödeme etkili<br />• Travmatik ödeme sınırlı</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bilimsel Kanıtlar */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Bilimsel Kanıtlar: Gerçekten İşe Yarar mı?</h2>
          
          <div className="bg-yellow-50 border-2 border-yellow-500 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-yellow-900 mb-3">⚖️ Kanıt Düzeyine Göre Etkinlik</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-green-700 mb-2">✅ İYİ KANIT: Topikal NSAİİ'ler</h4>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>Diklofenak jel, ibuprofen krem:</strong> Akut kas-iskelet sistemi yaralanmalarında (burkulma, tendinit) ağrı ve ödem azaltmasında <strong>kanıtlanmış etkinlik</strong>.
                </p>
                <p className="text-gray-700 text-sm italic">
                  Cochrane meta-analizi: Topikal NSAİİ'ler, akut yaralanmalarda plaseboya kıyasla %50 daha etkili.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-amber-700 mb-2">⚠️ SINIRLI KANIT: Arnika ve At Kestanesi</h4>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>Arnika:</strong> Küçük çalışmalarda hafif fayda, ancak plasebo etkisi net ayrılamıyor. Venöz yetersizlikte daha çok kanıt var.
                </p>
                <p className="text-gray-700 text-sm italic">
                  Cochrane incelemesi: Arnika'nın travmatik ödeme etkisi için yetersiz kanıt.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-red-700 mb-2">❌ ZAYIF KANIT: Diğer Bitkisel Ekstraklarlar</h4>
                <p className="text-gray-700 text-sm">
                  Sarı kantaron, bromelain (topikal), troxerutin gibi bileşenlerin akut travmatik ödeme etkinliği için yeterli bilimsel kanıt yoktur. Oral formlarda bazı etkiler görülse de, cilt yoluyla emilim sınırlıdır.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6">
            <h3 className="text-xl font-semibold text-red-900 mb-3">🚨 Önemli Gerçek: Topikal Emilim Sorunu</h3>
            <p className="text-gray-700 mb-3">
              Cildin doğal bariyer fonksiyonu, birçok molekülün derin dokulara (kas, eklem) ulaşmasını engeller. Büyük moleküller (örn. enzimler, proteinler) ciltten geçemez.
            </p>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• <strong>Molekül ağırlığı {"<"} 500 Dalton:</strong> Emilim mümkün (NSAİİ'ler)</li>
              <li>• <strong>Molekül ağırlığı {">"} 500 Dalton:</strong> Emilim çok sınırlı (çoğu bitkisel ekstrakt)</li>
              <li>• <strong>Lipofilik bileşenler:</strong> Yağda çözünenler daha iyi geçer</li>
            </ul>
          </div>
        </section>

        {/* Doğru Kullanım */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ödem Kremlerini Doğru Kullanma</h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">📋 Kullanım Kılavuzu</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <strong className="text-gray-900">Yaralanma Sonrası İlk 48 Saat:</strong>
                  <p className="text-gray-700 text-sm">Topikal NSAİİ jel (diklofenak) günde 3-4 kez uygulayın. Hafif masaj ile sürün.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <strong className="text-gray-900">Açık Yara Varsa:</strong>
                  <p className="text-gray-700 text-sm">Krem KULLANMAYIN. Enfeksiyon riski artar.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <strong className="text-gray-900">Kompresyon ve Elevasyonla Kombine Edin:</strong>
                  <p className="text-gray-700 text-sm">Krem tek başına yeterli değil → RICE protokolü (Rest, Ice, Compression, Elevation)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <strong className="text-gray-900">Süre Sınırı:</strong>
                  <p className="text-gray-700 text-sm">7-10 günden uzun kullanmayın. Ödem devam ederse doktora başvurun.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border-2 border-red-500 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-red-900 mb-3">⛔ Kullanmamanız Gereken Durumlar</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✗ Açık yara, deri bütünlüğü bozukluğu</li>
              <li>✗ Alerjik reaksiyon öyküsü (NSAİİ'lere karşı)</li>
              <li>✗ Hamilelik (özellikle 3. trimester - topikal NSAİİ)</li>
              <li>✗ Enfeksiyon şüphesi (ısı artışı, kızarıklık, ateş)</li>
              <li>✗ Kronik venöz yetmezlik (bu durumda farklı tedavi gerekir)</li>
            </ul>
          </div>
        </section>

        {/* Alternatifler */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ödem İçin Daha Etkili Alternatifler</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🧊 RICE Protokolü</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><strong>Rest (İstirahat):</strong> Yaralı bölgeyi kullanmayın</li>
                <li><strong>Ice (Buz):</strong> İlk 48 saat, 15-20 dk/seans</li>
                <li><strong>Compression (Sıkıştırma):</strong> Elastik bandaj</li>
                <li><strong>Elevation (Yükseltme):</strong> Kalp seviyesinin üstünde tutun</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">💊 Oral NSAİİ'ler</h3>
              <p className="text-gray-700 text-sm mb-2">
                Topikal formlardan daha güçlü sistemik etki:
              </p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• İbuprofen 400-600 mg, günde 3 kez</li>
                <li>• Naproxen 500 mg, günde 2 kez</li>
                <li>• Diklofenak 50 mg, günde 2-3 kez</li>
              </ul>
              <p className="text-gray-700 text-xs mt-2 italic">⚠️ Mide koruyucu ile kullanılmalı</p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🏥 Fizik Tedavi</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Lenf drenajı masajı:</strong> Uzman tarafından</li>
                <li>• <strong>Elektroterapi:</strong> TENS, ultrason</li>
                <li>• <strong>Kinesio taping:</strong> Lenf akışını destekler</li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">💉 İleri Tedaviler</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Kortikosteroid enjeksiyonu:</strong> Şiddetli inflamasyonda</li>
                <li>• <strong>Aspirasyon:</strong> Eklem efüzyonu varsa sıvı boşaltma</li>
                <li>• <strong>PRP:</strong> Kronik ödeme deneysel</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sonuç */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Sonuç: Ödem Kremleri Kullanılmalı mı?</h2>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>✅ Kullanılabilir:</strong> Topikal NSAİİ içeren kremler (diklofenak, ibuprofen) akut yaralanmalarda hafif-orta şiddette faydalıdır ve RICE protokolüne ek olarak kullanılabilir.
              </p>
              <p>
                <strong>⚠️ Sınırlı Fayda:</strong> Bitkisel ekstraktlı kremler (arnika, at kestanesi) zararsız olabilir ancak güçlü kanıt yoktur. Plasebo etkisi göz ardı edilmemelidir.
              </p>
              <p>
                <strong>❌ Tek Başına Yeterli Değil:</strong> Ödem kremleri, uygun immobilizasyon, kompresyon ve fizik tedavi olmadan sınırlı etki gösterir.
              </p>
              <p className="font-semibold text-green-800">
                <strong>Ana Mesaj:</strong> Ödem tedavisinde en etkili yaklaşım, RICE + oral NSAİİ + fizik tedavi kombinasyonudur. Kremler destekleyici rol oynar.
              </p>
            </div>
          </div>
        </section>

        {/* Referanslar */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Bilimsel Referanslar</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ol className="space-y-3 text-sm text-gray-700">
              <li>
                <strong>1.</strong> Massey T, et al. "Topical NSAIDs for acute musculoskeletal pain in adults" Cochrane Database Syst Rev. 2016;4:CD007402. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=topical+NSAID+acute+musculoskeletal+pain+cochrane" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>2.</strong> Pittler MH, Ernst E. "Horse chestnut seed extract for chronic venous insufficiency" Cochrane Database Syst Rev. 2012;11:CD003230. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=horse+chestnut+chronic+venous+insufficiency+cochrane" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>3.</strong> Pumpa KL, et al. "The effects of topical Arnica on performance, pain and muscle damage after intense eccentric exercise" Eur J Sport Sci. 2014;14(3):294-300. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=topical+arnica+muscle+damage+exercise" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>4.</strong> Iannitti T, et al. "Effectiveness and safety of Arnica montana in post-surgical setting, pain and inflammation" Am J Ther. 2016;23(1):e184-e197. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=arnica+montana+post+surgical+pain+inflammation" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>5.</strong> Predel HG, et al. "Efficacy of a comfrey root extract ointment in comparison to a diclofenac gel in the treatment of ankle distortions" Arzneimittelforschung. 2005;55(11):665-674. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=comfrey+diclofenac+ankle+distortion" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>6.</strong> Derry S, et al. "Topical NSAIDs for chronic musculoskeletal pain in adults" Cochrane Database Syst Rev. 2016;4:CD007400. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=topical+NSAID+chronic+musculoskeletal+pain+cochrane" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>7.</strong> Brien S, et al. "Bromelain as a treatment for osteoarthritis: a review of clinical studies" Evid Based Complement Alternat Med. 2004;1(3):251-257. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=bromelain+osteoarthritis+clinical+studies" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>8.</strong> Tugwell PS, et al. "Assessing the efficacy of topical treatments: guidelines for reviewers" J Rheumatol. 2004;31(9):1841-1844. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=topical+treatment+efficacy+guidelines" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>9.</strong> Baumann LS. "Less-known botanical cosmeceuticals" Dermatol Ther. 2007;20(5):330-342. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=botanical+cosmeceuticals+topical" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
              <li>
                <strong>10.</strong> Rosenbloom M, et al. "Treatment of edema" Am Fam Physician. 2012;85(4):393-399. 
                {' '}<a href="https://pubmed.ncbi.nlm.nih.gov/?term=treatment+of+edema+family+physician" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a>
              </li>
            </ol>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ödem ve Şişlik mi Var?</h2>
          <p className="text-xl mb-6 opacity-90">
            Uzun süreli veya şiddetli ödem için doğru tanı ve tedavi planı oluşturalım.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/iletisim" 
              className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition"
            >
              Randevu Al
            </Link>
            <Link 
              href="/hizmetler" 
              className="bg-pink-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-800 transition"
            >
              Tedavi Seçenekleri
            </Link>
          </div>
        </section>

      </article>
    </>
  );
}
