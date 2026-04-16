"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { ServiceList } from "@/components/ServiceList";
import services from "@/data/services.json";

export function ServicesSection() {
  const featuredServices = services.slice(0, 4);
  const whatsappMessage = "Hi, I'd like to book a physio session";
  const whatsappLink = `https://wa.me/254706143886?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section
      aria-labelledby="services-heading"
      className="py-20 relative overflow-hidden bg-gradient-to-b from-blue-100 to-white"
    >
      {/* Decorative Background Elements */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-gray-50/80 to-white/20 -z-10"
      />
      <div
        aria-hidden="true"
        className="absolute right-0 top-20 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -z-10"
      />
      <div
        aria-hidden="true"
        className="absolute left-10 bottom-20 w-64 h-64 bg-indigo-50/30 rounded-full blur-3xl -z-10"
      />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium uppercase tracking-wider mb-3 inline-block">
              Our Expertise
            </span>
          </motion.div>
          <motion.h2
            id="services-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6 bg-clip-text text-transparent relative
              bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent
              after:content-[''] after:absolute after:w-48 after:h-1 after:bg-blue-500
              after:bottom-0 after:left-1/2 after:-translate-x-1/2
              after:transition-all after:duration-300 hover:after:w-64
              hover:after:bg-purple-500"
          >
            Specialized Physiotherapy Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg"
          >
            Our comprehensive range of services is designed to address various conditions
            and help you achieve optimal health.
          </motion.p>
        </motion.div>

        <ServiceList services={featuredServices} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-700 mb-6 text-lg font-medium">
            👉 Call or WhatsApp to confirm availability for any service
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full inline-flex items-center transition-all duration-300 font-semibold"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              WhatsApp Now
            </a>
            <a
              href="tel:+254706143886"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full inline-flex items-center transition-all duration-300 font-semibold"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </a>
          </div>
          <Link
            href="/services"
            className="text-blue-600 hover:text-blue-700 text-sm inline-flex items-center"
          >
            <span>View all services</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}