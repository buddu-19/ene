import React from 'react';
import { BrainCircuit, X, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-500 border-t border-dark-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 text-xl font-bold mb-4">
              <BrainCircuit className="h-8 w-8 text-primary-500" />
              <span className="text-gradient">LAVENTRY</span>
            </div>
            <p className="text-gray-400 mb-6">
              Reimagining Possibilities with AI-Driven Strategy
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-dark-300 flex items-center justify-center text-white hover:bg-primary-500 transition-colors"
                aria-label="X (formerly Twitter)"
              >
                <X className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-dark-300 flex items-center justify-center text-white hover:bg-primary-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary-400 transition-colors">
                  AI-driven Business Intelligence
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Automation & Workflow Systems
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Market Strategy Design
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Digital Presence Consulting
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                <span className="block">San Francisco, CA</span>
              </li>
              <li>
                <a href="mailto:info@laventry.io" className="text-gray-400 hover:text-primary-400 transition-colors">
                  info@laventry.io
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-dark-400 text-center">
          <p className="text-gray-500">
            &copy; {currentYear} Laventry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;