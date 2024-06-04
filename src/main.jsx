import React from 'react';
import router from './routs/Routs';
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </React.StrictMode>,
)
