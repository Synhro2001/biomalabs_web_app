import React from 'react';

import "./CardItem.scss"

function CardItem(props) {
  return (
    <div className="biomalabs__cards-container_article">
      <div className="biomalabs__cards-container_article-image">
        <img src={props.src} alt="blogImage"/>
      </div>
      <div className="biomalabs__cards-container_article-content">
        <div>
          <p>{props.title}</p>
          <h3>{props.text}</h3>
        </div>
        <p>Read Full</p>
      </div>
    </div>
  );
}

export default CardItem;

