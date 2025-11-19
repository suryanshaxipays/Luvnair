import "../../Styles/Hero.css";

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
        <h1 className="hero-title">Find your spark</h1>

        <p className="hero-subtitle">
          Forget endless swipes and shallow matches.  
          Meet people who actually resonate with your personality, energy, and intentions.
        </p>

        <a href="#features" className="btn btn-primary">
          Find My Match
        </a>

        
      </div>
    </header>
  );
};

export default Hero;
