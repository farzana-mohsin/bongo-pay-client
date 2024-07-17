import { createBrowserRouter } from "react-router-dom";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Root from "../Components/Root";
import Home from "../Pages/Home";
import CashIn from "../Dashboard/User/CashIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/cash-in",
        element: <CashIn></CashIn>,
      },
    ],
  },
]);

export default router;
