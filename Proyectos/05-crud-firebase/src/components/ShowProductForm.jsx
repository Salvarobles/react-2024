import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { deleteProducto, getProductos } from "../firebase/productosApi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ShowProductForm = ({ updateProduct }) => {
  const [loading, setLoading] = useState(false);
  const [productos, setProductos] = useState([]);

  const handleDelete = async (id) => {
    try {
      const response = await Swal.fire({
        icon: "Warning",
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
        updateProduct();
      }
    } catch (error) {
      Swal.fire({
        icon: "Error",
        title: "Ha ocurrido un error",
        text: "Error elimando",
      });
    }
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
  }, [updateProduct]);

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
                <th className="py-2 px-4 border-b">Stock</th>
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
                    <Link>
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
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default ShowProductForm;
