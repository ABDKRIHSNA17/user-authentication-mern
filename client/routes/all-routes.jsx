import { createBrowserRouter } from "react-router-dom";
import Home from "../src/pages/Home";
import Signup from "../src/pages/Signup";
import Login from "../src/pages/Login";
import Profile from "../src/component/Profile";
import App from "../src/App";
import Logout from "../src/pages/Logout";
import ProtectedRoute from "../src/component/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
