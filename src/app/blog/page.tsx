import Link from "next/link";
import Image from "next/image";
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
  image?: string;
}

// Blog post data with images
const blogPostData: Record<string, { title: string; excerpt: string; date: string; category?: string; image?: string }> = {
  "plantar-fasiit-fasciitis-nedir": {
    title: "Plantar Fasiit (Fasciitis) Nedir?",
    excerpt: "Plantar fasiit, genellikle şiddetli topuk ağrılarının sebebi olan bir rahatsızlıktır.",
    date: "2026-02-03",
    category: "Ayak",
    image: "https://www.drozguroktaynar.com/wp-content/uploads/2026/01/Plantar-fasiit-fasciitis-nedir.webp",
  },
  "mozaikoplasti": {
    title: "Mozaikoplasti Nedir?",
    excerpt: "Eklemin yük taşımayan bölgesinden alınan kıkırdak ve kemik parçalarının hasarlı bölgeye nakli.",
    date: "2026-02-03",
    category: "Diz",
    image: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2025/02/diz-kapaginin-arkasinda-agri-ve-gerilme-scaled.jpg",
  },
  "stres-kirigi-tedavisi": {
    title: "Stres Kırığı Tedavisi",
    excerpt: "Stres kırığı, kemiklerde tekrarlayan basınç sonucu oluşan mikro çatlaklardır.",
    date: "2026-02-03",
    category: "Genel",
    image: "https://www.drozguroktaynar.com/wp-content/uploads/2026/02/stres-kiriklari-600x371-1.jpg",
  },
  "diz-kireclenmesi-tedavisi-2": {
    title: "Diz Kireçlenmesi Tedavisi",
    excerpt: "Diz kireçlenmesi (osteoartrit) belirtileri, nedenleri ve modern tedavi yöntemleri.",
    date: "2026-01-25",
    category: "Diz",
    image: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/01/diz_kireclenmesi.jpg",
  },
  "kalca-protezi-nedir-ameliyati-nasil-yapilir": {
    title: "Kalça Protezi Nedir? Ameliyatı Nasıl Yapılır?",
    excerpt: "Kalça protezi ameliyatı hakkında merak edilenler ve iyileşme süreci.",
    date: "2026-01-24",
    category: "Kalça",
    image: "https://www.drozguroktaynar.com/wp-content/uploads/2025/11/Kalca-Protezi.webp",
  },
  "omuz-sikismasi-tedavisi-nedir-nasil-yapilir": {
    title: "Omuz Sıkışması Tedavisi",
    excerpt: "Omuz sıkışma sendromu belirtileri, tanısı ve tedavi seçenekleri.",
    date: "2026-01-22",
    category: "Omuz",
    image: "https://www.drozguroktaynar.com/wp-content/uploads/2025/11/omuz_sikisma_sendromu.webp",
  },
  "rotator-manset-yirtigi-tedavisi": {
    title: "Rotator Manşet Yırtığı Tedavisi",
    excerpt: "Rotator manşet yırtıklarında ameliyatlı ve ameliyatsız tedavi yöntemleri.",
    date: "2026-01-21",
    category: "Omuz",
    image: "https://www.drozguroktaynar.com/wp-content/uploads/2025/11/Rotator-Manset-Yirtigi-Tedavisi.webp",
  },
  "total-diz-protezi-nedir-tedavisi-nasil-yapilir": {
    title: "Total Diz Protezi Nedir?",
    excerpt: "Diz protezi ameliyatı kimlere uygulanır, iyileşme süreci nasıldır?",
    date: "2026-01-20",
    category: "Diz",
    image: "https://www.drozguroktaynar.com/wp-content/uploads/2025/11/Total-Diz-Protezi-Nedir-Tedavisi-Nasil-Yapilir.jpg",
  },
  "meniskus-yirtilmasi-belirtileri-ve-tedavisi": {
    title: "Menisküs Yırtılması Belirtileri ve Tedavisi",
    excerpt: "Menisküs yırtığı neden olur, nasıl tedavi edilir?",
    date: "2026-01-19",
    category: "Diz",
    image: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/01/meniskus_yirtigi.jpg",
  },
  "topuk-dikeni-nedir": {
    title: "Topuk Dikeni Nedir?",
    excerpt: "Topuk dikeni nedenleri, belirtileri ve etkili tedavi yöntemleri.",
    date: "2026-01-18",
    category: "Ayak",
    image: "https://www.drozguroktaynar.com/wp-content/uploads/2026/01/Topuk-Dikeni.webp",
  },
  "karpal-tunel-sendromu-2": {
    title: "Karpal Tünel Sendromu",
    excerpt: "El ve bilekte uyuşma, karıncalanma yapan karpal tünel sendromu tedavisi.",
    date: "2026-01-17",
    category: "El",
    image: "https://www.drozguroktaynar.com/wp-content/uploads/2026/01/Karpal-Tunel1a.jpg",
  },
  "dupuytren-kontrakturu-nedir": {
    title: "Dupuytren Kontraktürü Nedir?",
    excerpt: "El parmaklarında bükülmeye neden olan Dupuytren hastalığı ve tedavisi.",
    date: "2026-01-16",
    category: "El",
    image: "https://www.drozguroktaynar.com/wp-content/uploads/2026/01/dupuytren_hastaligi_nedir.webp",
  },
  "tenisci-dirsegi-lateral-epikondilit-nedir": {
    title: "Tenisçi Dirseği (Lateral Epikondilit) Nedir?",
    excerpt: "Dirsek dış yüzeyinde ağrıya neden olan tenisçi dirseği tedavisi.",
    date: "2026-01-15",
    category: "Dirsek",
    image: "https://www.drozguroktaynar.com/wp-content/uploads/2026/01/resim.jpg",
  },
  "golfcu-dirsegi-medial-epikondilit-nedir": {
    title: "Golfçü Dirseği (Medial Epikondilit) Nedir?",
    excerpt: "Dirsek iç yüzeyinde ağrıya neden olan golfçü dirseği tedavisi.",
    date: "2026-01-14",
    category: "Dirsek",
    image: "https://www.drozguroktaynar.com/wp-content/uploads/2026/01/Golfcu-Dirsegi.webp",
  },
  "omuz-kireclenmesi-tedavisi": {
    title: "Omuz Kireçlenmesi Tedavisi",
    excerpt: "Omuz artrozu belirtileri ve güncel tedavi yöntemleri.",
    date: "2026-01-23",
    category: "Omuz",
    image: "https://www.drozguroktaynar.com/wp-content/uploads/2025/11/omuz-kireclenmesi.webp",
  },
  "ayak-bilegi-artroskopisi-nedir": {
    title: "Ayak Bileği Artroskopisi Nedir?",
    excerpt: "Ayak bileği problemlerinin artroskopik tedavisi.",
    date: "2026-01-12",
    category: "Ayak",
    image: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2025/10/ayak_bilegi_tedavisi.jpg",
  },
  "diz-anatomisi-nedir": {
    title: "Diz Anatomisi Nedir?",
    excerpt: "Diz ekleminin yapısı, bağları ve fonksiyonları.",
    date: "2025-11-20",
    category: "Diz",
    image: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/01/diz_anatomisi.jpg",
  },
  "omuz-anatomisi-eklemin-yapisi-kaslari-ve-fonksiyonlari-nedir": {
    title: "Omuz Anatomisi",
    excerpt: "Omuz ekleminin yapısı, kasları ve fonksiyonları hakkında detaylı bilgi.",
    date: "2025-11-18",
    category: "Omuz",
    image: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/04/omuz_artroskopisi.jpg",
  },
  "kalca-anatomisi-ve-minimal-invaziv-kalca-protezi": {
    title: "Kalça Anatomisi ve Minimal İnvaziv Kalça Protezi",
    excerpt: "Kalça eklem yapısı ve az kesi ile yapılan protez ameliyatı.",
    date: "2025-11-16",
    category: "Kalça",
    image: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/01/kalca_protezi.jpg",
  },
  "bankart-lezyonu-nedir": {
    title: "Bankart Lezyonu Nedir?",
    excerpt: "Omuz çıkığı sonrası oluşan Bankart lezyonu ve tedavisi.",
    date: "2025-11-15",
    category: "Omuz",
    image: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/04/omuz_artroskopisi.jpg",
  },
  "hill-sachs-lezyonu-nedir": {
    title: "Hill-Sachs Lezyonu Nedir?",
    excerpt: "Omuz instabilitesinde Hill-Sachs lezyonu ve tedavi yaklaşımları.",
    date: "2025-11-14",
    category: "Omuz",
    image: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/04/omuz_artroskopisi.jpg",
  },
  "slap-lezyonu-nedir": {
    title: "SLAP Lezyonu Nedir?",
    excerpt: "Superior labrum anterior posterior (SLAP) yırtığı hakkında bilgiler.",
    date: "2025-11-13",
    category: "Omuz",
    image: "https://www.drozguroktaynar.com/wp-content/uploads/2025/11/slap-lezyonu.webp",
  },
  "rotator-kuf-sendromu-nedir": {
    title: "Rotator Kuff Sendromu Nedir?",
    excerpt: "Omuz kaslarını etkileyen rotator kuff sendromu belirtileri ve tedavisi.",
    date: "2025-11-12",
    category: "Omuz",
    image: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/03/rotator_manset.jpg",
  },
  "kalca-artroskopisi-nedir": {
    title: "Kalça Artroskopisi Nedir?",
    excerpt: "Kalça ekleminin kapalı yöntemle tedavisinde artroskopi uygulamaları.",
    date: "2025-11-10",
    category: "Kalça",
    image: "https://www.drozguroktaynar.com/wp-content/uploads/2025/11/Kalca-Artroskopisi-Nedir.webp",
  },
  "omuz-protezi-nedir": {
    title: "Omuz Protezi Nedir?",
    excerpt: "İleri evre omuz kireçlenmesinde protez ameliyatı.",
    date: "2025-11-08",
    category: "Omuz",
    image: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/05/omuz_kireclenmesi.jpg",
  },
  "priformis-sendromu-nedir": {
    title: "Piriformis Sendromu Nedir?",
    excerpt: "Kalça ve bacak ağrısına neden olan piriformis sendromu.",
    date: "2025-11-05",
    category: "Kalça",
    image: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/01/priformis_sendromu.jpg",
  },
  "pleksus-yaralanmalari-nedir": {
    title: "Pleksus Yaralanmaları Nedir?",
    excerpt: "Brakiyal pleksus yaralanmaları ve tedavi yaklaşımları.",
    date: "2025-11-04",
    category: "Genel",
    image: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/03/rotator_manset.jpg",
  },
  "bel-fitigi-ameliyati-sonrasi-ise-donus": {
    title: "Bel Fıtığı Ameliyatı Sonrası İşe Dönüş",
    excerpt: "Bel fıtığı ameliyatı sonrası iyileşme süreci ve işe dönüş rehberi.",
    date: "2025-09-10",
    category: "Bel",
    image: "https://www.drozguroktaynar.com/wp-content/uploads/2025/09/bel_agrisi.jpg",
  },
  "kok-hucre-tedavisi-2": {
    title: "Kök Hücre Tedavisi",
    excerpt: "Ortopedide kök hücre tedavisi uygulamaları ve sonuçları.",
    date: "2025-09-05",
    category: "Tedavi",
    image: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/01/diz_kireclenmesi.jpg",
  },
  "ayak-bilegi-burkulmasi-ve-ne-zaman-gecer": {
    title: "Ayak Bileği Burkulmasi Ne Zaman Geçer?",
    excerpt: "Ayak bileği burkulmalarında iyileşme süreci ve dikkat edilmesi gerekenler.",
    date: "2025-08-20",
    category: "Ayak",
    image: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2025/10/ayak_bilegi_tedavisi.jpg",
  },
  "hidrojel-sivi-diz-protezi-nedir-2": {
    title: "Hidrojel (Sıvı) Diz Protezi Nedir?",
    excerpt: "Diz kireçlenmesinde yeni nesil hidrojel tedavisi hakkında bilgiler.",
    date: "2024-02-15",
    category: "Diz",
    image: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/02/diz_protezi.jpg",
  },
  "el-bilegi-artroskopisi": {
    title: "El Bileği Artroskopisi",
    excerpt: "El bileği ağrılarında artroskopik tanı ve tedavi.",
    date: "2024-10-15",
    category: "El",
    image: "https://www.drozguroktaynar.com/wp-content/uploads/2024/10/Op.-Dr-Ozgur-Oktay-Nar.webp",
  },
  "diz-agrisi": {
    title: "Diz Ağrısı",
    excerpt: "Diz ağrısının nedenleri, belirtileri ve tedavi yöntemleri.",
    date: "2025-10-01",
    category: "Diz",
    image: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/01/diz_agrisi.jpg",
  },
  "kalca-agrisi": {
    title: "Kalça Ağrısı",
    excerpt: "Kalça ağrısının nedenleri ve tedavi seçenekleri.",
    date: "2025-09-15",
    category: "Kalça",
    image: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/09/kalca_agrisi.jpg",
  },
  "dirsek-agrisi-tedavisi": {
    title: "Dirsek Ağrısı Tedavisi",
    excerpt: "Dirsek ağrısının nedenleri ve tedavi yöntemleri.",
    date: "2026-01-10",
    category: "Dirsek",
    image: "https://www.drozguroktaynar.com/wp-content/uploads/2026/01/Dirsek-Agrisi-Tedavisi.webp",
  },
  "kondromalazi": {
    title: "Kondromalazi Nedir?",
    excerpt: "Diz kapağı kıkırdağının yumuşaması ve tedavisi.",
    date: "2025-08-10",
    category: "Diz",
    image: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2023/12/kondromalazi_patella.jpg",
  },
  "sok-dalga-tedavisi": {
    title: "Şok Dalga Tedavisi",
    excerpt: "ESWT ile ortopedik sorunların tedavisi.",
    date: "2025-07-20",
    category: "Tedavi",
    image: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/employing-therapeutic-device-in-professional-setti-2025-03-18-07-40-13-utc-1-1.webp",
  },
  "capraz-bag-acl-kopmasi": {
    title: "Çapraz Bağ (ACL) Kopması",
    excerpt: "Ön çapraz bağ yaralanmaları ve tedavisi.",
    date: "2025-06-15",
    category: "Diz",
    image: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/man-bent-her-head-grabbed-him-her-after-exercise_1150-22887-1.webp",
  },
};

// Default image for posts without specific images
const defaultImage = "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2024/01/diz_anatomisi.jpg";

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

function slugToImage(slug: string): string {
  if (blogPostData[slug]?.image) {
    return blogPostData[slug].image!;
  }
  return defaultImage;
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
      image: slugToImage(entry.name),
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
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden group"
                >
                  <Link href={`/blog/${post.slug}`}>
                    {/* Thumbnail Image */}
                    <div className="relative h-40 w-full overflow-hidden">
                      <Image
                        src={post.image || defaultImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {post.category && (
                        <span className="absolute top-3 left-3 text-xs bg-[#01CAB8] text-white px-2 py-1 rounded-full">
                          {post.category}
                        </span>
                      )}
                    </div>
                    <div className="p-5">
                      <time className="text-sm text-gray-500">{post.date}</time>
                      <h2 className="text-lg font-semibold text-gray-900 mt-1 mb-2 group-hover:text-[#01CAB8] transition line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {post.excerpt}
                      </p>
                      <span className="inline-block mt-3 text-[#01CAB8] font-medium text-sm">
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
