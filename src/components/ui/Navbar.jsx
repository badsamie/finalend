import React from "react";
import { useNavigate } from "react-router-dom";
import polyglot from "./images/polyglot-removebg-preview.png";
import { isUserLogin, logout } from "../../helpers/functions";
import CountrySlider from "../../pages/CountrySlider";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className="w-full sticky ">
      <div className="flex flex-wrap justify-between mt-5 ">
        <img
          src={polyglot}
          alt="polyglot"
          className="h-56 -mt-20 "
          onClick={() => navigate("/")}
        />
        <div className="ml-96">
          <CountrySlider />
        </div>

        {isUserLogin() ? (
          <button
            className="bg-violet-400 w-24 mr-20 mt-4 h-9 uppercase text-white text-sm rounded font-bold hover:bg-violet-500"
            onClick={() => {
              logout();
              navigate("/");
            }}
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-violet-400 text-white font-bold cursor-pointer w-24 h-9 hover:bg-violet-500 rounded mr-20 mt-4"
          >
            login
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
