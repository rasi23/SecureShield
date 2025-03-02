
import { useState } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import MouseTracker from "./navigation/MouseTracker";
import NavContent from "./navigation/NavContent";

const FloatingNav = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isMobile = useIsMobile();
  
  const handlePositionChange = (position: { x: number; y: number }) => {
    setMousePosition(position);
  };

  return (
    <>
      <MouseTracker isMobile={isMobile} onPositionChange={handlePositionChange} />
      
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20,
          delay: 1 
        }}
        style={{ 
          transform: isMobile ? 
            "translate(-50%, 0)" : 
            `translate(-50%, 0) translate(${mousePosition.x}px, ${mousePosition.y}px)` 
        }}
        className={`fixed ${
          isMobile ? "bottom-6 right-6 flex-col" : "bottom-6 left-1/2"
        } bg-black text-white py-4 px-8 rounded-full shadow-xl z-40 flex space-x-8 items-center transition-all duration-200`}
      >
        <NavContent />
      </motion.div>
    </>
  );
};

export default FloatingNav;
