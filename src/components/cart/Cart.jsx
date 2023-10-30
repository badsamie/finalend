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
      <p className="text-center font-bold uppercase text-white text-3xl text-purple-500">
        Cart is empty
      </p>
    );
  }

  return (
    <div className="mx-auto max-w-screen-lg px-4 py-4 sm:px-6 sm:py-6 lg:px-8 text-center space-y-2">
      <h2 className="text-xl font-bold text-purple-500 sm:text-3xl uppercas text-purple-700">
        Your Cart
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {cartItems.map((item) => (
          <div
            className="flex flex-col items-center gap-4"
            key={item.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              minWidth: "200px",
            }}
          >
            <h3 className="text-purple-500 uppercase font-bold hover:text-pink-700">
              {item.title}
            </h3>
            <p className="text-purple-500 font-bold">Price: ${item.price}</p>
            <p className="text-purple-500 font-bold">Title: {item.title}</p>
            <p className="text-purple-500 font-bold">
              Description: {item.description}
            </p>
            <p className="text-[12px] text-purple-500 font-bold">
              Location: {item.location}
            </p>
            <p className="text-[12px] text-purple-500 font-bold">
              $: {item.price_dollar}
            </p>
            <p className="text-[12px] text-purple-500 font-bold">
              Quantity: {item.quantity || 1}
            </p>
            <input
              type="number"
              placeholder="total"
              value={item.quantity || 1}
              onChange={(e) => handleQuantityChange(e, item.id)}
            />
            <button
              className="bg-red-500 rounded-lg text-white p-2 hover:bg-red-700"
              onClick={() => handleRemoveOneFromCart(item.id)}
            >
              Remove One
            </button>
          </div>
        ))}
      </div>
      <p className="text-purple-500 font-bold">
        Total Price: ${totalPrice.toFixed()}
      </p>
      <p className="text-purple-500 font-bold">
        Total Quantity: {totalQuantity}
      </p>
      <button
        className="bg-purple-500 rounded-lg text-white p-2 hover:bg-pink-500"
        onClick={() => handleRemoveAllFromCart()}
      >
        Remove All from Cart
      </button>
    </div>
  );
};

export default Cart;
