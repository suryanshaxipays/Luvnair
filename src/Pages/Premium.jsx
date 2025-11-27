import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Styles/Premium.css";
import { useNavigate } from "react-router-dom";


const Premium = () => {
    const navigate = useNavigate();

  return (
    <div className="premium-wrapper">
      <Navbar />

      {/* Header */}
      <section className="premium-header">
        <h1 className="premium-title">Upgrade to Premium</h1>
        <p className="premium-subtitle">
          Choose the perfect plan to unlock more love, more matches & more power.
        </p>
      </section>

      {/* Plans Section */}
      <section className="plans-section">

        {/* FREE PLAN */}
        <div className="plan-card">
          <h2 className="plan-title free">Free Plan</h2>
          <p className="plan-price">$0 / month</p>

          <ul className="plan-features">
            <li>✔ See and Share Stories</li>
            <li>✔ Chat with Matches</li>
          </ul>

          <button className="plan-btn free-btn">Current Plan</button>
        </div>

        {/* PREMIUM PLAN */}
        <div className="plan-card premium">
          <h2 className="plan-title premium">Premium Plan</h2>
          <p className="plan-price">$99 / month</p>

          <ul className="plan-features">
            <li>✔ AI Chatbot</li>
            <li>✔ AI Score Compatibility</li>
            <li>✔ Advanced Search</li>
            <li>✔ Includes All Free Features</li>
          </ul>

          <button className="plan-btn premium-btn" onClick={()=> navigate("/Payment")}>Upgrade Now</button>
        </div>

      </section>

      {/* AI Help Section */}
<section className="ai-help-section">
  <div className="ai-help-container">
    <h3 className="ai-subtitle">Smart Love. Smart Matchmaking.</h3>
    <h2 className="ai-title">How AI Helps You Find Your Soulmate </h2>

    <p className="ai-desc">
      Our advanced AI analyzes your behavior, interests, and compatibility patterns
      to recommend people who truly match your energy.
    </p>

    <div className="ai-features-grid">
      <div className="ai-feature-card">
        <h4>Smart Match Insights</h4>
        <p>AI compares your personality traits, lifestyle choices, and preferences to
          deliver highly accurate soulmate suggestions.</p>
      </div>

      <div className="ai-feature-card">
        <h4>Emotion-Aware Conversations</h4>
        <p>The AI bot guides you, helps you talk better, and boosts your confidence
          while chatting with potential matches.</p>
      </div>

      <div className="ai-feature-card">
        <h4>Compatibility Score</h4>
        <p>Get a detailed score showing how emotionally, mentally, and
          socially aligned you are with someone.</p>
      </div>
    </div>
  </div>
</section>


      <Footer />
    </div>
  );
};

export default Premium;
