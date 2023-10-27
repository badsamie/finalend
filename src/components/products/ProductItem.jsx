import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { likeApartmentAsync } from "../../store/like/likeSlice";
import { addToCartAsync } from "../../store/cart/cartActions";

const ProductItem = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const likes = useSelector((state) => state.like.likes);
  const apartmentId = product.id;

  const handleLike = () => {
    dispatch(likeApartmentAsync(apartmentId));
  };

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
      <img src={product.post} alt="" />

      <p>Likes: {likes[product.id] || 0}</p>
      <button onClick={handleLike}>Like</button>
      <span>--</span>
    </div>
  );
};

export default ProductItem;
