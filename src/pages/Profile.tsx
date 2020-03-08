import React, { Fragment } from 'react';
import { ContactForm } from '../components';
import { Projects, Employers, Languages, Summary, Interests, Skills, Education, Recommendations } from './components/profile';

export default (props: {
  profile: any,
  recommendations: any
}) => {
  const { profile, recommendations } = props;
  const { projects, employers, skills, summary, languages, education, interests, certifications } = profile;

  return (
    <Fragment>
      <Summary {...{ summary }} />
      <Skills {...{ ...{ certifications }, ...skills }} />
      <Projects {...{ projects }} />
      <Languages {...{ languages }} />
      <Employers {...{ employers }} />
      <Interests {...{ interests }} />
      <Education {...{ education }} />
      <Recommendations {...{ recommendations }} />
      <ContactForm />
    </Fragment>
  );
}