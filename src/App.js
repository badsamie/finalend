import React from "react";
import MainRoutes from "./routing/MainRoutes";
import Navbar from "./components/ui/Navbar";

const App = () => {
  return (
    <>
      {/* <RegisterPage/> */}
      <Navbar/>
      <MainRoutes />
    </>
  );
};

export default App;
