import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addRating, getProducts } from "../../store/products/productsActions";
import { useParams } from "react-router-dom";

const ProductsRating = () => {
  const [rating, setRating] = useState();
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleRatingSubmit = () => {
    dispatch(addRating({ id, rating }));
    dispatch(getProducts())
      .then((response) => {
        console.log("Рейтинг успешно добавлен", response);
      })
      .catch((error) => {
        console.error("Ошибка при добавлении рейтинга", error);
      });
  };
  return (
    <div>
      <label>
        <input
          type="number"
          value={rating}
          onChange={handleRatingChange}
          placeholder="Рейтинг:"
        />
      </label>
      <button
        onClick={handleRatingSubmit}
        className="bg-slate-200"
        style={{ width: "30px" }}
      >
        to
      </button>
    </div>
  );
};

export default ProductsRating;
