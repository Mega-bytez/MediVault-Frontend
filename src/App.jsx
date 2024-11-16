import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import LandingPage from "./pages/landingPage";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import StorePage from "./pages/storePage";
import StoreProducts from "./components/StoreProducts";
import ProductReview from "./pages/productReview";
import DashboardLayout from "./layouts/DashboardLayout";
import MyProducts from "./pages/dashboard/components/AllVendorProducts";
import AllVendorProducts from "./pages/dashboard/components/AllVendorProducts";
import AddProductForm from "./pages/dashboard/components/AddProductForm";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/sign-up",
      element: <SignUpPage />,
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <AllVendorProducts />,
        },
        {
          path: "/dashboard/new-product",
          element: <AddProductForm />,
        },
        {
          path: "/dashboard/edit-product/:id",
          element: <EditProductForm />,
        }
      ],
    },
    {
      path: "/store/:id",
      element: <StorePage />,
      children: [
        {
          index: true,
          element: <StoreProducts />,
        },
      ],
    },
    {
      path: "/product-review",
      element: <ProductReview />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
