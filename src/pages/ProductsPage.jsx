import React from "react";
import { useDispatch } from "react-redux";
import ProductsList from "../components/products/ProductsList";

const ProductsPage = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row justify-around">
      <ProductsList />
    </div>
  );
};

export default ProductsPage;
