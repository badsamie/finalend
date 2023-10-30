import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const ProductItem = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="ml-1 rounded-xl border-purple-400 border w-24 p-2">
      <h3
        className="cursor-pointer text-lg font-semibold mb-2"
        onClick={() => navigate(`/details/${product.id}`)}
      >
        {product.title}
      </h3>
      <p className="text-gray-600">{product.location}</p>
      <p className="text-purple-800 font-semibold mt-2">${product.price}</p>
    </div>
  );
};

export default ProductItem;
