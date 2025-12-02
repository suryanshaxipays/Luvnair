import "../../Styles/Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <header className="hero" id="hero">
      <div className="hearts-container">
        <div className="heart">♥</div>
        <div className="heart">♥</div>
        <div className="heart">♥</div>
        <div className="heart">♥</div>
        <div className="heart">♥</div>
        <div className="heart">♥</div>
        <div className="heart">♥</div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          Find your{" "}
          <span className="changing-word">
            <span>Spark</span>
            <span>Love</span>
            <span>Partner</span>
          </span>
        </h1>

        <p className="hero-subtitle">
          Forget endless swipes and shallow matches. Meet people who actually
          resonate with your personality, energy, and intentions.
        </p>

        <Link to="/Platform" className="btn btn-primary">
          Find My Match
        </Link>
      </div>
    </header>
  );
};

export default Hero;
