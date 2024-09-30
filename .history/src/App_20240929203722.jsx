import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './layouts/Layout';
import HomePage from './pages/HomePage/HomePage';
import ErsteSchrittePage from './pages/ErsteSchrittePage/ErsteSchrittePage';
import AcademyPage from './pages/AcademyPage/AcademyPage';
import ContactPage from './pages/ContactPage/ContactPage';
i

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/erste-schritte',
          element: <ErsteSchrittePage />,
        },
        {
          path: '/academy',
          element: <AcademyPage />,
        },
        {
          path: '/contact',
          element: <ContactPage />,
        }
      ],
    }]);

    return <RouterProvider router={router} />;
}

export default App
