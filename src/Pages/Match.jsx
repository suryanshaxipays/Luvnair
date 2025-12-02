import Navbar_2 from "../Components/Navbar_2";
import Menu_bar from "../Components/Menu_bar";
import "../Styles/Match.css";
import femaleData from "../Data/female.json";
import { useNavigate, useLocation } from "react-router-dom";


const Matches = () => {
  // pick first 10 profiles from your JSON
  const matches = femaleData.results.slice(0, 10);
  const navigate = useNavigate();

  return (
    <div className="matches-page-container">
      <Navbar_2 />

      <h2 className="matches-title">Your Matches</h2>
      <p className="matches-subtitle">These people liked you back! Start a conversation ✨</p>

      <div className="matches-grid">
        {matches.map((m, index) => (
          <div key={index} className="match-card">
            
            {/* IMAGE */}
            <div className="match-img-wrapper">
              <img src={m.picture.large} alt="match" />
            </div>

            {/* DETAILS */}
            <h3>
              {m.name.first} {m.name.last}, {m.dob.age}
            </h3>

            <p className="match-location">
              📍 {m.location.city}, {m.location.country}
            </p>

            {/* BUTTON */}
            <button className="chat-btn"  onClick={() => navigate("/chat")}>Chat Now</button>
          </div>
        ))}
      </div>

      <Menu_bar />
    </div>
  );
};

export default Matches;
