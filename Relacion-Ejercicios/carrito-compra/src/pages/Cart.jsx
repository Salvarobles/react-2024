import { useAuthContext } from "../context/useAuthContext";

const Cart = () => {
  const { carrito, eliminarCarrito } = useAuthContext();

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-semibold mb-4">Your Cart</h2>
      {carrito.length === 0 ? (
        <p className="text-gray-600">Tu carrito esta vacio. Visita la tienda.</p>
      ) : (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {carrito.map((producto) => (
            <li
              key={producto.producto.id}
              className="bg-white p-4 rounded-md shadow-md transition-transform transform hover:scale-105"
            >
              <img
                src={producto.producto.image}
                alt={producto.producto.title}
                className="w-full h-32 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{producto.producto.title}</h3>
              <p className="text-gray-500">${producto.producto.price.toFixed(2)}</p>
              <p className="text-gray-500">Cantidad: {producto.quantity}</p>
              <button
                onClick={(e)=>eliminarCarrito(e, producto.producto.id)}
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
