import { useState } from "react";
import Navbar_2 from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Styles/StoryPage.css";

import Couple1 from "../Assets/Couple11.jpg";
import Couple2 from "../Assets/Couple2.jpg";
import Couple3 from "../Assets/Couple3.jpg";
import Couple4 from "../Assets/Couple4.jpg";
import Couple5 from "../Assets/Couple5.jpg";

const dummyStories = [
  { id: 1, title: "How I Found My Match", snippet: "It all started with a simple hello on the app...", fullStory: "It all started with a simple hello on the app. After weeks of chatting, we decided to meet for coffee and instantly clicked. Today we are inseparable and happy!", image: Couple1 },
  { id: 2, title: "Love at First Sight", snippet: "I never believed in love at first sight until I met them...", fullStory: "I never believed in love at first sight until I met them at a friend's party. Our eyes met and I felt an instant connection. Months later, we are planning our future together.", image: Couple2 },
  { id: 3, title: "From Online Chat to Reality", snippet: "We started chatting online, and it turned into something magical...", fullStory: "We started chatting online, and it turned into something magical. We supported each other, laughed together, and eventually met in person. Today we are truly happy together.", image: Couple3 },
  { id: 4, title: "Our Journey Together", snippet: "From a first date to a forever love...", fullStory: "We met through the app, went on our first date, and immediately connected. Today, we are planning a life together and are grateful for this platform.", image: Couple4 },
  { id: 5, title: "Unexpected Romance", snippet: "I never thought a swipe would change my life...", fullStory: "I never thought a swipe would change my life. Meeting them was magical, and our bond has only grown since that day.", image: Couple5 },
  { id: 6, title: "How I Found My Match", snippet: "It all started with a simple hello on the app...", fullStory: "It all started with a simple hello on the app. After weeks of chatting, we decided to meet for coffee and instantly clicked. Today we are inseparable and happy!", image: Couple1 }
];

const StoryPage = () => {
  const [storyText, setStoryText] = useState("");
  const [storyImage, setStoryImage] = useState(null);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);

  const handleStorySubmit = (e) => {
    e.preventDefault();
    if (!storyText.trim()) return alert("Please write your story before submitting.");
    setShowSubmitModal(true);
    setStoryText("");
    setStoryImage(null);
  };

  return (
    <div className="storypage-wrapper">
      <Navbar_2 />

      {/* Share Section */}
      <section className="storypage-share">
        <div className="storypage-share-inner">
          <h2>Share Your Love Story</h2>
          <p>Inspire thousands by telling your beautiful journey.</p>

          <form className="storypage-form" onSubmit={handleStorySubmit}>
            <textarea
              placeholder="Write your story here..."
              value={storyText}
              onChange={(e) => setStoryText(e.target.value)}
            />

            {/* File Upload */}
            <label className="storypage-file-label">
              <span className="file-text">
                {storyImage ? storyImage.name : "Click to upload your couple photo"}
              </span>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setStoryImage(e.target.files[0])}
              />
            </label>

            <button type="submit">Submit Story</button>
          </form>
        </div>
      </section>

      {/* Submit Modal */}
      {showSubmitModal && (
        <div className="storypage-modal-overlay" onClick={() => setShowSubmitModal(false)}>
          <div className="storypage-modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Thank you for sharing!</h3>
            <p>Your story will be reviewed and published soon.</p>
            <button onClick={() => setShowSubmitModal(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Stories Section */}
      <section className="storypage-read">
        <h2>Read Inspiring Stories</h2>
        <h4 className="storypage-subheading">Real couples sharing their real experiences</h4>

        <div className="storypage-grid">
          {dummyStories.map((story) => (
            <div key={story.id} className="storypage-card" onClick={() => setSelectedStory(story)}>
              <img src={story.image} alt={story.title} />
              <h4>{story.title}</h4>
              <p>{story.snippet}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story Read Modal */}
      {selectedStory && (
        <div className="storypage-modal-overlay" onClick={() => setSelectedStory(null)}>
          <div className="storypage-modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedStory.title}</h3>
            <img src={selectedStory.image} alt={selectedStory.title} />
            <p>{selectedStory.fullStory}</p>
            <button onClick={() => setSelectedStory(null)}>Close</button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default StoryPage;
