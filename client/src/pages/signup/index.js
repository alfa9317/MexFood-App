import React from "react";
import Mapa from "../../components/Mapa/Mapa"
import "./style.css";

function Signup() {
  return (
    <div className="mainContainer">
        <div className="blur"></div>
        <div className="container">
            <div className="row login">
                <div className="col s12 14 offset-14">
                    <div className="card">
                        <div className="card-action pink darken-1 white-text center-align">
                            <h3>Registro</h3>
                        </div>
                        <div className="card-content left-align">
                            <div className="form-field">
                                <label>¿Cuál es tu nombre?</label>
                                <input type="text" id="username" autocomplete="off"/>
                            </div>
                            <br/>

                            <div className="form-field">
                                <label>Crea una contraseña</label>
                                <input type="password" id="password"/>
                            </div>
                            <br/>


                            <div className="form-field">
                                <label>¿Cómo te contactamos?</label>
                                <div className="contactinfo">
                                    <input placeholder="E-mail" type="text" id="contactinput" autocomplete="off"/>
                                    <input placeholder="Número de teléfono" type="text" id="contactinput" autocomplete="off"/>   
                                </div>
                            </div>
                            <br/>

                            <div className="form-field">
                                <label>¿Dónde enviaremos tu comida?</label>
                                <div className="addressfield">
                                    <input placeholder="Calle" type="text" id="addressinput" autocomplete="off"/>
                                    <input placeholder="Número interior" type="text" id="addressinput" autocomplete="off"/>
                                    <input placeholder="Número exterior" type="text" id="addressinput" autocomplete="off"/>
                                </div>
                                <div>
                                    <input placeholder="Colonia" type="text" id="addressinput" autocomplete="off"/>
                                    <input placeholder="Alcadía/Delegación" type="text" id="addressinput" autocomplete="off"/>
                                    <input placeholder="Código Postal" type="text" id="addressinput" autocomplete="off"/>
                                </div>
                            </div>
                            <br/>

                            <div  id="mapa">
                                <map >
                                    <Mapa/>
                                </map>
                            </div>
                            <br/>
                            <br/>
                            
                            <div className="form-field center-align">
                                <button className="pink darken-1">Registrarme</button>
                            </div>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}


export default Signup;