import { RouterProvider, createBrowserRouter } from "react-router-dom";
import EditProductPage from "./pages/EditProductPage";
import PaymentPage from "./pages/PaymentPage";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import RootPage from "./pages/RootPage";
import ProtectedRoute from "./components/utils/ProtectedRoute";
import Home from "./pages/Home";
import {AuthProvider} from "./context/AuthProvider";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          element: <ProtectedRoute isActive={true} redirect="/login" />,
          children: [
            { index: true, element: <Home /> },
            {
              path: "/productos/:idproduct",
              element: <EditProductPage />,
            },
            {
              path: "/payment",
              element: <PaymentPage />,
            },
          ],
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />;
    </AuthProvider>
  );
}

export default App;
