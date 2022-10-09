import React, { useState } from 'react';
import { Footer } from '.';
import Header from './Header';
import { motion, useScroll, useSpring } from 'framer-motion';
import Loader from './Loader';
import { Outlet } from 'react-router';

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 1500,
    restDelta: 0.001,
  });

  setTimeout(() => {
    setLoading(false);
  }, 2000);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className='relative bg-gray-50'>
          <motion.div className='progress-bar' style={{ scaleX }} />

          <Header />
          <Outlet />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Layout;
