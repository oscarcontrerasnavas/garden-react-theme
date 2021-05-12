import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import slide1 from "../assets/images/slide1.png";
import slide2 from "../assets/images/slide2.png";
import slide3 from "../assets/images/slide3.png";
import slide4 from "../assets/images/slide4.png";
import slide5 from "../assets/images/slide5.png";

const sliderOptions = {
  gap: 0,
  autoplay: 8000,
  hoverpause: false,
  animationDuration: 0,
};

const MainSlider = () => {
  const mainGlide = useMemo(() => new Glide(".main__glide", sliderOptions));

  useEffect(() => {
    mainGlide.mount();
    return () => {
      mainGlide.mount();
    };
  }, [mainGlide]);

  return (
    <div className="main__glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {/* Slide 1 */}
          <li className="glide__slide">
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
          </li>
          {/* Slide 2 */}
          <li className="glide__slide">
            <div
              className="slide__background pt-8 pt-lg-0 pb-4 pb-lg-0"
              style={{ backgroundColor: "#f6efe2" }}
            >
              <div className="container">
                <div className="row justify-content-between align-items-center">
                  <div className="col-md-7 mb-5 mb-md-0">
                    <h1>Enjoy the blooming season every year!</h1>
                    <p className="mt-4 d-none d-lg-block">
                      Thundercats woke biodiesel franzen meditation. Fam
                      semiotics snackwave lyft, keffiyeh franzen keytar man
                      braid pitchfork asymmetrical readymade portland pug offal.
                      Pok pok kickstarter copper mug jianbing.
                    </p>
                    <Link
                      to="/"
                      className="btn btn-secondary text-light mt-3 me-3"
                    >
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
          </li>
          {/* Slide 3 */}
          <li className="glide__slide">
            <div
              className="slide__background pt-8 pt-lg-0 pb-4 pb-lg-0"
              style={{ backgroundColor: "#f6efe2" }}
            >
              <div className="container">
                <div className="row justify-content-between align-items-center">
                  <div className="col-md-7 mb-5 mb-md-0">
                    <h1>Cacti also needs care and love</h1>
                    <h2 className="mt-4">
                      Thundercats woke biodiesel franzen meditation. Fam
                      semiotics snackwave lyft.
                    </h2>
                    <Link
                      to="/"
                      className="btn btn-secondary text-light mt-3 me-3"
                    >
                      Shop now
                    </Link>
                  </div>
                  <div className="col-md-5 d-none d-md-block">
                    <img src={slide4} alt="Slider 3" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      {/* Arrows */}
      <div className="glide__arrows d-none d-md-block" data-glide-el="controls">
        <button
          className="glide__arrow glide__arrow--left btn btn-link"
          data-glide-dir="<"
        >
          <i className="bi bi-chevron-left"></i>
        </button>
        <button
          className="glide__arrow glide__arrow--right btn btn-link"
          data-glide-dir=">"
        >
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default MainSlider;
