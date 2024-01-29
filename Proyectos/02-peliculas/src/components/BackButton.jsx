import { useNavigate } from "react-router-dom"

const BackButton = () => {
    const navigate = useNavigate();
    function handleClickBack(){
        navigate("..");
    }
  return (
    <button className="bg-gray-800 text-white py-2 px-4" onClick={handleClickBack}>Volver</button>
  )
}

export default BackButton