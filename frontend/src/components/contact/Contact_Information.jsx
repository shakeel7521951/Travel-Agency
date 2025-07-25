import React from 'react'

const Contact_Information = () => {
  return (
   <section className="py-14 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              GET IN TOUCH
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              How Can We <span className="text-blue-600">Help You?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Whether you're planning your next adventure or need support, we're here 24/7
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                ),
                title: "Call Us",
                items: [
                  { label: "General Inquiries", value: "+1 (800) 123-4567" },
                  { label: "24/7 Support", value: "+1 (800) 987-6543" }
                ],
                color: "bg-blue-100 text-blue-600"
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                ),
                title: "Email Us",
                items: [
                  { label: "Customer Support", value: "support@skywings.com" },
                  { label: "Business Inquiries", value: "business@skywings.com" }
                ],
                color: "bg-purple-100 text-purple-600"
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                ),
                title: "Visit Us",
                items: [
                  { label: "Headquarters", value: "123 Aviation Way" },
                  { label: "Hours", value: "Mon-Fri: 9AM - 6PM" }
                ],
                color: "bg-green-100 text-green-600"
              }
            ].map((card, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`${card.color} p-6 text-center`}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    {card.items.map((item, i) => (
                      <li key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                        <p className="text-sm text-gray-500">{item.label}</p>
                        <p className="font-semibold text-gray-800">{item.value}</p>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition">
                    More Info
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Contact_Information;
