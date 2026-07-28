import { motion } from "motion/react"
import {
  BookOpen, BookMarked, Mic, Brain,
  HandHeart, Moon, Hand, Languages, GraduationCap
} from "lucide-react"
import { GeometricDecorations } from "@/components/ui/GeometricDecorations"

const programs = [
  { icon: BookOpen, title: "Iqra", desc: "Pengenalan huruf hijaiyah dan dasar membaca Al-Qur'an dengan metode Iqra yang menyenangkan.", color: "#3B82F6", gradient: "from-blue-500 to-blue-600" },
  { icon: BookMarked, title: "Baca Al-Qur'an", desc: "Pembelajaran membaca Al-Qur'an dengan tajwid yang benar dan fasih.", color: "#8B5CF6", gradient: "from-purple-500 to-purple-600" },
  { icon: Mic, title: "Tahsin", desc: "Perbaikan bacaan Al-Qur'an agar lebih indah sesuai kaidah tajwid.", color: "#22C55E", gradient: "from-green-500 to-green-600" },
  { icon: Brain, title: "Tahfidz", desc: "Program menghafal Al-Qur'an dengan metode yang efektif dan menyenangkan.", color: "#EC4899", gradient: "from-pink-500 to-pink-600" },
  { icon: Moon, title: "Doa Harian", desc: "Menghafal doa-doa harian yang penting untuk kehidupan sehari-hari.", color: "#F97316", gradient: "from-orange-500 to-orange-600" },
  { icon: HandHeart, title: "Adab Islami", desc: "Pembinaan adab dan akhlak mulia sesuai tuntunan Rasulullah SAW.", color: "#EAB308", gradient: "from-yellow-500 to-yellow-600" },
  { icon: Hand, title: "Praktik Sholat", desc: "Pembelajaran tata cara sholat yang benar beserta bacaan-bacaannya.", color: "#EF4444", gradient: "from-red-500 to-red-600" },
  { icon: Languages, title: "Bahasa Arab Dasar", desc: "Pengenalan kosa kata bahasa Arab dasar untuk pemahaman Al-Qur'an.", color: "#6366F1", gradient: "from-indigo-500 to-indigo-600" },
]

export function Programs() {
  return (
    <section id="program" className="section-padding bg-slate-50 relative overflow-hidden">
      <GeometricDecorations />
      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 text-sm font-medium mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            Program Pembelajaran
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Program Pembelajaran
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Kurikulum lengkap yang dirancang khusus untuk memenuhi kebutuhan
            belajar Al-Qur'an anak di setiap tahapan.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08 }}
              className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300"
            >
              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300"
                  style={{ backgroundColor: `${p.color}12` }}
                >
                  <p.icon className="w-7 h-7" style={{ color: p.color }} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
