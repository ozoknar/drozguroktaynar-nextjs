import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ayak Bileği Kırığı Sonrası Yürüme: Tedavi ve İyileşme Süreci | Op. Dr. Özgür Oktay Nar',
  description: 'Ayak bileği kırığı sonrası yürüme süreci, alçı ve ameliyat sonrası iyileşme, fizik tedavi egzersizleri. Ortopedi uzmanı rehberliğinde detaylı bilgi.',
  keywords: 'ayak bileği kırığı, ayak bileği kırığı sonrası yürüme, alçı sonrası yürüme, ayak kırığı tedavisi, fizik tedavi, ortopedi',
  openGraph: {
    title: 'Ayak Bileği Kırığı Sonrası Yürüme: Tedavi ve İyileşme Süreci',
    description: 'Ayak bileği kırığı sonrası iyileşme süreci hakkında bilmeniz gereken her şey.',
    type: 'article',
  },
}

export default function AyakBilegiKirigiPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">Ayak Bileği Kırığı Sonrası Yürüme</span>
      </nav>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Ayak Bileği Kırığı Sonrası Yürüme: Tedavi ve Dikkat Edilenler
      </h1>

      {/* Meta Info */}
      <div className="flex items-center text-sm text-gray-500 mb-8 pb-6 border-b">
        <span>Op. Dr. Özgür Oktay Nar</span>
        <span className="mx-2">•</span>
        <span>Ortopedi ve Travmatoloji Uzmanı</span>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          <strong>Ayak bileği kırığı sonrası yürüme</strong>, hastaların günlük yaşam kalitesini doğrudan etkileyen önemli bir iyileşme sürecidir. Ayak bileği; vücudun ağırlığını taşıyan, dengeyi sağlayan ve koordinasyonu yöneten karmaşık bir yapıdır.
        </p>

        <p className="text-gray-700 leading-relaxed mb-8">
          Alçı tedavisi veya cerrahi müdahale sonrası yürüyüşe güvenli şekilde yeniden başlamak, dikkatli bir planlama ve profesyonel takip gerektirir. Tedavi sürecinde yapılan her doğru müdahale, uzun vadede hastanın hareket kabiliyetini ve yaşam kalitesini belirler.
        </p>

        {/* Table of Contents */}
        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">📑 İçindekiler</h2>
          <ul className="space-y-2">
            <li><a href="#nedir" className="text-blue-600 hover:underline">Ayak Bileği Kırığı Nedir?</a></li>
            <li><a href="#iyilesme-sureci" className="text-blue-600 hover:underline">İyileşme Süreci</a></li>
            <li><a href="#alci-sonrasi" className="text-blue-600 hover:underline">Alçı Sonrası Yürüme</a></li>
            <li><a href="#ameliyat-sonrasi" className="text-blue-600 hover:underline">Ameliyat Sonrası Yürüme</a></li>
            <li><a href="#fizik-tedavi" className="text-blue-600 hover:underline">Fizik Tedavi ve Egzersizler</a></li>
            <li><a href="#komplikasyonlar" className="text-blue-600 hover:underline">Olası Komplikasyonlar</a></li>
            <li><a href="#sss" className="text-blue-600 hover:underline">Sıkça Sorulan Sorular</a></li>
          </ul>
        </div>

        {/* Section 1 */}
        <section id="nedir" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ayak Bileği Kırığı Nedir?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ayak bileği kırığı, ayak bileğini oluşturan kemiklerin çatlaması ya da tam olarak kırılması durumudur. Genellikle ani travmalar sonucunda ortaya çıkar. Düşme, burkulma, spor kazaları, yüksekten atlama ya da trafik kazaları en sık karşılaşılan nedenler arasında yer alır.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ayak bileği; <strong>tibia</strong> (kaval kemiği), <strong>fibula</strong> (kamış kemiği) ve <strong>talus</strong> (ayak kemiği) isimli üç temel kemikten oluşur. Bu kemikler bir araya gelerek ayak bileğinin stabilitesini ve hareket kabiliyetini sağlar.
          </p>
        </section>

        {/* Section 2 */}
        <section id="iyilesme-sureci" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ayak Bileği Kırığı Sonrası İyileşme Süreci</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            İyileşme süreci birçok farklı faktörün etkisiyle kişiden kişiye değişkenlik gösterir. Hastanın yaşı, genel sağlık durumu, kemik yoğunluğu ve kırığın oluştuğu bölge iyileşme sürecini doğrudan etkiler.
          </p>
          
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">İyileşmeyi Etkileyen Faktörler</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Hastanın yaşı ve genel sağlık durumu</li>
              <li>• Kemik yoğunluğu</li>
              <li>• Kırığın türü ve şiddeti</li>
              <li>• Tedavi yönteminin uygunluğu</li>
              <li>• Fizik tedavi sürecine uyum</li>
            </ul>
          </div>
        </section>

        {/* Section 3 */}
        <section id="alci-sonrasi" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ayak Bileği Kırığı Alçı Sonrası Yürüme</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Alçı tedavisi, genellikle hafif ve kemiklerin yer değiştirmediği stabil vakalarda tercih edilir. Alçı genellikle <strong>4 ila 8 hafta</strong> boyunca bacakta kalır.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Alçı çıkarıldıktan sonra uzun süre hareketsiz kalan kaslar zayıflar, eklemler sertleşir ve denge refleksleri bozulabilir. İlk yürüyüşler genellikle kontrollü ortamda ve fizik tedavi uzmanlarının gözetiminde gerçekleştirilir.
          </p>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">⚠️ Alçı Sonrası Dikkat Edilmesi Gerekenler</h3>
            <ul className="space-y-2 text-yellow-700">
              <li>• Dikkatli adımlar atın</li>
              <li>• Ani hareketlerden kaçının</li>
              <li>• Gerektiğinde yürüme destekleri kullanın</li>
              <li>• Fizik tedavi programına uyun</li>
            </ul>
          </div>
        </section>

        {/* Section 4 */}
        <section id="ameliyat-sonrasi" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ayak Bileği Kırığı Ameliyatı Sonrası Yürüme</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ciddi ve karmaşık ayak bileği kırıklarında cerrahi müdahale kaçınılmaz hale gelebilir. Cerrahi işlem sırasında, kırık kemiklerin doğru hizalanabilmesi için plak, vida, çivi veya tel gibi çeşitli ortopedik materyaller kullanılır.
          </p>
          
          <div className="bg-blue-50 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Ameliyat Sonrası Süreç</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">1</span>
                <span><strong>İlk 6 hafta:</strong> Ayağa yük verilmez, istirahat önceliklidir</span>
              </div>
              <div className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">2</span>
                <span><strong>6. hafta:</strong> Hafif yük verme ve yürüyüş egzersizleri başlar</span>
              </div>
              <div className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">3</span>
                <span><strong>10-12. hafta:</strong> Tam yük verme sürecine geçiş</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section id="fizik-tedavi" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Fizik Tedavi ve Egzersizler</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Fizik tedavi, ayak bileği kırığı sonrası iyileşme sürecinin en kritik aşamalarından biridir. Uzun süren hareketsizlik döneminde kaslar zayıflar, bağ dokular esnekliğini kaybeder ve eklemlerde sertlik oluşur.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Denge Egzersizleri</h4>
              <p className="text-green-700 text-sm">Ayak bileği üzerinde yeniden kontrol sağlar, düşme riskini azaltır</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Kas Güçlendirme</h4>
              <p className="text-green-700 text-sm">Alt bacak ve ayak bileği çevresindeki kas gruplarını hedef alır</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Esneme Çalışmaları</h4>
              <p className="text-green-700 text-sm">Sertleşmiş eklemlerin esnekliğini artırır</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Yürüme Eğitimi</h4>
              <p className="text-green-700 text-sm">Doğru basma tekniklerini öğretir ve yürüme kalitesini geliştirir</p>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section id="komplikasyonlar" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Olası Komplikasyonlar</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bazı komplikasyonlar görülebilir. Bu nedenle doktor kontrolü aksatılmamalıdır.
          </p>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <ul className="space-y-2 text-red-700">
              <li>• Eklem sertliği</li>
              <li>• Kas zayıflığı</li>
              <li>• Denge kaybı</li>
              <li>• Kireçlenme (artroz)</li>
              <li>• Enfeksiyon (cerrahi sonrası)</li>
              <li>• Kan pıhtılaşması (derin ven trombozu)</li>
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="sss" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sıkça Sorulan Sorular</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Ayak bileği kırığı sonrası yürümek ne kadar sürer?</h3>
              <p className="text-gray-600">Kırığın şiddetine bağlı olarak 6 haftadan 6 aya kadar değişir. Doktor kontrolü önemlidir.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Alçıdan çıktıktan sonra hemen yürüyebilir miyim?</h3>
              <p className="text-gray-600">Hayır. Kas zayıflığı ve eklem sertliği nedeniyle fizyoterapist eşliğinde yürüyüşe başlanmalıdır.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Ameliyat sonrası ağrı ne kadar sürer?</h3>
              <p className="text-gray-600">İlk haftalarda ağrı olur. İyileşme ilerledikçe ağrı azalır. Ağrı kesiciler kullanılabilir.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Fizik tedavi şart mı?</h3>
              <p className="text-gray-600">Evet. Kas gücünü ve eklem hareketini geri kazanmak için fizik tedavi çok önemlidir.</p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sonuç</h2>
          <p className="text-gray-700 leading-relaxed">
            Ayak bileği kırığı sonrası yürüme sürecini bilinçli ve planlı şekilde yönetmek, kalıcı sorunların önlenmesi açısından büyük önem taşır. Doğru fizik tedavi programları, kişiye özel egzersiz planları ve düzenli kontroller, iyileşme sürecinin sağlıklı ilerlemesinde kritik rol oynar.
          </p>
        </section>

        {/* CTA */}
        <div className="bg-blue-600 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ayak Bileği Kırığı Tedavisi İçin Randevu Alın</h3>
          <p className="text-blue-100 mb-6">
            Uzman ortopedi desteği ile iyileşme sürecinizi hızlandırın.
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
