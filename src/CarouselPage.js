import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./CarousePage.css";
function CarouselPage() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="carouselImg"
            src="./assets/images/crousal/5.jpg"
            alt="ads"
          ></img>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carouselImg"
            src="./assets/images/crousal/2.jpg"
            alt="ads"
          ></img>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carouselImg"
            src="./assets/images/crousal/1.jpg"
            alt="ads"
          ></img>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carouselImg"
            src="./assets/images/crousal/4.jpg"
            alt="ads"
          ></img>{" "}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carouselImg"
            src="./assets/images/crousal/3.jpg"
            alt="ads"
          ></img>{" "}
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselPage;
