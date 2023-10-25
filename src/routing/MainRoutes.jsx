import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "../pages/ProductsPage";
import ProductCreatePage from "../pages/ProductCreatePage";
import Register from "../components/account/Register";
import Login from "../components/account/Login";

const MainRoutes = () => {
  const ROUTES = [
    {
      id: 1,
      path: "/products",
      element: <ProductsPage />,
    },
    {
      id: 2,
      path: "/product-create",
      element: <ProductCreatePage />,
    },
    {
      id:3,
      path:"register",
      element:<Register/>
    }, {
      id:4,
      path:"login",
      element:<Login/>
    }
  ];
  return (
    <Routes>
      {ROUTES.map((route) => (
        <Route key={route.id} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
