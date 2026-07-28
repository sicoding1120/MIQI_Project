import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, BookOpen, Heart, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { GeometricDecorations } from "@/components/ui/GeometricDecorations"

/* ─── Banner Image Sources ─── */
const bannerImages = [
  "/banner/1.jpeg",
  "/banner/2.jpeg",
  "/banner/3.jpeg",
  "/banner/4.jpeg",
  "/banner/5.jpeg",
  "/banner/6.jpeg",
]

/* ─── Social Icons ─── */
const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/sahabattpqmiqi",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/6288801252105",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCOLc2U8N6vQ9xJB17ZcM03Q",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@sahabattpqmiqi",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M12.525.01c1.306-.022 2.614-.01 3.921-.012.08 1.134.423 2.222 1.096 3.125.793.992 1.936 1.636 3.167 1.877v3.918c-1.396-.065-2.735-.615-3.805-1.545-.19-.153-.362-.323-.526-.503v7.359c.024 1.2-.28 2.41-.89 3.447-.63 1.107-1.632 1.986-2.825 2.477-1.282.526-2.731.625-4.072.28-1.353-.34-2.585-1.168-3.415-2.308-1.025-1.38-1.425-3.175-1.127-4.885.293-1.64 1.258-3.126 2.658-4.015 1.18-.767 2.617-1.1 4.014-.925v4.037c-.773-.176-1.597-.042-2.274.372-.647.382-1.102 1.033-1.25 1.782-.24.973.064 2.052.793 2.68.746.666 1.838.835 2.748.423.83-.34 1.436-1.11 1.583-1.986.068-.314.073-.637.073-.956V.01z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61592310251382",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  }
]

/* ─── Dot Pattern Decoration ─── */
function DotPattern({ className }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none ${className}`} style={{ opacity: 0.12 }}>
      <svg width="120" height="120" viewBox="0 0 120 120">
        {Array.from({ length: 36 }, (_, i) => {
          const row = Math.floor(i / 6)
          const col = i % 6
          return (
            <circle
              key={i}
              cx={col * 20 + 10}
              cy={row * 20 + 10}
              r="2"
              fill="currentColor"
              className="text-gray-600"
            />
          )
        })}
      </svg>
    </div>
  )
}

/* ─── Slide Variants (static, no re-creation) ─── */
const slideVariants = {
  enter: (d: number) => ({
    x: d > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (d: number) => ({
    x: d > 0 ? -80 : 80,
    opacity: 0,
    scale: 0.96,
  }),
}

/* ─── Banner Carousel Component ─── */
function BannerCarousel() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const goTo = useCallback((idx: number) => {
    setDirection(idx > current ? 1 : -1)
    setCurrent(idx)
  }, [current])

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % bannerImages.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + bannerImages.length) % bannerImages.length)
  }, [])

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])


  return (
    <div className="relative w-full h-full">
      {/* ─── Main showcase container ─── */}
      <div className="relative w-full h-full rounded-[32px] overflow-hidden shadow-2xl shadow-gray-300/40 bg-gray-100 border border-white/60">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.img
            key={current}
            src={bannerImages[current]}
            alt={`MIQI Banner ${current + 1}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Subtle inner gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />

        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center text-gray-700 hover:bg-white hover:scale-105 transition-all duration-200 cursor-pointer border border-white/50"
          aria-label="Previous banner"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center text-gray-700 hover:bg-white hover:scale-105 transition-all duration-200 cursor-pointer border border-white/50"
          aria-label="Next banner"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* ─── Dot Indicators ─── */}
      <div className="flex items-center justify-center gap-2 mt-5">
        {bannerImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            aria-label={`Go to banner ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              idx === current
                ? "w-7 bg-emerald-500"
                : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Decorative accents (static, no motion overhead) */}
      <div className="absolute -top-4 -right-6 w-16 h-12 border-2 border-emerald-200/30 rounded-full pointer-events-none" />
      <div className="absolute -bottom-3 -left-5 w-10 h-10 border-2 border-purple-200/25 rounded-lg pointer-events-none" style={{ transform: 'rotate(45deg)' }} />
      <div className="absolute top-8 -left-8 w-14 h-10 border-2 border-pink-200/20 rounded-xl pointer-events-none" />
    </div>
  )
}

/* ─── Main Banner Component ─── */
export function Banner() {
  return (
    <section id="beranda" className="banner-padding">
      <div 
        className="relative min-h-screen flex items-center overflow-hidden bg-slate-50 rounded-xl mx-4 lg:mx-8 my-4 lg:my-6 border border-gray-100"
      >
      <GeometricDecorations />

      {/* ── Layer 2: Micro decorations ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <DotPattern className="top-28 left-[6%] text-gray-400" />
        <DotPattern className="bottom-20 right-[8%] text-emerald-400" />

        <div className="absolute bottom-[15%] left-[12%]" style={{ opacity: 0.15 }}>
          <div className="flex flex-col gap-1.5">
            <div className="w-6 h-[2px] bg-gray-400 rounded-full" />
            <div className="w-4 h-[2px] bg-gray-400 rounded-full" />
            <div className="w-8 h-[2px] bg-gray-400 rounded-full" />
          </div>
        </div>
      </div>

      {/* Removed Layer 2.5: Floating Emoji Decorations */}

      {/* ── Layer 3: Main Content Grid ── */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center px-6 py-16 md:px-12 lg:px-16">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center h-full max-w-[1440px] mx-auto mt-12 lg:mt-0">
          {/* ─── Left Column: Typography Block (~40% → 5 cols) ─── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-center z-20"
          >
            {/* Overline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-semibold tracking-wider uppercase mb-8 w-fit"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Pendaftaran 2025/2026
            </motion.div>

            {/* H1 — Dominant Headline */}
            <h1
              className="font-bold text-gray-900 mb-5 leading-[1.1] tracking-tight flex flex-col gap-2"
              style={{
                fontSize: "clamp(32px, 4vw, 56px)",
              }}
            >
              <div className="flex items-center gap-3">
                Majelis Ta'lim
                <BookOpen className="w-8 h-8 text-emerald-600 md:w-12 md:h-12" />
              </div>
              <span className="text-emerald-700">
                Inarotul Qalbi
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-gray-600 font-medium mb-6 max-w-lg leading-snug"
              style={{
                fontSize: "clamp(18px, 2vw, 24px)",
              }}
            >
              Membentuk generasi Qur'ani berakhlak mulia sejak dini
            </p>

            {/* Body Text */}
            <p
              className="text-gray-600 mb-8 max-w-lg"
              style={{
                fontSize: "clamp(14px, 1vw, 16px)",
                lineHeight: "1.6",
              }}
            >
              Dengan metode pembelajaran yang interaktif dan pengajar bersertifikat,
              kami hadir memberikan pendidikan Al-Qur'an terbaik untuk putra-putri Anda.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full">
              <a href="https://wa.me/6288801252105" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto h-14 px-8 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md shadow-sm transition-all duration-300 font-medium cursor-pointer">
                  Daftar Sekarang
                </Button>
              </a>
              <a href="#jadwal" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto h-14 px-8 border-gray-200 text-gray-700 hover:bg-gray-50 rounded-md shadow-sm transition-all duration-300 font-medium cursor-pointer">
                  Jadwal & Biaya
                </Button>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-10">
              <span className="text-xs text-gray-400 font-medium tracking-wider uppercase">
                Follow us
              </span>
              <div className="w-8 h-[1px] bg-gray-200" />
              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-emerald-500 hover:border-emerald-200 hover:bg-emerald-50 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ─── Right Column: Banner Showcase (~60% → 7 cols) ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 relative flex items-center justify-center w-full mt-8 lg:mt-0"
          >
            <div className="relative w-full max-w-[680px] aspect-[16/10] mx-auto lg:ml-auto lg:mr-0">
              <BannerCarousel />

              {/* 50 Santri card */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="absolute -left-8 bottom-6 z-30 bg-white p-4 rounded-xl shadow-lg border border-gray-100 hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center shrink-0">
                    <Star className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">50 Santri Aktif</p>
                    <p className="text-xs text-gray-500">Bergabung bersama kami</p>
                  </div>
                </div>
              </motion.div>

              {/* Rating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -top-4 -right-4 z-30 hidden md:block"
              >
                <div className="flex items-center gap-2 bg-white rounded-md px-3 py-1.5 shadow-sm border border-gray-100">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  <span className="text-xs font-semibold text-gray-700">4.9/5 Rating</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Layer 5: Bottom gradient fade ── */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

      {/* ── Mobile: Simple banner carousel ── */}
      <div className="lg:hidden absolute top-24 right-4 left-4 z-0 opacity-15">
        <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden">
          <img
            src={bannerImages[0]}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
      </div>
    </section>
  )
}
