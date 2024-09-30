import React from 'react'
import Navbar from './components/Navbar/Navbar'

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
    }

export default App
