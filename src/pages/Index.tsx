
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import UseCasesSection from "@/components/UseCasesSection";
import Footer from "@/components/Footer";
import FloatingNav from "@/components/FloatingNav";
import FeedbackModal from "@/components/FeedbackModal";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const Index = () => {
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <UseCasesSection />
      </main>
      
      <Footer />
      <FloatingNav />
      
      {/* Feedback Button */}
      <Button
        onClick={() => setFeedbackModalOpen(true)}
        className={`fixed ${
          isMobile ? "bottom-20" : "bottom-6"
        } right-6 z-40 rounded-full px-4 font-medium shadow-lg bg-black text-white hover:bg-gray-800`}
      >
        <MessageSquare className="h-4 w-4 mr-2" />
        Give Feedback
      </Button>
      
      <FeedbackModal 
        isOpen={feedbackModalOpen} 
        onClose={() => setFeedbackModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
