import React from 'react'
import Hero from '../components/about/Hero'
import Our_Story from '../components/about/Our_Story';
import Mission_Vision from '../components/about/Mission_Vision';
import Technology from '../components/about/Technology';
import Global_Presence from '../components/about/Global_Presence';

const About = () => {
  return (
    <div>
      <Hero/>
      <Our_Story/>
      <Mission_Vision/>
      <Technology/>
      <Global_Presence/>
    </div>
  )
}

export default About;
