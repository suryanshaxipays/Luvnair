import "../Styles/Navbar_2.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../slices/authSlice";
import { useState, useEffect } from "react";
import UserIcon from "../Assets/user.png";
import proIcon from "../Assets/pro.png";

import profiles from "../Data/profiles";

const Navbar_2 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const isPremium = user?.isPremium;

  const [openMenu, setOpenMenu] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [showPremiumModal, setShowPremiumModal] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/Login");
  };

  useEffect(() => {
    if (!search.trim() || !isPremium) {
      setFilteredResults([]);
      return;
    }

    const s = search.toLowerCase();

    const results = profiles.filter((p) => {
      const name = p.name.toLowerCase();
      const city = p.city.toLowerCase();
      return name.includes(s) || city.includes(s);
    });

    setFilteredResults(results.slice(0, 8)); // show max 8 suggestions
  }, [search, isPremium]);

  const handleSearchChange = (e) => {
    if (!isPremium) {
      setShowPremiumModal(true);
      return;
    }
    setSearch(e.target.value);
  };

  const openProfile = (profile) => {
    navigate("/Profile?id=" + profile.id);
    setSearch("");
    setFilteredResults([]);
  };

  return (
    <div className="navbar2-container">

      {/* LEFT LOGO */}
      <div className="navbar2-left" onClick={() => navigate("/")}>
        <h2 className="navbar2-logo">Luvnair</h2>
      </div>

      {/* CENTER SEARCH */}
      <div className="navbar2-search">
        <input
          type="text"
          placeholder="Search profiles, matches..."
          className="navbar2-search-input"
          value={search}
          onChange={handleSearchChange}
        />

        {/* SEARCH DROPDOWN */}
        {filteredResults.length > 0 && (
          <div className="search-dropdown">
            {filteredResults.map((p, i) => (
              <div
                className="search-result-item"
                key={i}
                onClick={() => openProfile(p)}
              >
                <img src={p.image} alt="thumb" />
                <div>
                  <h4>{p.name}</h4>
                  <p>{p.city}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* RIGHT USER AREA */}
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
                <div className="dropdown-header" >
                  <img src={UserIcon} alt="user" className="dropdown-user-img" onClick={()=>navigate("/profile?id=me")}/>
                  <div>
                    <h4>Hey {user?.name}</h4>
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

      {/* PREMIUM MODAL */}
      {showPremiumModal && (
        <div className="premium-modal">
          <div className="premium-content">
            <h2>Premium Feature</h2>
            <p>
              Searching profiles is a premium feature! Upgrade now to unlock
              full search capabilities.
            </p>
            <div className="premium-buttons">
              <button
                onClick={() => navigate("/payment")}
                className="premium-btn"
              >
                Become Premium
              </button>
              <button
                onClick={() => setShowPremiumModal(false)}
                className="premium-close"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Navbar_2;
