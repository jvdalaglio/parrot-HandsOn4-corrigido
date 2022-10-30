import { createBrowserRouter } from "react-router-dom";
import { Cadastro } from "../Pages/Cadastro";
import { Feed } from "../Pages/Feed"
import { Login } from "../Pages/Login"
import { User } from "../Pages/User"
import { NavBar } from "../Components/NavBar/NavBar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/feed",
    element: <Feed />,
  },
]);