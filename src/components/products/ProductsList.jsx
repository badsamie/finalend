import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  getTotalPages,
} from "../../store/products/productsActions";
import ProductItem from "./ProductItem";
import ProductsPagination from "./ProductsPagination";
import { Link } from "react-router-dom";
import LoadingPage from "../../pages/LoadingPage";
import "./styles/List.css";
import ProductsSearch from "./ProductsSearch";

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
          <div className="list-container">
            <div style={{ display: "flex", alignItems: "center" }}>
              <ProductsPagination />
              <ProductsSearch />
            </div>

            <div className="list">
              {products.map((product) => (
                <Link key={product.id} to={`/details/${product.id}`}>
                  <ProductItem product={product} />
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductsList;
