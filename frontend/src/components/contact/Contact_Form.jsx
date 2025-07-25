import React, { useState } from 'react';
import { FaCheck, FaSpinner, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPaperPlane, FaPhone, FaEnvelope, FaMapMarkerAlt, FaHeadset, FaBuilding, FaPlane } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    station: '',
    message: '',
    purpose: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        station: '',
        message: '',
        purpose: 'general'
      });
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const translations = {
    title: "Contact Tarco Aviation",
    subtitle: "Reach out to our team for any inquiries or assistance",
    name: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    station: "Your Station (if applicable)",
    message: "Your Message",
    purpose: "Purpose of Contact",
    purposes: {
      general: "General Inquiry",
      support: "Technical Support",
      feedback: "Passenger Feedback",
      partnership: "Business Partnership",
      other: "Other"
    },
    submit: "Send Message",
    success: "Thank you for contacting us! We'll respond within 24 hours.",
    contactMethods: "Our Contact Channels",
    hqAddress: "Global Headquarters",
    address: "Tarco Aviation Tower, Khartoum International Airport Zone, Sudan",
    emergency: "24/7 Emergency Support: +249 123 456 789"
  };

  return (
    <div className="py-6 px-4 sm:py-8 sm:px-6 lg:py-10 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-lg sm:shadow-xl lg:shadow-2xl overflow-hidden border border-gray-200">
        <div className="flex flex-col md:flex-row">
          {/* Left Section - Contact Form */}
          <div className="w-full p-6 sm:p-8 md:p-10 lg:p-12 bg-gradient-to-br from-gray-50 to-white">
            <div className="flex items-start mb-6 sm:mb-8 md:mb-10">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2 sm:p-3 rounded-lg sm:rounded-xl mr-3 sm:mr-4 shadow-md sm:shadow-lg">
                <FaPlane className="text-white text-lg sm:text-xl transform rotate-45" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  {translations.title}
                </h2>
                <p className="text-gray-600 mt-2 sm:mt-3 text-base sm:text-lg">
                  {translations.subtitle}
                </p>
              </div>
            </div>

            {submitSuccess ? (
              <div className="bg-green-50 border-l-4 border-green-500 rounded-lg sm:rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 p-1 sm:p-2 rounded-full">
                    <FaCheck className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <h3 className="text-lg sm:text-xl font-medium text-green-800">
                      Message Received!
                    </h3>
                    <p className="mt-1 sm:mt-2 text-sm sm:text-base text-green-700">
                      {translations.success}
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg sm:rounded-xl hover:from-blue-700 hover:to-blue-600 transition-all flex items-center shadow-sm sm:shadow-md hover:shadow-lg text-sm sm:text-base"
                    >
                      <FaPaperPlane className="mr-2 sm:mr-3" />
                      New Message
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
                  <div className="space-y-1 sm:space-y-2">
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      {translations.name}
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="block w-full px-4 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm hover:shadow-md bg-white outline-0 text-sm sm:text-base"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      {translations.email}
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full px-4 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm hover:shadow-md bg-white outline-0 text-sm sm:text-base"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
                  <div className="space-y-1 sm:space-y-2">
                    <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      {translations.phone}
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="block w-full px-4 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm hover:shadow-md bg-white outline-0 text-sm sm:text-base"
                        placeholder="+249 XXX XXX XXX"
                      />
                    </div>
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label htmlFor="station" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      {translations.station}
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="station"
                        id="station"
                        value={formData.station}
                        onChange={handleChange}
                        className="block w-full px-4 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm hover:shadow-md bg-white outline-0 text-sm sm:text-base"
                        placeholder="Your station or location"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <label htmlFor="purpose" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    {translations.purpose}
                  </label>
                  <div className="relative">
                    <select
                      id="purpose"
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleChange}
                      className="block w-full px-4 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm hover:shadow-md bg-white appearance-none outline-0 text-sm sm:text-base"
                    >
                      {Object.entries(translations.purposes).map(([value, label]) => (
                        <option key={value} value={value}>{label}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-3 w-3 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    {translations.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full px-4 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm hover:shadow-md bg-white outline-0 text-sm sm:text-base"
                    placeholder="How can we assist you today?"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center items-center py-3 sm:py-4 px-4 sm:px-6 border border-transparent rounded-lg sm:rounded-xl shadow-md sm:shadow-lg text-base sm:text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-70 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] group"
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="animate-spin mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend className="mr-2 sm:mr-3 transform group-hover:translate-x-1 transition-transform" />
                        {translations.submit}
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Section - Contact Information */}
          <div className="w-full bg-gradient-to-br from-blue-500 to-blue-800 p-6 sm:p-8 md:p-10 lg:p-12 text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-20 h-20 sm:w-40 sm:h-40 bg-blue-700 rounded-full opacity-10 -mr-10 sm:-mr-20 -mt-10 sm:-mt-20"></div>
            <div className="absolute bottom-0 left-0 w-30 h-30 sm:w-60 sm:h-60 bg-blue-700 rounded-full opacity-10 -ml-15 sm:-ml-30 -mb-15 sm:-mb-30"></div>
            <div className="absolute top-1/3 left-1/4 w-12 h-12 sm:w-24 sm:h-24 bg-blue-600 rounded-full opacity-10"></div>
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="bg-blue-600 bg-opacity-70 p-3 sm:p-4 rounded-lg sm:rounded-xl mr-3 sm:mr-4 shadow-md sm:shadow-lg">
                  <FaHeadset className="text-white text-xl sm:text-2xl" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  {translations.contactMethods}
                </h2>
              </div>
              
              <div className="flex-1 space-y-4 sm:space-y-6">
                <div className="bg-blue-700 bg-opacity-40 p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm border border-blue-600 border-opacity-30 hover:bg-opacity-50 transition-all transform hover:-translate-y-1">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 flex items-center">
                    <FaMapMarkerAlt className="mr-2 sm:mr-3 text-blue-300" />
                    {translations.hqAddress}
                  </h3>
                  <p className="text-blue-100 pl-7 sm:pl-9 text-sm sm:text-lg">{translations.address}</p>
                </div>

                <div className="bg-blue-700 bg-opacity-40 p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm border border-blue-600 border-opacity-30 hover:bg-opacity-50 transition-all transform hover:-translate-y-1">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 flex items-center">
                    <FaBuilding className="mr-2 sm:mr-3 text-blue-300" />
                    General Inquiries
                  </h3>
                  <div className="flex items-center text-blue-100 mb-2 sm:mb-3 pl-7 sm:pl-9 text-sm sm:text-lg">
                    <FaEnvelope className="mr-2 sm:mr-3 text-blue-300" />
                    info@tarcoaviation.com
                  </div>
                  <div className="flex items-center text-blue-100 pl-7 sm:pl-9 text-sm sm:text-lg">
                    <FaPhone className="mr-2 sm:mr-3 text-blue-300" />
                    +249 987 654 321
                  </div>
                </div>

                <div className="bg-blue-700 bg-opacity-40 p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm border border-blue-600 border-opacity-30 hover:bg-opacity-50 transition-all transform hover:-translate-y-1">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 flex items-center">
                    <FaHeadset className="mr-2 sm:mr-3 text-blue-300" />
                    Customer Support
                  </h3>
                  <div className="flex items-center text-blue-100 mb-2 sm:mb-3 pl-7 sm:pl-9 text-sm sm:text-lg">
                    <FaEnvelope className="mr-2 sm:mr-3 text-blue-300" />
                    support@tarcoaviation.com
                  </div>
                  <div className="flex items-center text-blue-100 pl-7 sm:pl-9 text-sm sm:text-lg">
                    <FaPhone className="mr-2 sm:mr-3 text-blue-300" />
                    +249 987 654 322
                  </div>
                </div>

                <div className="bg-red-600 bg-opacity-40 p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm border border-red-500 border-opacity-30 hover:bg-opacity-50 transition-all transform hover:-translate-y-1">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 flex items-center">
                    <FaHeadset className="mr-2 sm:mr-3 text-red-300" />
                    Emergency Contact
                  </h3>
                  <p className="text-blue-100 pl-7 sm:pl-9 text-sm sm:text-lg">{translations.emergency}</p>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 border-t border-blue-700">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 md:mb-5">
                  Connect With Us
                </h3>
                <div className="flex space-x-2 sm:space-x-3 md:space-x-4">
                  <a href="#" className="bg-blue-700 bg-opacity-50 hover:bg-opacity-70 p-3 sm:p-4 rounded-lg sm:rounded-xl transition-all transform hover:-translate-y-1 shadow-sm sm:shadow-md hover:shadow-lg">
                    <FaFacebook className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                  <a href="#" className="bg-blue-700 bg-opacity-50 hover:bg-opacity-70 p-3 sm:p-4 rounded-lg sm:rounded-xl transition-all transform hover:-translate-y-1 shadow-sm sm:shadow-md hover:shadow-lg">
                    <FaTwitter className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                  <a href="#" className="bg-blue-700 bg-opacity-50 hover:bg-opacity-70 p-3 sm:p-4 rounded-lg sm:rounded-xl transition-all transform hover:-translate-y-1 shadow-sm sm:shadow-md hover:shadow-lg">
                    <FaLinkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                  <a href="#" className="bg-blue-700 bg-opacity-50 hover:bg-opacity-70 p-3 sm:p-4 rounded-lg sm:rounded-xl transition-all transform hover:-translate-y-1 shadow-sm sm:shadow-md hover:shadow-lg">
                    <FaInstagram className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;