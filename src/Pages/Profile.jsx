import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar_2 from "../Components/Navbar_2";
import profiles from "../Data/profiles";
import "../Styles/Profile.css";

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryId = new URLSearchParams(location.search).get("id");
  const { user } = useSelector((state) => state.auth);

  const [person, setPerson] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [reviewMessage, setReviewMessage] = useState("");

  const aboutGirls = [
    "Soft-hearted romantic who loves deep conversations and emotional warmth 💗",
    "Cheerful, expressive soul who values honesty & affection ✨",
    "Bubbly, emotional girl who loves meaningful bonds 🌸",
    "Sweet, feminine & caring — she falls for small gestures 💕",
    "Fun-loving, romantic, expressive — believes in magical chemistry 🌷"
  ];

  const personalityTags = [
    "Loyal", "Romantic", "Funny", "Caring", "Adventurous",
    "Soft-spoken", "Ambitious", "Affectionate", "Calm", "Creative"
  ];

  const interestOptions = [
    "Long drives", "Music", "Photography", "Reading", "Travel",
    "Dancing", "Coffee dates", "Fitness", "Beach walks", "Cooking"
  ];

  const matchScore = Math.floor(Math.random() * (97 - 82) + 82);

  /** IMAGE UPLOAD PREVIEW + SAVE */
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imgURL = URL.createObjectURL(file);
    setPreviewImage(imgURL);

    // UPDATE PERSON DATA
    setPerson((prev) => ({ ...prev, image: imgURL }));

    setReviewMessage(
      "Your photo is under review. We will make it live after checking our policy."
    );
  };

  /** LOAD PROFILE LOGIC */
  useEffect(() => {
    if (!queryId) return;

    // MY PROFILE SECTION
    if (queryId === "me") {
      // 1️⃣ CHECK LOCAL STORAGE FIRST
      const saved = localStorage.getItem("myProfile");
      if (saved) {
        setPerson(JSON.parse(saved));
        return;
      }

      // 2️⃣ IF NOTHING FOUND → CREATE EMPTY TEMPLATE
      const myProfile = {
        id: "me",
        name: user?.name || "",
        email: user?.email || "",
        age: "",
        gender: "",
        image: "",
        city: "",
        about: "",
        personality: [],
        interests: [],
        quick_facts: {
          job: "",
          education: "",
          lifestyle: "",
          work_style: ""
        }
      };

      setPerson(myProfile);
      return;
    }

    // OTHER PROFILES FROM JSON
    const idNum = Number(queryId);
    const match = profiles.find((p) => p.id === idNum);

    if (match) {
      const finalProfile = {
        ...match,
        about:
          match.about_me ||
          aboutGirls[Math.floor(Math.random() * aboutGirls.length)],
        personality: personalityTags.sort(() => 0.5 - Math.random()).slice(0, 5),
        interests: interestOptions.sort(() => 0.5 - Math.random()).slice(0, 6)
      };

      setPerson(finalProfile);
    }
  }, [queryId, user]);

  if (!person) return <div className="profile-loading">Loading profile…</div>;

  return (
    <div className="profile-page-container">
      <Navbar_2 />

      <div className="profile-wrapper">
        {/* EDIT BUTTON */}
        {person.id === "me" && (
          <button
            className="edit-btn"
            onClick={() => {
              if (isEditing) {
                // SAVE PROFILE TO LOCAL STORAGE
                localStorage.setItem("myProfile", JSON.stringify(person));
              }
              setIsEditing(!isEditing);
            }}
          >
            {isEditing ? "Save" : "Edit"}
          </button>
        )}

        {/* IMAGE SECTION */}
        <div className="gallery-container">
          {previewImage || person.image ? (
            <img
              src={previewImage || person.image}
              className="gallery-main"
              alt="Profile"
            />
          ) : (
            <div className="empty-image-box">No Image Added</div>
          )}

          {person.id === "me" && isEditing && (
            <>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="upload-input"
              />
              {reviewMessage && <p className="review-msg">{reviewMessage}</p>}
            </>
          )}
        </div>

        {/* NAME + AGE */}
        <div className="name-row">
          {isEditing ? (
            <input
              className="edit-input"
              value={person.name}
              onChange={(e) =>
                setPerson({ ...person, name: e.target.value })
              }
            />
          ) : (
            <h1 className="profile-title">
              {person.name} {person.age && `, ${person.age}`}
            </h1>
          )}

          <span className="verified-badge">✔ Verified</span>
        </div>

        {/* AGE */}
        {person.id === "me" && isEditing && (
          <input
            className="edit-input"
            placeholder="Enter Age"
            value={person.age}
            onChange={(e) =>
              setPerson({ ...person, age: e.target.value })
            }
          />
        )}

        {/* GENDER */}
        {person.id === "me" && isEditing && (
          <select
            className="edit-input"
            value={person.gender}
            onChange={(e) =>
              setPerson({ ...person, gender: e.target.value })
            }
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        )}

        {/* LOCATION */}
        <p className="profile-location">
          📍{" "}
          {isEditing ? (
            <input
              className="edit-input"
              placeholder="Enter City"
              value={person.city}
              onChange={(e) =>
                setPerson({ ...person, city: e.target.value })
              }
            />
          ) : (
            person.city || "Location not added"
          )}
        </p>

        {/* MATCH SCORE */}
        {person.id !== "me" && (
          <div className="match-score">💘 Match Score: {matchScore}%</div>
        )}

        {/* ABOUT SECTION */}
        <div className="profile-section">
          <h2 className="section-heading">
            {person.id === "me" ? "About Me" : "About Her"}
          </h2>

          {isEditing ? (
            <textarea
              className="edit-textarea"
              value={person.about}
              onChange={(e) =>
                setPerson({ ...person, about: e.target.value })
              }
            />
          ) : (
            <p className="section-text">{person.about || "Not added yet"}</p>
          )}
        </div>

        {/* PERSONALITY */}
        <div className="profile-section">
          <h2 className="section-heading">Personality</h2>
          <div className="tags-box">
            {person.personality.length > 0
              ? person.personality.map((tag, i) => (
                  <span className="tag" key={i}>{tag}</span>
                ))
              : "Not added yet"}
          </div>
        </div>

        {/* INTERESTS */}
        <div className="profile-section">
          <h2 className="section-heading">Interests</h2>
          <div className="tags-box">
            {person.interests.length > 0
              ? person.interests.map((tag, i) => (
                  <span className="tag interest" key={i}>{tag}</span>
                ))
              : "Not added yet"}
          </div>
        </div>

        {/* BASIC INFO */}
        <div className="profile-section">
          <h2 className="section-heading">Basic Information</h2>

          <div className="info-list">
            {/* JOB */}
            <p>
              <strong>Job:</strong>{" "}
              {isEditing ? (
                <input
                  className="edit-input"
                  value={person.quick_facts.job}
                  onChange={(e) =>
                    setPerson({
                      ...person,
                      quick_facts: {
                        ...person.quick_facts,
                        job: e.target.value
                      }
                    })
                  }
                />
              ) : (
                person.quick_facts.job || "Not added"
              )}
            </p>

            {/* EDUCATION */}
            <p>
              <strong>Education:</strong>{" "}
              {isEditing ? (
                <input
                  className="edit-input"
                  value={person.quick_facts.education}
                  onChange={(e) =>
                    setPerson({
                      ...person,
                      quick_facts: {
                        ...person.quick_facts,
                        education: e.target.value
                      }
                    })
                  }
                />
              ) : (
                person.quick_facts.education || "Not added"
              )}
            </p>

            {/* LIFESTYLE */}
            <p>
              <strong>Lifestyle:</strong>{" "}
              {isEditing ? (
                <input
                  className="edit-input"
                  value={person.quick_facts.lifestyle}
                  onChange={(e) =>
                    setPerson({
                      ...person,
                      quick_facts: {
                        ...person.quick_facts,
                        lifestyle: e.target.value
                      }
                    })
                  }
                />
              ) : (
                person.quick_facts.lifestyle || "Not added"
              )}
            </p>

            {/* WORK STYLE */}
            <p>
              <strong>Work Style:</strong>{" "}
              {isEditing ? (
                <input
                  className="edit-input"
                  value={person.quick_facts.work_style}
                  onChange={(e) =>
                    setPerson({
                      ...person,
                      quick_facts: {
                        ...person.quick_facts,
                        work_style: e.target.value
                      }
                    })
                  }
                />
              ) : (
                person.quick_facts.work_style || "Not added"
              )}
            </p>
          </div>
        </div>

        {/* MESSAGE BUTTON */}
        {person.id !== "me" && (
          <button
            className="message-btn"
            onClick={() => navigate(`/Chat?id=${person.id}`)}
          >
            Message Her
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
