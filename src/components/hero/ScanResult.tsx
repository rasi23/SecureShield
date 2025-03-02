
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldAlert, ShieldCheck, ExternalLink } from "lucide-react";

interface ScanResultProps {
  result: {
    url: string;
    status: "safe" | "dangerous";
    message: string;
  };
  onReset: () => void;
}

const ScanResult = ({ result, onReset }: ScanResultProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className={`max-w-2xl mx-auto p-8 border ${
        result.status === "safe" 
          ? "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800" 
          : "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800"
      } rounded-2xl shadow-lg`}
    >
      <div className="flex items-start gap-6">
        <div className={`p-4 rounded-full ${
          result.status === "safe" 
            ? "bg-green-100 text-green-600 dark:bg-green-800/30 dark:text-green-400" 
            : "bg-red-100 text-red-600 dark:bg-red-800/30 dark:text-red-400"
        }`}>
          {result.status === "safe" ? (
            <ShieldCheck className="h-8 w-8" />
          ) : (
            <ShieldAlert className="h-8 w-8" />
          )}
        </div>
        
        <div className="flex-1">
          <h3 className={`text-xl font-semibold ${
            result.status === "safe" ? "text-green-800 dark:text-green-400" : "text-red-800 dark:text-red-400"
          }`}>
            {result.status === "safe" ? "Website is safe" : "Potential threat detected"}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{result.url}</p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">{result.message}</p>
          
          <div className="flex flex-wrap gap-3">
            <Button 
              variant={result.status === "safe" ? "default" : "outline"}
              size="sm"
              className={result.status === "safe" ? "bg-black text-white hover:bg-gray-800" : "text-red-600 border-red-300 hover:bg-red-50"}
              onClick={() => window.open(result.url, "_blank")}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              {result.status === "safe" ? "Visit Website" : "Proceed Anyway"}
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={onReset}
            >
              Scan Another URL
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ScanResult;
