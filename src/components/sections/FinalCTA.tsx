import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Sparkles, Star } from "lucide-react"

export function FinalCTA() {
  return (
    <section id="daftar" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500" />

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-[10%] w-32 h-32 rounded-full border-2 border-white/30 animate-float" />
        <div className="absolute top-20 right-[15%] w-20 h-20 rounded-2xl border-2 border-white/20 rotate-12 animate-float-delayed" />
        <div className="absolute bottom-16 left-[20%] w-16 h-16 rounded-full border-2 border-white/25 animate-float-reverse" />
        <div className="absolute bottom-10 right-[10%] w-24 h-24 rounded-3xl border-2 border-white/15 animate-float-slow" />
        <Star className="absolute top-16 left-[40%] w-6 h-6 text-white/20 animate-pulse-soft" />
        <Sparkles className="absolute bottom-20 right-[35%] w-5 h-5 text-white/15 animate-float" />
        <div className="absolute top-1/2 left-[5%] w-8 h-8 rounded-full bg-white/5 animate-pulse-soft" />
        <div className="absolute top-[30%] right-[5%] w-6 h-6 rounded-lg bg-white/8 rotate-45 animate-float-delayed" />
      </div>

      {/* Glow effects */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-white/5 blur-3xl" />

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium border border-white/20 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            Pendaftaran Masih Dibuka
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.15] mb-6">
            Siap Membantu Anak Anda Belajar Al-Qur'an dengan{" "}
            <span className="text-yellow-300">Penuh Percaya Diri?</span>
          </h2>

          <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto leading-relaxed">
            Jangan tunda lagi! Daftarkan putra-putri Anda sekarang dan biarkan mereka
            tumbuh menjadi generasi Qur'ani yang berakhlak mulia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="h-14 px-10 text-base bg-white text-gray-900 hover:bg-gray-50 rounded-full shadow-2xl shadow-black/20 hover:-translate-y-1 transition-all duration-300 font-semibold cursor-pointer border-0">
              Daftar Sekarang
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
            <Button className="h-14 px-10 text-base bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white/20 rounded-full transition-all duration-300 cursor-pointer">
              <Phone className="w-5 h-5 mr-1" />
              Hubungi Admin
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
