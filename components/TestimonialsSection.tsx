import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Michael Chen",
    role: "Recovery Patient",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    quote: "The personalized care and attention I received was exceptional. My recovery exceeded my expectations.",
  },
  {
    name: "Emma Thompson",
    role: "Sports Professional",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
    quote:
      "As an athlete, finding the right physiotherapist is crucial. The team here understands exactly what athletes need.",
  },
  {
    name: "David Wilson",
    role: "Corporate Professional",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
    quote: "Their expertise in treating my chronic back pain has made a tremendous difference in my daily life.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">What Our Patients Say</h2>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it. Here's what our patients have to say about their experience with us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

