import { Link } from "react-router-dom";

const Usuarios = () => {
  return (
    <>
      <div className="text-3xl">Usuario</div>
      <div>
        <Link to="..">
          ir al Inicio
        </Link>
      </div>
    </>
  );
};

export default Usuarios;
