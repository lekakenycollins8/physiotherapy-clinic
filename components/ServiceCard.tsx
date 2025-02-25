import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  color: string
  slug: string
}

export function ServiceCard({ icon: Icon, title, description, color, slug }: ServiceCardProps) {
  return (
    <div className="relative overflow-hidden bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1">
      <div className="relative z-10">
        <div className={`bg-${color}-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
          <Icon className={`w-8 h-8 text-${color}-500`} />
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
        <Link
          href={`/services/${slug}`}
          className={`text-${color}-500 font-medium hover:underline inline-flex items-center`}
        >
          Learn More
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
      <div
        className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-${color}-50 to-transparent rounded-bl-[100%] -z-0`}
      />
    </div>
  )
}

