import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './pages/Home';
import Store from './pages/Store'
import AddCart from './pages/Add-Cart';
import ViewCart from './pages/View-Cart';
import Delivery from './pages/Delivery';

const router = createBrowserRouter([
  { path: "/", element: <App />},
  { path: "/Home", element: <Home/> },
  {path: "/Store", element: <Store/>},
  {path: "/AddCart", element: <AddCart/>},
  {path: "/ViewCart", element: <ViewCart/>},
  {path: "/Delivery", element: <Delivery/>}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


