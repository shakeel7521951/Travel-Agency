import React from 'react';
import { FaGlobeAmericas, FaHeadset, FaShieldAlt } from 'react-icons/fa';
import { GiWorld } from 'react-icons/gi';
import { MdOutlineAirplaneTicket } from 'react-icons/md';

const Global_Presence = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-blue-800 via-blue-700 to-blue-400 rounded-3xl p-8 md:p-12 mb-6 text-white relative overflow-hidden group transition-all duration-300 shadow-2xl hover:shadow-blue-900/30">
        {/* Animated background elements */}
        <div className="absolute -top-10 -right-10 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
          <GiWorld className="text-[200px] md:text-[300px] animate-spin-slow" />
        </div>
        <div className="absolute -bottom-20 -left-20 opacity-5 group-hover:opacity-20 transition-opacity duration-500">
          <GiWorld className="text-[300px] md:text-[400px] animate-spin-slower" />
        </div>
        
        <div className="relative z-10">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
              Worldwide Network
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-white">
              Our Global Presence
            </h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-blue-100">
              With 18 international stations and growing, Tarco Aviation connects passengers to destinations worldwide 
              with exceptional service and local expertise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: <FaGlobeAmericas className="text-4xl" />, value: "18+", label: "International Stations" },
              { icon: <MdOutlineAirplaneTicket className="text-4xl" />, value: "500+", label: "Daily Flights" },
              { icon: <FaHeadset className="text-4xl" />, value: "24/7", label: "Support" },
              { icon: <FaShieldAlt className="text-4xl" />, value: "100%", label: "Safety Record" }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-blue-400/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-900/20"
              >
                <div className="flex items-center justify-center mb-4 text-blue-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-center text-white">{item.value}</h3>
                <p className="text-center text-blue-100">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced CTA Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-400 p-8 md:p-12 rounded-3xl overflow-hidden relative">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-white/10 backdrop-blur-sm"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white/5 backdrop-blur-sm"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience the <span className="text-blue-200">Future of Aviation</span>?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied passengers who choose Tarco Aviation for their travel needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-white text-blue-900 rounded-xl font-bold text-lg hover:bg-blue-100 transition-all duration-300 shadow-lg hover:shadow-blue-900/50 hover:-translate-y-1">
              Book Your Flight Today
            </button>
            <button className="px-8 py-4 border-2 border-white/50 text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 hover:border-white hover:shadow-lg hover:shadow-blue-900/30 hover:-translate-y-1">
              Contact Our Team
            </button>
          </div>
          <p className="text-blue-200/80 mt-6 text-sm">
            ✈️ Award-winning service since 2005
          </p>
        </div>
      </div>
    </>
  );
}

export default Global_Presence;