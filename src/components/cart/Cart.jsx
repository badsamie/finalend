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
    return <p className="text-center font-bold uppercase text-white text-3xl text-purple-500">Cart is empty</p>;
  }

  return (
    <div className="mx-auto max-w-xs px-4 py-4 sm:px-6 sm:py-6 lg:px-8 text-center space-y-2">
  <h2 className="text-xl font-bold text-purple-500 sm:text-3xl uppercas text-purple-700">Your Cart</h2>
  {cartItems.map((item) => (
    <div
      className="flex flex-col items-center gap-4"
      key={item.id}
      style={{
        border: "1px solid #ccc",
        padding: "10px",
      }}
    >
      <h3 className="text-purple-500 uppercase font-bold hover:text-pink-700">{item.title}</h3>
      <p className="mt-0.5 space-y-px text-[12px] text-purple-500 font-bold">Price: ${item.price}</p>
      <p className="mt-0.5 space-y-px text-[12px] text-purple-500 font-bold">Location: {item.location}</p>
      <p className="mt-0.5 space-y-px text-[12px] text-purple-500 font-bold">Price: {item.price}</p>
      <p className="mt-0.5 space-y-px text-[12px] text-purple-500 font-bold">$: {item.price_dollar}</p>
      <p className="mt-0.5 space-y-px text-[12px] text-purple-500 font-bold">Education: {item.education}</p>
      <p className="mt-0.5 space-y-px text-[12px] text-purple-500 font-bold">Desc: {item.description}</p>
      <p className="mt-0.5 space-y-px text-[12px] text-purple-500 font-bold">count_views: {item.count_views}</p>
      <p className="mt-0.5 space-y-px text-[12px] text-purple-500 font-bold">Category: {item.category}</p>
      <p className="mt-0.5 space-y-px text-[12px] text-purple-500 font-bold">{item.updated_at}</p>
      <p className="mt-0.5 space-y-px text-[12px] text-purple-500 font-bold">Quantity: {item.quantity}</p>
      <button 
        className="mt-0.5 space-y-px text-[12px] text-purple-500 font-bold"
        onClick={() => handleRemoveOneFromCart(item.id)}>
        Remove One from Cart
      </button>
    </div>
  ))}
  {cartItems.length > 0 && (
   <button 
   className="bg-purple-500 rounded-lg text-white p-2 hover:bg-pink-500"
   onClick={() => handleRemoveAllFromCart()}
 >
   Remove All from Cart
 </button>
 
  )}
</div>


  );
};

export default Cart;

