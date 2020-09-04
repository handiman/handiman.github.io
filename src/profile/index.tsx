import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import {  Usp, Recommendations, Links, Aside } from './components/home';
import { getUsps, getRecommendations, ping } from '../Api';
import { useContactForm } from './components/ContactForm';

const Home = () => {
  const [usps, setUsps] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const contactForm = useContactForm();
  useEffect(() => {
    getUsps().then(setUsps);
    getRecommendations().then(setRecommendations);
    ping();
  }, []);
  
  return (
    <Layout showContactForm={contactForm.open} onHideContactForm={contactForm.hide} onToggleContactForm={contactForm.toggle}>
      <Usp {...{ usps }} />
      <Recommendations {...{ recommendations }} />
      <Links onToggleContactForm={contactForm.toggle} />
      <Aside />
    </Layout>
  );
}
 
ReactDOM.render(<Home />, document.getElementsByTagName('main')[0]);


