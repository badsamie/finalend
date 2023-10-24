import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap">
      <h4 onClick={() => navigate("/")}>Home</h4>
      <h4 onClick={() => navigate("/product-create")}>Create</h4>
      <h4 onClick={() => navigate("/products")}>Products Page</h4>
    </div>
  );
};

export default Navbar;
