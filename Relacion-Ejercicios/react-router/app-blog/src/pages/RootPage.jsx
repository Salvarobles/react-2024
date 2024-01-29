import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

const RootPage = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default RootPage
