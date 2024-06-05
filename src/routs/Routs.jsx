import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "./layout/Root";
import Home from "../pages/Home/Home";
import Service from '../pages/Home/SerceCard/Sevice'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
      {
        path: '/',
        element:<Home></Home>,
        loader: ()=>fetch('./express.json')
       } ,
       {
        path: '/service/:id',
        element: <Service></Service>
       }
    ]
    },
  ]);
  export default router