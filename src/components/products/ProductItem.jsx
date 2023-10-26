// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { addToCartAsync } from "../../store/cart/cartActions";
// import { useDispatch } from "react-redux";
// import { updateToken } from "../../helpers/functions";

// const ProductItem = ({ product }) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleAddToCart = async () => {
//     await updateToken(); // Дождитесь обновления токена
//     dispatch(addToCartAsync(product.id));
//   };

//   return (
//     <div>
//       <h3
//         className="cursor-pointer w-24 "
//         onClick={() => navigate(`/details/${product.id}`)}
//       >
//         Title: {product.title}
//       </h3>
//       <p> Location:{product.location}</p>
//       <p>${product.price}</p>
//       <img src={product.post} alt="" />
//       <button onClick={handleAddToCart}>Add to Cart</button>
//     </div>
//   );
// };

// export default ProductItem;

import React from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
// import { addToCartAsync } from "../../store/cart/cartActions";
import { addToCartAsync } from "../../store/cart/cartActions";
const ProductItem = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = async () => {
    // Вызываем thunk для добавления в корзину
    await dispatch(addToCartAsync(product.id));
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
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
