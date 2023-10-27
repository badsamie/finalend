import React from "react";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="ml-1 rounded-xl border-blue-400 border w-24">
      <h3
        className="cursor-pointer"
        onClick={() => navigate(`/details/${product.id}`)}
      >
        {product.title}
      </h3>
      <p>{product.location}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductItem;
