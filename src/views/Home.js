import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const Home = () => {

  return (
     <>
       <div className="bgImageMobile">
       <Hero className="illustration-section-01 "/>
       <FeaturesTiles className="mt-32"/>
       </div>
       <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02"/>
       <Testimonial topDivider className="illustration-section-03"/>
       <Cta split/>
     </>
  );
}

export default Home;
