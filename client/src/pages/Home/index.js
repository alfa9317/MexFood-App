import React from "react";
import NavBar from "../../components/NavBar"
import { Carousel } from 'antd';
import { Row, Col} from 'antd';
import { withAuthorization } from '../../components/Session';
import desayuno from './homeImages/desayuno.png'
import comida from './homeImages/comida.png'
import vegetariano from './homeImages/salad.png'
import slide1 from './homeImages/slide-desayunosrosa.jpg'
import slide2 from './homeImages/slide-emapques.jpg'
import slide3 from './homeImages/slide-pagotarjeta.jpg'
import slide4 from './homeImages/slide-vegerariano2.jpg'

import "./style.css";

function Home(props) {
  return (
  <div className="mainHomeContainer">
      <NavBar/>
        <Carousel autoplay>
            <div>
            <img src={slide1}/>
            </div>
            <div>
            <img src={slide2}/>
            </div>
            <div>
            <img src={slide3}/>
            </div>
            <div>
            <img src={slide4}/>
            </div>
        </Carousel>
        <Row style={{marginTop:'20px'}}>
            <Col xs={{ span: 24, offset: 0 }} sm={{ span: 24, offset: 0 }} md={{ span: 8, offset: 0 }} lg={{ span: 8, offset: 0 }} xl={{ span: 8, offset: 0 }}>
            <a href="/menu/desayuno"><button className="button"><img src={desayuno} alt="menuImage" style={{width: '5vw', height: 'auto'}}/><br/><br/>Desayunos</button></a>
            </Col>
            <Col xs={{ span: 24, offset: 0 }} sm={{ span: 24, offset: 0 }} md={{ span: 8, offset: 0 }} lg={{ span: 8, offset: 0 }} xl={{ span: 8, offset: 0 }}>
            <a href="/menu/comida"><button className="button"><img src={comida} alt="menuImage" style={{width: '5vw', height: 'auto'}}/><br/><br/>Comidas</button></a>
            </Col>
            <Col xs={{ span: 24, offset: 0 }} sm={{ span: 24, offset: 0 }} md={{ span: 8, offset: 0 }} lg={{ span: 8, offset: 0 }} xl={{ span: 8, offset: 0 }}>
            <a href="/menu/vegetariana"><button className="button"><img src={vegetariano} alt="menuImage" style={{width: '5vw', height: 'auto'}}/><br/><br/>Menú Vegetariano</button></a>
            </Col>
        </Row>
  </div>
  );
}

// {
//     <div className="container" style={{marginTop: '60px'}}>
//         <div className = "row">
//             <div className="col s12"><h2 style = {{fontSize: '50px',textAlign: 'center',fontFamily: 'Caveat, cursive'}}>¡Bienvenido!</h2></div>
//         </div>
//         <div className = "row">
//             <div className = "col s6" style={{marginRight: '10%'}}>
//                 <div className="card-panel blue-grey lighten-4">
//                     {/* <span className="white-text">I am a very simple card. I am good at containing small bits of information.
//                     I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
//                     </span> */}
//                     <a href="/menu/desayuno"><button className="button"><img src="https://i.pinimg.com/originals/ef/96/b7/ef96b7ca0f841d9ef0a0ac41a3a19374.jpg" alt="menuImage" style={{width: '100px', height: 'auto'}}/><br/><br/>Desayunos</button></a>
//                     <a href="/menu/comida"><button className="button"><img src="https://encolombia.com/wp-content/uploads/2019/05/Comidas-Bajas-en-Calor%C3%ADas-para-Toda-la-Semana-696x398.jpg" alt="menuImage" style={{width: '100px', height: 'auto'}}/><br/><br/>Comidas</button></a>
//                     <a href="/menu/vegetariana"><button className="button"><img src="https://cdn.ticbeat.com/src/uploads/2019/06/verano-810x540.jpg" alt="menuImage" style={{width: '100px', height: 'auto'}}/><br/><br/>Menú Vegetariano</button></a>
//                 </div>
//             </div>
//             <div className = "col s6">  
//                 <div className="card-panel teal">

//                     {/* <span className="white-text">I am a very simple card. I am good at containing small bits of information.
//                     I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
//                     </span> -->
//                     <div className="carousel carousel-slider">
//                         <a href="#one!" className="carousel-item "><img src="./images/a.jpg" style="width: 360px; height: auto;"></a>
//                         <a href="#two!" className="carousel-item "><img src="./images/b.jpg" style="width: 360px; height: auto;"></a>
//                         <a href="#three!" className="carousel-item "><img src="./images/c.jpg" style="width: 360px; height: auto;"></a>
//                         <a href="#four!" className="carousel-item "><img src="./images/d.jpg" style="width: 360px; height: auto;"></a>
//                         <a href="#five!" className="carousel-item "><img src="./images/e.jpg" style="width: 360px; height: auto;"></a>
            
//                     </div> */}
//                     <img src="./images/add1.jpeg" style={{width: '100%', height: 'auto'}}/>
//                 </div>
//             </div>
//           </div>
//     </div>
// }

const condition = authUser => !!authUser;
export default withAuthorization(condition)(Home);