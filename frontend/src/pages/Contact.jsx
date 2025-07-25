import React from 'react'
import Hero from '../components/contact/Hero'
import Contact_Information from '../components/contact/Contact_Information';
import Contact_Form from '../components/contact/Contact_Form';
import Faq_Section from '../components/contact/Faq_Section';
import Travel_Specialists from '../components/contact/Travel_Specialists';

const Contact = () => {
  return (
    <div>
      <Hero/>
      <Contact_Information/> 
      <Contact_Form/> 
      <Faq_Section/> 
      <Travel_Specialists/> 
    </div>
  )
}

export default Contact;
