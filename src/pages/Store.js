import React from "react";
import Filters from "../features/products/Filters";
import Sort from "../features/products/Sort";
import ProductList from "../features/products/ProductList";
import { Link } from "react-router-dom";
import { home } from "../utils/globals";
import Footer from "../components/Footer";

const Store = () => {
  return (
    <>
      <div className="breadcrumbs mt-4 mb-5 py-6 bg-primary">
        <div className="container">
          <h2 className="text-light">
            <Link to={home} className="text-light">
              Home
            </Link>{" "}
            / <span className="text-info">Store</span>
          </h2>
        </div>
      </div>
      <div className="container store mb-5">
        <div className="row justify-content-between">
          <div className="col-12 col-md-2">
            <Filters />
          </div>

          <div className="col-12 col-md-9 ">
            <Sort />
            <ProductList />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Store;
