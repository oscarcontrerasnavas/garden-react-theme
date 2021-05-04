import { Link } from "react-router-dom";
import Slider from "../Slider/Slider";
import slide1 from "../../assets/images/slide1.png";
import slide2 from "../../assets/images/slide2.png";
import slide3 from "../../assets/images/slide3.png";
import slide4 from "../../assets/images/slide4.png";

const MainSlider = () => {
  return (
    <Slider id="main-slider">
      <div
        className="slide-background pt-7"
        style={{ backgroundColor: "#f4fafa" }}
      >
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-12 col-md-7">
              <h2 className="text-primary">Free sheeping on orders over $49</h2>
              <h1>Bring live to home with these house plants</h1>
              <Link to="/" className="btn btn-secondary text-light mt-5">
                Shop now
              </Link>
            </div>
            <div className="col-12 col-md-5">
              <img src={slide1} alt="slide1" className="img-fluid mb-5" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="slide-background pt-8"
        style={{ backgroundColor: "#f5faf4" }}
      >
        <div className="container">
          <div className="row justify-content-between align-items-start pt-4">
            <div className="col-12 col-md-6">
              <h1>Waistcoat lumbersexual etsy</h1>
              <h4 className="text-primary mb-4">Waistcoat lumbersexual etsy</h4>
              <p>
                Lyft etsy narwhal normcore forage master cleanse cliche,
                pour-over PBRB lo-fi woke freegan meditation. Man braid
                authentic hell of portland, vexillologist prism messenger bag
                yuccie crucifix.
              </p>
              <Link to="/" className="btn btn-secondary text-light mt-4">
                Read more
              </Link>
            </div>
            <div className="col-12 col-md-5">
              <img src={slide2} alt="slide1" className="img-fluid mb-7 pb-2" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="slide-background pt-8"
        style={{ backgroundColor: "#f4fafa" }}
      >
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-12 col-md-6">
              <h3 className="text-primary">Free sheeping on orders over $49</h3>
              <h1>Slide 3</h1>
              <button className="btn btn-secondary text-light mt-5 mb-5 px-4">
                Shop now
              </button>
            </div>
            <div className="col-12 col-md-5">
              <img src={slide3} alt="slide1" className="img-fluid mb-5" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="slide-background pt-8"
        style={{ backgroundColor: "#f4fafa" }}
      >
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-12 col-md-6">
              <h3 className="text-primary">Free sheeping on orders over $49</h3>
              <h1>Slide 4</h1>
              <button className="btn btn-secondary text-light mt-5 mb-5 px-4">
                Shop now
              </button>
            </div>
            <div className="col-12 col-md-5">
              <img src={slide4} alt="slide1" className="img-fluid mb-5" />
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default MainSlider;
