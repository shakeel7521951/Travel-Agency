import React from 'react'
import Hero from '../components/about/Hero'
import Our_Story from '../components/about/Our_Story';
import Why_Choose from '../components/about/Why_Choose';
import Team from '../components/about/Team';
import Customer_Testimonials from '../components/about/Customer_Testimonials';

const About = () => {
  return (
    <div>
      <Hero/>
      <Our_Story/>
      <Why_Choose/>
      <Team/>
      <Customer_Testimonials/>
    </div>
  )
}

export default About;
