"use client";

import { ServiceCard } from "./ServiceCard";
import { motion } from "framer-motion";

interface ServiceListProps {
  services: any[];
}

export function ServiceList({ services }: ServiceListProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
    >
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} index={index} />
      ))}
    </motion.div>
  );
}