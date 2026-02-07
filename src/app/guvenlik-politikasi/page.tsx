import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Güvenlik Politikası | Op. Dr. Özgür Oktay Nar",
  description: "Hasta verilerinin korunması, SSL şifreleme, veri güvenliği önlemleri ve bilgi güvenliği standartları hakkında detaylı bilgi.",
  keywords: ["güvenlik", "veri güvenliği", "SSL", "hasta verileri", "bilgi güvenliği", "şifreleme"],
};

export default function GuvenlikPolitikasiPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Güvenlik Politikası
        </h1>

        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Giriş</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Op. Dr. Özgür Oktay Nar</strong> olarak, hastalarımızın ve web sitesi kullanıcılarımızın kişisel ve sağlık verilerinin güvenliğini en üst seviyede tutmayı taahhüt ediyoruz. Bu güvenlik politikası, verilerinizi korumak için aldığımız teknik ve organizasyonel önlemleri açıklamaktadır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Temel Güvenlik Prensipleri</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-3xl mb-2">🔒</div>
                <h3 className="font-semibold text-gray-800 mb-2">Gizlilik</h3>
                <p className="text-sm text-gray-700">Verilerinize yalnızca yetkili personel erişebilir</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-3xl mb-2">✓</div>
                <h3 className="font-semibold text-gray-800 mb-2">Bütünlük</h3>
                <p className="text-sm text-gray-700">Veriler yetkisiz değişikliklerden korunur</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="font-semibold text-gray-800 mb-2">Erişilebilirlik</h3>
                <p className="text-sm text-gray-700">Yetkili kullanıcılar ihtiyaç duyduğunda veriye ulaşabilir</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="text-3xl mb-2">🛡️</div>
                <h3 className="font-semibold text-gray-800 mb-2">Hesap Verilebilirlik</h3>
                <p className="text-sm text-gray-700">Tüm erişimler kayıt altındadır</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Teknik Güvenlik Önlemleri</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-2 flex items-center">
                  <span className="text-green-600 mr-2">🔐</span>
                  SSL/TLS Şifreleme
                </h3>
                <p className="text-gray-700 leading-relaxed ml-8">
                  Web sitemiz, tüm veri iletimlerini korumak için 256-bit SSL (Secure Socket Layer) sertifikası kullanmaktadır. 
                  Bu, tarayıcınız ile sunucumuz arasındaki tüm verilerin şifreli olarak iletilmesini sağlar. 
                  Adres çubuğunda <strong>&quot;https://&quot;</strong> ve kilit simgesini görerek güvenli bağlantıda olduğunuzu teyit edebilirsiniz.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-2 flex items-center">
                  <span className="text-blue-600 mr-2">🔥</span>
                  Güvenlik Duvarı (Firewall)
                </h3>
                <p className="text-gray-700 leading-relaxed ml-8">
                  Sunucularımız, yetkisiz erişim girişimlerini engelleyen gelişmiş güvenlik duvarları ile korunmaktadır. 
                  Tüm gelen ve giden trafik sürekli izlenmekte ve şüpheli aktiviteler otomatik olarak engellenmektedir.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-2 flex items-center">
                  <span className="text-purple-600 mr-2">🗄️</span>
                  Veri Şifreleme
                </h3>
                <p className="text-gray-700 leading-relaxed ml-8">
                  Hassas kişisel ve sağlık verileri, veritabanında AES-256 standardında şifreli olarak saklanmaktadır. 
                  Bu sayede, olası bir veri sızıntısı durumunda bile verileriniz okunamaz halde kalır.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-2 flex items-center">
                  <span className="text-red-600 mr-2">🚫</span>
                  DDoS Koruması
                </h3>
                <p className="text-gray-700 leading-relaxed ml-8">
                  Hizmet aksatma (DDoS) saldırılarına karşı otomatik savunma sistemleri mevcuttur. 
                  Web sitesi erişilebilirliği sürekli izlenmekte ve anormal trafik tespit edildiğinde koruma devreye girmektedir.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-2 flex items-center">
                  <span className="text-orange-600 mr-2">🔄</span>
                  Düzenli Güncellemeler
                </h3>
                <p className="text-gray-700 leading-relaxed ml-8">
                  Web sitesi altyapısı, sunucu yazılımları ve tüm bağımlılıklar düzenli olarak güvenlik yamaları ile güncellenmektedir. 
                  Bilinen güvenlik açıkları proaktif olarak kapatılmaktadır.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-2 flex items-center">
                  <span className="text-teal-600 mr-2">🧪</span>
                  Güvenlik Testleri
                </h3>
                <p className="text-gray-700 leading-relaxed ml-8">
                  Periyodik olarak penetrasyon testleri ve güvenlik açığı taramaları yapılmaktadır. 
                  Tespit edilen zafiyetler en kısa sürede giderilmektedir.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Organizasyonel Güvenlik Önlemleri</h2>
            
            <div className="space-y-3">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-medium text-gray-800">Erişim Kontrolü</h3>
                <p className="text-gray-700 text-sm mt-1">
                  Hasta verilerine erişim, &quot;en az yetki prensibi&quot; (principle of least privilege) ile sınırlandırılmıştır. 
                  Sadece tedavi sürecinde görev alan personel, gerekli verilere erişebilir.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-medium text-gray-800">Personel Eğitimi</h3>
                <p className="text-gray-700 text-sm mt-1">
                  Tüm çalışanlar, KVKK, veri güvenliği ve hasta mahremiyeti konularında düzenli olarak eğitilmektedir.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-medium text-gray-800">Gizlilik Sözleşmeleri</h3>
                <p className="text-gray-700 text-sm mt-1">
                  Hasta verilerine erişimi olan tüm personel ve üçüncü taraf hizmet sağlayıcılar, gizlilik sözleşmeleri imzalamıştır.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-medium text-gray-800">Olay Müdahale Planı</h3>
                <p className="text-gray-700 text-sm mt-1">
                  Güvenlik ihlali durumunda uygulanacak acil müdahale prosedürleri tanımlanmıştır. 
                  İhlal tespit edildiğinde derhal gerekli önlemler alınır ve ilgili otoriteler bilgilendirilir.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-medium text-gray-800">Düzenli Denetimler</h3>
                <p className="text-gray-700 text-sm mt-1">
                  Güvenlik politikalarına uyum düzenli olarak denetlenmekte ve gerekli iyileştirmeler yapılmaktadır.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Veri Yedekleme ve Kurtarma</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  <span><strong>Otomatik Yedekleme:</strong> Tüm veriler günlük olarak otomatik yedeklenir</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  <span><strong>Çoklu Yedekleme:</strong> Yedekler farklı coğrafi konumlarda saklanır</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  <span><strong>Şifreli Yedekleme:</strong> Tüm yedekler şifreli olarak saklanır</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  <span><strong>Kurtarma Testleri:</strong> Veri kurtarma prosedürleri periyodik olarak test edilir</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  <span><strong>İş Sürekliliği:</strong> Felaket durumlarında iş sürekliliği planı devreye girer</span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hasta Verilerinin Özel Korunması</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Sağlık verileri, KVKK&apos;da &quot;özel nitelikli kişisel veri&quot; kategorisinde yer alır ve özel koruma gerektirir. 
              Bu kapsamda:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Tıbbi kayıtlar, şifreli sistemlerde tutulur</li>
              <li>Elektronik sağlık kayıtlarına erişim, çok faktörlü kimlik doğrulama ile korunur</li>
              <li>Hasta dosyaları, fiziksel ve elektronik ortamda kilitli sistemlerde saklanır</li>
              <li>Veri imha işlemleri, geri getirilemez yöntemlerle yapılır</li>
              <li>Hasta mahremiyeti, tüm süreçlerde öncelikli prensiptir</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Yasal Uyumluluk</h2>
            <p className="text-gray-700 leading-relaxed">
              Güvenlik politikamız, aşağıdaki yasal düzenlemelere uygun olarak hazırlanmış ve uygulanmaktadır:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-3">
              <li>6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK)</li>
              <li>Hasta Hakları Yönetmeliği</li>
              <li>Tıbbi Kayıtlar ve Bilgilerin Saklanması Yönetmeliği</li>
              <li>Elektronik İmza Kanunu</li>
              <li>İlgili TTB ve Sağlık Bakanlığı düzenlemeleri</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kullanıcı Sorumlulukları</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Güvenliğiniz bizim sorumluluğumuz olsa da, siz de güvenliğinize katkıda bulunabilirsiniz:
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ Kişisel bilgilerinizi güvenli olmayan kanallardan (SMS, e-posta ekinde) paylaşmayın</li>
                <li>✓ Güvenli internet bağlantısı kullanın (açık Wi-Fi&apos;lerden kaçının)</li>
                <li>✓ Tarayıcınızı ve işletim sisteminizi güncel tutun</li>
                <li>✓ Şüpheli e-posta veya linklere tıklamayın</li>
                <li>✓ Güçlü ve benzersiz şifreler kullanın</li>
                <li>✓ Hesap bilgilerinizi kimseyle paylaşmayın</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Güvenlik İhlali Bildirimi</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Eğer bir güvenlik açığı tespit ederseniz veya verilerinizin güvenliğiyle ilgili bir endişeniz varsa, 
              lütfen derhal bizimle iletişime geçin:
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <p className="text-gray-700">
                <strong>Acil Güvenlik İletişim:</strong><br />
                <strong>E-posta:</strong> ozguroktaynar@gmail.com<br />
                <strong>Telefon:</strong> +90 552 249 39 09<br />
                <em className="text-sm">Güvenlik ihlalleri en yüksek öncelikle ele alınır.</em>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Politika Güncellemeleri</h2>
            <p className="text-gray-700 leading-relaxed">
              Bu güvenlik politikası, yeni tehditler ve teknolojik gelişmelere paralel olarak düzenli olarak gözden geçirilir ve güncellenir. 
              Önemli değişiklikler web sitesi üzerinden duyurulacaktır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">İletişim</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Güvenlik politikamız hakkında sorularınız için:
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <p className="text-gray-700">
                <strong>Op. Dr. Özgür Oktay Nar</strong><br />
                <strong>E-posta:</strong> ozguroktaynar@gmail.com<br />
                <strong>Telefon:</strong> +90 552 249 39 09
              </p>
            </div>
          </section>

          <div className="bg-gray-100 border-l-4 border-gray-500 p-4 mt-8">
            <p className="text-sm text-gray-600">
              <strong>Son Güncelleme:</strong> 7 Şubat 2026<br />
              <strong>Versiyon:</strong> 1.0<br />
              Bu politika, bilgi güvenliği en iyi uygulamalarına göre sürekli iyileştirilmektedir.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
