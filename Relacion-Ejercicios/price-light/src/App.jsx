import { createBrowserRouter } from "react-router-dom";
import RootPage from "./pages/RootPage";
import ErrorElement from "./pages/ErrorElement";

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
            { path: "/precioluz", element: <PrecioLuz /> },
            { path: "/precioluz:id", element: <CardPrecioLuz /> },
          ],
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <></>;
}

export default App;
