import { useState } from "react";

const initialSatate = {
    name: '',
    email: '',
    password: '',
};
function RegistrarFormulario() {
    // hooks
  const [formData, setFormData] = useState(initialSatate)

  // funciones

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Los datos son:", formData);
  }

  function handleInputChange(e){
    e.preventDefault();
    const {name, value} = e.target;
    setFormData({...formData, [name]:value});
}

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Nombre:
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
            </label>
        </div>
        <div>
            <label>email:
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
            </label>
        </div>
        <div>
            <label>password:
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
            </label>
        </div>
        <button type="submit">Registrar Usuario</button>
    </form>
  )
}

export default RegistrarFormulario