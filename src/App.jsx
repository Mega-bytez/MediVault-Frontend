import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/landingPage'
import Dashboard from './pages/dashboard'
import LoginPage from './pages/loginPage'
import SignUpPage from './pages/signUpPage'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<LandingPage />
    },
    {
      path:"/login",
      element: <LoginPage />
    },
    {
      path:"/sign-up",
      element: <SignUpPage />
    },
    {
      path:"/dashboard",
      element: <Dashboard />
    }
  ])

  return <RouterProvider router={router}/>
}

export default App
