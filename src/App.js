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

function App() {
  return (
    <div>
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
