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
import { isUserLogin } from "../../helpers/functions";


const ProductDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [reting, setReting] = useState();
  const { loading, oneProduct, rating } = useSelector(
    (state) => state.products
  );
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

  return (
    <>
      {loading ? (
        <h3>loading....</h3>
      ) : (
        <>
          {oneProduct && (
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
              <h3 className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                Title: {oneProduct.title}
              </h3>
              {oneProduct.images.length > 0 && (
                <img
                  className="w-36 h-56"
                  src={oneProduct.images[0].image}
                  alt=""
                />
              )}
              <div className="text-gray-600">
                <p>Location: {oneProduct.location}</p>
                <p>Price: {oneProduct.price}</p>
                <p className="inline-block rounded bg-purple-500 px-12 py-3 text-sm font-medium text-white transition">
                  $: {oneProduct.price_dollar}
                </p>
                <p>Education: {oneProduct.education}</p>
              </div>
              <div className="mt-4 text-gray-600">
                <p>Desc: {oneProduct.description}</p>
                <p>count_views: {oneProduct.count_views}</p>
                <p>Category: {oneProduct.category}</p>
                <p>{oneProduct.updated_at}</p>
                <p>Rating: {oneProduct.rating}</p>
                <input
                  type="number"
                  onChange={(e) => setReting(e.target.value)}
                />
              </div>
              
              <div className="mt-4">
                <button
                  onClick={() => {
                    dispatch(addRating({ product: { rating: reting } }));
                    dispatch(getProducts());
                    setReting("");
                  }}
                >
                  Send
                </button>
                <button
                  onClick={() => navigate(`/edit/${oneProduct.id}`)}
                  className="bg-blue-600"
                >
                  Edit
                </button>
                <button className="bg-red-700" onClick={handleDelete}>
                  Delete
                </button>
                <button className="bg-red-700" onClick={handleCartAction}>
                  {isItemInCart ? (
                    <button className="bg-red-700">Remove from Cart</button>
                  ) : (
                    <button className="bg-blue-600">Add to Cart</button>
                  )}
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ProductDetails;
