import './App.css';
import {
  CTA,
  Features,
  Footer,
  Header,
  HeroSection,
  HowItWorks,
  OurPlans,
  Testimonial,
  WhoItIs,
} from './components';
import { motion, useScroll, useSpring } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Loader from './components/Loader';
import React, { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 300,
    restDelta: 0.001,
  });

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className='relative bg-gray-50'>
          <motion.div className='progress-bar' style={{ scaleX }} />
          <Header />
          <HeroSection />
          <Features />
          <HowItWorks />
          <WhoItIs />
          <OurPlans />
          <CTA />
          <Testimonial />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
