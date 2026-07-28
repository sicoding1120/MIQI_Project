import { motion } from "motion/react"
import {
  GraduationCap, Gamepad2, Users, HeartHandshake,
  TreePine, ClipboardCheck, ShieldCheck, BookHeart, Award
} from "lucide-react"
import { GeometricDecorations } from "@/components/ui/GeometricDecorations"

const features = [
  { icon: GraduationCap, title: "Pengajar Berpengalaman", desc: "Tim pengajar bersertifikat dengan metode pengajaran yang telah terbukti efektif.", color: "#3B82F6" },
  { icon: Gamepad2, title: "Metode Belajar Seru", desc: "Pembelajaran interaktif dengan permainan edukatif yang membuat anak semangat belajar.", color: "#8B5CF6" },
  { icon: Users, title: "Kelas Sesuai Usia", desc: "Pembagian kelas berdasarkan usia dan kemampuan untuk hasil optimal.", color: "#22C55E" },
  { icon: HeartHandshake, title: "Pembinaan Karakter", desc: "Tidak hanya baca Qur'an, tapi juga membentuk akhlak dan adab Islami.", color: "#EC4899" },
  { icon: TreePine, title: "Lingkungan Nyaman", desc: "Fasilitas bersih, aman, dan kondusif untuk proses belajar mengajar.", color: "#F97316" },
  { icon: ClipboardCheck, title: "Laporan Berkala", desc: "Orang tua menerima laporan perkembangan anak secara rutin dan transparan.", color: "#EAB308" },
  { icon: ShieldCheck, title: "Keamanan Terjamin", desc: "Sistem keamanan ketat dengan pengawasan dan penjemputan terorganisir.", color: "#EF4444" },
  { icon: BookHeart, title: "Nilai-Nilai Islami", desc: "Setiap aktivitas didasari oleh nilai-nilai Islami yang kuat dan konsisten.", color: "#6366F1" },
]

export function WhyChoose() {
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
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-md bg-white text-orange-600 text-sm font-medium border border-gray-200 mb-4">
            <Award className="w-3.5 h-3.5 text-gray-500" />
            Keunggulan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Mengapa Memilih{" "}
            <span className="text-orange-600">TPQ MIQI?</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Kami berkomitmen memberikan pendidikan Al-Qur'an terbaik dengan pendekatan
            modern yang menyenangkan bagi anak-anak.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08 }}
              className={`group bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:border-orange-200 hover:shadow-md transition-all duration-300`}
            >
              <div
                className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}
                style={{ backgroundColor: `${f.color}15`, color: f.color }}
              >
                <f.icon className="w-7 h-7" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
