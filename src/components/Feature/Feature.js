import React from 'react'

import "./Feature.scss"

const Feature = ({title, text}) => {
    return (
      <div className="biomalabs__features-container__feature">
        <div className="biomalabs__features-container__feature-title">
          <div />
          <h1>{title}</h1>
        </div>
        <div className="biomalabs__features-container__feature-text">
          <p>{text}</p>
        </div>
      </div>
    )
  }

export default Feature
