import { createBrowserRouter } from "react-router-dom";
import { Cadastro } from "../Pages/Cadastro";
import { Feed } from "../Pages/Feed"
import { Login } from "../Pages/Login"
import { User } from "../Pages/User"
import { NavBar } from "../Components/NavBar/NavBar";
import { Logado } from "../Components/Layout/Logado";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Logado />,
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