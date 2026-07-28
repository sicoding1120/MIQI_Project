import { motion } from "motion/react"
import { Image, Users, GraduationCap, Award } from "lucide-react"
import { GeometricDecorations } from "@/components/ui/GeometricDecorations"

/* ─── Teachers Data ─── */
const teachers = {
  khodimul: {
    id: "aby",
    name: "Aby",
    role: "Khodimul Majlis",
    image: "/pengampuh/aby.jpeg",
    color: "bg-emerald-600",
  },
  headUstadzah: {
    id: "umy",
    name: "Umy",
    role: "Asatidzah",
    image: "/pengampuh/umy.jpeg",
    color: "bg-purple-600",
  },
  asatidzah: [
    {
      id: "teh-iin",
      name: "Teh Iin",
      role: "Asatidzah",
      image: "/pengampuh/ustadzah[1].jpeg",
      color: "bg-teal-600",
    },
    {
      id: "teh-dian",
      name: "Teh Dian",
      role: "Asatidzah",
      image: "/pengampuh/ustadzah[2].jpeg",
      color: "bg-orange-600",
    },
  ],
}

function TeacherCard({ data, delay = 0 }: { data: any, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="group relative flex flex-col items-center z-10 w-[240px] md:w-[280px]"
    >
      {/* Main Card */}
      <div className="relative w-full bg-white rounded-xl p-3 shadow-sm border border-gray-200 transition-all duration-300 hover:border-gray-300 hover:shadow-md">
        {/* Image Container */}
        <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden bg-gray-50 mb-4">
          <img
            src={data.image}
            alt={data.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          {/* Subtle gradient overlay at the bottom of the image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Text Details */}
        <div className="text-center px-2 pb-2">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{data.name}</h3>
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md ${data.color} text-white text-xs font-medium`}>
            {data.role === "Khodimul Majlis" ? <Award className="w-3.5 h-3.5" /> : <GraduationCap className="w-3.5 h-3.5" />}
            {data.role}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export function Teachers() {
  return (
    <section id="pengajar" className="py-24 bg-slate-50 relative overflow-hidden">
      <GeometricDecorations />
      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        
        {/* ── Header ── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white text-emerald-600 text-sm font-medium border border-gray-200 mb-6">
            <Users className="w-4 h-4" />
            Tenaga Pengajar
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900">
            Keluarga Besar <br className="md:hidden" />
            <span className="text-emerald-700">
              TPQ MIQI
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Dibimbing oleh pengajar yang sabar, bersertifikat, dan berdedikasi tinggi 
            dalam mencetak generasi Qur'ani.
          </p>
        </motion.div>

        {/* ── Organizational Tree ── */}
        <div className="relative mt-8 w-full pb-10">
          
          {/* 📱 MOBILE VIEW: Vertical Tree */}
          <div className="flex flex-col items-center md:hidden w-full">
            {/* Level 1: ABY */}
            <TeacherCard data={teachers.khodimul} delay={0.1} />
            
            {/* Vertical connection ABY -> UMY */}
            <div className="w-0.5 h-10 bg-gray-200 relative z-0 -my-2" />

            {/* Level 2: UMY */}
            <TeacherCard data={teachers.headUstadzah} delay={0.3} />

            {/* Tree Branch Container (UMY -> Asatidzah) */}
            <div className="relative w-full max-w-[400px] mx-auto flex flex-col items-center">
              {/* Trunk down from Umy */}
              <div className="w-0.5 h-8 bg-gray-200 relative z-0 -mt-2" />
              
              {/* Horizontal Branch */}
              <div className="relative w-full h-8">
                {/* Horizontal Line (From 25% to 75%) */}
                <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-gray-200" />
                
                {/* Left Drop Line */}
                <div className="absolute top-0 left-1/4 w-0.5 h-8 bg-gray-200" />
                
                {/* Right Drop Line */}
                <div className="absolute top-0 right-1/4 w-0.5 h-8 bg-gray-200" />
              </div>

              {/* Level 3: Asatidzah Row */}
              <div className="flex justify-between w-full relative z-10 pt-2 gap-4">
                <div className="w-1/2 flex justify-center">
                  <TeacherCard data={teachers.asatidzah[0]} delay={0.5} />
                </div>
                <div className="w-1/2 flex justify-center">
                  <TeacherCard data={teachers.asatidzah[1]} delay={0.6} />
                </div>
              </div>
            </div>
          </div>

          {/* 💻 DESKTOP VIEW: Horizontal Tree */}
          <div className="hidden md:flex flex-row items-center overflow-x-auto custom-scrollbar justify-center">
            <div className="flex flex-row items-center min-w-max px-4 py-8">
              
              {/* Level 1: ABY */}
              <div className="flex-shrink-0 z-10">
                <TeacherCard data={teachers.khodimul} delay={0.1} />
              </div>
              
              {/* Horizontal connection ABY -> UMY */}
              <div className="w-16 h-0.5 bg-gray-200 relative z-0 -mx-2" />

              {/* Level 2: UMY */}
              <div className="flex-shrink-0 z-10">
                <TeacherCard data={teachers.headUstadzah} delay={0.3} />
              </div>

              {/* Tree Branch Container (UMY -> Asatidzah) */}
              <div className="relative flex flex-row items-center flex-shrink-0">
                {/* Trunk right from Umy */}
                <div className="w-10 h-0.5 bg-gray-200 relative z-0 -ml-2" />
                
                {/* The Fork Structure */}
                <div className="flex flex-col gap-12 relative z-10">
                  {/* Top Row: Teh Iin */}
                  <div className="flex flex-row items-center relative">
                    {/* Vertical drop down from center to middle of gap */}
                    <div className="absolute left-0 top-1/2 w-0.5 h-[calc(50%+1.5rem)] bg-gray-200" />
                    {/* Horizontal line to card */}
                    <div className="w-10 h-0.5 bg-gray-200" />
                    <TeacherCard data={teachers.asatidzah[0]} delay={0.5} />
                  </div>

                  {/* Bottom Row: Teh Dian */}
                  <div className="flex flex-row items-center relative">
                    {/* Vertical drop up from center to middle of gap */}
                    <div className="absolute left-0 bottom-1/2 w-0.5 h-[calc(50%+1.5rem)] bg-gray-200" />
                    {/* Horizontal line to card */}
                    <div className="w-10 h-0.5 bg-gray-200" />
                    <TeacherCard data={teachers.asatidzah[1]} delay={0.6} />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
