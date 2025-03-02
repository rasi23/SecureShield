
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface FeedbackOption {
  id: string;
  label: string;
}

const options: FeedbackOption[] = [
  { id: "unhappy", label: "Unhappy" },
  { id: "neutral", label: "Neutral" },
  { id: "satisfied", label: "Satisfied" }
];

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FeedbackModal = ({ isOpen, onClose }: FeedbackModalProps) => {
  const [selectedOption, setSelectedOption] = useState<string>("satisfied");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    // In a real app, you would send this data to your backend
    console.log("Feedback submitted:", selectedOption);
    setIsSubmitted(true);
    
    // Auto close after showing thank you message
    setTimeout(() => {
      onClose();
      // Reset for next time
      setTimeout(() => setIsSubmitted(false), 500);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-2xl shadow-xl z-50 max-w-md w-full p-6"
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="feedback-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="text-xl font-semibold text-center mb-6">
                    How satisfied are you with SecureShield?
                  </h3>
                  
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {options.map((option) => (
                      <button
                        key={option.id}
                        className={`flex flex-col items-center p-4 rounded-lg border-2 transition-all ${
                          selectedOption === option.id
                            ? "border-primary bg-primary/5"
                            : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                        }`}
                        onClick={() => setSelectedOption(option.id)}
                      >
                        <div className="text-3xl mb-2">
                          {option.id === "unhappy" && "😞"}
                          {option.id === "neutral" && "😐"}
                          {option.id === "satisfied" && "😊"}
                        </div>
                        <span className="text-sm font-medium">{option.label}</span>
                      </button>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full"
                    onClick={handleSubmit}
                  >
                    Submit Feedback
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key="thank-you"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-6"
                >
                  <div className="text-6xl mb-4">✨</div>
                  <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We appreciate your feedback and will use it to improve our service.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FeedbackModal;
