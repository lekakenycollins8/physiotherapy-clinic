import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"

interface StatCardProps {
  number: string
  label: string
}

const StatCard = ({ number, label }: StatCardProps) => (
  <div className="bg-white rounded-2xl p-6 text-center shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
    <div className="text-4xl font-bold text-blue-600 mb-2">{number}</div>
    <div className="text-gray-600">{label}</div>
  </div>
)

export function FeaturedSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070"
              alt="Physiotherapy treatment"
              width={600}
              height={800}
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl max-w-sm">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=200"
                  alt="Patient"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-sm text-gray-600">Professional Athlete</div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The team's expertise and dedication helped me recover fully and get back to competing at my best."
              </p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">Why Choose PhysioWell?</h2>
            <p className="text-lg text-gray-600 mb-8">
              We combine advanced therapeutic techniques with compassionate care to deliver outstanding results. Our
              approach is personalized to your specific needs and goals.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { number: "15+", label: "Years of Excellence" },
                { number: "98%", label: "Success Rate" },
                { number: "24/7", label: "Patient Support" },
                { number: "50+", label: "Certified Experts" },
              ].map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>
            <div className="flex gap-4">
              <Link
                href="/about"
                className="bg-blue-600 text-white px-6 py-3 rounded-full inline-flex items-center hover:bg-blue-700 transition-colors"
              >
                Learn More
                <ArrowRight className="ml-2" />
              </Link>
              <Link
                href="/team"
                className="bg-gray-100 text-gray-800 px-6 py-3 rounded-full inline-flex items-center hover:bg-gray-200 transition-colors"
              >
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

