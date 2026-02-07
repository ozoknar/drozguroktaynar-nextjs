import Link from "next/link";
import Image from "next/image";

const uzmanlikAlanlari = [
  { 
    title: "Ayak ve Ayak Bileği", 
    icon: "🦶", 
    desc: "Hareket kabiliyetinizi artıran ve yaşam kalitenizi yükselten özelleştirilmiş tedaviler sunuyoruz.",
    link: "/blog/ayak-bilegi-burkulmasi-ve-ne-zaman-gecer"
  },
  { 
    title: "Duruş Bozuklukları", 
    icon: "🧍", 
    desc: "Sağlıklı bir duruşa kavuşmanızı sağlamak için bireysel değerlendirmeler ve tedavi yöntemleri sunuyoruz.",
    link: "/blog/bel-fitigi-ameliyati-sonrasi-yuruyus-programi"
  },
  { 
    title: "Diz Tedavileri", 
    icon: "🦵", 
    desc: "Diz rahatsızlıklarınızı gidermek ve aktif yaşamınıza geri dönmenizi sağlamak için kişiye özel tedavi çözümleri.",
    link: "/blog/diz-kireclenmesi-tedavisi-2"
  },
  { 
    title: "Kalça Eklemi", 
    icon: "🏃", 
    desc: "Kalça eklemi sorunlarınızı gidermek ve hareket kabiliyetinizi artırmak için modern tedavi yöntemleri.",
    link: "/blog/kalca-protezi-nedir-ameliyati-nasil-yapilir"
  },
  { 
    title: "Omuz Tedavileri", 
    icon: "💪", 
    desc: "Omuz rahatsızlıklarınıza yönelik, ağrılarınızı hafifletip hareket kabiliyetinizi geri kazandıran çözümler.",
    link: "/blog/omuz-sikismasi-tedavisi-nedir-nasil-yapilir"
  },
  { 
    title: "Omurga Tedavileri", 
    icon: "🔙", 
    desc: "Boyun, sırt ve bel ağrılarınızı hafifletmek ve esnekliğinizi artırmak için kişiye özel tedavi yöntemleri.",
    link: "/blog/bel-fitigi-ameliyati-sonrasi-ise-donus"
  },
  { 
    title: "Dirsek Tedavileri", 
    icon: "💫", 
    desc: "Dirsek problemlerinizin teşhis ve tedavisinde, hareket kabiliyetinizi artıran kapsamlı çözümler.",
    link: "/blog/tenisci-dirsegi-lateral-epikondilit-nedir"
  },
  { 
    title: "El ve El Bileği", 
    icon: "✋", 
    desc: "El ve el bileği sorunlarınızı çözmek, günlük işlevlerinizi rahatça yerine getirmenizi sağlamak için tedaviler.",
    link: "/blog/karpal-tunel-sendromu-2"
  },
];

const tedaviYaklasimi = [
  {
    num: "01",
    title: "Yenilikçi Cerrahi Teknikler",
    desc: "Op. Dr. Özgür Oktay Nar, minimal invaziv ve artroskopik cerrahi gibi yenilikçi tekniklerle hastalarına daha az ağrı ve daha kısa iyileşme süreleri sunar."
  },
  {
    num: "02",
    title: "Bilimsel Temelli Yaklaşımlar",
    desc: "Bilimsel araştırmalara dayanan yaklaşımlarla en doğru tanı ve tedavi planlarını hastalarına sunar. Kanıta dayalı tıp uygulamalarıyla bireysel çözümler."
  },
  {
    num: "03",
    title: "Yüksek Kaliteli Tedavi",
    desc: "Her hastanın ihtiyaçlarına göre özel tedavi planları oluşturarak, en güncel ve etkili ortopedik yöntemleri uygular."
  }
];

const googleYorumlar = [
  {
    name: "Hayriye Cançeker",
    text: "Özgür bey herşeyden önce güler yüzlü insana güven veren bir doktor. Uyguladığı tedaviden biz çok memnun kaldık kendisine ve ekibine çok teşekkür ederiz.",
    rating: 5
  },
  {
    name: "Dilek Yılmaz",
    text: "Sadece fikir değerlendirmesi yapmak için şansımı denediğim ve ummadığım bi şekildi bana dizlerimle ilgili sesli mesaj atıp tüm MR sonuçlarımı değerlendiren ve beni yönlendiren bi dr tanımak gerçekten beni çok şaşırttı.",
    rating: 5
  },
  {
    name: "Cihan Beken",
    text: "Bel ağrımdan yürüyemiyordum çalışamıyordum. Tek hamleyle çözdü sıkıntımı çok teşekkür ederim Özgür bey iyiki sizin gibi değerli doktorlarımız var 🙏🌸",
    rating: 5
  },
  {
    name: "İbrahim Güleş",
    text: "Tam 1 yıl önce varis ameliyatı oldum ve çok çok memnunum çok şükür ağrım sızım o illet varis ağrısından eser kalmadı. Başta değerli doktorum Özgür hocam ve ekibine çok teşekkür ediyorum. 🙏🙏",
    rating: 5
  },
  {
    name: "Fatma Turhan",
    text: "Öncelikle merhaba size geldim çok memnun kaldım dizlerimin ağrısından çok kısa zamanda kurtuldum herkeze tavsiye ediyorum elinize sağlık Özgür bey ve ekibine çok teşekkür ederim.",
    rating: 5
  },
  {
    name: "Ebru Tuncer",
    text: "Hidrojel yaptırdım, çok memnunum, eskiye göre daha iyi yürüyorum. 6 ay takibe alıyor hocam, hastasını bırakmıyor, gittiğimizde de çok iyi karşılanıyoruz. Herkese tavsiye ediyorum.",
    rating: 5
  },
];

const sss = [
  {
    q: "Ortopedik sorunların belirtileri nelerdir?",
    a: "Ortopedik sorunlar genellikle ağrı, şişlik, hareket kısıtlılığı, deformiteler ve zayıflık gibi belirtilerle kendini gösterir."
  },
  {
    q: "Ortopedik tedavi yöntemleri nelerdir?",
    a: "Fizik tedavi, cerrahi müdahale, medikal tedavi, rehabilitasyon ve destekleyici cihazlar kullanımı bulunmaktadır."
  },
  {
    q: "Ameliyat sonrası iyileşme süreci ne kadar?",
    a: "İyileşme süreci, yapılan müdahaleye, hastanın genel sağlık durumuna ve rehabilitasyon sürecine bağlı olarak değişiklik gösterebilir."
  },
  {
    q: "Ortopedik sorunları nasıl önleyebilirim?",
    a: "Düzenli egzersiz, sağlıklı beslenme, uygun ayakkabı seçimi ve iyi duruş alışkanlıkları geliştirmek önemlidir."
  },
  {
    q: "Spor yaralanmalarında ne yapmalıyım?",
    a: "İlk olarak dinlenme, buz uygulaması ve yükseltme gibi ilk yardım önlemleri alınmalı, ardından ortopedi uzmanına başvurulmalıdır."
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#01CAB8] via-[#01A899] to-[#01867A] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Op. Dr. Özgür Oktay Nar
              </h1>
              <p className="text-2xl mb-4 text-white/90">
                Ortopedi ve Travmatoloji Uzmanı
              </p>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Bursa&apos;daki özel muayenehanemde siz değerli hastalarımı en güncel ve etkili tedavi yöntemleriyle sağlığınıza kavuşturmak için hizmet vermekteyim.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://wa.me/905522493909"
                  target="_blank"
                  className="inline-flex items-center justify-center bg-white text-[#01CAB8] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Randevu
                </Link>
                <Link
                  href="https://www.doktortakvimi.com/ozgur-oktay-nar/ortopedi-ve-travmatoloji/bursa"
                  target="_blank"
                  className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#01CAB8] transition"
                >
                  Online Randevu Al
                </Link>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <Image
                src="https://www.drozguroktaynar.com/wp-content/uploads/2024/10/Op.-Dr-Ozgur-Oktay-Nar.webp"
                alt="Op. Dr. Özgür Oktay Nar"
                width={400}
                height={500}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hakkımda Section */}
      <section id="hakkimda" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold text-[#01CAB8] uppercase tracking-wide mb-2">Hakkımda</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Op. Dr. Özgür Oktay Nar Kimdir?</h3>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Op. Dr. Özgür Oktay Nar, ortopedi ve travmatoloji alanında uzmanlaşmış, hastalarına bireysel ihtiyaçlarına uygun çözümler sunmayı ilke edinmiş bir hekimdir.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              1978 yılında Adana&apos;da doğan Dr. Nar, tıp eğitimini Samsun 19 Mayıs Üniversitesi Tıp Fakültesi&apos;nde tamamladıktan sonra, Kahramanmaraş Sütçü İmam Üniversitesi&apos;nde ortopedi ve travmatoloji alanında uzmanlık eğitimini başarıyla tamamlamıştır.
            </p>
            <div className="text-center mt-8">
              <Link
                href="/hakkimda"
                className="inline-flex items-center text-[#01CAB8] font-semibold hover:text-[#01A899] transition"
              >
                Daha Fazla Bilgi
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Uzmanlık Alanları */}
      <section id="uzmanlik" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold text-[#01CAB8] uppercase tracking-wide mb-2">Uzmanlık Alanlarım</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Tedavi Hizmetlerimiz</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {uzmanlikAlanlari.map((alan, index) => (
              <Link
                key={index}
                href={alan.link}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition group"
              >
                <div className="text-4xl mb-4">{alan.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#01CAB8] transition">
                  {alan.title}
                </h4>
                <p className="text-gray-600 text-sm">{alan.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Yenilikçi Tedaviler */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold text-[#01CAB8] uppercase tracking-wide mb-2">Yenilikçi, Hızlı, Etkili</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Yenilikçi Tedavilerle Cerrahi Deneyim</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {tedaviYaklasimi.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl font-bold text-[#01CAB8]/20 mb-4">{item.num}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Yorumları */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold text-[#01CAB8] uppercase tracking-wide mb-2">Google Yorumlar</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hastalarımız Ne Diyor?</h3>
            <div className="flex items-center justify-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600 font-medium">5.0 / 5.0 puan</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {googleYorumlar.map((yorum, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#01CAB8] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {yorum.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{yorum.name}</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(yorum.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{yorum.text}</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Google&apos;da yayınlandı
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link
              href="https://maps.app.goo.gl/roUyhK3y3jNvRzXU7"
              target="_blank"
              className="inline-flex items-center text-[#01CAB8] font-semibold hover:text-[#01A899] transition"
            >
              Tüm Google Yorumlarını Gör
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* SSS Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold text-[#01CAB8] uppercase tracking-wide mb-2">SSS</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Merak Ettikleriniz</h3>
          </div>
          <div className="space-y-4">
            {sss.map((item, index) => (
              <details key={index} className="bg-gray-50 rounded-xl p-6 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.q}
                  <svg className="w-5 h-5 text-[#01CAB8] transform group-open:rotate-180 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Ameliyatsız Çözümler CTA */}
      <section className="py-16 bg-gradient-to-r from-[#01CAB8] to-[#01867A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ameliyatsız Tedavi Yöntemleri</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            PRP, kök hücre, hidrojel ve fizik tedavi ile ameliyatsız çözümler hakkında bilgi alın.
          </p>
          <Link
            href="/ameliyatsiz-cozumler"
            className="inline-flex items-center bg-white text-[#01CAB8] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            Ameliyatsız Çözümleri İncele
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Randevu CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Bugün Randevunuzu Planlayın</h2>
              <p className="text-gray-300 mb-8">
                Ortopedik şikayetleriniz için en kısa sürede muayene olabilirsiniz. WhatsApp üzerinden hızlıca randevu alın.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#01CAB8] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span>Bağlarbaşı Mah. Sanayi Cad. 348/B No:46, Osmangazi/Bursa</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#01CAB8] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span>Pzt-Cuma: 09:00-17:00 | Cumartesi: 09:00-14:00</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link
                href="https://wa.me/905522493909"
                target="_blank"
                className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition shadow-lg text-lg"
              >
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp ile Randevu Al
              </Link>
              <p className="mt-4 text-gray-400">veya</p>
              <Link
                href="/iletisim"
                className="inline-block mt-4 text-[#01CAB8] font-semibold hover:text-[#34C5A1] transition"
              >
                İletişim Sayfasına Git →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
