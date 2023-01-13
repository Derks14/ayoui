import App from "../App.jsx";
import { AuthLayout } from "@/layouts/AuthLayout.jsx";
import { DashboardLayout } from "@/layouts/DashboardLayout.jsx";
import { AuthRoutes } from "./auth/auth-routes.jsx";
import { createBrowserRouter } from "react-router-dom";
import { DashboardRoutes } from "./dashboard/dashboard-routes.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // Auth layouts
      {
        path: "/auth",
        element: <AuthLayout />,
        children: [...AuthRoutes],
      },
      //  dashboard layout
      {
        element: <DashboardLayout />,
        children: [...DashboardRoutes],
      },
    ],
  },
]);
