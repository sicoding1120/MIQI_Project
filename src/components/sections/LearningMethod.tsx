import { motion } from "motion/react"
import { Gamepad2, Users, Hand, UserCheck, ClipboardList, FileText, Lightbulb } from "lucide-react"

import { GeometricDecorations } from "@/components/ui/GeometricDecorations"

const steps = [
  { icon: Gamepad2, title: "Belajar Sambil Bermain", desc: "Metode fun learning yang membuat anak antusias dan tidak mudah bosan.", color: "#8B5CF6", step: "01" },
  { icon: Users, title: "Kelompok Kecil", desc: "Maksimal 10 anak per kelompok untuk perhatian lebih dari pengajar.", color: "#EC4899", step: "02" },
  { icon: Hand, title: "Praktik Interaktif", desc: "Anak langsung mempraktikkan bacaan dengan bimbingan langsung pengajar.", color: "#3B82F6", step: "03" },
  { icon: UserCheck, title: "Bimbingan Personal", desc: "Setiap anak mendapat perhatian khusus sesuai kemampuan masing-masing.", color: "#10B981", step: "04" },
  { icon: ClipboardList, title: "Evaluasi Rutin", desc: "Tes berkala untuk memastikan perkembangan belajar anak berjalan optimal.", color: "#F59E0B", step: "05" },
  { icon: FileText, title: "Laporan Orang Tua", desc: "Laporan perkembangan dikirimkan secara rutin kepada orang tua.", color: "#EF4444", step: "06" },
]

export function LearningMethod() {
  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      <GeometricDecorations />

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-md bg-white text-purple-600 text-sm font-medium border border-gray-200 mb-4">
            <Lightbulb className="w-3.5 h-3.5 text-gray-500" />
            Metode Pembelajaran
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Bagaimana Anak{" "}
            <span className="text-purple-600">Belajar di MIQI?</span>
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
              className="group relative bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md hover:border-purple-200 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center transition-colors duration-300"
                    style={{ backgroundColor: `${s.color}15`, color: s.color }}
                  >
                    <s.icon className="w-7 h-7" />
                  </div>
                  <span
                    className="absolute -top-2 -right-2 w-7 h-7 rounded-full text-white text-xs font-bold flex items-center justify-center shadow-sm"
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
