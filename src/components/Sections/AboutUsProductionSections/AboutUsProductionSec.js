import React from 'react'

import './AboutUsProductionSec.scss'

function AboutUsProductionSec() {
  return (
    <div className="about-us-production section__margin">
        <div className="landing-video">
            <div className="landing-video-article">
                <p>
                Biomalabs manufacturing facility is a modern complex located in Vadodara city, Gujarat.
                Complex equipment and personnel involved thereat enable effective production 
                of finished dosage forms, quick and reliable implementation of the cutting-edge processes.
                </p>
            </div>
            <div className="landing-video-content">
                <video src='videos/mov_production.mp4' height="450px" width="430px" autoPlay loop muted/>
            </div>
        </div>
    </div>
  )
}

export default AboutUsProductionSec