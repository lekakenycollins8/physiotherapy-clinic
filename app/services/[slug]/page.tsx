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
            <h1 className="text-3xl font-bold mb-4 text-gray-800">{title}</h1>
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
            <Link
              href="/contact"
              className={`inline-block ${
                color
                  ? `bg-blue-500 hover:bg-${color}-600`
                  : "bg-blue-500 hover:bg-blue-600"
              } text-white px-6 py-3 rounded-full font-medium transition-colors duration-300`}
            >
              Book an Appointment
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}