import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Rotator Kılıf Sendromu Nedir? | Omuz Sıkışma Belirtileri ve Tedavisi',
  description: 'Rotator kılıf sendromu (omuz sıkışması), nedenleri, belirtileri, tanı yöntemleri ve tedavi seçenekleri hakkında kapsamlı rehber.',
  keywords: 'rotator kılıf sendromu, omuz sıkışması, impingement sendromu, rotator cuff, supraspinatus',
  openGraph: {
    title: 'Rotator Kılıf Sendromu: Tanı ve Tedavi',
    description: 'Omuz sıkışma sendromunun nedenleri, belirtileri ve tedavi yaklaşımları.',
    type: 'article',
    locale: 'tr_TR',
    siteName: 'Dr. Özgür Oktay Nar',
  },
};

export default function RotatorKufSendromuPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: 'Rotator Kılıf Sendromu Nedir?',
    description: 'Rotator kılıf sendromunun (omuz sıkışması) tanısı ve tedavisi.',
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
      '@type': 'MedicalCondition',
      name: 'Rotator Kılıf Sendromu',
      alternateName: 'Omuz Sıkışma Sendromu',
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
            Rotator Kılıf Sendromu Nedir?
          </h1>
          <div className="relative w-full h-[400px] mb-8 rounded-2xl overflow-hidden">
            <Image
              src="/images/blog/rotator-kuf-sendromu.jpg"
              alt="Rotator kılıf anatomisi ve sıkışma mekanizması"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Rotator kılıf sendromu (omuz sıkışma sendromu), rotator kılıf tendonlarının ve subakromiyal 
            bursanın akromion ile humerus başı arasında sıkışması sonucu oluşan ağrılı bir durumdur. 
            Omuz ağrısının en yaygın nedenlerinden biridir ve özellikle 40-60 yaş arasında sık görülür.
          </p>
        </header>

        {/* Main Content */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Rotator Kılıf Nedir?</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Rotator kılıf, omuz eklemini çevreleyen ve stabilize eden dört kasın tendonlarından 
            oluşan bir yapıdır. Bu kaslar, hem omuz hareketlerini sağlar hem de humerus başını 
            glenoid kavitede merkezli tutar.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h4 className="font-semibold text-lg mb-3">Rotator Kılıfı Oluşturan Kaslar (SITS):</h4>
            <ul className="space-y-2">
              <li>• <strong>Supraspinatus:</strong> Abduksiyonun ilk 15°'si, en sık yaralanan</li>
              <li>• <strong>Infraspinatus:</strong> Eksternal rotasyon</li>
              <li>• <strong>Teres minor:</strong> Eksternal rotasyon ve adduksiyon</li>
              <li>• <strong>Subscapularis:</strong> İnternal rotasyon</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Subakromiyal Sıkışma Nedir?</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Subakromiyal sıkışma (impingement), kol kaldırıldığında rotator kılıf tendonlarının ve 
            subakromiyal bursanın akromiyon alt yüzeyine sürtünmesi ve sıkışmasıdır. Bu kronik travma, 
            iltihap, tendinit ve nihayetinde tendon yırtığına yol açabilir.
          </p>

          <div className="bg-purple-50 p-6 rounded-lg mb-8">
            <h4 className="font-semibold text-lg mb-3">Subakromiyal Boşluk:</h4>
            <p className="text-gray-700 mb-3">
              Normalde akromion ile humerus başı arasında 7-14 mm boşluk vardır. Bu boşlukta:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Supraspinatus tendonu</li>
              <li>• Subakromiyal bursa</li>
              <li>• Biseps (uzun baş) tendonu</li>
              <li>• Korakoakromiyal ligament</li>
            </ul>
            <p className="text-gray-700 mt-3">
              Boşluk daraldığında (<7 mm) sıkışma oluşur.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Nedenler ve Risk Faktörleri</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Rotator kılıf sendromu, intrinsik (internal) ve ekstrinsik (dış) faktörlerin kombinasyonu 
            ile gelişir.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h4 className="font-semibold text-lg mb-3">Ekstrinsik Faktörler (Anatomik/Mekanik):</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Akromiyon morfolojisi:</strong> Tip II (kancalı) veya Tip III (orak şekli)</li>
                <li>• <strong>AC eklem osteofitleri:</strong> Kemik mahmuzları</li>
                <li>• <strong>Os akromiyal:</strong> Akromionun kaynaşmaması</li>
                <li>• <strong>Korakoakromiyal ligament kalınlaşması</strong></li>
                <li>• <strong>Skapular diskinezi:</strong> Kürek kemiği hareketinin bozulması</li>
                <li>• <strong>Postür bozukluğu:</strong> Öne eğik omuzlar</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">İntrinsik Faktörler (Tendon Patolojisi):</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Yaşlanma ve dejenerasyon</li>
                <li>• Vaskülarite azalması (hipoksi zone)</li>
                <li>• Aşırı kullanım (overhead sporlar)</li>
                <li>• Genetik yatkınlık</li>
                <li>• Sigara (tendon iyileşmesini bozar)</li>
                <li>• Diyabet ve metabolik hastalıklar</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h4 className="font-semibold text-lg mb-3">Yüksek Riskli Aktiviteler:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Sporlar:</strong> Yüzme, tenis, beyzbol, voleybol, kaya tırmanışı</li>
              <li>• <strong>Meslekler:</strong> Boyacı, marangoz, taşımacı, inşaat işçisi</li>
              <li>• <strong>Günlük aktiviteler:</strong> Tekrarlayan overhead hareketler (raf düzenleme, asma)</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Klinik Sınıflandırma (Neer Evreleri)</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Neer, subakromiyal sıkışmayı üç evrede tanımlamıştır. Bu sınıflandırma, tedavi 
            yaklaşımını belirler.
          </p>

          <div className="space-y-6 mb-8">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-lg mb-3">Evre I (Ödem ve Hemoraji):</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Yaş:</strong> Genellikle <25 yaş</li>
                <li>• <strong>Patoloji:</strong> Reversibl ödem ve bursa iltihabı</li>
                <li>• <strong>Belirtiler:</strong> Aktivite ile ağrı, gece ağrısı yok</li>
                <li>• <strong>Prognoz:</strong> Konservatif tedavi ile tam iyileşme</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-semibold text-lg mb-3">Evre II (Fibrozis ve Tendinit):</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Yaş:</strong> 25-40 yaş</li>
                <li>• <strong>Patoloji:</strong> Kronik bursit, tendon fibrozisi</li>
                <li>• <strong>Belirtiler:</strong> Kronik ağrı, gece ağrıları, hareket kısıtlılığı</li>
                <li>• <strong>Prognoz:</strong> Konservatif tedavi veya cerrahi dekompresyon</li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h4 className="font-semibold text-lg mb-3">Evre III (Tendon Yırtığı ve Kemik Değişiklikleri):</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Yaş:</strong> >40 yaş</li>
                <li>• <strong>Patoloji:</strong> Parsiyel veya tam kat tendon yırtığı, kemik spurs</li>
                <li>• <strong>Belirtiler:</strong> Şiddetli ağrı, belirgin güçsüzlük, fonksiyon kaybı</li>
                <li>• <strong>Prognoz:</strong> Cerrahi tedavi (dekompresyon + tendon tamiri)</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Belirtiler</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Rotator kılıf sendromunun belirtileri yavaş başlar ve zamanla kötüleşir. Karakteristik 
            "ağrılı ark" bulgusu tipiktir.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h4 className="font-semibold text-lg mb-3">Tipik Belirtiler:</h4>
            <ul className="space-y-2">
              <li>• <strong>Ağrılı ark işareti:</strong> Kol 60-120° abduksiyonda iken ağrı (yukarı ve aşağı inerken)</li>
              <li>• Omuz ön ve yan tarafında derin ağrı</li>
              <li>• Overhead aktivitelerle ağrının artması (raftan eşya alma)</li>
              <li>• Gece ağrıları (özellikle yan yatarken)</li>
              <li>• Kolda hissedilen radyan ağrı (deltoid bölgesi)</li>
              <li>• Zayıflık hissi (özellikle abduksiyon ve eksternal rotasyonda)</li>
              <li>• Sabah sertliği</li>
              <li>• Omuzda çıtırtı veya kilitlenme hissi</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Tanı Yöntemleri</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Tanı, anamnez, fizik muayene ve görüntüleme yöntemlerinin kombinasyonu ile konur.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Fizik Muayene Testleri</h3>

          <div className="space-y-4 mb-8">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Sıkışma Testleri:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Neer testi:</strong> Kol internal rotasyonda iken pasif fleksiyonda ağrı</li>
                <li>• <strong>Hawkins-Kennedy testi:</strong> 90° fleksiyon + internal rotasyonda ağrı</li>
                <li>• <strong>Painful arc testi:</strong> 60-120° abduksiyonda ağrı</li>
              </ul>
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Rotator Kılıf Güç Testleri:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Empty can (Jobe) testi:</strong> Supraspinatus zayıflığı</li>
                <li>• <strong>Eksternal rotasyon direnci:</strong> Infraspinatus/teres minor testi</li>
                <li>• <strong>Lift-off/belly-press testi:</strong> Subscapularis testi</li>
                <li>• <strong>Drop arm testi:</strong> Ciddi supraspinatus yırtığı</li>
              </ul>
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">İnjeksiyon Testi:</h4>
              <p className="text-gray-700 mb-2">
                Subakromiyal lokal anestezik (lidokain) enjeksiyonu sonrası ağrının azalması, 
                sıkışma tanısını doğrular ve cerrahi başarı şansını gösterir.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Görüntüleme</h3>

          <div className="space-y-6 mb-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">X-Ray (Radyografi):</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Görüntüler:</strong> AP, outlet view (supraspinatus outlet), aksiller</li>
                <li>• <strong>Bulgular:</strong> Akromiyon morfolojisi, AC eklem osteofitleri, akromihumeral mesafe (<7mm), supraspinatus çıkış darlığı</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Ultrasonografi (USG):</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Dinamik değerlendirme</li>
                <li>• Tendon kalınlığı, ekojenite değişiklikleri</li>
                <li>• Bursa sıvısı artışı</li>
                <li>• Parsiyel veya tam kat yırtık tespiti</li>
                <li>• Maliyet-etkin, radyasyon yok</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">MRI (Manyetik Rezonans):</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Gold standard</strong> yumuşak doku görüntülemesi</li>
                <li>• Tendon yırtığı boyutu ve lokalizasyonu</li>
                <li>• Kas atrofisi ve yağlı dejenerasyon (Goutallier sınıflaması)</li>
                <li>• Labral patoloji, AC eklem, kemik ödemi</li>
                <li>• Cerrahi planlama için kritik</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Tedavi Seçenekleri</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Tedavi yaklaşımı evreye, hasta yaşına ve aktivite seviyesine göre belirlenir. İlk tercih 
            genellikle konservatif tedavidir.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Konservatif Tedavi (Evre I-II)</h3>

          <div className="space-y-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">1. Aktivite Modifikasyonu ve İstirahat:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Overhead aktivitelerden kaçınma</li>
                <li>• Ağrıyı artıran hareketleri sınırlama</li>
                <li>• Göreceli istirahat (tam immobilizasyon değil)</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">2. Medikal Tedavi:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>NSAİİ:</strong> İbuprofen, naproksen (2-4 hafta)</li>
                <li>• <strong>Analjezikler:</strong> Parasetamol (ağrı kontrolü)</li>
                <li>• <strong>Buz uygulaması:</strong> Akut fazda 15-20 dk, günde 3-4 kez</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">3. Fizik Tedavi ve Egzersiz (6-12 Hafta):</h4>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Faz 1 (Ağrı azaltma):</strong>
                  <p className="text-sm mt-1">- Ultrason, TENS, lazer tedavisi</p>
                  <p className="text-sm">- Pasif ve aktif-assistif ROM egzersizleri</p>
                </li>
                <li>
                  <strong>Faz 2 (Hareket kazanımı):</strong>
                  <p className="text-sm mt-1">- Pendulum, pulley, wand egzersizleri</p>
                  <p className="text-sm">- Skapular stabilizasyon</p>
                </li>
                <li>
                  <strong>Faz 3 (Güçlendirme):</strong>
                  <p className="text-sm mt-1">- Rotator kılıf güçlendirme (elastik bant, ağırlık)</p>
                  <p className="text-sm">- Eksentrik egzersizler</p>
                  <p className="text-sm">- Postür eğitimi</p>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">4. Subakromiyal Kortikosteroid Enjeksiyonu:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Endikasyon:</strong> Konservatif tedaviye 4-6 hafta yanıt yok</li>
                <li>• <strong>Mekanizma:</strong> Güçlü anti-inflamatuar etki</li>
                <li>• <strong>Limit:</strong> Yılda max 3 enjeksiyon (tendon zayıflaması riski)</li>
                <li>• <strong>Kombinasyon:</strong> Kortikosteroid + lokal anestezik</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Cerrahi Tedavi</h3>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <h4 className="font-semibold text-lg mb-3">Cerrahi Endikasyonları:</h4>
            <ul className="space-y-2">
              <li>• Konservatif tedaviye 3-6 ay yanıt yok</li>
              <li>• Evre III hastalık (tam kat yırtık)</li>
              <li>• Ciddi fonksiyon kaybı ve güçsüzlük</li>
              <li>• Genç, aktif hastalar</li>
              <li>• Akut travmatik yırtıklar</li>
            </ul>
          </div>

          <div className="space-y-6 mb-8">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Subakromiyal Dekompresyon (Acromioplasti):</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Yöntem:</strong> Artroskopik (kapalı) veya açık</li>
                <li>• <strong>Prosedür:</strong> Akromionun alt yüzeyinden 5-10mm kemik rezeksiyonu, korakoakromiyal ligament kesilmesi, bursa eksizyonu</li>
                <li>• <strong>Hedef:</strong> Subakromiyal boşluğu genişletmek</li>
                <li>• <strong>Süre:</strong> 30-60 dk</li>
                <li>• <strong>Başarı:</strong> %80-90 hastada ağrı azalması</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Rotator Kılıf Tamiri:</h4>
              <p className="text-gray-700 mb-2">
                Eğer tam kat yırtık varsa, dekompresyona ek olarak tendon tamiri yapılır:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Tendonun kemik yüzeyine ankraj (çapa) ile tespit edilmesi</li>
                <li>• Yırtık kenarlarının sütürasyonu</li>
                <li>• 4-6 hafta immobilizasyon (sling)</li>
                <li>• 6-12 ay tam iyileşme</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Rehabilitasyon ve İyileşme</h2>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h4 className="font-semibold text-lg mb-3">Konservatif Tedavi Sonrası:</h4>
            <ul className="space-y-2">
              <li>• <strong>Hafif vakalar:</strong> 4-6 hafta</li>
              <li>• <strong>Orta vakalar:</strong> 8-12 hafta</li>
              <li>• <strong>Başarı oranı:</strong> %70-80</li>
              <li>• <strong>Anahtar:</strong> Düzenli egzersiz ve aktivite modifikasyonu</li>
            </ul>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
            <h4 className="font-semibold text-lg mb-3">Cerrahi Sonrası (Dekompresyon):</h4>
            <ul className="space-y-2">
              <li>• <strong>Taburcu:</strong> Aynı gün (artroskopi)</li>
              <li>• <strong>Sling:</strong> 1-2 hafta (konfor için)</li>
              <li>• <strong>Fizik tedavi:</strong> 2. haftadan itibaren aktif egzersiz</li>
              <li>• <strong>Spora dönüş:</strong> 3-6 ay</li>
              <li>• <strong>Tam iyileşme:</strong> 6-12 ay</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Önleme Stratejileri</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h4 className="font-semibold text-lg mb-3">Koruyucu Yaklaşımlar:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Düzenli omuz güçlendirme egzersizleri (özellikle rotator kılıf)</li>
              <li>• Uygun ısınma ve soğuma rutinleri</li>
              <li>• Ergonomik çalışma ortamı (masa, sandalye yüksekliği)</li>
              <li>• Postür farkındalığı (öne eğik omuzlardan kaçınma)</li>
              <li>• Overhead aktiviteleri sınırlama veya molalarla yapma</li>
              <li>• Erken belirtilerde müdahale (ağrıyı görmezden gelme)</li>
              <li>• Kilo kontrolü</li>
              <li>• Sigara bırakma (tendon iyileşmesini olumsuz etkiler)</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Prognoz</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Rotator kılıf sendromunun prognozu genellikle iyidir. Erken tanı ve uygun tedavi ile 
            hastaların çoğu tam iyileşme gösterir.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h4 className="font-semibold text-lg mb-3">Başarı Oranları:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Evre I:</strong> %90-95 konservatif tedavi ile iyileşme</li>
              <li>• <strong>Evre II:</strong> %70-80 konservatif, %85-90 cerrahi ile iyileşme</li>
              <li>• <strong>Evre III:</strong> %80-85 cerrahi ile iyileşme (yırtık boyutuna bağlı)</li>
              <li>• <strong>Kötü prognostik faktörler:</strong> >3 ay gecikmiş tedavi, sigara, diyabet, ileri yaş, büyük yırtık</li>
            </ul>
          </div>
        </section>

        {/* References */}
        <section className="mb-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Kaynaklar</h2>
          <ol className="space-y-2 text-sm text-gray-700">
            <li>1. Neer CS 2nd. "Anterior acromioplasty for the chronic impingement syndrome in the shoulder." J Bone Joint Surg Am. 1972. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=Neer+impingement+syndrome" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>2. Bigliani LU, Morrison DS, April EW. "The morphology of the acromion and its relationship to rotator cuff tears." Orthop Trans. 1986. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=acromion+morphology+rotator+cuff" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>3. Michener LA, et al. "Anatomical and biomechanical mechanisms of subacromial impingement syndrome." Clin Biomech. 2003. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=subacromial+impingement+biomechanics" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>4. Lewis JS. "Rotator cuff tendinopathy/subacromial impingement syndrome: is it time for a new method of assessment?" Br J Sports Med. 2009. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=rotator+cuff+assessment+methods" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>5. Papadonikolakis A, et al. "Published evidence relevant to the diagnosis of impingement syndrome of the shoulder." J Bone Joint Surg Am. 2011. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=impingement+syndrome+diagnosis+evidence" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>6. Ketola S, et al. "Effectiveness of arthroscopic acromioplasty for subacromial impingement." BMJ. 2009. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=acromioplasty+effectiveness" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>7. Buchbinder R, et al. "Short course prednisolone for adhesive capsulitis." BMJ. 2004. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=corticosteroid+injection+shoulder+impingement" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>8. Hanratty CE, et al. "The effectiveness of physiotherapy exercises in subacromial impingement syndrome: a systematic review and meta-analysis." Semin Arthritis Rheum. 2012. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=physiotherapy+subacromial+impingement" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>9. Kuhn JE. "Exercise in the treatment of rotator cuff impingement: a systematic review and a synthesized evidence-based rehabilitation protocol." J Shoulder Elbow Surg. 2009. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=rotator+cuff+exercise+protocol" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>10. Diercks R, et al. "Guideline for diagnosis and treatment of subacromial pain syndrome." Acta Orthop. 2014. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=subacromial+pain+syndrome+guideline" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
          </ol>
        </section>

        {/* CTA Section */}
        <section className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">Omuz Sıkışması mı Var?</h2>
          <p className="text-lg mb-6 text-blue-50">
            Rotator kılıf sendromu tanı ve tedavisi için uzman muayenesi randevusu alabilirsiniz.
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
