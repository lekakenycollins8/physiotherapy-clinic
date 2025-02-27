"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
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
              At PhysioWell Clinic, our mission is to empower individuals to achieve optimal health and wellness through
              expert physiotherapy care.
            </p>
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-gray-600 mb-6">
              We envision a community where everyone has access to high-quality physiotherapy services that enable them
              to live active, pain-free lives.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Excellence", description: "We strive for excellence in all aspects of our practice." },
              { title: "Compassion", description: "We approach each patient with empathy and understanding." },
              { title: "Integrity", description: "We maintain the highest ethical standards in our practice." },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">Our Credentials</h2>
          <p className="text-gray-600 text-center mb-8">
            At PhysioWell Clinic, we take pride in our team of highly qualified and experienced physiotherapists.
          </p>
          <ul className="list-disc list-inside max-w-2xl mx-auto text-gray-600 space-y-2">
            <li>Licensed and registered with the appropriate regulatory bodies</li>
            <li>Holders of advanced degrees in physiotherapy</li>
            <li>Continuously engaged in professional development and training</li>
            <li>Experienced in treating a wide range of conditions and injuries</li>
            <li>Committed to evidence-based practice and patient-centered care</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

