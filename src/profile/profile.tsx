import React, { Fragment, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { getProfile, getRecommendations } from '../Api';
import Layout from './components/Layout';
import { ContactForm, Loading } from './components';
import { Projects, Employers, Languages, Summary, Interests, Skills, Education, Recommendations } from './components/profile';
import { CircularProgress } from '@material-ui/core';
import { useContactForm } from './components/ContactForm';

const Profile = () => {
  const [profile, setProfile] = useState<any>();
  const [recommendations, setRecommendations] = useState([]);
  const contactForm = useContactForm();

  useEffect(() => {
    getProfile().then(setProfile);
    getRecommendations().then(setRecommendations);
  }, []);

  if (profile) {
    const { projects, employers, skills, summary, languages, education, interests, certifications } = profile;

    return (
      <Layout showContactForm={contactForm.open} onHideContactForm={contactForm.hide} onToggleContactForm={contactForm.toggle}>
        <Summary {...{ summary }} />
        <Skills {...{ ...{ certifications }, ...skills }} />
        <Projects {...{ projects }} />
        <Languages {...{ languages }} />
        <Employers {...{ employers }} />
        <Interests {...{ interests }} />
        <Education {...{ education }} />
        <Recommendations {...{ recommendations }} />
        <ContactForm />
      </Layout>
    );
  }
  
  return <Loading />;
};

ReactDOM.render(<Profile />, document.getElementsByTagName('main')[0]);