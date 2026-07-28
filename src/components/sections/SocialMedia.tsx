import { motion } from "motion/react"
import { Heart, MessageCircle, Send, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"

const IconInstagram = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
)

const IconYoutube = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2.5 7.1C2.5 7.1 2.5 5 4.5 4.5 5.8 4.2 12 4.2 12 4.2s6.2 0 7.5.3c2 .5 2 2.6 2 2.6S21.5 9.5 21.5 12s0 4.9 0 4.9-0 2.1-2 2.6c-1.3.3-7.5.3-7.5.3s-6.2 0-7.5-.3c-2-.5-2-2.6-2-2.6S2.5 14.5 2.5 12 2.5 7.1 2.5 7.1z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
)

const IconFacebook = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

const IconTiktok = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
)

const instagramPosts = [
  { id: 1, img: "/student/1.jpeg", likes: "1.2k", comments: "45", caption: "Keseruan belajar mengaji hari ini! Santri sangat antusias." },
  { id: 2, img: "/student/5.jpeg", likes: "892", comments: "32", caption: "Anak-anak hebat sedang fokus hafalan surah." },
  { id: 3, img: "/student/12.jpeg", likes: "2.1k", comments: "128", caption: "Aku kembali ngaji di MIQI! Semangat terus belajarnya ya kak!" },
  { id: 4, img: "/student/18.jpeg", likes: "1.5k", comments: "84", caption: "Belajar sambil bermain di TPQ agar anak selalu ceria." },
]

export function SocialMedia() {
  return (
    <section className="py-24 bg-white relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 border border-pink-100 text-pink-600 text-sm font-semibold tracking-wide uppercase mb-6 w-fit">
              <IconInstagram className="w-4 h-4" />
              Let's Connect
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Terhubung bersama kami di Sosial Media
            </h2>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Ikuti perkembangan kegiatan, kelas mengaji, dan momen kebersamaan para santri MIQI TPQ.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="https://www.instagram.com/sahabattpqmiqi" target="_blank" rel="noopener noreferrer">
                <Button className="h-12 px-6 text-base bg-pink-600 hover:bg-pink-700 text-white rounded-md shadow-sm border-0 font-medium cursor-pointer">
                  <IconInstagram className="w-5 h-5 mr-2" />
                  Instagram
                </Button>
              </a>
              <a href="https://www.youtube.com/channel/UCOLc2U8N6vQ9xJB17ZcM03Q" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="h-12 px-6 text-base rounded-md border-gray-200 hover:border-gray-300 hover:bg-gray-50 font-medium cursor-pointer">
                  <IconYoutube className="w-5 h-5 mr-2" />
                  YouTube
                </Button>
              </a>
              <a href="https://www.tiktok.com/@sahabattpqmiqi" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="h-12 px-6 text-base rounded-md border-gray-200 hover:border-gray-300 hover:bg-gray-50 font-medium cursor-pointer">
                  <IconTiktok className="w-5 h-5 mr-2" />
                  TikTok
                </Button>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61592310251382" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="h-12 w-12 p-0 rounded-md border-gray-200 hover:border-gray-300 hover:bg-gray-50 cursor-pointer flex items-center justify-center">
                  <IconFacebook className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Two Overlapping Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center min-h-[500px]"
          >
            {/* Card 1 (Back-left, higher) */}
            <motion.div
              initial={{ opacity: 0, x: -30, rotate: -6 }}
              whileInView={{ opacity: 1, x: 0, rotate: -6 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group absolute left-4 md:left-8 -top-4 w-[260px] md:w-[300px] bg-white rounded-3xl overflow-hidden shadow-lg border-2 border-gray-200 cursor-pointer z-10 hover:z-30 hover:scale-105 transition-all duration-300"
            >
              <div className="aspect-[3/4] relative overflow-hidden bg-gray-50">
                <img 
                  src={instagramPosts[0].img} 
                  alt="Instagram Post" 
                  className="absolute inset-0 w-full h-full block object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                    <MessageCircle className="w-5 h-5 text-gray-600" />
                    <Send className="w-5 h-5 text-gray-600" />
                  </div>
                  <Bookmark className="w-5 h-5 text-gray-600" />
                </div>
                <p className="text-sm font-bold text-gray-900 mb-1">{instagramPosts[0].likes} suka</p>
                <p className="text-sm text-gray-600 line-clamp-2">
                  <span className="font-bold text-gray-900 mr-1">miqi_tpq</span>
                  {instagramPosts[0].caption}
                </p>
              </div>
            </motion.div>

            {/* Card 2 (Front-right, lower) */}
            <motion.div
              initial={{ opacity: 0, x: 30, rotate: 4 }}
              whileInView={{ opacity: 1, x: 0, rotate: 4 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="group absolute right-4 md:right-8 top-16 w-[260px] md:w-[300px] bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-gray-200 cursor-pointer z-20 hover:z-30 hover:scale-105 transition-all duration-300"
            >
              <div className="aspect-[3/4] relative overflow-hidden bg-gray-50">
                <img 
                  src={instagramPosts[2].img} 
                  alt="Instagram Post" 
                  className="absolute inset-0 w-full h-full block object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                    <MessageCircle className="w-5 h-5 text-gray-600" />
                    <Send className="w-5 h-5 text-gray-600" />
                  </div>
                  <Bookmark className="w-5 h-5 text-gray-600" />
                </div>
                <p className="text-sm font-bold text-gray-900 mb-1">{instagramPosts[2].likes} suka</p>
                <p className="text-sm text-gray-600 line-clamp-2">
                  <span className="font-bold text-gray-900 mr-1">miqi_tpq</span>
                  {instagramPosts[2].caption}
                </p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
