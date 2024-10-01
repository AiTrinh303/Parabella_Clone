import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './layouts/Layout';
import HomePage from './pages/HomePage/HomePage';
import ErsteSchrittePage from './pages/ErsteSchrittePage/ErsteSchrittePage';
import AcademyPage from './pages/AcademyPage/AcademyPage';
import ContactPage from './pages/ContactPage/ContactPage';
import Login from './components/Login/Login';

// Styles
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
      delay: 150,
    });
    AOS.refresh();
  }, []);
  
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
        },
        {
          path:'/login',
          element: <Login />
        }
      ],
    }
  ]);

    return <RouterProvider router={router} />;
}

export default App
