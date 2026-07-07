import { motion } from "motion/react"
import {
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
  { icon: BookOpen, label: "Program", href: "#program", color: "bg-blue-500", bg: "bg-blue-50", border: "border-blue-100" },
  { icon: Users, label: "Pengajar", href: "#pengajar", color: "bg-purple-500", bg: "bg-purple-50", border: "border-purple-100" },
  { icon: CalendarDays, label: "Jadwal", href: "#jadwal", color: "bg-green-500", bg: "bg-green-50", border: "border-green-100" },
  { icon: Wallet, label: "Biaya", href: "#jadwal", color: "bg-orange-500", bg: "bg-orange-50", border: "border-orange-100" },
  { icon: Image, label: "Galeri", href: "#galeri", color: "bg-pink-500", bg: "bg-pink-50", border: "border-pink-100" },
  { icon: Trophy, label: "Prestasi", href: "#prestasi", color: "bg-yellow-500", bg: "bg-yellow-50", border: "border-yellow-100" },
  { icon: MapPin, label: "Lokasi", href: "#kontak", color: "bg-red-500", bg: "bg-red-50", border: "border-red-100" },
  { icon: HelpCircle, label: "FAQ", href: "#faq", color: "bg-indigo-500", bg: "bg-indigo-50", border: "border-indigo-100" },
  { icon: PenLine, label: "Pendaftaran", href: "#daftar", color: "bg-emerald-500", bg: "bg-emerald-50", border: "border-emerald-100" },
]

export function QuickMenu() {
  return (
    <section className="py-12 -mt-6 relative z-20">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40 p-6 sm:p-8"
        >
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-4">
            {shortcuts.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group flex flex-col items-center gap-2.5 py-3 cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.bg} border ${item.border} flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                  <item.icon className={`w-6 h-6 text-${item.color.replace('bg-', '')}`} style={{ color: getComputedColor(item.color) }} />
                </div>
                <span className="text-xs font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                  {item.label}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function getComputedColor(bgClass: string): string {
  const map: Record<string, string> = {
    "bg-blue-500": "#3B82F6",
    "bg-purple-500": "#8B5CF6",
    "bg-green-500": "#22C55E",
    "bg-orange-500": "#F97316",
    "bg-pink-500": "#EC4899",
    "bg-yellow-500": "#EAB308",
    "bg-red-500": "#EF4444",
    "bg-indigo-500": "#6366F1",
    "bg-emerald-500": "#10B981",
  }
  return map[bgClass] || "#3B82F6"
}
