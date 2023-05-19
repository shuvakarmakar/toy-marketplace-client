import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import Blog from "../pages/Blog/Blog";
import Error from "../pages/Error/Error";
import AddAToy from "../pages/Home/AddAToy/AddAToy";
import AllToys from "../pages/Home/AllToys/AllToys";
import Home from "../pages/Home/Home/Home";
import MyToys from "../pages/Home/MyToys/MyToys";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "blogs",
        element: <Blog></Blog>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "signup",
        element: <Signup></Signup>
      },
      {
        path: "alltoys",
        element: <AllToys></AllToys>
      },
      {
        path:"addatoy",
        element: <AddAToy></AddAToy>
      },
      {
        path: "mytoys",
        element: <MyToys></MyToys>
      },
      {
        path: "*",
        element: <Error></Error>
      },
    ]
  },
]);

export default router;