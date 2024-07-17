import { createBrowserRouter } from "react-router-dom";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Root from "../Components/Root";
import Home from "../Pages/Home";
import CashIn from "../Dashboard/User/CashIn";
import TransactionManagement from "../Dashboard/Agent/TransactionManagement";
import UserManagement from "../Dashboard/Admin/UserManagement";

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
      {
        path: "/pending-cash-request",
        element: <TransactionManagement></TransactionManagement>,
        loader: () =>
          fetch(`${import.meta.env.VITE_API_URL}/pending-cash-request`),
      },
      {
        path: "/manage-users",
        element: <UserManagement></UserManagement>,
      },
    ],
  },
]);

export default router;
