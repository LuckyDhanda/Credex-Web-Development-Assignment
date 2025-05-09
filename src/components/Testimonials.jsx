import React, { useState } from "react";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaChevronLeft,
  FaChevronRight,
  FaUserCircle,
} from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    quote:
      "SoftSell transformed our revenue stream by making our software sales process seamless. The platform's intuitive interface and powerful analytics helped us grow our customer base by 35% in just three months.",
    name: "Sarah Johnson",
    role: "CTO",
    company: "DataFlow Systems",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "As an independent developer, I was struggling with monetizing my applications. SoftSell provided me with all the tools I needed to start selling professionally, from payment processing to license management.",
    name: "Michael Chen",
    role: "Indie Developer",
    company: "CodeCraft Solutions",
    rating: 4.5,
  },
  {
    id: 3,
    quote:
      "The customer support at SoftSell is unmatched. Whenever I had questions about implementing their API or configuring payment options, their team was responsive and incredibly helpful.",
    name: "Jessica Williams",
    role: "Product Manager",
    company: "InnovateTech",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "We switched to SoftSell after trying three other platforms, and it was the best decision we made. Their commission rates are fair, the reporting is comprehensive, and our sales increased by 42% year-over-year.",
    name: "David Rodriguez",
    role: "Sales Director",
    company: "AppGenius",
    rating: 4.5,
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const total = testimonials.length;

  const handleChange = (direction) => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) =>
        direction === "next" ? (prev + 1) % total : (prev - 1 + total) % total
      );
      setFade(true);
    }, 100);
  };

  const { quote, name, role, company, rating } = testimonials[index];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className="star filled" />);
      } else if (i === fullStars && hasHalf) {
        stars.push(<FaStarHalfAlt key={i} className="star half" />);
      } else {
        stars.push(<FaRegStar key={i} className="star empty" />);
      }
    }
    return stars;
  };

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What Our Customers Are Saying</h2>
      <div className="testimonial-container">
        <button className="nav-btn" onClick={() => handleChange("prev")}>
          <FaChevronLeft />
        </button>

        <div className={`testimonial-card ${fade ? "fade-in" : ""}`}>
          <div className="testimonial-header">
            <FaUserCircle className="user-icon" />
            <div className="author-details">
              <p className="testimonial-name">{name}</p>
              <p className="testimonial-role">{role}</p>
              <p className="testimonial-company">{company}</p>
              <div className="testimonial-stars">{renderStars(rating)}</div>
            </div>
          </div>
          <p className="testimonial-quote">“{quote}”</p>
        </div>

        <button className="nav-btn" onClick={() => handleChange("next")}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
