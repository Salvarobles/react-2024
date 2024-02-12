import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getProductoById } from "../firebase/productosApi";
import EditProductForm from "../components/EditProductForm";

const EditProductPage = () => {
  const { idproduct } = useParams();
  const [producto, setProducto] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    // hacemos una consulta a firebase para traerme el
    // documento de la idproducto
    const fetchProduct = async () => {
      try {
        const productoData = await getProductoById(idproduct);
        if (productoData) {
          setProducto(productoData);
        } else {
          navigate("/");
        }
      } catch (error) {
        console.log("Error fetching productos", error);
      }
    };
    if (idproduct){
      fetchProduct();
    } else {
      navigate("/");
    }

  }, [idproduct]);

  return (
    <div>
      <div className="w-5/6 mx-auto mt-10">
      {producto &&   <EditProductForm initialData={producto} />}
      </div>
      {/* <div>
        {loading ? (<Spinner />) :
          (<>
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
          </>)
        }
      </div> */}
    </div>
  );
};

export default EditProductPage;
