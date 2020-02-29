import React, { Component } from 'react';
import Mapa from "../../components/Mapa/Mapa"
import AddressInput from "../../components/AddressInput/AddressInput"
import "./style.css";
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../../components/Firebase';
const SignUpPage = () => (
    <div>
        
        <SignUpForm />
    </div>
);
const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }
    onSubmit = event => {
        const { username, email, passwordOne } = this.state;
        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ error });
            });
        event.preventDefault();
    };
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;
        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';
        return (
            <div className="mainContainer" >
                <div className="blur"></div>
                <div className="container">
                    <div className="row login">
                        <div className="col s12 14 offset-14">
                            <div className="card">
                                <div className="card-action pink darken-1 white-text center-align">
                                    <h3>Registro</h3>
                                </div>
                                <div className="card-content left-align">
                                    <form onSubmit={this.onSubmit}>
                                        <input
                                            name="username"
                                            value={username}
                                            onChange={this.onChange}
                                            type="text"
                                            placeholder="¿Cuál es tu nombre?"
                                        />
                                        <input
                                            name="email"
                                            value={email}
                                            onChange={this.onChange}
                                            type="text"
                                            placeholder="e-mail"
                                        />
                                        <input
                                            name="passwordOne"
                                            value={passwordOne}
                                            onChange={this.onChange}
                                            type="password"
                                            placeholder="Escoge una contraseña"
                                        />
                                        <input
                                            name="passwordTwo"
                                            value={passwordTwo}
                                            onChange={this.onChange}
                                            type="password"
                                            placeholder="Confirma tu contraseña"
                                        />
                                        
                                        <button type="submit">Registrarme</button>
                                        {error && <p>{error.message}</p>}
                                    </form>
                                    {/* <div className="form-field">
                                        <label>¿Cuál es tu nombre?</label>
                                        <input type="text" id="username" autocomplete="off" />
                                    </div>
                                    <br />

                                    <div className="form-field">
                                        <label>Crea una contraseña</label>
                                        <input type="password" id="password" />
                                    </div>
                                    <br />


                                    <div className="form-field">
                                        <label>¿Cómo te contactamos?</label>
                                        <div className="contactinfo">
                                            <input placeholder="E-mail" type="text" id="contactinput" autocomplete="off" />
                                            <input placeholder="Número de teléfono" type="text" id="contactinput" autocomplete="off" />
                                        </div>
                                    </div>
                                    <br />

<<<<<<< HEAD
                                    <div className="form-field">
                                        <label>¿Dónde enviaremos tu comida?</label>
                                        <div className="addressfield">
                                            <input placeholder="Calle" type="text" id="addressinput" autocomplete="off" />
                                            <input placeholder="Número interior" type="text" id="addressinput" autocomplete="off" />
                                            <input placeholder="Número exterior" type="text" id="addressinput" autocomplete="off" />
                                        </div>
                                        <div>
                                            <input placeholder="Colonia" type="text" id="addressinput" autocomplete="off" />
                                            <input placeholder="Alcadía/Delegación" type="text" id="addressinput" autocomplete="off" />
                                            <input placeholder="Código Postal" type="text" id="addressinput" autocomplete="off" />
                                        </div>
                                    </div> */}
                                    <br />
=======
                            <div className="form-field">
                                <label>¿Donde enviaremos tu comida?</label>
                                <input placeholder="Dirección" type="text" id="addressinput" autocomplete="off"/>
                            </div>
                            <br/>
>>>>>>> origin

                                    <div id="mapa">
                                        <map >
                                            <Mapa />
                                        </map>
                                    </div>
                                    <br />
                                    <br />

                                    {/* <div className="form-field center-align">
                                        <button className="pink darken-1">Registrarme</button>
                                    </div> */}
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const SignUpLink = () => (
    <p>
        Don't have an account? <Link to='/signup'>Sign Up</Link>
    </p>
);
const SignUpForm = compose(
    withRouter,
    withFirebase,
)(SignUpFormBase);

export default SignUpPage;
export { SignUpForm, SignUpLink };