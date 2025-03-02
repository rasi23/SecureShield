
import { motion } from "framer-motion";

const StatsDisplay = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.7 }}
      className="flex flex-wrap justify-center gap-16 text-center"
    >
      <div className="flex flex-col items-center">
        <div className="text-5xl font-bold text-black dark:text-white mb-2">99.8%</div>
        <div className="text-gray-600 dark:text-gray-400 text-sm">Detection Rate</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-5xl font-bold text-black dark:text-white mb-2">500K+</div>
        <div className="text-gray-600 dark:text-gray-400 text-sm">URLs Scanned</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-5xl font-bold text-black dark:text-white mb-2">10M+</div>
        <div className="text-gray-600 dark:text-gray-400 text-sm">Threats Blocked</div>
      </div>
    </motion.div>
  );
};

export default StatsDisplay;
