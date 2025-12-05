import { useState, useEffect } from "react";
import Navbar_2 from "../Components/Navbar_2";
import Menu_bar from "../Components/Menu_bar";
import "../Styles/Match.css";
import profiles from "../Data/profiles";  
import { useNavigate } from "react-router-dom";
import proIcon from "../Assets/pro.png"; 

const Matches = () => {
  const navigate = useNavigate();
  const [isPremium, setIsPremium] = useState(false); 
  const [showPremiumModal, setShowPremiumModal] = useState(false);

  
  const matches = profiles
    .filter((p) => p.gender === "female")
    .slice(0, 10);

  const openChat = (index) => {
    if (!isPremium && index >= 3) {
      setShowPremiumModal(true);
      return;
    }
    navigate("/chat");
  };

  return (
    <div className="matches-page-container">
      <Navbar_2 />

      <h2 className="matches-title">Your Matches</h2>
      <p className="matches-subtitle">
        These people liked you back! Start a conversation ✨
      </p>

      <div className="matches-grid">
        {matches.map((m, index) => {
          const locked = !isPremium && index >= 2;

          return (
            <div
              key={m.id}
              className={`match-card ${locked ? "premium-match" : ""}`}
              onClick={() => openChat(index)}
            >
              <div className="match-img-wrapper">
                <img src={m.image} alt={m.name} />
              </div>

              <h3>{m.name}, {m.age}</h3>
              <p className="match-location">📍 {m.city}</p>

              <button
                className="chat-btn"
                disabled={locked}
              >
                {locked ? "Premium" : "Chat Now"}
              </button>
            </div>
          );
        })}
      </div>

      <Menu_bar />

      {/* PREMIUM MODAL */}
      {showPremiumModal && (
        <div className="premium-modal">
          <div className="premium-content">
            <h2>Premium Feature</h2>
            <p>
              Unlock all matches and chat freely! Become a premium
              member now.
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

export default Matches;
