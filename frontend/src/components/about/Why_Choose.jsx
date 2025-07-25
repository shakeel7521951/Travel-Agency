import React from 'react';
import { FaClock, FaHandHoldingUsd, FaHeadset, FaShieldAlt, FaPlane, FaSmile } from 'react-icons/fa';

const Why_Choose = () => {
  const features = [
    {
      icon: <FaClock className="w-6 h-6" />,
      title: "Punctuality Guaranteed",
      desc: "95% on-time performance with our optimized flight network",
      highlight: "On-time guarantee"
    },
    {
      icon: <FaHandHoldingUsd className="w-6 h-6" />,
      title: "Best Value Deals",
      desc: "Exclusive member discounts and price match guarantee",
      highlight: "Price match"
    },
    {
      icon: <FaHeadset className="w-6 h-6" />,
      title: "24/7 Concierge",
      desc: "Personal travel assistants available anytime, anywhere",
      highlight: "Always available"
    },
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: "Travel Protection",
      desc: "Comprehensive coverage for all your travel needs",
      highlight: "Peace of mind"
    },
    {
      icon: <FaPlane className="w-6 h-6" />,
      title: "Global Network",
      desc: "Access to 5,000+ destinations worldwide",
      highlight: "Worldwide access"
    },
    {
      icon: <FaSmile className="w-6 h-6" />,
      title: "Satisfaction Promise",
      desc: "Your happiness is our top priority",
      highlight: "100% satisfaction"
    }
  ];

  return (
    <section className="py-14 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center"></div>
      </div>
      <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-blue-600 filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-10 right-1/4 w-72 h-72 rounded-full bg-indigo-600 filter blur-3xl opacity-20 animate-float-delay"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 transition-all duration-500 transform hover:scale-105">
          <div className="inline-block mb-4 px-5 py-2 bg-yellow-400/20 rounded-full backdrop-blur-sm">
            <span className="text-yellow-400 font-bold uppercase tracking-wider text-sm">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Journey <span className="text-yellow-400">Deserves</span> Excellence
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl">
            We go beyond tickets to deliver exceptional experiences at every step of your travel
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-yellow-400/50 transition-all duration-500 group hover:-translate-y-2 shadow-lg hover:shadow-xl"
            >
              <div className="relative">
                <div className="absolute -top-12 left-0 w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-yellow-400 to-yellow-600 text-white group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                  {feature.icon}
                </div>
                <div className="pt-8">
                  <div className="inline-block mb-2 px-3 py-1 bg-yellow-400/10 rounded-full">
                    <span className="text-yellow-400 text-xs font-bold uppercase tracking-wider">{feature.highlight}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-white/70 mb-6">{feature.desc}</p>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-4"></div>
                  <div className="flex justify-end">
                    <button className="text-yellow-400 hover:text-white flex items-center transition-colors duration-300">
                      <span className="mr-2 font-medium">Learn more</span>
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <button className="relative inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-blue-900 font-bold rounded-full text-lg overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span className="relative z-10 flex items-center">
              <FaPlane className="mr-2 transform -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
              Start Your Journey
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute inset-0 rounded-full border-2 border-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      </div>

      {/* Floating airplane animation */}
      <div className="absolute bottom-10 left-10 opacity-20 animate-float-plane">
        <svg className="w-20 h-20 md:w-24 md:h-24 text-white transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
        </svg>
      </div>

      {/* Custom animations in global CSS */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(-10px); }
          50% { transform: translateY(10px); }
        }
        @keyframes float-plane {
          0%, 100% { transform: translateX(0) rotate(45deg); }
          50% { transform: translateX(20px) rotate(45deg); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delay { animation: float-delay 10s ease-in-out infinite; }
        .animate-float-plane { animation: float-plane 12s ease-in-out infinite; }
      `}</style>
    </section>
  )
}

export default Why_Choose;