import React from "react";
import heroImage from "../assets/hero-section-image.webp";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="text-content">
          <h1 className="hero-heading">Sell Your Unused Software Licenses</h1>
          <p className="hero-description">
            Easily turn your excess software licenses into cash quickly and
            securely.
          </p>
          <button className="cta-button">Sell My Licenses</button>
        </div>
        <div className="image-content">
          <img src={heroImage} alt="Hero Section" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
