import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadProduct } from "../firebase/productosApi";
import Spinner from "../components/Spinner";

const EditProductPage = () => {
  const { idproduct } = useParams();
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchProduct = async () => {
    try {
      const productoData = await loadProduct(idproduct);
      setProducto(productoData);
    } catch (error) {
      console.log("Error fetching productos", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      <div>
        {loading && <Spinner /> }
        { !loading && 
          <>
            <form>
                <label htmlFor="">Nombre del Producto</label>
                <input type="text" name="name" id="name" value={producto.fields.nombre.stringValue} />
                <label htmlFor="">Descripcion del Producto</label>
                <input type="text" name="name" id="name" value={producto.fields.descripcion.stringValue} />
                <label htmlFor="">Stock</label>
                <input type="text" name="name" id="name" value={producto.fields.stock.stringValue} />
                <label htmlFor="">Url Image</label>
                <input type="text" name="name" id="name" value={producto.fields.url.stringValue} />
            </form>
          </>
        }
      </div>
    </div>
  );
};

export default EditProductPage;
