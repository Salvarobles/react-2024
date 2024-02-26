import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/useAuthContext";

const CardProduct = ({ id, title, price, image }) => {

  const producto = { id, title, price, image };
  const { user, añadirCarrito } = useAuthContext();
  const navigate = useNavigate()

  const handleShowProduct = (e) => {
    e.preventDefault;
    navigate(`/product/${id}`)
  }

  return (
    <div className="bg-white max-w-xs mx-auto rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105 my-4">
      <img src={image} alt="Product" className="w-full h-48 object-cover" />
      <div className="px-6 py-4">
        <div className="font-semibold text-xl mb-3 overflow-hidden overflow-ellipsis h-14">
          {title}
        </div>
        <p className="text-gray-700 text-lg">${price.toFixed(2)}</p>
      </div>
      <div className="flex justify-between items-center bg-gray-100 py-2">
        {user && (
          <button onClick={(e)=> añadirCarrito(e, producto)} className="bg-blue-500 text-white px-4 py-2 rounded-full focus:outline-none focus:shadow-outline-blue hover:bg-blue-600 transition duration-300">
            Add to Cart
          </button>
        )}
          <button onClick={handleShowProduct} className="bg-gray-500 text-white px-4 py-2 rounded-full focus:outline-none focus:shadow-outline-gray hover:bg-gray-600 transition duration-300">
            Ver Más
          </button>
      </div>
    </div>
  );
};

export default CardProduct;
