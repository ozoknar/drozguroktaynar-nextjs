import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Op. Dr. Özgür Oktay Nar",
  description: "Web sitemizde toplanan verilerin kullanımı, çerez politikası ve gizlilik standartları hakkında detaylı bilgi.",
  keywords: ["gizlilik politikası", "çerez", "veri toplama", "web güvenliği", "mahremiyet"],
};

export default function GizlilikPolitikasiPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Gizlilik Politikası
        </h1>

        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Giriş</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Op. Dr. Özgür Oktay Nar</strong> olarak, web sitemizi ziyaret eden kullanıcılarımızın gizliliğine saygı duyuyoruz. Bu gizlilik politikası, web sitemiz üzerinden toplanan bilgilerin nasıl kullanıldığını, saklandığını ve korunduğunu açıklamaktadır.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              Bu politika, <strong>drozguroktaynar.com</strong> alan adı ve tüm alt sayfalar için geçerlidir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Toplanan Bilgiler</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">1. Otomatik Toplanan Bilgiler</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Web sitemizi ziyaret ettiğinizde, aşağıdaki bilgiler otomatik olarak toplanabilir:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>IP adresi</li>
                  <li>Tarayıcı türü ve versiyonu</li>
                  <li>İşletim sistemi bilgisi</li>
                  <li>Ziyaret edilen sayfalar ve ziyaret süresi</li>
                  <li>Erişim tarihi ve saati</li>
                  <li>Yönlendiren web sitesi (referrer)</li>
                  <li>Coğrafi konum bilgisi (genel)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">2. Kullanıcı Tarafından Sağlanan Bilgiler</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  İletişim formları, randevu talepleri veya diğer etkileşimler yoluyla sağlanan:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Ad ve soyad</li>
                  <li>E-posta adresi</li>
                  <li>Telefon numarası</li>
                  <li>Mesaj içeriği</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Verilerin Kullanım Amaçları</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Toplanan veriler aşağıdaki amaçlarla kullanılmaktadır:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Web sitesi işlevselliğinin sağlanması ve iyileştirilmesi</li>
              <li>Kullanıcı deneyiminin analiz edilmesi ve optimize edilmesi</li>
              <li>İletişim taleplerinin yanıtlanması</li>
              <li>Randevu taleplerinin işleme alınması</li>
              <li>Bilgilendirme ve destek hizmetlerinin sunulması</li>
              <li>Güvenlik ve dolandırıcılık önleme</li>
              <li>Yasal yükümlülüklerin yerine getirilmesi</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Çerez Kullanımı</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Web sitemiz, kullanıcı deneyimini iyileştirmek ve site performansını analiz etmek için çerezler kullanmaktadır.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
              <h4 className="font-semibold text-gray-800 mb-2">Çerez Nedir?</h4>
              <p className="text-gray-700 text-sm">
                Çerezler, web sitesini ziyaret ettiğinizde cihazınıza kaydedilen küçük metin dosyalarıdır. Bu dosyalar, sonraki ziyaretlerinizde sizi tanımamıza ve tercihlerinizi hatırlamamıza yardımcı olur.
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-gray-800">Zorunlu Çerezler</h4>
                <p className="text-gray-700 text-sm">
                  Web sitesinin temel işlevlerinin çalışması için gereklidir. Bu çerezler olmadan site düzgün çalışmaz.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-800">Analitik Çerezler</h4>
                <p className="text-gray-700 text-sm">
                  Ziyaretçilerin siteyi nasıl kullandığını anlamamıza yardımcı olur (örn: Google Analytics). Bu veriler anonim olarak toplanır ve site iyileştirmeleri için kullanılır.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-800">İşlevsellik Çerezleri</h4>
                <p className="text-gray-700 text-sm">
                  Dil tercihi, bölge ayarları gibi tercihlerinizi hatırlar.
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mt-4">
              Tarayıcı ayarlarınızdan çerezleri yönetebilir, silebilir veya engelleyebilirsiniz. Ancak, bazı çerezlerin devre dışı bırakılması site işlevselliğini etkileyebilir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Üçüncü Taraf Hizmetler</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Web sitemiz aşağıdaki üçüncü taraf hizmetleri kullanabilir:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Google Analytics:</strong> Web sitesi trafiğinin analizi (anonim)</li>
              <li><strong>Google Maps:</strong> Konum bilgilerinin gösterimi</li>
              <li><strong>İçerik Dağıtım Ağları (CDN):</strong> Site performansının artırılması</li>
              <li><strong>Sosyal Medya Eklentileri:</strong> İçerik paylaşımı</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              Bu hizmetler kendi gizlilik politikalarına tabidir. Bu hizmetleri kullanırken, ilgili platformların gizlilik politikalarını incelemenizi öneririz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Veri Güvenliği</h2>
            <p className="text-gray-700 leading-relaxed">
              Kişisel verilerinizin güvenliği bizim için önceliklidir. Verilerinizi korumak için aşağıdaki önlemler alınmıştır:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-3">
              <li>SSL/TLS şifreleme ile güvenli veri iletimi</li>
              <li>Güvenli sunucu altyapısı</li>
              <li>Düzenli güvenlik güncellemeleri</li>
              <li>Yetkisiz erişime karşı teknik ve idari koruma önlemleri</li>
              <li>Sınırlı personel erişimi (need-to-know prensibi)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Veri Paylaşımı</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Kişisel verileriniz aşağıdaki durumlar dışında üçüncü taraflarla paylaşılmaz:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Açık rızanızın bulunması</li>
              <li>Yasal zorunluluk (mahkeme kararı, yasal süreç)</li>
              <li>Haklarımızın korunması için gerekli olması</li>
              <li>Hizmet sağlayıcılarımız (hosting, analitik vb.) ile gerekli ölçüde paylaşım (gizlilik sözleşmeleri ile korumalı)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Çocukların Gizliliği</h2>
            <p className="text-gray-700 leading-relaxed">
              Web sitemiz 18 yaş altındaki bireyleri hedeflememektedir. 18 yaş altındaki kullanıcılardan bilerek kişisel veri toplamıyoruz. Eğer 18 yaşından küçük bir çocuğun veri sağladığını fark edersek, bu verileri derhal sileriz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kullanıcı Hakları</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Kişisel verilerinizle ilgili aşağıdaki haklara sahipsiniz:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Hangi verilerin toplandığını öğrenme hakkı</li>
              <li>Verilerin düzeltilmesini talep etme hakkı</li>
              <li>Verilerin silinmesini talep etme hakkı</li>
              <li>Veri işlemeye itiraz etme hakkı</li>
              <li>Verilerinizin taşınabilirliğini talep etme hakkı</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              Bu haklarınızı kullanmak için <strong>ozguroktaynar@gmail.com</strong> adresine başvurabilirsiniz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Dış Bağlantılar</h2>
            <p className="text-gray-700 leading-relaxed">
              Web sitemiz, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu sitelerin gizlilik uygulamaları bizim kontrolümüz dışındadır ve bu politika bu siteler için geçerli değildir. Harici siteleri ziyaret ederken ilgili gizlilik politikalarını incelemenizi öneririz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Politika Değişiklikleri</h2>
            <p className="text-gray-700 leading-relaxed">
              Bu gizlilik politikası, yasal gereklilikler veya iş uygulamalarındaki değişiklikler doğrultusunda güncellenebilir. Önemli değişiklikler web sitesi üzerinden duyurulacaktır. Düzenli olarak bu sayfayı kontrol etmenizi öneririz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">İletişim</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Gizlilik politikamız hakkında sorularınız veya talepleriniz için bizimle iletişime geçebilirsiniz:
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
              <strong>Yürürlük Tarihi:</strong> 7 Şubat 2026
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
