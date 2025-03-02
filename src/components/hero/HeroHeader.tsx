
import { motion } from "framer-motion";

const HeroHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="mt-16 md:mt-24"
    >
      <div className="inline-block mb-8">
        <span className="pill bg-primary/10 text-primary dark:bg-primary/20 text-sm font-semibold tracking-wide">
          ADVANCED SECURITY
        </span>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-primary dark:from-white dark:to-primary-foreground leading-tight">
        Secure Your<br />Web Experience
      </h1>
      
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
        Advanced URL scanning powered by machine learning to protect you from phishing attacks and malicious websites with real-time threat detection.
      </p>
    </motion.div>
  );
};

export default HeroHeader;
