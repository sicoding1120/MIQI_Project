import { motion } from "motion/react"
import { Smile, Sparkles, Star } from "lucide-react"
import { GeometricDecorations } from "@/components/ui/GeometricDecorations"

/* ─── Student Assets ─── */
const totalStudents = 24
const studentImages = Array.from({ length: totalStudents }, (_, i) => `/student/${(i % 10) + 1}.jpeg`)

// Split into 2 rows for better performance
const row1 = studentImages.slice(0, 12)
const row2 = studentImages.slice(12, 24)

const borderColors = [
  "border-emerald-300",
  "border-blue-300",
  "border-pink-300",
  "border-amber-300",
  "border-purple-300"
]

function MarqueeRow({ images, direction, speed }: { images: string[], direction: 'left' | 'right', speed: number }) {
  // We duplicate the array to create a seamless infinite loop
  const duplicatedImages = [...images, ...images]

  return (
    <div className="relative w-full overflow-hidden flex items-center py-4">
      <div 
        className="flex w-max"
        style={{
          animation: `scroll-${direction} ${speed}s linear infinite`,
        }}
      >
        {duplicatedImages.map((src, i) => {
          const colorClass = borderColors[i % borderColors.length]
          // Vary the sizes slightly for a playful look
          const sizeClass = i % 3 === 0 ? "w-20 h-20 md:w-24 md:h-24" : i % 2 === 0 ? "w-16 h-16 md:w-20 md:h-20" : "w-24 h-24 md:w-28 md:h-28"
          
          return (
            <div 
              key={i} 
              className={`flex-shrink-0 mx-3 md:mx-4 ${sizeClass} rounded-full border-2 ${colorClass} p-1 bg-white shadow-sm hover:scale-105 transition-transform duration-300`}
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-100">
                <img 
                  src={src} 
                  alt="Santri MIQI" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function Students() {
  return (
    <section id="santri" className="py-24 bg-white relative overflow-hidden">
      <GeometricDecorations />
      {/* ── Styles for Marquee ── */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div className="container mx-auto px-6 max-w-[1440px] relative z-10 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-teal-50 text-teal-600 text-sm font-medium border border-teal-100 mb-6">
            <Smile className="w-4 h-4" />
            Santri MIQI TPQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900">
            Wajah-Wajah <span className="text-teal-600">Ceria</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ratusan santri yang belajar, bermain, dan mengukir prestasi bersama kami dalam lingkungan Islami yang penuh warna.
          </p>
        </motion.div>
      </div>

      {/* ── Marquee Rows ── */}
      <div className="w-full flex flex-col gap-2 md:gap-4 overflow-hidden py-4">
        <MarqueeRow images={row1} direction="left" speed={30} />
        <MarqueeRow images={row2} direction="right" speed={35} />
      </div>

    </section>
  )
}
