import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";
import styled from "styled-components";

const Product = ({ product, className }) => {
  const dispatch = useDispatch();

  const addProduct = (e, product) => {
    dispatch(addToCart(product));
    e.target.parentElement.parentElement.parentElement
      .querySelector(".product__modal")
      .classList.add("active");
    setInterval(() => {
      document.querySelectorAll(".product__modal").forEach((el) => {
        el.classList.remove("active");
      });
    }, 3000);
  };

  const { name, image, price } = product;
  return (
    <Link to="/" className="text-dark">
      <Wrapper className={`product position-relative ${className}`}>
        <div className="img-container">
          <div className="product__modal d-flex justify-content-center align-items-center">
            <svg
              className="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <circle
                className="checkmark__circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                className="checkmark__check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
          </div>
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
            onClick={(e) => addProduct(e, product)}
          >
            <i className="bi bi-bag-plus fs-5"></i>
          </button>
        </div>
      </Wrapper>
    </Link>
  );
};

const Wrapper = styled.div`
  .product__modal.active {
    .checkmark__circle {
      stroke-dasharray: 166;
      stroke-dashoffset: 166;
      stroke-width: 2;
      stroke-miterlimit: 10;
      stroke: #7ac142;
      fill: none;
      animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
    }

    .checkmark {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      display: block;
      stroke-width: 2;
      stroke: #fff;
      stroke-miterlimit: 10;
      margin: 10% auto;
      box-shadow: inset 0px 0px 0px #7ac142;
      animation: fill 0.4s ease-in-out 0.4s forwards,
        scale 0.3s ease-in-out 0.9s both;
    }

    .checkmark__check {
      transform-origin: 50% 50%;
      stroke-dasharray: 48;
      stroke-dashoffset: 48;
      animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
    }

    @keyframes stroke {
      100% {
        stroke-dashoffset: 0;
      }
    }
    @keyframes scale {
      0%,
      100% {
        transform: none;
      }
      50% {
        transform: scale3d(1.1, 1.1, 1);
      }
    }
    @keyframes fill {
      100% {
        box-shadow: inset 0px 0px 0px 30px #7ac142;
      }
    }
  }
`;

export default Product;
