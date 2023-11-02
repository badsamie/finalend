import React from "react";
import MainRoutes from "./routing/MainRoutes";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
// import HomePage from "./pages/HomePage";



const App = () => {
  return (
 
    <>
      <Navbar />
      <MainRoutes />
      <Footer />
      {/* <HomePage/> */}

    </>
  );
};

export default App;
