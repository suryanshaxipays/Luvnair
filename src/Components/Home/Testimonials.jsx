import '../../Styles/Testimonials.css';
import { useNavigate } from "react-router-dom";


// ✅ Import images
import Couple1 from "../../Assets/Couple1.jpg";
import Couple2 from "../../Assets/Couple2.jpg";
import Couple3 from "../../Assets/Couple3.jpg";

const Testimonials = () => {

    const navigate = useNavigate();


  // Data for the success stories
  const stories = [
  {
    name: "Notsl Dam",
    quote: "We have always seen that young people choose a good path and grow together in their life journey.",
    image: Couple1,
    position: 'bottom-left'
  },
  {
    name: "Mathel Nam",
    quote: "Many old stories tell how small steps at night can show a lot. Simple moments can make strong bonds between people.",
    image: Couple2,
    position: 'top-right'
  },
  {
    name: "Natlel Nam",
    quote: "We are the ones who see time change, but we do not lose hope. I believe staying loyal gives a calm and steady path.",
    image: Couple3,
    position: 'bottom-right'
  }
];


  return (
    <section className="success-stories-section">
      <div className="content-container">

        {/* Header Section */}
        <div className="header-box">
          <p className="match-couples-text">Luvnair Couples</p>
          <h1 className="success-stories-title">Success stories</h1>
          <p className="subtitle-text">
            Mart ate nert stilev san onderrley sb etties, thlts colov. 
            anen tvet to leart erpoy huis and and attble reda an you ponteries.
          </p>
          <button className="Share-btn" onClick={() => navigate("/StoryPage")}>
            Share Your Story
          </button>
        </div>

        {/* Cards */}
        <div className="cards-container">
          {stories.map((story, index) => (
            <div key={index} className={`story-card ${story.position}`}>
              <div className="quote-icon quote-start">“</div>

              <p className="quote-text">{story.quote}</p>

              <div className="card-footer">
                <div className="person-info">
                  <p className="person-name">{story.name}</p>
                </div>

                {/* ⭐ Real image */}
                <div className="image-wrapper">
                  <img 
                    src={story.image} 
                    alt={`${story.name}'s couple`} 
                    className="person-image"
                  />
                </div>
              </div>

              <div className="quote-icon quote-end">”</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
