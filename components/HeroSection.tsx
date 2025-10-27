"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
      {/* Fixed background container with dark fallback */}
      <div className="absolute inset-0 z-0 bg-gray-900">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentImage}
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 1.5,
              ease: "easeInOut"
            }}
            style={{ overflow: "hidden" }}
          >
            <Image
              src={backgroundImages[currentImage]}
              alt="Background image"
              fill
              style={{ objectFit: "cover" }}
              priority
              className="brightness-[0.55] object-[center_top] md:object-center"
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
            <span className="text-white">✨ Best Physiotherapy Clinic in Nairobi, Kenya</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.7)" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Expert{" "}
            <span className="text-primary/90">Physiotherapy</span>{" "}
            in Nairobi
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-xl text-white/90 mb-4 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience personalized care from Kenya's best certified physiotherapist with 10+ years experience. 
            Located at Princess Park Apartments, Ngong Road, Nairobi. We're dedicated to helping you recover, strengthen, and thrive.
          </motion.p>
          
          {/* Phone Booking Emphasis */}
          <motion.div
            className="bg-green-500/20 backdrop-blur-md rounded-lg px-6 py-3 mb-8 inline-block"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <span className="text-white font-medium">📞 Call Now for Immediate Session Booking - No Waiting!</span>
          </motion.div>

          {/* Call-to-Actions */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <a
              href="tel:+254706143886"
              aria-label="Call now to book your physiotherapy session"
              className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full inline-flex items-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Phone className="mr-2" />
              Call to Book Session
              <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <Link
              href="/contact"
              aria-label="Book a consultation appointment online"
              className="group bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full inline-flex items-center transition-all duration-300 hover:shadow-lg"
            >
              Online Booking Form
            </Link>
          </motion.div>

          {/* Phone Booking Benefits */}
          <motion.div
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="bg-green-500/20 backdrop-blur-md rounded-lg p-4 text-white hover:shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-lg font-bold">⚡ Instant</div>
              <div className="text-sm text-white/80">Immediate Booking</div>
            </motion.div>
            <motion.div
              className="bg-green-500/20 backdrop-blur-md rounded-lg p-4 text-white hover:shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-lg font-bold">💬 Personal</div>
              <div className="text-sm text-white/80">Speak to Our Team</div>
            </motion.div>
            
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Overlay for Depth */}
      <div className="absolute bottom-0 left-0 right-0 h-32" />
    </section>
  );
}
