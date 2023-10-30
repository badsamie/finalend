import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  createImage,
  editProduct,
  getCategories,
  getOneProduct,
} from "../../store/products/productsActions";
import { clearOneProductState } from "../../store/products/productsSlice";

const ProductEdit = () => {
  const { loading, oneProduct, category } = useSelector(
    (state) => state.products
  );
  const [product, setProduct] = useState(oneProduct);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCategories());
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
            <div className="mx-auto w-1/4 flex flex-col justify-center items-center m-24">
              <h2 className="mb-8 font-bold text-3xl text-center">Create Page</h2>
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
              <select
                onChange={(e) =>
                  setProduct({ ...product, category: e.target.value })
                }
              >
                <option>Choose category</option>
                {category.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <input
                className="border border-slate-300 w-full h-12 p-3 rounded mb-4"
                type="file"
                onChange={(e) => {
                  const selectedFile = e.target.files[0];
                  setProduct({ ...product, image: selectedFile });
                }}
              />

              <button
                onClick={() => {
                  dispatch(editProduct({ product }));
                  dispatch(createImage({ product }));
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
