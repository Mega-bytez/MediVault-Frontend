import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/landingPage'
import Dashboard from './pages/dashboard'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<LandingPage />
    },
    {
      path:"/dashboard",
      element: <Dashboard />
    }
  ])

  return <RouterProvider router={router}/>
}

export default App
