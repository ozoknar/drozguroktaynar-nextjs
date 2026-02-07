"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category?: string;
  image?: string;
  popularity?: number;
}

interface PopularPost {
  slug: string;
  title: string;
  region: string;
}

interface BlogContentProps {
  posts: BlogPost[];
  popularPostsByRegion: PopularPost[];
  defaultImage: string;
}

const categories = [
  { name: "Tümü", slug: "" },
  { name: "Diz", slug: "Diz" },
  { name: "Omuz", slug: "Omuz" },
  { name: "Kalça", slug: "Kalça" },
  { name: "Ayak", slug: "Ayak" },
  { name: "El", slug: "El" },
  { name: "Dirsek", slug: "Dirsek" },
  { name: "Bel", slug: "Bel" },
];

// Group popular posts by region
function getPopularPostsByRegion(posts: PopularPost[]) {
  const regions = ["Diz", "Omuz", "Kalça", "Ayak", "El", "Dirsek", "Bel"];
  return regions.map(region => ({
    region,
    posts: posts.filter(p => p.region === region)
  }));
}

export default function BlogContent({ posts, popularPostsByRegion, defaultImage }: BlogContentProps) {
  const [selectedCategory, setSelectedCategory] = useState("");
  
  const groupedPopular = getPopularPostsByRegion(popularPostsByRegion);

  // Filter posts by category
  const filteredPosts = selectedCategory
    ? posts.filter(post => post.category === selectedCategory)
    : posts;

  // Sort by popularity (higher = more popular), then by date
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    // First sort by popularity (descending)
    const popA = a.popularity || 0;
    const popB = b.popularity || 0;
    if (popB !== popA) return popB - popA;
    // Then by date (descending)
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <>
      {/* En Çok Okunanlar - Bölgelere Göre (EN ÜSTTE) */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span className="text-[#01CAB8]">🔥</span> En Çok Okunan Yazılar
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {groupedPopular.map(({ region, posts }) => (
            <div key={region} className="space-y-2">
              <h3 
                className="text-sm font-bold text-[#01CAB8] border-b border-[#01CAB8]/20 pb-1 cursor-pointer hover:text-[#019E8F] transition"
                onClick={() => setSelectedCategory(region)}
              >
                {region}
              </h3>
              <ul className="space-y-1">
                {posts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm text-gray-700 hover:text-[#01CAB8] transition block leading-tight"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Kategori Navigasyonu - Tıklanabilir */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => setSelectedCategory(cat.slug)}
            className={`px-4 py-2 rounded-full border transition text-sm font-medium ${
              selectedCategory === cat.slug
                ? "bg-[#01CAB8] text-white border-[#01CAB8]"
                : "bg-white border-gray-200 text-gray-700 hover:bg-[#01CAB8] hover:text-white hover:border-[#01CAB8]"
            }`}
          >
            {cat.name}
            {cat.slug && (
              <span className="ml-1 text-xs opacity-75">
                ({posts.filter(p => p.category === cat.slug).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Seçili kategori başlığı */}
      {selectedCategory && (
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {selectedCategory} Yazıları
            <span className="text-lg font-normal text-gray-500 ml-2">
              ({sortedPosts.length} yazı)
            </span>
          </h2>
          <p className="text-gray-600 mt-1">En çok okunandan en aza sıralı</p>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Ana İçerik - Blog Yazıları */}
        <div className="lg:w-2/3">
          <div className="grid md:grid-cols-2 gap-6">
            {sortedPosts.map((post, index) => (
              <article
                key={post.slug}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden group relative"
              >
                <Link href={`/blog/${post.slug}`}>
                  {/* Popularity badge for top 10 */}
                  {selectedCategory && index < 10 && (
                    <div className="absolute top-3 right-3 z-10 w-7 h-7 bg-[#01CAB8] text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                      {index + 1}
                    </div>
                  )}
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

          {sortedPosts.length === 0 && (
            <div className="text-center py-12 bg-white rounded-xl">
              <p className="text-gray-500 text-lg">Bu kategoride henüz yazı yok.</p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/3">
          <div className="sticky top-24 space-y-6">
            {/* Randevu CTA */}
            <div className="bg-gradient-to-br from-[#01CAB8] to-[#019E8F] rounded-xl shadow-md p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Randevu Alın</h3>
              <p className="text-white/90 text-sm mb-4">
                Ortopedi sorunlarınız için hemen randevu alabilirsiniz.
              </p>
              <Link
                href="https://wa.me/905522493909"
                target="_blank"
                className="block w-full bg-white text-[#01CAB8] text-center py-2.5 rounded-lg font-medium hover:bg-gray-100 transition"
              >
                📱 WhatsApp Randevu
              </Link>
            </div>

            {/* Kategoriler Widget */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Kategoriler</h3>
              <div className="flex flex-wrap gap-2">
                {["Diz", "Omuz", "Kalça", "Ayak", "El", "Dirsek", "Bel"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-full text-sm cursor-pointer transition ${
                      selectedCategory === cat
                        ? "bg-[#01CAB8] text-white"
                        : "bg-gray-100 hover:bg-[#01CAB8] hover:text-white text-gray-700"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
