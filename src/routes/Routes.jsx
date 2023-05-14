import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
// import LoginLayout from "../layout/LoginLayout";
import Loging from "../pages/log&reg/Login";
import SignUp from "../pages/log&reg/SignUp";
import CheckoutLayout from "../layout/CheckoutLayout";
import CheckOut from "../pages/shared/checkOut/CheckOut";
import Bookings from "../pages/shared/bookings/Bookings";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'login',
          element: <Loging></Loging>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        {
          path: 'book',
          element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
        }
      ]
    },
    {
      path: 'bookings',
      element: <PrivateRoute><CheckoutLayout></CheckoutLayout></PrivateRoute>,
      children: [
        {
          path: ':id',
          element: <CheckOut></CheckOut>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        }
      ]
    }
  ]);

  export default router