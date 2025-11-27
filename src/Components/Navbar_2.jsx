import "../Styles/Navbar_2.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../slices/authSlice";
import { useState } from "react";
import UserIcon from "../Assets/user.png";

const Navbar_2 = () => {
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
    <div className="navbar2-container">

      {/* ---------- LEFT: LOGO ---------- */}
      <div className="navbar2-left" onClick={() => navigate("/")}>
        <h2 className="navbar2-logo">Luvnair</h2>
      </div>

      {/* ---------- CENTER: SEARCH BAR ---------- */}
      <div className="navbar2-search">
        <input
          type="text"
          placeholder="Search profiles, matches..."
          className="navbar2-search-input"
        />
      </div>

      {/* ---------- RIGHT: USER DROPDOWN ---------- */}
      <div className="navbar2-right">
        {!isAuth ? (
          <button className="navbar2-login-btn" onClick={() => navigate("/Login")}>
            Log In
          </button>
        ) : (
          <div className="navbar2-user-container">
            <img
              src={UserIcon}
              alt="user"
              className="navbar2-user-icon"
              onClick={() => setOpenMenu(!openMenu)}
            />

            {openMenu && (
              <div className="navbar2-user-dropdown">

                <div className="dropdown-header">
                  <img src={UserIcon} alt="user" className="dropdown-user-img" />
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
    </div>
  );
};

export default Navbar_2;
