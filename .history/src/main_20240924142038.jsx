import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './context/AuthContext.jsx'


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>      
        <App />      
    </AuthContextProvider>
  </React.StrictMode>
)

