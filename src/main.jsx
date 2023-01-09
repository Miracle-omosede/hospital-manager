import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import LoginForm from './pages/LoginForm'
import SignupForm from './pages/SignupForm'

import {
  BrowserRouter as Router
} from "react-router-dom";



ReactDOM.createRoot(document.getElementById('root')).render(
  // <RouterProvider router={router} />
  <Router>
    <App />
  </Router>
);
