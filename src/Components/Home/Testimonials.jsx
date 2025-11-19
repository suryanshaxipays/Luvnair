import React from 'react';
import '../../Styles/Testimonials.css';

// ✅ Import images
import Couple1 from "../../Assets/Couple1.jpg";
import Couple2 from "../../Assets/Couple2.jpg";
import Couple3 from "../../Assets/Couple3.jpg";

const Testimonials = () => {
  // Data for the success stories
  const stories = [
    {
      name: "Notsl Dam",
      quote: "Wee vve svr enant tis yvunfvasd apole sokedvid to the dithcing land ants hwe four vig in your ingrehues.",
      image: Couple1,      // ⭐ Using imported image
      position: 'bottom-left'
    },
    {
      name: "Mathel Nam",
      quote: "Mooofoon the thv svsers forhoots the sttes or vvut nignt eadills with tis. Villiat man büng and deepevy dous mond thert that fnyvs.",
      image: Couple2,      // ⭐ Using imported image
      position: 'top-right'
    },
    {
      name: "Natlel Nam",
      quote: "Wee the yve solmee tam that bo ill to lose theet mant and bovite all the. I hte erpament be the ans lamv leildee trax ation wara prilits.",
      image: Couple3,      // ⭐ Using imported image
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
