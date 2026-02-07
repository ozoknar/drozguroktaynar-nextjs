import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Omuz Protezi Nedir? | Total Omuz Artroplastisi Ameliyatı ve İyileşme Süreci',
  description: 'Omuz protezi cerrahisi (total shoulder artroplasti), endikasyonları, ameliyat prosedürü, ters omuz protezi ve rehabilitasyon hakkında kapsamlı bilgi.',
  keywords: 'omuz protezi, shoulder artroplasti, ters omuz protezi, omuz cerrahisi, omuz ameliyatı',
  openGraph: {
    title: 'Omuz Protezi: Artroplasti Cerrahisi ve İyileşme',
    description: 'Omuz protezi ameliyatı, tipleri, sonuçları ve rehabilitasyon süreci.',
    type: 'article',
    locale: 'tr_TR',
    siteName: 'Dr. Özgür Oktay Nar',
  },
};

export default function OmuzProteziPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: 'Omuz Protezi Nedir?',
    description: 'Total omuz artroplastisi cerrahisi, endikasyonları ve sonuçları.',
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
      name: 'Omuz Protezi',
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
            Omuz Protezi Nedir?
          </h1>
          <div className="relative w-full h-[400px] mb-8 rounded-2xl overflow-hidden">
            <Image
              src="/images/blog/omuz-protezi.jpg"
              alt="Omuz protezi cerrahisi ve implant tipleri"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Omuz protezi (total omuz artroplastisi), hasarlı veya hastalanmış omuz ekleminin yapay 
            implantlarla değiştirildiği cerrahi bir prosedürdür. İleri evre omuz artriti, rotator kılıf 
            yırtığı artropatisi veya kompleks kırıklarda ağrıyı azaltır ve fonksiyonu iyileştirir.
          </p>
        </header>

        {/* Main Content */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Omuz Protezi Tipleri</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Omuz protezi, hastanın eklem hasarı türüne ve rotator kılıf durumuna göre farklı 
            konfigürasyonlarda uygulanabilir.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-lg mb-3">1. Anatomik (Konvansiyonel) Total Omuz Protezi:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Humerus başı: Metal baş komponenti</li>
                <li>• Glenoid: Plastik (polietilen) soket</li>
                <li>• <strong>Endikasyon:</strong> İntakt rotator kılıf ile omuz artriti</li>
                <li>• <strong>Avantaj:</strong> Normal anatomiyi taklit eder</li>
                <li>• <strong>Dezavantaj:</strong> Rotator kılıf yırtığında başarısız</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-lg mb-3">2. Ters (Reverse) Omuz Protezi:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Glenoid: Metal küre (glenosphere)</li>
                <li>• Humerus: Plastik soket</li>
                <li>• <strong>Endikasyon:</strong> Rotator kılıf yırtığı artropatisi</li>
                <li>• <strong>Avantaj:</strong> Rotator kılıf olmadan çalışır, deltoid gücünü kullanır</li>
                <li>• <strong>Dezavantaj:</strong> Rotasyon kısıtlılığı, yüksek komplikasyon riski</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">3. Hemiartroplasti (Yarım Protez):</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Sadece humerus başı değiştirilir</li>
                <li>• Glenoid dokusu korunur</li>
                <li>• <strong>Endikasyon:</strong> Humerus başı kırıkları, sağlam glenoid</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">4. Resurfacing Artroplasti:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Humerus başı sadece kaplama ile değiştirilir</li>
                <li>• Kemik stoğu maksimum korunur</li>
                <li>• <strong>Endikasyon:</strong> Genç, aktif hastalar</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Endikasyonlar</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Omuz protezi, konservatif tedavilere yanıt vermeyen ileri evre omuz patolojilerinde 
            endikedir.
          </p>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <h4 className="font-semibold text-lg mb-3">Primer Endikasyonlar:</h4>
            <ul className="space-y-2">
              <li>• <strong>İleri evre osteoartrit:</strong> Eklem kıkırdağının aşınması</li>
              <li>• <strong>Romatoid artrit:</strong> İnflamatuar eklem hastalığı</li>
              <li>• <strong>Rotator kılıf yırtığı artropatisi:</strong> Kronik yırtık + artrit</li>
              <li>• <strong>Avasküler nekroz:</strong> Humerus başı kan akımının kesilmesi</li>
              <li>• <strong>Kompleks proksimal humerus kırıkları:</strong> Özellikle yaşlılarda</li>
              <li>• <strong>Post-travmatik artrit:</strong> Eski kırık veya dislokasyon sonrası</li>
              <li>• <strong>Başarısız önceki omuz cerrahisi:</strong> Revizyon vakalar</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h4 className="font-semibold text-lg mb-3">Klinik Kriterler:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Şiddetli, sürekli omuz ağrısı (6+ ay)</li>
              <li>• Gece ağrıları ve uyku bozukluğu</li>
              <li>• Belirgin hareket kısıtlılığı</li>
              <li>• Günlük aktivitelerde ciddi zorluk</li>
              <li>• Konservatif tedaviye yanıtsızlık (fizik tedavi, enjeksiyonlar, ilaçlar)</li>
              <li>• Radyolojik olarak ileri evre artrit</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Ameliyat Prosedürü</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Omuz protezi ameliyatı genellikle 2-3 saat sürer ve genel anestezi altında yapılır.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h4 className="font-semibold text-lg mb-3">Cerrahi Adımlar (Anatomik Protez):</h4>
            <ul className="space-y-2">
              <li>• <strong>1. Anestezi:</strong> Genel anestezi + interskalen blok (ağrı kontrolü)</li>
              <li>• <strong>2. İnsizyon:</strong> Deltopektoral yaklaşım (7-10 cm)</li>
              <li>• <strong>3. Rotator kılıf açılması:</strong> Subskapularis tendonunun ayrılması</li>
              <li>• <strong>4. Humerus başı kesilmesi:</strong> Hasarlı kemik ve kıkırdak çıkarılması</li>
              <li>• <strong>5. Glenoid hazırlanması:</strong> Kıkırdak temizlenmesi, kemik düzleştirilmesi</li>
              <li>• <strong>6. Glenoid komponenti:</strong> Plastik soketin simante veya çimentosuz yerleştirilmesi</li>
              <li>• <strong>7. Humerus hazırlanması:</strong> İntramedüller kanal açılması</li>
              <li>• <strong>8. Humerus komponenti:</strong> Metal protezin yerleştirilmesi</li>
              <li>• <strong>9. Test ve kapama:</strong> Hareket ve stabilite testi, rotator kılıf ve cilt kapatılması</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg mb-8">
            <h4 className="font-semibold text-lg mb-3">Ters Protez Özellikleri:</h4>
            <p className="text-gray-700 mb-3">
              Ters omuz protezinde küre ve soket yerleri değiştirilir. Bu, deltoid kasın mekanik 
              avantajını artırır ve rotator kılıf olmadan abduksiyon yapılmasını sağlar.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Glenosphere (metal küre) skapulaya implante edilir</li>
              <li>• Polietilen soket humerusa takılır</li>
              <li>• Metatarsenter (rotasyon merkezi) medialize ve inferiörize edilir</li>
              <li>• Deltoid tensiyonu artar, kuvvet momenti uzar</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Ameliyat Sonrası Süreç</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            İyileşme süreci, erken mobilizasyon ve kademeli güçlendirme egzersizleri ile 6-12 ay sürer.
          </p>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h4 className="font-semibold text-lg mb-3">Hastanede Kalış (1-2 gün):</h4>
            <ul className="space-y-2">
              <li>• Ağrı kontrolü (PCA pompası veya blok kateter)</li>
              <li>• Kol immobilizasyonu (sling/abduktor yastık)</li>
              <li>• İlk günden pasif egzersizler (çubuk egzersizleri)</li>
              <li>• Yara bakımı ve dren takibi</li>
            </ul>
          </div>

          <div className="space-y-6 mb-8">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Faz 1: Koruma Fazı (0-6 Hafta)</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Hedef:</strong> Yara iyileşmesi, ağrı kontrolü, pasif hareket koruma</li>
                <li>• Sürekli sling kullanımı (sadece egzersizlerde çıkarılır)</li>
                <li>• Sadece pasif ve aktif-asistif egzersizler</li>
                <li>• Dirsek, el bilek ve el egzersizleri (dolaşımı korumak için)</li>
                <li>• Postür eğitimi</li>
                <li>• <strong>YASAK:</strong> Aktif kaldırma, ağırlık, omuz gerisine uzanma</li>
              </ul>
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Faz 2: Aktif Mobilizasyon (6-12 Hafta)</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Hedef:</strong> Aktif hareket kazanımı, hafif güçlendirme</li>
                <li>• Sling kademeli olarak bırakılır</li>
                <li>• Aktif-assistif egzersizler başlar</li>
                <li>• Hafif direnç egzersizleri (elastik bant)</li>
                <li>• Skapular stabilizasyon çalışmaları</li>
                <li>• Günlük aktiviteler (hafif iş, self-care)</li>
              </ul>
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Faz 3: Güçlendirme (3-6 Ay)</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Hedef:</strong> Kas gücünü artırma, fonksiyonel aktiviteler</li>
                <li>• Progresif dirençli egzersizler</li>
                <li>• İzometrik, izotonik ve izokinetik çalışmalar</li>
                <li>• Fonksiyonel aktivite eğitimi</li>
                <li>• Propriosepsiyon ve denge egzersizleri</li>
              </ul>
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Faz 4: İleri Aktivite (6-12 Ay)</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Hedef:</strong> Tam fonksiyona dönüş, dayanıklılık</li>
                <li>• Spor ve rekreasyon aktiviteleri (uygun olanlar)</li>
                <li>• İleri güçlendirme programı</li>
                <li>• Maksimum fonksiyonel kapasite</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Komplikasyonlar</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Modern tekniklerle komplikasyon oranları %5-10 civarındadır. Ancak bazı riskler mevcuttur.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <h4 className="font-semibold text-lg mb-3">Olası Komplikasyonlar:</h4>
            <ul className="space-y-2">
              <li>• <strong>Enfeksiyon:</strong> Yüzeyel veya derin (%1-2)</li>
              <li>• <strong>İnstabilite/Dislokasyon:</strong> Özellikle ters protezde (%2-5)</li>
              <li>• <strong>Glenoid gevşemesi:</strong> Uzun vadede en yaygın (%5-10)</li>
              <li>• <strong>Rotator kılıf yırtığı:</strong> Özellikle anatomik protezde</li>
              <li>• <strong>Nörolojik yaralanma:</strong> Aksiller veya muskulokutanöz sinir (%1-2)</li>
              <li>• <strong>Sertlik (adeziv kapsülit):</strong> Yetersiz rehabilitasyon</li>
              <li>• <strong>Heterotopik ossifikasyon:</strong> Eklem çevresinde kemik oluşumu</li>
              <li>• <strong>Aşınma:</strong> Polietilen aşınması (10-15 yıl sonra)</li>
              <li>• <strong>Humerus/skapula kırığı:</strong> Travma veya gevşeme sonrası</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Sonuçlar ve Prognoz</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Omuz protezi ameliyatlarının başarı oranı yüksektir. Hastaların %90'ında ağrıda belirgin 
            azalma ve fonksiyonda iyileşme görülür.
          </p>

          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h4 className="font-semibold text-lg mb-3">Beklenen Sonuçlar:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Ağrı azalması:</strong> %90-95 hastada belirgin rahatlama</li>
              <li>• <strong>Hareket açıklığı:</strong> Anatomik protezde daha iyi rotasyon, ters protezde daha iyi abduksiyon</li>
              <li>• <strong>Fonksiyon:</strong> Günlük aktivitelerde bağımsızlık</li>
              <li>• <strong>Yaşam kalitesi:</strong> Önemli ölçüde iyileşme</li>
              <li>• <strong>Protez ömrü:</strong> %90-95'i 10 yıl, %80-85'i 15-20 yıl başarılı</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h4 className="font-semibold text-lg mb-3">Aktivite Kısıtlamaları:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>İzin verilen:</strong> Yüzme, golf, tenis (rekreasyonel), bisiklet, yürüyüş</li>
              <li>• <strong>Kaçınılması gereken:</strong> Kontakt sporlar, ağır kaldırma ({'>'}10kg tekrar), overhead ağır işler</li>
              <li>• Düzenli takip: İlk yıl 3-6 ayda bir, sonra yıllık kontrol</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Anatomik vs Ters Protez: Karşılaştırma</h2>
          
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white border border-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">Özellik</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">Anatomik Protez</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b">Ters Protez</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="px-4 py-3 font-medium">Endikasyon</td>
                  <td className="px-4 py-3">İntakt rotator kılıf + artrit</td>
                  <td className="px-4 py-3">Rotator kılıf yırtığı artropatisi</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 font-medium">Abduksiyon</td>
                  <td className="px-4 py-3">İyi (rotator kılıf bağımlı)</td>
                  <td className="px-4 py-3">Çok iyi (deltoid bağımlı)</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 font-medium">Rotasyon</td>
                  <td className="px-4 py-3">Çok iyi</td>
                  <td className="px-4 py-3">Kısıtlı</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-4 py-3 font-medium">Dislokasyon riski</td>
                  <td className="px-4 py-3">Düşük (%1-2)</td>
                  <td className="px-4 py-3">Orta (%2-5)</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 font-medium">Glenoid gevşeme</td>
                  <td className="px-4 py-3">Yüksek (%10-15)</td>
                  <td className="px-4 py-3">Düşük (%3-5)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Protez ömrü</td>
                  <td className="px-4 py-3">15-20 yıl</td>
                  <td className="px-4 py-3">10-15 yıl</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* References */}
        <section className="mb-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Kaynaklar</h2>
          <ol className="space-y-2 text-sm text-gray-700">
            <li>1. Boileau P, et al. "Grammont reverse prosthesis: design, rationale, and biomechanics." J Shoulder Elbow Surg. 2005. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=reverse+shoulder+arthroplasty+biomechanics" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>2. Rasmussen JV, et al. "Anatomical total shoulder arthroplasty." Acta Orthop. 2014. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=anatomic+total+shoulder+arthroplasty+outcomes" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>3. Schairer WW, et al. "National utilization of reverse total shoulder arthroplasty in the United States." J Shoulder Elbow Surg. 2015. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=reverse+shoulder+arthroplasty+epidemiology" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>4. Frankle M, et al. "The Reverse Shoulder Prosthesis for glenohumeral arthritis." J Bone Joint Surg Am. 2005. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=reverse+shoulder+prosthesis+arthritis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>5. Norris TR, Iannotti JP. "Functional outcome after shoulder arthroplasty for primary osteoarthritis." J Shoulder Elbow Surg. 2002. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=shoulder+arthroplasty+functional+outcomes" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>6. Zumstein MA, et al. "Problems, complications, reoperations, and revisions in reverse total shoulder arthroplasty." J Shoulder Elbow Surg. 2011. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=reverse+shoulder+arthroplasty+complications" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>7. Young AA, et al. "Complications of reverse shoulder arthroplasty." J Am Acad Orthop Surg. 2012. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=reverse+shoulder+complications+review" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>8. Flurin PH, et al. "Comparison of outcomes using anatomic and reverse total shoulder arthroplasty." Bull Hosp Jt Dis. 2013. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=anatomic+vs+reverse+shoulder+arthroplasty" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>9. Cuff D, Levy JC. "Reverse shoulder arthroplasty for the treatment of rotator cuff deficiency." J Am Acad Orthop Surg. 2008. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=reverse+shoulder+rotator+cuff+deficiency" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
            <li>10. Bacle G, et al. "Long-term outcomes of reverse total shoulder arthroplasty." Orthop Traumatol Surg Res. 2017. <a href="https://pubmed.ncbi.nlm.nih.gov/?term=reverse+shoulder+arthroplasty+long+term" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">[PubMed Ara]</a></li>
          </ol>
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


        {/* CTA Section */}
        <section className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">Omuz Protezi Değerlendirmesi</h2>
          <p className="text-lg mb-6 text-blue-50">
            Omuz artriti veya rotator kılıf probleminiz için protez uygunluğu değerlendirmesi randevusu 
            alabilirsiniz.
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
