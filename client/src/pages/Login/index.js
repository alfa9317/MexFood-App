import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { PasswordForgetLink } from '../../components/PasswordForget';
import { SignUpLink } from '../../components/SignUp';
import { withFirebase } from '../../components/Firebase';
import "./style.css";

const SignInPage = () => (
    <div>
     
        <SignInForm />
    </div>
);
const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }
    onSubmit = event => {
        const { email, password } = this.state;
        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
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
        const { email, password, error } = this.state;
        const isInvalid = password === '' || email === '';
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
                                <form onSubmit={this.onSubmit}>
                                    <input
                                        name="email"
                                        value={email}
                                        onChange={this.onChange}
                                        type="text"
                                        placeholder="Email Address"
                                    />
                                    <input
                                        name="password"
                                        value={password}
                                        onChange={this.onChange}
                                        type="password"
                                        placeholder="Password"
                                    />
                                    <PasswordForgetLink />
                                    <SignUpLink />
                                    <button className="pink darken-1 waves-effect waves-light" disabled={isInvalid} type="submit">
                                        Sign In
                                    </button>
                                    <br /><br />
                                    {error && <p>{error.message}</p>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        );
    }
}

const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);
export default SignInPage;
export { SignInForm };