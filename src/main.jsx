import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Onama } from "./routes/Onama.jsx";
import { Kontakt } from "./routes/Kontakt.jsx";
import { Primjeri } from "./routes/Primjeri.jsx";
import { Forme } from "./routes/Forme.jsx";
import { ContextPage } from "./routes/Context.jsx";
import { FlagsPage } from "./routes/Flags.jsx";
import { store } from "./store";
import { Provider } from 'react-redux'

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
  },
  {
    path: "/context",
    element: <ContextPage /> 
  },
  {
    path: "/flags",
    element: <FlagsPage />
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
