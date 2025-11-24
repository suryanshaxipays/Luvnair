import "../Styles/Menu_bar.css";
import { useNavigate } from "react-router-dom";

const Menu_bar = () => {
  const navigate = useNavigate();

  return (
    <div className="menu-bar-container">
      <button onClick={() => navigate("/platform")}>Home</button>
      <button onClick={() => navigate("/chat")}>Chat</button>
      <button onClick={() => navigate("/match")}>Matches</button>
    </div>
  );
};

export default Menu_bar;
