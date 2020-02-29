import React from "react";
import "./style.css";
import NavBar from "../../components/NavBar"
import { withAuthorization } from '../../components/Session';

function AboutUs(props) {
  return (
    <div className="mainContainer">
        <NavBar/>
        <h1>Hi! Im the about us page</h1>
    </div>
  );
}


const condition = authUser => !!authUser;
export default withAuthorization(condition)(AboutUs);