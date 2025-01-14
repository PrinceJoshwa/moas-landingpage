import { motion } from "framer-motion";

export const ConcernBubble = ({ concern, index, total }) => {
  const angle = (index / total) * 2 * Math.PI;
  const radius = 42; // Percentage of the container's width
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <motion.div
      className="absolute top-1/2 left-1/2"
      style={{
        transform: `translate(-50%, -50%) translate(${x}%, ${y}%)`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="bg-white px-3 py-1 rounded-full shadow-md text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
        {concern}
      </div>
    </motion.div>
  );
};

