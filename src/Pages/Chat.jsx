import { useState } from "react";
import Navbar_2 from "../Components/Navbar_2";
import Menu_Bar from "../Components/Menu_bar";
import "../Styles/Chat.css";

// SAMPLE DATA (replace later with API)
const people = [
  {
    id: 1,
    name: "Teena Sharma",
    image: "https://i.pravatar.cc/150?img=47",
    lastMessage: "Hey! How are you?",
    messages: [
      { from: "them", text: "Hey! How are you?" },
      { from: "me", text: "I'm good, you?" },
      { from: "them", text: "Doing great 😄" }
    ]
  },
  {
    id: 2,
    name: "Aarushi",
    image: "https://i.pravatar.cc/150?img=32",
    lastMessage: "Let's talk?",
    messages: [
      { from: "them", text: "Let's talk?" },
    ]
  },
  {
    id: 3,
    name: "Sonia",
    image: "https://i.pravatar.cc/150?img=18",
    lastMessage: "You there?",
    messages: [
      { from: "them", text: "You there?" },
    ]
  }
];

const Chat = () => {
  const [activeChat, setActiveChat] = useState(null);
  const [input, setInput] = useState("");

  const openChat = (user) => {
    setActiveChat(user);
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    activeChat.messages.push({ from: "me", text: input });
    setInput("");
  };

  return (
    <div className="chat-page">
      <Navbar_2 title={activeChat ? activeChat.name : "Chats"} />

      {/* If user NOT selected → show chat list */}
      {!activeChat && (
        <div className="chat-list">
          {people.map((user) => (
            <div key={user.id} className="chat-card" onClick={() => openChat(user)}>
              <img src={user.image} className="chat-avatar" />
              <div className="chat-info">
                <h3>{user.name}</h3>
                <p>{user.lastMessage}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* If user selected → chat screen */}
      {activeChat && (
        <div className="chat-screen">
          <button className="back-btn" onClick={() => setActiveChat(null)}>
            ← Back
          </button>

          <div className="messages-area">
            {activeChat.messages.map((msg, i) => (
              <div
                key={i}
                className={`message ${msg.from === "me" ? "me" : "them"}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-input-box">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}

      <Menu_Bar />
    </div>
  );
};

export default Chat;
