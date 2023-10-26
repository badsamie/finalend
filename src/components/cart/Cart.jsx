// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";
// import { ACCOUNT_API } from "../../helpers/consts";

// const Cart = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart);

//   const [cartProducts, setCartProducts] = useState([]);

//   useEffect(() => {
//     const fetchCartProducts = async () => {
//       try {
//         const response = await axios.post(`${ACCOUNT_API}/giftcard/`, {
//           params: { ids: cartItems.join(",") },
//         });

//         setCartProducts(response.data);
//       } catch (error) {
//         console.error("Error fetching cart products:", error);
//       }
//     };

//     fetchCartProducts();
//   }, [cartItems, dispatch]);

//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       {Array.isArray(cartProducts) && cartProducts.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <ul>
//           {cartProducts.map((product) => (
//             <li key={product.id}>
//               <div>
//                 <h3>Title: {product.title}</h3>
//                 {/* <p>Location: {product.location}</p> */}
//                 <p>Price: ${product.price}</p>
//                 {/* <img src={product.post || "placeholder-image-url"} alt="" /> */}
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Cart;

// В файле Cart.jsx

import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  // Получаем данные о корзине из Redux-хранилища
  const cartItems = useSelector((state) => state.cart);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((productId) => (
            <li key={productId}>Product ID: {productId}</li>
            // Вместо вывода ID, вы можете добавить логику для получения полной информации о продукте
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
