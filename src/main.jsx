import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Onama } from "./routes/Onama.jsx";
import { Kontakt } from "./routes/Kontakt.jsx";
import { Primjeri } from "./routes/Primjeri.jsx";
import { Forme } from "./routes/Forme.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/onama",
    element: <Onama />,
  },
  {
    path: "/kontakt",
    element: <Kontakt />,
  },
  {
    path: "/primjeri",
    element: <Primjeri />
  },
  {
    path: "/forme",
    element: <Forme /> 
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
