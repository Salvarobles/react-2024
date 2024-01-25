import { useParams } from "react-router-dom";

const UsuariosDetails = () => {
  const { idUser } = useParams();
  return (
    <>
      <div className=" text-3xl font-bold">UsuariosDetails</div>
      <p> el iduser es : {idUser} </p>
    </>
  );
};

export default UsuariosDetails;
