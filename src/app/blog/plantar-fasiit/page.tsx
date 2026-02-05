import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plantar Fasiit (Fasciitis) Nedir? | Op. Dr. Özgür Oktay Nar",
  description: "Plantar fasiit, şiddetli topuk ağrılarının sebebi olan bir rahatsızlıktır. Belirtileri, nedenleri ve tedavi yöntemleri hakkında detaylı bilgi.",
};

export default function PlantarFasiitPage() {
  return (
    <article className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="text-blue-600 hover:text-blue-800 mb-6 inline-block">
          ← Blog&apos;a Dön
        </Link>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Plantar Fasiit (Fasciitis) Nedir?
        </h1>
        <time className="text-gray-500">2026-02-03</time>

        <div className="prose prose-lg mt-8 text-gray-700">
          <p>
            Plantar fasiit (fasciitis), genellikle şiddetli topuk ağrılarının sebebi olan bir rahatsızlıktır. Çoğu zaman topuk dikeni ile karıştırılabilen bu rahatsızlık, aslında &quot;Plantar fasya&quot; diye tabir edilen topuğun alt kısmındaki kasları çevreleyen bir bağ doku yapısıdır. Ortopedik olarak en çok görünen problemlerden biridir.
          </p>
          <p>
            Plantar fasiit rahatsızlığı, genellikle işi gereği sürekli ayakta çalışmak zorunda kalan kişilerde meydana gelir. Örnek olarak; öğretmenler, tezgâhtarlar, askerler ve bazı sporcular sayılabilir.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Plantar Fasiit&apos;in Sebebi Nedir?</h2>
          <p>
            Rahatsızlık sürekli ayakta durmaktan, obeziteye kadar birçok farklı nedenlerden dolayı gelişebilir. Yanlış ayakkabı kullanımı da bu rahatsızlığın önemli sebeplerinden biridir.
          </p>
          <p>
            Bu tür bir rahatsızlığı yaşamamak için kilonuza, fazla ayakta kalmamaya ve ayakkabı seçiminize dikkat etmeniz gerekir. Özellikle orta yaşlarda ortaya çıkan bu rahatsızlık, kendini şiddetli topuk ağrılarıyla belli etmektedir.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Plantar Fasiit Rahatsızlığının Sebepleri</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Uzun süre ayaklara yük bindirecek şekilde spor yapmak</li>
            <li>Sert zeminde koşu yapmak</li>
            <li>Uygun olmayan ayakkabı kullanımı</li>
            <li>Şişmanlık</li>
            <li>Ayak kavisinin çok yüksek olması</li>
            <li>Düz tabanlık</li>
            <li>Ayağın içe basması</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Plantar Fasiit Belirtileri</h2>
          <p>
            Plantar fasiit, sabahları yataktan kalkınca veya oturulan yerden kalkarken şiddetli ağrılara sebep olabilir. Yürümeye başladıktan kısa bir süre sonra bu ağrılar kaybolur. Fakat bu ağrılar zaman geçtikçe kendisini çok daha şiddetli bir biçimde hissettirebilir.
          </p>
          <p>
            Hastalar merdiven çıkma, uzun süre ayakta kalma gibi aktiviteleri yaparken oldukça zorlanabilmektedir. Bu şiddetli ağrıların yanında, ayağın alt kısmından topuğa doğru giden bir yanma hissi de görülebilir.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Plantar Fasiit Tedavisi</h2>
          <p>
            Plantar fasiit tedavisinde koruyucu tedavi yöntemleri tercih edilmektedir. Evde yapılabilecek bazı egzersizleri kapsayan bu tedavi türü ile ağrının azaltılması sağlanır. Tedavi sırasında hasta uzun süre ayakta durmaktan ve ağır yükler taşımaktan kaçınmalıdır.
          </p>
          <p>
            Uzun süren ağrıları olan hastalar için ayrıca ilaç tedavisi yapılabilir. Vücut dışına uygulanan şok dalga tedavisi, gece alçıları, gece atelleri ve bunların yanında fizik tedavi uygulamaları genellikle olumlu sonuçlar vermektedir.
          </p>
          <p>
            Nadiren de olsa; tüm bu tedavilere cevap vermeyen hastalarda cerrahi müdahale gerekebilir.
          </p>
        </div>

        <div className="mt-12 p-6 bg-green-50 rounded-xl">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Randevu Almak İster misiniz?</h3>
          <p className="text-gray-600 mb-4">Plantar fasiit tedavisi için muayenehaneye bekleriz.</p>
          <Link
            href="https://wa.me/905522493909"
            target="_blank"
            className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition inline-block"
          >
            📱 WhatsApp ile Randevu Al
          </Link>
        </div>
      </div>
    </article>
  );
}
