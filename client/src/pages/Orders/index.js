import React, {Component} from "react";
import "./style.css";
import NavBar from "../../components/NavBar";
import Container from "../../components/Container";
import API from "../../utils/API";
import { Link, Route } from "react-router-dom";

class Orders extends Component {

  state = {
    orders: [],

  }

  componentDidMount = () =>{
    this.loadOrders();
  }
  loadOrders = () =>{
    console.log("Holaaa");
    API.getOrders().then(res => {
      console.log(res);
      this.setState({orders: res.data})
    }).catch(err => console.log(err));
  }

  handleClick = (id) =>{
    
  }

  handleInputChange = event => {
    const {name,value} = event.target;
    this.setState({
      [name]: value
    });
  };

  render(){
    return (
      <div className="mainContainer">
          <NavBar/>
          <br/>
          <br/>
          {this.state.orders.length ? (
            <Container>
              {this.state.orders.map(order => {
                    return (
                      <div className="row">
                        <div className="col s10 10 offset-s1">
                            <div className="card pink darken-1 left-align">
                                <div className="card-content white-text">
                                    <div className="card__meta">
                                        <time>{order.OrderDate}</time>
                                    </div>
                                    <span className="card-title"style={{fontWeight:'bold'}}>Orden #{order.id}</span>
                    
                                    <span>Estatus de la orden: {order.OrderStatus}</span>
                                </div>
                                <div className="card-action">
                                    <span style={{fontWeight:'bold'}}>Monto total a pagar: ${order.totalPrice}</span>
                                    <br/>
                                    <br/>
                                    {/* <a href="#" class="card-action-right" order-num={order.id} style={{color: 'black',fontWeight:'bold'}} onClick={() => this.handleClick(order.id)}>Detalle de la orden</a> */}
                                    <Link to={`orders/detail/${order.id}`} role="button" className="btn btn-link card-action-right" style={{color: 'black',fontWeight:'bold'}}> Detalle de la orden</Link>
                                    <br/>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                    );
                  })}
          </Container>
            ) : (
              <h3>No Results to Display</h3>
            )}
      </div>
    );
  }
  
}


export default Orders;