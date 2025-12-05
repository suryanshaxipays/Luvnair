import "../Styles/Navbar.css";
import Logo from "../Assets/Logo.png";
import UserIcon from "../Assets/user.png";     
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../slices/authSlice";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  const [openMenu, setOpenMenu] = useState(false);

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
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#testimonials">Testimonial</a></li>
        <li><a href="#FeatureSection">Feature</a></li>
        <li><a onClick={() => navigate("/Premium")}>Pricing</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>

      {/* ---------- Right: Login / User Dropdown ---------- */}
      <div className="nav-right">

        {!isAuth ? (
          <button className="login-btn" onClick={() => navigate("/Login")}>
            Log In
          </button>
        ) : (
          <div className="user-profile-container">
            <img
              src={UserIcon}
              alt="user"
              className="user-icon"
              onClick={() => setOpenMenu(!openMenu)}
            />

            {/* ---------- Dropdown Menu ---------- */}
            {openMenu && (
              <div className="user-dropdown">
                <div className="dropdown-header" >
                  <img src={UserIcon} alt="user" className="dropdown-user-img" onClick={()=>navigate("/profile?id=me")}/>
                  <div>
                    <h4>hey {user?.name}</h4>
                    <p>{user?.email}</p>
                  </div>
                </div>

                <button className="dropdown-logout" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
