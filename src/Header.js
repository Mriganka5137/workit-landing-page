import logo from "./assets/images/logo-light.svg";

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
    </div>
  );
}

export default Header;
