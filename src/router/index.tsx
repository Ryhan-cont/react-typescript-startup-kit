import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "@/layout/fullpage/BaseLayout.tsx";
// import ErrorPage from "../Pages/ErrorPage";
//import Home from lazy(()=>import("../pages/home/Home.jsx"));

console.log('cccd')

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout></BaseLayout>,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      // {
      //   path: "/",
      //   element: <Home></Home>,
      // },
    ],
  },
]);

export default Routes;
