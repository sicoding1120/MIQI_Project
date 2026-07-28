import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Image, ZoomIn, MapPin } from "lucide-react"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import { GeometricDecorations } from "@/components/ui/GeometricDecorations"

/* ─── Gallery Categories ─── */
const galleryCategories = ["Semua", "Ngaji", "Takjil", "Haflah", "Lomba", "Solat", "Umroh"]

/* ─── Gallery Data from public/event/ ─── */
const galleryItems = [
  // ── Ngaji (13 photos) ──
  { id: 1,  title: "Kegiatan Mengaji", category: "Ngaji", image: "/event/ngaji/1.jpeg", span: "md:col-span-2 md:row-span-2", label: "Belajar Al-Qur'an" },
  { id: 2,  title: "Belajar Iqra", category: "Ngaji", image: "/event/ngaji/2.jpeg", span: "md:col-span-1 md:row-span-1", label: "Kelas Iqra" },
  { id: 3,  title: "Hafalan Surat", category: "Ngaji", image: "/event/ngaji/3.jpeg", span: "md:col-span-1 md:row-span-1", label: "Tahfidz" },
  { id: 4,  title: "Kelas Tahsin", category: "Ngaji", image: "/event/ngaji/4.jpeg", span: "md:col-span-1 md:row-span-1", label: "Tahsin" },
  { id: 5,  title: "Suasana Belajar", category: "Ngaji", image: "/event/ngaji/5.jpeg", span: "md:col-span-1 md:row-span-1", label: "Kelas Santri" },
  { id: 6,  title: "Santri Mengaji", category: "Ngaji", image: "/event/ngaji/6.jpeg", span: "md:col-span-1 md:row-span-1", label: "Mengaji Bersama" },
  { id: 7,  title: "Bimbingan Mengaji", category: "Ngaji", image: "/event/ngaji/7.jpeg", span: "md:col-span-1 md:row-span-1", label: "Bimbingan" },
  { id: 8,  title: "Setoran Hafalan", category: "Ngaji", image: "/event/ngaji/8.jpeg", span: "md:col-span-1 md:row-span-1", label: "Setoran" },
  { id: 9,  title: "Kelas Al-Qur'an", category: "Ngaji", image: "/event/ngaji/9.jpeg", span: "md:col-span-1 md:row-span-1", label: "Al-Qur'an" },
  { id: 10, title: "Belajar Kitab", category: "Ngaji", image: "/event/ngaji/10.jpeg", span: "md:col-span-1 md:row-span-1", label: "Kitab" },
  { id: 11, title: "Sesi Mengaji Malam", category: "Ngaji", image: "/event/ngaji/11.jpeg", span: "md:col-span-1 md:row-span-1", label: "Ngaji Malam" },
  { id: 12, title: "Latihan Tajwid", category: "Ngaji", image: "/event/ngaji/12.jpeg", span: "md:col-span-2 md:row-span-1", label: "Tajwid" },
  { id: 13, title: "Khotam Al-Qur'an", category: "Ngaji", image: "/event/ngaji/13.jpeg", span: "md:col-span-1 md:row-span-1", label: "Khotmil Qur'an" },

  // ── Takjil (11 photos) ──
  { id: 14, title: "Bagi Takjil", category: "Takjil", image: "/event/takjil/1.jpeg", span: "md:col-span-2 md:row-span-2", label: "Ramadhan" },
  { id: 15, title: "Persiapan Takjil", category: "Takjil", image: "/event/takjil/2.jpeg", span: "md:col-span-1 md:row-span-1", label: "Persiapan" },
  { id: 16, title: "Berbagi Kebaikan", category: "Takjil", image: "/event/takjil/3.jpeg", span: "md:col-span-1 md:row-span-1", label: "Berbagi" },
  { id: 17, title: "Takjil Gratis", category: "Takjil", image: "/event/takjil/4.jpeg", span: "md:col-span-1 md:row-span-1", label: "Gratis" },
  { id: 18, title: "Santri Bagi Takjil", category: "Takjil", image: "/event/takjil/5.jpeg", span: "md:col-span-1 md:row-span-1", label: "Aksi Santri" },
  { id: 19, title: "Keseruan Takjil", category: "Takjil", image: "/event/takjil/6.jpeg", span: "md:col-span-1 md:row-span-1", label: "Keseruan" },
  { id: 20, title: "Takjil di Jalan", category: "Takjil", image: "/event/takjil/7.jpeg", span: "md:col-span-1 md:row-span-1", label: "Di Jalan" },
  { id: 21, title: "Buka Puasa Bersama", category: "Takjil", image: "/event/takjil/8.jpeg", span: "md:col-span-2 md:row-span-1", label: "Bukber" },
  { id: 22, title: "Sedekah Takjil", category: "Takjil", image: "/event/takjil/9.jpeg", span: "md:col-span-1 md:row-span-1", label: "Sedekah" },
  { id: 23, title: "Takjil untuk Warga", category: "Takjil", image: "/event/takjil/10.jpeg", span: "md:col-span-1 md:row-span-1", label: "Untuk Warga" },
  { id: 24, title: "Kebersamaan Ramadhan", category: "Takjil", image: "/event/takjil/11.jpeg", span: "md:col-span-1 md:row-span-1", label: "Kebersamaan" },

  // ── Haflah (3 photos) ──
  { id: 25, title: "Wisuda Santri", category: "Haflah", image: "/event/haflah/1.jpeg", span: "md:col-span-2 md:row-span-2", label: "Wisuda" },
  { id: 26, title: "Acara Haflah", category: "Haflah", image: "/event/haflah/2.jpeg", span: "md:col-span-1 md:row-span-1", label: "Perayaan" },
  { id: 27, title: "Pentas Seni Santri", category: "Haflah", image: "/event/haflah/3.jpeg", span: "md:col-span-1 md:row-span-1", label: "Pentas Seni" },

  // ── Lomba (3 photos) ──
  { id: 28, title: "Lomba Hafalan", category: "Lomba", image: "/event/lomba/1.jpeg", span: "md:col-span-2 md:row-span-2", label: "Hafalan" },
  { id: 29, title: "Lomba Tilawah", category: "Lomba", image: "/event/lomba/2.jpeg", span: "md:col-span-1 md:row-span-1", label: "Tilawah" },
  { id: 30, title: "Perlombaan Santri", category: "Lomba", image: "/event/lomba/3.jpeg", span: "md:col-span-1 md:row-span-1", label: "Kompetisi" },

  // ── Solat (2 photos) ──
  { id: 31, title: "Sholat Berjamaah", category: "Solat", image: "/event/solat/1.jpeg", span: "md:col-span-2 md:row-span-2", label: "Berjamaah" },
  { id: 32, title: "Praktik Sholat", category: "Solat", image: "/event/solat/2.jpeg", span: "md:col-span-1 md:row-span-1", label: "Praktik" },

  // ── Umroh (2 photos) ──
  { id: 33, title: "Perjalanan Umroh", category: "Umroh", image: "/event/umroh/1.jpeg", span: "md:col-span-2 md:row-span-2", label: "Umroh" },
  { id: 34, title: "Ibadah di Tanah Suci", category: "Umroh", image: "/event/umroh/2.jpeg", span: "md:col-span-1 md:row-span-1", label: "Tanah Suci" },
]

export function Gallery() {
  const [activeTab, setActiveTab] = useState("Semua")
  const [lightboxIndex, setLightboxIndex] = useState(-1)

  // Filter items based on active tab
  const filteredItems = activeTab === "Semua"
    ? [
        { ...galleryItems.find(i => i.category === "Ngaji")!, span: "md:col-span-2 md:row-span-2" },
        { ...galleryItems.find(i => i.category === "Takjil")!, span: "md:col-span-1 md:row-span-1" },
        { ...galleryItems.find(i => i.category === "Haflah")!, span: "md:col-span-1 md:row-span-2" },
        { ...galleryItems.find(i => i.category === "Lomba")!, span: "md:col-span-2 md:row-span-1" },
        { ...galleryItems.find(i => i.category === "Solat")!, span: "md:col-span-1 md:row-span-1" },
        { ...galleryItems.find(i => i.category === "Umroh")!, span: "md:col-span-2 md:row-span-1" },
      ]
    : galleryItems.filter((item) => item.category === activeTab)

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
              Intip berbagai kegiatan seru, proses belajar yang menyenangkan, serta momen berharga di MIQI TPQ.
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
                      {item.label}
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
