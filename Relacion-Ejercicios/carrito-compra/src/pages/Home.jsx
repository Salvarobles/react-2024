import { useState } from "react";
import CardProduct from "../components/CardProduct";
import { useEffect } from "react";
import {getProducts} from "../apis/productApi";
import Spinner from "../components/Spinner";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      getProducts().then((products) => {
        setProducts(products);
        setLoading(false);
      });
    } catch (error) {
      setLoading(true);
    }
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ml-2">
      {loading ? (
        <Spinner />
      ) : (
        products.map((product) => (
          <CardProduct
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))
      )}
    </div>
  );
};

export default Home;
