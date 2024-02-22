import { useEffect, useState } from "react";
import getPriceLight from "../api/luzApi";

const Home = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    // Llamada a la función para obtener los precios
    getPriceLight().then((orderedArray) => {
      setPrices(orderedArray);
    });

  }, []); 
  
  return (
    <div>
    {prices.map((price) => (

      <p key={[...price[0]]}>{[...price[1].price + '']}</p>

    ))}
  </div>
  );
};

export default Home;
