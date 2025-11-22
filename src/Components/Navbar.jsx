import "../Styles/Navbar.css";
import Logo from "../Assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../slices/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/Login");
  };

  return (
    <nav className="floating-navbar">
      {/* ---------- Left: Logo ---------- */}
      <div className="nav-left" onClick={() => navigate("/")}>
        <img src={Logo} alt="Logo" className="nav-logo" />
      </div>

      {/* ---------- Center Menu ---------- */}
      <ul className="nav-center">
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#testimonials">Testimonial</a>
        </li>
        <li>
          <a href="#FeatureSection">Feature</a>
        </li>
        <li>
          <a href="#faq">Pricing</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
      </ul>

      {/* ---------- Right: Login / Username + Logout ---------- */}
      <div className="nav-right">
        {!isAuth ? (
          <button className="login-btn" onClick={() => navigate("/Login")}>
            Log In
          </button>
        ) : (
          <div className="loggedin-container">
            <span className="username-tag">
              Hi, {user?.name.split(" ")[0]} 💖
            </span>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
