import { Link } from "react-router-dom";

const Product = ({ product, className }) => {
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
          <button className="favorite btn rounded-circle position-absolute top-0 end-0">
            <i className="bi bi-suit-heart-fill fs-4"></i>
          </button>
          <button className="more btn btn-dark rounded-circle position-absolute">
            <i className="bi bi-search fs-5"></i>
          </button>
          <button className="add-cart btn btn-dark rounded-circle position-absolute">
            <i className="bi bi-bag-plus fs-5"></i>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Product;
