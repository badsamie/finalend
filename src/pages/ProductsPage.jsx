import React from "react";
import { useDispatch } from "react-redux";
import ProductsList from "../components/products/ProductsList";
import ProductsSearch from "../components/products/ProductsSearch";

const ProductsPage = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row justify-around">
      <ProductsList />
      <ProductsSearch />
    </div>
  );
};

export default ProductsPage;
