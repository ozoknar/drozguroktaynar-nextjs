import Link from "next/link";

const uzmanlikAlanlari = [
  { title: "Ayak ve Ayak Bileği", icon: "🦶", desc: "Hareket kabiliyetinizi artıran özelleştirilmiş tedaviler" },
  { title: "Duruş Bozuklukları", icon: "🧍", desc: "Sağlıklı duruşa kavuşmanız için bireysel değerlendirmeler" },
  { title: "Diz Tedavileri", icon: "🦵", desc: "Aktif yaşamınıza geri dönmeniz için kişiye özel çözümler" },
  { title: "Kalça Eklemi", icon: "🏃", desc: "Hareket kabiliyetinizi artıran modern tedavi yöntemleri" },
  { title: "Omuz Tedavileri", icon: "💪", desc: "Ağrılarınızı hafifletip hareket kabiliyetinizi geri kazandıran çözümler" },
  { title: "Omurga Tedavileri", icon: "🔙", desc: "Boyun, sırt ve bel ağrılarınız için kişiye özel tedaviler" },
  { title: "Dirsek Tedavileri", icon: "💫", desc: "Hareket kabiliyetinizi artıran kapsamlı çözümler" },
  { title: "El ve El Bileği", icon: "✋", desc: "Günlük işlevlerinizi rahatça yerine getirmeniz için en uygun tedaviler" },
];

const tedaviYaklasimi = [
  {
    num: "01",
    title: "Yenilikçi Cerrahi Teknikler",
    desc: "Minimal invaziv ve artroskopik cerrahi gibi yenilikçi tekniklerle daha az ağrı ve daha kısa iyileşme süreleri."
  },
  {
    num: "02",
    title: "Bilimsel Temelli Yaklaşımlar",
    desc: "Kanıta dayalı tıp uygulamalarıyla bireysel ihtiyaçlarınıza uygun çözümler."
  },
  {
    num: "03",
    title: "Yüksek Kaliteli Tedavi",
    desc: "Her hastanın ihtiyaçlarına göre özel tedavi planları ve teknolojik yenilikler."
  }
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Op. Dr. Özgür Oktay Nar
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              Ortopedi ve Travmatoloji Uzmanı
            </p>
            <p className="text-lg max-w-3xl mx-auto text-blue-100 mb-8">
              Bursa&apos;daki özel muayenehanemde siz değerli hastalarımı en güncel ve etkili tedavi yöntemleriyle sağlığınıza kavuşturmak için hizmet vermekteyim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://wa.me/905522493909"
                target="_blank"
                className="bg-green-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition"
              >
                📱 WhatsApp Randevu
              </Link>
              <Link
                href="/#uzmanlik"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition"
              >
                Uzmanlık Alanlarım
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hakkımda */}
      <section id="hakkimda" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hakkımda</h2>
            <p className="text-xl text-gray-600">Op. Dr. Özgür Oktay Nar Kimdir?</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              Op. Dr. Özgür Oktay Nar, ortopedi ve travmatoloji alanında uzmanlaşmış, hastalarına bireysel ihtiyaçlarına uygun çözümler sunmayı ilke edinmiş bir hekimdir. 1978 yılında Adana&apos;da doğan Dr. Nar, tıp eğitimini Samsun 19 Mayıs Üniversitesi Tıp Fakültesi&apos;nde tamamladıktan sonra, Kahramanmaraş Sütçü İmam Üniversitesi&apos;nde ortopedi ve travmatoloji alanında uzmanlık eğitimini başarıyla tamamlamıştır.
            </p>
          </div>
        </div>
      </section>

      {/* Uzmanlık Alanları */}
      <section id="uzmanlik" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Uzmanlık Alanlarım</h2>
            <p className="text-xl text-gray-600">Ortopedi Kliniği&apos;nde hastalarımıza mümkün olan en iyi bakımı sunmaktan gurur duyuyoruz.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {uzmanlikAlanlari.map((alan, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="text-4xl mb-4">{alan.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{alan.title}</h3>
                <p className="text-gray-600 text-sm">{alan.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tedavi Yaklaşımı */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Yenilikçi Tedavilerle Cerrahi Deneyim</h2>
            <p className="text-xl text-gray-600">Yenilikçi, hızlı, etkili</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tedaviYaklasimi.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-5xl font-bold text-blue-600 mb-4">{item.num}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Hareketin Gücüyle Sağlığınızı Yenileyin!</h2>
          <p className="text-xl mb-8 text-green-100">
            Randevunuzu hemen planlayın, sağlıklı bir yaşama adım atın.
          </p>
          <Link
            href="https://wa.me/905522493909"
            target="_blank"
            className="bg-white text-green-600 px-10 py-4 rounded-lg text-xl font-semibold hover:bg-green-50 transition inline-block"
          >
            📱 WhatsApp ile Randevu Al
          </Link>
        </div>
      </section>

      {/* Blog Tanıtımı */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Blog Yazılarım</h2>
            <p className="text-xl text-gray-600">Ortopedi hakkında faydalı bilgiler</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/blog/plantar-fasiit" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition group">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                Plantar Fasiit (Fasciitis) Nedir?
              </h3>
              <p className="text-gray-600 text-sm">Şiddetli topuk ağrılarının sebebi olan plantar fasiit hakkında detaylı bilgi...</p>
            </Link>
            <Link href="/blog/mozaikoplasti" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition group">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                Mozaikoplasti Nedir?
              </h3>
              <p className="text-gray-600 text-sm">Kıkırdak hasarlarında uygulanan mozaikoplasti tekniği hakkında...</p>
            </Link>
            <Link href="/blog/stres-kirigi" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition group">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                Stres Kırığı Tedavisi
              </h3>
              <p className="text-gray-600 text-sm">Sporcularda sık görülen stres kırığı ve tedavi yöntemleri...</p>
            </Link>
          </div>
          <div className="text-center mt-8">
            <Link href="/blog" className="text-blue-600 font-semibold hover:text-blue-800 transition">
              Tüm Yazıları Gör →
            </Link>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sık Sorulan Sorular</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "Ortopedik sorunların belirtileri nelerdir?", a: "Ortopedik sorunlar genellikle ağrı, şişlik, hareket kısıtlılığı, deformiteler ve zayıflık gibi belirtilerle kendini gösterir." },
              { q: "Ortopedik tedavi yöntemleri nelerdir?", a: "Fizik tedavi, cerrahi müdahale, medikal tedavi, rehabilitasyon ve destekleyici cihazlar kullanımı bulunmaktadır." },
              { q: "Ameliyat sonrası iyileşme süreci ne kadar?", a: "Yapılan müdahaleye, hastanın genel sağlık durumuna ve rehabilitasyon sürecine bağlı olarak değişiklik gösterebilir." },
              { q: "Ortopedik sorunları nasıl önleyebilirim?", a: "Düzenli egzersiz, sağlıklı beslenme, uygun ayakkabı seçimi ve iyi duruş alışkanlıkları geliştirmek önemlidir." },
            ].map((item, idx) => (
              <details key={idx} className="bg-white p-4 rounded-lg shadow-sm group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.q}
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-3 text-gray-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
