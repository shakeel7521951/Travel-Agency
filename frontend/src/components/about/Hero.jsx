import { useState, useEffect } from 'react';
import { FaPlane, FaChevronDown } from 'react-icons/fa';
import  Heroabout from '../../../public/about/hero.jpg';


const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Background with image overlay */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background image - Aviation themed */}
        <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${Heroabout})` }}
    >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-800/80 via-blue-700/60 to-blue-400/40"></div>
          
          {/* Animated planes in background */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <FaPlane className="absolute top-1/4 left-1/4 text-4xl transform rotate-45 animate-float-slow" />
            <FaPlane className="absolute top-1/3 right-1/5 text-5xl transform -rotate-12 animate-float-medium" />
            <FaPlane className="absolute bottom-1/4 left-1/5 text-3xl transform rotate-30 animate-float-fast" />
            <FaPlane className="absolute bottom-1/3 right-1/4 text-6xl transform -rotate-45 animate-float-slow" />
          </div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-6">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-white">
              Tarco Aviation
            </span>
          </h1>
          
          <p className={`text-xl md:text-2xl lg:text-3xl text-blue-100 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
            Elevating your journey with cutting-edge aviation solutions and unparalleled service excellence
          </p>
          
          <div className={`flex flex-col sm:flex-row justify-center gap-4 mb-16 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
            <button className="px-8 py-4 bg-white text-blue-900 rounded-xl font-bold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl active:scale-95">
              Explore Services
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-blue-900 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl active:scale-95">
              Contact Our Team
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-white flex flex-col items-center">
            <span className="text-sm mb-2">Scroll Down</span>
            <FaChevronDown className="text-xl" />
          </div>
        </div>
      </div>

      {/* Add custom animations to Tailwind config */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateX(-100%) rotate(0deg); }
          100% { transform: translateX(100vw) rotate(360deg); }
        }
        .animate-float-slow {
          animation: float 25s linear infinite;
        }
        .animate-float-medium {
          animation: float 18s linear infinite;
        }
        .animate-float-fast {
          animation: float 12s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;