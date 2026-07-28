import { motion } from "motion/react"
import { MapPin, Phone, Navigation, Clock, Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GeometricDecorations } from "@/components/ui/GeometricDecorations"

export function Location() {
  return (
    <section id="kontak" className="section-padding bg-slate-50 relative overflow-hidden">
      <GeometricDecorations />
      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-md bg-emerald-50 text-emerald-600 text-sm font-medium border border-emerald-100 mb-4">
            <MapPin className="w-3.5 h-3.5" />
            Lokasi
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Temukan Lokasi Kami
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
            className="lg:col-span-3 rounded-xl overflow-hidden shadow-sm border border-gray-200 h-[400px]"
          >
            <iframe
              src="https://maps.google.com/maps?q=Jl.%20Sirojul%20Munir%20No.44,%20RW.6,%20Nanggewer,%20Kec.%20Cibinong,%20Kabupaten%20Bogor,%20Jawa%20Barat%2016912&t=&z=17&ie=UTF8&iwloc=&output=embed"
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
            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Alamat</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Jl. Sirojul Munir No.44, RW.6, Nanggewer, Kec. Cibinong, Kabupaten Bogor, Jawa Barat 16912
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                  <Navigation className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Patokan</h4>
                  <p className="text-sm text-gray-500">Sebelah Masjid Al-Ikhlas, 200m dari Pasar Bahagia</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-pink-50 rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Parkir</h4>
                  <p className="text-sm text-gray-500">Tersedia area parkir luas untuk motor dan mobil</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Jam Operasional</h4>
                  <p className="text-sm text-gray-500">Senin – Jumat: 08:00 – 17:30</p>
                  <p className="text-sm text-gray-500">Sabtu: 08:00 – 12:00</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <a href="https://wa.me/6288801252105" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full h-12 text-base bg-emerald-600 hover:bg-emerald-700 text-white rounded-md shadow-sm border-0 font-medium cursor-pointer">
                  <Phone className="w-4 h-4 mr-1" />
                  WhatsApp
                </Button>
              </a>
              <a href="https://www.google.com/maps/search/?api=1&query=Jl.+Sirojul+Munir+No.44,+RW.6,+Nanggewer,+Kec.+Cibinong,+Kabupaten+Bogor,+Jawa+Barat+16912" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button variant="outline" className="w-full h-12 text-base rounded-md border-gray-300 hover:bg-gray-50 cursor-pointer">
                  <MapPin className="w-4 h-4 mr-1" />
                  Google Maps
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
