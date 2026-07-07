import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Sparkles,
  Users,
  Award,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  Star,
  BookOpen,
  Heart,
} from "lucide-react"
import CountUp from "react-countup"

const stats = [
  { icon: Users, value: 250, suffix: "+", label: "Santri Aktif", color: "text-blue-500 bg-blue-50" },
  { icon: GraduationCap, value: 15, suffix: "", label: "Pengajar", color: "text-purple-500 bg-purple-50" },
  { icon: Award, value: 10, suffix: "+", label: "Tahun Pengalaman", color: "text-green-500 bg-green-50" },
  { icon: ShieldCheck, value: 100, suffix: "%", label: "Lingkungan Islami", color: "text-pink-500 bg-pink-50" },
]

const badges = [
  { icon: CheckCircle2, label: "Pendaftaran Dibuka", color: "text-green-600 bg-green-50 border-green-200" },
  { icon: Award, label: "Pengajar Bersertifikat", color: "text-blue-600 bg-blue-50 border-blue-200" },
  { icon: Heart, label: "Belajar Nyaman", color: "text-pink-600 bg-pink-50 border-pink-200" },
  { icon: Star, label: "Pendidikan Karakter", color: "text-yellow-600 bg-yellow-50 border-yellow-200" },
]

export function Hero() {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white pt-20">
      {/* Floating Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-32 left-[8%] w-20 h-20 rounded-full bg-blue-400/10 animate-float" />
        <div className="absolute top-48 right-[12%] w-14 h-14 rounded-2xl bg-purple-400/15 rotate-12 animate-float-delayed" />
        <div className="absolute top-[60%] left-[5%] w-10 h-10 rounded-xl bg-pink-400/10 animate-float-reverse" />
        <div className="absolute top-[30%] right-[8%] w-6 h-6 rounded-full bg-green-400/20 animate-float-slow" />
        <div className="absolute bottom-[20%] right-[15%] w-16 h-16 rounded-full bg-yellow-400/10 animate-float" />
        <div className="absolute top-[20%] left-[25%] w-4 h-4 rounded-full bg-orange-400/20 animate-pulse-soft" />
        <div className="absolute bottom-[30%] left-[18%] w-8 h-8 rotate-45 bg-purple-400/10 rounded-lg animate-float-delayed" />
        {/* Star shapes */}
        <Star className="absolute top-[25%] right-[25%] w-5 h-5 text-yellow-400/20 animate-pulse-soft" />
        <Sparkles className="absolute bottom-[40%] left-[30%] w-4 h-4 text-blue-400/20 animate-float-slow" />
        {/* Gradient blob */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-blue-200/20 to-purple-200/20 blur-3xl animate-pulse-soft" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-gradient-to-br from-pink-200/15 to-yellow-200/15 blur-3xl animate-pulse-soft" />
      </div>

      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Open Registration Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-medium mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              Pendaftaran Tahun Ajaran 2025/2026 Dibuka!
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-6">
              Bimbingan Belajar{" "}
              <span className="gradient-text">Al-Qur'an</span>{" "}
              Terbaik untuk Putra-Putri Anda
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Memberikan pendidikan Al-Qur'an yang menyenangkan, berkualitas, dan
              membentuk generasi Qur'ani berakhlak mulia sejak dini.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
              <Button className="h-12 px-8 text-base bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer border-0">
                Daftar Sekarang
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button
                variant="outline"
                className="h-12 px-8 text-base rounded-full border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-300 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 mr-1 text-purple-500" />
                Hubungi Kami
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {badges.map((badge) => (
                <div
                  key={badge.label}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border ${badge.color}`}
                >
                  <badge.icon className="w-3.5 h-3.5" />
                  {badge.label}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Illustration Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main illustration card */}
              <div className="relative w-full aspect-square max-w-lg mx-auto rounded-[2rem] bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50 border border-white/80 shadow-2xl shadow-blue-500/10 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-xl">
                      <BookOpen className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">بِسْمِ اللَّهِ</h3>
                    <p className="text-gray-500 text-sm">Belajar Al-Qur'an dengan Cinta</p>
                  </div>
                </div>
                {/* Decorative inner elements */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-yellow-400/20 rotate-12 animate-float" />
                <div className="absolute bottom-10 left-6 w-8 h-8 rounded-full bg-pink-400/20 animate-float-reverse" />
                <div className="absolute top-1/2 right-8 w-6 h-6 rounded-lg bg-green-400/20 animate-float-slow" />
              </div>

              {/* Floating stat cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 top-1/4 bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-4 border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                    <Users className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900">250+</p>
                    <p className="text-xs text-gray-500">Santri Aktif</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-4 bottom-1/4 bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-4 border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-yellow-50 flex items-center justify-center">
                    <Star className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900">4.9/5</p>
                    <p className="text-xs text-gray-500">Rating Ortu</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 lg:mt-24"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="group bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">
                  <CountUp end={stat.value} enableScrollSpy scrollSpyOnce duration={2.5} />
                  {stat.suffix}
                </p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
