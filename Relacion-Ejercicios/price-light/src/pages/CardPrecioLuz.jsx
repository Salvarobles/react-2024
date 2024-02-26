import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPriceById } from "../api/luzApi";
import Spinner from "../components/Spinner";

const CardPrecioLuz = () => {
  const [card, setCard] = useState({});
  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPriceById(id).then((price) => {
      setCard(price);
      setLoading(false);
    });

    setLoading(true);
  }, [id]);

  return (
    loading ? (
      <Spinner />
    ) : (
      <div className="flex justify-center items-start mt-10">
        <div className="bg-gray-100 p-4 rounded-md shadow-md text-center mt-20">
          <h2 className="text-2xl font-semibold">{card.hour}</h2>
          <p className="text-gray-500">{card.date}</p>
          <p
            className={`text-sm mt-2 ${
              card["is-cheap"] ? "text-green-500" : ""
            } ${card["is-under-avg"] ? "text-blue-500" : ""}`}
          >
            {card["is-cheap"] && "¡Super Barato! "}
            {card["is-under-avg"] && "Por debajo del promedio"}
          </p>
          <p className="text-sm mt-2">Mercado: {card.market}</p>
          <p className="text-lg mt-2">
            Precio: {card.price} {card.units}
          </p>
        </div>
      </div>
    )
    
  );
};

export default CardPrecioLuz;
