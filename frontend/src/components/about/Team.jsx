import React from 'react';
import { FaGlobeAmericas, FaHeadset, FaRocket, FaUserShield } from 'react-icons/fa';
import { FiTwitter, FiLinkedin, FiInstagram, FiGithub } from 'react-icons/fi';

const Team = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-blue-400 filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-yellow-400 filter blur-3xl"></div>
      </div>
      
      <div className="absolute -top-24 left-0 right-0 h-24 bg-gradient-to-b from-blue-50 to-transparent transform skew-y-2 origin-top-left z-10"></div>
      
      <div className="container mx-auto px-6 relative z-20">
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 rounded-full">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">MEET THE TEAM</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            The <span className="text-blue-600">Passionate Minds</span> Behind Your Adventures
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-xl">
            Our dedicated team works tirelessly to craft your perfect travel experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              img: "https://randomuser.me/api/portraits/women/32.jpg",
              name: "Sarah Johnson",
              role: "CEO & Founder",
              bio: "15+ years transforming travel experiences",
              funFact: "Has visited 67 countries and counting!",
              icon: <FaGlobeAmericas className="text-blue-500 text-2xl" />,
              expertise: "Global Travel Expert"
            },
            {
              img: "https://randomuser.me/api/portraits/men/75.jpg",
              name: "Michael Chen",
              role: "Operations Director",
              bio: "Ensuring seamless journeys worldwide",
              funFact: "Speaks 5 languages fluently",
              icon: <FaHeadset className="text-green-500 text-2xl" />,
              expertise: "Multilingual Specialist"
            },
            {
              img: "https://randomuser.me/api/portraits/women/68.jpg",
              name: "Priya Patel",
              role: "Customer Experience",
              bio: "Making every trip unforgettable",
              funFact: "Certified scuba diving instructor",
              icon: <FaUserShield className="text-purple-500 text-2xl" />,
              expertise: "VIP Experience Curator"
            },
            {
              img: "https://randomuser.me/api/portraits/men/41.jpg",
              name: "David Kim",
              role: "Technology Lead",
              bio: "Innovating travel tech solutions",
              funFact: "Aviation geek with pilot license",
              icon: <FaRocket className="text-yellow-500 text-2xl" />,
              expertise: "Tech Innovation"
            }
          ].map((member, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col bg-white"
            >
              <div className="relative overflow-hidden h-80 flex-shrink-0">
                <img 
                  src={member.img} 
                  alt={member.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <div className="absolute -top-8 right-6 bg-white p-3 rounded-full shadow-lg">
                    {member.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{member.name}</h3>
                  <p className="text-yellow-400 font-medium">{member.role}</p>
                  <p className="text-blue-200 text-sm mt-1">{member.expertise}</p>
                </div>
              </div>
              <div className="bg-white p-6 flex-grow flex flex-col">
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="mt-auto">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl mb-4 border border-blue-100">
                    <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider mb-1">FUN FACT</p>
                    <p className="text-blue-900 font-medium">{member.funFact}</p>
                  </div>
                  <div className="flex space-x-4">
                    {[
                      { icon: <FiTwitter />, color: "text-blue-400" },
                      { icon: <FiLinkedin />, color: "text-blue-600" },
                      { icon: <FiInstagram />, color: "text-pink-500" },
                      { icon: <FiGithub />, color: "text-gray-700" }
                    ].map((social, i) => (
                      <a 
                        key={i}
                        href="#"
                        className={`${social.color} hover:opacity-80 transition-opacity bg-white p-2 rounded-full shadow-sm`}
                      >
                        <span className="sr-only">Social media</span>
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-full text-lg overflow-hidden group">
            <span className="relative z-10">Join Our Team</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute inset-0 rounded-full border-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Team;