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
         Discover connections that matter. Meet people who see you, value your heart, and share the spark that makes love meaningful.
        </p>

        <Link to="/Platform" className="btn btn-primary">
          Find My Match
        </Link>
      </div>
    </header>
  );
};

export default Hero;
