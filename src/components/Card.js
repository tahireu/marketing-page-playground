import React from "react";

const Card = ({ color, heading, numeration, content }) => {
  return (
    <div style={{ backgroundColor: color, display: "inline-block", width: "840px", height: "900px" }}>
      <div>
        <h2>{heading}</h2>
        <span>{numeration}</span>
      </div>
      <div>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
