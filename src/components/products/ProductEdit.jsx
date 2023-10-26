import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  editProduct,
  getOneProduct,
} from "../../store/products/productsActions";
import { clearOneProductState } from "../../store/products/productsSlice";

const ProductEdit = () => {
  const { loading, oneProduct } = useSelector((state) => state.products);
  const [product, setProduct] = useState(oneProduct);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getOneProduct({ id }));
    return () => dispatch(clearOneProductState());
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setProduct(oneProduct);
    }
  }, [oneProduct]);
  return (
    <>
      {loading ? (
        <h3>loading....</h3>
      ) : (
        <>
          {product && (
            <div>
              <h2>Create Page</h2>
              <input
                className="border border-slate-300 w-full h-12 p-3 rounded mb-4"
                type="text"
                placeholder="Name"
                onChange={(e) =>
                  setProduct({ ...product, title: e.target.value })
                }
                value={product.title}
              />
              <input
                className="border border-slate-300 w-full h-12 p-3 rounded mb-4"
                type="text"
                placeholder="Name"
                onChange={(e) =>
                  setProduct({ ...product, location: e.target.value })
                }
                value={product.location}
              />
              <input
                className="border border-slate-300 w-full h-12 p-3 rounded mb-4"
                type="text"
                placeholder="Name"
                onChange={(e) =>
                  setProduct({ ...product, price: e.target.value })
                }
                value={product.price}
              />
              <input
                className="border border-slate-300 w-full h-12 p-3 rounded mb-4"
                type="text"
                placeholder="Name"
                onChange={(e) =>
                  setProduct({ ...product, education: e.target.value })
                }
                value={product.education}
              />
              <input
                className="border border-slate-300 w-full h-12 p-3 rounded mb-4"
                type="text"
                placeholder="Name"
                onChange={(e) =>
                  setProduct({ ...product, description: e.target.value })
                }
                value={product.description}
              />
              <input
                className="border border-slate-300 w-full h-12 p-3 rounded mb-4"
                type="text"
                placeholder="Name"
                onChange={(e) =>
                  setProduct({ ...product, category: e.target.value })
                }
                value={product.category}
              />
              <button
                onClick={() => {
                  dispatch(editProduct({ product }));
                  navigate("/products");
                }}
              >
                save
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ProductEdit;
