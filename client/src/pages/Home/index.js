import React from "react";
import NavBar from "../../components/NavBar"

import "./style.css";

function Home(props) {
  return (
    <div className="mainContainer">
       <NavBar/>
        <h1>Hi! Im the home page</h1>
    </div>
  );
}


export default Home;