"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const stats = [
  { number: "3+", label: "Expert Staff" },
  { number: "50+", label: "Happy Patients" },
  { number: "4.9", label: "Patient Rating" },
];

const backgroundImages = [
  "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=2070",
  "physio3.jpg" // Replace with your second image URL
];

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section role="banner" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImage}
            className="absolute inset-0 z-0"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeOut", duration: 2 }}
            whileInView={{ y: -20 }}
            style={{ overflow: "hidden" }}
          >
            <Image
              src={backgroundImages[currentImage]}
              alt="Background image"
              fill
              style={{ objectFit: "cover" }}
              priority
              className="brightness-[0.55]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-magenta-900/80 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Trusted Tag */}
          <motion.div
            className="inline-block bg-blue-500/20 backdrop-blur-md rounded-full px-4 py-2 mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-white">✨ Trusted by 50+ patients</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.7)" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Transform Your Life Through Expert{" "}
            <span className="text-primary/90">Physiotherapy</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-xl text-white/90 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience personalized care from certified physiotherapists. We're
            dedicated to helping you recover, strengthen, and thrive.
          </motion.p>

          {/* Call-to-Actions */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link
              href="/contact"
              aria-label="Book a consultation appointment"
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full inline-flex items-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Book Consultation
              <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+254706143886"
              aria-label="Call us now for immediate assistance"
              className="group bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full inline-flex items-center transition-all duration-300 hover:shadow-lg"
            >
              <Phone className="mr-2" />
              Call Us Now
            </a>
          </motion.div>

          {/* Statistics */}
          <motion.div
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-white hover:shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="text-2xl font-bold">{stat.number}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Overlay for Depth */}
      <div className="absolute bottom-0 left-0 right-0 h-32" />
    </section>
  );
}