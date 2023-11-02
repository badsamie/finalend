import React from 'react';
import { useNavigate } from 'react-router-dom';
import polyglot from "../components/ui/images/polyglot-removebg-preview.png";
import kaban from "./images/photo_2023-10-31_16.43.40-removebg-preview.png";

const DomPage = () => {
  const navigate = useNavigate();


  return (
    <div className="flex -mt-12">

      <div className="w-1/5 h-screen p-4  bg-purple-100">
      <img src={polyglot} alt="polyglot"  />
        <ul className='mt-12'>
          <li onClick={() => navigate("/chat")} className="cursor-pointer text-violet-500 
          text-xl font-bold  hover:text-violet-700 hover:font-bolder uppercase">Chat</li>
          <li onClick={() => navigate("/translater")} className="cursor-pointer  text-violet-500
           text-xl font-bold  hover:text-violet-700 hover:font-bold uppercase">Translater</li>
          <li onClick={() => navigate("/cart")} className="cursor-pointer  text-violet-500 
           text-xl font-bold hover:text-violet-700 hover:font-bold uppercase">Cart</li>
          <li onClick={() => navigate("/quiz")} className="cursor-pointer  text-violet-500 
           text-xl font-bold hover:text-violet-700 hover:font-bold uppercase">Quiz</li>
            <li onClick={() => navigate("/products")} className="cursor-pointer  text-violet-500 
           text-xl font-bold hover:text-violet-700 hover:font-bold uppercase">Lessons</li>
            <li onClick={() => navigate("/favorites")} className="cursor-pointer  text-violet-500 
           text-xl font-bold hover:text-violet-700 hover:font-bold uppercase">Fav</li>
            <li onClick={() => navigate("/product-create")} className="cursor-pointer  text-violet-500 
           text-xl font-bold hover:text-violet-700 hover:font-bold uppercase">Create</li>
        </ul>
      </div>

      <div className="w-4/5 p-4 bg-white">
        <div className='mt-24'>
        <img src={kaban} alt="" />
       <h1 className='text-center uppercase text-violet-400 -mt-64 ml-80 font-bold text-6xl '>Polyglot</h1>
        </div>
       
      </div>
    </div>
  );
};

export default DomPage;
