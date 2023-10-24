import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../store/products/productsActions";

const ProductCreate = () => {
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
        placeholder="Description"
        onChange={(e) => setProduct({ ...product, location: e.target.value })}
      />
      <input
        type="text"
        placeholder="education"
        onChange={(e) => setProduct({ ...product, education: e.target.value })}
      />
      <input
        type="text"
        placeholder="price_dollar"
        onChange={(e) =>
          setProduct({ ...product, price_dollar: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="price"
        onChange={(e) =>
          setProduct({
            ...product,
            price: e.target.value,
          })
        }
      />
      <input
        type="text"
        placeholder="category"
        onChange={(e) =>
          setProduct({
            ...product,
            category: e.target.value,
          })
        }
      />

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
