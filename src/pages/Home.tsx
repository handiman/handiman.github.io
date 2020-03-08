import React, { Fragment } from 'react';
import {  Usp, Recommendations, Links, Aside } from './components/home';

export default (props: {
  usps: any,
  recommendations: any,
  toggleContactForm: () => void
}) => {
  const { usps, recommendations, toggleContactForm } = props;
  return (
    <Fragment>
      <Usp {...{ usps }} />
      <Recommendations {...{ recommendations }} />
      <Links {...{ toggleContactForm }} />
      <Aside />
    </Fragment>
  );
}