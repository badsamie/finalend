import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  addRating,
  deleteProduct,
  getOneProduct,
} from "../../store/products/productsActions";
import { clearOneProductState } from "../../store/products/productsSlice";
import { removeFromCart, toggleCart } from "../../store/cart/cartSlice";
// import { toggleLike } from "../../store/like/likeSlice";
import {
  decrementLike,
  incrementLike,
} from "../../store/like/likeCounterSlice";
import { setLikeCount } from "../../store/like/likeCounterSlice";
import { toggleLike } from "../../store/like/likeslice";

const ProductDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [rating, setRating] = useState();
  const { loading, oneProduct } = useSelector((state) => state.products);
  const { id } = useParams();
  const cartItems = useSelector((state) => state.cart.items) || [];
  const { likedProducts } = useSelector((state) => state.like);
  const { likeCounts } = useSelector((state) => state.likeCounter);

  useEffect(() => {
    dispatch(getOneProduct({ id }));
    return () => dispatch(clearOneProductState());
  }, [dispatch, id]);

  useEffect(() => {
    console.log("Liked Products from Redux state:", likedProducts);
  }, [likedProducts]);

  if (loading || !oneProduct) {
    return <h3>Loading....</h3>;
  }

  const isItemInCart = cartItems.some((item) => item.id === oneProduct.id);
  const isLiked = likedProducts.includes(oneProduct.id);
  const productLikeCount = likeCounts[oneProduct.id] || 1;

  const handleCartAction = () => {
    isItemInCart
      ? dispatch(removeFromCart(oneProduct.id))
      : dispatch(toggleCart(oneProduct));
  };

  const handleDelete = () => {
    dispatch(deleteProduct({ id: oneProduct.id }));
    dispatch(removeFromCart(oneProduct.id));
    dispatch(clearOneProductState());
    navigate("/products");
  };

  const handleLike = () => {
    dispatch(toggleLike(oneProduct.id));
    isLiked
      ? dispatch(decrementLike(oneProduct.id))
      : dispatch(incrementLike(oneProduct.id));

    dispatch(
      setLikeCount({
        productId: oneProduct.id,
        count: productLikeCount + (isLiked ? -1 : +1),
      })
    );
  };

  return (
    <div>
      <h3>Title: {oneProduct.title}</h3>
      {oneProduct.images.length > 0 && (
        <img className="w-36 h-56" src={oneProduct.images[0].image} alt="" />
      )}
      <p>Location: {oneProduct.location}</p>
      <p>Price: {oneProduct.price}</p>
      <p>$: {oneProduct.price_dollar}</p>
      <p>Education: {oneProduct.education}</p>
      <p>Desc: {oneProduct.description}</p>
      <p>count_views: {oneProduct.count_views}</p>
      <p>Category: {oneProduct.category}</p>
      <p>{oneProduct.updated_at}</p>
      <p>Rating: {oneProduct.rating}</p>
      <input type="number" onChange={(e) => setRating(e.target.value)} />
      <button
        onClick={() => {
          dispatch(addRating({ product: { rating } }));
          setRating("");
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
      <p>Like Count: {productLikeCount}</p>
      <button onClick={handleLike}>{isLiked ? "Unlike" : "Like"}</button>
    </div>
  );
};

export default ProductDetails;
