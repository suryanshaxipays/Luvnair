import { useEffect, useRef } from "react";
import "../../Styles/AboutUs.css";
import HeartArrow from "../../Assets/heartarrow.png";



import A from "../../Assets/A.jpg";
import B from "../../Assets/B.jpg";
import C from "../../Assets/C.jpg";

const AboutUs = () => {
  const lineRef = useRef(null);
  const fillRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    let requestId;

    const handleScroll = () => {
      if (!lineRef.current || !fillRef.current || !arrowRef.current) return;

      // Use requestAnimationFrame for 60fps performance
      requestId = requestAnimationFrame(() => {
        const line = lineRef.current;
        const rect = line.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Trigger point: Where on screen the filling should happen (center of screen)
        const triggerPoint = windowHeight / 2;

        let value = triggerPoint - rect.top;

        // Clamp values to bounds
        if (value < 0) value = 0;
        if (value > rect.height) value = rect.height;

        const progress = (value / rect.height) * 100;

        // Direct DOM update (No React Re-renders = No Lag)
        fillRef.current.style.height = `${progress}%`;
        arrowRef.current.style.top = `${progress}%`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Initial call to set position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(requestId);
    };
  }, []);

  return (
    <section className="about-wrapper">
      <h2 className="about-heading">How We Do It</h2>

      <div className="timeline-container">
        <div className="timeline-line" ref={lineRef}>
          {/* Fill Line */}
          <div className="timeline-fill" ref={fillRef}></div>

          {/* Moving Arrow */}
          <div className="timeline-arrow" ref={arrowRef}>
  <img src={HeartArrow} alt="Arrow" className="heart-arrow-img" />
</div>

        </div>

        <div className="steps">
          {/* STEP 1 */}
          <div className="step">
            <div className="step-block left-block">
              <img src={A} alt="Step 1" className="about-img" />
            </div>
            <div className="step-block right-block text-content">
              <h3>Create. Verify. Stand Out.</h3>
              <p>
                Begin your journey by registering and completing a fully verified profile. Your bio, interests, and preferences help the platform understand your personality, but we take it a step further by analyzing your lifestyle choices, communication style, and relationship expectations. This creates a stronger, more authentic foundation for meaningful matches.
              </p>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="step reverse">
            <div className="step-block left-block text-content">
              <h3>AI That Understands You.</h3>
              <p>
                Our smart matchmaking engine analyzes habits, profile choices, behavior patterns, and your preferences to compute a compatibility score. It continuously learns from your interactions, refining results over time to ensure you are shown profiles that genuinely align with your values, personality, and long-term intentions.
              </p>
            </div>
            <div className="step-block right-block">
              <img src={B} alt="Step 2" className="about-img" />
            </div>
          </div>

          {/* STEP 3 */}
          <div className="step">
            <div className="step-block left-block">
              <img src={C} alt="Step 3" className="about-img" />
            </div>
            <div className="step-block right-block text-content">
              <h3>Conversations That Matter.</h3>
              <p>
                Once matched, start chatting instantly. Our AI-powered assistant suggests conversation starters and smooth replies to help build meaningful connections, while also providing insights into shared interests and mutual compatibility. This ensures conversations feel natural, engaging, and easier to continue without awkward pauses.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;