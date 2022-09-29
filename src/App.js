import './App.css';
import {
  CTA,
  Features,
  Footer,
  Header,
  Hero,
  HowItWorks,
  OurPlans,
  Testimonial,
  WhoItIs,
} from './components';
import HeroSection from './components/HeroSection';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 10,
    damping: 300,
    restDelta: 0.001,
  });
  return (
    <div className='relative bg-gray-50'>
      <motion.div className='progress-bar' style={{ scaleX }} />
      <Header />
      <HeroSection />
      <Hero />
      <Features />
      <HowItWorks />
      <WhoItIs />
      <OurPlans />
      <CTA />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
