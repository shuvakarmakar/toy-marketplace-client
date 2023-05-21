import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main";
import Blog from "../pages/Blog/Blog";
import Error from "../pages/Error/Error";
import AddAToy from "../pages/Home/AddAToy/AddAToy";
import AllToys from "../pages/Home/AllToys/AllToys";
import Home from "../pages/Home/Home/Home";
import MyToys from "../pages/Home/MyToys/MyToys";
import UpdateToy from "../pages/Home/MyToys/UpdateToy";
import ToyDetails from "../pages/Home/ToyDetails/ToyDetails";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
        path: "addatoy",
        element: <AddAToy></AddAToy>
      },
      {
        path: "mytoys",
        element: <MyToys></MyToys>
      },
      {
        path: "/toy/:id",
        element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://toy-marketplace-server-red.vercel.app/allToys/${params.id}`)
      },
      {
        path: "/updatetoy/:id",
        element: <UpdateToy />,
        loader: ({params}) => fetch(`https://toy-marketplace-server-red.vercel.app/allToys/${params.id}`)
      },
      {
        path: "*",
        element: <Error></Error>
      },
    ]
  },
]);

export default router;