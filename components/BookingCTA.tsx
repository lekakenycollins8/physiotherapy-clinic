"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MessageCircle, Phone } from "lucide-react";

export function BookingCTA() {
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
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to Book Your Session?
          </motion.h2>
          
          <motion.div
            className="bg-green-500/30 backdrop-blur-md rounded-lg px-6 py-3 mb-8 inline-block"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-white font-bold text-lg">📞 Call +254 706 143 886 for Instant Booking!</span>
          </motion.div>

          <motion.p
            className="text-xl text-white/80 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Skip the forms - call directly to book your session and get immediate confirmation!
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="tel:+254706143886"
              className="group bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-full inline-flex items-center transition-all duration-300 transform hover:scale-105 shadow-lg text-lg font-semibold"
            >
              <Phone className="mr-3 w-6 h-6" />
              Call to Book Now
              <ArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="https://wa.me/+254706143886"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full inline-flex items-center transition-all duration-300"
            >
              <MessageCircle className="mr-2" />
              WhatsApp Us
            </a>
            
            <Link
              href="/contact"
              className="group bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-8 py-4 rounded-full inline-flex items-center transition-all duration-300 border border-white/30"
            >
              <Calendar className="mr-2" />
              Online Form
            </Link>
          </motion.div>
          
          {/* Phone Booking Benefits */}
          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">⏱️</div>
              <h3 className="text-white font-semibold mb-2">Instant Confirmation</h3>
              <p className="text-white/80 text-sm">Get your appointment confirmed immediately over the phone</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="text-white font-semibold mb-2">Personal Service</h3>
              <p className="text-white/80 text-sm">Speak directly with our friendly booking team</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">❓</div>
              <h3 className="text-white font-semibold mb-2">Ask Questions</h3>
              <p className="text-white/80 text-sm">Get answers about services and availability instantly</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
