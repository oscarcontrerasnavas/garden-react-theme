import React, { useEffect } from "react";
import GridView from "./GridView";
import ListView from "./ListView";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts, selectView, getProducts } from "./productsSlice";

const ProductList = () => {
  const products = useSelector(selectProducts);
  const gridView = useSelector(selectView);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (gridView) {
    return <GridView products={products} />;
  } else {
    return <ListView products={products} />;
  }
};

export default ProductList;
