import React from "react";
import "./style.css";

function NavBar(props) {
  return (
    <div className="mainContainer">
        <div id="navBar">
            <nav className=" pink darken-1">
                <div className="nav-wrapper">
                    <div className="container">
                    <a href="#" class="brand-logo"><img id= "navBarLogoImage" src="./assets/images/logo.png"/></a>
                    <a href="#" class="sidenav-trigger" data-target="slide_out_1"><i class="material-icons">menu</i></a>
                        <ul class="hide-on-med-and-down right">
                            <li class="active"><a href="/">Inicio</a></li>
                            <li><a href="/orders">Pedidos</a></li>
                            <li><a href="/about-us">Sobre nosotros</a></li>
                            <li>
                                <a href="#" data-target="slide_out_2" class="sidenav-trigger show-on-large">
                                    <img id = "navBarUserImage" className="circle" src="./assets/images/profilePic.jpg"/>
                                </a>
                            </li>
                         </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
  );
}


export default NavBar;