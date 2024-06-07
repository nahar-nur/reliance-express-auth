import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "./layout/Root";
import Home from "../pages/Home/Home";
import Service from '../pages/Home/SerceCard/Sevice'
import Login from "../pages/Home/Login/Login";
import Register from "../pages/Home/Register/Register";
import Error from "../pages/Error/Error";
import AboutUs from "../pages/Home/AboutUs/AboutUs";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children:[
      {
        path: '/',
        element:<Home></Home>,
        loader: ()=>fetch('./express.json')
       } ,
       {
        path: '/service/:id',
        element: <Service></Service>,
        loader: ()=>fetch('../express.json')
       },
       {
        path: '/login',
        element: <Login></Login>
       },
       {
        path: '/register',
        element: <Register></Register>
       },
       {
        path: '/about',
        element: <PrivateRoute><AboutUs></AboutUs></PrivateRoute>
       },
       {
        path:'/update',
        element: <PrivateRoute> <UpdateProfile></UpdateProfile></PrivateRoute>
       }
    ]
    },
  ]);
  export default router