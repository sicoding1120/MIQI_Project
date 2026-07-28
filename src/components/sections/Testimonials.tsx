import { motion } from "motion/react"
import { MessageCircle, Star, StarHalf, Quote } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import AutoScroll from "embla-carousel-auto-scroll"
import { GeometricDecorations } from "@/components/ui/GeometricDecorations"
import ulasanData from "@/JSON/ulasan.json"

const AVATAR_COLORS = [
  "#3B82F6", // Blue
  "#8B5CF6", // Purple
  "#10B981", // Emerald
  "#F59E0B", // Amber
  "#EF4444", // Red
  "#EC4899", // Pink
  "#06B6D4", // Cyan
  "#14B8A6", // Teal
]

const parentTestimonials = ulasanData
  .filter(item => item.category === "parent")
  .map((item, index) => {
    const parentName = item.parent === "Tidak Disebutkan" ? "Orang Tua Santri" : item.parent;
    const childName = item.name === "Tidak Disebutkan" ? "Santri MIQI" : item.name;
    return {
      name: parentName,
      child: `Wali dari ${childName}`,
      rating: item.rating,
      text: item.testimonial,
      avatar: parentName.trim().charAt(0) || "O",
      color: AVATAR_COLORS[index % AVATAR_COLORS.length],
      type: "Orang Tua"
    }
  })

const studentTestimonials = ulasanData
  .filter(item => item.category === "alumni")
  .map((item, index) => {
    return {
      name: item.name,
      child: "Alumni / Santri",
      rating: item.rating,
      text: item.testimonial,
      avatar: item.name.trim().charAt(0) || "S",
      color: AVATAR_COLORS[index % AVATAR_COLORS.length],
      type: "Santri"
    }
  })

// Single Card Component
function TestimonialCard({ t }: { t: any }) {
  return (
    <div className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0 mr-5 select-none flex">
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md hover:border-pink-200 transition-all duration-300 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <Quote className="w-8 h-8 text-pink-100" />
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md ${t.type === 'Santri' ? 'bg-gray-100 text-gray-600' : 'bg-pink-50 text-pink-600'}`}>
            {t.type}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">
          "{t.text}"
        </p>
        
        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, si) => {
            const indexValue = si + 0.5;
            if (t.rating >= si + 1) {
              return (
                <Star
                  key={si}
                  className="w-4 h-4 text-yellow-400 fill-yellow-400"
                />
              )
            } else if (t.rating >= indexValue) {
              return (
                <StarHalf
                  key={si}
                  className="w-4 h-4 text-yellow-400 fill-yellow-400"
                />
              )
            } else {
              return (
                <Star
                  key={si}
                  className="w-4 h-4 text-gray-200"
                />
              )
            }
          })}
        </div>
        
        <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
            style={{ backgroundColor: t.color }}
          >
            {t.avatar}
          </div>
          <div>
            <p className="font-semibold text-gray-900 text-sm leading-tight">{t.name}</p>
            <p className="text-xs text-gray-500 mt-0.5">{t.child}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Marquee Row Component
function TestimonialMarquee({ items, direction = "forward" }: { items: any[], direction?: "forward" | "backward" }) {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true, align: "start" },
    [AutoScroll({ playOnInit: true, speed: 0.8, direction, stopOnInteraction: false, stopOnMouseEnter: true })]
  )

  return (
    <div ref={emblaRef} className="overflow-hidden w-full py-2 cursor-grab active:cursor-grabbing">
      <div className="flex items-stretch ml-[-20px] pl-[20px]">
        {items.map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
        {/* Duplicate for smoother looping visually if items are few */}
        {items.map((t, i) => (
          <TestimonialCard key={`dup-${i}`} t={t} />
        ))}
      </div>
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden flex flex-col">
      <GeometricDecorations />

      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-md bg-white text-pink-600 text-sm font-medium border border-gray-200 mb-4">
            <MessageCircle className="w-3.5 h-3.5 text-gray-500" />
            Testimoni & Pengalaman
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Suara <span className="text-pink-600">Hati Mereka</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-2">
            Dengarkan langsung pengalaman berharga dari orang tua dan para santri.
          </p>
          <p className="text-xs text-gray-400">
            (Geser/Tarik kartu untuk melihat lebih banyak)
          </p>
        </motion.div>
      </div>

      {/* ── Two-Row Marquee ── */}
      <div className="w-full flex flex-col gap-4 px-2 md:px-0">
        <TestimonialMarquee items={parentTestimonials} direction="forward" />
        <TestimonialMarquee items={studentTestimonials} direction="backward" />
      </div>

    </section>
  )
}
