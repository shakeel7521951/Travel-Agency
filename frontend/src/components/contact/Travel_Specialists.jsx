import React from 'react'

const Travel_Specialists = () => {
  return (
      <section className="py-14 bg-gray-50 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              MEET OUR SPECIALISTS
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-blue-600">Destination Experts</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Get personalized advice from our team of world travelers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "European Travel Specialist",
                image: "https://randomuser.me/api/portraits/women/32.jpg",
                expertise: "Italy, France, Spain",
                contact: "sarah@skywings.com"
              },
              {
                name: "Michael Chen",
                role: "Asian Travel Specialist",
                image: "https://randomuser.me/api/portraits/men/75.jpg",
                expertise: "Japan, Thailand, Vietnam",
                contact: "michael@skywings.com"
              },
              {
                name: "Priya Patel",
                role: "Luxury Travel Consultant",
                image: "https://randomuser.me/api/portraits/women/68.jpg",
                expertise: "Maldives, Dubai, Seychelles",
                contact: "priya@skywings.com"
              },
              {
                name: "David Kim",
                role: "Adventure Travel Expert",
                image: "https://randomuser.me/api/portraits/men/41.jpg",
                expertise: "New Zealand, Peru, Iceland",
                contact: "david@skywings.com"
              }
            ].map((expert, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={expert.image} 
                    alt={expert.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white">{expert.name}</h3>
                    <p className="text-yellow-300">{expert.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-sm text-gray-500">Specializes in:</p>
                    <p className="font-medium text-gray-800">{expert.expertise}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500">Contact:</p>
                    <p className="font-medium text-blue-600">{expert.contact}</p>
                  </div>
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    Email Specialist
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Travel_Specialists;
