import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  color: string
  slug: string
  index?: number
}

export function ServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  color, 
  slug,
  index = 0 
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut" 
      }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="relative overflow-hidden bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
    >
      <div className="relative z-10">
        <div 
          className={`bg-${color}-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className={`w-8 h-8 text-${color}-500`} />
        </div>
        <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
        <Link
          href={`/services/${slug}`}
          className={`text-${color}-500 font-medium group-hover:text-${color}-600 inline-flex items-center transition-all duration-300`}
        >
          <span className="border-b border-transparent group-hover:border-current">
            Learn More
          </span>
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            className="inline-flex ml-1"
          >
            <ArrowRight className="w-4 h-4" />
          </motion.span>
        </Link>
      </div>
      <div
        className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-${color}-50 to-transparent rounded-bl-[100%] -z-0 group-hover:w-40 group-hover:h-40 transition-all duration-300`}
      />
      <div
        className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-${color}-50/40 to-transparent rounded-tr-[100%] -z-0 opacity-0 group-hover:opacity-100 transition-all duration-500`}
      />
    </motion.div>
  )
}