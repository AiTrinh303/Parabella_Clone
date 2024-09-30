import React from 'react'
import Navbar from './components/Navbar/Navbar'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/Home',
          element: <LandingPage />,
        },
      ],
    }]);

    return <RouterProvider router={router} />;
}

export default App
