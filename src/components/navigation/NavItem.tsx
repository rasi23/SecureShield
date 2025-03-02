
import { motion } from "framer-motion";
import React from "react";

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const NavItem = ({ href, icon, label }: NavItemProps) => {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="text-white/80 hover:text-white transition-colors relative group"
      title={label}
    >
      {icon}
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black px-3 py-1.5 rounded-full text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        {label}
      </span>
    </motion.a>
  );
};

export default NavItem;
