"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Team Members Data
const teamMembers = [
  {
    name: "Dr. Jane Smith",
    role: "Lead Physiotherapist",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Dr. Jane Smith has over 15 years of experience in physiotherapy, specializing in sports injuries and rehabilitation.",
  },
  {
    name: "John Doe",
    role: "Orthopaedic Specialist",
    image: "/placeholder.svg?height=400&width=400",
    bio: "John Doe is our orthopaedic specialist with a focus on post-surgical rehabilitation. He has helped numerous patients recover.",
  },
  {
    name: "Sarah Johnson",
    role: "Sports Physiotherapist",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Sarah Johnson has worked with professional athletes and specializes in injury prevention and performance enhancement.",
  },
  {
    name: "Michael Brown",
    role: "Neurological Physiotherapist",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Michael Brown helps patients recover from strokes and spinal cord injuries, improving their quality of life.",
  },
];

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        
        {/* About Section */}
        <motion.h1
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About PhysioWell Clinic
        </motion.h1>

        <motion.div
          className="flex flex-wrap items-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="PhysioWell Clinic"
              width={800}
              height={600}
              className="rounded-lg"
            />
          </div>
          <motion.div
            className="w-full md:w-1/2 md:pl-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At PhysioWell Clinic, our mission is to empower individuals to achieve optimal health and wellness through expert physiotherapy care.
            </p>
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-gray-600 mb-6">
              We envision a community where everyone has access to high-quality physiotherapy services that enable them to live active, pain-free lives.
            </p>
          </motion.div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-500 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
