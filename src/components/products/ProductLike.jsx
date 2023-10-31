import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addLike } from "../../store/products/productsActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const ProductLike = () => {
  const [like, setLike] = useState(0);
  const dispatch = useDispatch();
  const { id } = useParams();
  const handleLikeClick = () => {
    setLike(like + 1);
    dispatch(addLike({ id }, { like: like + 1 }))
      .then((response) => {
        // console.log("Лайк успешно добавлен", response);
      })
      .catch((error) => {
        console.error("Ошибка при добавлении лайка", error);
      });
  };
  return (
    <div>
      <FavoriteIcon
        onClick={handleLikeClick}
        color={like > 0 ? "error" : "large"}
        style={{
          backgroundColor: "purple",
          color: "white",
          padding: "10px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          width: "50px",
          height: "50px",
          marginRight: "9px",
        }}
      />
    </div>
  );
};

export default ProductLike;
