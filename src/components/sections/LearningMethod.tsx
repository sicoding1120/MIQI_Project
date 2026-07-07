import { motion } from "motion/react"
import { Gamepad2, Users, Hand, UserCheck, ClipboardList, FileText, Lightbulb } from "lucide-react"

const steps = [
  { icon: Gamepad2, title: "Belajar Sambil Bermain", desc: "Metode fun learning yang membuat anak antusias dan tidak mudah bosan.", color: "#3B82F6", step: "01" },
  { icon: Users, title: "Kelompok Kecil", desc: "Maksimal 10 anak per kelompok untuk perhatian lebih dari pengajar.", color: "#8B5CF6", step: "02" },
  { icon: Hand, title: "Praktik Interaktif", desc: "Anak langsung mempraktikkan bacaan dengan bimbingan langsung pengajar.", color: "#22C55E", step: "03" },
  { icon: UserCheck, title: "Bimbingan Personal", desc: "Setiap anak mendapat perhatian khusus sesuai kemampuan masing-masing.", color: "#EC4899", step: "04" },
  { icon: ClipboardList, title: "Evaluasi Rutin", desc: "Tes berkala untuk memastikan perkembangan belajar anak berjalan optimal.", color: "#F97316", step: "05" },
  { icon: FileText, title: "Laporan Orang Tua", desc: "Laporan perkembangan dikirimkan secara rutin kepada orang tua.", color: "#EAB308", step: "06" },
]

export function LearningMethod() {
  return (
    <section className="section-padding bg-slate-50/50 relative overflow-hidden">
      <div className="absolute top-20 left-[5%] w-16 h-16 rounded-full bg-blue-400/5 animate-float pointer-events-none" />
      <div className="absolute bottom-16 right-[8%] w-10 h-10 rounded-xl bg-pink-400/8 rotate-12 animate-float-reverse pointer-events-none" />

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-orange-50 text-orange-600 text-sm font-medium border border-orange-100 mb-4">
            <Lightbulb className="w-3.5 h-3.5" />
            Metode Pembelajaran
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Bagaimana Anak{" "}
            <span className="gradient-text">Belajar di MIQI?</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Proses pembelajaran yang terstruktur dengan pendekatan menyenangkan
            agar anak tumbuh mencintai Al-Qur'an.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${s.color}12` }}
                  >
                    <s.icon className="w-7 h-7" style={{ color: s.color }} />
                  </div>
                  <span
                    className="absolute -top-2 -right-2 w-7 h-7 rounded-full text-white text-xs font-bold flex items-center justify-center shadow-md"
                    style={{ backgroundColor: s.color }}
                  >
                    {s.step}
                  </span>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-semibold text-gray-900 mb-1.5">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
