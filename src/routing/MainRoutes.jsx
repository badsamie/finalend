import React from "react";
import { Route, Routes } from "react-router-dom";

const MainRoutes = () => {
  const ROUTES = [{}];
  return (
    <Routes>
      {ROUTES.map((route) => (
        <Route key={route.id} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
