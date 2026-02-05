import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mozaikoplasti Nedir? | Op. Dr. Özgür Oktay Nar",
  description: "Mozaikoplasti, kıkırdak hasarlarında uygulanan etkili bir tedavi yöntemidir. Nasıl çalışır, kimlere uygulanır ve iyileşme süreci hakkında bilgi.",
};

export default function MozaikoplastiPage() {
  return (
    <article className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="text-blue-600 hover:text-blue-800 mb-6 inline-block">
          ← Blog&apos;a Dön
        </Link>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Mozaikoplasti Nedir?
        </h1>
        <time className="text-gray-500">2026-02-03</time>

        <div className="prose prose-lg mt-8 text-gray-700">
          <p>
            Mozaikoplasti, eklemin yük taşımayan bölgesinden 6-8 mm çapında ve 15 mm boyunda kıkırdak ve kemikten oluşan silindirik parçaların alınıp, bunların yük taşıyan bölgedeki hasarlı bölgeye nakledilmesidir.
          </p>
          <p>
            Bu teknik 4cm²&apos;nin altındaki hasarlarda uygulanır. En sık diz ve ayak bileği eklemlerinde uygulanır. Artroskopik veya açık yöntemle yapılabilir.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Mozaikoplasti Nasıl Çalışır?</h2>
          <p>
            Mozaikoplasti tekniğinde, eklem yüzeyinin yük taşımayan (fonksiyonel olarak daha az kullanılan) bölgelerinden silindirik şeklinde osteokondral greftler (kemik + kıkırdak birlikteliği) alınır. Bu greftler, kıkırdak kaybının olduğu alana yerleştirilir.
          </p>
          <p>
            Yerleştirilen bu küçük silindirler, yan yana dizilerek bir &quot;mozaik&quot; görünümü oluşturur; yöntem adını da buradan alır.
          </p>
          <p className="font-medium">Bu greftler:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Canlı ve sağlıklı kıkırdak dokusu içerir</li>
            <li>Kemik kısmı sayesinde alıcı bölgeye güçlü şekilde tutunur</li>
            <li>Zamanla çevre dokuyla biyolojik uyum geliştirir</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Hangi Durumlarda Uygulanır?</h2>
          <p>Mozaikoplasti genellikle şu durumlarda tercih edilir:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Travmaya bağlı kıkırdak kayıpları</li>
            <li>Spor yaralanmaları sonrası oluşan kıkırdak defektleri</li>
            <li>Sınırlı alanı etkileyen kıkırdak hasarları</li>
            <li>Eklem kireçlenmesinin erken evreleri (ileri artrozda uygun değildir)</li>
          </ul>
          <p className="mt-4">En uygun adaylar genellikle:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Genç ve orta yaşlı bireyler</li>
            <li>Eklem dizilimi bozuk olmayan hastalar</li>
            <li>Kıkırdak hasarı 1–4 cm² arasında olan kişiler</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Hedeflenen Kazanımlar</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Eklem yüzeyinde hiyalin kıkırdağa yakın bir yapı oluşturmak</li>
            <li>Ağrıyı azaltmak</li>
            <li>Eklem hareket açıklığını korumak veya artırmak</li>
            <li>İlerleyici kıkırdak yıkımını yavaşlatmak</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">İyileşme Süreci</h2>
          <p>Mozaikoplasti sonrası iyileşme süreci kontrollü ve aşamalıdır:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>İlk dönemde ekleme yük bindirilmez veya sınırlı yük verilir</li>
            <li>Fizik tedavi ile eklem hareketleri korunur</li>
            <li>Greftlerin kaynaması için zamana ihtiyaç vardır</li>
            <li>Tam fonksiyonel dönüş genellikle birkaç ayı bulur</li>
          </ul>
          <p className="mt-4">
            Başarılı bir sonuç için cerrahi teknik kadar, ameliyat sonrası rehabilitasyon da belirleyici rol oynar.
          </p>
        </div>

        <div className="mt-12 p-6 bg-green-50 rounded-xl">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Randevu Almak İster misiniz?</h3>
          <p className="text-gray-600 mb-4">Kıkırdak hasarları ve mozaikoplasti hakkında detaylı bilgi için muayenehaneye bekleriz.</p>
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
