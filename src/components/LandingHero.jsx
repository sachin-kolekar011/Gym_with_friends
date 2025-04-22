// // src/components/LandingHero.jsx
// import React from 'react';
// import '../styles/landingPageStyles.css';
// import gymLogo from '../assets/indafit_logo.png';
// import { useNavigate } from 'react-router-dom';

// <img src={gymLogo} alt="logo" className="logo_icon" />

// const LandingHero = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="section_outerShell">
//       <div className="background_overlay">
//         <div className="logo_area">
//           <img
//             src={gymLogo} 
//             alt="logo" 
//             className="logo_icon"
            
            
//           />
//           <h2 className="text_tagline">WE ARE DEDICATED</h2>
//           <p className="text_subtag">Redefine Your Limits. Transform Your Life.</p>
//         </div>

//         <div className="text_contentBox">
//           <div className="banner_motto">Build your <span className="highlight_yellow">best physique</span></div>
//           <h1 className="primary_header">
//             <span className="text_get">GET</span> FIT. <br />
//             <span className="text_gain">GAIN</span> CONFIDENCE
//           </h1>
//           <button className="btn_cta" onClick={() => navigate('/about')}>
//               Explore Now
//                 </button>

//         </div>
//       </div>

//       <div className="section_bottomBar">
//         <h3 className="trust_headline">TRUST THE PROCESS AND TRANSFORM YOUR LIFE.</h3>
//         <p className="trust_paragraph">
//           CHOOSE FROM MY <strong>WORKOUT ESSENTIALS</strong> OR <strong>ULTIMATE TRANSFORMATION</strong> PROGRAM
//           AND JOIN THE ARMY OF OVER <strong>40,000 PEOPLE</strong> WHO ARE ALREADY SMASHING THEIR GOALS!
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LandingHero;


// src/components/LandingHero.jsx
import React from 'react';
import '../styles/landingPageStyles.css';
import gymLogo from '../assets/indafit_logo.png';
import { useNavigate } from 'react-router-dom';

const LandingHero = () => {
  const navigate = useNavigate();

  return (
    <div className="section_outerShell">
      <div className="background_overlay">
        <div className="logo_area">
          <img
            src={gymLogo} 
            alt="logo" 
            className="logo_icon"
          />
          <h2 className="text_tagline">WE ARE DEDICATED</h2>
          <p className="text_subtag">Redefine Your Limits. Transform Your Life.</p>
        </div>

        <div className="text_contentBox">
          <div className="banner_motto">
            Build your <span className="highlight_yellow">best physique</span>
          </div>
          <h1 className="primary_header">
            <span className="text_get">GET</span> FIT. <br />
            <span className="text_gain">GAIN</span> CONFIDENCE
          </h1>
          <button className="btn_cta" onClick={() => navigate('/about')}>
            Explore Now
          </button>
        </div>
      </div>

      <div className="section_bottomBar">
        <h3 className="trust_headline">
          TRUST THE PROCESS AND TRANSFORM YOUR LIFE.
        </h3>
        <p className="trust_paragraph">
          CHOOSE FROM MY <strong>WORKOUT ESSENTIALS</strong> OR{' '}
          <strong>ULTIMATE TRANSFORMATION</strong> PROGRAM AND JOIN THE ARMY OF
          OVER <strong>40,000 PEOPLE</strong> WHO ARE ALREADY SMASHING THEIR
          GOALS!
        </p>
      </div>
    </div>
  );
};

export default LandingHero;