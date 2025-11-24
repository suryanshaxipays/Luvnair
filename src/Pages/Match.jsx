import Navbar_2 from "../Components/Navbar_2";
import Menu_bar from "../Components/Menu_bar";
import "../Styles/Match.css";

const Matches = () => {
  const matches = [
    { name: "Aarohi", age: 22, img: "https://i.ibb.co/5G0Y1kG/girl1.jpg" },
    { name: "Meera", age: 24, img: "https://i.ibb.co/K0qhT4L/girl2.jpg" },
    { name: "Sara", age: 21, img: "https://i.ibb.co/5RpkWc2/girl3.jpg" },
  ];

  return (
    <div className="matches-page-container">
      <Navbar_2 />

      <h2 className="matches-title">Your Matches ❤️</h2>

      <div className="matches-grid">
        {matches.map((m, index) => (
          <div key={index} className="match-card">
            <img src={m.img} />
            <h3>{m.name}, {m.age}</h3>
            <button>Chat Now</button>
          </div>
        ))}
      </div>

      <Menu_bar />
    </div>
  );
};

export default Matches;
