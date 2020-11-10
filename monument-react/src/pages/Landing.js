import './Landing.css';
import React from 'react';
import LandingHeader from '../components/LandingHeader';
import Archive from '../components/Archive';
import About from '../components/About';
import Contact from '../components/Contact';
import Gallery from '../components/Gallery';

// import articleImageOne from '../images/article_1.jpg';
// import articleImageTwo from '../images/article_2.jpg';
// import articleImageThree from '../images/article_3.jpg';

const Landing = (props) => {
  return (
    <>
      <LandingHeader />
      <Archive />
      <About />
      <Gallery />
      <Contact />
    </>
  )
}

export default Landing
