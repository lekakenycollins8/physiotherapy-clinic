"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, MessageCircle, CheckCircle } from "lucide-react";
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

  const whatsappMessage = "Hi, I'd like to book a physio session";
  const whatsappLink = `https://wa.me/254706143886?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section role="banner" className="relative py-20 md:py-32 flex items-center">
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
            className="inline-block bg-green-500/20 backdrop-blur-md rounded-full px-4 py-2 mb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-white font-medium">📍 Ngong Road, Nairobi • Same-Day Sessions Available</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl md:text-6xl sm:text-5xl font-bold text-white mb-4 leading-tight"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.7)" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get Fast Relief from{" "}
            <span className="text-green-400">Back & Neck Pain</span>{" "}
            Today
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-xl text-white/90 mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Same-day physiotherapy sessions in Ngong Road, Nairobi
          </motion.p>
          
          {/* Trust Bullets */}
          <motion.div
            className="flex flex-col gap-2 mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <div className="flex items-center gap-2 text-white">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-lg">Same-day appointments available</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-lg">Licensed physiotherapists with 10+ years experience</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-lg">Convenient Ngong Road location (Princess Park Apartments)</span>
            </div>
          </motion.div>

          {/* Call-to-Actions */}
          <motion.div
            className="flex flex-wrap gap-4 mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp now to book your physiotherapy session"
              className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full inline-flex items-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl font-semibold text-lg"
            >
              <MessageCircle className="mr-2 w-6 h-6" />
              WhatsApp Now
              <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+254706143886"
              aria-label="Call now to book your physiotherapy session"
              className="group bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-8 py-4 rounded-full inline-flex items-center transition-all duration-300 hover:shadow-lg border border-white/30 font-semibold text-lg"
            >
              <Phone className="mr-2 w-6 h-6" />
              Call Now
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Overlay for Depth */}
      <div className="absolute bottom-0 left-0 right-0 h-32" />
    </section>
  );
}
