import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addRating, getProducts } from "../../store/products/productsActions";
import { useParams } from "react-router-dom";

const ProductsRating = () => {
  const [rating, setRating] = useState(0);
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
        Рейтинг:
        <input type="number" value={rating} onChange={handleRatingChange} />
      </label>
      <button onClick={handleRatingSubmit}>Отправить</button>
    </div>
  );
};

export default ProductsRating;
