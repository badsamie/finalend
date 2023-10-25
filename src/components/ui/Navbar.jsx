import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap justify-evenly ">
      <h4
        className="cursor-pointer bg-yellow-500"
        onClick={() => navigate("/login")}
      >
        login
      </h4>
      <h4
        className="cursor-pointer bg-rose-500"
        onClick={() => navigate("/register")}
      >
        register
      </h4>
      <h4 className="cursor-pointer bg-red-500" onClick={() => navigate("/")}>
        Home
      </h4>
      <h4
        className="cursor-pointer bg-green-500"
        onClick={() => navigate("/product-create")}
      >
        Create
      </h4>
      <h4
        className="cursor-pointer bg-blue-400"
        onClick={() => navigate("/products")}
      >
        Products Page
      </h4>
    </div>
  );
};

export default Navbar;
