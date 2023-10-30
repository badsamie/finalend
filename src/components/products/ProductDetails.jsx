import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteProduct,
  getOneProduct,
} from "../../store/products/productsActions";
import { clearOneProductState } from "../../store/products/productsSlice";
import { removeFromCart, toggleCart } from "../../store/cart/cartSlice";
import ProductsRating from "./ProductsRating";
import {
  removeAllFromFav,
  toggleFav,
} from "../../store/favorite/favoriteslice";
import ProductLike from "./ProductLike";
import ProductComment from "./ProductComment";


const ProductDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, oneProduct } = useSelector((state) => state.products);
  const { id } = useParams();
  const cartItems = useSelector((state) => state.cart.items) || [];
  const favItems = useSelector((state) => state.fav.items) || [];

  // console.log(oneProduct);
  useEffect(() => {
    dispatch(getOneProduct({ id }));
    return () => dispatch(clearOneProductState());
  }, [dispatch, id]);

  if (!oneProduct) {
    return <p>Loading...</p>;
  }

  const isItemInCart = cartItems.some((item) => item.id === oneProduct.id);
  const isItemInFav = favItems.some((items) => items.id === oneProduct.id);

  const handleCartAction = () => {
    if (isItemInCart) {
      dispatch(removeFromCart(oneProduct.id));
    } else {
      dispatch(toggleCart(oneProduct));
    }
  };
  const handleFavAction = () => {
    if (isItemInFav) {
      dispatch(removeAllFromFav(oneProduct.id));
    } else {
      dispatch(toggleFav(oneProduct));
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
                <p className="inline-block rounded bg-purple-500 px-12 py-3 text-sm font-medium text-white transition bg-indigo-700">
                  $: {oneProduct.price_dollar}
                </p>
                <p>Education: {oneProduct.education}</p>
              </div>
              <div className="mt-4 text-gray-600">
                <p>Desc: {oneProduct.description}</p>
                <p>count_views: {oneProduct.count_views}</p>
                <p>Category: {oneProduct.category}</p>
                <p>{oneProduct.updated_at}</p>
                <p>Rating: {oneProduct ? oneProduct.rating : "Нет рейтинга"}</p>
                <p>like:{oneProduct.like_count}</p>
                <div>
                  {oneProduct.comments.map((comment) => (
                    <>
                      <span>@{comment.owner}</span>
                      <p>{comment.body}</p>
                    </>
                  ))}
                </div>
                <ProductComment product={oneProduct} />
                <button
                  onClick={() => navigate(`/edit/${oneProduct.id}`)}
                  className="bg-blue-600"
                >
                  Edit
                </button>
                <button className="bg-red-700" onClick={handleDelete}>
                  Delete
                </button>
                <span>----</span>
                <button className="bg-red-700" onClick={handleCartAction}>
                  {isItemInCart ? "Remove from Cart" : "Add to Cart"}
                </button>
                --
                <button onClick={handleFavAction}>
                  {!isItemInFav ? "add fav" : "delete fav"}
                </button>
                <ProductsRating />
                <ProductLike />
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ProductDetails;
