import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import "../Styles/Footer.css";

// --- Images ---
import twitterIcon from "../Assets/twitter.png";
import Facebook from "../Assets/Facebook.png";
import instagramIcon from "../Assets/instagram.png";
import logo from "../Assets/Logo.png";
import PolicyModal from "./PolicyModal";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [modalContent, setModalContent] = useState(null);

  const socialLinks = [
    { src: twitterIcon, alt: "Twitter", href: "https://twitter.com" },
    { src: Facebook, alt: "Facebook", href: "https://facebook.com" },
    { src: instagramIcon, alt: "Instagram", href: "https://instagram.com" },
  ];

  const footerLinks = {
    Company: [
      { name: "Home", type: "section", target: "home" },
      { name: "About Us", type: "section", target: "about" },
      { name: "How It Works", type: "section", target: "how" },
      { name: "Testimonials", type: "section", target: "testimonials" },
      { name: "FAQ", type: "section", target: "faq" },
    ],
    Support: [
      { name: "Contact Us", type: "section", target: "contact" },
      { name: "Help Center", type: "section", target: "faq" },
      { name: "Safety Tips", type: "section", target: "safety" },
    ],
  };

  const handleLinkClick = (link) => {
    if (link.type === "route") {
      navigate(link.target);
    } else if (link.type === "section") {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const section = document.getElementById(link.target);
          if (section) section.scrollIntoView({ behavior: "smooth" });
        }, 400);
      } else {
        const section = document.getElementById(link.target);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const openModal = (type) => {
    const content = {
      "Terms And Conditions": {
        title: "Terms & Conditions",
        text: "By using our matchmaking platform, you agree to follow our safety guidelines and maintain respectful behavior.",
      },
      "Privacy Policy": {
        title: "Privacy Policy",
        text: "We value your privacy. All personal information is securely stored and never shared with third parties without consent.",
      },
      "Cookies Policy": {
        title: "Cookies Policy",
        text: "We use cookies to personalize your experience and improve platform performance.",
      },
    };
    setModalContent(content[type]);
  };

  const closeModal = () => setModalContent(null);

  return (
    <div className="footer-wrapper">
      
      {/* Footer Waves */}
      <div className="footer-waves">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <footer className="footer">
        <div className="footer-container">
          
          <div className="footer-grid">

            {/* ------- LEFT BRAND SECTION ------- */}
            <div className="footer-left">
              <div className="footer-brand">
                <img src={logo} alt="Logo" className="footer-logo" />
                <div className="footer-brand-text">
                  <h2 className="company-name">Luvnair</h2>
                 
                </div>
              </div>

              <p className="company-description">
                Luvnair is an AI-powered dating platform designed to match you with 
                people who truly align with your personality, lifestyle, and energy. 
                Smart matchmaking • Real conversations • Meaningful bonds.
              </p>

              <div className="footer-social">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                  >
                    <img src={social.src} alt={social.alt} className="footer-social-icon" />
                  </a>
                ))}
              </div>
            </div>

            {/* ------- RIGHT LINKS SECTION ------- */}
            <div className="footer-links">
              {Object.entries(footerLinks).map(([title, links]) => (
                <div key={title} className="footer-column">
                  <h3 className="footer-heading">{title}</h3>
                  <ul className="footer-list">
                    {links.map((link) => (
                      <li key={link.name}>
                        <button
                          className="footer-link"
                          onClick={() => handleLinkClick(link)}
                        >
                          {link.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>

          {/* ------- BOTTOM ROW ------- */}
          <div className="footer-bottom-row">
            <p className="footer-copy">© 2025 Lovora. All Rights Reserved.</p>

            <div className="footer-legal-links">
              {["Terms And Conditions", "Privacy Policy", "Cookies Policy"].map(
                (item) => (
                  <button
                    key={item}
                    className="footer-legal-link"
                    onClick={() => openModal(item)}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </footer>

      {modalContent && <PolicyModal content={modalContent} onClose={closeModal} />}
    </div>
  );
};

export default Footer;
