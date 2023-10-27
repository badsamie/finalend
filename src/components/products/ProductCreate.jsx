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
    <div>
      <h3>Create Product</h3>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => setProduct({ ...product, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="location"
        onChange={(e) => setProduct({ ...product, location: e.target.value })}
      />
      <input
        type="text"
        placeholder="education"
        onChange={(e) => setProduct({ ...product, education: e.target.value })}
      />
      <input
        type="text"
        placeholder="description"
        onChange={(e) =>
          setProduct({ ...product, description: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="price_dollar (only num)"
        onChange={(e) =>
          setProduct({ ...product, price_dollar: e.target.value })
        }
      />
      <input
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
        <option>Choose category</option>
        {category.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button
        onClick={() => {
          dispatch(createProduct({ product }));
          navigate("/products");
        }}
      >
        Create
      </button>
    </div>
  );
};

export default ProductCreate;
