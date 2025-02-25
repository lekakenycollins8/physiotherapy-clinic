"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ServiceList } from "@/components/ServiceList";
import services from "@/data/services.json";

export function ServicesSection() {
  const featuredServices = services.slice(0, 4);

  return (
    <section
      aria-labelledby="services-heading"
      className="py-20 relative overflow-hidden"
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
            className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
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
          className="text-center mt-16"
        >
          <Link
            href="/services"
            aria-label="View all specialized physiotherapy services"
            className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full inline-flex items-center hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
          >
            <span>View All Services</span>
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              className="inline-flex ml-2"
              aria-hidden="true"
            >
              <ArrowRight className="w-5 h-5 transition-transform duration-300" />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}