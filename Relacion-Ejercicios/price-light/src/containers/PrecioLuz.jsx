import { useEffect, useState } from "react";
import getPriceLight from "../api/luzApi";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";

const PrecioLuz = () => {
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const currentDate = new Date().toLocaleDateString();

  const handleShowCard = (e, id) => {
    e.preventDefault();
    navigate(`/precioluz/${id}`)
  };

  useEffect(() => {
    // Llamada a la función para obtener los precios
    try {
      getPriceLight().then((orderedArray) => {
        setPrices(orderedArray);
        setLoading(false);
      });
      
    } catch (error) {
      setLoading(true);
    }
  }, []);

  return (
    <div className="container mx-auto mt-5">
      <div className="bg-blue-100 p-4 mb-4 text-center">
        <h2 className="text-xl font-semibold text-blue-800">
          Precios de luz {currentDate}
        </h2>
      </div>
      

      {loading ? (
        <Spinner/>
      ) : (
        prices.map((price, index) => {
          let color;

          // Asigna colores según el rango de precios
          if (index < 6) {
            color = "green"; // 6 más baratos en verde
          } else if (index >= prices.length - 6) {
            color = "red"; // 6 más caros en rojo
          } else {
            color = "orange"; // El resto en naranja
          }

          return (
            <div
              key={price[0]}
              className={`flex justify-between items-center p-4 border-b`}
              style={{ color }}
            >
              <div>
                <p className="font-bold">{price[1].hour}</p>
                <p className="text-gray-500">{price[1].date}</p>
              </div>
              <button
                onClick={(e) => handleShowCard(e, price[1].hour)}
                className="bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700"
              >
                Ver tarjeta
              </button>
              <p className="font-bold text-xl">{price[1].price}€</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default PrecioLuz;
