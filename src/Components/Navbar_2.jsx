import "../Styles/Navbar_2.css";
import { useNavigate } from "react-router-dom";

const Navbar_2 = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar2-container">
      <div className="navbar2-left" onClick={() => navigate("/")}>
        <h2 className="navbar2-logo">Luvnair 💘</h2>
      </div>

      <div className="navbar2-right">
        <button className="navbar2-profile-btn" onClick={() => navigate("/profile")}>
          Profile
        </button>
      </div>
    </div>
  );
};

export default Navbar_2;
