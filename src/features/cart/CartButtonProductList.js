import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCartTotal, removeProduct } from "./cartSlice";

const CartButtonProductList = ({ cart }) => {
  const total = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  return (
    <ul className="cart-button__content">
      {cart.map((product) => {
        const { id, name, image, price, amount } = product;
        return (
          <li className="cart__product" key={id}>
            <div className="d-flex align-items-center justify-content-between">
              <div className="col-4 d-flex align-items-center">
                <button
                  className="btn btn-link"
                  onClick={() => dispatch(removeProduct(id))}
                >
                  <i className="bi bi-x-circle me-4"></i>
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
        <button className="btn btn-primary mb-3 text-light">Checkout</button>
        <button className="btn btn-link">View Cart</button>
      </li>
    </ul>
  );
};

export default CartButtonProductList;
