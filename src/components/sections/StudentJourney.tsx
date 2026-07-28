import { motion } from "motion/react"
import { PenLine, ClipboardCheck, BookOpen, Mic, BookMarked, Brain, ArrowRight, Route } from "lucide-react"
import { GeometricDecorations } from "@/components/ui/GeometricDecorations"

const journeySteps = [
  { icon: PenLine, title: "Pendaftaran", desc: "Mengisi formulir pendaftaran", color: "#3B82F6" },
  { icon: ClipboardCheck, title: "Tes Penempatan", desc: "Menentukan level awal", color: "#8B5CF6" },
  { icon: BookOpen, title: "Iqra", desc: "Belajar huruf hijaiyah", color: "#22C55E" },
  { icon: Mic, title: "Tahsin", desc: "Perbaikan bacaan", color: "#EC4899" },
  { icon: BookMarked, title: "Baca Al-Qur'an", desc: "Membaca dengan tajwid", color: "#F97316" },
  { icon: Brain, title: "Tahfidz", desc: "Menghafal Al-Qur'an", color: "#6366F1" },
]

const arrowColors = [
  { color: '#10B981', shadow: 'rgba(16,185,129,0.5)' },
  { color: '#3B82F6', shadow: 'rgba(59,130,246,0.5)' },
  { color: '#EC4899', shadow: 'rgba(236,72,153,0.5)' },
  { color: '#F59E0B', shadow: 'rgba(245,158,11,0.5)' },
  { color: '#8B5CF6', shadow: 'rgba(168,85,247,0.5)' },
  { color: '#F97316', shadow: 'rgba(249,115,22,0.5)' },
]

const arrowKeyframes = `
@keyframes arrow-pulse {
  0%, 16% { color: ${arrowColors[0].color}; filter: drop-shadow(0 0 8px ${arrowColors[0].shadow}); transform: scale(1.25); }
  17%, 33% { color: ${arrowColors[1].color}; filter: drop-shadow(0 0 8px ${arrowColors[1].shadow}); transform: scale(1.25); }
  34%, 50% { color: ${arrowColors[2].color}; filter: drop-shadow(0 0 8px ${arrowColors[2].shadow}); transform: scale(1.25); }
  51%, 67% { color: ${arrowColors[3].color}; filter: drop-shadow(0 0 8px ${arrowColors[3].shadow}); transform: scale(1.25); }
  68%, 84% { color: ${arrowColors[4].color}; filter: drop-shadow(0 0 8px ${arrowColors[4].shadow}); transform: scale(1.25); }
  85%, 100% { color: ${arrowColors[5].color}; filter: drop-shadow(0 0 8px ${arrowColors[5].shadow}); transform: scale(1.25); }
}
@keyframes arrow-idle {
  0%, 80% { color: #E5E7EB; filter: none; transform: scale(1); }
  85%, 95% { color: var(--arrow-active-color); filter: drop-shadow(0 0 8px var(--arrow-active-shadow)); transform: scale(1.25); }
  100% { color: #E5E7EB; filter: none; transform: scale(1); }
}
`

function AnimatedArrow({ index, className }: { index: number, className: string }) {
  const totalArrows = journeySteps.length - 1
  const cycleDuration = totalArrows // 5s total cycle
  const activeColor = arrowColors[index % arrowColors.length]
  
  return (
    <>
      <style>{arrowKeyframes}</style>
      <ArrowRight
        strokeWidth={2}
        className={className}
        style={{
          ['--arrow-active-color' as string]: activeColor.color,
          ['--arrow-active-shadow' as string]: activeColor.shadow,
          animation: `arrow-idle ${cycleDuration}s ease-in-out infinite`,
          animationDelay: `${index}s`,
          willChange: 'transform',
        }}
      />
    </>
  )
}

export function StudentJourney() {
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
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 text-sm font-medium mb-4">
            <Route className="w-3.5 h-3.5" />
            Perjalanan Santri
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Perjalanan Belajar Santri Kami
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
            <div className="absolute top-12 left-0 right-0 h-px bg-gray-200" />

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
                    className="relative z-10 w-24 h-24 rounded-2xl flex items-center justify-center mb-4 border border-gray-100 bg-white shadow-sm"
                  >
                    <step.icon className="w-10 h-10" style={{ color: step.color }} />
                  </div>

                  {/* Arrow */}
                  {i < journeySteps.length - 1 && (
                    <AnimatedArrow
                      index={i}
                      className="absolute top-10 -right-2 w-5 h-5 z-20"
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
              className="flex items-center gap-4 bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${step.color}15` }}
              >
                <step.icon className="w-7 h-7" style={{ color: step.color }} />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 text-sm">{step.title}</h4>
                <p className="text-xs text-gray-500">{step.desc}</p>
              </div>
              {i < journeySteps.length - 1 && (
                <AnimatedArrow index={i} className="w-4 h-4 shrink-0" />
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
          <p className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 text-gray-700 text-sm border border-gray-200">
            Catatan: Kecepatan belajar disesuaikan dengan kemampuan masing-masing anak
          </p>
        </motion.div>
      </div>
    </section>
  )
}
