import { motion } from "motion/react"
import { MapPin, Phone, Navigation, Clock, Car } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Location() {
  return (
    <section id="kontak" className="section-padding bg-slate-50/50 relative overflow-hidden">
      <div className="absolute bottom-20 right-[5%] w-14 h-14 rounded-full bg-red-400/6 animate-float pointer-events-none" />

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-red-50 text-red-600 text-sm font-medium border border-red-100 mb-4">
            <MapPin className="w-3.5 h-3.5" />
            Lokasi
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Temukan <span className="gradient-text">Lokasi Kami</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Lokasi strategis dan mudah dijangkau.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-3 rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.194741299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonas!5e0!3m2!1sen!2sid!4v1650000000000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi TPQ MIQI"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Alamat</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Jl. Pendidikan No. 123, Kelurahan Bahagia, Kecamatan Sejahtera, Kota Berkah 12345
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Navigation className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Patokan</h4>
                  <p className="text-sm text-gray-500">Sebelah Masjid Al-Ikhlas, 200m dari Pasar Bahagia</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                  <Car className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Parkir</h4>
                  <p className="text-sm text-gray-500">Tersedia area parkir luas untuk motor dan mobil</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Jam Operasional</h4>
                  <p className="text-sm text-gray-500">Senin – Jumat: 08:00 – 17:30</p>
                  <p className="text-sm text-gray-500">Sabtu: 08:00 – 12:00</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <Button className="h-11 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full shadow-lg cursor-pointer border-0">
                <Phone className="w-4 h-4 mr-1" />
                WhatsApp
              </Button>
              <Button variant="outline" className="h-11 rounded-full cursor-pointer">
                <MapPin className="w-4 h-4 mr-1" />
                Google Maps
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
