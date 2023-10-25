import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "../pages/ProductsPage";
import ProductCreatePage from "../pages/ProductCreatePage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import ProductEditPage from "../pages/ProductEditPage";

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
      id: 3,
      path: "/details/:id",
      element: <ProductDetailsPage />,
    },
    {
      id: 3,
      path: "/edit/:id",
      element: <ProductEditPage />,
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
