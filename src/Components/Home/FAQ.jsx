import { useState } from "react";
import "../../Styles/FAQ.css";

const FAQ = () => {
  const faqs = [
    {
      question: "How does your matchmaking work?",
      answer:
        "Our AI analyzes behavior patterns, interests, personality traits, and profile compatibility scores to match you with the most suitable partners."
    },
    {
      question: "Is chatting completely free?",
      answer:
        "Yes! Basic chatting is free. However, premium features such as AI-assisted replies and boosted visibility require a subscription."
    },
    {
      question: "Can I trust the profiles on this platform?",
      answer:
        "All users go through a multi-layer verification process, including email, identity, and selfie verification to ensure authenticity."
    },
    {
      question: "How does your AI help in conversations?",
      answer:
        "Our AI suggests conversation starters, responses based on tone, and ice-breakers, making chats more natural and stress-free."
    },
    {
      question: "Can I hide or delete my profile?",
      answer:
        "Yes. You can pause, hide, or permanently delete your profile anytime from your settings page."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <p className="faq-subtitle">Common Questions</p>
        <h2 className="faq-title">Frequently Asked Questions</h2>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${openIndex === index ? "open" : ""}`}
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                {faq.question}
                <span className="faq-icon">{openIndex === index ? "-" : "+"}</span>
              </div>

              <div
                className="faq-answer"
                style={{
                  maxHeight: openIndex === index ? "200px" : "0px"
                }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
