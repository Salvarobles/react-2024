import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootPage from "./pages/RootPage";
import ErrorElement from "./pages/ErrorElement";
import ProtectedRoute from "./components/utils/ProtectedRoute";
import Home from "./pages/Home";
import PrecioLuz from "./containers/PrecioLuz";
import CardPrecioLuz from "./pages/CardPrecioLuz";
import Login from "./pages/Login";
import { AuthProvider } from "./context/useAuthContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorElement />,
      children: [
        {
          element: <ProtectedRoute redirect="/login" />,
          children: [
            { index: true, element: <Home /> },
            { path: "/precioluz/:id", element: <CardPrecioLuz /> },
          ],
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />;
    </AuthProvider>
  );
}

export default App;
