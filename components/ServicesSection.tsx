import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceList } from "@/components/ServiceList";
import services from "@/data/services.json";

export function ServicesSection() {
  const featuredServices = services.slice(0, 4);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">Specialized Physiotherapy Services</h2>
          <p className="text-gray-600 text-lg">
            Our comprehensive range of services is designed to address various conditions and help you achieve optimal
            health.
          </p>
        </div>
        <ServiceList services={featuredServices} />
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="bg-blue-600 text-white px-8 py-3 rounded-full inline-flex items-center hover:bg-blue-700 transition-colors"
          >
            View All Services
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
