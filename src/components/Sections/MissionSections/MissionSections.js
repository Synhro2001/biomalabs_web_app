import React from 'react'

import Feature from '../../Feature/Feature';

import './MissionSections.scss';

function MissionSections() {
  return (
    <div className='mission section__margin'>
   
        <div className="landing-video">
            <div className="landing-video-article">
                <p>
                    Our Mission — to benefit society by producing modern, effective, and high-quality drugs.
                </p>
            </div>
            <div className="landing-video-content">
                <video src='videos/mission.mp4' height="450px" width="430px" autoPlay loop muted/>
            </div>
        </div>
        <div className="biomalabs__mission  gradient__container__bg">
        <div className="biomalabs__mission-feature">
            <Feature 
                title="About BiomaLabs" 
                text="We respect people and the work they do. 
                It underlies our relationship with the company employees,
                patients, partners, and the medical community at large." 
            />
        </div>
        <div className="biomalabs__mission-heading">
            <h1 className="gradient__text">
                Our value
            </h1>
        </div>
        <div className="biomalabs__mission-container">
            <Feature 
                title="Honesty" 
                text="We act in compliance with the common ethical standards and rules of conduct. 
                Honesty is the cornerstone of our methods of communications and competition in the market." 
            />
             <Feature 
                title="Responsibility" 
                text="We all feel responsible for our workspace, and the quality of tasks carried out.
                We fulfill our duties with care and commitment.
                We take the greatest care for the safety and quality of our products." 
            />
             <Feature 
                title="Cooperation" 
                text="We value teamwork based on the knowledge and varied competencies of all the AKRIKHIN's employees.
                Together, we aim to reach our joint goals, supporting each other in the way to our objectives." 
            />
        </div>
    </div>
      
       
    </div>
  )
}

export default MissionSections
