"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";

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
            className="text-4xl md:text-5xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to Start Your Recovery Journey?
          </motion.h2>

          <motion.p
            className="text-xl text-white/80 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Book your consultation today and take the first step towards a pain-free life.
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/contact"
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full inline-flex items-center transition-all duration-300"
            >
              <Calendar className="mr-2" />
              Schedule Appointment
              <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <a
              href="https://wa.me/1234567890"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full inline-flex items-center transition-all duration-300"
            >
              <MessageCircle className="mr-2" />
              WhatsApp Us
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
