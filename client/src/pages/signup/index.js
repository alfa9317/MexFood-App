import React from "react";
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
                                <label for="username">¿Cuál es tu nombre?</label>
                                <input type="text" id="username" autocomplete="off"/>
                            </div>

                            <div className="form-field">
                                <label for="password">Crea una contraseña</label>
                                <input type="password" id="password"/>
                            </div>

                            <div className="form-field">
                                <label for="username">Ingresa tu e-mail</label>
                                <input type="text" id="email" autocomplete="off"/>
                            </div>

                            <div className="form-field">
                                <label for="username">Ingresa tu número de teléfono</label>
                                <input type="text" id="phonenumber" autocomplete="off"/>
                            </div>

                            <div className="form-field">
                                <label for="username">¿Dónde enviaremos tu comida?</label>
                                <input type="text" id="calle" autocomplete="off"/>
                                <input type="text" id="numeroext" autocomplete="off"/>
                                <input type="text" id="numeroint" autocomplete="off"/>
                                <input type="text" id="colonia" autocomplete="off"/>
                                <input type="text" id="delegacion" autocomplete="off"/>
                                <input type="text" id="ciudad" autocomplete="off"/>
                                <input type="text" id="zipcode" autocomplete="off"/>
                            </div><br/>
                            

                            <div className="form-field center-align">
                                <button className="pink darken-1">Registrarme</button>
                            </div><br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}


export default Signup;