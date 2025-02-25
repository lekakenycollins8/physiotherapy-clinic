import Image from "next/image"

const images = [
  { src: "/placeholder.svg?height=600&width=800", alt: "Physiotherapy session" },
  { src: "/placeholder.svg?height=600&width=800", alt: "Clinic reception" },
  { src: "/placeholder.svg?height=600&width=800", alt: "Treatment room" },
  { src: "/placeholder.svg?height=600&width=800", alt: "Exercise equipment" },
  { src: "/placeholder.svg?height=600&width=800", alt: "Team meeting" },
  { src: "/placeholder.svg?height=600&width=800", alt: "Patient consultation" },
  { src: "/placeholder.svg?height=600&width=800", alt: "Massage therapy" },
  { src: "/placeholder.svg?height=600&width=800", alt: "Rehabilitation exercises" },
  { src: "/placeholder.svg?height=600&width=800", alt: "Clinic exterior" },
]

export default function GalleryPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Facility</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="relative aspect-video overflow-hidden rounded-lg shadow-md">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

