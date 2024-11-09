import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/landingPage'
import Dashboard from './pages/dashboard'
import LoginPage from './pages/loginPage'
import SignUpPage from './pages/signUpPage'
import StorePage from './pages/storePage'
import StoreProducts from './components/StoreProducts'

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
    },
    {
      path:"/store/:id",
      element: <StorePage />,
      children: [
        {
          path:"all-products",
          element: <StoreProducts />
        }
      ]
    },
  ])

  return <RouterProvider router={router}/>
}

export default App
