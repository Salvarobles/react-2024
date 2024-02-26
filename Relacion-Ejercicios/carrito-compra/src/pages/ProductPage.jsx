import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../apis/productApi";
import Spinner from "../components/Spinner";
import { useAuthContext } from "../context/useAuthContext";
const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { user } = useAuthContext();

  const handleBuyButtonClick = () => {
    // Aquí puedes agregar la lógica para procesar la compra
    // Puedes redirigir a una página de pago, mostrar un modal, etc.
    console.log("Compra realizada:", product.title);
  };

  useEffect(() => {
    getProductById(id).then((product) => {
      setProduct(product);
      setLoading(false);
    });
  }, [id]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl my-8 shadow-md">
          <img
            className="object-cover object-center w-full h-64"
            src={product.image}
            alt={product.title}
          />

          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-800">
              {product.title}
            </h2>
            <p className="text-sm text-gray-500 mb-2">{product.category}</p>
            <p className="text-gray-700">{product.description}</p>

            <div className="mt-4 flex items-center justify-between">
              <div className="text-xl font-bold text-indigo-600">
                ${product.price}
              </div>

              <div className="flex items-center">
                <div className="text-yellow-500 mr-1">
                  {product.rating.rate}
                </div>
                <div className="text-gray-500">
                  {product.rating.count} reviews
                </div>
              </div>
            </div>
            {user && (
              <button
                onClick={handleBuyButtonClick}
                className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:shadow-outline-indigo active:bg-indigo-800"
              >
                Comprar
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPage;
