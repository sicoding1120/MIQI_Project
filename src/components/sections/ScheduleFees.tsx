import { motion } from "motion/react"
import { CalendarDays, Clock, Wallet, Users, CheckCircle2, Phone, Sunrise, Sun, Sunset, FileText, Coins, Shirt } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GeometricDecorations } from "@/components/ui/GeometricDecorations"

const schedules = [
  { name: "Shigor Awal", time: "15:30 – 16:30", days: "Senin – Jumat", age: "4 – 6 Tahun", color: "#3B82F6", icon: Sunrise },
  { name: "Shigor Tsani", time: "17:00 – 19:30", days: "Senin – Jumat", age: "7 – 10 Tahun", color: "#8B5CF6", icon: Sun },
  { name: "Kibar", time: "17:30 – 19:30", days: "Senin – Jumat", age: "10 – 13 Tahun", color: "#22C55E", icon: Sunset },
]

const fees = [
  { label: "Biaya Pendaftaran", amount: "Gratis", note: "Sekali bayar", icon: FileText, color: "#3B82F6" },
  { label: "SPP Bulanan", amount: "Rp 50.000", note: "Per bulan", icon: Coins, color: "#22C55E" },
  { label: "Seragam", amount: "Rp 140.000", note: "1 stel lengkap", icon: Shirt, color: "#F97316" },
]

export function ScheduleFees() {
  return (
    <section id="jadwal" className="section-padding bg-white relative overflow-hidden">
      <GeometricDecorations />
      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-green-50 text-green-600 text-sm font-medium border border-emerald-100 mb-4">
            <CalendarDays className="w-3.5 h-3.5" />
            Jadwal & Biaya
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Jadwal Belajar & Biaya
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
              <Clock className="w-5 h-5 text-emerald-700" />
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
                  className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: `${s.color}15`, color: s.color }}
                    >
                      <s.icon className="w-6 h-6" />
                    </div>
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
                  className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div 
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: `${f.color}15`, color: f.color }}
                      >
                        <f.icon className="w-6 h-6" />
                      </div>
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
              <div className="bg-slate-50 rounded-xl p-5 border border-gray-200">
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

              <a href="https://wa.me/6288801252105" target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button className="w-full h-11 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md shadow-sm cursor-pointer border-0 font-medium">
                  <Phone className="w-4 h-4 mr-2" />
                  Hubungi untuk Info Lebih Lanjut
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
