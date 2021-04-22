import ProductsContainer from "../features/products/ProductsContainer";
import Newsletter from "../components/Newsletter";
import blog1 from "../assets/images/blog1.jpg";
import blog2 from "../assets/images/blog2.jpg";

const Home = () => {
  return (
    <div className="home-page">
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
    </div>
  );
};

export default Home;
