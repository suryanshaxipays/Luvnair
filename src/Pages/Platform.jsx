import { useState } from "react";
import Navbar_2 from "../Components/Navbar_2";
import Menu_bar from "../Components/Menu_bar";
import "../Styles/Platform.css";
import femaleData from "../Data/female.json";

const Platform = () => {
  const profiles = femaleData.results;

  const aboutTemplates = [
    "I’m a warm, caring and fun-loving person who believes in meaningful connections. I enjoy deep conversations, simple moments, and building something real with someone emotionally mature.",
    "Independent, confident and emotionally stable. I enjoy cafés, spontaneous trips and good energy. Looking for someone loyal, respectful and genuinely invested.",
    "Extroverted, enthusiastic and always smiling. I love friendships, late-night talks and ambitious minds. I avoid drama and value emotional intelligence.",
    "Soft-hearted but mentally strong. I love small gestures, honest communication and effort. Searching for someone who knows how to treat a partner right.",
    "Playful, romantic and deeply loyal. I enjoy long drives, laughter and meaningful relationships. Looking for someone sincere, caring and ready for real love."
  ];

  const [index, setIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState("");
  const [swipeLabel, setSwipeLabel] = useState("");

  const currentProfile = profiles[index];
  const aboutText = aboutTemplates[index % aboutTemplates.length];

  const nextProfile = () => {
    setTimeout(() => {
      setSwipeDirection("");
      setSwipeLabel("");
      if (index < profiles.length - 1) setIndex(index + 1);
    }, 350);
  };

  const handleReject = () => {
    setSwipeLabel("PASS");
    setSwipeDirection("left");
    nextProfile();
  };

  const handleAccept = () => {
    setSwipeDirection("right");
    setSwipeLabel("LIKE");

    const div = document.createElement("div");
    div.className = "super-match-popup";
    div.innerHTML = `
      <div class="match-glow"></div>
      <div class="match-circle"></div>
      <div class="match-particles"></div>

      <h1 class="match-title">It’s a Match</h1>
      <p class="match-sub">You both liked each other</p>
    `;
    document.body.appendChild(div);

    setTimeout(() => div.remove(), 1800);

    nextProfile();
  };

  return (
    <div className="platform-container">
      <Navbar_2 />

      <div className="profile-card-wrapper">

        {/* MAIN CARD */}
        <div className={`profile-card ${swipeDirection}`}>

          {/* SWIPE LABEL */}
          {swipeLabel && (
            <div className={`swipe-label ${swipeDirection}`}>
              {swipeLabel}
            </div>
          )}

          {/* LEFT IMAGE */}
          <div className="profile-left">
            <img src={currentProfile.picture.large} alt="profile" />
          </div>

          {/* RIGHT DETAILS */}
          <div className="profile-right">
            <h2>
              {currentProfile.name.first} {currentProfile.name.last},{" "}
              {currentProfile.dob.age}
            </h2>

            <p className="location">
              {currentProfile.location.city}, {currentProfile.location.country}
            </p>

            <h3 className="title">About Me</h3>
            <p className="bio">{aboutText}</p>

            <h3 className="title">More Details</h3>
            <ul className="details-list">
              <li><strong>Email:</strong> {currentProfile.email}</li>
              <li><strong>Phone:</strong> {currentProfile.phone}</li>
              <li><strong>Nationality:</strong> {currentProfile.nat}</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BUTTONS */}
        <div className="bottom-buttons">
          <button className="bottom-btn reject" onClick={handleReject}>
            Not Interested
          </button>
          <button className="bottom-btn accept" onClick={handleAccept}>
            Interested
          </button>
        </div>

      </div>

      <Menu_bar />
    </div>
  );
};

export default Platform;
