import React from "react";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ product }) => {
  console.log(product);
  const navigate = useNavigate();
  return (
    <div>
      <h3
        className="cursor-pointer w-24 "
        onClick={() => navigate(`/details/${product.id}`)}
      >
        Title: {product.title}
      </h3>
      <p> Location:{product.location}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductItem;
