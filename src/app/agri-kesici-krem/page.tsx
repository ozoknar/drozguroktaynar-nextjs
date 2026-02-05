import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ağrı Kesici Krem: Eklem ve Kas Ağrılarına Pratik Çözüm | Op. Dr. Özgür Oktay Nar',
  description: 'Ağrı kesici kremler hakkında bilmeniz gerekenler. Diz, bel ve boyun ağrılarına etkili çözümler. Ortopedi uzmanı rehberliğinde krem önerileri ve kullanım bilgileri.',
  keywords: 'ağrı kesici krem, kas ağrısı kremi, eklem ağrısı, diz ağrısı kremi, bel ağrısı kremi, boyun ağrısı, ortopedi',
  openGraph: {
    title: 'Ağrı Kesici Krem: Eklem ve Kas Ağrılarına Pratik Çözüm',
    description: 'Ortopedi uzmanı rehberliğinde ağrı kesici kremler hakkında bilmeniz gereken her şey.',
    type: 'article',
  },
}

export default function AgriKesiciKremPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">Ağrı Kesici Krem</span>
      </nav>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Ağrı Kesici Krem: Eklem ve Kas Ağrılarına Pratik Çözüm
      </h1>

      {/* Meta Info */}
      <div className="flex items-center text-sm text-gray-500 mb-8 pb-6 border-b">
        <span>Op. Dr. Özgür Oktay Nar</span>
        <span className="mx-2">•</span>
        <span>Ortopedi ve Travmatoloji Uzmanı</span>
      </div>

      {/* Introduction */}
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Günümüzde kas ve eklem ağrıları, yalnızca ileri yaş grubunu değil; masa başında çalışanlardan aktif spor yapan bireylere kadar geniş bir kesimi etkilemektedir. Bu ağrılarla başa çıkmak için tercih edilen yöntemlerden biri de pratik ve etkili yapısıyla öne çıkan <strong>ağrı kesici krem</strong> seçenekleridir.
        </p>

        <p className="text-gray-700 leading-relaxed mb-8">
          Özellikle ortopedi alanında, fiziksel travmaların ve kas-iskelet sistemi rahatsızlıklarının tedavisinde ağrı kesici kremler, cerrahi dışı çözümler arasında önemli bir yere sahiptir. Hem profesyonel sporcularda hem de günlük yaşamda hareket kısıtlılığı yaşayan bireylerde etkili sonuçlar sunar.
        </p>

        {/* Table of Contents */}
        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">📑 İçindekiler</h2>
          <ul className="space-y-2">
            <li><a href="#agri-kesici-krem-nedir" className="text-blue-600 hover:underline">Ağrı Kesici Krem Nedir?</a></li>
            <li><a href="#ortopedide-kullanim" className="text-blue-600 hover:underline">Ortopedide Ağrı Kesici Krem Kullanımı</a></li>
            <li><a href="#diz-agrisi" className="text-blue-600 hover:underline">Diz Ağrısı İçin Krem Önerileri</a></li>
            <li><a href="#bel-boyun-agrisi" className="text-blue-600 hover:underline">Bel ve Boyun Ağrısına İyi Gelen Kremler</a></li>
            <li><a href="#dikkat-edilmesi-gerekenler" className="text-blue-600 hover:underline">Kullanırken Dikkat Edilmesi Gerekenler</a></li>
            <li><a href="#sss" className="text-blue-600 hover:underline">Sıkça Sorulan Sorular</a></li>
          </ul>
        </div>

        {/* Section 1 */}
        <section id="agri-kesici-krem-nedir" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ağrı Kesici Krem Nedir?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ağrı kesici krem; kas, eklem ve yumuşak doku kaynaklı ağrıların hafifletilmesinde kullanılan topikal (deriye sürülen) ilaç formudur. Genellikle cilde doğrudan uygulanan bu kremler, vücutta ağrının hissedildiği bölgeye hızlı etki eder.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Uygulama sonrası, içerdiği etken maddeler sayesinde kan dolaşımını artırarak veya sinir uçlarında ağrı iletimini engelleyerek çalışır. Böylece bölgesel bir rahatlama sağlanır. Ağrılı bölgedeki kas spazmlarının çözülmesine, sertliğin azalmasına ve hareket kabiliyetinin artmasına da katkı sunar.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Ağrı kesici kremler özellikle sporcu yaralanmaları, kas zorlanmaları, burkulmalar, lif incinmeleri gibi durumlarda yaygın olarak tercih edilir. Aynı zamanda diz, bel ve boyun gibi eklem bölgelerinde görülen kronik ağrıların kontrol altına alınmasında da etkili bir yardımcıdır.
          </p>
        </section>

        {/* Section 2 */}
        <section id="ortopedide-kullanim" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ortopedide Ağrı Kesici Krem Kullanımı</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ortopedi uzmanları, kas-iskelet sistemi rahatsızlıklarının tedavisinde genellikle invazif olmayan (cerrahi dışı) yöntemleri ön planda tutmaktadır. Bu yaklaşım, hem hastanın konforunu artırmakta hem de iyileşme sürecini daha doğal yollarla desteklemektedir.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ağrı kesici kremlerin ortopedide yaygın olarak kullanıldığı durumlar:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>Menisküs problemleri sonucunda dizde oluşan şiddetli ağrıların hafifletilmesinde</li>
            <li>Bel fıtığı başlangıcında hissedilen lokal bel ağrılarında</li>
            <li>Boyun düzleşmesine bağlı kas gerginliği ve tutulmalarda</li>
            <li>Omuz donması gibi hareket kısıtlayıcı rahatsızlıklarda</li>
            <li>Spor sonrası kas ağrıları ve mikro travmalarda</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section id="diz-agrisi" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Diz Ağrısı İçin Krem Önerileri</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Diz bölgesi, vücudun en çok yük taşıyan ve hareket gerektiren eklemlerinden biridir. Diz ağrısı, travmalar, yaşa bağlı dejenerasyon, kıkırdak aşınmaları ya da romatizmal hastalıklar gibi birçok farklı nedenle ortaya çıkabilir.
          </p>
          
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Etkili Krem İçerikleri</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800">Diklofenak Sodyum</h4>
                <p className="text-gray-600 text-sm">Non-steroidal anti-inflamatuar ilaç (NSAID) grubunda yer alır. Özellikle osteoartrit kaynaklı diz ağrılarında yaygın olarak kullanılır.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Ketoprofen</h4>
                <p className="text-gray-600 text-sm">Özellikle romatizmal kaynaklı ağrılar için etkilidir. Eklem iltihabı ve kas zorlanmalarında tercih edilir.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Mentol + Kampfer</h4>
                <p className="text-gray-600 text-sm">Serinletici ve ferahlatıcı etki sağlar. Akut ağrılarda veya spor sonrası kas ağrılarında destekleyici olarak önerilir.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Kapsaisin</h4>
                <p className="text-gray-600 text-sm">Acı biberden elde edilen doğal içerik. Sinir uçlarında ağrı iletimini geçici olarak baskılar.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section id="bel-boyun-agrisi" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Bel ve Boyun Ağrısına İyi Gelen Kremler</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bel ve boyun bölgeleri, günümüzde pek çok kişinin şikâyetçi olduğu ağrıların odak noktasıdır. Özellikle masa başı çalışanlarda, uzun süreli oturma pozisyonları ve yanlış duruş alışkanlıkları nedeniyle bu bölgelerde kronikleşen ağrılar sıkça görülmektedir.
          </p>
          
          <div className="bg-green-50 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Önerilen Krem İçerikleri</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Etofenamat İçeren Kremler:</strong> Kas ve yumuşak doku kaynaklı ağrılarda etkili</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Ibuprofen Jel:</strong> Kasların sertliğini ve iltihabi süreci azaltır</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Doğal İçerikli Kremler:</strong> Arnika özü, nane yağı, lavanta ve okaliptüs</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 5 */}
        <section id="dikkat-edilmesi-gerekenler" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ağrı Kesici Krem Kullanırken Dikkat Edilmesi Gerekenler</h2>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <h3 className="text-lg font-semibold text-red-800 mb-3">⚠️ Önemli Uyarılar</h3>
            <ul className="space-y-2 text-red-700">
              <li>• Açık yaraya uygulanmamalıdır</li>
              <li>• Göz ve mukozal bölgelerden uzak tutulmalıdır</li>
              <li>• Çocukların ulaşamayacağı yerlerde saklanmalıdır</li>
              <li>• Uzun süreli kullanımda doktor önerisi alınmalıdır</li>
              <li>• Hamile ve emziren kadınlar dikkatli olmalıdır</li>
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="sss" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sıkça Sorulan Sorular</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Ağrı kesici krem ne işe yarar?</h3>
              <p className="text-gray-600">Lokal olarak uygulandığında ağrı reseptörlerini baskılayarak geçici rahatlama sağlar. Kan dolaşımını artırır, iltihabı azaltabilir.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Diz ağrısı için hangi krem kullanılmalıdır?</h3>
              <p className="text-gray-600">Diklofenak veya ketoprofen içeren kremler, diz eklem ağrıları için en çok tercih edilenlerdir.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Ağrı kesici krem ne kadar sürede etki eder?</h3>
              <p className="text-gray-600">Genellikle 15-30 dakika içinde etkisini göstermeye başlar. Bu süre kremin içeriğine ve kişinin cilt yapısına göre değişebilir.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Ağrı kesici krem günde kaç kez kullanılmalıdır?</h3>
              <p className="text-gray-600">Kullanım sıklığı krem formülüne bağlı olarak değişse de, çoğu ürün günde 2-3 kez uygulanabilir.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Hamileler ağrı kesici krem kullanabilir mi?</h3>
              <p className="text-gray-600">Çoğu krem hamilelikte önerilmemektedir. Mutlaka doktora danışılmalıdır.</p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sonuç</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ağrı kesici kremler, ortopedik şikâyetlerin ilk basamak tedavisinde öne çıkar. Hem kolay uygulanabilirliği hem de hızlı etkisiyle tercih edilmektedir. Özellikle kas, bel, boyun, diz ve eklem ağrılarında, sistemik ilaçlara gerek kalmadan lokal rahatlama sağlar.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Ancak unutulmamalıdır ki, ağrının kaynağına göre tedavi şekli değişebilmektedir. Bu nedenle ağrı kesici krem kullanımı, sadece geçici bir çözüm olarak düşünülmeli ve uzun süreli ağrılarda mutlaka bir ortopedi uzmanına başvurulmalıdır.
          </p>
        </section>

        {/* CTA */}
        <div className="bg-blue-600 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ağrılarınız İçin Uzman Desteği Alın</h3>
          <p className="text-blue-100 mb-6">
            Kas ve eklem ağrılarınız için doğru tedavi yöntemini belirlemek üzere randevu alın.
          </p>
          <a
            href="https://wa.me/905522493909"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition inline-block"
          >
            📱 WhatsApp ile Randevu Al
          </a>
        </div>
      </div>
    </article>
  )
}
