import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "../pages/ProductsPage";
import ProductCreatePage from "../pages/ProductCreatePage";

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
