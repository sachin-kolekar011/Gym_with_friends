
import React, { useState } from "react";
import axios from "axios";
import '../styles/contact.css';

const Contact = () => {
  const [messageFormData, setMessageFormData] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    userMessage: "",
  });
  const [demoSessionData, setDemoSessionData] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    userMessage: "",
    demoSessionDate: "",
    demoSessionTime: "",
    demoPrefferedCity :""
  });

  const [activeForm, setActiveForm] = useState("contactForm");
  const [isProcessing, setIsProcessing] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const demoTimeOptions = [
    "6:00 AM", "7:00 AM", "8:00 AM", 
    "5:00 PM", "6:00 PM", "7:00 PM"
  ];

  const handleInputUpdate = (event) => {
    const { name, value } = event.target;
    if(activeForm === 'contactForm'){
      setMessageFormData(prev => ({...prev , [name] : value}))
    }
    else {
    setDemoSessionData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFormSubmission = async (event) => {
    event.preventDefault();
    setIsProcessing(true);

    const formData = activeForm === 'contactForm' ? messageFormData : demoSessionData;
    
    try {
      const apiEndpoint = activeForm === 'contactForm' 
        ? 'http://localhost:4000/postmessage' 
        : 'http://localhost:4000/bookdemo';
      
      const response = await axios.post(apiEndpoint, formData, {
        headers: { 'Content-Type': 'application/json' }
      });
      
      // Handle successful response
      if (response.status >= 200 && response.status < 300) {
        setSubmitStatus({
          success: true,
          message: activeForm === 'contactForm' 
            ? 'Message sent successfully!' 
            : 'Demo session booked! We will confirm shortly.'
        });
    
      
      if(activeForm === 'contactForm') {
      setMessageFormData({
        userName: "",
        userEmail: "",
        userPhone: "",
        userMessage: ""
      });
    }
    else {
      setDemoSessionData({
        userName: "",
        userEmail: "",
        userPhone: "",
        userMessage: "",
        demoSessionDate: "",
        demoSessionTime: "",
        demoPrefferedCity:"",
      });
    }
    
  }
      else 
      {
        throw new Error(response.data.message || 'Request succeeded but with unexpected response');
      }  
    } catch (error) {
      console.error('Submission error:', error);
    setSubmitStatus({
      success: false,
      message: error.response?.data?.message || 
              error.message || 
              'Submission failed. Please try again.'
    });
  
    } finally {
      setIsProcessing(false);
      setTimeout(() => setSubmitStatus(null), 4000);
    }
  };

  return (
    <section className="gym-contact-section" id="gym-contact">
      <div className="gym-contact-wrapper">
        <h2 className="gym-contact-main-title">GET IN <span>TOUCH</span></h2>
        
        <div className="gym-contact-switcher">
          <button 
            className={`gym-contact-switch-btn ${activeForm === 'contactForm' ? 'gym-active-tab' : ''}`}
            onClick={() => setActiveForm('contactForm')}
          >
            Contact Us
          </button>
          <button 
            className={`gym-contact-switch-btn ${activeForm === 'demoForm' ? 'gym-active-tab' : ''}`}
            onClick={() => setActiveForm('demoForm')}
          >
            Free Demo Session
          </button>
        </div>
        
        <div className="gym-contact-content-area">
          <div className="gym-contact-info-cards">
            <div className="gym-contact-info-unit">
              <div className="gym-contact-icon">📞</div>
              <h3 className="gym-contact-info-heading">Phone</h3>
              <p><a href="tel:+919738164646" className="gym-contact-link">+91 9738164646</a></p>
              <p className="gym-contact-detail">Krish Thamke (Owner)</p>
            </div>
            
            <div className="gym-contact-info-unit">
              <div className="gym-contact-icon">📍</div>
              <h3 className="gym-contact-info-heading">Location (Main Office)</h3>
              <p className="gym-contact-detail">Vishwa Gym</p>
              <p className="gym-contact-detail">Pune, Maharashtra</p>
              <p className="gym-contact-detail">India - 411001</p>
            </div>
            
            <div className="gym-contact-info-unit">
              <div className="gym-contact-icon">✉️</div>
              <h3 className="gym-contact-info-heading">Email</h3>
              <p><a href="mailto:contact@vishwagym.com" className="gym-contact-link">contact@vishwagym.com</a></p>
              <p className="gym-contact-detail">24-hour response</p>
            </div>
          </div>

          <div className="gym-contact-form-box">
            <h3 className="gym-contact-form-title">
              {activeForm === 'contactForm' 
                ? 'Send us your message' 
                : 'Schedule your free session'}
            </h3>
            
            {submitStatus && (
              <div className={`gym-form-alert ${submitStatus.success ? 'gym-success-alert' : 'gym-error-alert'}`}>
                {submitStatus.message}
              </div>
            )}
            
            <form onSubmit={handleFormSubmission} className="gym-contact-main-form">
              <div className="gym-form-field">
                <input 
                  type="text" 
                  placeholder="Full Name"
                  name="userName"
                  value={activeForm === 'contactForm' ? messageFormData.userName : demoSessionData.userName}
                  onChange={handleInputUpdate} 
                  required 
                  className="gym-form-input"
                />
              </div>
              
              <div className="gym-form-field">
                <input 
                  type="email" 
                  placeholder="Email Address"
                  name="userEmail"
                  value={activeForm === 'contactForm' ? messageFormData.userEmail : demoSessionData.userEmail}
                  onChange={handleInputUpdate}  
                  required 
                  className="gym-form-input"
                />
              </div>
              
              <div className="gym-form-field">
                <input 
                  type="tel" 
                  placeholder="Phone Number"
                  name="userPhone"
                  value={activeForm === 'contactForm' ? messageFormData.userPhone : demoSessionData.userPhone}
                  onChange={handleInputUpdate}
                  required
                  className="gym-form-input"
                />
              </div>
              
              {activeForm === 'demoForm' && (
                <>

                  <div className="gym-form-field">
                    <label className="gym-form-label">Select City</label>
                    <select
                      name="demoPrefferedCity"
                      value={demoSessionData.demoPrefferedCity}
                      onChange={handleInputUpdate}
                      required
                      className="gym-form-input"
                    >
                      <option value="" disabled>
                        Select a city
                      </option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Pune">Pune</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Bangalore">Bangalore</option>
                    
                    </select>
                  </div>
                  <div className="gym-form-field">
                    <label className="gym-form-label">Preferred Date</label>
                    <input 
                      type="date" 
                      name="demoSessionDate"
                      min={new Date().toISOString().split('T')[0]}
                      value={demoSessionData.demoSessionDate}
                      onChange={handleInputUpdate}
                      required
                      className="gym-form-input"
                    />
                  </div>
                  
                  
                  <div className="gym-form-field">
                    <label className="gym-form-label">Preferred Time</label>
                    <select 
                      name="demoSessionTime"
                      value={demoSessionData.demoSessionTime}
                      onChange={handleInputUpdate}
                      required
                      className="gym-form-select"
                    >
                      <option value="">Select time slot</option>
                      {demoTimeOptions.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </>
              )}
              
              
                <div className="gym-form-field">
                  <textarea 
                    placeholder="Your message here..."
                    rows="5"
                    name="userMessage"
                    value={activeForm === 'contactForm' ? messageFormData.userMessage : demoSessionData.userMessage}
                    onChange={handleInputUpdate} 
                    required
                    className="gym-form-textarea"
                  ></textarea>
                </div>
              
              
              <button 
                type="submit" 
                className="gym-form-submit-btn"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <span className="gym-submit-spinner"></span>
                ) : activeForm === 'contactForm' ? (
                  'Send Message'
                ) : (
                  'Book Free Demo'
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="gym-operational-info">
          <h3 className="gym-hours-title">GYM HOURS</h3>
          <ul className="gym-hours-list">
            <li className="gym-hours-item">
              <span className="gym-hours-days">Monday - Friday:</span> 
              <span className="gym-hours-time">5:30 AM - 10:30 PM</span>
            </li>
            <li className="gym-hours-item">
              <span className="gym-hours-days">Saturday - Sunday:</span> 
              <span className="gym-hours-time">7:00 AM - 9:00 PM</span>
            </li>
            <li className="gym-hours-item">
              <span className="gym-hours-days">Public Holidays:</span> 
              <span className="gym-hours-time">8:00 AM - 8:00 PM</span>
            </li>
          </ul>
        </div>
        
        <div className="gym-location-map">
          <iframe 
            title="Vishwa Gym Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588856372!2d73.85698241522172!3d18.562061287384868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c065144d8edf%3A0x3703b8095866c54b!2sShivaji%20Nagar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
            className="gym-map-iframe"
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;