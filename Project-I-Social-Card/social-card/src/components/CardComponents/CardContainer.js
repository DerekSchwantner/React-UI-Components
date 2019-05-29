import React from "react";
import "./Card.css";
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

function CardContainer() {
  return (
    <div href="https://www.reactjs.org" className="card-container">
      <CardBanner />
      <CardContent />
    </div>
  );
}

export default CardContainer;
