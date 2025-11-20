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
import ChatIcon from "../Assets/chatbot.png"; // <-- Add chatbot icon png
import ChatBotModal from "../Components/ChatBotModal";

const Home = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showChatBot, setShowChatBot] = useState(false);

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
      {/* Floating Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about">
        <AboutUs />
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* Feature Section */}
      <section id="FeatureSection">
        <FeatureSection />
      </section>

      {/* FAQ */}
      <section id="faq">
        <FAQ />
      </section>

      {/* Footer */}
      <Footer />

      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <img src={Arrow} alt="Go to top" className="arrow-icon" />
        </button>
      )}

      {/* ChatBot Floating Button */}
      {showScrollTop && (
        <button
          className="chatbot-button"
          onClick={() => setShowChatBot(true)}
        >
          <img src={ChatIcon} alt="Chat Bot" className="chatbot-icon" />
        </button>
      )}

      {/* ChatBot Modal */}
      {showChatBot && <ChatBotModal onClose={() => setShowChatBot(false)} />}
    </div>
  );
};

export default Home;
