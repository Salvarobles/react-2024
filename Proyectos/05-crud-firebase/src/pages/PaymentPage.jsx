import React from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const PaymentPage = () => {
  const location = useLocation();
  const { state } = location;
  const totalStock = state ? state.stock : 0;



  const handlePay = (stock) => {
    const precio = totalStock*2;
    const precioIva = precio*1.21;

      Swal.fire({
        icon: "success",
        title: "Pagar",
        text: `El precio es ${precio}€ y precio con IVA es: ${precioIva}€`,
      });
  };
  
  return (<div className="flex flex-col w-20 justify-center mt-10">
    <h3>Total de stock: {totalStock}</h3>
    <button className="bg-pink-300 text-white font-bold py-1 px-2 rounded shadow hover:shadow-slate-500" onClick={handlePay}>
      Pagar
    </button>
  </div>);
};

export default PaymentPage;
