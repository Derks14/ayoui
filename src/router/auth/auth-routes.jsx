import { Login } from "@/views/auth/login/login.jsx";

export const AuthRoutes = [
  {
    path: "/auth",
    element: <Login />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
];
