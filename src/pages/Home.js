import ProductsContainer from "../features/products/ProductsContainer";
import Newsletter from "../components/Newsletter";
import GalleryContainer from "../features/gallery/GalleryContainer";
import pot1 from "../assets/images/pot1.jpg";
import pot2 from "../assets/images/pot2.jpg";
import pot3 from "../assets/images/pot3.jpg";
import blog1 from "../assets/images/blog1.jpg";
import blog2 from "../assets/images/blog2.jpg";

const Home = () => {
  return (
    <div className="home-page">
      <div className="container my-5">
        <h1 className="text-center">
          Welcome to Garden<span className="text-primary">.</span>
        </h1>
        <h3 className="text-center text-primary">
          ~ Your friendly nature reminder ~
        </h3>

        <p className="text-center welcome mx-auto">
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

        <div className="d-flex align-items-center">
          <button className="btn btn-secondary text-light my-5 mx-auto">
            Go to store
          </button>
        </div>
      </div>
      <ProductsContainer />
      <Newsletter />
      <div className="container">
        <h1 className="text-center pt-5">Our Blog</h1>
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
      </div>
      <GalleryContainer />
    </div>
  );
};

export default Home;
