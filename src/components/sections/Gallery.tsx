import { useState } from "react"
import { motion } from "motion/react"
import { Image, X } from "lucide-react"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

const galleryItems = [
  { title: "Belajar Iqra", color: "from-blue-400 to-blue-600", category: "Pembelajaran", span: "col-span-2 row-span-2" },
  { title: "Hafalan Al-Qur'an", color: "from-purple-400 to-purple-600", category: "Tahfidz", span: "col-span-1 row-span-1" },
  { title: "Praktik Sholat", color: "from-green-400 to-green-600", category: "Ibadah", span: "col-span-1 row-span-1" },
  { title: "Lomba Tilawah", color: "from-pink-400 to-pink-600", category: "Kompetisi", span: "col-span-1 row-span-2" },
  { title: "Wisuda Santri", color: "from-yellow-400 to-orange-500", category: "Kelulusan", span: "col-span-1 row-span-1" },
  { title: "Kegiatan Ramadan", color: "from-emerald-400 to-teal-600", category: "Ramadan", span: "col-span-1 row-span-1" },
  { title: "Belajar di Alam", color: "from-orange-400 to-red-500", category: "Outdoor", span: "col-span-2 row-span-1" },
  { title: "Kelas Kaligrafi", color: "from-indigo-400 to-violet-600", category: "Seni Islam", span: "col-span-1 row-span-1" },
]

export function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const slides = galleryItems.map((item) => ({
    src: `data:image/svg+xml,${encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:${item.color.includes('blue') ? '#60A5FA' : item.color.includes('purple') ? '#A78BFA' : item.color.includes('green') ? '#4ADE80' : item.color.includes('pink') ? '#F472B6' : item.color.includes('yellow') ? '#FACC15' : item.color.includes('emerald') ? '#34D399' : item.color.includes('orange') ? '#FB923C' : '#818CF8'}"/><stop offset="100%" style="stop-color:${item.color.includes('blue') ? '#2563EB' : item.color.includes('purple') ? '#7C3AED' : item.color.includes('green') ? '#16A34A' : item.color.includes('pink') ? '#DB2777' : item.color.includes('yellow') ? '#EA580C' : item.color.includes('emerald') ? '#0D9488' : item.color.includes('orange') ? '#DC2626' : '#4F46E5'}"/></linearGradient></defs><rect fill="url(#g)" width="800" height="600"/><text x="400" y="300" text-anchor="middle" font-family="sans-serif" font-size="28" fill="white" opacity="0.9">${item.title}</text></svg>`
    )}`,
    alt: item.title,
  }))

  return (
    <section id="galeri" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-20 left-[6%] w-16 h-16 rounded-full bg-pink-400/5 animate-float pointer-events-none" />

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-pink-50 text-pink-600 text-sm font-medium border border-pink-100 mb-4">
            <Image className="w-3.5 h-3.5" />
            Galeri Kegiatan
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Momen <span className="gradient-text">Berharga</span> Kami
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Dokumentasi kegiatan belajar dan aktivitas santri di TPQ MIQI.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px] lg:auto-rows-[200px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.06 }}
              className={`${item.span} group relative rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300`}
              onClick={() => {
                setLightboxIndex(i)
                setLightboxOpen(true)
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />

              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white/40 rounded-full" />
                <div className="absolute bottom-6 left-6 w-12 h-12 border-2 border-white/30 rounded-xl rotate-12" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <span className="text-white/70 text-xs font-medium mb-1">{item.category}</span>
                <h4 className="text-white font-semibold text-sm sm:text-base">{item.title}</h4>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300">
                  <Image className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={slides}
      />
    </section>
  )
}
