import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import CartButtonProductList from "./CartButtonProductList";
import CartButtonNav from "./CartButtonNav";
import { selectCart } from "./cartSlice";

const CartButton = () => {
  const cart = useSelector(selectCart);

  if (cart < 1) {
    return (
      <Wrapper>
        <ul className="cart-button">
          <li className="cart-button__trigger">
            <CartButtonNav />

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
          <CartButtonNav />

          <CartButtonProductList cart={cart} />
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
          padding: 0;
          margin: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 20px;
          height: 20px;
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
