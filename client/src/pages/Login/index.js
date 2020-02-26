import React from "react";
import "./style.css";

function Login(props) {
  return (
    <div className="mainContainer">
        <div className="blur"></div>
        <div className="container">
            <div className="row login">
                <div className="col s8 8 offset-s2">
                    <div className="card">
                        <div className="card-action pink darken-1 white-text center-align">
                            <h3>Inicio de sesión</h3>
                        </div>
                        <div className="card-content left-align">
                            <div className="form-field">
                                <label for="username">Usuario</label>
                                <input type="text" id="username"/>
                            </div>
                            <div className="form-field">
                                <label for="password">Contraseña</label>
                                <input type="password" id="password"/>
                            </div><br/>
                            <div className="form-field">
                                <label>
                                    <input type="checkbox" />
                                    <span>Recuérdame</span>
                                </label>
                            </div><br/>
                            <div className="form-field center-align">
                                <button className="pink darken-1 waves-effect waves-light">Continuar</button>
                            </div><br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}


export default Login;