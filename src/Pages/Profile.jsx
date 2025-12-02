import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar_2 from "../Components/Navbar_2";
import femaleData from "../Data/female.json";
import "../Styles/Profile.css";

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const id = new URLSearchParams(location.search).get("id");

  const [person, setPerson] = useState(null);

  // Auto About
  const aboutGirls = [
    "Soft-hearted romantic who loves affection, deep conversations & emotional connection 💗",
    "Cheerful, expressive girl who believes in loyalty, real efforts & warmth ✨",
    "Bubbly emotional soul who loves meaningful bonds & honest intentions 🌸",
    "Sweet, feminine & caring — she falls for small gestures and sincerity 💕",
    "Fun-loving, romantic, expressive — believes in magical chemistry 🌷" 
  ];

  // Personality tags
  const personalityTags = [
    "Loyal", "Romantic", "Funny", "Caring", "Adventurous",
    "Soft-spoken", "Ambitious", "Affectionate", "Calm", "Creative"
  ];

  // Interests
  const interestOptions = [
    "Long drives", "Music", "Photography", "Reading", "Travel",
    "Dancing", "Coffee dates", "Fitness", "Beach walks", "Cooking"
  ];

  // Random match %
  const matchScore = Math.floor(Math.random() * (97 - 82) + 82);

  // Zodiac helper
  const getZodiac = (dateStr) => {
    const date = new Date(dateStr);
    const d = date.getDate();
    const m = date.getMonth() + 1;

    if ((m === 3 && d >= 21) || (m === 4 && d <= 19)) return "Aries ♈";
    if ((m === 4 && d >= 20) || (m === 5 && d <= 20)) return "Taurus ♉";
    if ((m === 5 && d >= 21) || (m === 6 && d <= 20)) return "Gemini ♊";
    if ((m === 6 && d >= 21) || (m === 7 && d <= 22)) return "Cancer ♋";
    if ((m === 7 && d >= 23) || (m === 8 && d <= 22)) return "Leo ♌";
    if ((m === 8 && d >= 23) || (m === 9 && d <= 22)) return "Virgo ♍";
    if ((m === 9 && d >= 23) || (m === 10 && d <= 22)) return "Libra ♎";
    if ((m === 10 && d >= 23) || (m === 11 && d <= 21)) return "Scorpio ♏";
    if ((m === 11 && d >= 22) || (m === 12 && d <= 21)) return "Sagittarius ♐";
    if ((m === 12 && d >= 22) || (m === 1 && d <= 19)) return "Capricorn ♑";
    if ((m === 1 && d >= 20) || (m === 2 && d <= 18)) return "Aquarius ♒";
    return "Pisces ♓";
  };

  useEffect(() => {
    if (!id) return;
    const match = femaleData.results.find(p => p.login.uuid === id);

    if (match) {
      match.about = aboutGirls[Math.floor(Math.random() * aboutGirls.length)];
      match.personality = personalityTags.sort(() => 0.5 - Math.random()).slice(0, 5);
      match.interests = interestOptions.sort(() => 0.5 - Math.random()).slice(0, 6);
      match.zodiac = getZodiac(match.dob.date);
      setPerson(match);
    }
  }, [id]);

  if (!person)
    return <div className="profile-loading">Loading profile…</div>;

  return (
    <div className="profile-page-container">
      <Navbar_2 />

      <div className="profile-wrapper">

        {/* GALLERY */}
        <div className="gallery-container">
          <img src={person.picture.large} className="gallery-main" />
          
        </div>

        {/* NAME & VERIFIED */}
        <div className="name-row">
          <h1 className="profile-title">
            {person.name.first} {person.name.last}, {person.dob.age}
          </h1>
          <span className="verified-badge">✔ Verified</span>
        </div>

        {/* LOCATION */}
        <p className="profile-location">
          📍 {person.location.city}, {person.location.country}
        </p>

        {/* MATCH SCORE */}
        <div className="match-score">💘 Match Score: {matchScore}%</div>

        {/* ZODIAC */}
        <div className="zodiac-box">{person.zodiac}</div>

        {/* ABOUT */}
        <div className="profile-section">
          <h2 className="section-heading">About Her</h2>
          <p className="section-text">{person.about}</p>
        </div>

        {/* PERSONALITY TAGS */}
        <div className="profile-section">
          <h2 className="section-heading">Personality</h2>
          <div className="tags-box">
            {person.personality.map((tag, i) => (
              <span className="tag" key={i}>{tag}</span>
            ))}
          </div>
        </div>

        {/* INTERESTS */}
        <div className="profile-section">
          <h2 className="section-heading">Interests</h2>
          <div className="tags-box">
            {person.interests.map((tag, i) => (
              <span className="tag interest" key={i}>{tag}</span>
            ))}
          </div>
        </div>

        {/* BASIC INFO */}
        <div className="profile-section">
          <h2 className="section-heading">Basic Information</h2>
          <div className="info-list">
            <p><strong>Email:</strong> {person.email}</p>
            <p><strong>Phone:</strong> {person.phone}</p>
            <p><strong>State:</strong> {person.location.state}</p>
            <p><strong>Date of Birth:</strong> {person.dob.date.slice(0,10)}</p>
          </div>
        </div>

        {/* MESSAGE BUTTON */}
        <button
          className="message-btn"
          onClick={() => navigate(`/Chat?id=${person.login.uuid}`)}
        >
          Message Her
        </button>

      </div>
    </div>
  );
};

export default Profile;
