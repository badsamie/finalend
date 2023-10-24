import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/products/productsActions";
import ProductItem from "./ProductItem";

const ProductsList = () => {
  const { products, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <>
      {loading ? (
        <h3>loading...</h3>
      ) : (
        <div>
          {products.map((product) => (
            <ProductItem key={products.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsList;
