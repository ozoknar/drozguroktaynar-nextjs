import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Op. Dr. Özgür Oktay Nar | Bursa Ortopedi Doktoru",
  description: "Bursa'da ortopedi ve travmatoloji uzmanı Op. Dr. Özgür Oktay Nar. Diz, kalça, omuz, ayak bileği tedavileri. Modern ve yenilikçi tedavi yöntemleri.",
  keywords: "ortopedi bursa, ortopedi doktoru, diz ağrısı, kalça ağrısı, omuz ağrısı, özgür oktay nar",
  authors: [{ name: "Op. Dr. Özgür Oktay Nar" }],
  openGraph: {
    title: "Op. Dr. Özgür Oktay Nar | Bursa Ortopedi Doktoru",
    description: "Bursa'da ortopedi ve travmatoloji uzmanı. Modern tedavi yöntemleri ile sağlığınıza kavuşun.",
    url: "https://www.ozguroktaynar.com",
    siteName: "Op. Dr. Özgür Oktay Nar",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "https://ooxijkokuifpwunx.public.blob.vercel-storage.com/uploads/uploads/2025/10/ozgur-768x432.jpg",
        width: 768,
        height: 432,
        alt: "Op. Dr. Özgür Oktay Nar - Bursa Ortopedi Uzmanı",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
