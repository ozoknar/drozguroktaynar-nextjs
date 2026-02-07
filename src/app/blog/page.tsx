import Link from "next/link";
import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import PopularPostsSidebar from "@/components/PopularPostsSidebar";

export const metadata: Metadata = {
  title: "Blog | Op. Dr. Özgür Oktay Nar - Ortopedi Uzmanı Bursa",
  description:
    "Ortopedi ve travmatoloji hakkında faydalı bilgiler, tedavi yöntemleri ve sağlık tavsiyeleri. Diz, kalça, omuz, ayak bileği ve daha fazlası.",
  keywords:
    "ortopedi blog, diz ağrısı, kalça protezi, omuz tedavisi, bursa ortopedi",
};

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category?: string;
}

// Blog post titles mapped from slugs
const blogPostData: Record<string, { title: string; excerpt: string; date: string; category?: string }> = {
  "plantar-fasiit-fasciitis-nedir": {
    title: "Plantar Fasiit (Fasciitis) Nedir?",
    excerpt: "Plantar fasiit, genellikle şiddetli topuk ağrılarının sebebi olan bir rahatsızlıktır.",
    date: "2026-02-03",
    category: "Ayak",
  },
  "mozaikoplasti": {
    title: "Mozaikoplasti Nedir?",
    excerpt: "Eklemin yük taşımayan bölgesinden alınan kıkırdak ve kemik parçalarının hasarlı bölgeye nakli.",
    date: "2026-02-03",
    category: "Diz",
  },
  "stres-kirigi-tedavisi": {
    title: "Stres Kırığı Tedavisi",
    excerpt: "Stres kırığı, kemiklerde tekrarlayan basınç sonucu oluşan mikro çatlaklardır.",
    date: "2026-02-03",
    category: "Genel",
  },
  "diz-kireclenmesi-tedavisi-2": {
    title: "Diz Kireçlenmesi Tedavisi",
    excerpt: "Diz kireçlenmesi (osteoartrit) belirtileri, nedenleri ve modern tedavi yöntemleri.",
    date: "2026-01-25",
    category: "Diz",
  },
  "kalca-protezi-nedir-ameliyati-nasil-yapilir": {
    title: "Kalça Protezi Nedir? Ameliyatı Nasıl Yapılır?",
    excerpt: "Kalça protezi ameliyatı hakkında merak edilenler ve iyileşme süreci.",
    date: "2026-01-24",
    category: "Kalça",
  },
  "omuz-sikismasi-tedavisi-nedir-nasil-yapilir": {
    title: "Omuz Sıkışması Tedavisi",
    excerpt: "Omuz sıkışma sendromu belirtileri, tanısı ve tedavi seçenekleri.",
    date: "2026-01-22",
    category: "Omuz",
  },
  "rotator-manset-yirtigi-tedavisi": {
    title: "Rotator Manşet Yırtığı Tedavisi",
    excerpt: "Rotator manşet yırtıklarında ameliyatlı ve ameliyatsız tedavi yöntemleri.",
    date: "2026-01-21",
    category: "Omuz",
  },
  "total-diz-protezi-nedir-tedavisi-nasil-yapilir": {
    title: "Total Diz Protezi Nedir?",
    excerpt: "Diz protezi ameliyatı kimlere uygulanır, iyileşme süreci nasıldır?",
    date: "2026-01-20",
    category: "Diz",
  },
  "meniskus-yirtilmasi-belirtileri-ve-tedavisi": {
    title: "Menisküs Yırtılması Belirtileri ve Tedavisi",
    excerpt: "Menisküs yırtığı neden olur, nasıl tedavi edilir?",
    date: "2026-01-19",
    category: "Diz",
  },
  "topuk-dikeni-nedir": {
    title: "Topuk Dikeni Nedir?",
    excerpt: "Topuk dikeni nedenleri, belirtileri ve etkili tedavi yöntemleri.",
    date: "2026-01-18",
    category: "Ayak",
  },
  "bankart-lezyonu-nedir": {
    title: "Bankart Lezyonu Nedir?",
    excerpt: "Omuz çıkığı sonrası oluşan Bankart lezyonu ve tedavisi.",
    date: "2025-11-15",
    category: "Omuz",
  },
  "hill-sachs-lezyonu-nedir": {
    title: "Hill-Sachs Lezyonu Nedir?",
    excerpt: "Omuz instabilitesinde Hill-Sachs lezyonu ve tedavi yaklaşımları.",
    date: "2025-11-14",
    category: "Omuz",
  },
  "slap-lezyonu-nedir": {
    title: "SLAP Lezyonu Nedir?",
    excerpt: "Superior labrum anterior posterior (SLAP) yırtığı hakkında bilgiler.",
    date: "2025-11-13",
    category: "Omuz",
  },
  "karpal-tunel-sendromu-2": {
    title: "Karpal Tünel Sendromu",
    excerpt: "El ve bilekte uyuşma, karıncalanma yapan karpal tünel sendromu tedavisi.",
    date: "2026-01-17",
    category: "El",
  },
  "bel-fitigi-ameliyati-sonrasi-ise-donus": {
    title: "Bel Fıtığı Ameliyatı Sonrası İşe Dönüş",
    excerpt: "Bel fıtığı ameliyatı sonrası iyileşme süreci ve işe dönüş rehberi.",
    date: "2025-09-10",
    category: "Bel",
  },
  "hidrojel-sivi-diz-protezi-nedir-2": {
    title: "Hidrojel (Sıvı) Diz Protezi Nedir?",
    excerpt: "Diz kireçlenmesinde yeni nesil hidrojel tedavisi hakkında bilgiler.",
    date: "2024-02-15",
    category: "Diz",
  },
  "kok-hucre-tedavisi-2": {
    title: "Kök Hücre Tedavisi",
    excerpt: "Ortopedide kök hücre tedavisi uygulamaları ve sonuçları.",
    date: "2025-09-05",
    category: "Tedavi",
  },
  "ayak-bilegi-burkulmasi-ve-ne-zaman-gecer": {
    title: "Ayak Bileği Burkulmasi Ne Zaman Geçer?",
    excerpt: "Ayak bileği burkulmalarında iyileşme süreci ve dikkat edilmesi gerekenler.",
    date: "2025-08-20",
    category: "Ayak",
  },
  "dupuytren-kontrakturu-nedir": {
    title: "Dupuytren Kontraktürü Nedir?",
    excerpt: "El parmaklarında bükülmeye neden olan Dupuytren hastalığı ve tedavisi.",
    date: "2026-01-16",
    category: "El",
  },
  "tenisci-dirsegi-lateral-epikondilit-nedir": {
    title: "Tenisçi Dirseği (Lateral Epikondilit) Nedir?",
    excerpt: "Dirsek dış yüzeyinde ağrıya neden olan tenisçi dirseği tedavisi.",
    date: "2026-01-15",
    category: "Dirsek",
  },
  "golfcu-dirsegi-medial-epikondilit-nedir": {
    title: "Golfçü Dirseği (Medial Epikondilit) Nedir?",
    excerpt: "Dirsek iç yüzeyinde ağrıya neden olan golfçü dirseği tedavisi.",
    date: "2026-01-14",
    category: "Dirsek",
  },
  "omuz-kireclenmesi-tedavisi": {
    title: "Omuz Kireçlenmesi Tedavisi",
    excerpt: "Omuz artrozu belirtileri ve güncel tedavi yöntemleri.",
    date: "2026-01-23",
    category: "Omuz",
  },
  "kalca-artroskopisi-nedir": {
    title: "Kalça Artroskopisi Nedir?",
    excerpt: "Kalça ekleminin kapalı yöntemle tedavisinde artroskopi uygulamaları.",
    date: "2025-11-10",
    category: "Kalça",
  },
  "ayak-bilegi-artroskopisi-nedir": {
    title: "Ayak Bileği Artroskopisi Nedir?",
    excerpt: "Ayak bileği problemlerinin artroskopik tedavisi.",
    date: "2026-01-12",
    category: "Ayak",
  },
  "el-bilegi-artroskopisi": {
    title: "El Bileği Artroskopisi",
    excerpt: "El bileği ağrılarında artroskopik tanı ve tedavi.",
    date: "2024-10-15",
    category: "El",
  },
  "omuz-protezi-nedir": {
    title: "Omuz Protezi Nedir?",
    excerpt: "İleri evre omuz kireçlenmesinde protez ameliyatı.",
    date: "2025-11-08",
    category: "Omuz",
  },
  "diz-anatomisi-nedir": {
    title: "Diz Anatomisi Nedir?",
    excerpt: "Diz ekleminin yapısı, bağları ve fonksiyonları.",
    date: "2025-11-20",
    category: "Diz",
  },
  "omuz-anatomisi-eklemin-yapisi-kaslari-ve-fonksiyonlari-nedir": {
    title: "Omuz Anatomisi",
    excerpt: "Omuz ekleminin yapısı, kasları ve fonksiyonları hakkında detaylı bilgi.",
    date: "2025-11-18",
    category: "Omuz",
  },
  "kalca-anatomisi-ve-minimal-invaziv-kalca-protezi": {
    title: "Kalça Anatomisi ve Minimal İnvaziv Kalça Protezi",
    excerpt: "Kalça eklem yapısı ve az kesi ile yapılan protez ameliyatı.",
    date: "2025-11-16",
    category: "Kalça",
  },
  "rotator-kuf-sendromu-nedir": {
    title: "Rotator Kuff Sendromu Nedir?",
    excerpt: "Omuz kaslarını etkileyen rotator kuff sendromu belirtileri ve tedavisi.",
    date: "2025-11-12",
    category: "Omuz",
  },
  "priformis-sendromu-nedir": {
    title: "Piriformis Sendromu Nedir?",
    excerpt: "Kalça ve bacak ağrısına neden olan piriformis sendromu.",
    date: "2025-11-05",
    category: "Kalça",
  },
  "pleksus-yaralanmalari-nedir": {
    title: "Pleksus Yaralanmaları Nedir?",
    excerpt: "Brakiyal pleksus yaralanmaları ve tedavi yaklaşımları.",
    date: "2025-11-04",
    category: "Genel",
  },
};

// En çok okunan yazılar (popüler konular)
export const popularPosts = [
  { slug: "diz-kireclenmesi-tedavisi-2", title: "Diz Kireçlenmesi Tedavisi" },
  { slug: "meniskus-yirtilmasi-belirtileri-ve-tedavisi", title: "Menisküs Yırtılması" },
  { slug: "topuk-dikeni-nedir", title: "Topuk Dikeni Nedir?" },
  { slug: "kalca-protezi-nedir-ameliyati-nasil-yapilir", title: "Kalça Protezi Ameliyatı" },
  { slug: "rotator-manset-yirtigi-tedavisi", title: "Rotator Manşet Yırtığı" },
  { slug: "total-diz-protezi-nedir-tedavisi-nasil-yapilir", title: "Total Diz Protezi" },
  { slug: "karpal-tunel-sendromu-2", title: "Karpal Tünel Sendromu" },
  { slug: "plantar-fasiit-fasciitis-nedir", title: "Plantar Fasiit" },
  { slug: "tenisci-dirsegi-lateral-epikondilit-nedir", title: "Tenisçi Dirseği" },
  { slug: "omuz-sikismasi-tedavisi-nedir-nasil-yapilir", title: "Omuz Sıkışması" },
];

// Kategoriler
const categories = [
  { name: "Tümü", slug: "" },
  { name: "Diz", slug: "diz" },
  { name: "Omuz", slug: "omuz" },
  { name: "Kalça", slug: "kalca" },
  { name: "Ayak", slug: "ayak" },
  { name: "El", slug: "el" },
  { name: "Dirsek", slug: "dirsek" },
  { name: "Bel", slug: "bel" },
];

function slugToTitle(slug: string): string {
  if (blogPostData[slug]) {
    return blogPostData[slug].title;
  }
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .replace(/Nedir$/, "Nedir?")
    .replace(/Nasil/, "Nasıl")
    .replace(/Tedavisi$/, "Tedavisi");
}

function slugToExcerpt(slug: string): string {
  if (blogPostData[slug]) {
    return blogPostData[slug].excerpt;
  }
  return `${slugToTitle(slug)} hakkında detaylı bilgi, belirtiler, tanı ve tedavi yöntemleri.`;
}

function slugToDate(slug: string): string {
  if (blogPostData[slug]) {
    return blogPostData[slug].date;
  }
  return "2026-01-01";
}

function slugToCategory(slug: string): string {
  if (blogPostData[slug]?.category) {
    return blogPostData[slug].category!;
  }
  return "Genel";
}

function getBlogPosts(): BlogPost[] {
  const blogDir = path.join(process.cwd(), "src/app/blog");
  const entries = fs.readdirSync(blogDir, { withFileTypes: true });

  const posts: BlogPost[] = entries
    .filter((entry) => entry.isDirectory() && entry.name !== "page.tsx")
    .map((entry) => ({
      slug: entry.name,
      title: slugToTitle(entry.name),
      excerpt: slugToExcerpt(entry.name),
      date: slugToDate(entry.name),
      category: slugToCategory(entry.name),
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export default function BlogPage() {
  const blogPosts = getBlogPosts();

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600">
            Ortopedi ve travmatoloji hakkında {blogPosts.length} faydalı yazı
          </p>
        </div>

        {/* Kategori Navigasyonu */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <span
              key={cat.slug}
              className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-[#01CAB8] hover:text-white hover:border-[#01CAB8] transition cursor-pointer text-sm font-medium"
            >
              {cat.name}
            </span>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Ana İçerik - Blog Yazıları */}
          <div className="lg:w-2/3">
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <time className="text-sm text-gray-500">{post.date}</time>
                        {post.category && (
                          <span className="text-xs bg-[#01CAB8]/10 text-[#01CAB8] px-2 py-1 rounded-full">
                            {post.category}
                          </span>
                        )}
                      </div>
                      <h2 className="text-lg font-semibold text-gray-900 mb-3 hover:text-[#01CAB8] transition line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {post.excerpt}
                      </p>
                      <span className="inline-block mt-4 text-[#01CAB8] font-medium text-sm">
                        Devamını Oku →
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar - En Çok Okunanlar */}
          <div className="lg:w-1/3">
            <PopularPostsSidebar posts={popularPosts} />
          </div>
        </div>
      </div>
    </div>
  );
}
