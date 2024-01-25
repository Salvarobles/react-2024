import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inicio from "./components/react-router-dom-ejemplo/Inicio";
import Usuario from "./components/react-router-dom-ejemplo/Usuarios";
import ErrorPage from "./components/react-router-dom-ejemplo/pages/ErrorPage";
import RootLayout from "./components/react-router-dom-ejemplo/pages/RootLayout";
import UsuariosDetails from "./components/react-router-dom-ejemplo/pages/UsuariosDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      // loader: () => {
      //   //fetch de datos.
      // },
      children: [
        { index: true , element: <Inicio /> },
        { path: "usuarios", element: <Usuario /> },
        { path: "usuarios/:idUser", element: <UsuariosDetails /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
