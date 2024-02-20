import { Outlet } from 'react-router-dom'

const RootPage = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default RootPage
