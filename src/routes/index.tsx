import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Login</div>,
  },
  {
    path: "/cadastro",
    element: <div>Cadastro</div>,
  },
  {
    path: "/user",
    element: <div>Usuário</div>,
  },
  {
    path: "/feed",
    element: <div>Feed</div>,
  },
]);