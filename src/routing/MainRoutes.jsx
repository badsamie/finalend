import React from "react";
import { Route, Routes } from "react-router-dom";
import Quiz from "../components/quiz/Quiz";
import Chat from "../components/chat/Chat";
import ProductsPage from "../pages/ProductsPage";
import ProductCreatePage from "../pages/ProductCreatePage";
import Register from "../components/account/Register";
import Login from "../components/account/Login";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import ProductEditPage from "../pages/ProductEditPage";
import Cart from "../components/cart/Cart";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";
import DomPage from "../pages/DomPage";
import RecoveryForm from "../components/account/ForgotPassword/RecoveryForm";
import ResetPasswordPage from "../components/account/ForgotPassword/ResetPasswordPage";
import PayPage from "../pages/PayPage/PayPage";

import Favorites from "../components/fav/Favorites";
import PageNotFound from "../pages/NotFound";
import Translate from "../pages/translate/Translate";

const MainRoutes = () => {
  const ROUTES = [
    {
      id: 0,
      path: "*",
      element: <PageNotFound />,
    },
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
      id: 4,
      path: "/edit/:id",
      element: <ProductEditPage />,
    },
    {
      id: 5,
      path: "/registerPage",
      element: <RegisterPage />,
    },
    {
      id: 6,
      path: "/login",
      element: <Login />,
    },
    {
      id: 7,
      path: "/cart",
      element: <Cart />,
    },
    {
      id: 8,
      path: "/quiz",
      element: <Quiz />,
    },
    {
      id: 9,
      path: "/chat",
      element: <Chat />,
    },
    {
      id: 11,
      path: "/register",
      element: <Register />,
    },
    {
      id: 12,
      path: "/dompage",
      element: <DomPage />,
    },
    {
      id: 13,
      path: "/favorites",
      element: <Favorites />,
    },
    {
      id: 14,
      path: "/order",
      element: <PayPage />,
    },
    {
      id: 15,
      path: "/",
      element: <HomePage />,
    },
    {
      id: 16,
      path: "/recForm",
      element: <RecoveryForm />,
    },
    {
      id: 17,
      path: "/voctonovlenie",
      element: <ResetPasswordPage />,
    },
    {
      id: 18,
      path: "/translate",
      element: <Translate />,
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
