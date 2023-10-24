import React from "react";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div>
      <img src={product.picture} alt="Info" />
      <p>${product.price}</p>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductItem;
