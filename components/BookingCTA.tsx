"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MessageCircle, Phone } from "lucide-react";

export function BookingCTA() {
  const whatsappMessage = "Hi, I'd like to book a physio session";
  const whatsappLink = `https://wa.me/254706143886?text=${encodeURIComponent(whatsappMessage)}`;
  
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2070"
          alt="Physiotherapy clinic"
          fill
          style={{ objectFit: "cover" }}
          className="brightness-[0.2]"
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Book Your Session in Seconds
          </motion.h2>

          <motion.p
            className="text-xl text-white/90 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            WhatsApp or call now for same-day appointments. No forms, no waiting.
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-full inline-flex items-center transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg font-bold"
            >
              <MessageCircle className="mr-3 w-6 h-6" />
              WhatsApp Now
              <ArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="tel:+254706143886"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-5 rounded-full inline-flex items-center transition-all duration-300 shadow-lg text-lg font-semibold"
            >
              <Phone className="mr-2 w-6 h-6" />
              Call Now
            </a>
            
            <Link
              href="/contact"
              className="group bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-6 py-4 rounded-full inline-flex items-center transition-all duration-300 border border-white/30 text-base"
            >
              <Calendar className="mr-2" />
              Online Form
            </Link>
          </motion.div>
          
          {/* Booking Benefits */}
          <motion.div
            className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-white font-semibold mb-2">Same-Day Sessions</h3>
              <p className="text-white/80 text-sm">Book and get treated today</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">�</div>
              <h3 className="text-white font-semibold mb-2">Ngong Road Location</h3>
              <p className="text-white/80 text-sm">Easy to reach, Princess Park Apartments</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">👨‍⚕️</div>
              <h3 className="text-white font-semibold mb-2">Licensed Experts</h3>
              <p className="text-white/80 text-sm">10+ years experience treating pain</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
