import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stres Kırığı Tedavisi | Op. Dr. Özgür Oktay Nar",
  description: "Stres kırığı nedir, belirtileri ve tedavi yöntemleri. Sporcularda sık görülen bu rahatsızlık hakkında detaylı bilgi.",
};

export default function StresKirigiPage() {
  return (
    <article className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="text-blue-600 hover:text-blue-800 mb-6 inline-block">
          ← Blog&apos;a Dön
        </Link>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Stres Kırığı Tedavisi
        </h1>
        <time className="text-gray-500">2026-02-03</time>

        <div className="prose prose-lg mt-8 text-gray-700">
          <p>
            Stres kırığı, aslında tam olarak bir kırık değildir. Ayağın yük taşıması sırasında her bölgenin farklı işlevleri vardır. Yürüyüş esnasında ayağın her bölgesi belli miktarda yük taşır.
          </p>
          <p>
            Ancak ayağın anatomik yapısı zorlanırsa ve yanlış yerlere fazla miktarda yük bindirilirse kemiğin basınç altında kalmasına sebep olunur. Basınç ise tarak ve kaval kemiklerinde ödeme neden olur. Ödem geliştikçe kemiğin içerisindeki basıncı arttırır. Bu basınç ise hastaya ağrı olarak yansır.
          </p>
          <p>
            Stres kırığı daha çok alt baldır kemikleri ve ayak tarak kemiklerinde meydana gelir. Bunun sonucunda ise küçük çatlaklar meydana gelir.
          </p>
          <p>
            Araştırmalar sonucu stres kırığının daha çok enerji gerektiren sporları yapan kişilerde oluştuğu görülmüştür. Bu enerji gerektiren sporlar ise basketbol, tenis, atletizm gibi sporlardır. Çünkü bu sporlarda zemine ayak çarpma hareketi daha çok yapılır.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Stres Kırığı Belirtileri</h2>
          <p>Stres kırığının birçok belirtisi bulunmaktadır:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Kırık bölgeye dokunulduğunda hassasiyet</li>
            <li>Ayağın üzerinde ve ayak bileği dışında şişlik</li>
            <li>Vücuda ağırlık yükleyen aktivitelerde ağrının artması ve dinlenince azalması</li>
            <li>Ağrının olduğu kısımlarda morluklar</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Stres Kırığı Tedavisi</h2>
          <p>
            Tedavisindeki en önemli aşama, hastanın stres yüke sebep olan faktörünü ortadan kaldırmaktır. Bunun için öncelikle doğru ayakkabı seçilmelidir.
          </p>
          <p>
            Tedavi sürecinde:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>İlk üç haftada istirahat edilmelidir</li>
            <li>Problem olan ayağın üzerine kesinlikle yük verilmemelidir</li>
            <li>Takip eden 3-6 hafta arasında hafif yük verilmelidir</li>
            <li>Problemli bölge alçıya alınabilir</li>
            <li>Hasta yumuşak ve koruyucu ayakkabıları tercih etmelidir</li>
          </ul>
          <p className="mt-4">
            Bu hastalığın tanısı koyulurken kullanılan en etkili yöntem MRI&apos;dır. Bahsedilen uygulamaların tümü cerrahi dışı yöntemlerdir. Ancak hasta bu yöntemlerden herhangi birisine cevap vermezse cerrahi uygulamalara başvurulabilir.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tedavi Sonrası</h2>
          <p>
            Stres kırığı tedavi edildikten sonra, aktivitelere dönüş için acele edilmemelidir. Egzersizlerin hızı, süresi ve mesafesi kademeli olarak arttırılmalı ve ayak kemiğinin çok fazla zorlanmasının önüne geçilmelidir.
          </p>
        </div>

        <div className="mt-12 p-6 bg-green-50 rounded-xl">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Randevu Almak İster misiniz?</h3>
          <p className="text-gray-600 mb-4">Stres kırığı tedavisi için muayenehaneye bekleriz.</p>
          <Link
            href="https://wa.me/905522493909"
            target="_blank"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition inline-block"
          >
            📱 WhatsApp ile Randevu Al
          </Link>
        </div>
      </div>
    </article>
  );
}
