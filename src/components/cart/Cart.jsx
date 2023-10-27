import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { ACCOUNT_API } from "../../helpers/consts";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const { products } = useSelector((state) => state.products);
  const [cartProducts, setCartProducts] = React.useState([]);

  useEffect(() => {
    const fetchCartProducts = async () => {
      try {
        const productIds = Object.values(cartItems).map((cartItem) => {
          console.log("cartIte m " + cartItem);
          return cartItem.id;
        });

        // console.log("Product IDs:", productIds);

        if (productIds.length === 0) {
          return;
        }

        const response = await axios.post(
          `${ACCOUNT_API}/apartment/${productIds[0]}/favorite/`,
          { ids: productIds.join(",") }
        );

        // console.log("Response data:", response.data);
        setCartProducts(response.data);
      } catch (error) {
        console.error("Error fetching cart products:", error);
      }
    };

    fetchCartProducts();
  }, [cartItems, dispatch]);

  //   console.log("Cart Products:", cartProducts);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {Array.isArray(cartProducts) && cartProducts.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartProducts.map((product) => (
            <li key={product.id}>
              <div>
                <h3>Title: {product.title}</h3>
                <p>Price: ${product.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
