import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './layouts/Layout';
import HomePage from './pages/HomePage/HomePage';
import ErsteSchrittePage from './pages/ErsteSchrittePage/ErsteSchrittePage';

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
          path: '/aca,
          element: <HomePage />,
        },
        {
          path: '/',
          element: <HomePage />,
        },

      ],
    }]);

    return <RouterProvider router={router} />;
}

export default App
