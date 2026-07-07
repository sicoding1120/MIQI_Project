import { motion } from "motion/react"
import { CalendarDays, Clock, Wallet, Users, CheckCircle2, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const schedules = [
  { name: "Kelas Pagi", time: "08:00 – 10:00", days: "Senin – Jumat", age: "4 – 6 Tahun", color: "#3B82F6", icon: "🌅" },
  { name: "Kelas Siang", time: "13:00 – 15:00", days: "Senin – Jumat", age: "7 – 10 Tahun", color: "#8B5CF6", icon: "☀️" },
  { name: "Kelas Sore", time: "15:30 – 17:30", days: "Senin – Jumat", age: "10 – 13 Tahun", color: "#22C55E", icon: "🌤️" },
]

const fees = [
  { label: "Biaya Pendaftaran", amount: "Rp 150.000", note: "Sekali bayar", icon: "📝" },
  { label: "SPP Bulanan", amount: "Rp 100.000", note: "Per bulan", icon: "💰" },
  { label: "Seragam", amount: "Rp 120.000", note: "1 stel lengkap", icon: "👕" },
]

export function ScheduleFees() {
  return (
    <section id="jadwal" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-24 left-[5%] w-14 h-14 rounded-full bg-green-400/6 animate-float pointer-events-none" />

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-green-50 text-green-600 text-sm font-medium border border-green-100 mb-4">
            <CalendarDays className="w-3.5 h-3.5" />
            Jadwal & Biaya
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Jadwal Belajar & <span className="gradient-text">Biaya</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Pilih jadwal yang sesuai dengan aktivitas anak Anda.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Schedule */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-500" />
              Jadwal Kelas
            </h3>
            <div className="space-y-4">
              {schedules.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{s.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{s.name}</h4>
                      <div className="flex flex-wrap gap-3 mt-2">
                        <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />{s.time}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                          <CalendarDays className="w-3 h-3" />{s.days}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                          <Users className="w-3 h-3" />{s.age}
                        </span>
                      </div>
                    </div>
                    <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: s.color }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Fees */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Wallet className="w-5 h-5 text-green-500" />
              Biaya Pendidikan
            </h3>
            <div className="space-y-4">
              {fees.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{f.icon}</span>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{f.label}</h4>
                        <p className="text-xs text-gray-500">{f.note}</p>
                      </div>
                    </div>
                    <p className="text-lg font-bold text-gray-900">{f.amount}</p>
                  </div>
                </motion.div>
              ))}

              {/* Total info */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-5 border border-blue-100/50">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <p className="text-sm font-medium text-gray-900">Sudah termasuk:</p>
                </div>
                <ul className="text-xs text-gray-600 space-y-1 ml-6">
                  <li>• Buku & modul pembelajaran</li>
                  <li>• Raport berkala</li>
                  <li>• Kegiatan ekstra (lomba, wisuda)</li>
                </ul>
              </div>

              <Button className="w-full h-11 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-full shadow-lg cursor-pointer border-0">
                <Phone className="w-4 h-4 mr-1" />
                Hubungi untuk Info Lebih Lanjut
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
