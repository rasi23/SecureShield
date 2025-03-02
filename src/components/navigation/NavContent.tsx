
import { Home, Info, Lightbulb, Download } from "lucide-react";
import NavItem from "./NavItem";

const NavContent = () => {
  return (
    <>
      <NavItem href="#home" icon={<Home className="h-5 w-5" />} label="Home" />
      <NavItem href="#about" icon={<Info className="h-5 w-5" />} label="About" />
      <NavItem href="#features" icon={<Lightbulb className="h-5 w-5" />} label="Features" />
      <NavItem 
        href="#usecases" 
        icon={<Download className="h-5 w-5" />} 
        label="Use Cases" 
      />
    </>
  );
};

export default NavContent;
