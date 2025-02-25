import Image from "next/image"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  role: string
  image: string
  quote: string
}

export function TestimonialCard({ name, role, image, quote }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
      <div className="flex items-center gap-4 mb-6">
        <Image src={image || "/placeholder.svg"} alt={name} width={60} height={60} className="rounded-full" />
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-gray-600">{role}</div>
        </div>
      </div>
      <p className="text-gray-600 italic mb-6">"{quote}"</p>
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
    </div>
  )
}

