/**
 * @author Salvador Robles Gómez
 * Navbar: Contiene el componente de la barra de navegación con el logo (SVG), botones "Home",
 * "About", y "User".
 */

import { Link } from "react-router-dom";
import { useAuthContext } from "../context/useAuthContext";

const NavBar = () => {
  const { user, logout } = useAuthContext();
  return (
    <>
      <div className="flex flex-col">
        <div className="flex items-center justify-center gap-5 text-center mb-6 bg-gradient-to-r from-teal-500 via-blue-500 to-black-500 bg-clip-text text-transparent text-3xl font-black">
          <img
            src="../images/logoCompra.png"
            alt=""
            className="h-20 w-20 rounded-full"
          />
          Compras
        </div>
        <div className="border border-gray-300 py-3 flex gap-1 shadow-xl rounded-md justify-center ">
          <Link to="/">
            <div className="group relative px-4 cursor-pointer">
              <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 48 48"
                >
                  <path fill="#E8EAF6" d="M42 39L6 39 6 23 24 6 42 23z"></path>
                  <path
                    fill="#C5CAE9"
                    d="M39 21L34 16 34 9 39 9zM6 39H42V44H6z"
                  ></path>
                  <path
                    fill="#B71C1C"
                    d="M24 4.3L4 22.9 6 25.1 24 8.4 42 25.1 44 22.9z"
                  ></path>
                  <path fill="#D84315" d="M18 28H30V44H18z"></path>
                  <path fill="#01579B" d="M21 17H27V23H21z"></path>
                  <path
                    fill="#FF8A65"
                    d="M27.5,35.5c-0.3,0-0.5,0.2-0.5,0.5v2c0,0.3,0.2,0.5,0.5,0.5S28,38.3,28,38v-2C28,35.7,27.8,35.5,27.5,35.5z"
                  ></path>
                </svg>
              </div>
              <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                Home
              </span>
            </div>
          </Link>

          <Link to="/cart">
            <div className="group relative px-4 cursor-pointer">
              <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                </svg>
              </div>
              <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                Cart
              </span>
            </div>
          </Link>

          {!user && (
            <Link to="/loginpage">
              <div className="group relative px-4 cursor-pointer">
                <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
                  </svg>
                </div>
                <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                  Login
                </span>
              </div>
            </Link>
          )}

          {user && (
            <Link to="/user">
              <div className="group relative px-4 cursor-pointer">
                <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
                  <img src="./images/user.svg" alt="user" />
                </div>
                <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                  User
                </span>
              </div>
            </Link>
          )}

          {user && (
            <button
              className="w-20 group relative px-4 cursor-pointer"
              onClick={logout}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M320 32c0-9.9-4.5-19.2-12.3-25.2S289.8-1.4 280.2 1l-179.9 45C79 51.3 64 70.5 64 92.5V448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H96 288h32V480 32zM256 256c0 17.7-10.7 32-24 32s-24-14.3-24-32s10.7-32 24-32s24 14.3 24 32zm96-128h96V480c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H512V128c0-35.3-28.7-64-64-64H352v64z" />
              </svg>
              <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                Logout
              </span>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
