import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  getTotalPages,
} from "../../store/products/productsActions";
import ProductItem from "./ProductItem";
import ProductsPagination from "./ProductsPagination";

const ProductsList = () => {
  const { products, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotalPages());
    dispatch(getProducts());
  }, []);
  return (
    <>
      {loading ? (
        <h3>loading...</h3>
      ) : (
        <div className="flex flex-wrap">
          <ProductsPagination />
          {products.map((products) => (
            <ProductItem key={products.id} product={products} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsList;
