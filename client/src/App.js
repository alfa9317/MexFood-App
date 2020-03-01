import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login"
import Home from "./pages/home"
import AboutUs from "./pages/aboutus"
import Menu from "./pages/menu"
import Orders from "./pages/Orders"
import Profile from "./pages/Profile"
import Signup from "./pages/signup"
import OrdersDetail from "./pages/OrdersDetail"
import Button from '@material-ui/core/Button'
import NavBar from "./components/NavBar"
import { withAuthentication } from '../../client/src/components/Session';
import PasswordForgetPage from '../src/components/PasswordForget/index';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/orders" component={Orders} />
        <Route path="/orders/detail/:id" component={OrdersDetail}/>
        <Route path="/pwd-forget" component={PasswordForgetPage} />
      </div>
    </Router>

  );
}

export default withAuthentication(App);
