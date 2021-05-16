import React from "react";
import { useSelector } from "react-redux";
import { selectCartAmount } from "./cartSlice";

const CartButtonNav = () => {
  const amount = useSelector(selectCartAmount);

  return (
    <button className="btn btn-link position-relative rounded-circle">
      <i className="bi bi-bag fs-5 text-dark"></i>
      <span className="badge bg-primary position-absolute rounded-circle translate-middle">
        {amount}
      </span>
    </button>
  );
};

export default CartButtonNav;
