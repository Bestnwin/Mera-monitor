import 'bootstrap/dist/css/bootstrap.min.css';
import NavScrollExample from "./Components/Navbar";
import "./App.css";
import Example from './Components/hero';
import HeroSection from "./Components/herosection";
import SponsorList from "./Components/SponsorList";
import KeyFeatures from "./Components/keyFeature";
import LiveDemoSection from "./Components/LiveDemoSection";
import TestimonialPage from "./Components/testimonialPage";
import FeatureSection from "./Components/downloadsteps";
import Faq from "./Components/faq";
import Footer from "./Components/footer";

const App=()=>{
  return (<div className="space-y-0">
    <NavScrollExample />
    <HeroSection />
    <SponsorList />
    <KeyFeatures />
    <LiveDemoSection />
    
      <TestimonialPage />
      <FeatureSection />
      <Faq />
      <Footer />
  </div>);
};

export default App;