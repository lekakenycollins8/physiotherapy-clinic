// File: data/aboutPageData.ts
import { TeamMember, ClinicValue } from "@/types/aboutPageTypes";

export const teamMembers: TeamMember[] = [
  {
    name: "Dr. Jane Smith",
    role: "Lead Physiotherapist",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Dr. Jane Smith has over 15 years of experience in physiotherapy, specializing in sports injuries and rehabilitation.",
    altText: "Professional headshot of Dr. Jane Smith, a female physiotherapist with short brown hair and glasses wearing a white clinic coat",
  },
  {
    name: "John Doe",
    role: "Orthopaedic Specialist",
    image: "/placeholder.svg?height=400&width=400",
    bio: "John Doe is our orthopaedic specialist with a focus on post-surgical rehabilitation. He has helped numerous patients recover.",
    altText: "Professional portrait of John Doe, male orthopaedic specialist with dark hair wearing a blue medical uniform",
  },
  {
    name: "Sarah Johnson",
    role: "Sports Physiotherapist",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Sarah Johnson has worked with professional athletes and specializes in injury prevention and performance enhancement.",
    altText: "Professional headshot of Sarah Johnson, a female sports physiotherapist with blonde hair smiling at the camera in athletic clinic attire",
  },
  {
    name: "Michael Brown",
    role: "Neurological Physiotherapist",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Michael Brown helps patients recover from strokes and spinal cord injuries, improving their quality of life.",
    altText: "Professional portrait of Michael Brown, a male neurological physiotherapist with glasses demonstrating rehabilitation techniques",
  },
];

export const clinicValues: ClinicValue[] = [
  {
    title: "Excellence",
    description: "We strive for excellence in all aspects of patient care, continuously improving our techniques and knowledge."
  },
  {
    title: "Compassion",
    description: "We treat each patient with empathy and understanding, recognizing their unique needs and circumstances."
  },
  {
    title: "Innovation",
    description: "We embrace evidence-based advancements in physiotherapy to provide the most effective treatments."
  },
  {
    title: "Integrity",
    description: "We maintain the highest ethical standards in our practice, ensuring transparency and trust in all interactions."
  }
];