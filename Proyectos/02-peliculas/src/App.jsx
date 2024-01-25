import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./pages/Error";
import RootMoviesLayout from "./pages/RootMoviesLayout";
import Home from "./pages/Home";
import MovieDetailsPage from "./pages/MovieDetailsPage";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootMoviesLayout />,
      errorElement: <Error />,
      // loader: () => {
      //   //fetch de datos.
      // },
      children: [
        { index: true , element: <Home /> },
        // { path: "usuarios", element: <Usuario /> },
        { path: "peliculas/:idPelicula", element: <MovieDetailsPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
