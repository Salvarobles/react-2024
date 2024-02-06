import { Outlet } from "react-router-dom";
import Header from "../containers/Header";
import Footer from "../containers/Footer";
const RootPage = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 bg-gradient-to-b from-gray-600 to-purple-300">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default RootPage;
