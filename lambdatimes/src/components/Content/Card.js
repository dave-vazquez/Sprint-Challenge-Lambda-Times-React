import React from "react";
import PropType from "prop-types";
const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img} alt="thing" />
        </div>
        <span>By {props.card.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

Card.propType = {
  headline: PropType.string,
  tab: PropType.string,
  img: PropType.string,
  author: PropType.string
};

export default Card;
