import { Login } from "@/views/auth/login/login.jsx";
import { Register } from "@/views/auth/register/register.jsx";

export const AuthRoutes = [
  {
    path: "/auth",
    element: <Login />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },
];
