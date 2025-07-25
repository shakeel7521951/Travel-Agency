import React, { useState } from 'react';

const Faq_Section = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I change or cancel my flight booking?",
      answer: "You can modify or cancel your booking through our website or mobile app under 'My Trips'. Alternatively, contact our customer support team for assistance."
    },
    {
      question: "What documents do I need for international travel?",
      answer: "Requirements vary by destination. Typically you'll need a valid passport and possibly a visa. We provide complete documentation checklists for all destinations when you book with us."
    },
    {
      question: "How early should I arrive at the airport?",
      answer: "We recommend arriving at least 2 hours before domestic flights and 3 hours before international flights. During peak travel times, consider adding an extra hour."
    },
    {
      question: "Do you offer travel insurance?",
      answer: "Yes, we offer comprehensive travel insurance options that can be added during the booking process or purchased separately up to 24 hours before departure."
    },
    {
      question: "How can I earn loyalty points?",
      answer: "Join our SkyWings Rewards program to earn points on every booking. You'll also earn points through our hotel and car rental partners."
    }
  ];

  return (
    <section className="py-14 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            TRAVEL SUPPORT
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Quick answers to help you plan your journey with confidence
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 ${activeFAQ === index ? 'shadow-lg' : 'shadow'}`}
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none bg-gray-50 hover:bg-gray-100"
              >
                <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                <svg 
                  className={`w-6 h-6 text-blue-600 transition-transform duration-300 ${activeFAQ === index ? 'transform rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ${activeFAQ === index ? 'max-h-96 py-6' : 'max-h-0 py-0'}`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}

          <div className="text-center mt-12">
            <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition group">
              View all travel FAQs
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq_Section;