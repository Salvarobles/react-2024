import { useEffect, useState } from "react";

const stateInicial = {
  with: window.innerWidth,
  height: window.innerHeight,
};
const ResizeListener = () => {
  const [windowsSize, setWindowsSize] = useState(stateInicial);

  useEffect(() => {
    function handleResize() {
      setWindowsSize({ with: window.innerWidth, height: window.innerHeight });
    }
    // agregi un event listener para el evento de cambio de la ventana
    window.addEventListener("resize", handleResize);
    return () => {
        // elimino el evento listener para evitar la fuga de memoria
     window.removeEventListener("resize", handleResize); 
    }
  }, []);

  return (
    <div>
      <p>
        El tamaño de la ventana es: {windowsSize.with} x {windowsSize.height}
      </p>
    </div>
  );
};

export default ResizeListener;
