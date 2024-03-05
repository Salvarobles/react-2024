import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootPage from "./Pages/RootPage";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import EditProductPage from "./Pages/EditProductPage";
import AddProductForm from "./Components/AddProductForm";
import ShowProductForm from "./Components/ShowProductForm";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/productos/:idproduct",
          element: <EditProductPage />,
        },
        {
          path: "/productos",
          element: <ShowProductForm />,
        },
        {
          path: "/insert",
          element: <AddProductForm/>,
        },
        {
          path: "/carrito",
          element: "",
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
