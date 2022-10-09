import React from 'react';
import {
  CTA,
  Features,
  HeroSection,
  HowItWorks,
  OurPlans,
  Testimonial,
  WhoItIs,
} from '../components';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <HowItWorks />
      <WhoItIs />
      <OurPlans />
      <CTA />
      <Testimonial />
    </>
  );
};

export default Home;
