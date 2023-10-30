import axios from "axios";
import { ACCOUNT_API } from "../../helpers/consts";

export const likeProduct = (productId) => async () => {
  const liked = await axios.post(`${ACCOUNT_API}/apartment/${productId}/like/`);
  return liked;
};
export const addRating = createAsyncThunk(
  "products/addRating",
  async ({ id, rating }, { getState }) => {
    try {
      const ratingData = new FormData();
      ratingData.append("rating", rating);

      const tokens = getToken();
      console.log(tokens);
      const config = {
        headers: {
          Authorization: `Bearer ${tokens.access}`,
        },
      };

      await axios.post(
        `
          ${PRODUCTS_API}/api/v1/apartment/${id}/like/`,
        ratingData,
        config
      );
    } catch (err) {
      console.log(err, "не добавляет");
    }
  }
);

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
