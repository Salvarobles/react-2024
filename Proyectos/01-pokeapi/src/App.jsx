import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user" />
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
