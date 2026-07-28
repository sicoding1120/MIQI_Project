import { useState, useEffect, useRef } from "react"
import { Menu, X, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Program", href: "#program" },
  { label: "Pengajar", href: "#pengajar" },
  { label: "Galeri", href: "#galeri" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
]

const hoverPalette = [
  { text: '#059669', bg: '#ecfdf5' }, // emerald
  { text: '#2563eb', bg: '#eff6ff' }, // blue
  { text: '#db2777', bg: '#fdf2f8' }, // pink
  { text: '#d97706', bg: '#fffbeb' }, // amber
  { text: '#9333ea', bg: '#faf5ff' }, // purple
  { text: '#ea580c', bg: '#fff7ed' }, // orange
  { text: '#0891b2', bg: '#ecfeff' }, // cyan
]

let globalColorIndex = 0

function HoverNavItem({ href, label, className, onClick }: { href: string, label: string, className: string, onClick?: () => void }) {
  const [style, setStyle] = useState({ color: '', backgroundColor: '' })

  const handleMouseEnter = () => {
    const color = hoverPalette[globalColorIndex % hoverPalette.length]
    globalColorIndex++
    setStyle({ color: color.text, backgroundColor: color.bg })
  }

  const handleMouseLeave = () => {
    setStyle({ color: '', backgroundColor: '' })
  }

  return (
    <a
      href={href}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`transition-colors duration-200 ${className}`}
      style={style.color ? style : {}}
    >
      {label}
    </a>
  )
}

function HoverCtaButton({ className, children, onClick }: { className: string, children: React.ReactNode, onClick?: () => void }) {
  const [style, setStyle] = useState({ backgroundColor: '' }) 

  const handleMouseEnter = () => {
    const color = hoverPalette[globalColorIndex % hoverPalette.length]
    globalColorIndex++
    setStyle({ backgroundColor: color.text }) 
  }

  const handleMouseLeave = () => {
    setStyle({ backgroundColor: '' })
  }

  return (
    <Button
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`transition-colors duration-300 border-0 text-white ${!style.backgroundColor ? 'bg-emerald-600 hover:bg-emerald-700' : ''} ${className}`}
      style={style.backgroundColor ? style : {}}
    >
      {children}
    </Button>
  )
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const scrolledRef = useRef(false)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 20
          if (isScrolled !== scrolledRef.current) {
            scrolledRef.current = isScrolled
            setScrolled(isScrolled)
          }
          ticking = false
        })
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
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
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 flex items-center justify-center shrink-0">
              <img src="/logo/utama.png" alt="Logo MIQI" className="w-full h-full object-contain" />
            </div>
            <div className="leading-tight flex flex-col">
              <span className="text-lg font-bold text-gray-900 uppercase tracking-widest">
                MIQI
              </span>
              <span className="text-[10px] text-gray-500 font-medium -mt-0.5">
                Majelis Ta'lim Inarotul Qalbi
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <HoverNavItem
                key={link.href}
                href={link.href}
                label={link.label}
                className="px-4 py-2 text-sm font-medium text-gray-600 rounded-md"
              />
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a href="https://wa.me/6288801252105" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-block">
              <HoverCtaButton className="rounded-md px-6 shadow-sm hover:-translate-y-0.5 cursor-pointer font-medium">
                Daftar Sekarang
              </HoverCtaButton>
            </a>
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
            <HoverNavItem
              key={link.href}
              href={link.href}
              label={link.label}
              className="block px-4 py-3 text-sm font-medium text-gray-700 rounded-md"
              onClick={() => setIsOpen(false)}
            />
          ))}
          <div className="pt-3">
            <a href="https://wa.me/6288801252105" target="_blank" rel="noopener noreferrer" className="block w-full">
              <HoverCtaButton className="w-full rounded-md shadow-sm cursor-pointer font-medium h-12">
                Daftar Sekarang
              </HoverCtaButton>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
