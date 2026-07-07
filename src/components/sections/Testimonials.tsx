import { useCallback, useEffect, useState } from "react"
import { motion } from "motion/react"
import { MessageCircle, Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

const testimonials = [
  { name: "Ibu Fatimah", child: "Ahmad - Level Tahsin", rating: 5, text: "Alhamdulillah, anak saya sudah bisa membaca Al-Qur'an dengan lancar setelah 8 bulan belajar di MIQI. Metode belajarnya sangat menyenangkan!", avatar: "F", color: "#3B82F6" },
  { name: "Bapak Ridwan", child: "Aisyah - Level Iqra 4", rating: 5, text: "Pengajarnya sangat sabar dan perhatian. Anak saya selalu semangat berangkat ke TPQ setiap hari. Terima kasih MIQI!", avatar: "R", color: "#8B5CF6" },
  { name: "Ibu Sari", child: "Muhammad - Level Tahfidz", rating: 5, text: "Sangat puas dengan perkembangan anak saya. Sudah hafal 2 juz dalam setahun! Lingkungannya juga sangat Islami.", avatar: "S", color: "#22C55E" },
  { name: "Bapak Hasan", child: "Khadijah - Level Baca Qur'an", rating: 5, text: "Laporannya transparan, setiap bulan kami dapat update perkembangan. TPQ terbaik di daerah kami!", avatar: "H", color: "#F97316" },
  { name: "Ibu Nurainun", child: "Umar - Level Iqra 6", rating: 5, text: "Anak saya yang tadinya malas mengaji sekarang jadi rajin. Guru-gurunya memang hebat dalam memotivasi anak!", avatar: "N", color: "#EC4899" },
  { name: "Bapak Ahmad", child: "Hafsa - Level Tahsin", rating: 4, text: "Fasilitas bersih dan nyaman. Jadwalnya fleksibel sehingga tidak mengganggu sekolah formal. Recommended!", avatar: "A", color: "#EAB308" },
]

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  )
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => { emblaApi.off("select", onSelect) }
  }, [emblaApi, onSelect])

  return (
    <section className="section-padding bg-slate-50/50 relative overflow-hidden">
      <div className="absolute top-20 right-[8%] w-20 h-20 rounded-full bg-purple-400/5 animate-float pointer-events-none" />

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium border border-indigo-100 mb-4">
            <MessageCircle className="w-3.5 h-3.5" />
            Testimoni
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Apa Kata <span className="gradient-text">Orang Tua?</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Kepuasan dan kepercayaan orang tua adalah bukti komitmen kami.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden rounded-3xl">
            <div className="flex gap-5">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="flex-[0_0_100%] sm:flex-[0_0_48%] lg:flex-[0_0_31.5%] min-w-0"
                >
                  <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <Quote className="w-8 h-8 text-gray-200 mb-4" />
                    <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">
                      "{t.text}"
                    </p>
                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, si) => (
                        <Star
                          key={si}
                          className={`w-4 h-4 ${si < t.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}`}
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                        style={{ backgroundColor: t.color }}
                      >
                        {t.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                        <p className="text-xs text-gray-500">{t.child}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nav buttons */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 disabled:opacity-40 transition-all cursor-pointer"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canScrollNext}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 disabled:opacity-40 transition-all cursor-pointer"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
