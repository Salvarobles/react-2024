import { RouterProvider } from "react-router"
import { createBrowserRouter } from "react-router-dom"
import Inicio from "./pages/Inicio"
import ErrorPage from "./pages/ErrorPage"
import RootPage from "./pages/RootPage"
import PostSingle from "./pages/PostSingle"


function App() {
  const router = createBrowserRouter([
    {
      path:  '/',
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        {index: true, element: <Inicio />},
        {path: "/post/:idPost", element: <PostSingle/>}
      ]
    }
  ])

  return <RouterProvider router={router}/>
}

export default App
