import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import Orders from './components/Orders/Orders.jsx'
import PrivateRoute from './Route/PrivateRoute.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/order',
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <createBrowserRouter>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </createBrowserRouter>,
)
