"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import SliderType from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = SliderType as any;

const testimonials = [
  {
    name: "Constance",
    quote:
      "Hmmm! Today, I choose to give someone his flowers. I met Brian after several physiotherapy sessions without notable change in the excruciating back pain I was experiencing. His positive attitude, encouragement, follow-ups, and commitment quickly got me back on my feet, walking without aid and able to do what I couldn't do before. Brian, I am forever grateful. No doubt, you are a safe pair of hands."
  },
  {
    name: "Mulanya",
    quote:
      "I saw someone with a lumbar corset, and she appeared very unsettled & uncomfortable. I remembered I have two of those, yet none helped me! I also remembered the days when it seemed like nothing was working—no signs of improvement day in, day out! I am sincerely grateful that you have helped me leave that level of pain and reach where I am now."
  },
  {
    name: "Ann",
    quote:
      "Nine months after my ankle ORIF surgery, I was still limping, in pain, and wondering—was I just destined to walk like a pirate forever? Brian to the rescue! No matter how painful a stretch was, he'd always say, 'Slooowly,' as if that magically made it easier! With his help, I regained my mobility, strengthened my gait, and now I can even walk in heels! Thanks to Brian, I'm now pain-free and back on my feet—literally! Highly recommend!"
  },
  {
    name: "Redempta",
    quote:
      "I had the pleasure of receiving physiotherapy from Brian, and I couldn't be more grateful for the care and expertise he provided. Throughout my sessions, Brian was not only professional but also incredibly supportive and patient. The clinic itself is welcoming and well-equipped. Thanks to Brian's dedication and skill, I am now experiencing far less pain and more mobility. "
  }
];

export function TestimonialsSection() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
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
          <h2 className="text-4xl font-bold mb-6 relative bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent 
              after:content-[''] after:absolute after:w-48 after:h-1 after:bg-blue-500
              after:bottom-0 after:left-1/2 after:-translate-x-1/2
              after:transition-all after:duration-300 hover:after:w-64
              hover:after:bg-purple-500">
            What Our Patients Say
          </h2>
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
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="p-8 bg-white rounded-2xl shadow-md text-center">
                <div className="flex flex-col items-center gap-4 mb-6">
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
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