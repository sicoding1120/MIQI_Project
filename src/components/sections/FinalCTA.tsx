import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Sparkles, Star } from "lucide-react"
import { GeometricDecorations } from "@/components/ui/GeometricDecorations"

export function FinalCTA() {
  return (
    <section id="daftar" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-900" />
      <GeometricDecorations />

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-slate-800/80 text-white/90 text-sm font-medium border border-slate-700 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            Pendaftaran Masih Dibuka
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.2] mb-6">
            Siap Membantu Anak Anda Belajar Al-Qur'an dengan{" "}
            <span className="text-slate-300">Penuh Percaya Diri?</span>
          </h2>

          <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto leading-relaxed">
            Jangan tunda lagi! Daftarkan putra-putri Anda sekarang dan biarkan mereka
            tumbuh menjadi generasi Qur'ani yang berakhlak mulia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/6288801252105" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto h-12 px-8 text-base bg-white text-slate-900 hover:bg-gray-100 rounded-md shadow-sm transition-all duration-300 font-medium cursor-pointer border-0">
                Daftar Sekarang
              </Button>
            </a>
            <a href="https://wa.me/6288801252105" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto h-12 px-8 text-base bg-slate-800 text-white hover:bg-slate-700 rounded-md border-0 transition-all duration-300 cursor-pointer font-medium">
                Hubungi Admin
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
