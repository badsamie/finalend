import React from "react";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="flex  justify-center ">
      <div className=" ml-1 rounded-xl bg-white border w-96  p-2">
        <img src={product.image} className="w-56 z-auto h-36" alt="" />
        <h3
          className="cursor-pointer text-violet-600 uppercase text-lg font-semibold mb-2"
          onClick={() => navigate(`/details/${product.id}`)}
        >
          {product.title}
        </h3>
        <p className="text-gray-600">{product.location}</p>
        <p className="text-purple-800 font-semibold mt-2">${product.price}</p>
        <p className="text-purple-800 font-semibold mt-2">{product.category}</p>
        <p className="text-purple-800 font-semibold mt-2">{product.rating}</p>
      </div>
    </div>
  );
};

export default ProductItem;
