import React, { useState, useEffect } from 'react';
import Storyabout from '../../../public/about/storyabout.jpg';
import { FaCheckCircle, FaPlane, FaGlobeAmericas, FaHeadset } from 'react-icons/fa';
import { MdAirplanemodeActive, MdSecurity } from 'react-icons/md';

const Our_Story = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-50 py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="lg:w-1/2 relative">
            <div className={`transition-all duration-1000 ${animated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="inline-block mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 relative">
                  <span className="relative z-10">Our Aviation Journey</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full"></div>
              </div>

              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                Founded in 2005, <span className="font-semibold text-blue-800">Tarco Aviation</span> has grown from a regional service provider to a global aviation network spanning <span className="font-bold">18 international stations</span> across four continents.
              </p>

              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                We combine <span className="font-semibold text-blue-800">cutting-edge technology</span> with <span className="font-semibold text-blue-800">personalized service</span> to deliver exceptional aviation experiences. Our commitment to excellence has positioned us as an industry leader serving discerning clients worldwide.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className={`bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500 transform hover:-translate-y-1 ${animated ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-lg mr-4">
                      <FaGlobeAmericas className="text-blue-600 text-xl" />
                    </div>
                    <span className="font-medium">Global Network</span>
                  </div>
                </div>
                <div className={`bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500 transform hover:-translate-y-1 ${animated ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-lg mr-4">
                      <MdAirplanemodeActive className="text-blue-600 text-xl" />
                    </div>
                    <span className="font-medium">Modern Fleet</span>
                  </div>
                </div>
                <div className={`bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500 transform hover:-translate-y-1 ${animated ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-lg mr-4">
                      <FaHeadset className="text-blue-600 text-xl" />
                    </div>
                    <span className="font-medium">24/7 Support</span>
                  </div>
                </div>
                <div className={`bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500 transform hover:-translate-y-1 ${animated ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-lg mr-4">
                      <MdSecurity className="text-blue-600 text-xl" />
                    </div>
                    <span className="font-medium">Safety First</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="lg:w-1/2 relative">
            <div className={`relative transition-all duration-1000 delay-300 ${animated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={Storyabout} 
                  alt="Tarco Aviation Team" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-blue-900/10"></div>
              </div>

              {/* Stats Card */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl z-10 w-3/4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <FaPlane className="text-blue-700 text-2xl" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-900 mb-1">18+</p>
                    <p className="text-sm text-gray-600 uppercase tracking-wider">International Stations</p>
                    <div className="mt-2 pt-2 border-t border-gray-100">
                      <p className="text-xs text-gray-500">Serving clients since 2005</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-blue-200 opacity-20 z-0"></div>
              <div className="absolute bottom-10 -left-10 w-16 h-16 rounded-full bg-blue-100 opacity-30 z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Our_Story;