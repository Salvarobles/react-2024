import { useState } from "react";
import { useAuthContext } from "../context/useAuthContext";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../apis/usersApi";

const RegisterPage = () => {
  const [userForm, setUserForm] = useState({});
  const { login, error } = useAuthContext();
  const navigate = useNavigate();

  async function hanleSubmit(e) {
    e.preventDefault();
    const user = await addUser(userForm, navigate);
    login(user);
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div>{error}</div>
      <div className="max-w-md w-full bg-white rounded-lg shadow p-8">
        <Link
          to="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
        >
          <img
            className="w-12 h-12 mr-2"
            src="./images/logoCompra.png"
            alt="logo"
          />
          Salvador Robles - Compra
        </Link>
        <div className="p-6">
          <h1 className="text-xl font-bold leading-tight text-gray-900">
            Registro
          </h1>
          <form className="mt-6" action="#">
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Nombre de Usuario
              </label>
              <input
                type="text"
                name="username"
                id="username"
                onChange={(e) =>
                  setUserForm({
                    ...userForm,
                    username: e.target.value.trim().toLowerCase(),
                  })
                }
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Tu nombre de usuario"
                required=""
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Tu email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) =>
                  setUserForm({
                    ...userForm,
                    email: e.target.value.trim().toLowerCase(),
                  })
                }
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="name@example.com"
                required=""
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Contraseña
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) =>
                  setUserForm({
                    ...userForm,
                    password: e.target.value.trim().toLowerCase(),
                  })
                }
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="••••••••"
                required=""
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 border rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                  required=""
                />
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm text-gray-500"
                >
                  Recordar
                </label>
              </div>
              <Link className="text-sm font-medium text-blue-600 hover:underline">
                Contraseña olvidada?
              </Link>
            </div>
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-medium rounded-md text-sm py-2.5"
              onClick={hanleSubmit}
            >
              Registrarse
            </button>
            <p className="mt-4 text-sm text-gray-500">
              Ya tienes cuenta?{" "}
              <Link to="/loginpage">
                <Link
                  to="/login"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Iniciar Sesión
                </Link>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
