import { useState } from "react";
import "../Styles/ChatBotModal.css";

const ChatBotModal = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi love ❤️ How can I help you today?" },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

  const sendMessage = async () => {
    if (!input.trim()) return;
    if (!API_KEY) {
      alert("Gemini API key missing! Add it inside .env file.");
      return;
    }

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    const userInput = input;
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch(
  `https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [
        {
          role: "user",
          parts: [{ text: userInput }],
        },
      ],
    }),
  }
);


      const data = await res.json();
      console.log("Gemini response:", data);

      let botReply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry love, I didn’t understand that ❤️";

      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Network issue baby 💔 Try again…" },
      ]);
    }

    setIsLoading(false);
  };

  return (
    <div className="chatbot-modal-overlay">
      <div className="chatbot-modal">
        <div className="chatbot-header">
          <h3>💕 Luvnair ChatBot</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="chatbot-messages">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`chat-bubble ${msg.sender === "user" ? "user" : "bot"}`}
            >
              {msg.text}
            </div>
          ))}

          {isLoading && (
            <div className="chat-bubble bot loading-bubble">
              Thinking sweet thoughts…
            </div>
          )}
        </div>

        <div className="chatbot-input">
          <input
            type="text"
            placeholder={isLoading ? "Please wait..." : "Say something beautiful…"}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            disabled={isLoading}
          />
          <button onClick={sendMessage} disabled={isLoading}>
            {isLoading ? "..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBotModal;
