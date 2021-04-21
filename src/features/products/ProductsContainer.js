import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getProducts,
  updateFilter,
  selectProducts,
  selectCategories,
  selectFilters,
} from "./productsSlice";
import Product from "./Product";

const ProductsContainer = () => {
  const products = useSelector(selectProducts);
  const categories = useSelector(selectCategories);
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  // Output
  if (!products.length) {
    return (
      <div className="container">
        <p className="py-5 text-center">Loading...</p>
      </div>
    );
  }

  return (
    <div>
      {/* Categories */}
      <div className="container">
        <div className="row justify-content-end mb-4">
          <div className="col-md-7">
            {categories.map((cat, index) => {
              return (
                <button
                  className={`btn btn-link btn-category ${
                    cat.toLowerCase() === filters.category ? "active" : null
                  }`}
                  key={index}
                  onClick={() =>
                    dispatch(updateFilter({ name: "category", value: cat }))
                  }
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Products */}
      <section className="container">
        <div className="row">
          {/* Big image */}
          <article className="col-md-5">
            <Product
              className="featured"
              product={products[0]}
              key={products[0].id}
            />
          </article>
          {/* Small images */}
          <div className="col-md-7">
            <div className="row align-items-end">
              {products.slice(1, 7).map((product, index) => {
                return (
                  <article className="col-md-4 mb-4" key={product.id}>
                    <Product product={product} />
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsContainer;
