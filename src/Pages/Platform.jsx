import { useState } from "react";
import Navbar_2 from "../Components/Navbar_2";
import Menu_bar from "../Components/Menu_bar";
import "../Styles/Platform.css";

const Platform = () => {
  const profiles = [
    { name: "Aarohi", age: 22, img: "https://i.ibb.co/5G0Y1kG/girl1.jpg" },
    { name: "Meera", age: 24, img: "https://i.ibb.co/K0qhT4L/girl2.jpg" },
    { name: "Sara", age: 21, img: "https://i.ibb.co/5RpkWc2/girl3.jpg" },
  ];

  const [index, setIndex] = useState(0);

  const handleSwipeLeft = () => {
    if (index < profiles.length - 1) setIndex(index + 1);
  };

  const handleSwipeRight = () => {
    alert("🎉 It's a Match! Wooooow 💖");
    if (index < profiles.length - 1) setIndex(index + 1);
  };

  return (
    <div className="platform-container">
      <Navbar_2 />

      <div className="profile-card-wrapper">
        <div className="profile-card">

          {/* LEFT IMAGE */}
          <div className="profile-left">
            <img src={profiles[index].img} alt="profile" />
          </div>

          {/* RIGHT DETAILS */}
          <div className="profile-right">
            <h2>{profiles[index].name}, {profiles[index].age}</h2>

            <p className="bio">
              Looking for meaningful connections 💕  
            </p>

            <div className="swipe-buttons">
              <button className="reject" onClick={handleSwipeLeft}>👎</button>
              <button className="accept" onClick={handleSwipeRight}>❤️</button>
            </div>
          </div>

        </div>
      </div>

      <Menu_bar />
    </div>
  );
};

export default Platform;
