import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Op. Dr. Özgür Oktay Nar</h3>
            <p className="text-gray-400">
              Bursa&apos;da ortopedi ve travmatoloji alanında uzman, modern tedavi yöntemleriyle hastalarına hizmet veren deneyimli bir hekimdir.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition">Ana Sayfa</Link>
              </li>
              <li>
                <Link href="/#hakkimda" className="hover:text-white transition">Hakkımda</Link>
              </li>
              <li>
                <Link href="/#uzmanlik" className="hover:text-white transition">Uzmanlık Alanları</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📧 ozguroktaynar@gmail.com</li>
              <li>📱 +90 552 249 39 09</li>
              <li className="pt-2">
                <span className="font-medium text-white">Çalışma Saatleri:</span>
                <br />
                Pazartesi-Cuma: 10:00 – 17:00
                <br />
                Cumartesi: 10:00 – 14:00
                <br />
                Pazar: Kapalı
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Op. Dr. Özgür Oktay Nar. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
