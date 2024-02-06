import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import About from "./Pages/About";
import LoginPage from "./Pages/LoginPage";
import RootPage from "./Pages/RootPage";
import ProtectedRoute from "./Component/utils/ProtectedRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          element: <ProtectedRoute isActive={false} redirect="/login"/>,
          children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
          ],
        },
      ],
    },
    { path: "/login", element: <LoginPage /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
