import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KVKK - Kişisel Verilerin Korunması | Op. Dr. Özgür Oktay Nar",
  description: "Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında hasta bilgilerinin işlenmesi, korunması ve hasta hakları hakkında bilgilendirme.",
  keywords: ["KVKK", "kişisel veriler", "hasta hakları", "gizlilik", "veri güvenliği"],
};

export default function KVKKPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Kişisel Verilerin Korunması Kanunu (KVKK) Bilgilendirmesi
        </h1>

        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Veri Sorumlusu</h2>
            <p className="text-gray-700 leading-relaxed">
              6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) uyarınca, kişisel verileriniz, veri sorumlusu olarak <strong>Op. Dr. Özgür Oktay Nar</strong> tarafından aşağıda açıklanan kapsamda işlenebilecektir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">İletişim Bilgileri</h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <p className="text-gray-700">
                <strong>Veri Sorumlusu:</strong> Op. Dr. Özgür Oktay Nar<br />
                <strong>E-posta:</strong> ozguroktaynar@gmail.com<br />
                <strong>Telefon:</strong> +90 552 249 39 09
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">İşlenen Kişisel Veriler</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Sağlık hizmetlerinin sunulması kapsamında aşağıdaki kişisel verileriniz işlenebilmektedir:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Kimlik Bilgileri:</strong> Ad, soyad, TC kimlik numarası, doğum tarihi, cinsiyet</li>
              <li><strong>İletişim Bilgileri:</strong> Telefon numarası, e-posta adresi, adres</li>
              <li><strong>Sağlık Verileri:</strong> Tıbbi geçmiş, teşhis, tedavi bilgileri, radyolojik görüntüler, laboratuvar sonuçları</li>
              <li><strong>Finansal Bilgiler:</strong> Ödeme bilgileri, fatura bilgileri</li>
              <li><strong>Görsel/İşitsel Veriler:</strong> Klinik fotoğrafları (sadece tıbbi gereklilik halinde, izin alınarak)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Veri İşleme Amaçları</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Sağlık hizmetlerinin sunulması ve takibi</li>
              <li>Randevu yönetimi ve iletişim</li>
              <li>Tıbbi kayıt ve dokümantasyon yükümlülüklerinin yerine getirilmesi</li>
              <li>Faturalandırma ve ödeme işlemleri</li>
              <li>Yasal yükümlülüklerin yerine getirilmesi</li>
              <li>Hastaların bilgilendirilmesi ve memnuniyetinin sağlanması</li>
              <li>Kalite ve güvenlik standartlarının iyileştirilmesi</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Veri İşleme Hukuki Sebepleri</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Kişisel verileriniz KVKK&apos;nın 5. ve 6. maddeleri uyarınca aşağıdaki hukuki sebeplere dayanılarak işlenmektedir:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Açık rızanızın bulunması</li>
              <li>Sözleşmenin kurulması veya ifası için gerekli olması</li>
              <li>Yasal yükümlülüklerin yerine getirilmesi</li>
              <li>İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması</li>
              <li>Sağlık hizmetlerinin sunulması için zorunlu olması</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Veri Aktarımı</h2>
            <p className="text-gray-700 leading-relaxed">
              Kişisel verileriniz, tedavi sürecinin gerektirdiği durumlarda (laboratuvar, görüntüleme merkezi, sevk edilen uzman hekim vb.) ve yasal yükümlülüklerin yerine getirilmesi amacıyla (Sağlık Bakanlığı, SGK, mahkeme vb.) üçüncü kişilere aktarılabilir. Tüm aktarımlar KVKK&apos;ya uygun olarak gerçekleştirilmektedir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hasta Haklarınız</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              KVKK&apos;nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
              <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme</li>
              <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
              <li>KVKK&apos;nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme</li>
              <li>Kişisel verilerin aktarıldığı üçüncü kişilere yukarıdaki düzeltme, silme veya yok edilme taleplerinin bildirilmesini isteme</li>
              <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
              <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Başvuru Yöntemi</h2>
            <p className="text-gray-700 leading-relaxed">
              Yukarıda belirtilen haklarınızı kullanmak için kimliğinizi tespit edici gerekli bilgiler ile birlikte talebinizi <strong>ozguroktaynar@gmail.com</strong> e-posta adresine veya <strong>+90 552 249 39 09</strong> numaralı telefona iletebilirsiniz. Başvurularınız en geç 30 (otuz) gün içinde değerlendirilerek sonuçlandırılacaktır.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Veri Saklama Süresi</h2>
            <p className="text-gray-700 leading-relaxed">
              Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca ve ilgili mevzuatta öngörülen saklama süreleri (tıbbi kayıtlar için minimum 15 yıl) boyunca saklanmaktadır. Sürenin sonunda veriler KVKK&apos;ya uygun şekilde silinir, yok edilir veya anonim hale getirilir.
            </p>
          </section>

          <div className="bg-gray-100 border-l-4 border-gray-500 p-4 mt-8">
            <p className="text-sm text-gray-600">
              <strong>Son Güncelleme:</strong> 7 Şubat 2026<br />
              Bu bilgilendirme metni, yasal düzenlemelere uyum amacıyla güncellenebilir.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
