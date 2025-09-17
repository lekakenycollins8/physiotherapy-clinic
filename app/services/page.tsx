"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { ServiceList } from "@/components/ServiceList";
import services from "@/data/services.json";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4 relative
              bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent
              after:content-[''] after:absolute after:w-48 after:h-1 after:bg-blue-500
              after:bottom-0 after:left-1/2 after:-translate-x-1/2
              after:transition-all after:duration-300 hover:after:w-64
              hover:after:bg-purple-500">
            Our Comprehensive Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our range of specialized physiotherapy services designed to
            help you recover, strengthen, and thrive.
          </p>
          <div className="mt-6 flex flex-col items-center gap-4">
            <div className="bg-green-100 text-green-800 px-6 py-3 rounded-lg font-medium shadow-sm border border-green-300 flex items-center gap-2">
              <span className="text-2xl">📞</span>
              <span>Call +254 706 143 886 to Book Any Service Instantly!</span>
            </div>
            <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg text-sm font-medium shadow-sm border border-yellow-300">
              Note: We accept cash payments only ranging from 3000.
            </span>
          </div>
        </motion.div>

        {/* Services List */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ServiceList services={services} />
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Ready to Book Your Service?
          </h2>
          <p className="text-gray-600 mb-8">
            Call us directly for immediate booking confirmation and to discuss which service is right for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+254706143886"
              className="bg-green-600 text-white px-8 py-3 rounded-full inline-flex items-center hover:bg-green-700 transition-colors font-semibold"
            >
              <Phone className="mr-2" />
              Call to Book Now
              <ArrowRight className="ml-2" />
            </a>
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-full inline-flex items-center hover:bg-blue-700 transition-colors"
            >
              Online Booking Form
              <ArrowRight className="ml-2" />
            </Link>
          </div>
          
          {/* Phone Booking Benefits */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-green-800 font-semibold mb-2">Instant Booking</h3>
              <p className="text-green-700 text-sm">No waiting - get your session booked immediately</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">👨‍⚕️</div>
              <h3 className="text-blue-800 font-semibold mb-2">Expert Guidance</h3>
              <p className="text-blue-700 text-sm">Speak with our team to choose the right service</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">📅</div>
              <h3 className="text-purple-800 font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-purple-700 text-sm">Find the perfect time that works for you</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
