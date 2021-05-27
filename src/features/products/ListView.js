import React from "react";
import Product from "./Product";

const ListView = ({ products }) => {
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
          <div className="col-12" key={products.id}>
            <Product product={product} list={true} />
          </div>
        );
      })}
    </div>
  );
};

export default ListView;
