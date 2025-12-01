import "../Styles/Navbar_2.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../slices/authSlice";
import { useState, useEffect } from "react";
import UserIcon from "../Assets/user.png";

// Import JSON data
import femaleData from "../Data/female.json";

const Navbar_2 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  const [openMenu, setOpenMenu] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/Login");
  };

  // ---------- LIVE SEARCH ----------
  useEffect(() => {
    if (!search.trim()) {
      setFilteredResults([]);
      return;
    }

    const s = search.toLowerCase();

    const results = femaleData.results.filter((person) => {
      const fullName = `${person.name.first} ${person.name.last}`.toLowerCase();
      const city = person.location.city.toLowerCase();
      const country = person.location.country.toLowerCase();

      return (
        fullName.includes(s) ||
        city.includes(s) ||
        country.includes(s)
      );
    });

    setFilteredResults(results.slice(0, 8)); // limit
  }, [search]);

  // CLICK RESULT → Navigate to Matches page with profile info
  const openProfile = (profile) => {
   navigate("/Profile?id=" + profile.login.uuid);
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
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* SEARCH RESULTS DROPDOWN */}
        {filteredResults.length > 0 && (
          <div className="search-dropdown">
            {filteredResults.map((p, i) => (
              <div
                className="search-result-item"
                key={i}
                onClick={() => openProfile(p)}
              >
                <img src={p.picture.thumbnail} />
                <div>
                  <h4>{p.name.first} {p.name.last}</h4>
                  <p>{p.location.city}, {p.location.country}</p>
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
                <div className="dropdown-header">
                  <img src={UserIcon} alt="user" className="dropdown-user-img" />
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
    </div>
  );
};

export default Navbar_2;
