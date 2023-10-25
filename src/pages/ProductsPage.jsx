import React from "react";
import { useDispatch } from "react-redux";
import ProductsList from "../components/products/ProductsList";

const ProductsPage = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <ProductsList />
    </div>
  );
};

export default ProductsPage;
