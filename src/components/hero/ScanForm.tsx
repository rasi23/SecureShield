
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface ScanFormProps {
  onScanComplete: (result: {
    url: string;
    status: "safe" | "dangerous";
    message: string;
  }) => void;
}

const ScanForm = ({ onScanComplete }: ScanFormProps) => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!url) {
      toast.error("Please enter a URL to scan");
      return;
    }
    
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      toast.error("URL must start with http:// or https://");
      return;
    }

    // Simulate scanning process
    setLoading(true);
    setTimeout(() => {
      // Simulated response (in a real app, this would come from the backend)
      const isSafe = Math.random() > 0.3; // 70% chance of being safe for demo
      
      onScanComplete({
        url,
        status: isSafe ? "safe" : "dangerous",
        message: isSafe ? "This website appears to be legitimate and safe." : "This website shows signs of being a phishing attempt.",
      });
      
      toast(isSafe ? "URL scan completed" : "Warning: Potential threat detected", {
        description: isSafe ? "No security threats detected" : "This URL might be unsafe",
      });
      
      setLoading(false);
    }, 2000);
  };

  return (
    <motion.form 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row max-w-2xl mx-auto gap-3"
    >
      <div className="flex-grow">
        <Input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL to scan (http:// or https://)"
          className="w-full py-7 px-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg focus:ring-2 focus:ring-primary text-lg"
        />
      </div>
      <Button 
        type="submit" 
        size="lg"
        disabled={loading}
        className="px-8 py-7 rounded-xl font-medium bg-black hover:bg-gray-800 text-white text-lg"
      >
        {loading ? "Scanning..." : "Scan URL"}
      </Button>
    </motion.form>
  );
};

export default ScanForm;
