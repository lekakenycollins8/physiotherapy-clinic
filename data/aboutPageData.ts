// File: data/aboutPageData.ts
import { TeamMember, ClinicValue } from "@/types/aboutPageTypes";

export const teamMembers: TeamMember[] = [
  {
    name: "Brian Ochieng",
    role: "Bsc.physiotherapy",
    image: "/brian.jpg",
    altText: "Professional headshot of Brian, a male physiotherapist",
  },
  {
    name: "Elizabeth Kerubo",
    role: "Bsc.physiotherapy",
    image: "elizabeth.jpg",
    altText: "Professional portrait of John Doe, male orthopaedic specialist with dark hair wearing a blue medical uniform",
  },
  {
    name: "Sharon Sara",
    role: "Bsc.physiotherapy",
    image: "Sharon.jpg",
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