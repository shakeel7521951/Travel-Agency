import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Customer_Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "SkyWings turned our honeymoon into a fairy tale! Their attention to detail was incredible.",
      author: "Alex & Jamie",
      location: "Bali, Indonesia",
      rating: 5,
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "As a frequent flyer, I've never experienced service like this. The SkyWings team is exceptional.",
      author: "Mohammed R.",
      location: "Dubai, UAE",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "Their last-minute booking saved my business trip. Flawless execution from start to finish!",
      author: "Sophia K.",
      location: "New York, USA",
      rating: 4,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "The family vacation package was perfect for us. Kids had a blast and we could actually relax!",
      author: "The Chen Family",
      location: "Tokyo, Japan",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "SkyWings found us amazing deals we couldn't find anywhere else. Will definitely use them again!",
      author: "David L.",
      location: "Paris, France",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "The personalized itinerary made our anniversary trip unforgettable. Every detail was perfect.",
      author: "Maria & Carlos",
      location: "Rome, Italy",
      rating: 5,
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    }
  ];

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);

  const nextTestimonials = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  const prevTestimonials = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };

  return (
    <section className="py-14 bg-white relative">
      <div className="absolute -top-24 left-0 right-0 h-24 bg-white transform -skew-y-2 origin-top-right z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-yellow-400 font-bold">TRAVELER STORIES</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            What Our <span className="text-blue-600">Customers Say</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Hear from travelers who've experienced the SkyWings difference
          </p>
        </div>
        
        <div className="relative">
          <button 
            onClick={prevTestimonials}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 z-20"
          >
            <FaChevronLeft className="text-gray-600 text-xl" />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative"
              >
                <div className="absolute -top-6 left-6 bg-yellow-400 text-white p-3 rounded-full">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path>
                  </svg>
                </div>
                <p className="text-gray-600 italic mb-6 text-lg">"{testimonial.quote}"</p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.author}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="absolute bottom-6 right-6 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={nextTestimonials}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 z-20"
          >
            <FaChevronRight className="text-gray-600 text-xl" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Customer_Testimonials;