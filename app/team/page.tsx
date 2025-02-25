import Image from "next/image"

const teamMembers = [
  {
    name: "Dr. Jane Smith",
    role: "Lead Physiotherapist",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Dr. Jane Smith has over 15 years of experience in physiotherapy, specializing in sports injuries and rehabilitation. She holds a Doctorate in Physical Therapy and is certified in advanced manual therapy techniques.",
  },
  {
    name: "John Doe",
    role: "Orthopaedic Specialist",
    image: "/placeholder.svg?height=400&width=400",
    bio: "John Doe is our orthopaedic specialist with a focus on post-surgical rehabilitation. With 10 years of experience, he has helped numerous patients recover from complex orthopaedic procedures.",
  },
  {
    name: "Sarah Johnson",
    role: "Sports Physiotherapist",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Sarah Johnson is our dedicated sports physiotherapist. She has worked with professional athletes and brings her expertise in injury prevention and performance enhancement to all our patients.",
  },
  {
    name: "Michael Brown",
    role: "Neurological Physiotherapist",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Michael Brown specializes in neurological physiotherapy, helping patients recover from strokes, spinal cord injuries, and other neurological conditions. He is passionate about improving patients' quality of life.",
  },
]

export default function TeamPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={400}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{member.name}</h2>
                <h3 className="text-lg text-gray-600 mb-4">{member.role}</h3>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

