/**
 * @author Salvador Robles Gómez
 * Navbar: Contiene el componente de la barra de navegación con el logo (SVG), botones "Home",
 * "About", y "User".
 */

import { Link } from "react-router-dom";
import { useAuthContext } from "../context/useAuthContext";

const NavBar = () => {
  const { logout } = useAuthContext();
  return (
    <>
      <div className="flex flex-col">
        <div className="flex items-center justify-center gap-5 text-center mb-6 bg-gradient-to-r from-teal-500 via-blue-500 to-black-500 bg-clip-text text-transparent text-3xl font-black">
          <img
            src="../images/logoLight.png"
            alt=""
            className="h-20 w-20 rounded-full"
          />
          Price Light
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

          <Link to="/about">
            <div className="group relative px-4 cursor-pointer">
              <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 200 200"
                >
                  <path
                    fill="#70bfff"
                    d="M161,28.4H39c-4.4,0-8,3.6-8,8v96c0,4.4,3.6,8,8,8h24.3v38l38-38H161c4.4,0,8-3.6,8-8v-96	C169,32,165.4,28.4,161,28.4z"
                  ></path>
                  <path
                    fill="none"
                    stroke="#40396e"
                    d="M161,28.4H39c-4.4,0-8,3.6-8,8v96c0,4.4,3.6,8,8,8h24.3v38l38-38H161c4.4,0,8-3.6,8-8v-96	C169,32,165.4,28.4,161,28.4z"
                  ></path>
                  <path
                    d="M67.3,195.4c-1.7,0-3.4-0.3-5-1c-4.9-2-8-6.7-8-12v-25H43c-11.6,0-21-9.4-21-21v-96c0-11.6,9.4-21,21-21h122 c11.6,0,21,9.4,21,21v96c0,11.6-9.4,21-21,21h-54.4l-34.2,34.2C74,194.1,70.7,195.4,67.3,195.4z"
                    opacity=".35"
                  ></path>
                  <path
                    fill="#f2f2f2"
                    d="M63.3,191.4c-1.7,0-3.4-0.3-5-1c-4.9-2-8-6.7-8-12v-25H39c-11.6,0-21-9.4-21-21v-96c0-11.6,9.4-21,21-21h122 c11.6,0,21,9.4,21,21v96c0,11.6-9.4,21-21,21h-54.4l-34.2,34.2C70,190.1,66.7,191.4,63.3,191.4z"
                  ></path>
                  <path
                    fill="#f2f2f2"
                    d="M100.1,62.1c-2.7,0-4.8-0.6-6.3-1.9c-1.5-1.3-2.2-3.1-2.2-5.4c0-2.4,0.7-4.2,2.2-5.5c1.5-1.3,3.6-1.9,6.3-1.9 c5.6,0,8.4,2.5,8.4,7.4C108.4,59.7,105.6,62.1,100.1,62.1z M100.1,119.4c-2.4,0-4.2-0.7-5.5-2.1c-1.3-1.4-1.9-3.4-1.9-5.9V78.1 c0-5.4,2.5-8.1,7.4-8.1c2.3,0,4.1,0.7,5.4,2.1c1.3,1.4,1.9,3.4,1.9,6v33.3c0,2.5-0.6,4.5-1.8,5.9 C104.3,118.7,102.4,119.4,100.1,119.4z"
                  ></path>
                  <path
                    fill="#70bfff"
                    d="M161,28.4H39c-4.4,0-8,3.6-8,8v96c0,4.4,3.6,8,8,8h24.3v38l38-38H161c4.4,0,8-3.6,8-8v-96 C169,32,165.4,28.4,161,28.4z"
                  ></path>
                  <path
                    fill="#40396e"
                    d="M63.3,181.4c-0.4,0-0.8-0.1-1.1-0.2c-1.1-0.5-1.9-1.6-1.9-2.8v-35H39c-6.1,0-11-4.9-11-11v-96 c0-6.1,4.9-11,11-11h122c6.1,0,11,4.9,11,11v96c0,6.1-4.9,11-11,11h-58.5l-37.1,37.1C64.8,181.1,64,181.4,63.3,181.4z M39,31.4 c-2.8,0-5,2.2-5,5v96c0,2.8,2.2,5,5,5h24.3c1.7,0,3,1.3,3,3v30.8l32.9-32.9c0.6-0.6,1.3-0.9,2.1-0.9H161c2.8,0,5-2.2,5-5v-96 c0-2.8-2.2-5-5-5H39z"
                  ></path>
                  <path
                    fill="#f2f2f2"
                    d="M100.1,62.1c-2.7,0-4.8-0.6-6.3-1.9c-1.5-1.3-2.2-3.1-2.2-5.4c0-2.4,0.7-4.2,2.2-5.5c1.5-1.3,3.6-1.9,6.3-1.9 c5.6,0,8.4,2.5,8.4,7.4C108.4,59.7,105.6,62.1,100.1,62.1z M100.1,119.4c-2.4,0-4.2-0.7-5.5-2.1c-1.3-1.4-1.9-3.4-1.9-5.9V78.1 c0-5.4,2.5-8.1,7.4-8.1c2.3,0,4.1,0.7,5.4,2.1c1.3,1.4,1.9,3.4,1.9,6v33.3c0,2.5-0.6,4.5-1.8,5.9 C104.3,118.7,102.4,119.4,100.1,119.4z"
                  ></path>
                </svg>
              </div>
              <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                About
              </span>
            </div>
          </Link>
          <Link to="/user">
            <div className="group relative px-4 cursor-pointer">
              <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
                <img src="../images/user.svg" alt="user" />
              </div>
              <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                User
              </span>
            </div>
          </Link>
          <button className="w-12" onClick={logout}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M320 32c0-9.9-4.5-19.2-12.3-25.2S289.8-1.4 280.2 1l-179.9 45C79 51.3 64 70.5 64 92.5V448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H96 288h32V480 32zM256 256c0 17.7-10.7 32-24 32s-24-14.3-24-32s10.7-32 24-32s24 14.3 24 32zm96-128h96V480c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H512V128c0-35.3-28.7-64-64-64H352v64z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
