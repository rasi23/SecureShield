
import { motion } from "framer-motion";
import { ArrowUpRight, Github, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-24 pb-12 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
            <motion.div 
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ShieldCheck className="h-10 w-10 text-black dark:text-white" />
              <span className="text-2xl font-bold text-black dark:text-white">SecureShield</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex space-x-4"
            >
              <Button
                variant="outline"
                onClick={scrollToTop}
                className="rounded-full p-3 border-black dark:border-white"
                aria-label="Back to top"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="m18 15-6-6-6 6"/>
                </svg>
              </Button>
              
              <a 
                href="https://phishingquiz.withgoogle.com/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="flex items-center gap-2 bg-black text-white hover:bg-gray-800 rounded-full px-6 py-6">
                  Take Google's Phishing Test
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </a>
            </motion.div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 pt-10 flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                © 2024 SecureShield. All rights reserved.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center space-x-4 mt-4 md:mt-0"
            >
              <a 
                href="https://github.com/rasi23" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors flex items-center"
              >
                <Github className="h-4 w-4 mr-2" />
                <span>Rasindu Vimansha Illangarathne</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
