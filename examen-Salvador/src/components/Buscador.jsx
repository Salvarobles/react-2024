import { useEffect, useRef } from "react";
import Swal from "sweetalert2";

const Buscador = ({ handleAddUrl }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    if (inputRef.current.value) {
        handleAddUrl(inputRef.current.value);
    } else {
        Swal.fire({
            icon: "error",
            title: "Oyee tiene darme una url",
          });
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="flex items-center justify-center mt-6">
      <input
        ref={inputRef}
        type="text"
        name="inputname"
        className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-purple-400 focus:ring-purple-700 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 shadow-md focus:shadow-lg focus:shadow-purple-400"
        placeholder="Ingrese un nombre"
      />
      <button
        onClick={handleSearch}
        className="bg-purple-700 text-white border border-purple-400 border-b-4 font-medium overflow-hidden relative m-3 px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
      >
        <span className="bg-purple-400 shadow-purple-800 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
        Buscar
      </button>
    </div>
  );
};

export default Buscador;
