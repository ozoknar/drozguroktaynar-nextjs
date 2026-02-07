"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-[#01CAB8]">
                Op. Dr. Özgür Oktay Nar
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#01CAB8] transition">
              Ana Sayfa
            </Link>
            <Link href="/#hakkimda" className="text-gray-700 hover:text-[#01CAB8] transition">
              Hakkımda
            </Link>
            <Link href="/#uzmanlik" className="text-gray-700 hover:text-[#01CAB8] transition">
              Uzmanlık Alanları
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-[#01CAB8] transition">
              Blog
            </Link>
            <Link href="/iletisim" className="text-gray-700 hover:text-[#01CAB8] transition">
              İletişim
            </Link>
            <Link
              href="https://wa.me/905522493909"
              target="_blank"
              className="bg-[#01CAB8] text-white px-4 py-2 rounded-lg hover:bg-[#01A899] transition"
            >
              WhatsApp Randevu
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#01CAB8]"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="text-gray-700 hover:text-[#01CAB8] transition">
                Ana Sayfa
              </Link>
              <Link href="/#hakkimda" className="text-gray-700 hover:text-[#01CAB8] transition">
                Hakkımda
              </Link>
              <Link href="/#uzmanlik" className="text-gray-700 hover:text-[#01CAB8] transition">
                Uzmanlık Alanları
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-[#01CAB8] transition">
                Blog
              </Link>
              <Link href="/iletisim" className="text-gray-700 hover:text-[#01CAB8] transition">
                İletişim
              </Link>
              <Link
                href="https://wa.me/905522493909"
                target="_blank"
                className="bg-[#01CAB8] text-white px-4 py-2 rounded-lg text-center hover:bg-[#01A899] transition"
              >
                WhatsApp Randevu
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
