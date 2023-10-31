// В файле Cart.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeAllFromCart,
  removeFromCart,
  toggleCart,
  createOrder, // Исправлена опечатка в имени
} from "../../store/cart/cartSlice";
import "./Cart.css";
import { Navigate, useNavigate } from "react-router";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items) || [];
  const navigate = useNavigate();
  const handleRemoveOneFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleRemoveAllFromCart = () => {
    dispatch(removeAllFromCart());
  };

  const handleQuantityChange = (e, id) => {
    const newQuantity = parseInt(e.target.value, 10);
    dispatch(toggleCart({ id, quantity: newQuantity }));
  };

  const { totalPrice, totalQuantity } = cartItems.reduce(
    (acc, item) => {
      acc.totalPrice += item.price * (item.quantity || 1);
      acc.totalQuantity += item.quantity || 1;
      return acc;
    },
    { totalPrice: 0, totalQuantity: 0 }
  );

  if (cartItems.length === 0) {
    return (
      <p className="text-center font-bold uppercase text-3xl text-violet-500 mt-56">
        Cart is empty
      </p>
    );
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>ID</th>
            <th>Price</th>
            <th>Description</th>
            <th>Location</th>
            <th>$</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.id}</td>
              <td>${item.price}</td>
              <td>{item.description}</td>
              <td>{item.location}</td>
              <td>${item.price_dollar}</td>
              <td>
                <input
                  type="number"
                  value={item.quantity || 1}
                  onChange={(e) => handleQuantityChange(e, item.id)}
                />
              </td>
              <td>${(item.price * (item.quantity || 1)).toFixed()}</td>
              <td>
                <button
                  className="delete-button"
                  onClick={() => handleRemoveOneFromCart(item.id)}
                >
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="total-price">Total Price: ${totalPrice.toFixed()}</p>
      <p className="total-quantity">Total Quantity: {totalQuantity}</p>
      <div className="cart-buttons">
        <button
          className="remove-all-button"
          onClick={() => handleRemoveAllFromCart()}
        >
          Remove All from Cart
        </button>
        <button className="order-button" onClick={() => navigate("/order")}>
          ORDER
        </button>
      </div>
    </div>
  );
};

export default Cart;
