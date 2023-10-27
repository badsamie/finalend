import React from "react";
import { Route, Routes } from "react-router-dom";
import Chat from "../components/chat/Chat";

const MainRoutes = () => {
  const ROUTES = [
    {
      id: 15,
      path: "/chat",
      element: <Chat />,
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
