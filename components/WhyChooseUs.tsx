import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react"; // Example icon

export function WhyChooseUs() {
  const cards = [
    {
      title: "Licensed Physiotherapist",
      info: "Our team is fully certified and experienced, ensuring you receive the highest quality care.",
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Personalized Treatment",
      info: "We tailor each treatment plan to your specific needs for optimal recovery.",
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Therapy Goals",
      info: "We work with you to set clear, achievable therapy goals that guide your progress.",
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
    },
  ];

  // Variants for the title and info animations
  const titleVariant = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const infoVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-2xl p-6 shadow-lg transition-transform duration-300 border border-transparent hover:border-blue-200"
          whileHover={{ scale: 1.05, rotate: 0.5 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          <div className="flex items-center gap-2 mb-4">
            {card.icon}
            <motion.h3
              className="text-xl font-bold"
              variants={titleVariant}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {card.title}
            </motion.h3>
          </div>
          <motion.p
            className="text-gray-600"
            variants={infoVariant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {card.info}
          </motion.p>
        </motion.div>
      ))}
    </motion.div>
  );
}
