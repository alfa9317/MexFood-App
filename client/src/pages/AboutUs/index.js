import React from "react";
import "./style.css";
import NavBar from "../../components/NavBar"
import { withAuthorization } from '../../components/Session';
import NavBar from "../../components/NavBar";
import FAQs from "../../components/FAQs/faqs";
import AboutContainer from "../../components/AboutContainer/aboutcontainer";
import ContactForm from "../../components/ContactForm/contactform";

function AboutUs() {
  return (
    <div className="mainContainer">
      <NavBar />
      <br/>
      <h1>Sobre Nosostros</h1>
      <div className="cardContainer">
        <AboutContainer/>
      </div>
      <div className="cardContainer">
      <FAQs/>
      </div>
      <div className="cardContainer">
      <ContactForm/>
      </div>
      <br/>
    </div>
  );
};


const condition = authUser => !!authUser;
export default withAuthorization(condition)(AboutUs);