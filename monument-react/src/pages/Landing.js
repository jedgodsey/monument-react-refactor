import React from 'react';
import LandingHeader from '../components/LandingHeader';

import articleImageOne from '../images/article_1.jpg';

const Landing = (props) => {
  return (
    <>
      <LandingHeader />
      <img src={articleImageOne} />
    </>
  )
}

export default Landing
