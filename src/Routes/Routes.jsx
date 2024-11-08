import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home/Home";

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
        }
      ]
    },
  ]);