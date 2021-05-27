import React from "react";
import Product from "./Product";

const GridView = ({ products }) => {
  if (!products) {
    return (
      <div className="row">
        <div className="col-12 text-center">Loading...</div>
      </div>
    );
  }

  return (
    <div className="row">
      {products.map((product) => {
        return (
          <div className="col-6 col-md-3 mb-4" key={product.id}>
            <Product product={product} />
          </div>
        );
      })}
    </div>
  );
};

export default GridView;
