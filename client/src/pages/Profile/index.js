import React from "react";
import "./style.css";
import NavBar from "../../components/NavBar";

function Profile(props) {
  return (
    <div className="mainContainer">
        <NavBar/>
        <h1>Hi! Im the Perfil page</h1>
    </div>
  );
}


export default Profile;