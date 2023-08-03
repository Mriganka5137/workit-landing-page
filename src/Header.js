import logo from "./assets/images/logo-light.svg";
import hero from "./assets/images/image-hero.webp";

function Header() {
  return (
    <div className="header">
      <nav className="navbar">
        <img src={logo} alt="logo" />
        <p className="apply">Apply for access</p>
      </nav>
      <h1 className="primary-heading">
        Data <span> tailored</span> to
        <br /> your needs.
      </h1>
      <button className="btn-learn">Learn more</button>
      <img src={hero} alt="hero" className="hero-img" />
    </div>
  );
}

export default Header;
