import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,

} from "react-router-dom";
import SignupForm from "../Pages/AddPage";
import Home from "../Pages/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },

  {
    path: "/add",
    element: <SignupForm/>,
  },
]);

export  default router