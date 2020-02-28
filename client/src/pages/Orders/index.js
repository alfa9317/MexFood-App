import React, {Component} from "react";
import "./style.css";
import NavBar from "../../components/NavBar"
import API from "../../utils/API"

class Orders extends Component {

  state = {
    orders: []
  }

  componentDidMount = () =>{
    console.log("Holaaa");
    API.getOrders().then(res => {
      console.log(res);
    })
  }

  render(){
    return (
      <div className="mainContainer">
          <h1>Hi! Im the Pedidos page</h1>
      </div>
    );
  }
  
}


export default Orders;