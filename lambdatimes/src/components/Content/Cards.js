import React from "react";
import PropType from "prop-types";
import Card from "./Card";

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map((card, i) => (
        <Card key={i} card={card} />
      ))}
    </div>
  );
};

// Make sure you include prop types for all of your incoming props
Cards.propType = {
  card: PropType.shape({
    headline: PropType.string,
    tab: PropType.string,
    img: PropType.string,
    author: PropType.string
  })
};

export default Cards;
