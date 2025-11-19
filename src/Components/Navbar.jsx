import "../Styles/Navbar.css";
import Logo from "../Assets/Logo.png"; // change as needed

const Navbar = () => {
  return (
    <nav className="floating-navbar">
      {/* Left - Logo */}
      <div className="nav-left">
        <img src={Logo} alt="Logo" className="nav-logo" />
      </div>

      {/* Center - Menu */}
      <ul className="nav-center">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About Us</a></li>
                <li><a href="#faq">Feature</a></li>
        <li><a href="#testimonial">Testimonial</a></li>
                <li><a href="#faq">Pricing</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>

      {/* Right - Login */}
      <div className="nav-right">
        <button className="login-btn">Log In</button>
      </div>
    </nav>
  );
};

export default Navbar;
