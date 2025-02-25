import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Emily Thompson",
    image: "/placeholder.svg?height=100&width=100",
    text: "The team at PhysioWell Clinic is amazing! They helped me recover from a severe back injury, and now I'm back to my active lifestyle. Highly recommended!",
    rating: 5,
  },
  {
    name: "Mark Johnson",
    image: "/placeholder.svg?height=100&width=100",
    text: "I've been to several physiotherapy clinics, but PhysioWell stands out. Their personalized approach and state-of-the-art techniques made a huge difference in my recovery.",
    rating: 5,
  },
  {
    name: "Sophia Lee",
    image: "/placeholder.svg?height=100&width=100",
    text: "As an athlete, I rely on PhysioWell to keep me in top shape. Their sports physiotherapy services are second to none. Thank you for your dedication!",
    rating: 5,
  },
  {
    name: "David Brown",
    image: "/placeholder.svg?height=100&width=100",
    text: "The home-based therapy service from PhysioWell was a game-changer for me. Professional, convenient, and effective. I'm grateful for their support during my recovery.",
    rating: 5,
  },
  {
    name: "Laura Martinez",
    image: "/placeholder.svg?height=100&width=100",
    text: "I was hesitant about physiotherapy, but the team at PhysioWell put me at ease. Their expertise and friendly approach made my treatment a positive experience.",
    rating: 5,
  },
  {
    name: "Robert Chen",
    image: "/placeholder.svg?height=100&width=100",
    text: "After my surgery, PhysioWell's post-operative care was crucial to my recovery. Their attention to detail and encouragement helped me regain my strength faster than I expected.",
    rating: 5,
  },
]

export default function TestimonialsPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h2 className="font-bold">{testimonial.name}</h2>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-yellow-500" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

