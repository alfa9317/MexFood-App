import React, { Component } from "react";
import "./style.css";
import FoodContainer from "../../components/FoodContainer"
import Wrapper from "../../components/Wrapper"
import NavBar from "../../components/NavBar";
import API from "../../utils/API";
import { Row, Col, Divider } from 'antd';
import { withAuthorization } from '../../components/Session';
import { renderComponent } from "recompose";

class Menu extends Component {
  
state = {
  entradas: [],
  guarniciones: [],
  platillos: [],
  postres: [],
  bebidas: [],
  complementos: []
}

componentDidMount = () =>{
  this.loadFoodCatalog();
}
loadFoodCatalog = () =>{
  console.log("Holaaa");
  API.getMenu(this.props.match.params.type).then(res => {
    console.log(res.data);
    var entradas = res.data.filter(food => food.Category === "entrada");
    var guarniciones = res.data.filter(food => food.Category === "guarnicion");
    var platillos = res.data.filter(food => food.Category === "platillo");
    var postres = res.data.filter(food => food.Category === "postre");
    var bebidas = res.data.filter(food => food.Category === "bebida");
    var complementos = res.data.filter(food => food.Category === "complemento");
    this.setState({entradas: entradas, guarniciones: guarniciones, platillos: platillos, postres:postres, bebidas: bebidas, complementos: complementos})
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
          <div className="menuContainer">
            {this.state.entradas.length ? (
              <Wrapper >
              <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>Entradas</Divider>
              {this.state.entradas.map(food => (
                <FoodContainer
                  handleClick={this.handleClick}
                  status={food.status}
                  id={food.id}
                  key={food.id}
                  name={food.FoodName}
                  image={food.Picture}
                />
              ))}
            </Wrapper>
              ) : (
                <></>
              )}
              {this.state.guarniciones.length ? (
                <Wrapper >
                <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>Guarniciones</Divider>
                {this.state.guarniciones.map(food => (
                  <FoodContainer
                    handleClick={this.handleClick}
                    status={food.status}
                    id={food.id}
                    key={food.id}
                    name={food.FoodName}
                    image={food.Picture}
                  />
                ))}
              </Wrapper>
                ) : (
                  <></>
                )}
                {this.state.platillos.length ? (
                  <Wrapper >
                  <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>Plato principal</Divider>
                  {this.state.platillos.map(food => (
                    <FoodContainer
                      handleClick={this.handleClick}
                      status={food.status}
                      id={food.id}
                      key={food.id}
                      name={food.FoodName}
                      image={food.Picture}
                    />
                  ))}
                </Wrapper>
                  ) : (
                    <></>
                  )}
                  {this.state.postres.length ? (
                    <Wrapper >
                    <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>Postres</Divider>
                    {this.state.postres.map(food => (
                      <FoodContainer
                        handleClick={this.handleClick}
                        status={food.status}
                        id={food.id}
                        key={food.id}
                        name={food.FoodName}
                        image={food.Picture}
                      />
                    ))}
                </Wrapper>
                  ) : (
                    <></>
                  )}
                {this.state.bebidas.length ? (
                  <Wrapper >
                  <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>Bebidas</Divider>
                  {this.state.bebidas.map(food => (
                    <FoodContainer
                      handleClick={this.handleClick}
                      status={food.status}
                      id={food.id}
                      key={food.id}
                      name={food.FoodName}
                      image={food.Picture}
                    />
                  ))}
                  </Wrapper>
                    ) : (
                      <></>
                    )}
                {this.state.complementos.length ? (
                  <Wrapper >
                  <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>Complementos</Divider>
                  {this.state.complementos.map(food => (
                    <FoodContainer
                      handleClick={this.handleClick}
                      status={food.status}
                      id={food.id}
                      key={food.id}
                      name={food.FoodName}
                      image={food.Picture}
                    />
                  ))}
                </Wrapper>
                  ) : (
                    <></>
                  )}
          </div>
      </div>
    );
  }
}


const condition = authUser => !!authUser;
export default withAuthorization(condition)(Menu);