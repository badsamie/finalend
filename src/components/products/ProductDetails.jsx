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

const ProductDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [reting, setReting] = useState();
  const { loading, oneProduct, rating } = useSelector(
    (state) => state.products
  );
  console.log(oneProduct);
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
  }, []);

  return (
    <>
      {loading ? (
        <h3>loading....</h3>
      ) : (
        <>
          {oneProduct && (
            <div>
              <h3>Title:{oneProduct.title}</h3>
              {oneProduct.images.length && (
                <img
                  className="w-36 h-56"
                  src={oneProduct.images[0].image}
                  alt=""
                />
              )}
              <p>Location:{oneProduct.location}</p>
              <p>Price:{oneProduct.price}</p>
              <p>$:{oneProduct.price_dollar}</p>
              <p>Education:{oneProduct.education}</p>
              <p>Desc:{oneProduct.description}</p>
              <p>count_views:{oneProduct.count_views}</p>
              <p>Category:{oneProduct.category}</p>
              <p>{oneProduct.updated_at}</p>
              <p>rating:{oneProduct.rating}</p>
              <input
                type="number"
                onChange={(e) => setReting(e.target.value)}
              />

              <button
                onClick={() => {
                  dispatch(addRating({ product: { rating: reting } }));
                  dispatch(getProducts());
                  setReting("");
                }}
              >
                send
              </button>

              <button
                onClick={() => navigate(`/edit/${oneProduct.id}`)}
                className="bg-blue-600"
              >
                edit
              </button>
              <span>--</span>

              <button className="bg-red-700" onClick={handleDelete}>
                Delete
              </button>
              <span>--------</span>

              <button className="bg-red-700" onClick={handleCartAction}>
                {isItemInCart ? "Remove from Cart" : "Add to Cart"}
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ProductDetails;
