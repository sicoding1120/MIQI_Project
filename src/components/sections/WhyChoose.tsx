import { motion } from "motion/react"
import {
  GraduationCap, Gamepad2, Users, HeartHandshake,
  TreePine, ClipboardCheck, ShieldCheck, BookHeart, Award
} from "lucide-react"

const features = [
  { icon: GraduationCap, title: "Pengajar Berpengalaman", desc: "Tim pengajar bersertifikat dengan metode pengajaran yang telah terbukti efektif.", color: "#3B82F6", bg: "bg-blue-50", border: "border-blue-100" },
  { icon: Gamepad2, title: "Metode Belajar Seru", desc: "Pembelajaran interaktif dengan permainan edukatif yang membuat anak semangat belajar.", color: "#8B5CF6", bg: "bg-purple-50", border: "border-purple-100" },
  { icon: Users, title: "Kelas Sesuai Usia", desc: "Pembagian kelas berdasarkan usia dan kemampuan untuk hasil optimal.", color: "#22C55E", bg: "bg-green-50", border: "border-green-100" },
  { icon: HeartHandshake, title: "Pembinaan Karakter", desc: "Tidak hanya baca Qur'an, tapi juga membentuk akhlak dan adab Islami.", color: "#EC4899", bg: "bg-pink-50", border: "border-pink-100" },
  { icon: TreePine, title: "Lingkungan Nyaman", desc: "Fasilitas bersih, aman, dan kondusif untuk proses belajar mengajar.", color: "#F97316", bg: "bg-orange-50", border: "border-orange-100" },
  { icon: ClipboardCheck, title: "Laporan Berkala", desc: "Orang tua menerima laporan perkembangan anak secara rutin dan transparan.", color: "#EAB308", bg: "bg-yellow-50", border: "border-yellow-100" },
  { icon: ShieldCheck, title: "Keamanan Terjamin", desc: "Sistem keamanan ketat dengan pengawasan dan penjemputan terorganisir.", color: "#EF4444", bg: "bg-red-50", border: "border-red-100" },
  { icon: BookHeart, title: "Nilai-Nilai Islami", desc: "Setiap aktivitas didasari oleh nilai-nilai Islami yang kuat dan konsisten.", color: "#6366F1", bg: "bg-indigo-50", border: "border-indigo-100" },
]

export function WhyChoose() {
  return (
    <section className="section-padding bg-slate-50/50 relative overflow-hidden">
      {/* Decorations */}
      <div className="absolute top-16 left-[10%] w-20 h-20 rounded-full bg-purple-400/5 animate-float pointer-events-none" />
      <div className="absolute bottom-32 right-[6%] w-12 h-12 rounded-2xl bg-green-400/8 animate-float-reverse pointer-events-none rotate-45" />
      <div className="absolute top-1/2 left-[3%] w-6 h-6 rounded-full bg-pink-400/10 animate-pulse-soft pointer-events-none" />

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 text-sm font-medium border border-purple-100 mb-4">
            <Award className="w-3.5 h-3.5" />
            Keunggulan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Mengapa Memilih{" "}
            <span className="gradient-text">TPQ MIQI?</span>
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
              className={`group bg-white rounded-3xl p-6 border ${f.border} shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300`}
            >
              <div
                className={`w-14 h-14 rounded-2xl ${f.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <f.icon className="w-7 h-7" style={{ color: f.color }} />
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
