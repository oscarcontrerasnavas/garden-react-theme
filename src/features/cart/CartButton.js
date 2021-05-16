import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  removeProduct,
  selectCart,
  selectCartAmount,
  selectCartTotal,
} from "./cartSlice";

const CartButton = () => {
  const cart = useSelector(selectCart);
  const amount = useSelector(selectCartAmount);
  const total = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  if (cart < 1) {
    return (
      <Wrapper>
        <ul className="cart-button">
          <li className="cart-button__trigger">
            <button className="btn btn-link position-relative rounded-circle">
              <i className="bi bi-bag fs-5 text-dark"></i>
              <span className="badge bg-primary position-absolute rounded-pill translate-middle">
                {amount}
              </span>
            </button>

            <ul className="cart-button__content shadow">
              <li className="d-flex justify-content-center align-items-center fw-light">
                <p>Your cart is empty :(</p>
              </li>

              <li className="cart-button__buttons d-flex flex-column justify-content-center border-0">
                <button className="btn btn-primary mb-3 text-light">
                  Go to store
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <ul className="cart-button">
        <li className="cart-button__trigger">
          <button className="btn btn-link position-relative rounded-circle">
            <i className="bi bi-bag fs-5 text-dark"></i>
            <span className="badge bg-primary position-absolute rounded-pill translate-middle">
              {amount}
            </span>
          </button>

          <ul className="cart-button__content shadow">
            {cart.map((product) => {
              const { id, name, image, price, amount } = product;
              return (
                <li className="cart__product" key={id}>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="col-4 d-flex align-items-center">
                      <button
                        className="btn btn-link m-0 p-0 me-3"
                        onClick={() => dispatch(removeProduct(id))}
                      >
                        <i className="bi bi-x-circle"></i>
                      </button>
                      <img src={image} alt={name} className="img-fluid" />
                    </div>
                    <div className="d-flex flex-column justify-content-end">
                      <h4 className="text-end text-capitalize">{name}</h4>
                      <p className="text-end fw-bold p-0 m-0">
                        {price} <span className="fw-light">x {amount}</span>
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
            <li className="cart-button__subtotal border-0">
              <p className="d-flex justify-content-between">
                <span className="text-primary fw-light">Subtotal:</span>
                <span className="fw-bold ">{total}</span>
              </p>
            </li>
            <li className="cart-button__buttons d-flex flex-column justify-content-center border-0">
              <button className="btn btn-primary mb-3 text-light">
                Checkout
              </button>
              <button className="btn btn-link">View Cart</button>
            </li>
          </ul>
        </li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  &:hover {
    .cart-button__trigger > button {
      background-color: #f6f5f5;
    }

    .cart-button__content {
      opacity: 1;
      pointer-events: all;
      transform: translateY(0);
    }
  }

  .cart-button {
    padding: 1rem 0;
    margin: 0;

    &__trigger {
      display: flex;
      position: relative;

      > button {
        align-items: center;
        background-color: transparent;
        display: flex;
        height: 35px;
        justify-content: center;
        margin: 0;
        padding: 0;
        width: 35px;

        span {
          top: 5px;
          left: 90%;
        }
      }
    }
    li {
      list-style: none;
    }

    &__content {
      position: absolute;
      top: 0;
      right: 0;
      width: 300px;
      background-color: white;
      padding: 1rem 0 0 0;
      margin-top: 40px;
      border-top: 4px solid #1687a7;
      border-radius: 5px;
      opacity: 0;
      pointer-events: none;
      transform: translateY(30px);
      transition: all 0.3s ease-in-out;

      li {
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        margin-left: 1rem;
        margin-right: 1rem;
        padding: 1rem 0;
      }
    }
  }
`;

export default CartButton;
