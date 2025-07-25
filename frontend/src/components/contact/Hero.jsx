import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPaperPlane, FaPhone, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa';
import Herobg from '../../../public/contact/hero.jpg';

const Hero = () => {
  // Translations defined locally
  const translations = {
    heroTitle: "Contact Us",
    heroSubtitle: "Get in touch with our team for any inquiries or support."
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-sans">
      {/* Hero Section with Background Image */}
      <div className="relative text-white py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={Herobg}
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-700/80 to-blue-400/70"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-blue-400 mix-blend-overlay"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-blue-500 mix-blend-overlay"></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-blue-300 mix-blend-overlay"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
            <span className="inline-block transform transition duration-500 hover:scale-105">
              {translations.heroTitle}
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
            {translations.heroSubtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <div className="flex items-center bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 w-full sm:w-auto transition-all duration-300 hover:bg-opacity-20 hover:shadow-lg hover:-translate-y-1">
              <div className="bg-blue-600 p-3 rounded-lg mr-4">
                <FaPhone className="text-white text-xl" />
              </div>
              <div className="text-left">
                <p className="font-bold text-blue-600">24/7 Support</p>
                <p className="text-xl font-medium text-blue-300">+249 123 456 789</p>
              </div>
            </div>

            <div className="flex items-center bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 w-full sm:w-auto transition-all duration-300 hover:bg-opacity-20 hover:shadow-lg hover:-translate-y-1">
              <div className="bg-blue-600 p-3 rounded-lg mr-4">
                <FaEnvelope className="text-white text-xl" />
              </div>
              <div className="text-left">
                <p className="font-bold text-blue-600">Email Us</p>
                <p className="text-xl font-medium text-blue-300">info@tarcoaviation.com</p>
              </div>
            </div>

            <div className="flex items-center bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 w-full sm:w-auto transition-all duration-300 hover:bg-opacity-20 hover:shadow-lg hover:-translate-y-1">
              <div className="bg-blue-600 p-3 rounded-lg mr-4">
                <FaMapMarkerAlt className="text-white text-xl" />
              </div>
              <div className="text-left">
                <p className="font-bold text-blue-600">Visit Us</p>
                <p className="text-xl font-medium text-blue-300">Khartoum, Sudan</p>
              </div>
            </div>
          </div>

          {/* Social media links - Enhanced Design */}
          <div className="mt-16">
            <h3 className="text-center text-blue-100 text-lg font-medium mb-6">Connect With Us</h3>
            <div className="flex justify-center space-x-4">
              {/* Facebook */}
              <a href="#" className="group bg-white/10 hover:bg-[#1877F2] p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <FaFacebook className="w-6 h-6 text-blue-200 group-hover:text-white transition-colors duration-300" />
              </a>

              {/* Twitter */}
              <a href="#" className="group bg-white/10 hover:bg-[#1DA1F2] p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <FaTwitter className="w-6 h-6 text-blue-200 group-hover:text-white transition-colors duration-300" />
              </a>

              {/* LinkedIn */}
              <a href="#" className="group bg-white/10 hover:bg-[#0077B5] p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <FaLinkedin className="w-6 h-6 text-blue-200 group-hover:text-white transition-colors duration-300" />
              </a>

              {/* Instagram */}
              <a href="#" className="group bg-white/10 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#C13584] hover:to-[#E1306C] p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <FaInstagram className="w-6 h-6 text-blue-200 group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;