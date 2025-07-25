import React from 'react'

const Contact_Form = () => {
  return (
    <section className="py-14 bg-gradient-to-br from-blue-900 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-white/20">
            <div className="p-10">
              <div className="text-center mb-10">
                <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
                  SEND US A MESSAGE
                </span>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Plan Your <span className="text-yellow-300">Next Adventure</span>
                </h2>
                <p className="text-white/80 max-w-xl mx-auto">
                  Our travel consultants will respond within 2 hours during business hours
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-5 py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 outline-none text-white placeholder-white/50 transition backdrop-blur-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-5 py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 outline-none text-white placeholder-white/50 transition backdrop-blur-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="destination" className="block text-sm font-medium text-white/80 mb-2">Destination Interest</label>
                  <select
                    id="destination"
                    className="w-full px-5 py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 outline-none text-white placeholder-white/50 transition backdrop-blur-sm appearance-none"
                  >
                    <option value="">Select a destination</option>
                    <option value="europe">Europe</option>
                    <option value="asia">Asia</option>
                    <option value="americas">Americas</option>
                    <option value="africa">Africa</option>
                    <option value="oceania">Oceania</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">Your Travel Plans</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    className="w-full px-5 py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 outline-none text-white placeholder-white/50 transition backdrop-blur-sm"
                    placeholder="Tell us about your dream trip..."
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input 
                      id="newsletter" 
                      name="newsletter" 
                      type="checkbox" 
                      className="h-4 w-4 text-yellow-400 focus:ring-yellow-300 border-white/30 rounded bg-white/5"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="newsletter" className="font-medium text-white/80">
                      Subscribe to our exclusive travel deals newsletter
                    </label>
                  </div>
                </div>

                <div>
                  <button 
                    type="submit" 
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 px-6 rounded-xl transition duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    Send Travel Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Contact_Form;
