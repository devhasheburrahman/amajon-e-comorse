import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './Component/Shop/Shop.jsx';
import Home from './Component/Home/Home.jsx';
import Order from './Component/Order/Order.jsx';
import Inventory from './Component/Inventory/Inventory.jsx';
import Login from './Component/Login/Login.jsx';
import cardloderData from './LoderData/Loderdata.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>,
      },
      {
        path: '/order',
        element: <Order></Order>,
        loader: cardloderData
        // loader: () => fetch('products.json')
      },
      {
        path: '/ inventory',
        element: <Inventory></Inventory>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
    ]




  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(


  <RouterProvider router={router} />
)
