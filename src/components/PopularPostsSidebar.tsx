"use client";

import Link from "next/link";
import { useState } from "react";

interface PopularPost {
  slug: string;
  title: string;
}

interface PopularPostsSidebarProps {
  posts: PopularPost[];
}

export default function PopularPostsSidebar({ posts }: PopularPostsSidebarProps) {
  const [showAll, setShowAll] = useState(false);
  
  const visiblePosts = showAll ? posts : posts.slice(0, 5);
  const hasMore = posts.length > 5;

  return (
    <div className="sticky top-24">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="text-[#01CAB8]">🔥</span> En Çok Okunanlar
        </h3>
        
        <ul className="space-y-3">
          {visiblePosts.map((post, index) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="flex items-start gap-3 group"
              >
                <span className="flex-shrink-0 w-6 h-6 bg-[#01CAB8]/10 text-[#01CAB8] rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
                <span className="text-gray-700 group-hover:text-[#01CAB8] transition text-sm leading-tight">
                  {post.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {hasMore && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-4 w-full py-2 px-4 bg-gray-100 hover:bg-[#01CAB8] hover:text-white text-gray-700 rounded-lg transition text-sm font-medium"
          >
            {showAll ? "Daha Az Göster ↑" : `Daha Fazla Göster (${posts.length - 5})`}
          </button>
        )}
      </div>

      {/* Randevu CTA */}
      <div className="bg-gradient-to-br from-[#01CAB8] to-[#019E8F] rounded-xl shadow-md p-6 mt-6 text-white">
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
      <div className="bg-white rounded-xl shadow-md p-6 mt-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Kategoriler</h3>
        <div className="flex flex-wrap gap-2">
          {["Diz", "Omuz", "Kalça", "Ayak", "El", "Dirsek", "Bel"].map((cat) => (
            <span
              key={cat}
              className="px-3 py-1.5 bg-gray-100 hover:bg-[#01CAB8] hover:text-white text-gray-700 rounded-full text-sm cursor-pointer transition"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
