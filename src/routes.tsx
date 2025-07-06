import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/home";
import SignIn from "./pages/sign-in/sign-in";
import SignUp from "./pages/sign-up/sign-up";
import Subscription from "./pages/subscription/subscription";
import SubscriptionUpdate from "./pages/subscription-update/subscription-update";
import Dashboard from "./pages/dashboard/dashboard";
import UserPage from "./pages/user/user-page";
import Languages from "./pages/languages/languages";
import LessonBox from "./pages/lesson-box/lesson-box";
import LessonsPage from "./pages/lesson/lesson-page";
import LessonMenu from "./pages/lesson-menu/lesson-menu";
import CheckEmail from "./pages/check-email/check-email";

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
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/user-page",
        element: <UserPage />,
      },
      {
        path: "/languages",
        element: <Languages />,
      },
      {
        path: "languages/:name",
        element: <LessonsPage />,
      },
      {
        path: "/lesson/:id",
        element: <LessonBox />,
      },
      { path: "/lesson/update/:id", element: <LessonMenu /> },
      { path: "/email", element: <CheckEmail /> },
    ],
  },
]);

export default Router;
