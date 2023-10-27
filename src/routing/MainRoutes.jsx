import React from "react";
import { Route, Routes } from "react-router-dom";
import Quiz from "../components/quiz/Quiz";
import ListeningTest from "../components/quiz/ListeningTest";

const MainRoutes = () => {
  const ROUTES = [
    {
    id: 1,
    path: "/quiz",
    element: <Quiz/>
  },
  {
    id: 2,
    path: "/audio",
    element: <ListeningTest />
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
