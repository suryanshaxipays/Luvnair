import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar_2 from "../Components/Navbar_2";
import Menu_Bar from "../Components/Menu_bar";
import "../Styles/Chat.css";
import profiles from "../Data/profiles";
import proIcon from "../Assets/pro.png";
import { syncPremiumFromStorage } from "../slices/authSlice";

const Chat = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  // Sync premium status
  useEffect(() => {
    dispatch(syncPremiumFromStorage());
  }, [dispatch]);

  const isPremium = user?.isPremium;

  const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

  const personaDescriptions = [
    "a sweet, shy girl who replies softly and warmly",
    "a bold, confident woman who speaks playfully",
    "a calm, mature woman who talks with depth",
    "a flirty, romantic girl who uses cute emojis",
    "an intelligent, soft-spoken woman",
  ];

  // Load chats from localStorage
  const loadSavedChats = () => {
    const saved = localStorage.getItem("savedChats");
    return saved ? JSON.parse(saved) : {};
  };

  const saveChats = (chatData) => {
    localStorage.setItem("savedChats", JSON.stringify(chatData));
  };

  const [savedChats, setSavedChats] = useState(loadSavedChats());

  const people = profiles.slice(0, 10).map((p, index) => ({
    id: p.id,
    name: p.name,
    age: p.age,
    image: p.image,
    personality: personaDescriptions[index % personaDescriptions.length],
    lastMessage: "Say hi",
    messages: savedChats[p.id] || [
      { from: "them", text: "Hey!" }
    ],
  }));

  const [activeChat, setActiveChat] = useState(null);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showPremiumModal, setShowPremiumModal] = useState(false);

  const openChat = (profile, index) => {
    if (!isPremium && index >= 2) {
      setShowPremiumModal(true);
      return;
    }
    setActiveChat(profile);
  };

  const updateSavedMessages = (chatId, newMessages) => {
    const updated = { ...savedChats, [chatId]: newMessages };
    setSavedChats(updated);
    saveChats(updated);
  };

  const sendMessage = async () => {
    if (!input.trim() || !activeChat) return;
    const text = input;
    setInput("");

    const updatedMessages = [...activeChat.messages, { from: "me", text }];
    activeChat.messages = updatedMessages;

    updateSavedMessages(activeChat.id, updatedMessages);
    setIsTyping(true);

    try {
      const userPrompt = `
  Act like a real human girl chatting on a dating app.
  You are ${activeChat.name}, age ${activeChat.age}, and you are ${activeChat.personality}.
  Reply in 1–2 sentences only.
  Make it natural, warm and human-like. No robotic tone.
  Do NOT mention you are AI.
  User says: ${text}
  `;

      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ role: "user", parts: [{ text: userPrompt }] }],
          }),
        }
      );

      const data = await res.json();

      const botReply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Aww sorry, I didn’t get that";

      const botMessages = [...activeChat.messages, { from: "them", text: botReply }];
      activeChat.messages = botMessages;
      updateSavedMessages(activeChat.id, botMessages);

    } catch {
      const failMsg = [...activeChat.messages, { from: "them", text: "Network issue baby, Try again…" }];
      activeChat.messages = failMsg;
      updateSavedMessages(activeChat.id, failMsg);
    }

    setIsTyping(false);
  };

  return (
    <div className="chat-wrapper">
      <Navbar_2 />

      <div className="chat-container">
        {/* LEFT LIST */}
        <div className="left-people-list">
          <h2 className="side-title">Matches</h2>
          <div className="scroll-area">
            {people.map((p, index) => {
              const locked = !isPremium && index >= 2;

              return (
                <div
                  key={p.id}
                  className={`person-card ${
                    activeChat?.id === p.id ? "active" : ""
                  } ${locked ? "premium-profile" : ""}`}
                  onClick={() => openChat(p, index)}
                >
                  <img src={p.image} className="person-avatar" alt="" />
                  <div>
                    <h3>{p.name}</h3>
                    <p>{p.lastMessage}</p>
                  </div>
                  {locked && (
                    <img
                      src={proIcon}
                      alt="pro"
                      className="pro-icon-profile"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT CHAT */}
        <div className="right-chat-area">
          {!activeChat && (
            <div className="empty-chat-screen">
              <h2>Start a Conversation</h2>
              <p>Select someone from your matches</p>
            </div>
          )}

          {activeChat && (
            <div className="chat-screen">
              <div className="chat-header">
                <img src={activeChat.image} alt="" />
                <div>
                  <h3>{activeChat.name}</h3>
                  <span>Online</span>
                </div>
              </div>

              <div className="messages-area">
                {activeChat.messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`message ${msg.from === "me" ? "me" : "them"} ${
                      !isPremium && people.indexOf(activeChat) >= 2
                        ? "premium-blur"
                        : ""
                    }`}
                  >
                    {!isPremium && people.indexOf(activeChat) >= 2 ? (
                      <>
                        Unlock Premium <img src={proIcon} alt="pro" className="pro-icon" />
                      </>
                    ) : (
                      msg.text
                    )}
                  </div>
                ))}

                {isTyping && <div className="message them typing">Typing…</div>}
              </div>

              <div className="chat-input-box">
                <input
                  type="text"
                  placeholder="Type a message…"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  disabled={!isPremium && people.indexOf(activeChat) >= 2}
                />
                <button
                  onClick={sendMessage}
                  disabled={!isPremium && people.indexOf(activeChat) >= 2}
                >
                  Send
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <Menu_Bar />

      {/* PREMIUM MODAL */}
      {showPremiumModal && (
        <div className="premium-modal">
          <div className="premium-content">
            <h2>Premium Feature</h2>
            <p>Unlock all profiles and chat freely with your matches! Become a premium member now.</p>
            <div className="premium-buttons">
              <button onClick={() => navigate("/payment")} className="premium-btn">Become Premium</button>
              <button onClick={() => setShowPremiumModal(false)} className="premium-close">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;