import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import {
  ArrowUp,
  Compass,
  X,
  BookOpen,
  Users,
  CalendarDays,
  Wallet,
  Image,
  Trophy,
  MapPin,
  HelpCircle,
  PenLine,
} from "lucide-react"

const shortcuts = [
  { icon: BookOpen, label: "Program", href: "#program", color: "#3B82F6", bg: "rgba(59,130,246,0.1)" },
  { icon: Users, label: "Pengajar", href: "#pengajar", color: "#8B5CF6", bg: "rgba(139,92,246,0.1)" },
  { icon: CalendarDays, label: "Jadwal", href: "#jadwal", color: "#22C55E", bg: "rgba(34,197,94,0.1)" },
  { icon: Wallet, label: "Biaya", href: "#jadwal", color: "#F97316", bg: "rgba(249,115,22,0.1)" },
  { icon: Image, label: "Galeri", href: "#galeri", color: "#EC4899", bg: "rgba(236,72,153,0.1)" },
  { icon: Trophy, label: "Prestasi", href: "#prestasi", color: "#EAB308", bg: "rgba(234,179,8,0.1)" },
  { icon: MapPin, label: "Lokasi", href: "#kontak", color: "#EF4444", bg: "rgba(239,68,68,0.1)" },
  { icon: HelpCircle, label: "FAQ", href: "#faq", color: "#6366F1", bg: "rgba(99,102,241,0.1)" },
  { icon: PenLine, label: "Daftar", href: "#daftar", color: "#10B981", bg: "rgba(16,185,129,0.1)" },
]

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          {/* ── Expanded Quick Nav Panel ── */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: 20 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="bg-white/95 backdrop-blur-xl rounded-2xl border border-gray-200/80 shadow-2xl shadow-black/10 p-4 w-[280px] sm:w-[320px]"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-3 px-1">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
                      <Compass className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-gray-800">Pintasan Navigasi</span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                  >
                    <X className="w-3.5 h-3.5 text-gray-500" />
                  </button>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-100 mb-3" />

                {/* Navigation Grid */}
                <div className="grid grid-cols-3 gap-2">
                  {shortcuts.map((item, i) => (
                    <motion.button
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03 }}
                      onClick={() => handleNavClick(item.href)}
                      className="group flex flex-col items-center gap-1.5 p-2.5 rounded-xl hover:bg-gray-50 transition-all duration-200 cursor-pointer"
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200"
                        style={{ backgroundColor: item.bg }}
                      >
                        <item.icon className="w-5 h-5" style={{ color: item.color }} />
                      </div>
                      <span className="text-[10px] font-medium text-gray-500 group-hover:text-gray-800 transition-colors leading-tight text-center">
                        {item.label}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Bottom Buttons Column ── */}
          <div className="flex flex-col items-center gap-2.5">
            {/* Quick Nav Toggle */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer ${
                isOpen
                  ? "bg-gray-800 text-white shadow-gray-400/30"
                  : "bg-white text-blue-600 border border-gray-200 shadow-gray-300/30 hover:shadow-xl"
              }`}
              aria-label="Toggle navigation shortcuts"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Compass className="w-5 h-5" />}
              </motion.div>
            </motion.button>

            {/* Back to Top */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:shadow-xl transition-all duration-300 cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
