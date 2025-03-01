// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
// import { ServiceList } from "@/components/ServiceList";
// import services from "@/data/services.json";

// export default function ServicesPage() {
//   return (
//     <div className="min-h-screen bg-gray-50 py-16">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Comprehensive Services</h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Discover our range of specialized physiotherapy services designed to help you recover, strengthen, and
//             thrive.
//           </p>
//         </div>
//         <ServiceList services={services} />
//         <div className="mt-16 text-center">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-4">Not sure which service you need?</h2>
//           <p className="text-gray-600 mb-8">
//             Our expert team is here to help you find the right treatment for your specific condition.
//           </p>
//           <Link
//             href="/contact"
//             className="bg-blue-600 text-white px-8 py-3 rounded-full inline-flex items-center hover:bg-blue-700 transition-colors"
//           >
//             Schedule a Consultation
//             <ArrowRight className="ml-2" />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }






"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ServiceList } from "@/components/ServiceList";
import services from "@/data/services.json";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Our Comprehensive Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our range of specialized physiotherapy services designed to
            help you recover, strengthen, and thrive.
          </p>
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
            Not sure which service you need?
          </h2>
          <p className="text-gray-600 mb-8">
            Our expert team is here to help you find the right treatment for
            your specific condition.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-full inline-flex items-center hover:bg-blue-700 transition-colors"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
