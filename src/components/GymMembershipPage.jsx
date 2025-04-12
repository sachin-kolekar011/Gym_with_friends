

import React, { use, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaCheck, FaTimes, FaDumbbell, FaUsers, 
  FaCalendarAlt, FaHeartbeat, FaPlus, FaMinus,
  FaArrowRight, FaStar, FaQuoteLeft
} from 'react-icons/fa';
import '../styles/GymMembershipPage.css';

const GymMembershipPage = () => {
  const navigate = useNavigate();
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  const handleContactRedirect = () => {
    navigate('/contact');
  };

  const formatIndianPrice = (price) => {
    return new Intl.NumberFormat('en-IN').format(price);
  };

  const membershipPlans = [
    {
      name: "Starter",
      price: 599,
      popular: false,
      features: [
        { text: "Full gym access", included: true },
        { text: "Free weights area", included: true },
        { text: "Cardio equipment", included: true },
        { text: "Locker room", included: false },
        { text: "Personal training", included: false }
      ]
    },
    {
      name: "Pro",
      price: 999,
      popular: true,
      features: [
        { text: "All Starter benefits", included: true },
        { text: "Unlimited group classes", included: true },
        { text: "Locker room access", included: true },
        { text: "2 personal training sessions", included: true },
        { text: "Sauna access", included: false }
      ]
    },
    {
      name: "Elite",
      price: 1499,
      popular: false,
      features: [
        { text: "All Pro benefits", included: true },
        { text: "Unlimited premium classes", included: true },
        { text: "4 personal training sessions", included: true },
        { text: "Sauna and steam room", included: true },
        { text: "24/7 access", included: true }
      ]
    }
  ];

  const gymBenefits = [
    { icon: <FaDumbbell size={24} />, title: "Premium Equipment", description: "Cutting-edge machines and free weights maintained to the highest standards." },
    { icon: <FaUsers size={24} />, title: "Expert Coaching", description: "Certified trainers with personalized approach to help you reach your goals." },
    { icon: <FaCalendarAlt size={24} />, title: "Flexible Scheduling", description: "Open from 5AM to 11PM weekdays, 7AM-9PM weekends to fit your routine." },
    { icon: <FaHeartbeat size={24} />, title: "Holistic Approach", description: "Programs designed for strength, mobility, endurance and overall wellness." }
  ];

  const memberTestimonials = [
    { text: "After joining Elite, I transformed my body and health in ways I never thought possible. The trainers are exceptional!", author: "Tejas Dherange", rating: 5 },
    { text: "The variety of equipment and classes keeps every workout fresh and challenging. Best gym decision I've made!", author: "Mansingh Pawar", rating: 5 },
    { text: "Clean facilities, friendly staff, and top-notch equipment. The Pro membership gives me everything I need.", author: "Jyotiraditya Nehete", rating: 4 }
  ];

  const faqItems = [
    { question: "What's included in each membership tier?", answer: "All tiers include full gym access. Higher tiers add classes, training sessions, and premium amenities. See our plans for full details." },
    { question: "Can I upgrade or downgrade my plan?", answer: "Yes, you can change your plan anytime with 30 days notice. Upgrades take effect immediately, downgrades at next billing cycle." },
    { question: "Do you offer corporate or family discounts?", answer: "We offer 10% off for corporate groups (5+ members) and 15% family discounts. Contact us for details." },
    { question: "What's your cancellation policy?", answer: "Cancel anytime with 30 days notice. No long-term contracts or cancellation fees for monthly memberships." }
  ];

  return (
    <div className="fitness-membership-portal">
      {/* Hero Section */}
      <section className="fitness-hero-section">
        <div className="fitness-hero-content">
          <h1 className="fitness-hero-title">Elevate Your Fitness Journey</h1>
          <p className="fitness-hero-subtitle">World-class facilities, expert guidance, and a community that motivates</p>
          <button 
            className="fitness-cta-button"
            onClick={handleContactRedirect}
          >
            Book Free Demo Session <FaArrowRight className="cta-icon" />
          </button>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="fitness-plans-section">
        <div className="fitness-section-header">
          <h2 className="fitness-section-title">Tailored Membership Plans</h2>
          <p className="fitness-section-description">Find the perfect fit for your fitness goals and budget</p>
        </div>
        
        <div className="fitness-plans-grid">
          {membershipPlans.map((plan, index) => (
            <div key={index} className={`fitness-plan-card ${plan.popular ? 'fitness-featured-plan' : ''}`}>
              {plan.popular && <div className="fitness-plan-badge">Most Popular</div>}
              
              <div className="fitness-plan-header">
                <h3 className="fitness-plan-name">{plan.name}</h3>
                <div className="fitness-plan-price">
                  <span className="fitness-price-amount">₹{formatIndianPrice(plan.price)}</span>
                  <span className="fitness-price-term">/month</span>
                </div>
              </div>
              
              <ul className="fitness-plan-features">
                {plan.features.map((feature, i) => (
                  <li key={i} className="fitness-feature-item">
                    {feature.included ? 
                      <FaCheck className="fitness-feature-included" /> : 
                      <FaTimes className="fitness-feature-excluded" />}
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
              
              <button onClick= {() =>navigate('/membershipform')} className={`fitness-join-button ${plan.popular ? 'fitness-featured-button' : ''}`}>
                Join {plan.name}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Gym Benefits */}
      <section className="fitness-benefits-section">
        <div className="fitness-section-header">
          <h2 className="fitness-section-title">Why Our Members Love Us</h2>
          <p className="fitness-section-description">More than just a gym - a complete fitness ecosystem</p>
        </div>
        
        <div className="fitness-benefits-grid">
          {gymBenefits.map((benefit, index) => (
            <div key={index} className="fitness-benefit-card">
              <div className="fitness-benefit-icon">{benefit.icon}</div>
              <h3 className="fitness-benefit-title">{benefit.title}</h3>
              <p className="fitness-benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="fitness-testimonials-section">
        <div className="fitness-section-header">
          <h2 className="fitness-section-title">Success Stories</h2>
          <p className="fitness-section-description">Hear from our thriving community</p>
        </div>
        
        <div className="fitness-testimonials-grid">
          {memberTestimonials.map((testimonial, index) => (
            <div key={index} className="fitness-testimonial-card">
              <div className="fitness-testimonial-content">
                <FaQuoteLeft className="fitness-quote-icon" />
                <p className="fitness-testimonial-text">{testimonial.text}</p>
              </div>
              <div className="fitness-testimonial-footer">
                <div className="fitness-testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={`fitness-star-icon ${i < testimonial.rating ? 'fitness-star-filled' : 'fitness-star-empty'}`} 
                    />
                  ))}
                </div>
                <p className="fitness-testimonial-author">— {testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="fitness-faq-section">
        <div className="fitness-section-header">
          <h2 className="fitness-section-title">Common Questions</h2>
          <p className="fitness-section-description">Everything you need to know about joining</p>
        </div>
        
        <div className="fitness-faq-accordion">
          {faqItems.map((faq, index) => (
            <div key={index} className="fitness-faq-item">
              <div 
                className={`fitness-faq-question ${activeFaqIndex === index ? 'fitness-faq-active' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <h3>{faq.question}</h3>
                {activeFaqIndex === index ? <FaMinus /> : <FaPlus />}
              </div>
              {activeFaqIndex === index && (
                <div className="fitness-faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="fitness-cta-container">
          <p className="fitness-cta-text">Ready to start your fitness transformation?</p>
          <button 
            className="fitness-cta-button fitness-cta-large"
            onClick= {() =>navigate('/contact')}
          >
            Contact Us For a Free Demo <FaArrowRight className="cta-icon" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default GymMembershipPage;