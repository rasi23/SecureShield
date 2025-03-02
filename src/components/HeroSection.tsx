
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import HeroHeader from "./hero/HeroHeader";
import ScanForm from "./hero/ScanForm";
import ScanResult from "./hero/ScanResult";
import StatsDisplay from "./hero/StatsDisplay";

const HeroSection = () => {
  const [scanResult, setScanResult] = useState<null | {
    url: string;
    status: "safe" | "dangerous";
    message: string;
  }>(null);

  const handleScanComplete = (result: {
    url: string;
    status: "safe" | "dangerous";
    message: string;
  }) => {
    setScanResult(result);
  };

  const handleReset = () => {
    setScanResult(null);
  };

  return (
    <section id="home" className="min-h-screen pt-24 pb-16 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <HeroHeader />

          <AnimatePresence mode="wait">
            {!scanResult ? (
              <ScanForm key="scan-form" onScanComplete={handleScanComplete} />
            ) : (
              <ScanResult key="scan-result" result={scanResult} onReset={handleReset} />
            )}
          </AnimatePresence>
          
          <StatsDisplay />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
