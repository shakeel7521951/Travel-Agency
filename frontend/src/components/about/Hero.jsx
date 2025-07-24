import React from 'react';
import { FaPlane, FaChevronDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-indigo-900/80 z-10"></div>
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center bg-no-repeat transform scale-100 hover:scale-105 transition-transform duration-1000 ease-out"
        ></div>
        
        {/* Floating Clouds Animation */}
        <div className="absolute inset-0 overflow-hidden z-10">
          <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-white/20 blur-xl animate-float-slow"></div>
          <div className="absolute top-1/3 right-20 w-60 h-60 rounded-full bg-white/15 blur-xl animate-float-medium"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-white/10 blur-xl animate-float-fast"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-6 text-center relative z-20">
          <div className="mb-6 animate-fadeIn">
            <span className="inline-block px-4 py-2 bg-yellow-400/20 backdrop-blur-sm rounded-full text-yellow-400 font-bold text-sm tracking-widest">
              WELCOME TO SKYWINGS
            </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold mb-6 text-white animate-fadeIn">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">SkyWings</span> Journey
          </h1>
          
          <p className="text-xl md:text-3xl max-w-3xl mx-auto text-white/90 mb-12 leading-relaxed animate-fadeIn delay-100">
            Where every flight becomes an unforgettable adventure in the clouds
          </p>
          
          <div className="flex flex-col items-center animate-fadeIn delay-200">
            <button className="relative overflow-hidden group bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 font-bold py-4 px-10 rounded-full text-lg transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-2xl mb-16">
              <span className="relative z-10 flex items-center">
                <FaPlane className="mr-3 transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                Explore Our Story
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </button>
            
            <a href="#about" className="text-white/80 hover:text-white animate-bounce transition-all duration-300">
              <FaChevronDown className="text-2xl" />
            </a>
          </div>
        </div>
        
        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-20"></div>
      </section>
      
      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-40px) translateX(20px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-30px) translateX(-30px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 6s ease-in-out infinite 1s; }
        .animate-float-fast { animation: float-fast 4s ease-in-out infinite 0.5s; }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }
        .animate-fadeIn.delay-100 {
          animation-delay: 0.3s;
        }
        .animate-fadeIn.delay-200 {
          animation-delay: 0.6s;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Hero;