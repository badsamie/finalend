import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/products/productsActions";
import { setSearchVal } from "../../store/products/productsSlice";
const ProductsSearch = () => {
  const { search } = useSelector((state) => state.products);
  const [searchValue, setSearhValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (!search) {
      setSearhValue("");
    }
  }, [search]);

  return (
    <>
      <input
        onChange={(e) => setSearhValue(e.target.value)}
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
