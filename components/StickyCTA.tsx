"use client";

import { MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";

export function StickyCTA() {
  const whatsappMessage = "Hi, I'd like to book a physio session";
  const whatsappLink = `https://wa.me/254706143886?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-40 bg-white shadow-2xl border-t-2 border-gray-200 md:hidden"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, duration: 0.3 }}
    >
      <div className="flex gap-2 p-3">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors active:scale-95"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp Now
        </a>
        <a
          href="tel:+254706143886"
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors active:scale-95"
        >
          <Phone className="w-5 h-5" />
          Call Now
        </a>
      </div>
    </motion.div>
  );
}
