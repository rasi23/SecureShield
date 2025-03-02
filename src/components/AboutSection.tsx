
import { motion } from "framer-motion";
import { ShieldCheck, Globe, Lock, AlertTriangle } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-black dark:text-white" />,
    title: "Advanced Protection",
    description: "Machine learning algorithms continuously updated to detect emerging threats."
  },
  {
    icon: <Globe className="h-8 w-8 text-black dark:text-white" />,
    title: "Real-Time Scanning",
    description: "Instant URL analysis with comprehensive security checks."
  },
  {
    icon: <Lock className="h-8 w-8 text-black dark:text-white" />,
    title: "User Privacy",
    description: "Your data and scans remain completely confidential and secure."
  },
  {
    icon: <AlertTriangle className="h-8 w-8 text-black dark:text-white" />,
    title: "Phishing Detection",
    description: "Identify and avoid sophisticated phishing attempts targeting your data."
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="pill bg-black/10 text-black dark:bg-white/20 dark:text-white mb-6 inline-block px-4 py-2 uppercase text-xs font-semibold tracking-wider">
              About SecureShield
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black dark:text-white">
              Protecting You in the Digital World
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              SecureShield leverages cutting-edge machine learning to analyze and detect potential threats, 
              providing real-time protection against phishing and malicious websites.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl"
            >
              <div className="p-4 bg-black/5 dark:bg-white/10 rounded-xl inline-block mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
