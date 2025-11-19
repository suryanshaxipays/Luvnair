import "../Styles/Home.css";

import Navbar from "../Components/Navbar";
import Hero from "../Components/Home/Hero";
import AboutUs from "../Components/Home/AboutUs";
import Testimonials from "../Components/Home/Testimonials";
import FAQ from "../Components/Home/FAQ";
import Footer from "../Components/Footer";

const Home = () => {
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

      {/* Testimonials Section */}
      <section id="testimonials">
        <Testimonials />
      </section> 

      {/* FAQ Section (Add whenever ready) */}
      <section id="faq">
        <FAQ />
      </section> 

      {/* Footer */}
      { <Footer /> }
    </div>
  );
};

export default Home;
