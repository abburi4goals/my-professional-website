import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return <footer className="bg-brand-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <FooterLink href="#about">About</FooterLink>
              <FooterLink href="#projects">Projects</FooterLink>
              <FooterLink href="#experience">Experience</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </div>
          
          
        </div>
        
        <div className="border-t border-brand-700 mt-12 pt-8 flex justify-between items-center">
          <div className="text-sm text-gray-400">
            <span>Privacy Policy</span>
            <span className="mx-2">•</span>
            <span>Terms of Service</span>
          </div>
          <button onClick={scrollToTop} className="bg-brand-700 hover:bg-brand-600 p-3 rounded-full transition-colors duration-200" aria-label="Scroll to top">
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>;
};
interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}
const FooterLink = ({
  href,
  children
}: FooterLinkProps) => {
  return <li>
      <a href={href} className="text-gray-300 hover:text-brand-300 transition-colors duration-200">
        {children}
      </a>
    </li>;
};
export default Footer;