import React from "react";
import { Slider, Slide } from "./Slider";
import { Link } from "react-router-dom";
import slide2 from "../assets/images/slide2.png";
import slide4 from "../assets/images/slide4.png";
import slide5 from "../assets/images/slide5.png";

const MainSlider = () => {
  return (
    <Slider
      className="main-slider"
      options={{
        gap: 0,
        autoplay: 8000,
        hoverpause: false,
        animationDuration: 0,
      }}
    >
      <Slide>
        <div
          className="slide__background pt-8 pt-lg-0 pb-4 pb-lg-0"
          style={{ backgroundColor: "#f4fafa" }}
        >
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-7 mb-5 mb-md-0">
                <h2>Free shipping on orders over $50</h2>
                <h1>Bring live to home with these house plants</h1>
                <Link to="/" className="btn btn-secondary text-light mt-3">
                  Shop now
                </Link>
              </div>
              <div className="col-md-5 d-none d-md-block">
                <img src={slide5} alt="Slider 1" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </Slide>

      <Slide>
        <div
          className="slide__background pt-8 pt-lg-0 pb-4 pb-lg-0"
          style={{ backgroundColor: "#f6efe2" }}
        >
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-7 mb-5 mb-md-0">
                <h1>Enjoy the blooming season every year!</h1>
                <p className="mt-4 d-none d-lg-block">
                  Thundercats woke biodiesel franzen meditation. Fam semiotics
                  snackwave lyft, keffiyeh franzen keytar man braid pitchfork
                  asymmetrical readymade portland pug offal. Pok pok kickstarter
                  copper mug jianbing.
                </p>
                <Link to="/" className="btn btn-secondary text-light mt-3 me-3">
                  Shop now
                </Link>
                <Link to="/" className="btn btn-dark text-light mt-3">
                  Know more
                </Link>
              </div>
              <div className="col-md-5 d-none d-md-block">
                <img src={slide2} alt="Slider 2" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </Slide>

      <Slide>
        <div
          className="slide__background pt-8 pt-lg-0 pb-4 pb-lg-0"
          style={{ backgroundColor: "#f6efe2" }}
        >
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-7 mb-5 mb-md-0">
                <h1>Cacti also needs care and love</h1>
                <h2 className="mt-4">
                  Thundercats woke biodiesel franzen meditation. Fam semiotics
                  snackwave lyft.
                </h2>
                <Link to="/" className="btn btn-secondary text-light mt-3 me-3">
                  Shop now
                </Link>
              </div>
              <div className="col-md-5 d-none d-md-block">
                <img src={slide4} alt="Slider 3" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </Slider>
  );
};

export default MainSlider;
