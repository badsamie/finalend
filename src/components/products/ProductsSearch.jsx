import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/products/productsActions";
import { setSearchVal } from "../../store/products/productsSlice";
const ProductsSearch = () => {
  const { search } = useSelector((state) => state.products);
  const [searchValue, setSearhValue] = useState(search);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!search) {
      setSearhValue(search);
    }
  }, [search]);

  const live = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };
  const liveSearch = live((value) => {
    dispatch(setSearchVal({ search: value }));
    dispatch(getProducts());
  }, 300);

  const changeSearch = (value) => {
    setSearhValue(value);
    liveSearch(value);
  };

  return (
    <>
      <input
        onChange={(e) => changeSearch(e.target.value)}
        type="text"
        value={searchValue}
        id="Search"
        placeholder="Search for..."
      />
      <button
        onClick={() => {
          dispatch(setSearchVal({ search: searchValue }));
          dispatch(getProducts());
        }}
      >
        go
      </button>
    </>
  );
};

export default ProductsSearch;
