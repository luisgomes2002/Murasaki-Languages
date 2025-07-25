import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/home";
import SignIn from "./pages/sign-in/sign-in";
import SignUp from "./pages/sign-up/sign-up";
import Subscription from "./pages/subscription/subscription";
import Dashboard from "./pages/dashboard/dashboard";
import UserPage from "./pages/user/user-page";
import Languages from "./pages/languages/languages";
import LessonBox from "./pages/lesson-box/lesson-box";
import LessonsPage from "./pages/lesson/lesson-page";
import LessonMenu from "./pages/lesson-menu/lesson-menu";
import CheckEmail from "./pages/check-email/check-email";
import PasswordSendEmail from "./pages/password-send-email/password-send-email";
import UpdatePasswordByEmail from "./pages/update-password-by-email/update-password-by-email";
import ConfirmEmail from "./pages/confirmed-email/confirmed-email";
import SendEmailConfirm from "./pages/send-email-confirm/send-email-confirm";
import ProtectedRoute from "./protected-route";

const Router = createBrowserRouter([
  {
    children: [
      { path: "/", element: <Home /> },
      { path: "/sign-in", element: <SignIn /> },
      { path: "/sign-up", element: <SignUp /> },
      { path: "/email", element: <CheckEmail /> },
      { path: "/upadate-password-email", element: <PasswordSendEmail /> },
      { path: "/update-password", element: <UpdatePasswordByEmail /> },
      { path: "/confirm", element: <ConfirmEmail /> },
      { path: "/send-email-confirm", element: <SendEmailConfirm /> },
      { path: "/subscription", element: <Subscription /> },
      { path: "/languages", element: <Languages /> },
      { path: "/languages/:name", element: <LessonsPage /> },

      {
        element: <ProtectedRoute />,
        children: [
          { path: "/dashboard", element: <Dashboard /> },
          { path: "/user-page", element: <UserPage /> },
          { path: "/lesson/:id", element: <LessonBox /> },
          { path: "/lesson/update/:id", element: <LessonMenu /> },
        ],
      },
    ],
  },
]);

export default Router;
