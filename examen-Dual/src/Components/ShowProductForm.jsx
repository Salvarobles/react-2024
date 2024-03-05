import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { deleteProducto, getProductos } from "../firebase/productosApi";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ShowProductForm = () => {
  const [loading, setLoading] = useState(false);
  const [productos, setProductos] = useState([]);
  const [stockTotal, setStockTotal] = useState(0);
  const [forceUpdate, setForceUpdate] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      const response = await Swal.fire({
        icon: "info",
        title: "Estas seguro?",
        text: "Accion no de podrá revertir",
        showCancelButton: true,
        confirmButtonColor: "green",
        cancelButtonColor: "red",
        confirmButtonText: "Si",
        cancelButtonText: "Cancelar",
      });
      if (response.isConfirmed) {
        await deleteProducto(id);
        setForceUpdate((prev)=>!prev)
      }
    } catch (error) {
      Swal.fire({
        icon: "Error",
        title: "Ha ocurrido un error",
        text: "Error elimando",
      });
    }
  };


  const handlePay = (stock) => {

    // navigate(`/payment/:${stock}`)
    navigate("/payment", {state: {stock}})
    

    // const precio = stock*2;
    // const precioIva = precio*1.21;

    //   Swal.fire({
    //     icon: "success",
    //     title: "Pagar",
    //     text: `El precio es ${precio}€ y precio con IVA es: ${precioIva}€`,
    //   });
  };

  const handleOrdenByStock = () => {  
    // Create a new array with the sorted products
    const sortedProductos = [...productos].sort((a, b) => b.stock - a.stock);
    // Update the state with the sorted array
    setProductos(sortedProductos);
  };

  const fetchShowProducts = async () => {
    try {
      const productosData = await getProductos();
      setProductos(productosData);
    } catch (error) {
      console.log("Error fetching productos", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShowProducts();
    setStockTotal(
      productos.reduce((acu, producto) => (acu += parseInt(producto.stock)), 0)
    );
  }, [forceUpdate]);

  return (
    <div className="w-2/3 mx-auto my-10">
      <h2 className="text-2xl font-semibold mb-4">Lista de Productos</h2>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-500 text-white">
              <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Nombre del Producto</th>
                <th className="py-2 px-4 border-b">Descripcion</th>
                <th onClick={handleOrdenByStock} className="py-2 px-4 border-b hover:cursor-pointer">Stock</th>
                <th className="py-2 px-4 border-b">Imagen</th>
                <th className="py-2 px-4 border-b">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto) => (
                <tr key={producto.id} className="border-b">
                  <td className="py-2 px-4">{producto.id}</td>
                  <td className="py-2 px-4">{producto.nombre}</td>
                  <td className="py-2 px-4">{producto.descripcion}</td>
                  <td className="py-2 px-4">{producto.stock}</td>
                  <td className="py-2 px-4">
                    <img
                      src={producto.url}
                      alt={producto.descripcion}
                      className="h-10 w-10 object-cover"
                    />
                  </td>

                  <td className="flex justify-center gap-2 py-2 px-4 ">
                    <Link to={`productos/${producto.id}`}>
                      <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-1 px-2 rounded shadow hover:shadow-slate-500">
                        ✏
                      </button>
                    </Link>

                    <button
                      className="bg-red-500 hover:bg-red-800 text-white font-bold py-1 px-2 rounded shadow hover:shadow-slate-500"
                      onClick={() => handleDelete(producto.id)}
                    >
                      🗑
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="py-2 px-4 mx-4">{stockTotal}</td>
                <td className="py-2 px-4 mx-4">
                  <button onClick={()=>handlePay(stockTotal)} className="bg-pink-300 text-white font-bold py-1 px-2 rounded shadow hover:shadow-slate-500">
                    Pagar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default ShowProductForm;
