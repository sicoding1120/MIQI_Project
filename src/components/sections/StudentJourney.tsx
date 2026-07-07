import { motion } from "motion/react"
import { PenLine, ClipboardCheck, BookOpen, Mic, BookMarked, Brain, ArrowRight, Route } from "lucide-react"

const journeySteps = [
  { icon: PenLine, title: "Pendaftaran", desc: "Mengisi formulir pendaftaran", color: "#3B82F6" },
  { icon: ClipboardCheck, title: "Tes Penempatan", desc: "Menentukan level awal", color: "#8B5CF6" },
  { icon: BookOpen, title: "Iqra", desc: "Belajar huruf hijaiyah", color: "#22C55E" },
  { icon: Mic, title: "Tahsin", desc: "Perbaikan bacaan", color: "#EC4899" },
  { icon: BookMarked, title: "Baca Al-Qur'an", desc: "Membaca dengan tajwid", color: "#F97316" },
  { icon: Brain, title: "Tahfidz", desc: "Menghafal Al-Qur'an", color: "#6366F1" },
]

export function StudentJourney() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-24 right-[10%] w-12 h-12 rounded-full bg-green-400/8 animate-float pointer-events-none" />

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-pink-50 text-pink-600 text-sm font-medium border border-pink-100 mb-4">
            <Route className="w-3.5 h-3.5" />
            Perjalanan Santri
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Perjalanan Belajar{" "}
            <span className="gradient-text">Santri Kami</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Dari pendaftaran hingga tahfidz, setiap santri menjalani perjalanan belajar
            yang terstruktur sesuai kemampuan masing-masing.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 via-green-200 via-pink-200 via-orange-200 to-indigo-200" />

            <div className="grid grid-cols-6 gap-4">
              {journeySteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Icon circle */}
                  <div
                    className="relative z-10 w-24 h-24 rounded-3xl flex items-center justify-center mb-4 border-4 border-white shadow-lg"
                    style={{ backgroundColor: `${step.color}15` }}
                  >
                    <step.icon className="w-10 h-10" style={{ color: step.color }} />
                  </div>

                  {/* Arrow */}
                  {i < journeySteps.length - 1 && (
                    <ArrowRight
                      className="absolute top-10 -right-2 w-5 h-5 text-gray-300 z-20"
                    />
                  )}

                  <h4 className="font-semibold text-gray-900 text-sm mb-1">{step.title}</h4>
                  <p className="text-xs text-gray-500">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-4">
          {journeySteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-4 bg-white rounded-2xl p-4 border border-gray-100 shadow-sm"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${step.color}15` }}
              >
                <step.icon className="w-7 h-7" style={{ color: step.color }} />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 text-sm">{step.title}</h4>
                <p className="text-xs text-gray-500">{step.desc}</p>
              </div>
              {i < journeySteps.length - 1 && (
                <ArrowRight className="w-4 h-4 text-gray-300 shrink-0" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-50 text-amber-700 text-sm border border-amber-200">
            💡 Kecepatan belajar disesuaikan dengan kemampuan masing-masing anak
          </p>
        </motion.div>
      </div>
    </section>
  )
}
