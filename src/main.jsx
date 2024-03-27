import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/onama",
    element: (
      <div>
        <Header />
        <h1>O nama</h1>
      </div>
    ),
  },
  {
    path: "/kontakt",
    element: (
      <div>
        <Header />
        <h1>Kontakt</h1>
      </div>
    ),
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
