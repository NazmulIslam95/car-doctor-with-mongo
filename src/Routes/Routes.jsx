import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Booking from "../Pages/Booking/Booking";
import MyCart from "../Pages/MyCart/MyCart";
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
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "booking/:id",
        element: (
          <PrivateRoute>
            <Booking></Booking>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://car-doctor-server-tau-ten.vercel.app/services/${params.id}`),
      },
      {
        path: "myCart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
