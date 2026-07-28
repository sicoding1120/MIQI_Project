import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Image, X, ZoomIn, Play, MapPin } from "lucide-react"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import { Button } from "@/components/ui/button"
import { GeometricDecorations } from "@/components/ui/GeometricDecorations"

/* ─── Modern Gallery Data ─── */
const galleryCategories = ["Semua", "Pembelajaran", "Acara", "Fasilitas"]

const galleryItems = [
  { 
    id: 1,
    title: "Belajar Iqra Interaktif", 
    category: "Pembelajaran", 
    image: "/banner/1.jpeg", // Fallback to banner images for demo
    span: "md:col-span-2 md:row-span-2",
    date: "12 Okt 2025"
  },
  { 
    id: 2,
    title: "Hafalan Al-Qur'an", 
    category: "Pembelajaran", 
    image: "/banner/2.jpeg",
    span: "md:col-span-1 md:row-span-1",
    date: "05 Nov 2025"
  },
  { 
    id: 3,
    title: "Peringatan Idul Adha", 
    category: "Acara", 
    image: "/banner/3.jpeg",
    span: "md:col-span-1 md:row-span-2",
    date: "10 Dzulhijjah"
  },
  { 
    id: 4,
    title: "Lomba Kaligrafi", 
    category: "Acara", 
    image: "/banner/4.jpeg",
    span: "md:col-span-2 md:row-span-1",
    date: "15 Des 2025"
  },
  { 
    id: 5,
    title: "Ruang Kelas Nyaman", 
    category: "Fasilitas", 
    image: "/banner/5.jpeg",
    span: "md:col-span-1 md:row-span-1",
    date: "Area Indoor"
  },
  { 
    id: 6,
    title: "Khotam Al-Qur'an", 
    category: "Pembelajaran", 
    image: "/banner/6.jpeg",
    span: "md:col-span-2 md:row-span-1",
    date: "20 Jan 2026"
  },
]

export function Gallery() {
  const [activeTab, setActiveTab] = useState("Semua")
  const [lightboxIndex, setLightboxIndex] = useState(-1)

  // Filter items based on active tab
  const filteredItems = galleryItems.filter(
    (item) => activeTab === "Semua" || item.category === activeTab
  )

  // Create slides for lightbox dynamically based on filtered items
  const slides = filteredItems.map(item => ({ src: item.image, alt: item.title }))

  return (
    <section id="galeri" className="py-24 bg-slate-50 relative overflow-hidden min-h-screen flex flex-col">
      <GeometricDecorations />

      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 mt-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white text-blue-600 text-sm font-medium border border-gray-200 mb-6">
              <Image className="w-4 h-4 text-gray-500" />
              Galeri Kami
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight text-gray-900">
              Koleksi Momen <br />
              <span className="text-blue-600">
                Berharga Santri
              </span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl">
              Intip berbagai kegiatan seru, proses belajar yang menyenangkan, serta fasilitas terbaik yang kami sediakan di MIQI TPQ.
            </p>
          </motion.div>

          {/* ── Filter Tabs ── */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 p-1.5 bg-white backdrop-blur-md rounded-2xl border border-gray-100 shadow-sm self-start"
          >
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-colors duration-300 ${
                  activeTab === cat 
                    ? "bg-blue-600 text-white shadow-sm" 
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* ── Masonry Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className={`${item.span} group relative rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white border border-gray-200`}
                onClick={() => setLightboxIndex(index)}
              >
                {/* Image */}
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                
                {/* Solid Overlay */}
                <div className="absolute inset-0 bg-blue-900/40 group-hover:bg-blue-900/70 transition-colors duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/20 text-white rounded-full border border-white/30">
                      {item.category}
                    </span>
                    <span className="text-white/70 text-xs flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Hover Zoom Icon */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/30 border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 delay-100">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* ── Empty State ── */}
        {filteredItems.length === 0 && (
          <div className="w-full py-20 flex flex-col items-center justify-center text-gray-400">
            <Image className="w-16 h-16 mb-4 opacity-20" />
            <p>Belum ada foto di kategori ini.</p>
          </div>
        )}
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex >= 0 ? lightboxIndex : 0}
        slides={slides}
      />
    </section>
  )
}
