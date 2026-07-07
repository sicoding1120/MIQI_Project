import { useState, useEffect } from "react"
import { Menu, X, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Program", href: "#program" },
  { label: "Pengajar", href: "#pengajar" },
  { label: "Galeri", href: "#galeri" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <span className="text-lg font-bold text-gray-900 tracking-tight">
                MIQI
              </span>
              <span className="block text-[10px] text-gray-500 font-medium -mt-0.5">
                Taman Pendidikan Al-Qur'an
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 rounded-xl hover:bg-blue-50/80 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button className="hidden sm:inline-flex bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full px-6 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer border-0">
              Daftar Sekarang
            </Button>
            <button
              className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 shadow-xl px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3">
            <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg cursor-pointer border-0">
              Daftar Sekarang
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
