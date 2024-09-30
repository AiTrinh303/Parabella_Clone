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
          element: <HomePage />,
        },
      ],
    }]);

    return <RouterProvider router={router} />;
}

export default App
