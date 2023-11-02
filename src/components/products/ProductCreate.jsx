import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  createProduct,
  getCategories,
  getProducts,
} from "../../store/products/productsActions";

const ProductCreate = () => {
  const { category } = useSelector((state) => state.products);
  const [product, setProduct] = useState({
    title: "",
    location: "",
    price: "",
    price_dollar: "",
    education: "",
    description: "",
    count_views: 0,
    category: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div className="mx-auto w-1/4 flex flex-col justify-center items-center m-24">
      <h3 className="mb-8 font-bold text-3xl text-center text-violet-500 uppercase">
        Create Product
      </h3>
      <input
        className="border border-slate-300 w-full p-3 rounded mb-4"
        type="text"
        placeholder="title"
        onChange={(e) => setProduct({ ...product, title: e.target.value })}
      />
      <input
        className="border border-slate-300 w-full p-3 rounded mb-4"
        type="text"
        placeholder="location"
        onChange={(e) => setProduct({ ...product, location: e.target.value })}
      />
      <input
        className="border border-slate-300 w-full p-3 rounded mb-4"
        type="text"
        placeholder="education"
        onChange={(e) => setProduct({ ...product, education: e.target.value })}
      />
      <input
        className="border border-slate-300 w-full p-3 rounded mb-4"
        type="text"
        placeholder="description"
        onChange={(e) =>
          setProduct({ ...product, description: e.target.value })
        }
      />
      <input
        className="border border-slate-300 w-full p-3 rounded mb-4"
        type="text"
        placeholder="price_dollar (only num)"
        onChange={(e) =>
          setProduct({ ...product, price_dollar: e.target.value })
        }
      />
      <input
        className="border border-slate-300 w-full p-3 rounded mb-4"
        type="text"
        placeholder="price (only num)"
        onChange={(e) =>
          setProduct({
            ...product,
            price: e.target.value,
          })
        }
      />
      <select
        onChange={(e) => setProduct({ ...product, category: e.target.value })}
      >
        <option className="w-40 p-2 border border-purple-900 rounded-md">Choose category</option>
        {category.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button
        className="w-full text-center py-3 rounded bg-purple-500 font-bold text-white hover:bg-purple-700"
        onClick={() => {
          dispatch(createProduct({ product }));
          dispatch(getProducts());
          navigate("/products");
        }}
      >
        Create
      </button>
    </div>
  );
};

export default ProductCreate;
