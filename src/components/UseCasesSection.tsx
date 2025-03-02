
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface UseCase {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

const useCases: UseCase[] = [
  {
    id: 1,
    title: "Microsoft Office 365 Phishing",
    description: "Attackers send fake notifications that appear to be from Microsoft, urging users to log into their accounts to check missed messages or calls.",
    imageSrc: "https://images.unsplash.com/photo-1591017403286-fd8493524e1e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "PayPal Phishing Email",
    description: "A phishing campaign impersonating PayPal alerts users to 'suspicious activity' and 'account restrictions,' directing victims to a fake login page.",
    imageSrc: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Netflix Account Suspension Scam",
    description: "Phishing emails claim the user's account was suspended due to 'payment issues,' urging users to update their payment details on a fake Netflix site.",
    imageSrc: "https://images.unsplash.com/photo-1522198734915-76c764a8454d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Amazon Prime Membership Renewal Scam",
    description: "Scammers target Amazon users with fake membership renewal emails including links to a malicious site mimicking Amazon's login page.",
    imageSrc: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Bank Credential Phishing",
    description: "Emails warning users of 'unauthorized transactions' on their bank accounts redirect to fake bank login pages to steal credentials.",
    imageSrc: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Instagram Security Alert Scam",
    description: "Fake security alerts about 'suspicious login attempts' direct users to counterfeit Instagram pages where login credentials are harvested.",
    imageSrc: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074&auto=format&fit=crop"
  }
];

const UseCasesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % useCases.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + useCases.length) % useCases.length);
  };

  return (
    <section id="usecases" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="pill bg-primary/10 text-primary dark:bg-primary/20 mb-4 inline-block">
              Real-world Examples
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Common Phishing Scenarios
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Stay informed about the latest phishing tactics. Here are some real-world examples of 
              phishing attempts that SecureShield can help you identify and avoid.
            </p>
          </motion.div>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <div 
            ref={carouselRef} 
            className="overflow-hidden rounded-2xl shadow-lg"
          >
            <motion.div
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex"
            >
              {useCases.map((useCase) => (
                <div 
                  key={useCase.id}
                  className="w-full flex-shrink-0 aspect-[16/9] md:aspect-[21/9] relative"
                >
                  <div className="absolute inset-0 bg-black/50 z-10" />
                  <img
                    src={useCase.imageSrc}
                    alt={useCase.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-end z-20 p-8">
                    <div className="text-white">
                      <h3 className="text-2xl font-bold mb-2">{useCase.title}</h3>
                      <p className="text-gray-200 max-w-lg">{useCase.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          <div className="flex justify-between mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex space-x-1">
              {useCases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex 
                      ? "bg-primary w-6" 
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
