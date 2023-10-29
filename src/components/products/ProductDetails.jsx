import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  addRating,
  deleteProduct,
  getOneProduct,
  getProducts,
} from "../../store/products/productsActions";
import { clearOneProductState } from "../../store/products/productsSlice";
import { removeFromCart, toggleCart } from "../../store/cart/cartSlice";
import { createOrder } from "../../store/cart/cartSlice"; // Import createOrder

const ProductDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [rating, setRating] = useState(""); // Changed 'reting' to 'rating'
  const { loading, oneProduct } = useSelector((state) => state.products);
  const { id } = useParams();
  const cartItems = useSelector((state) => state.cart.items) || [];

  useEffect(() => {
    dispatch(getOneProduct({ id }));
    return () => dispatch(clearOneProductState());
  }, [dispatch, id]);

  if (!oneProduct) {
    return <p>Loading...</p>;
  }

  const isItemInCart = cartItems.some((item) => item.id === oneProduct.id);

  const handleCartAction = () => {
    if (isItemInCart) {
      dispatch(removeFromCart(oneProduct.id));
    } else {
      dispatch(toggleCart(oneProduct));
    }
  };

  const handleDelete = () => {
    dispatch(deleteProduct({ id: oneProduct.id }));
    dispatch(removeFromCart(oneProduct.id));
    navigate("/products");
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleAddRating = () => {
    dispatch(addRating({ id: oneProduct.id, rating: rating }));
    setRating(""); // Clear the rating input
  };

  const handleOrder = () => {
    dispatch(createOrder());
    navigate("/paypage");
  };

  return (
    <>
      {loading ? (
        <h3>Loading....</h3>
      ) : (
        <>
          {oneProduct && (
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
              <h3 className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                Title: {oneProduct.title}
              </h3>
              {/* ... (rest of your code remains the same) */}
              <input
                type="number"
                value={rating}
                onChange={handleRatingChange}
              />
              <button onClick={handleAddRating}>Add Rating</button>
              <button
                className="cart-order-button font-light border"
                onClick={handleOrder}
              >
                Order
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ProductDetails;
