"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Michael Chen",
    role: "Recovery Patient",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    quote:
      "The personalized care and attention I received was exceptional. My recovery exceeded my expectations.",
  },
  {
    name: "Emma Thompson",
    role: "Sports Professional",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
    quote:
      "As an athlete, finding the right physiotherapist is crucial. The team here understands exactly what athletes need.",
  },
  {
    name: "David Wilson",
    role: "Corporate Professional",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
    quote:
      "Their expertise in treating my chronic back pain has made a tremendous difference in my daily life.",
  },
];

export function TestimonialsSection() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
  };

  return (
    <section className="py-20 bg-gray-50 bg-gradient-to-b from-blue-100 to-white h-screen w-full">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6">What Our Patients Say</h2>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it. Here's what our patients have to say about their experience with us.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8 bg-white rounded-2xl shadow-md text-center">
                <div className="flex flex-col items-center gap-4 mb-6">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
}
