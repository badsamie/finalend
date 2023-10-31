import React from "react";
import { useNavigate } from "react-router-dom";
import planet from "./images/planet-duo-removebg-preview.png";
import planet2 from './images/violet-planet-removebg-preview.png'

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen items-center -mt-36">
 
      <div className="flex-1 flex justify-center">
        <img src={planet2} alt="planet-polyglot" />
      </div>

    
      <div className="flex-1 flex flex-col justify-center items-center">
        <span className="text-violet-500 text-center text-3xl font-bold uppercase">
          Learn a language for free with Polyglot!
        </span>
        <div className="flex flex-col items-center mt-8">
          <button
            onClick={() => navigate("/registerPage")}
            className="cursor-pointer bg-violet-400 text-white text-center text-2xl font-light uppercase my-4 rounded py-2 px-4 w-80 hover:bg-violet-500"
          >
            get started
          </button>
          <button
            onClick={() => navigate("/login")}
            className="bg-transparent border border-violet-600 text-violet-500 text-center text-xl  rounded py-2 px-4 w-80 font-light uppercase hover:bg-white hover:text-violet-500"
          >
            i already have an account
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
