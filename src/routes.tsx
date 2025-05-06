import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/home";
import SignIn from "./pages/sign-in/sign-in";
import SignUp from "./pages/sign-up/sign-up";
import Subscription from "./pages/subscription/subscription";
import SubscriptionUpdate from "./pages/subscription-update/subscription-update";
import Dashboard from "./pages/dashboard/dashboard";

const Router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/subscription",
        element: <Subscription />,
      },
      {
        path: "/subscription-update/:id",
        element: <SubscriptionUpdate />,
      },
      {
        path: "/private-dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default Router;
