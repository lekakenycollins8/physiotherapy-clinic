"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Constance",
    role: "Recovery Patient",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    quote:
      " I saw someone with a lumbar corset and she appeared very unsettled & uncomfortable. I remembered I have 2 of those yet none helped me! I also remembered the days when it seemed like nothing was working. There were No signs of improvement day in day out! I am sincerely grateful that you have helped me leave that level of pain and reach where i am now.Thank you! Good bless the work of your hands.",
  },
  {
    name: "Mulanya",
    role: "Recovery Patient",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
    quote:
      "I had the pleasure of being treated by Brian, an exceptional physiotherapist. His caring nature, empathy, and attentive listening made me feel truly supported throughout my recovery. Brian's meticulous attention to detail and expertise ensured a swift and effective rehabilitation. I highly recommend Brian to anyone seeking top-notch physiotherapy care.",
  },
  {
    name: "Ann",
    role: "Recovery Patient",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
    quote:
      "Nine months after my ankle ORIF surgery, I was still limping, in pain, and wondering—was I just destined to walk like a pirate forever? Brian to the rescue! I’ll admit, I wasn’t always the best at doing my home exercises, but he was incredibly patient and encouraging. No matter how painful a stretch was, he’d always say, “Slooowly”, as if that magically made it easier! With his help, I regained my mobility, strengthened my gait, and now I can even walk in heels! Thanks to Brian, I’m now pain-free and back on my feet, literally! Highly recommend!",
  },
  ,
  {
    name: "Joseph",
    role: "Recovery Patient",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
    quote:
      "Motionworks Physiotherapy has been a lifesaver in my recovery journey. From the moment I walked in I felt listened to and supported.The team's experience and personalized approach will help you achieve your goals quicker than  anticipated.They took their time to fully understand my problem and develop a customized treatment plan tailored to my individual needs. My discomfort and mobility have significantly improved after only a few sessions. I highly recommend them to anyone in need of physiotherapy services."
  },
  ,
  {
    name: "Redempta",
    role: "Recovery Patient",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
    quote:
      "I had the pleasure of receiving physiotherapy from Brian, and I couldn't be more grateful for the care and expertise he provided. From my very first visit, Brian made me feel comfortable and confident in my recovery journey. He took the time to thoroughly assess my condition and developed a personalized treatment plan that targeted my specific needs.Throughout my sessions, Brian was not only professional but also incredibly supportive and patient. His approach to physiotherapy is both effective and compassionate, and I could feel significant improvement with each visit. The clinic itself is welcoming and well-equipped, creating a great environment for healing. Thanks to Brian's dedication and skill, I am now experiencing far less pain and more mobility. I highly recommend Brian  to anyone in need of physiotherapy. I’m truly grateful for the positive impact this experience has had on my life.",
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
          <h2 className="text-4xl font-bold mb-6 relative
              bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent
              after:content-[''] after:absolute after:w-48 after:h-1 after:bg-blue-500
              after:bottom-0 after:left-1/2 after:-translate-x-1/2
              after:transition-all after:duration-300 hover:after:w-64
              hover:after:bg-purple-500">What Our Patients Say</h2>
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
                  {/* <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  /> */}
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
