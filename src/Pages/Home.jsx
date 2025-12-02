import { useEffect, useState } from "react";
import "../Styles/Home.css";

import Navbar from "../Components/Navbar";
import Hero from "../Components/Home/Hero";
import AboutUs from "../Components/Home/AboutUs";
import Testimonials from "../Components/Home/Testimonials";
import FeatureSection from "../Components/Home/FeatureSection";
import FAQ from "../Components/Home/FAQ";
import Footer from "../Components/Footer";

import Arrow from "../Assets/Arrow.png";
import ChatIcon from "../Assets/chatbot.png";
import ChatBotModal from "../Components/ChatBotModal";
import Logo from "../Assets/Logo.png"; // YOUR LOGO

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showChatBot, setShowChatBot] = useState(false);

  // Intro animation timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800); // logo animation duration

    return () => clearTimeout(timer);
  }, []);

  // Scroll visibility logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      if (sections.length > 2) {
        const secondSectionBottom =
          sections[2].offsetTop + sections[2].offsetHeight;

        setShowScrollTop(window.scrollY > secondSectionBottom - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>

      {/* ====== INTRO LOGO ANIMATION ====== */}
      {loading && (
        <div className="logo-intro">
          <img src={Logo} alt="logo" className="intro-logo" />
        </div>
      )}

      {/* ====== MAIN WEBSITE ====== */}
      {!loading && (
        <>
          <Navbar />

          <section id="hero">
            <Hero />
          </section>

          <section id="about">
            <AboutUs />
          </section>

          <section id="testimonials">
            <Testimonials />
          </section>

          <section id="FeatureSection">
            <FeatureSection />
          </section>

          <section id="faq">
            <FAQ />
          </section>

          <Footer />

          {/* Scroll To Top Button */}
          {showScrollTop && (
            <button className="scroll-to-top" onClick={scrollToTop}>
              <img src={Arrow} alt="Go to top" className="arrow-icon" />
            </button>
          )}

          {/* Chatbot Button */}
          {showScrollTop && (
            <button
              className="chatbot-button"
              onClick={() => setShowChatBot(true)}
            >
              <img src={ChatIcon} alt="Chat Bot" className="chatbot-icon" />
            </button>
          )}

          {showChatBot && (
            <ChatBotModal onClose={() => setShowChatBot(false)} />
          )}
        </>
      )}
    </div>
  );
};

export default Home;
