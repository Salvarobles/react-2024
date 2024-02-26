import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootPage from "./pages/RootPage";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import ProtectedRoute from "./components/utils/ProtectedRoute";
import Cart from "./pages/Cart";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./context/useAuthContext";
import User from "./pages/User";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/product/:id",
          element: <ProductPage />,
        },
        {
          element: <ProtectedRoute redirect="/loginPage" />,
          children: [
            { path: "/cart", element: <Cart /> },
            { path: "/user", element: <User /> },
          ],
        },
      ],
    },
    {
      path: "/loginpage",
      element: <LoginPage />,
    },
    {
      path: "/registerpage",
      element: <RegisterPage />,
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
