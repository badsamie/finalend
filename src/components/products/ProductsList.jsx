import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  getTotalPages,
} from "../../store/products/productsActions";
import ProductItem from "./ProductItem";
import ProductsPagination from "./ProductsPagination";
import { Link, useNavigate } from "react-router-dom";
import LoadingPage from "../../pages/LoadingPage";

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
        <LoadingPage />
      ) : (
        <>
          <div className="flex flex-wrap mt-48">
            <ProductsPagination />
            {products.map((product) => (
              <Link key={product.id} to={`/details/${product.id}`}>
                <ProductItem product={product} />
              </Link>
              
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ProductsList;
