import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './layouts/Layout';

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
      ],
    }]);

    return <RouterProvider router={router} />;
}

export default App
