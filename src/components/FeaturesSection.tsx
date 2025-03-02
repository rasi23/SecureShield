
import { motion } from "framer-motion";
import { ArrowRight, Search, ShieldAlert, Database, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const animationConfig = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: "easeOut"
    }
  })
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-32 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="pill bg-white/10 text-white mb-6 inline-block px-4 py-2 uppercase text-xs font-semibold tracking-wider">
              Features
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              How SecureShield Protects You
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Our advanced technology analyzes URLs in real-time to detect and protect you 
              from various online threats before they can compromise your security.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <FeatureItem
            icon={<Search className="h-10 w-10 text-white" />}
            title="Real-time URL Analysis"
            description="Our advanced algorithms scan and analyze URLs in real-time to detect potential threats before you visit them."
            index={0}
          />
          
          <FeatureItem
            icon={<ShieldAlert className="h-10 w-10 text-white" />}
            title="Phishing Detection"
            description="SecureShield identifies sophisticated phishing websites designed to steal your personal information and credentials."
            index={1}
          />
          
          <FeatureItem
            icon={<Database className="h-10 w-10 text-white" />}
            title="Machine Learning"
            description="Our system continuously learns from new threats, improving detection rates and staying ahead of evolving phishing techniques."
            index={2}
          />
          
          <FeatureItem
            icon={<Lock className="h-10 w-10 text-white" />}
            title="Privacy Protection"
            description="Your data remains private and secure. SecureShield never stores your personal information or browsing history."
            index={3}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button className="rounded-full px-8 py-6 group bg-white text-black hover:bg-gray-200">
            Learn more
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

const FeatureItem = ({ icon, title, description, index }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={animationConfig}
      className="flex gap-6"
    >
      <div className="shrink-0">
        <div className="p-4 bg-white/10 rounded-xl">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeaturesSection;
