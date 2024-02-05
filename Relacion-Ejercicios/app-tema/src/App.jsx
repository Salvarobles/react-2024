import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './pages/RootLayout';
import ErrorElement from './pages/ErrorElement';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout/>,
      errorElement: <ErrorElement/>,
      children: [
        {index: true, element: <Home/>},
        {path: 'acerca', element: <About/>},
        {path: 'contact', element: <Contact/>},
      ],
    }
  ])

  return <RouterProvider router={router}/>;
}

export default App
