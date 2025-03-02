
import { useEffect, useState } from "react";

interface MouseTrackerProps {
  isMobile: boolean;
  onPositionChange: (position: { x: number; y: number }) => void;
}

const MouseTracker = ({ isMobile, onPositionChange }: MouseTrackerProps) => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile) return;
      
      // Calculate movement based on mouse position relative to center
      const moveX = (window.innerWidth / 2 - e.clientX) * 0.01;
      const moveY = (window.innerHeight - e.clientY) * 0.01;
      
      onPositionChange({ x: moveX, y: moveY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile, onPositionChange]);

  return null; // This is a non-visual component
};

export default MouseTracker;
