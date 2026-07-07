import { motion } from "motion/react"
import { Eye, Target, Heart, BookOpen, Sparkles } from "lucide-react"
import CountUp from "react-countup"

const values = [
  { icon: BookOpen, label: "Al-Qur'an Pertama", desc: "Menjadikan Al-Qur'an sebagai pedoman utama" },
  { icon: Heart, label: "Akhlak Mulia", desc: "Membangun karakter Islami sejak dini" },
  { icon: Target, label: "Metode Terbaik", desc: "Kurikulum terstruktur dan menyenangkan" },
  { icon: Sparkles, label: "Lingkungan Positif", desc: "Suasana belajar aman dan nyaman" },
]

const miniStats = [
  { value: 10, suffix: "+", label: "Tahun Berdiri" },
  { value: 2000, suffix: "+", label: "Alumni" },
  { value: 50, suffix: "+", label: "Penghargaan" },
  { value: 98, suffix: "%", label: "Orang Tua Puas" },
]

export function About() {
  return (
    <section id="tentang" className="section-padding bg-white relative overflow-hidden">
      {/* Decorations */}
      <div className="absolute top-20 right-[5%] w-24 h-24 rounded-full bg-blue-400/5 animate-float pointer-events-none" />
      <div className="absolute bottom-20 left-[8%] w-16 h-16 rounded-2xl bg-purple-400/8 rotate-12 animate-float-reverse pointer-events-none" />

      <div className="container-main">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium border border-blue-100 mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            Tentang Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Mengenal Lebih Dekat{" "}
            <span className="gradient-text">TPQ MIQI</span>
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
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-6 border border-blue-100/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
                  <Eye className="w-6 h-6 text-white" />
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
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-6 border border-purple-100/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-500 flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/20">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Misi</h3>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                      Menyelenggarakan pembelajaran Al-Qur'an yang menyenangkan dan berkualitas
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                      Membina akhlak mulia dan karakter Islami pada setiap santri
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
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
                  className="group bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <v.icon className="w-8 h-8 text-blue-500 mb-3 group-hover:scale-110 transition-transform" />
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
