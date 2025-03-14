// File: data/aboutPageData.ts
import { TeamMember, ClinicValue } from "@/types/aboutPageTypes";

export const teamMembers: TeamMember[] = [
  {
    name: "Brian Ochieng",
    image: "/brian.jpg",
    bio: "Brian has over numerous years of experience in physiotherapy, specializing in sports injuries and rehabilitation.",
    altText: "Professional headshot of Brian, a male physiotherapist",
  },
  {
    name: "Elizabeth Kerubo",
    image: "elizabeth.jpg",
    bio: "Elizabeth is our physiotherapy specialist with a focus on neurological rehabilitation. She has helped numerous patients recover.",
    altText: "Professional portrait of John Doe, male orthopaedic specialist with dark hair wearing a blue medical uniform",
  },
  {
    name: "Sharon Sara",
    image: "Sharon.jpg",
    bio: "Sharon is a dedicated physiotherapy specialist with extensive experience in neurological rehabilitation. Her compassionate approach and personalized treatment plans have helped countless patients regain mobility and improve their quality of life.",
    altText: "Professional portrait of Sharon,a female orthopaedic specialist with braided hair ",
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