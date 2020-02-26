import React from "react";
import "./style.css";
import NavBar from "../../components/NavBar";

function Menu(props) {
  return (
    <div className="mainContainer">
        <NavBar/>
        <h1>Hi! Im the menu page</h1>
    </div>
  );
}


export default Menu;