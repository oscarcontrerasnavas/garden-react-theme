import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getProducts,
  selectProducts,
  selectCategories,
  selectFilters,
  updateFilters,
} from "./productsSlice";
import Product from "./Product";

const ProductsContainer = () => {
  const products = useSelector(selectProducts);
  const categories = useSelector(selectCategories);
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // Output
  if (!products.length) {
    return (
      <section className="container observed">
        <p className="py-5 text-center">Loading...</p>
      </section>
    );
  }

  return (
    <section className="container observed">
      {/* Categories */}
      <div>
        <div className="row justify-content-end mb-4">
          <div className="col-md-7">
            {categories.map((cat, index) => {
              return (
                <button
                  className={`btn btn-link btn-category me-4 p-0 ${
                    cat.toLowerCase() === filters.category ? "active" : null
                  }`}
                  key={index}
                  onClick={() =>
                    dispatch(updateFilters({ name: "category", value: cat }))
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
      <div className="container">
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
              {products.slice(1, 7).map((product) => {
                return (
                  <article className="col-md-4 mb-4" key={product.id}>
                    <Product product={product} />
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsContainer;
