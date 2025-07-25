import React from 'react';
import { FaGlobe, FaAward, FaLeaf, FaPlane, FaUsers } from 'react-icons/fa';

const Our_Story = () => {
  return (
    <section className="py-14 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-24 left-0 right-0 h-24 bg-gradient-to-b from-white to-blue-50 transform -skew-y-2 origin-top-right z-10"></div>
      <div className="absolute top-1/4 -right-20 w-64 h-64 rounded-full bg-blue-100 opacity-40 blur-3xl"></div>
      <div className="absolute bottom-1/3 -left-20 w-72 h-72 rounded-full bg-yellow-100 opacity-30 blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image Section */}
          <div className="lg:w-1/2 relative">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-yellow-400 rounded-2xl opacity-0 group-hover:opacity-50 blur-md transition-all duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Travel team"
                className="relative rounded-2xl shadow-2xl w-full h-auto transform group-hover:scale-102 transition-transform duration-500 z-10 border-4 border-white"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl w-2/3 z-20 group-hover:-translate-y-2 transition-transform duration-300">
                <div className="flex items-center">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-400 p-3 rounded-xl mr-4 text-white">
                    <FaUsers className="text-2xl" />
                  </div>
                  <div>
                    <p className="font-bold text-2xl text-blue-900">2M+</p>
                    <p className="text-sm text-gray-600 font-medium">Happy Travelers</p>
                  </div>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -top-6 -left-6 bg-yellow-400 text-white px-6 py-3 rounded-full shadow-lg font-bold text-sm transform rotate-6 group-hover:rotate-0 transition-transform duration-500">
                Since 2010
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="lg:w-1/2">
            <div className="inline-block mb-6 px-4 py-2 bg-yellow-400/10 rounded-full backdrop-blur-sm">
              <span className="text-yellow-600 font-bold uppercase tracking-wider">Our Journey</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Unforgettable Journeys</span> With Passion
            </h2>
            <p className="text-gray-600 mb-8 text-lg md:text-xl leading-relaxed">
              What began as a shared passion for exploration among three friends has blossomed into SkyWings, a premier travel agency redefining air travel experiences worldwide through innovation and personalized service.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  icon: <FaGlobe className="text-blue-600 text-xl" />,
                  title: "Global Network",
                  description: "Partnerships with 200+ airlines worldwide",
                  color: "bg-blue-100"
                },
                {
                  icon: <FaAward className="text-yellow-600 text-xl" />,
                  title: "Award-Winning",
                  description: "Recognized as Best Travel Agency 2023",
                  color: "bg-yellow-100"
                },
                {
                  icon: <FaLeaf className="text-green-600 text-xl" />,
                  title: "Sustainable Travel",
                  description: "Committed to eco-friendly tourism initiatives",
                  color: "bg-green-100"
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className={`${item.color} p-3 rounded-full mr-4 flex-shrink-0`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <FaPlane className="text-gray-300 transform -rotate-45" />
                  </div>
                </div>
              ))}
            </div>
            
            <button className="mt-10 relative inline-flex items-center px-6 py-2 sm:px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-full overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300">
              <span className="relative z-10 flex items-center">
                <FaPlane className="mr-3 transform -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                Explore Our Story
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating airplane decoration */}
      <div className="absolute bottom-20 right-20 hidden lg:block opacity-10">
        <FaPlane className="text-blue-400 text-8xl transform rotate-45" />
      </div>
    </section>
  )
}

export default Our_Story;