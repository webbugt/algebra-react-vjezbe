import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/onama",
    element: <h1>O nama</h1>
  },
  {
    path: "/kontakt",
    element: <h1>Kontakt</h1>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <header>
      <a href="/">Naslovna</a>
      <a href="/onama">O nama</a>
      <a href="/kontakt">Kontakt</a>
    </header>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
