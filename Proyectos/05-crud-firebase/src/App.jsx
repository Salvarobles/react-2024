import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home";
import EditProductPage from "./pages/EditProductPage";
import PaymentPage from "./pages/PaymentPage";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>,

    },
    {
      path: '/login',
      element: <LoginPage/>,
    },
    {
      path: '/productos/:idproduct',
      element: <EditProductPage/>,
    },
    {
      path: "/payment",
      element: <PaymentPage/>,
    }, 
    {
      path: "*",
      element: <ErrorPage/>,
    }
  ]);

  return <RouterProvider router={router} />
}

export default App
