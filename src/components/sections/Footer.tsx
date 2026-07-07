import { BookOpen, Mail, Phone, MapPin } from "lucide-react"

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

const links = {
  menu: [
    { label: "Beranda", href: "#beranda" },
    { label: "Tentang", href: "#tentang" },
    { label: "Program", href: "#program" },
    { label: "Galeri", href: "#galeri" },
    { label: "FAQ", href: "#faq" },
  ],
  program: [
    { label: "Iqra", href: "#program" },
    { label: "Tahsin", href: "#program" },
    { label: "Tahfidz", href: "#program" },
    { label: "Doa Harian", href: "#program" },
    { label: "Praktik Sholat", href: "#program" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
      <div className="container-main">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-white">MIQI</span>
                <span className="block text-[10px] text-gray-500 -mt-0.5">Taman Pendidikan Al-Qur'an</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Membentuk generasi Qur'ani berakhlak mulia melalui pendidikan
              Al-Qur'an yang menyenangkan dan berkualitas.
            </p>
            <div className="flex gap-2">
              <a href="#" className="w-9 h-9 rounded-xl bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors" aria-label="Facebook">
                <FacebookIcon className="w-4 h-4 text-gray-400" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-gray-800 hover:bg-pink-600 flex items-center justify-center transition-colors" aria-label="Instagram">
                <InstagramIcon className="w-4 h-4 text-gray-400" />
              </a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-white font-semibold mb-4">Menu</h4>
            <ul className="space-y-2.5">
              {links.menu.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-semibold mb-4">Program</h4>
            <ul className="space-y-2.5">
              {links.program.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gray-500" />
                Jl. Pendidikan No. 123, Kota Berkah
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <Phone className="w-4 h-4 shrink-0 text-gray-500" />
                0812-3456-7890
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <Mail className="w-4 h-4 shrink-0 text-gray-500" />
                info@tpqmiqi.id
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © 2025 TPQ MIQI. Semua hak dilindungi.
          </p>
          <p className="text-xs text-gray-600">
            Dibuat dengan ❤️ untuk generasi Qur'ani
          </p>
        </div>
      </div>
    </footer>
  )
}
