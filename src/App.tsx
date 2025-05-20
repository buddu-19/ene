import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import { activateScrollAnimations } from './utils/animations';

function App() {
  useEffect(() => {
    // Initialize scroll reveal animations
    activateScrollAnimations();
    
    // Update animations on scroll
    window.addEventListener('scroll', activateScrollAnimations);
    
    return () => {
      window.removeEventListener('scroll', activateScrollAnimations);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;