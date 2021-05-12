import { Link } from "react-router-dom";
import { routes } from "../utils/globals";
import { useSelector } from "react-redux";
import { selectCategories } from "../features/products/productsSlice";

const Footer = () => {
  const categories = useSelector(selectCategories);

  return (
    <footer className="main-footer text-light bg-dark py-5">
      <div className="container">
        <div className="row">
          {/* Col 1 */}
          <div className="col-12 col-md-4 col-lg-3 mb-4 mb-mb-0">
            <h1 className="logo mb-4 text-info">
              Garden<span className="text-primary">.</span>
            </h1>
            <ul className="ps-3">
              {routes.map((route) => {
                return (
                  <li key={route.id} className="my-2">
                    <Link className="text-light fw-light" to={route.path}>
                      {route.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="media-links">
              <a href="https://facebook.com" className="fs-2 text-light me-3">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://instagram.com" className="fs-2 text-light">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
          {/* Col 2 */}
          <div className="col-12 col-md-4 col-lg-3 mb-4 mb-mb-0">
            <h2 className="h4 mt-3 mb-4 text-info">Quick Links</h2>
            <ul className="ps-3">
              {categories.map((category, index) => {
                return (
                  <li key={index} className="my-2">
                    <Link to="/" className="text-light fw-light">
                      {category}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Col 3 */}
          <div className="col-12 col-md-4 ms-auto">
            <h2 className="h4 mt-3 mb-4 text-info">Policy</h2>
            <p className="fw-light">
              &#169; Garden 2021. MIT Lisence, free use and reproduction.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
