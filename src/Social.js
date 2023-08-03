import Logo from "./assets/images/logo-dark.svg";
import facebook from "./assets/images/icon-facebook.svg";
import instagram from "./assets/images/icon-instagram.svg";
import twitter from "./assets/images/icon-twitter.svg";

function Social() {
  return (
    <footer className="footer">
      <img src={Logo} alt="logo" className="logo" />
      <div className="social">
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
        <img src={instagram} alt="instagram" />
      </div>
    </footer>
  );
}
export default Social;
