import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { HelpCircle, ChevronDown } from "lucide-react"
import { GeometricDecorations } from "@/components/ui/GeometricDecorations"

const faqs = [
  { q: "Apakah pendaftaran masih dibuka?", a: "Ya, pendaftaran tahun ajaran 2025/2026 masih dibuka. Silakan hubungi admin kami melalui WhatsApp untuk informasi lebih lanjut dan ketersediaan kelas." },
  { q: "Berapa usia minimal untuk mendaftar?", a: "Usia minimal untuk mendaftar di TPQ MIQI adalah 4 tahun. Kami memiliki kelas khusus untuk usia 4-6 tahun dengan metode belajar sambil bermain." },
  { q: "Apakah anak harus sudah bisa membaca Al-Qur'an?", a: "Tidak harus. Kami menerima santri dari level pemula (belum kenal huruf hijaiyah) hingga tingkat lanjut. Akan dilakukan tes penempatan untuk menentukan level yang sesuai." },
  { q: "Berapa lama waktu yang dibutuhkan sampai anak bisa membaca Al-Qur'an?", a: "Setiap anak memiliki kecepatan belajar yang berbeda. Rata-rata santri kami membutuhkan waktu 1-2 tahun untuk bisa membaca Al-Qur'an dengan lancar, tergantung konsistensi dan kemampuan anak." },
  { q: "Apakah bisa memilih jadwal belajar?", a: "Ya, kami menyediakan 3 sesi belajar (pagi, siang, sore) yang bisa dipilih sesuai dengan jadwal aktivitas anak Anda." },
  { q: "Berapa biaya pendaftaran dan SPP bulanan?", a: "Biaya pendaftaran Rp 150.000 (sekali bayar) dan SPP bulanan Rp 100.000. Sudah termasuk buku, modul, dan raport berkala." },
  { q: "Apakah ada seragam?", a: "Ya, tersedia seragam TPQ MIQI dengan harga Rp 120.000 per stel. Seragam digunakan setiap hari belajar." },
  { q: "Bagaimana metode pembelajaran yang digunakan?", a: "Kami menggunakan metode fun learning dengan pendekatan bermain sambil belajar, kelompok kecil (maks. 10 anak), bimbingan personal, dan evaluasi berkala. Orang tua mendapat laporan perkembangan setiap bulan." },
]

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="bg-white rounded-md border border-gray-200 shadow-sm overflow-hidden hover:border-gray-300 transition-colors"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer"
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-900 text-sm leading-relaxed">{faq.q}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-3">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQ() {
  return (
    <section id="faq" className="section-padding bg-slate-50 relative overflow-hidden">
      <GeometricDecorations />
      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-sm font-medium border border-emerald-100 mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Pertanyaan yang Sering Ditanyakan
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Temukan jawaban atas pertanyaan umum seputar TPQ MIQI.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
