import React from "react";
import "./style.css";
import WelcomeNavBar from "../../components/WelcomeNavBar/welcomeNavBar";
import Banner from "../../components/Banner/banner";
import Instructions from "../../components/Instructions/instructions";
import Summary from "../../components/Summary/summary";

function Welcome() {
    return (
      <div className="mainContainer">
        <WelcomeNavBar/>
        <br/>
        <Banner/>
        <h4>Sabor casero donde quiera que te encuentres</h4>
        <Summary/>
        <Instructions/>
        {/* <SocialMedia/>
        <Promos/> */}
        
      </div>
    );
  };

  export default Welcome