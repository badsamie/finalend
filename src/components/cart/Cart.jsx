import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeAllFromCart,
  removeFromCart,
  toggleCart,
} from "../../store/cart/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items) || [];

  const handleRemoveOneFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleRemoveAllFromCart = () => {
    dispatch(removeAllFromCart());
  };

  if (cartItems.length === 0) {
    return <p>Cart is empty</p>;
  }

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{item.title}</h3>
          <p>Price: ${item.price}</p>
          <p>Location: {item.location}</p>
          <p>Price: {item.price}</p>
          <p>$: {item.price_dollar}</p>
          <p>Education: {item.education}</p>
          <p>Desc: {item.description}</p>
          <p>count_views: {item.count_views}</p>
          <p>Category: {item.category}</p>
          <p>{item.updated_at}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => handleRemoveOneFromCart(item.id)}>
            Remove One from Cart
          </button>
        </div>
      ))}
      {cartItems.length > 0 && (
        <button onClick={() => handleRemoveAllFromCart()}>
          Remove All from Cart
        </button>
      )}
    </div>
  );
};

export default Cart;

