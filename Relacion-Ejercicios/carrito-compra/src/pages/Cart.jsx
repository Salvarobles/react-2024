import { useEffect } from "react";
import { useAuthContext } from "../context/useAuthContext";

const Cart = () => {
  const { carrito, eliminarCarrito } = useAuthContext();

  useEffect(() => {
    console.log(carrito);
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-semibold mb-4">Your Cart</h2>
      {carrito.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {carrito.map((producto) => (
            <li
              key={producto.id}
              className="bg-white p-4 rounded-md shadow-md transition-transform transform hover:scale-105"
            >
              <img
                src={producto.image}
                alt={producto.title}
                className="w-full h-32 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{producto.title}</h3>
              <p className="text-gray-500">${producto.price.toFixed(2)}</p>
              <button
                onClick={(e)=>eliminarCarrito(e, producto.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-full focus:outline-none focus:shadow-outline-gray hover:bg-gray-600 transition duration-300"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
