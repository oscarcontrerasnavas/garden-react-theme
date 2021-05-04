import { useEffect } from "react";
import Mainslider from "../features/Slider/MainSlider";
import ProductsContainer from "../features/products/ProductsContainer";
import Newsletter from "../components/Newsletter";
import GalleryContainer from "../features/gallery/GalleryContainer";
import Footer from "../components/Footer";
import "../utils/parallax";
import pot1 from "../assets/images/pot1.jpg";
import pot2 from "../assets/images/pot2.jpg";
import pot3 from "../assets/images/pot3.jpg";
import blog1 from "../assets/images/blog1.jpg";
import blog2 from "../assets/images/blog2.jpg";
import float1 from "../assets/images/float1.png";
import float2 from "../assets/images/float2.png";

const Home = () => {
  useEffect(() => {
    const targets = document.querySelectorAll("section");

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.25,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      });
    }, options);

    targets.forEach((target) => {
      observer.observe(target);
    });
  }, []);

  return (
    <>
      <Mainslider />
      <img src={float1} alt="" className="parallax float-1" data-speed="1" />
      <img src={float2} alt="" className="parallax float-2" data-speed="3" />
      <section className="container">
        <h1 className="text-center">
          Welcome to Garden<span className="text-primary">.</span>
        </h1>
        <h3 className="text-center text-primary">
          ~ Your friendly nature reminder ~
        </h3>

        <p className="text-center welcome mx-auto mt-5 mb-7">
          We are an Online Market of beautiful little tiny homie plants, pots
          and gardening suplies. Visit our site for a complete list of the
          options we have for you.
        </p>

        <div className="row">
          <div className="col-12 col-md mx-3">
            <img
              src={pot1}
              alt="Potted plan"
              className="img-fluid d-block mx-auto"
            />
            <h2 className="fs-5 fw-bold mt-5 mb-3">Flowers in flowerpots</h2>
            <p>Fill room with aromatic flowers. Take colors for yourself.</p>
          </div>
          <div className="col-12 col-md mx-3">
            <img
              src={pot2}
              alt="Potted plan"
              className="img-fluid d-block mx-auto"
            />
            <h2 className="fs-5 fw-bold mt-5 mb-3">
              Prety, tiny succulents and others
            </h2>
            <p>
              We offer many types of low maintance succulents, small but strong
              plants.
            </p>
          </div>
          <div className="col-12 col-md mx-3">
            <img
              src={pot3}
              alt="Potted plan"
              className="img-fluid d-block mx-auto"
            />
            <h2 className="fs-5 fw-bold mt-5 mb-3">Clean air in your home</h2>
            <p>
              There are many variations of small-sized plants with great CO2
              captivity.
            </p>
          </div>
        </div>

        <div className="d-flex align-items-center mt-4 mb-5">
          <button className="btn btn-secondary text-light my-5 mx-auto">
            Go to store
          </button>
        </div>
      </section>
      <ProductsContainer />
      <Newsletter />
      <section className="container">
        <h1 className="text-center">Our Blog</h1>
        <h4 className="text-center text-primary">~ Latest Entrance ~</h4>

        <div className="row my-5 pt-5">
          <div className="col-6">
            <img src={blog1} alt="blog" className="img-fluid" />
            <h4 className="text-primary mt-4">Jul 15, 2020</h4>
            <h2 className="fs-5 mb-4">
              How nature can help building community
            </h2>
            <p>
              Coloring book seitan raclette, literally put a bird on it irony
              90's. Gochujang actually iPhone butcher cold-pressed paleo.
              Bushwick chia bespoke listicle tumeric biodiesel portland selfies
              actually lomo brooklyn.
            </p>
            <button className="btn btn-dark mt-3">Read More</button>
          </div>
          <div className="col-6">
            <img src={blog2} alt="blog" className="img-fluid" />
            <h4 className="text-primary mt-4">Jul 15, 2020</h4>
            <h2 className="fs-5 mb-4">
              Meet Rebeca, the owner of this gorgeous lavander farm
            </h2>
            <p>
              Coloring book seitan raclette, literally put a bird on it irony
              90's. Gochujang actually iPhone butcher cold-pressed paleo.
              Bushwick chia bespoke listicle tumeric biodiesel portland selfies
              actually lomo brooklyn.
            </p>
            <button className="btn btn-dark mt-3">Read More</button>
          </div>
        </div>
      </section>
      <GalleryContainer />
      <Footer />
    </>
  );
};

export default Home;
