import { motion } from "framer-motion";

export const BackgroundText = () => {
  const words = [
    "Success",
    "Dreams",
    "Future",
    "Opportunity",
    "Growth",
    "Adventure",
    "Knowledge",
    "Experience",
    "Global",
    "Education"
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {words.map((word, index) => (
        <motion.div
          key={index}
          className="absolute text-6xl sm:text-8xl font-bold text-gray-100 opacity-20 select-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 2, delay: index * 0.2 }}
        >
          {word}
        </motion.div>
      ))}
    </div>
  );
};

 