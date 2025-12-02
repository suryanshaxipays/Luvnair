import React, { useState, useRef, useEffect } from 'react';
import '../../Styles/FeatureSection.css';

// ---- Correct Image Imports ----
import F1 from '../../Assets/F1.jpg';
import F2 from '../../Assets/F2.jpg';
import F3 from '../../Assets/F3.jpg';
import F4 from '../../Assets/F4.jpg';

// Mock data for the features
const features = [
  {
    id: 'match',
    name: 'Perfect Match',
    title: 'Find Your Ideal Partner Effortlessly',
    shortDesc:
      'Our algorithm connects you with people who truly fit your lifestyle and values.',
    longDesc:
      'Ditch the endless swiping. Our proprietary AI-driven matching system analyzes hundreds of data points, including your communication style, long-term goals, and even your favorite ice cream flavor, to suggest only the most compatible matches. Quality over quantity, guaranteed.',
    image: F1,
    alt: 'Couple holding hands',
  },
  {
    id: 'safety',
    name: 'Verified Safety',
    title: 'Your Security is Our Priority',
    shortDesc:
      'Advanced verification and reporting tools ensure a secure and respectful community.',
    longDesc:
      'We employ multi-layer security protocols, including photo verification and ID checks, to eliminate bots and catfishing. Our 24/7 moderation team actively monitors activity, and our one-click block/report feature empowers you to maintain a safe dating environment. Date with peace of mind.',
    image: F2,
    alt: 'Secure lock symbol',
  },
  {
    id: 'events',
    name: 'Local Events',
    title: 'Real Dates, Real Connections',
    shortDesc:
      'Join curated local events tailored to your interests and meet singles in person.',
    longDesc:
      'Beyond the screen, we offer exclusive access to speed dating, wine tasting, hiking groups, and more. Our local events are the perfect, low-pressure way to transition from chatting to dating and build genuine chemistry in a shared experience. Find your date night, pre-planned.',
    image: F3,
    alt: 'Group of people at a social event',
  },
  {
    id: 'insights',
    name: 'Dating Insights',
    title: 'Understand Your Dating Journey',
    shortDesc:
      'Get personalized feedback and tips to improve your profile and communication skills.',
    longDesc:
      'Our built-in analytics provide constructive insights into who is viewing your profile, your success rate with different prompts, and even suggestions on better opening lines. We offer free tips and coaching articles directly in the app to help you become a better dater.',
    image: F4,
    alt: 'Data analytics charts',
  },
];

const FeatureSection = () => {
  const [activeFeatureId, setActiveFeatureId] = useState(features[0].id);

  const pillRefs = useRef({});
  const sliderRef = useRef(null);

  const moveSlider = (id) => {
    const pill = pillRefs.current[id];
    const slider = sliderRef.current;
    if (pill && slider) {
      slider.style.width = `${pill.offsetWidth}px`;
      slider.style.transform = `translateX(${pill.offsetLeft}px)`;
    }
  };

  useEffect(() => {
    moveSlider(activeFeatureId);
    window.addEventListener("resize", () => moveSlider(activeFeatureId));
  }, [activeFeatureId]);

  const activeFeature = features.find((f) => f.id === activeFeatureId);

  return (
    <section className="feature-section">
      <div className="container">
        <header className="feature-header">
          <h2 className="feature-heading">
            <span role="img" aria-label="sparkle"></span> Why Choose Us?{' '}
            <span role="img" aria-label="sparkle"></span>
          </h2>
          <p className="feature-subheading">
            The modern way to find meaningful connections. Explore features
            designed for real love.
          </p>
        </header>

        {/* -------- PILL BAR WITH SLIDER -------- */}
        <div className="pill-bar-wrapper">
          <div className="pill-bar">
            <div ref={sliderRef} className="pill-slider" />
            {features.map((feature) => (
              <button
                key={feature.id}
                ref={(el) => (pillRefs.current[feature.id] = el)}
                className={`pill ${activeFeatureId === feature.id ? 'active' : ''}`}
                onClick={() => setActiveFeatureId(feature.id)}
              >
                {feature.name}
              </button>
            ))}
          </div>
        </div>

        {activeFeature && (
          <div className="feature-card-wrapper">
            <div className="feature-card" key={activeFeature.id}>
              <div className="feature-card-image-col">
                <img
                  src={activeFeature.image}
                  alt={activeFeature.alt}
                  className="feature-card-image"
                />
              </div>

              <div className="feature-card-content-col">
                <h3 className="feature-card-title">{activeFeature.title}</h3>
                <p className="feature-card-short-desc">{activeFeature.shortDesc}</p>
                <p className="feature-card-long-desc">{activeFeature.longDesc}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeatureSection;
