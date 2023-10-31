import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createComment } from "../../store/products/productsActions";

const ProductComment = ({ product }) => {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <input
        type="text"
        placeholder="comments"
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button
        className="bg-slate-200"
        onClick={() => {
          dispatch(createComment({ product, comment }));
          setComment("");
        }}
      >
        com
      </button>
    </>
  );
};

export default ProductComment;
