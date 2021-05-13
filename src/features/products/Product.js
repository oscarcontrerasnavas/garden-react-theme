import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";

const Product = ({ product, className }) => {
  const dispatch = useDispatch();

  const { name, image, price } = product;
  return (
    <Link to="/" className="text-dark">
      <div className={`product position-relative ${className}`}>
        <div className="img-container">
          <img src={image} alt={name} />
        </div>
        <p className="fw-light text-center text-capitalize mt-3 mb-2">{name}</p>
        <h3 className="text-center">${price}</h3>

        <div className="product__buttons">
          <button className="product__button more btn btn-dark rounded-circle">
            <i className="bi bi-search fs-5"></i>
          </button>
          <button
            className="product__button add_to_cart btn btn-dark rounded-circle"
            onClick={() => {
              dispatch(addToCart(product));
            }}
          >
            <i className="bi bi-bag-plus fs-5"></i>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Product;
