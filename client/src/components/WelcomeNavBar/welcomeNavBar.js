import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function welcomeNavBar(props) {
    return (
        <div>
            <div id="navBar">
                <nav className=" pink darken-1">
                    <div className="nav-wrapper">
                        <div className="container">
                            <ul className="hide-on-med-and-down right">
                                <li><Link to="/signup">Registrarme</Link></li>
                                <li><Link to="/login">Sobre nosotros</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
};

export default welcomeNavBar