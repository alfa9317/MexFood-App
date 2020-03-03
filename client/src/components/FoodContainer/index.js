import React from "react";
import "./style.css";

function FoodContainer(props) {
  return (
    <div className="card foodCard">
      <div className="img-container" status={props.status}>
        <img id='menuImage' alt={props.name} src={props.image} onClick={() => props.handleClick(props.id)}/>
      </div>
    </div>
  );
}

export default FoodContainer;