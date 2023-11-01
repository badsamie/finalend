// import React from "react";
// import { useNavigate } from "react-router-dom";
// import polyglot2 from "./images/polyglot2-removebg-preview.png";
// import polyglot from "./images/polyglot-removebg-preview.png";
// import { isUserLogin, logout } from "../../helpers/functions";
// import "./stile/Navbar.css";
// const Navbar = () => {
//   const navigate = useNavigate();
//   return (
//     <header className="w-full sticky ">
//       <div className="content ">
//         <img src={polyglot} alt="polyglot" className="h-56 -mt-20 " />
//         <img src={polyglot2} alt="polyglot" className="h-20 ml-20" />
//         {/* <div className="perehodim"> */}
//         <h4 className="menuItem1" onClick={() => navigate("/register")}>
//           register
//         </h4>
//         <h4 className="menuItem2" onClick={() => navigate("/")}>
//           Home
//         </h4>
//         <h4 className="menuItem3" onClick={() => navigate("/product-create")}>
//           Create
//         </h4>
//         <h4 className="menuItem4" onClick={() => navigate("/products")}>
//           Products Page
//         </h4>
//         <h4 className="menuItem5" onClick={() => navigate("/cart")}>
//           CART
//         </h4>{" "}
//         <h4 className="menuItem6" onClick={() => navigate("/favorites")}>
//           FAV
//         </h4>
//         <h4 className="menuItem7" onClick={() => navigate("/dompage")}>
//           dom
//         </h4>
//         {isUserLogin() ? (
//           <button
//             className="logoButton"
//             onClick={() => {
//               logout();
//               navigate("/");
//             }}
//           >
//             Logout
//           </button>
//         ) : (
//           <button onClick={() => navigate("/login")}>login</button>
//         )}
//         {/* </div> */}
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import React from "react";
import { useNavigate } from "react-router-dom";
import polyglot2 from "./images/polyglot2-removebg-preview.png";
import polyglot from "./images/polyglot-removebg-preview.png";
import { isUserLogin, logout } from "../../helpers/functions";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className="w-full sticky ">
      <div className="flex flex-wrap justify-between mt-5 ">
        <img src={polyglot} alt="polyglot" className="h-56 -mt-20 " />
        <img src={polyglot2} alt="polyglot" className="h-20 ml-20" />
        <h4
          style={{
            height: "30px",
            borderRadius: "10px",
            marginTop: "1.5%",
            padding: "0 8px",
          }}
          className="cursor-pointer bg-rose-500"
          onClick={() => navigate("/register")}
        >
          register
        </h4>
        <h4
          style={{
            height: "30px",
            borderRadius: "10px",
            marginTop: "1.5%",
            padding: "0 8px",
          }}
          className="cursor-pointer bg-red-500"
          onClick={() => navigate("/")}
        >
          Home
        </h4>
        <h4
          style={{
            height: "30px",
            borderRadius: "10px",
            marginTop: "1.5%",
            padding: "0 8px",
          }}
          className="cursor-pointer bg-green-500"
          onClick={() => navigate("/product-create")}
        >
          Create
        </h4>
        <h4
          style={{
            height: "30px",
            borderRadius: "10px",
            marginTop: "1.5%",
            padding: "0 8px",
          }}
          className="cursor-pointer bg-blue-400"
          onClick={() => navigate("/products")}
        >
          Products Page
        </h4>
        <h4
          style={{
            height: "30px",
            borderRadius: "10px",
            marginTop: "1.5%",
            padding: "0 8px",
          }}
          className="cursor-pointer bg-blue-400"
          onClick={() => navigate("/cart")}
        >
          CART
        </h4>{" "}
        <h4
          style={{
            height: "30px",
            borderRadius: "10px",
            marginTop: "1.5%",
            padding: "0 8px",
          }}
          className="cursor-pointer bg-blue-400"
          onClick={() => navigate("/favorites")}
        >
          FAV
        </h4>
        <h4
          style={{
            height: "30px",
            borderRadius: "10px",
            marginTop: "1.5%",
            padding: "0 8px",
          }}
          className="cursor-pointer bg-blue-400"
          onClick={() => navigate("/dompage")}
        >
          dom
        </h4>
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
