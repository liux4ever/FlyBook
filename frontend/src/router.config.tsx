import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RouteGuard from "./RouteGuard";

const routes = createBrowserRouter([
  {
  path: "/",
  element: <RouteGuard />,
  children: [
    {
      path: "/home",
      element: <Home />
    },
    {
      path: "/login",
      element: <Login />
    }
  ]
  }
]);

export default routes;