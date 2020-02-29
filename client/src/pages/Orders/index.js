import React, {Component} from "react";
import "./style.css";
import NavBar from "../../components/NavBar";
import Container from "../../components/Container";
import API from "../../utils/API";
import { withAuthorization } from '../../components/Session';

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
                      <div class="row">
                        <div class="col s10 10 offset-s1">
                            <div class="card pink darken-1 left-align">
                                <div class="card-content white-text">
                                    <div class="card__meta">
                                        <time>{order.OrderDate}</time>
                                    </div>
                                    <span class="card-title"style={{fontWeight:'bold'}}>Orden #{order.id}</span>
                    
                                    <span>Estatus de la orden: {order.OrderStatus}</span>
                                </div>
                                <div class="card-action">
                                    <span style={{fontWeight:'bold'}}>Monto total a pagar: ${order.totalPrice}</span>
                                    <br/>
                                    <a href="#" class="card-action-right" order-num={order.id} style={{color: 'black',fontWeight:'bold'}}>Detalle de la orden</a>
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


const condition = authUser => !!authUser;
export default withAuthorization(condition)(Orders);