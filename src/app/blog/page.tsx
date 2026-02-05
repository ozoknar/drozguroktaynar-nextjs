import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Op. Dr. Özgür Oktay Nar",
  description: "Ortopedi ve travmatoloji hakkında faydalı bilgiler, tedavi yöntemleri ve sağlık tavsiyeleri.",
};

const blogPosts = [
  {
    slug: "plantar-fasiit",
    title: "Plantar Fasiit (Fasciitis) Nedir?",
    excerpt: "Plantar fasiit, genellikle şiddetli topuk ağrılarının sebebi olan bir rahatsızlıktır. Çoğu zaman topuk dikeni ile karıştırılabilen bu rahatsızlık hakkında detaylı bilgi...",
    date: "2026-02-03",
  },
  {
    slug: "mozaikoplasti",
    title: "Mozaikoplasti Nedir?",
    excerpt: "Mozaikoplasti, eklemin yük taşımayan bölgesinden alınan kıkırdak ve kemik parçalarının hasarlı bölgeye nakledilmesi işlemidir...",
    date: "2026-02-03",
  },
  {
    slug: "stres-kirigi",
    title: "Stres Kırığı Tedavisi",
    excerpt: "Stres kırığı, aslında tam olarak bir kırık değildir. Ayağın yük taşıması sırasında oluşan basınç sonucu kemiklerde meydana gelen çatlaklardır...",
    date: "2026-02-03",
  },
];

export default function BlogPage() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600">
            Ortopedi ve travmatoloji hakkında faydalı bilgiler
          </p>
        </div>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <Link href={`/blog/${post.slug}`}>
                <time className="text-sm text-gray-500">{post.date}</time>
                <h2 className="text-2xl font-semibold text-gray-900 mt-2 mb-3 hover:text-blue-600 transition">
                  {post.title}
                </h2>
                <p className="text-gray-600">{post.excerpt}</p>
                <span className="inline-block mt-4 text-blue-600 font-medium">
                  Devamını Oku →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
