import { Outlet } from 'react-router-dom'
import Header from '../containers/Header'
import Footer from '../containers/Footer'

const RootPage = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Footer/>
    </>
  )
}

export default RootPage
