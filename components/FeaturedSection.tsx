"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { WhyChooseUs } from "./WhyChooseUs";

interface StatCardProps {
  number: string;
  label: string;
}

const StatCard = ({ number, label }: StatCardProps) => (
  <motion.div
    className="bg-white rounded-2xl p-6 text-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] border-2 border-transparent"
    whileHover={{ scale: 1.05, borderColor: "#3b82f6", boxShadow: "0 12px 30px rgba(0,0,0,0.1)" }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <div className="text-4xl font-bold text-blue-600 mb-2">{number}</div>
    <div className="text-gray-600">{label}</div>
  </motion.div>
);

export function FeaturedSection() {
  return (
    <motion.section
      className="py-20 bg-gradient-to-b from-blue-1000 to-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <Image
              src="/physio2.avif"
              alt="Physiotherapy treatment"
              width={600}
              height={800}
              className="rounded-2xl shadow-2xl"
            />
            <motion.div
              className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl max-w-sm hidden md:block"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div>
                  <div className="font-semibold">Joseph</div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "I had the pleasure of being treated by Brian, an exceptional physiotherapist. His caring nature, empathy, and attentive listening made me feel truly supported throughout my recovery. Brian's meticulous attention to detail and expertise ensured a swift and effective rehabilitation. I highly recommend Brian to anyone seeking top-notch physiotherapy care."
              </p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 relative
              bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent
              after:content-[''] after:absolute after:w-48 after:h-1 after:bg-blue-500
              after:bottom-0 after:left-1/2 after:-translate-x-1/2
              after:transition-all after:duration-300 hover:after:w-64
              hover:after:bg-purple-500">Why Choose MotionWorks?</h2>
            <p className="text-lg text-gray-600 mb-8">
              We combine advanced therapeutic techniques with compassionate care to deliver outstanding results.
              Our approach is personalized to your specific needs and goals.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { number: "98%", label: "Success Rate" },
                { number: "24/7", label: "Patient Support" },
                { number: "3+", label: "Certified Experts" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <StatCard {...stat} />
                </motion.div>
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
                href="/about"
                className="bg-gray-100 text-gray-800 px-6 py-3 rounded-full inline-flex items-center hover:bg-gray-200 transition-colors"
              >
                Meet Our Team
              </Link>
            </div>
          </motion.div>
        </div>
        {/* Render the WhyChooseUs Component */}
        <WhyChooseUs />
      </div>
    </motion.section>
  );
}