import React from "react";
// import MainRoutes from "./routing/MainRoutes";
// import Navbar from "./components/ui/Navbar";
// import HomePage from "./pages/HomePage";
import Navbar from "./components/ui/Navbar";
import HomePage from "./pages/HomePage";
import MainRoutes from "./routing/MainRoutes";
const App = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <MainRoutes />
      {/* <Navbar /> */}
      {/* <MainRoutes /> */}
      {/* <HomePage/> */}
    </>
  );
};

export default App;
