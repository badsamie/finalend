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
    <div>
      <input
        onChange={(e) => changeSearch(e.target.value)}
        type="text"
        value={searchValue}
        id="Search"
        placeholder="Search for..."
        className="h-9 rounded "
      />
      <button
        onClick={() => {
          dispatch(setSearchVal({ search: searchValue }));
          dispatch(getProducts());
        }}
        style={{
          backgroundColor: "black",
          color: "white",
          width: "25px",
          height: "33px",
          borderRadius: "0 7px 7px 0",
        }}
      >
        go
      </button>
    </div>
  );
};

export default ProductsSearch;
