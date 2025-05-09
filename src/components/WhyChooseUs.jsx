// src/components/WhyChooseUs.jsx
import React from "react";
import {
  MdThumbUp,
  MdSecurity,
  MdAccessTime,
  MdSupportAgent,
} from "react-icons/md";

const WhyChooseUs = () => (
  <section className="why-section">
    <h2 className="why-title">Why Choose Us?</h2>
    <div className="why-tiles-container">
      <div className="why-tile">
        <MdThumbUp className="why-icon" />
        <h3 className="why-heading">Trusted Experts</h3>
        <p className="why-description">
          Years of experience in software resale and valuation.
        </p>
      </div>
      <div className="why-tile">
        <MdSecurity className="why-icon" />
        <h3 className="why-heading">Secure Process</h3>
        <p className="why-description">
          Your data and transactions are fully protected.
        </p>
      </div>
      <div className="why-tile">
        <MdAccessTime className="why-icon" />
        <h3 className="why-heading">Fast Payment</h3>
        <p className="why-description">Get paid within 24 hours of approval.</p>
      </div>
      <div className="why-tile">
        <MdSupportAgent className="why-icon" />
        <h3 className="why-heading">24/7 Support</h3>
        <p className="why-description">
          We're always here to help, anytime you need us.
        </p>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
