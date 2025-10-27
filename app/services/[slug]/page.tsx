"use client";
import { notFound } from "next/navigation";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import services from "@/data/services.json";
import {
  Activity as ActivityIcon,
  Brain as BrainIcon,
  Heart as HeartIcon,
  MonitorIcon as RunningIcon,
  Zap as ZapIcon,
  Users as UsersIcon,
  Home as HomeIcon,
  Microscope as MicroscopeIcon,
  Phone,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

const iconMap: { [key: string]: LucideIcon } = {
  Activity: ActivityIcon,
  Brain: BrainIcon,
  Heart: HeartIcon,
  Running: RunningIcon,
  Zap: ZapIcon,
  Users: UsersIcon,
  Home: HomeIcon,
  Microscope: MicroscopeIcon,
};

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const { icon: iconName, title, fullDescription, benefits, color } = service;
  const Icon = iconMap[iconName as string] || ActivityIcon; // Fallback to Activity if icon is not found

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/services"
            className="text-blue-500 hover:underline mb-8 inline-block"
          >
            &larr; Back to Services
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl p-8 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <div
              className={`w-16 h-16 rounded-full ${
                color ? `bg-${color}-100` : "bg-blue-100"
              } flex items-center justify-center mb-6`}
            >
              <Icon
                className={`w-8 h-8 ${
                  color ? `text-${color}-500` : "text-blue-500"
                }`}
              />
            </div>
            <h1 className="text-3xl font-bold mb-4 text-gray-800">{title} in Nairobi</h1>
            <p className="text-sm text-gray-500 mb-4">📍 Princess Park Apartments, Ngong Road, Nairobi | 📞 +254 706 143 886</p>
            
            {/* Prominent Phone Booking CTA */}
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-8">
              <div className="text-center">
                <div className="text-3xl mb-3">📞</div>
                <h2 className="text-xl font-bold text-green-800 mb-2">Book This Service Now</h2>
                <a href="tel:+254706143886" className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors block mb-2">
                  +254 706 143 886
                </a>
                <p className="text-green-700 text-sm mb-4">Call for instant session booking • Speak to our specialists • Get immediate confirmation</p>
                <div className="flex flex-wrap justify-center gap-3">
                  <a
                    href="tel:+254706143886"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full inline-flex items-center transition-colors font-semibold"
                  >
                    <Phone className="mr-2 w-4 h-4" />
                    Call to Book Session
                  </a>
                  <a
                    href="https://wa.me/+254706143886"
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full inline-flex items-center transition-colors"
                  >
                    <MessageCircle className="mr-2 w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 mb-8 leading-relaxed">{fullDescription}</p>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Benefits:
            </h2>
            <ul className="list-disc pl-5 mb-8 space-y-2">
              {benefits.map((benefit: string, index: number) => (
                <li key={index} className="text-gray-600">
                  {benefit}
                </li>
              ))}
            </ul>
            
            {/* Booking Options */}
            <div className="border-t pt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Ready to Book This Service?</h3>
              <p className="text-gray-600 mb-6">Choose your preferred booking method:</p>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+254706143886"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full inline-flex items-center transition-colors font-semibold flex-1 justify-center min-w-fit"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call for Instant Booking
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                
                <Link
                  href="/contact"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full inline-flex items-center transition-colors font-medium flex-1 justify-center min-w-fit"
                >
                  Online Booking Form
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              
              {/* Phone Booking Benefits */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">⚡</div>
                  <h4 className="font-semibold text-green-800 text-sm">Instant Confirmation</h4>
                  <p className="text-green-700 text-xs mt-1">Get booked immediately</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">💬</div>
                  <h4 className="font-semibold text-blue-800 text-sm">Ask Questions</h4>
                  <p className="text-blue-700 text-xs mt-1">Speak to our specialists</p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">📅</div>
                  <h4 className="font-semibold text-purple-800 text-sm">Flexible Times</h4>
                  <p className="text-purple-700 text-xs mt-1">Find the perfect slot</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}