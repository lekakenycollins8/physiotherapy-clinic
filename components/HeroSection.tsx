import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

const stats = [
  { number: "15+", label: "Years Experience" },
  { number: "50+", label: "Expert Staff" },
  { number: "10k+", label: "Happy Patients" },
  { number: "4.9", label: "Patient Rating" },
];

export function HeroSection() {
  return (
    <section role="banner" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=2070"
          alt="Physiotherapy session with a professional"
          fill
          style={{ objectFit: "cover" }}
          priority
          className="brightness-[0.85]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-magenta-900/80 to-transparent" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Trusted Tag */}
          <div className="inline-block bg-blue-500/20 backdrop-blur-md rounded-full px-4 py-2 mb-6 animate-fadeInUp">
            <span className="text-white">✨ Trusted by 10,000+ patients</span>
          </div>
          {/* Headline */}
          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fadeInUp"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.7)", animationDelay: "100ms", animationFillMode: "forwards" }}
          >
            Transform Your Life Through Expert{" "}
            <span className="text-gradient">Physiotherapy</span>
          </h1>
          {/* Description */}
          <p
            className="text-xl text-white/90 mb-8 leading-relaxed animate-fadeInUp"
            style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
          >
            Experience personalized care from certified physiotherapists. We're
            dedicated to helping you recover, strengthen, and thrive.
          </p>
          {/* Call-to-Actions */}
          <div
            className="flex flex-wrap gap-4 animate-fadeInUp"
            style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
          >
            <Link
              href="/contact"
              aria-label="Book a consultation appointment"
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full inline-flex items-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Book Consultation
              <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+1234567890"
              aria-label="Call us now for immediate assistance"
              className="group bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full inline-flex items-center transition-all duration-300 hover:shadow-lg"
            >
              <Phone className="mr-2" />
              Call Us Now
            </a>
          </div>
          {/* Statistics */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-white animate-fadeInUp hover:shadow-lg"
                style={{
                  animationDelay: `${400 + index * 100}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="text-2xl font-bold">{stat.number}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom Gradient Overlay for Depth */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}