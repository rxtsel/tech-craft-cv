import "@/styles/globals.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  DashboardContainer,
  HomePageContainer,
  SignInContainer,
  SignUpContainer
} from "./views";

const router = createBrowserRouter([
  { path: "/", element: <HomePageContainer /> },
  { path: "/auth/signin", element: <SignInContainer /> },
  { path: "/auth/signup", element: <SignUpContainer /> },
  { path: "/dashboard", element: <DashboardContainer /> }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
