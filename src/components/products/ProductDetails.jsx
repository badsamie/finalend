import React, { useEffect } from "react";
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
import "./styles/Details.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import LoadingPage from "../../pages/LoadingPage";
const ProductDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, oneProduct } = useSelector((state) => state.products);
  const { id } = useParams();
  const cartItems = useSelector((state) => state.cart.items) || [];
  const favItems = useSelector((state) => state.fav.items) || [];

  useEffect(() => {
    dispatch(getOneProduct({ id }));
    return () => dispatch(clearOneProductState());
  }, [dispatch, id]);

  if (!oneProduct) {
    return <LoadingPage />;
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
        <LoadingPage />
      ) : (
        <>
          {oneProduct && (
            <div className="product-details-container">
              <h3 className="product-title">{oneProduct.title}</h3>
              {oneProduct.images.length > 0 && (
                <img
                  className="product-image"
                  src={oneProduct.images[0].image}
                  alt=""
                />
              )}
              <div className="product-info">
                <p>Location: {oneProduct.location}</p>
                <p>Price: {oneProduct.price}</p>
                <p className="price-in-dollars">$: {oneProduct.price_dollar}</p>
                <p>Education: {oneProduct.education}</p>
              </div>
              <div className="product-description">
                <p>Description: {oneProduct.description}</p>
                <p>Views: {oneProduct.count_views}</p>
                <p>Category: {oneProduct.category}</p>
                <p>Last Updated: {oneProduct.updated_at}</p>
                <p>Rating: {oneProduct ? oneProduct.rating : "No rating"}</p>
                <p>Likes: {oneProduct.like_count}</p>
                <div className="comments-section">
                  {oneProduct.comments.map((comment) => (
                    <div key={comment.id} className="comment">
                      <span className="comment-owner">@{comment.owner}</span>
                      <p className="comment-body">{comment.body}</p>
                    </div>
                  ))}
                </div>
                <ProductComment product={oneProduct} />
                <button
                  onClick={() => navigate(`/edit/${oneProduct.id}`)}
                  className="edit-button"
                >
                  Edit
                </button>
                <button className="delete-button" onClick={handleDelete}>
                  Delete
                </button>
                <button className="cart-button" onClick={handleCartAction}>
                  {isItemInCart ? (
                    <RemoveShoppingCartIcon />
                  ) : (
                    <ShoppingCartIcon />
                  )}
                </button>
                <button className="fav-button" onClick={handleFavAction}>
                  {!isItemInFav ? <BookmarkBorderIcon /> : <BookmarkIcon />}
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
