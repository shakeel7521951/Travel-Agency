import React, { useState, useEffect } from 'react';
import { FaLightbulb, FaRocket, FaGlobe, FaChartLine } from 'react-icons/fa';

const Mission_Vision = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <div className="py-20 bg-gradient-to-br from-blue-700 to-blue-400 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-1/4 w-16 h-16 rounded-full bg-white animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/5 w-24 h-24 rounded-full bg-blue-400 animate-float-medium"></div>
        <div className="absolute top-1/4 right-10 w-12 h-12 rounded-full bg-blue-300 animate-float-fast"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our <span className="text-blue-200">Core Beliefs</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Guiding principles that drive our innovation and service excellence in aviation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Mission Card */}
          <div className={`transition-all duration-1000 delay-150 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="h-full bg-white p-8 sm:p-10 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border-t-4 border-blue-500">
              <div className="flex flex-col items-center">
                <div className="relative mb-6 sm:mb-8">
                  <div className="absolute -inset-4 bg-blue-100 rounded-full opacity-30 animate-pulse-slow"></div>
                  <div className="relative bg-gradient-to-br from-blue-600 to-blue-400 p-4 sm:p-5 rounded-full text-white">
                    <FaLightbulb className="text-3xl sm:text-4xl" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 sm:mb-5 text-center">
                  Our Mission
                </h3>
                <p className="text-gray-700 text-lg text-center mb-5 sm:mb-6">
                  To transform air travel through innovative technology and personalized service, creating seamless 
                  experiences that exceed passenger expectations at every touchpoint.
                </p>
                <div className="flex flex-wrap justify-center gap-3 mt-4">
                  <span className="flex items-center px-3 py-1 sm:px-4 sm:py-2 bg-blue-50 rounded-full text-sm font-medium text-blue-800">
                    <FaChartLine className="mr-2" /> Innovation
                  </span>
                  <span className="flex items-center px-3 py-1 sm:px-4 sm:py-2 bg-blue-50 rounded-full text-sm font-medium text-blue-800">
                    <FaGlobe className="mr-2" /> Global Standards
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className={`transition-all duration-1000 delay-300 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="h-full bg-white p-8 sm:p-10 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border-t-4 border-blue-500">
              <div className="flex flex-col items-center">
                <div className="relative mb-6 sm:mb-8">
                  <div className="absolute -inset-4 bg-blue-100 rounded-full opacity-30 animate-pulse-slow"></div>
                  <div className="relative bg-gradient-to-br from-blue-600 to-blue-400 p-4 sm:p-5 rounded-full text-white">
                    <FaRocket className="text-3xl sm:text-4xl" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 sm:mb-5 text-center">
                  Our Vision
                </h3>
                <p className="text-gray-700 text-lg text-center mb-5 sm:mb-6">
                  To be the most trusted and technologically advanced aviation service provider, setting new standards 
                  for passenger experience worldwide through exceptional service and cutting-edge solutions.
                </p>
                <div className="flex flex-wrap justify-center gap-3 mt-4">
                  <span className="flex items-center px-3 py-1 sm:px-4 sm:py-2 bg-blue-50 rounded-full text-sm font-medium text-blue-800">
                    <FaRocket className="mr-2" /> Advancement
                  </span>
                  <span className="flex items-center px-3 py-1 sm:px-4 sm:py-2 bg-blue-50 rounded-full text-sm font-medium text-blue-800">
                    <FaGlobe className="mr-2" /> Worldwide Impact
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float-slow {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float 5s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        .animate-pulse-slow {
          animation: pulse 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Mission_Vision;