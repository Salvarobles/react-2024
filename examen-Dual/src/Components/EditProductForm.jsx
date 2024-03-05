import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editProduct } from "../firebase/productosApi";
import Swal from "sweetalert2";

const EditProductForm = ({ initialData }) => {
  const [formData, setFormData] = useState(initialData);

  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleGoback = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(e);
    try {
      //actualizar los datos
      await editProduct(initialData.id, formData);
      Swal.fire({
        icon: "success",
        title: "Actualizado!!",
        text: "Datos actualizados",
      });
    } catch (e) {
      console.error("Error submitting", e);
    }
  };

  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  return (
    <div>
      <div className="flex flex-col items-ceneter justify-center min-h-screen">
        <label className="text-5xl mt-10 mb-8">Editar formulario</label>
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 p-8 rounded shadow-lg max-w-xl w-full mx-auto"
        >
          <label className="block mb-4">
            <span className="text-gray-700">Nombre del producto:</span>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="mt-2 block w-full"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Descripcion:</span>
            <textarea
              type="text"
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              className="mt-2 block w-full"
            ></textarea>
          </label>

          <label className="block mb-4">
            <span className="text-gray-700">Stock:</span>
            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              className="mt-2 block w-full"
            />
          </label>

          <label className="block mb-4">
            <span className="text-gray-700">Url image:</span>
            <input
              type="text"
              name="url"
              value={formData.url}
              onChange={handleChange}
              className="mt-2 block w-full"
            />
          </label>
          <img className="w-20 h-20 mx-auto mb-4" src={formData.url} alt="" />
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-800"
            >
              Actualizar
            </button>
            <button
              onClick={handleGoback}
              className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-800"
            >
              Volver
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductForm;
