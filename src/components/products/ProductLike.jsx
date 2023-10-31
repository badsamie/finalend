import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addLike } from "../../store/products/productsActions";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ProductLike = () => {
  const [like, setLike] = useState(0);
  const dispatch = useDispatch();
  const { id } = useParams();
  //   const likePush = (event) => {
  //     setLike(event.target.value);
  //   };
  //   const handleLikeSubmit = () => {
  //     dispatch(addLike({ id, like }));
  //     dispatch(getProducts())
  //       .then((response) => {
  //         console.log("Лайк успешно добавлен", response);
  //       })
  //       .catch((error) => {
  //         console.error("Ошибка при добавлении лайка", error);
  //       });
  //   };
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
      />
    </div>
  );
};

export default ProductLike;
