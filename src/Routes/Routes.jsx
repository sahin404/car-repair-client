import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Blog from "../pages/Blog/Blog";
import CheckOut from "../pages/CheckOut/CheckOut";
import MyBookings from "../pages/MyBookings/MyBookings";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/contact',
          element:<Contact></Contact>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<Signup></Signup>
        },{
          path:'/blog',
          element: <Blog></Blog>
        },
        {
          path:'/services/:id',
          element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/bookings',
          element:<PrivateRoute><MyBookings></MyBookings></PrivateRoute>
        }
      ]
    },
  ]);