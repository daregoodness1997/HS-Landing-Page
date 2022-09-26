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

function App() {
  return (
    <div>
      <HeroSection />
      <Header />
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
