import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return <header className="">
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <Link to="/" className="text-brand-800 font-bold text-xl">
          Your<span className="text-brand-500">AMK</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <Button variant="default" size="sm" className="bg-brand-500 hover:bg-brand-600">
            Resume
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="absolute top-full left-0 right-0 bg-white border-t shadow-lg md:hidden py-4 animate-fade-in">
          <nav className="container mx-auto px-4 sm:px-6 flex flex-col space-y-4">
            <MobileNavLink href="#about" onClick={toggleMenu}>About</MobileNavLink>
            <MobileNavLink href="#projects" onClick={toggleMenu}>Projects</MobileNavLink>
            <MobileNavLink href="#experience" onClick={toggleMenu}>Experience</MobileNavLink>
            <MobileNavLink href="#contact" onClick={toggleMenu}>Contact</MobileNavLink>
            <Button variant="default" size="sm" className="bg-brand-500 hover:bg-brand-600 w-full mt-4">
              Resume
            </Button>
          </nav>
        </div>}
    </header>;
};
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}
const NavLink = ({
  href,
  children
}: NavLinkProps) => <a href={href} className="text-gray-700 hover:text-brand-500 transition-colors duration-200 font-medium">
    {children}
  </a>;
interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}
const MobileNavLink = ({
  href,
  onClick,
  children
}: MobileNavLinkProps) => <a href={href} className="text-gray-700 hover:text-brand-500 transition-colors duration-200 font-medium block py-2" onClick={onClick}>
    {children}
  </a>;
export default NavBar;