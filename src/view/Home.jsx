import React from "react";
import "../assets/css/Home.css";
//import pikachu from "../assets/img/pikachu.png";
import pikcar1 from "../assets/img/pikcar1.png";
//import pikcar2 from "../assets/img/pikcar2.png";
//import pikcar3 from "../assets/img/pikcar3.png";
//import Carousel from "react-bootstrap/Carousel";
// import "../index.css";

export default function Home() {
  return (
    <div className="mt-5 form-cont-home">
      <h1>Bienvenido al mundo Pokemón</h1>
      <div className="w-50">
        <img className="form-img" src={pikcar1} alt="" />
      </div>

      {/*  <div  id="carrousel" className="justify-content-center">
        <div  className="col-md-12 w-90 ">
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-50" src={pikcar1} alt="First slide" />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-50" src={pikcar2} alt="Second slide" />

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-50" src={pikcar3} alt="Third slide" />

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
  </div> */}
    </div>
  );
}
