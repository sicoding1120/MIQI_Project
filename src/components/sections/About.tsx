import { motion } from "motion/react"
import { Eye, Target, Heart, BookOpen, Sparkles } from "lucide-react"
import CountUp from "react-countup"
import { GeometricDecorations } from "@/components/ui/GeometricDecorations"

const values = [
  { icon: BookOpen, label: "Al-Qur'an Pertama", desc: "Menjadikan Al-Qur'an sebagai pedoman utama", color: "#3B82F6" }, // Blue
  { icon: Heart, label: "Akhlak Mulia", desc: "Membangun karakter Islami sejak dini", color: "#EC4899" }, // Pink
  { icon: Target, label: "Metode Terbaik", desc: "Kurikulum terstruktur dan menyenangkan", color: "#F59E0B" }, // Amber
  { icon: Sparkles, label: "Lingkungan Positif", desc: "Suasana belajar aman dan nyaman", color: "#8B5CF6" }, // Purple
]

const miniStats = [
  { value: 10, suffix: "+", label: "Tahun Berdiri" },
  { value: 2000, suffix: "+", label: "Alumni" },
  { value: 50, suffix: "+", label: "Penghargaan" },
  { value: 98, suffix: "%", label: "Orang Tua Puas" },
]

export function About() {
  return (
    <section id="tentang" className="section-padding bg-slate-50 relative overflow-hidden">
      <GeometricDecorations />
      <div className="container-main relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 text-sm font-medium mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            Tentang Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Mengenal Lebih Dekat TPQ MIQI
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Didirikan dengan semangat mencerdaskan generasi Qur'ani, TPQ MIQI telah
            menjadi rumah kedua bagi ratusan anak untuk belajar, bertumbuh, dan mencintai Al-Qur'an.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Vision/Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-8"
          >
            {/* Vision */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Visi</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Menjadi lembaga pendidikan Al-Qur'an terdepan yang melahirkan generasi 
                    cinta Al-Qur'an, berakhlak mulia, dan berprestasi.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-pink-50 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Misi</h3>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 shrink-0" />
                      Menyelenggarakan pembelajaran Al-Qur'an yang menyenangkan dan berkualitas
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 shrink-0" />
                      Membina akhlak mulia dan karakter Islami pada setiap santri
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 shrink-0" />
                      Menciptakan lingkungan belajar yang aman, nyaman, dan inspiratif
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Values + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-gray-900">Nilai-Nilai Kami</h3>
            <div className="grid grid-cols-2 gap-4">
              {values.map((v, i) => (
                <motion.div
                  key={v.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-white rounded-lg p-5 border border-gray-200 shadow-sm transition-transform hover:scale-105"
                >
                  <v.icon className="w-8 h-8 mb-3" style={{ color: v.color }} />
                  <p className="font-semibold text-gray-900 text-sm mb-1">{v.label}</p>
                  <p className="text-xs text-gray-500">{v.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Mini stats */}
            <div className="grid grid-cols-4 gap-3 pt-4">
              {miniStats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-xl font-bold text-gray-900">
                    <CountUp end={s.value} enableScrollSpy scrollSpyOnce duration={2} />
                    {s.suffix}
                  </p>
                  <p className="text-[10px] text-gray-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
