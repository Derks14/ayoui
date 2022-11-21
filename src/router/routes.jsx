import { Auth } from "@/layouts/Auth.jsx";
import { Dashboard } from "@/layouts/Dashboard.jsx";
import { Login } from "@/views/auth/login/login.jsx";
import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // Auth layouts
      {
        element: <Auth />,
        children: [
          {
            path: '',
            element: <Login />
          }
        ]
      },
      //  dashboard layout
      {
        path: 'dashboard',
        element: <Dashboard />,
        children: []
      }

    ]
  },
]);
