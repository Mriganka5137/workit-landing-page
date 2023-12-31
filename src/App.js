import Header from "./Header";
import Testimonial from "./Testimonial";
import FeatureSet from "./FeatureSet";
import pattern1 from "./assets/images/bg-pattern-1.svg";
import pattern2 from "./assets/images/bg-pattern-2.svg";
import Social from "./Social";
import hero from "./assets/images/image-hero.webp";

function App() {
  return (
    <div className="container">
      <Header />
      <FeatureSet />
      <Testimonial />
      <img src={hero} alt="hero" className="hero-img" />

      <img src={pattern1} alt="pattern" className="pattern1" />
      <img src={pattern2} alt="pattern" className="pattern2" />
      <Social />
    </div>
  );
}

export default App;
