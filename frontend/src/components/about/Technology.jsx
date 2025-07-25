import React, { useState, useEffect } from 'react';
import { MdOutlineConnectWithoutContact, MdSecurity, MdCloud } from 'react-icons/md';
import { FaMobileAlt, FaChartLine, FaServer } from 'react-icons/fa';
import { IoAnalyticsSharp } from 'react-icons/io5';

const Technology = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  const features = [
    {
      icon: <MdOutlineConnectWithoutContact className="text-3xl" />,
      title: "AI-Powered CRM",
      description: "Our custom-built platform leverages artificial intelligence to personalize passenger interactions and optimize service delivery across all touchpoints.",
      color: "from-blue-500 to-blue-400"
    },
    {
      icon: <FaMobileAlt className="text-2xl" />,
      title: "Mobile Integration",
      description: "Seamless mobile experience with QR code access, real-time updates, and intuitive interfaces for passengers and staff.",
      color: "from-purple-500 to-purple-400"
    },
    {
      icon: <FaChartLine className="text-2xl" />,
      title: "Advanced Analytics",
      description: "Comprehensive dashboards provide actionable insights across all stations with real-time data visualization.",
      color: "from-green-500 to-green-400"
    },
    {
      icon: <MdSecurity className="text-2xl" />,
      title: "Enterprise Security",
      description: "Military-grade encryption and multi-factor authentication protect all passenger data and transactions.",
      color: "from-red-500 to-red-400"
    },
    {
      icon: <FaServer className="text-2xl" />,
      title: "Cloud Infrastructure",
      description: "Scalable cloud-based architecture ensures 99.99% uptime and global accessibility.",
      color: "from-orange-500 to-orange-400"
    },
    {
      icon: <IoAnalyticsSharp className="text-2xl" />,
      title: "Predictive Modeling",
      description: "Machine learning algorithms anticipate passenger needs and optimize resource allocation.",
      color: "from-indigo-500 to-indigo-400"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-blue-200 animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-20 w-24 h-24 rounded-full bg-purple-200 animate-float-medium"></div>
        <div className="absolute top-2/3 left-1/4 w-16 h-16 rounded-full bg-green-200 animate-float-fast"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            Technology Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Technological Edge</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge solutions powering the future of aviation services across our global network
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`transition-all duration-500 delay-${index * 100} ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="h-full bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-500 group">
                <div className={`bg-gradient-to-br ${feature.color} p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto text-white group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
                <div className="mt-6 flex justify-center">
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
                    Learn more →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${animated ? 'opacity-100' : 'opacity-0'}`}>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105">
            Explore Full Technology Suite
          </button>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float-slow {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Technology;