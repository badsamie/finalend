import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteProduct,
  getOneProduct,
} from "../../store/products/productsActions";
import { clearOneProductState } from "../../store/products/productsSlice";
import { addToCartAsync } from "../../store/cart/cartActions";

const ProductDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, oneProduct } = useSelector((state) => state.products);
  const { id } = useParams();
  // console.log(oneProduct);
  useEffect(() => {
    dispatch(getOneProduct({ id }));
    return () => dispatch(clearOneProductState());
  }, []);

  const handleAddToCart = () => {
    dispatch(addToCartAsync(oneProduct.id));
  };

  return (
    <>
      {loading ? (
        <h3>loading....</h3>
      ) : (
        <>
          {oneProduct && (
            <div>
              <img src={oneProduct.post} alt="image" />
              <h3>Title:{oneProduct.title}</h3>
              <p>Location:{oneProduct.location}</p>
              <p>Price:{oneProduct.price}</p>
              <p>$:{oneProduct.price_dollar}</p>
              <p>Education:{oneProduct.education}</p>
              <p>Desc:{oneProduct.description}</p>
              <p>count_views:{oneProduct.count_views}</p>
              <p>Category:{oneProduct.category}</p>
              <button
                onClick={() => navigate(`/edit/${oneProduct.id}`)}
                className="bg-blue-600"
              >
                edit
              </button>
              <span>--</span>
              <button
                className="bg-red-700"
                onClick={() => {
                  dispatch(deleteProduct({ id: oneProduct.id }));
                  navigate("/products");
                }}
              >
                delete
              </button>
              <span>--------</span>
              <button className="bg-red-700" onClick={handleAddToCart}>
                add to cart
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ProductDetails;
