import "../Styles/Menu_bar.css";
import { useNavigate, useLocation } from "react-router-dom";

const Menu_bar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { name: "Home", path: "/platform" },
    { name: "Chat", path: "/chat" },
    { name: "Matches", path: "/match" },
  ];

  const activeIndex = tabs.findIndex((t) =>
    location.pathname.includes(t.path)
  );

  return (
    <div className="menu-bar-container">
      <div className="slider" style={{ left: `${activeIndex * 33.33}%` }}></div>

      {tabs.map((tab, index) => {
        const isActive = activeIndex === index;
        return (
          <button
            key={index}
            className={isActive ? "active" : ""}
            onClick={() => navigate(tab.path)}
          >
            {tab.name}
          </button>
        );
      })}
    </div>
  );
};

export default Menu_bar;
