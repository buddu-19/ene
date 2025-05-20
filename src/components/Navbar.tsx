import React, { useState, useEffect } from 'react';
import { Menu, X, BrainCircuit } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll events to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-500/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2 text-xl font-bold">
          <BrainCircuit className="h-8 w-8 text-primary-500" />
          <span className="text-gradient">LAVENTRY</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-white hover:text-primary-400 transition-colors duration-300">
            About
          </a>
          <a href="#services" className="text-white hover:text-primary-400 transition-colors duration-300">
            Services
          </a>
          <a href="#contact" className="text-white hover:text-primary-400 transition-colors duration-300">
            Contact
          </a>
          <a 
            href="#contact" 
            className="px-6 py-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-400 hover:to-secondary-400 text-white transition-all duration-300"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-dark-500/98 z-40 md:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
          <a 
            href="#about" 
            className="text-white hover:text-primary-400 transition-colors duration-300"
            onClick={closeMenu}
          >
            About
          </a>
          <a 
            href="#services" 
            className="text-white hover:text-primary-400 transition-colors duration-300"
            onClick={closeMenu}
          >
            Services
          </a>
          <a 
            href="#contact" 
            className="text-white hover:text-primary-400 transition-colors duration-300"
            onClick={closeMenu}
          >
            Contact
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-400 hover:to-secondary-400 text-white transition-all duration-300"
            onClick={closeMenu}
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;