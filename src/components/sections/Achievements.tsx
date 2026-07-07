import { motion } from "motion/react"
import { Trophy, Medal, Star, Award, Users, BookOpen } from "lucide-react"
import CountUp from "react-countup"

const achievementStats = [
  { icon: Trophy, value: 45, suffix: "+", label: "Piala Lomba", color: "#EAB308", bg: "bg-yellow-50" },
  { icon: Medal, value: 120, suffix: "+", label: "Santri Berprestasi", color: "#3B82F6", bg: "bg-blue-50" },
  { icon: Star, value: 30, suffix: "+", label: "Penghargaan Pengajar", color: "#8B5CF6", bg: "bg-purple-50" },
  { icon: Award, value: 15, suffix: "", label: "Pengakuan Komunitas", color: "#22C55E", bg: "bg-green-50" },
]

const highlights = [
  { title: "Juara 1 MTQ Kecamatan", year: "2024", category: "Tilawah", color: "#EAB308" },
  { title: "Juara 2 Hafalan Juz 30", year: "2024", category: "Tahfidz", color: "#3B82F6" },
  { title: "Juara 1 Lomba Adzan", year: "2023", category: "Adzan", color: "#8B5CF6" },
  { title: "Juara 3 Cerdas Cermat Islam", year: "2023", category: "Pengetahuan", color: "#22C55E" },
  { title: "TPQ Terbaik Kecamatan", year: "2024", category: "Institusi", color: "#EC4899" },
  { title: "Juara 1 Kaligrafi", year: "2024", category: "Seni Islam", color: "#F97316" },
]

export function Achievements() {
  return (
    <section id="prestasi" className="section-padding bg-slate-50/50 relative overflow-hidden">
      <div className="absolute top-16 right-[6%] w-14 h-14 rounded-full bg-yellow-400/8 animate-float pointer-events-none" />
      <div className="absolute bottom-20 left-[4%] w-10 h-10 rounded-2xl bg-blue-400/6 animate-float-reverse rotate-12 pointer-events-none" />

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-yellow-50 text-yellow-700 text-sm font-medium border border-yellow-200 mb-4">
            <Trophy className="w-3.5 h-3.5" />
            Prestasi
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Prestasi <span className="gradient-text">Membanggakan</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Santri dan pengajar kami terus mengukir prestasi di berbagai ajang kompetisi.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {achievementStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${s.bg} rounded-3xl p-6 text-center border border-gray-100 hover:shadow-lg transition-all duration-300`}
            >
              <s.icon className="w-8 h-8 mx-auto mb-3" style={{ color: s.color }} />
              <p className="text-3xl font-bold text-gray-900">
                <CountUp end={s.value} enableScrollSpy scrollSpyOnce duration={2} />{s.suffix}
              </p>
              <p className="text-sm text-gray-500 mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Achievement Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${h.color}15` }}>
                  <Trophy className="w-5 h-5" style={{ color: h.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 text-sm">{h.title}</h4>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">{h.year}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: h.color }}>{h.category}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
