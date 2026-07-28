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

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

function TiktokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.525.01c1.306-.022 2.614-.01 3.921-.012.08 1.134.423 2.222 1.096 3.125.793.992 1.936 1.636 3.167 1.877v3.918c-1.396-.065-2.735-.615-3.805-1.545-.19-.153-.362-.323-.526-.503v7.359c.024 1.2-.28 2.41-.89 3.447-.63 1.107-1.632 1.986-2.825 2.477-1.282.526-2.731.625-4.072.28-1.353-.34-2.585-1.168-3.415-2.308-1.025-1.38-1.425-3.175-1.127-4.885.293-1.64 1.258-3.126 2.658-4.015 1.18-.767 2.617-1.1 4.014-.925v4.037c-.773-.176-1.597-.042-2.274.372-.647.382-1.102 1.033-1.25 1.782-.24.973.064 2.052.793 2.68.746.666 1.838.835 2.748.423.83-.34 1.436-1.11 1.583-1.986.068-.314.073-.637.073-.956V.01z" />
    </svg>
  )
}

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const links = {
  menu: [
    { label: "Beranda", href: "#beranda" },
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
              <a href="https://www.facebook.com/profile.php?id=61592310251382" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors" aria-label="Facebook">
                <FacebookIcon className="w-4 h-4 text-gray-400" />
              </a>
              <a href="https://www.instagram.com/sahabattpqmiqi" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-gray-800 hover:bg-pink-600 flex items-center justify-center transition-colors" aria-label="Instagram">
                <InstagramIcon className="w-4 h-4 text-gray-400" />
              </a>
              <a href="https://www.tiktok.com/@sahabattpqmiqi" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-gray-800 hover:bg-black flex items-center justify-center transition-colors" aria-label="TikTok">
                <TiktokIcon className="w-4 h-4 text-gray-400" />
              </a>
              <a href="https://www.youtube.com/channel/UCOLc2U8N6vQ9xJB17ZcM03Q" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-gray-800 hover:bg-red-600 flex items-center justify-center transition-colors" aria-label="YouTube">
                <YoutubeIcon className="w-4 h-4 text-gray-400" />
              </a>
              <a href="https://wa.me/6288801252105" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors" aria-label="WhatsApp">
                <WhatsappIcon className="w-4 h-4 text-gray-400" />
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
                <a href="https://www.google.com/maps/search/?api=1&query=Jl.+Sirojul+Munir+No.44,+RW.6,+Nanggewer,+Kec.+Cibinong,+Kabupaten+Bogor,+Jawa+Barat+16912" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Jl. Sirojul Munir No.44, RW.6, Nanggewer, Kec. Cibinong, Kabupaten Bogor, Jawa Barat 16912
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <Phone className="w-4 h-4 shrink-0 text-gray-500" />
                <a href="https://wa.me/6288801252105" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  +62 888-0125-2105
                </a>
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
