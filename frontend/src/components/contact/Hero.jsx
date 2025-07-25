import React, { useState } from 'react';

const Hero = () => {
  

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-blue-700/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center bg-no-repeat transform scale-110"
          style={{ willChange: 'transform' }}
        ></div>
        
        <div className="container mx-auto px-6 text-center relative z-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fadeIn">
            Let's <span className="text-yellow-400">Connect</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 animate-fadeIn delay-100">
            Our travel experts are ready to craft your perfect journey
          </p>
          <div className="animate-fadeIn delay-200">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 px-10 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg mr-4">
              Contact Us
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-10 rounded-full text-lg transition-all transform hover:scale-105">
              Book Now
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-20"></div>
      </section>
     </div>
  );
};

export default Hero;