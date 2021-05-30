import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { home, store } from "../utils/globals";
import { useSelector, useDispatch } from "react-redux";
import { selectProduct, getProduct } from "../features/products/productsSlice";
import { addToCart } from "../features/cart/cartSlice";
import { formatPrice } from "../utils/helpers";
import Footer from "../components/Footer";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector(selectProduct);

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  if (!product) {
    return (
      <>
        <div className="breadcrumbs mt-4 mb-5 py-6 bg-primary">
          <div className="container">
            <h2 className="text-light">
              <Link to={home} className="text-light">
                Home
              </Link>{" "}
              /{" "}
              <Link to={store} className="text-light">
                Store
              </Link>{" "}
            </h2>
          </div>
        </div>

        <div className="container">
          <h1 className="text-center mt-8">Loading...</h1>
        </div>
      </>
    );
  }

  const { name, price, description, stock, starts, reviews, company, images } =
    product;
  const image = images[0].thumbnails.large.url;
  return (
    <>
      <div className="breadcrumbs mt-4 mb-5 py-6 bg-primary">
        <div className="container">
          <h2 className="text-light">
            <Link to={home} className="text-light">
              Home
            </Link>{" "}
            /{" "}
            <Link to={store} className="text-light">
              Store
            </Link>{" "}
            / <span className="text-info text-capitalize">{name}</span>
          </h2>
        </div>
      </div>

      <div className="container mb-7">
        <div className="row justify-content-center">
          <div className="col-12 col-md-5">
            <img src={image} alt={name} className="img-fluid rounded" />
          </div>

          <div className="col-12 col-md-5">
            <h2 className="text-capitalize">{name}</h2>
            <p>{formatPrice(price)}</p>
            <h3 className="mt-4">Description:</h3>
            <p>{description}</p>
            <ul>
              <li>Stock: {stock}</li>
              <li>Company: {company}</li>
            </ul>
            <button
              className="btn btn-dark text-light mt-4"
              onClick={() =>
                dispatch(
                  addToCart({
                    id,
                    name,
                    price,
                    description,
                    stock,
                    image,
                  })
                )
              }
            >
              <i className="bi bi-bag-plus fs-5 me-2 d-block d-md-inline"></i>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
