import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Layout, RequiredAuthLayout} from "./layouts/Layout";
import LandingPage from "./pages/landingPage/LandingPage";
import SignupPage from "./pages/signupPage/SignupPage";
import LoginPage from "./pages/loginPage/LoginPage";
import EmailVerificationPage from "./pages/emailVerificationPage/EmailVerificationPage";
import CoursesPage from "./pages/coursesPage/CoursesPage";
import EspPage from "./pages/EspPage/Esp";
import DashboardPage from "./pages/dashboardPage/DashboardPage";
import QuizzesPage from "./pages/QuizzesPage/Quizzes";
import VcPage from "./pages/VcPage/VirtualClassroom";
import HealthcarePage from "./pages/healthcare/HealthcarePage";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <LandingPage />,
        },
        {
          path: '/dashboard',
          element: <DashboardPage />,
        },
        {
          path: '/login',
          element: <LoginPage />,
        },
        {
          path: "/signup",
          element: <SignupPage />,
        },
        {
          path: '/verify-email',
          element: <EmailVerificationPage />,
        },
        {
          path: '/courses',
          element: <CoursesPage />,
        },
        {
          path: "/quizzes",
          element: <QuizzesPage />,
        },
        {
          path: "/esp",
          element: <EspPage />,
        },
        {
          path: "/quizzes",
          element: <QuizzesPage />,
        },
        {
          path: "/virtual-classroom",
          element: <VcPage />,
        },
        {
          path: "/healthcare",
          element: <HealthcarePage />,
        },
      ],
    },
    {
      path: "/",
      element: <RequiredAuthLayout />,
      children: [
        {
          path: "/dashboard",
          element: <DashboardPage />,
        },
      ],
    }
  ]);
  
  return <RouterProvider router={router} />;
}

export default App;