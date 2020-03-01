import React, {Component} from "react";
import "./style.css";
import NavBar from "../../components/NavBar";
import Container from "../../components/Container";
import API from "../../utils/API";

class OrdersDetail extends Component {

  state = {
    orderInfo: {},
    testID: -1
  }

  componentDidMount = () =>{
    this.loadOrder();
  }
  loadOrder = () =>{
    API.getOrder(this.props.match.params.id).then(res => {
      console.log(res);
      this.setState({orderInfo: res.data[0], testID: res.data[0].id})
      console.log(this.state.orderInfo)
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
          {this.state.testID !== -1 ? (
            <Container>
              <h1>{this.state.orderInfo.id}</h1>
              <h1></h1>
              <h1></h1>
              <h1></h1>
            </Container>
            ) : (
              <h3>No Results to Display</h3>
            )}
      </div>
    );
  }
  
}


export default OrdersDetail;